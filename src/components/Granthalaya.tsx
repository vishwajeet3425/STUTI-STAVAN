/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Book, Chapter } from '../types';
import { BookOpen, Bookmark, Volume2, VolumeX, ChevronRight, ArrowLeft, Search, Sparkles, Filter, Info, Play, Pause } from 'lucide-react';
import { translations } from '../translations';
import { dattatreyaGurus, GuruInfo } from '../data/dattatreyaGurus';
import SthanMap from './SthanMap';

interface GranthalayaProps {
  books: Book[];
  chapters: Chapter[];
  onBookRead: (bookTitle: string) => void;
  lang?: 'hi' | 'mr' | 'en';
}

export default function Granthalaya({ books, chapters, onBookRead, lang = 'mr' }: GranthalayaProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechUtterance, setSpeechUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  // New states for Dattatreya 24 Gurus feature
  const [showGurusInfo, setShowGurusInfo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentlyPlayingGuruId, setCurrentlyPlayingGuruId] = useState<number | null>(null);

  // Load bookmarks
  useEffect(() => {
    const saved = localStorage.getItem('mahanubhav_bookmarks');
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const toggleBookmark = (chapterId: string) => {
    let updated = [...bookmarks];
    if (updated.includes(chapterId)) {
      updated = updated.filter(id => id !== chapterId);
    } else {
      updated.push(chapterId);
    }
    setBookmarks(updated);
    localStorage.setItem('mahanubhav_bookmarks', JSON.stringify(updated));
  };

  // Filter chapters for the selected book
  const filteredChapters = chapters
    .filter(chap => {
      if (selectedBook && chap.bookId !== selectedBook.id) return false;
      return true;
    })
    .sort((a, b) => a.number - b.number);

  const startSpeech = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[\n\r\#\.\,]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      
      // Try to find a Devanagari voice
      const voices = window.speechSynthesis.getVoices();
      const hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('mr'));
      if (hindiVoice) {
        utterance.voice = hindiVoice;
      }
      utterance.rate = 0.9; // A bit slower for spiritual content
      
      utterance.onend = () => {
        setIsPlaying(false);
      };
      utterance.onerror = () => {
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
      setSpeechUtterance(utterance);
      setIsPlaying(true);
    } else {
      alert('आपके ब्राउज़र में स्पीच सिंथेसिस सपोर्ट नहीं है।');
    }
  };

  const startGuruSpeech = (guru: GuruInfo) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const txt = `${guru.name[lang]}. ${lang === 'mr' ? 'शिकवण आणि बोध' : lang === 'hi' ? 'सीख और उपदेश' : 'Lesson learned'}: ${guru.lesson[lang]}. ${lang === 'mr' ? 'स्पष्टीकरण' : lang === 'hi' ? 'स्पष्टीकरण' : 'Explanation'}: ${guru.explanation[lang]}`;
      const cleanText = txt.replace(/[\n\r\#\.\,]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => v.lang.includes('hi') || v.lang.includes('mr'));
      if (voice) {
        utterance.voice = voice;
      }
      utterance.rate = 0.9;
      
      utterance.onend = () => {
        setIsPlaying(false);
        setCurrentlyPlayingGuruId(null);
      };
      utterance.onerror = () => {
        setIsPlaying(false);
        setCurrentlyPlayingGuruId(null);
      };

      window.speechSynthesis.speak(utterance);
      setSpeechUtterance(utterance);
      setIsPlaying(true);
      setCurrentlyPlayingGuruId(guru.id);
    } else {
      alert('Your browser does not support Speech Synthesis.');
    }
  };

  const stopGuruSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentlyPlayingGuruId(null);
    }
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentlyPlayingGuruId(null);
    }
  };

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const selectBookHandler = (book: Book) => {
    setSelectedBook(book);
    setSelectedChapter(null);
    setShowGurusInfo(false);
    onBookRead(book.title);
  };

  return (
    <div id="granthalaya-root" className="bg-white rounded-2xl shadow-md border border-saffron-100 overflow-hidden min-h-[500px]">
      {/* Granthalaya Header */}
      <div className="bg-saffron-50 p-6 border-b border-saffron-100 text-center">
        <h2 className="text-2xl font-bold text-saffron-700 font-devanagari flex items-center justify-center gap-2">
          <BookOpen className="w-6 h-6 text-saffron-500" />
          {translations.granthalayaHeader[lang]}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[450px]">
        {/* Book / Chapter Sidebar */}
        {selectedBook?.id !== 'sthan_darshan' && (
          <div className="border-r border-saffron-100 p-4 bg-saffron-50/30">
          {!selectedBook ? (
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 font-sans">
                {lang === 'mr' ? 'ग्रंथ सूची' : lang === 'hi' ? 'ग्रंथ सूची' : 'Select Book'}
              </h3>
              <div className="space-y-2 max-h-[550px] overflow-y-auto custom-scrollbar pr-1">
                {books.length === 0 ? (
                  <p className="text-xs text-gray-400 py-8 text-center font-sans">
                    {lang === 'mr' ? 'कोणताही ग्रंथ उपलब्ध नाही.' : lang === 'hi' ? 'कोई ग्रंथ उपलब्ध नहीं है।' : 'No books available.'}
                  </p>
                ) : (
                  books.map((book, index) => (
                    <button
                      key={book.id}
                      id={`book-btn-${book.id}`}
                      onClick={() => selectBookHandler(book)}
                      className="w-full text-left p-3 rounded-xl border border-saffron-100 bg-white hover:border-saffron-300 hover:bg-saffron-50/50 transition-all shadow-sm flex items-center gap-3 group"
                    >
                      <div className="w-7 h-7 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center font-bold text-xs shrink-0 font-sans">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-800 text-sm md:text-base font-devanagari line-clamp-1 group-hover:text-saffron-600">
                          {book.title}
                        </h4>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div>
              <button
                onClick={() => { setSelectedBook(null); setSelectedChapter(null); setShowGurusInfo(false); stopSpeech(); stopGuruSpeech(); }}
                className="flex items-center gap-1.5 text-xs font-semibold text-saffron-600 hover:text-saffron-700 mb-4 transition-all font-sans"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                {translations.backToBooks[lang]}
              </button>

              <div className="mb-4 p-3 bg-saffron-50 rounded-xl border border-saffron-100">
                <h4 className="font-bold text-saffron-800 text-sm md:text-base font-devanagari truncate">{selectedBook.title}</h4>
              </div>

              {/* 24 Gurus Feature Button */}
              {selectedBook.id === 'shreedattatreyacharitra' && (
                <button
                  onClick={() => {
                    setShowGurusInfo(true);
                    setSelectedChapter(null);
                    stopSpeech();
                    stopGuruSpeech();
                  }}
                  className={`w-full text-left p-3 rounded-xl border mb-4 transition-all flex items-center gap-3 group ${
                    showGurusInfo
                      ? 'bg-amber-500 text-white border-amber-600 shadow-md font-medium'
                      : 'bg-gradient-to-r from-amber-50 to-amber-100/50 hover:from-amber-100 border-amber-200 text-amber-800 hover:border-amber-300'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0 ${
                    showGurusInfo ? 'bg-white text-amber-600' : 'bg-amber-200 text-amber-800'
                  }`}>
                    ✨
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs md:text-sm font-devanagari">
                      {lang === 'mr' ? '२४ गुरु दर्शन व बोध' : lang === 'hi' ? '२४ गुरु दर्शन व सीख' : '24 Gurus Wisdom'}
                    </h4>
                    <p className={`text-[10px] ${showGurusInfo ? 'text-amber-100' : 'text-amber-700/80'} font-sans truncate`}>
                      {lang === 'mr' ? 'दत्त महाराजांचे २४ गुरु सविस्तर' : lang === 'hi' ? 'दत्त महाराज के २४ गुरु विस्तार में' : 'Detailed guide of 24 Gurus'}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 opacity-70 shrink-0 transition-transform ${showGurusInfo ? 'rotate-90' : ''}`} />
                </button>
              )}

              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {lang === 'mr' ? 'अध्याय / प्रकरण सूची' : lang === 'hi' ? 'अध्याय / प्रकरण सूची' : 'Chapter List'}
              </h3>
              <div className="space-y-1 max-h-[250px] overflow-y-auto custom-scrollbar pr-1">
                {filteredChapters.length === 0 ? (
                  <p className="text-xs text-gray-400 py-4 text-center">
                    {lang === 'mr' ? 'कोणताही अध्याय उपलब्ध नाही.' : lang === 'hi' ? 'कोई अध्याय उपलब्ध नहीं है।' : 'No chapters available.'}
                  </p>
                ) : (
                  filteredChapters.map(chap => (
                    <button
                      key={chap.id}
                      id={`chap-btn-${chap.id}`}
                      onClick={() => { setSelectedChapter(chap); setShowGurusInfo(false); stopSpeech(); stopGuruSpeech(); }}
                      className={`w-full text-left p-2.5 rounded-lg text-xs md:text-sm transition-all flex items-center justify-between border ${
                        selectedChapter?.id === chap.id
                          ? 'bg-saffron-500 text-white border-saffron-500 font-medium'
                          : 'bg-white hover:bg-saffron-50 border-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="font-devanagari truncate mr-2">{chap.title}</span>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {bookmarks.includes(chap.id) && (
                          <Bookmark className={`w-3 h-3 ${selectedChapter?.id === chap.id ? 'fill-white text-white' : 'fill-saffron-500 text-saffron-500'}`} />
                        )}
                        <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
        )}

        {/* Reading Panel */}
        <div className={`${selectedBook?.id === 'sthan_darshan' ? 'col-span-1 md:col-span-3' : 'col-span-1 md:col-span-2'} p-6 flex flex-col bg-white`}>
          {selectedBook?.id === 'sthan_darshan' ? (
            <div className="flex-1 flex flex-col h-full">
              {/* Sthan Darshan Layout Header */}
              <div className="border-b border-gray-100 pb-4 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => { setSelectedBook(null); setSelectedChapter(null); setShowGurusInfo(false); }}
                    className="p-2 border border-saffron-200 text-saffron-600 hover:bg-saffron-50 rounded-xl transition-all"
                    title={translations.backToBooks[lang]}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <div>
                    <span className="text-xs text-saffron-600 font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-saffron-500 animate-pulse" />
                      {lang === 'mr' ? 'तीर्थक्षेत्र आणि लीळा स्थान दर्शन' : lang === 'hi' ? 'तीर्थक्षेत्र और लीला स्थान दर्शन' : 'Holy Places & Leela Maps'}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-950 font-devanagari mt-1">
                      {lang === 'mr' ? 'पवित्र महानुभाव स्थान दर्शन' : lang === 'hi' ? 'पवित्र महानुभाव स्थान दर्शन' : 'Sacred Sthan Darshan Guide'}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <SthanMap lang={lang} />
              </div>
            </div>
          ) : showGurusInfo && selectedBook?.id === 'shreedattatreyacharitra' ? (
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <div className="border-b border-gray-100 pb-4 mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-xs text-amber-600 font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                    {lang === 'mr' ? 'अत्रिकुमार अवधूत उपदेश' : lang === 'hi' ? 'अत्रिकुमार अवधूत उपदेश' : 'Avadhuta Wisdom'}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-950 font-devanagari mt-1">
                    {lang === 'mr' ? 'भगवान दत्तात्रेयांचे २४ दिव्य गुरु' : lang === 'hi' ? 'भगवान दत्तात्रेय के २४ दिव्य गुरु' : '24 Divine Gurus of Lord Dattatreya'}
                  </h3>
                  <p className="text-xs text-gray-500 font-sans mt-1">
                    {lang === 'mr' ? 'दत्तगुरूंनी निसर्गातील २४ तत्त्वांकडून घेतलेली जीवनोपयोगी व आध्यात्मिक शिकवण' : lang === 'hi' ? 'दत्तगुरु द्वारा प्रकृति के २४ तत्वों से प्राप्त जीवनोपयोगी व आध्यात्मिक शिक्षाएं' : 'The 24 spiritual and practical lessons learned by Lord Dattatreya from nature.'}
                  </p>
                </div>
              </div>

              {/* Search & Filter Toolbar */}
              <div className="space-y-3 mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder={lang === 'mr' ? 'गुरूंचे नाव, शिकवण किंवा बोध शोधा...' : lang === 'hi' ? 'गुरु का नाम, सीख या उपदेश खोजें...' : 'Search gurus, lessons or wisdom...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-sans"
                    />
                  </div>

                  {/* Filter Select or Chips */}
                  <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                    {[
                      { id: 'all', label: lang === 'mr' ? 'सर्व' : lang === 'hi' ? 'सभी' : 'All' },
                      { id: 'elements', label: lang === 'mr' ? 'महाभूत' : lang === 'hi' ? 'महाभूत' : 'Elements' },
                      { id: 'animals', label: lang === 'mr' ? 'प्राणी व पक्षी' : lang === 'hi' ? 'पक्षी व प्राणी' : 'Animals' },
                      { id: 'human', label: lang === 'mr' ? 'मानव' : lang === 'hi' ? 'मानव' : 'Human' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveCategory(tab.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1 ${
                          activeCategory === tab.id
                            ? 'bg-amber-500 text-white shadow-sm'
                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {activeCategory === tab.id && <Filter className="w-3 h-3" />}
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gurus Grid */}
              <div className="flex-1 max-h-[550px] overflow-y-auto custom-scrollbar pr-1 space-y-4">
                {dattatreyaGurus
                  .filter(guru => {
                    const matchesSearch = 
                      guru.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                      guru.observation[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                      guru.lesson[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                      guru.explanation[lang].toLowerCase().includes(searchQuery.toLowerCase());
                    
                    if (activeCategory === 'all') return matchesSearch;
                    
                    const catEn = guru.category.en;
                    if (activeCategory === 'elements' && catEn === 'Elements') return matchesSearch;
                    if (activeCategory === 'animals' && catEn === 'Animals & Birds') return matchesSearch;
                    if (activeCategory === 'human' && catEn === 'Human') return matchesSearch;
                    return false;
                  })
                  .length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                      <Info className="w-10 h-10 text-gray-400 mx-auto mb-2.5" />
                      <p className="text-sm text-gray-500 font-sans">
                        {lang === 'mr' ? 'शोधलेला गुरु किंवा बोध आढळला नाही.' : lang === 'hi' ? 'कोई गुरु या सीख नहीं मिली।' : 'No matching guru or wisdom found.'}
                      </p>
                    </div>
                  ) : (
                    dattatreyaGurus
                      .filter(guru => {
                        const matchesSearch = 
                          guru.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guru.observation[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guru.lesson[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guru.explanation[lang].toLowerCase().includes(searchQuery.toLowerCase());
                        
                        if (activeCategory === 'all') return matchesSearch;
                        
                        const catEn = guru.category.en;
                        if (activeCategory === 'elements' && catEn === 'Elements') return matchesSearch;
                        if (activeCategory === 'animals' && catEn === 'Animals & Birds') return matchesSearch;
                        if (activeCategory === 'human' && catEn === 'Human') return matchesSearch;
                        return false;
                      })
                      .map((guru) => (
                        <div
                          key={guru.id}
                          className="bg-amber-50/10 border border-amber-100 hover:border-amber-200 rounded-2xl p-5 hover:shadow-md transition-all relative overflow-hidden group/card"
                        >
                          {/* Soft background glow */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/10 rounded-full blur-2xl group-hover/card:bg-amber-200/20 transition-all pointer-events-none" />

                          {/* Card Header */}
                          <div className="flex items-start justify-between gap-4 mb-3 border-b border-amber-50 pb-2.5">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl leading-none">{guru.symbol}</span>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-bold tracking-wider uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-mono">
                                    {lang === 'mr' ? `गुरू #${guru.id}` : lang === 'hi' ? `गुरु #${guru.id}` : `GURU #${guru.id}`}
                                  </span>
                                  <span className="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-sans">
                                    {guru.category[lang]}
                                  </span>
                                </div>
                                <h4 className="text-lg font-bold text-gray-950 font-devanagari mt-1">
                                  {guru.name[lang]}
                                </h4>
                              </div>
                            </div>

                            {/* TTS Button */}
                            <button
                              onClick={() => currentlyPlayingGuruId === guru.id ? stopGuruSpeech() : startGuruSpeech(guru)}
                              className={`p-2 rounded-xl border transition-all ${
                                currentlyPlayingGuruId === guru.id
                                  ? 'bg-red-50 text-red-600 border-red-200'
                                  : 'bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100 hover:border-amber-200 shadow-sm'
                              }`}
                              title={currentlyPlayingGuruId === guru.id ? "थांबवा" : "ऐका (Listen)"}
                            >
                              {currentlyPlayingGuruId === guru.id ? (
                                <Pause className="w-4 h-4" />
                              ) : (
                                <Play className="w-4 h-4 fill-amber-700 text-amber-700" />
                              )}
                            </button>
                          </div>

                          {/* Observation / Details */}
                          <div className="space-y-3">
                            <div>
                              <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider font-sans mb-1">
                                {lang === 'mr' ? '👀 दत्तात्रेयांचे निरीक्षण :' : lang === 'hi' ? '👀 दत्त महाराज का अवलोकन :' : '👀 Observation:'}
                              </h5>
                              <p className="text-sm text-gray-700 leading-relaxed font-devanagari">
                                {guru.observation[lang]}
                              </p>
                            </div>

                            {/* Lesson Callout */}
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-r-xl">
                              <h5 className="text-xs font-bold text-amber-800 uppercase tracking-wider font-sans mb-1 flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-amber-600" />
                                {lang === 'mr' ? '💡 प्राप्त शिकवण / बोध :' : lang === 'hi' ? '💡 प्राप्त सीख / उपदेश :' : '💡 The Lesson / Wisdom:'}
                              </h5>
                              <p className="text-sm md:text-base font-medium text-amber-950 leading-relaxed font-devanagari">
                                {guru.lesson[lang]}
                              </p>
                            </div>

                            {/* Explanation */}
                            <div>
                              <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider font-sans mb-1">
                                {lang === 'mr' ? '✨ अध्यात्मिक महत्त्व :' : lang === 'hi' ? '✨ आध्यात्मिक महत्त्व :' : '✨ Spiritual Significance:'}
                              </h5>
                              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-sans">
                                {guru.explanation[lang]}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                  )}
              </div>
            </div>
          ) : selectedChapter ? (
            <div className="flex-1 flex flex-col justify-between">
              <div>
                {/* Chapter Title & Action bar */}
                <div className="flex items-start justify-between border-b border-gray-100 pb-4 mb-4 gap-4">
                  <div>
                    <span className="text-xs text-saffron-600 font-mono font-bold tracking-wider">
                      {translations.chapters[lang]} - {selectedChapter.number}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 font-devanagari mt-1">
                      {selectedChapter.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* TTS Button */}
                    <button
                      onClick={() => isPlaying ? stopSpeech() : startSpeech(selectedChapter.content)}
                      className={`p-2 rounded-lg transition-all border ${
                        isPlaying 
                          ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100' 
                          : 'bg-saffron-50 text-saffron-600 border-saffron-100 hover:bg-saffron-100'
                      }`}
                      title={isPlaying ? translations.stopAudio[lang] : translations.audioListen[lang]}
                    >
                      {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    {/* Bookmark Button */}
                    <button
                      onClick={() => toggleBookmark(selectedChapter.id)}
                      className={`p-2 rounded-lg transition-all border ${
                        bookmarks.includes(selectedChapter.id)
                          ? 'bg-saffron-500 text-white border-saffron-500'
                          : 'bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100 hover:text-gray-600'
                      }`}
                      title={lang === 'mr' ? 'बुकमार्क करा' : lang === 'hi' ? 'बुकमार्क करें' : 'Bookmark'}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarks.includes(selectedChapter.id) ? 'fill-white' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Main Script Script */}
                <div className="bg-saffron-50/25 border-l-4 border-saffron-500 p-5 rounded-r-xl my-4">
                  <h4 className="text-xs font-bold text-saffron-600 mb-2 tracking-wider">
                    {lang === 'mr' ? 'मूळ वचन / लीळा पाठ :' : lang === 'hi' ? 'मूल वचन / लीला पाठ :' : 'Original Text:'}
                  </h4>
                  <p className="text-lg md:text-xl font-medium leading-relaxed font-devanagari text-gray-800 whitespace-pre-line">
                    {selectedChapter.content}
                  </p>
                </div>

                {/* Commentary / Explanation */}
                {selectedChapter.explanation && (
                  <div className="mt-6">
                    <h4 className="text-sm font-bold text-gray-800 font-devanagari border-b border-gray-100 pb-1.5 mb-2.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-4 bg-saffron-500 rounded-full"></span>
                      {translations.explanation[lang]} :
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 font-sans leading-relaxed whitespace-pre-line">
                      {selectedChapter.explanation}
                    </p>
                  </div>
                )}
              </div>

              {/* PDF & Download Resources info */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-end gap-3 bg-saffron-50/40 p-4 rounded-xl">
                <div className="flex gap-2">
                  <a
                    href="https://mural.is.depaul.edu/jspui/bitstream/10611/4845/1/sutrapath-final.pdf" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-3 py-1.5 border border-saffron-200 text-saffron-600 hover:bg-saffron-50 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 font-sans"
                  >
                    {lang === 'mr' ? 'PDF डाउनलोड करा' : lang === 'hi' ? 'PDF डाउनलोड करें' : 'Download PDF'}
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <BookOpen className="w-16 h-16 text-saffron-200 mb-4" />
              <h3 className="text-lg font-bold text-gray-800 font-devanagari">
                {lang === 'mr' ? 'स्वाध्याय सुरू करा' : lang === 'hi' ? 'स्वाध्याय आरंभ करें' : 'Start Reading'}
              </h3>
              <p className="text-sm text-gray-500 max-w-sm mt-2 font-sans">
                {selectedBook 
                  ? (lang === 'mr' ? "डाव्या बाजूच्या पॅनेलमधील अध्यायावर क्लिक करून त्याचा पावन पाठ आणि भावार्थ वाचा." : lang === 'hi' ? "बायें पैनल में दिए गए अध्याय/लीलाओं की सूची में से किसी एक पर क्लिक करके उसका पावन पाठ और अर्थ पढ़ें।" : "Click on a chapter in the left panel to read its text and explanation.")
                  : (lang === 'mr' ? "वरील पवित्र ग्रंथांपैकी एक ग्रंथ निवडा आणि त्याच्या मौल्यवान शिकवणींचा अभ्यास करा." : lang === 'hi' ? "ऊपर दिए गए पवित्र ग्रंथों की सूची में से एक ग्रंथ चुनें, और उसकी अमूल्य शिक्षाओं का अध्ययन करें।" : "Select a scripture from above and study its divine wisdom.")
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
