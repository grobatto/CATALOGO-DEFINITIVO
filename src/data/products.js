// Premium Barrios Catalogue - Retail & Wholesale System
// Category System: E (1% Extra/Museum), A (9% Premium), B (20% Superior), C (30% Wholesale), D (40% Wholesale Basic)

export const products = [
  // ===== CATEGORY E: MUSEUM GRADE (1%) - Retail Only =====
  {
    id: 'cosmic-twilight-cathedral-001',
    creativeName: 'Cosmic Twilight Cathedral',
    technicalName: 'Cathedral Geode - Museum Grade',
    category: 'E',
    grade: 'extra',
    type: 'geodes',
    market: 'retail',
    price: 8500,
    priceDisplay: '$8,500 USD',
    badge: 'Museum Grade',
    images: [
      '/images/bases-metal/Photoroom_20250624_114718.png',
      '/images/bases-metal/Photoroom_20250624_114811.png',
      '/images/bases-metal/Photoroom_20250624_114901.png'
    ],
    dimensions: {
      height: '58 cm',
      width: '40 cm',
      depth: '35 cm',
      weight: '32 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'The crown jewel of our collection. An extraordinary cathedral geode with museum-quality crystal formations and exceptional depth. Features cosmic purple hues that seem to capture twilight itself.',
      es: 'La joya de nuestra colección. Una geoda catedral extraordinaria con formaciones cristalinas de calidad museo y profundidad excepcional. Presenta tonos púrpura cósmicos que parecen capturar el crepúsculo mismo.',
      pt: 'A joia da coroa da nossa coleção. Um geodo catedral extraordinário com formações cristalinas de qualidade de museu e profundidade excepcional. Apresenta tons roxos cósmicos que parecem capturar o próprio crepúsculo.',
      zh: '我们收藏的皇冠明珠。具有博物馆级晶体形成和卓越深度的非凡大教堂晶洞。呈现宇宙紫色调，似乎捕捉了暮光本身。',
      ar: 'جوهرة تاج مجموعتنا. جيود كاتدرائية استثنائية مع تشكيلات بلورية بجودة المتحف وعمق استثنائي. تتميز بألوان أرجوانية كونية تبدو وكأنها تلتقط الشفق نفسه.',
      hi: 'हमारे संग्रह का मुकुट रत्न। संग्रहालय-गुणवत्ता क्रिस्टल संरचनाओं और असाधारण गहराई के साथ एक असाधारण कैथेड्रल जियोड। ब्रह्मांडीय बैंगनी रंगों की विशेषता है जो गोधूलि को ही पकड़ने लगते हैं।'
    },
    featured: true
  },

  // ===== CATEGORY A: PREMIUM (9%) - Retail Only =====
  {
    id: 'violet-storm-cathedral-002',
    creativeName: 'Violet Storm Cathedral',
    technicalName: 'Cathedral Geode - Deep Violet Premium',
    category: 'A',
    grade: 'premium',
    type: 'geodes',
    market: 'retail',
    price: 5200,
    priceDisplay: '$5,200 USD',
    badge: 'Premium',
    images: [
      '/images/categoria-a/IMG_4090.png',
      '/images/categoria-a/IMG_4091.png'
    ],
    dimensions: {
      height: '52 cm',
      width: '35 cm',
      depth: '30 cm',
      weight: '26 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'An exceptional cathedral formation featuring intense violet hues reminiscent of a powerful storm. Dramatic crystal formations create an almost electric presence.',
      es: 'Una formación catedral excepcional con tonos violetas intensos que recuerdan una tormenta poderosa. Formaciones cristalinas dramáticas crean una presencia casi eléctrica.',
      pt: 'Uma formação catedral excepcional apresentando tons violetas intensos que lembram uma tempestade poderosa. Formações cristalinas dramáticas criam uma presença quase elétrica.',
      zh: '一个特殊的大教堂形成，具有强烈的紫罗兰色调，让人想起强大的风暴。戏剧性的晶体形成创造了几乎电力般的存在。',
      ar: 'تشكيل كاتدرائية استثنائية تتميز بدرجات بنفسجية مكثفة تذكرنا بعاصفة قوية. تخلق التشكيلات البلورية الدرامية وجودًا كهربائيًا تقريبًا.',
      hi: 'एक असाधारण कैथेड्रल संरचना जिसमें तीव्र बैंगनी रंग हैं जो एक शक्तिशाली तूफान की याद दिलाते हैं। नाटकीय क्रिस्टल संरचनाएं लगभग विद्युत उपस्थिति बनाती हैं।'
    },
    featured: true
  },
  {
    id: 'galaxy-sugar-cathedral-003',
    creativeName: 'Galaxy Sugar Cathedral',
    technicalName: 'Cathedral Geode - Crystalline Premium',
    category: 'A',
    grade: 'premium',
    type: 'geodes',
    market: 'retail',
    price: 4850,
    priceDisplay: '$4,850 USD',
    badge: 'Premium',
    images: [
      '/images/categoria-a/IMG_4093.png',
      '/images/categoria-a/IMG_4094.png'
    ],
    dimensions: {
      height: '48 cm',
      width: '32 cm',
      depth: '28 cm',
      weight: '22 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Sparkling crystalline formations resemble sugar crystals scattered across a galaxy. Exceptional clarity and royal purple coloration.',
      es: 'Formaciones cristalinas brillantes se asemejan a cristales de azúcar dispersos en una galaxia. Claridad excepcional y coloración púrpura real.',
      pt: 'Formações cristalinas brilhantes se assemelham a cristais de açúcar espalhados por uma galáxia. Clareza excepcional e coloração roxa real.',
      zh: '闪闪发光的晶体形成类似于散落在银河系中的糖晶体。卓越的清晰度和皇家紫色。',
      ar: 'تشبه التشكيلات البلورية المتلألئة بلورات السكر المنتشرة عبر المجرة. وضوح استثنائي ولون أرجواني ملكي.',
      hi: 'चमकदार क्रिस्टलीय संरचनाएं एक आकाशगंगा में बिखरे चीनी क्रिस्टल से मिलती जुलती हैं। असाधारण स्पष्टता और शाही बैंगनी रंग।'
    },
    featured: true
  },
  {
    id: 'royal-cascade-cathedral-004',
    creativeName: 'Royal Cascade Cathedral',
    technicalName: 'Cathedral Geode - Violet Premium',
    category: 'A',
    grade: 'premium',
    type: 'geodes',
    market: 'retail',
    price: 5500,
    priceDisplay: '$5,500 USD',
    badge: 'Premium',
    images: [
      '/images/categoria-a/IMG_4095.png',
      '/images/categoria-a/IMG_4096.png'
    ],
    dimensions: {
      height: '50 cm',
      width: '34 cm',
      depth: '29 cm',
      weight: '24 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Magnificent cascading crystal formations in royal violet. Each layer reveals deeper beauty, like a frozen waterfall of amethyst.',
      es: 'Magníficas formaciones cristalinas en cascada en violeta real. Cada capa revela una belleza más profunda, como una cascada congelada de amatista.',
      pt: 'Magníficas formações cristalinas em cascata em violeta real. Cada camada revela beleza mais profunda, como uma cachoeira congelada de ametista.',
      zh: '壮丽的皇家紫罗兰级联晶体形成。每一层都揭示了更深的美，就像紫水晶的冰冻瀑布。',
      ar: 'تشكيلات بلورية متتالية رائعة بالبنفسجي الملكي. تكشف كل طبقة عن جمال أعمق، مثل شلال متجمد من الجمشت.',
      hi: 'शाही बैंगनी में शानदार कैस्केडिंग क्रिस्टल संरचनाएं। प्रत्येक परत गहरी सुंदरता को प्रकट करती है, जैसे नीलम का जमे हुए झरना।'
    },
    featured: true
  },

  // Category A - Towers
  {
    id: 'midnight-dreams-tower-005',
    creativeName: 'Midnight Dreams Tower',
    technicalName: 'Amethyst Tower - Premium Vertical',
    category: 'A',
    grade: 'premium',
    type: 'towers',
    market: 'retail',
    price: 3200,
    priceDisplay: '$3,200 USD',
    badge: 'Premium',
    images: [
      '/images/categoria-a/IMG_4097.png',
      '/images/categoria-a/IMG_4098.png'
    ],
    dimensions: {
      height: '70 cm',
      width: '20 cm',
      depth: '16 cm',
      weight: '14 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Soaring tower formation with graceful elegance. Deep midnight purple crystals create a dreamlike vertical masterpiece.',
      es: 'Formación de torre elevada con elegancia graciosa. Cristales púrpura medianoche profundo crean una obra maestra vertical de ensueño.',
      pt: 'Formação de torre elevada com elegância graciosa. Cristais roxos de meia-noite profundos criam uma obra-prima vertical de sonho.',
      zh: '优雅的高耸塔形成。深邃的午夜紫色晶体创造了一个梦幻般的垂直杰作。',
      ar: 'تشكيل برج شاهق بأناقة رشيقة. تخلق البلورات الأرجوانية في منتصف الليل العميق تحفة فنية عمودية حالمة.',
      hi: 'सुंदर लालित्य के साथ ऊंचा टावर निर्माण। गहरे मध्यरात्रि बैंगनी क्रिस्टल एक सपने जैसा ऊर्ध्वाधर उत्कृष्ट कृति बनाते हैं।'
    },
    featured: false
  },

  // Category A - Spheres
  {
    id: 'amethyst-nebula-sphere-006',
    creativeName: 'Amethyst Nebula Sphere',
    technicalName: 'Amethyst Sphere - Premium Large',
    category: 'A',
    grade: 'premium',
    type: 'spheres',
    market: 'retail',
    price: 2100,
    priceDisplay: '$2,100 USD',
    badge: 'Premium',
    images: [
      '/images/categoria-a/IMG_4099.png',
      '/images/categoria-a/IMG_4100.png'
    ],
    dimensions: {
      height: '25 cm',
      width: '25 cm',
      depth: '25 cm',
      weight: '10 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Perfectly polished sphere revealing nebula-like crystal patterns. Deep purple swirls create cosmic beauty in your hands.',
      es: 'Esfera perfectamente pulida que revela patrones cristalinos similares a nebulosas. Remolinos púrpura profundos crean belleza cósmica en tus manos.',
      pt: 'Esfera perfeitamente polida revelando padrões cristalinos semelhantes a nebulosas. Redemoinhos roxos profundos criam beleza cósmica em suas mãos.',
      zh: '完美抛光的球体揭示了类似星云的晶体图案。深紫色漩涡在您手中创造宇宙之美。',
      ar: 'كرة مصقولة تمامًا تكشف عن أنماط بلورية تشبه السديم. تخلق الدوامات الأرجوانية العميقة جمالًا كونيًا في يديك.',
      hi: 'पूरी तरह से पॉलिश किया हुआ गोला नेबुला जैसे क्रिस्टल पैटर्न को प्रकट करता है। गहरे बैंगनी भंवर आपके हाथों में ब्रह्मांडीय सुंदरता बनाते हैं।'
    },
    featured: false
  },

  // ===== CATEGORY B: SUPERIOR (20%) - Retail Only =====
  {
    id: 'purple-haze-cut-007',
    creativeName: 'Purple Haze Cut',
    technicalName: 'Cut Geode - Superior Grade',
    category: 'B',
    grade: 'superior',
    type: 'cuts',
    market: 'retail',
    price: 2750,
    priceDisplay: '$2,750 USD',
    badge: 'Superior',
    images: [
      '/images/categoria-b/IMG_4105.png'
    ],
    dimensions: {
      height: '42 cm',
      width: '28 cm',
      depth: '22 cm',
      weight: '13 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Precision cut reveals cathedral formations shrouded in purple haze. Dense crystal clusters create mesmerizing depth.',
      es: 'El corte de precisión revela formaciones de catedral envueltas en neblina púrpura. Cúmulos de cristales densos crean una profundidad hipnotizante.',
      pt: 'O corte de precisão revela formações de catedral envoltas em neblina roxa. Aglomerados de cristais densos criam profundidade hipnotizante.',
      zh: '精密切割揭示了笼罩在紫色薄雾中的大教堂形成。密集的晶簇创造迷人的深度。',
      ar: 'يكشف القطع الدقيق عن تشكيلات الكاتدرائية المحاطة بالضباب الأرجواني. تخلق مجموعات البلورات الكثيفة عمقًا ساحرًا.',
      hi: 'सटीक कट बैंगनी धुंध में घिरे कैथेड्रल संरचनाओं को प्रकट करता है। घने क्रिस्टल क्लस्टर मंत्रमुग्ध करने वाली गहराई बनाते हैं।'
    },
    featured: false
  },
  {
    id: 'twilight-cluster-008',
    creativeName: 'Twilight Cluster',
    technicalName: 'Crystal Cluster - Superior Deep Purple',
    category: 'B',
    grade: 'superior',
    type: 'cuts',
    market: 'retail',
    price: 2400,
    priceDisplay: '$2,400 USD',
    badge: 'Superior',
    images: [
      '/images/categoria-b/IMG_4106.png'
    ],
    dimensions: {
      height: '38 cm',
      width: '25 cm',
      depth: '20 cm',
      weight: '11 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Dense cluster formation capturing the essence of twilight. Rich purple crystals with exceptional clarity and depth.',
      es: 'Formación de cúmulo denso que captura la esencia del crepúsculo. Cristales púrpura ricos con claridad y profundidad excepcionales.',
      pt: 'Formação de aglomerado denso capturando a essência do crepúsculo. Cristais roxos ricos com clareza e profundidade excepcionais.',
      zh: '密集的簇形成捕捉黄昏的本质。丰富的紫色晶体具有卓越的清晰度和深度。',
      ar: 'تشكيل كتلة كثيفة يلتقط جوهر الشفق. بلورات أرجوانية غنية بوضوح وعمق استثنائيين.',
      hi: 'गोधूलि के सार को पकड़ने वाला घना क्लस्टर निर्माण। असाधारण स्पष्टता और गहराई के साथ समृद्ध बैंगनी क्रिस्टल।'
    },
    featured: false
  },
  {
    id: 'majestic-ascent-tower-009',
    creativeName: 'Majestic Ascent Tower',
    technicalName: 'Crystal Tower - Superior Vertical',
    category: 'B',
    grade: 'superior',
    type: 'towers',
    market: 'retail',
    price: 2850,
    priceDisplay: '$2,850 USD',
    badge: 'Superior',
    images: [
      '/images/categoria-b/IMG_4107.png'
    ],
    dimensions: {
      height: '65 cm',
      width: '18 cm',
      depth: '15 cm',
      weight: '12 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Majestic vertical formation with stunning crystal clarity. A statement piece embodying upward energy and natural beauty.',
      es: 'Formación vertical majestuosa con claridad cristalina impresionante. Una pieza destacada que encarna la energía ascendente y la belleza natural.',
      pt: 'Formação vertical majestosa com clareza cristalina impressionante. Uma peça de destaque incorporando energia ascendente e beleza natural.',
      zh: '雄伟的垂直形成，具有令人惊叹的晶体清晰度。体现向上能量和自然美的陈列品。',
      ar: 'تشكيل عمودي مهيب بوضوح بلوري مذهل. قطعة بيان تجسد الطاقة الصاعدة والجمال الطبيعي.',
      hi: 'शानदार क्रिस्टल स्पष्टता के साथ राजसी ऊर्ध्वाधर निर्माण। ऊपर की ओर ऊर्जा और प्राकृतिक सुंदरता को मूर्त रूप देने वाला एक वक्तव्य टुकड़ा।'
    },
    featured: false
  },
  {
    id: 'celestial-sphere-010',
    creativeName: 'Celestial Sphere',
    technicalName: 'Amethyst Sphere - Superior Grade',
    category: 'B',
    grade: 'superior',
    type: 'spheres',
    market: 'retail',
    price: 1850,
    priceDisplay: '$1,850 USD',
    badge: 'Superior',
    images: [
      '/images/categoria-b/IMG_4108.png'
    ],
    dimensions: {
      height: '22 cm',
      width: '22 cm',
      depth: '22 cm',
      weight: '8 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Polished sphere revealing celestial purple patterns. Natural banding creates a window into Earth\'s ancient formations.',
      es: 'Esfera pulida que revela patrones púrpura celestiales. El bandeado natural crea una ventana a las formaciones antiguas de la Tierra.',
      pt: 'Esfera polida revelando padrões roxos celestiais. O bandeamento natural cria uma janela para as formações antigas da Terra.',
      zh: '抛光球体揭示天体紫色图案。天然条纹创造了一个窗口，可以看到地球古老的地层。',
      ar: 'كرة مصقولة تكشف عن أنماط أرجوانية سماوية. يخلق النطاق الطبيعي نافذة على التشكيلات القديمة للأرض.',
      hi: 'पॉलिश किया हुआ गोला आकाशीय बैंगनी पैटर्न को प्रकट करता है। प्राकृतिक बैंडिंग पृथ्वी की प्राचीन संरचनाओं में एक खिड़की बनाती है।'
    },
    featured: false
  },
  {
    id: 'mystic-pyramid-011',
    creativeName: 'Mystic Pyramid',
    technicalName: 'Amethyst Pyramid - Superior Large',
    category: 'B',
    grade: 'superior',
    type: 'pyramids',
    market: 'retail',
    price: 1950,
    priceDisplay: '$1,950 USD',
    badge: 'Superior',
    images: [
      '/images/categoria-b/IMG_4109.png'
    ],
    dimensions: {
      height: '32 cm',
      width: '35 cm',
      depth: '35 cm',
      weight: '18 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Geometrically perfect pyramid radiating mystical energy. Premium crystal quality with vibrant purple hues throughout.',
      es: 'Pirámide geométricamente perfecta que irradia energía mística. Calidad cristalina premium con tonos púrpura vibrantes en todas partes.',
      pt: 'Pirâmide geometricamente perfeita irradiando energia mística. Qualidade cristalina premium com tons roxos vibrantes por toda parte.',
      zh: '几何上完美的金字塔辐射神秘能量。优质晶体质量，整体呈现鲜艳的紫色色调。',
      ar: 'هرم هندسي مثالي يشع الطاقة الصوفية. جودة بلورية ممتازة مع درجات أرجوانية نابضة بالحياة في جميع الأنحاء.',
      hi: 'ज्यामितीय रूप से सही पिरामिड रहस्यमय ऊर्जा विकीर्ण करता है। प्रीमियम क्रिस्टल गुणवत्ता पूरे में जीवंत बैंगनी रंगों के साथ।'
    },
    featured: false
  },
  {
    id: 'purple-cathedral-classic-012',
    creativeName: 'Purple Cathedral Classic',
    technicalName: 'Cathedral Geode - Superior Form',
    category: 'B',
    grade: 'superior',
    type: 'geodes',
    market: 'retail',
    price: 4200,
    priceDisplay: '$4,200 USD',
    badge: 'Superior',
    images: [
      '/images/categoria-b/IMG_4110.png'
    ],
    dimensions: {
      height: '45 cm',
      width: '30 cm',
      depth: '26 cm',
      weight: '20 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Classic cathedral formation with stunning deep purple interior. Pristine white quartz accents create dramatic contrast.',
      es: 'Formación catedral clásica con interior púrpura profundo impresionante. Acentos de cuarzo blanco prístino crean un contraste dramático.',
      pt: 'Formação catedral clássica com interior roxo profundo impressionante. Acentos de quartzo branco imaculado criam contraste dramático.',
      zh: '经典的大教堂形成，内部呈现惊艳的深紫色。原始的白色石英装饰创造了戏剧性的对比。',
      ar: 'تشكيل كاتدرائية كلاسيكي بداخلية أرجوانية عميقة مذهلة. تخلق لمسات الكوارتز الأبيض النقي تباينًا دراماتيكيًا.',
      hi: 'शानदार गहरे बैंगनी आंतरिक के साथ क्लासिक कैथेड्रल निर्माण। प्राचीन सफेद क्वार्ट्ज लहजे नाटकीय विपरीतता बनाते हैं।'
    },
    featured: false
  },

  // ===== CATEGORY C: WHOLESALE STANDARD (30%) =====
  {
    id: 'wholesale-lot-c-001',
    creativeName: 'Premium Collection Mix',
    technicalName: 'Wholesale Lot - Standard Grade Mix',
    category: 'C',
    grade: 'wholesale-standard',
    type: 'wholesale',
    market: 'wholesale',
    price: 420,
    priceDisplay: '$420 USD',
    badge: 'Wholesale Standard',
    images: [
      '/images/categoria-c/IMG_4113.png',
      '/images/categoria-c/IMG_4114.png',
      '/images/categoria-c/IMG_4115.png'
    ],
    dimensions: {
      pieces: 60,
      avgSize: '10-18 cm',
      totalWeight: '35 kg'
    },
    composition: {
      D: 40,
      C: 30,
      B: 20,
      A: 9,
      E: 1
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Standard wholesale lot containing 60 pieces with balanced grade distribution. Perfect for retailers looking for quality variety at competitive pricing.',
      es: 'Lote mayorista estándar que contiene 60 piezas con distribución equilibrada de grados. Perfecto para minoristas que buscan variedad de calidad a precios competitivos.',
      pt: 'Lote atacado padrão contendo 60 peças com distribuição equilibrada de graus. Perfeito para varejistas que procuram variedade de qualidade a preços competitivos.',
      zh: '标准批发批次包含60件，具有平衡的等级分布。非常适合寻求具有竞争力价格的优质品种的零售商。',
      ar: 'دفعة جملة قياسية تحتوي على 60 قطعة مع توزيع متوازن للدرجات. مثالية لتجار التجزئة الذين يبحثون عن تنوع الجودة بأسعار تنافسية.',
      hi: 'संतुलित ग्रेड वितरण के साथ 60 टुकड़ों वाला मानक थोक लॉट। प्रतिस्पर्धी मूल्य निर्धारण पर गुणवत्ता विविधता की तलाश करने वाले खुदरा विक्रेताओं के लिए बिल्कुल सही।'
    },
    featured: false
  },
  {
    id: 'wholesale-lot-c-002',
    creativeName: 'Geode Assortment Pro',
    technicalName: 'Wholesale Lot - Cathedral Mix',
    category: 'C',
    grade: 'wholesale-standard',
    type: 'wholesale',
    market: 'wholesale',
    price: 385,
    priceDisplay: '$385 USD',
    badge: 'Wholesale Standard',
    images: [
      '/images/categoria-c/IMG_4116.png',
      '/images/categoria-c/IMG_4117.png'
    ],
    dimensions: {
      pieces: 55,
      avgSize: '9-16 cm',
      totalWeight: '30 kg'
    },
    composition: {
      D: 40,
      C: 30,
      B: 20,
      A: 9,
      E: 1
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Cathedral geode focused lot with 55 quality pieces. Excellent for specialty shops and boutiques seeking unique inventory.',
      es: 'Lote enfocado en geodas catedrales con 55 piezas de calidad. Excelente para tiendas especializadas y boutiques que buscan inventario único.',
      pt: 'Lote focado em geodos catedral com 55 peças de qualidade. Excelente para lojas especializadas e boutiques que buscam estoque único.',
      zh: '专注于大教堂晶洞的批次，包含55件优质作品。非常适合寻求独特库存的专业商店和精品店。',
      ar: 'دفعة تركز على جيود الكاتدرائية مع 55 قطعة عالية الجودة. ممتازة للمتاجر المتخصصة والمتاجر الصغيرة التي تبحث عن مخزون فريد.',
      hi: '55 गुणवत्ता टुकड़ों के साथ कैथेड्रल जियोड केंद्रित लॉट। अद्वितीय इन्वेंटरी की तलाश करने वाले विशेष दुकानों और बुटीक के लिए उत्कृष्ट।'
    },
    featured: false
  },

  // ===== CATEGORY D: WHOLESALE BASIC (40%) =====
  {
    id: 'wholesale-lot-d-001',
    creativeName: 'Starter Collection Mix',
    technicalName: 'Wholesale Lot - Basic Grade Mix',
    category: 'D',
    grade: 'wholesale-basic',
    type: 'wholesale',
    market: 'wholesale',
    price: 175,
    priceDisplay: '$175 USD',
    badge: 'Wholesale Basic',
    images: [
      '/images/bultos/Feria 2.png'
    ],
    dimensions: {
      pieces: 50,
      avgSize: '8-15 cm',
      totalWeight: '25 kg'
    },
    composition: {
      D: 40,
      C: 30,
      B: 20,
      A: 9,
      E: 1
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Entry-level wholesale lot perfect for new retailers. 50 pieces with standard grade distribution at the best price point.',
      es: 'Lote mayorista de nivel de entrada perfecto para nuevos minoristas. 50 piezas con distribución de grado estándar al mejor precio.',
      pt: 'Lote atacado de nível de entrada perfeito para novos varejistas. 50 peças com distribuição de grau padrão ao melhor preço.',
      zh: '入门级批发批次，非常适合新零售商。50件，标准等级分布，价格最优。',
      ar: 'دفعة جملة مستوى الدخول مثالية لتجار التجزئة الجدد. 50 قطعة مع توزيع درجة قياسية بأفضل نقطة سعر.',
      hi: 'नए खुदरा विक्रेताओं के लिए बिल्कुल सही प्रवेश स्तर थोक लॉट। सर्वोत्तम मूल्य बिंदु पर मानक ग्रेड वितरण के साथ 50 टुकड़े।'
    },
    featured: false
  },
  {
    id: 'wholesale-lot-d-002',
    creativeName: 'Essential Amethyst Pack',
    technicalName: 'Wholesale Lot - Basic Assortment',
    category: 'D',
    grade: 'wholesale-basic',
    type: 'wholesale',
    market: 'wholesale',
    price: 150,
    priceDisplay: '$150 USD',
    badge: 'Wholesale Basic',
    images: [
      '/images/bultos/WhatsApp Image 2025-02-26 at 1.20.54 PM.jpeg'
    ],
    dimensions: {
      pieces: 45,
      avgSize: '7-14 cm',
      totalWeight: '22 kg'
    },
    composition: {
      D: 40,
      C: 30,
      B: 20,
      A: 9,
      E: 1
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Essential pack for volume sellers. 45 pieces offering excellent value for markets and fairs.',
      es: 'Paquete esencial para vendedores de volumen. 45 piezas que ofrecen excelente valor para mercados y ferias.',
      pt: 'Pacote essencial para vendedores de volume. 45 peças oferecendo excelente valor para mercados e feiras.',
      zh: '批量销售商的基本包装。45件，为市场和展会提供卓越价值。',
      ar: 'حزمة أساسية لبائعي الحجم. 45 قطعة تقدم قيمة ممتازة للأسواق والمعارض.',
      hi: 'वॉल्यूम विक्रेताओं के लिए आवश्यक पैक। 45 टुकड़े बाजारों और मेलों के लिए उत्कृष्ट मूल्य प्रदान करते हैं।'
    },
    featured: false
  },

  // Additional Category A Products
  {
    id: 'crystal-sanctuary-geode-013',
    creativeName: 'Crystal Sanctuary',
    technicalName: 'Cathedral Geode - Premium Sanctuary',
    category: 'A',
    grade: 'premium',
    type: 'geodes',
    market: 'retail',
    price: 4450,
    priceDisplay: '$4,450 USD',
    badge: 'Premium',
    images: [
      '/images/categoria-a/IMG_4101.png'
    ],
    dimensions: {
      height: '46 cm',
      width: '31 cm',
      depth: '27 cm',
      weight: '21 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'A sacred cave of purple crystals. This cathedral formation creates a natural sanctuary of stunning amethyst beauty.',
      es: 'Una cueva sagrada de cristales púrpura. Esta formación catedral crea un santuario natural de impresionante belleza de amatista.',
      pt: 'Uma caverna sagrada de cristais roxos. Esta formação catedral cria um santuário natural de beleza ametista impressionante.',
      zh: '紫色晶体的神圣洞穴。这个大教堂形成创造了令人惊叹的紫水晶美丽的自然保护区。',
      ar: 'كهف مقدس من البلورات الأرجوانية. يخلق هذا التشكيل الكاتدرائي ملاذًا طبيعيًا من الجمال الجمشت المذهل.',
      hi: 'बैंगनी क्रिस्टल की एक पवित्र गुफा। यह कैथेड्रल निर्माण आश्चर्यजनक नीलम सुंदरता का एक प्राकृतिक अभयारण्य बनाता है।'
    },
    featured: false
  },

  // Additional Category B Products  
  {
    id: 'ancient-wisdom-pyramid-014',
    creativeName: 'Ancient Wisdom Pyramid',
    technicalName: 'Amethyst Pyramid - Superior Classic',
    category: 'B',
    grade: 'superior',
    type: 'pyramids',
    market: 'retail',
    price: 1650,
    priceDisplay: '$1,650 USD',
    badge: 'Superior',
    images: [
      '/images/categoria-b/IMG_4111.png'
    ],
    dimensions: {
      height: '28 cm',
      width: '30 cm',
      depth: '30 cm',
      weight: '15 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Geometrically perfect pyramid channeling ancient energy. Deep purple crystals radiate timeless wisdom.',
      es: 'Pirámide geométricamente perfecta que canaliza energía ancestral. Cristales púrpura profundos irradian sabiduría atemporal.',
      pt: 'Pirâmide geometricamente perfeita canalizando energia antiga. Cristais roxos profundos irradiam sabedoria atemporal.',
      zh: '几何上完美的金字塔引导古老能量。深紫色晶体辐射永恒智慧。',
      ar: 'هرم هندسي مثالي يوجه الطاقة القديمة. تشع البلورات الأرجوانية العميقة بالحكمة الخالدة.',
      hi: 'ज्यामितीय रूप से सही पिरामिड प्राचीन ऊर्जा को चैनलाइज़ करता है। गहरे बैंगनी क्रिस्टल कालातीत ज्ञान विकीर्ण करते हैं।'
    },
    featured: false
  },
  {
    id: 'starlight-sphere-015',
    creativeName: 'Starlight Meditation Sphere',
    technicalName: 'Amethyst Sphere - Superior Polish',
    category: 'B',
    grade: 'superior',
    type: 'spheres',
    market: 'retail',
    price: 1750,
    priceDisplay: '$1,750 USD',
    badge: 'Superior',
    images: [
      '/images/categoria-b/IMG_4112.png'
    ],
    dimensions: {
      height: '20 cm',
      width: '20 cm',
      depth: '20 cm',
      weight: '7 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Polished to perfection, this sphere captures starlight within purple crystals. Ideal for meditation and energy work.',
      es: 'Pulida a la perfección, esta esfera captura la luz de las estrellas dentro de cristales púrpura. Ideal para meditación y trabajo energético.',
      pt: 'Polida à perfeição, esta esfera captura a luz das estrelas dentro de cristais roxos. Ideal para meditação e trabalho energético.',
      zh: '抛光至完美，这个球体在紫色晶体中捕捉星光。非常适合冥想和能量工作。',
      ar: 'مصقولة للكمال، تلتقط هذه الكرة ضوء النجوم داخل البلورات الأرجوانية. مثالية للتأمل والعمل بالطاقة.',
      hi: 'पूर्णता के लिए पॉलिश किया गया, यह गोला बैंगनी क्रिस्टल के भीतर तारों की रोशनी को पकड़ता है। ध्यान और ऊर्जा कार्य के लिए आदर्श।'
    },
    featured: false
  },
  {
    id: 'purple-pinnacle-tower-016',
    creativeName: 'Purple Pinnacle',
    technicalName: 'Crystal Tower - Superior Elite',
    category: 'B',
    grade: 'superior',
    type: 'towers',
    market: 'retail',
    price: 2650,
    priceDisplay: '$2,650 USD',
    badge: 'Superior',
    images: [
      '/images/categoria-b/IMG_4105.png'
    ],
    dimensions: {
      height: '62 cm',
      width: '17 cm',
      depth: '14 cm',
      weight: '11 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Reaching for the sky, this elegant tower showcases nature\'s vertical artistry in rich purple tones.',
      es: 'Alcanzando el cielo, esta torre elegante muestra el arte vertical de la naturaleza en tonos púrpura ricos.',
      pt: 'Alcançando o céu, esta torre elegante mostra a arte vertical da natureza em tons roxos ricos.',
      zh: '伸向天空，这座优雅的塔以丰富的紫色调展示了大自然的垂直艺术。',
      ar: 'يصل إلى السماء، يعرض هذا البرج الأنيق فن الطبيعة الرأسي بدرجات أرجوانية غنية.',
      hi: 'आकाश की ओर पहुंचते हुए, यह सुरुचिपूर्ण टावर समृद्ध बैंगनी टोन में प्रकृति की ऊर्ध्वाधर कलात्मकता को प्रदर्शित करता है।'
    },
    featured: false
  },
  {
    id: 'crystal-cavern-geode-017',
    creativeName: 'Crystal Cavern',
    technicalName: 'Cathedral Geode - Superior Formation',
    category: 'B',
    grade: 'superior',
    type: 'geodes',
    market: 'retail',
    price: 3850,
    priceDisplay: '$3,850 USD',
    badge: 'Superior',
    images: [
      '/images/categoria-b/IMG_4106.png'
    ],
    dimensions: {
      height: '42 cm',
      width: '28 cm',
      depth: '25 cm',
      weight: '18 kg'
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Enter a world of crystalline wonder. Classic cathedral formation with brilliant purple crystals throughout.',
      es: 'Entra en un mundo de maravilla cristalina. Formación catedral clásica con brillantes cristales púrpura en todo.',
      pt: 'Entre em um mundo de maravilha cristalina. Formação catedral clássica com cristais roxos brilhantes por toda parte.',
      zh: '进入一个结晶奇迹的世界。经典大教堂形成，整体呈现明亮的紫色晶体。',
      ar: 'ادخل عالمًا من العجائب البلورية. تشكيل كاتدرائية كلاسيكي مع بلورات أرجوانية لامعة في جميع الأنحاء.',
      hi: 'क्रिस्टलीय आश्चर्य की दुनिया में प्रवेश करें। पूरे शानदार बैंगनी क्रिस्टल के साथ क्लासिक कैथेड्रल निर्माण।'
    },
    featured: false
  },

  // Additional Category C - Wholesale
  {
    id: 'wholesale-lot-c-003',
    creativeName: 'Tower Collection Pro',
    technicalName: 'Wholesale Lot - Tower Mix',
    category: 'C',
    grade: 'wholesale-standard',
    type: 'wholesale',
    market: 'wholesale',
    price: 395,
    priceDisplay: '$395 USD',
    badge: 'Wholesale Standard',
    images: [
      '/images/categoria-c/IMG_4118.png',
      '/images/categoria-c/IMG_4119.png'
    ],
    dimensions: {
      pieces: 50,
      avgSize: '15-25 cm',
      totalWeight: '28 kg'
    },
    composition: {
      D: 40,
      C: 30,
      B: 20,
      A: 9,
      E: 1
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Vertical formations focused lot with 50 quality tower pieces. Perfect for retailers specializing in crystal towers.',
      es: 'Lote enfocado en formaciones verticales con 50 torres de calidad. Perfecto para minoristas especializados en torres de cristal.',
      pt: 'Lote focado em formações verticais com 50 torres de qualidade. Perfeito para varejistas especializados em torres de cristal.',
      zh: '专注于垂直形成的批次，包含50件优质塔。非常适合专门从事水晶塔的零售商。',
      ar: 'دفعة تركز على التشكيلات الرأسية مع 50 قطعة برج عالية الجودة. مثالية لتجار التجزئة المتخصصين في أبراج الكريستال.',
      hi: '50 गुणवत्ता टावर टुकड़ों के साथ ऊर्ध्वाधर संरचनाओं पर केंद्रित लॉट। क्रिस्टल टावरों में विशेषज्ञता वाले खुदरा विक्रेताओं के लिए बिल्कुल सही।'
    },
    featured: false
  },
  {
    id: 'wholesale-lot-c-004',
    creativeName: 'Sphere & Pyramid Mix',
    technicalName: 'Wholesale Lot - Polished Assortment',
    category: 'C',
    grade: 'wholesale-standard',
    type: 'wholesale',
    market: 'wholesale',
    price: 410,
    priceDisplay: '$410 USD',
    badge: 'Wholesale Standard',
    images: [
      '/images/categoria-c/IMG_4121.png',
      '/images/categoria-c/IMG_4122.png',
      '/images/categoria-c/IMG_4123.png'
    ],
    dimensions: {
      pieces: 58,
      avgSize: '12-20 cm',
      totalWeight: '32 kg'
    },
    composition: {
      D: 40,
      C: 30,
      B: 20,
      A: 9,
      E: 1
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Mixed lot of polished spheres and pyramids. 58 pieces offering versatile inventory for diverse customer needs.',
      es: 'Lote mixto de esferas y pirámides pulidas. 58 piezas que ofrecen inventario versátil para diversas necesidades de clientes.',
      pt: 'Lote misto de esferas e pirâmides polidas. 58 peças oferecendo estoque versátil para diversas necessidades de clientes.',
      zh: '抛光球体和金字塔的混合批次。58件，为不同客户需求提供多样化库存。',
      ar: 'دفعة مختلطة من الكرات والأهرامات المصقولة. 58 قطعة تقدم مخزونًا متنوعًا لاحتياجات العملاء المتنوعة.',
      hi: 'पॉलिश किए गए गोले और पिरामिड का मिश्रित लॉट। विविध ग्राहक आवश्यकताओं के लिए बहुमुखी इन्वेंटरी की पेशकश करने वाले 58 टुकड़े।'
    },
    featured: false
  },

  // Additional Category D - Wholesale
  {
    id: 'wholesale-lot-d-003',
    creativeName: 'Market Ready Pack',
    technicalName: 'Wholesale Lot - Basic Market Mix',
    category: 'D',
    grade: 'wholesale-basic',
    type: 'wholesale',
    market: 'wholesale',
    price: 165,
    priceDisplay: '$165 USD',
    badge: 'Wholesale Basic',
    images: [
      '/images/bultos/Feria 2.png'
    ],
    dimensions: {
      pieces: 48,
      avgSize: '7-13 cm',
      totalWeight: '23 kg'
    },
    composition: {
      D: 40,
      C: 30,
      B: 20,
      A: 9,
      E: 1
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Budget-friendly lot perfect for market vendors. 48 pieces at competitive wholesale pricing.',
      es: 'Lote económico perfecto para vendedores de mercado. 48 piezas a precios mayoristas competitivos.',
      pt: 'Lote econômico perfeito para vendedores de mercado. 48 peças a preços atacadistas competitivos.',
      zh: '预算友好的批次，非常适合市场供应商。48件，批发价格具有竞争力。',
      ar: 'دفعة صديقة للميزانية مثالية لبائعي السوق. 48 قطعة بأسعار جملة تنافسية.',
      hi: 'बाजार विक्रेताओं के लिए बिल्कुल सही बजट-अनुकूल लॉट। प्रतिस्पर्धी थोक मूल्य पर 48 टुकड़े।'
    },
    featured: false
  },
  {
    id: 'wholesale-lot-d-004',
    creativeName: 'Festival Vendor Pack',
    technicalName: 'Wholesale Lot - Basic Festival Mix',
    category: 'D',
    grade: 'wholesale-basic',
    type: 'wholesale',
    market: 'wholesale',
    price: 145,
    priceDisplay: '$145 USD',
    badge: 'Wholesale Basic',
    images: [
      '/images/bultos/WhatsApp Image 2025-02-26 at 1.20.54 PM.jpeg'
    ],
    dimensions: {
      pieces: 42,
      avgSize: '6-12 cm',
      totalWeight: '20 kg'
    },
    composition: {
      D: 40,
      C: 30,
      B: 20,
      A: 9,
      E: 1
    },
    origin: 'Artigas, Uruguay',
    description: {
      en: 'Ideal starter pack for festival and fair vendors. 42 pieces with excellent profit margins.',
      es: 'Paquete inicial ideal para vendedores de festivales y ferias. 42 piezas con excelentes márgenes de ganancia.',
      pt: 'Pacote inicial ideal para vendedores de festivais e feiras. 42 peças com excelentes margens de lucro.',
      zh: '节日和展会供应商的理想入门包。42件，具有出色的利润率。',
      ar: 'حزمة بداية مثالية لبائعي المهرجانات والمعارض. 42 قطعة بهوامش ربح ممتازة.',
      hi: 'त्योहार और मेला विक्रेताओं के लिए आदर्श स्टार्टर पैक। उत्कृष्ट लाभ मार्जिन के साथ 42 टुकड़े।'
    },
    featured: false
  }
]

// Hero specimen for catalogue page
export const heroProduct = products[0] // Cosmic Twilight Cathedral

// Categories for filtering
export const categories = [
  { id: 'all', name: 'All' },
  { id: 'geodes', name: 'Geodes' },
  { id: 'towers', name: 'Towers' },
  { id: 'spheres', name: 'Spheres' },
  { id: 'pyramids', name: 'Pyramids' },
  { id: 'cuts', name: 'Cuts' }
]

// Grade categories
export const gradeCategories = {
  retail: ['E', 'A', 'B'],
  wholesale: ['C', 'D']
}

// Get products by market (retail/wholesale)
export const getProductsByMarket = (market) => {
  return products.filter(product => product.market === market)
}

// Get products by category and market
export const getProductsByCategoryAndMarket = (categoryId, market) => {
  let filtered = market ? products.filter(p => p.market === market) : products
  
  if (categoryId === 'all') return filtered
  return filtered.filter(product => product.type === categoryId)
}

// Get products by grade
export const getProductsByGrade = (grade) => {
  return products.filter(product => product.category === grade)
}

// Get single product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === id)
}

// Get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured)
}

// Legacy support - keep old function
export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') return products.filter(p => p.market === 'retail')
  return products.filter(product => product.type === categoryId && product.market === 'retail')
}
