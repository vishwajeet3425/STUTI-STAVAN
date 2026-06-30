/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Book, Chapter, Bhajan, Pravachan, Temple, EventKaryakram, Samachar, CommunityMessage } from './types';

export const initialBooks: Book[] = [
  {
    id: 'sutrapath',
    title: 'श्री सूत्रपाठ (Shree Sutrapath)',
    titleEn: 'Shree Sutrapath',
    author: 'श्री चक्रधर स्वामी (वचन संकलन: केशिराज व्यास)',
    description: 'महानुभाव पंथ का मुख्य धर्मग्रंथ। इसमें सर्वज्ञ श्री चक्रधर स्वामी के मुखकमल से निकले मूल आध्यात्मिक वचनों का संग्रह है जो पंचकृष्णों के तत्वों की विवेचना करते हैं।',
    descriptionEn: 'The core scripture of the Mahanubhav Sect containing the direct aphorisms spoken by Sarvanya Shree Chakradhar Swami, compiled by Keshiraj Vyas.',
    category: 'sutra',
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
    category: 'leela',
    chaptersCount: 5,
    coverImage: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'drishtantapath',
    title: 'श्री दृष्टांतपाठ (Shree Drishtantapath)',
    titleEn: 'Shree Drishtantapath',
    author: 'श्री चक्रधर स्वामी (संकलन: केशिराज व्यास)',
    description: 'सर्वज्ञ चक्रधर स्वामी द्वारा गहन आध्यात्मिक सिद्धांतों को अत्यंत सरल उदाहरणों (दृष्टांतों) के माध्यम से समझाने वाले वचनों का अनूठा संग्रह।',
    descriptionEn: 'A divine collection of parabolic teachings (parables or examples) used by Swami to simplify complex metaphysical concepts for common people.',
    category: 'sutra',
    chaptersCount: 3,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop'
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
    content: 'एके दिवशी द्वारकापुरीमध्ये श्री चक्रपाणि महाराज आपल्या भक्तांसह क्रीडा करत होते. त्यांनी भक्तांना परम आनंद दिला आणि नंतर लीलाविग्रहाने लोककल्याणासाठी अवतार प्रगट केला. त्यांच्या स्पर्शाने दीन-दुःखितांचे दुःख हरण झाले.',
    explanation: 'श्री चक्रपाणि महाराज महानुभाव पंथ के पंचकृष्णों में से द्वितीय अवतार हैं। यह लीला उनके दिव्य अवतार ग्रहण करने और द्वारका में भक्तों के उद्धार की सुंदर कथा वर्णित करती है।',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: 'lc_2',
    bookId: 'leelacharitra',
    number: 2,
    title: 'लीला २: श्री चांगदेव राऊळ भेट लीला (Changdev Raul Meet)',
    titleEn: 'Changdev Raul Meet',
    content: 'सर्वज्ञ श्री चक्रधर स्वामी आणि चांगदेव राऊळ महाराज यांची भेट झाली. दोन दिव्य अवतार एकत्र आल्यावर सृष्टीवर दैवी आनंदाचा वर्षाव झाला. दोघांनी परस्परांना आलिंगन दिले व लोककल्याणाच्या आध्यात्मिक कार्याचे सूत्र निश्चित केले.',
    explanation: 'चांगदेव राऊळ (द्वारकाचे परमेश्वर) और चक्रधर स्वामी जी की पावन आध्यात्मिक भेंट की सुंदर गाथा। दोनों महाप्रभुओं का एकात्म भाव दर्शनीय है।'
  },
  {
    id: 'lc_3',
    bookId: 'leelacharitra',
    number: 3,
    title: 'लीला ३: पैठण गमन आणि उपदेश लीला (Paithan Visit)',
    titleEn: 'Paithan Visit',
    content: 'स्वामी पैठण नगरीत दाखल झाले. तेथे गोदावरी काठी त्यांनी लोकांना अतिशय सोप्या शब्दांत परमेश्वर भक्तीचा आणि अहिंसेचा उपदेश केला. अनेक विद्वानांनी त्यांचे श्रेष्ठत्व मान्य करून त्यांचे शिष्यत्व स्वीकारले.',
    explanation: 'पैठण में गोदावरी नदी के तट पर स्वामी द्वारा दिए गए दिव्य उपदेशों और शिष्यों के साथ उनके पावन संस्मरणों का वर्णन।'
  },

  // Drishtanta Path Chapters
  {
    id: 'dp_1',
    bookId: 'drishtantapath',
    number: 1,
    title: 'दृष्टांत १: सुवर्णकार दृष्टांत (The Goldsmith Parable)',
    titleEn: 'The Goldsmith Parable',
    content: 'जैसे एक सुवर्णकार सोन्याचे अलंकार बनवताना त्यातील मळी अग्नीच्या साहाय्याने दूर करतो, आणि शुद्ध सोने मिळवतो. त्याचप्रमाणे परमेश्वर आपल्या भक्ताचे मन दुःख आणि कर्माच्या भट्टीमध्ये टाकून शुद्ध करतो, जेणेकरून भक्त ज्ञानासाठी पात्र बनेल.',
    explanation: 'इस दृष्टांत में स्वामी समझाते हैं कि जीवन में आने वाले दुःख और कठिन प्रसंग हमारे पूर्वकर्मों के शोधन की प्रक्रिया हैं, जिससे आत्मा पवित्र और तेजस्वी बनती है।'
  },
  {
    id: 'dp_2',
    bookId: 'drishtantapath',
    number: 2,
    title: 'दृष्टांत २: बीजाचे रोपटे दृष्टांत (The Seed and the Plant)',
    titleEn: 'The Seed and the Plant',
    content: 'एक लहान बीज जेव्हा जमिनीमध्ये समर्पित होते, तेव्हाच त्यापासून विशाल आणि फळ देणारा वृक्ष तयार होतो. जर बीज स्वतःचे अस्तित्व टिकवून ठेवेल, तर ते कोरडेच राहील. तसेच मानवाने जेव्हा आपला अहंकार नष्ट करून शरण जावे, तेव्हाच आध्यात्मिक उन्नती होते.',
    explanation: 'अहंकार के त्याग और संपूर्ण शरणागति का महत्व। जब जीव स्वयं को परमेश्वर के चरणों में विलीन कर देता है, तभी वास्तविक मोक्ष का अंकुर फूटता है।'
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
    name: 'ऋद्धपूर मंदिर (Shree Kshetra Ridhpur)',
    nameEn: 'Shree Kshetra Ridhpur',
    type: 'sthan',
    location: 'ऋद्धपूर (अमरावती जिला, महाराष्ट्र)',
    description: 'महानुभाव पंथ की पावन काशी। यह वह तीर्थ स्थल है जहाँ भगवान गोविंदप्रभु महाराज ने दीर्घकाल तक निवास किया। सर्वज्ञ श्री चक्रधर स्वामी की चरणधूलि से पावन यह भूमि अत्यंत जाग्रत और पूजनीय मानी जाती है।',
    history: 'ऋद्धपूर में प्रभु गोविंदप्रभु की अनेक लीलाएं संपन्न हुईं। यहाँ मंदिर में उनके पवित्र चरण चिह्न तथा प्राचीन चरण पादुकाएं स्थापित हैं। इसे पंथ की मुख्य आध्यात्मिक पीठ के रूप में जाना जाता है।',
    photoUrl: '/src/assets/images/regenerated_image_1782734868024.png',
    contact: '+91 9403986655',
    darshanTimings: 'सुबह ५:०० बजे से रात ९:३० बजे तक',
    latitude: 21.2333,
    longitude: 77.6833
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
    longitude: 74.9667
  },
  {
    id: 't_paithan',
    name: 'श्री कृष्ण मंदिर, पैठण (Shree Krishna Mandir Paithan)',
    nameEn: 'Shree Krishna Mandir Paithan',
    type: 'temple',
    location: 'पैठण (छत्रपति संभाजीनगर जिला, महाराष्ट्र)',
    description: 'ऐतिहासिक पैठण नगरी में गोदावरी के सुरम्य तट पर स्थित मंदिर। यहाँ चक्रधर स्वामी के पावन चरणकमलों के स्पर्श से पवित्र कई स्थान हैं। तीर्थयात्रियों के लिए आवास और भोजन की उत्तम व्यवस्था है।',
    history: 'गोदावरी की पावन रेत पर चक्रधर स्वामी जी के कीर्तन और उपदेशों का साक्षी। यहाँ का प्राचीन घाट और मंदिर श्रद्धा के प्रमुख केंद्र हैं।',
    photoUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600&auto=format&fit=crop',
    contact: '+91 9403986655',
    darshanTimings: 'सुबह ६:०० बजे से रात ८:३० बजे तक',
    latitude: 19.4833,
    longitude: 75.3833
  }
];

export const initialEvents: EventKaryakram[] = [
  {
    id: 'ev_1',
    title: 'श्री श्रीकृष्ण जयंती महोत्सव (Krishnajanma Utsav)',
    date: '२०२६-०९-०३',
    type: 'utsav',
    location: 'श्री क्षेत्र ऋद्धपूर धाम',
    description: 'पंचकृष्ण अवतारों में से प्रमुख भगवान श्रीकृष्ण की पावन जन्मोत्सव के अवसर पर विशेष पूजा, कीर्तन, भजन संध्या और महाप्रसाद का आयोजन। देशभर से लाखों श्रद्धालुओं के आगमन की संभावना है।',
    contact: 'व्यवस्थापक समिति: ९८३२१००००१'
  },
  {
    id: 'ev_2',
    title: 'श्री चक्रधर स्वामी अवतार दिनोत्सव',
    date: '२०२६-०८-२७',
    type: 'utsav',
    location: 'डोमेग्राम आश्रम',
    description: 'पंथ के संस्थापक सर्वज्ञ श्री चक्रधर स्वामी महाराज के प्राकट्य दिवस पर विशाल शोभायात्रा, ग्रंथ वाचन, और धार्मिक सभा का भव्य आयोजन।',
    contact: 'आश्रम कार्यालय: ९११२२३३४४५'
  },
  {
    id: 'ev_3',
    title: 'चातुर्मास प्रवचनमाला एवं कीर्तन सत्र',
    date: '२०२६-०७-१०',
    type: 'kirtan',
    location: 'पैठण कृष्ण मंदिर',
    description: 'चार महीनों तक चलने वाली ज्ञान सत्र की कथा श्रृंखला। इसमें विभिन्न शास्त्री व विद्वान महानुभाव धर्म के गूढ़ रहस्यों तथा सूत्रपाठ पर व्याख्यान करेंगे।',
    contact: 'आयोजक: ९८२३४५६७१२'
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
