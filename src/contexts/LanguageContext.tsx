import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.recipes': 'Recipes',
    'nav.contact': 'Contact',
    'header.getQuote': 'Get Quote',
    'header.tagline': 'Pure & Fresh, Premium Quality Spices & Blends',
    
    // Hero
    'hero.title': 'Authentic Indian Spices, Crafted for Every Kitchen',
    'hero.brand': 'Unnati Masale - Farm to Table Excellence',
    'hero.description': 'Experience the true essence of Indian cuisine with our premium quality spices, sourced directly from the finest farms across India.',
    'hero.cta': 'Explore Product',
    'hero.natural': '100%',
    'hero.naturalText': 'Natural & Pure',
    'hero.heritage': '2+',
    'hero.heritageText': 'Years Heritage',
    'hero.source': 'Farm',
    'hero.sourceText': 'Direct Source',
    
    // Newsletter
    'newsletter.title': 'Stay Updated with Unnati Masale',
    'newsletter.description': 'Get the latest recipes, cooking tips, and special offers delivered to your inbox',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.subscribe': 'Subscribe',
    
    // Contact
    'contact.title': 'Connect with Unnati Masale',
    'contact.quickInquiry': 'Quick Inquiry',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone Number',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'How can we help you?',
    'contact.send': 'Send Message',
    'contact.followUs': 'Follow Us',
    'contact.getInTouch': 'Get in Touch',
    'contact.address': 'Address',
  },
  hi: {
    // Header
    'nav.home': 'होम',
    'nav.products': 'उत्पाद',
    'nav.about': 'हमारे बारे में',
    'nav.recipes': 'व्यंजन',
    'nav.contact': 'संपर्क',
    'header.getQuote': 'कोटेशन पाएं',
    'header.tagline': 'प्रीमियम गुणवत्ता मसाले',
    
    // Hero
    'hero.title': 'प्रामाणिक भारतीय मसाले, हर रसोई के लिए तैयार',
    'hero.brand': 'उन्नति मसाले - खेत से थाली तक उत्कृष्टता',
    'hero.description': 'भारत के बेहतरीन खेतों से सीधे प्राप्त हमारे प्रीमियम गुणवत्ता के मसालों के साथ भारतीय व्यंजनों का असली स्वाद अनुभव करें।',
    'hero.cta': 'उत्पाद देखें',
    'hero.natural': '100%',
    'hero.naturalText': 'प्राकृतिक और शुद्ध',
    'hero.heritage': '2+',
    'hero.heritageText': 'वर्षों की विरासत',
    'hero.source': 'खेत',
    'hero.sourceText': 'प्रत्यक्ष स्रोत',
    
    // Newsletter
    'newsletter.title': 'उन्नति मसाले के साथ जुड़े रहें',
    'newsletter.description': 'नवीनतम व्यंजन विधि, खाना पकाने की युक्तियाँ और विशेष ऑफ़र अपने इनबॉक्स में प्राप्त करें',
    'newsletter.placeholder': 'अपना ईमेल दर्ज करें',
    'newsletter.subscribe': 'सब्सक्राइब करें',
    
    // Contact
    'contact.title': 'उन्नति मसाले से जुड़ें',
    'contact.quickInquiry': 'त्वरित पूछताछ',
    'contact.firstName': 'पहला नाम',
    'contact.lastName': 'अंतिम नाम',
    'contact.email': 'ईमेल',
    'contact.phone': 'फोन नंबर',
    'contact.message': 'संदेश',
    'contact.messagePlaceholder': 'हम आपकी कैसे सहायता कर सकते हैं?',
    'contact.send': 'संदेश भेजें',
    'contact.followUs': 'हमें फॉलो करें',
    'contact.getInTouch': 'संपर्क में रहें',
    'contact.address': 'पता',
  },
  te: {
    // Header
    'nav.home': 'హోమ్',
    'nav.products': 'ఉత్పత్తులు',
    'nav.about': 'మా గురించి',
    'nav.recipes': 'వంటకాలు',
    'nav.contact': 'సంప్రదింపులు',
    'header.getQuote': 'కోట్ పొందండి',
    'header.tagline': 'ప్రీమియం నాణ్యత మసాలాలు',
    
    // Hero
    'hero.title': 'అసలైన భారతీయ మసాలాలు, ప్రతి వంటగదికి రూపొందించబడినవి',
    'hero.brand': 'ఉన్నతి మసాలే - పొలం నుండి టేబుల్ వరకు అత్యుత్తమత',
    'hero.description': 'భారతదేశంలోని అత్యుత్తమ పొలాల నుండి నేరుగా సేకరించిన మా ప్రీమియం నాణ్యత మసాలాలతో భారతీయ వంటకాల నిజమైన సారాన్ని అనుభవించండి.',
    'hero.cta': 'ఉత్పత్తిని అన్వేషించండి',
    'hero.natural': '100%',
    'hero.naturalText': 'సహజ మరియు స్వచ్ఛమైన',
    'hero.heritage': '2+',
    'hero.heritageText': 'సంవత్సరాల వారసత్వం',
    'hero.source': 'పొలం',
    'hero.sourceText': 'ప్రత్యక్ష మూలం',
    
    // Newsletter
    'newsletter.title': 'ఉన్నతి మసాలేతో అప్‌డేట్‌గా ఉండండి',
    'newsletter.description': 'తాజా వంటకాలు, వంట చిట్కాలు మరియు ప్రత్యేక ఆఫర్‌లను మీ ఇన్‌బాక్స్‌లో పొందండి',
    'newsletter.placeholder': 'మీ ఇమెయిల్ నమోదు చేయండి',
    'newsletter.subscribe': 'సబ్‌స్క్రైబ్ చేయండి',
    
    // Contact
    'contact.title': 'ఉన్నతి మసాలేతో కనెక్ట్ అవ్వండి',
    'contact.quickInquiry': 'త్వరిత విచారణ',
    'contact.firstName': 'మొదటి పేరు',
    'contact.lastName': 'చివరి పేరు',
    'contact.email': 'ఇమెయిల్',
    'contact.phone': 'ఫోన్ నంబర్',
    'contact.message': 'సందేశం',
    'contact.messagePlaceholder': 'మేము మీకు ఎలా సహాయం చేయగలము?',
    'contact.send': 'సందేశం పంపండి',
    'contact.followUs': 'మమ్మల్ని అనుసరించండి',
    'contact.getInTouch': 'సంప్రదింపులో ఉండండి',
    'contact.address': 'చిరునామా',
    
    // Products & Categories
    'products.title': 'మా ప్రీమియం ఉత్పత్తులు',
    'products.subtitle': 'భారతదేశంలోని ఉత్తమ రైతు పొలాల నుండి ఎంపిక చేయబడిన ప్రతి మసాలా స్వచ్ఛత మరియు సంప్రదాయ కథ చెబుతుంది',
    'products.weight': 'బరువు',
    'products.inStock': 'స్టాక్‌లో ఉంది',
    'products.browseByCategory': 'వర్గం ద్వారా బ్రౌజ్ చేయండి',
    'categories.groundSpices': 'పొడి మసాలాలు',
    'categories.blendedSpices': 'మిశ్రమ మసాలాలు',
    'categories.wholeSpices': 'సంపూర్ణ మసాలాలు',
    'categories.specialtyMasalas': 'ప్రత్యేక మసాలాలు',

    // Recipes
    'recipes.title': 'బ్లాగ్ & వంటకాలు',
    'recipes.subtitle': 'మా ప్రీమియం మసాలాలతో ప్రామాణిక వంటకాలు మరియు సంప్రదాయ వంట విద్యను కనుగొనండి',
    'recipes.readRecipe': 'వంటకం చదవండి',
    'recipes.exploreMore': 'ఇంకా వంటకాలు చూడండి',

    // Spice Gallery
    'spiceGallery.title': 'మా మసాలాల సేకరణ',
    'spiceGallery.subtitle': 'అసలైన భారతీయ మసాలాల ప్రకాశవంతమైన రంగులు మరియు సుగంధాలను కనుగొనండి',

    // Footer
    'footer.quickLinks': 'త్వరిత లింకులు',
    'footer.ourProducts': 'మా ఉత్పత్తులు',
    'footer.shopOnline': 'ఆన్ లైన్‌లో కొనండి',
    'footer.shopOnFlipkart': 'ఫ్లిప్‌కార్ట్‌లో కొనండి',
    'footer.comingSoonBlinkit': 'బ్లింకిట్‌లో త్వరలో',
    'footer.comingSoonZepto': 'జెప్టోలో త్వరలో',
    'footer.whatsappChat': 'వాట్సాప్ చాట్',

    // Individual Products
    'product.redChilli.name': 'కారం పొడి',
    'product.redChilli.category': 'పొడి మసాలాలు',
    'product.redChilli.description': 'గుంటూరు నుండి నాణ్యమైన కారం పొడి. ప్రతి వంటకానికి సరైన కారంపు మరియు మెరిసే రంగు.',

    'product.turmeric.name': 'పసుపు పొడి',
    'product.turmeric.category': 'పొడి మసాలాలు',
    'product.turmeric.description': 'ఎరోడ్ నుండి గోల్డెన్ పసుపు. సహజ కర్క్యూమిన్‌తో ఆరోగ్యకరమైన గుణాలు.',

    'product.coriander.name': 'ధనియా పొడి',
    'product.coriander.category': 'పొడి మసాలాలు',
    'product.coriander.description': 'తాజాగా నూరిన ధనియా పొడి. భారతీయ వంటలో అవసరమైనది.',

    'product.achar.name': 'ఆచార్ మసాలా',
    'product.achar.category': 'మిశ్రమ మసాలాలు',
    'product.achar.description': 'అచ్చుల కోసం ప్రత్యేక మిశ్రమం. మామిడి, నిమ్మకాయ మరియు మిశ్రమ కూరగాయల అచ్చులకు పర్ఫెక్ట్ మిక్స్.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, fallback?: string): string => {
    return (
      (translations[language] as any)[key] || fallback || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};