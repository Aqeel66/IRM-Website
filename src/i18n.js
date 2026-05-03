import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "brand": {
        "full": "Inclusive Resource Management"
      },
      "nav": {
        "home": "Home",
        "about": "About",
        "services": "Services",
        "experience": "Experience",
        "verticals": "Verticals",
        "insights": "Insights & Publications",
        "getStarted": "Get Started",
        "sub": {
          "who": "Who We Are",
          "mandate": "Our Mandate & Philosophy",
          "how": "How We Work",
          "team": "Leadership & Team",
          "offices": "Global Presence & Offices",
          "partnerships": "Strategic Partnerships",
          "publications": "Publications",
          "news": "News & Updates"
        },
        "mega": {
          "public_title": "Public & Sovereign",
          "public_inst": "Public & Sovereign Institutions",
          "ministries": "Government Ministries",
          "banks": "Central Banks & Regulators",
          "multilateral": "Multilateral Institutions",
          "finance_title": "Financial Services",
          "finance_inst": "Financial Institutions",
          "banking": "Banking & Microfinance",
          "insurance": "Insurance & Takaful",
          "wealth": "Wealth & Asset Management",
          "markets_title": "Markets & Innovation",
          "markets": "Capital & Money Markets",
          "fintech": "FinTech & Digital Finance",
          "esg": "ESG & Sustainable Finance",
          "capacity": "Capacity Building"
        }
      },
      "hero": {
        "slides": [
          {
            "title": "Translating policy intent into laws, markets, and institutions",
            "subtitle": "Providing strategic advisory to sovereign institutions and global regulators."
          },
          {
            "title": "Shaping Shari’ah-aligned financial architecture worldwide",
            "subtitle": "Designing inclusive financial ecosystems for the global economy."
          },
          {
            "title": "Advancing digital and FinTech-enabled financial innovation",
            "subtitle": "Harnessing technology to drive social finance and digital enablement."
          },
          {
            "title": "Trusted by governments, regulators, and multilateral institutions",
            "subtitle": "Delivering excellence and integrity in strategic advisory services."
          }
        ],
        "explore": "Explore Our Work",
        "learn": "Learn More"
      },
      "services": {
        "title": "How We Support Institutions",
        "subtitle": "We provide specialized strategic advisory to help governments, central banks, and regulators build resilient financial architectures and inclusive markets.",
        "learnMore": "Learn More",
        "items": {
          "governance": "Financial Governance, Policy & Regulation",
          "governance_desc": "Translating policy intent into robust legal and regulatory frameworks.",
          "shariah": "Shari’ah Governance & Compliance Frameworks",
          "shariah_desc": "Designing world-class compliance frameworks for Islamic finance architecture.",
          "transformation": "Institutional Transformation & Market Implementation",
          "transformation_desc": "Driving market implementation and structural evolution for sovereign entities.",
          "inclusion": "Financial Inclusion, Social Finance & Digital Enablement",
          "inclusion_desc": "Advancing digital enablement and social finance for inclusive growth.",
          "risk": "Governance, Risk, Assurance & Reporting",
          "risk_desc": "Expert governance, risk management, and integrated reporting solutions.",
          "capacity": "Capacity Building & Strategic Partnerships",
          "capacity_desc": "Developing human capital and institutional expertise for sustainable market leadership."
        }
      },
      "mandate": {
        "badge": "Our Philosophy",
        "title": "Shaping the Future of Global Governance",
        "description": "IRM Global is dedicated to providing specialized strategic advisory services to governments, central banks, and regulators. Our approach combines deep technical expertise with a commitment to inclusive growth and institutional excellence.",
        "quote": "We don't just advise; we architect the frameworks that define the next generation of global financial systems.",
        "points": [
          { "title": "Policy Advocacy", "desc": "Translating strategic policy goals into actionable legal frameworks." },
          { "title": "Market Architecture", "desc": "Designing resilient financial ecosystems for sovereign growth." },
          { "title": "Structural Transformation", "desc": "Guiding institutions through complex organizational evolution." },
          { "title": "Digital Enablement", "desc": "Harnessing technology to drive inclusive financial innovation." }
        ]
      },
      "stats": {
        "projects": "Projects Completed",
        "clients": "Happy Clients",
        "countries": "Countries Reached",
        "awards": "Awards Won"
      },
      "portfolio": {
        "badge": "Portfolio",
        "title": "Our Work in Action",
        "subtitle": "A visual showcase of our projects, infrastructure, and the environments we create for our clients.",
        "items": [
          "Islamic Microfinance Toolkit & Frameworks",
          "Feasibility Studies for Islamic Finance in CIS Countries",
          "Capital Markets & Sukuk Regulatory Frameworks",
          "Awqaf-Based Development & Free Zone Models",
          "Digital & FinTech-Enabled Islamic Finance",
          "Advancing digital and FinTech-enabled financial innovation"
        ]
      },
      "map": {
        "badge": "Our Global Presence",
        "title": "Completed Projects Globally",
        "subtitle": "Explore our footprint across the world. Each marker represents a landmark project where we've delivered excellence.",
        "viewDetails": "View Project Details",
        "projects": {
          "london": "London Finance Center",
          "dubai": "Dubai Tech Park",
          "newyork": "New York HQ",
          "singapore": "Singapore Innovation Lab",
          "freetown": "Freetown Project",
          "uk": "United Kingdom",
          "uae": "UAE",
          "usa": "USA",
          "sierra_leone": "Sierra Leone, West Africa"
        }
      },
      "footer": {
        "desc": "Pioneering digital excellence through innovative technology and human-centric design. We help brands lead in the digital era.",
        "quickLinks": "Quick Links",
        "getInTouch": "Get in Touch",
        "newsletter": "Newsletter",
        "newsletter_desc": "Subscribe to our newsletter for the latest tech insights and company updates.",
        "placeholder": "Email Address",
        "rights": "All rights reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service",
        "cookies": "Cookie Settings",
        "address": "Tech Avenue, Innovation 123, District, New York, NY 10001",
        "phone": "123-4567 (555) 1+",
        "email": "info@inclusiverm.com",
        "headquarters": "Headquarters",
        "hq_address": "Islamabad, Pakistan",
        "rep_offices": "Representative Offices",
        "uae_rak": "United Arab Emirates (RAK)",
        "uk_london": "United Kingdom (London)",
        "contact_us": "Contact Us",
        "inst_enquiries": "Institutional Enquiries",
        "rights_full": "© Inclusive Resource Management (Pvt.) Ltd. | All Rights Reserved",
        "powered_by": "Powered By: TechSoft"
      }
    }
  },
  ar: {
    translation: {
      "brand": {
        "full": "إدارة الموارد الشاملة"
      },
      "nav": {
        "home": "الرئيسية",
        "about": "عن الشركة",
        "services": "الخدمات",
        "experience": "الخبرات",
        "verticals": "القطاعات",
        "insights": "الأبحاث والمنشورات",
        "getStarted": "ابدأ الآن",
        "sub": {
          "who": "من نحن",
          "mandate": "ولايتنا وفلسفتنا",
          "how": "كيف نعمل",
          "team": "القيادة والفريق",
          "offices": "التواجد العالمي والمكاتب",
          "partnerships": "الشراكات الاستراتيجية",
          "publications": "المنشورات",
          "news": "الأخبار والتحديثات"
        },
        "mega": {
          "public_title": "العام والسيادي",
          "public_inst": "المؤسسات العامة والسيادية",
          "ministries": "الوزارات الحكومية",
          "banks": "البنوك المركزية والمنظمون",
          "multilateral": "المؤسسات متعددة الأطراف",
          "finance_title": "الخدمات المالية",
          "finance_inst": "المؤسسات المالية",
          "banking": "الخدمات المصرفية والتمويل الأصغر",
          "insurance": "التأمين والتكافل",
          "wealth": "إدارة الثروات والأصول",
          "markets_title": "الأسواق والابتكار",
          "markets": "أسواق المال والنقد",
          "fintech": "التكنولوجيا المالية والتمويل الرقمي",
          "esg": "الحوكمة البيئية والاجتماعية والتمويل المستدام",
          "capacity": "بناء القدرات"
        }
      },
      "hero": {
        "slides": [
          {
            "title": "ترجمة نوايا السياسات إلى قوانين وأسواق ومؤسسات",
            "subtitle": "تقديم الاستشارات الاستراتيجية للمؤسسات السيادية والهيئات التنظيمية العالمية."
          },
          {
            "title": "تشكيل الهندسة المالية المتوافقة مع الشريعة في جميع أنحاء العالم",
            "subtitle": "تصميم أنظمة مالية شاملة للاقتصاد العالمي."
          },
          {
            "title": "تعزيز الابتكار المالي الرقمي والمدعوم بالتكنولوجيا المالية",
            "subtitle": "تسخير التكنولوجيا لتعزيز التمويل الاجتماعي والتمكين الرقمي."
          },
          {
            "title": "محل ثقة الحكومات والهيئات التنظيمية والمؤسسات متعددة الأطراف",
            "subtitle": "تقديم التميز والنزاهة في خدمات الاستشارات الاستراتيجية."
          }
        ],
        "explore": "استكشف أعمالنا",
        "learn": "تعرف على المزيد"
      },
      "services": {
        "title": "كيف ندعم المؤسسات",
        "subtitle": "نحن نقدم استشارات استراتيجية متخصصة لمساعدة الحكومات والبنوك المركزية والهيئات التنظيمية على بناء هياكل مالية مرنة وأسواق شاملة.",
        "learnMore": "تعرف على المزيد",
        "items": {
          "governance": "الحوكمة المالية والسياسة والتنظيم",
          "governance_desc": "ترجمة نية السياسة إلى أطر قانونية وتنظيمية قوية.",
          "shariah": "أطر حوكمة الشريعة والامتثال",
          "shariah_desc": "تصميم أطر امتثال عالمية المستوى لهندسة التمويل الإسلامي.",
          "transformation": "التحول المؤسسي وتطوير السوق",
          "transformation_desc": "قيادة تنفيذ السوق والتطور الهيكلي للكيانات السيادية.",
          "inclusion": "الاشتمال المالي والتمويل الاجتماعي والتمكين الرقمي",
          "inclusion_desc": "تعزيز التمكين الرقمي والتمويل الاجتماعي من أجل النمو الشامل.",
          "risk": "الحوكمة والمخاطر والضمان والتقارير",
          "risk_desc": "حلول متخصصة في الحوكمة وإدارة المخاطر والتقارير المتكاملة.",
          "capacity": "بناء القدرات والشراكات الاستراتيجية",
          "capacity_desc": "تطوير رأس المال البشري والخبرة المؤسسية لريادة السوق المستدامة."
        }
      },
      "mandate": {
        "badge": "فلسفتنا",
        "title": "تشكيل مستقبل الحوكمة العالمية",
        "description": "تكرس IRM Global جهودها لتقديم خدمات استشارية استراتيجية متخصصة للحكومات والبنوك المركزية والهيئات التنظيمية. يجمع نهجنا بين الخبرة الفنية العميقة والالتزام بالنمو الشامل والتميز المؤسسي.",
        "quote": "\"نحن لا نقدم الاستشارات فحسب؛ بل نصمم الأطر التي تحدد الجيل القادم من الأنظمة المالية العالمية.\"",
        "points": [
          { "title": "الدفاع عن السياسات", "desc": "ترجمة أهداف السياسة الاستراتيجية إلى أطر قانونية قابلة للتنفيذ." },
          { "title": "بناء الأسواق", "desc": "تصميم أنظمة مالية مرنة للنمو السيادي." },
          { "title": "التحول الهيكلي", "desc": "توجيه المؤسسات من خلال التطور التنظيمي المعقد." },
          { "title": "التمكين الرقمي", "desc": "تسخير التكنولوجيا لدفع الابتكار المالي الشامل." }
        ]
      },
      "stats": {
        "projects": "المشاريع المنجزة",
        "clients": "العملاء السعداء",
        "countries": "الدول التي وصلنا إليها",
        "awards": "الجوائز المحققة"
      },
      "portfolio": {
        "badge": "معرض الأعمال",
        "title": "أعمالنا في الميدان",
        "subtitle": "عرض مرئي لمشاريعنا وبنيتنا التحتية والبيئات التي ننشئها لعملائنا.",
        "items": [
          "أدوات وأطر التمويل الأصغر الإسلامي",
          "دراسات الجدوى للتمويل الإسلامي في دول الـ CIS",
          "أطر تنظيم أسواق المال والصكوك",
          "نماذج التنمية القائمة على الأوقاف والمناطق الحرة",
          "التمويل الإسلامي الرقمي والمدعوم بالتكنولوجيا المالية",
          "تعزيز الابتكار المالي الرقمي والمدعوم بالتكنولوجيا المالية"
        ]
      },
      "map": {
        "badge": "تواجدنا العالمي",
        "title": "المشاريع المنجزة عالمياً",
        "subtitle": "استكشف بصمتنا في جميع أنحاء العالم. تمثل كل علامة مشروعاً بارزاً قدمنا فيه التميز.",
        "viewDetails": "عرض تفاصيل المشروع",
        "projects": {
          "london": "مركز لندن المالي",
          "dubai": "مجمع دبي للتقنية",
          "newyork": "المقر الرئيسي في نيويورك",
          "singapore": "مختبر سنغافورة للابتكار",
          "freetown": "مشروع فريتاون",
          "uk": "المملكة المتحدة",
          "uae": "الإمارات العربية المتحدة",
          "usa": "الولايات المتحدة الأمريكية",
          "sierra_leone": "سيراليون، غرب أفريقيا"
        }
      },
      "footer": {
        "desc": "رائدون في التميز الرقمي من خلال التكنولوجيا المبتكرة والتصميم الذي يركز على الإنسان. نساعد العلامات التجارية على الريادة في العصر الرقمي.",
        "quickLinks": "روابط سريعة",
        "getInTouch": "اتصل بنا",
        "newsletter": "النشرة الإخبارية",
        "newsletter_desc": "اشترك في نشرتنا الإخبارية للحصول على أحدث الرؤى التقنية وتحديثات الشركة.",
        "placeholder": "البريد الإلكتروني",
        "rights": "جميع الحقوق محفوظة.",
        "privacy": "سياسة الخصوصية",
        "terms": "شروط الخدمة",
        "cookies": "إعدادات ملفات الارتباط",
        "address": "شارع التقنية، ابتكار 123، الحي، نيويورك، NY 10001",
        "phone": "123-4567 (555) 1+",
        "email": "info@inclusiverm.com",
        "headquarters": "المقر الرئيسي",
        "hq_address": "إسلام آباد، باكستان",
        "rep_offices": "المكاتب التمثيلية",
        "uae_rak": "الإمارات العربية المتحدة (رأس الخيمة)",
        "uk_london": "المملكة المتحدة (لندن)",
        "contact_us": "تواصل معنا",
        "inst_enquiries": "الاستفسارات المؤسسية",
        "rights_full": "© شركة إدارة الموارد الشاملة (الخاصة) المحدودة | جميع الحقوق محفوظة",
        "powered_by": "بدعم من: TechSoft"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
