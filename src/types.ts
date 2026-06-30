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
  category: 'sutra' | 'leela' | 'charitra' | 'other';
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

export interface AnalyticsData {
  appOpens: number;
  mostReadBooks: { [bookTitle: string]: number };
  mostPlayedBhajans: { [bhajanTitle: string]: number };
  activeUsersToday: number;
}
