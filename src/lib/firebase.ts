/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "central-bonus-njkjx",
  appId: "1:297797262213:web:96f79b4cca5f811d9682ec",
  apiKey: "AIzaSyBgAzAC4yb60-LWH-AgbRRwAisV6dAfdIE",
  authDomain: "central-bonus-njkjx.firebaseapp.com",
  storageBucket: "central-bonus-njkjx.firebasestorage.app",
  messagingSenderId: "297797262213"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore with custom databaseId
export const db = getFirestore(app, "ai-studio-mahanubhavvishwa-1b42ed01-f742-41d4-b5c1-3834de4c3685");
