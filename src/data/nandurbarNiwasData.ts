import { NiwasItem } from '../types';

interface RawNandurbarNiwas {
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

const NANDURBAR_RAW_DATA: RawNandurbarNiwas[] = [
  // १. ता. नंदुरबार (Nandurbar Taluka) - ४ पदे
  {
    id: 'niwas_nandurbar_nandurbar_samsherpur_sarangdharbaba',
    taluka: 'नंदुरबार',
    village: 'समशेरपूर',
    name: 'महानुभाव आश्रम, समशेरपूर (सारंगधरबाबा भोजने)',
    nameEn: 'Mahanubhav Ashram, Samsherpur (Sarangdharbaba Bhojane)',
    contact: 'प.पू.म.श्रीसारंगधरबाबा भोजने',
    phone: '+91 94052 74375, +91 94052 74376',
    b: 2,
    t: 3,
    c: 2,
    tot: 7
  },
  {
    id: 'niwas_nandurbar_nandurbar_ranale_gavatesaheb',
    taluka: 'नंदुरबार',
    village: 'रनाळे',
    name: 'महानुभाव आश्रम, रनाळे (गवतेसाहेब)',
    nameEn: 'Mahanubhav Ashram, Ranale (Gavatesaheb)',
    contact: 'प.पू.श्रीगवतेसाहेब',
    phone: '-',
    b: 1,
    t: 0,
    c: 0,
    tot: 1
  },
  {
    id: 'niwas_nandurbar_nandurbar_city_mandal',
    taluka: 'नंदुरबार',
    village: 'नंदुरबार शहर',
    name: 'महानुभाव आश्रम, नंदुरबार शहर',
    nameEn: 'Mahanubhav Ashram, Nandurbar City',
    contact: 'संतमंडळी',
    phone: '-',
    b: 0,
    t: 1,
    c: 0,
    tot: 1
  },
  {
    id: 'niwas_nandurbar_nandurbar_lahan_shahada_mandal',
    taluka: 'नंदुरबार',
    village: 'लहान शहादा',
    name: 'महानुभाव आश्रम, लहान शहादा',
    nameEn: 'Mahanubhav Ashram, Lahan Shahada',
    contact: 'संतमंडळी',
    phone: '-',
    b: 2,
    t: 0,
    c: 0,
    tot: 2
  },

  // २. ता. शहादा (Shahada Taluka) - २१ पदे
  {
    id: 'niwas_nandurbar_shahada_hingani_demerajubuva',
    taluka: 'शहादा',
    village: 'हिंगणी',
    name: 'महानुभाव आश्रम, हिंगणी (देमेराजुबुवा विद्वांस)',
    nameEn: 'Mahanubhav Ashram, Hingani (Demerajubuva Vidvans)',
    contact: 'प.पू.श्रीदेमेराजुबुवा विद्वांस',
    phone: '+91 93599 19099, +91 75889 49541',
    b: 2,
    t: 2,
    c: 0,
    tot: 4
  },
  {
    id: 'niwas_nandurbar_shahada_fais_vairagibuva',
    taluka: 'शहादा',
    village: 'फेस',
    name: 'महानुभाव आश्रम, फेस (वैरागी बुवा)',
    nameEn: 'Mahanubhav Ashram, Fais (Vairagibuva)',
    contact: 'प.पू.म.श्रीवैरागी बुवा',
    phone: '+91 97635 44921, +91 94052 74390',
    b: 9,
    t: 14,
    c: 2,
    tot: 25
  },
  {
    id: 'niwas_nandurbar_shahada_bamkheda_damodarmuni',
    taluka: 'शहादा',
    village: 'बामखेडा',
    name: 'महानुभाव आश्रम, बामखेडा (दामोदरमुनी)',
    nameEn: 'Mahanubhav Ashram, Bamkheda (Damodarmuni)',
    contact: 'प.प.दामोदरमुनी',
    phone: '-',
    b: 1,
    t: 0,
    c: 0,
    tot: 1
  },
  {
    id: 'niwas_nandurbar_shahada_jayanagar_divakarbuva',
    taluka: 'शहादा',
    village: 'जयनगर',
    name: 'महानुभाव आश्रम, जयनगर (दिवाकरबुवा बीडकर)',
    nameEn: 'Mahanubhav Ashram, Jayanagar (Divakarbuva Bidker)',
    contact: 'प.पू.म.श्रीदिवाकरबुवा बीडकर',
    phone: '+91 94052 76053, +91 99212 01062',
    b: 1,
    t: 4,
    c: 3,
    tot: 8
  },
  {
    id: 'niwas_nandurbar_shahada_kahatul_krishnarajba',
    taluka: 'शहादा',
    village: 'काहाटूळ',
    name: 'महानुभाव आश्रम, काहाटूळ (कृष्णराजबा कवीश्वर)',
    nameEn: 'Mahanubhav Ashram, Kahatul (Krishnarajba Kaveeshwar)',
    contact: 'प.पू.म.श्रीकृष्णराजबा कवीश्वर',
    phone: '+91 98227 62043',
    b: 4,
    t: 4,
    c: 3,
    tot: 11
  },
  {
    id: 'niwas_nandurbar_shahada_kahatulphata_gopalvyas',
    taluka: 'शहादा',
    village: 'काहाटूळ फाटा',
    name: 'महानुभाव आश्रम, काहाटूळ फाटा (गोपालव्यास शेवलीकर)',
    nameEn: 'Mahanubhav Ashram, Kahatul Phata (Gopalvyas Shevalikar)',
    contact: 'प.पू.श्रीगोपालव्यास शेवलीकर',
    phone: '+91 83809 41070, +91 99609 21070',
    b: 1,
    t: 0,
    c: 1,
    tot: 2
  },
  {
    id: 'niwas_nandurbar_shahada_sarangkheda_divakarbaba',
    taluka: 'शहादा',
    village: 'सारंगखेडा',
    name: 'महानुभाव आश्रम, सारंगखेडा (अ - दिवाकरबाबा पंजाबी)',
    nameEn: 'Mahanubhav Ashram, Sarangkheda (A - Divakarbaba Punjabi)',
    contact: 'प.प.म.श्रीदिवाकरबाबा पंजाबी',
    phone: '+91 94052 75705',
    b: 1,
    t: 2,
    c: 0,
    tot: 3
  },
  {
    id: 'niwas_nandurbar_shahada_sarangkheda_vishudhabai',
    taluka: 'शहादा',
    village: 'सारंगखेडा',
    name: 'महानुभाव आश्रम, सारंगखेडा (ब - विशुद्धाबाई जावळे)',
    nameEn: 'Mahanubhav Ashram, Sarangkheda (B - Vishudhabai Jawale)',
    contact: 'प.पू.त.विशुद्धाबाई जावळे',
    phone: '-',
    b: 0,
    t: 2,
    c: 0,
    tot: 2
  },
  {
    id: 'niwas_nandurbar_shahada_pusanad_arunatai',
    taluka: 'शहादा',
    village: 'पुसनद',
    name: 'महानुभाव आश्रम, पुसनद (अरुणाताई जावळे)',
    nameEn: 'Mahanubhav Ashram, Pusanad (Arunatai Jawale)',
    contact: 'प.पू.त.अरुणाताई जावळे',
    phone: '+91 97637 67523',
    b: 0,
    t: 2,
    c: 1,
    tot: 3
  },
  {
    id: 'niwas_nandurbar_shahada_varud_santoshmuni',
    taluka: 'शहादा',
    village: 'वरूड कानडी',
    name: 'महानुभाव आश्रम, वरूड कानडी (संतोषमुनी बिडकर)',
    nameEn: 'Mahanubhav Ashram, Varud Kanadi (Santoshmuni Bidkar)',
    contact: 'प.पू.श्रीसंतोषमुनी बिडकर',
    phone: '+91 75073 45582, +91 95518 98912',
    b: 1,
    t: 2,
    c: 0,
    tot: 3
  },
  {
    id: 'niwas_nandurbar_shahada_shirud_gopaldada',
    taluka: 'शहादा',
    village: 'शिरूड',
    name: 'महानुभाव आश्रम, शिरूड (गोपालदादा भोजने)',
    nameEn: 'Mahanubhav Ashram, Shirud (Gopaldada Bhojane)',
    contact: 'प.पू.म.श्रीगोपालदादा भोजने',
    phone: '+91 75889 49492',
    b: 1,
    t: 3,
    c: 1,
    tot: 5
  },
  {
    id: 'niwas_nandurbar_shahada_sutgirani_paturkarbaba',
    taluka: 'शहादा',
    village: 'सूतगिरणी',
    name: 'महानुभाव आश्रम, सूतगिरणी (पातूरकरबा जुने)',
    nameEn: 'Mahanubhav Ashram, Sutgirani (Paturkarbaba Old)',
    contact: 'प.पू.म. श्रीपातूरकरबा (जुने)',
    phone: '+91 94223 70587, +91 94034 31020',
    b: 2,
    t: 10,
    c: 1,
    tot: 13
  },
  {
    id: 'niwas_nandurbar_shahada_mhasavad_gomerajba',
    taluka: 'शहादा',
    village: 'म्हसावद',
    name: 'महानुभाव आश्रम, म्हसावद (अ - गोमेराजबा नांदेडकर)',
    nameEn: 'Mahanubhav Ashram, Mhasavad (A - Gomerajba Nandedkar)',
    contact: 'अ.प.पू.म.श्रीगोमेराजबा नांदेडकर',
    phone: '+91 99224 65925',
    b: 1,
    t: 2,
    c: 1,
    tot: 4
  },
  {
    id: 'niwas_nandurbar_shahada_mhasavad_premrajda',
    taluka: 'शहादा',
    village: 'म्हसावद',
    name: 'महानुभाव आश्रम, म्हसावद (ब - प्रेमराजदा पातूरकर)',
    nameEn: 'Mahanubhav Ashram, Mhasavad (B - Premrajda Paturkar)',
    contact: 'प.प.श्रीप्रेमराजदा पातूरकर',
    phone: '+91 90112 00484, +91 96234 66962',
    b: 1,
    t: 0,
    c: 1,
    tot: 2
  },
  {
    id: 'niwas_nandurbar_shahada_lonakheda_paturkarbaba',
    taluka: 'शहादा',
    village: 'लोणखेडा',
    name: 'महानुभाव आश्रम, लोणखेडा (अ - पातूरकरबाबा नवे)',
    nameEn: 'Mahanubhav Ashram, Lonakheda (A - Paturkarbaba New)',
    contact: 'प.पू.म.श्रीपातूरकरबाबा (नवे)',
    phone: '+91 94039 87070, +91 99225 93293',
    b: 4,
    t: 5,
    c: 2,
    tot: 11
  },
  {
    id: 'niwas_nandurbar_shahada_lonakheda_vanadevmandir',
    taluka: 'शहादा',
    village: 'लोणखेडा',
    name: 'वनदेव मंदिर : द्वारकाधिश संस्थान, लोणखेडा (ब - योगिराजदा पातूरकर)',
    nameEn: 'Vanadev Mandir : Dwarkadhish Sansthan, Lonakheda (B - Yogirajda Paturkar)',
    contact: 'प.पू.श्रीयोगिराजदा पातूरकर',
    phone: '-',
    b: 2,
    t: 2,
    c: 0,
    tot: 4
  },
  {
    id: 'niwas_nandurbar_shahada_vadachhil_kolhekarbaba',
    taluka: 'शहादा',
    village: 'वडछील',
    name: 'महानुभाव आश्रम, वडछील (कोल्हेकरबाबा)',
    nameEn: 'Mahanubhav Ashram, Vadachhil (Kolhekarbaba)',
    contact: 'प.पू.म.श्रीकोल्हेकरबाबा',
    phone: '+91 95272 23023',
    b: 4,
    t: 3,
    c: 3,
    tot: 10
  },
  {
    id: 'niwas_nandurbar_shahada_city_bhaskarbaba',
    taluka: 'शहादा',
    village: 'शहादा',
    name: 'श्रीकृष्णज्ञान मंदिर, गोविंदनगर, शहादा (१ - भास्करबाबा)',
    nameEn: 'Shree Krishna Gyan Mandir, Govind Nagar, Shahada (1 - Bhaskarbaba)',
    contact: 'प.पू.म.श्रीभास्करबाबा महानुभाव',
    phone: '+91 94222 13064, +91 79722 03512',
    b: 2,
    t: 2,
    c: 2,
    tot: 6,
    loc: 'श्रीकृष्णज्ञान मंदिर, गोविंदनगर, शहादा'
  },
  {
    id: 'niwas_nandurbar_shahada_city_vasanikerbaba',
    taluka: 'शहादा',
    village: 'शहादा',
    name: 'ब्रिजभूषण परमार्ग आश्रम, शहादा (२ - वासनिकरबाबा)',
    nameEn: 'Brijbhushan Parmarg Ashram, Shahada (2 - Vasanikerbaba)',
    contact: 'प.पू.म.श्रीवासनिकरबाबा',
    phone: '+91 98817 66231',
    b: 3,
    t: 4,
    c: 3,
    tot: 10,
    loc: 'ब्रिजभूषण परमार्ग आश्रम, शहादा'
  },
  {
    id: 'niwas_nandurbar_shahada_city_yogirajdada',
    taluka: 'शहादा',
    village: 'शहादा',
    name: 'श्रीदत्तमंदिर म.आ., शहादा (३ - योगिराजदादा कोल्हेकर)',
    nameEn: 'Shree Dattamandir M.A., Shahada (3 - Yogirajdada Kolhekar)',
    contact: 'प.पू.श्रीयोगिराजदादा कोल्हेकर',
    phone: '+91 86689 11253, +91 82756 17075',
    b: 1,
    t: 2,
    c: 2,
    tot: 5,
    loc: 'श्रीदत्तमंदिर म.आ., शहादा'
  },
  {
    id: 'niwas_nandurbar_shahada_city_sushilatai',
    taluka: 'शहादा',
    village: 'शहादा',
    name: 'महानुभाव आश्रम, शहादा (४ - सुशिलाताई पातूरकर)',
    nameEn: 'Mahanubhav Ashram, Shahada (4 - Sushilatai Paturkar)',
    contact: 'प.पू.त.सुशिलाताई पातूरकर',
    phone: '-',
    b: 0,
    t: 2,
    c: 0,
    tot: 2,
    loc: 'शहादा'
  },
  {
    id: 'niwas_nandurbar_shahada_brahmanpuri_mandal',
    taluka: 'शहादा',
    village: 'ब्राह्मणपुरी',
    name: 'महानुभाव आश्रम, ब्राह्मणपुरी',
    nameEn: 'Mahanubhav Ashram, Brahmanpuri',
    contact: 'संतमंडळी',
    phone: '-',
    b: 1,
    t: 0,
    c: 0,
    tot: 1
  },
  {
    id: 'niwas_nandurbar_shahada_manarad_sunildada',
    taluka: 'शहादा',
    village: 'मनरद',
    name: 'महानुभाव आश्रम, मनरद (सुनीलदादा पंजाबी)',
    nameEn: 'Mahanubhav Ashram, Manarad (Sunildada Punjabi)',
    contact: 'प.पू.श्रीसुनीलदादा पंजाबी',
    phone: '+91 90225 15522, +91 97636 22173',
    b: 1,
    t: 3,
    c: 0,
    tot: 4
  },
  {
    id: 'niwas_nandurbar_shahada_damarkheda_minashitai',
    taluka: 'शहादा',
    village: 'डामरखेडा',
    name: 'महानुभाव आश्रम, डामरखेडा (मिनाक्षीताई जावळे)',
    nameEn: 'Mahanubhav Ashram, Damarkheda (Minashitai Jawale)',
    contact: 'प.पू.त.मिनाक्षीताई जावळे',
    phone: '+91 98341 81624, +91 98815 16218',
    b: 7,
    t: 5,
    c: 5,
    tot: 17
  },
  {
    id: 'niwas_nandurbar_shahada_londhare_mandal',
    taluka: 'शहादा',
    village: 'लोंढरे',
    name: 'महानुभाव आश्रम, लोंढरे',
    nameEn: 'Mahanubhav Ashram, Londhare',
    contact: 'संतमंडळी',
    phone: '-',
    b: 1,
    t: 1,
    c: 0,
    tot: 2
  },
  {
    id: 'niwas_nandurbar_shahada_ujalod_mandal',
    taluka: 'शहादा',
    village: 'उजळोद',
    name: 'महानुभाव आश्रम, उजळोद',
    nameEn: 'Mahanubhav Ashram, Ujalod',
    contact: 'संतमंडळी',
    phone: '-',
    b: 1,
    t: 1,
    c: 0,
    tot: 2
  },
  {
    id: 'niwas_nandurbar_shahada_chandpuri_kolhekarbaba',
    taluka: 'शहादा',
    village: 'चांदपुरी',
    name: 'महानुभाव आश्रम, चांदपुरी (कोल्हेकरबाबा)',
    nameEn: 'Mahanubhav Ashram, Chandpuri (Kolhekarbaba)',
    contact: 'प.पू. श्रीकोल्हेकरबाबा',
    phone: '+91 95272 23023',
    b: 0,
    t: 1,
    c: 0,
    tot: 1
  }
];

export const NANDURBAR_NIWAS_ITEMS: NiwasItem[] = NANDURBAR_RAW_DATA.map(item => ({
  id: item.id,
  name: item.name,
  nameEn: item.nameEn,
  location: item.loc || `${item.village}, ता. ${item.taluka}, जि. नंदुरबार`,
  state: 'महाराष्ट्र',
  district: 'नंदुरबार',
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
