/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Temple } from '../types';
import { MapPin, Phone, Clock, ExternalLink, Compass, ShieldCheck } from 'lucide-react';

interface TempleDirectoryProps {
  temples: Temple[];
}

export default function TempleDirectory({ temples }: TempleDirectoryProps) {
  const [selectedTemple, setSelectedTemple] = useState<Temple | null>(temples[0] || null);
  const [activeTab, setActiveTab] = useState<'all' | 'temple' | 'ashram' | 'sthan'>('all');

  const filteredTemples = temples.filter(t => {
    if (activeTab === 'all') return true;
    if (activeTab === 'temple') return t.type === 'temple' || t.type === 'sthan';
    return t.type === activeTab;
  });

  const getGoogleMapsUrl = (t: Temple) => {
    return `https://www.google.com/maps/search/?api=1&query=${t.latitude},${t.longitude}`;
  };

  return (
    <div id="temples-root" className="bg-white rounded-2xl shadow-md border border-saffron-100 overflow-hidden min-h-[500px]">
      {/* Header */}
      <div className="bg-saffron-50 p-6 border-b border-saffron-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-saffron-700 font-devanagari flex items-center gap-2">
            <MapPin className="w-6 h-6 text-saffron-500" />
            स्थान एवं आश्रम (Sthan & Ashram)
          </h2>
          <p className="text-sm text-gray-600 mt-1 font-sans">
            महानुभाव पंथ के पवित्र प्राचीन चरणमुद्रित लीला स्थान, आश्रम, दर्शन समय और संपर्क विवरण।
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-1.5 bg-saffron-100/50 p-1 rounded-lg border border-saffron-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1 text-xs font-semibold rounded-md transition-all font-sans ${
              activeTab === 'all' ? 'bg-saffron-500 text-white shadow-sm' : 'text-gray-600 hover:text-saffron-600'
            }`}
          >
            सभी स्थान
          </button>
          <button
            onClick={() => setActiveTab('temple')}
            className={`px-3.5 py-1 text-xs font-semibold rounded-md transition-all font-sans ${
              activeTab === 'temple' ? 'bg-saffron-500 text-white shadow-sm' : 'text-gray-600 hover:text-saffron-600'
            }`}
          >
            स्थान
          </button>
          <button
            onClick={() => setActiveTab('ashram')}
            className={`px-3.5 py-1 text-xs font-semibold rounded-md transition-all font-sans ${
              activeTab === 'ashram' ? 'bg-saffron-500 text-white shadow-sm' : 'text-gray-600 hover:text-saffron-600'
            }`}
          >
            आश्रम
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left List */}
        <div className="border-r border-saffron-100 p-4 bg-saffron-50/20 max-h-[480px] overflow-y-auto custom-scrollbar">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">स्थान सूची</h3>
          <div className="space-y-3">
            {filteredTemples.length === 0 ? (
              <p className="text-xs text-gray-400 py-6 text-center">कोई स्थान नहीं मिला।</p>
            ) : (
              filteredTemples.map(t => (
                <button
                  key={t.id}
                  id={`temple-card-${t.id}`}
                  onClick={() => setSelectedTemple(t)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex gap-3 group items-center ${
                    selectedTemple?.id === t.id
                      ? 'bg-saffron-50 border-saffron-300 shadow-sm'
                      : 'bg-white border-gray-100 hover:border-saffron-200'
                  }`}
                >
                  <img
                    src={t.photoUrl}
                    alt={t.name}
                    className="w-16 h-16 object-cover rounded-lg shadow-sm flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0 flex-1">
                    <span className={`text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded font-bold font-mono ${
                      t.type === 'temple' || t.type === 'sthan' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-700'
                    }`}>
                      {t.type === 'temple' || t.type === 'sthan' ? 'स्थान' : 'आश्रम'}
                    </span>
                    <h4 className="font-bold text-gray-800 text-xs md:text-sm font-devanagari mt-1 truncate group-hover:text-saffron-600">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-gray-500 font-sans mt-0.5 truncate flex items-center gap-0.5">
                      <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      {t.location}
                    </p>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="col-span-1 md:col-span-2 p-6 bg-white flex flex-col justify-between">
          {selectedTemple ? (
            <div>
              {/* Cover Image & Quick stats */}
              <div className="relative rounded-2xl overflow-hidden h-48 md:h-64 shadow-md border border-gray-100 mb-6 group">
                <img
                  src={selectedTemple.photoUrl}
                  alt={selectedTemple.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5 md:p-6" style={{ backgroundColor: '#d4e7d7' }}>
                  <div>
                    <span className="text-[10px] bg-saffron-500 text-white px-2.5 py-1 rounded-full font-bold uppercase tracking-wider font-sans shadow-sm">
                      {selectedTemple.type === 'temple' || selectedTemple.type === 'sthan' ? 'पवित्र स्थान' : 'दिव्य साधना आश्रम'}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-devanagari mt-1.5 drop-shadow-sm">
                      {selectedTemple.name}
                    </h3>
                    <p className="text-white/90 text-xs md:text-sm font-sans flex items-center gap-1 mt-1 drop-shadow-sm">
                      <MapPin className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                      {selectedTemple.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description & History tabs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-800 border-b border-gray-100 pb-1.5 mb-2.5 flex items-center gap-1.5 font-devanagari">
                    <Compass className="w-4 h-4 text-saffron-500" />
                    स्थान का महात्म्य (About)
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 font-sans leading-relaxed">
                    {selectedTemple.description}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs text-gray-600 bg-saffron-50/50 p-2.5 rounded-xl border border-saffron-100">
                      <Clock className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                      <div>
                        <p className="font-bold font-sans text-gray-700">दर्शन समय:</p>
                        <p className="text-gray-500 font-devanagari mt-0.5">{selectedTemple.darshanTimings || 'सुबह ६:०० से रात ८:००'}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs text-gray-600 bg-saffron-50/50 p-2.5 rounded-xl border border-saffron-100">
                      <Phone className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                      <div>
                        <p className="font-bold font-sans text-gray-700">संपर्क विवरण (Contact):</p>
                        <p className="text-gray-500 font-sans mt-0.5">{selectedTemple.contact || '+91 XXXXXXXXXX'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-800 border-b border-gray-100 pb-1.5 mb-2.5 flex items-center gap-1.5 font-devanagari">
                    <ShieldCheck className="w-4 h-4 text-saffron-500" />
                    पावन इतिहास (History)
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 font-sans leading-relaxed whitespace-pre-line">
                    {selectedTemple.history || 'इस पवित्र स्थान का संबंध पंचकृष्ण अवतारों और महानुभाव पंथ के दिव्य संस्मरणों से है। यहाँ अनेक संतों ने साधना की और परम सत्य का मार्ग प्रशस्त किया।'}
                  </p>

                  {/* Navigation Coordinates Button */}
                  <div className="mt-6 space-y-2">
                    <div className="text-[11px] font-mono font-bold text-saffron-700 bg-saffron-50 border border-saffron-200 px-3 py-1.5 rounded-lg flex items-center justify-between">
                      <span>भौगोलिक निर्देशांक (Coordinates):</span>
                      <span className="bg-saffron-100 px-2 py-0.5 rounded text-saffron-800">
                        {selectedTemple.id === 't_ridhpur' ? `21°13'59.9"N 77°40'59.9"E` : 
                         selectedTemple.id === 't_domegram' ? `19°37'59.9"N 74°58'00.1"E` : 
                         selectedTemple.id === 't_paithan' ? `19°28'59.9"N 75°22'59.9"E` : 
                         `${selectedTemple.latitude.toFixed(4)}°N, ${selectedTemple.longitude.toFixed(4)}°E`}
                      </span>
                    </div>
                    <a
                      href={getGoogleMapsUrl(selectedTemple)}
                      target="_blank"
                      rel="noreferrer"
                      id={`navigate-btn-${selectedTemple.id}`}
                      className="w-full justify-center px-5 py-3 bg-saffron-500 hover:bg-saffron-600 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm border border-saffron-600"
                    >
                      <Compass className="w-4 h-4 animate-[spin_4s_linear_infinite]" />
                      गूगल मैप पर मार्गदर्शन (Navigate)
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <MapPin className="w-16 h-16 text-saffron-200 mb-4" />
              <h3 className="text-lg font-bold text-gray-800 font-devanagari">तीर्थदर्शन</h3>
              <p className="text-sm text-gray-500 mt-2 font-sans">
                सूची में से किसी पवित्र तीर्थक्षेत्र का चयन करें।
              </p> महानुभाव पंथ स्थान पांचाळेश्वर 
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
