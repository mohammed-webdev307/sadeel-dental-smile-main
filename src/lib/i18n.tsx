import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

export const PHONE = "0549332012";
export const INSTAGRAM_URL = "https://instagram.com/sadeel_dweik4";
export const INSTAGRAM_HANDLE = "@sadeel_dweik4";
export const FACEBOOK_NAME = "Sadeel H Dweik";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=An-Najah+National+University+New+Campus";

export const serviceKeys = [
  "denture",
  "rootcanal",
  "fillings",
  "extraction",
  "children",
] as const;
export type ServiceKey = (typeof serviceKeys)[number];

type Dict = {
  dir: "rtl" | "ltr";
  brand: { name: string; tagline: string };
  nav: {
    home: string;
    about: string;
    services: string;
    why: string;
    faq: string;
    contact: string;
    book: string;
    menu: string;
    close: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    desc: string;
    book: string;
    call: string;
    trust: string[];
    imageAlt: string;
  };
  announcement: { main: string; sub: string };
  about: {
    heading: string;
    text: string;
    cards: string[];
    imageAlt: string;
  };
  services: {
    heading: string;
    desc: string;
    cta: string;
    items: Record<ServiceKey, { title: string; desc: string }>;
    other: string;
  };
  why: { heading: string; items: { title: string; desc: string }[] };
  cta: { heading: string; text: string; call: string; instagram: string; contact: string };
  faq: { heading: string; items: { q: string; a: string }[] };
  contact: {
    heading: string;
    phone: string;
    instagram: string;
    facebook: string;
    location: string;
    locationValue: string;
  };
  form: {
    heading: string;
    name: string;
    phone: string;
    service: string;
    servicePlaceholder: string;
    message: string;
    consent: string;
    submit: string;
    success: string;
    call: string;
    again: string;
    errors: { name: string; phone: string; service: string; consent: string };
  };
  location: { heading: string; text: string; button: string };
  footer: { links: string; contact: string; rights: string; disclaimer: string };
  mobile: { call: string; book: string; instagram: string };
};

const ar: Dict = {
  dir: "rtl",
  brand: { name: "SADEEL", tagline: "Dental Care" },
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    why: "لماذا نحن",
    faq: "الأسئلة الشائعة",
    contact: "تواصل معنا",
    book: "احجز موعدك",
    menu: "فتح القائمة",
    close: "إغلاق القائمة",
  },
  hero: {
    eyebrow: "عناية بأسنانك بابتسامة أجمل",
    titleA: "ابتسامتك تستحق",
    titleB: "عناية مميزة",
    desc: "استقبال حالات طب الأسنان في عيادات طب الأسنان بجامعة النجاح الوطنية – الحرم الجديد، ضمن بيئة طبية وتحت إشراف كادر مختص.",
    book: "احجز موعدك",
    call: "اتصل الآن",
    trust: ["عناية واهتمام", "إشراف طبي", "بيئة علاجية مريحة"],
    imageAlt: "عيادة أسنان حديثة بألوان هادئة",
  },
  announcement: {
    main: "علاجات مجانية تحت إشراف كادر طبي مختص",
    sub: "فقط خدمة فتح ملف: 30 شيكل",
  },
  about: {
    heading: "العناية تبدأ من الثقة",
    text: "أهلاً بكم، يسعدني استقبال الحالات في عيادات طب الأسنان – جامعة النجاح الوطنية، الحرم الجديد، وتقديم مجموعة من خدمات وعلاجات الأسنان تحت إشراف كادر طبي مختص، مع الاهتمام براحة المريض وتقديم تجربة علاجية منظمة ومريحة.",
    cards: ["اهتمام بالمريض", "إشراف طبي مختص", "بيئة علاجية منظمة"],
    imageAlt: "أدوات طب أسنان معقمة على صينية بيضاء",
  },
  services: {
    heading: "الخدمات المتوفرة",
    desc: "مجموعة من خدمات وعلاجات الأسنان المتوفرة للحالات المناسبة.",
    cta: "استفسر عن الخدمة",
    items: {
      denture: {
        title: "طقم أسنان كامل متحرك",
        desc: "حل تعويضي للحالات التي تحتاج إلى طقم أسنان متحرك كامل بعد التقييم المناسب للحالة.",
      },
      rootcanal: {
        title: "سحب عصب الأسنان الأمامية",
        desc: "التعامل مع الحالات المناسبة التي تحتاج إلى علاج عصب الأسنان الأمامية بعد الفحص والتقييم.",
      },
      fillings: {
        title: "إزالة التسوسات وترميم الأسنان",
        desc: "إزالة التسوس وترميم الأسنان بهدف الحفاظ على صحة السن واستعادة وظيفته ومظهره.",
      },
      extraction: {
        title: "خلع الأسنان الأمامية",
        desc: "إجراء الخلع للحالات التي تستدعي ذلك بعد التقييم السريري وتحديد الخطة المناسبة.",
      },
      children: {
        title: "علاج أسنان الأطفال",
        desc: "استقبال حالات الأطفال المناسبة وتقديم العناية اللازمة ضمن بيئة مريحة وتحت الإشراف الطبي.",
      },
    },
    other: "استفسار آخر",
  },
  why: {
    heading: "رعاية تهتم بالتفاصيل",
    items: [
      { title: "إشراف طبي", desc: "العلاجات تتم تحت إشراف كادر طبي مختص." },
      { title: "اهتمام بالحالة", desc: "تقييم كل حالة وتحديد الإجراء المناسب لها." },
      { title: "بيئة مريحة", desc: "الحرص على تجربة منظمة ومريحة أثناء الزيارة." },
      { title: "تواصل سهل", desc: "إمكانية التواصل والاستفسار عن الحالات والمواعيد بسهولة." },
    ],
  },
  cta: {
    heading: "هل ترغب في حجز موعد أو الاستفسار عن حالتك؟",
    text: "تواصل الآن للاستفسار عن الخدمات المتوفرة والمواعيد المناسبة.",
    call: "اتصل الآن",
    instagram: "Instagram",
    contact: "Contact Us",
  },
  faq: {
    heading: "الأسئلة الشائعة",
    items: [
      {
        q: "أين يتم استقبال الحالات؟",
        a: "في عيادات طب الأسنان – جامعة النجاح الوطنية، الحرم الجديد.",
      },
      {
        q: "هل العلاجات مجانية؟",
        a: "بحسب الإعلان، العلاجات المذكورة مجانية تحت إشراف كادر طبي مختص، مع رسوم فتح ملف بقيمة 30 شيكل.",
      },
      {
        q: "كيف يمكنني معرفة إن كانت حالتي مناسبة؟",
        a: "يمكنك التواصل أولًا وشرح الحالة، ثم يتم تحديد مدى ملاءمتها للخدمات المتوفرة.",
      },
      {
        q: "هل يجب حجز موعد مسبق؟",
        a: "يفضل التواصل مسبقًا للتأكد من توفر الموعد والخدمة المطلوبة.",
      },
      {
        q: "كيف يمكنني التواصل؟",
        a: "يمكن التواصل عبر رقم الهاتف أو حساب Instagram الموجود في الموقع.",
      },
    ],
  },
  contact: {
    heading: "تواصل معنا",
    phone: "الهاتف",
    instagram: "Instagram",
    facebook: "Facebook",
    location: "الموقع",
    locationValue: "عيادات طب الأسنان – جامعة النجاح الوطنية – الحرم الجديد",
  },
  form: {
    heading: "أرسل استفسارك",
    name: "الاسم الكامل",
    phone: "رقم الهاتف",
    service: "نوع الخدمة",
    servicePlaceholder: "اختر الخدمة",
    message: "اكتب استفسارك",
    consent: "أوافق على إرسال بياناتي لغرض التواصل بخصوص الموعد.",
    submit: "إرسال الاستفسار",
    success: "تم تجهيز طلبك. يمكنك الآن التواصل مباشرة لإكمال الحجز.",
    call: "اتصل الآن",
    again: "تعبئة استفسار جديد",
    errors: {
      name: "يرجى إدخال الاسم الكامل.",
      phone: "يرجى إدخال رقم هاتف صحيح.",
      service: "يرجى اختيار نوع الخدمة.",
      consent: "يرجى الموافقة للمتابعة.",
    },
  },
  location: {
    heading: "موقع العيادات",
    text: "عيادات طب الأسنان – جامعة النجاح الوطنية، الحرم الجديد.",
    button: "فتح الموقع على Google Maps",
  },
  footer: {
    links: "روابط",
    contact: "التواصل",
    rights: "© 2026 Sadeel Hussam Dweik. All rights reserved.",
    disclaimer:
      "المعلومات الموجودة في الموقع لأغراض التعريف بالخدمات والتواصل ولا تغني عن التقييم الطبي المباشر.",
  },
  mobile: { call: "اتصال", book: "حجز موعد", instagram: "Instagram" },
};

const en: Dict = {
  dir: "ltr",
  brand: { name: "SADEEL", tagline: "Dental Care" },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    why: "Why Us",
    faq: "FAQ",
    contact: "Contact",
    book: "Book an appointment",
    menu: "Open menu",
    close: "Close menu",
  },
  hero: {
    eyebrow: "Dental care for a brighter smile",
    titleA: "Your smile deserves",
    titleB: "special care",
    desc: "Dental cases are received at the Dental Clinics of An-Najah National University – New Campus, in a medical environment and under the supervision of a specialized team.",
    book: "Book an appointment",
    call: "Call now",
    trust: ["Care and attention", "Medical supervision", "Comfortable clinical setting"],
    imageAlt: "Modern dental clinic in soft calm tones",
  },
  announcement: {
    main: "Free treatments under the supervision of a specialized medical team",
    sub: "File opening service only: 30 ILS",
  },
  about: {
    heading: "Care begins with trust",
    text: "Welcome. I am glad to receive cases at the Dental Clinics – An-Najah National University, New Campus, and to provide a range of dental services and treatments under the supervision of a specialized medical team, with attention to patient comfort and an organized, comfortable treatment experience.",
    cards: ["Patient attention", "Specialized medical supervision", "Organized clinical setting"],
    imageAlt: "Sterile dental instruments on a white tray",
  },
  services: {
    heading: "Available services",
    desc: "A range of dental services and treatments available for suitable cases.",
    cta: "Ask about this service",
    items: {
      denture: {
        title: "Complete removable denture",
        desc: "A prosthetic solution for cases that require a complete removable denture after proper case assessment.",
      },
      rootcanal: {
        title: "Root canal for front teeth",
        desc: "Handling suitable cases that require root canal treatment of the front teeth after examination and assessment.",
      },
      fillings: {
        title: "Caries removal and restorations",
        desc: "Removing decay and restoring teeth to preserve tooth health and recover its function and appearance.",
      },
      extraction: {
        title: "Front teeth extraction",
        desc: "Extraction for cases that require it after clinical assessment and defining the suitable plan.",
      },
      children: {
        title: "Children's dental care",
        desc: "Receiving suitable pediatric cases and providing the needed care in a comfortable setting under medical supervision.",
      },
    },
    other: "Other inquiry",
  },
  why: {
    heading: "Care that attends to details",
    items: [
      { title: "Medical supervision", desc: "Treatments are carried out under a specialized medical team." },
      { title: "Case attention", desc: "Every case is assessed and the suitable procedure is defined." },
      { title: "Comfortable setting", desc: "An organized and comfortable experience during the visit." },
      { title: "Easy contact", desc: "You can easily get in touch about cases and appointments." },
    ],
  },
  cta: {
    heading: "Would you like to book an appointment or ask about your case?",
    text: "Get in touch now to ask about available services and suitable appointments.",
    call: "Call now",
    instagram: "Instagram",
    contact: "Contact Us",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "Where are cases received?",
        a: "At the Dental Clinics – An-Najah National University, New Campus.",
      },
      {
        q: "Are the treatments free?",
        a: "According to the announcement, the mentioned treatments are free under the supervision of a specialized medical team, with a file opening fee of 30 ILS.",
      },
      {
        q: "How do I know if my case is suitable?",
        a: "You can get in touch first and describe the case, then its suitability for the available services is determined.",
      },
      {
        q: "Do I need to book in advance?",
        a: "It is preferable to get in touch in advance to confirm appointment and service availability.",
      },
      {
        q: "How can I get in touch?",
        a: "You can contact via the phone number or the Instagram account listed on the site.",
      },
    ],
  },
  contact: {
    heading: "Contact us",
    phone: "Phone",
    instagram: "Instagram",
    facebook: "Facebook",
    location: "Location",
    locationValue: "Dental Clinics – An-Najah National University – New Campus",
  },
  form: {
    heading: "Send your inquiry",
    name: "Full name",
    phone: "Phone number",
    service: "Service type",
    servicePlaceholder: "Choose a service",
    message: "Write your inquiry",
    consent: "I agree to share my details for contact regarding the appointment.",
    submit: "Send inquiry",
    success: "Your request is ready. You can now get in touch directly to complete the booking.",
    call: "Call now",
    again: "Fill a new inquiry",
    errors: {
      name: "Please enter your full name.",
      phone: "Please enter a valid phone number.",
      service: "Please choose a service type.",
      consent: "Please agree to continue.",
    },
  },
  location: {
    heading: "Clinics location",
    text: "Dental Clinics – An-Najah National University, New Campus.",
    button: "Open location on Google Maps",
  },
  footer: {
    links: "Links",
    contact: "Contact",
    rights: "© 2026 Sadeel Hussam Dweik. All rights reserved.",
    disclaimer:
      "The information on this site is for introducing the services and for contact purposes, and does not replace a direct medical assessment.",
  },
  mobile: { call: "Call", book: "Book", instagram: "Instagram" },
};

const dictionaries: Record<Lang, Dict> = { ar, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const saved = localStorage.getItem("sadeel-lang");
    if (saved === "en" || saved === "ar") setLangState(saved);
  }, []);

  useEffect(() => {
    const dir = dictionaries[lang].dir;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: (l: Lang) => {
        setLangState(l);
        try {
          localStorage.setItem("sadeel-lang", l);
        } catch {
          /* storage unavailable */
        }
      },
      t: dictionaries[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: "smooth" });
}
