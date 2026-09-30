import React from 'react';
import Link from 'next/link';
import Hero from '../../components/Hero';
import { ArrowRight, Home, HeartPulse, Compass, Award, BookOpen, CalendarCheck, Scale } from 'lucide-react';
import '../../styles/legal.css';

// Source: Website Content PDF, "Page 34 - Sitemap" (pp.168–172).
// Every path below is one of the 34 existing routes (src/app/**/page.jsx).
const sitemapStructure = [
  {
    category: 'Main pages',
    icon: Home,
    // Full width: followed by a wide card, so a half-width card left an empty column.
    wide: true,
    links: [
      { name: 'Home', path: '/', desc: 'Your starting point for exploring Trivana Wellness, online consultations and personalised care.', cta: 'Visit Home' },
      { name: 'About Dr. Mohini', path: '/about-me', desc: 'Learn about Dr. Mohini Mutha, her experience, education, professional journey and approach to patient care.', cta: 'Explore About' },
      { name: 'My Approach', path: '/my-approach', desc: "Understand the principles that shape Dr. Mohini's consultations and personalised approach to care.", cta: 'Explore My Approach' },
      { name: 'My Journey', path: '/my-journey', desc: "Discover Dr. Mohini's professional journey, from clinical practice to Trivana Wellness.", cta: 'Explore My Journey' },
    ],
  },
  {
    category: 'Areas of Care',
    icon: HeartPulse,
    wide: true,
    links: [
      { name: 'General Health & Wellness', path: '/expertise/general-health-wellness', desc: 'Personalised support for everyday health, lifestyle and overall wellbeing.' },
      { name: 'Respiratory Health', path: '/expertise/respiratory-health', desc: 'Support for common respiratory concerns and breathing-related wellbeing.' },
      { name: 'Headache & Migraine Care', path: '/expertise/headache-migraine-care', desc: 'Personalised care focused on understanding headaches, migraine patterns and related concerns.' },
      { name: 'Digestive & Gut Health', path: '/expertise/digestive-gut-health', desc: 'Support for digestive concerns, gut health and everyday digestive wellbeing.' },
      { name: 'Skin, Hair & Allergies', path: '/expertise/skin-hair-allergies', desc: 'Care for common skin, hair, scalp and allergic concerns.' },
      { name: "Women's Wellness", path: '/expertise/womens-wellness', desc: "Thoughtful support for women's health, emotional wellbeing and changing needs." },
      { name: 'Child & Adolescent Wellness', path: '/expertise/child-adolescent-wellness', desc: 'Personalised support for children and adolescents through different stages of growing.' },
      { name: 'Joint, Muscle & Pain Management', path: '/expertise/joint-muscle-pain-management', desc: 'Support for joint, muscle and recurring pain concerns affecting everyday comfort.' },
      { name: 'Sleep & Lifestyle Concerns', path: '/expertise/sleep-lifestyle-concerns', desc: 'Guidance for sleep, stress, routines and lifestyle factors affecting everyday wellbeing.' },
      { name: 'Mental, Emotional & Psychosomatic Wellness', path: '/expertise/mental-emotional-psychosomatic-wellness', desc: 'Support for emotional wellbeing and concerns involving the connection between mind and body.' },
    ],
  },
  {
    category: 'Understanding Care',
    icon: Compass,
    links: [
      { name: 'Clinical Philosophy', path: '/clinical-philosophy', desc: "Explore the thinking and principles behind Dr. Mohini's approach to patient care." },
      { name: 'Why Homeopathy', path: '/my-approach/why-homeopathy', desc: 'Understand the individualised approach of homeopathy and how it may fit within personalised care.' },
      { name: 'Integrated Healing', path: '/my-approach/integrated-healing', desc: 'Discover how homeopathy, psychological counselling and mind-body practices can be considered together.' },
      { name: 'Consultation Process', path: '/my-approach/consultation-process', desc: 'Understand what to expect before, during and after an online consultation.' },
      { name: 'Personalised Treatment', path: '/my-approach/personalised-treatment', desc: 'Learn how care is considered around your individual concerns, needs and circumstances.' },
    ],
  },
  {
    category: 'About Dr. Mohini',
    icon: Award,
    links: [
      { name: 'Professional Experience', path: '/credentials/professional-experience', desc: "Explore Dr. Mohini's clinical and institutional professional experience." },
      { name: 'Education & Qualifications', path: '/credentials/education-qualifications', desc: "View Dr. Mohini's academic qualifications and additional training." },
      { name: 'Achievements', path: '/credentials/achievements', desc: 'Discover key milestones from her clinical and professional journey.' },
      { name: 'Patient Stories', path: '/resources/patient-stories', desc: 'Read experiences shared by patients about their consultations and care.' },
      { name: 'Case Studies', path: '/resources/case-studies', desc: 'Explore selected patient journeys and understand the approach taken in individual cases.' },
    ],
  },
  {
    category: 'Resources',
    icon: BookOpen,
    links: [
      { name: 'Blogs', path: '/resources/blogs', desc: 'Explore articles and insights about anxiety, wellbeing, homeopathy, sleep and everyday health.', cta: 'Explore Blogs' },
      { name: 'Myths vs Facts', path: '/resources/myths-vs-facts', desc: 'Explore common health and homeopathy beliefs through clear, balanced explanations.' },
      { name: 'FAQs', path: '/resources/faqs', desc: 'Find answers to common questions about consultations, care and Trivana Wellness.' },
    ],
  },
  {
    category: 'Connect',
    icon: CalendarCheck,
    links: [
      { name: 'Invite Me To Speak', path: '/resources/invite-me-to-speak', desc: 'Explore speaking, workshop, panel and health-awareness opportunities with Dr. Mohini.', cta: 'Invite Me' },
      // No dedicated /contact route exists; "Contact" points to the booking page.
      { name: 'Contact', path: '/book-a-consultation', key: 'contact', desc: 'Have a question or want to discuss a consultation? Get in touch with Trivana Wellness.', cta: 'Contact Us' },
      { name: 'Book a Consultation', path: '/book-a-consultation', desc: 'Choose a convenient time for an online consultation with Dr. Mohini.', cta: 'Book Consultation' },
    ],
  },
  {
    category: 'Legal & Privacy',
    icon: Scale,
    wide: true,
    links: [
      { name: 'Privacy Policy', path: '/privacy-policy', desc: 'Learn how Trivana Wellness collects, uses and protects personal information.', cta: 'View Privacy Policy' },
      { name: 'Cookie Policy', path: '/cookie-policy', desc: 'Understand how cookies and similar technologies may be used on this website.', cta: 'View Cookie Policy' },
      { name: 'Disclaimer', path: '/disclaimer', desc: 'Important information about the educational content, consultations and services provided through this website.', cta: 'View Disclaimer' },
      // Not listed in the Sitemap source; description is the Terms page hero line (source p.162).
      { name: 'Terms and Conditions', path: '/terms-and-conditions', desc: 'These terms explain the use of the Trivana Wellness website, online consultations and related services.', cta: 'View Terms and Conditions' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="sitemap-page">
      <Hero
        badge="Sitemap"
        title="Explore Dr. Mohini Mutha's website and find the information you need"
        subtitle="A simple guide to our website, consultations, health resources and information about Dr. Mohini Mutha."
        breadcrumbs={[{ label: 'Sitemap' }]}
        primaryCtaText={null}
      />

      <section className="section lg-section">
        <div className="container">
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
                      <h2 className="lg-sitemap-title">{group.category}</h2>
                    </div>
                  </div>

                  <ul className="lg-sitemap-links">
                    {group.links.map((link) => (
                      <li key={link.key || link.path}>
                        <Link href={link.path} className="lg-sitemap-link">
                          <span className="lg-sitemap-text">
                            <span className="lg-sitemap-name">{link.name}</span>
                            <span className="lg-sitemap-link-desc">{link.desc}</span>
                            <span className="lg-sitemap-cta">{link.cta || 'Explore'}</span>
                          </span>
                          <ArrowRight size={16} className="lg-sitemap-arrow" aria-hidden="true" />
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
