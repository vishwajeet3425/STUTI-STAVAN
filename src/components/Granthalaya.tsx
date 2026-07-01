/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Book, Chapter } from '../types';
import { BookOpen, Bookmark, Search, Volume2, VolumeX, ChevronRight, ArrowLeft } from 'lucide-react';
import { translations } from '../translations';

interface GranthalayaProps {
  books: Book[];
  chapters: Chapter[];
  onBookRead: (bookTitle: string) => void;
  lang?: 'hi' | 'mr' | 'en';
}

export default function Granthalaya({ books, chapters, onBookRead, lang = 'mr' }: GranthalayaProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechUtterance, setSpeechUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', mr: 'सर्व ग्रंथ', hi: 'सभी ग्रंथ', en: 'All Books' },
    { id: 'pramukh_granth', mr: 'प्रमुख ग्रंथ', hi: 'प्रमुख ग्रंथ', en: 'Pramukh Granth' },
    { id: 'aarti_stotra', mr: 'आरती व स्तोत्र', hi: 'आरती व स्तोत्र', en: 'Aarti & Stotra' },
    { id: 'bhajan', mr: 'भजन संग्रह', hi: 'भजन संग्रह', en: 'Bhajan' },
    { id: 'pujavsar', mr: 'पूजावसर', hi: 'पूजावसर', en: 'Pujavasar' },
    { id: 'parayn', mr: 'पारायण', hi: 'पारायण', en: 'Parayan' },
    { id: 'sati_granth', mr: 'साती ग्रंथ', hi: 'साती ग्रंथ', en: 'Sati Granth' },
    { id: 'itar_sahity', mr: 'इतर साहित्य', hi: 'इतर साहित्य', en: 'Other Literature' }
  ];

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

  // Filter books based on selectedCategory and searchQuery
  const filteredBooks = books.filter(book => {
    if (selectedCategory !== 'all') {
      return book.category === selectedCategory;
    }
    return true;
  }).filter(book => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        book.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Filter chapters
  const filteredChapters = chapters.filter(chap => {
    if (selectedBook && chap.bookId !== selectedBook.id) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        chap.title.toLowerCase().includes(q) ||
        chap.content.toLowerCase().includes(q) ||
        (chap.explanation && chap.explanation.toLowerCase().includes(q))
      );
    }
    return true;
  });

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

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
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
    onBookRead(book.title);
  };

  return (
    <div id="granthalaya-root" className="bg-white rounded-2xl shadow-md border border-saffron-100 overflow-hidden min-h-[500px]">
      {/* Granthalaya Header */}
      <div className="bg-saffron-50 p-6 border-b border-saffron-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-saffron-700 font-devanagari flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-saffron-500" />
            {translations.granthalayaHeader[lang]}
          </h2>
          <p className="text-sm text-gray-600 mt-1 font-sans">
            {translations.granthalayaSub[lang]}
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder={translations.searchGranthPlaceholder[lang]}
            className="w-full pl-9 pr-4 py-2 text-sm border border-saffron-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Sub-Category Tab Bar for Granthalay */}
      <div className="bg-saffron-50/30 border-b border-saffron-100/50 px-6 py-3 overflow-x-auto flex gap-2 select-none no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setSelectedBook(null);
              setSelectedChapter(null);
              stopSpeech();
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-bold font-sans whitespace-nowrap transition-all border ${
              selectedCategory === cat.id
                ? 'bg-saffron-500 text-white border-saffron-500 shadow-xs'
                : 'bg-white text-gray-600 border-saffron-100 hover:border-saffron-300 hover:text-saffron-600'
            }`}
          >
            {cat[lang === 'hi' ? 'hi' : lang === 'mr' ? 'mr' : 'en']}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[450px]">
        {/* Book / Chapter Sidebar */}
        <div className="border-r border-saffron-100 p-4 bg-saffron-50/30">
          {!selectedBook ? (
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {lang === 'mr' ? 'ग्रंथ सूची' : lang === 'hi' ? 'ग्रंथ सूची' : 'Select Book'}
              </h3>
              <div className="space-y-3">
                {filteredBooks.length === 0 ? (
                  <p className="text-xs text-gray-400 py-8 text-center">
                    {lang === 'mr' ? 'या श्रेणीत कोणताही ग्रंथ सापडला नाही.' : lang === 'hi' ? 'इस श्रेणी में कोई ग्रंथ नहीं मिला।' : 'No books found in this category.'}
                  </p>
                ) : (
                  filteredBooks.map(book => (
                    <button
                      key={book.id}
                      id={`book-btn-${book.id}`}
                      onClick={() => selectBookHandler(book)}
                      className="w-full text-left p-3.5 rounded-xl border border-saffron-100 bg-white hover:border-saffron-300 hover:bg-saffron-50/50 transition-all shadow-sm flex items-start gap-3 group"
                    >
                      {book.coverImage && (
                        <img src={book.coverImage} alt={book.title} className="w-12 h-16 object-cover rounded-md shadow-sm border border-gray-100 flex-shrink-0" referrerPolicy="no-referrer" />
                      )}
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] bg-saffron-100 text-saffron-800 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider block w-fit mb-1">
                          {categories.find(c => c.id === book.category)?.[lang === 'mr' ? 'mr' : lang === 'hi' ? 'hi' : 'en'] || book.category}
                        </span>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base font-devanagari line-clamp-1 group-hover:text-saffron-600">{book.title}</h4>
                        <p className="text-xs text-saffron-600 font-sans mt-0.5">{book.author}</p>
                        <p className="text-xs text-gray-500 mt-1 font-sans line-clamp-2">{book.description}</p>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div>
              <button
                onClick={() => { setSelectedBook(null); setSelectedChapter(null); stopSpeech(); }}
                className="flex items-center gap-1.5 text-xs font-semibold text-saffron-600 hover:text-saffron-700 mb-4 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                {translations.backToBooks[lang]}
              </button>

              <div className="flex items-center gap-3 mb-4 p-2 bg-saffron-100/50 rounded-xl">
                {selectedBook.coverImage && (
                  <img src={selectedBook.coverImage} alt={selectedBook.title} className="w-8 h-11 object-cover rounded shadow-sm flex-shrink-0" referrerPolicy="no-referrer" />
                )}
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm font-devanagari truncate">{selectedBook.title}</h4>
                  <span className="text-[10px] bg-saffron-500 text-white px-1.5 py-0.5 rounded font-mono uppercase">{selectedBook.category}</span>
                </div>
              </div>

              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {lang === 'mr' ? 'अध्याय / प्रकरण सूची' : lang === 'hi' ? 'अध्याय / प्रकरण सूची' : 'Chapter List'}
              </h3>
              <div className="space-y-1 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
                {filteredChapters.length === 0 ? (
                  <p className="text-xs text-gray-400 py-4 text-center">
                    {lang === 'mr' ? 'कोणताही अध्याय उपलब्ध नाही.' : lang === 'hi' ? 'कोई अध्याय उपलब्ध नहीं है।' : 'No chapters available.'}
                  </p>
                ) : (
                  filteredChapters.map(chap => (
                    <button
                      key={chap.id}
                      id={`chap-btn-${chap.id}`}
                      onClick={() => { setSelectedChapter(chap); stopSpeech(); }}
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

        {/* Reading Panel */}
        <div className="col-span-1 md:col-span-2 p-6 flex flex-col bg-white">
          {selectedChapter ? (
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
              <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-saffron-50/40 p-4 rounded-xl">
                <div className="text-xs text-gray-500">
                  {lang === 'mr' ? 'प्रकाशन:' : lang === 'hi' ? 'प्रकाशन:' : 'Publisher:'} <span className="font-semibold text-gray-700">{selectedBook?.author}</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://mural.is.depaul.edu/jspui/bitstream/10611/4845/1/sutrapath-final.pdf" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-3 py-1.5 border border-saffron-200 text-saffron-600 hover:bg-saffron-50 rounded-lg text-xs font-semibold transition-all flex items-center gap-1"
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
