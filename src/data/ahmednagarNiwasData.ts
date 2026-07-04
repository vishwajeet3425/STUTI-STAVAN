import { NiwasItem } from '../types';

interface RawAhmednagarNiwas {
  id: string;
  taluka: string;
  village: string;
  name: string;
  nameEn: string;
  contact: string;
  phone: string;
  b?: number;
  t?: number;
  c?: number;
  tot: number;
  loc?: string;
}

const AHMEDNAGAR_RAW_DATA: RawAhmednagarNiwas[] = [
  // १. ता. अहमदनगर (Ahmednagar Taluka)
  { id: 'niwas_ahmednagar_savedi_kapat', taluka: 'अहमदनगर', village: 'सावेडी', name: 'श्रीकृष्ण मंदिर, गंगा उद्यान जवळ, मिस्किन नगर, सावेडी', nameEn: 'Shree Krishna Mandir, Savedi', contact: 'प.पू. शकुंतलाबाई कपाटे', phone: '+91 97632 57441, +91 74997 74323', b: 1, t: 2, c: 0, tot: 3 },
  { id: 'niwas_ahmednagar_nagapur_bidkar', taluka: 'अहमदनगर', village: 'नागापूर', name: 'श्रीचक्रधर मंदिर, नागापूर', nameEn: 'Shree Chakradhar Mandir, Nagapur', contact: 'प.पू.म. श्रीवाल्हेराजबाबा बिडकर', phone: '+91 98502 03876, +91 75889 49555, +91 88308 82954', b: 11, t: 18, c: 8, tot: 37 },
  { id: 'niwas_ahmednagar_borude_vidvans', taluka: 'अहमदनगर', village: 'बोरूडे मळा', name: 'श्रीदत्त मंदिर, बोरूडे मळा', nameEn: 'Shree Datta Mandir, Borude Mala', contact: 'प.पू. त. मंगलताई विद्वांस', phone: '+91 70755 90233', b: 0, t: 1, c: 2, tot: 3 },
  { id: 'niwas_ahmednagar_arangaon_virat', taluka: 'अहमदनगर', village: 'अरणगांव', name: 'महानुभाव आश्रम, अरणगांव (श्रीजायराजबाबा विराट)', nameEn: 'Mahanubhav Ashram, Arangaon (Jayrajbaba Virat)', contact: 'प.पू. म. श्रीजायराजबाबा विराट', phone: '+91 94052 76107, +91 94052 76106', b: 3, t: 12, c: 3, tot: 18 },
  { id: 'niwas_ahmednagar_arangaon_santmali', taluka: 'अहमदनगर', village: 'अरणगांव', name: 'संतमळी, अरणगांव', nameEn: 'Santmali, Arangaon', contact: 'संतमंडळी', phone: '+91 94234 64005', b: 0, t: 1, c: 0, tot: 1 },
  { id: 'niwas_ahmednagar_vrde_punambai', taluka: 'अहमदनगर', village: 'व्ही.आर.डी.ई.', name: 'महानुभाव आश्रम, व्ही.आर.डी.ई. (आचार्या पूनमबाईजी)', nameEn: 'Mahanubhav Ashram, VRDE (Poonambaiji)', contact: 'प.पू. आचार्या पूनमबाईजी', phone: '+91 98817 73144, +91 98223 71252', b: 5, t: 107, c: 20, tot: 132 },
  { id: 'niwas_ahmednagar_bhingar_bidkar', taluka: 'अहमदनगर', village: 'भिंगार', name: 'भिंगार स्थान (श्रीसुदामराजदादा बिडकर)', nameEn: 'Bhingar Sthan (Sudamrajdada Bidkar)', contact: 'प.पू. श्रीसुदामराजदादा बिडकर', phone: '+91 97309 53767', b: 1, t: 0, c: 2, tot: 3 },
  { id: 'niwas_ahmednagar_shendi_fatebaba', taluka: 'अहमदनगर', village: 'शेंडी', name: 'महानुभाव आश्रम, जावळे वस्ती, शेंडी (श्रीफाटेबाबा)', nameEn: 'Mahanubhav Ashram, Shendi (Fatebaba)', contact: 'प.पू. म.श्रीफाटेबाबा', phone: '+91 94052 75177, +91 94052 75178, +91 99213 57447', b: 2, t: 4, c: 2, tot: 8 },
  { id: 'niwas_ahmednagar_shendi_gunjatkar', taluka: 'अहमदनगर', village: 'शेंडी', name: 'शेंडी स्थान (गुंजटकरबाबा)', nameEn: 'Shendi Sthan (Gunjatkarbaba)', contact: 'प.पू. गुंजटकरबाबा', phone: '+91 97628 02880, +91 98813 96277', b: 3, t: 3, c: 8, tot: 14 },
  { id: 'niwas_ahmednagar_malvi_rishiraj', taluka: 'अहमदनगर', village: 'माळवी पिंपळगाव', name: 'महानुभाव आश्रम, माळवी पिंपळगाव (ऋषिराजजी शास्त्री)', nameEn: 'Mahanubhav Ashram, Malvi Pimpalgaon', contact: 'प.पू.आ.श्रीऋषिराजजी शास्त्री (मामाजी) म.', phone: '+91 96894 97277', b: 3, t: 0, c: 0, tot: 3 },
  { id: 'niwas_ahmednagar_shingve_kolhekar', taluka: 'अहमदनगर', village: 'शिंगवे नाईक', name: 'महानुभाव आश्रम, शिंगवे नाईक (श्रीअमोलदादा कोल्हेकर)', nameEn: 'Mahanubhav Ashram, Shingve Naik', contact: 'प.पू. श्रीअमोलदादा कोल्हेकर', phone: '+91 86686 48414, +91 98815 34499, +91 94052 75777', b: 1, t: 4, c: 0, tot: 5 },
  { id: 'niwas_ahmednagar_madhpimpri_bidkar', taluka: 'अहमदनगर', village: 'मढपिंप्री', name: 'मढपिंप्री आश्रम (ऋषिराजदादा बिडकर)', nameEn: 'Madhpimpri Ashram (Rishirajdada Bidkar)', contact: 'प.पू. श्रीऋषिराजदादा बिडकर', phone: '+91 94033 78611', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_ahmednagar_madhpimpri_dharashiv', taluka: 'अहमदनगर', village: 'मढपिंप्री', name: 'मढपिंप्री आश्रम (मंगलताई धाराशिवकर)', nameEn: 'Madhpimpri Ashram (Mangaltai Dharashivkar)', contact: 'प.पू. त.मंगलताई धाराशिवकर', phone: '-', b: 0, t: 1, c: 1, tot: 2 },
  { id: 'niwas_ahmednagar_madhpimpri_virat1', taluka: 'अहमदनगर', village: 'मढपिंप्री', name: 'मढपिंप्री आश्रम (सुमनताई विराट)', nameEn: 'Madhpimpri Ashram (Sumantai Virat)', contact: 'प.पू.त. सुमनताई विराट', phone: '-', b: 0, t: 1, c: 1, tot: 2 },
  { id: 'niwas_ahmednagar_madhpimpri_virat2', taluka: 'अहमदनगर', village: 'मढपिंप्री', name: 'मढपिंप्री आश्रम (सुलोचनाताई विराट)', nameEn: 'Madhpimpri Ashram (Sulochana Virat)', contact: 'प.पू.त. सुलोचनाताई विराट', phone: '-', b: 0, t: 1, c: 0, tot: 1 },
  { id: 'niwas_ahmednagar_madhpimpri_shamdada', taluka: 'अहमदनगर', village: 'मढपिंप्री', name: 'मढपिंप्री आश्रम (श्रीशामदादा धाराशिवकर)', nameEn: 'Madhpimpri Ashram (Shamdada Dharashivkar)', contact: 'प.पू. श्रीशामदादा धाराशिवकर', phone: '+91 95791 56720', b: 1, t: 1, c: 0, tot: 2 },

  // २. ता. श्रीगोंदा (Shrigonda Taluka)
  { id: 'niwas_shrigonda_mandavgan_punjabi', taluka: 'श्रीगोंदा', village: 'मांडवगण', name: 'महानुभाव आश्रम, मांडवगण (निर्मलाबाई पंजाबी)', nameEn: 'Mahanubhav Ashram, Mandavgan', contact: 'प.पू.त.निर्मलाबाई पंजाबी', phone: '+91 90963 60504, +91 96657 84904', b: 2, t: 2, c: 2, tot: 6 },
  { id: 'niwas_shrigonda_mirajgaon_sudam', taluka: 'श्रीगोंदा', village: 'मिरजगांव', name: 'महानुभाव आश्रम, मिरजगांव (श्रीसुदामराजदादा धाराशिवकर)', nameEn: 'Mahanubhav Ashram, Mirajgaon (Sudamrajdada)', contact: 'प.पू.श्रीसुदामराजदादा धाराशिवकर', phone: '+91 94227 43513, +91 94054 00676, +91 90115 39475', b: 23, t: 14, c: 1, tot: 38 },
  { id: 'niwas_shrigonda_mirajgaon_santraj', taluka: 'श्रीगोंदा', village: 'मिरजगांव', name: 'महानुभाव आश्रम, मिरजगांव (श्रीसंतराजदादा धाराशिवकर)', nameEn: 'Mahanubhav Ashram, Mirajgaon (Santrajdada)', contact: 'प.पू.श्रीसंतराजदादा धाराशिवकर', phone: '+91 82754 68275, +91 90214 96356', b: 1, t: 3, c: 0, tot: 4 },
  { id: 'niwas_shrigonda_ghogargaon_avinash', taluka: 'श्रीगोंदा', village: 'घोगरगांव', name: 'महानुभाव आश्रम, घोगरगांव (श्रीअविनाशदादा धाराशिवकर)', nameEn: 'Mahanubhav Ashram, Ghogargaon', contact: 'प.पू.श्रीअविनाशदादा धाराशिवकर', phone: '+91 97676 53652', b: 3, t: 8, c: 3, tot: 14 },
  { id: 'niwas_shrigonda_pandharewadi', taluka: 'श्रीगोंदा', village: 'पांढरेवाडी', name: 'महानुभाव आश्रम, पांढरेवाडी', nameEn: 'Mahanubhav Ashram, Pandharewadi', contact: 'व्यवस्थापक', phone: '-', b: 0, t: 1, c: 0, tot: 1 },
  { id: 'niwas_shrigonda_ghutewadi_machale', taluka: 'श्रीगोंदा', village: 'घुटेवाडी', name: 'महानुभाव आश्रम, घुटेवाडी (श्रीऋषिराजदादा मचाले)', nameEn: 'Mahanubhav Ashram, Ghutewadi', contact: 'प.पू.श्रीऋषिराजदादा मचाले', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_shrigonda_sarola_kapate', taluka: 'श्रीगोंदा', village: 'सारोळा सोमवंशी', name: 'महानुभाव आश्रम, सारोळा सोमवंशी (श्रीअनंतराजदादा कपाटे)', nameEn: 'Mahanubhav Ashram, Sarola Somvanshi', contact: 'प.पू.श्रीअनंतराजदादा कपाटे', phone: '+91 96890 97726', b: 2, t: 2, c: 1, tot: 5 },
  { id: 'niwas_shrigonda_nimgaon_gangarde', taluka: 'श्रीगोंदा', village: 'निमगाव गांगर्डे', name: 'महानुभाव आश्रम, निमगाव गांगर्डे', nameEn: 'Mahanubhav Ashram, Nimgaon Gangarde', contact: 'संतमंडळी', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_shrigonda_belvandi_manekar', taluka: 'श्रीगोंदा', village: 'बेलवंडी', name: 'महानुभाव आश्रम, बेलवंडी (मिराबाई मानेकर)', nameEn: 'Mahanubhav Ashram, Belvandi (Mirabai)', contact: 'प.पू.त. मिराबाई मानेकर', phone: '+91 84899 01169', b: 0, t: 1, c: 0, tot: 1 },
  { id: 'niwas_shrigonda_belvandi_sant', taluka: 'श्रीगोंदा', village: 'बेलवंडी', name: 'संतमंडळी, बेलवंडी', nameEn: 'Santmandali, Belvandi', contact: 'संतमंडळी', phone: '-', b: 3, t: 0, c: 0, tot: 3 },
  { id: 'niwas_shrigonda_erandoli_bhandare', taluka: 'श्रीगोंदा', village: 'एरंडोली', name: 'महानुभाव आश्रम, एरंडोली (श्रीभंडारे गुरुजी)', nameEn: 'Mahanubhav Ashram, Erandoli', contact: 'प.पू.श्रीभंडारे गुरुजी', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_shrigonda_chikhali_rajamati', taluka: 'श्रीगोंदा', village: 'चिखली', name: 'महानुभाव आश्रम, चिखली (राजामती आक्का)', nameEn: 'Mahanubhav Ashram, Chikhali', contact: 'प.पू. राजामती आक्का', phone: '+91 94037 65953', b: 1, t: 1, c: 1, tot: 3 },
  { id: 'niwas_shrigonda_mhatarpimpri_amrute', taluka: 'श्रीगोंदा', village: 'म्हातार पिंप्री', name: 'महानुभाव आश्रम, म्हातार पिंप्री (श्रीअशोकराजदादा अमृते शास्त्री)', nameEn: 'Mahanubhav Ashram, Mhatar Pimpri', contact: 'प.पू.श्रीअशोकराजदादा अमृते शास्त्री', phone: '+91 94054 02777, +91 95277 96868', b: 2, t: 1, c: 2, tot: 5 },

  // ३. ता. पारनेर (Parner Taluka)
  { id: 'niwas_parner_lonihaveli_balapurkar', taluka: 'पारनेर', village: 'लोणी हवेली', name: 'महानुभाव आश्रम, लोणी हवेली (श्रीबाळापूरकर बाबा)', nameEn: 'Mahanubhav Ashram, Loni Haveli', contact: 'प.पू.म.श्रीबाळापूरकर बाबा', phone: '+91 97676 53731, +91 97307 89837, +91 94039 85135', b: 15, t: 15, c: 6, tot: 36 },
  { id: 'niwas_parner_alkuti_kapate', taluka: 'पारनेर', village: 'अळकुटी', name: 'महानुभाव आश्रम, अळकुटी (श्रीप्रदीपराजदादा कपाटे)', nameEn: 'Mahanubhav Ashram, Alkuti', contact: 'प.पू.श्रीप्रदीपराजदादा कपाटे', phone: '+91 74995 04766, +91 94052 75994', b: 2, t: 6, c: 2, tot: 10 },
  { id: 'niwas_parner_vadzire_pusedkar', taluka: 'पारनेर', village: 'वडझिरे', name: 'महानुभाव आश्रम, वडझिरे (श्रीमाधवराजबाबा पुसेदकर)', nameEn: 'Mahanubhav Ashram, Vadzire', contact: 'प.पू.म.श्रीमाधवराजबाबा पुसेदकर', phone: '+91 88055 67143, +91 94052 75876', b: 2, t: 3, c: 2, tot: 7 },
  { id: 'niwas_parner_vadzire_dattamandir', taluka: 'पारनेर', village: 'वडझिरे', name: 'श्रीदत्त मंदिर, वडझिरे', nameEn: 'Shree Datta Mandir, Vadzire', contact: 'व्यवस्थापक', phone: '-', b: 1, t: 2, c: 2, tot: 5 },
  { id: 'niwas_parner_katalvedha_vidvans', taluka: 'पारनेर', village: 'काटाळवेढा', name: 'महानुभाव आश्रम, काटाळवेढा (श्रीगोमेराजबाबा विद्वांस)', nameEn: 'Mahanubhav Ashram, Katalvedha (Gomerajbaba)', contact: 'प.पू.म.श्रीगोमेराजबाबा विद्वांस', phone: '+91 98228 72189, +91 99215 39354', b: 5, t: 3, c: 2, tot: 10 },
  { id: 'niwas_parner_katalvedha_lonarkar', taluka: 'पारनेर', village: 'काटाळवेढा', name: 'महानुभाव आश्रम, काटाळवेढा (सुनंदाबाई लोणारकर)', nameEn: 'Mahanubhav Ashram, Katalvedha (Sunandabai)', contact: 'प.पू.त.सुनंदाबाई लोणारकर', phone: '-', b: 0, t: 1, c: 0, tot: 1 },
  { id: 'niwas_parner_palve_mallebaba', taluka: 'पारनेर', village: 'पळवे', name: 'महानुभाव आश्रम, पळवे (श्रीबाळकृष्ण मल्लेबाबा)', nameEn: 'Mahanubhav Ashram, Palve', contact: 'प.पू.म.श्रीबाळकृष्ण मल्लेबाबा', phone: '+91 98508 65113', b: 2, t: 2, c: 1, tot: 5 },

  // ४. ता. संगमनेर (Sangamner Taluka)
  { id: 'niwas_sangamner_bota_ankulnerkar', taluka: 'संगमनेर', village: 'बोटा', name: 'महानुभाव आश्रम, बोटा (श्रीविराजदादा अंकुळनेरकर)', nameEn: 'Mahanubhav Ashram, Bota (Virajdada)', contact: 'प.पू.श्रीविराजदादा अंकुळनेरकर', phone: '+91 98905 96022, +91 95035 12125', b: 2, t: 1, c: 5, tot: 8 },
  { id: 'niwas_sangamner_bota_by_anjan', taluka: 'संगमनेर', village: 'बोटा', name: 'महानुभाव आश्रम, बोटा बायपास, सर्वज्ञ नगर (श्रीकेशवराजबाबा अंजनगावकर)', nameEn: 'Mahanubhav Ashram, Bota Bypass', contact: 'प.पू.म. श्रीकेशवराजबाबा अंजनगावकर', phone: '+91 98817 65474', b: 3, t: 4, c: 1, tot: 8 },
  { id: 'niwas_sangamner_malwadibota_ankul', taluka: 'संगमनेर', village: 'माळवाडी बोटा', name: 'महानुभाव आश्रम, माळवाडी बोटा (श्रीअंकुळनेरकर बाबा)', nameEn: 'Mahanubhav Ashram, Malwadi Bota', contact: 'प.पू.म. श्रीअंकुळनेरकर बाबा', phone: '+91 94039 86480', b: 9, t: 10, c: 1, tot: 20 },
  { id: 'niwas_sangamner_kurkutwadi_vain', taluka: 'संगमनेर', village: 'कुरकुटवाडी', name: 'महानुभाव आश्रम, कुरकुटवाडी (श्रीवाईंदेशकरबाबा म.)', nameEn: 'Mahanubhav Ashram, Kurkutwadi (Vaindeshkarbaba)', contact: 'प.पू.म.श्रीवाईंदेशकरबाबा म.', phone: '+91 99221 76193, +91 94052 75960', b: 11, t: 9, c: 4, tot: 24 },
  { id: 'niwas_sangamner_kurkutwadi_taleg', taluka: 'संगमनेर', village: 'कुरकुटवाडी', name: 'महानुभाव आश्रम, कुरकुटवाडी (मंगलाताई तळेगावकर)', nameEn: 'Mahanubhav Ashram, Kurkutwadi (Mangaltai)', contact: 'प.पू.त. मंगलाताई तळेगावकर', phone: '+91 95527 30883', b: 1, t: 2, c: 2, tot: 5 },
  { id: 'niwas_sangamner_aklapur_vidvans', taluka: 'संगमनेर', village: 'अकलापूर मुंजेवाडी', name: 'महानुभाव आश्रम, अकलापूर मुंजेवाडी (श्रीअर्जुनदादा विद्वांस)', nameEn: 'Mahanubhav Ashram, Aklapur Munjewadi', contact: 'प.पू.श्रीअर्जुनदादा विद्वांस', phone: '+91 90753 77212', b: 1, t: 1, c: 3, tot: 5 },
  { id: 'niwas_sangamner_gokulwadi_anjan', taluka: 'संगमनेर', village: 'गोकूळवाडी', name: 'महानुभाव आश्रम, गोकूळवाडी (श्रीगोविंदराज शास्त्री अंजनगावकर)', nameEn: 'Mahanubhav Ashram, Gokulwadi', contact: 'प.पू.श्रीगोविंदराज शास्त्री अंजनगावकर', phone: '+91 98817 65475, +91 94054 03575', b: 2, t: 2, c: 3, tot: 7 },
  { id: 'niwas_sangamner_koreddara', taluka: 'संगमनेर', village: 'कोरेडदरा', name: 'महानुभाव आश्रम, कोरेडदरा', nameEn: 'Mahanubhav Ashram, Koreddara', contact: 'व्यवस्थापक', phone: '-', b: 0, t: 1, c: 1, tot: 2 },
  { id: 'niwas_sangamner_vadadara', taluka: 'संगमनेर', village: 'वडदरा', name: 'महानुभाव आश्रम, वडदरा', nameEn: 'Mahanubhav Ashram, Vadadara', contact: 'व्यवस्थापक', phone: '-', b: 0, t: 1, c: 0, tot: 1 },
  { id: 'niwas_sangamner_abhalwadi_raher', taluka: 'संगमनेर', village: 'आभाळवाडी', name: 'महानुभाव आश्रम, आभाळवाडी (श्रीविजयराजदादा राहेरकर)', nameEn: 'Mahanubhav Ashram, Abhalwadi (Vijayrajdada)', contact: 'प.पू.श्रीविजयराजदादा राहेरकर', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_sangamner_abhalwadi_anjan', taluka: 'संगमनेर', village: 'आभाळवाडी', name: 'महानुभाव आश्रम, आभाळवाडी (शांताबाई अंजनगावकर)', nameEn: 'Mahanubhav Ashram, Abhalwadi (Shantabai)', contact: 'प.पू.त.शांताबाई अंजनगावकर', phone: '-', b: 0, t: 1, c: 0, tot: 1 },
  { id: 'niwas_sangamner_raytewadi_nabu', taluka: 'संगamनेर', village: 'रायतेवाडी', name: 'महानुभाव आश्रम, रायतेवाडी (नबु आक्का)', nameEn: 'Mahanubhav Ashram, Raytewadi', contact: 'प.पू.त.नबु आक्का', phone: '+91 94052 75999, +91 94230 70951', b: 3, t: 7, c: 1, tot: 11 },
  { id: 'niwas_sangamner_jantnagar_anjan', taluka: 'संगमनेर', village: 'जनता नगर', name: 'महानुभाव आश्रम, जनता नगर (श्रीदादेराजबुवा अंजनगावकर)', nameEn: 'Mahanubhav Ashram, Janta Nagar', contact: 'प.म. श्रीदादेराजबुवा अंजनगावकर', phone: '+91 94054 00493', b: 1, t: 2, c: 2, tot: 5 },
  { id: 'niwas_sangamner_chandanap_pandit', taluka: 'संगमनेर', village: 'चंदनापुरी', name: 'महानुभाव आश्रम, चंदनापुरी (श्रीपंडितबुवा)', nameEn: 'Mahanubhav Ashram, Chandanapuri (Panditbuva)', contact: 'प.पू.म. श्रीपंडितबुवा', phone: '+91 86687 43441', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_sangamner_chandanap_lahanu', taluka: 'संगमनेर', village: 'चंदनापुरी', name: 'महानुभाव आश्रम,  चंदनापुरी (लहानुबाई अंजनगावकर)', nameEn: 'Mahanubhav Ashram, Chandanapuri (Lahanubai)', contact: 'प.पू.त.लहानुबाई अंजनगावकर', phone: '+91 86687 45441', b: 0, t: 3, c: 3, tot: 6 },
  { id: 'niwas_sangamner_nimaj_nimajkar', taluka: 'संगमनेर', village: 'निमज', name: 'महानुभाव आश्रम, निमज (श्रीनिमजकरबाबा)', nameEn: 'Mahanubhav Ashram, Nimaj (Nimajkarbaba)', contact: 'प.पू.म. श्रीनिमजकरबाबा', phone: '+91 94054 00495', b: 1, t: 4, c: 0, tot: 5 },
  { id: 'niwas_sangamner_nimaj_krishnaraj', taluka: 'संगमनेर', village: 'निमज', name: 'महानुभाव आश्रम, निमज (श्रीकृष्णराजबुवा)', nameEn: 'Mahanubhav Ashram, Nimaj (Krishnarajbuva)', contact: 'प.पू.म.श्रीकृष्णराजबुवा', phone: '+91 94054 03530', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_sangamner_vadgaon_sukinekar', taluka: 'संगमनेर', village: 'वडगांव लांडगा', name: 'महानुभाव आश्रम, वडगांव लांडगा (श्रीभास्करदादा सुकिनेकर)', nameEn: 'Mahanubhav Ashram, Vadgaon Landga', contact: 'प.पू.श्रीभास्करदादा सुकिनेकर', phone: '+91 94052 74452', b: 3, t: 2, c: 1, tot: 6 },
  { id: 'niwas_sangamner_ashvi_parandekar', taluka: 'संगमनेर', village: 'आश्वी', name: 'महानुभाव आश्रम, आश्वी (श्रीबायराजबुवा परांडेकर)', nameEn: 'Mahanubhav Ashram, Ashvi (Bayrajbuva)', contact: 'प.पू.म.श्रीबायराजबुवा परांडेकर', phone: '+91 92842 30378', b: 0, t: 6, c: 5, tot: 11 },
  { id: 'niwas_sangamner_ashvi_kapate', taluka: 'संगमनेर', village: 'आश्वी', name: 'महानुभाव आश्रम, आश्वी (सुभद्राबाई कपाटे)', nameEn: 'Mahanubhav Ashram, Ashvi (Subhadrabai)', contact: 'प.पू.त.सुभद्राबाई कपाटे', phone: '-', b: 1, t: 2, c: 0, tot: 3 },
  { id: 'niwas_sangamner_varvandi_varpe', taluka: 'संगमनेर', village: 'वरवंडी', name: 'महानुभाव आश्रम, वरवंडी (सिताबाई वर्पे)', nameEn: 'Mahanubhav Ashram, Varvandi', contact: 'प.पू.त.सिताबाई वर्पे', phone: '-', b: 0, t: 3, c: 0, tot: 3 },
  { id: 'niwas_sangamner_ciplapur_khamnik', taluka: 'संगमनेर', village: 'सिप्लापूर', name: 'महानुभाव आश्रम, सिप्लापूर (रेखाताई खामनीकर)', nameEn: 'Mahanubhav Ashram, Ciplapur (Rekhatai)', contact: 'प.पू.त.रेखाताई खामनीकर', phone: '-', b: 0, t: 2, c: 0, tot: 2 },
  { id: 'niwas_sangamner_ciplapur_shevalik', taluka: 'संगमनेर', village: 'सिप्लापूर', name: 'महानुभाव आश्रम, सिप्लापूर (श्रीकृष्णराजबाबा शेवलीकर)', nameEn: 'Mahanubhav Ashram, Ciplapur (Krishnarajbaba)', contact: 'प.पू.श्रीकृष्णराजबाबा शेवलीकर', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_sangamner_nimon_kapate1', taluka: 'संगमनेर', village: 'निमोण', name: 'महानुभाव आश्रम, निमोण (हिराबाई कपाटे)', nameEn: 'Mahanubhav Ashram, Nimon (Hirabai)', contact: 'प.पू.त.हिराबाई कपाटे', phone: '+91 99210 64226', b: 0, t: 4, c: 2, tot: 6 },
  { id: 'niwas_sangamner_nimon_kapate2', taluka: 'संगमनेर', village: 'निमोण', name: 'महानुभाव आश्रम,  निमोण (मिराबाई कपाटे)', nameEn: 'Mahanubhav Ashram, Nimon (Mirabai)', contact: 'प.पू.त.मिराबाई कपाटे', phone: '+91 94039 87080', b: 1, t: 3, c: 2, tot: 6 },
  { id: 'niwas_sangamner_nimon_anjan', taluka: 'संगमनेर', village: 'निमोण', name: 'महानुभाव आश्रम, निमोण (अलकाबाई अंजनगावकर)', nameEn: 'Mahanubhav Ashram, Nimon (Alkabai)', contact: 'प.पू.त. अलकाबाई अंजनगावकर', phone: '-', b: 0, t: 2, c: 0, tot: 2 },
  { id: 'niwas_sangamner_manglapur_sheval', taluka: 'संगमनेर', village: 'मंगळापूर', name: 'महानुभाव आश्रम, मंगळापूर (सरुबाई शेवलीकर)', nameEn: 'Mahanubhav Ashram, Manglapur', contact: 'प.पू.त.सरुबाई शेवलीकर', phone: '-', b: 0, t: 1, c: 0, tot: 1 },

  // ५. ता. अकोले (Akole Taluka)
  { id: 'niwas_akole_dhumalwadi_kapate', taluka: 'अकोले', village: 'धुमाळवाडी', name: 'महानुभाव आश्रम, धुमाळवाडी (श्रीरमेशराजदादा कपाटे)', nameEn: 'Mahanubhav Ashram, Dhumalwadi', contact: 'प.पू.श्रीरमेशराजदादा कपाटे', phone: '+91 75889 47752', b: 1, t: 1, c: 4, tot: 6 },
  { id: 'niwas_akole_vithe_ankulnerkar', taluka: 'अकोले', village: 'विठे', name: 'महानुभाव आश्रम, विठे (श्रीमुकुंदराजदादा अंकुळनेरकर)', nameEn: 'Mahanubhav Ashram, Vithe', contact: 'प.पू.श्रीमुकुंदराजदादा अंकुळनेरकर', phone: '+91 94222 32743, +91 94054 00777', b: 2, t: 1, c: 6, tot: 9 },
  { id: 'niwas_akole_rumbhodi_kolhekar', taluka: 'अकोले', village: 'रुंभोडी', name: 'महानुभाव आश्रम, रुंभोडी (अनुसयाबाई कोल्हेकर)', nameEn: 'Mahanubhav Ashram, Rumbhodi', contact: 'प.पू.त.अनुसयाबाई कोल्हेकर', phone: '+91 99217 75241', b: 1, t: 1, c: 1, tot: 3 },
  { id: 'niwas_akole_virgaon_sonalkar', taluka: 'अकोले', village: 'वीरगांव फाटा', name: 'महानुभाव आश्रम, वीरगांव फाटा (श्रीसोनाळकरबुवा)', nameEn: 'Mahanubhav Ashram, Virgaon Phata', contact: 'प.पू.म. श्रीसोनाळकरबुवा', phone: '-', b: 1, t: 1, c: 1, tot: 3 },
  { id: 'niwas_akole_samsherpur_shevalik', taluka: 'अकोले', village: 'समशेरपूर', name: 'महानुभाव आश्रम, समशेरपूर (श्रीजीवनराजदादा शेवलीकर)', nameEn: 'Mahanubhav Ashram, Samsherpur', contact: 'प.पू.श्रीजीवनराजदादा शेवलीकर', phone: '+91 94033 87216, +91 94203 65764', b: 1, t: 3, c: 0, tot: 4 },
  { id: 'niwas_akole_brahmanvada_fatebaba', taluka: 'अकोले', village: 'ब्राह्मणवाडा', name: 'महानुभाव आश्रम, ब्राह्मणवाडा (श्रीफाटेबाबा)', nameEn: 'Mahanubhav Ashram, Brahmanvada', contact: 'प.पू.म.श्रीफाटेबाबा', phone: '+91 93721 48896', b: 3, t: 3, c: 3, tot: 9 },

  // ६. ता. कोपरगाव (Kopargaon Taluka)
  { id: 'niwas_kopargaon_samvatsar_rajdhar', taluka: 'कोपरगाव', village: 'संवत्सर', name: 'महानुभाव आश्रम, संवत्सर (श्रीराजधरबाबा)', nameEn: 'Mahanubhav Ashram, Samvatsar', contact: 'प.पू.म.आचार्य श्रीराजधरबाबा', phone: '+91 94054 00501, +91 98228 46363', b: 62, t: 118, c: 63, tot: 243 },
  { id: 'niwas_kopargaon_jeur_yashraj', taluka: 'कोपरगाव', village: 'जेऊर कुंभारी', name: 'महानुभाव आश्रम, जेऊर कुंभारी (यशराजशास्त्री)', nameEn: 'Mahanubhav Ashram, Jeur Kumbhari', contact: 'प.पू.डॉ.यशराजशास्त्री', phone: '+91 98348 10966, +91 94237 83682', b: 5, t: 19, c: 6, tot: 30 },
  { id: 'niwas_kopargaon_baktarpur_ghugge1', taluka: 'कोपरगाव', village: 'बक्तरपूर', name: 'सर्वतीर्थ आश्रम, बक्तरपूर (श्रीऋषिराजदादा घुग्गे)', nameEn: 'Sarvatirtha Ashram, Baktarpur', contact: 'प.पू.श्रीऋषिराजदादा घुग्गे', phone: '+91 94052 74412, +91 90112 07301', b: 2, t: 2, c: 3, tot: 7 },
  { id: 'niwas_kopargaon_baktarpur_ghugge2', taluka: 'कोपरगाव', village: 'बक्तरपूर', name: 'महानुभाव आश्रम, बक्तरपूर (द्वारकाबाई घुग्गे)', nameEn: 'Mahanubhav Ashram, Baktarpur (Dwarkabai)', contact: 'प.पू.त.द्वारकाबाई घुग्गे', phone: '+91 94054 03043', b: 2, t: 2, c: 3, tot: 7 },
  { id: 'niwas_kopargaon_suregaon_anant', taluka: 'कोपरगाव', village: 'सुरेगाव', name: 'महानुभाव आश्रम, सुरेगाव (श्रीअनंतराजदादा)', nameEn: 'Mahanubhav Ashram, Suregaon', contact: 'प.पू.श्रीअनंतराजदादा', phone: '+91 94052 74971, +91 96238 57626', b: 2, t: 2, c: 3, tot: 7 },
  { id: 'niwas_kopargaon_sonari_prem', taluka: 'कोपरगाव', village: 'सोनारी', name: 'महानुभाव आश्रम, सोनारी (श्रीप्रेममुनी अंजनगावकर)', nameEn: 'Mahanubhav Ashram, Sonari', contact: 'प.पू.श्रीप्रेममुनी अंजनगावकर', phone: '-', b: 2, t: 0, c: 1, tot: 3 },
  { id: 'niwas_kopargaon_ranjangaon_bhoj', taluka: 'कोपरगाव', village: 'रांजणगांव देशमुख', name: 'महानुभाव आश्रम, रांजणगांव देशमुख (श्रीजितेंद्रमुनी भोजने)', nameEn: 'Mahanubhav Ashram, Ranjangaon Deshmukh', contact: 'प.पू.श्रीजितेंद्रमुनी भोजने', phone: '+91 70576 49407, +91 94052 75167', b: 2, t: 4, c: 7, tot: 13 },
  { id: 'niwas_kopargaon_shingnapur_sat', taluka: 'कोपरगाव', village: 'शिंगणापूर', name: 'महानुभाव आश्रम, शिंगणापूर (श्रीगंगाधरदादा सातारकर)', nameEn: 'Mahanubhav Ashram, Shingnapur', contact: 'प.पू.श्रीगंगाधरदादा सातारकर', phone: '-', b: 2, t: 2, c: 0, tot: 4 },
  { id: 'niwas_kopargaon_shingnapur_jadhav', taluka: 'कोपरगाव', village: 'शिंगणापूर', name: 'महानुभाव आश्रम, शिंगणापूर (जाधववाडी)', nameEn: 'Mahanubhav Ashram, Shingnapur (Jadhavwadi)', contact: 'व्यवस्थापक', phone: '-', b: 0, t: 2, c: 0, tot: 2 },
  { id: 'niwas_kopargaon_javalka_marathe', taluka: 'कोपरगाव', village: 'जवळका वेस', name: 'महानुभाव आश्रम, जवळका वेस (श्रीमुरारीमल्लबाबा मराठे)', nameEn: 'Mahanubhav Ashram, Javalka Ves', contact: 'प.पू.म. श्रीमुरारीमल्लबाबा मराठे', phone: '+91 96890 98729', b: 1, t: 2, c: 0, tot: 3 },

  // ७. ता. श्रीरामपूर (Shrirampur Taluka)
  { id: 'niwas_shrirampur_belapur_ane', taluka: 'श्रीरामपूर', village: 'बेलापूर वनदेव', name: 'महानुभाव आश्रम, बेलापूर वनदेव (श्रीआनेराजशास्त्री)', nameEn: 'Mahanubhav Ashram, Belapur Vandev', contact: 'प.पू.श्रीआनेराजशास्त्री', phone: '-', b: 0, t: 1, c: 1, tot: 2 },
  { id: 'niwas_shrirampur_belapur_lad1', taluka: 'श्रीरामपूर', village: 'बेलापूर स्थान', name: 'महानुभाव आश्रम, बेलापूर स्थान (विद्याताई लाड)', nameEn: 'Mahanubhav Ashram, Belapur Sthan (Vidyatai)', contact: 'प.पू.त.विद्याताई लाड', phone: '+91 99308 07777, +91 88308 32795', b: 1, t: 3, c: 2, tot: 6 },
  { id: 'niwas_shrirampur_belapur_kemkar', taluka: 'श्रीरामपूर', village: 'बेलापूर स्थान', name: 'महानुभाव आश्रम, बेलापूर स्थान (श्रीकेमकरबाबा)', nameEn: 'Mahanubhav Ashram, Belapur Sthan (Kemkarbaba)', contact: 'प.पू.म.श्रीकेमकरबाबा', phone: '+91 94054 03519, +91 96653 40140', b: 1, t: 2, c: 2, tot: 5 },
  { id: 'niwas_shrirampur_belapur_lad2', taluka: 'श्रीरामपूर', village: 'बेलापूर स्थान', name: 'महानुभाव आश्रम, बेलापूर स्थान (कृष्णराजबुवा लाड)', nameEn: 'Mahanubhav Ashram, Belapur Sthan (Krishnarajbuva)', contact: 'प.पू.म.कृष्णराजबुवा लाड', phone: '+91 98600 37596', b: 3, t: 6, c: 6, tot: 15 },
  { id: 'niwas_shrirampur_khamnikar_nanda', taluka: 'श्रीरामपूर', village: 'खामनीकर आश्रम', name: 'खामनीकर आश्रम (नंदाताई खामनीकर)', nameEn: 'Khamnikar Ashram (Nandatai)', contact: 'प.पू.त.नंदाताई खामनीकर', phone: '+91 98504 75090, +91 98600 37596', b: 4, t: 4, c: 4, tot: 12 },
  { id: 'niwas_shrirampur_khamnikar_pand', taluka: 'श्रीरामपूर', village: 'खामनीकर आश्रम', name: 'खामनीकर आश्रम (पंडीतराजदादा खामनीकर)', nameEn: 'Khamnikar Ashram (Panditrajdada)', contact: 'प.पू.श्रीपंडीतराजदादा खामनीकर', phone: '+91 72762 21771, +91 99217 67880', b: 2, t: 3, c: 0, tot: 5 },
  { id: 'niwas_shrirampur_khandagle_balap', taluka: 'श्रीरामपूर', village: 'खंडागळे वस्ती', name: 'महानुभाव आश्रम, खंडागळे वस्ती (श्रीमुरलीधरदादा बाळापूरकर)', nameEn: 'Mahanubhav Ashram, Khandagle Vasti', contact: 'श्रीमुरलीधरदादा बाळापूरकर', phone: '+91 95526 56263', b: 1, t: 3, c: 0, tot: 4 },
  { id: 'niwas_shrirampur_bansi_ane', taluka: 'श्रीरामपूर', village: 'बन्सीवाले श्रीकृष्ण मंदिर', name: 'बन्सीवाले श्रीकृष्ण मंदिर (श्रीआनेराजबाबा)', nameEn: 'Bansiwale Shree Krishna Mandir', contact: 'प.पू.श्रीआनेराजबाबा', phone: '+91 92705 02834', b: 1, t: 1, c: 1, tot: 3 },
  { id: 'niwas_shrirampur_city_pantbuva', taluka: 'श्रीरामपूर', village: 'श्रीरामपूर', name: 'श्रीचक्रधर म. आश्रम, श्रीरामपूर (श्रीपंतबुवा म.)', nameEn: 'Shree Chakradhar Ashram, Shrirampur', contact: 'प.पू.म. श्रीपंतबुवा म.', phone: '+91 94052 76276, +91 95528 57785', b: 11, t: 16, c: 10, tot: 37 },
  { id: 'niwas_shrirampur_city_aradhye', taluka: 'श्रीरामपूर', village: 'श्रीरामपूर', name: 'महानुभाव आश्रम, श्रीरामपूर (रेशमाताई आराध्य)', nameEn: 'Mahanubhav Ashram, Shrirampur (Reshmatai)', contact: 'प.पू.त. रेशमाताई आराध्य', phone: '+91 99702 68184, +91 92265 48548', b: 0, t: 2, c: 0, tot: 2 },
  { id: 'niwas_shrirampur_city_punjabi', taluka: 'श्रीरामपूर', village: 'श्रीरामपूर', name: 'महानुभाव आश्रम, श्रीरामपूर (श्रीदत्तराजबा पंजाबी)', nameEn: 'Mahanubhav Ashram, Shrirampur (Dattarajba)', contact: 'प.पू.म.श्रीदत्तराजबा पंजाबी', phone: '+91 94039 85469, +91 97639 82157', b: 15, t: 85, c: 10, tot: 110 },
  { id: 'niwas_shrirampur_city_ghuge', taluka: 'श्रीरामपूर', village: 'श्रीरामपूर', name: 'श्रीगोविंदप्रभू आश्रम, श्रीरामपूर (श्रीघुगेबाबा म.)', nameEn: 'Shree Govindaprabhu Ashram, Shrirampur', contact: 'प.पू.म. श्रीघुगेबाबा म.', phone: '+91 92262 26477', b: 1, t: 2, c: 5, tot: 8 },
  { id: 'niwas_shrirampur_city_bhavik', taluka: 'श्रीरामपूर', village: 'श्रीरामपूर', name: 'महानुभाव आश्रम, श्रीरामपूर (श्रीभाविकलराजबाबा म.)', nameEn: 'Mahanubhav Ashram, Shrirampur (Bhavikrajbaba)', contact: 'प.पू.म.श्रीभाविकराजबाबा म.', phone: '+91 94039 85286', b: 2, t: 5, c: 3, tot: 10 },
  { id: 'niwas_shrirampur_city_brijlal', taluka: 'श्रीरामपूर', village: 'श्रीरामपूर', name: 'श्रीकृष्ण मंदिर, श्रीरामपूर (श्रीब्रीजलालबाबा)', nameEn: 'Shree Krishna Mandir, Shrirampur (Brijlalbaba)', contact: 'प.पू.म.श्रीब्रीजलालबाबा', phone: '+91 92267 02047, +91 94039 85270', b: 3, t: 5, c: 2, tot: 10 },
  { id: 'niwas_shrirampur_city_balap', taluka: 'श्रीरामपूर', village: 'श्रीरामपूर', name: 'महानुभाव आश्रम, श्रीरामपूर (श्रीकृष्णराजदादा बाळापूरकर)', nameEn: 'Mahanubhav Ashram, Shrirampur (Krishnarajdada)', contact: 'प.पू.श्रीकृष्णराजदादा बाळापूरकर', phone: '+91 94054 02763, +91 98812 89612', b: 1, t: 2, c: 1, tot: 4 },
  { id: 'niwas_shrirampur_city_deepak', taluka: 'श्रीरामपूर', village: 'श्रीरामपूर', name: 'महानुभाव आश्रम, श्रीरामपूर (श्रीदीपकराज शास्त्री)', nameEn: 'Mahanubhav Ashram, Shrirampur (Deepakraj)', contact: 'प.पू.श्रीदीपकराज शास्त्री', phone: '+91 83299 72510', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_shrirampur_vadala_aradhye', taluka: 'श्रीरामपूर', village: 'वडाळा महादेव', name: 'महानुभाव आश्रम, वडाळा महादेव (श्रीविजयराजदादा आराध्य)', nameEn: 'Mahanubhav Ashram, Vadala Mahadev', contact: 'प.पू.श्रीविजयराजदादा आराध्य', phone: '+91 94054 00600, +91 93266 10064', b: 2, t: 3, c: 3, tot: 8 },
  { id: 'niwas_shrirampur_malvadgaon_kham', taluka: 'श्रीरामपूर', village: 'माळवडगांव', name: 'महानुभाव आश्रम, माळवडगांव (श्रीहंसराजदादा खामनीकर)', nameEn: 'Mahanubhav Ashram, Malvadgaon', contact: 'प.पू.श्रीहंसराजदादा खामनीकर', phone: '+91 74984 23318, +91 94039 86569', b: 19, t: 25, c: 6, tot: 50 },
  { id: 'niwas_shrirampur_khokar_paturkar', taluka: 'श्रीरामपूर', village: 'खोकर', name: 'महानुभाव आश्रम, खोकर (श्रीधरनंद पातूरकर)', nameEn: 'Mahanubhav Ashram, Khokar (Paturkar)', contact: 'श्रीधरनंद पातूरकर', phone: '+91 94054 03515, +91 97677 85988', b: 1, t: 0, c: 1, tot: 2 },
  { id: 'niwas_shrirampur_khokar_punjabi', taluka: 'श्रीरामपूर', village: 'खोकर', name: 'महानुभाव आश्रम, खोकर (सीमाबाई पंजाबी)', nameEn: 'Mahanubhav Ashram, Khokar (Seemabai)', contact: 'प.पू.त.सीमाबाई पंजाबी', phone: '-', b: 0, t: 1, c: 0, tot: 1 },
  { id: 'niwas_shrirampur_khokar_kapate', taluka: 'श्रीरामपूर', village: 'खोकर', name: 'महानुभाव आश्रम, खोकर (श्रीसंदिपराजदादा कपाटे)', nameEn: 'Mahanubhav Ashram, Khokar (Sandiprajdada)', contact: 'प.पू.श्रीसंदिपराजदादा कपाटे', phone: '+91 87888 21810', b: 2, t: 2, c: 2, tot: 6 },
  { id: 'niwas_shrirampur_bhoker_punjabi', taluka: 'श्रीरामपूर', village: 'भोकर', name: 'गीताश्रम, भोकर (श्रीविनायकबासे पंजाबी)', nameEn: 'Geetashram, Bhoker', contact: 'प.पू.श्रीविनायकबासे पंजाबी', phone: '+91 95119 81078, +91 97667 46977', b: 15, t: 16, c: 4, tot: 35 },
  { id: 'niwas_shrirampur_city_shevalikar', taluka: 'श्रीरामपूर', village: 'श्रीकृष्ण ज्ञान मंदिर', name: 'श्रीकृष्ण ज्ञान मंदिर (श्रीउद्धवमुनी शेवलीकर)', nameEn: 'Shree Krishna Gyan Mandir', contact: 'प.पू.श्रीउद्धवमुनी शेवलीकर', phone: '+91 93052 76305, +91 70652 13995', b: 2, t: 2, c: 1, tot: 5 },
  { id: 'niwas_shrirampur_othamba_kapate', taluka: 'श्रीरामपूर', village: 'ओथंबांमठ', name: 'महानुभाव आश्रम, ओथंबांमठ (श्रीजितेंद्रमुनी कपाटे)', nameEn: 'Mahanubhav Ashram, Othambamath (Jitendramuni)', contact: 'प.पू.श्रीजितेंद्रमुनी कपाटे', phone: '+91 79726 28939', b: 1, t: 0, c: 2, tot: 3 },
  { id: 'niwas_shrirampur_othamba_vidvans', taluka: 'श्रीरामपूर', village: 'ओथंबांमठ', name: 'महानुभाव आश्रम, ओथंबांमठ (श्रीविशालदादा विद्वांस)', nameEn: 'Mahanubhav Ashram, Othambamath (Vishaldada)', contact: 'प.पू.श्रीविशालदादा विद्वांस', phone: '+91 94054 03495', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_shrirampur_chakradhar_kolh', taluka: 'श्रीरामपूर', village: 'श्रीचक्रधर मंदिर म.आश्रम', name: 'श्रीचक्रधर मंदिर म.आश्रम (श्रीदेवेंद्रमुनी कोल्हेकर)', nameEn: 'Shree Chakradhar Mandir Ashram', contact: 'प.पू.श्रीदेवेंद्रमुनी कोल्हेकर', phone: '+91 96998 60484, +91 99219 79981', b: 1, t: 0, c: 1, tot: 2 },
  { id: 'niwas_shrirampur_bhokersthan_ank', taluka: 'श्रीरामपूर', village: 'भोकर स्थान', name: 'महानुभाव आश्रम, भोकर स्थान (श्रीसाधैराजबाबा अंकुळनेरकर)', nameEn: 'Mahanubhav Ashram, Bhoker Sthan (Sadhairajbaba)', contact: 'प.पू.म.श्रीसाधैराजबाबा अंकुळनेरकर', phone: '+91 94054 03514, +91 90608 77648', b: 1, t: 1, c: 1, tot: 3 },
  { id: 'niwas_shrirampur_bhokersthan_dwa', taluka: 'श्रीरामपूर', village: 'भोकर स्थान', name: 'महानुभाव आश्रम, भोकर स्थान (द्वारकाबाई)', nameEn: 'Mahanubhav Ashram, Bhoker Sthan (Dwarkabai)', contact: 'प.पू.त. द्वारकाबाई', phone: '-', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_shrirampur_bhoker_gumfe', taluka: 'श्रीरामपूर', village: 'भोकर', name: 'महानुभाव आश्रम, भोकर (श्रीगुंफेकरबाबा म.)', nameEn: 'Mahanubhav Ashram, Bhoker (Gumfekarbaba)', contact: 'प.पू.म.श्रीगुंफेकरबाबा म.', phone: '+91 94206 37854, +91 94054 03531', b: 15, t: 22, c: 4, tot: 41 },
  { id: 'niwas_shrirampur_bhoker_gumfesh', taluka: 'श्रीरामपूर', village: 'भोकर', name: 'महानुभाव आश्रम, भोकर (श्रीशामदादा गुंफेकर)', nameEn: 'Mahanubhav Ashram, Bhoker (Shamdada)', contact: 'प.पू.श्रीशामदादा गुंफेकर', phone: '+91 94039 85252', b: 1, t: 1, c: 2, tot: 4 },
  { id: 'niwas_shrirampur_taklibhan_dar', taluka: 'श्रीरामपूर', village: 'टाकळीभान', name: 'महानुभाव आश्रम, टाकळीभान (श्रीमुरलीधरदादा दर्यापूरकर)', nameEn: 'Mahanubhav Ashram, Taklibhan', contact: 'प.पू.म. श्रीमुरलीधरदादा दर्यापूरकर', phone: '+91 98223 09426, +91 82754 69216', b: 1, t: 1, c: 2, tot: 4 },
  { id: 'niwas_shrirampur_ghumandev_vidv', taluka: 'श्रीरामपूर', village: 'घुमनदेव', name: 'महानुभाव आश्रम, घुमनदेव (मंगलताई विद्वांस)', nameEn: 'Mahanubhav Ashram, Ghumandev', contact: 'प.पू.त. मंगलताई विद्वांस', phone: '+91 94054 03517', b: 0, t: 4, c: 0, tot: 4 },
  { id: 'niwas_shrirampur_dome_vidvans', taluka: 'श्रीरामपूर', village: 'डोमेग्राम', name: 'राजमठ, डोमेग्राम (श्रीप्रभाकरदादा विद्वांस)', nameEn: 'Rajmath, Domegram (Prabhakardada)', contact: 'प.पू.श्रीप्रभाकरदादा विद्वांस', phone: '+91 92704 69918, +91 94052 74988', b: 5, t: 15, c: 5, tot: 25 },
  { id: 'niwas_shrirampur_dome_bidkar', taluka: 'श्रीरामपूर', village: 'डोमेग्राम', name: 'राजमठ, डोमेग्राम (सुजाताताई बिडकर)', nameEn: 'Rajmath, Domegram (Sujatatai)', contact: 'प.पू.त.सुजाताताई बिडकर', phone: '+91 82758 93308, +91 82758 44220', b: 0, t: 4, c: 0, tot: 4 },
  { id: 'niwas_shrirampur_dome_annachatra', taluka: 'श्रीरामपूर', village: 'डोमेग्राम', name: 'देवदत्त आश्रम अन्नछत्र, डोमेग्राम (श्रीवामनमुनी अंकुळनेरकर)', nameEn: 'Devdatta Ashram Annachatra, Domegram', contact: 'प.पू.श्रीवामनमुनी अंकुळनेरकर', phone: '+91 94054 00304, +91 93738 47980', b: 0, t: 0, c: 0, tot: 0 },
  { id: 'niwas_shrirampur_dome_saing', taluka: 'श्रीरामपूर', village: 'डोमेग्राम', name: 'देवदत्त आश्रम, डोमेग्राम (श्रीसैंगमुनी)', nameEn: 'Devdatta Ashram, Domegram (Saingmuni)', contact: 'प.पू.श्रीसैंगमुनी', phone: '-', b: 4, t: 11, c: 1, tot: 16 },
  { id: 'niwas_shrirampur_dome_yelamkar', taluka: 'श्रीरामपूर', village: 'डोमेग्राम', name: 'महानुभाव आश्रम, डोमेग्राम (रजनीताई yeळमकर)', nameEn: 'Mahanubhav Ashram, Domegram (Rajnitaoi)', contact: 'प.पू.त.रजनीताई येळमकर', phone: '+91 99230 51066, +91 88887 33387', b: 2, t: 2, c: 2, tot: 6 },
  { id: 'niwas_shrirampur_dome_gunfa', taluka: 'श्रीरामपूर', village: 'डोमेग्राम', name: 'महातीर्थराज श्रीचक्रधर मंदिर गुंफा, डोमेग्राम (निर्मलाताई कपाटे)', nameEn: 'Shree Chakradhar Cave, Domegram', contact: 'प.पू.त.निर्मलाताई कपाटे', phone: '+91 82754 67955, +91 96049 82372', b: 7, t: 17, c: 2, tot: 26 },
  { id: 'niwas_shrirampur_khairi_pravin', taluka: 'श्रीरामपूर', village: 'खैरी निमगांव', name: 'महानुभाव आश्रम, खैरी निमगांव (प्रवीणकुमार शास्त्री)', nameEn: 'Mahanubhav Ashram, Khairi Nimgaon', contact: 'प.पू.श्रीप्रवीणकुमार शास्त्री', phone: '+91 92840 33740, +91 98506 31469', b: 2, t: 7, c: 2, tot: 11 },
  { id: 'niwas_shrirampur_gondeg_bhoj', taluka: 'श्रीरामपूर', village: 'गोंडेगाव', name: 'महानुभाव आश्रम, गोंडेगाव (गोविंदराज भोजने)', nameEn: 'Mahanubhav Ashram, Gondegaon', contact: 'प.पू.श्रीगोविंदराज भोजने', phone: '+91 91466 50141', b: 2, t: 2, c: 1, tot: 5 },
  { id: 'niwas_shrirampur_naur_virat', taluka: 'श्रीरामपूर', village: 'नाऊर', name: 'महानुभाव आश्रम, नाऊर (शिवव्यासबुवा विराट)', nameEn: 'Mahanubhav Ashram, Naur', contact: 'प.पू.श्रीशिवव्यासबुवा विराट', phone: '-', b: 1, t: 1, c: 1, tot: 3 },
  { id: 'niwas_shrirampur_nayg_chakrapani', taluka: 'श्रीरामपूर', village: 'नायगांव', name: 'महानुभाव आश्रम, नायगांव (श्रीचक्रपाणीबुवा)', nameEn: 'Mahanubhav Ashram, Naygaon', contact: 'प.पू.म. श्रीचक्रपाणीबुवा', phone: '-', b: 1, t: 1, c: 1, tot: 3 },
  { id: 'niwas_shrirampur_padeg_aradhye', taluka: 'श्रीरामपूर', village: 'पढेगाव', name: 'महानुभाव आश्रम, पढेगाव (मुरलीधरदादा आराध्य)', nameEn: 'Mahanubhav Ashram, Padegaon', contact: 'प.पू.श्रीमुरलीधरदादा आराध्य', phone: '-', b: 1, t: 1, c: 1, tot: 3 },

  // ८. ता. राहुरी (Rahuri Taluka)
  { id: 'niwas_rahuri_vambori_rishiraj', taluka: 'राहुरी', village: 'वांबोरी', name: 'वांबोरी आश्रम (महानुभाव शिक्षण संस्था व आश्रम)', nameEn: 'Vambori Ashram (Rishirajji)', contact: 'प.पू.आचार्य श्रीऋषिराजजी शास्त्री म.', phone: '+91 94052 75275, +91 94052 75202, +91 94052 74427', b: 125, t: 185, c: 130, tot: 440 },
  { id: 'niwas_rahuri_vambori_marathe', taluka: 'राहुरी', village: 'वांबोरी', name: 'वांबोरी स्थान (श्रीउद्धवराज मराठे)', nameEn: 'Vambori Sthan (Uddhavraj)', contact: 'प.पू.श्रीउद्धवराज मराठे', phone: '+91 94052 75202', b: 2, t: 2, c: 3, tot: 7 },
  { id: 'niwas_rahuri_katrad_pandekar', taluka: 'राहुरी', village: 'कात्रड', name: 'महानुभाव आश्रम, कात्रड (श्रीपांडेकरबाबा म.)', nameEn: 'Mahanubhav Ashram, Katrad', contact: 'प.पू.म. श्रीपांडेकरबाबा म.', phone: '+91 99217 56447, +91 94052 74414', b: 2, t: 4, c: 4, tot: 10 },
  { id: 'niwas_rahuri_kukkad_bidkar', taluka: 'राहुरी', village: 'कुक्कड वेढा', name: 'महानुभाव आश्रम, कुक्कड वेढा (श्रीसंतराजदादा बिडकर)', nameEn: 'Mahanubhav Ashram, Kukkad Vedha', contact: 'प.पू.श्रीसंतराजदादा बिडकर', phone: '+91 95612 75092', b: 1, t: 2, c: 0, tot: 3 },

  // ९. ता. राहता (Rahata Taluka)
  { id: 'niwas_rahata_punatamba_shev', taluka: 'राहता', village: 'पुणतांबा', name: 'महानुभाव आश्रम, पुणतांबा स्थान (पंडितराजदादा शेवलीकर)', nameEn: 'Mahanubhav Ashram, Puntamba Sthan', contact: 'प.पू.पंडितराजदादा शेवलीकर', phone: '+91 98224 24158', b: 1, t: 2, c: 3, tot: 6 },
  { id: 'niwas_rahata_punatamba_punj', taluka: 'राहता', village: 'पुणतांबा', name: 'महानुभाव आश्रम, पुणतांबा (श्रीविलासदादा पंजाबी)', nameEn: 'Mahanubhav Ashram, Puntamba (Vilasdada)', contact: 'प.पू.श्रीविलासदादा पंजाबी', phone: '+91 99581 49945, +91 90228 57610', b: 3, t: 6, c: 3, tot: 12 },
  { id: 'niwas_rahata_city_kapate', taluka: 'राहता', village: 'राहाता', name: 'महानुभाव आश्रम, राहाता (सारिका कपाटे)', nameEn: 'Mahanubhav Ashram, Rahata (Sarika)', contact: 'प.पू. त. सारिका कपाटे', phone: '+91 82755 73885', b: 1, t: 2, c: 2, tot: 5 },
  { id: 'niwas_rahata_city_ghugge', taluka: 'राहता', village: 'राहाता', name: 'महानुभाव आश्रम, राहाता (संगिताताई घुग्गे)', nameEn: 'Mahanubhav Ashram, Rahata (Sangitatai)', contact: 'प.त. संगिताताई घुग्गे', phone: '-', b: 1, t: 2, c: 1, tot: 4 },
  { id: 'niwas_rahata_kanhe_kham', taluka: 'राहता', village: 'कान्हेगांव फाटा', name: 'महानुभाव आश्रम, कान्हेगांव फाटा (श्रीमहेशकुमार खामनीकर)', nameEn: 'Mahanubhav Ashram, Kanhegaon Phata', contact: 'प.पू.श्रीमहेशकुमार खामनीकर', phone: '-', b: 3, t: 0, c: 0, tot: 3 },

  // १०. ता. नेवासा (Nevasa Taluka)
  { id: 'niwas_nevasa_bel_faltankar', taluka: 'नेवासा', village: 'बेल पिंपळगाव', name: 'महानुभाव आश्रम, बेल पिंपळगाव (मंदाबाई फलटणकर)', nameEn: 'Mahanubhav Ashram, Bel Pimpalgaon', contact: 'प.पू.त. मंदाबाई फलटणकर', phone: '+91 87671 43150, +91 73501 37488', b: 0, t: 3, c: 2, tot: 5 },
  { id: 'niwas_nevasa_suregaon_aradhye', taluka: 'नेवासा', village: 'सुरेगांव', name: 'महानुभाव आश्रम, सुरेगांव (श्रीवेदमनी आराध्य)', nameEn: 'Mahanubhav Ashram, Suregaon (Vedmani)', contact: 'प.पू. श्रीवेदमनी आराध्य', phone: '+91 94039 85534, +91 83081 37320', b: 3, t: 2, c: 0, tot: 5 },
  { id: 'niwas_nevasa_sthan_ankul', taluka: 'नेवासा', village: 'नेवासा स्थान', name: 'महानुभाव आश्रम, नेवासा स्थान (श्रीशाममुनी अंकुळनेरकर)', nameEn: 'Mahanubhav Ashram, Nevasa Sthan', contact: 'प.पू.श्रीशाममुनी अंकुळनेरकर', phone: '+91 94039 85288, +91 94039 85266', b: 1, t: 2, c: 4, tot: 7 },
  { id: 'niwas_nevasa_bhan_yelamkar', taluka: 'नेवासा', village: 'भानसहिवरा वस्ती', name: 'महानुभाव आश्रम, भानसहिवरा वस्ती (श्रीसुधाकरदादा येळमकर)', nameEn: 'Mahanubhav Ashram, Bhansahivra Vasti', contact: 'प.पू.श्रीसुधाकरदादा yeळमकर', phone: '+91 94054 03521', b: 1, t: 2, c: 1, tot: 4 },
  { id: 'niwas_nevasa_patare_aradhye', taluka: 'नेवासा', village: 'पटारे वस्ती', name: 'महानुभाव आश्रम, पटारे वस्ती (आशाताई आराध्य)', nameEn: 'Mahanubhav Ashram, Patare Vasti', contact: 'प.पू.त. आशाताई आराध्य', phone: '+91 77964 83368', b: 0, t: 3, c: 3, tot: 6 },
  { id: 'niwas_nevasa_bhan_aradhye', taluka: 'नेवासा', village: 'भानसहिवरा गाव', name: 'महानुभाव आश्रम, भानसहिवरा गाव (श्रीदिगंबरबाबा आराध्य)', nameEn: 'Mahanubhav Ashram, Bhansahivra Village', contact: 'प.पू.म. श्रीदिगंबरबाबा आराध्य', phone: '+91 87966 41421', b: 3, t: 3, c: 0, tot: 6 },
  { id: 'niwas_nevasa_bhange_dharashiv', taluka: 'नेवासा', village: 'भनगेवस्ती', name: 'महानुभाव आश्रम, भनगेवस्ती (श्रीप्रभाकरबावा धाराशिवकर)', nameEn: 'Mahanubhav Ashram, Bhange Vasti', contact: 'प.पू.म. श्रीप्रभाकरबावा धाराशिवकर', phone: '+91 94039 55277, +91 94039 85577', b: 1, t: 2, c: 1, tot: 4 },
  { id: 'niwas_nevasa_ranjangaon_punj', taluka: 'नेवासा', village: 'आऊवेचे रांजणगांव देवी', name: 'देवदत्त आश्रम, आऊवेचे रांजणगांव देवी', nameEn: 'Devdatta Ashram, Ranjangaon Devi', contact: 'प.पू.श्रीसुखदेवमुनी पंजाबी', phone: '-', b: 1, t: 0, c: 0, tot: 1 },

  // ११. ता. शेवगाव (Shevgaon Taluka)
  { id: 'niwas_shevgaon_avhane_salkar', taluka: 'शेवगाव', village: 'आव्हाणे', name: 'महानुभाव आश्रम, आव्हाणे (श्रीसारंगधर दादा साळकर)', nameEn: 'Mahanubhav Ashram, Avhane', contact: 'प.पू.श्रीसारंगधर दादा साळकर', phone: '+91 87883 08593', b: 1, t: 2, c: 4, tot: 7 },
  { id: 'niwas_shevgaon_ladjal_bidkar', taluka: 'शेवगाव', village: 'लाडजळगांव', name: 'महानुभाव आश्रम, लाडजळगांव (श्रीपंडितराजदादा बिडकर)', nameEn: 'Mahanubhav Ashram, Ladjalgaon', contact: 'प.पू.श्रीपंडितराजदादा बिडकर', phone: '+91 94052 74430, +91 94237 56903', b: 1, t: 2, c: 1, tot: 4 },
  { id: 'niwas_shevgaon_chaklamba', taluka: 'शेवगाव', village: 'चकलांबा स्थान', name: 'महानुभाव आश्रम, चकलांबा स्थान', nameEn: 'Mahanubhav Ashram, Chaklamba Sthan', contact: 'व्यवस्थापक', phone: '-', b: 2, t: 1, c: 0, tot: 3 },

  // १२. ता. पाथर्डी (Pathardi Taluka)
  { id: 'niwas_pathardi_miri_jamodekar', taluka: 'पाथर्डी', village: 'मिरी स्थान', name: 'महानुभाव आश्रम, मिरी स्थान (श्रीधन:शामदादा जामोदेकर)', nameEn: 'Mahanubhav Ashram, Miri Sthan', contact: 'प.पू.श्रीधन:शामदादा जामोदेकर', phone: '+91 90751 51250, +91 98752 32759', b: 1, t: 3, c: 1, tot: 5 },
  { id: 'niwas_pathardi_lohasar_satarkar', taluka: 'पाथर्डी', village: 'लोहसर खांडगांव', name: 'महानुभाव आश्रम, लोहसर खांडगांव (श्रीमुकुंदराज दादा सातारकर)', nameEn: 'Mahanubhav Ashram, Lohasar Khandgaon', contact: 'प.पू.श्रीमुकुंदराज दादा सातारकर', phone: '+91 95529 17709, +91 87668 23478', b: 1, t: 2, c: 2, tot: 5 },
  { id: 'niwas_pathardi_bhetichavad', taluka: 'पाथर्डी', village: 'भेटीचा वड', name: 'महानुभाव आश्रम, भेटीचा वड', nameEn: 'Mahanubhav Ashram, Bheticha Vad', contact: 'व्यवस्थापक', phone: '-', b: 0, t: 1, c: 0, tot: 1 },
  { id: 'niwas_pathardi_yeli', taluka: 'पाथर्डी', village: 'येळी', name: 'महानुभाव आश्रम, yeळी', nameEn: 'Mahanubhav Ashram, Yeli', contact: 'व्यवस्थापक', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_pathardi_kharvandi', taluka: 'पाथर्डी', village: 'खरवंडी कासार', name: 'महानुभाव आश्रम, खरवंडी कासार', nameEn: 'Mahanubhav Ashram, Kharvandi Kasar', contact: 'व्यवस्थापक', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_pathardi_shiral_prabhakar', taluka: 'पाथर्डी', village: 'शिराळचिचोंडी', name: 'महानुभाव आश्रम, शिराळचिचोंडी (श्रीप्रभाकर दादा)', nameEn: 'Mahanubhav Ashram, Shiralchichondi', contact: 'प.पू.श्रीप्रभाकर दादा', phone: '+91 94223 41456', b: 1, t: 2, c: 2, tot: 5 },

  // १३. ता. कर्जत (Karjat Taluka)
  { id: 'niwas_karjat_mhalangi_hingoli', taluka: 'कर्जत', village: 'म्हाळंगी', name: 'महानुभाव आश्रम, म्हाळंगी (श्रीहिंगोलीकर बाबा)', nameEn: 'Mahanubhav Ashram, Mhalangi', contact: 'प.पू.श्रीहिंगोलीकर बाबा', phone: '+91 98227 11358, +91 94052 76323', b: 2, t: 3, c: 0, tot: 5 },

  // १४. ता. जामखेड (Jamkhed Taluka)
  { id: 'niwas_jamkhed_city_lasurkar', taluka: 'जामखेड', village: 'आधी-जामखेड', name: 'महानुभाव आश्रम, आधी-जामखेड (श्रीविजयराजदादा लासूरकर)', nameEn: 'Mahanubhav Ashram, Jamkhed (Lasurkar)', contact: 'प.पू.श्रीविजयराजदादा लासूरकर', phone: '+91 94052 75793', b: 2, t: 0, c: 0, tot: 2 },
  { id: 'niwas_jamkhed_khamgaon_dharur', taluka: 'जामखेड', village: 'खामगांव', name: 'महानुभाव आश्रम,  खामगांव (श्रीधारुरकरबाबा म.)', nameEn: 'Mahanubhav Ashram, Khamgaon (Dharurkarbaba)', contact: 'प.पू.म. श्रीधारुरकरबाबा म.', phone: '-', b: 2, t: 4, c: 2, tot: 8 }
];

export const AHMEDNAGAR_NIWAS_ITEMS: NiwasItem[] = AHMEDNAGAR_RAW_DATA.map(item => ({
  id: item.id,
  name: item.name,
  nameEn: item.nameEn,
  location: item.loc || `${item.village}, ता. ${item.taluka}, जि. अहमदनगर`,
  state: 'महाराष्ट्र',
  district: 'अहमदनगर',
  taluka: item.taluka,
  village: item.village,
  facilities: {
    mr: ['नित्य पूजावसर व आरती'],
    hi: ['नित्य पूजावसर एवं आरती'],
    en: ['Daily Prayers & Aarti']
  },
  rooms: {
    mr: ['साधारण खोल्या'],
    hi: ['साधारण कमरे'],
    en: ['Standard Rooms']
  },
  contactPerson: item.contact,
  phone: item.phone,
  sevaCharge: {
    mr: 'ऐच्छिक सहकार्य',
    hi: 'ऐच्छिक सहयोग',
    en: 'Voluntary Donation'
  },
  imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop',
  rating: 4.8,
  bhikshuk: item.b || 0,
  tapasvini: item.t || 0,
  children: item.c || 0,
  totalMembers: item.tot
}));
