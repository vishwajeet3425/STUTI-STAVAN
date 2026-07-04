import { NiwasItem } from '../types';

interface RawDhuleNiwas {
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

const DHULE_RAW_DATA: RawDhuleNiwas[] = [
  // १. ता. धुळे (Dhule Taluka) - ५ पदे
  {
    id: 'niwas_dhule_dhule_city_salkarbaba',
    taluka: 'धुळे',
    village: 'धुळे शहर',
    name: 'महानुभाव आश्रम, धुळे शहर (अ - साळकरबाबा)',
    nameEn: 'Mahanubhav Ashram, Dhule City (A - Salkarbaba)',
    contact: 'प.पू.म. श्रीसाळकरबाबा म.',
    phone: '+91 94039 85011, +91 96734 38514',
    b: 10,
    t: 23,
    c: 12,
    tot: 45,
    loc: 'धुळे शहर, जि. धुळे'
  },
  {
    id: 'niwas_dhule_dhule_city_anitatai',
    taluka: 'धुळे',
    village: 'धुळे शहर',
    name: 'श्रीकृष्ण महानुभाव आश्रम, भुजल कॉलनी (ब - अनिताताई)',
    nameEn: 'Shree Krishna Mahanubhav Ashram, Bhujal Colony (B - Anitatai)',
    contact: 'प.पू.त. अनिताताई मराठे',
    phone: '+91 94205 36180, +91 89994 57627',
    b: 0,
    t: 2,
    c: 0,
    tot: 2,
    loc: 'भुजल कॉलनी, गॅस गोडाऊन जवळ, धुळे शहर'
  },
  {
    id: 'niwas_dhule_dhule_mohadi_jayarababa',
    taluka: 'धुळे',
    village: 'मोहाडी',
    name: 'महानुभाव आश्रम, मोहाडी उपनगर (जायराबाबा)',
    nameEn: 'Mahanubhav Ashram, Mohadi Suburb (Jayarababa)',
    contact: 'प.पू.म. श्रीजायराबाबा म.',
    phone: '+91 94039 88333, +91 94039 86444',
    b: 17,
    t: 15,
    c: 5,
    tot: 37,
    loc: 'मोहाडी उपनगर, धुळे'
  },
  {
    id: 'niwas_dhule_dhule_darna_kavitatai',
    taluka: 'धुळे',
    village: 'दरना रव्हाणे',
    name: 'महानुभाव आश्रम, दरना रव्हाणे (कविताताई भोजने)',
    nameEn: 'Mahanubhav Ashram, Darna Ravhane (Kavitatai Bhojane)',
    contact: 'प.पू.त. कविताताई भोजने',
    phone: '-',
    b: 0,
    t: 2,
    c: 3,
    tot: 5
  },
  {
    id: 'niwas_dhule_dhule_vinchur_rituraj',
    taluka: 'धुळे',
    village: 'विंचूर',
    name: 'महानुभाव आश्रम, विंचूर (ऋतुराज दख्खनकर)',
    nameEn: 'Mahanubhav Ashram, Vinchur (Rituraj Dakhankar)',
    contact: 'प.पू.श्रीऋतुराज दख्खनकर',
    phone: '-',
    b: 1,
    t: 1,
    c: 1,
    tot: 3
  },

  // २. ता. शिंदखेडा (Sindkheda Taluka) - ४ पदे
  {
    id: 'niwas_dhule_sindkheda_sondle_ranjanatai',
    taluka: 'शिंदखेडा',
    village: 'सोंडले',
    name: 'महानुभाव आश्रम, सोंडले (रंजनाताई म.)',
    nameEn: 'Mahanubhav Ashram, Sondle (Ranjanatai M.)',
    contact: 'प.पू.त.रंजनाताई म.',
    phone: '+91 94034 69981',
    b: 0,
    t: 3,
    c: 1,
    tot: 4
  },
  {
    id: 'niwas_dhule_sindkheda_dondaicha_prabhakardada',
    taluka: 'शिंदखेडा',
    village: 'दोंडाईचा',
    name: 'महानुभाव आश्रम, दोंडाईचा (प्रभाकरदादा भोजने)',
    nameEn: 'Mahanubhav Ashram, Dondaicha (Prabhakardada Bhojane)',
    contact: 'प.पू.श्रीप्रभाकरदादा भोजने',
    phone: '-',
    b: 1,
    t: 2,
    c: 0,
    tot: 3
  },
  {
    id: 'niwas_dhule_sindkheda_kampur_abhayraj',
    taluka: 'शिंदखेडा',
    village: 'कामपूर',
    name: 'महानुभाव आश्रम, कामपूर (अभयराज महानुभाव)',
    nameEn: 'Mahanubhav Ashram, Kampur (Abhayraj Mahanubhav)',
    contact: 'प.पू.श्रीअभयराज महानुभाव',
    phone: '-',
    b: 1,
    t: 0,
    c: 0,
    tot: 1
  },
  {
    id: 'niwas_dhule_sindkheda_borkud_santoshda',
    taluka: 'शिंदखेडा',
    village: 'बोरकूड',
    name: 'महानुभाव आश्रम, बोरकूड (संतोषदा अंजनगावकर)',
    nameEn: 'Mahanubhav Ashram, Borkud (Santoshda Anjangaonkar)',
    contact: 'प.पू.श्रीसंतोषदा अंजनगावकर',
    phone: '+91 94052 75026',
    b: 1,
    t: 1,
    c: 3,
    tot: 5
  },

  // ३. ता. शिरपूर (Shirpur Taluka) - १२ पदे
  {
    id: 'niwas_dhule_shirpur_manjrod_nanerajbaba',
    taluka: 'शिरपूर',
    village: 'मांझरोद',
    name: 'महानुभाव आश्रम, मांझरोद (नानेराजबाबा पातूरकर)',
    nameEn: 'Mahanubhav Ashram, Manjrod (Nanerajbaba Paturkar)',
    contact: 'प.पू. श्रीनानेराजबाबा पातूरकर',
    phone: '-',
    b: 29,
    t: 32,
    c: 0,
    tot: 61
  },
  {
    id: 'niwas_dhule_shirpur_gujarkhede_yelherajbaba',
    taluka: 'शिरपूर',
    village: 'गुजरखेडं',
    name: 'महानुभाव आश्रम, गुजरखेडं (अ - येल्हेराजबाबा)',
    nameEn: 'Mahanubhav Ashram, Gujarkhede (A - Yelherajbaba)',
    contact: 'प.पू.म. येल्हेराजबाबा',
    phone: '+91 87665 54608, +91 94054 02935',
    b: 3,
    t: 6,
    c: 3,
    tot: 12
  },
  {
    id: 'niwas_dhule_shirpur_gujarkhede_rishirajdada',
    taluka: 'शिरपूर',
    village: 'गुजरखेडं',
    name: 'महानुभाव आश्रम, गुजरखेडं (ब - ऋषिराजदादा भोजने)',
    nameEn: 'Mahanubhav Ashram, Gujarkhede (B - Rishirajdada)",',
    contact: 'प.पू.श्रीऋषिराजदादा भोजने',
    phone: '+91 98226 51407',
    b: 1,
    t: 0,
    c: 0,
    tot: 1
  },
  {
    id: 'niwas_dhule_shirpur_savalda_mandal',
    taluka: 'शिरपूर',
    village: 'सावळदा',
    name: 'महानुभाव आश्रम, सावळदा',
    nameEn: 'Mahanubhav Ashram, Savalda',
    contact: 'संतमंडळी',
    phone: '-',
    b: 2,
    t: 2,
    c: 0,
    tot: 4
  },
  {
    id: 'niwas_dhule_shirpur_waghali_sudamdada',
    taluka: 'शिरपूर',
    village: 'वाघाळी',
    name: 'महानुभाव आश्रम, वाघाळी (सुदामदादा रेलकर)',
    nameEn: 'Mahanubhav Ashram, Waghali (Sudamdada Relkar)',
    contact: 'प.पू.श्रीसुदामदादा रेलकर',
    phone: '+91 95529 22589',
    b: 1,
    t: 1,
    c: 0,
    tot: 2
  },
  {
    id: 'niwas_dhule_shirpur_garvade_mandal',
    taluka: 'शिरपूर',
    village: 'गरवाडे',
    name: 'महानुभाव आश्रम, गरवाडे',
    nameEn: 'Mahanubhav Ashram, Garvade',
    contact: 'संतमंडळी',
    phone: '-',
    b: 5,
    t: 1,
    c: 0,
    tot: 6
  },
  {
    id: 'niwas_dhule_shirpur_vikhran_shreeramchandra',
    taluka: 'शिरपूर',
    village: 'विखरण',
    name: 'महानुभाव आश्रम, विखरण (अ - श्रीरामचंद्रबाबा गुर्जर)',
    nameEn: 'Mahanubhav Ashram, Vikhran (A - Shreeramchandrababa Gurjar)',
    contact: 'प.पू.म. श्रीरामचंद्रबाबा गुर्जर',
    phone: '+91 93598 29140, +91 94052 74825',
    b: 2,
    t: 4,
    c: 3,
    tot: 9
  },
  {
    id: 'niwas_dhule_shirpur_vikhran_shantabai',
    taluka: 'शिरपूर',
    village: 'विखरण',
    name: 'महानुभाव आश्रम, विखरण (ब - शांताबाई भोजने)',
    nameEn: 'Mahanubhav Ashram, Vikhran (B - Shantabai Bhojane)',
    contact: 'प.पू.त.शांताबाई भोजने',
    phone: '-',
    b: 0,
    t: 6,
    c: 2,
    tot: 8
  },
  {
    id: 'niwas_dhule_shirpur_vikhran_dattamandir',
    taluka: 'शिरपूर',
    village: 'विखरण',
    name: 'श्रीदत्तमंदिर, विखरण',
    nameEn: 'Shree Dattamandir, Vikhran',
    contact: 'व्यवस्थापक',
    phone: '-',
    b: 1,
    t: 2,
    c: 0,
    tot: 3
  },
  {
    id: 'niwas_dhule_shirpur_chandpuri_kolhekarbuva',
    taluka: 'शिरपूर',
    village: 'चांदपुरी',
    name: 'महानुभाव आश्रम, चांदपुरी (कोल्हेकरबुवा)',
    nameEn: 'Mahanubhav Ashram, Chandpuri (Kolhekarbuva)',
    contact: 'प.पू.म. श्रीकोल्हेकरबुवा',
    phone: '-',
    b: 1,
    t: 1,
    c: 0,
    tot: 2
  },
  {
    id: 'niwas_dhule_shirpur_arth_mandal',
    taluka: 'शिरपूर',
    village: 'अर्थ',
    name: 'महानुभाव आश्रम, अर्थ',
    nameEn: 'Mahanubhav Ashram, Arth',
    contact: 'संतमंडळी',
    phone: '-',
    b: 2,
    t: 0,
    c: 0,
    tot: 2
  },
  {
    id: 'niwas_dhule_shirpur_gartad_dattarajdada',
    taluka: 'शिरपूर',
    village: 'गरताड',
    name: 'महानुभाव आश्रम, गरताड (दत्तराजदादा)',
    nameEn: 'Mahanubhav Ashram, Gartad (Dattarajdada)',
    contact: 'प.पू.श्रीदत्तराजदादा',
    phone: '-',
    b: 1,
    t: 2,
    c: 0,
    tot: 3
  }
];

export const DHULE_NIWAS_ITEMS: NiwasItem[] = DHULE_RAW_DATA.map(item => ({
  id: item.id,
  name: item.name,
  nameEn: item.nameEn,
  location: item.loc || `${item.village}, ता. ${item.taluka === 'शिंदखेडा' ? 'शिंदखेड' : item.taluka}, जि. धुळे`,
  state: 'महाराष्ट्र',
  district: 'धुळे',
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
