/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Book, Chapter, Bhajan, Pravachan, Temple, EventKaryakram, Samachar, CommunityMessage } from './types';

export const MAHARASHTRA_DISTRICTS_AND_TALUKAS: Record<string, string[]> = {
  'अहमदनगर': ['नेवासा', 'अहमदनगर', 'श्रीरामपूर', 'राहता', 'संगमनेर', 'कोपरगाव', 'राहुरी', 'शेवगाव', 'पाथर्डी', 'पारनेर', 'कर्जत', 'जामखेड', 'श्रीगोंदा', 'अकोले'],
  'अकोला': ['अकोला', 'बाळापूर', 'पातूर', 'बार्शीटाकळी', 'मूर्तिजापूर', 'अकोट', 'तेल्हारा'],
  'अमरावती': ['चांदुर बाजार', 'अमरावती', 'अचलपूर', 'अंजनगाव सुर्जी', 'दर्यापूर', 'मोर्शी', 'वरूड', 'चांदुर रेल्वे', 'धामणगाव रेल्वे', 'नांदगाव खंडेश्वर', 'चिखलदरा', 'धारणी'],
  'बीड': ['गेवराई', 'बीड', 'माजलगाव', 'परळी', 'अंबाजोगाई', 'आष्टी', 'पाटोदा', 'शिरूर', 'धारूर', 'वडवणी', 'केज'],
  'भंडारा': ['भंडारा', 'तुमसर', 'पवनी', 'मोहाडी', 'साकोली', 'लाखनी', 'लाखांदूर'],
  'बुलढाणा': ['सिंदखेड राजा', 'लोणार', 'मेहकर', 'चिखली', 'बुलढाणा', 'देऊळगाव राजा', 'खामगाव', 'शेगाव', 'संग्रामपूर', 'जळगाव जामोद', 'नांदुरा', 'मलकापूर', 'मोताळा'],
  'चंद्रपूर': ['चंद्रपूर', 'भद्रावती', 'वरोरा', 'चिमूर', 'सिंदेवाही', 'मूल', 'सावली', 'पोंभुर्णा', 'गोंडपिपरी', 'अष्टविनायक', 'राजुरा', 'कोरपना', 'जिवती', 'ब्रह्मपुरी', 'नागभीड'],
  'छत्रपती संभाजीनगर': ['पैठण', 'छत्रपती संभाजीनगर', 'गंगापूर', 'वैजापूर', 'कन्नड', 'सोयगाव', 'सिल्लोड', 'फुलंब्री', 'खुलताबाद'],
  'धाराशिव': ['धाराशिव', 'तुळजापूर', 'उमरगा', 'लोहारा', 'कळंब', 'भूम', 'वाशी', 'परंडा'],
  'धुळे': ['धुळे', 'साक्री', 'शिंदखेडा', 'शिरपूर'],
  'गडचिरोली': ['गडचिरोली', 'वडसा', 'कुरखेडा', 'धानोरा', 'चामोर्शी', 'मूलचेरा', 'अहेरी', 'एटापल्ली', 'भामरागड', 'सिरोंचा', 'कोरची', 'टिपगड'],
  'गोंदिया': ['गोंदिया', 'तिरोडा', 'गोरेगाव', 'अर्जुनी मोरगाव', 'देवरी', 'आमगाव', 'सालेकसा', 'सडक अर्जुनी'],
  'हिंगोली': ['हिंगोली', 'कळमनुरी', 'सेनगाव', 'वसमत', 'औंढा नागनाथ'],
  'जळगाव': ['यावल', 'भुसावळ', 'जळगाव', 'अमळनेर', 'पाचोरा', 'चाळीसगाव', 'चोपडा', 'एरंडोल', 'धरणगाव', 'भडगाव', 'जामनेर', 'मुक्ताईनगर', 'बोदवड', 'रावेर', 'पारोळा'],
  'जालना': ['जालना', 'बदनापूर', 'भोकरदन', 'जाफ्राबाद', 'परतूर', 'मंठा', 'अंबरड', 'घनसावंगी'],
  'कोल्हापूर': ['करवीर', 'कागल', 'पन्हाळा', 'शाहूवाडी', 'शिरोळ', 'हातकणंगले', 'राधानगरी', 'गगनबावडा', 'भुदरगड', 'आजरा', 'गडहिंग्लज', 'चंदगड']
};

export const maharashtraDistricts = Object.keys(MAHARASHTRA_DISTRICTS_AND_TALUKAS).sort();

export const initialBooks: Book[] = [
  {
    id: 'sutrapath',
    title: 'श्री सूत्रपाठ (Shree Sutrapath)',
    titleEn: 'Shree Sutrapath',
    author: 'श्री चक्रधर स्वामी (वचन संकलन: केशिराज व्यास)',
    description: 'महानुभाव पंथ का मुख्य धर्मग्रंथ। इसमें सर्वज्ञ श्री चक्रधर स्वामी के मुखकमल से निकले मूल आध्यात्मिक वचनों का संग्रह है जो पंचकृष्णों के तत्वों की विवेचना करते हैं।',
    descriptionEn: 'The core scripture of the Mahanubhav Sect containing the direct aphorisms spoken by Sarvanya Shree Chakradhar Swami, compiled by Keshiraj Vyas.',
    category: 'pramukh_granth',
    chaptersCount: 4,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'leelacharitra',
    title: 'श्री लीलाचरित्र (Shree Leela Charitra)',
    titleEn: 'Shree Leela Charitra',
    author: 'म्हाइंभट (Mhaimbhat)',
    description: 'मराठी साहित्य का प्रथम गद्य ग्रंथ। इसमें सर्वज्ञ श्री चक्रधर स्वामी के जीवनकाल की पावन लीलाओं का अत्यंत सूक्ष्म वर्णन किया गया है।',
    descriptionEn: 'The first prose work in Marathi literature. It details the holy life events and spiritual activities (Leelas) of Shree Chakradhar Swami.',
    category: 'pramukh_granth',
    chaptersCount: 3,
    coverImage: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'drishtantapath',
    title: 'श्री दृष्टांतपाठ (Shree Drishtantapath)',
    titleEn: 'Shree Drishtantapath',
    author: 'श्री चक्रधर स्वामी (संकलन: केशिराज व्यास)',
    description: 'सर्वज्ञ चक्रधर स्वामी द्वारा गहन आध्यात्मिक सिद्धांतों को अत्यंत सरल उदाहरणों (दृष्टांतों) के माध्यम से समझाने वाले वचनों का अनूठा संग्रह।',
    descriptionEn: 'A divine collection of parabolic teachings (parables or examples) used by Swami to simplify complex metaphysical concepts for common people.',
    category: 'pramukh_granth',
    chaptersCount: 2,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'acharpath',
    title: 'श्री आचारपाठ (Shree Acharpath)',
    titleEn: 'Shree Acharpath',
    author: 'श्री चक्रधर स्वामी (संकलन: केशिराज व्यास)',
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
    author: 'श्री चक्रधर स्वामी (संकलन: केशिराज व्यास)',
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
    author: 'श्री चक्रधर स्वामी',
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
    chaptersCount: 1,
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
    chaptersCount: 1,
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
    title: 'श्री चक्रधर स्वामी चरित्र (Shree Chakradhar Swami Charitra)',
    titleEn: 'Shree Chakradhar Swami Charitra',
    author: 'म्हाइंभट (Mhaimbhat)',
    description: 'महानुभाव पंथ के संस्थापक सर्वज्ञ श्री चक्रधर स्वामी महाराज के संपूर्ण जीवन वृत्त, साधनाकाल और भक्त-उद्धार की लीलाओं का महाग्रंथ।',
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
    description: 'सर्वज्ञ श्री चक्रधर स्वामी और श्री गोविंदप्रभु महाराज की चरणधूलि से पावन हुए सभी तीर्थ स्थानों (ओटे, स्थान) का भूगोल और प्रामाणिक मार्गदर्शिका।',
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
    description: 'सर्वज्ञ श्री चक्रधर स्वामी के दिव्य, सगुण और मनोहारी शारीरिक सौंदर्य का शिख-नख अत्यंत प्रेमपूर्ण व भक्तिमय काव्य वर्णन।',
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
    title: 'श्री चक्रधर स्वामी आरती व स्तोत्र संग्रह',
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
  }
];

export const initialChapters: Chapter[] = [
  // Sutrapath Chapters
  {
    id: 'sp_1',
    bookId: 'sutrapath',
    number: 1,
    title: 'प्रकरण १: आचार मालिका (Achar Malika)',
    titleEn: 'Achar Malika',
    content: '॥ श्री परमेश्वरायनमः ॥\n१. परिग्रहा पासौनि निवृत्ति करावी।\n२. संनिधि परिहारे, असंभोगु रक्षीजे।\n३. विविचेनी ठाणे राहावे।\n४. ग्राम्य धर्मासी सन्निधान न करावे।\n५. असंभोगु रक्षीजे: स्त्रीयां, पुरुषां, नपुसकां, पशूं, पक्षीयांसी संग न करावा।',
    explanation: 'इस प्रकरण में साधक के दैनिक आचार, विरक्ति और ब्रह्मचर्य की रक्षा के लिए परमेश्वर की ओर से नियमों का निरूपण किया गया है। साधक को परिग्रह (संग्रह वृत्ति) से दूर रहकर एकांत और साधनापूर्ण जीवन बिताना चाहिए।',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 'sp_2',
    bookId: 'sutrapath',
    number: 2,
    title: 'प्रकरण २: विचार मालिका (Vichar Malika)',
    titleEn: 'Vichar Malika',
    content: '१. ज्ञान हेचि परमेश्वर स्वरूप।\n२. प्रपंचु तो अज्ञान रूपु।\n३. जीव हा अज्ञाने आवृत आहे।\n४. परमेश्वर कृपेनेचि मुमुक्षूला ज्ञानाची प्राप्ती होते।\n५. ईश्वर भक्तीवाचून गत्यंतर नाही।',
    explanation: 'विचार मालिका में ज्ञान और अज्ञान के स्वरूप पर प्रकाश डाला गया है। चक्रधर स्वामी समझाते हैं कि प्रपंच माया का रूप है और केवल परमेश्वर भक्ति व ज्ञान ही आत्मा के उद्धार का मार्ग है।',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 'sp_3',
    bookId: 'sutrapath',
    number: 3,
    title: 'प्रकरण ३: आचार विधी (Achar Vidhi)',
    titleEn: 'Achar Vidhi',
    content: '१. नित्य देवपूजा करावी, मन ईश्वरी लीन ठेवावे।\n२. दीनाचा पाश न घ्यावा, दयाभाव दृढ करावा।\n३. भोजनकाळी शुद्ध भाव ठेवावा, भिक्षेचे अन्न पवित्र मानावे।\n४. वाद-विवादापासून दूर राहावे।',
    explanation: 'साधक को दयाभाव, संयमित जीवनशैली और सात्विक आहार का पालन करना चाहिए। भिक्षा का अन्न ईश्वर प्रसाद स्वरूप ग्रहण करना और सभी जीवों पर दया करना धर्म का अंग है।'
  },
  {
    id: 'sp_4',
    bookId: 'sutrapath',
    number: 4,
    title: 'प्रकरण ४: लक्षण सूत्र (Lakshan Sutra)',
    titleEn: 'Lakshan Sutra',
    content: '१. परमेश्वर लक्षण हे केवळ आनंद व परमोदारता होय।\n२. खरा साधक तो जो द्वंद्वरहित आहे।\n३. सुख-दुःख समान मानणे हे विरागी लक्षणाचे चिन्ह होय।\n४. परमेश्वर भक्तांना निरंतर शांती लाभते।',
    explanation: 'इस अध्याय में परमेश्वर और सच्चे भक्त के उत्तम लक्षणों की विवेचना की गई है। भक्त वह है जो समता, शांती और पूर्ण आत्मसमर्पण के भाव में लीन रहता है।'
  },

  // Leela Charitra Chapters
  {
    id: 'lc_1',
    bookId: 'leelacharitra',
    number: 1,
    title: 'लीला १: श्री चक्रपाणि अवतार लीला (Chakrapani Avatar Leela)',
    titleEn: 'Chakrapani Avatar Leela',
    content: 'एके दिवशी द्वारकापुरीमध्ये श्री चक्रपाणि महाराज आपल्या भक्तांसह क्रीडा करत होते. त्यांनी भक्तांना परम आनंद दिला आणि नंतर लीलाविग्रहाने लोककल्याणासाठी अवतार प्रगट केला. उनके स्पर्श मात्र से ही दीनों के कष्ट दूर हो गए।',
    explanation: 'श्री चक्रपाणि महाराज महानुभाव पंथ के पंचकृष्णों में से द्वितीय अवतार हैं। यह लीला उनके दिव्य अवतार ग्रहण करने और द्वारका में भक्तों के उद्धार की सुंदर कथा वर्णित करती है।',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: 'lc_2',
    bookId: 'leelacharitra',
    number: 2,
    title: 'लीला २: श्री चांगदेव राऊळ भेट लीला (Changdev Raul Meet)',
    titleEn: 'Changdev Raul Meet',
    content: 'सर्वज्ञ श्री चक्रधर स्वामी आणि चांगदेव राऊळ महाराज यांची भेट झाली. दोन दिव्य अवतार एकत्र आल्यावर सृष्टीवर दैवी आनंदाचा वर्षाव झाला. दोघांनी परस्परांना आलिंगन दिले व लोककल्याणाच्या आध्यात्मिक कार्याचे सूत्र निश्चित केले।',
    explanation: 'चांगदेव राऊळ (द्वारकाचे परमेश्वर) और चक्रधर स्वामी जी की पावन आध्यात्मिक भेंट की सुंदर गाथा। दोनों महाप्रभुओं का एकात्म भाव दर्शनीय है।'
  },
  {
    id: 'lc_3',
    bookId: 'leelacharitra',
    number: 3,
    title: 'लीला ३: पैठण गमन आणि उपदेश लीला (Paithan Visit)',
    titleEn: 'Paithan Visit',
    content: 'स्वामी पैठण नगरीत दाखल झाले. तेथे गोदावरी काठी त्यांनी लोकांना अतिशय सोप्या शब्दांत परमेश्वर भक्तीचा आणि अहिंसेचा उपदेश केला. अनेक विद्वानांनी त्यांचे श्रेष्ठत्व मान्य करून त्यांचे शिष्यत्व स्वीकारले।',
    explanation: 'पैठण में गोदावरी नदी के तट पर स्वामी द्वारा दिए गए दिव्य उपदेशों और शिष्यों के साथ उनके पावन संस्मरणों का वर्णन।'
  },

  // Drishtanta Path Chapters
  {
    id: 'dp_1',
    bookId: 'drishtantapath',
    number: 1,
    title: 'दृष्टांत १: सुवर्णकार दृष्टांत (The Goldsmith Parable)',
    titleEn: 'The Goldsmith Parable',
    content: 'जैसे एक सुवर्णकार सोन्याचे अलंकार बनवताना त्यातील मळी अग्नीच्या साहाय्याने दूर करतो, आणि शुद्ध सोने मिळवतो. त्याचप्रमाणे परमेश्वर आपल्या भक्ताचे मन दुःख आणि कर्माच्या भट्टीमध्ये टाकून शुद्ध करतो, जेणेकरून भक्त ज्ञानासाठी पात्र बनेल।',
    explanation: 'इस दृष्टांत में स्वामी समझाते हैं कि जीवन में आने वाले दुःख और कठिन प्रसंग हमारे पूर्वकर्मों के शोधन की प्रक्रिया हैं, जिससे आत्मा पवित्र और तेजस्वी बनती है।'
  },
  {
    id: 'dp_2',
    bookId: 'drishtantapath',
    number: 2,
    title: 'दृष्टांत २: बीजाचे रोपटे दृष्टांत (The Seed and the Plant)',
    titleEn: 'The Seed and the Plant',
    content: 'एक लहान बीज जेव्हा जमिनीमध्ये समर्पित होते, तेव्हाच त्यापासून विशाल आणि फळ देणारा वृक्ष तयार होतो. जर बीज स्वतःचे अस्तित्व टिकवून ठेवेल, तर ते कोरडेच राहील. तसेच मानवाने जेव्हा आपला अहंकार नष्ट करून शरण जावे, तेव्हाच आध्यात्मिक उन्नती होते।',
    explanation: 'अहंकार के त्याग और संपूर्ण शरणागति का महत्व। जब जीव स्वयं को परमेश्वर के चरणों में विलीन कर देता है, तभी वास्तविक मोक्ष का अंकुर फूटता है।'
  },

  // Acharpath Chapters
  {
    id: 'achar_1',
    bookId: 'acharpath',
    number: 1,
    title: 'प्रकरण १: आचार धर्म',
    content: '१. नित्य नैमित्तिक कृत्य यथाविधी करावे।\n२. शुचिर्भूत राहुनि धर्मग्रंथांचे वाचन करावे।\n३. परपीडेपासून परावृत्त व्हावे, सत्य व अहिंसेचे आचरण करावे।',
    explanation: 'आचारपाठ में साधकों के आचरण की पवित्रता, सात्विक आचार और मर्यादा का गहन विवेचन है।'
  },

  // Vicharpath Chapters
  {
    id: 'vichar_1',
    bookId: 'vicharpath',
    number: 1,
    title: 'प्रकरण १: विचार रहस्य',
    content: '१. विवेक हा चि सर्व कर्मांचे मूळ होय।\n२. शुद्ध विचारानेच मन निर्विषय होते।\n३. ईश्वराचे ध्यान हेच मनाला स्थिर करते।',
    explanation: 'विचारपाठ में आत्मा, जीव, जगत और माया के चिंतन की वैज्ञानिक विवेचना की गई है।'
  },

  // Vachanamrut Chapters
  {
    id: 'vach_1',
    bookId: 'vachanamrut',
    number: 1,
    title: 'वचनामृत संग्रह १',
    content: '१. "माझा जीव अनंत सुखाचा धनी आहे, परी तो मायेने वेढिला गेला आहे।"\n२. "परमेश्वर भक्ती हीच मानवी जन्माचे सार्थक होय।"\n३. "दया, क्षमा, शांती ज्याच्या ठायी, परमेश्वर तेथेच वास करतो।"',
    explanation: 'स्वामी के वचन अमृत की तरह साधकों को भवसागर से तारते हैं और आत्मिक शांती प्रदान करते हैं।'
  },

  // Lakshanratnakar Chapters
  {
    id: 'lakshan_1',
    bookId: 'lakshanratnakar',
    number: 1,
    title: 'अध्याय १: ईश्वरी लक्षणे',
    content: '१. ईश्वराचे अंगी परम कारुणिकता, सर्वज्ञता आणि सर्वशक्तिमत्ता असते।\n२. तो जीवांच्या कल्याणासाठी विविध सगुण अवतार धारण करतो।',
    explanation: 'इस अध्याय में परमेश्वर के सगुण-साकार स्वरूप की विशेषताओं और उनके दयालु लक्षणों की शास्त्रीय मीमांसा है।'
  },

  // Prakaranvas Chapters
  {
    id: 'prak_1',
    bookId: 'prakaranvas',
    number: 1,
    title: 'प्रकरण १: दार्शनिक विवेचन',
    content: 'महानुभाव संप्रदायातील मूळ सिद्धांत जसे की चार विधी, पंच अवतार आणि जीवाचे मूळ स्वरूप यांचे सविस्तर विवेचन या प्रकरणात आढळते।',
    explanation: 'महानुभाव दर्शन के आधारभूत सिद्धांतों को समझने के लिए यह प्रकरण ग्रन्थ अत्यंत सहायक है।'
  },

  // Niruktashesh Chapters
  {
    id: 'nir_1',
    bookId: 'niruktashesh',
    number: 1,
    title: 'शब्द निरूक्त १: कठीण शब्दार्थ',
    content: '१. परिग्रह - संग्रह वृत्ती किंवा संचय वृत्ती।\n२. असंभोग - सर्व प्रकारच्या संसर्गाचा त्याग।\n३. सगुण - गुणांसह किंवा साकार रूपाने प्रगट झालेला परमेश्वर।',
    explanation: 'महानुभाव ग्रंथों में प्रयुक्त प्राचीन मराठी के दार्शनिक और क्लिष्ट शब्दों का सटीक निरूपण।'
  },

  // Panchakrishna Charitra Chapters
  {
    id: 'panch_1',
    bookId: 'panchakrishna_charitra',
    number: 1,
    title: 'अवतार १: श्रीकृष्ण चरित्र',
    content: 'भगवान श्रीकृष्ण हे महानुभाव संप्रदायाचे आद्यदैवत आहेत। त्यांच्या गोकुळ आणि द्वारकेतील सर्व लीला मोक्षप्रद आहेत।',
    explanation: 'महानुभाव मान्यतानुसार पंचकृष्णों में सर्वप्रथम श्रीकृष्ण महाराज के दिव्य रूप की वन्दना।'
  },

  // Shreekrishnacharitra Chapters
  {
    id: 'shreek_1',
    bookId: 'shreekrishnacharitra',
    number: 1,
    title: 'लीला १: कालियामर्दन व गोवर्धन लीला',
    content: 'यमुनेच्या तीरावर कालिंदीच्या डोहातील कालिया नागाचा गर्व श्रीकृष्ण भगवंतांनी हरण केला, आणि संपूर्ण गोकुळाला इंद्र कोपापासून गोवर्धन पर्वत उचलून वाचवले।',
    explanation: 'श्रीकृष्ण भगवान की महान सुरक्षात्मक और लोक-कल्याणकारी लीला का पावन स्मरण।'
  },

  // Shreedattatreyacharitra Chapters
  {
    id: 'shreed_1',
    bookId: 'shreedattatreyacharitra',
    number: 1,
    title: 'अध्याय १: अनसूया वरदान व दिव्य जन्म',
    content: 'अत्री ऋषींच्या आश्रमात माता अनुसूयेच्या पातिव्रत्यामुळे प्रसन्न होऊन ब्रह्मा, विष्णू आणि महेश यांनी एकाच बालकाच्या रूपात अवतार घेतला - तोच अवतार श्रीदत्तात्रेय प्रभु होय।',
    explanation: 'भगवान श्री दत्तात्रेय प्रभु के जन्म और उनके गुरु-स्वरूप की वन्दना।'
  },

  // Shreechangdevraul_charitra Chapters
  {
    id: 'shreechang_1',
    bookId: 'shreechangdevraul_charitra',
    number: 1,
    title: 'प्रकरण १: चांगदेव राऊळ अवतार लीला',
    content: 'श्री चांगदेव राऊळ महाराज हे द्वारकापुरीचे परमेश्वर होते। त्यांनी भक्तांच्या उद्धारासाठी आणि चक्रधर स्वामींच्या अवतार कार्याची पूर्वपीठिका म्हणून दिव्य लीला केल्या।',
    explanation: 'महानुभाव संप्रदाय के तृतीय अवतार चांगदेव राऊळ महाराज का पावन जीवन संस्मरण।'
  },

  // Shreegovindaprabhu_charitra Chapters
  {
    id: 'shreegov_1',
    bookId: 'shreegovindaprabhu_charitra',
    number: 1,
    title: 'लीला १: ऋद्धिपूर निवास आणि करुणामयी लीला',
    content: 'श्री गोविंदप्रभू महाराज हे परम कारुणिक अवतार होते। त्यांनी ऋद्धिपूर येथे राहून दीन-दुःखी, प्राणी आणि पक्ष्यांवर अपार करुणा केली। त्यांच्या सान्निध्यात आल्याने प्रत्येकाचा उद्धार झाला।',
    explanation: 'भगवान गोविंदप्रभु महाराज की पावन और करुणामयी लीलाओं का मर्म।'
  },

  // Shreechakradharswami_leelacharitra Chapters
  {
    id: 'shreechak_1',
    bookId: 'shreechakradharswami_leelacharitra',
    number: 1,
    title: 'लीला १: सर्वज्ञ श्री चक्रधर स्वामी अवतार धारण',
    content: 'गुजरातच्या विशाल देशातील हरपाळदेव रूपाने स्वामींनी अवतार लीला संपवून महाराष्ट्रातील पैठण नगरीत चक्रधर स्वामींच्या रूपात प्रगट होऊन मुमुक्षूंना मोक्षाचा मार्ग दाखवला।',
    explanation: 'महानुभाव संप्रदाय के प्राण आधार श्री चक्रधर स्वामी के दिव्य प्रकटीकरण की कथा।'
  },

  // Battis Lakshanachi Tip Chapters
  {
    id: 'battis_1',
    bookId: 'battis_lakshanachi_tip',
    number: 1,
    title: 'लक्षण विवरण: बत्तीस महालक्षणे',
    content: 'अवतार पुरुषाच्या शरीरावर बत्तीस लक्षणे प्रगट होतात। जसे की - समचरणता, उन्नत नासिका, दीर्घ बाहू आणि अत्यंत शांत व ओजस्वी कांती।',
    explanation: 'ईश्वरी अवतार को पहचानने की शास्त्रीय पद्धति और उनके अलौकिक लक्षणों का विवेचन।'
  },

  // Sutrapath Tika Chapters
  {
    id: 'sutrat_1',
    bookId: 'sutrapath_tika',
    number: 1,
    title: 'भाष्य १: आचार मालिका विवेचन',
    content: 'आचार मालिकेतील "परिग्रहा पासौनि निवृत्ती" या सूत्राचा अर्थ केवळ बाह्य वस्तूंचा त्याग नसून अंतःकरणातील आसक्तीचा समूळ नाश करणे हा होय।',
    explanation: 'श्री सूत्रपाठ के गूढ़ रहस्यों का प्राचीन आचार्यों द्वारा सरल भाषा में प्रणीत भाष्य।'
  },

  // Drishtantapath Tika Chapters
  {
    id: 'drisht_1',
    bookId: 'drishtantapath_tika',
    number: 1,
    title: 'दृष्टांत स्पष्टीकरण: सुवर्णकार दृष्टांत रहस्य',
    content: 'ज्याप्रमाणे सोने तापवल्याशिवाय शुद्ध होत नाही, त्याचप्रमाणे मनुष्याचे मन कठीण साधना आणि भक्तिभावाच्या योगानेच निर्मळ होते।',
    explanation: 'स्वामी द्वारा प्रयुक्त सुंदर दृष्टांतों का सविस्तार और गहन दार्शनिक अर्थ।'
  },

  // Mahabhashya Chapters
  {
    id: 'mahab_1',
    bookId: 'mahabhashya',
    number: 1,
    title: 'मंगलाचरण आणि मूळ भाष्य',
    content: '॥ श्री पंचकृष्णाय नमः ॥\nया भाष्यात जीव, प्रपंच, देवता आणि परमेश्वर या चार प्रमुख तत्त्वांचे परस्पर संबंध अत्यंत तर्कशुद्ध पद्धतीने मांडण्यात आले आहेत।',
    explanation: 'महानुभाव तत्वज्ञान का सर्वश्रेष्ठ भाष्य ग्रंथ जो संप्रदाय की दार्शनिक नींव को सुदृढ़ करता है।'
  },

  // Brahmavidya Chapters
  {
    id: 'brahm_1',
    bookId: 'brahmavidya',
    number: 1,
    title: 'अध्याय १: ब्रह्मज्ञान निरूपण',
    content: 'ब्रह्मविद्या ही ती विद्या होय जी जीवाला अज्ञानाच्या अंधारातून बाहेर काढून परमेश्वराच्या नित्य स्वरूपाची प्राप्ती करून देते।',
    explanation: 'सत्य ज्ञान, जीव के बंधन और ईश्वर की मुक्तिदायिनी कृपा का सविस्तार निरूपण।'
  },

  // Jnanprabodh Chapters
  {
    id: 'jnanp_1',
    bookId: 'jnanprabodh',
    number: 1,
    title: 'प्रकरण १: ज्ञानाचा प्रकाश',
    content: 'मनुष्याला जोपर्यंत स्वरूपाचे ज्ञान होत नाही, तोपर्यंत तो संसाराच्या फेऱ्यात भटकत राहतो। ईश्वराची कृपा हाच ज्ञानाचा खरा मार्ग आहे।',
    explanation: 'साती ग्रंथों के अंतर्गत सुंदर काव्य शैली में ज्ञान के महत्व का प्रतिपादन।'
  },

  // Tattvasar Chapters
  {
    id: 'tattvas_1',
    bookId: 'tattvasar',
    number: 1,
    title: 'सार १: तत्त्व विवेचन',
    content: 'या सृष्टीचा कर्ता केवळ परमेश्वरच आहे। प्रपंच हा नाशिवंत असून केवळ परमेश्वर भक्तीच शाश्वत आणि खरी आहे।',
    explanation: 'अत्यंत सुबोध शैली में महानुभाव तत्वज्ञान के मुख्य निष्कर्षों का संग्रह।'
  },

  // Viveksindhu Chapters
  {
    id: 'vivek_1',
    bookId: 'viveksindhu',
    number: 1,
    title: 'अध्याय १: विवेक व वैराग्य संवाद',
    content: 'विवेक म्हणजे काय सत्य आणि काय असत्य याचे ज्ञान असणे। वैराग्य म्हणजे असत्य प्रपंचाचा मोह सोडून सत्याकडे धाव घेणे।',
    explanation: 'मुकुंदराज कृत अत्यंत प्राचीन ग्रंथ का महानुभाव पंथ में स्थान व आध्यात्मिक महत्व।'
  },

  // Poojavasar Chapters
  {
    id: 'pooja_1',
    bookId: 'poojavasar',
    number: 1,
    title: 'पूजा विधी: षोडशोपचार पूजा',
    content: 'नित्यकाळी उठून स्नान करून अत्यंत भक्तीभावाने परमेश्वराच्या पावन प्रतिमेची किंवा ओट्याची गंध, पुष्प, धूप, दीप आणि नैवेद्याने पूजा करावी।',
    explanation: 'परमेश्वर पूजा की पारंपरिक वैदिक व महानुभाव पद्धति का नियम संग्रह।'
  },

  // Aarti Sangrah Chapters
  {
    id: 'aarti_1',
    bookId: 'aarti_sangrah',
    number: 1,
    title: 'श्री चक्रधर स्वामी आरती',
    content: 'जय देव जय देव जय श्री चक्रधरा।\nआरती ओवाळू चरणी सुंदर मुख पाहा ॥ ध्रु. ॥\nपैठण प्रगटले स्वामी अवतार धारण।\nदीन दुःखी भक्तांचे केले संकट हरण ॥ १ ॥\nजय देव जय देव...',
    explanation: 'स्वामी चक्रधर महाराज की परम मंगलकारी आरती का भक्तिमय पाठ।'
  },

  // Stotra Sangrah Chapters
  {
    id: 'stotra_1',
    bookId: 'stotra_sangrah',
    number: 1,
    title: 'श्री पंचकृष्ण स्तोत्रम्',
    content: 'नमः श्रीकृष्णाय द्वारकानाथाय धीमते।\nनमः चांगदेवराऊळाय ब्रह्मरूपाय धारिणे।\nनमः गोविंदप्रभवे कारुण्यमूर्तये नमो नमः।',
    explanation: 'संस्कृत में निबद्ध पंचकृष्णों का ध्यान व वन्दना स्तोत्र।'
  },

  // Nityapath Chapters
  {
    id: 'nitya_1',
    bookId: 'nityapath',
    number: 1,
    title: 'नित्य मंगल पाठ',
    content: 'सकाळी उठल्यावर पंचकृष्णांचे स्मरण करावे, नित्यसूत्रांचे पठन करावे आणि दिवसाची सुरुवात मंगलमयी विचारांनी करावी।',
    explanation: 'साधकों के दैनिक पठन के लिए निश्चित की गई नित्य मंगलमय सूक्तियां।'
  },

  // Namasmaran Sangrah Chapters
  {
    id: 'namas_1',
    bookId: 'namasmaran_sangrah',
    number: 1,
    title: 'नामस्मरण विधी व जप संख्या',
    content: '"ॐ नमो श्री चक्रधर स्वामी परमेश्वराय नमः"\nया दिव्य नामाचा निरंतर जप केल्याने अंतःकरण शुद्ध होते व चित्तातील अज्ञान नष्ट होते।',
    explanation: 'नामस्मरण का आध्यात्मिक महत्व और जप की शास्त्रीय प्रणाली।'
  },

  // Prarthana Sangrah Chapters
  {
    id: 'prarth_1',
    bookId: 'prarthana_sangrah',
    number: 1,
    title: 'शरणगती प्रार्थना',
    content: 'हे देवा, मी अज्ञानी आहे, संसाराच्या मायेत अडकलो आहे। मला तुमच्या चरणांचा आश्रय द्या आणि माझा उद्धार करा। तुमची कृपा हीच माझी खरी संपत्ती आहे।',
    explanation: 'परमेश्वर के चरणों में की जाने वाली दीन व आत्मसमर्पण युक्त भावपूर्ण प्रार्थना।'
  },

  // Smrutisthal Chapters
  {
    id: 'smrut_1',
    bookId: 'smrutisthal',
    number: 1,
    title: 'प्रकरण १: नागदेवाचार्य संघ संचालन',
    content: 'स्वामींच्या उत्तरायणानंतर भटोबास (नागदेवाचार्य) यांनी संपूर्ण महानुभाव संघाला एकत्र ठेवले। म्हाइंभटांनी लीळाचरित्र लिहिण्यास सुरुवात केली आणि भटोबासांनी त्याला संमती दिली।',
    explanation: 'महानुभाव संप्रदाय के इतिहास और नागदेवाचार्य जी के दिव्य जीवन के पावन संस्मरण।'
  },

  // Sthanpothi Chapters
  {
    id: 'sthan_1',
    bookId: 'sthanpothi',
    number: 1,
    title: 'तीर्थ दर्शन: ऋद्धिपूर धाम',
    content: 'ऋद्धिपूर (अमरावती, महाराष्ट्र) हे श्री गोविंदप्रभू महाराजांचे क्रीडास्थान आहे। येथे स्वामींच्या चरण पादुका आणि अनेक पवित्र ओटे आहेत, जे अत्यंत जाग्रत मानले जातात।',
    explanation: 'पवित्र महानुभाव स्थानों का भौगोलिक और ऐतिहासिक विवरण।'
  },

  // Sati Granth Chapters
  {
    id: 'sati_1',
    bookId: 'sati_granth',
    number: 1,
    title: 'साती ग्रंथांचा परिचय व महात्म्य',
    content: 'महानुभाव साती ग्रंथामध्ये रुक्मिणी स्वयंवर, शिशुपालवध, सह्याद्रीवर्णन, वत्सहरण, मूर्तिप्रकाश, ऋद्धिपूरवर्णन आणि ज्ञानप्रबोध यांचा समावेश होतो। हे ग्रंथ मराठी साहित्याचे वैभव आहेत।',
    explanation: 'महानुभाव संप्रदाय के प्रसिद्ध सात काव्यों की साहित्यिक व दार्शनिक महत्ता।'
  },

  // Dhavale Chapters
  {
    id: 'dhav_1',
    bookId: 'dhavale',
    number: 1,
    title: 'धवळे १: महदंबेची मधुर गीते',
    content: 'मंगळवेढ्याच्या शुभ प्रसंगी महदंबेने श्रीकृष्ण भगवंतांच्या विवाहाचे गाणे अत्यंत सुंदर ओवी छंदात गायले। "श्रीकृष्ण गोविंद हरे मुरारी..."',
    explanation: 'मराठी साहित्य की प्रथम कवयित्री महदंबा द्वारा रचित प्राचीन विवाह गीतों का माधुर्य।'
  },

  // Rukmini Swayamvar Chapters
  {
    id: 'rukm_1',
    bookId: 'rukmini_swayamvar',
    number: 1,
    title: 'अध्याय १: रुक्मिणीचे गुप्त पत्र',
    content: 'रुक्मिणीने श्रीकृष्णाला पत्र पाठवून सांगितले की - "मी तुम्हालाच पती मानले आहे, जर तुम्ही मला वाचवले नाही तर मी माझा प्राण अर्पण करेन।" हे वाचून कृष्ण तात्काळ धावून आले।',
    explanation: 'श्रीमदभागवत और महानुभाव ग्रंथों पर आधारित श्रीकृष्ण-रुक्मिणी विवाह कथा का रसमय विवेचन।'
  },

  // Murtiprakash Chapters
  {
    id: 'murt_1',
    bookId: 'murtiprakash',
    number: 1,
    title: 'अध्याय १: स्वामींचे सगुण रूप ध्यान',
    content: 'स्वामींचे चरणकमल अत्यंत कोमल आहेत। त्यांचे मुखकमल पौर्णिमेच्या चंद्रासारखे तेजस्वी आणि डोळे अत्यंत करुणेने भरलेले आहेत। त्यांच्या हास्याने भक्तांचे दुःख पळून जाते।',
    explanation: 'सर्वज्ञ श्री चक्रधर स्वामी महाराज के दिव्य साकार रूप का ध्यान।'
  },

  // Sahyadrivarnan Chapters
  {
    id: 'sahy_1',
    bookId: 'sahyadrivarnan',
    number: 1,
    title: 'प्रकरण १: सह्याद्रीची पावन भूमी',
    content: 'सह्याद्री पर्वताच्या रांगांमध्ये भगवान श्रीदत्तात्रेय महाराज निवास करतात। तेथील झाडे, वेली, नद्या आणि पशु-पक्षी सर्वच त्या पावन अवताराच्या भक्तीत दंग आहेत।',
    explanation: 'सह्याद्री के पर्वतराज की पावनता और भगवान दत्त गुरु की निवास भूमि का अलौकिक गौरव।'
  },

  // Newly seeded category chapters
  {
    id: 'art_1',
    bookId: 'chakradhar_aarti',
    number: 1,
    title: 'श्री चक्रधर स्वामी आरती (Shree Chakradhar Swami Aarti)',
    content: '॥ श्री चक्रधर स्वामी आरती ॥\nजय देव जय देव जय चक्रधरा स्वामी । आरती ओवाळू चरणी निजधामी ॥ ध्रु० ॥\nअमरावतीचा राजा गुंडम करुणाकर । तारिले अनंत जीव तूचि जगी ईश्वर ॥ जय देव० ॥ १ ॥\nभक्तांच्या हाकेला धावसी धावून । ओवाळू कापुराची वात अंतरी रंगून ॥ जय देव० ॥ २ ॥',
    explanation: 'चक्रधर स्वामी महाराजांच्या चरणी लीन होऊन त्यांची दिव्य आरती आणि स्तुती करण्याची विधी आणि भावार्थ।'
  },
  {
    id: 'art_2',
    bookId: 'chakradhar_aarti',
    number: 2,
    title: 'श्री दत्तात्रेय अष्टक आणि स्तोत्र',
    content: '॥ श्री दत्तात्रेय स्तोत्र ॥\nदत्त गुरु महाराज कृपाळा । अत्रि अनसूया नंदन बाळा ॥\nज्ञान विरक्तीचे तूचि स्वरूप । हरिशी भक्तांचे भवताप कूप ॥\nसह्याद्री पर्वती तुझाची वास । पुरवी भक्तांची मनोवेध आस ॥',
    explanation: 'भगवान श्रीदत्तात्रेय महाराजांच्या दिव्य ध्यान आणि स्तोत्राचे वर्णन आणि अर्थ।'
  },
  {
    id: 'bhj_bk_1',
    bookId: 'm_bhajanavali',
    number: 1,
    title: 'भजन १: चक्रधरा रे चक्रधरा',
    content: '॥ भजन ॥\nचक्रधरा रे चक्रधरा, देवा मज पावन करा ॥ ध्रु० ॥\nप्रपंचात मी खूप थकलो, नाम तुझे मी विसरलो ।\nहातामध्ये हात घ्यावा, मोक्षाचा तो मार्ग द्यावा ॥ १ ॥\nऋद्धपूरच्या मातीमध्ये, ध्यान तुझे अंतरात माझ्या ॥ २ ॥',
    explanation: 'चक्रधर स्वामी महाराजांच्या भक्तीमध्ये रंगून आपल्या चुकीची क्षमा मागून मोक्षाची याचना करणारे भजन।'
  },
  {
    id: 'bhj_bk_2',
    bookId: 'm_bhajanavali',
    number: 2,
    title: 'भजन २: दत्तात्रेय स्वामी सगुण सुंदर',
    content: '॥ भजन ॥\nदत्तात्रेय स्वामी सगुण सुंदर, ध्यान करावे निरंतर ॥ ध्रु० ॥\nतीन शिरे आणि सहा हात, पाठीवरती भक्तीची गाठ ।\nकामधेनू उभी द्वारी, श्वान चौघे रक्षणकारी ॥ १ ॥\nज्ञान भक्तीचा तूच सागर, भवसागर पैलपार कर ॥ २ ॥',
    explanation: 'भगवान दत्तात्रेय प्रभुंच्या साकार सगुण रूपाचे सुंदर आणि ध्यानमग्न भजन।'
  },
  {
    id: 'puj_1',
    bookId: 'shree_pujavsar',
    number: 1,
    title: 'श्री पूजावसर पाठविधी',
    content: '॥ श्री पूजावसर पाठ ॥\n१. प्रथम उठून श्री चक्रधर स्वामींच्या स्मरणाने नमस्कार करावा।\n२. शुद्ध वस्त्र परिधान करून पूजा स्थानाची स्वच्छता करावी।\n३. अष्टगंध, सुवासिक फुले आणि पंचामृताने चरणांचे ध्यान करावे।\n४. "॥ श्री कृष्ण चक्रधर स्वामी महाराजाय नमः ॥" या मंत्राचा जप नित्य करावा।\n५. दैनंदिन नैवेद्य दाखवून आत्मसमर्पण प्रार्थना करावी।',
    explanation: 'नित्य नियमाने करावयाच्या पूजा आणि सेवेची शास्त्रोक्त पद्धत ज्याने मन ईश्वरामध्ये लीन होते।'
  },
  {
    id: 'par_1',
    bookId: 'sutrapath_parayan',
    number: 1,
    title: 'श्री सूत्रपाठ पारायण पद्धती व संकल्प',
    content: '॥ सूत्रपाठ पारायण आरंभीचा संकल्प ॥\n"मी (भक्ताचे नाव) आज श्री चक्रधर स्वामी महाराजांच्या वचनांच्या अभ्यासासाठी आणि चित्तशुद्धीसाठी श्री सूत्रपाठाचे पारायण करण्यास प्रारंभ करीत आहे। हे स्वामी, माझ्यावर तुमची अखंड कृपा असू द्या।"\n\nपारायण विधी:\n१. दररोज एका एका प्रकरणाचे शांत चित्ताने पठण करावे।\n२. पठण करताना वचनांच्या अर्थावर मनन करावे।\n३. पाच दिवसांत पारायण पूर्ण करून महाप्रसाद ग्रहण करावा।',
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
    lyrics: 'श्री द्वारकावतार श्रीकृष्ण महाराज की जय ॥\nश्री चांगदेव राऊळ महाराज की जय ॥\nश्री गुंडम कारुण्य महाराज की जय ॥\nश्री चक्रपाणि महाराज की जय ॥\nश्री चक्रधर स्वामी महाराज की जय ॥\n\nपंचकृष्ण की अगाध लीला, भवसागर से तारे जीवाला।\nनित्य स्मरण करा मुखे भक्ता, तुटती संसाराची बंधने आत्ता ॥',
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
    description: 'महानुभाव पंथ की पावन काशी। यह वह तीर्थ स्थल है जहाँ भगवान गोविंदप्रभु महाराज ने दीर्घकाल तक निवास किया। सर्वज्ञ श्री चक्रधर स्वामी की चरणधूलि से पावन यह भूमि अत्यंत जाग्रत और पूजनीय मानी जाती है।',
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
    description: 'गोदावरी नदी के तट पर बसा यह आश्रम सर्वज्ञ श्री चक्रधर स्वामी का अति प्रिय साधना स्थल रहा। यहाँ बैठकर स्वामीजी ने अनेक शिष्यों को दीक्षा दी और अपने उपदेशों से पावन किया।',
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
    description: 'यह वह अत्यंत पवित्र वन क्षेत्र है जहाँ सर्वज्ञ श्री चक्रधर स्वामीजी महाराज ने एकांत में दीर्घ साधना की और अनेक अलौकिक चमत्कारिक लीलाएं कीं।',
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
    description: 'महानुभाव संप्रदाय का अत्यंत पावन और श्रद्धास्पद लीला स्थान जहाँ श्री चक्रधर स्वामी ने भक्तों का उद्धार किया था।',
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
    description: 'गोदावरी नदी के तट पर स्थित एक परम पावन तीर्थ क्षेत्र, जहाँ श्री चक्रधर स्वामी के पावन चरणों का स्पर्श हुआ है।',
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
    name: 'श्री चक्रधर स्वामी आश्रम, अहमदनगर (Shree Chakradhar Swami Ashram Ahmednagar)',
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
    title: 'श्री चक्रधर स्वामी अवतार दिनोत्सव (Chakradhar Swami Avtar Din)',
    date: '२०२६-०८-२७',
    type: 'utsav',
    location: 'डोमेग्राम आश्रम (Domegram Ashram)',
    description: 'पंथ के संस्थापक सर्वज्ञ श्री चक्रधर स्वामी महाराज के प्राकट्य दिवस पर विशाल शोभायात्रा, ग्रंथ वाचन, और धार्मिक सभा का भव्य आयोजन.',
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
