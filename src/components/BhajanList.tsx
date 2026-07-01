/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Bhajan } from '../types';
import { Music, Heart, Play, Pause, Search, Video, Volume2, Info } from 'lucide-react';
import { translations } from '../translations';

interface BhajanListProps {
  bhajans: Bhajan[];
  onBhajanPlay: (bhajanTitle: string) => void;
  lang?: 'hi' | 'mr' | 'en';
}

export default function BhajanList({ bhajans, onBhajanPlay, lang = 'mr' }: BhajanListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [selectedBhajan, setSelectedBhajan] = useState<Bhajan | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Audio elements
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('mahanubhav_favorites_bhajans');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated = [...favorites];
    if (updated.includes(id)) {
      updated = updated.filter(item => item !== id);
    } else {
      updated.push(id);
    }
    setFavorites(updated);
    localStorage.setItem('mahanubhav_favorites_bhajans', JSON.stringify(updated));
  };

  const playBhajan = (bhajan: Bhajan) => {
    setSelectedBhajan(bhajan);
    setShowVideo(false);
    onBhajanPlay(bhajan.title);

    // Play Audio
    if (audioRef.current) {
      audioRef.current.src = bhajan.audioUrl || '';
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log('Audio playback error', err));
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log('Audio playback error', err));
    }
  };

  // List of distinct languages for filtering
  const languages = ['All', 'मराठी', 'हिंदी'];

  // Filter Bhajans
  const filteredBhajans = bhajans.filter(bh => {
    const matchesSearch = bh.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          bh.lyrics.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLang = selectedLanguage === 'All' || bh.language.includes(selectedLanguage);
    return matchesSearch && matchesLang;
  });

  return (
    <div id="bhajan-root" className="bg-white rounded-2xl shadow-md border border-saffron-100 overflow-hidden min-h-[500px]">
      {/* Hidden audio element */}
      <audio 
        ref={audioRef} 
        onEnded={() => setIsPlaying(false)}
      />

      {/* Header */}
      <div className="bg-saffron-50 p-6 border-b border-saffron-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-saffron-700 font-devanagari flex items-center gap-2">
            <Music className="w-6 h-6 text-saffron-500" />
            {translations.bhajanHeader[lang]}
          </h2>
          <p className="text-sm text-gray-600 mt-1 font-sans">
            {translations.bhajanSub[lang]}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Language filter */}
          <div className="flex gap-1.5 bg-saffron-100/50 p-1 rounded-lg border border-saffron-200">
            {languages.map(l => (
              <button
                key={l}
                onClick={() => setSelectedLanguage(l)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all font-sans ${
                  (l === 'All' && selectedLanguage === 'All') || (l !== 'All' && selectedLanguage === l)
                    ? 'bg-saffron-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-saffron-600'
                }`}
              >
                {l === 'All' ? translations.all[lang] : l}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-48 sm:w-60">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={translations.searchBhajanPlaceholder[lang]}
              className="w-full pl-9 pr-4 py-2 text-sm border border-saffron-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[450px]">
        {/* Bhajan list sidebar */}
        <div className="border-r border-saffron-100 p-4 bg-saffron-50/30 overflow-y-auto max-h-[500px] custom-scrollbar">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            {lang === 'mr' ? 'भजन सूची' : lang === 'hi' ? 'भजन सूची' : 'Bhajan List'}
          </h3>
          <div className="space-y-2">
            {filteredBhajans.length === 0 ? (
              <p className="text-xs text-gray-400 py-6 text-center">
                {lang === 'mr' ? 'कोणतेही भजन आढळले नाही.' : lang === 'hi' ? 'कोई भजन नहीं मिला।' : 'No bhajans found.'}
              </p>
            ) : (
              filteredBhajans.map(bh => (
                <div
                  key={bh.id}
                  id={`bhajan-item-${bh.id}`}
                  onClick={() => playBhajan(bh)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                    selectedBhajan?.id === bh.id
                      ? 'bg-saffron-50 border-saffron-300 shadow-sm'
                      : 'bg-white border-gray-100 hover:border-saffron-200'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-lg ${selectedBhajan?.id === bh.id ? 'bg-saffron-500 text-white' : 'bg-saffron-100 text-saffron-600'}`}>
                      <Music className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-800 text-xs md:text-sm font-devanagari truncate group-hover:text-saffron-600">
                        {bh.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-0.5 font-sans">
                        {lang === 'mr' ? 'भाषा:' : lang === 'hi' ? 'भाषा:' : 'Language:'} {bh.language} {bh.singer && `• ${translations.singer[lang]}: ${bh.singer}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={(e) => toggleFavorite(bh.id, e)}
                      className={`p-1.5 rounded-md hover:bg-gray-100 transition-all ${
                        favorites.includes(bh.id) ? 'text-red-500' : 'text-gray-300'
                      }`}
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Lyrics & Video player */}
        <div className="col-span-1 md:col-span-2 p-6 flex flex-col bg-white">
          {selectedBhajan ? (
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between border-b border-gray-100 pb-4 mb-4 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-devanagari">
                      {selectedBhajan.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 font-sans">
                      {translations.singer[lang]}: <span className="font-semibold text-gray-700">{selectedBhajan.singer || (lang === 'mr' ? 'भक्तवृंद' : lang === 'hi' ? 'भक्तवृंद' : 'Devotees')}</span> • {selectedBhajan.language}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Audio Controls */}
                    <button
                      onClick={togglePlayPause}
                      className="px-3 py-1.5 bg-saffron-500 text-white rounded-lg hover:bg-saffron-600 font-semibold text-xs transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      {isPlaying ? (lang === 'mr' ? 'पॉझ करा' : lang === 'hi' ? 'पॉज़ करें' : 'Pause') : (lang === 'mr' ? 'ऑडिओ ऐका' : lang === 'hi' ? 'ऑडियो सुनें' : 'Listen')}
                    </button>

                    {/* Video Embed Toggle */}
                    {selectedBhajan.videoUrl && (
                      <button
                        onClick={() => setShowVideo(!showVideo)}
                        className={`p-2 rounded-lg transition-all border ${
                          showVideo
                            ? 'bg-red-500 text-white border-red-500'
                            : 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100'
                        }`}
                        title={lang === 'mr' ? 'व्हिडिओ भजन' : lang === 'hi' ? 'वीडियो भजन' : 'Video Bhajan'}
                      >
                        <Video className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Video Player */}
                {showVideo && selectedBhajan.videoUrl && (
                  <div className="mb-6 rounded-xl overflow-hidden aspect-video shadow-md border border-gray-200 bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={selectedBhajan.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {/* Lyrics Reader */}
                <div className="bg-saffron-50/20 border border-saffron-100 p-6 rounded-2xl shadow-inner max-h-[350px] overflow-y-auto custom-scrollbar">
                  <h4 className="text-xs font-bold text-saffron-600 mb-3 uppercase tracking-widest text-center flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-saffron-500 rounded-full"></span>
                    {translations.lyrics[lang]}
                    <span className="w-1.5 h-1.5 bg-saffron-500 rounded-full"></span>
                  </h4>
                  <div className="text-center text-gray-800 text-sm md:text-base leading-relaxed font-devanagari whitespace-pre-line max-w-md mx-auto py-2">
                    {selectedBhajan.lyrics}
                  </div>
                </div>
              </div>

              {/* Audio player status bar */}
              {selectedBhajan.audioUrl && (
                <div className="mt-6 p-3 bg-saffron-50/60 rounded-xl border border-saffron-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-2 h-2 rounded-full bg-saffron-500 ${isPlaying ? 'animate-ping' : ''}`} />
                    <span className="text-xs text-gray-600 font-sans">
                      {isPlaying 
                        ? (lang === 'mr' ? 'आता वाजत आहे...' : lang === 'hi' ? 'अभी बज रहा है...' : 'Now Playing...') 
                        : (lang === 'mr' ? 'ऑडिओ प्लेअर लोड झाला आहे.' : lang === 'hi' ? 'ऑडियो प्लेयर लोड है।' : 'Audio player is loaded.')
                      }
                    </span>
                  </div>
                  {isPlaying && (
                    <div className="flex gap-0.5 items-end h-3">
                      <div className="w-0.5 bg-saffron-500 h-2 animate-[pulse_0.8s_infinite]" />
                      <div className="w-0.5 bg-saffron-500 h-3 animate-[pulse_1.2s_infinite]" />
                      <div className="w-0.5 bg-saffron-500 h-1 animate-[pulse_0.5s_infinite]" />
                      <div className="w-0.5 bg-saffron-500 h-3 animate-[pulse_1s_infinite]" />
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <Music className="w-16 h-16 text-saffron-200 mb-4" />
              <h3 className="text-lg font-bold text-gray-800 font-devanagari">
                {lang === 'mr' ? 'भक्ती संगीताचा आनंद घ्या' : lang === 'hi' ? 'भक्ति संगीत का आनंद लें' : 'Enjoy Devotional Music'}
              </h3>
              <p className="text-sm text-gray-500 max-w-sm mt-2 font-sans">
                {lang === 'mr' 
                  ? 'डाव्या बाजूला दिलेल्या भजनांमधून कोणतेही भजन निवडा. तुम्ही त्याचे बोल (Lyrics) वाचू शकता, ऑडिओ संगीत आणि व्हिडिओ देखील पाहू शकता.' 
                  : lang === 'hi' 
                  ? 'बायें ओर दिए गए भजनों में से कोई भजन चुनें। आप उसके बोल (Lyrics) पढ़ सकते हैं, तथा ऑडियो संगीत और वीडियो भी देख सकते हैं।' 
                  : 'Select a bhajan from the left list. You can read its lyrics, play the audio hymn, or watch the devotional video.'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
