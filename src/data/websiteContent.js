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
    label: "About",
    children: [
      { label: "About Me", path: "/about-me", desc: "Clinical experience with a personal approach" },
      { label: "My Journey", path: "/my-journey", desc: "A journey built on experience, learning & care" },
      { label: "My Approach", path: "/my-approach", desc: "Care that starts with understanding" },
      { label: "Clinical Philosophy", path: "/clinical-philosophy", desc: "Health is more than a set of symptoms" }
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
      { label: "Mental, Emotional & Psychosomatic", path: "/expertise/mental-emotional-psychosomatic-wellness", desc: "Support for emotional concerns affecting how you feel" }
    ]
  },
  {
    label: "My Approach",
    children: [
      { label: "Why Homeopathy", path: "/my-approach/why-homeopathy", desc: "Looking at the individual, not just the condition" },
      { label: "Integrated Healing", path: "/my-approach/integrated-healing", desc: "Homeopathy, counselling and mind-body practices" },
      { label: "Consultation Process", path: "/my-approach/consultation-process", desc: "What to expect during your consultation" },
      { label: "Personalised Treatment", path: "/my-approach/personalised-treatment", desc: "Your health story is unique. Your care should be too" }
    ]
  },
  {
    label: "Credentials",
    children: [
      { label: "Professional Experience", path: "/credentials/professional-experience", desc: "A clinical journey shaped by years of patient care" },
      { label: "Education & Qualifications", path: "/credentials/education-qualifications", desc: "Academic foundation supporting thoughtful care" },
      { label: "Achievements", path: "/credentials/achievements", desc: "Milestones built through practice and dedication" }
    ]
  },
  {
    label: "Resources",
    children: [
      { label: "Patient Stories", path: "/resources/patient-stories", desc: "Real experiences from people cared for" },
      { label: "Case Studies", path: "/resources/case-studies", desc: "Understanding the person behind the concern" },
      { label: "Blogs", path: "/resources/blogs", desc: "Simple insights for better everyday wellbeing" },
      { label: "Invite Me To Speak", path: "/resources/invite-me-to-speak", desc: "Conversations that create awareness and understanding" },
      { label: "FAQs", path: "/resources/faqs", desc: "Questions about your care? We're here to help" },
      { label: "Myths vs Facts", path: "/resources/myths-vs-facts", desc: "Separating common beliefs from better understanding" }
    ]
  }
];

export const consultationSteps = [
  {
    number: "01",
    title: "Listen",
    subtitle: "Understand your concerns",
    description: "Every consultation begins with listening. You are given ample time and space to explain what you are experiencing, without rushed checklists."
  },
  {
    number: "02",
    title: "Assess",
    subtitle: "Explore health history and relevant factors",
    description: "We carefully review your past medical history, presenting symptoms, previous treatments, and contributing physical or emotional factors."
  },
  {
    number: "03",
    title: "Understand",
    subtitle: "Look at physical, emotional and lifestyle context",
    description: "Health is rarely isolated to one symptom. We explore how daily routines, stress patterns, sleep, and emotional wellbeing interact."
  },
  {
    number: "04",
    title: "Personalise",
    subtitle: "Develop an individualised care approach",
    description: "Building a tailored plan combining classical homeopathic remedies, counselling guidance, and practical lifestyle adjustments."
  },
  {
    number: "05",
    title: "Follow Up",
    subtitle: "Review progress and adapt as appropriate",
    description: "Care is an evolving partnership. We track your response over time, listen to ongoing experiences, and adapt remedies thoughtfully."
  }
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

export const expertiseSpecialties = [
  {
    id: "general-health-wellness",
    title: "General Health & Wellness",
    tagline: "Everyday care for your overall wellbeing",
    path: "/expertise/general-health-wellness",
    icon: "HeartPulse",
    shortDesc: "Support for maintaining energy, preventive balance, and addressing recurring everyday health concerns through individualised care.",
    careAreas: [
      { title: "General Wellness", text: "Support for maintaining your energy, balance and general wellbeing through personalised care." },
      { title: "Lifestyle Concerns", text: "Guidance for sleep, stress, nutrition and daily habits that may influence your overall wellbeing." },
      { title: "Common Health Concerns", text: "Personalised support for everyday concerns affecting your comfort, routine and quality of life." }
    ],
    faqs: [
      { q: "What does general health and wellness care cover?", a: "It focuses on everyday vitality, preventive health awareness, recurrent seasonal imbalances, and lifestyle guidance tailored to your constitution." },
      { q: "How is homeopathic wellness care different from conventional supplements?", a: "Rather than providing a generic supplement, homeopathic care focuses on assessing individual symptom patterns and overall vitality." }
    ],
    relatedPages: [
      { label: "Lifestyle & Sleep Concerns", path: "/expertise/sleep-lifestyle-concerns" },
      { label: "Personalised Treatment", path: "/my-approach/personalised-treatment" }
    ]
  },
  {
    id: "respiratory-health",
    title: "Respiratory Health",
    tagline: "Support for healthier breathing and wellbeing",
    path: "/expertise/respiratory-health",
    icon: "Wind",
    shortDesc: "Thoughtful homeopathic support for recurring coughs, sinus congestion, seasonal allergies, and breathing comfort.",
    careAreas: [
      { title: "Breathing Concerns", text: "Personalised care for common respiratory concerns that may affect your comfort, breathing and daily life." },
      { title: "Recurrent Symptoms", text: "Support for recurring cough, congestion, sinus heaviness and other breathing-related discomfort." },
      { title: "Long-term Wellbeing", text: "Thoughtful care that considers respiratory health, environmental triggers, lifestyle and your overall wellbeing." }
    ],
    faqs: [
      { q: "Can homeopathy help with seasonal respiratory flare-ups?", a: "Yes. By understanding your specific triggers, weather sensitivities, and symptom presentation, care is individualised to support recovery." },
      { q: "Does this replace emergency breathing assistance?", a: "No. Acute or severe respiratory distress requires immediate conventional emergency care. Homeopathy serves as supportive complementary care." }
    ],
    relatedPages: [
      { label: "Skin, Hair & Allergies", path: "/expertise/skin-hair-allergies" },
      { label: "Why Homeopathy", path: "/my-approach/why-homeopathy" }
    ]
  },
  {
    id: "headache-migraine-care",
    title: "Headache & Migraine Care",
    tagline: "Understand your headaches and find better support",
    path: "/expertise/headache-migraine-care",
    icon: "Brain",
    shortDesc: "Identifying migraine patterns, lifestyle triggers, stress relationships, and individualised support for head pain.",
    careAreas: [
      { title: "Headache Concerns", text: "Personalised support for headaches and tension-related discomfort that may affect your comfort and routine." },
      { title: "Migraine Support", text: "Care focused on understanding migraine patterns, environmental or dietary triggers, and related symptoms." },
      { title: "Lifestyle Factors", text: "Explore how sleep, screen fatigue, stress and daily habits may influence your head comfort." }
    ],
    testimonials: [
      { quote: "I felt heard and understood throughout my consultation, and my concerns were discussed with genuine care.", patient: "Patient Experience", location: "" },
      { quote: "The consultation gave me a clearer understanding of my recurring headaches and what I could work on.", patient: "Patient Experience", location: "" },
      { quote: "I appreciated the time taken to understand my symptoms instead of rushing through the consultation.", patient: "Patient Experience", location: "" }
    ],
    faqs: [
      { q: "Why do you ask about stress and sleep during a headache consultation?", a: "Headaches and migraines are deeply connected to nervous system tension, sleep disruption, emotional stress, and daily lifestyle rhythms." }
    ],
    relatedPages: [
      { label: "Sleep & Lifestyle Concerns", path: "/expertise/sleep-lifestyle-concerns" },
      { label: "Consultation Process", path: "/my-approach/consultation-process" }
    ]
  },
  {
    id: "digestive-gut-health",
    title: "Digestive & Gut Health",
    tagline: "Understand your digestion. Support your overall health.",
    path: "/expertise/digestive-gut-health",
    icon: "Utensils",
    shortDesc: "Gentle, non-invasive support for recurring acidity, bloating, indigestion, sluggish bowel habits, and IBS-related discomfort.",
    careAreas: [
      { title: "Digestive Concerns", text: "Personalised support for common digestive concerns affecting comfort and everyday wellbeing." },
      { title: "Gut Health Patterns", text: "Understand digestive patterns, food habits and lifestyle factors that may influence your gut health." },
      { title: "Recurring Discomfort", text: "Thoughtful care for recurring bloating, acidity, indigestion, constipation and IBS-related concerns." }
    ],
    testimonials: [
      { quote: "The consultation gave me time to explain my concerns and helped me understand my digestive symptoms better.", patient: "Patient Experience", location: "" },
      { quote: "I appreciated the thoughtful questions and personalized approach throughout my consultation.", patient: "Patient Experience", location: "" }
    ],
    faqs: [
      { q: "How does emotional stress affect digestion?", a: "The gut-brain axis is a direct link between emotional stress and digestive discomfort. Our counselling background helps evaluate both sides." }
    ],
    relatedPages: [
      { label: "Mental & Psychosomatic Wellness", path: "/expertise/mental-emotional-psychosomatic-wellness" },
      { label: "Integrated Healing", path: "/my-approach/integrated-healing" }
    ]
  },
  {
    id: "skin-hair-allergies",
    title: "Skin, Hair & Allergies",
    tagline: "Personalised care for healthier skin and hair",
    path: "/expertise/skin-hair-allergies",
    icon: "Sparkles",
    shortDesc: "In-depth constitutional care for eczema, acne flare-ups, chronic allergic sensitivities, and persistent hair fall.",
    careAreas: [
      { title: "Skin Concerns", text: "Personalised support for common skin concerns affecting comfort, confidence and everyday wellbeing like acne and eczema." },
      { title: "Hair & Scalp Health", text: "Care for recurring hair fall, dandruff, and scalp concerns with attention to your overall health and nutrition." },
      { title: "Allergic Concerns", text: "Support for recurring allergic symptoms and sensitivities that may affect your everyday life." }
    ],
    faqs: [
      { q: "Can skin conditions be managed with internal remedies alone?", a: "Homeopathy considers skin manifestations as an expression of the body's internal state, addressing underlying constitutional factors." }
    ],
    relatedPages: [
      { label: "General Health & Wellness", path: "/expertise/general-health-wellness" },
      { label: "Why Homeopathy", path: "/my-approach/why-homeopathy" }
    ]
  },
  {
    id: "womens-wellness",
    title: "Women's Wellness",
    tagline: "Personalised care for women at every stage",
    path: "/expertise/womens-wellness",
    icon: "UserCheck",
    shortDesc: "Empathetic, confidential healthcare supporting menstrual regularity, hormonal shifts, PCOS/PCOD, and emotional equilibrium.",
    careAreas: [
      { title: "Women's Health", text: "Thoughtful support for common concerns affecting women's health, menstrual comfort and overall vitality." },
      { title: "Hormonal Wellbeing", text: "Care that considers hormonal changes, PCOS/PCOD, lifestyle, and everyday factors influencing wellbeing." },
      { title: "Emotional Wellbeing", text: "Personalised support when stress, hormonal transitions, or major life changes begin to affect how you feel." }
    ],
    faqs: [
      { q: "Is homeopathic support suitable for PCOS/PCOD?", a: "Homeopathy looks at the whole hormonal, metabolic, and emotional portrait to support natural hormonal balance and cycle regularity." }
    ],
    relatedPages: [
      { label: "Mental, Emotional & Psychosomatic", path: "/expertise/mental-emotional-psychosomatic-wellness" },
      { label: "Personalised Treatment", path: "/my-approach/personalised-treatment" }
    ]
  },
  {
    id: "child-adolescent-wellness",
    title: "Child & Adolescent Wellness",
    tagline: "Thoughtful care for growing minds and bodies",
    path: "/expertise/child-adolescent-wellness",
    icon: "Smile",
    shortDesc: "Gentle, sweet-pill homeopathic care designed for children and teenagers navigating allergies, immunity, and growing stress.",
    careAreas: [
      { title: "Childhood Wellbeing", text: "Personalised support for common health, immunity, and recurring seasonal concerns during childhood." },
      { title: "Growing Years", text: "Care that considers changing physical needs, routines, school pressures, and developmental comfort." },
      { title: "Adolescent Emotional Wellbeing", text: "Gentle guidance and support for children and adolescents navigating stress, emotional shifts, and life transitions." }
    ],
    faqs: [
      { q: "Is homeopathy safe and palatable for young children?", a: "Yes. Homeopathic remedies are easy to administer, non-invasive, and well-tolerated by infants, children, and teenagers." }
    ],
    relatedPages: [
      { label: "Respiratory Health", path: "/expertise/respiratory-health" },
      { label: "Consultation Process", path: "/my-approach/consultation-process" }
    ]
  },
  {
    id: "joint-muscle-pain-management",
    title: "Joint, Muscle & Pain Management",
    tagline: "Support for easier movement and everyday comfort",
    path: "/expertise/joint-muscle-pain-management",
    icon: "Activity",
    shortDesc: "Comprehensive support for joint stiffness, recurring back discomfort, muscular soreness, and mobility concerns.",
    careAreas: [
      { title: "Joint Concerns", text: "Personalised support for common joint stiffness and discomfort that may affect movement and daily activities." },
      { title: "Muscle Discomfort", text: "Thoughtful care for recurring muscle soreness, neck and back pain, tension, and postural strain." },
      { title: "Ongoing Pain Management", text: "Support for persistent pain concerns with attention to your symptoms, lifestyle, movement, and overall wellbeing." }
    ],
    faqs: [
      { q: "Can homeopathy be used alongside physiotherapy or pain relief medication?", a: "Yes. Homeopathy can complement your overall pain care regimen without unwanted medicinal interactions." }
    ],
    relatedPages: [
      { label: "Sleep & Lifestyle Concerns", path: "/expertise/sleep-lifestyle-concerns" },
      { label: "Integrated Healing", path: "/my-approach/integrated-healing" }
    ]
  },
  {
    id: "sleep-lifestyle-concerns",
    title: "Sleep & Lifestyle Concerns",
    tagline: "Better sleep starts with understanding your routine",
    path: "/expertise/sleep-lifestyle-concerns",
    icon: "Moon",
    shortDesc: "Exploring sleep latency, broken sleep patterns, daytime fatigue, and high-stress professional lifestyle habits.",
    careAreas: [
      { title: "Sleep Difficulties", text: "Personalised support for sleep difficulties, restless nights, and unrefreshing sleep that affect your daily energy." },
      { title: "Stress & Daily Life", text: "Understand how work pressures, erratic schedules, and constant mental chatter impact rest cycles." },
      { title: "Healthy Routines", text: "Practical guidance around wind-down habits, relaxation techniques, and sustainable lifestyle practices." }
    ],
    faqs: [
      { q: "Are homeopathic sleep remedies habit-forming?", a: "No. Classical homeopathic remedies are non-sedative and do not cause morning grogginess or physiological dependency." }
    ],
    relatedPages: [
      { label: "Mental, Emotional & Psychosomatic", path: "/expertise/mental-emotional-psychosomatic-wellness" },
      { label: "Clinical Philosophy", path: "/clinical-philosophy" }
    ]
  },
  {
    id: "mental-emotional-psychosomatic-wellness",
    title: "Mental, Emotional & Psychosomatic Wellness",
    tagline: "Support for emotional concerns that may affect how you feel and function",
    path: "/expertise/mental-emotional-psychosomatic-wellness",
    icon: "ShieldAlert",
    isKeyDifferentiator: true,
    shortDesc: "A core differentiator combining homeopathic clinical insight, psychological counselling, and Bach flower remedies for anxiety and stress.",
    careAreas: [
      { title: "Emotional Wellbeing", text: "Personalised support when chronic worry, low mood, or life transitions begin affecting your everyday wellbeing." },
      { title: "Stress & Anxiety", text: "Thoughtful care for persistent tension, nervous agitation, panic sensations, and feelings of emotional overwhelm." },
      { title: "Mind-Body & Psychosomatic Concerns", text: "Care that considers how emotional experiences manifest as physical symptoms like stomach distress, palpitations, and muscle tension." }
    ],
    faqs: [
      { q: "How do homeopathy and psychological counselling work together?", a: "Counselling provides a safe space to unpack thought patterns and triggers, while individualised remedies and Bach flower remedies support internal physiological and emotional calming." },
      { q: "Is this appropriate for psychiatric emergencies?", a: "Important: Homeopathy and counselling do not replace emergency psychiatric care. If you are experiencing an acute crisis or severe symptoms, please seek immediate local medical assistance." }
    ],
    relatedPages: [
      { label: "Integrated Healing", path: "/my-approach/integrated-healing" },
      { label: "Consultation Process", path: "/my-approach/consultation-process" },
      { label: "Book a Consultation", path: "/book-a-consultation" }
    ]
  }
];

export const patientTestimonials = [
  {
    id: 1,
    quote: "I honestly don't know how to put my gratitude into words. When I was going through those difficult moments of panic and anxiety, there were times when I felt helpless and frightened. Your medicines helped me, but more than that, your patience, understanding and reassuring words gave me the courage to face those moments.",
    author: "Patient experience",
    location: "",
    category: "Anxiety & Panic Care",
    condition: "Anxiety & Emotional Support"
  },
  {
    id: 2,
    quote: "I felt heard and understood throughout my consultation, and my concerns were discussed with genuine care. The consultation gave me a clearer understanding of my recurring headaches and what I could work on.",
    author: "Patient experience",
    location: "",
    category: "Headache & Migraine",
    condition: "Recurring Headaches"
  },
  {
    id: 3,
    quote: "The consultation gave me time to explain my concerns and helped me understand my digestive symptoms better. I appreciated the thoughtful questions and personalized approach throughout my consultation.",
    author: "Patient experience",
    location: "",
    category: "Digestive Health",
    condition: "Gut Health & Indigestion"
  },
  {
    id: 4,
    quote: "I appreciated how much time was taken to understand my concerns before discussing my care. The consultation felt personal and gave me space to explain what I was experiencing.",
    author: "Patient experience",
    location: "",
    category: "General Wellbeing",
    condition: "Fatigue & Routine Stress"
  }
];

export const caseStudiesList = [
  {
    id: "anxiety-panic-case",
    title: "Managing Recurrent Anxiety and Somatic Tension",
    patientProfile: "Adult professional experiencing persistent worry and somatic tension",
    presentingConcern: "Frequent feelings of panic, tightness in chest, and unrefreshing sleep interfering with daily work routines.",
    assessment: "Detailed consultation exploring life stressors, onset patterns, emotional suppression, and previous health history.",
    careApproach: "Integrated care combining individualised classical homeopathic remedy, Bach flower emotional remedies, and counselling support.",
    outcome: "Illustrative example pending Dr. Mohini's review: the patient described feeling better able to understand and manage daily triggers. Individual experiences vary."
  },
  {
    id: "headache-stress-case",
    title: "Addressing Recurring Tension Headaches Linked to Screen Fatigue",
    patientProfile: "Corporate employee presenting with weekly throbbing temple headaches",
    presentingConcern: "Recurring headache attacks accompanied by eye strain, neck stiffness, and irritability.",
    assessment: "Explored ergonomic routines, hydration, screen schedules, and emotional stress build-up.",
    careApproach: "Homeopathic remedy tailored to pain modality paired with lifestyle boundary adjustments and relaxation breathing routines.",
    outcome: "Illustrative example pending Dr. Mohini's review: the patient described a clearer understanding of their headache patterns and triggers across follow-up sessions. Individual experiences vary."
  },
  {
    id: "digestive-gut-case",
    title: "Support for Chronic Bloating, Acidity and Food Sensitivity",
    patientProfile: "Patient with longstanding digestive discomfort and irregular habits",
    presentingConcern: "Daily post-meal abdominal fullness, acidity, and discomfort exacerbated by stressful work deadlines.",
    assessment: "Holistic case-taking considering dietary patterns, stress triggers, and constitutional symptom profile.",
    careApproach: "Personalised constitutional homeopathic protocol along with practical guidance on meal timing and hydration.",
    outcome: "Illustrative example pending Dr. Mohini's review: the patient described better awareness of the habits and stressors linked to their digestive discomfort. Individual experiences vary."
  }
];

export const blogArticles = [
  {
    id: "anxiety-myths-and-facts",
    title: "Anxiety Myths and Facts: What Should You Know?",
    category: "Mental & Emotional Wellness",
    date: "September 2026",
    readTime: "4 min read",
    summary: "Simple insights to help you understand common misconceptions about anxiety and why emotional wellbeing is deeply tied to physical health.",
    content: "Anxiety is frequently misunderstood as merely feeling nervous or stressed. In reality, anxiety involves emotional, physical, and behavioural experiences that differ from person to person. Understanding these layers is the first step toward compassionate, personalised care."
  },
  {
    id: "anxiety-and-sleep-patterns",
    title: "Can Anxiety Affect Your Sleep? The Link Between Worry and Rest",
    category: "Lifestyle & Sleep",
    date: "September 2026",
    readTime: "5 min read",
    summary: "Explore the connection between persistent worry, bedtime rumination, and disrupted sleep patterns.",
    content: "When our nervous system remains on alert, restorative sleep cycles are easily interrupted. Addressing sleep difficulties requires looking beyond quick fixes to understand daily routines, work-life pressure, and underlying emotional tension."
  },
  {
    id: "homeopathy-for-anxiety-evidence",
    title: "Does Homeopathy Work for Anxiety? An Evidence-Conscious Exploration",
    category: "Homeopathy Education",
    date: "September 2026",
    readTime: "6 min read",
    summary: "Understand the individualised homeopathic approach, clinical case-taking, and questions worth considering.",
    content: "Homeopathic consultations allow time to understand how stress presents uniquely in each individual. By matching remedies to the total symptom picture, homeopathy provides gentle, non-sedating complementary support alongside counselling."
  },
  {
    id: "looking-beyond-symptoms",
    title: "Looking at the Person, Not Just the Symptom: What Is Integrated Healing?",
    category: "Health Education",
    date: "September 2026",
    readTime: "4 min read",
    summary: "Why treating the physical and emotional person together creates more sustainable healthcare outcomes.",
    content: "When healthcare isolates symptoms from the human experiencing them, vital clues are lost. Integrated healing combines clinical homeopathy, psychological counselling, and lifestyle awareness for complete patient care."
  }
];

export const mythsAndFactsList = [
  {
    myth: "Everyone with the same condition receives the same homeopathic approach.",
    fact: "Homeopathy is traditionally individualised around the person's unique symptoms, triggers, emotional state, and overall health picture."
  },
  {
    myth: "Anxiety is simply feeling worried or stressed.",
    fact: "Anxiety can involve emotional, physical, and behavioural experiences—including palpitations, muscle tension, and digestive upset—that differ from person to person."
  },
  {
    myth: "Emotional concerns should be kept separate from physical health.",
    fact: "Discussing emotional wellbeing provides crucial context when understanding physical symptoms, especially in psychosomatic and chronic conditions."
  },
  {
    myth: "Holistic healthcare means ignoring conventional medicine.",
    fact: "Holistic care focuses on understanding the individual as a whole. Patients should receive appropriate medical evaluation and care based on their individual circumstances."
  },
  {
    myth: "Homeopathy offers instant universal cures for all diseases.",
    fact: "Responsible healthcare avoids unrealistic guarantees. Homeopathy works systematically as complementary and constitutional care with careful monitoring over time."
  }
];

export const generalFaqs = [
  {
    category: "General Questions",
    items: [
      {
        q: "Who is Dr. Mohini Mutha?",
        a: "Dr. Mohini Mutha is an experienced Homeopathic Physician with 14+ years of clinical practice. She completed her BHMS and MD in Homeopathy (specialising in Homeopathic Materia Medica) and holds a Post Graduate Diploma in Psychological Counselling (PGDPC). She has also served as a Consultant Homoeopathic Physician with ONGC since 2018."
      },
      {
        q: "What is Trivana Wellness?",
        a: "Trivana Wellness is Dr. Mohini's digital practice offering personalised homeopathic care, psychological counselling, and supportive mind-body practices for patients in India and abroad."
      },
      {
        q: "Who can consult Dr. Mohini?",
        a: "Consultations are open to individuals and families seeking personalised care for chronic and acute health concerns, women's wellness, child and adolescent health, digestive health, headaches, and emotional or anxiety-related challenges."
      },
      {
        q: "Can I consult from outside India?",
        a: "Yes. Dr. Mohini provides online video and audio consultations for international patients, including individuals and families in the UAE and USA."
      },
      {
        q: "Does every person receive the same treatment?",
        a: "No. In homeopathy, treatment is strictly individualised. Two people with the same medical diagnosis may receive entirely different remedies based on their constitutional portrait and symptom expression."
      }
    ]
  },
  {
    category: "Service Details",
    items: [
      {
        q: "What can I discuss during a consultation?",
        a: "You can discuss physical symptoms, emotional concerns, daily stress patterns, sleep routines, past medical history, and anything else relevant to your health journey."
      },
      {
        q: "Do you provide online anxiety consultations?",
        a: "Yes. You can consult specifically for anxiety, stress, emotional fatigue, and psychosomatic concerns through private online sessions."
      },
      {
        q: "Does Dr. Mohini provide psychological counselling?",
        a: "Yes. Dr. Mohini holds a Post Graduate Diploma in Psychological Counselling and integrates counselling perspectives where appropriate."
      },
      {
        q: "Can homeopathy and counselling be part of the same care plan?",
        a: "Depending on your needs, homeopathy and counselling can be complementary components of one unified, personalised approach."
      },
      {
        q: "Do you offer yoga and meditation guidance?",
        a: "Simple, supportive mind-body practices and breathing routines may be recommended where beneficial to complement your recovery."
      }
    ]
  },
  {
    category: "Procedures & Appointments",
    items: [
      {
        q: "How do I book an online or in-person consultation?",
        a: "You can use our online booking page to select your preferred format, date, and time, or reach out directly via phone or WhatsApp at +91 942 397 2150."
      },
      {
        q: "What happens during my first consultation?",
        a: "The initial consultation focuses on comprehensive case-taking. Dr. Mohini listens to your history, examines your symptom patterns, and discusses a personalised care roadmap."
      },
      {
        q: "What should I prepare before my consultation?",
        a: "Keep your previous medical reports, prescriptions, timeline of symptoms, and any specific questions ready for the discussion."
      },
      {
        q: "Can I reschedule my appointment?",
        a: "Yes. If you need to modify your appointment time, please inform us as early as possible so we can adjust the schedule."
      },
      {
        q: "Can I ask a question before booking?",
        a: "Absolutely. If you are unsure whether consultation is right for your concern, feel free to send a message or email beforehand."
      }
    ]
  }
];
