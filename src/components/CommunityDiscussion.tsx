/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { CommunityMessage } from '../types';
import { MessageSquare, Send, Sparkles, Heart, ShieldAlert, ShieldCheck, User, Reply, AlertCircle, RefreshCw } from 'lucide-react';
import { translations } from '../translations';

interface CommunityDiscussionProps {
  messages: CommunityMessage[];
  onSendMessage: (messageText: string, userName: string, userRole: 'user' | 'vishwajeet shevlikar') => void;
  onSendReply: (msgId: string, replyText: string, userName: string, userRole: 'user' | 'vishwajeet shevlikar') => void;
  onLikeMessage: (msgId: string) => void;
  lang?: 'hi' | 'mr' | 'en';
}

export default function CommunityDiscussion({
  messages,
  onSendMessage,
  onSendReply,
  onLikeMessage,
  lang = 'mr'
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
      text: lang === 'mr' 
        ? 'दंडवत प्रणाम! मी सर्वज्ञ श्री चक्रधर स्वामींच्या उपदेशांवर, सूत्रपाठावर आणि लीलाचरित्राच्या सखोल ज्ञानावर आधारित आध्यात्मिक कृत्रिम बुद्धिमत्ता (AI) सहाय्यक आहे.\n\nतुम्ही मला धर्मग्रंथ, लीलांचे रहस्य, दृष्टांतांचे अर्थ किंवा जीवन दर्शनाशी संबंधित कोणताही आध्यात्मिक प्रश्न विचारू शकता. स्वामींच्या वचनांच्या प्रकाशात मी तुम्हाला मार्गदर्शन करण्याचा विनम्र प्रयत्न करेन.'
        : lang === 'hi'
        ? 'दंडवत प्रणाम! मैं सर्वज्ञ श्री चक्रधर स्वामी जी के उपदेशों, सूत्रपाठ तथा लीलाचरित्र के गहन ज्ञान पर आधारित आध्यात्मिक कृत्रिम मेधा (AI) सहायक हूँ।\n\nआप मुझसे धर्मग्रंथों के श्लोक, लीलाओं के रहस्य, दृष्टांतों के अर्थ अथवा जीवन दर्शन से जुड़े कोई भी आध्यात्मिक प्रश्न पूछ सकते हैं। स्वामी जी के वचनों की रोशनी में मैं आपका मार्गदर्शन करने का विनम्र प्रयास करूँगा।'
        : 'Dandavat Pranam! I am a spiritual Artificial Intelligence (AI) assistant based on the divine teachings of Sarvanya Shri Chakradhar Swami, Sutrapath, and Lilacharitra.\n\nYou can ask me any spiritual questions regarding holy scriptures, the mysteries of Lilas, meanings of Drishtants, or life philosophy. In the light of Swami’s words, I will humbly endeavor to guide you.'
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
          text: lang === 'mr' 
            ? 'दंडवत प्रणाम! क्षमस्व, सध्या आपल्या आध्यात्मिक प्रश्नाचे उत्तर मिळवण्यात तांत्रिक अडचण येत आहे. कृपया काही वेळानंतर पुन्हा प्रयत्न करा.'
            : lang === 'hi'
            ? 'दंडवत प्रणाम! क्षमा करें, अभी आपके आध्यात्मिक प्रश्न का उत्तर प्राप्त करने में तकनीकी बाधा आ रही है। कृपया कुछ क्षणों के पश्चात पुनः प्रयास करें।'
            : 'Dandavat Pranam! Apologies, we are facing a technical issue retrieving the answer to your spiritual question right now. Please try again in a moment.'
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
            {lang === 'mr' ? 'व्यवस्थापक' : lang === 'hi' ? 'व्यवस्थापक' : 'Administrator'}
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
            {lang === 'mr' ? 'साधक' : lang === 'hi' ? 'साधक' : 'Devotee'}
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
            {translations.communityHeader[lang]}
          </h2>
          <p className="text-sm text-gray-600 mt-1 font-sans">
            {translations.communitySub[lang]}
          </p>
        </div>
      </div>

      {activeTab === 'forum' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Main Forum Thread */}
          <div className="lg:col-span-2 p-6 border-b lg:border-b-0 lg:border-r border-saffron-100 max-h-[520px] overflow-y-auto custom-scrollbar space-y-5">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {lang === 'mr' ? 'सामुदायिक चर्चा संदेश' : lang === 'hi' ? 'सामुदायिक चर्चा संदेश' : 'Community Discussions'}
            </h3>

            {messages.length === 0 ? (
              <p className="text-xs text-gray-400 py-6 text-center">
                {lang === 'mr' ? 'अद्याप कोणतेही संदेश नाहीत. पहिला संदेश पाठवा!' : lang === 'hi' ? 'अभी कोई संदेश नहीं है। पहला संदेश भेजें!' : 'No messages yet. Send the first message!'}
              </p>
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
                          placeholder={lang === 'mr' ? 'तुमची प्रतिक्रिया लिहा...' : lang === 'hi' ? 'अपनी प्रतिक्रिया यहाँ लिखें...' : 'Write your reply...'}
                          className="flex-1 px-3 py-1 text-xs border border-saffron-200 rounded focus:outline-none focus:ring-1 focus:ring-saffron-500 bg-white"
                          value={replyMessage}
                          onChange={(e) => setReplyMessage(e.target.value)}
                        />
                        <button type="submit" className="p-1 px-2.5 bg-saffron-500 text-white rounded text-xs hover:bg-saffron-600 font-semibold">
                          {lang === 'mr' ? 'पाठवा' : lang === 'hi' ? 'भेजें' : 'Send'}
                        </button>
                        <button type="button" onClick={() => setReplyTarget(null)} className="text-[10px] text-gray-400 hover:text-gray-600">
                          {lang === 'mr' ? 'रद्द' : lang === 'hi' ? 'निरस्त' : 'Cancel'}
                        </button>
                      </form>
                    ) : (
                      <button
                        onClick={() => { setReplyTarget(msg.id); setReplyMessage(''); }}
                        className="flex items-center gap-1 text-[10px] font-bold text-saffron-600 hover:text-saffron-700"
                      >
                        <Reply className="w-3 h-3" />
                        {lang === 'mr' ? 'प्रतिक्रिया द्या (Reply)' : lang === 'hi' ? 'प्रतिक्रिया दें (Reply)' : 'Reply'}
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
              <h4 className="text-sm font-bold text-gray-800 font-devanagari border-b border-gray-100 pb-1.5">
                {lang === 'mr' ? 'विचार सामायिक करा / चर्चा करा' : lang === 'hi' ? 'साझा करें / चर्चा करें' : 'Post to Forum'}
              </h4>

              {/* Set name */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  {lang === 'mr' ? 'तुमचे नाव (Your Name)' : lang === 'hi' ? 'आपका नाम (Your Name)' : 'Your Name'}
                </label>
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
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  {lang === 'mr' ? 'तुमची भूमिका (Your Role)' : lang === 'hi' ? 'आपकी भूमिका (Your Role)' : 'Your Role'}
                </label>
                <select
                  className="w-full px-3 py-1.5 text-xs border border-saffron-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-saffron-500 bg-white font-sans"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value as 'user' | 'vishwajeet shevlikar')}
                >
                  <option value="user">{lang === 'mr' ? 'साधक (Devotee)' : lang === 'hi' ? 'साधक (Devotee)' : 'Devotee'}</option>
                  <option value="vishwajeet shevlikar">Vishwajeet Shevlikar</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  {lang === 'mr' ? 'संदेश (Message)' : lang === 'hi' ? 'संदेश (Message)' : 'Message'}
                </label>
                <textarea
                  className="w-full p-3 text-xs border border-saffron-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-saffron-500 bg-white h-24 font-sans resize-none"
                  placeholder={lang === 'mr' ? 'आपला आध्यात्मिक विचार किंवा शंका येथे लिहा...' : lang === 'hi' ? 'अपना आध्यात्मिक विचार या जिज्ञासा यहाँ अंकित करें...' : 'Type your spiritual thought or question...'}
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
                {lang === 'mr' ? 'संदेश प्रकाशित करा' : lang === 'hi' ? 'संदेश प्रकाशित करें' : 'Post Message'}
              </button>
            </form>

            <div className="mt-8 p-3.5 bg-white border border-saffron-100 rounded-xl">
              <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-700 font-sans">
                <AlertCircle className="w-3.5 h-3.5 text-saffron-500" />
                {lang === 'mr' ? 'मंचाचे नियम:' : lang === 'hi' ? 'मंच के नियम:' : 'Forum Guidelines:'}
              </span>
              <p className="text-[10px] text-gray-500 font-sans mt-1 leading-relaxed">
                {lang === 'mr' 
                  ? 'कृपया मंचावर केवळ धर्मग्रंथ, साधना आणि तीर्थक्षेत्रांशी संबंधित सात्विक विचारच शेअर करा.' 
                  : lang === 'hi' 
                  ? 'कृपया मंच पर केवल धर्मग्रंथों, साधना, और तीर्थ क्षेत्रों से जुड़े सात्विक विचार ही साझा करें।' 
                  : 'Please share only pure thoughts related to scriptures, spiritual practice, and holy places on this forum.'}
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
                  <span className="text-xs text-gray-500 font-sans">
                    {lang === 'mr' ? 'चक्रधर स्वामींच्या वचनांचे चिंतन सुरू आहे...' : lang === 'hi' ? 'चक्रधर स्वामी जी के वचनों का चिंतन चल रहा है...' : 'Contemplating on Swami’s divine words...'}
                  </span>
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
                placeholder={lang === 'mr' ? 'लीलाचरित्र किंवा सूत्रपाठाशी संबंधित कोणताही प्रश्न विचारा...' : lang === 'hi' ? 'श्रीचक्रधर स्वामी के लीलाचरित्र या सूत्रपाठ से जुड़ा कोई प्रश्न पूछें...' : 'Ask a question about Lilacharitra or Sutrapath...'}
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
                {lang === 'mr' ? 'विचारा' : lang === 'hi' ? 'पूछें' : 'Ask'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
