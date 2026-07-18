import React, { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

interface MapControllerProps {
  selectedPlace: { latitude: number; longitude: number } | null;
  filteredPlaces: { latitude: number; longitude: number; id: string }[];
  userLocation: [number, number] | null;
  panToUserTrigger: number;
  compassHeading?: number | null;
}

export default function MapController({
  selectedPlace,
  filteredPlaces,
  userLocation,
  panToUserTrigger,
  compassHeading
}: MapControllerProps) {
  const map = useMap();
  const [mouseCoords, setMouseCoords] = useState<{ lat: number; lng: number } | null>(null);

  // Auto-focus with smooth flyTo when selecting a place
  useEffect(() => {
    if (!map || !selectedPlace) return;
    map.flyTo([selectedPlace.latitude, selectedPlace.longitude], 16, {
      animate: true,
      duration: 2
    });
  }, [map, selectedPlace]);

  // Smooth flyTo user location when triggered
  useEffect(() => {
    if (!map || !userLocation || panToUserTrigger === 0) return;
    map.flyTo(userLocation, 16, {
      animate: true,
      duration: 1.5
    });
  }, [map, userLocation, panToUserTrigger]);

  // Fit bounds when filters change and no single place is selected
  useEffect(() => {
    if (!map || selectedPlace) return;
    if (filteredPlaces.length > 0) {
      const bounds = L.latLngBounds(filteredPlaces.map(p => [p.latitude, p.longitude]));
      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 14,
        animate: true,
        duration: 1
      });
    }
  }, [map, filteredPlaces, selectedPlace]);

  // Add Scale control and tracking mouse movements
  useEffect(() => {
    if (!map) return;

    // Scale control
    const scaleControl = L.control.scale({ imperial: false, position: 'bottomleft' }).addTo(map);

    const onMouseMove = (e: L.LeafletMouseEvent) => {
      setMouseCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    };

    map.on('mousemove', onMouseMove);

    return () => {
      scaleControl.remove();
      map.off('mousemove', onMouseMove);
    };
  }, [map]);

  return (
    <>
      {/* Live mouse coordinates overlay at bottom corner */}
      {mouseCoords && (
        <div className="absolute bottom-2 right-2 z-[1000] bg-black/75 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] font-mono shadow border border-white/10 pointer-events-none">
          Lat: {mouseCoords.lat.toFixed(5)}° | Lng: {mouseCoords.lng.toFixed(5)}°
        </div>
      )}

      {/* Compass direction UI indicator */}
      {compassHeading !== undefined && compassHeading !== null && (
        <div className="absolute top-4 right-4 z-[1000] bg-white/95 backdrop-blur-md p-2 rounded-xl border border-gray-200 shadow-md text-gray-700 flex items-center gap-1.5 text-xs font-bold transition-all">
          <div 
            className="w-5 h-5 flex items-center justify-center border-2 border-saffron-500 rounded-full transition-transform duration-200"
            style={{ transform: `rotate(${compassHeading}deg)` }}
          >
            <span className="text-[9px] font-extrabold text-saffron-600">▲</span>
          </div>
          <span>{compassHeading.toFixed(0)}°</span>
        </div>
      )}
    </>
  );
}
