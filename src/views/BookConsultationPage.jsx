import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/credentials.css';
import '../styles/approach.css';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import BookingForm from '../components/BookingForm';
import ActionTiles from './approach/ActionTiles';
import { siteConfig } from '../data/websiteContent';
import {
  ArrowRight,
  Building2,
  CalendarClock,
  ClipboardList,
  HeartPulse,
  Moon,
  Phone,
  Smile,
  Video,
} from 'lucide-react';

// Source: Website Content PDF, Page 29 - Book a Consultation (pp.156-157);
// Sitemap brief pp.29-30 (Book a Consultation + Get in Touch);
// privacy note from Privacy Policy (Website Content PDF).

const steps = [
  { icon: CalendarClock, title: 'Choose your time', text: 'Select a consultation time that works comfortably with your schedule.', linkText: 'Book your slot', href: '#booking-form' },
  { icon: ClipboardList, title: 'Share your concerns', text: "Tell us what you'd like to discuss before your consultation.", linkText: 'Prepare for your consultation', href: '#consultation-experience' },
  { icon: Video, title: 'Meet Dr. Mohini', text: 'Connect online and have a thoughtful conversation about your health and wellbeing.', linkText: 'Know what to expect', href: '/my-approach/consultation-process' },
];

const coverAreas = [
  { icon: Smile, title: 'Anxiety & emotional wellbeing', text: 'Discuss anxiety, stress, emotional concerns and related experiences.' },
  { icon: Moon, title: 'Sleep & lifestyle', text: 'Talk about sleep difficulties, routines, stress and lifestyle concerns.' },
  { icon: HeartPulse, title: 'General wellbeing', text: 'Discuss other health concerns that may be affecting your everyday wellbeing.' },
];

const experience = [
  { title: 'Before your consultation', text: 'Keep any relevant health information or previous reports available.' },
  { title: 'During your consultation', text: 'Share your concerns openly and ask any questions you may have.' },
  { title: 'After your consultation', text: 'Understand the discussed approach and the next steps.' },
];

const socials = [
  { label: 'Instagram', href: siteConfig.socials.instagram },
  { label: 'Facebook', href: siteConfig.socials.facebook },
  { label: 'YouTube', href: siteConfig.socials.youtube },
  { label: 'LinkedIn', href: siteConfig.socials.linkedin },
];

export default function BookConsultationPage() {
  return (
    <div className="book-consultation-page">
      <Hero
        badge="Ready to take the next step?"
        title="Book a Consultation"
        subtitle="Start with a conversation about your wellbeing"
        breadcrumbs={[{ label: 'Book a Consultation' }]}
        primaryCtaText={null}
        secondaryCtaText="Consultation Process"
        secondaryCtaLink="/my-approach/consultation-process"
      />

      {/* Three steps */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid-3 bk-steps">
            {steps.map(({ icon: Icon, title, text, linkText, href }, i) => (
              <div className="card ap-card" key={title}>
                <div className="ap-card-top">
                  <span className="icon-tile"><Icon size={24} /></span>
                  <span className="ap-card-num">0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                {href.startsWith('#') ? (
                  <a href={href} className="ap-card-link">{linkText} <ArrowRight size={16} /></a>
                ) : (
                  <Link href={href} className="ap-card-link">{linkText} <ArrowRight size={16} /></Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form + get in touch */}
      <section className="section bg-sand" id="booking-form">
        <div className="container">
          <div className="cr-book-layout">
            <aside className="cr-book-aside">
              <div className="cr-info-card" style={{ padding: 0, overflow: 'hidden' }}>
                <Image
                  src="/images/booking/online-consultation-desk.webp"
                  alt="Online consultation with Dr. Mohini Mutha"
                  width={480}
                  height={320}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div className="cr-info-card">
                <span className="icon-tile"><Video size={20} /></span>
                <div>
                  <h3>Online Consultation</h3>
                  <p>A personalised online consultation with Dr. Mohini Mutha to understand your concerns and discuss the way forward.</p>
                </div>
              </div>

              <div className="cr-info-card">
                <span className="icon-tile"><Building2 size={20} /></span>
                <div>
                  <h3>{siteConfig.clinicName}</h3>
                  <p>Kopar Khairne, Navi Mumbai</p>
                </div>
              </div>

              <div className="cr-info-card">
                <span className="icon-tile"><Phone size={20} /></span>
                <div>
                  <h3>Get in touch</h3>
                  <ul className="bk-contact-list">
                    <li>Phone: <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a></li>
                    <li>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
                  </ul>
                  <div className="bk-socials">
                    {socials.map(({ label, href }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                    ))}
                  </div>
                </div>
              </div>

              <p className="bk-privacy">
                <strong>Please note:</strong> Avoid sharing sensitive health information through general website forms unless specifically requested through a secure consultation or communication channel. See our <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
            </aside>

            <BookingForm />
          </div>
        </div>
      </section>

      {/* What your consultation can cover */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Your consultation"
            title="What your consultation can cover"
            subtitle="You can discuss concerns related to anxiety, emotional wellbeing, sleep, lifestyle and a range of general health concerns."
            centered={true}
          />
          <ul className="grid-3 bk-cover-list">
            {coverAreas.map(({ icon: Icon, title, text }) => (
              <li className="card ap-card" key={title}>
                <span className="icon-tile"><Icon size={24} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The consultation experience */}
      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/doctor-male-patient.jpg')" }} id="consultation-experience">
        <div className="container">
          <SectionHeader
            badge="The consultation experience"
            title="A consultation centred around you"
            subtitle="Every consultation begins with listening. Your concerns, health history and individual circumstances help shape the conversation."
            centered={true}
          />
          <ol className="grid-3 bk-cover-list">
            {experience.map(({ title, text }, i) => (
              <li className="card ap-card" key={title}>
                <div className="ap-card-top">
                  <span className="ap-card-num">0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ActionTiles
        title="Ready to begin? Your first step is simple"
        subtitle="Choose a convenient time and start with a conversation about what you're experiencing."
        tiles={[
          { kind: 'book', title: 'Book your consultation', text: 'Choose your preferred time.', href: '#booking-form' },
          { kind: 'message', title: 'Have a question', text: 'Contact us before booking.' },
          { kind: 'explore', title: 'Explore the process', text: 'See what to expect from your consultation.', href: '/my-approach/consultation-process' },
        ]}
      />
    </div>
  );
}
