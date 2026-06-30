/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Download, QrCode, CreditCard, ShieldCheck } from 'lucide-react';

export default function DonationGateway() {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [amount, setAmount] = useState('500');
  const [purpose, setPurpose] = useState('temple_dev');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');

  const handleCustomAmount = (val: string) => {
    setAmount(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !amount) return;
    setReceiptNumber('MV-' + Math.floor(100000 + Math.random() * 900000));
    setIsSubmitted(true);
  };

  // Generate UPI payment URL
  const defaultUpi = "vikasp.5986@okaxis";
  const upiUrl = `upi://pay?pa=${defaultUpi}&pn=Mahanubhav%20Vishwa&am=${amount}&cu=INR&tn=Spiritual%20Contribution`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;

  return (
    <div id="donation-root" className="bg-white rounded-2xl shadow-md border border-saffron-100 overflow-hidden min-h-[500px]">
      {/* Header */}
      <div className="bg-saffron-50 p-6 border-b border-saffron-100 text-center">
        <h2 className="text-2xl font-bold text-saffron-700 font-devanagari inline-flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-saffron-500" />
          धर्मार्थ दान एवं सहयोग (Donation)
        </h2>
        <p className="text-sm text-gray-600 mt-1 font-sans max-w-xl mx-auto">
          महानुभाव पंथ के तीर्थ क्षेत्रों के जीर्णोद्धार, अन्नदान सेवा और ग्रंथों के डिजिटल प्रकाशन में अपना अमूल्य योगदान दें।
        </p>
      </div>

      {!isSubmitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Form Block */}
          <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-saffron-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-100 pb-2 font-sans">
                सहयोग विवरण अंकित करें
              </h3>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1 font-sans">सहयोगी का नाम (Full Name)</label>
                <input
                  type="text"
                  placeholder="अपना नाम अंकित करें..."
                  className="w-full px-3.5 py-2 text-sm border border-saffron-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1 font-sans">ईमेल (Email Address)</label>
                <input
                  type="email"
                  placeholder="अपना ईमेल दर्ज करें (वैकल्पिक)..."
                  className="w-full px-3.5 py-2 text-sm border border-saffron-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                />
              </div>

              {/* Purpose */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1 font-sans">सहयोग का उद्देश्य (Purpose)</label>
                <select
                  className="w-full px-3 py-2 text-sm border border-saffron-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                >
                  <option value="temple_dev">तीर्थक्षेत्र जीर्णोद्धार (Temple Development)</option>
                  <option value="annadan">नित्य अन्नदान सेवा (Daily Food Seva)</option>
                  <option value="granth_digital">ग्रंथ डिजिटल प्रकाशन (Scripture Digitalization)</option>
                  <option value="general">सामान्य धर्मार्थ सेवा (General Donation)</option>
                </select>
              </div>

              {/* Amount Quick Picker */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 font-sans">सहयोग राशि (Amount INR)</label>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {['100', '500', '1100', '5100'].map(val => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleCustomAmount(val)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all border font-mono ${
                        amount === val
                          ? 'bg-saffron-500 text-white border-saffron-500 shadow-xs'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-saffron-300'
                      }`}
                    >
                      ₹{val}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-3.5 top-2 text-gray-400 text-sm font-bold font-mono">₹</span>
                  <input
                    type="number"
                    placeholder="अन्य राशि भरें..."
                    className="w-full pl-7 pr-3 py-1.5 text-sm border border-saffron-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white font-mono"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-saffron-500 hover:bg-saffron-600 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-1.5 shadow-md border border-saffron-600"
              >
                सहयोग पूर्ण करें (Proceed to Contribute)
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* QR Code and Security Info Block */}
          <div className="p-6 md:p-8 bg-saffron-50/20 flex flex-col items-center justify-center text-center">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 font-sans flex items-center gap-1.5 justify-center">
              <QrCode className="w-4 h-4 text-saffron-500" />
              त्वरित भुगतान QR कोड (Scan & Pay)
            </h3>

            {/* Dynamic QR Code */}
            <div className="bg-white p-4 rounded-2xl shadow-md border border-saffron-100 flex flex-col items-center justify-center max-w-[240px] w-full">
              <img
                src={qrCodeUrl}
                alt="Donation UPI QR Code"
                className="w-44 h-44 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-[9px] font-bold text-gray-400 mt-2 font-mono uppercase">
                UPI ID: {defaultUpi}
              </span>
            </div>

            <p className="text-[11px] text-gray-500 mt-4 max-w-xs font-sans leading-relaxed">
              आप ऊपर दिए गए QR कोड को किसी भी पेमेंट ऐप (Google Pay, PhonePe, Paytm, BHIM) से स्कैन करके सहयोग राशि भेज सकते हैं।
            </p>

            <div className="mt-8 p-3.5 bg-white border border-saffron-100 rounded-xl max-w-xs flex items-start gap-3 text-left">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <h4 className="text-[11px] font-bold text-gray-700 font-sans">सुरक्षित और पारदर्शी</h4>
                <p className="text-[9px] text-gray-400 mt-0.5 font-sans leading-relaxed">
                  आपका सहयोग सीधे पंथ के आधिकारिक चैरिटेबल खातों में जमा होता है। दान पर १८२ए आयकर छूट नियमानुसार लागू है।
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* SUCCESS RECEIPT / CERTIFICATE */
        <div className="p-6 md:p-12 bg-saffron-50/10 flex flex-col items-center justify-center text-center">
          <div className="max-w-2xl w-full bg-white border border-saffron-200 rounded-3xl p-6 md:p-10 shadow-lg relative overflow-hidden">
            {/* Spiritual background mandala decoration style */}
            <div className="absolute top-0 right-0 p-8 text-saffron-100/30 font-display text-8xl select-none leading-none pointer-events-none">
              ॐ
            </div>

            <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
            <span className="text-[11px] bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">
              दान स्वीकृत (Receipt Generated)
            </span>

            <h3 className="text-2xl font-black text-saffron-700 font-devanagari mt-4">
              ॥ धर्मार्थ दान पावती पत्र ॥
            </h3>
            <p className="text-xs text-gray-400 font-mono mt-1">पावती क्र: {receiptNumber}</p>

            {/* Certificate Border Details */}
            <div className="my-6 border-2 border-dashed border-saffron-100 p-5 rounded-2xl bg-saffron-50/30 text-left space-y-3 font-sans">
              <p className="text-sm text-gray-700 font-devanagari leading-relaxed">
                यह प्रमाणित किया जाता है कि परम श्रद्धालु <span className="font-bold text-gray-900 font-sans">{donorName}</span> ने महानुभाव विश्व संगठन में धर्मार्थ कार्यों हेतु <span className="font-bold text-saffron-600 font-sans">₹{amount}</span> की सहयोग राशि सादर समर्पित की है।
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs pt-3 border-t border-saffron-100">
                <div>
                  <p className="font-bold text-gray-500">सहयोग का उद्देश्य:</p>
                  <p className="text-gray-700 font-devanagari mt-0.5">
                    {purpose === 'temple_dev' && 'तीर्थक्षेत्र जीर्णोद्धार'}
                    {purpose === 'annadan' && 'नित्य अन्नदान सेवा'}
                    {purpose === 'granth_digital' && 'ग्रंथ डिजिटल प्रकाशन'}
                    {purpose === 'general' && 'सामान्य धर्मार्थ सेवा'}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-500">भुगतान तिथि:</p>
                  <p className="text-gray-700 mt-0.5 font-mono">{new Date().toLocaleDateString('hi-IN')}</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 italic font-devanagari max-w-md mx-auto">
              "ईश्वर भक्ति और जनकल्याण की राह पर उठाया गया यह कदम आपके जीवन को परम संतोष से भर दे।"
            </p>

            {/* Receipt buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold text-xs transition-all font-sans"
              >
                नया योगदान करें
              </button>
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-saffron-500 hover:bg-saffron-600 text-white rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm border border-saffron-600 font-sans"
              >
                <Download className="w-4 h-4" />
                प्रमाणपत्र प्रिंट करें (Print Certificate)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
