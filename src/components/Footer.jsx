import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { siteConfig } from '../data/websiteContent';
import { SocialLinks } from './SocialIcons';
import './Footer.css';

const currentYear = 2026;

const aboutLinks = [
  { href: '/about-me', label: 'About Dr. Mohini' },
  { href: '/my-journey', label: 'My Professional Journey' },
  { href: '/my-approach', label: 'My Approach to Care' },
  { href: '/clinical-philosophy', label: 'Clinical Philosophy' },
  { href: '/my-approach/why-homeopathy', label: 'Why Homeopathy' },
  { href: '/my-approach/integrated-healing', label: 'Integrated Healing' },
  { href: '/my-approach/consultation-process', label: 'Consultation Process' },
  { href: '/my-approach/personalised-treatment', label: 'Personalised Treatment' },
];

const careLinks = [
  { href: '/expertise/mental-emotional-psychosomatic-wellness', label: 'Mental & Emotional Wellness' },
  { href: '/expertise/general-health-wellness', label: 'General Health & Wellness' },
  { href: '/expertise/headache-migraine-care', label: 'Headache & Migraine Care' },
  { href: '/expertise/digestive-gut-health', label: 'Digestive & Gut Health' },
  { href: '/expertise/womens-wellness', label: "Women's Wellness" },
  { href: '/expertise/skin-hair-allergies', label: 'Skin, Hair & Allergies' },
  { href: '/expertise/child-adolescent-wellness', label: 'Child & Adolescent Wellness' },
  { href: '/expertise/sleep-lifestyle-concerns', label: 'Sleep & Lifestyle Concerns' },
  { href: '/expertise/joint-muscle-pain-management', label: 'Joint & Pain Management' },
  { href: '/expertise/respiratory-health', label: 'Respiratory Health' },
];

const resourceLinks = [
  { href: '/resources/patient-stories', label: 'Patient Stories' },
  { href: '/resources/case-studies', label: 'Case Studies' },
  { href: '/resources/blogs', label: 'Health Insights & Blogs' },
  { href: '/resources/faqs', label: 'Frequently Asked Questions' },
  { href: '/resources/myths-vs-facts', label: 'Myths vs Facts' },
  { href: '/resources/invite-me-to-speak', label: 'Invite Me To Speak' },
  { href: '/credentials/professional-experience', label: 'Professional Experience' },
  { href: '/credentials/education-qualifications', label: 'Education & Credentials' },
  { href: '/credentials/achievements', label: 'Achievements & Camps' },
];

function LinkColumn({ title, links }) {
  return (
    <div>
      <h4 className="footer-heading">{title}</h4>
      <ul className="footer-links-list">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="footer-link">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="Dr. Mohini Mutha — Home">
              <Image src="/brand/logo-footer-white.png" alt="Dr. Mohini Mutha" width={1702} height={445} />
            </Link>
            <span className="footer-brand-subtitle">MD in Homeopathy · PGDPC Counselling</span>
            <p className="footer-brand-bio">
              With 14+ years of clinical experience, Dr. Mohini combines homeopathic practice with psychological counselling to provide thoughtful, personalised care for mind and body.
            </p>

            <div className="footer-contact-details">
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="footer-contact-item">
                <Phone size={16} />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="footer-contact-item">
                <Mail size={16} />
                <span>{siteConfig.email}</span>
              </a>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>{siteConfig.clinicLocation}</span>
              </div>
              <div className="footer-contact-item">
                <Globe size={16} />
                <span>Online Consultations: India · UAE · USA</span>
              </div>
            </div>

            <SocialLinks className="footer-social-links" />
          </div>

          <LinkColumn title="About & Care Approach" links={aboutLinks} />
          <LinkColumn title="Areas of Care" links={careLinks} />
          <LinkColumn title="Resources & Credentials" links={resourceLinks} />
        </div>

        {/* Responsible medical disclaimer */}
        <div className="footer-disclaimer-box">
          <p>
            <strong>Medical Notice & Disclaimer:</strong> The information provided on the Dr. Mohini Mutha website is intended for general educational and informational purposes only. It is not intended to replace professional medical advice, diagnosis, or emergency medical care. Homeopathy is a system of complementary medicine and is not intended to suggest that homeopathy should replace medically necessary conventional care. If you are experiencing a medical emergency, please contact your local emergency medical service immediately.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div>
            © {currentYear} Dr. Mohini Mutha. All rights reserved. Practices at Dr. Mutha's Homeopathic Clinic & Trivana Wellness.
          </div>
          <div className="footer-legal-links">
            <Link href="/book-a-consultation">Consultation</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
