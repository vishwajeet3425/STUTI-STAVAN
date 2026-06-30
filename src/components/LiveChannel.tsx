/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Tv, Radio, ExternalLink, Calendar, Video, Clock } from 'lucide-react';

export default function LiveChannel() {
  const [isLive, setIsLive] = useState(true);

  return (
    <div id="live-channel-root" className="bg-white rounded-2xl shadow-md border border-saffron-100 overflow-hidden min-h-[500px] flex flex-col justify-between">
      {/* Header */}
      <div className="bg-saffron-50 p-6 border-b border-saffron-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-saffron-700 font-devanagari flex items-center gap-2">
            <Tv className="w-6 h-6 text-saffron-500" />
            लाइव प्रसारण (Mahanubhav Live)
          </h2>
          <p className="text-sm text-gray-600 mt-1 font-sans">
            ऋद्धपूर धाम और डोमेग्राम आश्रम से सत्संग, पूजन और आरती का सीधे घर बैठे लाइव दर्शन।
          </p>
        </div>

        {/* Live Status indicator */}
        {isLive ? (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 px-3.5 py-1.5 rounded-full">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full live-pulse"></span>
            <span className="text-xs font-bold text-red-600 font-sans tracking-wide">LIVE NOW</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="text-xs font-bold text-gray-500 font-sans">OFFLINE</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 flex-1">
        {/* Left Player block */}
        <div className="lg:col-span-2 p-6 bg-black flex items-center justify-center min-h-[300px]">
          {isLive ? (
            <div className="w-full h-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Standard sample live stream placeholder
                title="Mahanubhav Live Streaming"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="text-center text-gray-400">
              <Tv className="w-16 h-16 mx-auto text-gray-600 mb-3" />
              <p className="text-sm font-sans">अभी कोई लाइव प्रसारण उपलब्ध नहीं है।</p>
              <p className="text-xs text-gray-500 mt-1">आगामी लाइव उत्सव का समय नीचे देखें।</p>
            </div>
          )}
        </div>

        {/* Right Info schedule sidebar */}
        <div className="p-6 bg-saffron-50/20 border-t lg:border-t-0 lg:border-l border-saffron-100 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-800 font-devanagari border-b border-gray-100 pb-1.5 flex items-center gap-1.5">
              <Video className="w-4 h-4 text-saffron-500" />
              चल रहा कार्यक्रम (Current Stream)
            </h3>

            {isLive ? (
              <div className="bg-white p-4 rounded-xl border border-saffron-100 shadow-2xs">
                <h4 className="font-bold text-gray-900 text-sm font-devanagari">ऋद्धपूर धाम: महाआरती एवं दिव्य दर्शन</h4>
                <p className="text-xs text-gray-500 font-sans mt-1">आयोजक: श्री देवस्थान ट्रस्ट ऋद्धपूर</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-saffron-500" />
                  <span>सुबह ८:०० - दोपहर १२:००</span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-gray-400 font-sans">प्रसारण बंद है।</p>
            )}

            <h3 className="text-sm font-bold text-gray-800 font-devanagari border-b border-gray-100 pb-1.5 pt-4 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-saffron-500" />
              आगामी लाइव वेळापत्रक (Schedule)
            </h3>

            <div className="space-y-2 max-h-[180px] overflow-y-auto custom-scrollbar pr-1">
              <div className="bg-white/80 p-2.5 rounded-lg border border-gray-100 flex justify-between items-center text-xs">
                <div>
                  <h5 className="font-bold text-gray-800 font-devanagari">श्री कृष्ण जन्मोत्सव कथा</h5>
                  <p className="text-[10px] text-gray-500 font-sans">२७ अगस्त, संध्या ६:०० बजे</p>
                </div>
                <Radio className="w-4 h-4 text-saffron-500" />
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-gray-100 flex justify-between items-center text-xs">
                <div>
                  <h5 className="font-bold text-gray-800 font-devanagari">चक्रधर स्वामी उपदेश पारायण</h5>
                  <p className="text-[10px] text-gray-500 font-sans">२८ अगस्त, सुबह ९:०० बजे</p>
                </div>
                <Radio className="w-4 h-4 text-saffron-500" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4 mt-6 text-center">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-saffron-600 hover:text-saffron-700 transition-all"
            >
              हमारे यूट्यूब चैनल पर जाएं
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
