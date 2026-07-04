import { NiwasItem } from '../types';

interface RawNashikNiwas {
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

const NASHIK_RAW_DATA: RawNashikNiwas[] = [
  // १. ता. नाशिक (Nashik Taluka) - १९ पदे
  { id: 'niwas_nashik_nashik_palse_achachalpurkar', taluka: 'नाशिक', village: 'पळसे', name: 'महानुभाव आश्रम, पळसे (अचलपूरकर बाबा)', nameEn: 'Mahanubhav Ashram, Palse (Achalpurkar Baba)', contact: 'प.पू.म.श्रीअचलपूरकर बाबा', phone: '+91 98813 48439, +91 94039 87595', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_nashik_nashik_palse_valheraj', taluka: 'नाशिक', village: 'पळसे', name: 'महानुभाव आश्रम, पळसे (वाल्हेराजबाबा गुंफेकर)', nameEn: 'Mahanubhav Ashram, Palse (Valherajbaba Gunfekar)', contact: 'प.पू.म.श्रीवाल्हेराजबाबा गुंफेकर', phone: '-', b: 1, t: 2, c: 2, tot: 5 },
  { id: 'niwas_nashik_nashik_palse_rupatai', taluka: 'नाशिक', village: 'पळसे फुलेनगर', name: 'महानुभाव आश्रम, फुलेनगर (रुपाताई विद्वांस)', nameEn: 'Mahanubhav Ashram, Phulenagar (Rupatai Vidvans)', contact: 'प.पू.त.रुपाताई विद्वांस', phone: '+91 73871 49794', b: 0, t: 1, c: 2, tot: 3 },
  { id: 'niwas_nashik_nashik_chadegaon_lasurkar', taluka: 'नाशिक', village: 'चाडेगांव', name: 'महानुभाव आश्रम, चाडेगांव (प्रभाकरदादा लासुरकर)', nameEn: 'Mahanubhav Ashram, Chadegaon (Prabhakardada Lasurkar)', contact: 'प.पू.श्रीप्रभाकरदादा लासुरकर', phone: '+91 98812 25194, +91 94039 85668', b: 2, t: 3, c: 1, tot: 6 },
  { id: 'niwas_nashik_nashik_hinganvedha_shalinitai', taluka: 'नाशिक', village: 'हिंगणवेढा', name: 'महानुभाव आश्रम, हिंगणवेढा (शालिनीताई पंजाबी)', nameEn: 'Mahanubhav Ashram, Hinganvedha (Shalinitai Punjabi)', contact: 'प.पू.त. शालिनीताई पंजाबी', phone: '+91 94039 85671', b: 0, t: 1, c: 1, tot: 2 },
  { id: 'niwas_nashik_nashik_kotamgaon_laxmitai', taluka: 'नाशिक', village: 'कोटमगांव', name: 'महानुभाव आश्रम, कोटमगांव (लक्ष्मीताई मराठे)', nameEn: 'Mahanubhav Ashram, Kotamgaon (Laxmitai Marathe)', contact: 'प.पू.त. लक्ष्मीताई मराठे', phone: '+91 99224 25563', b: 0, t: 2, c: 0, tot: 2 },
  { id: 'niwas_nashik_nashik_kotamgaon_ranjanabai', taluka: 'नाशिक', village: 'कोटमगांव', name: 'महानुभाव आश्रम, कोटमगांव (रंजनाबाई)', nameEn: 'Mahanubhav Ashram, Kotamgaon (Ranjanabai)', contact: 'प.पू.त. रंजनाबाई', phone: '-', b: 0, t: 1, c: 0, tot: 1 },
  { id: 'niwas_nashik_nashik_adgaon_sukinekar', taluka: 'नाशिक', village: 'आडगांव', name: 'महानुभाव आश्रम, आडगांव (दत्तराजदादा सुकिनेकर)', nameEn: 'Mahanubhav Ashram, Adgaon (Dattarajdada Sukinekar)', contact: 'प.पू.श्रीदत्तराजदादा सुकिनेकर', phone: '+91 95612 83993, +91 98504 76313', b: 1, t: 1, c: 2, tot: 4 },
  { id: 'niwas_nashik_nashik_adgaon_bidker', taluka: 'नाशिक', village: 'आडगांव मेडिकल फाटा', name: 'महानुभाव आश्रम, आडगांव मेडिकल फाटा (परसराजबाबा बिडकर)', nameEn: 'Mahanubhav Ashram, Adgaon Medical Phata (Parasrajbaba Bidkar)', contact: 'प.पू.म.श्रीपरसराजबाबा बिडकर', phone: '+91 94039 85664', b: 2, t: 1, c: 0, tot: 3, loc: 'आडगांव मेडिकल फाटा, जैन ऑटो-मोबाईल शेजारी, चौरंगी स्थान, नाशिक' },
  { id: 'niwas_nashik_nashik_panchavati_sthan', taluka: 'नाशिक', village: 'पंचवटी', name: 'पंचवटी स्थान, नाशिक', nameEn: 'Panchavati Sthan, Nashik', contact: 'व्यवस्थापक', phone: '-', b: 2, t: 0, c: 0, tot: 2 },
  { id: 'niwas_nashik_nashik_gangapur_marathe', taluka: 'नाशिक', village: 'गंगापूर स्थान', name: 'महानुभाव आश्रम, गंगापूर स्थान (कृष्णराजबाबा मराठे)', nameEn: 'Mahanubhav Ashram, Gangapur Sthan (Krishnarajbaba Marathe)', contact: 'प.पू.म.श्रीकृष्णराजबाबा मराठे', phone: '+91 94217 92681', b: 2, t: 4, c: 3, tot: 9 },
  { id: 'niwas_nashik_nashik_gangapur_lonarkar1', taluka: 'नाशिक', village: 'गंगापूर स्थान', name: 'महानुभाव आश्रम, गंगापूर (बाळूराजबाबा लोणारकर)', nameEn: 'Mahanubhav Ashram, Gangapur (Balurajbaba Lonarkar)', contact: 'प.पू.म.श्रीबाळूराजबाबा लोणारकर', phone: '+91 99602 90543, +91 94052 75607', b: 2, t: 3, c: 3, tot: 8 },
  { id: 'niwas_nashik_nashik_gangapur_lonarkar2', taluka: 'नाशिक', village: 'गंगापूर स्थान', name: 'महानुभाव आश्रम, गंगापूर (बाळकृष्णदादा लोणारकर)', nameEn: 'Mahanubhav Ashram, Gangapur (Balkrishnada Lonarkar)', contact: 'प.पू.म.श्रीबाळकृष्णदादा लोणारकर', phone: '+91 94052 75615', b: 1, t: 4, c: 1, tot: 6 },
  { id: 'niwas_nashik_nashik_gangapur_kolhekar', taluka: 'नाशिक', village: 'गंगापूर स्थान', name: 'महानुभाव आश्रम, गंगापूर (कस्तुराबाई कोल्हेकर)', nameEn: 'Mahanubhav Ashram, Gangapur (Kasturabai Kolhekar)', contact: 'प.पू.त. कस्तुराबाई कोल्हेकर', phone: '+91 82754 68261', b: 1, t: 2, c: 1, tot: 4 },
  { id: 'niwas_nashik_nashik_nanegaon_jamodekar', taluka: 'नाशिक', village: 'नानेगांव', name: 'महानुभाव आश्रम, नानेगांव (सुनिताताई जामोदेकर)', nameEn: 'Mahanubhav Ashram, Nanegaon (Sunitatai Jamodekar)', contact: 'प.पू.सुनिताताई जामोदेकर', phone: '+91 94039 85659, +91 94038 29996', b: 1, t: 3, c: 1, tot: 5 },
  { id: 'niwas_nashik_nashik_chehadi_punjabi', taluka: 'नाशिक', village: 'चेहडी', name: 'महानुभाव आश्रम, चेहडी (बालीताई पंजाबी)', nameEn: 'Mahanubhav Ashram, Chehadi (Balitai Punjabi)', contact: 'प.पू.त. बालीताई पंजाबी', phone: '+91 94054 02823', b: 0, t: 2, c: 0, tot: 2, loc: 'चेहडी : जकात नाक्याजवळ, नाशिक' },
  { id: 'niwas_nashik_nashik_belsagavhan_bidker', taluka: 'नाशिक', village: 'बेलसगव्हाण', name: 'महानुभाव आश्रम, बेलसगव्हाण (दादेराजबाबा बिडकर)', nameEn: 'Mahanubhav Ashram, Belsagavhan (Daderajbaba Bidkar)', contact: 'प.पू.प.दादेराजबाबा बिडकर', phone: '+91 94054 03344', b: 2, t: 3, c: 2, tot: 7 },
  { id: 'niwas_nashik_nashik_girnare_kothi', taluka: 'नाशिक', village: 'गिरणारे', name: 'महानुभाव आश्रम, गिरणारे (चक्रपाणीबाबा कोठी)', nameEn: 'Mahanubhav Ashram, Girnare (Chakrapanibaba Kothi)', contact: 'प.पू.म. श्रीचक्रपाणीबाबा कोठी', phone: '+91 94039 85685, +91 93702 00817', b: 3, t: 3, c: 3, tot: 9 },
  { id: 'niwas_nashik_nashik_ladacchi_dasmuni', taluka: 'नाशिक', village: 'लाडच्ची', name: 'श्रीदत्तमंदिर, लाडच्ची (दासमुनी)', nameEn: 'Shree Dattamandir, Ladacchi (Dasmuni)', contact: 'प.पू.श्रीदासमुनी', phone: '+91 97613 12914', b: 2, t: 1, c: 0, tot: 3 },
  { id: 'niwas_nashik_nashik_shinde_arunabai', taluka: 'नाशिक', village: 'शिंदे', name: 'महानुभाव आश्रम, शिंदे (अरुणाबाई)', nameEn: 'Mahanubhav Ashram, Shinde (Arunabai)', contact: 'अरुणाबाई', phone: '-', b: 0, t: 2, c: 0, tot: 2 },
  { id: 'niwas_nashik_nashik_shinde_raulashram', taluka: 'नाशिक', village: 'शिंदे', name: 'राऊळआश्रम, शिंदे (कृष्णराजबाबा)', nameEn: 'Raulashram, Shinde (Krishnarajbaba)', contact: 'प.पू.म.श्रीकृष्णराजबाबा', phone: '+91 94052 74848, +91 94039 85239', b: 1, t: 9, c: 6, tot: 16 },
  { id: 'niwas_nashik_nashik_satpur_shastri', taluka: 'नाशिक', village: 'सातपूर', name: 'महानुभाव आश्रम, सातपूर (सायराजबाबा शास्त्री)', nameEn: 'Mahanubhav Ashram, Satpur (Sayrajbaba Shastri)', contact: 'प.पू.म.श्रीसायराजबाबा शास्त्री', phone: '+91 98501 31527, +91 96737 60007', b: 1, t: 3, c: 0, tot: 4, loc: 'सातपूर : शिवाजीनगर, नाशिक' },
  { id: 'niwas_nashik_nashik_morwadi_saral', taluka: 'नाशिक', village: 'मोरवाडी', name: 'महानुभाव आश्रम, मोरवाडी (सुशिलाबाई सरळ)', nameEn: 'Mahanubhav Ashram, Morwadi (Sushilabai Saral)', contact: 'प.पू.त. सुशिलाबाई सरळ', phone: '+91 94052 75275, +91 94052 75927', b: 0, t: 7, c: 2, tot: 9 },
  { id: 'niwas_nashik_nashik_cidco_pusedkar', taluka: 'नाशिक', village: 'सिडको', name: 'श्रीकृष्ण ज्ञान मंदिर, सिडको (संतराजबाबा पुसेदकर)', nameEn: 'Shree Krishna Gyan Mandir, Cidco (Santrajbaba Pusedkar)', contact: 'प.पू.म. श्रीसंतराजबाबा पुसेदकर', phone: '+91 94203 61066, +91 94208 29722', b: 2, t: 2, c: 0, tot: 4, loc: 'श्रीकृष्ण ज्ञान मंदिर : गणेश चौक सिडको, नाशिक' },
  { id: 'niwas_nashik_nashik_talegaon_gyatbai', taluka: 'नाशिक', village: 'तळेगांव', name: 'महानुभाव आश्रम, तळेगांव (ज्ञातबाई)', nameEn: 'Mahanubhav Ashram, Talegaon (Gyatbai)', contact: 'प.पू. त. ज्ञातबाई', phone: '+91 95526 96707', b: 0, t: 1, c: 0, tot: 1, loc: 'तळेगांव : दातेमळा, नाशिक' },
  { id: 'niwas_nashik_nashik_sayyad_pimpri_mural', taluka: 'नाशिक', village: 'सय्यद पिंप्री', name: 'महानुभाव आश्रम, सय्यद पिंप्री (श्रीमुरारमल्लबाबा)', nameEn: 'Mahanubhav Ashram, Sayyad Pimpri (Shrimurarmallbaba)', contact: 'प.पू.म.श्रीमुरारमल्लबाबा', phone: '+91 96376 26730, +91 94039 85665', b: 2, t: 4, c: 2, tot: 8 },
  { id: 'niwas_nashik_nashik_sayyad_pimpri_meharkar', taluka: 'नाशिक', village: 'सय्यद पिंप्री', name: 'महानुभाव आश्रम, सय्यद पिंप्री (सुनीलदादा मेहरकर)', nameEn: 'Mahanubhav Ashram, Sayyad Pimpri (Sunildada Meharkar)', contact: 'प.पू.श्रीसुनीलदादा मेहरकर', phone: '+91 84079 14871, +91 94052 74518', b: 3, t: 1, c: 1, tot: 5 },
  { id: 'niwas_nashik_nashik_karvandewadi_khamnikar', taluka: 'नाशिक', village: 'करवंडेवाडी', name: 'महानुभाव आश्रम, करवंडेवाडी (महेंद्र खामनीकर)', nameEn: 'Mahanubhav Ashram, Karvandewadi (Mahendra Khamnikar)', contact: 'प.पू. महेंद्र खामनीकर', phone: '+91 99709 41986', b: 3, t: 2, c: 0, tot: 5 },

  // २. ता. इगतपुरी (Igatpuri Taluka) - ३ पदे
  { id: 'niwas_nashik_igatpuri_ghoti_pusedkar', taluka: 'इगतपुरी', village: 'घोटी', name: 'महानुभाव आश्रम, घोटी (पुसेदकरबाबा)', nameEn: 'Mahanubhav Ashram, Ghoti (Pusedkarbaba)', contact: 'प.म. श्रीपुसेदकरबाबा', phone: '+91 94208 31721, +91 94039 85663', b: 1, t: 6, c: 2, tot: 9 },
  { id: 'niwas_nashik_igatpuri_nandgaon_ankulnerkar', taluka: 'इगतपुरी', village: 'नांदगांव बंधारा', name: 'महानुभाव आश्रम, नांदगांव बंधारा (ओंकारव्यासबाबा)', nameEn: 'Mahanubhav Ashram, Nandgaon Bandhara (Omkarvyasbaba)', contact: 'प.पू.म. श्रीओंकारव्यासबाबा अंकुळनेरकर', phone: '+91 96654 67844, +91 94216 06697', b: 1, t: 6, c: 5, tot: 12 },
  { id: 'niwas_nashik_igatpuri_mukane_murar', taluka: 'इगतपुरी', village: 'मुकने', name: 'महानुभाव आश्रम, मुकने (श्रीमुरारमल्लबाबा)', nameEn: 'Mahanubhav Ashram, Mukane (Shrimurarmallbaba)', contact: 'प.पू.म. श्रीमुरारमल्लबाबा', phone: '-', b: 1, t: 0, c: 0, tot: 1 },

  // ३. ता. त्र्यंबकेश्वर (Trimbakeshwar Taluka) - २ पदे
  { id: 'niwas_nashik_trimbak_anjaner_meharkar', taluka: 'त्र्यंबकेश्वर', village: 'अंजनेरी', name: 'महानुभाव आश्रम, अंजनेरी (आकाशमुनी मेहरकर)', nameEn: 'Mahanubhav Ashram, Anjaneri (Akashmuni Meharkar)', contact: 'प.पू.श्रीआकाशमुनी मेहरकर', phone: '+91 96573 33501, +91 94052 74519', b: 2, t: 0, c: 5, tot: 7 },
  { id: 'niwas_nashik_trimbak_dalpatpur_gunvant', taluka: 'त्र्यंबकेश्वर', village: 'दलपतपूर', name: 'महानुभाव आश्रम, दलपतपूर (गुणवंतमुनी)', nameEn: 'Mahanubhav Ashram, Dalpatpur (Gunvantmuni)', contact: 'प.पू.श्रीगुणवंतमुनी', phone: '-', b: 2, t: 2, c: 0, tot: 4 },

  // ४. ता. पेठ (Peint Taluka) - १ पद
  { id: 'niwas_nashik_peint_devgaon_vikas', taluka: 'पेठ', village: 'देवगांव फाटा', name: 'महानुभाव आश्रम, देवगांव फाटा (विकासमुनी)', nameEn: 'Mahanubhav Ashram, Devgaon Phata (Vikasmuni)', contact: 'प.पू.श्रीविकासमुनी', phone: '+91 94202 31081', b: 1, t: 4, c: 0, tot: 5, loc: 'देवगांव फाटा पुलाजवळ : म.आश्रम, ता. पेठ, जि. नाशिक' },

  // ५. ता. दिंडोरी (Dindori Taluka) - ८ पदे
  { id: 'niwas_nashik_dindori_ware_kapate', taluka: 'दिंडोरी', village: 'वारे', name: 'महानुभाव आश्रम, वारे (सचिनदादा कपाटे)', nameEn: 'Mahanubhav Ashram, Ware (Sachindada Kapate)', contact: 'प.पू.श्रीसचिनदादा कपाटे', phone: '+91 94202 31081', b: 1, t: 3, c: 4, tot: 8 },
  { id: 'niwas_nashik_dindori_umrale_latabai', taluka: 'दिंडोरी', village: 'उमराळे', name: 'महानुभाव आश्रम, उमराळे (लताबाई)', nameEn: 'Mahanubhav Ashram, Umrale (Latabai)', contact: 'प.पू.त.लताबाई', phone: '-', b: 0, t: 4, c: 1, tot: 5 },
  { id: 'niwas_nashik_dindori_nilvanpada_kapate', taluka: 'दिंडोरी', village: 'निळ्वनपाडा', name: 'महानुभाव आश्रम, निळ्वनपाडा (श्रीकपाटे म.)', nameEn: 'Mahanubhav Ashram, Nilvanpada (Shreekapate M.)', contact: 'प.पू.श्रीकपाटे म.', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_nashik_dindori_talegaon_sannyashi', taluka: 'दिंडोरी', village: 'तळेगांव', name: 'महानुभाव आश्रम, तळेगांव (संतमुनी संन्याशी)', nameEn: 'Mahanubhav Ashram, Talegaon Dindori (Santmuni Sannyashi)', contact: 'प.पू.श्रीसंतमुनी संन्याशी', phone: '-', b: 1, t: 1, c: 0, tot: 2, loc: 'तळेगांव (दिंडोरी), ता. दिंडोरी, जि. नाशिक' },
  { id: 'niwas_nashik_dindori_vigdool_kapate', taluka: 'दिंडोरी', village: 'विगडोळ', name: 'महानुभाव आश्रम, विगडोळ (साधैराज कपाटे)', nameEn: 'Mahanubhav Ashram, Vigdool (Sadhairaj Kapate)', contact: 'प.पू.श्रीसाधैराज कपाटे', phone: '-', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_nashik_dindori_vigdool_aradhya', taluka: 'दिंडोरी', village: 'विगडोळ', name: 'महानुभाव आश्रम, विगडोळ (अजुनदादा आराध्य)', nameEn: 'Mahanubhav Ashram, Vigdool (Arjundada Aradhya)', contact: 'प.पू.श्रीअजुनदादा आराध्य', phone: '-', b: 1, t: 2, c: 0, tot: 3 },
  { id: 'niwas_nashik_dindori_nalwadi_chirde', taluka: 'दिंडोरी', village: 'नळवाडी', name: 'महानुभाव आश्रम, नळवाडी (कल्पनाताई चिरडे)', nameEn: 'Mahanubhav Ashram, Nalwadi (Kalpanatai Chirde)', contact: 'प.पू.त. कल्पनाताई चिरडे', phone: '-', b: 0, t: 1, c: 1, tot: 2 },
  { id: 'niwas_nashik_dindori_nalwadi_dattamandir', taluka: 'दिंडोरी', village: 'नळवाडी', name: 'श्रीदत्तमंदिर, नळवाडी', nameEn: 'Shree Dattamandir, Nalwadi', contact: 'व्यवस्थापक', phone: '-', b: 1, t: 2, c: 0, tot: 3 },
  { id: 'niwas_nashik_dindori_pipalgaon_dhum', taluka: 'दिंडोरी', village: 'पिंपळगाव धूम', name: 'महानुभाव आश्रम, पिंपळगाव धूम', nameEn: 'Mahanubhav Ashram, Pipalgaon Dhum', contact: 'व्यवस्थापक', phone: '-', b: 1, t: 1, c: 1, tot: 3 },
  { id: 'niwas_nashik_dindori_nilloli', taluka: 'दिंडोरी', village: 'निल्लोळी', name: 'महानुभाव आश्रम, निल्लोळी', nameEn: 'Mahanubhav Ashram, Nilloli', contact: 'व्यवस्थापक', phone: '-', b: 1, t: 2, c: 0, tot: 3 },

  // ६. ता. सटाणा (Satana Taluka) - १ पद
  { id: 'niwas_nashik_satana_waygaon_kapate', taluka: 'सटाणा', village: 'वायगांव', name: 'महानुभाव आश्रम, वायगांव (पुरुषोत्तमदादा कपाटे)', nameEn: 'Mahanubhav Ashram, Waygaon (Purushottamdada Kapate)', contact: 'प.पू.श्रीपुरुषोत्तमदादा कपाटे', phone: '-', b: 1, t: 1, c: 0, tot: 2 },

  // ७. ता. मालेगांव (Malegaon Taluka) - ३ पदे
  { id: 'niwas_nashik_malegaon_city_krishna', taluka: 'मालेगांव', village: 'मालेगाव शहर', name: 'श्रीकृष्ण मंदिर तहसिलदार पट्टा, मालेगाव', nameEn: 'Shree Krishna Mandir Tahsildar Patta, Malegaon', contact: 'व्यवस्थापक', phone: '-', b: 1, t: 1, c: 2, tot: 4 },
  { id: 'niwas_nashik_malegaon_sendrane_ashtikar', taluka: 'मालेगांव', village: 'सेंद्राणे', name: 'महानुभाव आश्रम, सेंद्राणे (आष्टीकरबाबा)', nameEn: 'Mahanubhav Ashram, Sendrane (Ashtikarbaba)', contact: 'प.पू.म.आष्टीकरबाबा', phone: '+91 94052 75594', b: 3, t: 4, c: 2, tot: 9 },
  { id: 'niwas_nashik_malegaon_kalwadi_ramchandra', taluka: 'मालेगांव', village: 'कळवाडी', name: 'महानुभाव आश्रम, कळवाडी (श्रीरामचंद्रबाबा)', nameEn: 'Mahanubhav Ashram, Kalwadi (Shreeramchandrababa)', contact: 'प.पू. म. श्रीरामचंद्रबाबा', phone: '-', b: 1, t: 3, c: 1, tot: 5 },

  // ८. ता. नांदगांव (Nandgaon Taluka) - ९ पदे
  { id: 'niwas_nashik_nandgaon_panewadi_bidker', taluka: 'नांदगांव', village: 'पानेवाडी', name: 'महानुभाव आश्रम, पानेवाडी (अनंतराजबाबा बिडकर)', nameEn: 'Mahanubhav Ashram, Panewadi (Anantrajbaba Bidkar)', contact: 'प.पू.म. श्रीअनंतराजबाबा बिडकर', phone: '+91 94039 87959', b: 3, t: 4, c: 5, tot: 12 },
  { id: 'niwas_nashik_nandgaon_panewadi_mandir', taluka: 'नांदगांव', village: 'पानेवाडी', name: 'श्रीकृष्ण मंदिर, पानेवाडी', nameEn: 'Shree Krishna Mandir, Panewadi', contact: 'व्यवस्थापक', phone: '-', b: 1, t: 3, c: 0, tot: 4 },
  { id: 'niwas_nashik_nandgaon_nagarchowki_chabitai', taluka: 'नांदगांव', village: 'नगरचौकी', name: 'महानुभाव आश्रम, नगरचौकी मनमाड (छबीताई पंजाबी)', nameEn: 'Mahanubhav Ashram, Nagarchowki Manmad (Chabitai Punjabi)', contact: 'प.पू. छबीताई पंजाबी', phone: '+91 82758 94041, +91 82758 94042', b: 1, t: 11, c: 0, tot: 12, loc: 'नगरचौकी : मनमाड, ता. नांदगांव, जि. नाशिक' },
  { id: 'niwas_nashik_nandgaon_nagarchowki_mandal', taluka: 'नांदगांव', village: 'नगरचौकी', name: 'संत मंडळ, नगरचौकी', nameEn: 'Sant Mandal, Nagarchowki', contact: 'संत मंडळ', phone: '-', b: 0, t: 2, c: 0, tot: 2 },
  { id: 'niwas_nashik_nandgaon_hiswal_palimkar', taluka: 'नांदगांव', village: 'हिसवळ', name: 'महानुभाव आश्रम, हिसवळ (श्रीदत्तराजबाबा पालीमकर)', nameEn: 'Mahanubhav Ashram, Hiswal (Shreedattarajbaba Palimkar)', contact: 'प.पू. म. श्रीदत्तराजबाबा पालीमकर', phone: '+91 98815 28584, +91 94054 01212', b: 1, t: 2, c: 3, tot: 6 },
  { id: 'niwas_nashik_nandgaon_gangadhari_punjabi', taluka: 'नांदगांव', village: 'गंगाधरी', name: 'महानुभाव आश्रम, गंगाधरी (बलदेवराज पंजाबी)', nameEn: 'Mahanubhav Ashram, Gangadhari (Baldevraj Punjabi)', contact: 'प.पू.श्रीबलदेवराज पंजाबी', phone: '+91 98816 70385', b: 2, t: 1, c: 0, tot: 3 },
  { id: 'niwas_nashik_nandgaon_dhyan_mandir', taluka: 'नांदगांव', village: 'नांदगांव', name: 'श्रीकृष्ण ध्यान मंदिर, नांदगांव', nameEn: 'Shree Krishna Dhyan Mandir, Nandgaon', contact: 'व्यवस्थापक', phone: '-', b: 0, t: 1, c: 0, tot: 1 },
  { id: 'niwas_nashik_nandgaon_jalgaon_landge', taluka: 'नांदगांव', village: 'जळगांव बु ।।', name: 'महानुभाव आश्रम, जळगांव बु ।। (महेंद्रमुनी लांडगे)', nameEn: 'Mahanubhav Ashram, Jalgaon Budruk (Mahendramuni Landge)', contact: 'प.पू.महेंद्रमुनी लांडगे', phone: '-', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_nashik_nandgaon_mandavali_rajudada', taluka: 'नांदगांव', village: 'मांडवळी', name: 'महानुभाव आश्रम, मांडवळी (राजूदादा म.)', nameEn: 'Mahanubhav Ashram, Mandavali (Rajudada M.)', contact: 'प.पू.श्रीराजूदादा म.', phone: '+91 74999 37024', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_nashik_nandgaon_ekuli_bidker', taluka: 'नांदगांव', village: 'एकुळी', name: 'महानुभाव आश्रम, एकुळी (एकाबाई बिडकर)', nameEn: 'Mahanubhav Ashram, Ekuli (Ekabai Bidkar)', contact: 'प.पू.त. एकाबाई बिडकर', phone: '+91 93227 97565', b: 0, t: 1, c: 1, tot: 2 },
  { id: 'niwas_nashik_nandgaon_manmad_garder', taluka: 'नांदगांव', village: 'मनमाड', name: 'मनमाड गर्डर शॉप स्थान', nameEn: 'Manmad Garder Shop Sthan', contact: 'संतमंडळी', phone: '-', b: 0, t: 2, c: 0, tot: 2, loc: 'मनमाड : गर्डर शॉप, ता. नांदगांव, जि. नाशिक' },

  // ९. ता. चांदवड (Chandwad Taluka) - ३ पदे
  { id: 'niwas_nashik_chandwad_kalkhode_premmuni', taluka: 'चांदवड', village: 'काळखोडे फाटा', name: 'महानुभाव आश्रम, काळखोडे फाटा (प्रेममुनी म.)', nameEn: 'Mahanubhav Ashram, Kalkhode Phata (Premmuni M.)', contact: 'प.पू.श्रीप्रेममुनी म.', phone: '+91 94033 83004', b: 1, t: 8, c: 3, tot: 12 },
  { id: 'niwas_nashik_chandwad_dedgaon_walunjkar', taluka: 'चांदवड', village: 'देडगांव', name: 'महानुभाव आश्रम, देडगांव (वाळुंजकर बाबा)', nameEn: 'Mahanubhav Ashram, Dedgaon (Walunjkar Baba)', contact: 'प.पू.म.श्रीवाळुंजकर बाबा (जुने)', phone: '+91 89572 75701', b: 1, t: 3, c: 0, tot: 4 },
  { id: 'niwas_nashik_chandwad_shingve_palimkar', taluka: 'चांदवड', village: 'दत्ताचे शिंगवे', name: 'महानुभाव आश्रम, दत्ताचे शिंगवे (दत्तराज पालिमकर)', nameEn: 'Mahanubhav Ashram, Dattache Shingve (Dattaraj Palimkar)', contact: 'प.पू.श्रीदत्तराज पालिमकर', phone: '+91 93735 12343, +91 73871 22029', b: 2, t: 2, c: 2, tot: 6 },

  // १०. ता. येवला (Yeola Taluka) - १५ पदे
  { id: 'niwas_nashik_yeola_valadgaon_amrute', taluka: 'येवला', village: 'वळदगांव', name: 'महानुभाव आश्रम, वळदगांव (भाविकराजबाबा अमृते)', nameEn: 'Mahanubhav Ashram, Valadgaon (Bhavikrajbaba Amrute)', contact: 'प.पू.म.भाविकराजबाबा अमृते', phone: '+91 92739 36854, +91 96073 29269', b: 4, t: 2, c: 1, tot: 7, loc: 'वळदगांव (सिरजगांव लौकी), ता. येवला, जि. नाशिक' },
  { id: 'niwas_nashik_yeola_valadgaon_sumantai', taluka: 'येवला', village: 'वळदगांव', name: 'महानुभाव आश्रम, वळदगांव (सुमनताई)', nameEn: 'Mahanubhav Ashram, Valadgaon (Sumantai)', contact: 'प.पू.त.सुमनताई', phone: '-', b: 0, t: 2, c: 0, tot: 2 },
  { id: 'niwas_nashik_yeola_valadgaon_mandal', taluka: 'येवला', village: 'वळदगांव', name: 'संतमंडळी, वळदगांव', nameEn: 'Santmandali, Valadgaon', contact: 'संतमंडळी', phone: '-', b: 5, t: 0, c: 0, tot: 5 },
  { id: 'niwas_nashik_yeola_deshmane_kapate', taluka: 'येवला', village: 'देशमाने', name: 'महानुभाव आश्रम, देशमाने (माधैराजबाबा कपाटे)', nameEn: 'Mahanubhav Ashram, Deshmane (Madhairajbaba Kapate)', contact: 'प.पू.म. श्रीमाधैराजबाबा कपाटे', phone: '+91 76203 76395, +91 94039 85679', b: 1, t: 1, c: 4, tot: 6 },
  { id: 'niwas_nashik_yeola_city_salkar', taluka: 'येवला', village: 'येवला शहर', name: 'महानुभाव आश्रम, येवला शहर (शोभाताई साळकर)', nameEn: 'Mahanubhav Ashram, Yeola City (Shobhatai Salkar)', contact: 'प.पू.त.शोभाताई साळकर', phone: '+91 79725 59751, +91 94054 03025', b: 0, t: 3, c: 2, tot: 5 },
  { id: 'niwas_nashik_yeola_andarsul_punjabi', taluka: 'येवला', village: 'अंदरसुळ', name: 'महानुभाव आश्रम, अंदरसुळ (नानोदा पंजाबी)', nameEn: 'Mahanubhav Ashram, Andarsul (Nanoda Punjabi)', contact: 'प.पू.श्रीनानोदा पंजाबी', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_nashik_yeola_saygaon_railkar', taluka: 'येवला', village: 'सायगांव फाटा', name: 'महानुभाव आश्रम, सायगांव फाटा (रैलकर बाबा)', nameEn: 'Mahanubhav Ashram, Saygaon Phata (Railkar Baba)', contact: 'प.पू.श्रीरैलकर बाबा', phone: '+91 94054 02825, +91 95032 54186', b: 1, t: 1, c: 1, tot: 3 },
  { id: 'niwas_nashik_yeola_saygaon_gaurav', taluka: 'येवला', village: 'सायगांव', name: 'महानुभाव आश्रम, सायगांव (गौरवमुनी)', nameEn: 'Mahanubhav Ashram, Saygaon (Gauravmuni)', contact: 'प.पू. श्रीगौरवमुनी', phone: '-', b: 1, t: 1, c: 1, tot: 3 },
  { id: 'niwas_nashik_yeola_nagarsul_shevlikar', taluka: 'येवला', village: 'नगरसूल', name: 'महानुभाव आश्रम, नगरसूल (ज्योती शेवलीकर)', nameEn: 'Mahanubhav Ashram, Nagarsul (Jyoti Shevalikar)', contact: 'प.पू. त. ज्योती शेवलीकर', phone: '-', b: 0, t: 2, c: 0, tot: 2 },
  { id: 'niwas_nashik_yeola_rajapur_marathe', taluka: 'येवला', village: 'राजापूर', name: 'महानुभाव आश्रम, राजापूर (शिवव्यास मराठे)', nameEn: 'Mahanubhav Ashram, Rajapur (Shivvyas Marathe)', contact: 'प.पू.श्रीशिवव्यास मराठे', phone: '+91 98500 76194', b: 1, t: 2, c: 1, tot: 4, loc: 'राजापूर : नांदगाव येवला रोड, ता. येवला, जि. नाशिक' },
  { id: 'niwas_nashik_yeola_mukhed_railkar', taluka: 'येवला', village: 'मुखेड', name: 'महानुभाव आश्रम, मुखेड (रेलकरबाई)', nameEn: 'Mahanubhav Ashram, Mukhed (Railkarbai)', contact: 'प.पू.त. रेलकरबाई', phone: '+91 99604 96093', b: 0, t: 1, c: 2, tot: 3 },
  { id: 'niwas_nashik_yeola_nagad_arjundada', taluka: 'येवला', village: 'नागडं', name: 'महानुभाव आश्रम, नागडं (अर्जुनदादा)', nameEn: 'Mahanubhav Ashram, Nagad (Arjundada)', contact: 'प.पू. श्रीअर्जुनदादा', phone: '-', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_nashik_yeola_bhatgaon_bhingarkar', taluka: 'येवला', village: 'भाटगांव', name: 'महानुभाव आश्रम, भाटगांव (बबनराजबाबा भिंगारकर)', nameEn: 'Mahanubhav Ashram, Bhatgaon (Babanrajbaba Bhingarkar)', contact: 'प.पू. श्रीबबनराजबाबा भिंगारकर', phone: '+91 82758 94319', b: 3, t: 0, c: 1, tot: 4, loc: 'भाटगांव : (सावरगांव), ता. येवला, जि. नाशिक' },
  { id: 'niwas_nashik_yeola_neurgaon_mandal', taluka: 'येवला', village: 'नेऊरगांव', name: 'संतमंडळी, नेऊरगांव', nameEn: 'Santmandali, Neurgaon', contact: 'संतमंडळी', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_nashik_yeola_pimpalkhute_marathe', taluka: 'येवला', village: 'पिंपळखुटे', name: 'महानुभाव आश्रम, पिंपळखुटे (श्रीदत्तराजबाबा)', nameEn: 'Mahanubhav Ashram, Pimpalkhute (Shreedattarajbaba)', contact: '१) प.पू.म. श्रीदत्तराजबाबा', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_nashik_yeola_pimpalkhute_mandal', taluka: 'येवला', village: 'पिंपळखुटे', name: 'संतमंडळी, पिंपळखुटे', nameEn: 'Santmandali, Pimpalkhute', contact: '२) संतमंडळी', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_nashik_yeola_angangaon', taluka: 'येवला', village: 'अंगणगांव', name: 'महानुभाव आश्रम, अंगणगांव', nameEn: 'Mahanubhav Ashram, Angangaon', contact: 'संतमंडळी', phone: '-', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_nashik_yeola_goushala_sadhumuni', taluka: 'येवला', village: 'येवला शहर', name: 'महानुभाव आश्रम, विंचूररोड (साधुमुनी म.)', nameEn: 'Mahanubhav Ashram, Vinchur Road (Sadhumuni M.)', contact: 'प.पू.श्रीसाधुमुनी म.', phone: '+91 74995 61867', b: 1, t: 2, c: 0, tot: 3, loc: 'येवला शहर : विंचूररोड, गौशाला गेट समोर, ता. येवला, जि. नाशिक' },

  // ११. ता. निफाड (Niphad Taluka) - २० पदे
  { id: 'niwas_nashik_niphad_chandori_ankulnerkar', taluka: 'निफाड', village: 'चांदोरी', name: 'महानुभाव आश्रम, चांदोरी (अंकुळनेरकर बाबा)', nameEn: 'Mahanubhav Ashram, Chandori (Ankulnerkar Baba)', contact: 'प.पू.म. श्रीअंकुळनेरकर बाबा', phone: '+91 99238 32310, +91 94052 74511', b: 4, t: 10, c: 6, tot: 20 },
  { id: 'niwas_nashik_niphad_karajgaon_dolsakar', taluka: 'निफाड', village: 'करजगांव', name: 'महानुभाव आश्रम, करजगांव (डोळसकरबाबा म.)', nameEn: 'Mahanubhav Ashram, Karajgaon (Dolsakarbaba M.)', contact: 'प.प.म. श्रीडोळसकरबाबा म.', phone: '+91 96572 04018, +91 96044 80650', b: 2, t: 5, c: 5, tot: 12 },
  { id: 'niwas_nashik_niphad_ugaon_ramchandra', taluka: 'निफाड', village: 'उगांव', name: 'महानुभाव आश्रम, उगांव (श्रीरामचंद्रबाबा)', nameEn: 'Mahanubhav Ashram, Ugaon (Shreeramchandrababa)', contact: 'प.पू.म. श्रीरामचंद्रबाबा', phone: '+91 94235 57063', b: 1, t: 2, c: 1, tot: 4 },
  { id: 'niwas_nashik_niphad_shirwade_mandir', taluka: 'निफाड', village: 'शिरवाडे', name: 'श्रीकृष्ण मंदिर, शिरवाडे', nameEn: 'Shree Krishna Mandir, Shirwade', contact: 'अ) श्रीकृष्ण मंदिर', phone: '-', b: 1, t: 0, c: 0, tot: 1, loc: 'शिरवाडे : वणी, ता. निफाड, जि. नाशिक' },
  { id: 'niwas_nashik_niphad_shirwade_jaitraj', taluka: 'निफाड', village: 'शिरवाडे', name: 'महानुभाव आश्रम, शिरवाडे (श्रीजैतराजदादा)', nameEn: 'Mahanubhav Ashram, Shirwade (Shreejaitrajdada)', contact: 'ब) प.पू. श्रीजैतराजदादा', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_nashik_niphad_chitegaon_draupadabai', taluka: 'निफाड', village: 'चितेगांव', name: 'महानुभाव आश्रम, चितेगांव (द्रौपदाबाई पंजाबी)', nameEn: 'Mahanubhav Ashram, Chitegaon (Draupadabai Punjabi)', contact: 'प.पू.म. द्रौपदाबाई पंजाबी', phone: '+91 94054 03635', b: 0, t: 2, c: 2, tot: 4 },
  { id: 'niwas_nashik_niphad_chitegaon_hivarkhedkar', taluka: 'निफाड', village: 'चितेगांव फाटा', name: 'महानुभाव आश्रम, चितेगांव फाटा (सुशिलाबाई हिवरखेडकर)', nameEn: 'Mahanubhav Ashram, Chitegaon Phata (Sushilabai Hivarkhedkar)', contact: 'प.पू.त. सुशिलाबाई हिवरखेडकर', phone: '+91 94039 86473, +91 86059 93158', b: 1, t: 4, c: 3, tot: 8 },
  { id: 'niwas_nashik_niphad_kherwadi_tarabai', taluka: 'निफाड', village: 'खेरवाडी', name: 'महानुभाव आश्रम, खेरवाडी (ताराबाई)', nameEn: 'Mahanubhav Ashram, Kherwadi (Tarabai)', contact: 'प.पू.त. ताराबाई', phone: '+91 94217 87871, +91 78877 79274', b: 1, t: 5, c: 0, tot: 6 },
  { id: 'niwas_nashik_niphad_sukene_sukinekar', taluka: 'निफाड', village: 'सुकिने', name: 'महानुभाव आश्रम, सुकिने (श्रीसुकिनेकरबाबा)', nameEn: 'Mahanubhav Ashram, Sukene (Shreesukinekarbaba)', contact: '१. प.पू. म. श्रीसुकिनेकरबाबा', phone: '+91 86055 67894, +91 94052 75493', b: 2, t: 1, c: 0, tot: 3 },
  { id: 'niwas_nashik_niphad_sukene_govindraj', taluka: 'निफाड', village: 'सुकिने', name: 'महानुभाव आश्रम, सुकिने (श्रीगोविंदराज शास्त्री)', nameEn: 'Mahanubhav Ashram, Sukene (Shreegovindraj Shastri)', contact: '२. प.पू.म. श्रीगोविंदराज शास्त्री', phone: '+91 87884 46589', b: 3, t: 1, c: 0, tot: 4 },
  { id: 'niwas_nashik_niphad_sukene_balkrishna', taluka: 'निफाड', village: 'सुकिने', name: 'महानुभाव आश्रम, सुकिने (श्रीबाळकृष्णदादा)', nameEn: 'Mahanubhav Ashram, Sukene (Shreebalkrishnada)', contact: '३. प.पू.म.श्रीबाळकृष्णदादा', phone: '+91 99212 18218', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_nashik_niphad_sukene_arjundada', taluka: 'निफाड', village: 'सुकिने', name: 'महानुभाव आश्रम, सुकिने (श्रीअर्जुनदादा)', nameEn: 'Mahanubhav Ashram, Sukene (Shreearjundada)', contact: '४. प.पू.श्रीअर्जुनदादा', phone: '+91 98225 48813', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_nashik_niphad_sukene_subhadrabai', taluka: 'निफाड', village: 'सुकिने', name: 'महानुभाव आश्रम, सुकिने (सुभद्राबाई)', nameEn: 'Mahanubhav Ashram, Sukene (Subhadrabai)', contact: '५. त.सुभद्राबाई', phone: '-', b: 0, t: 2, c: 1, tot: 3 },
  { id: 'niwas_nashik_niphad_sukene_rajdhar', taluka: 'निफाड', village: 'सुकिने', name: 'महानुभाव आश्रम, सुकिने (श्रीराजधरदादा)', nameEn: 'Mahanubhav Ashram, Sukene (Shreerajdhardada)', contact: '६. प.पू.श्रीराजधरदादा', phone: '-', b: 2, t: 0, c: 0, tot: 2 },
  { id: 'niwas_nashik_niphad_niphadsthan_chirde', taluka: 'निफाड', village: 'निफाड', name: 'निफाडस्थान (श्रीचिरडेबाबा)', nameEn: 'Niphad Sthan (Shreechirdebaba)', contact: 'प.पू.म. श्रीचिरडेबाबा', phone: '-', b: 1, t: 0, c: 1, tot: 2, loc: 'निफाडस्थान : निफाड, ता. निफाड, जि. नाशिक' },
  { id: 'niwas_nashik_niphad_nandur_kapate', taluka: 'निफाड', village: 'नांदूर मधमेश्वर', name: 'महानुभाव आश्रम, नांदूर मधमेश्वर (श्रीकृष्णोव्हास कपाटे)', nameEn: 'Mahanubhav Ashram, Nandur Madhameshwar (Shreekrishnovas Kapate)', contact: 'प.पू.म.श्रीकृष्णोव्हास कपाटे', phone: '+91 94052 75429, +91 96893 55729', b: 2, t: 2, c: 3, tot: 7 },
  { id: 'niwas_nashik_niphad_kanalas_sthan', taluka: 'निफाड', village: 'कानळस', name: 'कानळस स्थान, निफाड', nameEn: 'Kanalas Sthan, Niphad', contact: 'व्यवस्थापक', phone: '-', b: 2, t: 3, c: 0, tot: 5 },
  { id: 'niwas_nashik_niphad_kundewadi', taluka: 'निफाड', village: 'कुंदेवाडी', name: 'महानुभाव आश्रम, कुंदेवाडी', nameEn: 'Mahanubhav Ashram, Kundewadi', contact: 'व्यवस्थापक', phone: '+91 94039 85670', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_nashik_niphad_vinchur_bhingarkar', taluka: 'निफाड', village: 'विंचूर', name: 'महानुभाव आश्रम, विंचूर (श्रीभिंगारकरबाबा)', nameEn: 'Mahanubhav Ashram, Vinchur (Shreebhingarkarbaba)', contact: 'प.पू.म. श्रीभिंगारकरबाबा', phone: '+91 98814 34053, +91 78208 94830', b: 1, t: 5, c: 4, tot: 10 },
  { id: 'niwas_nashik_niphad_bharavas_mayankraj', taluka: 'निफाड', village: 'भरवसफाटा', name: 'महानुभाव आश्रम, भरवसफाटा (श्रीमयंकराजबाबा)', nameEn: 'Mahanubhav Ashram, Bharavas Phata (Shreemayankrajbaba)', contact: 'प.पू.म.श्रीमयंकराजबाबा', phone: '+91 88886 63593, +91 96893 57650', b: 3, t: 9, c: 5, tot: 17 },
  { id: 'niwas_nashik_niphad_lasalgaon_bidker', taluka: 'निफाड', village: 'लासलगांव', name: 'महानुभाव आश्रम, लासलगांव (पुष्पाताई बिडकर)', nameEn: 'Mahanubhav Ashram, Lasalgaon (Pushpatai Bidkar)', contact: 'प.पू.त.पुष्पाताई बिडकर', phone: '-', b: 0, t: 2, c: 0, tot: 2 },
  { id: 'niwas_nashik_niphad_khangaon_lonarkar', taluka: 'निफाड', village: 'खानगांव', name: 'महानुभाव आश्रम, खानगांव (श्रीभगवानबाबा लोणारकर)', nameEn: 'Mahanubhav Ashram, Khangaon (Shreebhagwanbaba Lonarkar)', contact: 'प.पू.म.श्रीभगवानबाबा लोणारकर', phone: '-', b: 0, t: 2, c: 0, tot: 2 },
  { id: 'niwas_nashik_niphad_hivarkheda_khamnikar', taluka: 'निफाड', village: 'हिवरखेडा', name: 'महानुभाव आश्रम, हिवरखेडा (सुभद्राबाई खामनीकर)', nameEn: 'Mahanubhav Ashram, Hivarkheda (Subhadrabai Khamnikar)', contact: 'प.पू.त.सुभद्राबाई खामनीकर', phone: '-', b: 1, t: 3, c: 1, tot: 5 },
  { id: 'niwas_nashik_niphad_hivargaon_sukinekar', taluka: 'निफाड', village: 'हिवरगांव', name: 'महानुभाव आश्रम, हिवरगांव (श्रीधरदादा सुकिनेकर)', nameEn: 'Mahanubhav Ashram, Hivargaon (Shreedhardada Sukinekar)', contact: 'अ) प.पू.श्रीधरदादा सुकिनेकर', phone: '+91 84595 77699, +91 94054 01171', b: 2, t: 4, c: 0, tot: 6 },
  { id: 'niwas_nashik_niphad_hivargaon_shevlikar', taluka: 'निफाड', village: 'हिवरगांव', name: 'महानुभाव आश्रम, हिवरगांव (श्रीकान्हेराजबाबा शेवलीकर)', nameEn: 'Mahanubhav Ashram, Hivargaon (Shreekanherajbaba Shevalikar)', contact: 'ब) प.पू.श्रीकान्हेराजबाबा शेवलीकर', phone: '+91 96572 04854, +91 94052 74511', b: 1, t: 2, c: 1, tot: 4 },
  { id: 'niwas_nashik_niphad_mahajanpur_punjabi', taluka: 'निफाड', village: 'महाजनपूर', name: 'महानुभाव आश्रम, महाजनपूर (बेबीताई पंजाबी)', nameEn: 'Mahanubhav Ashram, Mahajanpur (Bebitai Punjabi)', contact: 'प.पू.त. बेबीताई पंजाबी', phone: '+91 86982 91048, +91 90960 05372', b: 0, t: 4, c: 2, tot: 6 },
  { id: 'niwas_nashik_niphad_nipani_jamodekar', taluka: 'निफाड', village: 'पिंपळगांव निपाणी', name: 'महानुभाव आश्रम, पिंपळगांव निपाणी (प्रभाताई जामोदेकर)', nameEn: 'Mahanubhav Ashram, Pipalgaon Nipani (Prabhatai Jamodekar)', contact: 'प.पू.त. प्रभाताई जामोदेकर', phone: '+91 94040 92684', b: 1, t: 1, c: 0, tot: 2 },

  // १२. ता. सिन्नर (Sinnar Taluka) - २५ पदे
  { id: 'niwas_nashik_sinnar_dodi_budruk_bidker', taluka: 'सिन्नर', village: 'डोडी बु।।', name: 'परमप्रीतीसेवाश्रम, डोडी बु।। (आचार्या रमाबाई बिडकर)', nameEn: 'Parampritisevashram, Dodi Budruk (Acharya Ramabai Bidkar)', contact: 'प.पू.त.आचार्या रमाबाई बिडकर', phone: '+91 94039 85703, +91 96379 62325, +91 98921 80588', b: 8, t: 23, c: 10, tot: 41, loc: 'डोडी बु।। परमप्रीतीसेवाश्रम, ता. सिन्नर, जि. नाशिक' },
  { id: 'niwas_nashik_sinnar_dodi_khurd_kapate', taluka: 'सिन्नर', village: 'दोडी खुर्द', name: 'महानुभाव आश्रम, दोडी खुर्द (छबुबाई कपाटे)', nameEn: 'Mahanubhav Ashram, Dodi Khurd (Chabubai Kapate)', contact: 'प.पू.त.छबुबाई कपाटे', phone: '-', b: 0, t: 2, c: 1, tot: 3, loc: 'दोडी खुर्द : (माळवाडी) माळोबा फाटा, ता. सिन्नर, जि. नाशिक' },
  { id: 'niwas_nashik_sinnar_dapur_landge', taluka: 'सिन्नर', village: 'दापूर', name: 'महानुभाव आश्रम, दापूर (पुष्पाताई लांडगे)', nameEn: 'Mahanubhav Ashram, Dapur (Pushpatai Landge)', contact: 'प.पू.त. पुष्पाताई लांडगे', phone: '-', b: 1, t: 1, c: 1, tot: 3 },
  { id: 'niwas_nashik_sinnar_gond_kapate', taluka: 'सिन्नर', village: 'गोंद', name: 'महानुभाव आश्रम, गोंद (यमाताई कपाटे)', nameEn: 'Mahanubhav Ashram, Gond (Yamatai Kapate)', contact: 'प.पू.त.यमाताई कपाटे', phone: '+91 99606 63158', b: 0, t: 2, c: 1, tot: 3 },
  { id: 'niwas_nashik_sinnar_khopadi_sthan', taluka: 'सिन्नर', village: 'खोपडी स्थान', name: 'महानुभाव आश्रम, खोपडी स्थान (ज्योतीताई)', nameEn: 'Mahanubhav Ashram, Khopadi Sthan (Jyotitai)', contact: 'प.पू.त. ज्योतीताई पाचराऊत', phone: '+91 94052 75088', b: 0, t: 2, c: 0, tot: 2 },
  { id: 'niwas_nashik_sinnar_khopadi_buva', taluka: 'सिन्नर', village: 'खोपडी', name: 'महानुभाव आश्रम, खोपडी (अंजनगांवकरबुवा)', nameEn: 'Mahanubhav Ashram, Khopadi (Anjangaonkarbuva)', contact: 'प.पू.म. श्रीअंजनगांवकरबुवा', phone: '+91 94039 85545, +91 95619 99522', b: 1, t: 4, c: 4, tot: 9 },
  { id: 'niwas_nashik_sinnar_khopadi_budruk_kapate', taluka: 'सिन्नर', village: 'खोपडी बु।।', name: 'महानुभाव आश्रम, खोपडी बु।। (धर्मराजबा कपाटे)', nameEn: 'Mahanubhav Ashram, Khopadi Budruk (Dharmarajba Kapate)', contact: 'प.पू.श्रीधर्मराजबा कपाटे', phone: '+91 93282 52485', b: 1, t: 3, c: 1, tot: 5 },
  { id: 'niwas_nashik_sinnar_shahapur_vidvans', taluka: 'सिन्नर', village: 'शहापूर', name: 'महानुभाव आश्रम, शहापूर (कृष्णरावदादा विद्वांस)', nameEn: 'Mahanubhav Ashram, Shahapur (Krishnaraodada Vidvans)', contact: 'प.पू.श्रीकृष्णरावदादा विद्वांस', phone: '+91 98900 07853, +91 94039 85901', b: 1, t: 4, c: 3, tot: 8 },
  { id: 'niwas_nashik_sinnar_bhokani', taluka: 'सिन्नर', village: 'भोकनी', name: 'महानुभाव आश्रम, भोकनी', nameEn: 'Mahanubhav Ashram, Bhokani', contact: 'व्यवस्थापक', phone: '-', b: 1, t: 2, c: 0, tot: 3, loc: 'भोकनी : देवपूर फाटा, ता. सिन्नर, जि. नाशिक' },
  { id: 'niwas_nashik_sinnar_pangari_lonarkar', taluka: 'सिन्नर', village: 'पांगरी', name: 'महानुभाव आश्रम, पांगरी (कमलाबाई लोणारकर)', nameEn: 'Mahanubhav Ashram, Pangari (Kamlabai Lonarkar)', contact: 'अ) प.पू.प.त. कमलाबाई लोणारकर', phone: '+91 96895 85165', b: 0, t: 2, c: 1, tot: 3 },
  { id: 'niwas_nashik_sinnar_pangari_sudarshan', taluka: 'सिन्नर', village: 'पांगरी', name: 'महानुभाव आश्रम, पांगरी (सुदर्शनदादा)', nameEn: 'Mahanubhav Ashram, Pangari (Sudarshandada)', contact: 'ब) प.पू.श्रीसुदर्शनदादा', phone: '-', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_nashik_sinnar_manori_kapate', taluka: 'सिन्नर', village: 'मानोरी', name: 'महानुभाव आश्रम, मानोरी (रेशमाबाई कपाटे)', nameEn: 'Mahanubhav Ashram, Manori (Reshamabai Kapate)', contact: 'प.पू.त.रेशमाबाई कपाटे', phone: '-', b: 1, t: 2, c: 0, tot: 3 },
  { id: 'niwas_nashik_sinnar_maral_kesharbai', taluka: 'सिन्नर', village: 'मरळ', name: 'महानुभाव आश्रम, मरळ (केशरबाई)', nameEn: 'Mahanubhav Ashram, Maral (Kesharbai)', contact: 'प.पू.त.केशरबाई', phone: '-', b: 0, t: 1, c: 0, tot: 1 },
  { id: 'niwas_nashik_sinnar_kepnagar_punjabi', taluka: 'सिन्नर', village: 'केपानगर', name: 'महानुभाव आश्रम, केपानगर (वंदनाताई पंजाबी)', nameEn: 'Mahanubhav Ashram, Kepnagar (Vandanatai Punjabi)', contact: 'प.पू.त. वंदनाताई पंजाबी', phone: '+91 94052 74819', b: 2, t: 2, c: 2, tot: 6 },
  { id: 'niwas_nashik_sinnar_pathre_damodardada', taluka: 'सिन्नर', village: 'पाथ्रे', name: 'महानुभाव आश्रम, पाथ्रे (दामोदरदादा म.)', nameEn: 'Mahanubhav Ashram, Pathre (Damodardada M.)', contact: 'प.पू.श्रीदामोदरदादा म.', phone: '+91 94054 00504, +91 94231 67138', b: 3, t: 5, c: 3, tot: 11 },
  { id: 'niwas_nashik_sinnar_nipani_pipalgaon_jamodekar', taluka: 'सिन्नर', village: 'निपाणी पिंपळगाव', name: 'महानुभाव आश्रम, निपाणी पिंपळगाव (प्रभाताई)', nameEn: 'Mahanubhav Ashram, Nipani Pipalgaon (Prabhatai)', contact: 'प.पू.त.प्रभाताई जामोदेकर', phone: '-', b: 0, t: 1, c: 1, tot: 2 },
  { id: 'niwas_nashik_sinnar_city_bhojane', taluka: 'सिन्नर', village: 'सिन्नर शहर', name: 'महानुभाव आश्रम, सिन्नर शहर (प्रेमराजदादा भोजने)', nameEn: 'Mahanubhav Ashram, Sinnar City (Premrajdada Bhojane)', contact: 'अ) प.पू. श्रीप्रेमराजदादा भोजने', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_nashik_sinnar_city_mandal', taluka: 'सिन्नर', village: 'सिन्नर शहर', name: 'भिल्लमठ संतमंडळी, सिन्नर', nameEn: 'Bhillamath Santmandali, Sinnar', contact: 'ब) भिल्लमठ : संतमंडळी', phone: '-', b: 4, t: 2, c: 0, tot: 6 },
  { id: 'niwas_nashik_sinnar_city_parandekar', taluka: 'सिन्नर', village: 'सिन्नर शहर', name: 'महानुभाव आश्रम, एस.टी. कॉलनी (कृष्णराजदादा परांडेकर)', nameEn: 'Mahanubhav Ashram, S.T. Colony (Krishnarajdada Parandekar)', contact: 'क) प.पू. श्रीकृष्णराजदादा परांडेकर', phone: '+91 94203 66718, +91 87675 12471', b: 1, t: 2, c: 1, tot: 4, loc: 'एस.टी. कॉलनी : सिन्नर, ता. सिन्नर, जि. नाशिक' },
  { id: 'niwas_nashik_sinnar_thangaon_sukinekar', taluka: 'सिन्नर', village: 'ठाणगांव', name: 'महानुभाव आश्रम, ठाणगांव (संजयराजदादा सुकिनेकर)', nameEn: 'Mahanubhav Ashram, Thangaon (Sanjayrajdada Sukinekar)', contact: 'अ) श्रीकृष्णमंदिर प.पू.श्रीसंजयराजदादा सुकिनेकर', phone: '-', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_nashik_sinnar_thangaon_ashram', taluka: 'सिन्नर', village: 'ठाणगांव', name: 'जाधववाडी आश्रम, ठाणगांव', nameEn: 'Jadhavwadi Ashram, Thangaon', contact: 'ब) जाधववाडी आश्रम', phone: '-', b: 3, t: 0, c: 0, tot: 3 },
  { id: 'niwas_nashik_sinnar_adwadi_ashram', taluka: 'सिन्नर', village: 'आडवाडी', name: 'मधली जाधववाडी आश्रम, आडवाडी', nameEn: 'Madhli Jadhavwadi Ashram, Adwadi', contact: 'अ) आडवाडी : मधली जाधववाडी आश्रम', phone: '-', b: 3, t: 0, c: 0, tot: 3 },
  { id: 'niwas_nashik_sinnar_adwadi_shevti', taluka: 'सिन्नर', village: 'आडवाडी', name: 'शेवटची आडवाडी आश्रम', nameEn: 'Shevtchi Adwadi Ashram', contact: 'ब) आडवाडी शेवटची', phone: '+91 91565 59901', b: 3, t: 4, c: 1, tot: 8 },
  { id: 'niwas_nashik_sinnar_mohadari_bidker', taluka: 'सिन्नर', village: 'मोहदरी', name: 'महानुभाव आश्रम, मोहदरी (अनाथमुनी बिडकर)', nameEn: 'Mahanubhav Ashram, Mohadari (Anathmuni Bidkar)', contact: 'प.पू.श्रीअनाथमुनी बिडकर', phone: '+91 82754 67896, +91 99675 59604', b: 2, t: 4, c: 2, tot: 8 },
  { id: 'niwas_nashik_sinnar_brahmanwada', taluka: 'सिन्नर', village: 'ब्राह्मणवाडा', name: 'संतमंडळी, ब्राह्मणवाडा', nameEn: 'Santmandali, Brahmanwada', contact: 'संतमंडळी', phone: '-', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_nashik_sinnar_baragaon_bidker', taluka: 'सिन्नर', village: 'बारागांव पिंप्री', name: 'महानुभाव आश्रम, बारागांव पिंप्री (संतोषमुनी बिडकर)', nameEn: 'Mahanubhav Ashram, Baragaon Pimpri (Santoshmuni Bidkar)', contact: 'प.पू. श्रीसंतोषमुनी बिडकर', phone: '+91 76661 92759, +91 94035 26103', b: 5, t: 5, c: 0, tot: 10 },
  { id: 'niwas_nashik_sinnar_hivare_ankulnerkar', taluka: 'सिन्नर', village: 'हिवरे पिंपळे', name: 'महानुभाव आश्रम, हिवरे पिंपळे (देवेंद्रमुनी अंकुळनेरकर)', nameEn: 'Mahanubhav Ashram, Hivare Pimple (Devendramuni Ankulnerkar)', contact: 'प.पू.श्रीदेवेंद्रमुनी अंकुळनेरकर', phone: '+91 94030 64993', b: 1, t: 2, c: 2, tot: 5 },
  { id: 'niwas_nashik_sinnar_datli_kothi', taluka: 'सinnar', village: 'दातली', name: 'महानुभाव आश्रम, दातली (संतोषमुनी कोठी)', nameEn: 'Mahanubhav Ashram, Datli (Santoshmuni Kothi)', contact: 'प.पू.श्रीसंतोषमुनी कोठी', phone: '+91 76663 16077, +91 94039 85706', b: 1, t: 0, c: 0, tot: 1 },
  { id: 'niwas_nashik_sinnar_deshvande', taluka: 'सिन्नर', village: 'देशवंडे', name: 'महानुभाव आश्रम, देशवंडे (उमेशराज म.)', nameEn: 'Mahanubhav Ashram, Deshvande (Umeshraj M.)', contact: 'प.पू.श्रीउमेशराज म.', phone: '+91 99228 59781', b: 1, t: 1, c: 0, tot: 2 },
  { id: 'niwas_nashik_sinnar_sulewadi_punjabi', taluka: 'सिन्नर', village: 'सुळेवाडी', name: 'महानुभाव आश्रम, सुळेवाडी (विमलबाई पंजाबी)', nameEn: 'Mahanubhav Ashram, Sulewadi (Vimalbai Punjabi)', contact: 'प.पू.त. विमलबाई पंजाबी', phone: '+91 84079 71623', b: 0, t: 2, c: 0, tot: 2 }
];

export const NASHIK_NIWAS_ITEMS: NiwasItem[] = NASHIK_RAW_DATA.map(item => ({
  id: item.id,
  name: item.name,
  nameEn: item.nameEn,
  location: item.loc || `${item.village}, ता. ${item.taluka}, जि. नाशिक`,
  state: 'महाराष्ट्र',
  district: 'नाशिक',
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
