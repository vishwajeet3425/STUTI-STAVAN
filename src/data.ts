/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Book, Chapter, Bhajan, Pravachan, Temple, EventKaryakram, Samachar, CommunityMessage } from './types';

export const MAHARASHTRA_DISTRICTS_AND_TALUKAS: Record<string, string[]> = {
  'अहमदनगर': ['अहमदनगर', 'नेवासा', 'श्रीरामपूर', 'राहता', 'संगमनेर', 'कोपरगाव', 'राहुरी', 'शेवगाव', 'पाथर्डी', 'पारनेर', 'कर्जत', 'जामखेड', 'श्रीगोंदा', 'अकोले'],
  'अकोला': ['अकोला', 'बाळापूर', 'पातूर', 'बार्शीटाकळी', 'मूर्तिजापूर', 'अकोट', 'तेल्हारा'],
  'अमरावती': ['चांदुर बाजार', 'अमरावती', 'अचलपूर', 'अंजनगाव सुर्जी', 'दर्यापूर', 'मोर्शी', 'वरूड', 'चांदुर रेल्वे', 'धामणगाव रेल्वे', 'नांदगाव खंडेश्वर', 'चिखलदरा', 'धारणी', 'तिवसा', 'भातकुली', 'परतवाडा'],
  'बीड': ['गेवराई', 'बीड', 'माजलगाव', 'परळी', 'अंबाजोगाई', 'आष्टी', 'पाटोदा', 'शिरूर', 'धारूर', 'वडवणी', 'केज'],
  'भंडारा': ['भंडारा', 'तुमसर', 'पवनी', 'मोहाडी', 'साकोली', 'लाखनी', 'लाखांदूर'],
  'बुलढाणा': ['सिंदखेड राजा', 'लोणार', 'मेहकर', 'चिखली', 'बुलढाणा', 'देऊळगाव राजा', 'खामगाव', 'शेगाव', 'संग्रामपूर', 'जळगाव जामोद', 'नांदुरा', 'मलकापूर', 'मोताळा'],
  'चंद्रपूर': ['चंद्रपूर', 'भद्रावती', 'वरोरा', 'चिमूर', 'बल्लारशा', 'सिंदेवाही', 'मूल', 'सावली', 'पोंभुर्णा', 'गोंडपिपरी', 'राजुरा', 'कोरपना', 'जिवती', 'ब्रह्मपुरी', 'नागभीड'],
  'छत्रपती संभाजीनगर': ['पैठण', 'छत्रपती संभाजीनगर', 'गंगापूर', 'वैजापूर', 'कन्नड', 'सोयगाव', 'सिल्लोड', 'फुलंब्री', 'खुलताबाद'],
  'धाराशिव': ['धाराशिव', 'तुळजापूर', 'उमरगा', 'लोहारा', 'कळंब', 'भूम', 'वाशी', 'परंडा'],
  'उस्मानाबाद': ['उस्मानाबाद', 'भूम', 'कळंब', 'तुळजापूर', 'उमरगा', 'लोहारा', 'वाशी', 'परंडा'],
  'धुळे': ['धुळे', 'साक्री', 'शिंदखेड', 'शिंदखेडा', 'शिरपूर'],
  'गडचिरोली': ['गडचिरोली', 'वडसा', 'कुरखेडा', 'धानोरा', 'चामोर्शी', 'मूलचेरा', 'अहेरी', 'एटापल्ली', 'भामरागड', 'सिरोंचा', 'कोरची', 'टिपगड'],
  'गोंदिया': ['गोंदिया', 'तिरोडा', 'गोरेगाव', 'अर्जुनी मोरगाव', 'देवरी', 'आमगाव', 'सालेकसा', 'सडक अर्जुनी'],
  'हिंगोली': ['हिंगोली', 'कळमनुरी', 'सेनगाव', 'वसमत', 'औंढा नागनाथ'],
  'जळगाव': ['यावल', 'भुसावळ', 'जळगाव', 'अमळनेर', 'पाचोरा', 'चाळीसगाव', 'चोपडा', 'एरंडोल', 'धरणगाव', 'भडगाव', 'जामनेर', 'मुक्ताईनगर', 'बोदवड', 'रावेर', 'पारोळा'],
  'जालना': ['जालना', 'बदनापूर', 'भोकरदन', 'जाफ्राबाद', 'परतूर', 'मंठा', 'अंबड', 'घनसावंगी'],
  'कोल्हापूर': ['करवीर', 'कागल', 'पन्हाळा', 'शाहूवाडी', 'शिरोळ', 'हातकणंगले', 'राधानगरी', 'गगनबावडा', 'भुदरगड', 'आजरा', 'गडहिंग्लज', 'चंदगड'],
  'लातूर': ['लातूर', 'औसा', 'अहमदपूर', 'निलंगा', 'उदगीर', 'चाकूर', 'रेणापूर', 'देवणी', 'शिरूर अनंतपाळ', 'जळकोट'],
  'मुंबई शहर': ['मुंबई शहर'],
  'मुंबई उपनगर': ['कुर्ला', 'अंधेरी', 'बोरीवली'],
  'नागपूर': ['नागपूर', 'नरखेड', 'उमरेड', 'कुही', 'कळमेश्वर', 'काटोल', 'पारशिवनी', 'रामटेक', 'मौदा', 'सावनेर', 'हिंगणा', 'कामठी', 'भिवापूर'],
  'नां‍देड': ['नांदेड', 'बिलोली', 'मुखेड', 'कंधार', 'लोहा', 'हदगाव', 'भोकर', 'देगलूर', 'किनवट', 'मुदखेड', 'हिमायतनगर', 'माहूर', 'अर्धापूर', 'तामसा', 'नायगाव', 'उमरी'],
  'नंदुरबार': ['नंदुरबार', 'शहादा', 'तळोदा', 'अक्राणी', 'अक्कलकुवा', 'नवापूर'],
  'नाशिक': ['नाशिक', 'सिन्नर', 'इगतपुरी', 'त्र्यंबकेश्वर', 'पेठ', 'दिंडोरी', 'निफाड', 'येवला', 'चांदवड', 'कळवण', 'सुरगाणा', 'बागलाण', 'मालेगाव', 'देवळा', 'नांदगाव'],
  'पालघर': ['पालघर', 'वसई', 'डहाणू', 'तलासरी', 'जव्हार', 'मोखाडा', 'वाडा', 'विक्रमगड'],
  'परभणी': ['परभणी', 'जिंतूर', 'सेलू', 'मानवत', 'पाथरी', 'सोनपेठ', 'गंगाखेड', 'पालम', 'पूर्णा'],
  'पुणे': ['हवेली', 'पुणे शहर', 'शिरूर', 'खेड', 'आंबेगाव', 'जुन्नर', 'मावळ', 'मुळशी', 'भोर', 'वेल्हा', 'पुरंदर', 'बारामती', 'इंदापूर', 'दौंड'],
  'रायगड': ['अलिबाग', 'पेण', 'मुरुड', 'पनवेल', 'उरण', 'कर्जत', 'खालापूर', 'माणगाव', 'रोहा', 'तळा', 'सुधागड', 'महाड', 'पोलादपूर', 'म्हसळा', 'श्रीवर्धन'],
  'रत्नागिरी': ['रत्नागिरी', 'चिपळूण', 'लांजा', 'राजापूर', 'संगमेश्वर', 'गुहागर', 'दापोली', 'खेड', 'मंडणगड'],
  'सांगली': ['मिरज', 'तासगाव', 'कवठे महांकाळ', 'जत', 'वाळवा', 'शिराळा', 'खानापूर', 'आटपाडी', 'पलूस', 'कडेगाव'],
  'सातारा': ['सातारा', 'कराड', 'वाई', 'महाबळेश्वर', 'खंडाळा', 'फलटण', 'कोरेगाव', 'खटाव', 'माण', 'पाटण', 'जावली'],
  'सिंधुदुर्ग': ['कुडाळ', 'कणकवली', 'मालवण', 'वेंगुर्ला', 'सावंतवाडी', 'देवगड', 'वैभववाडी', 'दोडामार्ग'],
  'सोलापूर': ['उत्तर सोलापूर', 'दक्षिण सोलापूर', 'बार्शी', 'अक्कलकोट', 'मोहोळ', 'माढा', 'करमाळा', 'पंढरपूर', 'सांगोला', 'माळशिरस', 'मंगळवेढा'],
  'ठाणे': ['ठाणे', 'कल्याण', 'उल्हासनगर', 'अंबरनाथ', 'भिवंडी', 'शहापूर', 'मुरबाड'],
  'वर्धा': ['वर्धा', 'सेलू', 'देवळी', 'हिंगणघाट', 'समुद्रपूर', 'आर्वी', 'आष्टी', 'कारंजा'],
  'वाशिम': ['वाशिम', 'रिसोद', 'मालेगाव', 'मंगरुळपीर', 'कारंजा', 'मानोरा'],
  'यवतमाळ': ['यवतमाळ', 'कळंब', 'बाभुळगाव', 'वणी', 'मारेगाव', 'झरी जामणी', 'केळापूर', 'घाटंजी', 'राळेगाव', 'नेर', 'दारव्हा', 'दिग्रस', 'पुसद', 'उमरखेड', 'महागाव', 'आर्णी']
};

export const maharashtraDistricts = Object.keys(MAHARASHTRA_DISTRICTS_AND_TALUKAS).sort();

export const initialBooks: Book[] = [
  {
    id: 'sutrapath',
    title: 'श्री सूत्रपाठ (Shree Sutrapath)',
    titleEn: 'Shree Sutrapath',
    author: 'श्रीचक्रधर स्वामी (वचन संकलन: केशिराज व्यास)',
    description: 'महानुभाव पंथ का मुख्य धर्मग्रंथ। इसमें सर्वज्ञ श्रीचक्रधर स्वामी के मुखकमल से निकले मूल आध्यात्मिक वचनों का संग्रह है जो पंचकृष्णों के तत्वों की विवेचना करते हैं।',
    descriptionEn: 'The core scripture of the Mahanubhav Sect containing the direct aphorisms spoken by Sarvanya Shree Chakradhar Swami, compiled by Keshiraj Vyas.',
    category: 'pramukh_granth',
    chaptersCount: 4,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop'
  },

  {
    id: 'drishtantapath',
    title: 'श्री दृष्टांतपाठ (Shree Drishtantapath)',
    titleEn: 'Shree Drishtantapath',
    author: 'श्रीचक्रधर स्वामी (संकलन: केशिराज व्यास)',
    description: 'सर्वज्ञ चक्रधर स्वामी द्वारा गहन आध्यात्मिक सिद्धांतों को अत्यंत सरल उदाहरणों (दृष्टांतों) के माध्यम से समझाने वाले वचनों का अनूठा संग्रह।',
    descriptionEn: 'A divine collection of parabolic teachings (parables or examples) used by Swami to simplify complex metaphysical concepts for common people.',
    category: 'pramukh_granth',
    chaptersCount: 114,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'acharpath',
    title: 'श्री आचारपाठ (Shree Acharpath)',
    titleEn: 'Shree Acharpath',
    author: 'श्रीचक्रधर स्वामी (संकलन: केशिराज व्यास)',
    description: 'महानुभाव साधकों के लिए दैनिक जीवन, आचरण, शुचिता और संयम के नियमों को निर्धारित करने वाला महत्वपूर्ण ग्रंथ।',
    descriptionEn: 'Rules of behavior, conduct, and purity for Mahanubhav seekers and monks.',
    category: 'pramukh_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'vicharpath',
    title: 'श्री विचारपाठ (Shree Vicharpath)',
    titleEn: 'Shree Vicharpath',
    author: 'श्रीचक्रधर स्वामी (संकलन: केशिराज व्यास)',
    description: 'आध्यात्मिक चिंतन, विचार शैली, और दार्शनिक सिद्धांतों पर गहन प्रकाश डालने वाला महानुभाव धर्मग्रंथ।',
    descriptionEn: 'Sutras related to spiritual philosophy and thought processes.',
    category: 'pramukh_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'vachanamrut',
    title: 'श्री वचनामृत (Shree Vachanamrut)',
    titleEn: 'Shree Vachanamrut',
    author: 'श्रीचक्रधर स्वामी',
    description: 'सर्वज्ञ चक्रधर स्वामी महाराज के दिव्य अमृत वचनों का संग्रह जो सीधे मोक्ष प्राप्ति का पथ प्रशस्त करते हैं।',
    descriptionEn: 'The direct nectarian teachings and spiritual advices of Shree Chakradhar Swami.',
    category: 'pramukh_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'lakshanratnakar',
    title: 'लक्षणरत्नाकर (Lakshanratnakar)',
    titleEn: 'Lakshanratnakar',
    author: 'केशिराज व्यास (Keshiraj Vyas)',
    description: 'महानुभाव दर्शन के अनुसार जीवों, देवताओं, प्रपंच और परमेश्वर के दिव्य लक्षणों का सविस्तार विवेचन करने वाला शास्त्र।',
    descriptionEn: 'Analytical treatise on the physical and spiritual traits of deities, souls, and the supreme being.',
    category: 'pramukh_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'prakaranvas',
    title: 'प्रकरणवश / प्रकरणग्रंथ (Prakaranvas)',
    titleEn: 'Prakaranvas / Prakaran Granth',
    author: 'म्हाइंभट व अन्य आचार्य',
    description: 'महानुभाव संप्रदाय के विभिन्न दार्शनिक प्रकरणों और अध्यायों का महत्वपूर्ण संग्रह।',
    descriptionEn: 'Important sections and treatises on Mahanubhav theology.',
    category: 'pramukh_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'niruktashesh',
    title: 'निरुक्तशेष (Niruktashesh)',
    titleEn: 'Niruktashesh',
    author: 'केशिराज व्यास (Keshiraj Vyas)',
    description: 'सूत्रपाठ और दर्शन ग्रंथों के कठिन शब्दों की व्युत्पत्ति, व्याकरण और आध्यात्मिक अर्थ स्पष्ट करने वाला शब्दकोश ग्रंथ।',
    descriptionEn: 'Etymological vocabulary and explanation of complex terminology in Sutrapath.',
    category: 'pramukh_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'panchakrishna_charitra',
    title: 'पंचकृष्ण चरित्र ग्रंथ (Panchakrishna Charitra)',
    titleEn: 'Panchakrishna Charitra Granth',
    author: 'म्हाइंभट व सनातन ग्रंथकार',
    description: 'महानुभाव पंथ के पांचों ईश्वरीय अवतारों - श्रीकृष्ण, श्रीदत्तात्रेय, श्रीचांगदेव राऊळ, श्रीचक्रपाणि और श्रीचक्रधर स्वामी के पावन चरित्रों का संकलन।',
    descriptionEn: 'Holy life stories of the five divine incarnations of the Mahanubhav order.',
    category: 'pramukh_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'shreekrishnacharitra',
    title: 'श्रीकृष्णचरित्र (Shree Krishna Charitra)',
    titleEn: 'Shree Krishna Charitra',
    author: 'म्हाइंभट (Mhaimbhat)',
    description: 'द्वारकावतार भगवान श्रीकृष्ण के जीवन, बाललीलाओं और श्रीमद्भगवद्गीता के संदेशों पर आधारित भक्तिमय वर्णन।',
    descriptionEn: 'Biographical and spiritual stories of Lord Krishna in Mahanubhav perspective.',
    category: 'pramukh_granth',
    chaptersCount: 40,
    coverImage: 'https://images.unsplash.com/photo-1561344640-2453889cda5b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'shreedattatreyacharitra',
    title: 'श्रीदत्तात्रेयचरित्र (Shree Dattatreya Charitra)',
    titleEn: 'Shree Dattatreya Charitra',
    author: 'आदि भक्ताग्रणी',
    description: 'अत्रि-अनुसूया नंदन भगवान श्रीदत्तात्रेय प्रभु के दिव्य स्वरूप, ज्ञानयोग और उनकी पावन अवतार लीलाओं का विवरण।',
    descriptionEn: 'The spiritual accounts and divine manifestations of Lord Dattatreya.',
    category: 'pramukh_granth',
    chaptersCount: 14,
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'shreechangdevraulcharitra',
    title: 'श्री चांगदेव राऊळ चरित्र (Shree Changdev Raul Charitra)',
    titleEn: 'Shree Changdev Raul Charitra',
    author: 'म्हाइंभट (Mhaimbhat)',
    description: 'द्वारकापीठ के अधिपति और महानुभाव पंथ के तृतीय अवतार श्री चांगदेव राऊळ महाराज के बाल्यकाल और साधना लीलाओं का पावन संग्रह।',
    descriptionEn: 'Holy biography of Shree Changdev Raul Maharaj, the third incarnation.',
    category: 'pramukh_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'shreegovindaprabhucharitra',
    title: 'श्री गोविंदप्रभु चरित्र (Shree Govindaprabhu Charitra)',
    titleEn: 'Shree Govindaprabhu Charitra',
    author: 'म्हाइंभट (Mhaimbhat)',
    description: 'भगवान श्री गोविंदप्रभु महाराज (गुंडम करुण्य) के ऋद्धपूर धाम में की गई पावन, अद्भुत और करुणामयी लीलाओं का प्रामाणिक चरित्र।',
    descriptionEn: 'The legendary and compassionate Leelas of Lord Govindaprabhu at Ridhpur.',
    category: 'pramukh_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'shreechakradharswamicharitra',
    title: 'श्रीचक्रधर स्वामी चरित्र (Shree Chakradhar Swami Charitra)',
    titleEn: 'Shree Chakradhar Swami Charitra',
    author: 'म्हाइंभट (Mhaimbhat)',
    description: 'महानुभाव पंथ के संस्थापक सर्वज्ञ श्रीचक्रधर स्वामी महाराज के संपूर्ण जीवन वृत्त, साधनाकाल और भक्त-उद्धार की लीलाओं का महाग्रंथ।',
    descriptionEn: 'The full divine biography of the founder, Lord Chakradhar Swami.',
    category: 'pramukh_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1472214222541-d510753a4907?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'avtarlakshan',
    title: 'अवतारलक्षण (Avtarlakshan)',
    titleEn: 'Avtarlakshan',
    author: 'केशिराज व्यास',
    description: 'ईश्वरी अवतार के बत्तीस दिव्य शारीरिक व आध्यात्मिक लक्षणों का सूक्ष्म विवेचन करने वाला महत्वपूर्ण सैद्धांतिक ग्रंथ।',
    descriptionEn: 'Detailed commentary on the 32 divine attributes of a divine incarnation.',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'sutrapath_tika',
    title: 'सूत्रपाठ टीका व भाष्य (Sutrapath Tika)',
    titleEn: 'Sutrapath Tika',
    author: 'प्राचीन आचार्य व विद्वान',
    description: 'श्री सूत्रपाठ के गूढ़ आध्यात्मिक वचनों और सूत्रों को सुगम भाषा में समझाने के लिए लिखी गई प्राचीन टीकाएं।',
    descriptionEn: 'Traditional interpretations and annotations on the core Sutrapath aphorisms.',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'drishtantapath_tika',
    title: 'दृष्टांतपाठ टीका (Drishtantapath Tika)',
    titleEn: 'Drishtantapath Tika',
    author: 'प्राचीन महानुभाव भाष्यकार',
    description: 'सर्वज्ञ चक्रधर स्वामी के दृष्टांतों (उदारहणों) के भीतर छिपे दार्शनिक अर्थ और आध्यात्मिक संदेशों का विवेचन।',
    descriptionEn: 'Analytical commentaries on the parables of Shree Drishtantapath.',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'mahabhashya',
    title: 'महाभाष्य (Mahabhashya)',
    titleEn: 'Mahabhashya',
    author: 'केशिराज व्यास व प्राचीन आचार्य',
    description: 'महानुभाव संप्रदाय के दर्शन, जीव-जगत संबंध और ब्रह्मविद्या के मूल तत्वों पर रचित सर्वश्रेष्ठ प्रामाणिक भाष्य।',
    descriptionEn: 'The supreme theological and philosophical commentary of the sect.',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'brahmavidya',
    title: 'ब्रह्मविद्या शास्त्र (Brahmavidya Shastra)',
    titleEn: 'Brahmavidya Shastra',
    author: 'महेंद्रभट / केशिराज व्यास',
    description: 'ईश्वर के निर्गुण व सगुण स्वरूप, ब्रह्मज्ञान और मोक्ष मार्ग का गहन प्रतिपादन करने वाला सैद्धांतिक ग्रंथ।',
    descriptionEn: 'Scientific exploration of Divine Knowledge and ultimate liberation.',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1491841573190-711c0337ffea?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'jnanprabodh',
    title: 'ज्ञानप्रबोध (Jnana Prabodh)',
    titleEn: 'Jnana Prabodh',
    author: 'विश्वनाथ बाळकृष्ण',
    description: 'महानुभाव साती ग्रंथों में समाविष्ट, ज्ञान, भक्ति और वैराग्य के दिव्य सिद्धांतों को जाग्रत करने वाला उत्तम पद्य ग्रंथ।',
    descriptionEn: 'A masterwork on spiritual awakening and philosophy in verse form.',
    category: 'sati_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'tattvasar',
    title: 'तत्त्वसार (Tattvasar)',
    titleEn: 'Tattvasar',
    author: 'प्राचीन दार्शनिक संत',
    description: 'महानुभाव दर्शन का सार-संग्रह, जिसमें अत्यंत संक्षेप में अध्यात्म के गूढ़ रहस्यों को सुलझाया गया है।',
    descriptionEn: 'The essential core of Mahanubhav metaphysical philosophy.',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'viveksindhu',
    title: 'विवेकसिंधू (Viveksindhu)',
    titleEn: 'Viveksindhu',
    author: 'मुकुंदराज (महानुभाव परंपरेत अभ्यासला जाणारा ग्रंथ)',
    description: 'विवेक और वैराग्य का महासागर। मराठी साहित्य का अत्यंत प्राचीन ग्रंथ जिसे महानुभाव परंपरा में गहरे ज्ञान अर्जन हेतु पढ़ा जाता है।',
    descriptionEn: 'One of the earliest philosophical texts in Marathi literature, focused on intellect and detachment.',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'poojavasar',
    title: 'पूजावसर (Poojavasar)',
    titleEn: 'Poojavasar',
    author: 'म्हाइंभट व प्राचीन पूजक',
    description: 'परमेश्वर की दैनिक पूजा-अर्चना, षोडशोपचार विधि और पूजा के समय गाए जाने वाले पदों का प्रामाणिक संकलन।',
    descriptionEn: 'Guidelines and hymns for daily ritualistic worship of the Lord.',
    category: 'pujavsar',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'aarti_sangrah',
    title: 'आरती संग्रह (Aarti Sangrah)',
    titleEn: 'Aarti Sangrah',
    author: 'परंपरागत भक्त',
    description: 'पंचकृष्ण अवतारों, पवित्र स्थानों और महानुभाव संतों की भावपूर्ण आरतियों का संग्रह।',
    descriptionEn: 'A collection of devotional lamp ceremonies (Aartis) dedicated to Panchakrishna.',
    category: 'aarti_stotra',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1609137144813-979434863ab9?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'stotra_sangrah',
    title: 'स्तोत्र संग्रह (Stotra Sangrah)',
    titleEn: 'Stotra Sangrah',
    author: 'प्राचीन आचार्य',
    description: 'संस्कृत और प्राकृत भाषाओं में रचित पंचकृष्णों के दिव्य स्तोत्रों और प्रार्थनाओं का पावन संकलन।',
    descriptionEn: 'Hymns and praise eulogies for personal contemplation and recitation.',
    category: 'aarti_stotra',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'nityapath',
    title: 'नित्यपाठ (Nityapath)',
    titleEn: 'Nityapath',
    author: 'सर्वज्ञ चक्रधर स्वामी उपदेशित',
    description: 'साधकों के लिए नित्य पठन हेतु उपयोगी सूत्र, वन्दना श्लोक और मंगलकारी पदों का संग्रह।',
    descriptionEn: 'Daily prayer book and scriptures for spiritual seekers.',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'namasmaran_sangrah',
    title: 'नामस्मरण संग्रह (Namasmaran Sangrah)',
    titleEn: 'Namasmaran Sangrah',
    author: 'म्हाइंभट व अनुयायी',
    description: 'पंचकृष्ण नामजप की महत्ता और ध्यान की विभिन्न विधियों का संकलन जो चित्त शुद्धि करता है।',
    descriptionEn: 'The practice and praise of divine name chanting of the Panchakrishna.',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'prarthana_sangrah',
    title: 'प्रार्थना संग्रह (Prarthana Sangrah)',
    titleEn: 'Prarthana Sangrah',
    author: 'महानुभाव पूजनीय संत',
    description: 'भक्तों द्वारा संकट निवारण, आत्मोद्धार और भक्ति की प्राप्ति हेतु गाई जाने वाली मधुर प्रार्थनाओं का संकलन।',
    descriptionEn: 'Collection of divine prayers and submission of surrender (Sharanagati).',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'smrutisthal',
    title: 'स्मृतिस्थळ (Smrutisthal)',
    titleEn: 'Smrutisthal',
    author: 'नरेन्द्र व प्राचीन लेखक',
    description: 'स्वामी चक्रधर के प्रयाण के उपरांत नागदेवाचार्य और अन्य शिष्यों के संस्मरणों, चरित्र और महानुभाव संघ के प्रसार का इतिहास।',
    descriptionEn: 'The historical records of the post-Chakradhar era and early disciples like Nagdevacharya.',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://cdn.soft112.com/mahanubhav-smritisthal/00/00/0G/GM/00000GGMYY/pad_screenshot.png'
  },
  {
    id: 'sthanpothi',
    title: 'स्थानपोथी (Sthanpothi)',
    titleEn: 'Sthanpothi',
    author: 'मुनि व्यास',
    description: 'सर्वज्ञ श्रीचक्रधर स्वामी और श्री गोविंदप्रभु महाराज की चरणधूलि से पावन हुए सभी तीर्थ स्थानों (ओटे, स्थान) का भूगोल और प्रामाणिक मार्गदर्शिका।',
    descriptionEn: 'Geographical cataloging and history of all holy places visited by the incarnations.',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'sati_granth',
    title: 'साती ग्रंथ (Sati Granth)',
    titleEn: 'Sati Granth',
    author: 'महानुभाव कवि पंचक',
    description: 'महानुभाव पंथ के अत्यंत प्रसिद्ध सात पद्य ग्रंथ: शिशुपालवध, रुक्मिणी स्वयंवर, सह्याद्रीवर्णन, मूर्तिप्रकाश, वत्सहरण, ऋद्धिपूरवर्णन और ज्ञानप्रबोध।',
    descriptionEn: 'The famous seven poetic masterpieces recognized by the Mahanubhav literary traditional canon.',
    category: 'sati_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1474932430478-367db26830c1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dhavale',
    title: 'धवळे (Dhavale)',
    titleEn: 'Dhavale',
    author: 'महदंबा (Mahadamba)',
    description: 'मराठी की सर्वप्रथम कवयित्री महदंबा द्वारा रचित मंगलकारी विवाह गीत, जिसमें श्रीकृष्ण-रुक्मिणी विवाह का रसमय वर्णन है।',
    descriptionEn: 'The sacred, auspicious songs composed by Mahadamba, Marathi’s first poetess.',
    category: 'itar_sahity',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'rukmini_swayamvar',
    title: 'रुक्मिणी स्वयंवर (Rukmini Swayamvar)',
    titleEn: 'Rukmini Swayamvar',
    author: 'नरेन्द्र पंडित (Narendra Pandit)',
    description: 'साती ग्रंथों में प्रथम। श्रीकृष्ण और रुक्मिणी जी के अलौकिक प्रेम और विवाह प्रसंग का अद्भुत शृंगारिक व आध्यात्मिक काव्य वर्णन।',
    descriptionEn: 'A masterpiece depicting the holy union and marriage of Krishna and Rukmini.',
    category: 'sati_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'murtiprakash',
    title: 'मूर्तिप्रकाश (Murtiprakash)',
    titleEn: 'Murtiprakash',
    author: 'केशिराज व्यास (Keshiraj Vyas)',
    description: 'सर्वज्ञ श्रीचक्रधर स्वामी के दिव्य, सगुण और मनोहारी शारीरिक सौंदर्य का शिख-नख अत्यंत प्रेमपूर्ण व भक्तिमय काव्य वर्णन।',
    descriptionEn: 'Poetic description detailing the glorious sanyasi form of Shree Chakradhar Swami.',
    category: 'sati_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'sahyadrivarnan',
    title: 'सह्याद्रीवर्णन (Sahyadrivarnan)',
    titleEn: 'Sahyadrivarnan',
    author: 'रविंद्र पंडित',
    description: 'भगवान श्री दत्तात्रेय प्रभु के निवास स्थान सह्याद्री पर्वत के पावन वातावरण, वनों और उनके महात्म्य का अनुपम वर्णन।',
    descriptionEn: 'Poetic praise of the Sahyadri mountains, the sacred abode of Lord Dattatreya.',
    category: 'sati_granth',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'chakradhar_aarti',
    title: 'श्रीचक्रधर स्वामी आरती व स्तोत्र संग्रह',
    titleEn: 'Shree Chakradhar Swami Aarti & Stotra Sangrah',
    author: 'महानुभाव संप्रदाय आचार्य',
    description: 'सर्वज्ञ चक्रधर स्वामी महाराज, दत्तात्रेय प्रभु आणि पंचकृष्णांच्या अत्यंत मंगलकारी आणि रसमय आरत्या, अष्टके आणि स्तोत्रांचे पावन संकलन।',
    descriptionEn: 'Sacred compilation of prayers, hymns, and aartis dedicated to Lord Chakradhar and Panchakrishna.',
    category: 'aarti_stotra',
    chaptersCount: 2,
    coverImage: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'm_bhajanavali',
    title: 'महानुभाव भजनावली (Mahanubhav Bhajanavali)',
    titleEn: 'Mahanubhav Bhajanavali',
    author: 'महंत आणि पूजनीय कवी',
    description: 'संप्रदायातील प्राचीन आणि अर्वाचीन महंतांनी रचलेल्या भक्तिमय भजनांचा अपूर्व संग्रह, जो भक्तांना ध्यान आणि नामस्मरणात लीन करतो।',
    descriptionEn: 'Divine collection of traditional Mahanubhav bhajans and devotional poetry.',
    category: 'bhajan',
    chaptersCount: 2,
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'shree_pujavsar',
    title: 'श्री पूजावसर पाठ (Shree Pujavasar Path)',
    titleEn: 'Shree Pujavasar Path',
    author: 'प्राचीन महानुभाव आचार्य',
    description: 'दैनंदिन ईश्वरीय सेवेची आणि पूजेची विधी, मंत्र आणि वचनांचे संकलन, जे साधकाला नित्य कर्मामध्ये मार्गदर्शन करते।',
    descriptionEn: 'The traditional manual of daily worship, prayers, and rituals for Mahanubhav devotees.',
    category: 'pujavsar',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1609137144813-2dbe4836ca91?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'sutrapath_parayan',
    title: 'श्री सूत्रपाठ पारायण पद्धती',
    titleEn: 'Shree Sutrapath Parayan Paddhati',
    author: 'केशिराज व्यास (संपादक)',
    description: 'सूत्रपाठाचे नित्य पठण आणि पारायण करण्यासाठी विशेष रितीने तयार केलेला पारायण ग्रंथ, ज्यामध्ये वचनांची सुयोग्य मांडणी केली आहे।',
    descriptionEn: 'Daily recitation guide and parayan edition of Shree Sutrapath with traditional arrangement.',
    category: 'parayn',
    chaptersCount: 1,
    coverImage: 'https://images.unsplash.com/photo-1491841573634-28140fc7ccd7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'sthan_darshan',
    title: 'स्थान दर्शन (Sthan Darshan Map & Guide)',
    titleEn: 'Sthan Darshan (Holy Places Guide)',
    author: 'सर्वज्ञ श्रीचक्रधर स्वामी लीला-स्थान संकलन',
    description: 'महानुभाव पंथाच्या अत्यंत पवित्र, पावन आणि ऐतिहासिक तीर्थक्षेत्रांची आणि लीळा स्थानांची संपूर्ण माहिती, दिशा व थेट गुगल मॅप्स लोकेशनसह।',
    descriptionEn: 'Complete guide of holy places, footprint temples and historic Leela Sthans of Mahanubhav Panth with coordinates and direct Google Maps.',
    category: 'pramukh_granth',
    chaptersCount: 10,
    coverImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=600&auto=format&fit=crop'
  }
];

export const initialChapters: Chapter[] = [
  {
    id: 'dp_1',
    bookId: 'drishtantapath',
    number: 1,
    title: 'दृष्टांत १: सुवर्णकार दृष्टांत (The Goldsmith Parable)',
    titleEn: 'The Goldsmith Parable',
    content: 'जैसे एक सुवर्णकार सोन्याचे अलंकार बनवताना त्यातील मळी अग्नीच्या साहाय्याने दूर करतो, आणि शुद्ध सोने मिळवतो. त्याचप्रमाणे परमेश्वर आपल्या भक्ताचे मन दुःख आणि कर्माच्या भट्टीमध्ये टाकून शुद्ध करतो, जेणेकरून भक्त ज्ञानासाठी पात्र बनेल।',
    explanation: 'इस दृष्टांत में स्वामी समझाते हैं कि जीवन में आने वाले दुःख और कठिन प्रसंग हमारे पूर्वकर्मों के शोधन की प्रक्रिया हैं, जिससे आत्मा पवित्र और तेजस्वी बनती है।'
  }
,
  {
    id: 'dp_2',
    bookId: 'drishtantapath',
    number: 2,
    title: 'दृष्टांत २: बीजाचे रोपटे दृष्टांत (The Seed and the Plant)',
    titleEn: 'The Seed and the Plant',
    content: 'एक लहान बीज जेव्हा जमिनीमध्ये समर्पित होते, तेव्हाच त्यापासून विशाल आणि फळ देणारा वृक्ष तयार होतो. जर बीज स्वतःचे अस्तित्व टिकवून ठेवेल, तर ते कोरडेच राहील. तसेच मानवाने जेव्हा आपला अहंकार नष्ट करून शरण जावे, तेव्हाच आध्यात्मिक उन्नती होते।',
    explanation: 'अहंकार के त्याग और संपूर्ण शरणागति का महत्व। जब जीव स्वयं को परमेश्वर के चरणों में विलीन कर देता है, तभी वास्तविक मोक्ष का अंकुर फूटता है।'
  }
,
  {
    id: 'dp_3',
    bookId: 'drishtantapath',
    number: 3,
    title: 'दृष्टांत ३: सिंह दृष्टांत (The Lion Cub Parable)',
    titleEn: 'The Lion Cub Parable',
    content: 'एक सिंहाचे पिल्लू मेंढरांच्या कळपात वाढल्यामुळे स्वतःला मेंढी समजू लागले आणि मेंढरांसारखे ओरडू लागले. नंतर एका दुसऱ्या सिंहाने त्याला विहिरीतील त्याचे प्रतिबिंब दाखवून त्याच्या खऱ्या सिंह असण्याची व सामर्थ्याची जाणीव करून दिली. त्याचप्रमाणे जीव अज्ञानामुळे स्वतःला संसारी व दुर्बळ समजतो, परंतु सद्गुरू त्याला आत्मस्वरूपाची आणि अमर्याद शक्तीची जाणीव करून देतात।',
    explanation: 'अज्ञानावस्थेतून आत्मज्ञानाकडे जाण्याचा मार्ग। जीव संसारात गुरफटला आहे, पण सद्गुरूच्या दिव्य उपदेशाने आणि कृपेने त्याला स्वतःच्या मूळ दिव्य रूपाची प्रचिती येते आणि तो बंधनांतून मुक्त होतो।'
  }
,
  {
    id: 'dp_4',
    bookId: 'drishtantapath',
    number: 4,
    title: 'दृष्टांत ४: लोह व लोहकांत दृष्टांत (Magnet and Iron Parable)',
    titleEn: 'Magnet and Iron Parable',
    content: 'लोखंड जसे लोहचुंबकाच्या (लोहकांत) संपर्कात येताच त्याच्याकडे तीव्रतेने आकर्षित होते आणि त्याला चिकटून राहते. त्याचप्रमाणे शुद्ध निष्पाप भाव असलेला जीव जेव्हा परमेश्वर किंवा अवतारी पुरुषाच्या सन्निध येतो, तेव्हा तो आपोआप भगवंताच्या दिव्य स्वरूपाकडे आकर्षित होतो आणि भक्तिभावात तल्लीन होतो।',
    explanation: 'ईश्वरी सान्निध्याचे आकर्षण आणि भक्तीचा मूळ स्वभाव। भगवंताची अथांग कृपा आणि भक्ताचा शुद्ध भाव एकत्र आले की मनाची अनन्य ओढ निर्माण होते, हे या उदाहरणावरून स्पष्ट होते।'
  }
,
  {
    id: 'dp_5',
    bookId: 'drishtantapath',
    number: 5,
    title: 'दृष्टांत ५: चातक पक्षी दृष्टांत (The Chatak Bird Parable)',
    titleEn: 'The Chatak Bird Parable',
    content: 'चातक पक्षी जसा केवळ आकाशातील मेघांमधून पडणाऱ्या पावसाच्या पहिल्या पावन थेंबाची (स्वाती नक्षत्राचे पाणी) वाट पाहतो, तलाव, विहीर किंवा नदीचे पाणी तो कधीही प्राशन करत नाही. त्याचप्रमाणे खरा अनन्य भक्त केवळ भगवंताच्या कृपाप्रसादाची आणि दर्शनाची आस धरून राहतो, इतर कोणत्याही लौकिक सुखांची मुळीच इच्छा करत नाही।',
    explanation: 'एकनिष्ठता आणि अनन्य भक्तीचे परम आदर्श रूप। साधकाचे लक्ष केवळ ईश्वरावरच एकाग्र असावे, संसारातील इतर क्षणभंगुर भौतिक सुखांनी त्याचे चित्त विचलित होऊ नये, हा संदेश मिळतो।'
  }
,
  {
    id: 'dp_6',
    bookId: 'drishtantapath',
    number: 6,
    title: 'दृष्टांत ६: परिसाचा दृष्टांत (The Touchstone Parable)',
    titleEn: 'The Touchstone Parable',
    content: 'लोखंड कितीही जुने किंवा गंजलेले असले तरी ते जेव्हा परिसाच्या संपर्कात येते, तेव्हा त्याचे रूपांतर तात्काल मौल्यवान सोन्यामध्ये होते. तसेच सामान्य संसारी जीव जेव्हा अवतारी पुरुषाच्या किंवा सद्गुरूंच्या संगतीमध्ये येतो, तेव्हा त्याचे सर्व पाप आणि अज्ञान नष्ट होऊन त्याला मोक्षाचा दिव्य मार्ग प्राप्त होतो।',
    explanation: 'सत्संगतीचे अलौकिक महात्म्य। दुर्गुणांनी भरलेला जीव देखील ईश्वरी विचारांच्या आणि सद्गुरूंच्या सान्निध्यात आल्यावर कसा पावन आणि गुणांनी परिपूर्ण होतो, याचे सुंदर वर्णन परिसाच्या उदाहरणाने केले आहे।'
  }
,
  {
    id: 'dp_7',
    bookId: 'drishtantapath',
    number: 7,
    title: 'दृष्टांत ७: गज आणि अंध दृष्टांत (The Blind Men and Elephant Parable)',
    titleEn: 'The Blind Men and Elephant Parable',
    content: 'काही जन्मांध व्यक्ती हत्तीच्या वेगवेगळ्या अवयवांना स्पर्श करून हत्तीचे स्वरूप ठरवू लागतात. ज्याने पाय स्पर्श केला तो हत्तीला खांबासारखा म्हणतो, ज्याने कान स्पर्श केला तो सुपासारखा म्हणतो, तर ज्याने शेपूट पाहिले तो दोरीसारखा म्हणतो. परंतु हत्ती पूर्णपणे वेगळा असतो. त्याचप्रमाणे अज्ञानी लोक परमेश्वराच्या केवळ एकाच रूपाला संपूर्ण सत्य समजून आपसात भांडत राहतात।',
    explanation: 'सर्वसमावेशकता आणि मानवी बुद्धीच्या मर्यादा। परमेश्वर अनंत गुणांचा सागर आहे, संकुचित बुद्धीने केवळ त्याचे अंशिक आकलन होऊ शकते. ईश्वराचा पूर्ण साक्षात्कार केवळ सद्गुरूंच्या दिव्य ज्ञानानेच शक्य आहे।'
  }
,
  {
    id: 'dp_8',
    bookId: 'drishtantapath',
    number: 8,
    title: 'दृष्टांत ८: श्वानाचा हाड दृष्टांत (The Dog and Bone Parable)',
    titleEn: 'The Dog and Bone Parable',
    content: 'एक कुत्रा कोरडे हाड अत्यंत चवीने चघळताना त्याच्या स्वतःच्याच हिरड्यांमधून रक्त निघू लागते. त्या रक्ताची चव चाखून कुत्र्याला वाटते की त्या कोरड्या हाडातूनच हा रुचकर रस येत आहे. तसेच अज्ञानी मनुष्य संसारातील जड आणि अनित्य विषयांमध्ये सुख शोधत राहतो, तर ते सुख त्याच्या स्वतःच्या मनाच्या कल्पनेतून निर्माण झालेले असते आणि शेवटी त्याला दुःखच प्राप्त होते।',
    explanation: 'सांसारिक सुखाचा खोटा आभास। बाह्य वस्तूंमध्ये वास्तविक सुख नसून ते आपल्या अंतकरणात आहे, पण अज्ञानामुळे जीव बाह्य जगात सुखाचा शोध घेऊन दुःख ओढवून घेतो।'
  }
,
  {
    id: 'dp_9',
    bookId: 'drishtantapath',
    number: 9,
    title: 'दृष्टांत ९: कासवीचा दृष्टांत (The Tortoise and Her Offspring Parable)',
    titleEn: 'The Tortoise and Her Offspring Parable',
    content: 'कासवी आपल्या पिल्लांना सतत जवळ न घेता किंवा स्पर्श न करता, केवळ अतिशय प्रेमाने आणि मायेने त्यांच्याकडे पाहून (दृष्टीनेच) त्यांचे पालनपोषण व रक्षण करते. तसेच परमेश्वर आपल्या भक्तांचे कल्याण आणि संगोपन बाह्य भौतिक्तेशिवाय केवळ आपल्या परम करुणामयी कृपाकटाक्षाने आणि स्मरणाने करतो।',
    explanation: 'ईश्वराची अतींद्रिय आणि सूक्ष्म कृपा। भगवंताची कृपा सर्वव्यापी आहे. तो बाह्य जगापासून दूर भासत असला तरी आपल्या अनन्य भक्तांच्या योगक्षेमाची काळजी केवळ कृपा नजरेने घेतो।'
  }
,
  {
    id: 'dp_10',
    bookId: 'drishtantapath',
    number: 10,
    title: 'दृष्टांत १०: उदक आणि तुषार दृष्टांत (Water and Wave Parable)',
    titleEn: 'Water and Wave Parable',
    content: 'पाणी आणि पाण्याचे तरंग किंवा तुषार (पाण्याचे थेंब) दिसायला वेगळे आणि भिन्न भासत असले तरी मूळ स्वरूपात ते केवळ एकच पाणी आहेत. तरंग पाण्यातूनच उत्पन्न होतात आणि शेवटी पाण्यातच विलीन होतात. तसेच ही संपूर्ण सृष्टी आणि जीव ईश्वरापासून निर्माण झाले आहेत आणि मूळ रूपात त्या परम कृपाळू परमात्म्याचेच अंश आहेत।',
    explanation: 'ईश्वर आणि जीवाचा अभेद संबंध। परमेश्वर आणि त्याचा अंश असलेला जीव यांच्यातील मूळ संबंध स्पष्ट करून, संसारातील अज्ञानामुळे निर्माण झालेली भेदबुद्धी नष्ट करणे, हाच याचा मूळ उद्देश आहे।'
  }
,
  {
    id: 'dp_11',
    bookId: 'drishtantapath',
    number: 11,
    title: 'दृष्टांत ११: पंगूचा दृष्टांत (The Lame Man Parable)',
    titleEn: 'The Lame Man Parable',
    content: 'जो मनुष्य पाय नसल्यामुळे अपंग (पंगू) आहे, तो स्वतःच्या बळावर मोठा दुर्गम मार्ग कधीही पार करू शकत नाही. परंतु जेव्हा त्याला राजाच्या रथात किंवा एखाद्या बलवान व्यक्तीच्या खांद्यावर बसवले जाते, तेव्हा तो सहज इच्छित स्थळी पोहोचतो. तसेच संसारी जीव स्वतःच्या बळावर मोक्ष मिळवू शकत नाही, त्याला भगवंताच्या कृपारूपी रथाची अनन्य गरज असते।',
    explanation: 'ईश्वरी कृपेचे सर्वोच्च महत्त्व आणि शरणागती। आत्मशक्तीच्या मर्यादा ओळखून जेव्हा जीव ईश्वराला अनन्य भावे शरण जातो, तेव्हा भगवंत स्वतः त्याला या भयंकर संसारातून सहजपणे तारून नेतात।'
  }
,
  {
    id: 'dp_12',
    bookId: 'drishtantapath',
    number: 12,
    title: 'दृष्टांत १२: कस्तुरी मृग दृष्टांत (The Musk Deer Parable)',
    titleEn: 'The Musk Deer Parable',
    content: 'कस्तुरी मृगाच्या स्वतःच्याच नाभीमध्ये अत्यंत सुवासिक आणि दुर्मिळ कस्तुरी असते, परंतु त्या मधुर सुवासाने वेडा होऊन तो संपूर्ण घनदाट जंगलात त्याचा शोध घेत इकडे-तिकडे धावतो. त्याला हे माहित नसते की तो अमूल्य सुगंध त्याच्या आतूनच येत आहे. तसेच अज्ञानी मनुष्य आपल्या स्वतःच्या हृदयात असलेल्या ईश्वराला शोधण्यासाठी बाह्य जगात आणि तीर्थक्षेत्री आयुष्यभर भटकत राहतो।',
    explanation: 'अंतर्यामी ईश्वराचा साक्षात्कार। परमेश्वर प्रत्येक जीवाच्या हृदयात सतत वास करतो. बाह्य जगात त्याला शोधण्याऐवजी आत्मपरीक्षणाने आणि ध्यानाने स्वतःच्या अंतकरणात डोकावून पाहिल्यास त्याचा साक्षात्कार होतो।'
  }
,
  {
    id: 'dp_13',
    bookId: 'drishtantapath',
    number: 13,
    title: 'दृष्टांत १३: अमृत विहीर दृष्टांत (The Well of Nectar Parable)',
    titleEn: 'The Well of Nectar Parable',
    content: 'एका गावानजीक अमृताची विहीर असते, पण लोक तिच्या गोडव्याला न जाणता सामान्य विहिरीचे खारट पाणी पितात. तसेच परमेश्वर कृपाळू असून त्याच्याकडे मोक्षाचे अमृत आहे, पण संसारी जीव त्याच्याकडे न वळता मायेच्या क्षणभंगुर आणि खारट सुखांच्या मागे धावत राहतो।',
    explanation: 'ईश्वरी आनंदाचे श्रेष्ठत्व आणि सांसारिक सुखांचे तुच्छत्व। मोक्षाच्या अमृतमय सुखाची तुलना खारट पाण्याशी करून मानवी अज्ञानाचा मार्ग दाखवला आहे।'
  }
,
  {
    id: 'dp_14',
    bookId: 'drishtantapath',
    number: 14,
    title: 'दृष्टांत १४: दर्दुर आणि कमल दृष्टांत (The Frog and the Lotus Parable)',
    titleEn: 'The Frog and the Lotus Parable',
    content: 'कमळाच्या फुलाजवळ राहणारा बेडूक कमळाचा सुवास आणि मधुर मध न घेता केवळ चिखल खातो, तर लांबून आलेला भ्रमर (मधमाशी) कमळातील मध गोळा करतो. तसेच भगवंताच्या अगदी जवळ राहणारे संसारी लोक (किंवा सामान्य जन) त्यांचे महत्त्व जाणू शकत नाहीत, तर लांबचे निष्पाप भाव असलेले भक्त त्यांच्या कृपेचे मानकरी बनतात।',
    explanation: 'सान्निध्याचे महत्त्व आणि खरं आकलन। परमेश्वराच्या भौतिक सान्निध्यापेक्षा त्याच्याबद्दल असणारा आंतरिक भक्तीभाव श्रेष्ठ आहे, हा संदेश मिळतो।'
  }
,
  {
    id: 'dp_15',
    bookId: 'drishtantapath',
    number: 15,
    title: 'दृष्टांत १५: रायाचा पुत्र दृष्टांत (The Lost Prince Parable)',
    titleEn: 'The Lost Prince Parable',
    content: 'एका राजाचा लहान मुलगा हरवतो आणि तो भिकाऱ्यांच्या टोळीत वाढल्यामुळे स्वतःला भिकारी समजू लागतो. नंतर त्याला ओळखणाऱ्या एका मंत्र्याने त्याला त्याच्या राजपुत्र असण्याची आणि सिंहासनाची जाणीव करून दिली, तेव्हा तो सर्व दारिद्र्य विसरून महालात परततो. त्याचप्रमाणे जीव स्वतःला संसारी समजतो, परंतु गुरुदेव त्याला ईश्वरी पुत्राचे स्मरण करून देतात।',
    explanation: 'जीवाचे मूळ स्वरूप आणि दिव्य वारसा। आपण सर्व परमेश्वराचे अंश आहोत, हे विसरून मायेत गुंतलेल्या जीवाला सद्गुरू त्याच्या मूळ मोक्षप्राप्तीच्या अधिकाराची जाणीव करून देतात।'
  }
,
  {
    id: 'dp_16',
    bookId: 'drishtantapath',
    number: 16,
    title: 'दृष्टांत १६: चिंतामणी दृष्टांत (The Chintamani Gem Parable)',
    titleEn: 'The Chintamani Gem Parable',
    content: 'ज्या व्यक्तीकडे सर्व काही देणारा दिव्य चिंतामणी हा मौल्यवान खडा आहे, तो जर त्याच्या मोबदल्यात केवळ सामान्य काचेचे तुकडे किंवा कस्पटे मागत असेल, तर तो मूर्ख ठरतो. त्याचप्रमाणे मानवी जन्म लाभल्यावर केवळ संसारातील क्षुल्लक गोष्टी मागणे म्हणजे चिंतामणी गमावण्यासारखे आहे।',
    explanation: 'नरदेहाचे महत्त्व आणि भक्तीची श्रेष्ठता। मानवी जन्म हा अत्यंत दुर्मिळ असून त्याचा उपयोग केवळ भगवंताची प्राप्ती व मोक्षासाठी करावा, क्षुल्लक सांसारिक सुखांसाठी नाही।'
  }
,
  {
    id: 'dp_17',
    bookId: 'drishtantapath',
    number: 17,
    title: 'दृष्टांत १७: लोभी माणसाचा ठेवा दृष्टांत (The Miser\'s Treasure Parable)',
    titleEn: 'The Miser\'s Treasure Parable',
    content: 'एक लोभी माणूस त्याचे धन जमिनीमध्ये पुरून ठेवतो आणि रात्रंदिवस केवळ त्या धनाचाच विचार करतो, त्याचे ध्यान तेथेच जडलेले असते. त्याचप्रमाणे साधकाचे मन केवळ परमेश्वराच्या नामस्मरणामध्ये आणि चरणी पुरलेले असावे, जेणेकरून संसारातील कोणतीही वादळे त्याचे लक्ष विचलित करू शकणार नाहीत।',
    explanation: 'एकाग्रता आणि ईश्वरी ध्यानाची पराकाष्ठा। जसे लोभी माणसाचे मन धनात असते, तसेच भक्ताचे मन निरंतर ईश्वराच्या स्वरूपात स्थिर असावे।'
  }
,
  {
    id: 'dp_18',
    bookId: 'drishtantapath',
    number: 18,
    title: 'दृष्टांत १८: काचेचे घर आणि सूर्य दृष्टांत (The Glass House and Sunlight Parable)',
    titleEn: 'The Glass House and Sunlight Parable',
    content: 'जर एखाद्या घराचे दरवाजे आणि खिडक्या धुळीने माखलेल्या असतील, तर सूर्याचा प्रकाश घरात पूर्णपणे प्रवेश करू शकत नाही. खिडक्या स्वच्छ करताच प्रकाश आपोआप पसरतो. तसेच मानवी अंतकरण जोवर वासना आणि अहंकाराच्या धुळीने माखलेले आहे, तोवर ईश्वराचे ज्ञान प्रकट होत नाही, अंतकरण शुद्ध होताच प्रकाश पडतो।',
    explanation: 'चित्तशुद्धी आणि अंतकरणात ज्ञानप्रकाशाचे आगमन। साधनेने मनातील मळ दूर केल्यावर ईश्वरी कृपा आणि दिव्य ज्ञान कसे सहज प्राप्त होते, हे सांगितले आहे।'
  }
,
  {
    id: 'dp_19',
    bookId: 'drishtantapath',
    number: 19,
    title: 'दृष्टांत १९: सुवर्ण घट दृष्टांत (The Golden Pot Parable)',
    titleEn: 'The Golden Pot Parable',
    content: 'एखाद्या सुवर्ण घटात (सोन्याच्या माठात) विष भरले तरी त्याचे मूळ सोन्याचे असणे बदलत नाही, तसेच मातीच्या घागरीत अमृताचे पाणी भरले तरी ती घागर बाहेरून मातीचीच राहते. तसेच मानवाचे बाह्य सौंदर्य किंवा जात महत्त्वाची नसून त्याच्या अंतकरणात असलेली ईश्वराची भक्ती आणि सत्त्वगुण महत्त्वाचा आहे।',
    explanation: 'बाह्य अवडंबर विरुद्ध आंतरिक गुणवत्ता। भगवंताला बाह्य रूप, रंग किंवा जात प्रिय नसून केवळ अंतकरणातील शुद्ध भक्ती आणि शील प्रिय आहे।'
  }
,
  {
    id: 'dp_20',
    bookId: 'drishtantapath',
    number: 20,
    title: 'दृष्टांत २०: दोरी आणि सर्प दृष्टांत (The Rope and Snake Parable)',
    titleEn: 'The Rope and Snake Parable',
    content: 'अंधारामध्ये पडलेल्या एका साध्या दोरीला पाहून सर्प समजून माणूस घाबरतो आणि पळू लागतो. परंतु जेव्हा तेथे प्रकाश केला जातो, तेव्हा तो सर्प नसून केवळ एक निर्जीव दोरी आहे याची जाणीव होते व भीती नष्ट होते. तसेच अज्ञानामुळे संपूर्ण जगत हेच अंतिम सत्य वाटते, पण ज्ञानाचा प्रकाश पडताच ईश्वरी सत्य स्पष्ट होते।',
    explanation: 'माया आणि अज्ञानाचा निरास। संसारातील खोट्या भीती आणि मोहांचा नाश केवळ ईश्वरी ज्ञान आणि अंतिम सत्याच्या दर्शनानेच होतो, हे दोरीच्या सुंदर उदाहरणाने सांगितले आहे।'
  }
,
  {
    id: 'dp_21',
    bookId: 'drishtantapath',
    number: 21,
    title: 'दृष्टांत २१: आई आणि बाळ दृष्टांत (The Mother and Child Parable)',
    titleEn: 'The Mother and Child Parable',
    content: 'आई घरचे सर्व काम करत असताना तिचे बाळ खेळण्यात मग्न असते, तोवर आई आपले काम करत राहते. पण जेव्हा बाळ खेळणी बाजूला टाकून रडायला लागते आणि केवळ आईसाठीच हट्ट धरते, तेव्हा आई सर्व कामे सोडून धावत येते व बाळाला जवळ घेते. तसेच जोवर जीव संसारात रमतो, तोवर देव दूर राहतो, पण अनन्य भावाने आळवणी करताच देव धावून येतो।',
    explanation: 'अनन्य शरणागती आणि देवाचा भक्तवत्सल स्वभाव। संसारातील इतर सुखांचा मोह सोडून जेव्हा भक्त केवळ भगवंताची आस धरतो, तेव्हा परमेश्वर स्वतः त्याच्या कल्याणासाठी धावून येतो।'
  }
,
  {
    id: 'dp_22',
    bookId: 'drishtantapath',
    number: 22,
    title: 'दृष्टांत २२: मयूर आणि मेघ दृष्टांत (The Peacock and Raincloud Parable)',
    titleEn: 'The Peacock and Raincloud Parable',
    content: 'आकाशामध्ये काळेभोर ढग दाटून येताच मयूर (मोर) आनंदाने थुईथुई नाचू लागतो, कारण त्याला पावसाची अत्यंत तीव्र ओढ असते. ढगांचा गडगडाट त्याला सुखावून जातो. तसेच भगवंताच्या लीला, कीर्तन किंवा कथेचे श्रवण करताच भक्ताचे हृदय प्रेमाने आणि आनंदाने नाचू लागते, त्याला परमात्म्याविषयी अनन्य प्रेम वाटते।',
    explanation: 'भक्तिरसाचा आल्हाद आणि ईश्वरी भेटीची आतुरता। ईश्वरी संकीर्तन आणि लीलेमध्ये भक्ताला मिळणाऱ्या परमानंदाचे मयूराच्या माध्यमातून अत्यंत सुरेख वर्णन केले आहे।'
  }
,
  {
    id: 'dp_23',
    bookId: 'drishtantapath',
    number: 23,
    title: 'दृष्टांत २३: तरू आणि छाया दृष्टांत (The Tree and Shade Parable)',
    titleEn: 'The Tree and Shade Parable',
    content: 'एक महावृक्ष (झाड) स्वतः उन्हातान्हात उभा राहतो आणि स्वतःला त्रास सहन करावा लागला तरी त्याच्या सावलीत येणाऱ्या प्रवाशांना थंड आणि सुखद सावली देतो, फळे देतो. तो कधीही कुणाशी भेद करत नाही. तसेच संत आणि सद्गुरू स्वतः अपार कष्ट सोसून सामान्य जीवांना भवतापापासून वाचवतात आणि मोक्षाचा मार्ग दाखवतात।',
    explanation: 'संत आणि सद्गुरूंचा परोपकारी स्वभाव। संतांचे जीवन केवळ परोपकारासाठी आणि जीवांच्या कल्याणासाठी असते, हे वृक्षाच्या सावलीवरून स्पष्ट होते।'
  }
,
  {
    id: 'dp_24',
    bookId: 'drishtantapath',
    number: 24,
    title: 'दृष्टांत २४: गंगा आणि सागर दृष्टांत (The Ganges and Ocean Parable)',
    titleEn: 'The Ganges and Ocean Parable',
    content: 'गंगा नदी कितीही वळणे घेऊन किंवा पर्वत पार करून वाहत असली तरी तिचा अंतिम मार्ग आणि विलीनीकरण विशाल सागरामध्येच होते. तिला सागर सोडून दुसरीकडे कुठेही विसावा मिळत नाही. तसेच मुमुक्षू जीवाच्या मनाची सर्व ओढ केवळ भगवंताच्या प्राप्तीकडेच असते, ईश्वराच्या चरणी लीन झाल्याशिवाय त्याला कुठेही शांती मिळत नाही।',
    explanation: 'जीवाचा अंतिम विसावा आणि ईश्वरी ऐक्य। गंगेच्या सागराकडे जाणाऱ्या प्रवाहाप्रमाणे भक्ताचे जीवन अविरत ईश्वराच्या दिशेने गतिमान असले पाहिजे।'
  }
,
  {
    id: 'dp_25',
    bookId: 'drishtantapath',
    number: 25,
    title: 'दृष्टांत २५: सुवर्ण आणि सुवर्णालंकार दृष्टांत (Gold and Ornaments Parable)',
    titleEn: 'Gold and Ornaments Parable',
    content: 'सोन्यापासून बनवलेले मुकुट, कडे, आणि हार हे बाह्यतः वेगवेगळ्या आकाराचे आणि नावांचे भासतात, पण मूळ रूपात ते सर्व केवळ सोनेच आहेत. तसेच सृष्टीतील सर्व भिन्न रूपे आणि जीव एकाच परम तत्त्वाचे विलास आहेत।',
    explanation: 'एकरूपता आणि अद्वैत भावाचे आकलन। बाह्य भेद तात्पुरते असून अंतिम स्तरावर सर्व ईश्वराचेच अंश आहेत, हे सोन्याच्या दागिन्यांच्या आधारे स्पष्ट केले आहे।'
  }
,
  {
    id: 'dp_26',
    bookId: 'drishtantapath',
    number: 26,
    title: 'दृष्टांत २६: दीप आणि अंधकार दृष्टांत (The Lamp and Darkness Parable)',
    titleEn: 'The Lamp and Darkness Parable',
    content: 'एका खोल अंधाऱ्या खोलीत शेकडो वर्षांपासून घनदाट अंधार असला, तरी तेथे एक छोटासा दिवा लावताच तो क्षणार्धात नाहीसा होतो. तसेच आत्मज्ञानाचा दिवा तेवताच मनातील जुने अज्ञान नष्ट होते।',
    explanation: 'ज्ञानशक्तीचा तात्काळ प्रभाव। ईश्वराचे ध्यान आणि सद्गुरूंचा एकच उपदेश जन्मोन्जन्मांचे संचित अज्ञान आणि पाप एका क्षणात नाहीसे करू शकतो।'
  }
,
  {
    id: 'dp_27',
    bookId: 'drishtantapath',
    number: 27,
    title: 'दृष्टांत २७: बक आणि राजहंस दृष्टांत (The Heron and Swan Parable)',
    titleEn: 'The Heron and Swan Parable',
    content: 'बक (बगळा) चिखलात बसून केवळ मासे आणि किडे शोधण्यात मग्न असतो, तर राजहंस केवळ स्वच्छ सरोवर आणि मोत्यांचा शोध घेतो व दुधातून पाणी वेगळे करतो. तसेच सामान्य जीव संसारात रमतात, तर साधक केवळ ईश्वराचा शोध घेतात।',
    explanation: 'विवेक आणि सत्त्वगुणांची पारख। संसार आणि अध्यात्म यातील फरक ओळखून केवळ मोक्षाचा दिव्य मार्ग निवडणारा विवेकशील साधक राजहंसासारखा पूजनीय ठरतो।'
  }
,
  {
    id: 'dp_28',
    bookId: 'drishtantapath',
    number: 28,
    title: 'दृष्टांत २८: बीज आणि अंकुर दृष्टांत (The Seed and Sprout Parable)',
    titleEn: 'The Seed and Sprout Parable',
    content: 'एका छोट्याशा बीजामध्ये अथांग वटवृक्ष बनण्याचे सामर्थ्य सुप्त अवस्थेत दडलेले असते. योग्य माती आणि पाणी मिळताच ते प्रकट होते. तसेच प्रत्येक जीवात ईश्वरी सामर्थ्य आहे, पण भक्तीने ते प्रकट होते।',
    explanation: 'साधनेचे महत्त्व आणि मूळ क्षमता। योग्य गुरुमार्ग व निष्ठेच्या सिंचनाने भक्तामधील दिव्य गुणांचे प्रकटीकरण होते आणि त्याचा भवसागर तरतो।'
  }
,
  {
    id: 'dp_29',
    bookId: 'drishtantapath',
    number: 29,
    title: 'दृष्टांत २९: मद्यपी आणि मद्य दृष्टांत (The Drunkard and Wine Parable)',
    titleEn: 'The Drunkard and Wine Parable',
    content: 'मद्य पिणारा माणूस तात्पुरत्या मोहासाठी आणि सुखासाठी स्वतःचे भान गमावतो आणि शेवटी दुःख ओढवून घेतो. याउलट नामस्मरणाचे अमृत पिणारा भक्त सदैव ईश्वरी आनंदात तल्लीन राहून शाश्वत शांती मिळवतो।',
    explanation: 'संसारिक वासना विरुद्ध भक्तिरस। संसारातील क्षणिक सुखे जीवाचे अधःपतन करतात, तर भगवंताच्या नामाची गोडी निरंतर चैतन्य आणि निखळ आनंद प्रदान करते।'
  }
,
  {
    id: 'dp_30',
    bookId: 'drishtantapath',
    number: 30,
    title: 'दृष्टांत ३०: कुंभार आणि घट दृष्टांत (The Potter and Clay Pot Parable)',
    titleEn: 'The Potter and Clay Pot Parable',
    content: 'कुंभार मातीचा सुंदर घट बनवताना बाहेरून त्यावर हाताने आघात करतो, पण आतून त्याला मायेचा आधार देतो. तसेच सद्गुरू शिष्याला घडवताना वरून शिस्तीचे प्रहार करत असले तरी त्यांच्या मनात शिष्याविषयी अथांग प्रेम असते।',
    explanation: 'सद्गुरूंची शिस्त आणि आंतरिक कृपा। शिष्याच्या कल्याणासाठी सद्गुरू जे कठोर आचरण दाखवतात, त्यामागे केवळ आणि केवळ शिष्याला मोक्षाचा परिपूर्ण मार्ग दाखवणे हाच उद्देश असतो।'
  }
,
  {
    id: 'dp_31',
    bookId: 'drishtantapath',
    number: 31,
    title: 'दृष्टांत ३१: कल्पवृक्ष दृष्टांत (The Wish-Fulfilling Tree Parable)',
    titleEn: 'The Wish-Fulfilling Tree Parable',
    content: 'कल्पवृक्षाच्या खाली बसून माणूस जे काही मागेल ते त्याला त्वरित प्राप्त होते. जर त्याने केवळ क्षुल्लक सुखाची मागणी केली तर त्याला तेच मिळेल आणि तो मूळ ईश्वरी संपदेला मुकेल. तसेच नरदेह मिळाल्यावर केवळ संसार मागणे चूक आहे।',
    explanation: 'संकल्प आणि अध्यात्मिक ध्येय। मानवी बुद्धीने केवळ ईश्वरी भक्ती आणि मोक्षाचीच मागणी करावी, संसारातील अनित्य सुखांच्या जाळ्यात स्वतःला गुंतवू नये।'
  }
,
  {
    id: 'dp_32',
    bookId: 'drishtantapath',
    number: 32,
    title: 'दृष्टांत ३२: स्वाती नक्षत्र शिंपला दृष्टांत (The Oyster and Raindrop Parable)',
    titleEn: 'The Oyster and Raindrop Parable',
    content: 'स्वाती नक्षत्राच्या पावसाचा थेंब जेव्हा समुद्रातील एका शिंपल्यामध्ये पडतो, तेव्हा त्याचे रूपांतर मौल्यवान मोत्यात होते. तोच थेंब सापाच्या तोंडात पडल्यास त्याचे विष बनते. संगतीनुसार परिणाम बदलतो।',
    explanation: 'सत्संगती आणि वाईट संगतीचा परिणाम। जीव ज्या प्रकारच्या विचारांच्या आणि माणसांच्या संगतीत राहतो, त्याचा तसाच विकास होतो. म्हणून सदैव संतांची आणि भगवंताची संगती धरावी।'
  }
,
  {
    id: 'dp_33',
    bookId: 'drishtantapath',
    number: 33,
    title: 'दृष्टांत ३३: पतंग आणि दीप दृष्टांत (The Moth and Lamp Parable)',
    titleEn: 'The Moth and Lamp Parable',
    content: 'एक पतंग (कीटक) दिव्याच्या ज्वालांकडे आकर्षित होऊन त्यात स्वतःचा प्राण देतो, कारण त्याला केवळ बाह्य प्रकाशाची भुरळ पडते. तसेच अज्ञानी जीव संसारातील मोहमयी आणि विनाशी सुखांना भुलून स्वतःचा नाश करून घेतात।',
    explanation: 'मोहाचा घातक परिणाम। बाह्य सौंदर्याच्या आणि उपभोगांच्या क्षणिक सुखांमध्ये जीव कसा अडकून स्वतःचे अमूल्य जीवन संपवतो, याची जाणीव करून देणारा हा संदेश आहे।'
  }
,
  {
    id: 'dp_34',
    bookId: 'drishtantapath',
    number: 34,
    title: 'दृष्टांत ३४: चंद्र आणि चकोर दृष्टांत (The Moon and Chakora Parable)',
    titleEn: 'The Moon and Chakora Parable',
    content: 'चकोर पक्षी ज्याप्रमाणे संपूर्ण रात्र केवळ चंद्राच्या शीतल किरणांचे (किरणांच्या अमृताचे) प्राशन करण्यासाठी आकाशाकडे पाहत राहतो. तसेच भक्ताचे चित्त चकोराप्रमाणे अहोरात्र केवळ ईश्वरी लीलेवर एकाग्र असावे।',
    explanation: 'एकनिष्ठ भक्तीची परिसीमा। ज्याप्रमाणे चकोर पक्षाचा जीव चंद्रावर असतो, त्याचप्रमाणे सच्च्या भक्ताचा प्राण केवळ भगवंताच्या नामस्मरणात आणि ध्यानधारणेत गुंतलेला असतो।'
  }
,
  {
    id: 'dp_35',
    bookId: 'drishtantapath',
    number: 35,
    title: 'दृष्टांत ३५: कनक आणि काच दृष्टांत (Gold and Glass Parable)',
    titleEn: 'Gold and Glass Parable',
    content: 'एक अडाणी माणूस मौल्यवान सोन्याला केवळ पिवळा दगड समजून फेकून देतो आणि चमकदार काचेला मौल्यवान रत्न समजून कपाटात ठेवतो. तसाच मूर्ख मनुष्य शाश्वत ईश्वरी सत्याला सोडून अशाश्वत संसाराचे कौतुक करतो।',
    explanation: 'पारख आणि अध्यात्मिक अज्ञान। सद्गुरूंच्या ज्ञानाशिवाय खऱ्या कल्याणाच्या मार्गाची पारख होऊ शकत नाही, हे या सोन्याच्या आणि काचेच्या उदाहरणावरून सिद्ध होते।'
  }
,
  {
    id: 'dp_36',
    bookId: 'drishtantapath',
    number: 36,
    title: 'दृष्टांत ३६: नौका आणि महापूर दृष्टांत (The Boat and Flood Parable)',
    titleEn: 'The Boat and Flood Parable',
    content: 'नदीला आलेल्या भयंकर महापुरातून सामान्य व्यक्ती पोहून पलीकडे जाऊ शकत नाही, पण एका चांगल्या आणि मजबूत नौकेत बसून कुशल नाविक प्रवाशांना सहज पलीकडे नेतो. तसेच भवसागरातून सद्गुरुरूपी नाविक आपल्याला तारतो।',
    explanation: 'सद्गुरूंचे तारणहार रूप। संसारातील भयंकर संकटांमधून आणि जन्म-मृत्यूच्या फेऱ्यातून केवळ सद्गुरूंच्या कृपेची नौकाच आपल्याला सुखरूप मोक्षाच्या किनाऱ्यावर पोहोचवू शकते।'
  }
,
  {
    id: 'dp_37',
    bookId: 'drishtantapath',
    number: 37,
    title: 'दृष्टांत ३७: उंदीर आणि साप दृष्टांत (The Rat and Snake Parable)',
    titleEn: 'The Rat and Snake Parable',
    content: 'एका टोपलीत साप आणि उंदीर एकत्र बंद असतात. उंदीर स्वतःचे प्राण वाचवण्यासाठी आणि बाहेर पडण्यासाठी टोपलीला छिद्र पाडतो, पण छिद्र तयार होताच साप बाहेर पडून उंदराला खाऊन टाकतो. तसेच माणूस संसारातून सुटण्यासाठी धडपडतो, पण चुकीच्या संगतीने तो मायेच्या विळख्यात अधिकच अडकतो।',
    explanation: 'अयोग्य संगतीचा धोका आणि मायेचा विळखा। संसारातून मुक्त होण्याचे प्रयत्न करताना जर वाईट विचार किंवा अयोग्य संगती लाभली, तर साधक अधोगतीला जातो.'
  }
,
  {
    id: 'dp_38',
    bookId: 'drishtantapath',
    number: 38,
    title: 'दृष्टांत ३८: सुवर्ण मृग दृष्टांत (The Golden Deer Parable)',
    titleEn: 'The Golden Deer Parable',
    content: 'जगात कुठेही सोन्याचे हरीण अस्तित्वात नसते, हे माहीत असूनही मोहामुळे सीतामाता सुवर्णमृगाकडे आकर्षित झाली आणि पुढे मोठे संकट ओढवले. तसेच ज्ञानी साधकही कधीकधी संसारातील अतिशय मोहक अशा अवास्तव प्रलोभनांना बळी पडतात आणि साधना गमावून बसतात।',
    explanation: 'प्रलोभन आणि मायेची विनाशकारी शक्ती। माया अत्यंत सूक्ष्म आणि भुरळ पाडणारी असते, तिच्या मोहात अडकल्यास विवेकी पुरुषाचेही पतन होऊ शकते.'
  }
,
  {
    id: 'dp_39',
    bookId: 'drishtantapath',
    number: 39,
    title: 'दृष्टांत ३९: राजा आणि माळी दृष्टांत (The King and Gardener Parable)',
    titleEn: 'The King and Gardener Parable',
    content: 'माळी दिवसभर कष्ट करून सुंदर बागेची निगा राखतो, झाडांना पाणी घालतो, पण त्या बागेचॾचा प्रकाश पडताच हे सर्व स्वप्नवत भासते।',
    explanation: 'जगाचे अनित्य स्वरूप आणि मिथ्यात्व। सांसारिक सुखे क्षणभंगुर असून केवळ ईश्वरी ज्ञानच शाश्वत सत्य आहे, हे जागृतीच्या अवस्थेवरून सिद्ध होते.'
  }
,
  {
    id: 'dp_41',
    bookId: 'drishtantapath',
    number: 41,
    title: 'दृष्टांत ४१: पारधी आणि पक्षी दृष्टांत (The Hunter and Birds Parable)',
    titleEn: 'The Hunter and Birds Parable',
    content: 'पारधी झाडावर जाळे पसरवून त्यावर सुमधुर दाणे टाकतो. भुकेलेले पक्षी दाण्यांच्या मोहाने खाली येतात आणि जाळ्यात अडकतात. तसेच माया मानवासमोर अनेक प्रकारची भोगसाधने आणि सुखे ठेवते, ज्यामध्ये अडकून जीव आपला मोक्ष गमावतो।',
    explanation: 'विषयांचे आकर्षण आणि बंधनाची कारणे। संसारातील क्षणिक सुखे म्हणजे केवळ जाळ्यात अडकवणारे दाणे आहेत, सुजाण साधकाने यापासून सावध राहावे.'
  }
,
  {
    id: 'dp_42',
    bookId: 'drishtantapath',
    number: 42,
    title: 'दृष्टांत ४२: मधमाशी आणि मध दृष्टांत (The Bee and Honey Parable)',
    titleEn: 'The Bee and Honey Parable',
    content: 'मधमाशी अहोरात्र कष्ट करून फुलां फुलांमधून मधुर रस गोळा करते आणि मध गोळा करते, पण शेवटी मध गोळा करणारा शिकारी येतो आणि तिचे सर्व मध पळवून नेतो. तसेच अज्ञानी मनुष्य केवळ धन गोळा करण्यात आयुष्य संपवतो आणि शेवटी रिकाम्या हाताने मृत्यूला सामोरा जातो।',
    explanation: 'संचयाची निरर्थकता आणि मृत्यूचे सत्य। भौतिक संपत्ती कधीही सोबत येत नाही, केवळ ईश्वराची भक्ती आणि पुण्याची पुंजीच जीवाचे अंतिम कल्याण करते.'
  }
,
  {
    id: 'dp_43',
    bookId: 'drishtantapath',
    number: 43,
    title: 'दृष्टांत ४३: मिठाचा बाहुला दृष्टांत (The Salt Doll Parable)',
    titleEn: 'The Salt Doll Parable',
    content: 'मिठापासून बनवलेला एक बाहुला जेव्हा समुद्राची खोली मोजण्यासाठी पाण्यात उतरतो, तेव्हा तो स्वतः पाण्यात विरघळून समुद्ररूपच होतो. त्याचे वेगळे अस्तित्व उरत नाही. तसेच जेव्हा जीव ईश्वरी ध्यानात लीन होतो, तेव्हा तो अहंकाराचा त्याग करून ईश्वराशी एकरूप होतो।',
    explanation: 'अहंकाराचे विसर्जन आणि सायुज्य मोक्ष। परमेश्वराच्या अथांग प्रेमात स्वतःचे वेगळेपण विसरून विलीन होणे हीच भक्तीची पराकाष्ठा आहे.'
  }
,
  {
    id: 'dp_44',
    bookId: 'drishtantapath',
    number: 44,
    title: 'दृष्टांत ४४: कापूर आणि अग्नी दृष्टांत (The Camphor and Fire Parable)',
    titleEn: 'The Camphor and Fire Parable',
    content: 'कापूर जेव्हा अग्नीच्या संपर्कात येतो, तेव्हा तो जळताना कोणतीही राख मागे ठेवत नाही, तो संपूर्णपणे हवेत नाहीसा होतो. तसेच जेव्हा शुद्ध ज्ञान अंतकरणात जागृत होते, तेव्हा सर्व वासना आणि संचित कर्मे कोणतीही खूण न ठेवता जळून भस्म होतात।',
    explanation: 'वासनांचा समूळ उच्चाटन। ईश्वरी ज्ञानाचा अग्नी साधकाच्या मनातील नकारात्मक विचार आणि पापांचा नाश संपूर्णपणे आणि कायमचा करतो.'
  }
,
  {
    id: 'dp_45',
    bookId: 'drishtantapath',
    number: 45,
    title: 'दृष्टांत ४५: पांगळा आणि आंधळा दृष्टांत (The Lame and Blind Parable)',
    titleEn: 'The Lame and Blind Parable',
    content: 'जंगलाला लागलेल्या वणव्यातून आंधळा धावू शकत नाही आणि पांगळा मार्ग पाहू शकत नाही. पण जेव्हा आंधळा पांगळ्याला आपल्या खांद्यावर बसवतो, तेव्हा पांगळा रस्ता दाखवतो आणि आंधळा वेगाने चालतो; दोघेही संकटातून सुटतात. तसेच क्रिया आणि ज्ञान एकत्र आल्याशिवाय मोक्ष मिळत नाही।',
    explanation: 'ज्ञान आणि भक्तीचा समन्वय। केवळ कोरडे ज्ञान किंवा केवळ आंधळी कृती उपयोगाची नसून, दोन्हीच्या समन्वयानेच भवसागरातून मुक्ती मिळते.'
  }
,
  {
    id: 'dp_46',
    bookId: 'drishtantapath',
    number: 46,
    title: 'दृष्टांत ४६: परीस आणि लोखंडाची बेडी दृष्टांत (The Touchstone and Iron Shackle Parable)',
    titleEn: 'The Touchstone and Iron Shackle Parable',
    content: 'लोखंडाची साखळी किंवा बेडी चोर दरोडेखोरांना बांधण्यासाठी वापरली जाते, पण जर त्या बेडीला परिसाचा स्पर्श झाला तर ती सोन्याची बनते. सोन्याची बेडी बनली तरी तिचे बांधण्याचे काम थांबत नाही. तसेच भौतिक आणि स्वर्गसुखाची बंधने ही बंधनेच आहेत, खरी मुक्ती केवळ ईश्वराच्या निष्काम भक्तीत आहे।',
    explanation: 'लौकिक सुखांचे बंधन। सुवर्ण बंधन असो की लोह बंधन, ते जीवाला संसारातच बांधून ठेवते. जीव केवळ निष्काम ईश्वरी भक्तीनेच मुक्त होऊ शकतो.'
  }
,
  {
    id: 'dp_47',
    bookId: 'drishtantapath',
    number: 47,
    title: 'दृष्टांत ४७: चंदन वृक्ष दृष्टांत (The Sandalwood Tree Parable)',
    titleEn: 'The Sandalwood Tree Parable',
    content: 'चंदन वृक्षाच्या अवतीभवती अत्यंत विषारी सापांचा वेढा असतो, तरीही चंदन वृक्ष स्वतःचा सुवास आणि शीतलता कधीही सोडत नाही. तसेच संतांच्या अवतीभवती कितीही दुष्ट किंवा संसारी लोक असले तरी संत आपले पावित्र्य आणि शांती कधीही सोडत नाहीत।',
    explanation: 'संतांची अविचलता आणि आंतरिक शांती। बाह्य परिस्थिती कितीही प्रतिकूल किंवा नकारात्मक असली तरी सत्पुरुष आपले सत्त्व आणि सदाचार दृढ ठेवतात.'
  }
,
  {
    id: 'dp_48',
    bookId: 'drishtantapath',
    number: 48,
    title: 'दृष्टांत ४८: सावलीचा खेळ दृष्टांत (The Shadow Play Parable)',
    titleEn: 'The Shadow Play Parable',
    content: 'भिंतीवर पडणाऱ्या हातांच्या सावलीतून कधी सिंह, कधी पक्षी तर कधी राक्षसाचे चित्र दिसते. लहान मुले त्या सावलीला पाहून खरे समजून घाबरतात किंवा आनंदित होतात, पण प्रौढ व्यक्तीला माहित असते की तो केवळ हातांचा खेळ आहे. तसेच संसारातील खेळ ज्ञानी माणसासाठी केवळ मायेचा विलास आहे।',
    explanation: 'मायेचा आभास आणि ज्ञानी दृष्टी। जगातील सुख-दुःख आणि घडामोडी या केवळ मायेच्या सावल्या आहेत, अंतिम सत्य केवळ परमेश्वरच आहे.'
  }
,
  {
    id: 'dp_49',
    bookId: 'drishtantapath',
    number: 49,
    title: 'दृष्टांत ४९: कोरडा घट आणि पाणी दृष्टांत (The Empty Pot and Water Parable)',
    titleEn: 'The Empty Pot and Water Parable',
    content: 'जो मातीचा घट आतून संपूर्ण कोरडा आणि रिकामा आहे, तोच पाण्यामध्ये बुडवल्यावर पाणी शोषून घेतो आणि पूर्ण भरतो. पण जो आधीच चिखलाने किंवा दगडांनी भरलेला आहे, त्यात पाणी जाऊ शकत नाही. तसेच ज्याचे मन संसाराच्या कचऱ्यापासून मुक्त आहे, त्याचेच मन ईश्वरी प्रेमाने भरते।',
    explanation: 'मन रिकामे करण्याचे महत्त्व (निरहंकारिता)। ईश्वरी कृपा आणि भक्तीची प्राप्ती केवळ नम्र, शुद्ध आणि मोकळ्या अंतकरणातच होऊ शकते.'
  }
,
  {
    id: 'dp_50',
    bookId: 'drishtantapath',
    number: 50,
    title: 'दृष्टांत ५०: आरसा आणि धूळ दृष्टांत (The Mirror and Dust Parable)',
    titleEn: 'The Mirror and Dust Parable',
    content: 'एका आरशावर जोवर धुळीचा जाड थर जमा असतो, तोवर त्यात स्वतःचा चेहरा स्वच्छ दिसत नाही. धूळ पुसून टाकताच प्रतिबिंब स्पष्ट आणि सुंदर दिसते. तसेच मनावर साचलेली वासनांची धूळ नामस्मरण आणि सद्गुरू उपदेशाने दूर करताच आत्मज्ञान स्पष्ट प्रकट होते।',
    explanation: 'चित्तशुद्धीचा अंतिम संदेश। मानवी मनातील मलिनता दूर करणे हाच अध्यात्माचा खरा पाया आहे. मन स्वच्छ होताच ईश्वरी स्वरूपाची प्रचिती येते.'
  }
,
  {
    id: 'dp_51',
    bookId: 'drishtantapath',
    number: 51,
    title: 'दृष्टांत ५१: राजा आणि याचक दृष्टांत (The King and Beggar Parable)',
    titleEn: 'The King and Beggar Parable',
    content: 'एक याचक राजाकडे स्वतःचे दारिद्र्य घालवण्यासाठी भीक मागण्यासाठी जातो, पण राजाच्या दारात येताच त्याला अत्यंत बहुमूल्य सोन्याचे नाणे सापडते. तो भीक मागण्याचे सोडून त्या नाण्याने श्रीमंत होतो. तसेच जीव संसारात सुख मागण्यासाठी येतो, पण सद्गुरूंच्या भेटीने त्याला अमूल्य नामस्मरणाचा ठेवा मिळतो आणि त्याचे दैन्य कायमचे संपते।',
    explanation: 'ईश्वरी नामाचा महिमा। संसारातील क्षुल्लक सुखांच्या याचना करणाऱ्या जीवाला सद्गुरू जेव्हा नामस्मरणाचा दिव्य ठेवा देतात, तेव्हा त्याचे पारमार्थिक दारिद्र्य नष्ट होते।'
  }
,
  {
    id: 'dp_52',
    bookId: 'drishtantapath',
    number: 52,
    title: 'दृष्टांत ५२: सुवर्ण कंकण दृष्टांत (The Golden Bracelet Parable)',
    titleEn: 'The Golden Bracelet Parable',
    content: 'सोन्याचे कंकण आणि शुद्ध सोने यात कोणताही तात्विक फरक नसतो, केवळ आकाराचा आणि नामाचा भेद असतो. कंकण विरघळवल्यावर ते पुन्हा सोनेच बनते. तसेच जीव आणि शिव (परमेश्वर) यांच्यात केवळ मायेच्या उपाधीचा भेद आहे, ती उपाधी दूर होताच अभेद प्रकट होतो।',
    explanation: 'जीवाचा ब्रह्मभाव। अज्ञानाचे आवरण दूर होताच जीव स्वतःला परमेश्वराचाच अंश म्हणून ओळखतो आणि द्वैतभाव संपतो।'
  }
,
  {
    id: 'dp_53',
    bookId: 'drishtantapath',
    number: 53,
    title: 'दृष्टांत ५३: सोनेरी पिंजरा दृष्टांत (The Golden Cage Parable)',
    titleEn: 'The Golden Cage Parable',
    content: 'पोपट जरी अतिशय मौल्यवान अशा सोन्याच्या पिंजऱ्यात ठेवला असला, तरी त्याला उडण्याचे स्वातंत्र्य मिळत नाही, तो बंदीच राहतो. लोखंडी पिंजरा असो वा सोन्याचा, बंधनात काही फरक पडत नाही. तसेच भौतिक सुख समृद्धी ही देखील शेवटी संसाराचे एक सुंदर बंधनच आहे, खरी मुक्ती केवळ बंधनांच्या पलीकडे आहे।',
    explanation: 'भौतिक सुखांचे बंधनकारक स्वरूप। संसारातील ऐश्वर्य कितीही मोठे असले तरी ते आत्म्याला बंधनातच ठेवते. खरी मुक्ती केवळ ईश्वरी प्रेमानेच मिळते.'
  }
,
  {
    id: 'dp_54',
    bookId: 'drishtantapath',
    number: 54,
    title: 'दृष्टांत ५४: नट आणि सोंग दृष्टांत (The Actor and His Role Parable)',
    titleEn: 'The Actor and His Role Parable',
    content: 'एक कुशल नट रंगमंचावर वेगवेगळ्या राजा, भिकारी किंवा साधूची सोंगे (भूमिका) घेतो, परंतु तो स्वतःचे मूळ अस्तित्व कधीही विसरत नाही. प्रेक्षक त्याला राजा समजतात, पण तो स्वतःला नटच मानतो. तसेच ज्ञानी मनुष्य संसारात सर्व व्यवहार करतो, पण स्वतःला संसारी मानत नाही।',
    explanation: 'अलिप्तता आणि अनासक्ती। संसारात राहूनही कर्तव्याचे पालन करताना मनातून अलिप्त असणे हाच खरा ज्ञानी मार्ग आहे.'
  }
,
  {
    id: 'dp_55',
    bookId: 'drishtantapath',
    number: 55,
    title: 'दृष्टांत ५५: मध आणि विष दृष्टांत (Honey and Poison Parable)',
    titleEn: 'Honey and Poison Parable',
    content: 'मध आणि विष एकत्र मिसळल्यास दिसायला ते मधासारखेच गोड भासते, पण प्राशन करताच ते प्राण हरण करते. तसेच संसारातील भोगांचे सुख सुरुवातीला अतिशय मधुर वाटते, पण शेवटी ते जीवाचे आध्यात्मिक अधःपतन करते।',
    explanation: 'सांसारिक मोहाचा विळखा। विषयसुख हे वरवर मधुर असले तरी ते अंतिमतः दुःखदायक आणि अधोगतीकडे नेणारे असते.'
  }
,
  {
    id: 'dp_56',
    bookId: 'drishtantapath',
    number: 56,
    title: 'दृष्टांत ५६: पाषाण आणि शिल्प दृष्टांत (The Stone and Sculpture Parable)',
    titleEn: 'The Stone and Sculpture Parable',
    content: 'एक साधा दगड रस्त्यावर पडलेला असतो, पण जेव्हा शिल्पकार त्यावर छिन्न-भिन्न घाव घालून अवांछित भाग काढून टाकतो, तेव्हा त्यातून देवाची अत्यंत सुंदर मूर्ती प्रकट होते आणि तिची मंदिरात पूजा होते. तसेच सद्गुरू शिष्याच्या दोषांचे निर्मूलन करून त्याचे जीवन पावन करतात।',
    explanation: 'सद्गुरूंची कृपा आणि घडवणूक। संकटे आणि शिस्त यांच्या माध्यमातून सद्गुरू शिष्यामधील सुप्त देवत्व कसे जागे करतात, याचे सुंदर वर्णन आहे.'
  }
,
  {
    id: 'dp_57',
    bookId: 'drishtantapath',
    number: 57,
    title: 'दृष्टांत ५७: वटवृक्ष आणि पक्षी दृष्टांत (The Banyan Tree and Birds Parable)',
    titleEn: 'The Banyan Tree and Birds Parable',
    content: 'एका विशाल वटवृक्षावर शेकडो पक्षी आश्रयाला येतात, तेथील फळे खातात आणि आनंदाने किलबिलाट करतात. जेव्हा वृक्ष सुकू लागतो, तेव्हा ते निघून जातात. तसेच संसारातील मित्र आणि नातलग केवळ सुखाचे सोबती असतात, संकटात केवळ परमेश्वरच धावून येतो।',
    explanation: 'संसाराची अनित्यता आणि ईश्वराची शाश्वतता। संसारातील संबंध स्वार्थावर आधारलेले असतात, केवळ भगवंताचे नातेच निस्वार्थी आणि अखंड असते.'
  }
,
  {
    id: 'dp_58',
    bookId: 'drishtantapath',
    number: 58,
    title: 'दृष्टांत ५८: सुवर्ण आणि कस दृष्टांत (Gold and Touchstone Parable)',
    titleEn: 'Gold and Touchstone Parable',
    content: 'सोन्याची शुद्धता पारखण्यासाठी त्याला कसोटीच्या दगडावर (कस) घासून पाहिले जाते आणि अग्नीतून तावून सुलाखून काढावे लागते. तसेच भक्ताच्या श्रद्धेची खरी पारख संकटांच्या कसोटीवर होते, जो अढळ राहतो तोच खरा भक्त ठरतो।',
    explanation: 'भक्तीची परीक्षा आणि निष्ठा। संकटाच्या काळातही ज्याची भक्ती ढळत नाही, त्याचे अंतकरण सोन्यासारखे चकाकते आणि त्याला ईश्वरी कृपा लाभते.'
  }
,
  {
    id: 'dp_59',
    bookId: 'drishtantapath',
    number: 59,
    title: 'दृष्टांत ५९: ढग आणि पाऊस दृष्टांत (The Cloud and Rain Parable)',
    titleEn: 'The Cloud and Rain Parable',
    content: 'आकाशातील ढग जेव्हा बरसतात, तेव्हा ते नदी, नाले, सुपीक जमीन किंवा खडकाळ डोंगर यावर समानपणे बरसतात. ते कुठेही भेद करत नाहीत, परंतु डोंगरावर पाणी टिकत नाही आणि सुपीक जमिनीत सुंदर पीक येते. तसेच ईश्वराची कृपा सर्वांवर समान असते, पण श्रद्धावान हृदयातच भक्ती अंकुरते।',
    explanation: 'कृपेची समता आणि स्वीकारशीलता। परमेश्वराची करुणा सर्वव्यापी आहे, पण साधकाच्या मनातील पात्रतेनुसार त्याचा अनुभव येतो.'
  }
,
  {
    id: 'dp_60',
    bookId: 'drishtantapath',
    number: 60,
    title: 'दृष्टांत ६०: आरसा आणि मूळ रूप दृष्टांत (The Mirror and True Reflection Parable)',
    titleEn: 'The Mirror and True Reflection Parable',
    content: 'आरशामध्ये आपले जे रूप दिसते, ते केवळ एक आभासी प्रतिबिंब असते. आरसा बाजूला करताच केवळ मूळ रूप उरते. तसेच हे दृश्य जगत आणि माया ही परम सत्याचे केवळ प्रतिबिंब आहेत, जेव्हा अज्ञान संपते तेव्हा केवळ परब्रह्मच शिल्लक राहतो।',
    explanation: 'अंतिम अद्वैत सत्य। जगाच्या दृश्य रूपाच्या पलीकडे जाऊन मूळ शाश्वत तत्त्वाचा साक्षात्कार करून घेणे, हाच खरा ज्ञानमार्ग आहे.'
  }
,
  {
    id: 'dp_61',
    bookId: 'drishtantapath',
    number: 61,
    title: 'दृष्टांत ६१: सुगंधी सुवास आणि वारा दृष्टांत (Fragrance and Wind Parable)',
    titleEn: 'Fragrance and Wind Parable',
    content: 'फुलांमधील सुवास वारा आपल्यासोबत वाहून नेतो, पण सुवास दिसत नाही, केवळ अनुभवता येतो. वारा सर्वत्र असतो, पण सुवास केवळ फुलांच्या संपर्कातच येतो. तसेच परमेश्वर सर्वव्यापी असला तरी संतांच्या आणि भक्तांच्या सान्निध्यात त्याचे अस्तित्व प्रकर्षाने जाणवते।',
    explanation: 'ईश्वराची सर्वव्यापकता आणि प्रकटीकरण। देव चराचरात आहे, पण शुद्ध भक्तीच्या माध्यमातून त्याचे दर्शन आणि अनुभव अधिक सुलभ होतो.'
  }
,
  {
    id: 'dp_62',
    bookId: 'drishtantapath',
    number: 62,
    title: 'दृष्टांत ६२: शिंपला आणि मोती दृष्टांत (The Oyster and Pearl Parable)',
    titleEn: 'The Oyster and Pearl Parable',
    content: 'शिंपला समुद्राच्या तळाशी राहूनही समुद्राचे अशुद्ध पाणी कधीही प्राशन करत नाही. तो आपले तोंड बंद ठेवून केवळ पावसाच्या थेंबाची वाट पाहतो आणि मोत्याची उत्पत्ती करतो. तसेच साधकाने संसारात राहूनही सांसारिक प्रलोभनांपासून स्वतःला अलिप्त ठेवून केवळ ईश्वरी स्मरणात मग्न राहावे।',
    explanation: 'अलिप्तता आणि आंतरिक साधना। बाह्य जगातील प्रलोभने नाकारून अंतर्मुख होणारा साधकच आपल्या हृदयात भक्तीचे दिव्य मोती निर्माण करू शकतो.'
  }
,
  {
    id: 'dp_63',
    bookId: 'drishtantapath',
    number: 63,
    title: 'दृष्टांत ६३: अंधार आणि सूर्य दृष्टांत (Darkness and the Sun Parable)',
    titleEn: 'Darkness and the Sun Parable',
    content: 'सूर्याच्या उदयासोबतच लाखो वर्षांचा अंधार एका क्षणात नष्ट होतो, अंधाराला पळायला जागा उरत नाही. तसेच ज्याच्या जीवनात सद्गुरूंच्या ज्ञानाचा सूर्य उगवतो, त्याच्या मनातील संचित कर्मांचा आणि अज्ञानाचा अंधार तात्काळ लयाला जातो।',
    explanation: 'ज्ञानोदयाचे महात्म्य। ज्ञानाच्या प्रकाशामुळे जीवाचे संशय, भीती आणि मोह संपूर्णपणे नष्ट होतात आणि आत्मसाक्षात्कार होतो.'
  }
,
  {
    id: 'dp_64',
    bookId: 'drishtantapath',
    number: 64,
    title: 'दृष्टांत ६४: बाळ आणि चंद्र दृष्टांत (The Child and Moon Parable)',
    titleEn: 'The Child and Moon Parable',
    content: 'एक लहान मूल आकाशातील चंद्राला खेळणे समजून त्याला मिळवण्यासाठी हट्ट करते. आई त्याला आरशात चंद्र दाखवून त्याचे समाधान करते. तसेच सामान्य लोकांना ईश्वराचे थेट आकलन होऊ शकत नाही, म्हणून सद्गुरू त्यांना प्रतिमा, उपासना आणि लीलांच्या आरशातून ईश्वराचा सुलभ साक्षात्कार घडवतात।',
    explanation: 'सगुण भक्तीचे सुलभत्व। सामान्य बुद्धीच्या जीवांना अमूर्�  }, जोवर साधक सांसारिक बंधनांपासून पूर्णपणे मुक्त होत नाही, तोवर त्याला खरी मुक्ती मिळत नाही.'
  }
,
  {
    id: 'dp_68',
    bookId: 'drishtantapath',
    number: 68,
    title: 'दृष्टांत ६८: अंध आणि दीप दृष्टांत (The Blind Man and Lantern Parable)',
    titleEn: 'The Blind Man and Lantern Parable',
    content: 'एका जन्मांध माणसाच्या हातात दिवा (फानस) दिला तरी त्याला स्वतःला त्याचा काही उपयोग होत नाही, पण इतरांना त्याचा मार्ग दिसतो. तसेच जो मनुष्य केवळ पुस्तकी ज्ञान मिळवतो पण त्याचे आचरण करत नाही, तो स्वतः अंधच राहतो, जरी त्याचे ज्ञान इतरांना उपदेश करण्यासाठी वापरले जात असले तरी।',
    explanation: 'आचरणाचे महत्त्व। केवळ कोरडे वाचन किंवा ज्ञान उपयोगाचे नसून, ते स्वतःच्या आचरणात आणणे हीच खरी साधना आहे.'
  }
,
  {
    id: 'dp_69',
    bookId: 'drishtantapath',
    number: 69,
    title: 'दृष्टांत ६९: मेघ आणि शेती दृष्टांत (The Raincloud and Farming Parable)',
    titleEn: 'The Raincloud and Farming Parable',
    content: 'मेघ संपूर्ण भूमीवर कोणताही भेदभाव न करता समान पाणी बरसतो. पण ज्या शेतकऱ्याने शेत नांगरून तयार ठेवले आहे तेथेच पीक उगवते, खडकाळ जागेवर नाही. तसेच परमेश्वराचा कृपाप्रसाद सर्वांसाठी समान असतो, पण जो साधक भक्तीने अंतकरण तयार करतो त्यालाच अनुभव येतो।',
    explanation: 'पात्रता आणि भक्तीची पूर्वतयारी। ईश्वरी आशीर्वाद मिळवण्यासाठी स्वतःच्या अंतकरणात भक्तीची मशागत करणे गरजेचे आहे.'
  }
,
  {
    id: 'dp_70',
    bookId: 'drishtantapath',
    number: 70,
    title: 'दृष्टांत ७०: कस्तुरी आणि गंध दृष्टांत (The Musk and Fragrance Parable)',
    titleEn: 'The Musk and Fragrance Parable',
    content: 'कस्तुरी जोवर हरणाच्या नाभीमध्ये असते तोवर तिचा सुवास लपलेला राहतो, पण वारे वाहू लागताच तो सुगंध चहूकडे पसरतो. तसेच परमेश्वर आपल्या हृदयात सुप्त आहे, पण भक्ती आणि नामस्मरणाच्या वायूने त्याचे अस्तित्व संपूर्ण विश्वात आणि आपल्या अनुभूतीत प्रकट होते।',
    explanation: 'नामस्मरणाचा सुवास। नामस्मरणाच्या सततच्या अभ्यासाने अंतरीचा परमेश्वर भक्ताच्या दैनंदिन आचरणातून सुवासासारखा दरवळू लागतो.'
  }
,
  {
    id: 'dp_71',
    bookId: 'drishtantapath',
    number: 71,
    title: 'दृष्टांत ७१: गंगा आणि मलिनता दृष्टांत (The Ganges and Impurity Parable)',
    titleEn: 'The Ganges and Impurity Parable',
    content: 'गंगा नदीमध्ये कितीही नाले किंवा कचरा येऊन मिळाला तरी गंगा स्वतः कधीही अपवित्र होत नाही, उलट ती त्या कचऱ्यालाही स्वतःसारखे पवित्र आणि पावन करून सागराकडे नेते. तसेच संतांच्या सान्निध्यात येणारे पापी... लोकही संतांच्या पावनतेने शुद्ध आणि मोक्षाचे धनी बनतात।',
    explanation: 'संतांचे पतितपावन रूप। महापुरुषांच्या आणि ईश्वरी अवतारांच्या स्पर्शाने जीवाचे सर्व संचित दोष धुऊन जातात.'
  }
,
  {
    id: 'dp_72',
    bookId: 'drishtantapath',
    number: 72,
    title: 'दृष्टांत ७२: हत्ती आणि साखळी दृष्टांत (The Elephant and Chain Parable)',
    titleEn: 'The Elephant and Chain Parable',
    content: 'अतिशय बलवान असलेला हत्ती केवळ एका साध्या साखळीने खांबाला बांधलेला असतो आणि तो स्वतःला दुर्बळ समजून शांत उभा राहतो. पण जेव्हा तो चिडतो किंवा त्याला स्वबळाची जाणीव होते, तेव्हा तो ती साखळी एका झटक्यात तोडून टाकतो. तसेच जीव मायेच्या साखळीने बांधलेला आहे, ज्ञानाने स्वबळ ओळखताच तो मुक्त होतो।',
    explanation: 'आत्मशक्तीचे प्रकटीकरण। अज्ञानाच्या बंधनातून सुटण्यासाठी केवळ एका दृढ संकल्पाची आणि आत्मज्ञानाची आवश्यकता असते.'
  }
,
  {
    id: 'dp_73',
    bookId: 'drishtantapath',
    number: 73,
    title: 'दृष्टांत ७३: सूर्य आणि ढग दृष्टांत (The Sun and Clouds Parable)',
    titleEn: 'The Sun and Clouds Parable',
    content: 'आकाशात काळे ढग जमा झाल्यावर सूर्य दिसेनासा होतो, पण सूर्य नष्ट झालेला नसतो. ढग सरकताच सूर्य आपल्या पूर्ण तेजाने तळपू लागतो. तसेच मनामध्ये वासनांचे आणि संशयाचे ढग दाटले की ईश्वराचे अस्तित्व जाणवत नाही, पण साधनेने हे ढग दूर होताच ईश्वरी प्रकाश मिळतो।',
    explanation: 'मायेचे तात्पुरते आवरण। ईश्वर सदैव आपल्या सोबतच असतो, केवळ मनातील विकारांचे आवरण दूर करण्याची आवश्यकता असते.'
  }
,
  {
    id: 'dp_74',
    bookId: 'drishtantapath',
    number: 74,
    title: 'दृष्टांत ७४: पाषाण आणि पाणी दृष्टांत (The Stone and Water Parable)',
    titleEn: 'The Stone and Water Parable',
    content: 'पाण्यामध्ये कित्येक वर्षे पडलेला दगड बाहेर काढला तरी तो आतून कोरडाच राहतो, त्यात पाण्याचा थेंबही मुरत नाही. पण सुपीक माती पाणी मिळताच मऊ होते. तसेच कठोर आणि अभक्त मनाच्या माणसाला कितीही उपदेश केला तरी त्याच्यावर काही परिणाम होत नाही, तर श्रद्धावान जीव लगेच पावन होतो।',
    explanation: 'श्रद्धेची आर्द्रता। ज्ञानाचा स्वीकार करण्यासाठी अंतकरणात कोरडेपणा नसून भक्तीची आणि श्रद्धेची ओलावा असणे आवश्यक आहे.'
  }
,
  {
    id: 'dp_75',
    bookId: 'drishtantapath',
    number: 75,
    title: 'दृष्टांत ७५: हंस आणि चिखल दृष्टांत (The Swan and Mud Parable)',
    titleEn: 'The Swan and Mud Parable',
    content: 'हंस पक्षी सरोवरात फिरताना चिखलात कधीही पाय माखवून घेत नाही, तो नेहमी स्वच्छ पाण्यात विहार करतो. तसेच साधकाने संसारी लोकांच्या मध्ये आणि मायेच्या चिखलात वावरताना आपले मन नेहमी ईश्वरी विचारात शुद्ध आणि अलिप्त ठेवावे।',
    explanation: 'संसारात राहून अलिप्तता। सांसारिक कर्मांमध्ये गुंतले तरी मनाचा ताबा केवळ भगवंताकडे असावा.'
  }
,
  {
    id: 'dp_76',
    bookId: 'drishtantapath',
    number: 76,
    title: 'दृष्टांत ७६: कल्पवृक्ष आणि फल दृष्टांत (The Wish-Fulfilling Tree Fruit Parable)',
    titleEn: 'The Wish-Fulfilling Tree Fruit Parable',
    content: 'कल्पवृक्षाच्या फांदीला सुंदर फळे लागलेली असतात. जो चतुर असतो तो फळे खाऊन तृप्त होतो, पण जो मूर्ख असतो तो केवळ पानांची मोजणी करत बसतो. तसेच मानवी जन्म मिळाल्यावर जो ईश्वराची भक्ती करतो तो धन्य होतो, तर जो केवळ वादात आणि शास्त्रांच्या मोजणीत वेळ घालवतो तो रिकाम्या हाताने जातो।',
    explanation: 'भक्तीची प्रत्यक्ष अनुभूती। कोरड्या चर्चांपेक्षा प्रत्यक्ष भक्ती आणि नामस्मरण करणे हेच मानवी जीवनाचे खरे सार्थक आहे.'
  }
,
  {
    id: 'dp_77',
    bookId: 'drishtantapath',
    number: 77,
    title: 'दृष्टांत ७७: समुद्र आणि नदी दृष्टांत (The Ocean and River Parable)',
    titleEn: 'The Ocean and River Parable',
    content: 'नदी जेव्हा समुद्राला मिळते, तेव्हा ती स्वतःचे नाव, रूप आणि प्रवाह विसरून समुद्रासारखीच अथांग आणि विशाल बनते. तिचे वेगळे अस्तित्व संपते. तसेच जेव्हा भक्त ईश्वराच्या चरणी अनन्य भावे समर्पित होतो, तेव्हा तो अहंकाराचा त्याग करून सच्चिदानंद स्वरूपात विलीन होतो।',
    explanation: 'पूर्ण समर्पण आणि ऐक्य। भक्तीची अंतिम पायरी म्हणजे स्वतःचे अस्तित्व देवाच्या इच्छेत पूर्णपणे विलीन करणे.'
  }
,
  {
    id: 'dp_78',
    bookId: 'drishtantapath',
    number: 78,
    title: 'दृष्टांत ७८: दीप आणि पतंग दृष्टांत (The Lamp and Moth Parable)',
    titleEn: 'The Lamp and Moth Parable',
    content: 'पतंग दिव्याच्या केवळ बाह्य प्रकाशाने मोहित होऊन झेप घेतो आणि स्वतःचे प्राण गमावतो. पण मधमाशी सुवासिक कमळात बसून मध पिते. तसेच संसारी लोग बाह्य मोहाने विनाशाकडे जातात, तर भक्त ईश्वराच्या गुणांचा मधुर रस पिऊन अमर होतात।',
    explanation: 'विवेक आणि मोहाची निवड। क्षणिक भौतिक सुखांना भुलण्यापेक्षा शाश्वत ईश्वरी आनंदाची निवड करणे हाच खरा विवेक आहे.'
  }
,
  {
    id: 'dp_79',
    bookId: 'drishtantapath',
    number: 79,
    title: 'दृष्टांत ७९: लोभी आणि संपत्ती दृष्टांत (The Miser and Wealth Parable)',
    titleEn: 'The Miser and Wealth Parable',
    content: 'लोभी मनुष्य स्वतःचे प्राण धोक्यात घालून संपत्तीचे रक्षण करतो, तो सतत केवळ पैशाचाच ध्यास धरतो. त्याचे मन झोपेतही धनाकडेच असते. साधकानेही आपल्या ईश्वरी नामस्मरणाचा आणि भक्तीचा ठेवा तसाच जीवापाड जपावा, जेणेकरून संसारातील प्रलोभने ती चोरू शकणार नाहीत।',
    explanation: 'भक्तीचे रक्षण। जशी लोभ्याची निष्ठा संपत्तीवर असते, तशीच साधकाची अढळ श्रद्धा आपल्या उपासनेवर असावी.'
  }
,
  {
    id: 'dp_80',
    bookId: 'drishtantapath',
    number: 80,
    title: 'दृष्टांत ८०: नौका आणि नाविक दृष्टांत (The Boat and Boatman Parable)',
    titleEn: 'The Boat and Boatman Parable',
    content: 'प्रवाशांनी भरलेली नौका जेव्हा वादळात सापडते, तेव्हा प्रवाशांचे रडणे किंवा घाबरणे निरुपयोगी असते; केवळ नाविकच कुशलतेने नौका किनाऱ्याला लावू शकतो. तसेच संसारातील संकटांच्या वादळात घाबरण्यापेक्षा सद्गुरुरूपी नावाड्यावर पूर्ण विश्वास ठेवल्यास तो आपल्याला मोक्षाच्या पैलतीरी सुखरूप नेईल।',
    explanation: 'सद्गुरूंवरील अढळ विश्वास। जीवनाच्या प्रवासात सद्गुरूंचे मार्गदर्शन आणि त्यांची कृपा हीच आपल्याला तारून नेणारी एकमेव शक्ती आहे.'
  }
,
  {
    id: 'dp_81',
    bookId: 'drishtantapath',
    number: 81,
    title: 'दृष्टांत ८१: सूकर दृष्टांत (The Pig Parable)',
    titleEn: 'The Pig Parable',
    content: 'सूकर (डुकराला) कितीही सुवासिक आणि उत्तम पक्वान्ने दिली, तरी तो घाणीकडेच धाव घेतो, त्याला घाणीतच सुख वाटते. तसेच संसारी जीव सुवर्ण संधी असूनही ईश्वरी भक्ती सोडून विषयांच्या घाणीतच आनंद शोधतो।',
    explanation: 'विषयासक्ती आणि स्वभावदोष। मानवी देह लाभूनही संसारी वासनांमध्ये गुंतणे म्हणजे सुवर्ण सोडून घाणीची निवड करण्यासारखे आहे.'
  }
,
  {
    id: 'dp_82',
    bookId: 'drishtantapath',
    number: 82,
    title: 'दृष्टांत ८२: वक्र आणि सरळ मार्ग दृष्टांत (The Crooked and Straight Path Parable)',
    titleEn: 'The Crooked and Straight Path Parable',
    content: 'एक वाटसरू सरळ महामार्ग सोडून चोरट्या आडमार्गाने जातो आणि वाटेत दरोडेखोरांच्या हाती सापडून लुटला जातो. तसेच ईश्वराचा सरळ भक्तीमार्ग सोडून जे तांत्रिक किंवा कपटी मार्गाला लागतात, त्यांचे आध्यात्मिक नुकसान होते।',
    explanation: 'सन्मार्गाची निवड। प्रपंचातील आडमार्ग टाळून केवळ सरळ आणि शास्त्रशुद्ध भक्तीमार्गावर चालल्यानेच सुरक्षित मोक्ष मिळतो.'
  }
,
  {
    id: 'dp_83',
    bookId: 'drishtantapath',
    number: 83,
    title: 'दृष्टांत ८३: चकोर पक्षी दृष्टांत (The Chakora Bird Parable)',
    titleEn: 'The Chakora Bird Parable',
    content: 'चकोर पक्षी केवळ चंद्राच्या किरणांवर (चंद्रप्रकाश) जगतो, तो तहान लागली तरी इतर कोणतेही पाणी पीत नाही. तसेच खऱ्या भक्ताची ओढ केवळ आणि केवळ ईश्वराच्या दर्शनासाठी आणि त्यांच्या कृपेसाठी असते।',
    explanation: 'एकनिष्ठ भक्ती। साधकाचे मन चकोर पक्षाप्रमाणे केवळ ईश्वरी रूपाच्या आराधनेत स्थिर आणि एकनिष्ठ असावे.'
  }
,
  {
    id: 'dp_84',
    bookId: 'drishtantapath',
    number: 84,
    title: 'दृष्टांत ८४: कुंभार आणि माती दृष्टांत (The Potter and Clay Parable)',
    titleEn: 'The Potter and Clay Parable',
    content: 'कुंभार मातीच्या गोळ्याला बाहेरून हळुवारपणे थोपटतो पण आतून हाताचा आधार देतो, जेणेकरून सुंदर घडा तयार व्हावा. तसेच सद्गुरू साधकावर बाह्य शिस्तीचे प्रहार करत असले, तरी त्यांच्या अंतकरणात अपार कृपा आणि आधार असतो।',
    explanation: 'सद्गुरूंचे संस्कार। गुरूंनी केलेली कठोर शिस्त ही साधकाच्या अंतरंगाला परिपक्व आणि सुंदर बनवण्यासाठीच असते.'
  }
,
  {
    id: 'dp_85',
    bookId: 'drishtantapath',
    number: 85,
    title: 'दृष्टांत ८५: सिंह आणि शशक दृष्टांत (The Lion and Rabbit Parable)',
    titleEn: 'The Lion and Rabbit Parable',
    content: 'एक लहान शशक (ससा) आपल्या बुद्धीने बलाढ्य सिंहाला विहिरीत त्याचेच प्रतिबिंब दाखवून त्याचा नाश करतो. तसेच साधक आपल्या आंतरिक आत्मिक बळाने आणि विवेकाने महाकाय काम-क्रोधादी शत्रूंचा पराभव करू शकतो।',
    explanation: 'विवेक आणि बुद्धीचे श्रेष्ठत्व। शारीरिक सामर्थ्यापेक्षा बुद्धी आणि ईश्वरी विवेक हा मोठ्या संकटांवर मात करण्यासाठी महत्त्वाचा ठरतो.'
  }
,
  {
    id: 'dp_86',
    bookId: 'drishtantapath',
    number: 86,
    title: 'दृष्टांत ८६: सुवर्णकार दृष्टांत (The Goldsmith Parable)',
    titleEn: 'The Goldsmith Parable',
    content: 'सुवर्णकार सोन्याला शुद्ध करण्यासाठी आगीत तापवतो आणि घणाने ठोकतो, शेवटी त्यातून तेजस्वी दागिना बनतो. तसेच ईश्वर साधकाला वेगवेगळ्या संकटांतून तावून सुलाखून शुद्ध करतो, जेणेकरून त्याच्यातील आत्मिक तेज प्रकट व्हावे।',
    explanation: 'साधनेतील परीक्षा। कठीण परिस्थिती ही साधकाची भक्ती अधिक दृढ आणि शुद्ध करण्यासाठी देवाने दिलेली एक संधी असते.'
  }
,
  {
    id: 'dp_87',
    bookId: 'drishtantapath',
    number: 87,
    title: 'दृष्टांत ८७: व्याध आणि हरीण दृष्टांत (The Hunter and Deer Parable)',
    titleEn: 'The Hunter and Deer Parable',
    content: 'व्याध (पारधी) मधुर बासरी वाजवून हरणाला मोहित करतो आणि शेवटी त्याला जाळ्यात पकडतो. तसेच माया देखील संसारी जीवाला वेगवेगळ्या बाह्य सुखांचे मधुर संगीत दाखवून वासनेच्या जाळ्यात ओढते।',
    explanation: 'मायेचे प्रलोभन। बाह्य सुख आणि क्षणिक मोहाच्या जाळ्यातून सुटण्यासाठी निरंतर सावध राहणे आणि भगवंताच्या नामाचा आश्रय घेणे गरजेचे आहे.'
  }
,
  {
    id: 'dp_88',
    bookId: 'drishtantapath',
    number: 88,
    title: 'दृष्टांत ८८: मर्कट आणि नारळ दृष्टांत (The Monkey and Coconut Parable)',
    titleEn: 'The Monkey and Coconut Parable',
    content: 'एक मर्कट (माकड) नारळाला घट्ट धरून ठेवतो, पण त्याला ते फोडता येत नाही आणि खातही येत नाही, तरीही तो ते सोडत नाही. तसेच संसारी जीव प्रपंचातील दुःखांना कवटाळून बसतो, पण मोक्षासाठी प्रपंच सोडायला तयार होत नाही।',
    explanation: 'खोटा अट्टहास आणि मोह। संसारातील आसक्ती ही केवळ ओझे वाढवते, म्हणून साधकाने यातून मुक्तता मिळवायला शिकले पाहिजे.'
  }
,
  {
    id: 'dp_89',
    bookId: 'drishtantapath',
    number: 89,
    title: 'दृष्टांत ८९: गज आणि अंध दृष्टांत (The Elephant and Blind Men Parable)',
    titleEn: 'The Elephant and Blind Men Parable',
    content: 'चार आंधळे एका हत्तीला स्पर्श करून आपापल्या समजुतीने हत्तीचे वर्णन करतात - कोणी त्याला खांब म्हणतो तर कोणी सूप. परंतु डोळस मनुष्य त्यांना हत्तीचे खरे रूप सांगतो. तसेच वेगवेगळे पंथ ईश्वराला तुकड्यांत पाहतात, पण पूर्ण ज्ञानी ईश्वर स्वरूप ओळखतो।',
    explanation: 'पूर्ण ज्ञानाचे महत्त्व। अर्धवट ज्ञानामुळे मतभेद निर्माण होतात, पूर्ण सत्य समजण्यासाठी डोळस आणि सद्गुरुरूपाचे मार्गदर्शन आवश्यक आहे.'
  }
,
  {
    id: 'dp_90',
    bookId: 'drishtantapath',
    number: 90,
    title: 'दृष्टांत ९०: मयूर आणि मेघ दृष्टांत (The Peacock and Cloud Parable)',
    titleEn: 'The Peacock and Cloud Parable',
    content: 'आकाशात काळे ढग दाटून येताच मोर आनंदाने थुईथुई नाचू लागतो, कारण त्याला पावसाची आस असते. तसेच परमेश्वराच्या भक्तीची आणि स्मरणाची चिन्हे दिसताच भक्ताचे हृदय आनंदाने नाचू लागते।',
    explanation: 'भक्तीचा आनंद। ईश्वराच्या सान्निध्याची ओढ भक्ताच्या अंतकरणात निरंतर प्रफुल्लितता निर्माण करते.'
  }
,
  {
    id: 'dp_91',
    bookId: 'drishtantapath',
    number: 91,
    title: 'दृष्टांत ९१: मधमाशी आणि मध दृष्टांत (The Bee and Honey Parable)',
    titleEn: 'The Bee and Honey Parable',
    content: 'मधमाशी निरनिराळ्या फुलांवर फिरून केवळ त्यांतील गोड मधच गोळा करते, ती फुलांच्या काट्यांकडे पाहत नाही. तसेच साधकाने जगातील लोकांचे दोष न पाहता केवळ त्यांचे चांगले गुण आणि ईश्वरी अंश ग्रहण करावा।',
    explanation: 'गुणग्राही वृत्ती। जगात प्रत्येकात काही ना काही उणिवा असतात, पण साधकाचे लक्ष केवळ चांगुलपणा आणि सत्यावर असायला हवे.'
  }
,
  {
    id: 'dp_92',
    bookId: 'drishtantapath',
    number: 92,
    title: 'दृष्टांत ९२: मीन आणि जल दृष्टांत (The Fish and Water Parable)',
    titleEn: 'The Fish and Water Parable',
    content: 'मासा पाण्याचा त्याग एका क्षणासाठीही करू शकत नाही; पाण्यातून बाहेर काढताच तो प्राण सोडतो. तसेच भक्ताचे जीवन ईश्वराच्या नामस्मरणाशिवाय निरर्थक असावे, त्याचे अस्तित्वच ईश्वरी भक्तीवर अवलंबून असावे।',
    explanation: 'प्राणप्रिय भक्ती। भगवंताशी असणारा संबंध इतका दृढ असावा की त्यांच्या विरहामध्ये जीवाची घालमेल झाली पाहिजे.'
  }
,
  {
    id: 'dp_93',
    bookId: 'drishtantapath',
    number: 93,
    title: 'दृष्टांत ९३: कासव दृष्टांत (The Tortoise Parable)',
    titleEn: 'The Tortoise Parable',
    content: 'कासव संकटाची चाहूल लागताच आपले सर्व अवयव आपल्या कठीण पाठीखाली ओढून घेते व सुरक्षित होते. तसेच साधकाने संसारातील कुसंगती आणि वासनेची वादळे येताच आपल्या इंद्रियांना आवरून अंतकरणात स्थिर व्हावे।',
    explanation: 'इंद्रिय संयम। बाह्य जगातील प्रलोभनांपासून स्वतःचे रक्षण करण्यासाठी इंद्रियांवर ताबा मिळवणे हे साधनेचे पहिले पाऊल आहे.'
  }
,
  {
    id: 'dp_94',
    bookId: 'drishtantapath',
    number: 94,
    title: 'दृष्टांत ९४: वृषभ आणि ओझे दृष्टांत (The Bull and Burden Parable)',
    titleEn: 'The Bull and Burden Parable',
    content: 'एक वृषभ (बैल) दिवसभर ओझे वाहतो आणि रात्री मालक त्याला थोडे गवत देतो, तो त्याच समाधानात राहतो. पण तो कधी बंधनातून सुटण्याचा विचार करत नाही. तसेच जीव संसाराचे ओझे वाहण्यात संपूर्ण आयुष्य घालवतो आणि मोक्षाचा विचार विसरतो।',
    explanation: 'संसाराचे बंधन। प्रपंचातील तात्पुरत्या सुख-सोयींसाठी जीवाने मोक्ष प्राप्तीसारख्या उच्च ध्येयाचा बळी देऊ नये.'
  }
,
  {
    id: 'dp_95',
    bookId: 'drishtantapath',
    number: 95,
    title: 'दृष्टांत ९५: चकोर आणि चंद्र दृष्टांत (The Chakora and Moon Parable)',
    titleEn: 'The Chakora and Moon Parable',
    content: 'चंद्र पृथ्वीपासून कोट्यवधी मैल दूर असूनही चकोर पक्षी आपले लक्ष चंद्रावरच केंद्रित ठेवतो. तसेच ईश्वर कोणत्याही स्वरूपात असला, तरी भक्ताचे लक्ष निरंतर त्यांच्या चरणांवर आणि स्वरूपावर खिळलेले असावे।',
    explanation: 'अंतरंग ध्यान। भौतिक अंतराचा भक्तीवर काहीही परिणाम होत नाही, भक्ती तर मनाच्या तारांनी जोडलेली असते.'
  }
,
  {
    id: 'dp_96',
    bookId: 'drishtantapath',
    number: 96,
    title: 'दृष्टांत ९६: हंस आणि नीर-क्षीर दृष्टांत (The Swan and Water-Milk Parable)',
    titleEn: 'The Swan and Water-Milk Parable',
    content: 'हंस पक्ष्यासमोर दूध आणि पाणी एकत्र करून ठेवले, तर तो केवळ दूधच पितो आणि पाणी सोडून देतो. तसेच विवेकी पुरुषाने या जगात सुख आणि दुःख, चांगले आणि वाईट यांमधून केवळ सत्त्वगुण आणि ईश्वरी ज्ञानच स्वीकारले पाहिजे।',
    explanation: 'नीर-क्षीर विवेक। असत्याच्या आणि मायेच्या प्रपंचातून केवळ सत्याची आणि मोक्षाची निवड करणे हाच खरा विवेक आहे.'
  }
,
  {
    id: 'dp_97',
    bookId: 'drishtantapath',
    number: 97,
    title: 'दृष्टांत ९७: मृग आणि कस्तुरी दृष्टांत (The Deer and Musk Parable)',
    titleEn: 'The Deer and Musk Parable',
    content: 'कस्तुरी मृगाच्या स्वतःच्या बेंबीतच सुवासिक कस्तुरी असते, पण तो सुगंध कुठून येतो हे न समजल्यामुळे तो वेड्यासारखा वनात इकडेतिकडे शोधत फिरतो. तसेच देव प्रत्येकाच्या हृदयात असूनही अज्ञानी माणूस त्याला मंदिरात-मशिदीत बाहेर शोधतो।',
    explanation: 'आत्मज्ञान आणि ईश्वराचा वास। परमेश्वर बाहेर नसून आपल्याच अंतकरणात आहे, गरज आहे ती अंतर्मुख होऊन त्याला ओळखण्याची.'
  }
,
  {
    id: 'dp_98',
    bookId: 'drishtantapath',
    number: 98,
    title: 'दृष्टांत ९८: वृक्ष आणि फळ दृष्टांत (The Tree and Fruit Parable)',
    titleEn: 'The Tree and Fruit Parable',
    content: 'ज्या वृक्षाला गोड फळे येतात, त्या वृक्षावर लोक दगड मारतात, तरीही वृक्ष त्यांना मधुर फळेच देतो. तसेच सज्जन आणि भक्त पुरुषांवर जगाने कितीही अन्याय केला, तरी ते प्रत्युत्तरादाखल जगाचे कल्याणच करतात।',
    explanation: 'सहनशीलता आणि परोपकार। भगवंताच्या भक्तामध्ये सहनशीलता आणि जगाविषयी केवळ करुणेचाच भाव असतो.'
  }
,
  {
    id: 'dp_99',
    bookId: 'drishtantapath',
    number: 99,
    title: 'दृष्टांत ९९: रत्न आणि कांच दृष्टांत (The Gem and Glass Parable)',
    titleEn: 'The Gem and Glass Parable',
    content: 'रत्न कितीही धुळीत पडले तरी त्याचे मूल्य कमी होत नाही आणि काचेचा तुकडा कितीही सजवला तरी तो हिरा बनू शकत नाही. तसेच ईश्वराचा खरा भक्त कोणत्याही परिस्थितीत आपले चारित्र्य आणि निष्ठा बदलत नाही।',
    explanation: 'सच्च्या भक्तीची किंमत। बाह्य संकट किंवा गरिबी भक्ताच्या आंतरिक आध्यात्मिक संपत्तीला कमी करू शकत नाही.'
  }
,
  {
    id: 'dp_100',
    bookId: 'drishtantapath',
    number: 100,
    title: 'दृष्टांत १००: सूर्य आणि अंधकार दृष्टांत (The Sun and Darkness Parable)',
    titleEn: 'The Sun and Darkness Parable',
    content: 'सूर्याच्या समोर अंधकार कधीही उभा राहू शकत नाही; सूर्य उगवताच अंधाराचे अस्तित्व संपते. त्याचप्रमाणे ज्याच्या अंतकरणात ईश्वराच्या नामाचा आणि ज्ञानाचा प्रकाश प्रकट होतो, त्याच्या मनातील सर्व पाप आणि वासनांचा अंधकार पळून जातो।',
    explanation: 'ईश्वरी प्रकाशाचे सामर्थ्य। ईश्वरी नामाचा उच्चार आणि स्मरण हे सर्व पापांचा नाश करणारे आणि मनाला पवित्र करणारे आहे.'
  }
,
  {
    id: 'dp_101',
    bookId: 'drishtantapath',
    number: 101,
    title: 'दृष्टांत १०१: घट आणि आकाश दृष्टांत (The Pot and Space Parable)',
    titleEn: 'The Pot and Space Parable',
    content: 'घडा फुटला तरी त्याच्या आतील आकाश (पोकळी) नष्ट होत नाही, ते बाह्य विशाल आकाशात विलीन होते. तसेच हा नश्वर देह जरी नष्ट झाला, तरी आत्मा अमर राहून अखेर परमेश्वराच्या अनंत स्वरूपात विलीन होतो।',
    explanation: 'आत्म्याचे अमरत्व। मृत्यू हा केवळ शरीराचा अंत आहे, आत्म्याचा नाही; आत्मा ईश्वराचाच अंश असल्यामुळे शाश्वत आहे.'
  }
,
  {
    id: 'dp_102',
    bookId: 'drishtantapath',
    number: 102,
    title: 'दृष्टांत १०२: कल्पतरू दृष्टांत (The Desire Tree Parable)',
    titleEn: 'The Desire Tree Parable',
    content: 'कल्पतरूच्या खाली बसून माणूस जे काही मागतो, ते त्याला मिळते. पण जर त्याने वाईट विचार केला, तर त्याचे वाईटच होते. तसेच भक्ताने देवाजवळ मागताना नेहमी बुद्धी, भक्ती आणि मोक्ष मागावा, संसारी विषये मागू नयेत।',
    explanation: 'प्रार्थनेची शुद्धता। ईश्वराजवळ भौतिक सुखांची मागणी करणे म्हणजे कल्पवृक्षाखाली बसून विष मागण्यासारखे आहे.'
  }
,
  {
    id: 'dp_103',
    bookId: 'drishtantapath',
    number: 103,
    title: 'दृष्टांत १०३: पारस आणि लोह दृष्टांत (The Touchstone and Iron Parable)',
    titleEn: 'The Touchstone and Iron Parable',
    content: 'लोखंडाचा तुकडा पारस मण्याला स्पर्श करताच त्याचे शुद्ध सोन्यात रूपांतर होते, त्याचा काळेपणा नष्ट होतो. तसेच कितीही पापी मनुष्य असला, तरी सद्गुरूंच्या केवळ सान्निध्याने त्याचे रूपांतर पवित्र साधकामध्ये होते।',
    explanation: 'सत्संगतीचा महिमा। सद्गुरूंचे सान्निध्य आणि कृपा ही अत्यंत दुर्गुणी माणसालाही सज्जन आणि भक्त बनवण्यास समर्थ आहे.'
  }
,
  {
    id: 'dp_104',
    bookId: 'drishtantapath',
    number: 104,
    title: 'दृष्टांत १०४: लोह आणि अग्नी दृष्टांत (The Iron and Fire Parable)',
    titleEn: 'The Iron and Fire Parable',
    content: 'लोखंडाचा तुकडा आगीत टाकला की तो स्वतः तांबडालाल होऊन अग्नीसारखाच प्रकाशू लागतो. तसेच जेव्हा भक्त ईश्वराच्या चिंतनात पूर्णपणे लीन होतो, तेव्हा त्याच्यामध्ये ईश्वरी गुणांचा साक्षात्कार घडू लागतो।',
    explanation: 'तन्मयता आणि सायुज्यता। ईश्वरी आराधनेत स्वतःचे अस्तित्व विसरून लीन होणे म्हणजे देवमय होणे होय.'
  }
,
  {
    id: 'dp_105',
    bookId: 'drishtantapath',
    number: 105,
    title: 'दृष्टांत १०५: सुवर्ण आणि अलंकार दृष्टांत (The Gold and Ornaments Parable)',
    titleEn: 'The Gold and Ornaments Parable',
    content: 'सोन्यापासून बनवलेले दागिने वेगवेगळ्या नावांनी ओळखले जातात - बांगडी, हार, अंगठी. पण त्या सर्वांचे मूळ सोन्याचेच असते. तसेच या जगात सर्व जीव वेगवेगळ्या रूपांत दिसले, तरी त्यांच्यातील चैतन्य एकच ईश्वर आहे।',
    explanation: 'अद्वैत भाव आणि एकत्व। बाह्य विविधता असली तरी सृष्टीतील प्रत्येक कणामध्ये आणि जीवामध्ये एकाच ईश्वराचा अंश सामावलेला आहे.'
  }
,
  {
    id: 'dp_106',
    bookId: 'drishtantapath',
    number: 106,
    title: 'दृष्टांत १०६: बीज आणि वृक्ष दृष्टांत (The Seed and Tree Parable)',
    titleEn: 'The Seed and Tree Parable',
    content: 'एका छोट्याशा बीजामध्ये अवाढव्य वटवृक्ष दडलेला असतो, योग्य वेळ आणि माती मिळताच तो प्रकट होतो. तसेच साधकाच्या मनात पडलेले ईश्वरी वचनाचे बीज योग्य भक्तीच्या मशागतीने दिव्य ज्ञानात रूपांतरित होते।',
    explanation: 'साधनेचे फळ। लहान वचनांचे निरंतर मनन केल्यास कालांतराने त्यातून अथांग आध्यात्मिक ज्ञानाचा आणि शांतीचा उदय होतो.'
  }
,
  {
    id: 'dp_107',
    bookId: 'drishtantapath',
    number: 107,
    title: 'दृष्टांत १०७: तरंग आणि सागर दृष्टांत (The Wave and Ocean Parable)',
    titleEn: 'The Wave and Ocean Parable',
    content: 'सागराच्या लाटा सागरापासून वेगळ्या नसतात, त्या पाण्यातून निर्माण होतात आणि पाण्यातच विरून जातात. तसेच हे संपूर्ण विश्व ईश्वराच्या शक्तीतून निर्माण होते आणि अखेर त्यांच्यातच सामावून जाते।',
    explanation: 'सृष्टीचे मूळ कारण। संपूर्ण विश्व हे ईश्वराचेच खेळणे (लीला) असून त्यांचे अस्तित्व वेगळे नाही.'
  }
,
  {
    id: 'dp_108',
    bookId: 'drishtantapath',
    number: 108,
    title: 'दृष्टांत १०८: आरसा आणि प्रतिबिंब दृष्टांत (The Mirror and Reflection Parable)',
    titleEn: 'The Mirror and Reflection Parable',
    content: 'आरशासमोर जशी वस्तू धरली, तसेच प्रतिबिंब दिसते; आरसा स्वतः पक्षपाती नसतो. तसेच परमेश्वर प्रत्येक जीवाला त्याच्या कर्मानुसार फळ देतो, त्यांच्या मनात कोणताही भेदभाव नसतो।',
    explanation: 'कर्माचा सिद्धांत। ईश्वरी न्याय हा निःपक्षपाती असून आपण जशी साधना करू, तसेच फळ आपल्याला प्राप्त होईल.'
  }
,
  {
    id: 'dp_109',
    bookId: 'drishtantapath',
    number: 109,
    title: 'दृष्टांत १०९: पुष्प आणि सुवास दृष्टांत (The Flower and Fragrance Parable)',
    titleEn: 'The Flower and Fragrance Parable',
    content: 'फुलातील सुवास दिसत नाही, पण तो हवेमध्ये पसरून प्रत्येकाला आनंद देतो. तसेच ईश्वराचे अस्तित्व डोळ्यांनी दिसत नाही, पण त्यांच्या भक्तीचा सुगंध भक्ताच्या पवित्र वर्तनातून संपूर्ण जगात पसरतो।',
    explanation: 'अदृश्य ईश्वरी शक्ती। ईश्वराला डोळ्यांनी पाहण्यापेक्षा त्यांच्या अस्तित्वाचा अनुभव भक्ती आणि प्रेमाच्या माध्यमातून घेणे श्रेष्ठ आहे.'
  }
,
  {
    id: 'dp_110',
    bookId: 'drishtantapath',
    number: 110,
    title: 'दृष्टांत ११०: दूध आणि लोणी दृष्टांत (The Milk and Butter Parable)',
    titleEn: 'The Milk and Butter Parable',
    content: 'दुधात लोणी पूर्णपणे मिसळलेले असते, पण नुसते पाहिल्याने ते दिसत नाही; त्यासाठी दुधाचे दही करून ते घुसळावे लागते. तसेच देव विश्वात असूनही दिसत नाही, पण भक्तीने अंतकरण घुसळल्यास तो प्रकट होतो।',
    explanation: 'साधनेची आवश्यकता। ईश्वराची प्रचिती घेण्यासाठी केवळ पुस्तकी ज्ञान पुरेसे नसून नामस्मरण आणि आंतरिक मनन आवश्यक आहे.'
  }
,
  {
    id: 'dp_111',
    bookId: 'drishtantapath',
    number: 111,
    title: 'दृष्टांत १११: गंगा आणि सागर दृष्टांत (The Ganges and Ocean Parable)',
    titleEn: 'The Ganges and Ocean Parable',
    content: 'गंगा नदी शेकडो अडथळे, डोंगर आणि दऱ्या पार करून अखेर सागराला मिळते व शांत होते; तिला सागराशी एकरूप झाल्यावरच विश्रांती मिळते. तसेच भक्ताचा आत्मा संसारातील संकटे पार करून ईश्वराच्या चरणी मिळून तृप्त होतो।',
    explanation: 'आद्यात्मिक ध्येय। संसारातील अडथळ्यांना न जुमानता भक्ताने केवळ ईश्वरी मीलनाचा आणि मोक्षाचा ध्यास धरावा.'
  }
,
  {
    id: 'dp_112',
    bookId: 'drishtantapath',
    number: 112,
    title: 'दृष्टांत ११२: चंदन वृक्ष दृष्टांत (The Sandalwood Tree Parable)',
    titleEn: 'The Sandalwood Tree Parable',
    content: 'चंदन वृक्षाला सापांनी वेढलेले असले, तरी तो कधी आपले शीतलत्व सोडत नाही आणि विषारी बनत नाही. तसेच खऱ्या संतांच्या अवतीभोवती कितीही वाईट प्रवृत्तीचे लोक असले, तरी ते आपली शांती आणि सत्त्वगुण कधी सोडत नाहीत।',
    explanation: 'अढळ नीतिमत्ता। वाईट परिस्थिती किंवा संगती साधकाच्या मूळ स्वभावगुणाला आणि ईश्वरी श्रद्धेला कलंकित करू शकत नाही.'
  }
,
  {
    id: 'dp_113',
    bookId: 'drishtantapath',
    number: 113,
    title: 'दृष्टांत ११३: कस्तुरी सुवास दृष्टांत (The Musk Fragrance Parable)',
    titleEn: 'The Musk Fragrance Parable',
    content: 'कस्तुरीचा सुगंध कधीही लपवून ठेवता येत नाही; तो आपोआप हवेत पसरून सर्वांना आकर्षित करतो. तसेच ईश्वराचा खरा साधक कितीही एकांतात असला, तरी त्याच्या भक्तीचा आणि ज्ञानाचा सुवास लोकांपर्यंत पोहोचतोच।',
    explanation: 'खऱ्या भक्तीचे तेज। अस्सल आध्यात्मिक प्रगती कधीही लपून राहत नाही, तिचे तेज आणि शांतता इतरांना प्रेरणा देते.'
  }
,
  {
    id: 'dp_114',
    bookId: 'drishtantapath',
    number: 114,
    title: 'दृष्टांत ११४: दीप आणि ज्योती दृष्टांत (The Lamp and Flame Parable)',
    titleEn: 'The Lamp and Flame Parable',
    content: 'एका पेटलेल्या दिव्यापासून हजारो दिवे पेटवले तरी मूळ दिव्याचा प्रकाश कमी होत नाही. तसेच ईश्वर सर्व जीवांमध्ये आपली भक्ती आणि ज्ञान वाटत असले, तरी त्यांचे पूर्णत्व कधीही कमी होत नाही, ते अनंतच राहतात।',
    explanation: 'अनंत ईश्वरी स्वरूप। परमेश्वर हा पूर्ण आहे आणि त्यांच्यापासून निर्माण झालेले हे जगही त्यांच्या पूर्णत्वाला कधी कमी करू शकत नाही.'
  }
,
  {
    id: 'sp_1',
    bookId: 'sutrapath',
    number: 1,
    title: 'प्रकरण १: आचार मालिका (Achar Malika)',
    titleEn: 'Achar Malika',
    content: '॥ श्री परमेश्वरायनमः ॥\n१. परिग्रहा पासौनि निवृत्ति करावी।\n२. संनिधि परिहारे, असंभोगु रक्षीजे।\n३. विविचेनी ठाणे राहावे।\n४. ग्राम्य धर्मासी सन्निधान न करावे।\n५. असंभोगु रक्षीजे: स्त्रीयां, पुरुषां, नपुसकां, पशूं, पक्षीयांसी संग न करावा।',
    explanation: 'इस प्रकरण में साधक के दैनिक आचार, विरक्ति और ब्रह्मचर्य की रक्षा के लिए परमेश्वर की ओर से नियमों का निरूपण किया गया है। साधक को परिग्रह (संग्रह वृत्ति) से दूर रहकर एकांत और साधनापूर्ण जीवन बिताना चाहिए।',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  }
,
  {
    id: 'sp_2',
    bookId: 'sutrapath',
    number: 2,
    title: 'प्रकरण २: विचार मालिका (Vichar Malika)',
    titleEn: 'Vichar Malika',
    content: '१. ज्ञान हेचि परमेश्वर स्वरूप।\n२. प्रपंचु तो अज्ञान रूपु।\n३. जीव हा अज्ञाने आवृत आहे।\n४. परमेश्वर कृपेनेचि मुमुक्षूला ज्ञानाची प्राप्ती होते।\n५. ईश्वर भक्तीवाचून गत्यंतर नाही।',
    explanation: 'विचार मालिका में ज्ञान और अज्ञान के स्वरूप पर प्रकाश डाला गया है। चक्रधर स्वामी समझाते हैं कि प्रपंच माया का रूप है और केवल परमेश्वर भक्ति व ज्ञान ही आत्मा के उद्धार का मार्ग है।',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  }
,
  {
    id: 'sp_3',
    bookId: 'sutrapath',
    number: 3,
    title: 'प्रकरण ३: आचार विधी (Achar Vidhi)',
    titleEn: 'Achar Vidhi',
    content: '१. नित्य देवपूजा करावी, मन ईश्वरी लीन ठेवावे।\n२. दीनाचा पाश न घ्यावा, दयाभाव दृढ करावा।\n३. भोजनकाळी शुद्ध भाव ठेवावा, भिक्षेचे अन्न पवित्र मानावे।\n४. वाद-विवादापासून दूर राहावे।',
    explanation: 'साधक को दयाभाव, संयमित जीवनशैली और सात्विक आहार का पालन करना चाहिए। भिक्षा का अन्न ईश्वर प्रसाद स्वरूप ग्रहण करना और सभी जीवों पर दया करना धर्म का अंग है।'
  }
,
  {
    id: 'sp_4',
    bookId: 'sutrapath',
    number: 4,
    title: 'प्रकरण ४: लक्षण सूत्र (Lakshan Sutra)',
    titleEn: 'Lakshan Sutra',
    content: '१. परमेश्वर लक्षण हे केवळ आनंद व परमोदारता होय।\n२. खरा साधक तो जो द्वंद्वरहित आहे।\n३. सुख-दुःख समान मानणे हे विरागी लक्षणाचे चिन्ह होय।\n४. परमेश्वर भक्तांना निरंतर शांती लाभते।',
    explanation: 'इस अध्याय में परमेश्वर और सच्चे भक्त के उत्तम लक्षणों की विवेचना की गई है। भक्त वह है जो समता, शांती और पूर्ण आत्मसमर्पण के भाव में लीन रहता है।'
  }
,
  {
    id: 'lc_1',
    bookId: 'leelacharitra',
    number: 1,
    title: 'लीला १: श्री चक्रपाणि अवतार लीला (Chakrapani Avatar Leela)',
    titleEn: 'Chakrapani Avatar Leela',
    content: 'एके दिवशी द्वारकापुरीमध्ये श्री चक्रपाणि महाराज आपल्या भक्तांसह क्रीडा करत होते. त्यांनी भक्तांना परम आनंद दिला आणि नंतर लीलाविग्रहाने लोककल्याणासाठी अवतार प्रगट केला. उनके स्पर्श मात्र से ही दीनों के कष्ट दूर हो गए।',
    explanation: 'श्री चक्रपाणि महाराज महानुभाव पंथ के पंचकृष्णों में से द्वितीय अवतार हैं। यह लीला उनके दिव्य अवतार ग्रहण करने और द्वारका में भक्तों के उद्धार की सुंदर कथा वर्णित करती है।',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  }
,
  {
    id: 'lc_2',
    bookId: 'leelacharitra',
    number: 2,
    title: 'लीला २: श्री चांगदेव राऊळ भेट लीला (Changdev Raul Meet)',
    titleEn: 'Changdev Raul Meet',
    content: 'सर्वज्ञ श्रीचक्रधर स्वामी आणि चांगदेव राऊळ महाराज यांची भेट झाली. दोन दिव्य अवतार एकत्र आल्यावर सृष्टीवर दैवी आनंदाचा वर्षाव झाला. दोघांनी परस्परांना आलिंगन दिले व लोककल्याणाच्या आध्यात्मिक कार्याचे सूत्र निश्चित केले।',
    explanation: 'चांगदेव राऊळ (द्वारकाचे परमेश्वर) और चक्रधर स्वामी जी की पावन आध्यात्मिक भेंट की सुंदर गाथा। दोनों महाप्रभुओं का एकात्म भाव दर्शनीय है।'
  }
,
  {
    id: 'lc_3',
    bookId: 'leelacharitra',
    number: 3,
    title: 'लीला ३: पैठण गमन आणि उपदेश लीला (Paithan Visit)',
    titleEn: 'Paithan Visit',
    content: 'स्वामी पैठण नगरीत दाखल झाले. तेथे गोदावरी काठी त्यांनी लोकांना अतिशय सोप्या शब्दांत परमेश्वर भक्तीचा आणि अहिंसेचा उपदेश केला. अनेक विद्वानांनी त्यांचे श्रेष्ठत्व मान्य करून त्यांचे शिष्यत्व स्वीकारले।',
    explanation: 'पैठण में गोदावरी नदी के तट पर स्वामी द्वारा दिए गए दिव्य उपदेशों और शिष्यों के साथ उनके पावन संस्मरणों का वर्णन।'
  }
,
  {
    id: 'achar_1',
    bookId: 'acharpath',
    number: 1,
    title: 'प्रकरण १: आचार धर्म',
    content: '१. नित्य नैमित्तिक कृत्य यथाविधी करावे।\n२. शुचिर्भूत राहुनि धर्मग्रंथांचे वाचन करावे।\n३. परपीडेपासून परावृत्त व्हावे, सत्य व अहिंसेचे आचरण करावे।',
    explanation: 'आचारपाठ में साधकों के आचरण की पवित्रता, सात्विक आचार और मर्यादा का गहन विवेचन है।'
  }
,
  {
    id: 'vichar_1',
    bookId: 'vicharpath',
    number: 1,
    title: 'प्रकरण १: विचार रहस्य',
    content: '१. विवेक हा चि सर्व कर्मांचे मूळ होय।\n२. शुद्ध विचारानेच मन निर्विषय होते।\n३. ईश्वराचे ध्यान हेच मनाला स्थिर करते।',
    explanation: 'विचारपाठ में आत्मा, जीव, जगत और माया के चिंतन की वैज्ञानिक विवेचना की गई है।'
  }
,
  {
    id: 'vach_1',
    bookId: 'vachanamrut',
    number: 1,
    title: 'वचनामृत संग्रह १',
    content: '१. "माझा जीव अनंत सुखाचा धनी आहे, परी तो मायेने वेढिला गेला आहे।"\n२. "परमेश्वर भक्ती हीच मानवी जन्माचे सार्थक होय।"\n३. "दया, क्षमा, शांती ज्याच्या ठायी, परमेश्वर तेथेच वास करतो।"',
    explanation: 'स्वामी के वचन अमृत की तरह साधकों को भवसागर से तारते हैं और आत्मिक शांती प्रदान करते हैं।'
  }
,
  {
    id: 'lakshan_1',
    bookId: 'lakshanratnakar',
    number: 1,
    title: 'अध्याय १: ईश्वरी लक्षणे',
    content: '१. ईश्वराचे अंगी परम कारुणिकता, सर्वज्ञता आणि सर्वशक्तिमत्ता असते।\n२. तो जीवांच्या कल्याणासाठी विविध सगुण अवतार धारण करतो।',
    explanation: 'इस अध्याय में परमेश्वर के सगुण-साकार स्वरूप की विशेषताओं और उनके दयालु लक्षणों की शास्त्रीय मीमांसा है।'
  }
,
  {
    id: 'prak_1',
    bookId: 'prakaranvas',
    number: 1,
    title: 'प्रकरण १: दार्शनिक विवेचन',
    content: 'महानुभाव संप्रदायातील मूळ सिद्धांत जसे की चार विधी, पंच अवतार आणि जीवाचे मूळ स्वरूप यांचे सविस्तर विवेचन या प्रकरणात आढळते।',
    explanation: 'महानुभाव दर्शन के आधारभूत सिद्धांतों को समझने के लिए यह प्रकरण ग्रन्थ अत्यंत सहायक है।'
  }
,
  {
    id: 'nir_1',
    bookId: 'niruktashesh',
    number: 1,
    title: 'शब्द निरूक्त १: कठीण शब्दार्थ',
    content: '१. परिग्रह - संग्रह वृत्ती किंवा संचय वृत्ती।\n२. असंभोग - सर्व प्रकारच्या संसर्गाचा त्याग।\n३. सगुण - गुणांसह किंवा साकार रूपाने प्रगट झालेला परमेश्वर।',
    explanation: 'महानुभाव ग्रंथों में प्रयुक्त प्राचीन मराठी के दार्शनिक और क्लिष्ट शब्दों का सटीक निरूपण।'
  }
,
  {
    id: 'panch_1',
    bookId: 'panchakrishna_charitra',
    number: 1,
    title: 'अवतार १: श्रीकृष्ण चरित्र',
    content: 'भगवान श्रीकृष्ण हे महानुभाव संप्रदायाचे आद्यदैवत आहेत। त्यांच्या गोकुळ आणि द्वारकेतील सर्व लीला मोक्षप्रद आहेत।',
    explanation: 'महानुभाव मान्यतानुसार पंचकृष्णों में सर्वप्रथम श्रीकृष्ण महाराज के दिव्य रूप की वन्दना।'
  }
,
  {
    id: 'shreek_1',
    bookId: 'shreekrishnacharitra',
    number: 1,
    title: 'लीला १: कालियामर्दन व गोवर्धन लीला',
    titleEn: 'Kaliyadamana and Govardhana Lila',
    content: 'यमुनेच्या तीरावर कालिंदीच्या डोहातील कालिया नागाचा गर्व श्रीकृष्ण भगवंतांनी हरण केला, आणि संपूर्ण गोकुळाला इंद्र कोपापासून गोवर्धन पर्वत उचलून वाचवले।',
    explanation: 'श्रीकृष्ण भगवान की महान सुरक्षात्मक और लोक-कल्याणकारी लीला का पावन स्मरण।'
  },
  {
    id: 'shreek_2',
    bookId: 'shreekrishnacharitra',
    number: 2,
    title: 'लीला २: श्रीकृष्ण जन्म लीला',
    titleEn: 'Divine Birth of Lord Krishna',
    content: 'कारागृहामध्ये देवकी आणि वसुदेव यांच्या पोटी भगवान श्रीकृष्णांचा दिव्य जन्म झाला. कंसाच्या भीतीने वसुदेवांनी बाल श्रीकृष्णाला टोपलीत ठेवून, मुसळधार पावसात दुथडी भरून वाहणारी यमुना नदी पार करून गोकुळात नंदराजाच्या घरी सुखरूप पोहोचवले।',
    explanation: 'भगवान श्रीकृष्णाच्या पृथ्वीवरील दिव्य अवताराची आणि गोकुळात आगमनाची पावन कथा।'
  },
  {
    id: 'shreek_3',
    bookId: 'shreekrishnacharitra',
    number: 3,
    title: 'लीला ३: पूतना मोक्ष लीला',
    titleEn: 'Liberation of Putana',
    content: 'कंसाने धाडलेली क्रूर राक्षसी पूतना गोकुळात येऊन बाल श्रीकृष्णाला विषारी दूध पाजण्याचा प्रयत्न करू लागली. परंतु, लीलाधारी श्रीकृष्णाने तिच्या स्तनाद्वारे तिचे प्राणच ओढून घेतले आणि तिला सद्गती (मोक्ष) प्रदान केली।',
    explanation: 'दुष्ट प्रवृत्तीचा नाश आणि शत्रूलाही मोक्ष देणारा भगवंतांचा अगाध दयाळूपणा।'
  },
  {
    id: 'shreek_4',
    bookId: 'shreekrishnacharitra',
    number: 4,
    title: 'लीला ४: माखण चोरी व यशोदा मैया ब्रह्मांड दर्शन',
    titleEn: 'Butter Stealing and Cosmic Vision',
    content: 'श्रीकृष्ण गोकुळात सवंगड्यांसोबत घराघरांत जाऊन दही, दूध आणि लोणी (माखण) चोरून खात असत. एकदा माती खाल्ल्याच्या संशयावरून जेव्हा यशोदा मातेने त्यांना तोंड उघडायला लावले, तेव्हा बालकृष्णाने तिच्यासमोर संपूर्ण विश्वाचे (ब्रह्मांडाचे) दर्शन घडवून थक्क केले।',
    explanation: 'भगवंताची मधुर बाळलीला आणि भक्ताला घडवलेले संपूर्ण विश्वाचे दिव्य दर्शन।'
  },
  {
    id: 'shreek_5',
    bookId: 'shreekrishnacharitra',
    number: 5,
    title: 'लीला ५: यमलार्जुन उद्धार लीला',
    titleEn: 'Liberation of Yamalarjuna Trees',
    content: 'मस्ती केल्यामुळे यशोदा मातेने श्रीकृष्णाला उखळाशी बांधून ठेवले. श्रीकृष्णाने ते जड उखळ ओढत ओढत दोन विशाल ककुभ (यमलार्जुन) वृक्षांच्या मधून नेले, ज्यामुळे ते वृक्ष उन्मळून पडले आणि शापित कुबेरपुत्रांचा (नलकूबर आणि मणीग्रीव) उद्धार झाला।',
    explanation: 'भगवंतांच्या स्पर्शाने आणि केवळ कृपेने झालेल्या पूर्वशापमुक्तीचे महान स्मरण।'
  },
  {
    id: 'shreek_6',
    bookId: 'shreekrishnacharitra',
    number: 6,
    title: 'लीला ६: कंस वध व उग्रसेन राज्याभिषेक',
    titleEn: 'Slaying of Kamsa',
    content: 'मथुरेमध्ये दुष्ट राजा कंसाच्या निमंत्रणावरून श्रीकृष्ण आणि बलराम तिथे पोहोचले. कंसाने पाठवलेल्या कुवलयापीड हत्ती, चाणूर आणि मुष्टिक या मल्लांचा पराभव करून श्रीकृष्णाने कंसाचा वध केला आणि उग्रसेन महाराज व मातापित्यांना मुक्त केले।',
    explanation: 'अधर्माचा संपूर्ण नाश आणि मथुरेतील प्रजेची जुलुमी राजवटीतून सुटका.'
  },
  {
    id: 'shreek_7',
    bookId: 'shreekrishnacharitra',
    number: 7,
    title: 'लीला ७: सुदामा मैत्री व भेट लीला',
    titleEn: 'Sudaama Friendship and Devotion',
    content: 'श्रीकृष्णाचे बालमित्र सुदामा जेव्हा अत्यंत गरिबीत द्वारकेला भेटायला आले, तेव्हा द्वारकाधीश श्रीकृष्णाने स्वतः सिंहासनावरून उठून त्यांचे स्वागत केले. सुदामाने आणलेले पोहे अत्यंत आवडीने खाऊन त्यांनी सुदामाच्या नकळत त्याच्या झोपडीचे सुवर्ण महालात रूपांतर केले।',
    explanation: 'खरी मैत्री आणि निस्सीम भक्तीपुढे नतमस्तक होणारा भगवंताचा प्रेमळ स्वभाव.'
  },
  {
    id: 'shreek_8',
    bookId: 'shreekrishnacharitra',
    number: 8,
    title: 'लीला ८: द्रौपदी वस्त्रहरण व लाज राखणे',
    titleEn: 'Protection of Draupadi’s Honor',
    content: 'कौरवांच्या सभेत जेव्हा द्रौपदीचे वस्त्रहरण केले जात होते, तेव्हा तिने अनन्यभावाने श्रीकृष्ण भगवंतांचा धावा केला. धावून आलेल्या श्रीकृष्णाने वस्त्रांचे डोंगर निर्माण करून द्रौपदीची अब्रू राखली आणि दुष्टांचा अहंकार चिरडला।',
    explanation: 'संकटसमयी अनन्यभावाने हाक मारणाऱ्या भक्तासाठी देव धावून येतो हा अभेद्य विश्वास.'
  },
  {
    id: 'shreek_9',
    bookId: 'shreekrishnacharitra',
    number: 9,
    title: 'लीला ९: श्रीमद्भगवद्गीता ज्ञानोपदेश',
    titleEn: 'Preaching of Shrimad Bhagavad Gita',
    content: 'कुरुक्षेत्राच्या युद्धभूमीत अर्जुन जेव्हा कर्तव्यमोहाने ग्रस्त झाला, तेव्हा रथसारथी बनलेल्या भगवान श्रीकृष्णाने त्याला दिव्य ज्ञान दिले, जे "श्रीमद्भगवद्गीता" म्हणून प्रसिद्ध आहे. त्यांनी आपले "विश्वरूप" दाखवून अर्जुनाला निष्काम कर्मयोगाचा मार्ग दाखवला।',
    explanation: 'जीवन जगण्याचा आणि मोक्षप्राप्तीचा सर्वश्रेष्ठ संदेश देणारा गीता उपदेश.'
  },
  {
    id: 'shreek_10',
    bookId: 'shreekrishnacharitra',
    number: 10,
    title: 'लीला १०: रुक्मिणी स्वयंवर व विवाह',
    titleEn: 'Rukmini Swayamvara and Marriage',
    content: 'विदर्भ राजकुमारी रुक्मिणीने श्रीकृष्णाला आपले सर्वस्व मानून गुप्त पत्र पाठवून धावून येण्याची विनंती केली. तिच्या आर्त हाकेला प्रतिसाद देत श्रीकृष्णाने विदर्भात जाऊन तिला सन्मानाने रथात बसवून द्वारकेला आणले आणि स्वयंवर संपन्न केले।',
    explanation: 'प्रेम आणि श्रद्धेचा विजय, आणि शरणागताचे पूर्ण रक्षण करणारा दयाळू देव.'
  },
  {
    id: 'shreek_11',
    bookId: 'shreekrishnacharitra',
    number: 11,
    title: 'लीला ११: जरासंध व शिशुपाल वध',
    titleEn: 'Slaying of Jarasandha and Shishupala',
    content: 'राजसूय यज्ञात धर्मराजाला साहाय्य करत श्रीकृष्णाने भीमाकरवी महाबली जरासंधाचा वध घडवला आणि यज्ञ निर्विघ्न केला. तसेच सभेत शंभर चुका पूर्ण झाल्यावर दुष्ट शिशुपालाचा सुदर्शन चक्राने वध करून पृथ्वीवरील पाप कमी केले।',
    explanation: 'दुष्ट शक्तींचा संहार आणि युधिष्ठिराच्या धर्मराज्याचा पाया मजबूत करण्याची पावन लीला.'
  },
  {
    id: 'shreek_12',
    bookId: 'shreekrishnacharitra',
    number: 12,
    title: 'लीला १२: समुद्र मध्यभागी द्वारका नगरी स्थापना',
    titleEn: 'Establishment of Dwarka City',
    content: 'जरासंधाच्या वारंवार होणाऱ्या आक्रमणांपासून यादवांचे रक्षण करण्यासाठी श्रीकृष्णाने पश्चिमेला समुद्राच्या मध्यभागी दिव्य "द्वारका" नगरीची स्थापना केली. सुदर्शन चक्राच्या सहाय्याने त्यांनी संपूर्ण द्वारकेला अभेद्य दुर्ग बनवले।',
    explanation: 'आपल्या प्रजेच्या आणि भक्तांच्या रक्षणासाठी व कल्याणासाठी केलेले सुरक्षित कार्य.'
  },
  {
    id: 'shreek_13',
    bookId: 'shreekrishnacharitra',
    number: 13,
    title: 'लीला १३: बकासूर वध लीला',
    titleEn: 'Slaying of Bakasura',
    content: 'एकदा कंसप्रेरित बकासूर नावाच्या राक्षसाने महाकाय बगळ्याचे रूप घेऊन बाल श्रीकृष्णाला गिळले. परंतु, श्रीकृष्णाने त्याच्या शरीरात एवढी उष्णता निर्माण केली की बकासुराने त्यांना बाहेर टाकले, त्यानंतर श्रीकृष्णाने त्याचे चोच पकडून त्याचे दोन तुकडे केले।',
    explanation: 'संकट घालवून गोकुळातील बालमित्रांचे रक्षण करणारी भगवंतांची लीलया क्रीडा.'
  },
  {
    id: 'shreek_14',
    bookId: 'shreekrishnacharitra',
    number: 14,
    title: 'लीला १४: अघासूर वध लीला',
    titleEn: 'Slaying of Aghasura',
    content: 'कंसाचा धाकटा भाऊ अघासूर याने अजगराचे रूप घेऊन आपले तोंड पसरले. गोपाळ त्याला गुहा समजून आत गेले. त्यांच्या रक्षणासाठी श्रीकृष्ण स्वतः त्याच्या तोंडात गेले आणि स्वतःच्या शरीराचा आकार एवढा वाढवला की अघासुराचे प्राण कंठाशी येऊन तो मरण पावला।',
    explanation: 'सर्व संकटांतून आपल्या भक्तांना मुक्त करून त्यांना नवजीवन देणारी अद्भुत लीला.'
  },
  {
    id: 'shreek_15',
    bookId: 'shreekrishnacharitra',
    number: 15,
    title: 'लीला १५: तृणावर्त वध लीला',
    titleEn: 'Slaying of Trinavarta',
    content: 'कंसाने पाठवलेला तृणावर्त चक्रवाताचे (वादळाचे) रूप घेऊन आला आणि त्याने बाल श्रीकृष्णाला आकाशात नेले. श्रीकृष्णाने आपले वजन डोंगराएवढे वाढवून त्याचा गळा आवळला, ज्यामुळे तो खाली कोसळला आणि त्याचा अंत झाला।',
    explanation: 'अहंकारी आणि वादळरूपी वाईट विचारांचे निर्दालन करणारी भगवंतांची दैवी शक्ती.'
  },
  {
    id: 'shreek_16',
    bookId: 'shreekrishnacharitra',
    number: 16,
    title: 'लीला १६: धेनुकासूर वध लीला',
    titleEn: 'Slaying of Dhenukasura',
    content: 'तालवनात धेनुकासूर नावाचा गर्धभ (गाढव) रूपातील राक्षस राहत होता, ज्याने तेथील फळे गोपाळांना खाण्यास मनाई केली होती. श्रीकृष्ण आणि बळराम तेथे गेले. बळरामाने धेनुकासुराला पायाने पकडून झाडावर आदळले व त्याचा वध केला, तर श्रीकृष्णाने त्याच्या इतर साथीदारांचा नाश केला।',
    explanation: 'भक्तांच्या सुखासाठी आणि अन्नावरील निर्बंध दूर करण्यासाठी केलेले दुष्कृत्य निवारण.'
  },
  {
    id: 'shreek_17',
    bookId: 'shreekrishnacharitra',
    number: 17,
    title: 'लीला १७: प्रलम्बासूर वध लीला',
    titleEn: 'Slaying of Pralambasura',
    content: 'गोपाळांसोबत खेळत असताना प्रलम्बासूर नावाचा राक्षस गोपाळांचे रूप घेऊन आला आणि बळरामांना खांद्यावर घेऊन पळू लागला. बळरामाने त्याचे कपट ओळखून आपल्या वज्रमुष्टीने त्याच्या डोक्यावर प्रहार केला आणि त्याला यमसदनास धाडले।',
    explanation: 'सज्जनांच्या वेषात येणाऱ्या दुर्जनांना शोधून त्यांचा नायनाट करण्याचे बळ देणारी लीला.'
  },
  {
    id: 'shreek_18',
    bookId: 'shreekrishnacharitra',
    number: 18,
    title: 'लीला १८: केशी वध व व्योमासूर वध लीला',
    titleEn: 'Slaying of Keshi and Vyomasura',
    content: 'केशी नावाच्या महाभयंकर घोड्याच्या रूपातील राक्षसाने गोकुळात उच्छाद मांडला होता. श्रीकृष्णाने आपला हात त्याच्या तोंडात घालून त्याचा श्वास कोंडला व त्याला ठार केले. नंतर गुहेत लपवलेल्या गोपाळांना व्योमासूर राक्षसाचा वध करून मुक्त केले।',
    explanation: 'भीतीचा पराभव करून भक्तांना निर्भयतेचे वरदान देणारे भगवंतांचे शौर्य.'
  },
  {
    id: 'shreek_19',
    bookId: 'shreekrishnacharitra',
    number: 19,
    title: 'लीला १९: कालियनागाचे निर्वासन व यमुना शुद्धीकरण',
    titleEn: 'Exile of Kaliya and Purification of Yamuna',
    content: 'यमुना नदीच्या पात्रात राहणाऱ्या कालिया नागाच्या विषामुळे नदीचे पाणी विषारी झाले होते. श्रीकृष्ण यमुनेत उडी मारून त्याच्या फणांवर नाचले. शेवटी नागाच्या पत्नींच्या प्रार्थनेवरून त्याला क्षमा करून रमणक द्वीपावर जाण्याची आज्ञा दिली व यमुना शुद्ध केली।',
    explanation: 'पर्यावरणाचे रक्षण आणि वाईट प्रवृत्तीचे दमन करून त्यांना योग्य मार्ग दाखवणे.'
  },
  {
    id: 'shreek_20',
    bookId: 'shreekrishnacharitra',
    number: 20,
    title: 'लीला २०: वरुणा देवाकडून नंदराजाची सुटका',
    titleEn: 'Rescue of Nanda from Varuna',
    content: 'नंद महाराज यमुनेत स्नान करत असताना वरुणाच्या दूतांनी त्यांना पकडून वरुणलोकात नेले. हे समजताच श्रीकृष्ण वरुणलोकात गेले. तिथे वरुणदेवाने स्वतः भगवंतांची पूजा केली आणि नंदराजाला आदराने मुक्त केले।',
    explanation: 'पितृभक्ती आणि यम-वरुणादी देवांवरही आपले अधिराज्य सिद्ध करणारी लीला.'
  },
  {
    id: 'shreek_21',
    bookId: 'shreekrishnacharitra',
    number: 21,
    title: 'लीला २१: दावानल विमोचन लीला',
    titleEn: 'Swallowing of Forest Fire',
    content: 'एकदा जंगलात अचानक भीषण वणवा (दावानल) पेटला आणि सर्व गोपाळ व गाई त्यात अडकले. त्यांनी घाबरून श्रीकृष्णाचा धावा केला. भगवंतांनी सर्वांना डोळे मिटण्यास सांगितले आणि क्षणात तो संपूर्ण वणवा स्वतःच्या मुखात गिळून घेतला।',
    explanation: 'संकटसमयी शरणागती पत्करणाऱ्या भक्तांचे सर्व दुःख व संकटे स्वतः पचवणारा देव.'
  },
  {
    id: 'shreek_22',
    bookId: 'shreekrishnacharitra',
    number: 22,
    title: 'लीला २२: गोपिकांचे वस्त्रहरण लीला',
    titleEn: 'Stealing of Gopis’ Clothes',
    content: 'यमुनेवर स्नान करणाऱ्या गोपिकांचे वस्त्र श्रीकृष्णाने लपवून ठेवले. यामागील उद्देश त्यांचा देहभाव आणि संकोच दूर करून त्यांना अनन्यभावाने ईश्वराला शरण येण्याचे आध्यात्मिक रहस्य शिकवणे हा होता।',
    explanation: 'लौकिक मोह व संकोच त्यागून ईश्वराशी एकरूप होण्याचा संदेश देणारी परम गूढ लीला.'
  },
  {
    id: 'shreek_23',
    bookId: 'shreekrishnacharitra',
    number: 23,
    title: 'लीला २३: यज्ञपत्नी अन्नदान लीला',
    titleEn: 'Honoring the Wives of Brahmanas',
    content: 'भूक लागल्यामुळे श्रीकृष्णाने गोपाळांना यज्ञ करणाऱ्या ब्राह्मणांकडे अन्न मागण्यास पाठवले, परंतु त्यांनी नकार दिला. जेव्हा ते ब्राह्मणांच्या पत्नींकडे गेले, तेव्हा त्यांनी अत्यंत प्रेमाने सर्व अन्न आणून श्रीकृष्णाला अर्पण केले. भगवंतांनी त्यांच्या भक्तीचा स्वीकार केला।',
    explanation: 'कोरड्या कर्मकांडापेक्षा प्रेमाची आणि निस्सीम भक्तीची श्रेष्ठता दर्शवणारी लीला.'
  },
  {
    id: 'shreek_24',
    bookId: 'shreekrishnacharitra',
    number: 24,
    title: 'लीला २४: रासक्रीडा व महारास लीला',
    titleEn: 'The Divine Rasa Lila',
    content: 'शरद ऋतूच्या चांदण्यात श्रीकृष्णाने यमुनेच्या वाळवंटात दिव्य बासरी वाजवली. तिच्या सुरांनी मोहित होऊन सर्व गोपिका घरदार सोडून आल्या. भगवंतांनी अनेक रूपे घेऊन प्रत्येक गोपीसोबत नृत्य केले आणि त्यांना आत्मानंद प्रदान केला।',
    explanation: 'जीव आणि शिवाच्या अद्वैत मीलनाचे आणि भक्तीच्या सर्वोच्च अवस्थेचे अलौकिक प्रकटीकरण.'
  },
  {
    id: 'shreek_25',
    bookId: 'shreekrishnacharitra',
    number: 25,
    title: 'लीला २५: शंखचूड वध व अरिष्टासूर वध लीला',
    titleEn: 'Slaying of Shankhachuda and Arishtasura',
    content: 'कुबेराचा सेवक शंखचूड गोपिकांचे हरण करत असताना श्रीकृष्णाने त्याचा वध करून त्याच्या डोक्यावरील मौल्यवान मणी काढून घेतला. तसेच बैलाच्या रूपातील अरिष्टासुराचा शिंगे पकडून वध केला।',
    explanation: 'भक्तांच्या स्वातंत्र्यावर गदा आणणाऱ्या आणि पशुवृत्तीने वागणाऱ्या दुष्टांचा विनाश.'
  },
  {
    id: 'shreek_26',
    bookId: 'shreekrishnacharitra',
    number: 26,
    title: 'लीला २६: अक्रूर गोकुळ आगमन व दर्शन',
    titleEn: 'Akrura’s Arrival in Gokul',
    content: 'कंसाचा दूत म्हणून अक्रूरजी श्रीकृष्णाला मथुरेला नेण्यासाठी गोकुळात आले. यमुनेमध्ये स्नान करताना अक्रूरजींना पाण्यात आणि बाहेर दोन्हीकडे श्रीकृष्णाचे चतुर्भुज रूप आणि शेषशायी विष्णूचे दिव्य दर्शन झाले, ज्यामुळे त्यांची भक्ती दृढ झाली।',
    explanation: 'भक्ताला यथार्थ दर्शन देऊन कृतार्थ करणे आणि प्रवासाची पावन सुरुवात.'
  },
  {
    id: 'shreek_27',
    bookId: 'shreekrishnacharitra',
    number: 27,
    title: 'लीला २७: रजक उद्धार व कुब्जा कृपा लीला',
    titleEn: 'Blessing Kubja and Slaying the Washerman',
    content: 'मथुरेत प्रवेश करताना श्रीकृष्णाने कंसाच्या गर्विष्ठ धोब्याचा (रजक) वध करून कपडे घेतले. पुढे तीन ठिकाणी वाकडी असलेल्या कुब्जा दासीने सुगंधी चंदन अर्पण केल्यावर तिच्यावर कृपा करून तिचे अंग सुडौल आणि सुंदर केले।',
    explanation: 'अहंकाराचा नाश आणि विनम्र भक्ताला सौंदर्य व सद्गती प्रदान करणारी दयाळू लीला.'
  },
  {
    id: 'shreek_28',
    bookId: 'shreekrishnacharitra',
    number: 28,
    title: 'लीला २८: धनुष यज्ञ खंडन व कुवलयापीड वध',
    titleEn: 'Breaking the Bow and Slaying Kuvalayapida',
    content: 'श्रीकृष्णाने रंगशाळेत जाऊन महादेवाचे जड दिव्य धनुष्य लीलया उचलून त्याचे दोन तुकडे केले. कंसाने महाद्वारी सोडलेल्या कुवलयापीड हत्तीचे दात उपटून त्याचा आणि त्याच्या महावताचा वध केला।',
    explanation: 'शक्तीच्या आणि सत्तेच्या गर्वाचे हरण करून विजयाची घोषणा करणारी पराक्रमी लीला.'
  },
  {
    id: 'shreek_29',
    bookId: 'shreekrishnacharitra',
    number: 29,
    title: 'लीला २९: संदीपनी ऋषींकडे विद्याभ्यास व गुरुदक्षिणा',
    titleEn: 'Studying at Sandipani Ashram',
    content: 'श्रीकृष्ण आणि बलरामांनी अवंतिकापुरीत सांदीपनी ऋषींच्या आश्रमात राहून ६४ दिवसांत ६४ कला आणि विद्या आत्मसात केल्या. गुरुदक्षिणेमध्ये गुरुदेवांच्या यमलोकात गेलेल्या मुलाला जिवंत परत आणून अर्पण केले।',
    explanation: 'शिष्याचे कर्तव्य आणि गुरुभक्तीची महती जगाला पटवून देणारी आदर्श लीला.'
  },
  {
    id: 'shreek_30',
    bookId: 'shreekrishnacharitra',
    number: 30,
    title: 'लीला ३०: मुचकुंद उद्धार व कालयवन भस्म',
    titleEn: 'Liberating Muchukunda and Burning of Kalayavana',
    content: 'कालयवनाने द्वारकेवर आक्रमण केले तेव्हा श्रीकृष्ण त्याला गुहेत घेऊन गेले, जिथे मुचकुंद राजे निद्रिस्त होते. कालयवनाने मुचकुंदांना पाय मारला. मुचकुंदांनी डोळे उघडताच त्यांच्या दिव्य तेजाने कालयवन भस्म झाला आणि श्रीकृष्णाने मुचकुंदांना दर्शन दिले।',
    explanation: 'स्वतः शस्त्र न उचलूनही शत्रूचा युक्तीने नाश करणारी अद्भुत रणनीती.'
  },
  {
    id: 'shreek_31',
    bookId: 'shreekrishnacharitra',
    number: 31,
    title: 'लीला ३१: स्यमंतक मणी व जांबवती विवाह लीला',
    titleEn: 'Syamantaka Jewel and Marriage with Jambavati',
    content: 'स्यमंतक मणी चोरीचा आळ आल्यावर श्रीकृष्ण तो शोधत एका गुहेत गेले, जिथे जांबवंताशी २१ दिवस घनघोर युद्ध झाले. शेवटी जांबवंताने भगवंतांना ओळखून क्षमा मागितली आणि मणीसह आपली कन्या जांबवती यांचा विवाह श्रीकृष्णाशी लावून दिला।',
    explanation: 'अपवाद दूर करणे आणि निस्सीम भक्ताच्या घरात जाऊन त्याची इच्छा पूर्ण करणे.'
  },
  {
    id: 'shreek_32',
    bookId: 'shreekrishnacharitra',
    number: 32,
    title: 'लीला ३२: नरकासूर वध व १६,१०० स्त्रियांची सुटका',
    titleEn: 'Slaying of Narakasura and Liberation',
    content: 'प्राग्ज्योतिषपूरचा दुष्ट राजा नरकासूर याने १६,१०० राजकन्यांना कैद केले होते. श्रीकृष्णाने सत्यभामेच्या सहकार्याने नरकासुराचा वध केला, त्या सर्व स्त्रियांना सन्मानाने मुक्त केले आणि समाजाकडून त्यांना पत्नी म्हणून स्वीकारून आश्रय दिला।',
    explanation: 'शोषित आणि पीडित स्त्रियांना समाजात सर्वोच्च मानाचे स्थान मिळवून देणारी क्रांतिकारक लीला.'
  },
  {
    id: 'shreek_33',
    bookId: 'shreekrishnacharitra',
    number: 33,
    title: 'लीला ३३: पारिजात वृक्ष स्वर्गलोकातून पृथ्वीवर आणणे',
    titleEn: 'Bringing the Parijata Tree from Heaven',
    content: 'सत्यभामेच्या इच्छेसाठी श्रीकृष्णाने इंद्रदेवाशी युद्ध करून स्वर्गलोकातील दिव्य पारिजात वृक्ष पृथ्वीवर आणला. तो सत्यभामेच्या अंगणात लावला, पण त्याची फुले रुक्मिणीच्या अंगणात पडत असत, ज्यामुळे सर्वांमध्ये समता प्रस्थापित झाली।',
    explanation: 'भक्तांचे प्रेम आणि इच्छा पूर्ण करण्यासाठी स्वर्गातील वैभवही पृथ्वीवर आणणारा देव.'
  },
  {
    id: 'shreek_34',
    bookId: 'shreekrishnacharitra',
    number: 34,
    title: 'लीला ३४: बाणासूर युद्ध व अनिरुद्ध-उषा विवाह',
    titleEn: 'Battle with Banasura',
    content: 'बाणासुराची कन्या उषा आणि श्रीकृष्णाचे नातू अनिरुद्ध यांच्या प्रेमामुळे बाणासुराने अनिरुद्धाला बंदी बनवले. श्रीकृष्ण सैन्यासह गेले. तिथे महादेवाशी (जे बाणासुराचे रक्षक होते) आणि बाणासुराशी युद्ध झाले. शेवटी बाणासुराचा अभिमान तोडून विवाह संपन्न केला।',
    explanation: 'कुटुंबाचे रक्षण आणि भक्ताच्या अहंकारातून सुटका करणारी युद्धलीला.'
  },
  {
    id: 'shreek_35',
    bookId: 'shreekrishnacharitra',
    number: 35,
    title: 'लीला ३५: सुदाम्याला सुवर्णनगरी अर्पण',
    titleEn: 'Gifting the Golden Kingdom to Sudama',
    content: 'सुदाम्याने आणलेले मूठभर पोहे आवडीने खाताना श्रीकृष्णाने पहिल्या मुठीत पृथ्वीचे आणि दुसऱ्या मुठीत स्वर्गाचे ऐश्वर्य सुदाम्याला दान केले. सुदामा घरी परतला तेव्हा चांगली श्रीमंती मिळून तिथे सोन्याचे महाल उभे राहिले होते।',
    explanation: 'भक्ताने दिलेल्या साध्या अर्पणाच्या बदल्यात त्याला संपूर्ण जगाचे ऐश्वर्य बहाल करणारा उदार दाता.'
  },
  {
    id: 'shreek_36',
    bookId: 'shreekrishnacharitra',
    number: 36,
    title: 'लीला ३६: पौंड्रक वासुदेव वध लीला',
    titleEn: 'Slaying of the Impostor Poundraka',
    content: 'काशीचा राजा पौंड्रक स्वतःला खरा वासुदेव समजत असे आणि बनावट सुदर्शन चक्र धारण करत असे. त्याने श्रीकृष्णाला आव्हान दिले. श्रीकृष्णाने त्याचा आणि त्याच्या साथीदार काशीराजाचा सुदर्शन चक्राने वध करून त्याचे पाखंड संपवले।',
    explanation: 'खोट्या ढोंगाचा नाश आणि सत्याची पुनर्स्थापना करणारी न्यायप्रिय लीला.'
  },
  {
    id: 'shreek_37',
    bookId: 'shreekrishnacharitra',
    number: 37,
    title: 'लीला ३७: द्वारका येथील दुर्वास ऋषींची सेवा',
    titleEn: 'Serving Sage Durvasa in Dwarka',
    content: 'एकदा कोपिष्ट दुर्वास ऋषी द्वारकेत आले. त्यांनी श्रीकृष्णाला रथाला जोडण्यास सांगितले व स्वतः चाबूक मारला. भगवंतांनी व रुक्मिणीने आनंदाने त्यांचे आदरातिथ्य केले. प्रसन्न होऊन दुर्वासांनी त्यांना अखंड निरोगी व अमर राहण्याचे वरदान दिले।',
    explanation: 'संतांची आणि ऋषींची सेवा करण्यात देवाचा असलेला विनम्र आणि निरहंकारी स्वभाव.'
  },
  {
    id: 'shreek_38',
    bookId: 'shreekrishnacharitra',
    number: 38,
    title: 'लीला ३८: प्रभास क्षेत्रातील यादवांचा संकोच व महाप्रस्थान',
    titleEn: 'The Pilgrimage to Prabhas Kshetra',
    content: 'यदुवंशाचा संकोच जवळ आल्यावर श्रीकृष्णाने सर्व यादवांना प्रभास क्षेत्री तीर्थयात्रेसाठी आणि दानासाठी पाठवले. ऋषींच्या शापामुळे यादवांमध्ये आपापसात कलह होऊन संपूर्ण यदुवंशाचा विनाश झाला, जे काळगतीचे विधान होते।',
    explanation: 'कालचक्र आणि प्रारब्धाची अटळता दर्शवणारी अत्यंत गंभीर आणि महत्त्वाची लीला.'
  },
  {
    id: 'shreek_39',
    bookId: 'shreekrishnacharitra',
    number: 39,
    title: 'लीला ३९: अर्जुनाला सारथ्य व भीष्म प्रतिज्ञाभंग',
    titleEn: 'Charioteer of Arjuna and Bhishma’s Vow',
    content: 'महाभारत युद्धात शस्त्र न उचलण्याची प्रतिज्ञा केलेल्या श्रीकृष्णाने भीष्मपितामहांची प्रतिज्ञा पूर्ण करण्यासाठी स्वतः हातात रथाचे चाक घेतले. त्यांनी अर्जुनाला वाचवले आणि भक्ताच्या शब्दाची मान राखली।',
    explanation: 'भक्ताच्या प्रतिज्ञेसाठी स्वतःची प्रतिज्ञा मोडून भक्ताचा विजय निश्चित करणारी प्रेमाची परमावधी.'
  },
  {
    id: 'shreek_40',
    bookId: 'shreekrishnacharitra',
    number: 40,
    title: 'लीला ४०: स्वधामगमन व परमधाम प्रस्थान',
    titleEn: 'Divine Return to His Supreme Abode',
    content: 'यदुवंशाच्या विनाशानंतर श्रीकृष्ण एका पिंपळाच्या वृक्षाखाली विश्रांती घेत होते, तेव्हा जरा नावाच्या व्याधाचा बाण त्यांच्या पायाला लागला. व्याधाला अभय व मोक्ष देऊन, त्यांनी आपल्या दिव्य दिव्य देहाने स्वर्गारोहण केले आणि भक्तांसाठी आपले ज्ञान मागे ठेवले।',
    explanation: 'अवतारकार्याची समाप्ती आणि संपूर्ण सृष्टीला शाश्वत मोक्षाचा मार्ग दाखवणारे स्वधामगमन।'
  }
,
    {
    id: 'shreed_1',
    bookId: 'shreedattatreyacharitra',
    number: 1,
    title: 'अध्याय १: अनसूया वरदान व दिव्य जन्म',
    titleEn: 'Anasuya’s Blessing and Divine Birth',
    content: 'अत्री ऋषींच्या आश्रमात माता अनुसूयेच्या पातिव्रत्यामुळे प्रसन्न होऊन ब्रह्मा, विष्णू आणि महेश यांनी एकाच बालकाच्या रूपात अवतार घेतला - तोच अवतार श्रीदत्तात्रेय प्रभु होय।',
    explanation: 'भगवान श्री दत्तात्रेय प्रभु के जन्म और उनके गुरु-स्वरूप की वन्दना।'
  },
  {
    id: 'shreed_2',
    bookId: 'shreedattatreyacharitra',
    number: 2,
    title: 'अध्याय २: प्रथम तीन गुरु - पृथ्वी, वायू आणि आकाश',
    titleEn: 'First Three Gurus - Earth, Wind, and Space',
    content: 'दत्त प्रभूंनी यदु राजाला सांगितले की त्यांनी पृथ्वीकडून क्षमाशीलता, वायूकडून निरपेक्षता आणि आकाशाकडून आत्म्याचे सर्वव्यापी व अलिप्त स्वरूप शिकले।',
    explanation: 'प्रकृती कडून मिळणारा प्रथम आत्मज्ञान उपदेश.'
  },
  {
    id: 'shreed_3',
    bookId: 'shreedattatreyacharitra',
    number: 3,
    title: 'अध्याय ३: जल, अग्नी आणि चंद्र गुरु',
    titleEn: 'Water, Fire, and Moon Gurus',
    content: 'जलापासून शुद्धता व शीतलता, अग्नीपासून तेज आणि चंद्रकलेपासून देहाच्या अवस्था बदलल्या तरी आत्मा अपरिवर्तित राहतो, हा धडा त्यांनी घेतला।',
    explanation: 'पंचमहाभूतांमधील तत्त्वज्ञान आणि मनाची समता.'
  },
  {
    id: 'shreed_4',
    bookId: 'shreedattatreyacharitra',
    number: 4,
    title: 'अध्याय ४: सूर्य, कपोत आणि अजगर गुरु',
    titleEn: 'Sun, Pigeon, and Python Gurus',
    content: 'सूर्याकडून आसक्तीशिवाय गुण घेणे व सोडणे, कपोत पक्षाकडून अतिमोहामुळे होणारा विनाश आणि अजगराकडून येईल त्या अन्नावर समाधानी राहण्याची वृत्ती शिकली।',
    explanation: 'मोहाचा त्याग आणि संतोषाचा दिव्य संदेश.'
  },
  {
    id: 'shreed_5',
    bookId: 'shreedattatreyacharitra',
    number: 5,
    title: 'अध्याय ५: समुद्र आणि पतंग गुरु',
    titleEn: 'Ocean and Moth Gurus',
    content: 'समुद्राकडून आपले विचार गंभीर व स्थिर ठेवणे, आणि पतंग कीटकाकडून बाह्य रूपाच्या मोहाने स्वतःचा विनाश न ओढवून घेण्याचा उपदेश मिळाला।',
    explanation: 'इंद्रिय निग्रह आणि अंतःकरणाची स्थिरता.'
  },
  {
    id: 'shreed_6',
    bookId: 'shreedattatreyacharitra',
    number: 6,
    title: 'अध्याय ६: मधमाशी आणि गजेंद्र गुरु',
    titleEn: 'Honeybee and Elephant Gurus',
    content: 'मधमाशीकडून विविध शास्त्रांमधून सार गोळा करणे (संग्रह न करणे) आणि मदनमत्त हत्ती केवळ स्पर्शाच्या मोहामुळे कसा बंधनात पडतो, हे त्यांनी पाहिले।',
    explanation: 'संग्रहवृत्तीचा त्याग आणि वासना निरोध.'
  },
  {
    id: 'shreed_7',
    bookId: 'shreedattatreyacharitra',
    number: 7,
    title: 'अध्याय ७: मधू-हारी आणि हरीण गुरु',
    titleEn: 'Honey-Gatherer and Deer Gurus',
    content: 'कष्टाचे धन भोग न घेता साठवून ठेवल्यास नष्ट होते, हा धडा मधाच्या पोळ्यावरून आणि संगीताच्या मोहामुळे हरणाचा कसा वध होतो, हे त्यांनी शिकले।',
    explanation: 'अति-आसक्ती आणि बाह्य आकर्षणांचे दुष्परिणाम.'
  },
  {
    id: 'shreed_8',
    bookId: 'shreedattatreyacharitra',
    number: 8,
    title: 'अध्याय ८: मीन आणि पिंगला वेश्या गुरु',
    titleEn: 'Fish and Pingala the Courtesan Gurus',
    content: 'मासा जिभेच्या चवीमुळे गळाला लागतो, आणि पिंगला वेश्येने जेव्हा रात्रभर वाट पाहून शेवटी आशा सोडून दिली, तेव्हा तिला परम शांती लाभली। "आशा ही परम दुःख, आणि नैराश्य (इच्छाशून्यत्व) हे परम सुख" हा धडा मिळाला।',
    explanation: 'जिव्हा नियंत्रण आणि सर्व इच्छांच्या त्यागातून मिळणारा परमानंद.'
  },
  {
    id: 'shreed_9',
    bookId: 'shreedattatreyacharitra',
    number: 9,
    title: 'अध्याय ९: कुरर पक्षी आणि बालक गुरु',
    titleEn: 'Osprey and Child Gurus',
    content: 'कुरर पक्षाने तोंडात धरलेला माशाचा तुकडा सोडून दिल्यावरच त्याला इतर पक्षांच्या त्रासातून मुक्ती मिळाली. तसेच निष्पाप बालकाप्रमाणे मानापमानापलीकडे राहून आनंदात जगणे त्यांनी शिकले।',
    explanation: 'परिग्रहाचा त्याग आणि निष्पाप अंतःकरणाची अवस्था.'
  },
  {
    id: 'shreed_10',
    bookId: 'shreedattatreyacharitra',
    number: 10,
    title: 'अध्याय १०: कुमारी आणि बाण बनवणारा गुरु',
    titleEn: 'The Maiden and Arrow-Maker Gurus',
    content: 'कुमारीच्या हातातील बांगड्यांचा आवाज टाळण्यासाठी तिने एकच बांगडी ठेवली, ज्यावरून "एकांतवास" श्रेष्ठ ठरतो. आणि बाण बनवणाऱ्याचे लक्ष बाणावर केंद्रित असल्यामुळे त्याला बाजूने जाणारी राजाची स्वारीही दिसली नाही, यावरून एकाग्रता शिकली।',
    explanation: 'चित्ताची एकाग्रता आणि मौन-एकांताचे महत्त्व.'
  },
  {
    id: 'shreed_11',
    bookId: 'shreedattatreyacharitra',
    number: 11,
    title: 'अध्याय ११: सर्प आणि कोळी गुरु',
    titleEn: 'Serpent and Spider Gurus',
    content: 'सर्प स्वतःचे घर बनवत नाही तर दुसऱ्याच्या बिळात राहतो, तसेच ऋषींनी स्वतःचे घर बनवू नये. कोळी जसा स्वतःच्या तोंडातून लाळ काढून जाळे विणतो आणि पुन्हा स्वतःमध्ये सामावून घेतो, तसेच ईश्वर जगाची निर्मिती व लय करतो।',
    explanation: 'अनासक्ती आणि सृष्टी उत्पत्ती-लय सिद्धांत.'
  },
  {
    id: 'shreed_12',
    bookId: 'shreedattatreyacharitra',
    number: 12,
    title: 'अध्याय १२: पेशाकृत गुरु',
    titleEn: 'The Wasp/Caterpillar Guru',
    content: 'भ्रमर ज्या कीटकाला मातीच्या घरात बंद करतो, तो कीटक सतत भ्रमराचे ध्यान करत करत स्वतः भ्रमररूप बनतो. यावरून निरंतर भगवद् चिंतनाने जीव ईश्वररूप बनतो, हा २५ वा धडा त्यांनी घेतला।',
    explanation: 'ध्यातू आणि ध्येयाच्या तादात्म्याची दिव्य अनुभूती (भ्रमरकीटक न्याय).'
  },
  {
    id: 'shreed_13',
    bookId: 'shreedattatreyacharitra',
    number: 13,
    title: 'अध्याय १३: कार्तवीर्य अर्जुन कृपा लीला',
    titleEn: 'Blessing Kartavirya Arjuna',
    content: 'माहिष्मतीचा राजा कार्तवीर्य अर्जुनाने अत्रिकुमार दत्त गुरूंची कठोर सेवा केली. प्रसन्न होऊन दत्तगुरूंनी त्याला सहस्र बाहू, अजेय साम्राज्य, अद्भुत संपदा आणि धर्ममार्गाने राज्य करण्याचे वरदान दिले।',
    explanation: 'दत्त गुरूंच्या कृपेने प्राप्त होणारे अलौकिक सामर्थ्य आणि ऐश्वर्य.'
  },
  {
    id: 'shreed_14',
    bookId: 'shreedattatreyacharitra',
    number: 14,
    title: 'अध्याय १४: अलार्क राजाला आत्मज्ञान उपदेश',
    titleEn: 'Spiritual Preaching to King Alarka',
    content: 'मदन राजाच्या आक्रमणामुळे संकटात सापडलेल्या अलार्क राजाला दत्तप्रभूंनी योगशास्त्र आणि आत्मज्ञानाचा उपदेश केला, ज्यामुळे तो राजर्षी बनून मोक्षाचा धनी झाला।',
    explanation: 'संसारातील दुःखांचे निवारण करणारा श्रेष्ठ योगोपदेश.'
  },
  {
    id: 'shreechang_1',
    bookId: 'shreechangdevraul_charitra',
    number: 1,
    title: 'प्रकरण १: चांगदेव राऊळ अवतार लीला',
    content: 'श्री चांगदेव राऊळ महाराज हे द्वारकापुरीचे परमेश्वर होते। त्यांनी भक्तांच्या उद्धारासाठी आणि चक्रधर स्वामींच्या अवतार कार्याची पूर्वपीठिका म्हणून दिव्य लीला केल्या।',
    explanation: 'महानुभाव संप्रदाय के तृतीय अवतार चांगदेव राऊळ महाराज का पावन जीवन संस्मरण।'
  }
,
  {
    id: 'shreegov_1',
    bookId: 'shreegovindaprabhu_charitra',
    number: 1,
    title: 'लीला १: ऋद्धिपूर निवास आणि करुणामयी लीला',
    content: 'श्री गोविंदप्रभू महाराज हे परम कारुणिक अवतार होते। त्यांनी ऋद्धिपूर येथे राहून दीन-दुःखी, प्राणी आणि पक्ष्यांवर अपार करुणा केली। त्यांच्या सान्निध्यात आल्याने प्रत्येकाचा उद्धार झाला।',
    explanation: 'भगवान गोविंदप्रभु महाराज की पावन और करुणामयी लीलाओं का मर्म।'
  }
,
  {
    id: 'shreechak_1',
    bookId: 'shreechakradharswami_leelacharitra',
    number: 1,
    title: 'लीला १: सर्वज्ञ श्रीचक्रधर स्वामी अवतार धारण',
    content: 'गुजरातच्या विशाल देशातील हरपाळदेव रूपाने स्वामींनी अवतार लीला संपवून महाराष्ट्रातील पैठण नगरीत चक्रधर स्वामींच्या रूपात प्रगट होऊन मुमुक्षूंना मोक्षाचा मार्ग दाखवला।',
    explanation: 'महानुभाव संप्रदाय के प्राण आधार श्रीचक्रधर स्वामी के दिव्य प्रकटीकरण की कथा।'
  }
,
  {
    id: 'battis_1',
    bookId: 'battis_lakshanachi_tip',
    number: 1,
    title: 'लक्षण विवरण: बत्तीस महालक्षणे',
    content: 'अवतार पुरुषाच्या शरीरावर बत्तीस लक्षणे प्रगट होतात। जसे की - समचरणता, उन्नत नासिका, दीर्घ बाहू आणि अत्यंत शांत व ओजस्वी कांती।',
    explanation: 'ईश्वरी अवतार को पहचानने की शास्त्रीय पद्धति और उनके अलौकिक लक्षणों का विवेचन।'
  }
,
  {
    id: 'sutrat_1',
    bookId: 'sutrapath_tika',
    number: 1,
    title: 'भाष्य १: आचार मालिका विवेचन',
    content: 'आचार मालिकेतील "परिग्रहा पासौनि निवृत्ती" या सूत्राचा अर्थ केवळ बाह्य वस्तूंचा त्याग नसून अंतःकरणातील आसक्तीचा समूळ नाश करणे हा होय।',
    explanation: 'श्री सूत्रपाठ के गूढ़ रहस्यों का प्राचीन आचार्यों द्वारा सरल भाषा में प्रणीत भाष्य।'
  }
,
  {
    id: 'drisht_1',
    bookId: 'drishtantapath_tika',
    number: 1,
    title: 'दृष्टांत स्पष्टीकरण: सुवर्णकार दृष्टांत रहस्य',
    content: 'ज्याप्रमाणे सोने तापवल्याशिवाय शुद्ध होत नाही, त्याचप्रमाणे मनुष्याचे मन कठीण साधना आणि भक्तिभावाच्या योगानेच निर्मळ होते।',
    explanation: 'स्वामी द्वारा प्रयुक्त सुंदर दृष्टांतों का सविस्तार और गहन दार्शनिक अर्थ।'
  }
,
  {
    id: 'mahab_1',
    bookId: 'mahabhashya',
    number: 1,
    title: 'मंगलाचरण आणि मूळ भाष्य',
    content: '॥ श्री पंचकृष्णाय नमः ॥\nया भाष्यात जीव, प्रपंच, देवता आणि परमेश्वर या चार प्रमुख तत्त्वांचे परस्पर संबंध अत्यंत तर्कशुद्ध पद्धतीने मांडण्यात आले आहेत।',
    explanation: 'महानुभाव तत्वज्ञान का सर्वश्रेष्ठ भाष्य ग्रंथ जो संप्रदाय की दार्शनिक नींव को सुदृढ़ करता है।'
  }
,
  {
    id: 'brahm_1',
    bookId: 'brahmavidya',
    number: 1,
    title: 'अध्याय १: ब्रह्मज्ञान निरूपण',
    content: 'ब्रह्मविद्या ही ती विद्या होय जी जीवाला अज्ञानाच्या अंधारातून बाहेर काढून परमेश्वराच्या नित्य स्वरूपाची प्राप्ती करून देते।',
    explanation: 'सत्य ज्ञान, जीव के बंधन और ईश्वर की मुक्तिदायिनी कृपा का सविस्तार निरूपण।'
  }
,
  {
    id: 'jnanp_1',
    bookId: 'jnanprabodh',
    number: 1,
    title: 'प्रकरण १: ज्ञानाचा प्रकाश',
    content: 'मनुष्याला जोपर्यंत स्वरूपाचे ज्ञान होत नाही, तोपर्यंत तो संसाराच्या फेऱ्यात भटकत राहतो। ईश्वराची कृपा हाच ज्ञानाचा खरा मार्ग आहे।',
    explanation: 'साती ग्रंथों के अंतर्गत सुंदर काव्य शैली में ज्ञान के महत्व का प्रतिपादन।'
  }
,
  {
    id: 'tattvas_1',
    bookId: 'tattvasar',
    number: 1,
    title: 'सार १: तत्त्व विवेचन',
    content: 'या सृष्टीचा कर्ता केवळ परमेश्वरच आहे। प्रपंच हा नाशिवंत असून केवळ परमेश्वर भक्तीच शाश्वत आणि खरी आहे।',
    explanation: 'अत्यंत सुबोध शैली में महानुभाव तत्वज्ञान के मुख्य निष्कर्षों का संग्रह।'
  }
,
  {
    id: 'vivek_1',
    bookId: 'viveksindhu',
    number: 1,
    title: 'अध्याय १: विवेक व वैराग्य संवाद',
    content: 'विवेक म्हणजे काय सत्य आणि काय असत्य याचे ज्ञान असणे। वैराग्य म्हणजे असत्य प्रपंचाचा मोह सोडून सत्याकडे धाव घेणे।',
    explanation: 'मुकुंदराज कृत अत्यंत प्राचीन ग्रंथ का महानुभाव पंथ में स्थान व आध्यात्मिक महत्व।'
  }
,
  {
    id: 'pooja_1',
    bookId: 'poojavasar',
    number: 1,
    title: 'पूजा विधी: षोडशोपचार पूजा',
    content: 'नित्यकाळी उठून स्नान करून अत्यंत भक्तीभावाने परमेश्वराच्या पावन प्रतिमेची किंवा ओट्याची गंध, पुष्प, धूप, दीप आणि नैवेद्याने पूजा करावी।',
    explanation: 'परमेश्वर पूजा की पारंपरिक वैदिक व महानुभाव पद्धति का नियम संग्रह।'
  }
,
  {
    id: 'aarti_1',
    bookId: 'aarti_sangrah',
    number: 1,
    title: 'श्रीचक्रधर स्वामी आरती',
    content: 'जय देव जय देव जय श्रीचक्रधरा।\nआरती ओवाळू चरणी सुंदर मुख पाहा ॥ ध्रु. ॥\nपैठण प्रगटले स्वामी अवतार धारण।\nदीन दुःखी भक्तांचे केले संकट हरण ॥ १ ॥\nजय देव जय देव...',
    explanation: 'स्वामी चक्रधर महाराज की परम मंगलकारी आरती का भक्तिमय पाठ।'
  }
,
  {
    id: 'stotra_1',
    bookId: 'stotra_sangrah',
    number: 1,
    title: 'श्री पंचकृष्ण स्तोत्रम्',
    content: 'नमः श्रीकृष्णाय द्वारकानाथाय धीमते।\nनमः चांगदेवराऊळाय ब्रह्मरूपाय धारिणे।\nनमः गोविंदप्रभवे कारुण्यमूर्तये नमो नमः।',
    explanation: 'संस्कृत में निबद्ध पंचकृष्णों का ध्यान व वन्दना स्तोत्र।'
  }
,
  {
    id: 'nitya_1',
    bookId: 'nityapath',
    number: 1,
    title: 'नित्य मंगल पाठ',
    content: 'सकाळी उठल्यावर पंचकृष्णांचे स्मरण करावे, नित्यसूत्रांचे पठन करावे आणि दिवसाची सुरुवात मंगलमयी विचारांनी करावी।',
    explanation: 'साधकों के दैनिक पठन के लिए निश्चित की गई नित्य मंगलमय सूक्तियां।'
  }
,
  {
    id: 'namas_1',
    bookId: 'namasmaran_sangrah',
    number: 1,
    title: 'नामस्मरण विधी व जप संख्या',
    content: '"ॐ नमो श्रीचक्रधर स्वामी परमेश्वराय नमः"\nया दिव्य नामाचा निरंतर जप केल्याने अंतःकरण शुद्ध होते व चित्तातील अज्ञान नष्ट होते।',
    explanation: 'नामस्मरण का आध्यात्मिक महत्व और जप की शास्त्रीय प्रणाली।'
  }
,
  {
    id: 'prarth_1',
    bookId: 'prarthana_sangrah',
    number: 1,
    title: 'शरणगती प्रार्थना',
    content: 'हे देवा, मी अज्ञानी आहे, संसाराच्या मायेत अडकलो आहे। मला तुमच्या चरणांचा आश्रय द्या आणि माझा उद्धार करा। तुमची कृपा हीच माझी खरी संपत्ती आहे।',
    explanation: 'परमेश्वर के चरणों में की जाने वाली दीन व आत्मसमर्पण युक्त भावपूर्ण प्रार्थना।'
  }
,
  {
    id: 'smrut_1',
    bookId: 'smrutisthal',
    number: 1,
    title: 'प्रकरण १: नागदेवाचार्य संघ संचालन',
    content: 'स्वामींच्या उत्तरायणानंतर भटोबास (नागदेवाचार्य) यांनी संपूर्ण महानुभाव संघाला एकत्र ठेवले। म्हाइंभटांनी लीळाचरित्र लिहिण्यास सुरुवात केली आणि भटोबासांनी त्याला संमती दिली।',
    explanation: 'महानुभाव संप्रदाय के इतिहास और नागदेवाचार्य जी के दिव्य जीवन के पावन संस्मरण।'
  }
,
  {
    id: 'sthan_1',
    bookId: 'sthanpothi',
    number: 1,
    title: 'तीर्थ दर्शन: ऋद्धिपूर धाम',
    content: 'ऋद्धिपूर (अमरावती, महाराष्ट्र) हे श्री गोविंदप्रभू महाराजांचे क्रीडास्थान आहे। येथे स्वामींच्या चरण पादुका आणि अनेक पवित्र ओटे आहेत, जे अत्यंत जाग्रत मानले जातात।',
    explanation: 'पवित्र महानुभाव स्थानों का भौगोलिक और ऐतिहासिक विवरण।'
  }
,
  {
    id: 'sati_1',
    bookId: 'sati_granth',
    number: 1,
    title: 'साती ग्रंथांचा परिचय व महात्म्य',
    content: 'महानुभाव साती ग्रंथामध्ये रुक्मिणी स्वयंवर, शिशुपालवध, सह्याद्रीवर्णन, वत्सहरण, मूर्तिप्रकाश, ऋद्धिपूरवर्णन आणि ज्ञानप्रबोध यांचा समावेश होतो। हे ग्रंथ मराठी साहित्याचे वैभव आहेत।',
    explanation: 'महानुभाव संप्रदाय के प्रसिद्ध सात काव्यों की साहित्यिक व दार्शनिक महत्ता।'
  }
,
  {
    id: 'dhav_1',
    bookId: 'dhavale',
    number: 1,
    title: 'धवळे १: महदंबेची मधुर गीते',
    content: 'मंगळवेढ्याच्या शुभ प्रसंगी महदंबेने श्रीकृष्ण भगवंतांच्या विवाहाचे गाणे अत्यंत सुंदर ओवी छंदात गायले। "श्रीकृष्ण गोविंद हरे मुरारी..."',
    explanation: 'मराठी साहित्य की प्रथम कवयित्री महदंबा द्वारा रचित प्राचीन विवाह गीतों का माधुर्य।'
  }
,
  {
    id: 'rukm_1',
    bookId: 'rukmini_swayamvar',
    number: 1,
    title: 'अध्याय १: रुक्मिणीचे गुप्त पत्र',
    content: 'रुक्मिणीने श्रीकृष्णाला पत्र पाठवून सांगितले की - "मी तुम्हालाच पती मानले आहे, जर तुम्ही मला वाचवले नाही तर मी माझा प्राण अर्पण करेन।" हे वाचून कृष्ण तात्काळ धावून आले।',
    explanation: 'श्रीमदभागवत और महानुभाव ग्रंथों पर आधारित श्रीकृष्ण-रुक्मिणी विवाह कथा का रसमय विवेचन।'
  }
,
  {
    id: 'murt_1',
    bookId: 'murtiprakash',
    number: 1,
    title: 'अध्याय १: स्वामींचे सगुण रूप ध्यान',
    content: 'स्वामींचे चरणकमल अत्यंत कोमल आहेत। त्यांचे मुखकमल पौर्णिमेच्या चंद्रासारखे तेजस्वी आणि डोळे अत्यंत करुणेने भरलेले आहेत। त्यांच्या हास्याने भक्तांचे दुःख पळून जाते।',
    explanation: 'सर्वज्ञ श्रीचक्रधर स्वामी महाराज के दिव्य साकार रूप का ध्यान।'
  }
,
  {
    id: 'sahy_1',
    bookId: 'sahyadrivarnan',
    number: 1,
    title: 'प्रकरण १: सह्याद्रीची पावन भूमी',
    content: 'सह्याद्री पर्वताच्या रांगांमध्ये भगवान श्रीदत्तात्रेय महाराज निवास करतात। तेथील झाडे, वेली, नद्या आणि पशु-पक्षी सर्वच त्या पावन अवताराच्या भक्तीत दंग आहेत।',
    explanation: 'सह्याद्री के पर्वतराज की पावनता और भगवान दत्त गुरु की निवास भूमि का अलौकिक गौरव।'
  }
,
  {
    id: 'art_1',
    bookId: 'chakradhar_aarti',
    number: 1,
    title: 'श्रीचक्रधर स्वामी आरती (Shree Chakradhar Swami Aarti)',
    content: '॥ श्रीचक्रधर स्वामी आरती ॥\nजय देव जय देव जय चक्रधरा स्वामी । आरती ओवाळू चरणी निजधामी ॥ ध्रु० ॥\nअमरावतीचा राजा गुंडम करुणाकर । तारिले अनंत जीव तूचि जगी ईश्वर ॥ जय देव० ॥ १ ॥\nभक्तांच्या हाकेला धावसी धावून । ओवाळू कापुराची वात अंतरी रंगून ॥ जय देव० ॥ २ ॥',
    explanation: 'चक्रधर स्वामी महाराजांच्या चरणी लीन होऊन त्यांची दिव्य आरती आणि स्तुती करण्याची विधी आणि भावार्थ।'
  }
,
  {
    id: 'art_2',
    bookId: 'chakradhar_aarti',
    number: 2,
    title: 'श्री दत्तात्रेय अष्टक आणि स्तोत्र',
    content: '॥ श्री दत्तात्रेय स्तोत्र ॥\nदत्त गुरु महाराज कृपाळा । अत्रि अनसूया नंदन बाळा ॥\nज्ञान विरक्तीचे तूचि स्वरूप । हरिशी भक्तांचे भवताप कूप ॥\nसह्याद्री पर्वती तुझाची वास । पुरवी भक्तांची मनोवेध आस ॥',
    explanation: 'भगवान श्रीदत्तात्रेय महाराजांच्या दिव्य ध्यान आणि स्तोत्राचे वर्णन आणि अर्थ।'
  }
,
  {
    id: 'bhj_bk_1',
    bookId: 'm_bhajanavali',
    number: 1,
    title: 'भजन १: चक्रधरा रे चक्रधरा',
    content: '॥ भजन ॥\nचक्रधरा रे चक्रधरा, देवा मज पावन करा ॥ ध्रु० ॥\nप्रपंचात मी खूप थकलो, नाम तुझे मी विसरलो ।\nहातामध्ये हात घ्यावा, मोक्षाचा तो मार्ग द्यावा ॥ १ ॥\nऋद्धपूरच्या मातीमध्ये, ध्यान तुझे अंतरात माझ्या ॥ २ ॥',
    explanation: 'चक्रधर स्वामी महाराजांच्या भक्तीमध्ये रंगून आपल्या चुकीची क्षमा मागून मोक्षाची याचना करणारे भजन।'
  }
,
  {
    id: 'bhj_bk_2',
    bookId: 'm_bhajanavali',
    number: 2,
    title: 'भजन २: दत्तात्रेय स्वामी सगुण सुंदर',
    content: '॥ भजन ॥\nदत्तात्रेय स्वामी सगुण सुंदर, ध्यान करावे निरंतर ॥ ध्रु० ॥\nतीन शिरे आणि सहा हात, पाठीवरती भक्तीची गाठ ।\nकामधेनू उभी द्वारी, श्वान चौघे रक्षणकारी ॥ १ ॥\nज्ञान भक्तीचा तूच सागर, भवसागर पैलपार कर ॥ २ ॥',
    explanation: 'भगवान दत्तात्रेय प्रभुंच्या साकार सगुण रूपाचे सुंदर आणि ध्यानमग्न भजन।'
  }
,
  {
    id: 'puj_1',
    bookId: 'shree_pujavsar',
    number: 1,
    title: 'श्री पूजावसर पाठविधी',
    content: '॥ श्री पूजावसर पाठ ॥\n१. प्रथम उठून श्रीचक्रधर स्वामींच्या स्मरणाने नमस्कार करावा।\n२. शुद्ध वस्त्र परिधान करून पूजा स्थानाची स्वच्छता करावी।\n३. अष्टगंध, सुवासिक फुले आणि पंचामृताने चरणांचे ध्यान करावे।\n४. "॥ श्री कृष्ण चक्रधर स्वामी महाराजाय नमः ॥" या मंत्राचा जप नित्य करावा।\n५. दैनंदिन नैवेद्य दाखवून आत्मसमर्पण प्रार्थना करावी।',
    explanation: 'नित्य नियमाने करावयाच्या पूजा आणि सेवेची शास्त्रोक्त पद्धत ज्याने मन ईश्वरामध्ये लीन होते।'
  }
,
  {
    id: 'par_1',
    bookId: 'sutrapath_parayan',
    number: 1,
    title: 'श्री सूत्रपाठ पारायण पद्धती व संकल्प',
    content: '॥ सूत्रपाठ पारायण आरंभीचा संकल्प ॥\n"मी (भक्ताचे नाव) आज श्रीचक्रधर स्वामी महाराजांच्या वचनांच्या अभ्यासासाठी आणि चित्तशुद्धीसाठी श्री सूत्रपाठाचे पारायण करण्यास प्रारंभ करीत आहे। हे स्वामी, माझ्यावर तुमची अखंड कृपा असू द्या।"\n\nपारायण विधी:\n१. दररोज एका एका प्रकरणाचे शांत चित्ताने पठण करावे।\n२. पठण करताना वचनांच्या अर्थावर मनन करावे।\n३. पाच दिवसांत पारायण पूर्ण करून महाप्रसाद ग्रहण करावा।',
    explanation: 'पारायणाची विधी आणि त्यामागील संकल्प आणि आध्यात्मिक महत्त्व.'
  }
];

export const initialBhajans: Bhajan[] = [
  {
    id: 'bh_1',
    title: 'चक्रधरा दया करा देवा (Chakradhara Daya Kara Deva)',
    language: 'मराठी (Marathi)',
    lyrics: 'चक्रधरा दया करा देवा, तुमची चरणी लागो माझी सेवा ॥ ध्रु. ॥\n\nसंसार माया जाळी अडकलो, मार्ग खरा मी विसरून गेलो।\nहात देवूनी मजला तारा, संकट हरण दयाळा सारा ॥ १ ॥\n\nरिद्धपूरचे सुंदर ध्यान, सुखवीत राहो अमुचे मन।\nपंचकृष्ण अवतार तुमचे, उद्धार कीजे पावन आमचे ॥ २ ॥\n\nम्हाइंभटाची सेवा लाभली, केशिराजाची वाणी प्रगटली।\nचक्रधरा चरणी विनवणी, लीन असो मी दिवस-रजनी ॥ ३ ॥',
    singer: 'प.पू. शास्त्रीजी महाराज',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Sample placeholder
  },
  {
    id: 'bh_2',
    title: 'श्रीकृष्ण गोपाळ हरी (Shree Krishna Gopal Hari)',
    language: 'हिंदी (Hindi)',
    lyrics: 'श्रीकृष्ण गोपाळ हरी, राखो लाज हमारी ॥ ध्रु. ॥\n\nतुम ही हो दाता, तुम ही विधाता।\nचरणों में तेरे मेरा शीश झुकता।\nतारो दयाल अब नैय्या हमारी ॥ १ ॥\n\nचक्रधर स्वामी तुम अवतारी,\nकष्ट हरो प्रभु संकट हारी।\nरिद्धपूर धाम के तुम हो बिहारी ॥ २ ॥',
    singer: 'आचार्य प्रवर',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'bh_3',
    title: 'पंचकृष्ण नामस्मरण (Panchakrishna Namasmaran)',
    language: 'मराठी / संस्कृत',
    lyrics: 'श्री द्वारकावतार श्रीकृष्ण महाराज की जय ॥\nश्री चांगदेव राऊळ महाराज की जय ॥\nश्री गुंडम कारुण्य महाराज की जय ॥\nश्री चक्रपाणि महाराज की जय ॥\nश्रीचक्रधर स्वामी महाराज की जय ॥\n\nपंचकृष्ण की अगाध लीला, भवसागर से तारे जीवाला।\nनित्य स्मरण करा मुखे भक्ता, तुटती संसाराची बंधने आत्ता ॥',
    singer: 'कीर्तनकार ',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  }
];

export const initialPravachans: Pravachan[] = [
  {
    id: 'pr_1',
    title: 'लीलाचरित्र चिंतन - भाग १: अहिंसा धर्म',
    speaker: 'श्रद्धेय आचार्य जनार्दन शास्त्रीजी',
    date: '२०२६-०६-२५',
    category: 'leela',
    duration: '४५:२०',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'pr_2',
    title: 'श्री सूत्रपाठ निरूपण: आचार मालिका विवेचन',
    speaker: 'पंडित श्री कवीश्वर व्यास महाराज',
    date: '२०२६-०६-२०',
    category: 'sutra',
    duration: '३२:१५',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'pr_3',
    title: 'महानुभाव पंथ में संन्यास और गृहस्थ धर्म समन्वय',
    speaker: 'महंत बाभूळगांवकर baba',
    date: '२०२६-०६-१५',
    category: 'achara',
    duration: '५८:१०',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop'
  }
];

export const initialTemples: Temple[] = [
  {
    id: 't_ridhpur',
    name: 'श्री क्षेत्र ऋद्धपूर मंदिर (Shree Kshetra Ridhpur)',
    nameEn: 'Shree Kshetra Ridhpur',
    type: 'sthan',
    location: 'ऋद्धपूर (अमरावती जिला, महाराष्ट्र)',
    description: 'महानुभाव पंथ की पावन काशी। यह वह तीर्थ स्थल है जहाँ भगवान गोविंदप्रभु महाराज ने दीर्घकाल तक निवास किया। सर्वज्ञ श्रीचक्रधर स्वामी की चरणधूलि से पावन यह भूमि अत्यंत जाग्रत और पूजनीय मानी जाती है।',
    history: 'ऋद्धपूर में प्रभु गोविंदप्रभु की अनेक लीलाएं संपन्न हुईं। यहाँ मंदिर में उनके पवित्र चरण चिह्न तथा प्राचीन चरण पादुकाएं स्थापित हैं। इसे पंथ की मुख्य आध्यात्मिक पीठ के रूप में जाना जाता है।',
    photoUrl: '/src/assets/images/regenerated_image_1782734868024.png',
    contact: '+91 9403986655',
    darshanTimings: 'सुबह ५:०० बजे से रात ९:३० बजे तक',
    latitude: 21.2333,
    longitude: 77.6833,
    state: 'महाराष्ट्र',
    district: 'अमरावती',
    taluka: 'चांदुर बाजार'
  },
  {
    id: 't_domegram',
    name: 'डोमेग्राम आश्रम (Domegaon Ashram)',
    nameEn: 'Domegaon Ashram',
    type: 'ashram',
    location: 'डोमेग्राम (अहमदनगर जिला, महाराष्ट्र)',
    description: 'गोदावरी नदी के तट पर बसा यह आश्रम सर्वज्ञ श्रीचक्रधर स्वामी का अति प्रिय साधना स्थल रहा। यहाँ बैठकर स्वामीजी ने अनेक शिष्यों को दीक्षा दी और अपने उपदेशों से पावन किया।',
    history: 'म्हाइंभट द्वारा रचित "लीलाचरित्र" की अनेक कथाएं डोमेग्राम की पावन भूमि पर घटित हुई हैं। नदी तट पर बना यह आश्रम अत्यंत शांतिपूर्ण एवं ध्यान के अनुकूल है।',
    photoUrl: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=600&auto=format&fit=crop',
    contact: '+91 9403986655',
    darshanTimings: 'सुबह ६:०० बजे से दोपहर १२:००, अपराह्न ३:०० से रात ८:०० बजे तक',
    latitude: 19.6333,
    longitude: 74.9667,
    state: 'महाराष्ट्र',
    district: 'अहमदनगर',
    taluka: 'नेवासा'
  },
  {
    id: 't_paithan',
    name: 'श्री कृष्ण मंदिर, पैठण (Shree Krishna Mandir Paithan)',
    nameEn: 'Shree Krishna Mandir Paithan',
    type: 'sthan',
    location: 'पैठण (छत्रपति संभाजीनगर जिला, महाराष्ट्र)',
    description: 'ऐतिहासिक पैठण नगरी में गोदावरी के सुरम्य तट पर स्थित मंदिर। यहाँ चक्रधर स्वामी के पावन चरणकमलों के स्पर्श से पवित्र कई स्थान हैं। तीर्थयात्रियों के लिए आवास और भोजन की उत्तम व्यवस्था है।',
    history: 'गोदावरी की पावन रेत पर चक्रधर स्वामी जी के कीर्तन और उपदेशों का साक्षी। यहाँ का प्राचीन घाट और मंदिर श्रद्धा के प्रमुख केंद्र हैं।',
    photoUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600&auto=format&fit=crop',
    contact: '+91 9403986655',
    darshanTimings: 'सुबह ६:०० बजे से रात ८:३० बजे तक',
    latitude: 19.4833,
    longitude: 75.3833,
    state: 'महाराष्ट्र',
    district: 'छत्रपती संभाजीनगर',
    taluka: 'पैठण'
  },
  {
    id: 't_jalichadev',
    name: 'श्री क्षेत्र जाळीचा देव (Shree Kshetra Jalicha Dev)',
    nameEn: 'Shree Kshetra Jalicha Dev',
    type: 'sthan',
    location: 'जाळीचा देव (बुलढाणा जिला, महाराष्ट्र)',
    description: 'यह वह अत्यंत पवित्र वन क्षेत्र है जहाँ सर्वज्ञ श्रीचक्रधर स्वामीजी महाराज ने एकांत में दीर्घ साधना की और अनेक अलौकिक चमत्कारिक लीलाएं कीं।',
    history: 'यहाँ की पावन जाली वृक्ष और शिलाएं आज भी स्वामीजी की ध्यानमग्न अवस्था का प्रत्यक्ष स्मरण कराती हैं। यहाँ प्रतिवर्ष बड़ी संख्या में श्रद्धालु दर्शन हेतु आते हैं।',
    photoUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600&auto=format&fit=crop',
    contact: '+91 9422881122',
    darshanTimings: 'सुबह ६:०० बजे से रात ८:०० बजे तक',
    latitude: 20.0167,
    longitude: 76.1333,
    state: 'महाराष्ट्र',
    district: 'बुलढाणा',
    taluka: 'सिंदखेड राजा'
  },
  {
    id: 't_pohichadev',
    name: 'श्री क्षेत्र पोहीचा देव (Shree Kshetra Pohicha Dev)',
    nameEn: 'Shree Kshetra Pohicha Dev',
    type: 'sthan',
    location: 'पोही (वाशीम जिला, महाराष्ट्र)',
    description: 'महानुभाव संप्रदाय का अत्यंत पावन और श्रद्धास्पद लीला स्थान जहाँ श्रीचक्रधर स्वामी ने भक्तों का उद्धार किया था।',
    history: 'इस पावन स्थल पर प्राचीन काल से ही मंदिर और चरण पादुका स्थापित हैं। यहाँ का शांत वातावरण ध्यान और भजन स्मरण के लिए सर्वोत्तम माना जाता है।',
    photoUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop',
    contact: '+91 9822334455',
    darshanTimings: 'सुबह ५:३० बजे से रात ८:३० बजे तक',
    latitude: 20.4833,
    longitude: 77.4833,
    state: 'महाराष्ट्र',
    district: 'वाशीम',
    taluka: 'कारंजा'
  },
  {
    id: 't_panchaleshwar',
    name: 'श्री क्षेत्र पांचाळेश्वर मंदिर (Shree Kshetra Panchaleshwar)',
    nameEn: 'Shree Kshetra Panchaleshwar',
    type: 'sthan',
    location: 'पांचाळेश्वर (बीड जिला, महाराष्ट्र)',
    description: 'गोदावरी नदी के तट पर स्थित एक परम पावन तीर्थ क्षेत्र, जहाँ श्रीचक्रधर स्वामी के पावन चरणों का स्पर्श हुआ है।',
    history: 'म्हाइंभट रचित लीलाचरित्र में पांचाळेश्वर की अनेक मधुर और प्रेरक कथाएं अंकित हैं। यहाँ गोदावरी का विशाल घाट और मंदिर भक्तों के मन को शांति प्रदान करता है।',
    photoUrl: 'https://images.unsplash.com/photo-1472214222541-d510753a4907?q=80&w=600&auto=format&fit=crop',
    contact: '+91 9977884455',
    darshanTimings: 'सुबह ६:०० बजे से रात ९:०० बजे तक',
    latitude: 19.3500,
    longitude: 75.8167,
    state: 'महाराष्ट्र',
    district: 'बीड',
    taluka: 'गेवराई'
  },
  {
    id: 't_sinhagad',
    name: 'नागदेव गुंफा, सिंहगड (Nagdev Gunpha Sinhagad)',
    nameEn: 'Nagdev Gunpha Sinhagad',
    type: 'sthan',
    location: 'सिंहगड (पुणे जिला, महाराष्ट्र)',
    description: 'महानुभाव संप्रदाय के प्रथम आचार्य श्री नागदेवाचार्य महाराज की पावन साधना गुफा, जहाँ उन्होंने एकांतवास में कठोर तप किया था।',
    history: 'ऐतिहासिक सिंहगड किले के समीप यह गुफा स्थित है। यहाँ नागदेवाचार्य जी ने ध्यान साधना की और पंथ के प्रसार का संकल्प लिया था।',
    photoUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop',
    contact: '+91 9011223344',
    darshanTimings: 'सुबह ७:०० बजे से शाम ६:०० बजे तक',
    latitude: 18.3667,
    longitude: 73.7500,
    state: 'महाराष्ट्र',
    district: 'पुणे',
    taluka: 'हवेली'
  },
  {
    id: 't_katol',
    name: 'श्री कृष्ण मंदिर, काटोल (Shree Krishna Mandir Katol)',
    nameEn: 'Shree Krishna Mandir Katol',
    type: 'sthan',
    location: 'काटोल (नागपूर जिला, महाराष्ट्र)',
    description: 'विदर्भ के ऐतिहासिक काटोल नगर में स्थित प्राचीन महानुभाव मंदिर, जो ईश्वर भक्ति और नामस्मरण का प्रमुख केंद्र है।',
    history: 'इस स्थान पर प्राचीन काल से ही महानुभाव संतों का निवास रहा है। मंदिर में स्थापित सुंदर श्रीकृष्ण विग्रह दर्शनार्थियों के आकर्षण का केंद्र है।',
    photoUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop',
    contact: '+91 9370123456',
    darshanTimings: 'सुबह ६:०० बजे से रात ८:०० बजे तक',
    latitude: 21.2667,
    longitude: 78.5833,
    state: 'महाराष्ट्र',
    district: 'नागपूर',
    taluka: 'काटोल'
  },
  {
    id: 't_ashram_amravati',
    name: 'महानुभाव देवस्थान आश्रम, अमरावती (Mahanubhav Ashram Amravati)',
    nameEn: 'Mahanubhav Ashram Amravati',
    type: 'ashram',
    location: 'अमरावती (अमरावती जिला, महाराष्ट्र)',
    description: 'अमरावती शहर के हृदय में स्थित भव्य महानुभाव साधना आश्रम। यहाँ साधकों के अध्ययन और निवास की उत्तम व्यवस्था है।',
    history: 'इस आश्रम की स्थापना पूजनीय महानुभाव महंतों द्वारा की गई थी। यहाँ नित्य सुबह-शाम आरती, नामस्मरण और शास्त्र प्रवचनों का दिव्य आयोजन होता है।',
    photoUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
    contact: '+91 9890123456',
    darshanTimings: 'सुबह ५:०० बजे से रात ९:०० बजे तक',
    latitude: 20.9333,
    longitude: 77.7500,
    state: 'महाराष्ट्र',
    district: 'अमरावती',
    taluka: 'अमरावती'
  },
  {
    id: 't_ashram_ahmednagar',
    name: 'श्रीचक्रधर स्वामी आश्रम, अहमदनगर (Shree Chakradhar Swami Ashram Ahmednagar)',
    nameEn: 'Shree Chakradhar Swami Ashram Ahmednagar',
    type: 'ashram',
    location: 'अहमदनगर (अहमदनगर जिला, महाराष्ट्र)',
    description: 'अहमदनगर शहर में स्थित एक प्रमुख महानुभाव धर्म प्रचार एवं साधना आश्रम, जहाँ भक्तों को सविस्तार शास्त्र मार्गदर्शन दिया जाता है।',
    history: 'पंथ के विद्वान संतों के मार्गदर्शन में यहाँ गुरुकुल पद्धति से विद्यार्थियों को सूत्रपाठ और लीलाचरित्र की शिक्षा दी जाती है।',
    photoUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop',
    contact: '+91 9423456789',
    darshanTimings: 'सुबह ६:०० बजे से दोपहर १२:००, शाम ४:०० से रात ८:३० बजे तक',
    latitude: 19.0833,
    longitude: 74.7500,
    state: 'महाराष्ट्र',
    district: 'अहमदनगर',
    taluka: 'अहमदनगर'
  },
  {
    id: 't_ashram_jalgaon',
    name: 'श्री महानुभाव भालोद आश्रम, जळगाव (Shree Mahanubhav Bhalod Ashram Jalgaon)',
    nameEn: 'Shree Mahanubhav Bhalod Ashram Jalgaon',
    type: 'ashram',
    location: 'भालोद (जळगाव जिला, महाराष्ट्र)',
    description: 'खानदेश क्षेत्र का एक विख्यात महानुभाव आश्रम जहाँ आध्यात्मिक सत्संग, चातुर्मास प्रवचन और महाप्रसाद का नित्य सुचारू संचालन होता है।',
    history: 'भक्तों के सहयोग से निर्मित यह आश्रम खानदेश में चक्रधर स्वामी के विचारों के प्रसार का मुख्य स्तंभ माना जाता है।',
    photoUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop',
    contact: '+91 9158765432',
    darshanTimings: 'सुबह ६:०० बजे से रात ८:०० बजे तक',
    latitude: 21.0833,
    longitude: 75.7500,
    state: 'महाराष्ट्र',
    district: 'जळगाव',
    taluka: 'यावल'
  }
];

export const initialEvents: EventKaryakram[] = [
  {
    id: 'ev_1',
    title: 'श्री चांगदेव राऊळ महाराज जन्मोत्सव (Shree Changdev Raul Maharaj Janmotsav)',
    date: '२०२६-०६-१०',
    type: 'utsav',
    location: 'श्री क्षेत्र द्वारका धाम (Dwaraka Dham)',
    description: 'महानुभाव संप्रदायाचे तृतीय अवतार श्री चांगदेव राऊळ महाराज यांच्या प्राकट्य दिनानिमित्त विशेष महापूजा, आरती व भक्तांसाठी महाप्रसादाचे आयोजन.',
    contact: 'द्वारका संस्थान: ९८४५०१२३४५'
  },
  {
    id: 'ev_2',
    title: 'महानुभाव साधक संमेलन (Mahanubhav Seekers Conference)',
    date: '२०२६-०६-२४',
    type: 'sabha',
    location: 'महानुभाव आश्रम, पुणे (Pune Ashram)',
    description: 'नवीन साधकांसाठी विशेष ध्यान विधी, नामस्मरण आणि धर्मग्रंथांचे वाचन यावर मार्गदर्शन सत्र.',
    contact: 'पुणे समिती: ९९८८७७६६५५'
  },
  {
    id: 'ev_3',
    title: 'चातुर्मास प्रवचनमाला एवं कीर्तन सत्र (Chaturmas Pravachanmala)',
    date: '२०२६-०७-१०',
    type: 'kirtan',
    location: 'पैठण कृष्ण मंदिर (Paithan)',
    description: 'चार महिन्यांच्या चातुर्मास काळात चालणारे विशेष ज्ञानसत्र, निरूपण आणि कीर्तन प्रवचन मालिका. इसमें विभिन्न शास्त्री व विद्वान महानुभाव धर्म के गूढ़ रहस्यों तथा सूत्रपाठ पर व्याख्यान करेंगे.',
    contact: 'आयोजक: ९८२३४५६७१२'
  },
  {
    id: 'ev_4',
    title: 'श्री गुरुपौर्णिमा सोहळा (Guru Purnima Celebrations)',
    date: '२०२६-०७-२९',
    type: 'utsav',
    location: 'श्री क्षेत्र डोमेग्राम आश्रम (Domegram Kshetra)',
    description: 'आद्य गुरु नागदेवाचार्य आणि सर्वज्ञ चक्रधर स्वामी यांच्या स्मरणार्थ गुरुपूजन, सामुदायिक नामजप आणि विशेष पूजा विधी.',
    contact: 'डोमेग्राम विश्वस्त: ९३३४४५५६६७'
  },
  {
    id: 'ev_5',
    title: 'श्री चांगदेव राऊळ महाराज पुण्यतिथी उत्सव (Shree Changdev Raul Punyatithi)',
    date: '२०२६-०८-१२',
    type: 'utsav',
    location: 'श्री क्षेत्र द्वारवती (Shree Kshetra Dwaravati)',
    description: 'चांगदेव राऊळ महाराजांच्या अवतार कार्यपूर्ती सोहळ्यानिमित्त अखंड नामस्मरण सप्ताह आणि महाप्रसाद.',
    contact: 'द्वारका मंदिर विश्वस्त: ९४२०३००००४'
  },
  {
    id: 'ev_6',
    title: 'श्रीचक्रधर स्वामी अवतार दिनोत्सव (Chakradhar Swami Avtar Din)',
    date: '२०२६-०८-२७',
    type: 'utsav',
    location: 'डोमेग्राम आश्रम (Domegram Ashram)',
    description: 'पंथ के संस्थापक सर्वज्ञ श्रीचक्रधर स्वामी महाराज के प्राकट्य दिवस पर विशाल शोभायात्रा, ग्रंथ वाचन, और धार्मिक सभा का भव्य आयोजन.',
    contact: 'आश्रम कार्यालय: ९११२२३३४४५'
  },
  {
    id: 'ev_7',
    title: 'श्री श्रीकृष्ण जयंती महोत्सव (Krishnajanma Utsav)',
    date: '२०२६-०९-०३',
    type: 'utsav',
    location: 'श्री क्षेत्र ऋद्धपूर धाम (Ridhpur Dham)',
    description: 'पंचकृष्ण अवतारों में से प्रमुख भगवान श्रीकृष्ण की पावन जन्मोत्सव के अवसर पर विशेष पूजा, कीर्तन, भजन संध्या और महाप्रसाद का आयोजन। देशभर से लाखों श्रद्धालुओं के आगमन की संभावना है।',
    contact: 'व्यवस्थापक समिति: ९८३२१००००१'
  },
  {
    id: 'ev_8',
    title: 'श्री अनंत चतुर्दशी पर्व आणि ओटा पूजा (Anant Chaturdashi & Ota Puja)',
    date: '२०२६-०९-२५',
    type: 'utsav',
    location: 'श्री क्षेत्र जाळीचा देव (Jalicha Dev)',
    description: 'जाळीचा देव येथील पावन पवित्र चरणांकित स्थानावर सामुदायिक ओटा पूजा आणि रात्री जागरण भजन.',
    contact: 'जाळीचा देव देवस्थान: ९४४३३२२११०'
  },
  {
    id: 'ev_9',
    title: 'दसऱ्याच्या शुभ मुहूर्तावर श्री गोविंदप्रभू महापूजा सोहळा (Dasara & Govindaprabhu Mahapuja)',
    date: '२०२६-१०-२०',
    type: 'utsav',
    location: 'श्री क्षेत्र ऋद्धपूर (Ridhpur Dham)',
    description: 'दसरा सणाच्या शुभ मुहूर्तावर भगवान श्री गोविंदप्रभू महाराजांच्या ओट्याची महापूजा आणि दर्शन सोहळा. संपूर्ण दिवस दर्शन व भंडाऱ्याचे आयोजन.',
    contact: 'ऋद्धपूर देवस्थान: ९४२०५००००६'
  },
  {
    id: 'ev_10',
    title: 'महानुभाव साहित्य संमेलन (Mahanubhav Literature Conference)',
    date: '२०२६-१०-२८',
    type: 'sabha',
    location: 'छत्रपती संभाजीनगर (Chhatrapati Sambhajinagar)',
    description: 'लीलाचरित्र, सूत्रपाठ आणि साती ग्रंथांच्या संशोधनपर चर्चा, कीर्तनकार आणि अभ्यासकांचे व्याख्यान सत्र.',
    contact: 'संमेलन समिती: ९१२३४५६७८०'
  },
  {
    id: 'ev_11',
    title: 'मार्गशीर्ष अखंड नामस्मरण सप्ताह (Margashirsha Namasmaran Week)',
    date: '२०२६-११-१०',
    type: 'kirtan',
    location: 'महानुभाव मंदिर, अमरावती (Amravati Temple)',
    description: 'मार्गशीर्ष महिन्याच्या प्रारंभी ७ दिवसीय अखंड नामस्मरण विधी आणि दररोज संध्याकाळी सुप्रसिद्ध महंतांचे कीर्तन.',
    contact: 'अमरावती व्यवस्थापन: ९३२२११४४५५'
  },
  {
    id: 'ev_12',
    title: 'त्रिपुरी पौर्णिमा व दीपोत्सव (Tripuri Purnima & Deepotsav)',
    date: '२०२६-११-२३',
    type: 'utsav',
    location: 'श्री क्षेत्र पैठण (Paithan Dham)',
    description: 'त्रिपुरी पौर्णिमेनिमित्त मंदिराच्या प्रांगणात सहस्र दीप प्रज्वलन (दीपोत्सव), महाआरती आणि विशेष प्रवचन सत्र.',
    contact: 'पैठण आश्रम: ९४२०६००००७'
  },
  {
    id: 'ev_13',
    title: 'भगवान श्री दत्तात्रेय प्रभू जन्मोत्सव (Datta Jayanti Mahotsav)',
    date: '२०२६-१२-२३',
    type: 'utsav',
    location: 'श्री क्षेत्र माहूर गड (Mahur Gad)',
    description: 'भगवान श्री दत्तात्रेय प्रभूंच्या अवतार दिनोत्सवानिमित्त माहूरगड येथे भव्य कीर्तन सोहळा, पालखी सोहळा आणि अहोरात्र भजन.',
    contact: 'माहूर ट्रस्ट: ९४२०७००००८'
  },
  {
    id: 'ev_14',
    title: 'वर्षाखेर संकल्प सभा व महाआरती (Year-End Resolve Meeting)',
    date: '२०२६-१२-३१',
    type: 'sabha',
    location: 'श्री क्षेत्र काटोल (Katol Kshetra)',
    description: 'नवीन वर्षाच्या पूर्वसंध्येला साधकांचे आध्यात्मिक संकल्प, सामुदायिक नामस्मरण आणि मध्यरात्री महाआरती सोहळा.',
    contact: 'काटोल देवस्थान: ९८२२७७३३१९'
  }
];

export const initialNews: Samachar[] = [
  {
    id: 'ns_1',
    title: 'नवीन ग्रंथावली के डिजिटल प्रकाशन की घोषणा',
    date: '२०२६-०६-२८',
    content: 'महानुभाव साहित्य प्रसारक मंडल द्वारा श्री सूत्रपाठ और लीलाचरित्र के नवीन प्रामाणिक संस्करणों का ई-बुक और ऑडियो रूप में प्रकाशन इस ऐप के माध्यम से किया जा रहा है। अब पाठक घर बैठे शुद्ध पाठ का अध्ययन कर सकेंगे।',
    category: 'announcement',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ns_2',
    title: 'ऋद्धपूर तीर्थक्षेत्र में यात्री निवास का नवीनीकरण पूर्ण',
    date: '२०२६-०६-२०',
    content: 'आगामी श्रीकृष्ण जयंती उत्सव को देखते हुए ऋद्धपूर स्थित भक्त निवास में १०० से अधिक नवीन वातानुकूलित कमरों और विशाल भोजनालय का निर्माण कार्य पूर्ण कर लिया गया है। श्रद्धालु ऑनलाइन बुकिंग करा सकते हैं।',
    category: 'update',
    imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=600&auto=format&fit=crop'
  }
];

export const initialMessages: CommunityMessage[] = [
  {
    id: 'msg_1',
    userName: 'रामकृष्ण व्यास',
    userRole: 'vishwajeet shevlikar',
    message: 'सभी भक्तों को दंडवत प्रणाम। सुवर्णकार दृष्टांत का मुख्य मर्म यही है कि हमें जीवन के कष्टों से घबराना नहीं चाहिए, वरन उन्हें ईश्वर का प्रसाद मानकर अंतःकरण शुद्ध करना चाहिए। जय चक्रधर!',
    timestamp: '२०२६-०६-२९ १०:१५ AM',
    likes: 12,
    replies: [
      {
        id: 'rep_1',
        userName: 'अमित कुमार',
        userRole: 'user',
        message: 'दंडवत प्रणाम शास्त्रीजी, बहुत ही सुंदर मार्गदर्शन दिया आपने। कृपा कर दृष्टांतपाठ पर और अधिक चर्चा करें।',
        timestamp: '२०२६-०६-२९ १०:३० AM'
      }
    ]
  },
  {
    id: 'msg_2',
    userName: 'संगीता महानुभाव',
    userRole: 'user',
    message: 'क्या कोई बता सकता है कि आगामी श्रीकृष्ण जयंती के दौरान ऋद्धपूर भक्त निवास की बुकिंग कब से शुरू होगी? हमें अमरावती से सपरिवार आना है।',
    timestamp: '२०2६-०६-२८ ०३:४५ PM',
    likes: 5,
    replies: [
      {
        id: 'rep_2',
        userName: 'व्यवस्थापक (Admin)',
        userRole: 'admin',
        message: 'संगीता जी, बुकिंग १ जुलाई से इसी ऐप के "समाचार" सेक्शन में उपलब्ध कराए गए लिंक द्वारा प्रारंभ होगी। दंडवत प्रणाम।',
        timestamp: '२०२६-०६-२८ ०४:१० PM'
      }
    ]
  }
];
