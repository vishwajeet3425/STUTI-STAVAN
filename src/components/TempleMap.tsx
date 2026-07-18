import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline, Polygon, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { SthanDarshanPlace } from '../types';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { 
  Maximize2, Minimize2, Compass, Navigation, Layers, 
  MapPin, RefreshCw, ZoomIn, ZoomOut, Home, Ruler, Activity, Info
} from 'lucide-react';
import MapController from './MapController';
import { getDistanceInKm, getExternalNavUrl, estimateTravelTime } from './NearbyPlaces';

interface TempleMapProps {
  places: SthanDarshanPlace[];
  selectedPlace: SthanDarshanPlace | null;
  setSelectedPlace: (place: SthanDarshanPlace | null) => void;
  userLocation: [number, number] | null;
  setUserLocation: (loc: [number, number] | null) => void;
  panToUserTrigger: number;
  setPanToUserTrigger: React.Dispatch<React.SetStateAction<number>>;
  lang: 'hi' | 'mr' | 'en';
  searchQuery: string;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  selectedDistrict: string;
  yatraRouteIds?: string[]; // Multiple temples for PILGRIMAGE mode
}

// Sample coordinates representing approximate boundaries of major Maharashtra districts for GeoJSON overlay
const DISTRICT_BOUNDARIES: Record<string, [number, number][]> = {
  'Amravati': [
    [21.46, 77.30], [21.50, 78.10], [20.80, 78.15], [20.70, 77.20], [21.15, 76.90], [21.46, 77.30]
  ],
  'Aurangabad': [
    [20.60, 75.00], [20.65, 75.80], [19.50, 75.90], [19.45, 75.10], [19.90, 74.80], [20.60, 75.00]
  ],
  'Ahmednagar': [
    [19.90, 74.10], [19.80, 75.10], [18.90, 75.30], [18.50, 74.90], [18.40, 74.20], [19.10, 73.60], [19.90, 74.10]
  ],
  'Nashik': [
    [20.85, 73.80], [20.90, 74.60], [20.20, 74.80], [19.65, 74.30], [19.55, 73.65], [20.25, 73.40], [20.85, 73.80]
  ],
  'Pune': [
    [19.30, 73.50], [19.20, 74.20], [18.70, 74.80], [17.90, 74.50], [17.95, 73.50], [18.60, 73.30], [19.30, 73.50]
  ],
  'Buldhana': [
    [21.10, 75.95], [21.15, 76.80], [19.85, 76.65], [19.90, 75.90], [20.50, 75.85], [21.10, 75.95]
  ],
  'Nanded': [
    [19.60, 77.10], [19.55, 78.15], [18.65, 78.10], [18.60, 77.30], [19.10, 76.90], [19.60, 77.10]
  ],
  'Jalna': [
    [20.30, 75.60], [20.40, 76.35], [19.55, 76.25], [19.50, 75.65], [20.30, 75.60]
  ],
  'Beed': [
    [19.35, 75.25], [19.40, 76.40], [18.60, 76.20], [18.55, 75.40], [18.90, 74.85], [19.35, 75.25]
  ]
};

export default function TempleMap({
  places,
  selectedPlace,
  setSelectedPlace,
  userLocation,
  setUserLocation,
  panToUserTrigger,
  setPanToUserTrigger,
  lang,
  searchQuery,
  favorites,
  toggleFavorite,
  selectedDistrict,
  yatraRouteIds = []
}: TempleMapProps) {
  const [mapType, setMapType] = useState<'street' | 'satellite' | 'terrain'>('street');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showDensityHeatmap, setShowDensityHeatmap] = useState(false);
  
  // Measuring Tool States
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [measurePoints, setMeasurePoints] = useState<[number, number][]>([]);

  // Telemetry details
  const [telemetry, setTelemetry] = useState<{
    speed: number | null;
    altitude: number | null;
    heading: number | null;
    accuracy: number | null;
  }>({
    speed: null,
    altitude: null,
    heading: null,
    accuracy: null
  });

  const mapRef = useRef<L.Map | null>(null);

  // Fullscreen support
  const toggleFullscreen = () => {
    const mapElement = document.querySelector('.main-leaflet-map-frame');
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

  // Browser Geolocation with Live updates
  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert(lang === 'mr' ? 'आपल्या ब्राउझरमध्ये स्थान शोधणे उपलब्ध नाही.' : 'Browser does not support geolocation.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude, speed, altitude, heading, accuracy } = pos.coords;
        setUserLocation([latitude, longitude]);
        setTelemetry({ speed, altitude, heading, accuracy });
        setPanToUserTrigger(prev => prev + 1);
      },
      (err) => {
        console.error("Location error:", err);
        alert(lang === 'mr' ? 'स्थान ओळखण्यात त्रुटी आली.' : 'Error getting your current location.');
      },
      { enableHighAccuracy: true }
    );
  };

  // Watch GPS Location for continuous updates
  useEffect(() => {
    if (!navigator.geolocation) return;
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude, speed, altitude, heading, accuracy } = pos.coords;
        setUserLocation([latitude, longitude]);
        setTelemetry({ speed, altitude, heading, accuracy });
      },
      (err) => console.log('Continuous tracking offline', err),
      { enableHighAccuracy: true, timeout: 10000 }
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, [setUserLocation]);

  // Bhagwa Marker Icon Creator
  const getMarkerIcon = (isSelected: boolean, isSearchingMatch: boolean) => {
    const bounceClass = isSelected ? 'marker-bounce-selected' : (isSearchingMatch ? 'marker-bounce' : '');
    const color = isSelected ? '#ea580c' : '#f97316'; // Saffron Sannyasi Bhagwa color
    const glowStyle = isSelected ? 'filter: drop-shadow(0 0 12px rgba(234, 88, 12, 0.85));' : 'filter: drop-shadow(0px 3px 4px rgba(0,0,0,0.35));';

    const svgHtml = `
      <div class="${bounceClass}" style="transform-origin: bottom center; ${glowStyle}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" style="width: 38px; height: 38px;">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          <circle cx="12" cy="9" r="2.5" fill="white" />
        </svg>
        <div style="position: absolute; bottom: 0; left: 50%; width: 6px; height: 6px; background: rgba(0,0,0,0.3); border-radius: 50%; transform: translateX(-50%); filter: blur(1px);"></div>
      </div>
    `;

    return L.divIcon({
      html: svgHtml,
      className: 'bg-transparent border-none',
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38]
    });
  };

  // Measurement click listener inside leaflet map
  function MeasurementListener() {
    useMapEvents({
      click(e) {
        if (isMeasuring) {
          setMeasurePoints(prev => [...prev, [e.latlng.lat, e.latlng.lng]]);
        }
      }
    });
    return null;
  }

  // Calculate measured total distance
  const measuredDistance = useMemo(() => {
    if (measurePoints.length < 2) return 0;
    let dist = 0;
    for (let i = 0; i < measurePoints.length - 1; i++) {
      dist += getDistanceInKm(
        measurePoints[i][0], measurePoints[i][1],
        measurePoints[i + 1][0], measurePoints[i + 1][1]
      );
    }
    return dist;
  }, [measurePoints]);

  // Pilgrimage Route Coordinates Calculation
  const yatraRouteCoords = useMemo(() => {
    if (yatraRouteIds.length === 0) return [];
    const coords: [number, number][] = [];
    if (userLocation) coords.push(userLocation);
    
    yatraRouteIds.forEach(id => {
      const found = places.find(p => p.id === id);
      if (found) coords.push([found.latitude, found.longitude]);
    });
    return coords;
  }, [places, yatraRouteIds, userLocation]);

  // Pilgrimage Route statistics
  const yatraStats = useMemo(() => {
    if (yatraRouteCoords.length < 2) return null;
    let dist = 0;
    for (let i = 0; i < yatraRouteCoords.length - 1; i++) {
      dist += getDistanceInKm(
        yatraRouteCoords[i][0], yatraRouteCoords[i][1],
        yatraRouteCoords[i + 1][0], yatraRouteCoords[i + 1][1]
      );
    }
    return {
      distance: dist,
      time: estimateTravelTime(dist, lang),
      stops: yatraRouteIds.length
    };
  }, [yatraRouteCoords, yatraRouteIds, lang]);

  // District GeoJSON Highlight Polygon Coordinates
  const districtPolygon = useMemo(() => {
    if (selectedDistrict === 'all') return null;
    return DISTRICT_BOUNDARIES[selectedDistrict] || null;
  }, [selectedDistrict]);

  // TileLayer URL selector
  const tileLayerUrl = useMemo(() => {
    if (mapType === 'satellite') {
      return "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
    }
    if (mapType === 'terrain') {
      return "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png";
    }
    return "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  }, [mapType]);

  const tileLayerAttribution = useMemo(() => {
    if (mapType === 'satellite') {
      return 'Tiles &copy; Esri &mdash; Source: Esri, USDA, USGS, AEX, GeoEye, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
    }
    if (mapType === 'terrain') {
      return 'Tiles &copy; OpenTopoMap (CC-BY-SA)';
    }
    return '&copy; OpenStreetMap contributors';
  }, [mapType]);

  // Style Injector for CSS Bounce Animation, glow & styles
  return (
    <div className="main-leaflet-map-frame relative w-full h-full flex flex-col bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marker-bounce-anim {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        @keyframes marker-glow-anim {
          0%, 100% { transform: translateY(0) scale(1.05); filter: drop-shadow(0 0 6px rgba(234, 88, 12, 0.7)); }
          50% { transform: translateY(-15px) scale(1.15); filter: drop-shadow(0 0 16px rgba(234, 88, 12, 0.95)); }
        }
        .marker-bounce {
          animation: marker-bounce-anim 1s infinite ease-in-out;
        }
        .marker-bounce-selected {
          animation: marker-glow-anim 0.8s infinite ease-in-out;
        }
        .leaflet-container:fullscreen {
          width: 100% !important;
          height: 100% !important;
          border-radius: 0 !important;
        }
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

      {/* Map Controls Toolbar overlay */}
      <div className="absolute top-2 left-2 z-[1000] flex flex-col gap-1.5 pointer-events-auto">
        {/* Toggle Layer (Street / Satellite / Terrain) */}
        <div className="flex bg-white/95 backdrop-blur-md p-1 rounded-xl shadow-md border border-gray-100 items-center gap-1">
          <button
            type="button"
            onClick={() => setMapType('street')}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${mapType === 'street' ? 'bg-saffron-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {lang === 'mr' ? 'नकाशा' : 'Street'}
          </button>
          <button
            type="button"
            onClick={() => setMapType('satellite')}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${mapType === 'satellite' ? 'bg-saffron-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {lang === 'mr' ? 'उपग्रह' : 'Satellite'}
          </button>
          <button
            type="button"
            onClick={() => setMapType('terrain')}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${mapType === 'terrain' ? 'bg-saffron-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {lang === 'mr' ? 'भूप्रदेश' : 'Terrain'}
          </button>
        </div>

        {/* Fullscreen Button */}
        <button
          type="button"
          onClick={toggleFullscreen}
          className="bg-white/95 backdrop-blur-md p-2 rounded-xl border border-gray-100 shadow-md text-gray-700 hover:bg-white transition-all flex items-center justify-center cursor-pointer"
          title={lang === 'mr' ? 'पूर्ण स्क्रीन' : 'Fullscreen'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4 text-saffron-600" /> : <Maximize2 className="w-4 h-4 text-saffron-600" />}
        </button>

        {/* Locate Me Button */}
        <button
          type="button"
          onClick={handleGetCurrentLocation}
          className="bg-white/95 backdrop-blur-md p-2 rounded-xl border border-gray-100 shadow-md text-gray-700 hover:bg-white transition-all flex items-center justify-center cursor-pointer"
          title={lang === 'mr' ? 'माझे स्थान शोधा' : 'Locate Me'}
        >
          <Navigation className="w-4 h-4 text-blue-600" />
        </button>

        {/* Measure Distance Tool Toggle */}
        <button
          type="button"
          onClick={() => {
            setIsMeasuring(!isMeasuring);
            setMeasurePoints([]);
          }}
          className={`bg-white/95 backdrop-blur-md p-2 rounded-xl border shadow-md transition-all flex items-center justify-center cursor-pointer ${isMeasuring ? 'border-saffron-500 bg-saffron-50' : 'border-gray-100 text-gray-700'}`}
          title={lang === 'mr' ? 'अंतर मोजा' : 'Measure Distance'}
        >
          <Ruler className={`w-4 h-4 ${isMeasuring ? 'text-saffron-600 animate-pulse' : 'text-gray-600'}`} />
        </button>

        {/* Density Heatmap Toggle */}
        <button
          type="button"
          onClick={() => setShowDensityHeatmap(!showDensityHeatmap)}
          className={`bg-white/95 backdrop-blur-md p-2 rounded-xl border shadow-md transition-all flex items-center justify-center cursor-pointer ${showDensityHeatmap ? 'border-orange-500 bg-orange-50' : 'border-gray-100 text-gray-700'}`}
          title={lang === 'mr' ? 'भेट देणाऱ्यांची घनता' : 'Density Heatmap'}
        >
          <Activity className={`w-4 h-4 ${showDensityHeatmap ? 'text-orange-600' : 'text-gray-600'}`} />
        </button>

        {/* Reset View Button */}
        <button
          type="button"
          onClick={() => {
            if (mapRef.current) {
              mapRef.current.flyTo([19.4, 76.2], 7, { duration: 1.5 });
            }
          }}
          className="bg-white/95 backdrop-blur-md p-2 rounded-xl border border-gray-100 shadow-md text-gray-700 hover:bg-white transition-all flex items-center justify-center cursor-pointer"
          title={lang === 'mr' ? 'मुख्य स्थान' : 'Reset View'}
        >
          <Home className="w-4 h-4 text-emerald-600" />
        </button>
      </div>

      {/* Measurement HUD banner */}
      {isMeasuring && (
        <div className="absolute top-2 right-2 z-[1000] bg-black/85 backdrop-blur-md text-white p-2.5 rounded-xl text-xs font-devanagari flex flex-col gap-1 shadow-lg border border-white/10 max-w-[200px]">
          <span className="font-bold text-amber-400">📏 अंतर मोजणी चालू आहे</span>
          <p className="text-[10px] text-gray-300">नकाशावर वेगवेगळ्या बिंदूंवर क्लिक करा.</p>
          <div className="text-sm font-bold font-sans mt-1 text-emerald-400">
            {measuredDistance.toFixed(2)} KM
          </div>
          <button
            onClick={() => setMeasurePoints([])}
            className="mt-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-[9px] py-1 px-2 rounded cursor-pointer"
          >
            साफ करा (Reset)
          </button>
        </div>
      )}

      {/* Telemetry HUD display */}
      {userLocation && (
        <div className="absolute bottom-2 left-2 z-[1000] bg-black/80 backdrop-blur-md text-white p-2.5 rounded-xl text-[9px] font-mono shadow border border-white/10 flex flex-col gap-0.5 select-none pointer-events-none">
          <span className="font-sans text-amber-400 font-extrabold text-[10px] mb-0.5">📡 Live GPS Telemetry</span>
          <span>LAT: {userLocation[0].toFixed(5)}°</span>
          <span>LNG: {userLocation[1].toFixed(5)}°</span>
          <span>ACC: {telemetry.accuracy ? `${telemetry.accuracy.toFixed(1)} m` : 'N/A'}</span>
          <span>SPD: {telemetry.speed ? `${(telemetry.speed * 3.6).toFixed(1)} km/h` : '0.0 km/h'}</span>
          <span>ALT: {telemetry.altitude ? `${telemetry.altitude.toFixed(1)} m` : 'N/A'}</span>
        </div>
      )}

      {/* Pilgrimage Yatra HUD overlay */}
      {yatraStats && (
        <div className="absolute bottom-12 right-2 z-[1000] bg-orange-600/95 backdrop-blur-md text-white p-3 rounded-2xl shadow-xl max-w-xs text-xs font-devanagari flex flex-col gap-1 border border-orange-500">
          <div className="flex items-center gap-1.5 font-bold text-[13px]">
            <span className="animate-pulse">🚩</span>
            <span>माझी यात्रा मार्ग तपशील</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center mt-1 pt-1 border-t border-white/20">
            <div>
              <div className="text-[10px] text-orange-200">एकूण अंतर</div>
              <div className="font-sans font-black text-sm">{yatraStats.distance.toFixed(1)} KM</div>
            </div>
            <div>
              <div className="text-[10px] text-orange-200">अंदाजे वेळ</div>
              <div className="font-black text-[11px] leading-tight mt-0.5">{yatraStats.time}</div>
            </div>
            <div>
              <div className="text-[10px] text-orange-200">थांबे / मंदिरे</div>
              <div className="font-sans font-black text-sm">{yatraStats.stops}</div>
            </div>
          </div>
        </div>
      )}

      {/* Main Leaflet Container */}
      <MapContainer
        center={[19.4, 76.2]}
        zoom={7}
        ref={(m) => { if (m) mapRef.current = m; }}
        style={{ width: '100%', height: '100%', outline: 'none' }}
        zoomControl={false} // Disable default zoom to position manually or use default zoom buttons
      >
        <TileLayer
          url={tileLayerUrl}
          attribution={tileLayerAttribution}
        />

        {/* Dynamic Map Events & Controller */}
        <MapController
          selectedPlace={selectedPlace}
          filteredPlaces={places}
          userLocation={userLocation}
          panToUserTrigger={panToUserTrigger}
          compassHeading={telemetry.heading}
        />

        <MeasurementListener />

        {/* Measure Tool Points and Polyline */}
        {isMeasuring && measurePoints.length > 0 && (
          <>
            {measurePoints.map((pt, idx) => (
              <Marker
                key={idx}
                position={pt}
                icon={L.divIcon({
                  html: `<div class="w-3 h-3 bg-red-600 border-2 border-white rounded-full"></div>`,
                  className: 'bg-transparent border-none',
                  iconSize: [12, 12],
                  iconAnchor: [6, 6]
                })}
              />
            ))}
            {measurePoints.length >= 2 && (
              <Polyline
                positions={measurePoints}
                color="#dc2626"
                weight={3}
                dashArray="5, 5"
              />
            )}
          </>
        )}

        {/* GeoJSON District Highlight border (Polygon) */}
        {districtPolygon && (
          <Polygon
            positions={districtPolygon}
            pathOptions={{
              color: '#f97316',
              fillColor: '#fdba74',
              fillOpacity: 0.25,
              weight: 3,
              dashArray: '5, 5'
            }}
          />
        )}

        {/* Draw active destination route (from user GPS to selected temple) */}
        {userLocation && selectedPlace && !isMeasuring && (
          <Polyline
            positions={[
              userLocation,
              [selectedPlace.latitude, selectedPlace.longitude]
            ]}
            color="#ea580c"
            weight={6}
            opacity={0.85}
            className="custom-path-animated"
          />
        )}

        {/* Draw Pilgrimage (Yatra) Route */}
        {yatraRouteCoords.length >= 2 && !selectedPlace && (
          <Polyline
            positions={yatraRouteCoords}
            color="#f97316"
            weight={6}
            opacity={0.85}
            className="custom-path-animated"
          />
        )}

        {/* Render Visitor Density Heatmap Rings if active */}
        {showDensityHeatmap && (
          places.map((p) => {
            // Generate pseudo-density index based on location number or preset
            const idNum = parseInt(p.id.replace(/\D/g, '')) || 1;
            const visitors = (idNum * 179) % 5000 + 500;
            const radius = Math.min(25000, visitors * 4);
            const color = visitors > 3500 ? '#ef4444' : (visitors > 1800 ? '#f97316' : '#22c55e');
            return (
              <Circle
                key={`heat-${p.id}`}
                center={[p.latitude, p.longitude]}
                radius={radius}
                pathOptions={{
                  color: color,
                  fillColor: color,
                  fillOpacity: 0.18,
                  weight: 1
                }}
              />
            );
          })
        )}

        {/* User live location point & accuracy circle */}
        {userLocation && (
          <>
            <Marker
              position={userLocation}
              icon={L.divIcon({
                html: `
                  <div style="position: relative; width: 18px; height: 18px; background-color: #2563eb; border: 2.5px solid white; border-radius: 50%; box-shadow: 0 0 6px rgba(0,0,0,0.6);">
                    <div style="position: absolute; inset: -4px; border-radius: 50%; background-color: rgba(37, 99, 235, 0.35); animation: ping 1.5s infinite;"></div>
                  </div>
                `,
                className: 'bg-transparent border-none',
                iconSize: [18, 18],
                iconAnchor: [9, 9]
              })}
            >
              <Popup>
                <div className="font-devanagari text-xs text-center p-1.5 text-gray-800">
                  <div className="font-bold text-blue-700">📍 माझे वर्तमान स्थान (Live Location)</div>
                  {telemetry.accuracy && <div className="text-[10px] text-gray-500 mt-0.5">अचूकता: ~{telemetry.accuracy.toFixed(0)} मीटर</div>}
                </div>
              </Popup>
            </Marker>
            <Circle
              center={userLocation}
              radius={telemetry.accuracy || 150}
              pathOptions={{
                color: '#2563eb',
                fillColor: '#2563eb',
                fillOpacity: 0.12,
                weight: 1.5
              }}
            />
          </>
        )}

        {/* Marker Clustering */}
        <MarkerClusterGroup
          chunkedLoading
          spiderfyOnMaxZoom
          showCoverageOnHover={false}
        >
          {places.map((p) => {
            const isSelected = selectedPlace?.id === p.id;
            const isSearchingMatch = searchQuery.trim() !== '' && (
              p.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
              (p.titleEn && p.titleEn.toLowerCase().includes(searchQuery.toLowerCase().trim()))
            );

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
                  <div className="p-3 font-devanagari text-xs text-left min-w-[220px] bg-white text-gray-800 rounded-xl leading-relaxed">
                    <div className="font-bold text-saffron-700 text-sm mb-1 flex items-center gap-1">
                      <span>🚩</span>
                      <span>{p.title}</span>
                    </div>
                    
                    <div className="text-gray-500 text-[11px] mb-1.5">
                      📍 {p.village ? `${p.village}, ` : ''}{p.taluka ? `${p.taluka}, ` : ''}{p.district}
                    </div>

                    {userLocation && (
                      <div className="text-blue-700 font-bold text-[10px] mb-2 bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                        📍 माझ्या स्थानापासून: {getDistanceInKm(userLocation[0], userLocation[1], p.latitude, p.longitude).toFixed(1)} KM
                      </div>
                    )}

                    <div className="text-[10px] text-gray-600 line-clamp-2 mt-1 mb-2.5 font-sans italic border-l-2 border-saffron-300 pl-1.5">
                      {p.content}
                    </div>

                    <div className="flex flex-wrap gap-1.5 border-t border-gray-100 pt-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPlace(p);
                        }}
                        className="bg-saffron-600 hover:bg-saffron-700 text-white text-[9px] font-extrabold px-2 py-1 rounded-lg flex items-center gap-0.5 transition-all cursor-pointer"
                      >
                        <Info className="w-2.5 h-2.5" />
                        <span>पहा</span>
                      </button>

                      <a
                        href={getExternalNavUrl(p.latitude, p.longitude, p.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white text-[9px] font-extrabold px-2 py-1 rounded-lg flex items-center gap-0.5 transition-all cursor-pointer"
                      >
                        <Navigation className="w-2.5 h-2.5" />
                        <span>दिशा</span>
                      </a>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(p.id);
                        }}
                        className={`text-[9px] font-extrabold px-2 py-1 rounded-lg border flex items-center gap-0.5 transition-all cursor-pointer ${
                          favorites.includes(p.id)
                            ? 'bg-orange-50 border-orange-200 text-orange-600'
                            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>★</span>
                        <span>{favorites.includes(p.id) ? 'आहे' : 'आवडीचे'}</span>
                      </button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
