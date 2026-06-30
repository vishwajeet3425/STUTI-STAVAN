/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Book, Chapter, Bhajan, Pravachan, Temple, EventKaryakram, Samachar, CommunityMessage, AppNotification, AnalyticsData } from './types';

// Component Imports
import Granthalaya from './components/Granthalaya';
import BhajanList from './components/BhajanList';
import PravachanList from './components/PravachanList';
import TempleDirectory from './components/TempleDirectory';
import KaryakramCalendar from './components/KaryakramCalendar';
import SamacharNews from './components/SamacharNews';
import CommunityDiscussion from './components/CommunityDiscussion';
import LiveChannel from './components/LiveChannel';
import DonationGateway from './components/DonationGateway';
import AdminConsole from './components/AdminConsole';

// Icons
import {
  BookOpen, Music, Radio, MapPin, Calendar, Newspaper, MessageSquare, Tv, Bell, Settings,
  Sparkles, Heart, Compass, Volume2, ShieldAlert, ShieldCheck, User, VolumeX, Menu, ChevronDown, Check
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('granthalaya');
  const [lang, setLang] = useState<'hi' | 'mr' | 'en'>('hi');

  // Server state data
  const [books, setBooks] = useState<Book[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [bhajans, setBhajans] = useState<Bhajan[]>([]);
  const [pravachans, setPravachans] = useState<Pravachan[]>([]);
  const [temples, setTemples] = useState<Temple[]>([]);
  const [events, setEvents] = useState<EventKaryakram[]>([]);
  const [news, setNews] = useState<Samachar[]>([]);
  const [messages, setMessages] = useState<CommunityMessage[]>([]);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    appOpens: 0,
    mostReadBooks: {},
    mostPlayedBhajans: {},
    activeUsersToday: 0
  });

  // Admin Customization configurations
  const [adsEnabled, setAdsEnabled] = useState(true);

  // Notifications dropdown open state
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(true);

  // API Fetches
  const fetchAllData = async () => {
    try {
      const [
        resBooks, resChapters, resBhajans, resPravachans,
        resTemples, resEvents, resNews, resMessages,
        resNotifs, resAnalytics
      ] = await Promise.all([
        fetch('/api/books').then(r => r.json()),
        fetch('/api/chapters').then(r => r.json()),
        fetch('/api/bhajans').then(r => r.json()),
        fetch('/api/pravachans').then(r => r.json()),
        fetch('/api/temples').then(r => r.json()),
        fetch('/api/events').then(r => r.json()),
        fetch('/api/news').then(r => r.json()),
        fetch('/api/messages').then(r => r.json()),
        fetch('/api/notifications').then(r => r.json()),
        fetch('/api/analytics').then(r => r.json())
      ]);

      setBooks(resBooks);
      setChapters(resChapters);
      setBhajans(resBhajans);
      setPravachans(resPravachans);
      setTemples(resTemples);
      setEvents(resEvents);
      setNews(resNews);
      setMessages(resMessages);
      setNotifications(resNotifs);
      setAnalytics(resAnalytics);
    } catch (err) {
      console.error("Error fetching data from Server:", err);
    }
  };

  // On App opens
  useEffect(() => {
    fetchAllData();
    // Increment App Opens count on Server
    fetch('/api/analytics/open', { method: 'POST' })
      .then(r => r.json())
      .then(updatedAnalytics => setAnalytics(updatedAnalytics))
      .catch(err => console.log(err));
  }, []);

  // -------------------------------------------------------------
  // Dynamic API Actions mapped to Admin Console
  // -------------------------------------------------------------

  const handleAddBook = async (title: string, titleEn: string, author: string, description: string) => {
    try {
      const res = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, titleEn, author, description })
      });
      if (res.ok) fetchAllData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddChapter = async (bookId: string, number: number, title: string, content: string, explanation: string) => {
    try {
      const res = await fetch('/api/chapters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookId, number, title, content, explanation })
      });
      if (res.ok) fetchAllData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddBhajan = async (title: string, lyrics: string, singer: string, language: string) => {
    try {
      const res = await fetch('/api/bhajans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, lyrics, singer, language })
      });
      if (res.ok) fetchAllData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddTemple = async (name: string, type: 'temple' | 'ashram' | 'sthan', location: string, description: string, lat: number, lng: number) => {
    try {
      const res = await fetch('/api/temples', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, type, location, description, latitude: lat, longitude: lng })
      });
      if (res.ok) fetchAllData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendNotification = async (title: string, body: string, category: 'granth' | 'bhajan' | 'event' | 'general') => {
    try {
      const res = await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, category })
      });
      if (res.ok) {
        setHasNewNotifications(true);
        fetchAllData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // -------------------------------------------------------------
  // Dynamic API Actions mapped to Community
  // -------------------------------------------------------------

  const handleSendMessage = async (messageText: string, userName: string, userRole: 'user' | 'vishwajeet shevlikar') => {
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, userRole, message: messageText })
      });
      if (res.ok) fetchAllData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendReply = async (msgId: string, replyText: string, userName: string, userRole: 'user' | 'vishwajeet shevlikar') => {
    try {
      const res = await fetch(`/api/messages/${msgId}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, userRole, message: replyText })
      });
      if (res.ok) fetchAllData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLikeMessage = async (msgId: string) => {
    try {
      const res = await fetch(`/api/messages/${msgId}/like`, { method: 'POST' });
      if (res.ok) fetchAllData();
    } catch (err) {
      console.error(err);
    }
  };

  // -------------------------------------------------------------
  // Analytics Trackers
  // -------------------------------------------------------------

  const handleBookReadCount = async (bookTitle: string) => {
    try {
      const res = await fetch('/api/analytics/read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookTitle })
      });
      if (res.ok) {
        const updated = await res.json();
        setAnalytics(updated);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleBhajanPlayCount = async (bhajanTitle: string) => {
    try {
      const res = await fetch('/api/analytics/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bhajanTitle })
      });
      if (res.ok) {
        const updated = await res.json();
        setAnalytics(updated);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-saffron-50 text-gray-800 flex flex-col font-sans transition-all selection:bg-saffron-100 selection:text-saffron-700">
      
      {/* 1. AD BANNER SPONSOR CONTROLLED BY ADMIN */}
      {adsEnabled && (
        <div id="ad-banner" className="bg-saffron-600 text-white py-2.5 px-4 text-center text-xs md:text-sm font-bold tracking-wide font-devanagari relative overflow-hidden flex items-center justify-center gap-2 border-b border-saffron-700 shadow-sm animate-pulse">
          <Sparkles className="w-4 h-4 text-saffron-100 flex-shrink-0" />
          <span>॥ श्री कृष्ण देवस्थान ट्रस्ट ऋद्धपूर धाम भक्त निवास ऑनलाइन बुकिंग एवं महाप्रसाद सेवा चालू आहे ॥</span>
          <a
            href="#donation" 
            onClick={() => setActiveTab('donation')}
            className="bg-white text-saffron-700 px-2.5 py-0.5 rounded-full hover:bg-saffron-100 text-[10px] font-sans font-bold ml-2 transition-all shadow-xs"
          >
            अभी दान करें
          </a>
        </div>
      )}

      {/* 2. MAIN HEADER NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-saffron-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/images/regenerated_image_1782731218548.png"
              alt="महानुभाव विश्व"
              referrerPolicy="no-referrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md border-2 border-white live-pulse"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-black text-saffron-700 font-display leading-tight tracking-wide">
                महानुभाव विश्व (Mahanubhav)
              </h1>
              <p className="text-[10px] text-gray-500 font-sans tracking-widest uppercase mt-0.5 font-bold">
                श्री चक्रधर स्वामी उपदेश पीठ
              </p>
            </div>
          </div>

          {/* Header Action Tools */}
          <div className="flex items-center gap-3">
            
            {/* Language Selector Dropdown */}
            <div className="relative group">
              <button className="px-3 py-1.5 border border-saffron-200 text-saffron-600 rounded-lg hover:bg-saffron-50 text-xs font-bold font-sans transition-all flex items-center gap-1 bg-white">
                <span>{lang === 'hi' ? 'हिंदी' : lang === 'mr' ? 'मराठी' : 'English'}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute right-0 top-full mt-1.5 w-28 bg-white border border-saffron-100 rounded-xl shadow-lg p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <button onClick={() => setLang('hi')} className="w-full text-left px-3 py-1.5 text-xs font-semibold rounded hover:bg-saffron-50 flex items-center justify-between">
                  <span>हिंदी</span>
                  {lang === 'hi' && <Check className="w-3 h-3 text-saffron-500" />}
                </button>
                <button onClick={() => setLang('mr')} className="w-full text-left px-3 py-1.5 text-xs font-semibold rounded hover:bg-saffron-50 flex items-center justify-between">
                  <span>मराठी</span>
                  {lang === 'mr' && <Check className="w-3 h-3 text-saffron-500" />}
                </button>
                <button onClick={() => setLang('en')} className="w-full text-left px-3 py-1.5 text-xs font-semibold rounded hover:bg-saffron-50 flex items-center justify-between">
                  <span>English</span>
                  {lang === 'en' && <Check className="w-3 h-3 text-saffron-500" />}
                </button>
              </div>
            </div>

            {/* Notification Alert Inbox Button */}
            <div className="relative">
              <button
                id="notif-btn"
                onClick={() => { setShowNotifications(!showNotifications); setHasNewNotifications(false); }}
                className={`p-2.5 rounded-full border bg-white text-gray-600 hover:text-saffron-500 transition-all ${
                  hasNewNotifications ? 'border-saffron-400 bg-saffron-50 text-saffron-600' : 'border-gray-200'
                }`}
                title="अधिसूचना संदेश (Notifications)"
              >
                <Bell className="w-4.5 h-4.5" />
                {hasNewNotifications && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
                )}
              </button>

              {/* Notification dropdown list */}
              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-white border border-saffron-100 rounded-2xl shadow-xl overflow-hidden z-50">
                  <div className="bg-saffron-50 p-4 border-b border-saffron-100 flex items-center justify-between">
                    <h3 className="text-xs font-bold text-saffron-700 uppercase tracking-wider font-sans">नवीन सूचना पत्र</h3>
                    <button onClick={() => setShowNotifications(false)} className="text-[10px] font-bold text-gray-400 hover:text-gray-600 font-sans">
                      बंद करें
                    </button>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto custom-scrollbar divide-y divide-gray-100">
                    {notifications.length === 0 ? (
                      <p className="text-xs text-gray-400 p-6 text-center">कोई नई सूचना नहीं है।</p>
                    ) : (
                      notifications.map(notif => (
                        <div key={notif.id} className="p-4 hover:bg-saffron-50/20 transition-all">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[8px] bg-saffron-100 text-saffron-700 px-1.5 py-0.5 rounded font-bold font-mono uppercase">
                              {notif.category}
                            </span>
                            <span className="text-[9px] text-gray-400 font-mono ml-auto">{notif.date}</span>
                          </div>
                          <h4 className="text-xs font-bold text-gray-800 mt-1.5 font-devanagari">{notif.title}</h4>
                          <p className="text-[11px] text-gray-500 mt-0.5 font-sans leading-relaxed">{notif.body}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* 3. APP MODULES BUTTON TABS (DESKTOP NAVIGATION RAIL) */}
      <nav className="bg-white border-b border-saffron-100 py-1.5 shadow-2xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-1.5">
          {[
            { id: 'granthalaya', label: 'ग्रंथालय', icon: BookOpen },
            { id: 'bhajan', label: 'भजन व संगीत', icon: Music },
            { id: 'pravachan', label: 'प्रवचन माला', icon: Radio },
            { id: 'temples', label: 'स्थान व आश्रम', icon: MapPin },
            { id: 'calendar', label: 'कैलेंडर उत्सव', icon: Calendar },
            { id: 'samachar', label: 'संगठन समाचार', icon: Newspaper },
            { id: 'community', label: 'चर्चा एवं AI उपदेशक', icon: MessageSquare },
            { id: 'live', label: 'लाइव चैनल', icon: Tv },
            { id: 'donation', label: 'दान व सेवा', icon: Sparkles },
            { id: 'admin', label: 'एडमन पैनल', icon: Settings }
          ].map(tab => {
            const IconComp = tab.icon;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => { setActiveTab(tab.id); setShowNotifications(false); }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 font-devanagari select-none border border-transparent ${
                  activeTab === tab.id
                    ? 'bg-saffron-500 text-white shadow-sm border-saffron-600'
                    : 'text-gray-600 hover:bg-saffron-50 hover:text-saffron-600'
                }`}
              >
                <IconComp className="w-4 h-4 shrink-0" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 4. MAIN CENTRAL CONTENT WORKSPACE */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 pb-24 md:pb-8">
        
        {/* Animated Render Wrapper based on selected Tab */}
        <div className="transition-all duration-300">
          {activeTab === 'granthalaya' && (
            <Granthalaya
              books={books}
              chapters={chapters}
              onBookRead={handleBookReadCount}
            />
          )}

          {activeTab === 'bhajan' && (
            <BhajanList
              bhajans={bhajans}
              onBhajanPlay={handleBhajanPlayCount}
            />
          )}

          {activeTab === 'pravachan' && (
            <PravachanList
              pravachans={pravachans}
            />
          )}

          {activeTab === 'temples' && (
            <TempleDirectory
              temples={temples}
            />
          )}

          {activeTab === 'calendar' && (
            <KaryakramCalendar
              events={events}
            />
          )}

          {activeTab === 'samachar' && (
            <SamacharNews
              news={news}
            />
          )}

          {activeTab === 'community' && (
            <CommunityDiscussion
              messages={messages}
              onSendMessage={handleSendMessage}
              onSendReply={handleSendReply}
              onLikeMessage={handleLikeMessage}
            />
          )}

          {activeTab === 'live' && (
            <LiveChannel />
          )}

          {activeTab === 'donation' && (
            <DonationGateway />
          )}

          {activeTab === 'admin' && (
            <AdminConsole
              books={books}
              chapters={chapters}
              temples={temples}
              analytics={analytics}
              adsEnabled={adsEnabled}
              onToggleAds={() => setAdsEnabled(!adsEnabled)}
              onAddBook={handleAddBook}
              onAddChapter={handleAddChapter}
              onAddBhajan={handleAddBhajan}
              onAddTemple={handleAddTemple}
              onSendNotification={handleSendNotification}
            />
          )}
        </div>
      </main>

      {/* 5. RESPONSIVE MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-saffron-100 flex items-center justify-around h-16 md:hidden px-2 shadow-lg">
        {[
          { id: 'granthalaya', label: 'ग्रंथ', icon: BookOpen },
          { id: 'bhajan', label: 'भजन', icon: Music },
          { id: 'temples', label: 'स्थान', icon: MapPin },
          { id: 'community', label: 'AI चर्चा', icon: MessageSquare },
          { id: 'donation', label: 'दान', icon: Sparkles },
          { id: 'admin', label: 'एडमिन', icon: Settings }
        ].map(tab => {
          const IconComp = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setShowNotifications(false); }}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[10px] font-bold font-devanagari transition-all ${
                activeTab === tab.id ? 'text-saffron-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <IconComp className={`w-5 h-5 mb-0.5 ${activeTab === tab.id ? 'text-saffron-500' : 'text-gray-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>

    </div>
  );
}
