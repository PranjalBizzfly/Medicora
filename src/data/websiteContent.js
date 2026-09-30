/**
 * DR. MOHINI MUTHA - SOURCE OF TRUTH CONTENT REPOSITORY
 * Extracted directly from approved project documents:
 * - Dr Mohini Muttha - Website Content.pdf
 * - Dr Mohini Mutha - Website Sitemap.pdf
 * - Generic keywords-Target - Sheet1.pdf
 * - Mohini Mutha Brand Book
 */

export const siteConfig = {
  doctorName: "Dr. Mohini Mutha",
  degrees: "MD (Homeopathy) · PGDPC",
  specialization: "Homeopathic Materia Medica & Psychological Counselling",
  experienceYears: "14+",
  patientsTreated: "12,000+",
  ongcYears: "8 Years (2018 - Present)",
  ongcDesignation: "Consultant Homoeopathic Physician with ONGC",
  countriesConsulted: "India, UAE, USA",
  clinicName: "Dr. Mutha's Homeopathic Clinic",
  clinicLocation: "Navi Mumbai & Pune, India",
  digitalPractice: "Trivana Wellness",
  digitalPracticeDesc: "A digital practice combining homeopathy, counselling, yoga, and meditation into one care plan.",
  phone: "+91 942 397 2150",
  email: "drmohini@drmohinimutha.com",
  socials: {
    instagram: "https://www.instagram.com/drmohinimutha?stkn=Nm43eWtnYXhkMTA5",
    facebook: "https://www.facebook.com/profile.php?id=61591859768485",
    youtube: "https://youtube.com/@drmohinimutha?si=46DQDAjUCmwoi7Yr",
    linkedin: "https://www.linkedin.com/in/drmohinimutha?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  }
};

export const navigationLinks = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "About Us",
    children: [
      { label: "About Me", path: "/about-me", desc: "Clinical experience with a personal approach" },
      { label: "My Journey", path: "/my-journey", desc: "From studying medicine to understanding the person behind it" },
      { label: "My Approach", path: "/my-approach", desc: "Care that starts with understanding" },
      { label: "Clinical Philosophy", path: "/clinical-philosophy", desc: "Good care begins with understanding the person behind the symptoms" }
    ]
  },
  {
    label: "Expertise",
    isMega: true,
    children: [
      { label: "General Health & Wellness", path: "/expertise/general-health-wellness", desc: "Everyday care for your overall wellbeing" },
      { label: "Respiratory Health", path: "/expertise/respiratory-health", desc: "Support for healthier breathing and wellbeing" },
      { label: "Headache & Migraine Care", path: "/expertise/headache-migraine-care", desc: "Understand your headaches and find better support" },
      { label: "Digestive & Gut Health", path: "/expertise/digestive-gut-health", desc: "Understand your digestion. Support your overall health" },
      { label: "Skin, Hair & Allergies", path: "/expertise/skin-hair-allergies", desc: "Personalised care for healthier skin and hair" },
      { label: "Women's Wellness", path: "/expertise/womens-wellness", desc: "Personalised care for women at every stage" },
      { label: "Child & Adolescent Wellness", path: "/expertise/child-adolescent-wellness", desc: "Thoughtful care for growing minds and bodies" },
      { label: "Joint, Muscle & Pain Management", path: "/expertise/joint-muscle-pain-management", desc: "Support for easier movement and everyday comfort" },
      { label: "Sleep & Lifestyle Concerns", path: "/expertise/sleep-lifestyle-concerns", desc: "Better sleep starts with understanding your routine" },
      { label: "Mental, Emotional & Psychosomatic", path: "/expertise/mental-emotional-psychosomatic-wellness", desc: "Support for emotional concerns that may affect how you feel and function" }
    ]
  },
  {
    label: "My Approach",
    children: [
      { label: "Why Homeopathy", path: "/my-approach/why-homeopathy", desc: "Looking at the individual, not just the condition" },
      { label: "Integrated Healing", path: "/my-approach/integrated-healing", desc: "Homeopathy, counselling and mind-body practices" },
      { label: "Consultation Process", path: "/my-approach/consultation-process", desc: "A simple, thoughtful approach to your care" },
      { label: "Personalised Treatment", path: "/my-approach/personalised-treatment", desc: "Learn how care is considered around your individual concerns, needs and circumstances" }
    ]
  },
  {
    label: "Credentials",
    children: [
      { label: "Professional Experience", path: "/credentials/professional-experience", desc: "A clinical journey shaped by years of patient care" },
      { label: "Education & Qualifications", path: "/credentials/education-qualifications", desc: "Qualifications that support thoughtful patient care" },
      { label: "Achievements", path: "/credentials/achievements", desc: "Milestones built through practice and dedication" }
    ]
  },
  {
    label: "Resources",
    children: [
      { label: "Patient Stories", path: "/resources/patient-stories", desc: "Real experiences from people I have cared for" },
      { label: "Case Studies", path: "/resources/case-studies", desc: "Understanding the person behind the concern" },
      { label: "Blogs", path: "/resources/blogs", desc: "Simple insights for better everyday wellbeing" },
      { label: "Invite Me To Speak", path: "/resources/invite-me-to-speak", desc: "Conversations that create awareness and understanding" },
      { label: "FAQs", path: "/resources/faqs", desc: "Questions about your care? We're here to help" },
      { label: "Myths vs Facts", path: "/resources/myths-vs-facts", desc: "Separating common beliefs from better understanding" }
    ]
  }
];

// Source: Website Sitemap brief, "Consultation Process — Use a simple 4–5 step process".
export const consultationSteps = [
  { number: "01", title: "Listen", subtitle: "Understand your concerns." },
  { number: "02", title: "Assess", subtitle: "Explore health history and relevant factors." },
  { number: "03", title: "Understand", subtitle: "Look at physical, emotional and lifestyle context." },
  { number: "04", title: "Personalise", subtitle: "Develop an individualised care approach." },
  { number: "05", title: "Follow Up", subtitle: "Review progress and adapt as appropriate." }
];

export const credibilityPillars = [
  {
    title: "14+ Years Clinical Experience",
    description: "Practising clinical homeopathy since 2012 across diverse outpatient cases, acute challenges, and long-standing chronic conditions."
  },
  {
    title: "MD + Psychological Counselling",
    description: "MD in Homeopathy (specialising in Materia Medica) paired with a Post Graduate Diploma in Psychological Counselling (PGDPC)."
  },
  {
    title: "Integrated Mind-Body Care",
    description: "Addressing the person behind the symptoms by considering emotional triggers, stress, lifestyle habits, and physical health together."
  },
  {
    title: "Institutional Healthcare Trust",
    description: "Serving as a Consultant Homoeopathic Physician with ONGC since 2018, bringing structured healthcare discipline to patient consultations."
  },
  {
    title: "12,000+ Consultations",
    description: "Trusted by thousands of patients across India and internationally in the UAE and USA through in-person and digital consultations."
  }
];

// Expertise pages — source: Website Content PDF "Whole Website Content" Pages 6–15 (pp.124–135);
// concerns lists: Sitemap brief pp.18–22; shortDesc: Content PDF Sitemap page (p.169);
// FAQs: verbatim from Content PDF FAQ page (pp.153–155).
const EXPERTISE_FAQ = {
  sameApproach: { q: "Does every person receive the same approach?", a: "No. Each consultation begins by understanding your symptoms, health history, lifestyle and individual concerns." },
  whatToDiscuss: { q: "What can I discuss during a consultation?", a: "You can discuss your physical symptoms, emotional concerns, lifestyle, sleep and other health-related experiences." },
  firstConsultation: { q: "What happens during my first consultation?", a: "The consultation focuses on understanding your concerns, symptoms, health history, lifestyle and overall wellbeing." },
  askBeforeBooking: { q: "Can I ask a question before booking?", a: "Yes. If you are unsure whether an online consultation is right for your concern, you can get in touch before booking." },
  anxietyOnline: { q: "Do you provide online anxiety consultations?", a: "Yes. You can discuss anxiety, stress, emotional concerns and related wellbeing challenges during an online consultation." },
  counselling: { q: "Does Dr. Mohini provide psychological counselling?", a: "Dr. Mohini holds a Post Graduate Diploma in Psychological Counselling and incorporates counselling perspectives where appropriate." },
  homeopathyCounselling: { q: "Can homeopathy and counselling be part of the same care plan?", a: "Depending on your needs, homeopathy and counselling may be considered as complementary parts of an individualised approach." },
  yogaMeditation: { q: "Do you offer yoga and meditation guidance?", a: "Yoga and meditation may be included as supportive mind-body practices where they are appropriate for your individual needs." }
};

// Standard final-CTA tiles used on most expertise pages (source: "Message me / Chat with me / Book a consultation").
const standardTiles = (messageText, chatText) => [
  { type: "message", label: "Message me", text: messageText },
  { type: "chat", label: "Chat with me", text: chatText },
  { type: "book", label: "Book a consultation", text: "Choose a convenient time to connect." }
];

const REL = {
  general: { label: "General Health & Wellness", path: "/expertise/general-health-wellness" },
  respiratory: { label: "Respiratory Health", path: "/expertise/respiratory-health" },
  headache: { label: "Headache & Migraine Care", path: "/expertise/headache-migraine-care" },
  digestive: { label: "Digestive & Gut Health", path: "/expertise/digestive-gut-health" },
  skin: { label: "Skin, Hair & Allergies", path: "/expertise/skin-hair-allergies" },
  mental: { label: "Mental, Emotional & Psychosomatic Wellness", path: "/expertise/mental-emotional-psychosomatic-wellness" },
  child: { label: "Child & Adolescent Wellness", path: "/expertise/child-adolescent-wellness" },
  sleep: { label: "Sleep & Lifestyle Concerns", path: "/expertise/sleep-lifestyle-concerns" },
  integrated: { label: "Integrated Healing", path: "/my-approach/integrated-healing" },
  personalised: { label: "Personalised Treatment", path: "/my-approach/personalised-treatment" },
  whyHomeopathy: { label: "Why Homeopathy", path: "/my-approach/why-homeopathy" },
  blogs: { label: "Blogs", path: "/resources/blogs" },
  myths: { label: "Myths vs Facts", path: "/resources/myths-vs-facts" },
  book: { label: "Book a Consultation", path: "/book-a-consultation" }
};

export const expertiseSpecialties = [
  {
    id: "general-health-wellness",
    title: "General Health & Wellness",
    tagline: "Everyday care for your overall wellbeing",
    path: "/expertise/general-health-wellness",
    icon: "HeartPulse",
    shortDesc: "Personalised support for everyday health, lifestyle and overall wellbeing.",
    careAreas: [
      { title: "General Wellness", text: "Support for maintaining your energy, balance and general wellbeing through personalised care.", linkLabel: "Discover more", href: "#concerns" },
      { title: "Lifestyle concerns", text: "Guidance for sleep, stress, nutrition and daily habits that may influence your overall wellbeing.", linkLabel: "Discover more", href: "/expertise/sleep-lifestyle-concerns" },
      { title: "Common health concerns", text: "Personalised support for everyday concerns affecting your comfort, routine and quality of life.", linkLabel: "Discover more", href: "#concerns" }
    ],
    concerns: ["Overall wellbeing", "Preventive health awareness", "Lifestyle", "Individualised wellness"],
    approach: {
      heading: "Thoughtful care for your overall wellbeing",
      intro: "A personalized approach that considers your health, lifestyle and individual needs.",
      items: [
        { title: "Health matters", text: "Understand the concerns that may be affecting your everyday wellbeing." },
        { title: "Lifestyle matters", text: "Small, sustainable changes can support healthier and more balanced daily routines." },
        { title: "Your Wellbeing Matters", text: "Your care should reflect your individual needs, experiences and circumstances." }
      ]
    },
    testimonials: [],
    faqs: [EXPERTISE_FAQ.sameApproach, EXPERTISE_FAQ.whatToDiscuss, EXPERTISE_FAQ.askBeforeBooking],
    relatedPages: [REL.sleep, REL.personalised, REL.whyHomeopathy, REL.blogs, REL.book],
    cta: {
      heading: "Start a conversation about your health",
      intro: "Whether you have a specific concern or simply want to understand your health better, begin with a conversation.",
      tiles: standardTiles("Share what's concerning you.", "Discuss your health and wellbeing.")
    }
  },
  {
    id: "respiratory-health",
    title: "Respiratory Health",
    tagline: "Support for healthier breathing and wellbeing",
    path: "/expertise/respiratory-health",
    icon: "Wind",
    shortDesc: "Support for common respiratory concerns and breathing-related wellbeing.",
    careAreas: [
      { title: "Breathing concerns", text: "Personalised care for common respiratory concerns that may affect your comfort, breathing and daily life.", linkLabel: "Discover more", href: "#concerns" },
      { title: "Recurrent symptoms", text: "Support for recurring cough, congestion and other breathing-related discomfort.", linkLabel: "Discover more", href: "#concerns" },
      { title: "Long-term wellbeing", text: "Thoughtful care that considers respiratory health, lifestyle and your overall wellbeing.", linkLabel: "Discover more", href: "#approach" }
    ],
    concerns: ["Recurring respiratory concerns", "Allergic tendencies", "Sinus-related concerns", "Seasonal respiratory issues"],
    approach: {
      heading: "Understanding your respiratory health",
      intro: "Explore how personalised care can support your breathing, comfort and everyday wellbeing.",
      items: [
        { title: "Listen carefully", text: "Your symptoms, health history and experiences help shape a more informed consultation." },
        { title: "Understand patterns", text: "Understand your health patterns and the factors that may influence how you feel." },
        { title: "Personalise care", text: "Your care is considered around your individual needs, lifestyle and circumstances." }
      ]
    },
    testimonials: [],
    faqs: [EXPERTISE_FAQ.sameApproach, EXPERTISE_FAQ.whatToDiscuss, EXPERTISE_FAQ.askBeforeBooking],
    relatedPages: [REL.skin, REL.child, REL.whyHomeopathy, REL.blogs, REL.myths],
    cta: {
      heading: "Start a conversation about your health",
      intro: "Have a respiratory concern? Begin with a conversation and explore the right next step for you.",
      tiles: standardTiles("Share your respiratory concern.", "Discuss your symptoms and concerns.")
    }
  },
  {
    id: "headache-migraine-care",
    title: "Headache & Migraine Care",
    tagline: "Understand your headaches and find better support",
    path: "/expertise/headache-migraine-care",
    icon: "Brain",
    shortDesc: "Personalised care focused on understanding headaches, migraine patterns and related concerns.",
    careAreas: [
      { title: "Headache concerns", text: "Personalised support for headaches and migraine-related concerns that may affect your comfort and routine.", linkLabel: "Explore care", href: "#concerns" },
      { title: "Migraine support", text: "Care focused on understanding migraine patterns, triggers and related concerns.", linkLabel: "Discover more", href: "#approach" },
      { title: "Lifestyle factors", text: "Explore how sleep, stress and daily habits may influence your overall health and comfort.", linkLabel: "Learn more", href: "/expertise/sleep-lifestyle-concerns" }
    ],
    concerns: ["Headaches", "Migraine patterns", "Triggers", "Lifestyle factors", "Patient assessment"],
    approach: {
      heading: "Understanding your headache concerns",
      intro: "Learn more about your symptoms, patterns and the factors that may be influencing your wellbeing.",
      items: [
        { title: "Listen carefully", text: "Your symptoms, experiences and health history help create a clearer picture of your concerns." },
        { title: "Understand patterns", text: "Recurring headaches and migraines can have different patterns, triggers and associated concerns." },
        { title: "Personalise care", text: "Your care is considered around your individual symptoms, lifestyle and circumstances." }
      ]
    },
    testimonials: [
      { quote: "I felt heard and understood throughout my consultation, and my concerns were discussed with genuine care." },
      { quote: "The consultation gave me a clearer understanding of my recurring headaches and what I could work on." },
      { quote: "I appreciated the time taken to understand my symptoms instead of rushing through the consultation." }
    ],
    faqs: [EXPERTISE_FAQ.sameApproach, EXPERTISE_FAQ.whatToDiscuss, EXPERTISE_FAQ.firstConsultation],
    relatedPages: [REL.sleep, REL.mental, REL.personalised, REL.blogs],
    cta: {
      heading: "Start a conversation about your health",
      intro: "Share what you have been experiencing and take the first step towards personalised care.",
      tiles: standardTiles("Share your concerns with me.", "Discuss your symptoms and questions.")
    }
  },
  {
    id: "digestive-gut-health",
    title: "Digestive & Gut Health",
    tagline: "Understand your digestion. Support your overall health.",
    path: "/expertise/digestive-gut-health",
    icon: "Utensils",
    shortDesc: "Support for digestive concerns, gut health and everyday digestive wellbeing.",
    careAreas: [
      { title: "Digestive concerns", text: "Personalised support for common digestive concerns affecting comfort and everyday wellbeing.", linkLabel: "Discover more", href: "#concerns" },
      { title: "Gut health", text: "Understand digestive patterns, food habits and lifestyle factors that may influence your gut health.", linkLabel: "Explore care", href: "#approach" },
      { title: "Recurring discomfort", text: "Thoughtful care for recurring bloating, acidity, indigestion and digestive discomfort.", linkLabel: "Discover more", href: "#concerns" }
    ],
    concerns: ["Acidity", "Indigestion", "Bloating", "Constipation", "IBS-related concerns"],
    approach: {
      heading: "Thoughtful care for digestive wellbeing",
      intro: "Understand your symptoms, daily habits and lifestyle factors to support better digestive wellbeing.",
      items: [
        { title: "Listen carefully", text: "Your symptoms, experiences and health history help create a better understanding of your digestive concerns." },
        { title: "Understand patterns", text: "Digestive symptoms can be influenced by food habits, lifestyle and everyday routines." },
        { title: "Personalise care", text: "Your care is considered around your individual symptoms, needs and circumstances." }
      ]
    },
    testimonials: [
      { quote: "The consultation gave me time to explain my concerns and helped me understand my digestive symptoms better." },
      { quote: "I appreciated the thoughtful questions and personalized approach throughout my consultation." },
      { quote: "The consultation felt comfortable and focused on understanding my concerns." }
    ],
    faqs: [EXPERTISE_FAQ.sameApproach, EXPERTISE_FAQ.whatToDiscuss, EXPERTISE_FAQ.firstConsultation],
    relatedPages: [REL.mental, REL.sleep, REL.integrated, REL.blogs],
    cta: {
      heading: "Find the right support for your digestive health",
      intro: "Share what you've been experiencing and take the first step towards personalised digestive care.",
      tiles: standardTiles("Share your digestive concerns.", "Discuss your symptoms and questions.")
    }
  },
  {
    id: "skin-hair-allergies",
    title: "Skin, Hair & Allergies",
    tagline: "Personalised care for healthier skin and hair",
    path: "/expertise/skin-hair-allergies",
    icon: "Sparkles",
    shortDesc: "Care for common skin, hair, scalp and allergic concerns.",
    careAreas: [
      { title: "Skin concerns", text: "Personalised support for common skin concerns affecting comfort, confidence and everyday wellbeing.", linkLabel: "Learn more", href: "#concerns" },
      { title: "Hair & scalp health", text: "Care for recurring hair and scalp concerns with attention to your overall health and wellbeing.", linkLabel: "Discover more", href: "#concerns" },
      { title: "Allergic concerns", text: "Support for recurring allergic symptoms and sensitivities that may affect your everyday life.", linkLabel: "Discover more", href: "/expertise/respiratory-health" }
    ],
    concerns: ["Acne", "Eczema", "Allergic skin concerns", "Hair fall", "Recurring skin issues"],
    approach: {
      heading: "Understanding your Skin and Wellbeing",
      intro: "Explore your symptoms, lifestyle and individual concerns through a personalised consultation.",
      items: [
        { title: "Listen carefully", text: "Your symptoms, experiences and health history help create a clearer understanding of your concerns." },
        { title: "Understand patterns", text: "Recurring skin, hair and allergic concerns can be influenced by different patterns and everyday factors." },
        { title: "Personalise care", text: "Your care is considered around your individual symptoms, needs and circumstances." }
      ]
    },
    testimonials: [],
    faqs: [EXPERTISE_FAQ.sameApproach, EXPERTISE_FAQ.whatToDiscuss, EXPERTISE_FAQ.askBeforeBooking],
    relatedPages: [REL.respiratory, REL.general, REL.whyHomeopathy, REL.blogs],
    cta: {
      heading: "Start a conversation about your concerns",
      intro: "Share what you have been experiencing and begin a personalised conversation about your wellbeing.",
      tiles: standardTiles("Share your concerns with me.", "Discuss your symptoms and questions.")
    }
  },
  {
    id: "womens-wellness",
    title: "Women's Wellness",
    tagline: "Personalised care for women at every stage",
    path: "/expertise/womens-wellness",
    icon: "UserCheck",
    shortDesc: "Thoughtful support for women's health, emotional wellbeing and changing needs.",
    careAreas: [
      { title: "Women's health", text: "Thoughtful support for common concerns affecting women's health, comfort and overall wellbeing.", linkLabel: "Learn more", href: "#concerns" },
      { title: "Hormonal wellbeing", text: "Care that considers hormonal changes, lifestyle and everyday factors that may influence wellbeing.", linkLabel: "Discover more", href: "#concerns" },
      { title: "Emotional wellbeing", text: "Personalised support when stress, emotions or life changes begin to affect your wellbeing.", linkLabel: "Discover more", href: "/expertise/mental-emotional-psychosomatic-wellness" }
    ],
    concerns: ["Menstrual health", "Hormonal concerns", "PCOS/PCOD", "Women's overall wellness"],
    approach: {
      heading: "Care that listens to what women experience",
      intro: "Every woman's health journey is different. Understanding your concerns is where personalised care begins.",
      items: [
        { title: "Listen carefully", text: "Your symptoms, experiences and health history help create a clearer understanding of your concerns." },
        { title: "Understand your needs", text: "Health, hormonal and emotional concerns can be influenced by different stages of life and everyday circumstances." },
        { title: "Personalise care", text: "Your care is considered around your individual needs, experiences and wellbeing." }
      ]
    },
    testimonials: [],
    faqs: [EXPERTISE_FAQ.sameApproach, EXPERTISE_FAQ.whatToDiscuss, EXPERTISE_FAQ.firstConsultation],
    relatedPages: [REL.mental, REL.sleep, REL.personalised, REL.blogs, REL.myths, REL.book],
    cta: {
      heading: "Begin your personalised care",
      intro: "Share what you have been experiencing and take the first step towards personalised care.",
      tiles: [
        { type: "book", label: "Book a consultation", text: "Choose a convenient time to speak with Dr. Mohini." },
        { type: "link", label: "Meet Dr. Mohini", text: "Learn about her experience and approach to patient care.", href: "/about-me" },
        { type: "chat", label: "Chat with me", text: "Discuss your health and wellbeing." }
      ]
    }
  },
  {
    id: "child-adolescent-wellness",
    title: "Child & Adolescent Wellness",
    tagline: "Thoughtful care for growing minds and bodies",
    path: "/expertise/child-adolescent-wellness",
    icon: "Smile",
    shortDesc: "Personalised support for children and adolescents through different stages of growing.",
    careAreas: [
      { title: "Childhood wellbeing", text: "Personalised support for common health and wellbeing concerns during childhood.", linkLabel: "Explore care", href: "#concerns" },
      { title: "Growing years", text: "Care that considers changing needs, routines, emotions and everyday wellbeing through the growing years.", linkLabel: "Discover more", href: "#approach" },
      { title: "Emotional wellbeing", text: "Support for children and adolescents navigating stress, emotions and life changes.", linkLabel: "Discover more", href: "/expertise/mental-emotional-psychosomatic-wellness" }
    ],
    concerns: ["Common childhood concerns", "Allergies", "Respiratory concerns", "Digestive concerns", "Adolescent wellbeing"],
    approach: {
      heading: "Care that understands every stage of growing",
      intro: "Every child is different. Understanding their needs, experiences and individual circumstances is an important part of thoughtful care.",
      items: [
        { title: "Understand their needs", text: "Your child's symptoms, experiences and daily routines help provide context for their concerns." },
        { title: "Understand their stage", text: "Growing years bring changing physical, emotional and lifestyle needs that deserve thoughtful attention." },
        { title: "Personalise care", text: "Care is considered around your child's individual needs, circumstances and overall wellbeing." }
      ]
    },
    testimonials: [],
    faqs: [EXPERTISE_FAQ.sameApproach, EXPERTISE_FAQ.whatToDiscuss, EXPERTISE_FAQ.askBeforeBooking],
    relatedPages: [REL.respiratory, REL.digestive, REL.skin, REL.blogs],
    cta: {
      heading: "Explore care for your child",
      intro: "Tell us about your child's health and take the next step towards personalised care.",
      tiles: standardTiles("Discuss your concerns with me.", "Discuss your child's wellbeing.")
    }
  },
  {
    id: "joint-muscle-pain-management",
    title: "Joint, Muscle & Pain Management",
    tagline: "Support for easier movement and everyday comfort",
    path: "/expertise/joint-muscle-pain-management",
    icon: "Activity",
    shortDesc: "Support for joint, muscle and recurring pain concerns affecting everyday comfort.",
    careAreas: [
      { title: "Joint concerns", text: "Personalised support for common joint concerns that may affect movement, comfort and daily activities.", linkLabel: "Discover more", href: "#concerns" },
      { title: "Muscle discomfort", text: "Thoughtful care for recurring muscle pain, stiffness and everyday discomfort.", linkLabel: "Discover more", href: "#concerns" },
      { title: "Ongoing pain", text: "Support for persistent pain concerns with attention to your symptoms, lifestyle and overall wellbeing.", linkLabel: "Discover more", href: "#approach" }
    ],
    concerns: ["Joint discomfort", "Stiffness", "Back pain", "Muscle discomfort", "Mobility-related concerns"],
    approach: {
      heading: "Understanding your pain and movement",
      intro: "Every pain experience is different. Understanding your symptoms, daily routine and individual circumstances helps shape personalised care.",
      items: [
        { title: "Movement matters", text: "Understanding how pain and discomfort may affect your everyday activities and movement." },
        { title: "Your experience matters", text: "Looking at your symptoms within the context of your individual experiences and circumstances." },
        { title: "Personalised care matters", text: "Consider your needs, concerns and lifestyle when discussing the way forward." }
      ]
    },
    testimonials: [],
    faqs: [EXPERTISE_FAQ.sameApproach, EXPERTISE_FAQ.whatToDiscuss, EXPERTISE_FAQ.firstConsultation],
    relatedPages: [REL.sleep, REL.general, REL.personalised, REL.blogs],
    cta: {
      heading: "Take the next step for your mobility",
      intro: "Learn more about personalised support for movement, stiffness and pain-related concerns.",
      primaryLabel: "View consultation options",
      primaryHref: "/book-a-consultation",
      tiles: [
        { type: "link", label: "See your options", text: "Move towards more comfortable days", href: "/my-approach/personalised-treatment" },
        { type: "link", label: "Explore your care options", text: "Understand the consultation approach.", href: "/my-approach/consultation-process" },
        { type: "book", label: "Book an appointment", text: "Choose a convenient time for your consultation." }
      ]
    }
  },
  {
    id: "sleep-lifestyle-concerns",
    title: "Sleep & Lifestyle Concerns",
    tagline: "Better sleep starts with understanding your routine",
    path: "/expertise/sleep-lifestyle-concerns",
    icon: "Moon",
    shortDesc: "Guidance for sleep, stress, routines and lifestyle factors affecting everyday wellbeing.",
    careAreas: [
      { title: "Sleep concerns", text: "Personalised support for sleep difficulties that may affect your energy, routine and everyday wellbeing.", linkLabel: "Discover more", href: "#concerns" },
      { title: "Stress & daily life", text: "Understand how stress, routines and lifestyle habits may influence your sleep and overall wellbeing.", linkLabel: "Discover more", href: "/expertise/mental-emotional-psychosomatic-wellness" },
      { title: "Healthy routines", text: "Practical guidance around sleep, movement, relaxation and everyday lifestyle habits.", linkLabel: "Discover more", href: "/my-approach/integrated-healing" }
    ],
    concerns: ["Sleep difficulties", "Stress", "Lifestyle patterns", "Work-life pressures", "Wellness routines"],
    approach: {
      heading: "Understanding your sleep patterns",
      intro: "Explore the habits, routines and lifestyle factors that may influence your rest.",
      items: [
        { title: "Sleep matters", text: "Understanding how your sleep patterns may affect your energy, mood and everyday wellbeing." },
        { title: "Lifestyle matters", text: "Looking at the habits, routines and everyday factors that shape your daily life." },
        { title: "Your needs matter", text: "Creating personalised guidance around your individual concerns, lifestyle and circumstances." }
      ]
    },
    testimonials: [],
    faqs: [EXPERTISE_FAQ.whatToDiscuss, EXPERTISE_FAQ.yogaMeditation, EXPERTISE_FAQ.sameApproach],
    relatedPages: [REL.mental, REL.headache, REL.integrated, REL.blogs],
    cta: {
      heading: "Start a conversation about your wellbeing",
      intro: "Share what you've been experiencing and begin a personalised conversation about your sleep and lifestyle.",
      tiles: standardTiles("Share your concerns with me.", "Discuss your sleep and wellbeing.")
    }
  },
  {
    id: "mental-emotional-psychosomatic-wellness",
    title: "Mental, Emotional & Psychosomatic Wellness",
    tagline: "Support for emotional concerns that may affect how you feel and function.",
    path: "/expertise/mental-emotional-psychosomatic-wellness",
    icon: "ShieldAlert",
    isKeyDifferentiator: true,
    shortDesc: "Support for emotional wellbeing and concerns involving the connection between mind and body.",
    careAreas: [
      { title: "Emotional wellbeing", text: "Personalised support when stress, emotions or life changes begin affecting your everyday wellbeing.", linkLabel: "Discover more", href: "#concerns" },
      { title: "Stress & anxiety", text: "Thoughtful care for persistent worry, stress and feelings of emotional overwhelm.", linkLabel: "Learn more", href: "#concerns" },
      { title: "Mind-body concerns", text: "Care that considers how emotional experiences and physical symptoms may interact.", linkLabel: "Discover more", href: "/my-approach/integrated-healing" }
    ],
    concerns: ["Stress", "Anxiety", "Emotional wellbeing", "Psychosomatic concerns", "Mind-body connection", "Counselling support"],
    approach: {
      heading: "Care that considers the whole experience",
      intro: "Understanding what you're going through is an important part of meaningful, personalised care.",
      items: [
        { title: "Your emotions matter", text: "Making space to understand what you are experiencing and how it may be affecting your everyday life." },
        { title: "Your symptoms matter", text: "Considering physical concerns alongside emotional wellbeing to understand the wider picture." },
        { title: "Your story matters", text: "Understanding your experiences, individual needs and concerns within the bigger picture." }
      ]
    },
    testimonials: [],
    mentalHealthNote: true,
    faqs: [EXPERTISE_FAQ.anxietyOnline, EXPERTISE_FAQ.counselling, EXPERTISE_FAQ.homeopathyCounselling],
    relatedPages: [REL.sleep, REL.integrated, REL.blogs, REL.myths, REL.book],
    cta: {
      heading: "Take the first step towards better health",
      intro: "You don't need to have everything figured out. Start by sharing what you're experiencing and take the next step together.",
      tiles: [
        { type: "link", label: "Explore your care options", text: "Learn more about the approach that may suit your needs.", href: "/my-approach/integrated-healing" },
        { type: "chat", label: "Chat with me", text: "Discuss your concerns openly." },
        { type: "book", label: "Book a consultation", text: "Choose a convenient time to connect." }
      ]
    }
  }
];

// Only genuine patient message in the approved content document
// (Page 24 – Case Studies, "Testimonial 01"). Do not add invented testimonials.
export const patientTestimonials = [
  {
    id: 1,
    quote: "I honestly don't know how to put my gratitude into words. When I was going through those difficult moments of panic and anxiety, there were times when I felt helpless and frightened. Your medicines helped me, but more than that, your patience, understanding and reassuring words gave me the courage to face those moments...",
    author: "Patient experience",
    location: "",
    category: "",
    condition: ""
  }
];

// Page 24 – Case Studies. No approved case details exist yet: only the
// recommended structure (sitemap brief) is published. Add anonymised,
// consented cases here later.
export const caseStudiesList = [];

export const caseStudyStructure = [
  { title: "Patient Profile", text: "Understanding what brought the patient to consultation." },
  { title: "Presenting Concern", text: "Every case begins with understanding the symptoms, history and concerns shared by the patient." },
  { title: "Consultation & Assessment", text: "A detailed consultation helps create a complete picture of your health concerns and individual needs." },
  { title: "Care Approach", text: "Care is considered around the patient's needs, circumstances and ongoing experience." },
  { title: "Follow-up/Outcome", text: "Following the patient's experience through personalised care." }
];

// Page 25 – Blogs: titles and one-line descriptions only (no article bodies yet).
export const blogCategories = [
  { id: "anxiety", title: "Anxiety & emotional wellbeing", text: "Understand anxiety, stress, emotional health and the connection between mind and body." },
  { id: "sleep", title: "Sleep & lifestyle", text: "Discover practical insights on sleep, daily routines, relaxation and healthier lifestyle habits." },
  { id: "homeopathy", title: "Homeopathy & health", text: "Learn more about homeopathy, common health concerns and personalised approaches to wellbeing." }
];

export const blogArticles = [
  {
    id: "anxiety-myths-and-facts",
    title: "Anxiety myths and facts: what should you know?",
    category: "Anxiety",
    categoryId: "anxiety",
    summary: "Simple insights to help you understand common misconceptions about anxiety."
  },
  {
    id: "can-anxiety-affect-your-sleep",
    title: "Can anxiety affect your sleep?",
    category: "Sleep",
    categoryId: "sleep",
    summary: "Explore the connection between worry, stress and everyday sleep patterns."
  },
  {
    id: "does-homeopathy-work-for-anxiety",
    title: "Does homeopathy work for anxiety?",
    category: "Homeopathy",
    categoryId: "homeopathy",
    summary: "Understand the approach, evidence and questions worth considering."
  }
];

// Page 28 – Myths vs Facts (3 source myths) + sitemap brief example myth.
export const mythsAndFactsList = [
  {
    title: "Homeopathy is the same for everyone",
    myth: "Everyone with the same condition receives the same homeopathic approach.",
    fact: "Homeopathy is traditionally individualised around the person's symptoms and overall health picture."
  },
  {
    title: "Anxiety is only about worrying",
    myth: "Anxiety is simply feeling worried or stressed.",
    fact: "Anxiety can involve emotional, physical and behavioural experiences that differ from person to person."
  },
  {
    title: "Talking about emotions isn't healthcare",
    myth: "Emotional concerns should be kept separate from physical health.",
    fact: "Discussing emotional wellbeing can provide important context when understanding a person's overall experience."
  },
  {
    title: "Holistic care and conventional medicine",
    myth: "Holistic healthcare means ignoring conventional medicine.",
    fact: "Holistic care focuses on understanding the individual as a whole. Patients should receive appropriate medical evaluation and care based on their individual circumstances."
  }
];

// Page 27 – FAQs: exactly the 15 source questions and answers.
export const generalFaqs = [
  {
    category: "General Questions",
    intro: "Learn more about Dr. Mohini, online consultations, homeopathy and who Trivana Wellness is for.",
    items: [
      { q: "Who is Dr. Mohini Mutha?", a: "Dr. Mohini Mutha is a Homeopathic Physician with 14+ years of clinical experience. She holds BHMS, MD in Homeopathy and PGDPC qualifications." },
      { q: "What is Trivana Wellness?", a: "Trivana Wellness is Dr. Mohini's digital practice offering personalised homeopathic care, counselling and supportive mind-body practices." },
      { q: "Who can consult Dr. Mohini?", a: "Online consultations are available for individuals seeking support for a range of health, emotional and wellbeing concerns." },
      { q: "Can I consult from outside India?", a: "Yes. Dr. Mohini has consulted patients from India, the UAE and the USA through online consultations." },
      { q: "Does every person receive the same approach?", a: "No. Each consultation begins by understanding your symptoms, health history, lifestyle and individual concerns." }
    ]
  },
  {
    category: "Service Details",
    intro: "Understand what you can discuss during a consultation and how different areas of care can support your wellbeing.",
    items: [
      { q: "What can I discuss during a consultation?", a: "You can discuss your physical symptoms, emotional concerns, lifestyle, sleep and other health-related experiences." },
      { q: "Do you provide online anxiety consultations?", a: "Yes. You can discuss anxiety, stress, emotional concerns and related wellbeing challenges during an online consultation." },
      { q: "Does Dr. Mohini provide psychological counselling?", a: "Dr. Mohini holds a Post Graduate Diploma in Psychological Counselling and incorporates counselling perspectives where appropriate." },
      { q: "Can homeopathy and counselling be part of the same care plan?", a: "Depending on your needs, homeopathy and counselling may be considered as complementary parts of an individualised approach." },
      { q: "Do you offer yoga and meditation guidance?", a: "Yoga and meditation may be included as supportive mind-body practices where they are appropriate for your individual needs." }
    ]
  },
  {
    category: "Procedures",
    intro: "Understand how online consultations work, what to expect and how to prepare for your appointment.",
    items: [
      { q: "How do I book an online consultation?", a: "Choose your preferred consultation option and complete the booking process to schedule your appointment with Dr. Mohini." },
      { q: "What happens during my first consultation?", a: "The consultation focuses on understanding your concerns, symptoms, health history, lifestyle and overall wellbeing." },
      { q: "What should I prepare before my consultation?", a: "Keep your relevant medical information, current concerns and questions ready so you can discuss them comfortably during the consultation." },
      { q: "Can I reschedule my consultation?", a: "If you need to change your appointment, please contact Trivana Wellness as early as possible to discuss the available options." },
      { q: "Can I ask a question before booking?", a: "Yes. If you are unsure whether an online consultation is right for your concern, you can get in touch before booking." }
    ]
  }
];
