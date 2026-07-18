import React, { useMemo, useState } from 'react';
import { SthanDarshanPlace } from '../types';
import { MapPin, Navigation, Compass, Star, ChevronRight, Eye } from 'lucide-react';

interface NearbyPlacesProps {
  places: SthanDarshanPlace[];
  userLocation: [number, number] | null;
  lang: 'hi' | 'mr' | 'en';
  onSelectPlace: (place: SthanDarshanPlace) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  onRequestLocation: () => void;
}

// Haversine formula
export function getDistanceInKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Compute cardinal direction based on bearing
export function getCardinalDirection(lat1: number, lon1: number, lat2: number, lon2: number, lang: 'hi' | 'mr' | 'en'): string {
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const lat1Rad = lat1 * Math.PI / 180;
  const lat2Rad = lat2 * Math.PI / 180;

  const y = Math.sin(dLon) * Math.cos(lat2Rad);
  const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) - Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLon);
  let bearing = Math.atan2(y, x) * 180 / Math.PI;
  bearing = (bearing + 360) % 360;

  const index = Math.floor(((bearing + 22.5) % 360) / 45);
  
  const directions = {
    mr: ['उत्तर (N)', 'ईशान्य (NE)', 'पूर्व (E)', 'आग्नेय (SE)', 'दक्षिण (S)', 'नैऋत्य (SW)', 'पश्चिम (W)', 'वायव्य (NW)'],
    hi: ['उत्तर (N)', 'उत्तर-पूर्व (NE)', 'पूर्व (E)', 'दक्षिण-पूर्व (SE)', 'दक्षिण (S)', 'दक्षिण-पश्चिम (SW)', 'पश्चिम (W)', 'उत्तर-पश्चिम (NW)'],
    en: ['North (N)', 'Northeast (NE)', 'East (E)', 'Southeast (SE)', 'South (S)', 'Southwest (SW)', 'West (W)', 'Northwest (NW)']
  };

  return directions[lang][index] || directions[lang][0];
}

// Estimate travel time (car average 45km/h)
export function estimateTravelTime(distKm: number, lang: 'hi' | 'mr' | 'en'): string {
  const speedKmh = 45; 
  const totalHours = distKm / speedKmh;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);

  if (lang === 'mr') {
    if (hours === 0) return `${minutes} मिनिटे`;
    return `${hours} तास ${minutes} मिनिटे`;
  }
  if (lang === 'hi') {
    if (hours === 0) return `${minutes} मिनट`;
    return `${hours} घंटे ${minutes} मिनट`;
  }
  if (hours === 0) return `${minutes} mins`;
  return `${hours} hr ${minutes} mins`;
}

// External navigation link helper based on platform
export function getExternalNavUrl(latitude: number, longitude: number, title: string): string {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  if (isIOS) {
    return `maps://?q=${latitude},${longitude}`;
  }
  // Android/Web default
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
}

export default function NearbyPlaces({
  places,
  userLocation,
  lang,
  onSelectPlace,
  favorites,
  toggleFavorite,
  onRequestLocation
}: NearbyPlacesProps) {
  const [rangeFilter, setRangeFilter] = useState<'5' | '10' | '25' | '50' | 'all'>('25');

  // Compute and sort nearby places
  const sortedNearby = useMemo(() => {
    if (!userLocation) return [];

    const listWithDist = places.map(p => {
      const distance = getDistanceInKm(userLocation[0], userLocation[1], p.latitude, p.longitude);
      const direction = getCardinalDirection(userLocation[0], userLocation[1], p.latitude, p.longitude, lang);
      const travelTime = estimateTravelTime(distance, lang);
      return { ...p, distance, direction, travelTime };
    });

    // Sort by nearest
    const sorted = listWithDist.sort((a, b) => a.distance - b.distance);

    // Filter by selected range
    if (rangeFilter === 'all') return sorted;
    const limit = parseFloat(rangeFilter);
    return sorted.filter(p => p.distance <= limit);
  }, [places, userLocation, rangeFilter, lang]);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="font-bold text-gray-800 text-sm md:text-base font-devanagari flex items-center gap-2">
            <Compass className="w-5 h-5 text-saffron-600 animate-spin-slow" />
            {lang === 'mr' ? 'जवळपासची स्थाने' : lang === 'hi' ? 'आसपास के स्थान' : 'Nearby Holy Places'}
          </h3>
          <p className="text-[10px] text-gray-500 mt-0.5">
            {lang === 'mr' ? 'माझ्या वर्तमान स्थानावरून अंतर आणि दिशा' : lang === 'hi' ? 'मेरे वर्तमान स्थान से दूरी और दिशा' : 'Distance and direction from my live location'}
          </p>
        </div>

        {userLocation && (
          <div className="flex items-center gap-2 shrink-0">
            <label className="text-xs font-semibold text-gray-500 font-devanagari">
              {lang === 'mr' ? 'त्रिज्‍येची मर्यादा:' : lang === 'hi' ? 'त्रिज्या सीमा:' : 'Radius Limit:'}
            </label>
            <select
              value={rangeFilter}
              onChange={(e) => setRangeFilter(e.target.value as any)}
              className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-xs font-bold text-gray-700 focus:outline-none focus:ring-1 focus:ring-saffron-500 cursor-pointer"
            >
              <option value="5">5 KM</option>
              <option value="10">10 KM</option>
              <option value="25">25 KM</option>
              <option value="50">50 KM</option>
              <option value="all">{lang === 'mr' ? 'सर्व' : lang === 'hi' ? 'सभी' : 'All'}</option>
            </select>
          </div>
        )}
      </div>

      {!userLocation ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center py-10 px-4 bg-amber-50/40 rounded-xl border border-dashed border-amber-200">
          <MapPin className="w-10 h-10 text-saffron-500 mb-2.5 animate-bounce" />
          <h4 className="font-bold text-gray-800 text-sm font-devanagari">
            {lang === 'mr' ? 'GPS स्थान प्रवेश आवश्यक आहे' : lang === 'hi' ? 'GPS स्थान पहुंच आवश्यक है' : 'GPS Location Access Required'}
          </h4>
          <p className="text-xs text-gray-500 max-w-xs mt-1.5 font-devanagari">
            {lang === 'mr' ? 'आपल्या सभोवतालची मंदिरे आणि त्यांचे अचूक अंतर पाहण्यासाठी आपले GPS स्थान सुरू करा.' : lang === 'hi' ? 'अपने आसपास के मंदिरों और उनकी सही दूरी देखने के लिए कृपया अपना जीपीएस चालू करें।' : 'Turn on your GPS location to instantly identify sacred temples closest to you.'}
          </p>
          <button
            onClick={onRequestLocation}
            className="mt-4 bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs py-2 px-4 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <span>📍 {lang === 'mr' ? 'स्थान सुरू करा' : lang === 'hi' ? 'स्थान शुरू करें' : 'Enable Location'}</span>
          </button>
        </div>
      ) : sortedNearby.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center py-12 text-gray-400">
          <MapPin className="w-8 h-8 text-gray-300 mb-2" />
          <p className="text-xs font-devanagari">
            {lang === 'mr' ? 'निवडलेल्या त्रिज्‍येमध्ये कोणतेही स्थान आढळले नाही.' : lang === 'hi' ? 'चयनित त्रिज्या में कोई स्थान नहीं मिला।' : 'No holy places found within the selected radius.'}
          </p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto max-h-[450px] space-y-2.5 pr-1 custom-scrollbar">
          {sortedNearby.map((p) => {
            const isFav = favorites.includes(p.id);
            return (
              <div
                key={p.id}
                onClick={() => onSelectPlace(p)}
                className="p-3 bg-white hover:bg-saffron-50/30 rounded-xl border border-gray-100 hover:border-saffron-200 transition-all flex items-start gap-3 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center font-bold text-xs shrink-0 font-sans mt-0.5">
                  {p.number}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-1">
                    <h4 className="font-bold text-gray-800 text-xs sm:text-sm font-devanagari truncate group-hover:text-saffron-700 transition-all">
                      {p.title}
                    </h4>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(p.id);
                      }}
                      className="p-1 hover:bg-saffron-100/50 rounded text-gray-400 hover:text-saffron-600 transition-all shrink-0"
                    >
                      <Star className={`w-3.5 h-3.5 ${isFav ? 'fill-saffron-500 text-saffron-500' : ''}`} />
                    </button>
                  </div>
                  
                  <div className="text-[10px] text-gray-500 mt-1 flex flex-wrap gap-x-2 gap-y-1 font-devanagari">
                    <span>🏢 {p.district} • {p.taluka}</span>
                    <span className="text-blue-600 font-sans font-bold">📍 {p.distance.toFixed(1)} KM</span>
                    <span className="text-emerald-600 font-sans">⏱️ ~{p.travelTime}</span>
                  </div>

                  <div className="text-[9px] text-gray-400 mt-1 flex items-center gap-1 font-devanagari">
                    <Compass className="w-3 h-3 text-saffron-500 shrink-0" />
                    <span>दिशा: <strong className="text-gray-600">{p.direction}</strong></span>
                  </div>

                  <div className="flex gap-2 mt-2.5 pt-2 border-t border-gray-50">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPlace(p);
                      }}
                      className="text-[10px] bg-saffron-50 hover:bg-saffron-100 text-saffron-700 font-bold px-2 py-1 rounded flex items-center gap-1 transition-all"
                    >
                      <Eye className="w-3 h-3" />
                      <span>{lang === 'mr' ? 'नकाशावर पहा' : lang === 'hi' ? 'नक्शे पर देखें' : 'View on Map'}</span>
                    </button>
                    <a
                      href={getExternalNavUrl(p.latitude, p.longitude, p.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[10px] bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded flex items-center gap-1 transition-all"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>{lang === 'mr' ? 'मार्गदर्शन' : lang === 'hi' ? 'दिशा-निर्देश' : 'Navigate'}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
