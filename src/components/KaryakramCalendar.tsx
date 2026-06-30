/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EventKaryakram } from '../types';
import { Calendar, MapPin, Phone, Clock, Search, Tag, Sparkles } from 'lucide-react';

function parseDevanagariInt(str: string): number {
  const devanagariMap: { [key: string]: string } = {
    '०': '0', '१': '1', '२': '2', '३': '3', '४': '4',
    '५': '5', '६': '6', '७': '7', '८': '8', '९': '9'
  };
  const englishDigits = str.replace(/[०-९]/g, (m) => devanagariMap[m] || m);
  const parsed = parseInt(englishDigits, 10);
  return isNaN(parsed) ? 1 : parsed;
}

interface KaryakramCalendarProps {
  events: EventKaryakram[];
}

export default function KaryakramCalendar({ events }: KaryakramCalendarProps) {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Event Categories
  const eventTypes = [
    { id: 'All', label: 'सभी कार्यक्रम' },
    { id: 'utsav', label: 'महोत्सव (Utsav)' },
    { id: 'yatra', label: 'यात्रा (Yatra)' },
    { id: 'sabha', label: 'धार्मिक सभा (Sabha)' },
    { id: 'kirtan', label: 'कीर्तन/प्रवचन (Kirtan)' }
  ];

  // Filters
  const filteredEvents = events.filter(ev => {
    const matchesType = selectedType === 'All' || ev.type === selectedType;
    const matchesSearch = ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ev.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ev.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case 'utsav': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'yatra': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'sabha': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'kirtan': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getEventBadgeLabel = (type: string) => {
    switch (type) {
      case 'utsav': return 'महोत्सव';
      case 'yatra': return 'तीर्थ यात्रा';
      case 'sabha': return 'धार्मिक सभा';
      case 'kirtan': return 'कीर्तन सत्र';
      default: return 'कार्यक्रम';
    }
  };

  return (
    <div id="calendar-root" className="bg-white rounded-2xl shadow-md border border-saffron-100 overflow-hidden min-h-[500px]">
      {/* Header */}
      <div className="bg-saffron-50 p-6 border-b border-saffron-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-saffron-700 font-devanagari flex items-center gap-2">
            <Calendar className="w-6 h-6 text-saffron-500" />
            धार्मिक कार्यक्रम एवं कैलेंडर (Events)
          </h2>
          <p className="text-sm text-gray-600 mt-1 font-sans">
            पंथ के आगामी उत्सव, तीर्थ यात्रा, सत्संग सभा, और कीर्तन आयोजनों का विवरण।
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="उत्सव या स्थान खोजें..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-saffron-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex border-b border-gray-100 bg-gray-50/50 p-2 overflow-x-auto gap-2">
        {eventTypes.map(type => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedType === type.id
                ? 'bg-saffron-500 text-white shadow-sm'
                : 'bg-white border border-gray-200 text-gray-600 hover:text-saffron-600 hover:border-saffron-200'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Main Grid: Split into Events List and a Beautiful Calendar Highlight */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Events list */}
        <div className="lg:col-span-2 p-6 space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">आगामी कार्यक्रम सूची ({filteredEvents.length})</h3>
          
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
              <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500 font-sans">इस श्रेणी में कोई आगामी कार्यक्रम निर्धारित नहीं है।</p>
            </div>
          ) : (
            filteredEvents.map(ev => {
              const [year, month, day] = ev.date.split('-');
              const monthNames = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
              const monthIndex = parseDevanagariInt(month) - 1;
              const safeMonthName = monthNames[monthIndex] || "महीना";
              const formattedDate = `${day} ${safeMonthName} ${year}`;

              return (
                <div
                  key={ev.id}
                  id={`event-card-${ev.id}`}
                  className="bg-white border border-saffron-100/70 p-5 rounded-2xl hover:border-saffron-300 hover:shadow-sm transition-all flex flex-col sm:flex-row gap-5"
                >
                  {/* Left Date Circle */}
                  <div className="flex sm:flex-col items-center justify-center bg-saffron-50/70 border border-saffron-100 rounded-2xl p-4 min-w-[90px] h-[90px] text-center shrink-0">
                    <span className="text-2xl font-black text-saffron-600 font-mono leading-none">{day}</span>
                    <span className="text-xs font-semibold text-gray-600 mt-1 font-sans">{safeMonthName.slice(0, 5)}</span>
                  </div>

                  {/* Right Event details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getEventBadgeColor(ev.type)}`}>
                        {getEventBadgeLabel(ev.type)}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">{formattedDate}</span>
                    </div>

                    <h4 className="font-bold text-gray-900 text-sm md:text-base font-devanagari">
                      {ev.title}
                    </h4>

                    <p className="text-xs text-gray-600 mt-1.5 leading-relaxed font-sans line-clamp-3">
                      {ev.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500 border-t border-gray-50 pt-3">
                      <span className="flex items-center gap-1.5 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-saffron-500 flex-shrink-0" />
                        {ev.location}
                      </span>
                      {ev.contact && (
                        <span className="flex items-center gap-1.5 font-sans">
                          <Phone className="w-3.5 h-3.5 text-saffron-500 flex-shrink-0" />
                          सम्पर्क: {ev.contact}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Calendar Decoration / Spiritual Highlight */}
        <div className="p-6 bg-saffron-50/30 border-t lg:border-t-0 lg:border-l border-saffron-100 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-bold text-gray-800 font-devanagari border-b border-gray-100 pb-1.5 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-saffron-500" />
              दैनिक सुविचार व लीला (Today's Grace)
            </h4>

            {/* Daily Quote Box */}
            <div className="bg-white border border-saffron-100 p-5 rounded-2xl shadow-sm mb-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 text-saffron-100 font-display text-4xl select-none">“</div>
              <span className="text-[10px] bg-saffron-100 text-saffron-700 px-2 py-0.5 rounded font-bold uppercase tracking-wide">आजचा सुविचार</span>
              <p className="text-sm font-bold font-devanagari text-gray-800 leading-relaxed mt-3">
                "परिग्रहा पासौनि निवृत्ति करावी। असंभोगु रक्षीजे।"
              </p>
              <p className="text-xs text-saffron-600 font-sans mt-2 text-right">— श्री चक्रधर स्वामी (सूत्रपाठ)</p>
            </div>

            {/* Daily Leela Box */}
            <div className="bg-white border border-saffron-100 p-5 rounded-2xl shadow-sm relative overflow-hidden">
              <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold uppercase tracking-wide">दैनिक पावन लीला</span>
              <h5 className="font-bold text-gray-900 text-sm font-devanagari mt-3">पैठण गमन आणि गोदावरी उपदेश</h5>
              <p className="text-xs text-gray-600 font-sans mt-1.5 leading-relaxed">
                स्वामी पैठण नगरीत दाखल झाल्यावर त्यांनी गोदावरी घाटावरील लोकांना सोप्या भाषेत अहिंसेचा संदेश दिला, सर्व प्राणिमात्रांवर दया करण्याचा उपदेश केला.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100 text-center">
            <p className="text-[10px] text-gray-400 font-sans">
              *यदि आपके क्षेत्र में कोई महोत्सव या सभा आयोजित हो रही है, तो कृपया एडमिन पैनल के माध्यम से यहाँ जोड़ें।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
