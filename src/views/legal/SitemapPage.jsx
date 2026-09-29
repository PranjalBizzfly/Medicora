import React from 'react';
import Link from 'next/link';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import { ArrowRight, Home, HeartPulse, Compass, Award, BookOpen, CalendarCheck, Scale } from 'lucide-react';
import '../../styles/legal.css';

const sitemapStructure = [
  {
    category: "Main Pages",
    icon: Home,
    description: "Foundational information about Dr. Mohini Mutha and her clinical journey",
    links: [
      { name: "1. Home", path: "/", desc: "Starting point for exploring clinical care, anxiety support, and consultations" },
      { name: "2. About Me", path: "/about-me", desc: "Dr. Mohini's professional identity, values, background, and patient philosophy" },
      { name: "3. My Journey", path: "/my-journey", desc: "A chronological timeline from clinical start in 2012 to Trivana Wellness" },
      { name: "4. My Approach", path: "/my-approach", desc: "Care that starts with understanding and patient-first listening" },
      { name: "5. Clinical Philosophy", path: "/clinical-philosophy", desc: "Why health is more than a set of symptoms; the mind-body connection" }
    ]
  },
  {
    category: "Areas of Care",
    icon: HeartPulse,
    wide: true,
    description: "10 independent patient-facing clinical expertise pages",
    links: [
      { name: "6. General Health & Wellness", path: "/expertise/general-health-wellness", desc: "Everyday care for energy, immunity, and overall vitality" },
      { name: "7. Respiratory Health", path: "/expertise/respiratory-health", desc: "Support for recurring coughs, sinus congestion, and seasonal allergies" },
      { name: "8. Headache & Migraine Care", path: "/expertise/headache-migraine-care", desc: "Identifying headache patterns, triggers, and individualised care" },
      { name: "9. Digestive & Gut Health", path: "/expertise/digestive-gut-health", desc: "Constitutional care for acidity, bloating, indigestion, and IBS" },
      { name: "10. Skin, Hair & Allergies", path: "/expertise/skin-hair-allergies", desc: "Internal homeopathic care for eczema, acne, allergic hives, and hair fall" },
      { name: "11. Women's Wellness", path: "/expertise/womens-wellness", desc: "Hormonal balance, menstrual health, PCOS/PCOD, and perimenopause" },
      { name: "12. Child & Adolescent Wellness", path: "/expertise/child-adolescent-wellness", desc: "Gentle sweet-pill care for recurring childhood ailments and teen stress" },
      { name: "13. Joint, Muscle & Pain Management", path: "/expertise/joint-muscle-pain-management", desc: "Relief for joint stiffness, back pain, and everyday muscular discomfort" },
      { name: "14. Sleep & Lifestyle Concerns", path: "/expertise/sleep-lifestyle-concerns", desc: "Non-habit-forming support for restless sleep and daily stress routines" },
      { name: "15. Mental, Emotional & Psychosomatic Wellness", path: "/expertise/mental-emotional-psychosomatic-wellness", desc: "Key clinical differentiator bridging homeopathy and psychological counselling" }
    ]
  },
  {
    category: "Understanding Care",
    icon: Compass,
    description: "Core principles and methodology behind personalised consultations",
    links: [
      { name: "16. Why Homeopathy", path: "/my-approach/why-homeopathy", desc: "Understanding the individualised role of homeopathy in modern healthcare" },
      { name: "17. Integrated Healing", path: "/my-approach/integrated-healing", desc: "Bringing homeopathy, counselling, and mind-body practices together" },
      { name: "18. Consultation Process", path: "/my-approach/consultation-process", desc: "Exact 5-step flow: Listen, Assess, Understand, Personalise, Follow Up" },
      { name: "19. Personalised Treatment", path: "/my-approach/personalised-treatment", desc: "Why your health story is unique and why care should be too" }
    ]
  },
  {
    category: "About Dr. Mohini",
    icon: Award,
    description: "Verified qualifications, clinical appointments, and social contribution",
    links: [
      { name: "20. Professional Experience", path: "/credentials/professional-experience", desc: "Clinical journey since 2012 and 8 years at ONGC" },
      { name: "21. Education & Qualifications", path: "/credentials/education-qualifications", desc: "BHMS (2012), MD in Homeopathy (2016), and PGDPC in Counselling" },
      { name: "22. Achievements", path: "/credentials/achievements", desc: "12,000+ patients, ONGC appointment, and free community medical camps" }
    ]
  },
  {
    category: "Resources",
    icon: BookOpen,
    description: "Authentic patient experiences, case studies, insights, and FAQs",
    links: [
      { name: "23. Patient Stories", path: "/resources/patient-stories", desc: "Genuine, permission-based reflections from cared-for patients" },
      { name: "24. Case Studies", path: "/resources/case-studies", desc: "Anonymised clinical journeys from presenting concern to care outcome" },
      { name: "25. Health & Wellness Blogs", path: "/resources/blogs", desc: "10 content pillars and educational articles on mind-body health" },
      { name: "26. Invite Me To Speak", path: "/resources/invite-me-to-speak", desc: "Keynotes and wellness workshops for corporate and community groups" },
      { name: "27. FAQs", path: "/resources/faqs", desc: "Categorized answers on consultations, procedures, and homeopathy" },
      { name: "28. Myths vs Facts", path: "/resources/myths-vs-facts", desc: "Educational breakdowns of common misconceptions about homeopathy & anxiety" }
    ]
  },
  {
    category: "Connect",
    icon: CalendarCheck,
    description: "Online and in-person consultation booking",
    links: [
      { name: "29. Book a Consultation", path: "/book-a-consultation", desc: "Interactive 4-step scheduling for online & in-clinic appointments" }
    ]
  },
  {
    category: "Legal",
    icon: Scale,
    description: "Mandatory compliance, patient privacy rights, and medical disclaimers",
    links: [
      { name: "30. Privacy Policy", path: "/privacy-policy", desc: "DPDP compliance, health data confidentiality, and privacy practices" },
      { name: "31. Terms & Conditions", path: "/terms-and-conditions", desc: "Website use, patient responsibilities, and service management" },
      { name: "32. Medical Disclaimer", path: "/disclaimer", desc: "Important educational notice, non-emergency care, and complementary scope" },
      { name: "33. Cookie Policy", path: "/cookie-policy", desc: "Technical cookies explanation and preference management" },
      { name: "34. Website Sitemap", path: "/sitemap", desc: "Complete architectural directory of all 34 approved website pages" }
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="sitemap-page">
      <Hero
        badge="Architecture & Navigation"
        title="Website Sitemap"
        subtitle="A complete, transparent guide to all 34 approved pages of Dr. Mohini Mutha's website, consultations, health resources, and clinical philosophy."
        breadcrumbs={[
          { label: "Utility", path: "/sitemap" },
          { label: "Sitemap" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Back to Home"
        secondaryCtaLink="/"
      />

      <section className="section lg-section">
        <div className="container">
          <SectionHeader
            badge="Exact 34-Page Structure"
            title="Complete 34-Page Website Directory"
            subtitle="Browse all approved sections, clinical specialties, and healthcare resources."
            centered={true}
          />

          <div className="lg-sitemap-grid">
            {sitemapStructure.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.category}
                  className={`lg-sitemap-card${group.wide ? ' lg-sitemap-card--wide' : ''}`}
                >
                  <div className="lg-sitemap-head">
                    <span className="icon-tile"><Icon size={22} /></span>
                    <div>
                      <h3 className="lg-sitemap-title">{group.category}</h3>
                      <p className="lg-sitemap-desc">{group.description}</p>
                    </div>
                    <span className="badge badge-mint lg-sitemap-count">
                      {group.links.length} {group.links.length === 1 ? 'page' : 'pages'}
                    </span>
                  </div>

                  <ul className="lg-sitemap-links">
                    {group.links.map((link) => (
                      <li key={link.path}>
                        <Link href={link.path} className="lg-sitemap-link">
                          <span className="lg-sitemap-text">
                            <span className="lg-sitemap-name">{link.name}</span>
                            <span className="lg-sitemap-link-desc">{link.desc}</span>
                          </span>
                          <ArrowRight size={16} className="lg-sitemap-arrow" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
