/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Home, Phone, MapPin, Users, Calendar, Clock, CheckCircle, Info, Sparkles, Search, Star, MessageSquare } from 'lucide-react';
import { MAHARASHTRA_DISTRICTS_AND_TALUKAS } from '../data';

interface NiwasKoshProps {
  lang?: 'hi' | 'mr' | 'en';
}

interface NiwasItem {
  id: string;
  name: string;
  nameEn: string;
  location: string;
  district: string;
  taluka: string;
  facilities: { mr: string[]; hi: string[]; en: string[] };
  rooms: { mr: string[]; hi: string[]; en: string[] };
  contactPerson: string;
  phone: string;
  sevaCharge: { mr: string; hi: string; en: string };
  imageUrl: string;
  rating: number;
}

interface BookingRecord {
  id: string;
  niwasName: string;
  guestName: string;
  mobile: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  status: 'pending' | 'confirmed';
  bookingDate: string;
}

const PRE_SEEDED_NIWAS: NiwasItem[] = [
  {
    id: 'niwas_riddhapur',
    name: 'श्री कृष्ण देवस्थान ट्रस्ट भक्त निवास (ऋद्धपूर धाम)',
    nameEn: 'Shree Krishna Devasthan Trust Bhakt Niwas (Riddhapur Dham)',
    location: 'ऋद्धपूर, चांदूर बाजार, अमरावती',
    district: 'अमरावती',
    taluka: 'चांदुर बाजार',
    facilities: {
      mr: ['अन्नछत्र / महाप्रसाद सेवा', 'मोफत पार्किंग', '२४ तास गरम पाणी', 'सुसज्ज स्वच्छतागृह'],
      hi: ['अन्नक्षेत्र / महाप्रसाद सेवा', 'निःशुल्क पार्किंग', '२४ घंटे गर्म पानी', 'स्वच्छ शौचालय'],
      en: ['Mahaprasad Seva (Food)', 'Free Parking', '24hr Hot Water', 'Clean Washrooms']
    },
    rooms: {
      mr: ['एसी रूम्स (AC Rooms)', 'नॉन-एसी रूम्स (Non-AC Rooms)', 'मोठा हॉल / डोरमेट्री (Dormitory)'],
      hi: ['एसी कमरे', 'नॉन-एसी कमरे', 'बड़ा हॉल / डोरमेट्री'],
      en: ['AC Rooms', 'Non-AC Rooms', 'Dormitory Hall']
    },
    contactPerson: 'शास्त्री बाबा महानुभाव',
    phone: '+91 98234 56781',
    sevaCharge: {
      mr: 'ऐच्छिक सहकार्य / ₹२०० ते ₹५०० प्रति दिवस',
      hi: 'ऐच्छिक सहयोग / ₹२०० से ₹५०० प्रति दिन',
      en: 'Voluntary Donation / ₹200 to ₹500 per day'
    },
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: 'niwas_domegram',
    name: 'श्री कृष्ण मंदिर देवस्थान भक्त निवास (डोमेग्राम)',
    nameEn: 'Shree Krishna Mandir Devasthan Bhakt Niwas (Domegram)',
    location: 'डोमेग्राम (कमळापूर), नेवासा, अहमदनगर',
    district: 'अहमदनगर',
    taluka: 'नेवासा',
    facilities: {
      mr: ['नित्य पूजावसर व आरती', 'शुद्ध पेय जल', 'वाहन पार्किंग', 'भोजन व्यवस्था'],
      hi: ['नित्य पूजावसर एवं आरती', 'शुद्ध पेयजल', 'वाहन पार्किंग', 'भोजन व्यवस्था'],
      en: ['Daily Prayers & Aarti', 'Pure Drinking Water', 'Vehicle Parking', 'Meals Available']
    },
    rooms: {
      mr: ['कौटुंबिक खोल्या (Family Rooms)', 'साधारण खोल्या (Standard Rooms)'],
      hi: ['पारिवारिक कमरे', 'साधारण कमरे'],
      en: ['Family Rooms', 'Standard Rooms']
    },
    contactPerson: 'महंत बाळकृष्ण जी महानुभाव',
    phone: '+91 94222 34567',
    sevaCharge: {
      mr: 'निःशुल्क (ऐच्छिक देणगी स्वीकारली जाते)',
      hi: 'निःशुल्क (ऐच्छिक दान स्वीकार्य)',
      en: 'Free of Cost (Voluntary donations welcome)'
    },
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-2dbe4836ca91?q=80&w=600&auto=format&fit=crop',
    rating: 4.8
  },
  {
    id: 'niwas_phaltan',
    name: 'श्री चक्रधर स्वामी आश्रम व भक्त निवास (फलटण)',
    nameEn: 'Shree Chakradhar Swami Ashram & Bhakt Niwas (Phaltan)',
    location: 'महानुभाव गल्ली, फलटण, सातारा',
    district: 'सातारा',
    taluka: 'फलटण',
    facilities: {
      mr: ['शांत आध्यात्मिक वातावरण', 'ग्रंथालय सुविधा', 'महाप्रसाद भवन', 'गरम पाण्याचे गिझर'],
      hi: ['शांत आध्यात्मिक वातावरण', 'ग्रंथालय सुविधा', 'महाप्रसाद भवन', 'गर्म पानी गीजर'],
      en: ['Serene Spiritual Vibe', 'Library Access', 'Mahaprasad Hall', 'Water Geysers']
    },
    rooms: {
      mr: ['डीलक्स एसी खोल्या', 'नॉन-एसी फॅमिली खोल्या'],
      hi: ['डीलक्स एसी कमरे', 'नॉन-एसी फैमिली कमरे'],
      en: ['Deluxe AC Rooms', 'Non-AC Family Rooms']
    },
    contactPerson: 'गोपीराज शास्त्रीजी',
    phone: '+91 98901 12345',
    sevaCharge: {
      mr: '₹३०० प्रति दिवस सहयोग निधी',
      hi: '₹३०० प्रति दिन सहयोग निधि',
      en: '₹300 per day maintenance donation'
    },
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop',
    rating: 4.7
  },
  {
    id: 'niwas_panchavati',
    name: 'महानुभाव आश्रम भक्त निवास (पंचवटी धाम)',
    nameEn: 'Mahanubhav Ashram Bhakt Niwas (Panchavati Dham)',
    location: 'तपोवन रोड, पंचवटी, नाशिक',
    district: 'नाशिक',
    taluka: 'नाशिक',
    facilities: {
      mr: ['गोदावरी नदी जवळ', 'मोफत भोजनप्रसाद', 'सुरक्षित पार्किंग', 'नित्य भजन संध्या'],
      hi: ['गोदावरी नदी के समीप', 'निःशुल्क भोजन प्रसाद', 'सुरक्षित पार्किंग', 'नित्य भजन संध्या'],
      en: ['Near Godavari River', 'Free Meals', 'Secured Parking', 'Daily Evening Bhajans']
    },
    rooms: {
      mr: ['अतिथी विशेष खोल्या (Deluxe)', 'सामान्य सिंगल खोल्या', 'यात्री डोमेट्री'],
      hi: ['अतिथि विशेष कमरे (Deluxe)', 'सामान्य सिंगल कमरे', 'यात्री डोरमेट्री'],
      en: ['Deluxe Guest Rooms', 'Standard Single Rooms', 'Pilgrim Dormitory']
    },
    contactPerson: 'प्रल्हाद महाराज महानुभाव',
    phone: '+91 97654 98765',
    sevaCharge: {
      mr: '₹२०० ते ₹४०० प्रति दिवस',
      hi: '₹२०० से ₹४०० प्रति दिन',
      en: '₹200 to ₹400 per day'
    },
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: 'niwas_katol',
    name: 'श्री चक्रपाणि महाराज यात्री निवास (काटोल)',
    nameEn: 'Shree Chakrapani Maharaj Yatri Niwas (Katol)',
    location: 'महानुभाव मंदिर परिसर, काटोल, नागपूर',
    district: 'नागपूर',
    taluka: 'काटोल',
    facilities: {
      mr: ['स्वच्छ परिसर', '२४ तास सुरक्षा व्यवस्था', 'पेयजल सुविधा', 'मदत केंद्र'],
      hi: ['स्वच्छ परिसर', '२४ घंटे सुरक्षा व्यवस्था', 'पेयजल सुविधा', 'हेल्प डेस्क'],
      en: ['Clean Environment', '24hr Security', 'Drinking Water', 'Help Desk']
    },
    rooms: {
      mr: ['नॉन-एसी खोल्या (३ बेड)', 'मोठा हॉल'],
      hi: ['नॉन-एसी कमरे (3 बेड)', 'बड़ा हॉल'],
      en: ['Non-AC Triple Rooms', 'Large Hall']
    },
    contactPerson: 'हरिराज शास्त्री बाबा',
    phone: '+91 91588 77665',
    sevaCharge: {
      mr: '₹१५० प्रति दिवस सेवा शुल्क',
      hi: '₹१५० प्रति दिन सेवा शुल्क',
      en: '₹150 per day maintenance charge'
    },
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=600&auto=format&fit=crop',
    rating: 4.6
  },
  {
    id: 'niwas_jalna',
    name: 'श्री दत्तात्रेय प्रभू देवस्थान भक्त निवास (जालना)',
    nameEn: 'Shree Dattatreya Prabhu Devasthan Bhakt Niwas (Jalna)',
    location: 'महानुभाव नगर, जालना रोड, जालना',
    district: 'जालना',
    taluka: 'जालना',
    facilities: {
      mr: ['नित्य महाप्रसाद सेवा', 'अखंड दत्त नामस्मरण हॉल', 'सुंदर ध्यान मंदिर', 'वाहन चालक निवास'],
      hi: ['नित्य महाप्रसाद सेवा', 'अखंड दत्त नामस्मरण हॉल', 'सुंदर ध्यान मंदिर', 'ड्राइवर विश्राम गृह'],
      en: ['Daily Mahaprasad', 'Chanting Hall', 'Meditation Mandir', 'Driver Room']
    },
    rooms: {
      mr: ['एसी डिलक्स खोल्या', 'साधारण डबल खोल्या', 'सामुदायिक निवास'],
      hi: ['एसी डीलक्स कमरे', 'साधारण डबल कमरे', 'सामुदायिक निवास'],
      en: ['AC Deluxe Rooms', 'Standard Double Rooms', 'Community Hall']
    },
    contactPerson: 'आनंदराज महाराज',
    phone: '+91 93099 11223',
    sevaCharge: {
      mr: '₹२५० ते ₹६०० प्रति दिवस',
      hi: '₹२५० से ₹६०० प्रति दिन',
      en: '₹250 to ₹600 per day'
    },
    imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600&auto=format&fit=crop',
    rating: 4.8
  }
];

export default function NiwasKosh({ lang = 'mr' }: NiwasKoshProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedTaluka, setSelectedTaluka] = useState('all');
  const [activeSubTab, setActiveSubTab] = useState<'explore' | 'my_bookings'>('explore');
  const [selectedNiwas, setSelectedNiwas] = useState<NiwasItem | null>(null);
  
  // Booking Form State
  const [guestName, setGuestName] = useState('');
  const [mobile, setMobile] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  
  // Local Bookings List
  const [myBookings, setMyBookings] = useState<BookingRecord[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('mahanubhav_niwas_bookings');
    if (saved) {
      setMyBookings(JSON.parse(saved));
    }
  }, []);

  const districts = Array.from(new Set(PRE_SEEDED_NIWAS.map(item => item.district))).sort();
  const talukas = selectedDistrict !== 'all' ? (MAHARASHTRA_DISTRICTS_AND_TALUKAS[selectedDistrict] || []) : [];

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(e.target.value);
    setSelectedTaluka('all');
  };

  const filteredNiwas = PRE_SEEDED_NIWAS.filter(item => {
    if (selectedDistrict !== 'all' && item.district !== selectedDistrict) return false;
    if (selectedTaluka !== 'all' && item.taluka !== selectedTaluka) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.contactPerson.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedNiwas || !guestName || !mobile || !checkIn || !checkOut) return;

    const refNo = 'MNK-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking: BookingRecord = {
      id: refNo,
      niwasName: selectedNiwas.name,
      guestName,
      mobile,
      checkIn,
      checkOut,
      guests,
      roomType: roomType || selectedNiwas.rooms[lang][0],
      status: 'confirmed',
      bookingDate: new Date().toLocaleDateString('mr-IN')
    };

    const updated = [newBooking, ...myBookings];
    setMyBookings(updated);
    localStorage.setItem('mahanubhav_niwas_bookings', JSON.stringify(updated));

    setBookingRef(refNo);
    setBookingSuccess(true);
    
    // Clear form
    setGuestName('');
    setMobile('');
    setCheckIn('');
    setCheckOut('');
    setGuests(1);
    setRoomType('');
  };

  const cancelBooking = (id: string) => {
    const updated = myBookings.filter(b => b.id !== id);
    setMyBookings(updated);
    localStorage.setItem('mahanubhav_niwas_bookings', JSON.stringify(updated));
  };

  return (
    <div id="niwas-kosh-root" className="bg-white rounded-2xl shadow-md border border-saffron-100 overflow-hidden min-h-[500px]">
      {/* Header section */}
      <div className="bg-saffron-50 p-6 border-b border-saffron-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-saffron-700 font-devanagari flex items-center gap-2">
            <Home className="w-6 h-6 text-saffron-500" />
            {lang === 'mr' ? 'महानुभाव निवास कोष' : lang === 'hi' ? 'महानुभाव निवास कोष' : 'Mahanubhav Residence Directory'}
          </h2>
          <p className="text-sm text-gray-600 mt-1 font-sans">
            {lang === 'mr' 
              ? 'महानुभाव पंथाच्या विविध तीर्थक्षेत्रांमधील पवित्र भक्त निवास आणि निवास व्यवस्थेची संपूर्ण माहिती व संपर्क.' 
              : lang === 'hi' 
              ? 'महानुभाव पंथ के विभिन्न तीर्थस्थलों के पवित्र भक्त निवास और ठहरने की व्यवस्था की संपूर्ण जानकारी व बुकिंग.' 
              : 'Complete details and contact of holy guest houses/ashrams at Mahanubhav pilgrimage sites.'}
          </p>
        </div>

        {/* Explore vs My Bookings Toggle Tabs */}
        <div className="flex bg-saffron-100/60 p-1 rounded-xl">
          <button
            onClick={() => { setActiveSubTab('explore'); setSelectedNiwas(null); setBookingSuccess(false); }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'explore'
                ? 'bg-saffron-500 text-white shadow-xs'
                : 'text-gray-600 hover:text-saffron-600'
            }`}
          >
            {lang === 'mr' ? 'निवास सूची शोधा' : lang === 'hi' ? 'निवास सूची खोजें' : 'Search Directory'}
          </button>
          <button
            onClick={() => { setActiveSubTab('my_bookings'); setSelectedNiwas(null); setBookingSuccess(false); }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeSubTab === 'my_bookings'
                ? 'bg-saffron-500 text-white shadow-xs'
                : 'text-gray-600 hover:text-saffron-600'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            {lang === 'mr' ? 'माझी बुकिंग्ज' : lang === 'hi' ? 'मेरी बुकिंग्स' : 'My Bookings'}
            {myBookings.length > 0 && (
              <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-mono">{myBookings.length}</span>
            )}
          </button>
        </div>
      </div>

      {activeSubTab === 'explore' ? (
        <div className="p-6">
          {!selectedNiwas ? (
            <div>
              {/* Search & Location Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 bg-saffron-50/20 p-4 rounded-2xl border border-saffron-100/40">
                {/* Search Text */}
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={lang === 'mr' ? 'भक्त निवास नाव किंवा ठिकाण...' : lang === 'hi' ? 'भक्त निवास नाम या स्थान...' : 'Search Niwas or place...'}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-saffron-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* District Filter */}
                <div>
                  <select
                    className="w-full px-3 py-2.5 text-sm border border-saffron-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                  >
                    <option value="all">{lang === 'mr' ? 'सर्व जिल्हे' : lang === 'hi' ? 'सभी जिले' : 'All Districts'}</option>
                    {districts.map(dist => (
                      <option key={dist} value={dist}>{dist}</option>
                    ))}
                  </select>
                </div>

                {/* Taluka Filter */}
                <div>
                  <select
                    className="w-full px-3 py-2.5 text-sm border border-saffron-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white disabled:bg-gray-50 disabled:text-gray-400"
                    value={selectedTaluka}
                    onChange={(e) => setSelectedTaluka(e.target.value)}
                    disabled={selectedDistrict === 'all'}
                  >
                    <option value="all">{lang === 'mr' ? 'सर्व तालुके' : lang === 'hi' ? 'सभी तहसील' : 'All Talukas'}</option>
                    {talukas.map(tal => (
                      <option key={tal} value={tal}>{tal}</option>
                    ))}
                  </select>
                </div>

                {/* Clear button */}
                <button
                  onClick={() => { setSearchQuery(''); setSelectedDistrict('all'); setSelectedTaluka('all'); }}
                  className="bg-saffron-50 text-saffron-700 hover:bg-saffron-100 font-bold text-xs py-2.5 px-4 rounded-xl transition-all border border-saffron-100"
                >
                  {lang === 'mr' ? 'फिल्टर्स साफ करा' : lang === 'hi' ? 'फिल्टर्स साफ करें' : 'Clear Filters'}
                </button>
              </div>

              {/* Grid of Niwas Cards */}
              {filteredNiwas.length === 0 ? (
                <div className="text-center py-12">
                  <Home className="w-16 h-16 text-saffron-200 mx-auto mb-3" />
                  <p className="text-sm font-bold text-gray-500">
                    {lang === 'mr' ? 'कोणतेही भक्त निवास सापडले नाही.' : lang === 'hi' ? 'कोई भक्त निवास नहीं मिला।' : 'No guest houses found matching filters.'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredNiwas.map(item => (
                    <div
                      key={item.id}
                      className="bg-white border border-saffron-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all group flex flex-col justify-between"
                    >
                      <div>
                        {/* Image banner */}
                        <div className="h-44 overflow-hidden relative">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-sm">
                            <Star className="w-3.5 h-3.5 fill-saffron-500 text-saffron-500" />
                            <span className="text-xs font-bold font-mono text-gray-800">{item.rating}</span>
                          </div>
                          <div className="absolute bottom-2 left-2 bg-saffron-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                            {item.district}
                          </div>
                        </div>

                        {/* Details */}
                        <div className="p-4">
                          <h3 className="font-bold text-gray-900 text-base font-devanagari line-clamp-2 leading-snug group-hover:text-saffron-600 transition-all">
                            {lang === 'en' ? item.nameEn : item.name}
                          </h3>
                          <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-2">
                            <MapPin className="w-3.5 h-3.5 text-saffron-500 shrink-0" />
                            <span>{item.location}</span>
                          </p>

                          {/* Seva charge details */}
                          <div className="mt-3 py-1.5 px-3 bg-saffron-50/50 rounded-xl border border-saffron-100/30 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{lang === 'mr' ? 'सेवा सहकार्य' : lang === 'hi' ? 'सेवा सहयोग' : 'Seva Charge'}</span>
                            <span className="text-xs font-bold text-saffron-700 font-devanagari">{item.sevaCharge[lang]}</span>
                          </div>

                          {/* Facilities preview */}
                          <div className="mt-4">
                            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">{lang === 'mr' ? 'सुविधा' : lang === 'hi' ? 'सुविधाएं' : 'Facilities'}</h4>
                            <div className="flex flex-wrap gap-1">
                              {item.facilities[lang].slice(0, 3).map((fac, i) => (
                                <span key={i} className="text-[10px] bg-gray-50 text-gray-600 px-2 py-0.5 rounded border border-gray-100 font-devanagari">
                                  ✓ {fac}
                                </span>
                              ))}
                              {item.facilities[lang].length > 3 && (
                                <span className="text-[10px] text-saffron-600 font-bold px-1.5 py-0.5">+{item.facilities[lang].length - 3}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="p-4 pt-0 border-t border-gray-50 mt-4 flex gap-2">
                        <button
                          onClick={() => setSelectedNiwas(item)}
                          className="w-full bg-saffron-500 text-white hover:bg-saffron-600 font-bold text-xs py-2.5 rounded-xl transition-all shadow-xs flex items-center justify-center gap-1 font-devanagari"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          {lang === 'mr' ? 'माहिती व इन्क्वायरी' : lang === 'hi' ? 'जानकारी व बुकिंग पूछताछ' : 'Details & Booking'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Selected Niwas Detailed View */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column: Image, Details & Info */}
              <div className="md:col-span-2 space-y-6">
                <button
                  onClick={() => { setSelectedNiwas(null); setBookingSuccess(false); }}
                  className="flex items-center gap-1.5 text-xs font-bold text-saffron-600 hover:text-saffron-700 transition-all"
                >
                  ← {lang === 'mr' ? 'निवास यादीकडे परत जा' : lang === 'hi' ? 'निवास सूची पर वापस जाएं' : 'Back to List'}
                </button>

                <div className="bg-white border border-saffron-100 rounded-2xl overflow-hidden shadow-sm">
                  <div className="h-64 relative">
                    <img
                      src={selectedNiwas.imageUrl}
                      alt={selectedNiwas.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-xl flex items-center gap-1 shadow-md">
                      <Star className="w-4 h-4 fill-saffron-500 text-saffron-500" />
                      <span className="text-sm font-bold font-mono text-gray-800">{selectedNiwas.rating} / 5</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black text-gray-900 font-devanagari leading-snug">
                      {lang === 'en' ? selectedNiwas.nameEn : selectedNiwas.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-saffron-500 shrink-0" />
                      <span>{selectedNiwas.location}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-100">
                      {/* Facilities Block */}
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-3 flex items-center gap-1.5 font-devanagari">
                          <CheckCircle className="w-4 h-4 text-saffron-500" />
                          {lang === 'mr' ? 'उपलब्ध सेवा व सुविधा :' : lang === 'hi' ? 'उपलब्ध सेवा एवं सुविधाएं :' : 'Available Services & Facilities:'}
                        </h4>
                        <ul className="space-y-2">
                          {selectedNiwas.facilities[lang].map((fac, idx) => (
                            <li key={idx} className="text-xs text-gray-700 flex items-center gap-2 bg-saffron-50/30 px-3 py-1.5 rounded-lg border border-saffron-100/20 font-devanagari">
                              <span className="w-1.5 h-1.5 bg-saffron-500 rounded-full"></span>
                              <span>{fac}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Room types Block */}
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-3 flex items-center gap-1.5 font-devanagari">
                          <Home className="w-4 h-4 text-saffron-500" />
                          {lang === 'mr' ? 'उपलब्ध खोल्यांचे प्रकार :' : lang === 'hi' ? 'उपलब्ध कमरों के प्रकार :' : 'Room Types Available:'}
                        </h4>
                        <ul className="space-y-2">
                          {selectedNiwas.rooms[lang].map((room, idx) => (
                            <li key={idx} className="text-xs text-gray-700 flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 font-devanagari">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                              <span>{room}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Contact & Seva info */}
                    <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-saffron-50/50 rounded-2xl border border-saffron-100">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">{lang === 'mr' ? 'व्यवस्थापक व संपर्क व्यक्ति' : lang === 'hi' ? 'प्रबंधक व संपर्क सूत्र' : 'Manager & Contact'}</span>
                        <span className="font-bold text-gray-800 text-sm font-devanagari mt-1 block">{selectedNiwas.contactPerson}</span>
                        <a href={`tel:${selectedNiwas.phone}`} className="text-saffron-600 font-mono text-xs font-bold mt-1 inline-flex items-center gap-1 hover:underline">
                          <Phone className="w-3.5 h-3.5" />
                          {selectedNiwas.phone}
                        </a>
                      </div>

                      <div className="p-4 bg-saffron-50/50 rounded-2xl border border-saffron-100">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">{lang === 'mr' ? 'सेवा सहकार्य रक्कम (प्रति दिवस)' : lang === 'hi' ? 'सहयोग सेवा शुल्क (प्रति दिन)' : 'Maintenance Seva Charge (Per Day)'}</span>
                        <span className="font-bold text-saffron-700 text-sm font-devanagari mt-1 block">{selectedNiwas.sevaCharge[lang]}</span>
                        <span className="text-[10px] text-gray-500 block mt-1">{lang === 'mr' ? '* संकलित निधी भक्त निवासाच्या देखभालीसाठी वापरला जातो.' : lang === 'hi' ? '* एकत्रित राशि भक्त निवास के रखरखाव हेतु उपयोगी है।' : '* Amount is strictly used for guest house maintenance.'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Booking Form */}
              <div className="space-y-6">
                <div className="bg-white border-2 border-saffron-100 rounded-3xl p-6 shadow-sm relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-saffron-100 rounded-full opacity-30"></div>
                  <h4 className="text-lg font-black text-saffron-700 flex items-center gap-1.5 mb-1 font-devanagari">
                    <Calendar className="w-5 h-5 text-saffron-500" />
                    {lang === 'mr' ? 'निवास बुकिंग चौकशी' : lang === 'hi' ? 'निवास स्थान बुकिंग पूछताछ' : 'Stay Inquiry Request'}
                  </h4>
                  <p className="text-xs text-gray-500 mb-4">
                    {lang === 'mr' ? 'भक्त निवासात खोली आरक्षित करण्यासाठी फॉर्म भरा. त्वरित प्रतिसाद दिला जाईल.' : lang === 'hi' ? 'भक्त निवास में कमरा आरक्षित करने हेतु विवरण दर्ज करें।' : 'Fill details to submit room reservation inquiry to Ashram.'}
                  </p>

                  {bookingSuccess ? (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-5 rounded-2xl text-center space-y-3 animate-fade-in">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                      <h4 className="font-bold text-base font-devanagari">{lang === 'mr' ? 'चौकशी यशस्वीरित्या पाठवली!' : lang === 'hi' ? 'पूछताछ सफलतापूर्वक प्रेषित!' : 'Inquiry Submitted!'}</h4>
                      <div className="p-3 bg-white rounded-xl border border-green-100 text-xs text-left space-y-1 font-mono">
                        <p className="text-gray-500"><span className="font-sans font-semibold text-gray-700">{lang === 'mr' ? 'संदर्भ क्र :' : lang === 'hi' ? 'संदर्भ संख्या :' : 'Ref No:'}</span> {bookingRef}</p>
                        <p className="text-gray-500"><span className="font-sans font-semibold text-gray-700">{lang === 'mr' ? 'भक्त निवास :' : lang === 'hi' ? 'भक्त निवास :' : 'Place:'}</span> {selectedNiwas.name}</p>
                      </div>
                      <p className="text-[11px] text-gray-500 font-devanagari">
                        {lang === 'mr' 
                          ? '* व्यवस्थापक लवकरच आपल्या मोबाईवर संपर्क साधतील. कृपया संदर्भ क्रमांक जतन करून ठेवा.' 
                          : lang === 'hi' 
                          ? '* प्रबंधक जल्द ही आपसे संपर्क करेंगे। कृपया संदर्भ संख्या सुरक्षित रखें।' 
                          : '* Manager will contact you shortly on mobile. Keep this reference number.'}
                      </p>
                      <button
                        onClick={() => setBookingSuccess(false)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs py-2 rounded-xl transition-all mt-2"
                      >
                        {lang === 'mr' ? 'नवीन चौकशी करा' : lang === 'hi' ? 'नई पूछताछ करें' : 'Done'}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleBookSubmit} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="text-xs font-bold text-gray-600 block mb-1 font-devanagari">{lang === 'mr' ? 'यात्री / भक्ताचे नाव *' : lang === 'hi' ? 'यात्री / भक्त का नाम *' : 'Guest Full Name *'}</label>
                        <input
                          type="text"
                          required
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          placeholder={lang === 'mr' ? 'उदा. अमित कुमार' : lang === 'hi' ? 'उदा. अमित कुमार' : 'e.g. Amit Kumar'}
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500"
                        />
                      </div>

                      {/* Mobile */}
                      <div>
                        <label className="text-xs font-bold text-gray-600 block mb-1 font-devanagari">{lang === 'mr' ? 'मोबाईल नंबर *' : lang === 'hi' ? 'मोबाइल नंबर *' : 'Mobile Number *'}</label>
                        <input
                          type="tel"
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="9876543210"
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500"
                        />
                      </div>

                      {/* Check In / Out Dates */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-bold text-gray-600 block mb-1 font-devanagari">{lang === 'mr' ? 'आगमनाची तारीख *' : lang === 'hi' ? 'आगमन तिथि *' : 'Check-In *'}</label>
                          <input
                            type="date"
                            required
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-gray-600 block mb-1 font-devanagari">{lang === 'mr' ? 'प्रस्थान तारीख *' : lang === 'hi' ? 'प्रस्थान तिथि *' : 'Check-Out *'}</label>
                          <input
                            type="date"
                            required
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500"
                          />
                        </div>
                      </div>

                      {/* Guest Count & Room Type */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-bold text-gray-600 block mb-1 font-devanagari">{lang === 'mr' ? 'एकूण व्यक्ती *' : lang === 'hi' ? 'कुल व्यक्ति *' : 'Guests Count *'}</label>
                          <select
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                            className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                              <option key={n} value={n}>{n} {lang === 'mr' ? 'व्यक्ती' : lang === 'hi' ? 'व्यक्ति' : 'Persons'}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-bold text-gray-600 block mb-1 font-devanagari">{lang === 'mr' ? 'खोलीचा प्रकार *' : lang === 'hi' ? 'कमरे का प्रकार *' : 'Room Type *'}</label>
                          <select
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                            className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
                          >
                            <option value="">{lang === 'mr' ? 'निवडा...' : lang === 'hi' ? 'चुनें...' : 'Select Room...'}</option>
                            {selectedNiwas.rooms[lang].map((room, idx) => (
                              <option key={idx} value={room}>{room}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        className="w-full bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-sm py-3 rounded-2xl transition-all shadow-md flex items-center justify-center gap-1.5 font-devanagari mt-2 cursor-pointer"
                      >
                        <CheckCircle className="w-4 h-4" />
                        {lang === 'mr' ? 'चौकशी अर्ज सबमिट करा' : lang === 'hi' ? 'बुकिंग हेतु आवेदन सबमिट करें' : 'Submit Stay Inquiry'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* My Bookings List Tab view */
        <div className="p-6">
          <h3 className="font-bold text-gray-800 text-lg mb-4 font-devanagari border-b border-gray-100 pb-2">
            {lang === 'mr' ? 'माझ्या निवास चौकशी नोंदी (My Bookings)' : lang === 'hi' ? 'मेरी बुकिंग एवं निवास पूछताछ' : 'My Stay Inquiries & Reservations'}
          </h3>

          {myBookings.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-gray-500">
                {lang === 'mr' ? 'तुम्ही अद्याप कोणतीही चौकशी किंवा बुकिंग केलेली नाही.' : lang === 'hi' ? 'आपने अभी तक कोई बुकिंग या पूछताछ नहीं की है।' : 'No reservation inquiries or bookings found.'}
              </p>
              <button
                onClick={() => setActiveSubTab('explore')}
                className="mt-3 bg-saffron-500 text-white hover:bg-saffron-600 font-bold text-xs px-4 py-2 rounded-xl transition-all font-devanagari"
              >
                {lang === 'mr' ? 'भक्त निवास शोधा' : lang === 'hi' ? 'भक्त निवास खोजें' : 'Search Directory'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {myBookings.map(b => (
                <div key={b.id} className="bg-white border border-saffron-100 rounded-2xl p-5 shadow-2xs flex flex-col md:flex-row justify-between md:items-center gap-4 hover:shadow-xs transition-all">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-saffron-100 text-saffron-700 px-2 py-0.5 rounded-lg font-mono font-bold">{b.id}</span>
                      <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-lg font-bold font-devanagari">✓ {lang === 'mr' ? 'पाठविले' : lang === 'hi' ? 'भेजा गया' : 'Submitted'}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-base font-devanagari">{b.niwasName}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1 pt-2 text-xs text-gray-500 font-devanagari">
                      <p><span className="font-semibold text-gray-700">{lang === 'mr' ? 'भक्त :' : lang === 'hi' ? 'यात्री :' : 'Guest:'}</span> {b.guestName}</p>
                      <p><span className="font-semibold text-gray-700">{lang === 'mr' ? 'मोबाईल :' : lang === 'hi' ? 'संपर्क :' : 'Mobile:'}</span> {b.mobile}</p>
                      <p><span className="font-semibold text-gray-700">{lang === 'mr' ? 'कालावधी :' : lang === 'hi' ? 'तारीख :' : 'Dates:'}</span> {b.checkIn} ते {b.checkOut}</p>
                      <p><span className="font-semibold text-gray-700">{lang === 'mr' ? 'व्यक्ती :' : lang === 'hi' ? 'कुल :' : 'Guests:'}</span> {b.guests} ({b.roomType})</p>
                    </div>
                  </div>

                  <div className="flex shrink-0">
                    <button
                      onClick={() => cancelBooking(b.id)}
                      className="text-xs font-bold text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-xl transition-all border border-transparent hover:border-red-100"
                    >
                      {lang === 'mr' ? 'नोंद रद्द करा' : lang === 'hi' ? 'रद्द करें' : 'Cancel Request'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
