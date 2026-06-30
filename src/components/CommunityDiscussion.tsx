/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { CommunityMessage } from '../types';
import { MessageSquare, Send, Sparkles, Heart, ShieldAlert, ShieldCheck, User, Reply, AlertCircle, RefreshCw } from 'lucide-react';

interface CommunityDiscussionProps {
  messages: CommunityMessage[];
  onSendMessage: (messageText: string, userName: string, userRole: 'user' | 'vishwajeet shevlikar') => void;
  onSendReply: (msgId: string, replyText: string, userName: string, userRole: 'user' | 'vishwajeet shevlikar') => void;
  onLikeMessage: (msgId: string) => void;
}

export default function CommunityDiscussion({
  messages,
  onSendMessage,
  onSendReply,
  onLikeMessage
}: CommunityDiscussionProps) {
  const [activeTab, setActiveTab] = useState<'forum' | 'ai'>('forum');

  // Forum States
  const [forumMessage, setForumMessage] = useState('');
  const [userName, setUserName] = useState('vishwajeet');
  const [userRole, setUserRole] = useState<'user' | 'vishwajeet shevlikar'>('user');
  const [replyTarget, setReplyTarget] = useState<string | null>(null);
  const [replyMessage, setReplyMessage] = useState('');

  // AI Chat States
  const [aiMessage, setAiMessage] = useState('');
  const [aiChat, setAiChat] = useState<Array<{ role: 'user' | 'model'; text: string }>>([
    {
      role: 'model',
      text: 'दंडवत प्रणाम! मैं सर्वज्ञ श्री चक्रधर स्वामी जी के उपदेशों, सूत्रपाठ तथा लीलाचरित्र के गहन ज्ञान पर आधारित आध्यात्मिक कृत्रिम मेधा (AI) सहायक हूँ।\n\nआप मुझसे धर्मग्रंथों के श्लोक, लीलाओं के रहस्य, दृष्टांतों के अर्थ अथवा जीवन दर्शन से जुड़े कोई भी आध्यात्मिक प्रश्न पूछ सकते हैं। स्वामी जी के वचनों की रोशनी में मैं आपका मार्गदर्शन करने का विनम्र प्रयास करूँगा।'
    }
  ]);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const aiEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeTab === 'ai') {
      aiEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [aiChat, activeTab]);

  // Forum Submit
  const handleForumSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forumMessage.trim()) return;
    onSendMessage(forumMessage, userName, userRole);
    setForumMessage('');
  };

  // Reply Submit
  const handleReplySubmit = (msgId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!replyMessage.trim()) return;
    onSendReply(msgId, replyMessage, userName, userRole);
    setReplyMessage('');
    setReplyTarget(null);
  };

  // AI Chat Submit
  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiMessage.trim() || isAiLoading) return;

    const userText = aiMessage;
    setAiMessage('');
    setAiChat(prev => [...prev, { role: 'user', text: userText }]);
    setIsAiLoading(true);

    try {
      const res = await fetch('/api/spiritual-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: userText,
          chatHistory: aiChat
        })
      });

      const data = await res.json();
      setAiChat(prev => [...prev, { role: 'model', text: data.reply }]);
    } catch (err) {
      console.error(err);
      setAiChat(prev => [
        ...prev,
        {
          role: 'model',
          text: 'दंडवत प्रणाम! क्षमा करें, अभी आपके आध्यात्मिक प्रश्न का उत्तर प्राप्त करने में तकनीकी बाधा आ रही है। कृपया कुछ क्षणों के पश्चात पुनः प्रयास करें।'
        }
      ]);
    } finally {
      setIsAiLoading(false);
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return (
          <span className="flex items-center gap-0.5 text-[9px] bg-red-100 text-red-700 border border-red-200 px-1.5 py-0.5 rounded font-bold font-sans">
            <ShieldAlert className="w-3 h-3" />
            व्यवस्थापक
          </span>
        );
      case 'vishwajeet shevlikar':
        return (
          <span className="flex items-center gap-0.5 text-[9px] bg-orange-100 text-orange-700 border border-orange-200 px-1.5 py-0.5 rounded font-bold font-sans">
            <ShieldCheck className="w-3 h-3" />
            Vishwajeet Shevlikar
          </span>
        );
      default:
        return (
          <span className="text-[9px] bg-gray-100 text-gray-600 border border-gray-200 px-1.5 py-0.5 rounded font-medium font-sans">
            साधक
          </span>
        );
    }
  };

  return (
    <div id="community-root" className="bg-white rounded-2xl shadow-md border border-saffron-100 overflow-hidden min-h-[500px]">
      {/* Header */}
      <div className="bg-saffron-50 p-6 border-b border-saffron-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-saffron-700 font-devanagari flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-saffron-500" />
            महानुभाव समुदाय (Community & AI)
          </h2>
          <p className="text-sm text-gray-600 mt-1 font-sans">
            साधकों और शास्त्रियों के साथ वैचारिक चर्चा, आध्यात्मिक मार्गदर्शन, और श्रीचक्रधर AI उपदेशक।
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-1.5 bg-saffron-100/50 p-1 rounded-lg border border-saffron-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('forum')}
            className={`px-3.5 py-1 text-xs font-semibold rounded-md transition-all font-sans flex items-center gap-1 ${
              activeTab === 'forum' ? 'bg-saffron-500 text-white shadow-sm' : 'text-gray-600 hover:text-saffron-600'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            चर्चा मंच (Forum)
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-3.5 py-1 text-xs font-semibold rounded-md transition-all font-sans flex items-center gap-1 ${
              activeTab === 'ai' ? 'bg-saffron-500 text-white shadow-sm' : 'text-gray-600 hover:text-saffron-600'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            श्रीचक्रधर AI (Spiritual AI)
          </button>
        </div>
      </div>

      {activeTab === 'forum' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Main Forum Thread */}
          <div className="lg:col-span-2 p-6 border-b lg:border-b-0 lg:border-r border-saffron-100 max-h-[520px] overflow-y-auto custom-scrollbar space-y-5">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">सामुदायिक चर्चा संदेश</h3>

            {messages.length === 0 ? (
              <p className="text-xs text-gray-400 py-6 text-center">अभी कोई संदेश नहीं है। पहला संदेश भेजें!</p>
            ) : (
              messages.map(msg => (
                <div key={msg.id} className="bg-white border border-gray-100 hover:border-saffron-100 p-4 rounded-xl transition-all shadow-2xs">
                  {/* User row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center font-bold text-xs uppercase">
                        {msg.userName.slice(0, 2)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-gray-800 text-xs md:text-sm font-devanagari">{msg.userName}</span>
                          {getRoleBadge(msg.userRole)}
                        </div>
                        <span className="text-[10px] text-gray-400 font-mono">{msg.timestamp}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onLikeMessage(msg.id)}
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-red-500 transition-all"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>{msg.likes}</span>
                    </button>
                  </div>

                  {/* Body */}
                  <p className="text-xs md:text-sm text-gray-700 font-sans mt-2.5 leading-relaxed bg-saffron-50/10 p-2 rounded">
                    {msg.message}
                  </p>

                  {/* Replies sub-thread */}
                  {msg.replies && msg.replies.length > 0 && (
                    <div className="mt-3.5 pl-4 border-l-2 border-saffron-200 space-y-2.5">
                      {msg.replies.map(rep => (
                        <div key={rep.id} className="bg-saffron-50/30 p-2.5 rounded-lg border border-saffron-100/40">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-gray-800 text-[11px] font-devanagari">{rep.userName}</span>
                            {getRoleBadge(rep.userRole)}
                            <span className="text-[9px] text-gray-400 font-mono ml-auto">{rep.timestamp}</span>
                          </div>
                          <p className="text-xs text-gray-600 mt-1 font-sans">{rep.message}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Reply Input Trigger */}
                  <div className="mt-3 flex items-center gap-2">
                    {replyTarget === msg.id ? (
                      <form onSubmit={(e) => handleReplySubmit(msg.id, e)} className="w-full flex gap-1.5 items-center">
                        <input
                          type="text"
                          placeholder="अपनी प्रतिक्रिया यहाँ लिखें..."
                          className="flex-1 px-3 py-1 text-xs border border-saffron-200 rounded focus:outline-none focus:ring-1 focus:ring-saffron-500 bg-white"
                          value={replyMessage}
                          onChange={(e) => setReplyMessage(e.target.value)}
                        />
                        <button type="submit" className="p-1 px-2.5 bg-saffron-500 text-white rounded text-xs hover:bg-saffron-600 font-semibold">
                          भेजें
                        </button>
                        <button type="button" onClick={() => setReplyTarget(null)} className="text-[10px] text-gray-400 hover:text-gray-600">
                          निरस्त
                        </button>
                      </form>
                    ) : (
                      <button
                        onClick={() => { setReplyTarget(msg.id); setReplyMessage(''); }}
                        className="flex items-center gap-1 text-[10px] font-bold text-saffron-600 hover:text-saffron-700"
                      >
                        <Reply className="w-3 h-3" />
                        प्रतिक्रिया दें (Reply)
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Form to Post */}
          <div className="p-6 bg-saffron-50/25 flex flex-col justify-between">
            <form onSubmit={handleForumSubmit} className="space-y-4">
              <h4 className="text-sm font-bold text-gray-800 font-devanagari border-b border-gray-100 pb-1.5">साझा करें / चर्चा करें</h4>

              {/* Set name */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">आपका नाम (Your Name)</label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    className="w-full pl-9 pr-3 py-1.5 text-xs border border-saffron-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-saffron-500 bg-white font-sans"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Set Role */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">आपकी भूमिका (Your Role)</label>
                <select
                  className="w-full px-3 py-1.5 text-xs border border-saffron-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-saffron-500 bg-white font-sans"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value as 'user' | 'vishwajeet shevlikar')}
                >
                  <option value="user">साधक (Devotee)</option>
                  <option value="vishwajeet shevlikar">Vishwajeet Shevlikar</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">संदेश (Message)</label>
                <textarea
                  className="w-full p-3 text-xs border border-saffron-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-saffron-500 bg-white h-24 font-sans resize-none"
                  placeholder="अपना आध्यात्मिक विचार या जिज्ञासा यहाँ अंकित करें..."
                  value={forumMessage}
                  onChange={(e) => setForumMessage(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-saffron-500 text-white rounded-lg hover:bg-saffron-600 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs border border-saffron-600"
              >
                <Send className="w-3.5 h-3.5" />
                संदेश प्रकाशित करें
              </button>
            </form>

            <div className="mt-8 p-3.5 bg-white border border-saffron-100 rounded-xl">
              <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-700 font-sans">
                <AlertCircle className="w-3.5 h-3.5 text-saffron-500" />
                मंच के नियम:
              </span>
              <p className="text-[10px] text-gray-500 font-sans mt-1 leading-relaxed">
                कृपया मंच पर केवल धर्मग्रंथों, साधना, और तीर्थ क्षेत्रों से जुड़े सात्विक विचार ही साझा करें।
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* AI CHAKRADHAR CHAT PANEL */
        <div className="flex flex-col h-[520px] bg-saffron-50/10">
          {/* Chat Messages Log */}
          <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-4 max-h-[440px]">
            {aiChat.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs flex-shrink-0 shadow-xs ${
                  msg.role === 'user' ? 'bg-saffron-500 text-white' : 'bg-saffron-100 text-saffron-600 font-bold'
                }`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : 'श्री'}
                </div>

                {/* Bubble */}
                <div className={`p-4 rounded-2xl shadow-2xs border ${
                  msg.role === 'user'
                    ? 'bg-saffron-500 text-white border-saffron-600 rounded-tr-none'
                    : 'bg-white text-gray-800 border-saffron-100 rounded-tl-none font-sans'
                }`}>
                  <p className="text-xs md:text-sm leading-relaxed whitespace-pre-line font-medium">
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}

            {isAiLoading && (
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center text-xs flex-shrink-0 font-bold">
                  श्री
                </div>
                <div className="bg-white border border-saffron-100 p-4 rounded-2xl rounded-tl-none shadow-2xs flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-saffron-500 animate-spin" />
                  <span className="text-xs text-gray-500 font-sans">चक्रधर स्वामी जी के वचनों का चिंतन चल रहा है...</span>
                </div>
              </div>
            )}
            <div ref={aiEndRef} />
          </div>

          {/* Chat Input form */}
          <div className="p-4 border-t border-saffron-100 bg-white">
            <form onSubmit={handleAiSubmit} className="flex gap-2">
              <input
                type="text"
                placeholder="श्रीचक्रधर स्वामी के लीलाचरित्र या सूत्रपाठ से जुड़ा कोई प्रश्न पूछें..."
                className="flex-1 px-4 py-2.5 text-sm border border-saffron-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white font-sans"
                value={aiMessage}
                onChange={(e) => setAiMessage(e.target.value)}
                disabled={isAiLoading}
              />
              <button
                type="submit"
                disabled={isAiLoading || !aiMessage.trim()}
                className="px-5 py-2.5 bg-saffron-500 hover:bg-saffron-600 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-1 shadow-xs disabled:opacity-50 border border-saffron-600"
              >
                <Sparkles className="w-4 h-4" />
                पूछें
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
