import React from 'react';
import Link from 'next/link';
import { Calendar, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { siteConfig } from '../data/websiteContent';
import BrandMark from './BrandMark';

export default function CTABanner({
  title = "Your Health Deserves a Personal Approach",
  subtitle = "Whether you're looking for support with anxiety and emotional wellbeing or a recurring health concern, the first step can simply be a conversation.",
  badge = "Connect with Dr. Mohini"
}) {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-panel">
          <BrandMark className="cta-panel-mark" />

          <div className="cta-panel-content">
            {badge && (
              <div className="cta-panel-badge">
                <span className="badge">{badge}</span>
              </div>
            )}

            <h2>{title}</h2>
            <p className="cta-panel-subtitle">{subtitle}</p>

            <div className="cta-panel-actions">
              <Link href="/book-a-consultation" className="btn btn-primary btn-lg">
                <Calendar size={18} />
                <span>Book an Online Consultation</span>
              </Link>

              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="btn btn-secondary">
                <Phone size={18} />
                <span>Call: {siteConfig.phone}</span>
              </a>
            </div>

            <div className="cta-panel-meta">
              <span><MapPin size={15} /> {siteConfig.clinicLocation}</span>
              <span><Mail size={15} /> {siteConfig.email}</span>
              <span><Globe size={15} /> Online consultations for India · UAE · USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
