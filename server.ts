/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Import initial data
import {
  initialBooks,
  initialChapters,
  initialBhajans,
  initialPravachans,
  initialTemples,
  initialEvents,
  initialNews,
  initialMessages
} from "./src/data";
import { Book, Chapter, Bhajan, Pravachan, Temple, EventKaryakram, Samachar, CommunityMessage, AppNotification, AnalyticsData } from "./src/types";

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory Database
let books: Book[] = [...initialBooks];
let chapters: Chapter[] = [...initialChapters];
let bhajans: Bhajan[] = [...initialBhajans];
let pravachans: Pravachan[] = [...initialPravachans];
let temples: Temple[] = [...initialTemples];
let events: EventKaryakram[] = [...initialEvents];
let news: Samachar[] = [...initialNews];
let messages: CommunityMessage[] = [...initialMessages];
let notifications: AppNotification[] = [
  {
    id: 'n_1',
    title: 'जय चक्रधर! नवीन ग्रंथ उपलब्ध',
    body: 'श्री दृष्टांतपाठ ग्रंथाचे वाचन आता सुलभ अध्यायवार वाचन आणि विवेचनासह उपलब्ध आहे.',
    date: '२०२६-०६-२९ १०:०० AM',
    category: 'granth'
  },
  {
    id: 'n_2',
    title: 'आगामी श्रीकृष्ण जयंती उत्सव',
    body: 'ऋद्धपूर धाम येथे होणाऱ्या पावन जन्मोत्सव कार्यक्रमाचे वेळापत्रक प्रसिद्ध करण्यात आले आहे.',
    date: '२०२६-०६-२८ ०५:०० PM',
    category: 'event'
  }
];

let analytics: AnalyticsData = {
  appOpens: 342,
  mostReadBooks: {
    'श्री सूत्रपाठ (Shree Sutrapath)': 186,
    'श्री लीलाचरित्र (Shree Leela Charitra)': 112,
    'श्री दृष्टांतपाठ (Shree Drishtantapath)': 44
  },
  mostPlayedBhajans: {
    'चक्रधरा दया करा देवा (Chakradhara Daya Kara Deva)': 95,
    'श्रीकृष्ण गोपाळ हरी (Shree Krishna Gopal Hari)': 67,
    'पंचकृष्ण नामस्मरण (Panchakrishna Namasmaran)': 32
  },
  activeUsersToday: 48
};

// Lazy initialization of Gemini AI
let aiClient: GoogleGenAI | null = null;
function getAiClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({ apiKey: key });
    }
  }
  return aiClient;
}

// -------------------------------------------------------------
// API Endpoints
// -------------------------------------------------------------

// Books API
app.get("/api/books", (req, res) => {
  res.json(books);
});

app.post("/api/books", (req, res) => {
  const newBook: Book = {
    id: 'book_' + Date.now(),
    title: req.body.title || 'शीर्षक विरहित',
    titleEn: req.body.titleEn || 'Untitled',
    author: req.body.author || 'अज्ञात',
    description: req.body.description || 'कोई वर्णन उपलब्ध नहीं है।',
    descriptionEn: req.body.descriptionEn || '',
    category: req.body.category || 'other',
    chaptersCount: 0,
    coverImage: req.body.coverImage || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop'
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Chapters API
app.get("/api/chapters", (req, res) => {
  res.json(chapters);
});

app.post("/api/chapters", (req, res) => {
  const { bookId, number, title, titleEn, content, explanation } = req.body;
  if (!bookId || !title || !content) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newChapter: Chapter = {
    id: 'chap_' + Date.now(),
    bookId,
    number: Number(number) || (chapters.filter(c => c.bookId === bookId).length + 1),
    title,
    titleEn,
    content,
    explanation
  };

  chapters.push(newChapter);

  // Update book chapter count
  const book = books.find(b => b.id === bookId);
  if (book) {
    book.chaptersCount = (book.chaptersCount || 0) + 1;
  }

  res.status(201).json(newChapter);
});

// Bhajans API
app.get("/api/bhajans", (req, res) => {
  res.json(bhajans);
});

app.post("/api/bhajans", (req, res) => {
  const { title, language, lyrics, singer, audioUrl, videoUrl, category } = req.body;
  if (!title || !lyrics) {
    return res.status(400).json({ error: "Title and Lyrics are required" });
  }

  const newBhajan: Bhajan = {
    id: 'bh_' + Date.now(),
    title,
    language: language || 'हिंदी (Hindi)',
    lyrics,
    singer,
    audioUrl,
    videoUrl,
    category
  };

  bhajans.push(newBhajan);
  res.status(201).json(newBhajan);
});

// Pravachans API
app.get("/api/pravachans", (req, res) => {
  res.json(pravachans);
});

// Temples API
app.get("/api/temples", (req, res) => {
  res.json(temples);
});

app.post("/api/temples", (req, res) => {
  const { name, nameEn, type, location, description, history, photoUrl, contact, darshanTimings, latitude, longitude, state, district, taluka } = req.body;
  if (!name || !location || !description) {
    return res.status(400).json({ error: "Name, Location and Description are required" });
  }

  const newTemple: Temple = {
    id: 't_' + Date.now(),
    name,
    nameEn: nameEn || name,
    type: type || 'temple',
    location,
    description,
    history,
    photoUrl: photoUrl || 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=600&auto=format&fit=crop',
    contact: contact || '',
    darshanTimings: darshanTimings || '',
    latitude: Number(latitude) || 19.0,
    longitude: Number(longitude) || 75.0,
    state: state || 'महाराष्ट्र',
    district: district || '',
    taluka: taluka || ''
  };

  temples.push(newTemple);
  res.status(201).json(newTemple);
});

// Events API
app.get("/api/events", (req, res) => {
  res.json(events);
});

app.post("/api/events", (req, res) => {
  const { title, date, type, location, description, contact } = req.body;
  if (!title || !date || !location) {
    return res.status(400).json({ error: "Title, Date and Location are required" });
  }

  const newEvent: EventKaryakram = {
    id: 'ev_' + Date.now(),
    title,
    date,
    type: type || 'general',
    location,
    description,
    contact
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
});

// News API
app.get("/api/news", (req, res) => {
  res.json(news);
});

app.post("/api/news", (req, res) => {
  const { title, date, content, category, imageUrl } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and Content are required" });
  }

  const newNews: Samachar = {
    id: 'ns_' + Date.now(),
    title,
    date: date || new Date().toISOString().split('T')[0],
    content,
    category: category || 'news',
    imageUrl
  };

  news.push(newNews);
  res.status(201).json(newNews);
});

// Community Messages API
app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages", (req, res) => {
  const { userName, userRole, message } = req.body;
  if (!userName || !message) {
    return res.status(400).json({ error: "User name and message are required" });
  }

  const newMessage: CommunityMessage = {
    id: 'msg_' + Date.now(),
    userName,
    userRole: userRole || 'user',
    message,
    timestamp: 'आज, ' + new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }),
    likes: 0,
    replies: []
  };

  messages.unshift(newMessage); // Prepend to show latest first
  res.status(201).json(newMessage);
});

// Like a message
app.post("/api/messages/:id/like", (req, res) => {
  const msg = messages.find(m => m.id === req.params.id);
  if (msg) {
    msg.likes = (msg.likes || 0) + 1;
    return res.json(msg);
  }
  res.status(404).json({ error: "Message not found" });
});

// Reply to a message
app.post("/api/messages/:id/reply", (req, res) => {
  const { userName, userRole, message } = req.body;
  if (!userName || !message) {
    return res.status(400).json({ error: "Name and message are required" });
  }

  const msg = messages.find(m => m.id === req.params.id);
  if (msg) {
    if (!msg.replies) msg.replies = [];
    const newReply = {
      id: 'rep_' + Date.now(),
      userName,
      userRole: userRole || 'user',
      message,
      timestamp: 'आज, ' + new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' })
    };
    msg.replies.push(newReply);
    return res.json(msg);
  }
  res.status(404).json({ error: "Message not found" });
});

// Notifications API
app.get("/api/notifications", (req, res) => {
  res.json(notifications);
});

app.post("/api/notifications", (req, res) => {
  const { title, body, category } = req.body;
  if (!title || !body) {
    return res.status(400).json({ error: "Title and Body are required" });
  }

  const newNotif: AppNotification = {
    id: 'n_' + Date.now(),
    title,
    body,
    date: 'आज, ' + new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }),
    category: category || 'general'
  };

  notifications.unshift(newNotif);
  res.status(201).json(newNotif);
});

// Analytics API
app.get("/api/analytics", (req, res) => {
  res.json(analytics);
});

app.post("/api/analytics/open", (req, res) => {
  analytics.appOpens += 1;
  analytics.activeUsersToday = Math.floor(analytics.appOpens / 7) + 5;
  res.json(analytics);
});

app.post("/api/analytics/read", (req, res) => {
  const { bookTitle } = req.body;
  if (bookTitle) {
    analytics.mostReadBooks[bookTitle] = (analytics.mostReadBooks[bookTitle] || 0) + 1;
  }
  res.json(analytics);
});

app.post("/api/analytics/play", (req, res) => {
  const { bhajanTitle } = req.body;
  if (bhajanTitle) {
    analytics.mostPlayedBhajans[bhajanTitle] = (analytics.mostPlayedBhajans[bhajanTitle] || 0) + 1;
  }
  res.json(analytics);
});

// -------------------------------------------------------------
// Sri Chakradhar Swami Spiritual AI Chat (Gemini)
// -------------------------------------------------------------
app.post("/api/spiritual-ai", async (req, res) => {
  const { message, chatHistory } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const client = getAiClient();
  if (!client) {
    // Graceful fallback if API key is not configured or offline
    return res.json({
      reply: "दंडवत प्रणाम! मैं श्रीचक्रधर स्वामी जी के उपदेशों पर आधारित कृत्रिम मेधा (AI) सहायक हूँ। अभी मेरे सर्वर की चाबी (Gemini API Key) सेट नहीं की गई है, परंतु मैं आपको स्वामीजी का यह मुख्य वचन स्मरण दिलाना चाहूँगा:\n\n*\"परिग्रहा पासौनि निवृत्ति करावी। ईश्वर भक्तीवाचून गत्यंतर नाही।\"*\n\n(यदि आप एडमिन हैं, तो कृपया गूगल एआई स्टूडियो के Secrets पैनल में `GEMINI_API_KEY` दर्ज करें ताकि मैं पूर्णतः सक्रिय होकर आपके सभी आध्यात्मिक प्रश्नों का विस्तृत उत्तर दे सकूँ!)"
    });
  }

  try {
    const systemPrompt = `
You are 'श्रीचक्रधर AI' (Shree Chakradhar AI), a profound spiritual assistant representing the teachings, parables, and philosophy of Sarvanya Shree Chakradhar Swami and the Mahanubhav Sect (महानुभाव पंथ).
Your purpose is to answer spiritual questions, explain the parables (Drishtantas), explain Sutrapath (सूत्रपाठ) and Leela Charitra (लीलाचरित्र) to seekers in a very polite, humble, and deeply spiritual manner.

Tone & Guidelines:
1. Always start your response with "दंडवत प्रणाम!" (Dandavat Pranam) or "जय श्री चक्रधर!" (Jai Shree Chakradhar).
2. Answer primarily in elegant, easy-to-understand Hindi or Marathi, depending on the language of the prompt. You can provide translations if helpful.
3. Quote relevant aphorisms from Shree Sutrapath or stories from Leela Charitra or parables from Drishtantapath when appropriate.
4. Promote the key values of the Mahanubhav Sect: non-violence (अहिंसा), virakti (वैराग्य/विरक्ति), devotion to Panchakrishna (पंचकृष्ण भक्ति), simplicity, and compasssion for all living beings.
5. If you do not know the exact reference, respond humbly stating that as a digital representation of Swami's teachings, you try your best to guide, but one should also consult the respected Shastris (शास्त्री) and Mahants (महंत) of the sect.
6. Keep the formatting beautiful, using bullet points, bold key terms, and blockquotes for verses.
`;

    // Map chatHistory to Gemini API contents structure if present
    const formattedHistory = (chatHistory || []).map((h: any) => ({
      role: h.role === 'user' ? 'user' : 'model',
      parts: [{ text: h.text }]
    }));

    // Append the new message
    formattedHistory.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: formattedHistory,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
        maxOutputTokens: 1200,
      }
    });

    const replyText = response.text || "क्षमस्व! मैं अभी आपकी बात पूरी तरह समझ नहीं पाया। कृपया पुनः प्रयास करें।";
    res.json({ reply: replyText });

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: "AI Response Failed",
      reply: "दंडवत प्रणाम! क्षमा करें, तकनीकी कारणों से मैं अभी आपसे संपर्क नहीं कर पा रहा हूँ। कृपया कुछ क्षणों के पश्चात पुनः प्रयास करें।"
    });
  }
});

// -------------------------------------------------------------
// Serve static frontend files
// -------------------------------------------------------------
// -------------------------------------------------------------
// Serve static frontend files and listen
// -------------------------------------------------------------
(async () => {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
