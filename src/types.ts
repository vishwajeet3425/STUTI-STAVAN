/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Chapter {
  id: string;
  bookId: string;
  number: number;
  title: string;
  titleEn?: string;
  content: string; // Marathi/Hindi text of the leela or sutra
  explanation?: string; // Spiritual meaning/commentary
  audioUrl?: string; // Optional audio file link
}

export interface Book {
  id: string;
  title: string;
  titleEn: string;
  author: string;
  description: string;
  descriptionEn?: string;
  category: string;
  chaptersCount: number;
  coverImage?: string;
}

export interface Bhajan {
  id: string;
  title: string;
  language: string;
  lyrics: string;
  singer?: string;
  audioUrl?: string; // Demo audio
  videoUrl?: string; // YouTube embed link or video id
  category?: string;
}

export interface Pravachan {
  id: string;
  title: string;
  speaker: string;
  date: string;
  category: 'leela' | 'sutra' | 'achara' | 'general';
  duration: string;
  audioUrl?: string;
  videoUrl?: string; // YouTube ID or embed link
  thumbnailUrl?: string;
}

export interface Temple {
  id: string;
  name: string;
  nameEn: string;
  type: 'temple' | 'ashram' | 'sthan';
  location: string;
  description: string;
  history?: string;
  photoUrl: string;
  contact: string;
  darshanTimings: string;
  latitude: number;
  longitude: number;
  state?: string;
  district?: string;
  taluka?: string;
}

export interface EventKaryakram {
  id: string;
  title: string;
  date: string;
  type: 'utsav' | 'yatra' | 'sabha' | 'kirtan';
  location: string;
  description: string;
  contact?: string;
}

export interface Samachar {
  id: string;
  title: string;
  date: string;
  content: string;
  category: 'announcement' | 'update' | 'news';
  imageUrl?: string;
}

export interface CommunityMessage {
  id: string;
  userName: string;
  userRole: 'user' | 'admin' | 'vishwajeet shevlikar';
  message: string;
  timestamp: string;
  likes: number;
  replies?: Array<{
    id: string;
    userName: string;
    userRole: 'user' | 'admin' | 'vishwajeet shevlikar';
    message: string;
    timestamp: string;
  }>;
}

export interface AppNotification {
  id: string;
  title: string;
  body: string;
  date: string;
  category: 'granth' | 'bhajan' | 'event' | 'general';
}

export interface NiwasItem {
  id: string;
  name: string;
  nameEn: string;
  location: string;
  state: string; // "महाराष्ट्र" | "राजस्थान" | "गुजरात"
  district: string;
  taluka: string;
  village?: string; // Manually added village name
  facilities: { mr: string[]; hi: string[]; en: string[] };
  rooms: { mr: string[]; hi: string[]; en: string[] };
  contactPerson: string;
  phone: string;
  sevaCharge: { mr: string; hi: string; en: string };
  imageUrl: string;
  rating: number;
  bhikshuk?: number;
  tapasvini?: number;
  children?: number;
  totalMembers?: number;
}

export interface AnalyticsData {
  appOpens: number;
  mostReadBooks: Record<string, number>;
  mostPlayedBhajans: Record<string, number>;
  activeUsersToday: number;
}

export interface GranthReference {
  bookName: 'लीळाचरित्र' | 'सूत्रपाठ' | 'दृष्टांतपाठ' | 'स्थानपोथी' | 'इतर ग्रंथ' | string;
  chapter: string;
  pageNumber: string;
}

export interface SthanDarshanPlace {
  id: string;
  number: number;
  title: string;
  titleEn?: string;
  content: string; // Marathi/Hindi text describing history & mahatva
  explanation?: string; // Guidance on how to reach / travel
  latitude: number;
  longitude: number;
  photoUrl?: string;
  state?: string;
  district?: string;
  taluka?: string;
  village?: string;
  
  // Phase 3 fields
  spiritualImportance?: string;
  history?: string;
  leela?: string;
  specialInfo?: string;
  granthReferences?: string[];
  elevation?: string;
  images?: string[];
  videos?: string[];
  audioUrl?: string;
  
  // Phase 3 additional complete fields
  architecture?: string;
  festivals?: string;
  darshanTiming?: string;
  contactNumber?: string;
  website?: string;
  granthRefs?: GranthReference[];
}

export interface Place {
  id?: string;
  placeNameMr: string;
  placeNameEn: string;
  state: string;
  district: string;
  taluka: string;
  village: string;
  category: string;
  latitude: number;
  longitude: number;
  history: string;
  leela: string;
  specialInfo: string;
  status: string;
  photoUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

