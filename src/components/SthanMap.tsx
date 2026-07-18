/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { SthanDarshanPlace } from '../types';
import { defaultSthanPlaces } from '../data/sthanDarshanDefault';
import { sthanPresets } from '../data/sthanPresets';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import {
  MapPin, Compass, Search, Navigation, Info, ExternalLink, RefreshCw, Layers,
  Star, Share2, Copy, Play, Pause, Image, Video, Music, BookOpen, ChevronLeft,
  ChevronRight, X, ArrowRight, Download, Heart, AlertTriangle, Maximize2, Minimize2
} from 'lucide-react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  Polyline,
  useMap
} from "react-leaflet";

// @ts-ignore
import MarkerClusterGroup from 'react-leaflet-cluster';

import L from "leaflet";

// Fix standard Leaflet icon paths in React / Webpack builds
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {},
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

const enrichPlace = (p: SthanDarshanPlace): SthanDarshanPlace => {
  return {
    ...p,
    architecture: p.architecture || (
      p.id === 'sthan_1' ? 'हे मंदिर हेमाडपंती स्थापत्य शैलीत बांधलेले असून यात कोरीव दगडी खांब, भव्य सभामंडप आणि नक्षीकाम केलेले खांब आहेत. गर्भगृहाची रचना अत्यंत शांतता आणि चैतन्य प्रदान करणारी आहे.' :
      p.id === 'sthan_2' ? 'गोदावरी काठावरील चक्रधर स्वामींचे हे मंदिर लाकडी नक्षीकाम आणि पाषाण रचना यांचा सुरेख संगम आहे. येथील जुन्या खांबांवर सुंदर कोरीवकाम आढळते.' :
      p.id === 'sthan_3' ? 'डोमेग्राम येथील वास्तू साधी पण अत्यंत पवित्र आहे. जुन्या पद्धतीचे लाकडी वाडे व दगडी मंदिर यामुळे याला प्राचीन आध्यात्मिक रूप लाभले आहे.' :
      p.id === 'sthan_4' ? 'येथे मंदिराची रचना डोंगरावरील नैसर्गिक गुहा आणि दगडी पायऱ्यांच्या स्वरूपात असून परिसर अत्यंत नैसर्गिक आणि वनश्रीने नटलेला आहे.' :
      p.id === 'sthan_5' ? 'माहूरगड येथील श्री दत्त मंदिर डोंगराच्या कुशीत वसलेले असून प्राचीन पाषाण बांधकामात गर्भगृह व शिखर बांधले गेले आहे.' :
      'येथील मंदिर प्राचीन स्थापत्यकलेचा उत्कृष्ट नमुना असून यात दगडी गाभारा, प्रदक्षिणा पथ आणि भव्य सभामंडप समाविष्ट आहे.'
    ),
    festivals: p.festivals || (
      p.id === 'sthan_1' ? 'श्री गोविंदप्रभू अवतार दिनोत्सव, श्री दत्त जयंती, कृष्ण जन्माष्टमी, गोपाळकाला आणि वार्षिक महायात्रा सोहळा.' :
      p.id === 'sthan_2' ? 'श्री चक्रधर स्वामी अवतार दिनोत्सव, गोदावरी महाआरती, नागपंचमी आणि गुरुपौर्णिमा उत्सव.' :
      p.id === 'sthan_3' ? 'चक्रधर स्वामी जयंती, वार्षिक नामस्मरण सप्ताह, आषाढी सोहळा आणि महानुभाव संप्रदाय सत्संग मेळावा.' :
      p.id === 'sthan_4' ? 'वार्षिक महापूजा, दत्त जयंती उत्सव, आणि श्रावण महिन्यातील विशेष नामजप साधना सप्ताह.' :
      p.id === 'sthan_5' ? 'श्री दत्त जयंती उत्सव (भव्य यात्रा), गुरुपौर्णिमा उत्सव, आणि दसरा-विजयादशमी उत्सव.' :
      'वार्षिक अवतार दिनोत्सव, दत्त जयंती, गोपाळकाला, आषाढी एकादशी उत्सव आणि अखंड नामजप सप्ताह सोहळा.'
    ),
    darshanTiming: p.darshanTiming || 'सकाळी ५:३० ते रात्री ९:०० (आरती वेळ: सकाळी ६:०० व संध्याकाळी ७:३०)',
    contactNumber: p.contactNumber || '+91 94228 15234 / +91 88884 92105',
    website: p.website || 'https://mahanubhavvishwa.org',
    granthRefs: p.granthRefs || (
      p.id === 'sthan_1' ? [
        { bookName: 'लीळाचरित्र', chapter: 'एकांक लीळा ४२ (गोविंदप्रभू प्रस्थान)', pageNumber: '७५' },
        { bookName: 'सूत्रपाठ', chapter: 'विचारसूत्र १२ (अवतारी नाम)', pageNumber: '२४' },
        { bookName: 'स्थानपोथी', chapter: 'ऋद्धपूर वर्णन', pageNumber: '१२' }
      ] :
      p.id === 'sthan_2' ? [
        { bookName: 'लीळाचरित्र', chapter: 'पूर्वार्ध लीळा १०१ (नागदेव भेट)', pageNumber: '१४२' },
        { bookName: 'सूत्रपाठ', chapter: 'आचारसूत्र ८', pageNumber: '३२' },
        { bookName: 'स्थानपोथी', chapter: 'पैठण दर्शन', pageNumber: '२७' }
      ] :
      p.id === 'sthan_3' ? [
        { bookName: 'लीळाचरित्र', chapter: 'उत्तरार्ध लीळा ५४', pageNumber: '११०' },
        { bookName: 'स्थानपोथी', chapter: 'डोमेग्राम वर्णन', pageNumber: '४५' }
      ] :
      p.id === 'sthan_4' ? [
        { bookName: 'लीळाचरित्र', chapter: 'एकांक लीळा ५६ (अरण्याचा निवास)', pageNumber: '९०' },
        { bookName: 'सूत्रपाठ', chapter: 'आचारसूत्र ४', pageNumber: '१५' },
        { bookName: 'स्थानपोथी', chapter: 'जाळीचा देव वर्णन', pageNumber: '३६' }
      ] :
      p.id === 'sthan_5' ? [
        { bookName: 'लीळाचरित्र', chapter: 'एकांक लीळा १ (दत्तात्रेय प्रभू भेट)', pageNumber: '५' },
        { bookName: 'स्थानपोथी', chapter: 'माहूरगड वर्णन', pageNumber: '८' }
      ] :
      [
        { bookName: 'लीळाचरित्र', chapter: 'उत्तरार्ध लीळा ७२', pageNumber: '१५६' },
        { bookName: 'स्थानपोथी', chapter: 'पवित्र स्थान दर्शन', pageNumber: '१९' }
      ]
    )
  };
};

interface SthanMapProps {
  lang?: 'hi' | 'mr' | 'en';
  onSelectPlaceExternal?: (place: SthanDarshanPlace) => void;
}

// -------------------------------------------------------------
// CUSTOM SUB-COMPONENT: AudioPlayer
// -------------------------------------------------------------
const AudioPlayer = ({ src, lang, showToast }: { src: string; lang: 'hi' | 'mr' | 'en'; showToast: (msg: string) => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setSpeed(1);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.playbackRate = 1;
    }
  }, [src]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error('Audio play failed:', e));
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
      setCurrentTime(val);
    }
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSpeed = parseFloat(e.target.value);
    setSpeed(newSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
    }
  };

  const handleDownloadAudio = async () => {
    try {
      showToast(lang === 'mr' ? 'ऑडिओ डाउनलोड होत आहे...' : 'ऑडियो डाउनलोड हो रहा है...');
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = src.substring(src.lastIndexOf('/') + 1) || 'sthan_audio.mp3';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Download audio failed, opening link instead:', e);
      window.open(src, '_blank');
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || !isFinite(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50/70 p-4 rounded-2xl border border-saffron-100 mt-5">
      <div className="flex justify-between items-center mb-2.5">
        <h4 className="text-xs font-bold text-saffron-800 uppercase tracking-wider flex items-center gap-2">
          <Music className="w-4 h-4 text-saffron-600 animate-pulse" />
          {lang === 'mr' ? '🔊 स्थान माहिती ऐका (Audio Guide)' : '🔊 स्थान जानकारी ऑडियो'}
        </h4>
        <div className="flex items-center gap-2">
          {/* Speed Select */}
          <div className="flex items-center gap-1 bg-white border border-saffron-200 rounded-lg px-1.5 py-0.5 text-[10px] text-gray-700">
            <span className="font-sans text-[9px] text-gray-400 font-semibold uppercase">Speed:</span>
            <select
              value={speed}
              onChange={handleSpeedChange}
              className="bg-transparent border-none font-bold text-gray-800 focus:ring-0 outline-none cursor-pointer"
            >
              <option value="0.5">0.5x</option>
              <option value="0.75">0.75x</option>
              <option value="1">1.0x</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2.0x</option>
            </select>
          </div>
          {/* Download Audio Button */}
          <button
            onClick={handleDownloadAudio}
            className="p-1.5 rounded-lg bg-white border border-saffron-200 text-saffron-700 hover:bg-saffron-50 transition-all cursor-pointer"
            title={lang === 'mr' ? 'ऑडिओ डाउनलोड करा' : 'ऑडियो डाउनलोड करें'}
          >
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={src}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-saffron-600 hover:bg-saffron-700 text-white flex items-center justify-center shadow-md transition-all active:scale-95 shrink-0"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>

        <div className="flex-1">
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1.5 bg-gray-200 accent-saffron-600 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SthanMap({ lang = 'mr', onSelectPlaceExternal }: SthanMapProps) {
  const [places, setPlaces] = useState<SthanDarshanPlace[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<SthanDarshanPlace | null>(null);

  // Filtering states
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [mapType, setMapType] =
        useState<'street' | 'satellite'>('street');

  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [nearbyRange, setNearbyRange] = useState<'all' | '5' | '10' | '25' | '50'>('all');
  const [mapCenter, setMapCenter] = useState<{lat: number, lng: number}>({lat: 19.4, lng: 76.2});
  const [mapZoom, setMapZoom] = useState<number>(7);
  const [panToUserTrigger, setPanToUserTrigger] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Navigation platform selector
  const [showNavSelector, setShowNavSelector] = useState(false);
  const [navPlace, setNavPlace] = useState<SthanDarshanPlace | null>(null);
  

  // Intercept Google Maps Auth failures and unhandled script errors
  

  // Favourites state
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Yatra list state
  const [yatraList, setYatraList] = useState<string[]>([]);

  // Toast overlay
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Gallery active index for fullscreen lightbox viewer
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Form/Modal states for adding new places
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [submittingPlace, setSubmittingPlace] = useState(false);
  const [newPlaceFormData, setNewPlaceFormData] = useState({
    number: '',
    title: '',
    titleEn: '',
    district: '',
    taluka: '',
    village: '',
    latitude: '19.0',
    longitude: '75.0',
    content: '',
    explanation: '',
    darshanTiming: 'सकाळी ५:३० ते रात्री ९:००',
    contactNumber: '',
    spiritualImportance: '',
    architecture: '',
    festivals: '',
  });

  // Fullscreen support
  const toggleFullscreen = () => {
    const mapElement = document.querySelector('.leaflet-container');
    if (mapElement) {
      if (!document.fullscreenElement) {
        mapElement.requestFullscreen().then(() => {
          setIsFullscreen(true);
        }).catch(err => {
          console.error("Fullscreen error:", err);
        });
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const getMarkerIcon = (isSelected: boolean, isSearchingMatch: boolean) => {
    const bounceClass = (isSelected || isSearchingMatch) ? 'marker-bounce' : '';
    const color = isSelected ? '#ea580c' : '#f59e0b'; // Bhagwa/Saffron

    const svgHtml = `
      <div class="${bounceClass}" style="transform-origin: bottom center; filter: drop-shadow(0px 3px 4px rgba(0,0,0,0.35));">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" style="width: 32px; height: 32px;">
          <!-- Bhagwa (Saffron Flag Pin) -->
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          <circle cx="12" cy="9" r="2.5" fill="white" />
        </svg>
      </div>
    `;

    return L.divIcon({
      html: svgHtml,
      className: 'bg-transparent border-none',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Load favorites from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('mahanubhav_sthan_favorites');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed loading favorites from local storage:', e);
    }
  }, []);

  // Load and sync Yatra list from local storage
  useEffect(() => {
    const loadYatra = () => {
      try {
        const saved = localStorage.getItem('mahanubhav_my_yatra');
        if (saved) {
          setYatraList(JSON.parse(saved));
        } else {
          setYatraList([]);
        }
      } catch (e) {
        console.error('Failed loading yatra from local storage:', e);
      }
    };

    loadYatra();
    window.addEventListener('yatra-updated', loadYatra);
    return () => {
      window.removeEventListener('yatra-updated', loadYatra);
    };
  }, []);

  const toggleFavorite = (id: string) => {
    let next: string[];
    if (favorites.includes(id)) {
      next = favorites.filter(f => f !== id);
      showToast(lang === 'mr' ? 'आवडीच्या यादीतून काढले!' : lang === 'hi' ? 'पसंदीदा सूची से हटाया गया!' : 'Removed from Favourites!');
    } else {
      next = [...favorites, id];
      showToast(lang === 'mr' ? 'आवडीच्या यादीत जोडले!' : lang === 'hi' ? 'पसंदीदा सूची में जोड़ा गया!' : 'Added to Favourites!');
    }
    setFavorites(next);
    localStorage.setItem('mahanubhav_sthan_favorites', JSON.stringify(next));
  };

  // Copy coordinates to clipboard
  const handleCopyCoordinates = (p: SthanDarshanPlace) => {
    const text = `${p.latitude.toFixed(6)}, ${p.longitude.toFixed(6)}`;
    navigator.clipboard.writeText(text);
    showToast(lang === 'mr' ? 'भौगोलिक गुणक (Coordinates) कॉपी झाले!' : 'Coordinates copied!');
  };

  // Generate formatted text for sharing
  const handleSharePlace = (p: SthanDarshanPlace) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${p.latitude},${p.longitude}`;
    const shareText = `🚩 *${p.title}* (${p.titleEn || ''})\n\n` +
      `📖 *इतिहास व महत्त्व*:\n${p.history || p.content}\n\n` +
      `📍 *पत्ता*: ${p.village ? p.village + ', ' : ''}${p.taluka ? p.taluka + ', ' : ''}${p.district ? p.district + ', ' : ''}${p.state || ''}\n` +
      `📍 *GPS Coordinates*: ${p.latitude}, ${p.longitude}\n` +
      `🌐 *Google Maps Link*: ${googleMapsUrl}`;

    if (navigator.share) {
      navigator.share({
        title: p.title,
        text: shareText,
        url: googleMapsUrl
      }).catch(() => {
        navigator.clipboard.writeText(shareText);
        showToast(lang === 'mr' ? 'माहिती क्लिपबोर्डवर कॉपी झाली!' : 'Information copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(shareText);
      showToast(lang === 'mr' ? 'माहिती क्लिपबोर्डवर कॉपी झाली!' : 'Information copied to clipboard!');
    }
  };

  // Add place to My Yatra list
  const handleAddToYatra = (p: SthanDarshanPlace) => {
    try {
      const saved = localStorage.getItem('mahanubhav_my_yatra');
      let currentList: string[] = [];
      if (saved) {
        currentList = JSON.parse(saved);
      }
      if (!currentList.includes(p.id)) {
        const updated = [...currentList, p.id];
        localStorage.setItem('mahanubhav_my_yatra', JSON.stringify(updated));
        setYatraList(updated);
        window.dispatchEvent(new Event('yatra-updated'));
        showToast(lang === 'mr' ? 'हे स्थान तुमच्या यात्रेत जोडले गेले.' : 'यह स्थान आपकी यात्रा में जोड़ा गया।');
      }
    } catch (e) {
      console.error('Failed saving to yatra list:', e);
    }
  };

  const handlePresetChange = (presetId: string) => {
    const selectedPreset = sthanPresets.find(p => p.id === presetId);
    if (selectedPreset) {
      const nextNum = places.length > 0 ? Math.max(...places.map(p => p.number || 0)) + 1 : 1;
      setNewPlaceFormData({
        number: String(selectedPreset.bookNumber || nextNum),
        title: selectedPreset.title,
        titleEn: selectedPreset.titleEn,
        district: selectedPreset.district,
        taluka: selectedPreset.taluka,
        village: selectedPreset.village,
        latitude: selectedPreset.latitude,
        longitude: selectedPreset.longitude,
        content: selectedPreset.content,
        explanation: selectedPreset.explanation,
        darshanTiming: 'सकाळी ५:३० ते रात्री ९:००',
        contactNumber: '',
        spiritualImportance: selectedPreset.spiritualImportance,
        architecture: '',
        festivals: '',
      });
      showToast(lang === 'mr' ? 'स्थानाची माहिती यशस्वीरित्या भरली गेली!' : 'स्थान की जानकारी सफलतापूर्वक भरी गई!');
    }
  };

  // Handle adding new place to sthan_darshan Firestore collection
  const handleAddNewPlaceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPlaceFormData.title || !newPlaceFormData.titleEn || !newPlaceFormData.district) {
      alert(lang === 'mr' ? 'कृपया सर्व आवश्यक फील्ड भरा.' : 'Please fill all required fields.');
      return;
    }

    try {
      setSubmittingPlace(true);
      const newId = 'sthan_' + Date.now();
      
      const numVal = parseInt(newPlaceFormData.number, 10);
      const latVal = parseFloat(newPlaceFormData.latitude);
      const lngVal = parseFloat(newPlaceFormData.longitude);

      if (isNaN(numVal)) {
        alert(lang === 'mr' ? 'क्रमांक वैध असावा.' : 'Number must be a valid integer.');
        setSubmittingPlace(false);
        return;
      }
      if (isNaN(latVal) || isNaN(lngVal)) {
        alert(lang === 'mr' ? 'अक्षांश आणि रेखांश वैध असावेत.' : 'Latitude and Longitude must be valid numbers.');
        setSubmittingPlace(false);
        return;
      }

      const newPlace: SthanDarshanPlace = {
        id: newId,
        number: numVal,
        title: newPlaceFormData.title.trim(),
        titleEn: newPlaceFormData.titleEn.trim(),
        district: newPlaceFormData.district.trim(),
        taluka: newPlaceFormData.taluka.trim() || undefined,
        village: newPlaceFormData.village.trim() || undefined,
        latitude: latVal,
        longitude: lngVal,
        content: newPlaceFormData.content.trim(),
        explanation: newPlaceFormData.explanation.trim() || undefined,
        darshanTiming: newPlaceFormData.darshanTiming.trim() || undefined,
        contactNumber: newPlaceFormData.contactNumber.trim() || undefined,
        spiritualImportance: newPlaceFormData.spiritualImportance.trim() || undefined,
        architecture: newPlaceFormData.architecture.trim() || undefined,
        festivals: newPlaceFormData.festivals.trim() || undefined,
        state: 'महाराष्ट्र',
      };

      await setDoc(doc(db, 'sthan_darshan', newId), newPlace);
      
      // Close modal and show toast
      setIsAddModalOpen(false);
      showToast(lang === 'mr' ? 'नवीन स्थान यशस्वीरित्या जोडले गेले!' : 'New place added successfully!');
      
      // Reload from firestore to update the list
      await loadDataFromFirestore();
      
      // Automatically select the newly added place
      setSelectedPlace(enrichPlace(newPlace));
    } catch (err) {
      console.error('Error adding new place:', err);
      try {
        handleFirestoreError(err, OperationType.WRITE, `sthan_darshan`);
      } catch (formattedError: any) {
        alert(lang === 'mr' ? 'त्रुटी: स्थान जतन करता आले नाही.' : 'Error: Failed to save location.');
      }
    } finally {
      setSubmittingPlace(false);
    }
  };

  // Download high-res Image file
  const handleDownloadImage = async (url: string) => {
    try {
      showToast(lang === 'mr' ? 'छायाचित्र डाउनलोड होत आहे...' : 'छवि डाउनलोड हो रही है...');
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = url.substring(url.lastIndexOf('/') + 1).split('?')[0] || 'sthan_image.jpg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch (e) {
      console.error('Download image failed, opening in new tab:', e);
      window.open(url, '_blank');
    }
  };

  // Dynamic nearby calculation relative to current coordinates
  const getNearbySpiritualPlaces = (current: SthanDarshanPlace, limit = 3) => {
    return places
      .filter(p => p.id !== current.id)
      .map(p => {
        const distance = getDistanceInKm(current.latitude, current.longitude, p.latitude, p.longitude);
        return { place: p, distance };
      })
      .sort((a, b) => a.distance - b.distance)
      .slice(0, limit);
  };

  // Helper to calculate distance in KM
  const getDistanceInKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Get current location handler
  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert(lang === 'mr' ? 'तुमच्या ब्राउझरमध्ये जिओलोकेशन सपोर्ट नाही.' : 'Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setUserLocation([lat, lng]);
        setMapCenter({ lat, lng });
        setMapZoom(14);
        setPanToUserTrigger(prev => prev + 1);
      },
      (error) => {
        console.error('Error getting location:', error);
        alert(lang === 'mr' ? 'स्थान मिळवण्यात अडचण आली. कृपया परवानगी तपासा.' : 'Failed to retrieve location. Please check permissions.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  // Fetch from Firebase Firestore with clean offline seed fallbacks
  const loadDataFromFirestore = async () => {
    const path = 'sthan_darshan';
    try {
      setLoading(true);
      let querySnapshot;
      try {
        querySnapshot = await getDocs(collection(db, path));
      } catch (err: any) {
        if (err?.message?.toLowerCase().includes('permission') || err?.code === 'permission-denied') {
          handleFirestoreError(err, OperationType.GET, path);
        }
        throw err;
      }

      if (querySnapshot.empty) {
        // Seed default places into Firestore
        console.log("Sthan Darshan collection is empty. Bootstrapping with default places...");
        const seedPromises = defaultSthanPlaces.map(async (p) => {
          try {
            await setDoc(doc(db, path, p.id), p);
          } catch (err: any) {
            if (err?.message?.toLowerCase().includes('permission') || err?.code === 'permission-denied') {
              handleFirestoreError(err, OperationType.WRITE, `${path}/${p.id}`);
            }
            throw err;
          }
        });
        await Promise.all(seedPromises);
        const enrichedDefaults = defaultSthanPlaces.map(p => enrichPlace(p));
        setPlaces(enrichedDefaults);
        if (enrichedDefaults.length > 0) {
          setSelectedPlace(enrichedDefaults[0]);
        }
      } else {
        const loaded: SthanDarshanPlace[] = [];
        const loadedIds = new Set<string>();
        querySnapshot.forEach((docSnap) => {
          const data = docSnap.data() as SthanDarshanPlace;
          loadedIds.add(data.id);
          const defaultPlace = defaultSthanPlaces.find(d => d.id === data.id || d.number === data.number);
          
          // Backfill/Merge Phase 3 fields from seed data in case of older Firestore documents
          const merged: SthanDarshanPlace = enrichPlace({
            ...defaultPlace,
            ...data,
            images: data.images || defaultPlace?.images || (data.photoUrl ? [data.photoUrl] : []),
            videos: data.videos || defaultPlace?.videos || [],
            audioUrl: data.audioUrl || defaultPlace?.audioUrl,
            spiritualImportance: data.spiritualImportance || defaultPlace?.spiritualImportance,
            history: data.history || defaultPlace?.history || data.content,
            leela: data.leela || defaultPlace?.leela,
            specialInfo: data.specialInfo || defaultPlace?.specialInfo,
            granthReferences: data.granthReferences || defaultPlace?.granthReferences,
            elevation: data.elevation || defaultPlace?.elevation
          });
          loaded.push(merged);
        });

        // Seed any missing default places so they appear in user's Firestore and are immediately loaded
        const missingDefaults = defaultSthanPlaces.filter(d => !loadedIds.has(d.id));
        if (missingDefaults.length > 0) {
          console.log(`Found ${missingDefaults.length} missing default places in Firestore. Backseeding...`);
          const backseedPromises = missingDefaults.map(async (p) => {
            try {
              await setDoc(doc(db, path, p.id), p);
            } catch (err) {
              console.error(`Failed to backseed ${p.id}:`, err);
            }
          });
          await Promise.all(backseedPromises);
          
          // Add them to loaded list
          missingDefaults.forEach(p => {
            loaded.push(enrichPlace(p));
          });
        }

        loaded.sort((a, b) => a.number - b.number);
        setPlaces(loaded);
        if (loaded.length > 0) {
          setSelectedPlace(loaded[0]);
        }
      }
    } catch (err) {
      console.error("Firestore loading error, falling back to local static defaults:", err);
      const enrichedDefaults = defaultSthanPlaces.map(p => enrichPlace(p));
      setPlaces(enrichedDefaults);
      if (enrichedDefaults.length > 0) {
        setSelectedPlace(enrichedDefaults[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDataFromFirestore();
  }, []);

  // Sync to parent/external callback if needed
  useEffect(() => {
    if (selectedPlace && onSelectPlaceExternal) {
      onSelectPlaceExternal(selectedPlace);
    }
  }, [selectedPlace, onSelectPlaceExternal]);

  // Get list of unique districts for filtering
  const availableDistricts = React.useMemo(() => {
    return Array.from(new Set(places.map(p => p.district).filter(Boolean))) as string[];
  }, [places]);

  // Filtered places
  const filteredPlaces = React.useMemo(() => {
    return places.filter(p => {
      if (showOnlyFavorites && !favorites.includes(p.id)) {
        return false;
      }

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = query === '' ||
                            p.title.toLowerCase().includes(query) ||
                            (p.titleEn && p.titleEn.toLowerCase().includes(query)) ||
                            p.content.toLowerCase().includes(query) ||
                            (p.state && p.state.toLowerCase().includes(query)) ||
                            (p.district && p.district.toLowerCase().includes(query)) ||
                            (p.taluka && p.taluka.toLowerCase().includes(query)) ||
                            (p.village && p.village.toLowerCase().includes(query));

      const matchesDistrict = selectedDistrict === 'all' || p.district === selectedDistrict;

      let matchesNearby = true;
      if (userLocation && nearbyRange !== 'all') {
        const dist = getDistanceInKm(userLocation[0], userLocation[1], p.latitude, p.longitude);
        matchesNearby = dist <= parseFloat(nearbyRange);
      }

      return matchesSearch && matchesDistrict && matchesNearby;
    });
  }, [places, searchQuery, selectedDistrict, userLocation, nearbyRange, favorites, showOnlyFavorites]);

  // Sorted places based on proximity
  const sortedPlaces = React.useMemo(() => {
    const list = [...filteredPlaces];
    if (userLocation) {
      return list.sort((a, b) => {
        const distA = getDistanceInKm(userLocation[0], userLocation[1], a.latitude, a.longitude);
        const distB = getDistanceInKm(userLocation[0], userLocation[1], b.latitude, b.longitude);
        return distA - distB;
      });
    }
    return list;
  }, [filteredPlaces, userLocation]);

  const handleNavigate = (p: SthanDarshanPlace | null | undefined) => {
    if (!p || p.latitude === undefined || p.latitude === null || p.longitude === undefined || p.longitude === null || isNaN(p.latitude) || isNaN(p.longitude) || (p.latitude === 0 && p.longitude === 0)) {
      showToast(lang === 'mr' ? 'त्रुटी: अक्षांश किंवा रेखांश माहिती उपलब्ध नाही!' : lang === 'hi' ? 'त्रुटि: अक्षांश या रेखांश की जानकारी उपलब्ध नहीं है!' : 'Error: Latitude or longitude is missing!');
      return;
    }
    setNavPlace(p);
    setShowNavSelector(true);
  };

  return (
    <div className="flex flex-col h-[550px] md:h-[650px] lg:h-[750px] rounded-2xl border border-saffron-100 bg-white overflow-hidden shadow-sm relative">
      
      {/* Search & Filter bar */}
      <div className="p-4 bg-saffron-50/50 border-b border-saffron-100 flex flex-col sm:flex-row items-center gap-3 shrink-0">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-saffron-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={
              lang === 'mr'
                ? 'स्थान, जिल्हा, तालुका किंवा गाव शोधा...'
                : lang === 'hi'
                ? 'स्थान, जिला, तालुका या गाँव खोजें...'
                : 'Search place, district, taluka or village...'
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500"
          />
        </div>

        {/* Filters Group */}
        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          {/* District Filter */}
          <div className="flex items-center gap-1.5">
            <label className="text-xs font-bold text-gray-500 font-devanagari shrink-0">
              {lang === 'mr' ? 'जिल्हा :' : lang === 'hi' ? 'जिला :' : 'District:'}
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="text-xs font-semibold bg-white border border-saffron-200 rounded-xl px-2.5 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-saffron-500"
            >
              <option value="all">
                {lang === 'mr' ? 'सर्व जिल्हे' : lang === 'hi' ? 'सभी जिले' : 'All Districts'}
              </option>
              {availableDistricts.map(dist => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>

          {/* Nearby Filter */}
          <div className="flex items-center gap-1.5">
            <label className="text-xs font-bold text-gray-500 font-devanagari shrink-0">
              {lang === 'mr' ? 'जवळचे :' : lang === 'hi' ? 'पास के :' : 'Nearby:'}
            </label>
            <select
              value={nearbyRange}
              onChange={(e) => {
                const val = e.target.value as 'all' | '5' | '10' | '25' | '50';
                setNearbyRange(val);
                if (val !== 'all' && !userLocation) {
                  handleGetCurrentLocation();
                }
              }}
              className="text-xs font-semibold bg-white border border-saffron-200 rounded-xl px-2.5 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-saffron-500"
            >
              <option value="all">
                {lang === 'mr' ? 'सर्व अंतरे' : lang === 'hi' ? 'सभी दूरियाँ' : 'All distances'}
              </option>
              <option value="5">
                {lang === 'mr' ? '५ किमी आत' : lang === 'hi' ? '५ किमी के भीतर' : 'Within 5 KM'}
              </option>
              <option value="10">
                {lang === 'mr' ? '१० किमी आत' : lang === 'hi' ? '१० किमी के भीतर' : 'Within 10 KM'}
              </option>
              <option value="25">
                {lang === 'mr' ? '२५ किमी आत' : lang === 'hi' ? '२५ किमी के भीतर' : 'Within 25 KM'}
              </option>
              <option value="50">
                {lang === 'mr' ? '५० किमी आत' : lang === 'hi' ? '५० किमी के भीतर' : 'Within 50 KM'}
              </option>
            </select>
          </div>

          {/* Favourites Only filter */}
          <button
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            className={`p-2 border rounded-xl flex items-center gap-1 text-xs font-bold transition-all ${
              showOnlyFavorites
                ? 'bg-saffron-100 border-saffron-300 text-saffron-700'
                : 'bg-white border-saffron-200 text-gray-500 hover:text-gray-700'
            }`}
            title={lang === 'mr' ? 'फक्त आवडीचे दाखवा' : 'केवल पसंदीदा दिखाएं'}
          >
            <Star className={`w-3.5 h-3.5 ${showOnlyFavorites ? 'fill-saffron-600 text-saffron-600' : ''}`} />
            <span className="font-devanagari">
              {lang === 'mr' ? 'आवडीचे' : lang === 'hi' ? 'पसंदीदा' : 'Favs'}
            </span>
          </button>

          {/* Sync Button */}
          <button
            onClick={loadDataFromFirestore}
            className="p-2 border border-saffron-200 rounded-xl hover:bg-saffron-50 text-saffron-600 transition-all cursor-pointer"
            title={lang === 'mr' ? 'ताजे करा' : 'रिफ्रेश करें'}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>

          {/* Add New Sthan Button */}
          <button
            onClick={() => {
              const nextNum = places.length > 0 ? Math.max(...places.map(p => p.number || 0)) + 1 : 1;
              setNewPlaceFormData({
                number: String(nextNum),
                title: '',
                titleEn: '',
                district: '',
                taluka: '',
                village: '',
                latitude: '19.0',
                longitude: '75.0',
                content: '',
                explanation: '',
                darshanTiming: 'सकाळी ५:३० ते रात्री ९:००',
                contactNumber: '',
                spiritualImportance: '',
                architecture: '',
                festivals: '',
              });
              setIsAddModalOpen(true);
            }}
            className="p-2 bg-saffron-600 hover:bg-saffron-700 text-white rounded-xl flex items-center gap-1.5 text-xs font-bold transition-all shadow-xs cursor-pointer whitespace-nowrap shrink-0"
            title={lang === 'mr' ? 'नवीन स्थान जोडा' : 'नया स्थान जोड़ें'}
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="font-devanagari">
              {lang === 'mr' ? 'नवीन स्थान जोडा' : lang === 'hi' ? 'नया स्थान जोड़ें' : 'Add Sthan'}
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-[550px]">
        
        {/* Left Side: Places List */}
        <div className="lg:col-span-4 border-r border-saffron-100 bg-saffron-50/10 flex flex-col max-h-[600px] overflow-y-auto custom-scrollbar">
          <div className="p-3 border-b border-saffron-50 bg-saffron-50/30 flex justify-between items-center shrink-0">
            <span className="text-xs font-bold text-saffron-800 font-devanagari">
              {lang === 'mr' ? 'पवित्र चरणमुद्रित स्थाने' : lang === 'hi' ? 'पवित्र चरणमुद्रित स्थान' : 'Sacred Locations'}
            </span>
            <span className="bg-saffron-100 text-saffron-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
              {filteredPlaces.length} {lang === 'mr' ? 'स्थाने' : lang === 'hi' ? 'स्थान' : 'Places'}
            </span>
          </div>

          <div className="p-2 space-y-2">
            {sortedPlaces.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <MapPin className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                <p className="text-xs font-devanagari">कोणतेही स्थान सापडले नाही.</p>
              </div>
            ) : (
              sortedPlaces.map((p) => {
                const distance = userLocation ? getDistanceInKm(userLocation[0], userLocation[1], p.latitude, p.longitude) : null;
                return (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPlace(p)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-2.5 cursor-pointer ${
                      selectedPlace?.id === p.id
                        ? 'bg-saffron-50/70 border-saffron-300 shadow-sm'
                        : 'bg-white border-gray-100 hover:border-saffron-200'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center font-bold text-xs shrink-0 font-sans mt-0.5">
                      {p.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-bold text-gray-800 text-xs md:text-sm font-devanagari truncate flex-1">
                          {p.title}
                        </h4>
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(p.id);
                            }}
                            className="p-1 hover:bg-saffron-50 rounded text-gray-400 hover:text-saffron-600 transition-all"
                          >
                            <Star className={`w-3.5 h-3.5 ${favorites.includes(p.id) ? 'fill-saffron-500 text-saffron-500' : ''}`} />
                          </button>
                        </div>
                      </div>
                      {p.district && (
                        <span className="inline-block text-[9px] bg-orange-50 text-orange-700 px-1.5 py-0.2 rounded-sm font-semibold font-devanagari mt-1">
                          {p.district} {p.taluka && `• ${p.taluka}`} {p.village && `• ${p.village}`}
                        </span>
                      )}
                      <p className="text-[10px] text-gray-500 mt-1 line-clamp-1 font-sans">
                        {p.content}
                      </p>
                      
                      {/* Feature 11: Distance Badge */}
                      <div className="mt-2 pt-1 border-t border-gray-50">
                        {distance !== null ? (
                          <span className="inline-flex items-center gap-1 text-[10px] text-blue-700 font-bold bg-blue-50/70 px-2 py-0.5 rounded-md font-sans">
                            📍 {distance.toFixed(1)} KM (माझ्या स्थानापासून अंतर)
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] text-gray-400 font-devanagari italic bg-gray-50 px-2 py-0.5 rounded-md">
                            ℹ️ अंतर पाहण्यासाठी आपले स्थान सुरू करा
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Side: Map & Interactive details */}
        <div className="lg:col-span-8 flex flex-col bg-white overflow-y-auto custom-scrollbar max-h-[600px]">
          
          {/* Style Injector for CSS Bounce Animation */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marker-bounce-anim {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-12px);
              }
            }
            .marker-bounce {
              animation: marker-bounce-anim 0.8s infinite ease-in-out;
            }
            .leaflet-container:fullscreen {
              width: 100% !important;
              height: 100% !important;
            }
          ` }} />

          {/* Map Canvas Frame: ALWAYS RENDERED, NEVER CONDITIONALLY UNMOUNTED */}
          <div className="relative w-full border-b border-gray-100 bg-gray-50 shrink-0 h-[300px] sm:h-[400px] md:h-[500px]">
            
            {/* Leaflet Map Div */}
            <MapContainer
              center={[mapCenter.lat, mapCenter.lng]}
              zoom={mapZoom}
              style={{ width: "100%", height: "100%" }}
            >
              {mapType === 'street' ? (
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              ) : (
                <TileLayer
                  attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
              )}

              <MapController 
                selectedPlace={selectedPlace} 
                filteredPlaces={filteredPlaces} 
                userLocation={userLocation}
                panToUserTrigger={panToUserTrigger}
              />

              {/* User Location Marker & Circle */}
              {userLocation && (
                <>
                  <Marker
                    position={userLocation}
                    icon={L.divIcon({
                      html: `
                        <div style="position: relative; width: 16px; height: 16px; background-color: #3b82f6; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 5px rgba(0,0,0,0.5);">
                          <div style="position: absolute; inset: -4px; border-radius: 50%; background-color: rgba(59, 130, 246, 0.4); animation: ping 1.5s infinite;"></div>
                        </div>
                      `,
                      className: 'bg-transparent border-none',
                      iconSize: [16, 16],
                      iconAnchor: [8, 8]
                    })}
                  >
                    <Popup>
                      <div className="font-devanagari text-xs font-bold text-blue-700">
                        📍 माझे स्थान (My Location)
                      </div>
                    </Popup>
                  </Marker>
                  <Circle 
                    center={userLocation} 
                    radius={150} 
                    pathOptions={{ color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 0.15, weight: 1.5 }} 
                  />
                </>
              )}

              {/* Draw Orange Polyline from User Location to Destination */}
              {selectedPlace && userLocation && (
                <Polyline
                  positions={[
                    userLocation,
                    [selectedPlace.latitude, selectedPlace.longitude]
                  ]}
                  color="#ea580c"
                  weight={5}
                  opacity={0.8}
                />
              )}

              {/* Cluster the markers using react-leaflet-cluster */}
              <MarkerClusterGroup>
                {filteredPlaces.map((p) => {
                  const isSelected = selectedPlace?.id === p.id;
                  const isSearchingMatch = searchQuery.trim() !== '' && p.title.toLowerCase().includes(searchQuery.toLowerCase().trim());
                  
                  return (
                    <Marker
                      key={p.id}
                      position={[p.latitude, p.longitude]}
                      icon={getMarkerIcon(isSelected, isSearchingMatch)}
                      eventHandlers={{
                        click: () => {
                          setSelectedPlace(p);
                        }
                      }}
                    >
                      <Popup>
                        <div className="p-2 font-devanagari text-xs text-left min-w-[200px] bg-white text-gray-800">
                          <div className="font-bold text-saffron-700 text-sm mb-1">🚩 {p.title}</div>
                          <div className="text-gray-600 mb-1">
                            {p.village ? `${p.village}, ` : ''}{p.taluka ? `${p.taluka}, ` : ''}{p.district}
                          </div>
                          {userLocation && (
                            <div className="text-blue-700 font-bold text-[11px] mb-2">
                              📍 माझ्या स्थानापासून: {getDistanceInKm(userLocation[0], userLocation[1], p.latitude, p.longitude).toFixed(1)} KM
                            </div>
                          )}
                          
                          <div className="flex gap-2 mt-2 border-t border-gray-100 pt-2">
                            <button
                              type="button"
                              onClick={() => handleNavigate(p)}
                              className="bg-saffron-600 hover:bg-saffron-700 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 transition-all cursor-pointer"
                            >
                              <Navigation className="w-3 h-3" />
                              <span>मार्गदर्शन</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => toggleFavorite(p.id)}
                              className={`text-[10px] font-bold px-2 py-1 rounded border flex items-center gap-1 transition-all cursor-pointer ${
                                favorites.includes(p.id)
                                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                              }`}
                            >
                              <Heart className={`w-3 h-3 ${favorites.includes(p.id) ? 'fill-rose-500 text-rose-500' : 'text-rose-500'}`} />
                              <span>आवडीचे</span>
                            </button>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MarkerClusterGroup>
            </MapContainer>
            
            {/* Map type & overlay controls */}
            <div className="absolute bottom-4 right-4 z-[1000] flex flex-wrap gap-2">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="bg-white/95 backdrop-blur-md p-2 rounded-xl border border-gray-200 shadow-md text-gray-700 hover:bg-white transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                title={lang === 'mr' ? 'पूर्ण स्क्रीन' : 'Full Screen'}
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5 text-saffron-600" />
                    <span>{lang === 'mr' ? 'मूळ आकार' : 'Exit Fullscreen'}</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5 text-saffron-600" />
                    <span>{lang === 'mr' ? 'पूर्ण स्क्रीन' : 'Fullscreen'}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleGetCurrentLocation}
                className="bg-white/95 backdrop-blur-md p-2 rounded-xl border border-gray-200 shadow-md text-gray-700 hover:bg-white transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
              >
                <span>📍 {lang === 'mr' ? 'माझे स्थान' : lang === 'hi' ? 'मेरा स्थान' : 'My Location'}</span>
              </button>

              <button
                type="button"
                onClick={() => setMapType(mapType === 'street' ? 'satellite' : 'street')}
                className="bg-white/90 backdrop-blur-md p-2 rounded-xl border border-gray-200 shadow-md text-gray-700 hover:bg-white transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-saffron-600 animate-pulse" />
                <span>{mapType === 'street' ? (lang === 'mr' ? 'उपग्रह व्ह्यू' : 'सैटेलाइट view') : (lang === 'mr' ? 'मॅप व्ह्यू' : 'मैप view')}</span>
              </button>
            </div>

            <div className="absolute top-4 left-4 z-[1000] bg-saffron-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
              {"Mahanubhav Map Live"}
            </div>
          </div>

          {selectedPlace ? (
            <div className="flex-1 flex flex-col p-5 space-y-6">
              
              {/* PLACE HEADER & QUICK META BAR */}
              <div className="border-b border-gray-100 pb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] bg-saffron-100 text-saffron-800 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider font-sans">
                    {lang === 'mr' ? 'लीळा दर्शन स्थान' : lang === 'hi' ? 'लीला दर्शन स्थान' : 'Sacred Leela Sthan'}
                  </span>
                  {selectedPlace.state && (
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-bold font-devanagari">
                      📍 {selectedPlace.state} • {selectedPlace.district} • {selectedPlace.taluka} {selectedPlace.village && `• ${selectedPlace.village}`}
                    </span>
                  )}
                  {userLocation && (
                    <span className="text-[10px] bg-blue-50 text-blue-800 border border-blue-100 px-2.5 py-1 rounded-full font-bold font-sans">
                      🚗 {lang === 'mr' ? 'अंतर:' : 'Distance:'} {getDistanceInKm(userLocation[0], userLocation[1], selectedPlace.latitude, selectedPlace.longitude).toFixed(1)} KM
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-950 font-devanagari">
                    {selectedPlace.title}
                  </h3>
                  
                   {/* Phase 3 Action Buttons */}
                  <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => toggleFavorite(selectedPlace.id)}
                      className={`p-2 border rounded-xl flex items-center gap-1 text-xs font-bold transition-all cursor-pointer ${
                        favorites.includes(selectedPlace.id)
                          ? 'bg-rose-50 border-rose-300 text-rose-700'
                          : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                      title={lang === 'mr' ? 'आवडीचे' : 'पसंदीदा'}
                    >
                      <Heart className={`w-3.5 h-3.5 ${favorites.includes(selectedPlace.id) ? 'fill-rose-500 text-rose-500' : 'text-rose-500'}`} />
                      <span className="font-devanagari">{lang === 'mr' ? 'आवडीचे' : 'पसंदीदा'}</span>
                    </button>
 
                    <button
                      onClick={() => handleSharePlace(selectedPlace)}
                      className="p-2 border border-gray-200 rounded-xl bg-white text-gray-600 hover:bg-gray-50 flex items-center gap-1 text-xs font-bold transition-all cursor-pointer"
                      title={lang === 'mr' ? 'शेअर करा' : 'शेयर करें'}
                    >
                      <Share2 className="w-3.5 h-3.5 text-blue-500" />
                      <span className="font-devanagari">{lang === 'mr' ? 'शेअर' : 'शेयर'}</span>
                    </button>
 
                    <button
                      onClick={() => handleNavigate(selectedPlace)}
                      className="p-2 bg-saffron-600 hover:bg-saffron-700 border border-saffron-600 rounded-xl text-white flex items-center gap-1 text-xs font-bold transition-all cursor-pointer"
                      title={lang === 'mr' ? 'मार्गदर्शन' : 'मार्गदर्शन'}
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span className="font-devanagari">{lang === 'mr' ? 'मार्गदर्शन' : 'मार्गदर्शन'}</span>
                    </button>
 
                    <button
                      onClick={() => handleAddToYatra(selectedPlace)}
                      className={`p-2 border rounded-xl flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                        yatraList.includes(selectedPlace.id)
                          ? 'bg-orange-50 border-orange-300 text-orange-700'
                          : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                      title={lang === 'mr' ? 'यात्रेत जोडा' : 'यात्रा में जोड़ें'}
                    >
                      <span>🛕</span>
                      <span className="font-devanagari">
                        {yatraList.includes(selectedPlace.id)
                          ? (lang === 'mr' ? 'यात्रेत जोडले' : 'यात्रेत जोडले')
                          : (lang === 'mr' ? 'यात्रेत जोडा' : 'यात्रेत जोडा')}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 2-COLUMN HERO PHOTO & PLACE INFORMATION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* 1. Hero Photo */}
                <div className="relative group rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 aspect-video md:aspect-auto md:h-[240px]">
                  <img
                    src={selectedPlace.photoUrl || (selectedPlace.images && selectedPlace.images[0])}
                    alt={selectedPlace.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    onClick={() => setActiveImageIndex(0)}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 flex justify-between items-center">
                    <span className="text-[10px] text-white font-semibold font-devanagari flex items-center gap-1">
                      <Image className="w-3.5 h-3.5" /> {lang === 'mr' ? 'मोठे पाहण्यासाठी क्लिक करा' : 'क्लिक करें'}
                    </span>
                    {selectedPlace.images && (
                      <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-md font-sans">
                        {selectedPlace.images.length} Photos
                      </span>
                    )}
                  </div>
                </div>

                {/* 2. Place Information */}
                <div className="bg-gray-50/70 p-4 rounded-2xl border border-gray-100 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Info className="w-4 h-4 text-saffron-500" />
                      {lang === 'mr' ? 'पवित्र स्थान तपशील' : 'पवित्र स्थान विवरण'}
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-devanagari text-gray-700">
                      <div className="border-b border-gray-200/50 pb-1.5">
                        <strong className="text-gray-400 block text-[10px]">{lang === 'mr' ? 'स्थान नाव' : 'स्थान नाम'}</strong>
                        <span className="font-bold truncate text-gray-800">{selectedPlace.title}</span>
                      </div>
                      <div className="border-b border-gray-200/50 pb-1.5">
                        <strong className="text-gray-400 block text-[10px]">{lang === 'mr' ? 'गाव' : 'गाँव'}</strong>
                        <span className="font-bold text-gray-800">{selectedPlace.village || '-'}</span>
                      </div>
                      <div className="border-b border-gray-200/50 pb-1.5">
                        <strong className="text-gray-400 block text-[10px]">{lang === 'mr' ? 'तालुका' : 'तालुका'}</strong>
                        <span className="font-bold text-gray-800">{selectedPlace.taluka || '-'}</span>
                      </div>
                      <div className="border-b border-gray-200/50 pb-1.5">
                        <strong className="text-gray-400 block text-[10px]">{lang === 'mr' ? 'जिल्हा' : 'जिला'}</strong>
                        <span className="font-bold text-gray-800">{selectedPlace.district || '-'}</span>
                      </div>
                      <div className="border-b border-gray-200/50 pb-1.5">
                        <strong className="text-gray-400 block text-[10px]">{lang === 'mr' ? 'राज्य' : 'राज्य'}</strong>
                        <span className="font-bold text-gray-800">{selectedPlace.state || '-'}</span>
                      </div>
                      <div className="border-b border-gray-200/50 pb-1.5">
                        <strong className="text-gray-400 block text-[10px]">{lang === 'mr' ? 'उंची (Elevation)' : 'ऊँचाई'}</strong>
                        <span className="font-bold text-gray-800">{selectedPlace.elevation || '३५० मीटर'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-gray-400 bg-white p-2.5 rounded-xl border border-gray-100 mt-3 flex justify-between items-center">
                    <div>
                      <div>Lat: {selectedPlace.latitude.toFixed(6)}</div>
                      <div>Lng: {selectedPlace.longitude.toFixed(6)}</div>
                    </div>
                    <button
                      onClick={() => handleCopyCoordinates(selectedPlace)}
                      className="p-1 hover:bg-gray-100 rounded text-gray-500 transition-all"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* AUDIO GUIDE PLAYER */}
              {selectedPlace.audioUrl && (
                <AudioPlayer src={selectedPlace.audioUrl} lang={lang} showToast={showToast} />
              )}

              {/* TABS/SECTIONS OF DISCOVERY */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                
                {/* 3. Spiritual Importance */}
                {selectedPlace.spiritualImportance && (
                  <div className="bg-white p-4.5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1.5 rounded-lg inline-flex items-center gap-1.5 mb-3 font-devanagari">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        {lang === 'mr' ? 'अध्यात्मिक महत्त्व' : 'अध्यात्मिक महत्त्व'}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-devanagari whitespace-pre-line">
                        {selectedPlace.spiritualImportance}
                      </p>
                    </div>
                  </div>
                )}

                {/* 4. History */}
                {selectedPlace.history && (
                  <div className="bg-white p-4.5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1.5 rounded-lg inline-flex items-center gap-1.5 mb-3 font-devanagari">
                        <BookOpen className="w-4 h-4 text-blue-500" />
                        {lang === 'mr' ? 'ऐतिहासिक महत्त्व व पार्श्वभूमी' : 'इतिहास और ऐतिहासिक पृष्ठभूमि'}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-devanagari whitespace-pre-line">
                        {selectedPlace.history}
                      </p>
                    </div>
                  </div>
                )}

                {/* 5. Leela */}
                {selectedPlace.leela && (
                  <div className="bg-white p-4.5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-purple-800 bg-purple-50 px-2.5 py-1.5 rounded-lg inline-flex items-center gap-1.5 mb-3 font-devanagari">
                        <Compass className="w-4 h-4 text-purple-500" />
                        {lang === 'mr' ? 'पवित्र स्वामींच्या लीला' : 'पवित्र लीला'}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-devanagari whitespace-pre-line">
                        {selectedPlace.leela}
                      </p>
                    </div>
                  </div>
                )}

                {/* 6. Special Information */}
                {selectedPlace.specialInfo && (
                  <div className="bg-white p-4.5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg inline-flex items-center gap-1.5 mb-3 font-devanagari">
                        <Info className="w-4 h-4 text-emerald-500" />
                        {lang === 'mr' ? 'दर्शनासाठी विशेष मार्गदर्शक सूचना' : 'दर्शनासाठी विशेष सूचना'}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-devanagari whitespace-pre-line">
                        {selectedPlace.specialInfo}
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* 7. Granth References */}
              {selectedPlace.granthReferences && selectedPlace.granthReferences.length > 0 && (
                <div className="bg-gradient-to-b from-orange-50/20 to-orange-50/10 p-5 rounded-2xl border border-dashed border-orange-200">
                  <h4 className="text-xs font-bold text-saffron-800 uppercase tracking-wider flex items-center gap-2 mb-3.5 font-devanagari">
                    <BookOpen className="w-4 h-4 text-saffron-600" />
                    {lang === 'mr' ? 'महानुभाव ग्रंथ संदर्भ संदर्भ (Granth References)' : 'महानुभाव ग्रंथ संदर्भ सूची'}
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedPlace.granthReferences.map((refItem, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700 bg-white/95 p-3 rounded-xl border border-orange-100 font-devanagari shadow-xs">
                        <span className="w-5 h-5 rounded-full bg-saffron-100 text-saffron-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{refItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* PHOTO GALLERY */}
              {selectedPlace.images && selectedPlace.images.length > 0 && (
                <div className="border-t border-gray-100 pt-5">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5 font-devanagari">
                      <Image className="w-4 h-4 text-saffron-500" />
                      {lang === 'mr' ? 'छायाचित्र दालन (Photo Gallery)' : 'छायाचित्र गैलरी'}
                    </h4>
                    <span className="text-[10px] text-gray-400 font-medium">Click to view fullscreen</span>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {selectedPlace.images.map((imgUrl, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className="aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-xs hover:border-saffron-500 hover:scale-105 transition-all cursor-pointer bg-gray-50 group"
                      >
                        <img
                          src={imgUrl}
                          alt={`${selectedPlace.title} gallery ${index}`}
                          className="w-full h-full object-cover group-hover:opacity-90"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* VIDEO GALLERY */}
              {selectedPlace.videos && selectedPlace.videos.length > 0 && (
                <div className="border-t border-gray-100 pt-5">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5 mb-3.5 font-devanagari">
                    <Video className="w-4 h-4 text-red-500" />
                    {lang === 'mr' ? 'व्हिडिओ दर्शन मार्गदर्शक (Video Gallery)' : 'वीडियो दर्शन गैलरी'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedPlace.videos.map((videoId, idx) => (
                      <div key={idx} className="aspect-video rounded-xl overflow-hidden border border-gray-100 shadow-md bg-black">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          className="w-full h-full"
                          allowFullScreen
                          title={`${selectedPlace.title} Video Guide ${idx + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* RELATED PLACES (NEARBY SPIRITUAL PLACES) */}
              <div className="border-t border-gray-100 pt-5">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5 mb-3.5 font-devanagari">
                  <Compass className="w-4 h-4 text-teal-600 animate-spin-slow" />
                  {lang === 'mr' ? 'जवळचे इतर आध्यात्मिक चरणचिन्हांकित स्थाने' : 'आसपास के पवित्र आध्यात्मिक स्थान'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {getNearbySpiritualPlaces(selectedPlace, 3).map(({ place, distance }) => (
                    <button
                      key={place.id}
                      onClick={() => setSelectedPlace(place)}
                      className="text-left bg-gray-50/70 border border-gray-100 rounded-xl p-3 hover:bg-saffron-50/30 hover:border-saffron-300 transition-all cursor-pointer flex items-start gap-2"
                    >
                      <img
                        src={place.photoUrl || (place.images && place.images[0])}
                        alt={place.title}
                        className="w-10 h-10 object-cover rounded-lg shrink-0 border border-gray-200"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0">
                        <h5 className="font-bold text-xs text-gray-800 font-devanagari truncate">
                          {place.title}
                        </h5>
                        <p className="text-[10px] text-gray-400 font-devanagari truncate mt-0.5">
                          {place.district} • {place.taluka}
                        </p>
                        <span className="inline-block mt-1 text-[9px] bg-teal-50 text-teal-700 font-bold px-1 rounded-sm font-sans">
                          {distance.toFixed(1)} KM Away
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
              <MapPin className="w-16 h-16 text-saffron-200 mb-4 animate-bounce" />
              <h3 className="text-lg font-bold text-gray-800 font-devanagari">स्थान निवडा</h3>
              <p className="text-xs text-gray-500 mt-1">डाव्या बाजूच्या सूचीमधून किंवा नकाशावरून एखादे पवित्र स्थान निवडा.</p>
            </div>
          )}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX PHOTO VIEWER */}
      {activeImageIndex !== null && selectedPlace?.images && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex flex-col justify-between p-4 md:p-6 select-none transition-all duration-300">
          
          {/* Lightbox Header */}
          <div className="flex justify-between items-center w-full max-w-6xl mx-auto pt-2 shrink-0">
            <h4 className="text-white font-bold text-sm md:text-base font-devanagari truncate mr-4">
              {selectedPlace.title} - {lang === 'mr' ? 'दर्शन छायाचित्र' : 'दर्शन फोटो'} ({activeImageIndex + 1}/{selectedPlace.images.length})
            </h4>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadImage(selectedPlace.images![activeImageIndex])}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold px-3"
                title={lang === 'mr' ? 'छायाचित्र डाउनलोड करा' : 'फोटो डाउनलोड करें'}
              >
                <Download className="w-3.5 h-3.5 text-orange-400" />
                <span>{lang === 'mr' ? 'डाउनलोड' : 'डाउनलोड'}</span>
              </button>
              <button
                onClick={() => setActiveImageIndex(null)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Stage */}
          <div className="flex-1 flex items-center justify-center relative w-full max-w-5xl mx-auto my-4">
            
            {/* Prev Image Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : selectedPlace.images!.length - 1));
              }}
              className="absolute left-2 md:left-4 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/75 transition-all z-10 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={selectedPlace.images[activeImageIndex]}
              alt={`${selectedPlace.title} fullscreen viewer ${activeImageIndex}`}
              className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
              referrerPolicy="no-referrer"
            />

            {/* Next Image Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev !== null && prev < selectedPlace.images!.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-2 md:right-4 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/75 transition-all z-10 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Thumbnails Footer */}
          <div className="w-full max-w-4xl mx-auto pb-4 shrink-0 overflow-x-auto flex justify-center gap-2 custom-scrollbar">
            {selectedPlace.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  idx === activeImageIndex ? 'border-saffron-500 scale-105 shadow-md' : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`thumb ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CUSTOM TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white text-xs md:text-sm font-devanagari px-4 py-3 rounded-xl shadow-2xl z-[9999] flex items-center gap-2 border border-gray-800 animate-slide-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ADD NEW SACRED PLACE MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl border border-saffron-100 shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-4 bg-saffron-50 border-b border-saffron-100 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-saffron-600 animate-spin" style={{ animationDuration: '3s' }} />
                <h3 className="text-sm md:text-base font-bold text-saffron-950 font-devanagari">
                  {lang === 'mr' ? 'नवीन पवित्र स्थान जोडा' : lang === 'hi' ? 'नया पवित्र स्थान जोड़ें' : 'Add New Sacred Location'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 hover:bg-saffron-100 rounded-lg text-saffron-800 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleAddNewPlaceSubmit} className="p-5 overflow-y-auto flex-1 space-y-4 text-left">
              {/* Preset Selector */}
              <div className="bg-saffron-50/50 border border-saffron-100 rounded-xl p-3.5 space-y-2">
                <label className="block text-xs font-bold text-saffron-950 font-devanagari">
                  {lang === 'mr' ? 'पुस्तकातील अप्रविष्ट स्थानाची माहिती थेट भरा:' : lang === 'hi' ? 'पुस्तकीय अप्रविष्ट स्थान की जानकारी सीधे भरें:' : 'Auto-fill from other book places:'}
                </label>
                <select
                  onChange={(e) => handlePresetChange(e.target.value)}
                  defaultValue=""
                  className="w-full px-3 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-devanagari font-semibold text-saffron-900"
                >
                  <option value="">{lang === 'mr' ? '-- स्थान निवडा (यादीतून थेट भरण्यासाठी) --' : lang === 'hi' ? '-- स्थान चुनें (सूची से सीधे भरने के लिए) --' : '-- Select Sthan to Auto-Fill --'}</option>
                  <optgroup label={lang === 'mr' ? 'डोंबेग्रामची अप्रविष्ट स्थाने (२७२ ते २८७)' : lang === 'hi' ? 'डोंबेग्राम के अप्रविष्ट स्थान (२७२ से २८७)' : 'Dombegram Unentered Places (272 to 287)'}>
                    {sthanPresets.filter(p => p.village.includes('डोंबेग्राम')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'देवगावची स्थाने (२८८ ते २९४)' : lang === 'hi' ? 'देवगांव के स्थान (२८८ से २९४)' : 'Devgaon Places (288 to 294)'}>
                    {sthanPresets.filter(p => p.village.includes('देवगाव')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'घुमनदेवचे स्थान (२९५)' : lang === 'hi' ? 'घुमनदेव का स्थान (२९५)' : 'Ghumandev Sthan (295)'}>
                    {sthanPresets.filter(p => p.village.includes('घुमनदेव')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'भोकरची स्थाने (२९६ ते २९७)' : lang === 'hi' ? 'भोकर के स्थान (२९६ से २९७)' : 'Bhokar Places (296-297)'}>
                    {sthanPresets.filter(p => p.village.includes('भोकर')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'खोकरचे स्थान (२९८)' : lang === 'hi' ? 'खोकर का स्थान (२९८)' : 'Khokar Sthan (298)'}>
                    {sthanPresets.filter(p => p.village.includes('खोकर')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'टाकळीभानचे स्थान (२९९)' : lang === 'hi' ? 'टाकळीभान का स्थान (२९९)' : 'Takalibhan Sthan (299)'}>
                    {sthanPresets.filter(p => p.village.includes('टाकळीभान')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'घोगरगावचे स्थान (३००)' : lang === 'hi' ? 'घोगरगांव का स्थान (३००)' : 'Ghogargaon Sthan (300)'}>
                    {sthanPresets.filter(p => p.village.includes('घोगरगाव')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'बेलपिंपळगावचे स्थान (३०१)' : lang === 'hi' ? 'बेलपिंपळगांव का स्थान (३०१)' : 'Belpimpalgaon Sthan (301)'}>
                    {sthanPresets.filter(p => p.village.includes('बेलपिंपळगाव')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'सुरेगावची स्थाने (३०२ ते ३०३)' : lang === 'hi' ? 'सुरेगांव के स्थान (३०२ से ३०३)' : 'Suregaon Places (302-303)'}>
                    {sthanPresets.filter(p => p.village.includes('सुरेगाव')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'नेवरगावची स्थाने (३०४ ते ३१०)' : lang === 'hi' ? 'नेवरगांव के स्थान (३०४ से ३१०)' : 'Nevargaon Places (304-310)'}>
                    {sthanPresets.filter(p => p.village.includes('नेवरगाव')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'कानडगावचे स्थान (३११)' : lang === 'hi' ? 'कानडगांव का स्थान (३११)' : 'Kanadgaon Sthan (311)'}>
                    {sthanPresets.filter(p => p.village.includes('कानडगाव')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'ममदापूरचे स्थान (३१२)' : lang === 'hi' ? 'ममदापूर का स्थान (३१२)' : 'Mamdapur Sthan (312)'}>
                    {sthanPresets.filter(p => p.village.includes('ममदापूर')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'बगडीचे स्थान (३१३)' : lang === 'hi' ? 'बगडी का स्थान (३१३)' : 'Bagdi Sthan (313)'}>
                    {sthanPresets.filter(p => p.village.includes('बगडी')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'जामगावचे स्थान (३१४)' : lang === 'hi' ? 'जामगांव का स्थान (३१४)' : 'Jamgaon Sthan (314)'}>
                    {sthanPresets.filter(p => p.village.includes('जामगाव')).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'गंगापूरचे स्थान (३१५)' : lang === 'hi' ? 'गंगापूर का स्थान (३१५)' : 'Gangapur Sthan (315)'}>
                    {sthanPresets.filter(p => p.bookNumber === 315).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'गळनिंबचे स्थान (३१६)' : lang === 'hi' ? 'गळनिंब का स्थान (३१६)' : 'Galnimb Sthan (316)'}>
                    {sthanPresets.filter(p => p.bookNumber === 316).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'जुने आगरवाडगावची स्थाने (३१७ ते ३१९)' : lang === 'hi' ? 'जुने आगरवाडगांव के स्थान (३१७ से ३१९)' : 'June Agarwadgaon Places (317-319)'}>
                    {sthanPresets.filter(p => p.bookNumber >= 317 && p.bookNumber <= 319).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'नेवासाचे स्थान (३२०)' : lang === 'hi' ? 'नेवासा का स्थान (३२०)' : 'Nevasa Sthan (320)'}>
                    {sthanPresets.filter(p => p.bookNumber === 320).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'कोळेश्वर गळनिंबची स्थाने (३२१ ते ३२६)' : lang === 'hi' ? 'कोळेश्वर गळनिंब के स्थान (३२१ से ३२६)' : 'Koleshwar Galnimb Places (321-326)'}>
                    {sthanPresets.filter(p => p.bookNumber >= 321 && p.bookNumber <= 326).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'सुरेगावचे स्थान (३२७)' : lang === 'hi' ? 'सुरेगाव का स्थान (३२७)' : 'Suregaon Sthan (327)'}>
                    {sthanPresets.filter(p => p.bookNumber === 327).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'वरखेडची स्थाने (३२८ ते ३३२)' : lang === 'hi' ? 'वरखेड के स्थान (३२८ से ३३२)' : 'Varkhed Places (328-332)'}>
                    {sthanPresets.filter(p => p.bookNumber >= 328 && p.bookNumber <= 332).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'चापडगावचे स्थान (३३३)' : lang === 'hi' ? 'चापडगांव का स्थान (३३३)' : 'Chapadgaon Sthan (333)'}>
                    {sthanPresets.filter(p => p.bookNumber === 333).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'घोटणचे स्थान (३३४)' : lang === 'hi' ? 'घोटण का स्थान (३३४)' : 'Ghotan Sthan (334)'}>
                    {sthanPresets.filter(p => p.bookNumber === 334).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label={lang === 'mr' ? 'पैठणची स्थाने (३३५ ते ३५०)' : lang === 'hi' ? 'पैठण के स्थान (३३५ से ३५०)' : 'Paithan Places (335-350)'}>
                    {sthanPresets.filter(p => p.bookNumber >= 335 && p.bookNumber <= 350).map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </optgroup>
                </select>
                <p className="text-[10px] text-saffron-800 font-devanagari">
                  💡 {lang === 'mr' ? 'वरील यादीतून स्थान निवडल्यास नाव, अचूक भौगोलिक गुणक (Coordinates) आणि इतर माहिती आपोआप भरली जाईल.' : 'उपरोक्त सूची से स्थान चुनने पर नाम, सटीक भौगोलिक निर्देशांक (Coordinates) और अन्य जानकारी स्वचालित रूप से भर जाएगी।'}
                </p>
              </div>

              {/* Row 1: Number & Title */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 font-devanagari mb-1">
                    {lang === 'mr' ? 'क्रमांक' : lang === 'hi' ? 'क्रमांक' : 'Number'} *
                  </label>
                  <input
                    type="number"
                    required
                    value={newPlaceFormData.number}
                    onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, number: e.target.value })}
                    className="w-full px-3 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-sans"
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block text-xs font-bold text-gray-700 font-devanagari mb-1">
                    {lang === 'mr' ? 'स्थानाचे नाव (मराठी/हिंदी)' : lang === 'hi' ? 'स्थान का नाम (मराठी/हिंदी)' : 'Name (Marathi/Hindi)'} *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={190}
                    placeholder={lang === 'mr' ? 'उदा. श्री क्षेत्र ऋद्धपूर धाम' : 'उदा. श्री क्षेत्र ऋद्धपूर धाम'}
                    value={newPlaceFormData.title}
                    onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, title: e.target.value })}
                    className="w-full px-3 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-devanagari font-semibold"
                  />
                </div>
              </div>

              {/* Row 2: Title En */}
              <div>
                <label className="block text-xs font-bold text-gray-700 font-devanagari mb-1">
                  {lang === 'mr' ? 'स्थानाचे नाव (इंग्रजी)' : lang === 'hi' ? 'स्थान का नाम (अंग्रेजी)' : 'Name (English)'} *
                </label>
                <input
                  type="text"
                  required
                  maxLength={190}
                  placeholder="e.g. Shree Kshetra Riddhapur Dham"
                  value={newPlaceFormData.titleEn}
                  onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, titleEn: e.target.value })}
                  className="w-full px-3 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-sans font-semibold"
                />
              </div>

              {/* Row 3: District, Taluka, Village */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 font-devanagari mb-1">
                    {lang === 'mr' ? 'जिल्हा' : lang === 'hi' ? 'जिला' : 'District'} *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={90}
                    placeholder={lang === 'mr' ? 'उदा. अमरावती' : 'उदा. अमरावती'}
                    value={newPlaceFormData.district}
                    onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, district: e.target.value })}
                    className="w-full px-3 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-devanagari"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 font-devanagari mb-1">
                    {lang === 'mr' ? 'तालुका' : lang === 'hi' ? 'तालुका' : 'Taluka'}
                  </label>
                  <input
                    type="text"
                    maxLength={90}
                    placeholder={lang === 'mr' ? 'उदा. मोर्शी' : 'उदा. मोर्शी'}
                    value={newPlaceFormData.taluka}
                    onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, taluka: e.target.value })}
                    className="w-full px-3 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-devanagari"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 font-devanagari mb-1">
                    {lang === 'mr' ? 'गाव / शहर' : lang === 'hi' ? 'गाँव / शहर' : 'Village / City'}
                  </label>
                  <input
                    type="text"
                    maxLength={90}
                    placeholder={lang === 'mr' ? 'उदा. ऋद्धपूर' : 'उदा. ऋद्धपूर'}
                    value={newPlaceFormData.village}
                    onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, village: e.target.value })}
                    className="w-full px-3 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-devanagari"
                  />
                </div>
              </div>

              {/* Row 4: Coordinates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 font-devanagari mb-1">
                    {lang === 'mr' ? 'अक्षांश (Latitude)' : lang === 'hi' ? 'अक्षांश (Latitude)' : 'Latitude'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 21.2294"
                    value={newPlaceFormData.latitude}
                    onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, latitude: e.target.value })}
                    className="w-full px-3 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 font-devanagari mb-1">
                    {lang === 'mr' ? 'रेखांश (Longitude)' : lang === 'hi' ? 'रेखांश (Longitude)' : 'Longitude'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 77.8596"
                    value={newPlaceFormData.longitude}
                    onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, longitude: e.target.value })}
                    className="w-full px-3 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-sans"
                  />
                </div>
              </div>

              {/* Row 5: Content / Description */}
              <div>
                <label className="block text-xs font-bold text-gray-700 font-devanagari mb-1">
                  {lang === 'mr' ? 'स्थान इतिहास व माहात्म्य (Description)' : lang === 'hi' ? 'स्थान इतिहास व महत्व (Description)' : 'History & Description'} *
                </label>
                <textarea
                  required
                  rows={3}
                  maxLength={950}
                  placeholder={lang === 'mr' ? 'स्थानाची ऐतिहासिक माहिती व महत्त्व लिहा...' : 'स्थान की ऐतिहासिक जानकारी और महत्व लिखें...'}
                  value={newPlaceFormData.content}
                  onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, content: e.target.value })}
                  className="w-full px-3 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-devanagari"
                />
              </div>

              {/* Row 6: Explanation / Travel */}
              <div>
                <label className="block text-xs font-bold text-gray-700 font-devanagari mb-1">
                  {lang === 'mr' ? 'कसे पोहोचावे? (How to reach)' : lang === 'hi' ? 'कैसे पहुँचें? (How to reach)' : 'How to reach?'}
                </label>
                <textarea
                  rows={2}
                  maxLength={1950}
                  placeholder={lang === 'mr' ? 'प्रवासाचे मार्ग आणि अंतर याबद्दल माहिती...' : 'यात्रा के मार्ग और दूरी के बारे में जानकारी...'}
                  value={newPlaceFormData.explanation}
                  onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, explanation: e.target.value })}
                  className="w-full px-3 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-devanagari"
                />
              </div>

              {/* Collapsible/Details Advanced fields */}
              <div className="border border-saffron-100 rounded-xl p-3 bg-saffron-50/20 space-y-3">
                <h4 className="text-xs font-bold text-saffron-800 font-devanagari">
                  {lang === 'mr' ? 'अधिक माहिती (पर्यायी)' : lang === 'hi' ? 'अतिरिक्त जानकारी (वैकल्पिक)' : 'Advanced Details (Optional)'}
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 font-devanagari mb-1">
                      {lang === 'mr' ? 'दर्शन वेळ' : lang === 'hi' ? 'दर्शन समय' : 'Darshan Timing'}
                    </label>
                    <input
                      type="text"
                      maxLength={190}
                      value={newPlaceFormData.darshanTiming}
                      onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, darshanTiming: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-saffron-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-devanagari"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 font-devanagari mb-1">
                      {lang === 'mr' ? 'संपर्क क्रमांक' : lang === 'hi' ? 'संपर्क नंबर' : 'Contact Number'}
                    </label>
                    <input
                      type="text"
                      maxLength={190}
                      placeholder="e.g. +91 94228 15234"
                      value={newPlaceFormData.contactNumber}
                      onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, contactNumber: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-saffron-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 font-devanagari mb-1">
                      {lang === 'mr' ? 'आद्यात्मिक महत्त्व' : lang === 'hi' ? 'आध्यात्मिक महत्व' : 'Spiritual Importance'}
                    </label>
                    <input
                      type="text"
                      maxLength={950}
                      value={newPlaceFormData.spiritualImportance}
                      onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, spiritualImportance: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-saffron-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-devanagari"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 font-devanagari mb-1">
                      {lang === 'mr' ? 'स्थापत्य आणि रचना' : lang === 'hi' ? 'स्थापत्य और रचना' : 'Architecture'}
                    </label>
                    <input
                      type="text"
                      maxLength={950}
                      value={newPlaceFormData.architecture}
                      onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, architecture: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-saffron-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-devanagari"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 font-devanagari mb-1">
                      {lang === 'mr' ? 'विशेष उत्सव' : lang === 'hi' ? 'विशेष उत्सव' : 'Festivals'}
                    </label>
                    <input
                      type="text"
                      maxLength={950}
                      value={newPlaceFormData.festivals}
                      onChange={(e) => setNewPlaceFormData({ ...newPlaceFormData, festivals: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-saffron-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500 font-devanagari"
                    />
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="pt-3 border-t border-saffron-100 flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  disabled={submittingPlace}
                  className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-700 bg-gray-50 border border-gray-200 rounded-xl transition-all cursor-pointer disabled:opacity-50"
                >
                  {lang === 'mr' ? 'रद्द करा' : lang === 'hi' ? 'रद्द करें' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={submittingPlace}
                  className="px-5 py-2 text-xs font-bold text-white bg-saffron-600 hover:bg-saffron-700 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {submittingPlace ? (
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      {lang === 'mr' ? 'जतन होत आहे...' : 'सहेज रहे हैं...'}
                    </span>
                  ) : (
                    <>
                      <Compass className="w-3.5 h-3.5" />
                      <span>{lang === 'mr' ? 'स्थान जतन करा' : lang === 'hi' ? 'स्थान सहेजें' : 'Save Location'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showNavSelector && navPlace && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-gray-100 relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => {
                setShowNavSelector(false);
                setNavPlace(null);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
            >
              ✕
            </button>
            <h3 className="text-base font-bold text-gray-800 font-devanagari mb-2 text-center">
              {lang === 'mr' ? '🧭 प्रवासाचे साधन निवडा' : '🧭 Select Navigation App'}
            </h3>
            <p className="text-xs text-gray-500 text-center font-devanagari mb-5">
              {lang === 'mr' ? 'मार्गदर्शन सुरू करण्यासाठी खालीलपैकी एका नकाशा ॲपवर टॅप करा.' : 'Select a mapping application to begin turn-by-turn routing.'}
            </p>
            
            <div className="space-y-3">
              <a
                href={
                  userLocation 
                    ? `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${navPlace.latitude},${navPlace.longitude}&travelmode=driving`
                    : `https://www.google.com/maps/search/?api=1&query=${navPlace.latitude},${navPlace.longitude}`
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setShowNavSelector(false);
                  setNavPlace(null);
                }}
                className="w-full py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-xl flex items-center justify-between transition-all"
              >
                <span className="font-devanagari text-sm">🌐 Google Maps</span>
                <span className="text-xs text-blue-500 font-semibold font-sans">Open ↗</span>
              </a>
              
              <a
                href={
                  userLocation
                    ? `https://maps.apple.com/?saddr=${userLocation[0]},${userLocation[1]}&daddr=${navPlace.latitude},${navPlace.longitude}&dirflg=d`
                    : `https://maps.apple.com/?q=${navPlace.latitude},${navPlace.longitude}`
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setShowNavSelector(false);
                  setNavPlace(null);
                }}
                className="w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold rounded-xl flex items-center justify-between transition-all"
              >
                <span className="font-devanagari text-sm">🍎 Apple Maps (iOS Only)</span>
                <span className="text-xs text-gray-400 font-semibold font-sans">Open ↗</span>
              </a>

              <a
                href={
                  userLocation
                    ? `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${userLocation[0]},${userLocation[1]};${navPlace.latitude},${navPlace.longitude}`
                    : `https://www.openstreetmap.org/?mlat=${navPlace.latitude}&mlon=${navPlace.longitude}#map=15/${navPlace.latitude}/${navPlace.longitude}`
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setShowNavSelector(false);
                  setNavPlace(null);
                }}
                className="w-full py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold rounded-xl flex items-center justify-between transition-all"
              >
                <span className="font-devanagari text-sm">🗺️ OpenStreetMap Directions</span>
                <span className="text-xs text-emerald-600 font-semibold font-sans">Open ↗</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Leaflet Camera and Bounds Controller
function MapController({
  selectedPlace,
  filteredPlaces,
  userLocation,
  panToUserTrigger
}: {
  selectedPlace: SthanDarshanPlace | null;
  filteredPlaces: SthanDarshanPlace[];
  userLocation: [number, number] | null;
  panToUserTrigger: number;
}) {
  const map = useMap();

  const filteredPlacesIds = filteredPlaces.map(p => p.id).join(',');

  // Smooth flyTo selected place: zoom Level 15, 2s duration
  useEffect(() => {
    if (!map) return;
    if (selectedPlace) {
      map.flyTo([selectedPlace.latitude, selectedPlace.longitude], 15, {
        animate: true,
        duration: 2
      });
    }
  }, [map, selectedPlace]);

  // Smooth flyTo user location when triggered
  useEffect(() => {
    if (!map || !userLocation || panToUserTrigger === 0) return;
    map.flyTo(userLocation, 14, {
      animate: true,
      duration: 1.5
    });
  }, [map, userLocation, panToUserTrigger]);

  // Fit bounds when filtered places change and no place is selected
  useEffect(() => {
    if (!map) return;
    if (!selectedPlace && filteredPlaces.length > 0) {
      const bounds = L.latLngBounds(filteredPlaces.map(p => [p.latitude, p.longitude]));
      map.fitBounds(bounds, { padding: [40, 40] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, filteredPlacesIds, selectedPlace]);

  return null;
}

