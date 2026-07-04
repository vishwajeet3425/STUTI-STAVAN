/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { SthanDarshanPlace } from '../types';
import { defaultSthanPlaces } from '../data/sthanDarshanDefault';
import { Loader } from '@googlemaps/js-api-loader';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { MapPin, Compass, Search, Navigation, Info, ExternalLink, RefreshCw, Layers } from 'lucide-react';

interface SthanMapProps {
  lang?: 'hi' | 'mr' | 'en';
  onSelectPlaceExternal?: (place: SthanDarshanPlace) => void;
}

export default function SthanMap({ lang = 'mr', onSelectPlaceExternal }: SthanMapProps) {
  const [places, setPlaces] = useState<SthanDarshanPlace[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<SthanDarshanPlace | null>(null);
  
  // Filtering states
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');

  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  // Fetch from Firebase Firestore
  const loadDataFromFirestore = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'sthan_darshan'));
      
      if (querySnapshot.empty) {
        // Seed default places into Firestore
        console.log("Sthan Darshan collection is empty. Bootstrapping with default places...");
        const seedPromises = defaultSthanPlaces.map(async (p) => {
          await setDoc(doc(db, 'sthan_darshan', p.id), p);
        });
        await Promise.all(seedPromises);
        setPlaces(defaultSthanPlaces);
        if (defaultSthanPlaces.length > 0) {
          setSelectedPlace(defaultSthanPlaces[0]);
        }
      } else {
        const loaded: SthanDarshanPlace[] = [];
        querySnapshot.forEach((doc) => {
          loaded.push(doc.data() as SthanDarshanPlace);
        });
        loaded.sort((a, b) => a.number - b.number);
        setPlaces(loaded);
        if (loaded.length > 0) {
          setSelectedPlace(loaded[0]);
        }
      }
    } catch (err) {
      console.error("Firestore loading error, falling back to local static defaults:", err);
      setPlaces(defaultSthanPlaces);
      if (defaultSthanPlaces.length > 0) {
        setSelectedPlace(defaultSthanPlaces[0]);
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

  // Load Google Maps SDK dynamically if key is available
  const mapsKey = process.env.GOOGLE_MAPS_PLATFORM_KEY;

  useEffect(() => {
    if (!mapsKey || mapsKey.trim() === '' || places.length === 0 || !selectedPlace) {
      return;
    }

    const loader = new Loader({
      apiKey: mapsKey,
      version: 'weekly',
    });

    let isMounted = true;

    (loader as any).load().then((google: any) => {
      if (!isMounted || !mapRef.current) return;
      setIsSdkLoaded(true);

      // Initialize Map
      const mapInstance = new google.maps.Map(mapRef.current, {
        center: { lat: selectedPlace.latitude, lng: selectedPlace.longitude },
        zoom: 13,
        mapTypeId: mapType,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      googleMapInstanceRef.current = mapInstance;

      // Clear existing markers
      markersRef.current.forEach(m => m.setMap(null));
      markersRef.current = [];

      // Add markers
      places.forEach((p) => {
        const isSelected = p.id === selectedPlace.id;
        const marker = new google.maps.Marker({
          position: { lat: p.latitude, lng: p.longitude },
          map: mapInstance,
          title: p.title,
          animation: isSelected ? google.maps.Animation.BOUNCE : undefined,
          icon: isSelected ? {
            url: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png'
          } : {
            url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
          }
        });

        // Click handler to select place
        marker.addListener('click', () => {
          setSelectedPlace(p);
        });

        markersRef.current.push(marker);
      });

    }).catch((err) => {
      console.error("Error loading Google Maps JS SDK:", err);
      setIsSdkLoaded(false);
    });

    return () => {
      isMounted = false;
    };
  }, [places, selectedPlace, mapsKey, mapType]);

  // Pan to selected place when it changes
  useEffect(() => {
    if (googleMapInstanceRef.current && selectedPlace) {
      googleMapInstanceRef.current.panTo({ lat: selectedPlace.latitude, lng: selectedPlace.longitude });
      googleMapInstanceRef.current.setZoom(13);
    }
  }, [selectedPlace]);

  // Get list of unique districts for filtering
  const availableDistricts = Array.from(new Set(places.map(p => p.district).filter(Boolean))) as string[];

  // Filtered places
  const filteredPlaces = places.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (p.titleEn && p.titleEn.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          p.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDistrict = selectedDistrict === 'all' || p.district === selectedDistrict;

    return matchesSearch && matchesDistrict;
  });

  const getGoogleMapsUrl = (p: SthanDarshanPlace) => {
    return `https://www.google.com/maps/search/?api=1&query=${p.latitude},${p.longitude}`;
  };

  const iframeSrc = selectedPlace 
    ? `https://maps.google.com/maps?q=${selectedPlace.latitude},${selectedPlace.longitude}&t=${mapType === 'satellite' ? 'k' : 'm'}&z=14&ie=UTF8&iwloc=&output=embed`
    : '';

  return (
    <div className="flex flex-col h-full rounded-2xl border border-saffron-100 bg-white overflow-hidden shadow-sm">
      
      {/* Search & Filter bar */}
      <div className="p-4 bg-saffron-50/50 border-b border-saffron-100 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-saffron-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={lang === 'mr' ? 'स्थान किंवा माहिती शोधा...' : lang === 'hi' ? 'स्थान या जानकारी खोजें...' : 'Search places or details...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs md:text-sm border border-saffron-200 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-saffron-500"
          />
        </div>

        {/* District Filter */}
        <div className="flex items-center gap-2">
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

          {/* Sync Button */}
          <button
            onClick={loadDataFromFirestore}
            className="p-2 border border-saffron-200 rounded-xl hover:bg-saffron-50 text-saffron-600 transition-all"
            title={lang === 'mr' ? 'ताजे करा' : 'रिफ्रेश करें'}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-[450px]">
        
        {/* Left Side: Places List */}
        <div className="lg:col-span-4 border-r border-saffron-100 bg-saffron-50/10 flex flex-col max-h-[500px] overflow-y-auto custom-scrollbar">
          <div className="p-3 border-b border-saffron-50 bg-saffron-50/30 flex justify-between items-center">
            <span className="text-xs font-bold text-saffron-800 font-devanagari">
              {lang === 'mr' ? 'पवित्र चरणमुद्रित स्थाने' : lang === 'hi' ? 'पवित्र चरणमुद्रित स्थान' : 'Sacred Locations'}
            </span>
            <span className="bg-saffron-100 text-saffron-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
              {filteredPlaces.length} {lang === 'mr' ? 'स्थाने' : lang === 'hi' ? 'स्थान' : 'Places'}
            </span>
          </div>

          <div className="p-2 space-y-2">
            {filteredPlaces.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <MapPin className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                <p className="text-xs font-devanagari">कोणतेही स्थान सापडले नाही.</p>
              </div>
            ) : (
              filteredPlaces.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPlace(p)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-2.5 ${
                    selectedPlace?.id === p.id
                      ? 'bg-saffron-50/70 border-saffron-300 shadow-xs'
                      : 'bg-white border-gray-100 hover:border-saffron-200'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center font-bold text-xs shrink-0 font-sans mt-0.5">
                    {p.number}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-gray-800 text-xs md:text-sm font-devanagari truncate">
                      {p.title}
                    </h4>
                    {p.district && (
                      <span className="inline-block text-[9px] bg-orange-50 text-orange-700 px-1.5 py-0.2 rounded-sm font-semibold font-devanagari mt-1">
                        {p.district} {p.taluka && `• ${p.taluka}`}
                      </span>
                    )}
                    <p className="text-[10px] text-gray-500 mt-1 line-clamp-1 font-sans">
                      {p.content}
                    </p>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Right Side: Map & Interactive details */}
        <div className="lg:col-span-8 flex flex-col bg-white">
          {selectedPlace ? (
            <div className="flex-1 flex flex-col">
              
              {/* Map Canvas Frame */}
              <div className="relative h-64 md:h-80 w-full border-b border-gray-100 overflow-hidden bg-gray-50">
                
                {/* Embedded Map Canvas (Dynamic SDK or robust standard embed) */}
                {mapsKey && mapsKey.trim() !== '' ? (
                  <div ref={mapRef} className="w-full h-full" />
                ) : (
                  <iframe
                    title="Google Map Frame"
                    src={iframeSrc}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Map type & overlay controls */}
                <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                  <button
                    onClick={() => setMapType(mapType === 'roadmap' ? 'satellite' : 'roadmap')}
                    className="bg-white/90 backdrop-blur-md p-2 rounded-xl border border-gray-200 shadow-sm text-gray-700 hover:bg-white transition-all flex items-center gap-1.5 text-xs font-bold"
                  >
                    <Layers className="w-3.5 h-3.5 text-saffron-600 animate-pulse" />
                    <span>{mapType === 'roadmap' ? (lang === 'mr' ? 'उपग्रह व्ह्यू' : 'सैटेलाइट view') : (lang === 'mr' ? 'मॅप व्ह्यू' : 'मैप view')}</span>
                  </button>
                </div>

                <div className="absolute top-4 left-4 z-10 bg-saffron-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                  {mapsKey ? "Google Maps SDK Live" : "Interactive Map"}
                </div>
              </div>

              {/* Dynamic Place Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] bg-saffron-100 text-saffron-800 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider font-sans">
                      {lang === 'mr' ? 'लीळा दर्शन स्थान' : lang === 'hi' ? 'लीला दर्शन स्थान' : 'Sacred Leela Sthan'}
                    </span>
                    {selectedPlace.state && (
                      <span className="text-[10px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-bold font-devanagari">
                        📍 {selectedPlace.state} • {selectedPlace.district} • {selectedPlace.taluka}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-950 font-devanagari mt-2.5">
                    {selectedPlace.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans flex items-center gap-1">
                        <Info className="w-3.5 h-3.5 text-saffron-500" />
                        {lang === 'mr' ? 'स्थानाचे महत्त्व व इतिहास :' : lang === 'hi' ? 'स्थान का महत्त्व व इतिहास :' : 'Significance & History:'}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 mt-1.5 font-sans leading-relaxed whitespace-pre-line">
                        {selectedPlace.content}
                      </p>
                    </div>

                    {selectedPlace.explanation && (
                      <div className="bg-saffron-50/40 p-3.5 rounded-xl border border-saffron-100/40">
                        <h4 className="text-xs font-bold text-saffron-700 uppercase tracking-wider font-sans flex items-center gap-1">
                          <Compass className="w-3.5 h-3.5 text-saffron-500" />
                          {lang === 'mr' ? 'मार्गदर्शन (कसे पोहोचावे) :' : lang === 'hi' ? 'मार्गदर्शन (कैसे पहुंचे) :' : 'Directions:'}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1.5 font-sans leading-relaxed">
                          {selectedPlace.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[10px] font-mono font-bold text-gray-400">
                    GPS Coordinates: {selectedPlace.latitude.toFixed(5)}°N, {selectedPlace.longitude.toFixed(5)}°E
                  </div>
                  
                  <a
                    href={getGoogleMapsUrl(selectedPlace)}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-saffron-500 hover:bg-saffron-600 text-white rounded-xl font-bold text-xs transition-all flex items-center gap-2 shadow-sm shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    {lang === 'mr' ? 'थेट मार्ग शोधा (Google Maps)' : lang === 'hi' ? 'मार्गदर्शन (Google Maps)' : 'Open in Google Maps'}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <MapPin className="w-16 h-16 text-saffron-200 mb-4 animate-bounce" />
              <h3 className="text-lg font-bold text-gray-800 font-devanagari">स्थान निवडा</h3>
              <p className="text-xs text-gray-500 mt-1">डाव्या बाजूच्या सूचीमधून एखादे पवित्र स्थान निवडा.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
