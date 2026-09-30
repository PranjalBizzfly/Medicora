import React from 'react';
import { CalendarCheck, Compass, MessageCircle } from 'lucide-react';
import ApproachTemplate from './ApproachTemplate';
import ConsultationProcess from '../../components/ConsultationProcess';

// Source: Website Content PDF, Page 18 - Consultation Process (pp.140-141);
// 5-step process from Sitemap brief p.22 (shared, locked component).
export default function ConsultationProcessPage() {
  return (
    <ApproachTemplate
      className="consultation-process-page"
      hero={{
        badge: 'My Approach',
        title: 'Consultation Process',
        subtitle: 'A simple, thoughtful approach to your care',
        breadcrumbs: [
          { label: 'My Approach', path: '/my-approach' },
          { label: 'Consultation Process' },
        ],
      }}
      cards={[
        {
          icon: CalendarCheck,
          title: 'Book your consultation',
          text: 'Choose a convenient time for your online consultation and share a few details about your concerns.',
          linkText: 'Explore your care',
          href: '/book-a-consultation',
        },
        {
          icon: MessageCircle,
          title: 'Talk openly',
          text: 'We discuss your symptoms, health history, lifestyle and anything else that may be relevant to your concerns.',
          linkText: 'Discover more',
          href: '/my-approach/why-homeopathy',
        },
        {
          icon: Compass,
          title: 'Understand the next step',
          text: 'Based on the consultation, we discuss your care approach and the next steps suited to your needs.',
          linkText: 'Discover more',
          href: '/my-approach/personalised-treatment',
        },
      ]}
      afterCards={<ConsultationProcess title="What to expect during your consultation" />}
      approach={{
        badge: 'What to expect',
        title: 'What to expect from your consultation',
        lead: 'A consultation should give you the time and space to talk, ask questions and feel understood.',
        points: [
          { title: 'Before', text: 'Share your concerns and relevant health information before your consultation.' },
          { title: 'During', text: 'Talk openly about your symptoms, experiences and everyday wellbeing.' },
          { title: 'After', text: 'Understand the discussed approach and what comes next.' },
        ],
      }}
      quotes={[
        'The consultation felt comfortable and I had enough time to explain everything.',
        'I appreciated how carefully my concerns and health history were discussed.',
        'The process was simple, clear and felt very personal.',
      ]}
      cta={{
        title: 'Ready to take the next step in your care?',
        subtitle: "You don't need to have everything figured out. Begin by telling us what you'd like support with.",
        tiles: [
          { kind: 'explore', title: 'Explore your care options', text: 'Learn about the approach that may suit your needs.', href: '/my-approach/personalised-treatment' },
          { kind: 'chat', title: 'Chat with me', text: 'Ask your questions.' },
          { kind: 'book', title: 'Book a Consultation', text: 'Choose a convenient time to connect.' },
        ],
      }}
      image={{
        src: '/images/photos/hd/doctor-welcome-desk-hd.webp',
        alt: 'A smiling doctor seated at her clinic desk, ready to welcome a patient',
      }}
    />
  );
}
