/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { SthanDarshanPlace } from '../types';
import { defaultSthanPlaces } from '../data/sthanDarshanDefault';
import { 
  GripVertical, Trash2, Heart, Compass, MapPin, Clock, Navigation, 
  RefreshCw, AlertTriangle, ArrowRight, Star, ChevronRight
} from 'lucide-react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap
} from "react-leaflet";
import L from "leaflet";

// Fix standard Leaflet icon paths in React / Webpack builds
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface MyYatraProps {
  lang: 'hi' | 'mr' | 'en';
  onNavigateToSthanDarshan: () => void;
}

export default function MyYatra({ lang, onNavigateToSthanDarshan }: MyYatraProps) {
  const [yatraPlaces, setYatraPlaces] = useState<SthanDarshanPlace[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locLoading, setLocLoading] = useState<boolean>(false);
  const [locError, setLocError] = useState<string | null>(null);

  // Selected place for InfoWindow
  const [selectedPlace, setSelectedPlace] = useState<SthanDarshanPlace | null>(null);

  // Navigation Platform Selector Modal
  const [showNavSelector, setShowNavSelector] = useState(false);
  const [navigationUrls, setNavigationUrls] = useState<{ google: string; apple: string; osm: string } | null>(null);

  // Default central location (Aurangabad/Chhatrapati Sambhajinagar) if GPS is denied
  const defaultCenter = { lat: 19.8762, lng: 75.3433 };

  // Calculate distance using Haversine formula
  const getHaversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Get user's current GPS location
  const fetchCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocError(lang === 'mr' ? 'तुमच्या ब्राउझरमध्ये GPS सेवा उपलब्ध नाही.' : 'GPS navigation not supported by browser.');
      return;
    }

    setLocLoading(true);
    setLocError(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLocLoading(false);
      },
      (error) => {
        console.warn('Geolocation denied or failed, using Aurangabad center:', error);
        // Do not block user, set default coordinate as user location reference
        setUserLocation(defaultCenter);
        setLocError(lang === 'mr' ? 'GPS परमिशन नाकारली. पुण्याचे अंतर दाखवले जात आहे.' : 'GPS location denied. Showing distance from central Hub.');
        setLocLoading(false);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  // Load saved Yatra list and favorites
  const loadYatraAndFavorites = () => {
    try {
      // Load yatra IDs
      const savedYatra = localStorage.getItem('mahanubhav_my_yatra');
      const yatraIds: string[] = savedYatra ? JSON.parse(savedYatra) : [];

      // Build ordered list of places from default dataset
      const orderedPlaces: SthanDarshanPlace[] = [];
      yatraIds.forEach(id => {
        const found = defaultSthanPlaces.find(p => p.id === id);
        if (found) {
          orderedPlaces.push(found);
        }
      });
      setYatraPlaces(orderedPlaces);

      // Load favorites
      const savedFavs = localStorage.getItem('mahanubhav_sthan_favorites');
      setFavorites(savedFavs ? JSON.parse(savedFavs) : []);
    } catch (e) {
      console.error('Failed reading yatra/favorites from local storage:', e);
    }
  };

  useEffect(() => {
    loadYatraAndFavorites();
    fetchCurrentLocation();

    // Listen to updates from other components
    window.addEventListener('yatra-updated', loadYatraAndFavorites);
    return () => {
      window.removeEventListener('yatra-updated', loadYatraAndFavorites);
    };
  }, []);



  // Calculations for total distance and time
  const calculateMetrics = () => {
    let totalDistance = 0;
    const coords: { lat: number; lng: number }[] = [];

    // Use current location as start if available
    if (userLocation) {
      coords.push(userLocation);
    }

    yatraPlaces.forEach(p => {
      coords.push({ lat: p.latitude, lng: p.longitude });
    });

    for (let i = 0; i < coords.length - 1; i++) {
      totalDistance += getHaversineDistance(
        coords[i].lat,
        coords[i].lng,
        coords[i + 1].lat,
        coords[i + 1].lng
      );
    }

    // Travel time estimate: average driving speed in India is approx 50 km/h
    const hours = totalDistance / 50;
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);

    return {
      totalDistance,
      hours: wholeHours,
      minutes
    };
  };

  const metrics = calculateMetrics();

  // Remove place from My Yatra
  const handleRemovePlace = (id: string) => {
    try {
      const saved = localStorage.getItem('mahanubhav_my_yatra');
      const currentList: string[] = saved ? JSON.parse(saved) : [];
      const updated = currentList.filter(item => item !== id);
      localStorage.setItem('mahanubhav_my_yatra', JSON.stringify(updated));
      
      // Update state
      setYatraPlaces(yatraPlaces.filter(p => p.id !== id));
      
      // Notify components
      window.dispatchEvent(new Event('yatra-updated'));
    } catch (e) {
      console.error('Failed removing yatra place:', e);
    }
  };

  // Toggle favorite status
  const toggleFavorite = (id: string) => {
    try {
      let nextFavs: string[];
      if (favorites.includes(id)) {
        nextFavs = favorites.filter(f => f !== id);
      } else {
        nextFavs = [...favorites, id];
      }
      localStorage.setItem('mahanubhav_sthan_favorites', JSON.stringify(nextFavs));
      setFavorites(nextFavs);
      window.dispatchEvent(new Event('favorites-updated'));
    } catch (e) {
      console.error('Failed toggling favorite:', e);
    }
  };

  // Launch navigation directions
  const handleStartYatra = () => {
    const isValid = (lat: any, lng: any) => {
      if (lat === null || lat === undefined || lat === '') return false;
      if (lng === null || lng === undefined || lng === '') return false;
      const latNum = Number(lat);
      const lngNum = Number(lng);
      if (isNaN(latNum) || isNaN(lngNum)) return false;
      if (latNum === 0 && lngNum === 0) return false;
      return true;
    };

    const validPlaces = yatraPlaces.filter(p => isValid(p.latitude, p.longitude));

    if (validPlaces.length === 0) {
      const msg = lang === 'mr'
        ? "कृपया प्रथम यात्रा यादीमध्ये स्थान जोडा."
        : lang === 'hi'
          ? "पहले यात्रा सूची में स्थान जोड़ें।"
          : "Please add pilgrimage places first.";
      alert(msg);
      return;
    }

    const hasUserLocation = userLocation && 
                           userLocation.lat !== null && 
                           userLocation.lat !== undefined && 
                           userLocation.lng !== null && 
                           userLocation.lng !== undefined && 
                           !isNaN(Number(userLocation.lat)) && 
                           !isNaN(Number(userLocation.lng)) && 
                           (Number(userLocation.lat) !== 0 || Number(userLocation.lng) !== 0);

    const lastPlace = validPlaces[validPlaces.length - 1];
    let originStr = '';
    let waypointsList: SthanDarshanPlace[] = [];

    if (hasUserLocation) {
      originStr = `${userLocation!.lat},${userLocation!.lng}`;
      waypointsList = validPlaces.slice(0, -1);
    } else {
      const firstPlace = validPlaces[0];
      originStr = `${firstPlace.latitude},${firstPlace.longitude}`;
      waypointsList = validPlaces.slice(1, -1);
    }

    const destinationStr = `${lastPlace.latitude},${lastPlace.longitude}`;
    const waypointsParam = waypointsList.map(w => `${w.latitude},${w.longitude}`).join('|');

    // 1. Google Maps URL
    let googleUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(originStr)}&destination=${encodeURIComponent(destinationStr)}&travelmode=driving`;
    if (waypointsParam) {
      googleUrl += `&waypoints=${encodeURIComponent(waypointsParam)}`;
    }

    // 2. Apple Maps URL
    const appleUrl = `https://maps.apple.com/?saddr=${encodeURIComponent(originStr)}&daddr=${encodeURIComponent(destinationStr)}&dirflg=d`;

    // 3. OpenStreetMap Directions URL
    const osmPoints = [originStr, ...waypointsList.map(w => `${w.latitude},${w.longitude}`), destinationStr];
    const osmUrl = `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${encodeURIComponent(osmPoints.join(';'))}`;

    setNavigationUrls({
      google: googleUrl,
      apple: appleUrl,
      osm: osmUrl
    });
    setShowNavSelector(true);
  };

  // HTML5 Drag & Drop handlers
  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    if (isNaN(sourceIndex) || sourceIndex === targetIndex) return;

    const reordered = [...yatraPlaces];
    const [removed] = reordered.splice(sourceIndex, 1);
    reordered.splice(targetIndex, 0, removed);
    
    // Update Local Storage
    const updatedIds = reordered.map(p => p.id);
    localStorage.setItem('mahanubhav_my_yatra', JSON.stringify(updatedIds));
    
    setYatraPlaces(reordered);
    window.dispatchEvent(new Event('yatra-updated'));
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Hero Banner */}
      <div className="bg-gradient-to-r from-saffron-600 to-amber-500 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12">
          <Compass className="w-64 h-64 text-white" />
        </div>
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold font-devanagari tracking-wide mb-3">
            🚩 {lang === 'mr' ? 'माझी यात्रा नियोजक' : lang === 'hi' ? 'मेरी यात्रा योजक' : 'My Pilgrimage Planner'}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight tracking-wide">
            {lang === 'mr' ? '🚩 माझी यात्रा' : lang === 'hi' ? '🚩 मेरी यात्रा' : 'My Pilgrimage'}
          </h2>
          <p className="text-sm md:text-base text-orange-50 font-devanagari mt-2.5 leading-relaxed">
            {lang === 'mr' 
              ? 'तुमच्या आवडीच्या पवित्र स्थानांचे क्रमवार नियोजन करा आणि नकाशावर प्रवासाचा मार्ग पहा. स्थाने वर-खाली खेचून (Drag & Drop) प्रवासाचा मार्ग हवा तसा बदला.' 
              : lang === 'hi'
              ? 'अपनी पसंद के पवित्र स्थानों की क्रमानुसार योजना बनाएं और मार्ग मानचित्र देखें। स्थानों को ऊपर-नीचे खींचकर (Drag & Drop) अपनी यात्रा का क्रम बदलें।'
              : 'Plan your custom pilgrimage route. Drag and drop places to change visit order, calculate distance, and navigate.'}
          </p>
        </div>
      </div>

      {yatraPlaces.length === 0 ? (
        /* Empty State with Prompt */
        <div className="bg-white border border-dashed border-saffron-200 rounded-3xl p-12 text-center shadow-xs flex flex-col items-center max-w-xl mx-auto my-12">
          <div className="w-16 h-16 rounded-full bg-saffron-50 flex items-center justify-center text-saffron-600 text-3xl mb-4 animate-bounce">
            🛕
          </div>
          <h3 className="text-lg font-bold text-gray-800 font-devanagari">
            {lang === 'mr' ? 'तुमच्या यात्रेत अजून एकही स्थान नाही!' : lang === 'hi' ? 'आपकी यात्रा में अभी कोई स्थान नहीं है!' : 'Your Yatra is empty!'}
          </h3>
          <p className="text-xs text-gray-500 font-devanagari mt-2 max-w-md leading-relaxed">
            {lang === 'mr'
              ? 'महानुभाव स्थान दर्शन टॅबमध्ये जाऊन "🛕 यात्रेत जोडा" वर क्लिक करा. येथे तुमची आवडती सर्व स्थाने व प्रवासाचा मार्ग दिसेल.'
              : lang === 'hi'
              ? 'महानुभाव स्थान दर्शन टैब में जाकर "🛕 यात्रेत जोडा" पर क्लिक करें। यहाँ आपके पसंदीदा स्थानों का यात्रा मार्ग तैयार होगा।'
              : 'Go to the Mahanubhav Sthan Darshan tab and click "🛕 यात्रेत जोडा" to build your pilgrimage plan.'}
          </p>
          <button 
            onClick={onNavigateToSthanDarshan}
            className="mt-6 px-5 py-2.5 bg-saffron-600 hover:bg-saffron-700 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5 font-devanagari cursor-pointer"
          >
            <span>{lang === 'mr' ? 'पवित्र स्थाने शोधा' : lang === 'hi' ? 'पवित्र स्थान खोजें' : 'Browse Holy Places'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* Yatra Display Layout */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Route Metrics & Map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 3-Bento Grid Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-2xs flex flex-col items-center justify-center text-center">
                <span className="text-xl">📍</span>
                <span className="text-xs text-gray-500 font-devanagari mt-1 font-semibold">{lang === 'mr' ? 'एकूण स्थाने' : lang === 'hi' ? 'कुल स्थान' : 'Total Places'}</span>
                <span className="text-lg font-black text-saffron-700 mt-1">{yatraPlaces.length}</span>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-2xs flex flex-col items-center justify-center text-center">
                <span className="text-xl">🚗</span>
                <span className="text-xs text-gray-500 font-devanagari mt-1 font-semibold">{lang === 'mr' ? 'एकूण अंतर' : lang === 'hi' ? 'कुल दूरी' : 'Total Distance'}</span>
                <span className="text-lg font-black text-saffron-700 mt-1">{metrics.totalDistance.toFixed(1)} <span className="text-xs font-bold text-gray-400">KM</span></span>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-2xs flex flex-col items-center justify-center text-center">
                <span className="text-xl">⏱️</span>
                <span className="text-xs text-gray-500 font-devanagari mt-1 font-semibold">{lang === 'mr' ? 'अंदाजे वेळ' : lang === 'hi' ? 'यात्रा समय' : 'Est. Time'}</span>
                <span className="text-sm font-black text-saffron-700 mt-1 leading-tight">
                  {metrics.hours > 0 ? `${metrics.hours}h ` : ''}{metrics.minutes}m
                </span>
              </div>
            </div>

            {/* GPS warning if any */}
            {locError && (
              <div className="p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-xs flex items-start gap-2 font-devanagari">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{lang === 'mr' ? 'स्थानाचा अंदाज:' : 'Location status:'}</p>
                  <p className="text-gray-600">{locError}</p>
                </div>
                <button onClick={fetchCurrentLocation} className="ml-auto text-[10px] bg-white border border-amber-300 hover:bg-amber-100 font-bold px-2 py-1 rounded text-amber-700 flex items-center gap-1">
                  <RefreshCw className="w-2.5 h-2.5 animate-spin-slow" />
                  {lang === 'mr' ? 'पुन्हा शोधा' : 'Retry'}
                </button>
              </div>
            )}

            {/* Interactive Google Route Map Card */}
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-800 font-devanagari">🗺️ {lang === 'mr' ? 'प्रवास नकाशा' : lang === 'hi' ? 'यात्रा मार्ग मानचित्र' : 'Pilgrimage Route Map'}</h3>
                  <p className="text-[10px] text-gray-500 font-devanagari">{lang === 'mr' ? 'पवित्र स्थाने जोडणारा सर्वोत्तम मार्गदर्शित मार्ग' : 'Connecting path of your sacred travel'}</p>
                </div>
                <button 
                  onClick={fetchCurrentLocation} 
                  disabled={locLoading}
                  className="p-1.5 border border-gray-200 text-gray-500 hover:text-saffron-600 hover:bg-saffron-50 rounded-lg transition-all"
                  title={lang === 'mr' ? 'माझे स्थान रिफ्रेश करा' : 'Refresh my location'}
                >
                  <Navigation className={`w-4 h-4 ${locLoading ? 'animate-spin' : ''}`} />
                </button>
              </div>
              
              {/* Style Injector for CSS Animations */}
              <style dangerouslySetInnerHTML={{ __html: `
                .custom-path-animated {
                  stroke-dasharray: 10, 10;
                  animation: dash 15s linear infinite;
                }
                @keyframes dash {
                  to {
                    stroke-dashoffset: -1000;
                  }
                }
              ` }} />

              {/* Map Div Container */}
              <div className="w-full h-[320px] md:h-[400px] bg-gray-50 z-10 relative rounded-2xl overflow-hidden border border-gray-100">
                <MapContainer
                  center={userLocation ? [userLocation.lat, userLocation.lng] : [19.8762, 75.3433]}
                  zoom={7}
                  style={{ width: '100%', height: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <YatraMapController
                    yatraPlaces={yatraPlaces}
                    userLocation={userLocation}
                  />

                  {/* User Location Marker */}
                  {userLocation && (
                    <Marker
                      position={[userLocation.lat, userLocation.lng]}
                      icon={L.divIcon({
                        html: `
                          <div style="position: relative; width: 14px; height: 14px; background-color: #3b82f6; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 4px rgba(0,0,0,0.4);">
                            <div style="position: absolute; inset: -3px; border-radius: 50%; background-color: rgba(59, 130, 246, 0.4); animation: ping 1.5s infinite;"></div>
                          </div>
                        `,
                        className: 'bg-transparent border-none',
                        iconSize: [14, 14],
                        iconAnchor: [7, 7]
                      })}
                    >
                      <Popup>
                        <div className="font-devanagari text-xs font-bold text-blue-700">📍 माझे स्थान (My Location)</div>
                      </Popup>
                    </Marker>
                  )}

                  {/* Route Stops Markers (Custom Saffron Pins) */}
                  {yatraPlaces.map((p, idx) => (
                    <Marker
                      key={`${p.id}-${idx}`}
                      position={[p.latitude, p.longitude]}
                      icon={L.divIcon({
                        html: `
                          <div style="transform-origin: bottom center; filter: drop-shadow(0px 3px 4px rgba(0,0,0,0.35));">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ea580c" style="width: 32px; height: 32px;">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                              <circle cx="12" cy="9" r="2.5" fill="white" />
                            </svg>
                            <div style="position: absolute; top: 4px; left: 50%; transform: translateX(-50%); font-size: 8px; color: #ea580c; font-weight: 800; font-family: sans-serif; background: white; border-radius: 50%; width: 12px; height: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 1px 2px rgba(0,0,0,0.2);">
                              ${idx + 1}
                            </div>
                          </div>
                        `,
                        className: 'bg-transparent border-none',
                        iconSize: [32, 32],
                        iconAnchor: [16, 32],
                        popupAnchor: [0, -32]
                      })}
                    >
                      <Popup>
                        <div className="p-1 font-devanagari text-xs text-left min-w-[150px] bg-white text-gray-800">
                          <div className="font-bold text-saffron-700 text-sm mb-1">🚩 {idx + 1}. {p.title}</div>
                          <div className="text-gray-600">{p.district} ({p.state || 'Maharashtra'})</div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}

                  {/* Draw Polyline path connecting the stops with weight 6 and animation */}
                  {yatraPlaces.length > 0 && (
                    <Polyline
                      positions={[
                        ...(userLocation ? [[userLocation.lat, userLocation.lng]] : []),
                        ...yatraPlaces.map((p) => [p.latitude, p.longitude] as [number, number])
                      ]}
                      color="#ea580c"
                      weight={6}
                      opacity={0.85}
                      className="custom-path-animated"
                    />
                  )}
                </MapContainer>
              </div>
            </div>

            {/* Navigation Button */}
            <button
              onClick={startYatraHandler}
              className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-bold font-devanagari tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base cursor-pointer scale-100 hover:scale-[1.01] active:scale-[0.99] duration-150"
            >
              <Compass className="w-5 h-5 animate-pulse" />
              <span>🧭 {lang === 'mr' ? 'यात्रा सुरू करा' : lang === 'hi' ? 'यात्रा शुरू करें' : 'Start Pilgrimage'}</span>
            </button>

            {/* Platform Navigation Modal Selector */}
            {showNavSelector && navigationUrls && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-[9999] p-4">
                <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-gray-100 relative animate-in fade-in zoom-in duration-200">
                  <button 
                    onClick={() => setShowNavSelector(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
                  >
                    ✕
                  </button>
                  <h3 className="text-base font-bold text-gray-800 font-devanagari mb-2 text-center">
                    {lang === 'mr' ? '🧭 प्रवासाचे साधन निवडा' : '🧭 Select Navigation App'}
                  </h3>
                  <p className="text-xs text-gray-500 text-center font-devanagari mb-5">
                    {lang === 'mr' ? 'प्रवासाचा मार्ग उघडण्यासाठी खालीलपैकी एका नकाशा ॲपवर टॅप करा.' : 'Select a mapping application to begin turn-by-turn routing.'}
                  </p>
                  
                  <div className="space-y-3">
                    <a
                      href={navigationUrls.google}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowNavSelector(false)}
                      className="w-full py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-xl flex items-center justify-between transition-all"
                    >
                      <span className="font-devanagari text-sm">🌐 Google Maps</span>
                      <span className="text-xs text-blue-500 font-semibold font-sans">Open ↗</span>
                    </a>
                    
                    <a
                      href={navigationUrls.apple}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowNavSelector(false)}
                      className="w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold rounded-xl flex items-center justify-between transition-all"
                    >
                      <span className="font-devanagari text-sm">🍎 Apple Maps (iOS Only)</span>
                      <span className="text-xs text-gray-400 font-semibold font-sans">Open ↗</span>
                    </a>

                    <a
                      href={navigationUrls.osm}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowNavSelector(false)}
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

          {/* Right Column: Draggable Places List */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-800 font-devanagari">📋 {lang === 'mr' ? 'स्थानांचा प्रवास क्रम' : lang === 'hi' ? 'स्थानों की यात्रा सूची' : 'Pilgrimage Stop Order'}</h3>
                <p className="text-[10px] text-gray-500 font-devanagari">{lang === 'mr' ? 'क्रमाने प्रवास बदलण्यासाठी कार्ड ओढून वर-खाली ठेवा.' : 'Drag card to reorder pilgrimage stops.'}</p>
              </div>
            </div>

            <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1 custom-scrollbar">
              {yatraPlaces.map((p, index) => {
                // Calculate distance from user's current location (or reference) if available
                const distanceVal = userLocation 
                  ? getHaversineDistance(userLocation.lat, userLocation.lng, p.latitude, p.longitude)
                  : getHaversineDistance(defaultCenter.lat, defaultCenter.lng, p.latitude, p.longitude);

                const isFav = favorites.includes(p.id);

                return (
                  <div
                    key={p.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                    className="bg-white border border-gray-100 rounded-2xl p-3 shadow-2xs hover:shadow-xs transition-all flex items-center gap-3 select-none active:bg-saffron-50/20 group border-l-4 border-l-saffron-500"
                  >
                    {/* Drag Handle */}
                    <div className="text-gray-400 hover:text-saffron-600 cursor-grab shrink-0 p-1">
                      <GripVertical className="w-4 h-4" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="w-6 h-6 rounded-full bg-saffron-50 border border-saffron-200 text-saffron-700 font-bold text-xs flex items-center justify-center shrink-0">
                      {index + 1}
                    </div>

                    {/* Place Image */}
                    <img 
                      src={p.photoUrl || (p.images && p.images[0]) || 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=200&auto=format&fit=crop'} 
                      alt={p.title}
                      className="w-12 h-12 rounded-xl object-cover border border-gray-100 shrink-0"
                    />

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-gray-800 font-devanagari truncate" title={p.title}>
                        {p.title}
                      </h4>
                      <p className="text-[10px] text-gray-500 font-devanagari mt-0.5">
                        📍 {p.district || p.taluka || '-'}
                      </p>
                      
                      {/* Distance */}
                      <p className="text-[9px] font-bold text-saffron-600 mt-1 flex items-center gap-0.5">
                        <span>🚗</span>
                        <span>
                          {lang === 'mr' ? 'साधारण' : 'Approx.'} {distanceVal.toFixed(1)} KM
                        </span>
                      </p>
                    </div>

                    {/* Quick Action Button Group */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      
                      {/* Toggle Favorite Heart Icon */}
                      <button 
                        onClick={() => toggleFavorite(p.id)}
                        className={`p-1.5 rounded-lg border transition-all ${
                          isFav 
                            ? 'bg-rose-50 border-rose-200 text-rose-500' 
                            : 'bg-white border-gray-100 text-gray-400 hover:text-rose-500 hover:bg-rose-50/50'
                        }`}
                        title={isFav ? 'आवडत्या मधून काढा' : 'आवडते म्हणून चिन्हांकित करा'}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500' : ''}`} />
                      </button>

                      {/* Remove Button */}
                      <button 
                        onClick={() => handleRemovePlace(p.id)}
                        className="p-1.5 bg-gray-50 border border-gray-100 text-gray-400 hover:text-red-500 hover:bg-red-50 hover:border-red-100 rounded-lg transition-all"
                        title={lang === 'mr' ? 'यात्रेतून काढा' : 'Remove stop'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Safe guidelines footer */}
            <div className="p-3 bg-gray-50 rounded-2xl text-[10px] text-gray-500 font-devanagari leading-relaxed">
              💡 <b>मार्गदर्शन टीप:</b> आपल्या प्रवास यादीतील स्थानांना क्रमाने जोडणारा मार्ग नकाशामध्ये दाखवला आहे. तुम्ही एका क्लिकवर <b>"यात्रा सुरू करा"</b> वर टॅप करून गुगल मॅप्स द्वारे आपल्या वाहनाचा संपूर्ण मार्ग आणि दिशानिर्देश मिळवू शकता.
            </div>

          </div>

        </div>
      )}

    </div>
  );

  function startYatraHandler() {
    handleStartYatra();
  }
}

// Leaflet camera and bounds controller for MyYatra
function YatraMapController({
  yatraPlaces,
  userLocation,
}: {
  yatraPlaces: SthanDarshanPlace[];
  userLocation: { lat: number; lng: number } | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map || yatraPlaces.length === 0) return;

    const coordinates: [number, number][] = [];
    if (userLocation) {
      coordinates.push([userLocation.lat, userLocation.lng]);
    }
    yatraPlaces.forEach((p) => {
      coordinates.push([p.latitude, p.longitude]);
    });

    if (coordinates.length === 1) {
      map.setView(coordinates[0], 10);
      return;
    }

    const bounds = L.latLngBounds(coordinates);
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map, yatraPlaces, userLocation]);

  return null;
}
