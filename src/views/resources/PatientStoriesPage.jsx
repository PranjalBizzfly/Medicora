import React from 'react';
import Link from 'next/link';
import { Users, MessageCircle, HeartHandshake, Ear, Handshake, UserCheck, ArrowRight } from 'lucide-react';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import TestimonialCard from '../../components/TestimonialCard';
import ActionTilesCTA from './ActionTilesCTA';
import { patientTestimonials } from '../../data/websiteContent';
import '../../styles/resources.css';

// Source: Website Content PDF, Page 23 – Patient Stories (pp.148–149).
// The source testimonial slots are "[Patient testimonial to be added]"
// placeholders, so only the genuine approved quote is shown plus a
// structure-ready state (sitemap brief: Challenge → Consultation Experience
// → Patient Perspective; genuine, permission-based testimonials only).
const themes = [
  {
    Icon: Users,
    title: 'Every story is different',
    text: 'Each patient comes with their own concerns, experiences and expectations.',
    link: { label: 'Learn about the consultation', href: '/my-approach/consultation-process' },
  },
  {
    Icon: MessageCircle,
    title: 'A space to be heard',
    text: 'Many patients value having the time and space to openly discuss what they are experiencing.',
    link: { label: 'Read the story', href: '#patient-stories' },
  },
  {
    Icon: HeartHandshake,
    title: 'Care that feels personal',
    text: 'The most meaningful part of practice is seeing patients feel understood throughout their journey.',
    link: { label: 'Read the story', href: '#patient-stories' },
  },
];

const storyStructure = ['Challenge', 'Consultation Experience', 'Patient Perspective'];

const principles = [
  { Icon: Ear, title: 'Understanding', text: "Taking time to listen to each patient's concerns and experiences." },
  { Icon: Handshake, title: 'Personal connection', text: 'Creating a consultation where patients feel comfortable speaking openly.' },
  { Icon: UserCheck, title: 'Individual care', text: "Keeping each person's concerns and needs at the centre of the consultation." },
];

export default function PatientStoriesPage() {
  return (
    <div className="patient-stories-page">
      <Hero
        badge="Resources"
        title="Patient Stories"
        subtitle="Real experiences from people I have cared for"
        breadcrumbs={[
          { label: 'Resources' },
          { label: 'Patient Stories' },
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Case Studies"
        secondaryCtaLink="/resources/case-studies"
      />

      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/consultation-woman-patient.webp')" }}>
        <div className="container">
          <div className="grid-3">
            {themes.map(({ Icon, title, text, link }) => (
              <div key={title} className="card rs-card">
                <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={link.href} className="link-arrow">
                  <span>{link.label}</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="patient-stories" className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="Patient stories"
            title="What patients have to say"
            subtitle="Real experiences from patients who have taken the time to share their thoughts about their consultations and care."
            centered={true}
          />

          <div className="rs-featured-quote">
            {patientTestimonials.map((t) => (
              <TestimonialCard key={t.id} quote={t.quote} author={t.author} />
            ))}
          </div>

          <div className="rs-pending">
            <span className="rs-pending-tag">Patient story</span>
            <h3>More patient stories will be shared here with patients&rsquo; permission.</h3>
            <ol className="rs-structure">
              {storyStructure.map((s) => (
                <li key={s}><h3>{s}</h3></li>
              ))}
            </ol>
          </div>

          <div className="grid-3 rs-section-gap">
            {principles.map(({ Icon, title, text }) => (
              <div key={title} className="rs-principle">
                <span className="icon-tile"><Icon size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ActionTilesCTA
        title="Your story starts with a conversation"
        subtitle="If you're considering personalised care, you can begin by sharing what you're experiencing."
      />
    </div>
  );
}
