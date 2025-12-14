import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "sw";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.services": "Services",
    "nav.howItWorks": "How It Works",
    "nav.technicians": "Technicians",
    "nav.about": "About",
    "nav.login": "Login",
    "nav.getStarted": "Get Started",

    // Hero
    "hero.badge": "Trusted by 10,000+ Tanzanians",
    "hero.title1": "Find Skilled",
    "hero.title2": "Technicians",
    "hero.title3": "Near You, Instantly",
    "hero.subtitle": "Connect with verified electricians, plumbers, ICT experts, and more. Get reliable technical services delivered to your doorstep across Tanzania.",
    "hero.searchPlaceholder": "What service do you need?",
    "hero.locationPlaceholder": "Location",
    "hero.search": "Search",
    "hero.popular": "Popular:",
    "hero.electrician": "Electrician",
    "hero.plumber": "Plumber",
    "hero.ictSupport": "ICT Support",
    "hero.carpenter": "Carpenter",
    "hero.verifiedTechnicians": "Verified Technicians",
    "hero.customerSatisfaction": "Customer Satisfaction",
    "hero.availableSupport": "Available Support",
    "hero.reviews": "reviews",

    // Services
    "services.badge": "Our Services",
    "services.title": "All Technical Services, One Platform",
    "services.subtitle": "From electrical work to ICT support, find verified professionals for every technical need",
    "services.findTechnicians": "Find Technicians",
    "service.electrical": "Electrical",
    "service.electrical.desc": "Wiring, repairs, installations & maintenance",
    "service.plumbing": "Plumbing",
    "service.plumbing.desc": "Pipe fitting, repairs & water systems",
    "service.carpentry": "Carpentry",
    "service.carpentry.desc": "Furniture, doors, roofing & woodwork",
    "service.ict": "ICT & Networking",
    "service.ict.desc": "Computer repair, CCTV, networking & software",
    "service.mechanical": "Mechanical",
    "service.mechanical.desc": "Vehicle repair, machinery & equipment",
    "service.electronics": "Electronics",
    "service.electronics.desc": "TV, appliances & gadget repairs",
    "service.solar": "Solar Installation",
    "service.solar.desc": "Panels, inverters & solar systems",
    "service.hvac": "HVAC",
    "service.hvac.desc": "AC installation, repair & maintenance",
    "service.construction": "Construction",
    "service.construction.desc": "Masonry, tiling, painting & finishing",

    // How It Works
    "howItWorks.badge": "How It Works",
    "howItWorks.title": "Get Help in 4 Simple Steps",
    "howItWorks.subtitle": "Finding reliable technical help has never been easier",
    "step1.title": "Search for Service",
    "step1.desc": "Tell us what you need - electrical, plumbing, ICT, or any technical service.",
    "step2.title": "Choose a Technician",
    "step2.desc": "Browse verified profiles, read reviews, and select the best match for your needs.",
    "step3.title": "Communicate & Schedule",
    "step3.desc": "Chat directly with your technician to discuss details and book a convenient time.",
    "step4.title": "Get Quality Service",
    "step4.desc": "Receive professional service and rate your experience to help others.",

    // Technicians
    "technicians.badge": "Top Rated",
    "technicians.title": "Featured Technicians",
    "technicians.subtitle": "Meet some of our highest-rated professionals",
    "technicians.viewAll": "View All Technicians",
    "technicians.viewProfile": "View Profile",

    // Stats
    "stats.customers": "Happy Customers",
    "stats.technicians": "Verified Technicians",
    "stats.jobs": "Jobs Completed",
    "stats.categories": "Service Categories",

    // CTA
    "cta.client.title": "Need a Technician?",
    "cta.client.desc": "Find verified professionals for any technical service. Browse profiles, compare ratings, and book the right expert for your needs — all in one place.",
    "cta.client.feature1": "Verified & trusted technicians",
    "cta.client.feature2": "Location-based search",
    "cta.client.feature3": "Direct communication",
    "cta.client.feature4": "Review & rating system",
    "cta.client.button": "Find Technicians",
    "cta.technician.title": "Are You a Technician?",
    "cta.technician.desc": "Join Tanzania's fastest-growing platform for technical professionals. Showcase your skills, connect with clients, and grow your business digitally.",
    "cta.technician.feature1": "Free registration",
    "cta.technician.feature2": "Direct job requests",
    "cta.technician.feature3": "Build your reputation",
    "cta.technician.feature4": "Expand your reach",
    "cta.technician.button": "Register as Technician",

    // Footer
    "footer.tagline": "Connecting Tanzanians with trusted technicians for all technical service needs.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.aboutUs": "About Us",
    "footer.howItWorks": "How It Works",
    "footer.becomeTechnician": "Become a Technician",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.helpCenter": "Help Center",
    "footer.safety": "Safety",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy",
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with ❤️ in Tanzania",
  },
  sw: {
    // Header
    "nav.services": "Huduma",
    "nav.howItWorks": "Jinsi Inavyofanya Kazi",
    "nav.technicians": "Mafundi",
    "nav.about": "Kuhusu",
    "nav.login": "Ingia",
    "nav.getStarted": "Anza Sasa",

    // Hero
    "hero.badge": "Wanaotuamini Watanzania 10,000+",
    "hero.title1": "Pata",
    "hero.title2": "Mafundi",
    "hero.title3": "Wenye Ujuzi Karibu Nawe",
    "hero.subtitle": "Wasiliana na mafundi waliothibitishwa wa umeme, mabomba, wataalamu wa ICT, na zaidi. Pata huduma za kiufundi zinazotegemewa zinazoletwa mlangoni pako kote Tanzania.",
    "hero.searchPlaceholder": "Unahitaji huduma gani?",
    "hero.locationPlaceholder": "Eneo",
    "hero.search": "Tafuta",
    "hero.popular": "Maarufu:",
    "hero.electrician": "Fundi Umeme",
    "hero.plumber": "Fundi Bomba",
    "hero.ictSupport": "Msaada wa ICT",
    "hero.carpenter": "Seremala",
    "hero.verifiedTechnicians": "Mafundi Waliothibitishwa",
    "hero.customerSatisfaction": "Kuridhika kwa Wateja",
    "hero.availableSupport": "Msaada Unapatikana",
    "hero.reviews": "maoni",

    // Services
    "services.badge": "Huduma Zetu",
    "services.title": "Huduma Zote za Kiufundi, Jukwaa Moja",
    "services.subtitle": "Kutoka kazi za umeme hadi msaada wa ICT, pata wataalamu waliothibitishwa kwa kila hitaji la kiufundi",
    "services.findTechnicians": "Pata Mafundi",
    "service.electrical": "Umeme",
    "service.electrical.desc": "Waya, ukarabati, ufungaji na matengenezo",
    "service.plumbing": "Mabomba",
    "service.plumbing.desc": "Ufungaji wa mabomba, ukarabati na mifumo ya maji",
    "service.carpentry": "Useremala",
    "service.carpentry.desc": "Samani, milango, paa na kazi za mbao",
    "service.ict": "ICT na Mtandao",
    "service.ict.desc": "Ukarabati wa kompyuta, CCTV, mtandao na programu",
    "service.mechanical": "Mitambo",
    "service.mechanical.desc": "Ukarabati wa magari, mashine na vifaa",
    "service.electronics": "Elektroniki",
    "service.electronics.desc": "TV, vifaa vya nyumbani na ukarabati wa gadget",
    "service.solar": "Ufungaji wa Sola",
    "service.solar.desc": "Paneli, inverters na mifumo ya sola",
    "service.hvac": "HVAC",
    "service.hvac.desc": "Ufungaji, ukarabati na matengenezo ya AC",
    "service.construction": "Ujenzi",
    "service.construction.desc": "Uashi, kubandika, kupaka rangi na kumalizia",

    // How It Works
    "howItWorks.badge": "Jinsi Inavyofanya Kazi",
    "howItWorks.title": "Pata Msaada kwa Hatua 4 Rahisi",
    "howItWorks.subtitle": "Kupata msaada wa kiufundi unaotegemewa haijawahi kuwa rahisi zaidi",
    "step1.title": "Tafuta Huduma",
    "step1.desc": "Tuambie unahitaji nini - umeme, mabomba, ICT, au huduma yoyote ya kiufundi.",
    "step2.title": "Chagua Fundi",
    "step2.desc": "Pitia wasifu waliothibitishwa, soma maoni, na uchague mwenye kufaa zaidi kwa mahitaji yako.",
    "step3.title": "Wasiliana na Panga",
    "step3.desc": "Ongea moja kwa moja na fundi wako kujadili maelezo na kuweka wakati unaofaa.",
    "step4.title": "Pata Huduma Bora",
    "step4.desc": "Pokea huduma ya kitaalamu na kadiria uzoefu wako kusaidia wengine.",

    // Technicians
    "technicians.badge": "Waliokadiriwa Juu",
    "technicians.title": "Mafundi Bora",
    "technicians.subtitle": "Kutana na baadhi ya wataalamu wetu waliokadiriwa juu zaidi",
    "technicians.viewAll": "Tazama Mafundi Wote",
    "technicians.viewProfile": "Tazama Wasifu",

    // Stats
    "stats.customers": "Wateja Wenye Furaha",
    "stats.technicians": "Mafundi Waliothibitishwa",
    "stats.jobs": "Kazi Zilizokamilishwa",
    "stats.categories": "Kategoria za Huduma",

    // CTA
    "cta.client.title": "Unahitaji Fundi?",
    "cta.client.desc": "Pata wataalamu waliothibitishwa kwa huduma yoyote ya kiufundi. Pitia wasifu, linganisha ukadiriaji, na weka mtaalamu anayefaa kwa mahitaji yako — yote mahali pamoja.",
    "cta.client.feature1": "Mafundi waliothibitishwa na wanaoaminiwa",
    "cta.client.feature2": "Utafutaji kulingana na eneo",
    "cta.client.feature3": "Mawasiliano ya moja kwa moja",
    "cta.client.feature4": "Mfumo wa maoni na ukadiriaji",
    "cta.client.button": "Pata Mafundi",
    "cta.technician.title": "Je, Wewe ni Fundi?",
    "cta.technician.desc": "Jiunge na jukwaa linaloongezeka kwa kasi zaidi Tanzania kwa wataalamu wa kiufundi. Onyesha ujuzi wako, wasiliana na wateja, na kukuza biashara yako kidijitali.",
    "cta.technician.feature1": "Usajili bila malipo",
    "cta.technician.feature2": "Maombi ya kazi moja kwa moja",
    "cta.technician.feature3": "Jenga sifa yako",
    "cta.technician.feature4": "Panua wigo wako",
    "cta.technician.button": "Jiandikishe kama Fundi",

    // Footer
    "footer.tagline": "Kuunganisha Watanzania na mafundi wanaoaminiwa kwa mahitaji yote ya huduma za kiufundi.",
    "footer.services": "Huduma",
    "footer.company": "Kampuni",
    "footer.support": "Msaada",
    "footer.aboutUs": "Kuhusu Sisi",
    "footer.howItWorks": "Jinsi Inavyofanya Kazi",
    "footer.becomeTechnician": "Kuwa Fundi",
    "footer.careers": "Kazi",
    "footer.contact": "Wasiliana",
    "footer.helpCenter": "Kituo cha Msaada",
    "footer.safety": "Usalama",
    "footer.terms": "Masharti ya Huduma",
    "footer.privacy": "Sera ya Faragha",
    "footer.rights": "Haki zote zimehifadhiwa.",
    "footer.madeWith": "Imetengenezwa kwa ❤️ Tanzania",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
