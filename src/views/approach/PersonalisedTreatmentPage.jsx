import React from 'react';
import { ClipboardList, RefreshCw, UserCheck } from 'lucide-react';
import ApproachTemplate from './ApproachTemplate';

// Source: Website Content PDF, Page 19 - Personalised Treatment (pp.141-142); Sitemap brief p.22.
export default function PersonalisedTreatmentPage() {
  return (
    <ApproachTemplate
      className="personalised-treatment-page"
      hero={{
        badge: 'My Approach',
        title: 'Personalised Treatment',
        subtitle: 'An individualised approach that considers your health history, presenting symptoms, lifestyle and personal needs to shape your care.',
        breadcrumbs: [
          { label: 'My Approach', path: '/my-approach' },
          { label: 'Personalised Treatment' },
        ],
      }}
      cardsHeader={{
        badge: 'Personalised Treatment',
        title: 'Your health story is unique. Your care should be too.',
      }}
      cards={[
        {
          icon: UserCheck,
          title: 'Understand your needs',
          text: 'Your symptoms, health history, lifestyle and experiences help create a clearer picture of your concerns.',
          linkText: 'Discover more',
          href: '/my-approach/consultation-process',
        },
        {
          icon: ClipboardList,
          title: 'Create your approach',
          text: 'Your care is considered around your individual needs, concerns and priorities.',
          linkText: 'Discover more',
          href: '/my-approach/integrated-healing',
        },
        {
          icon: RefreshCw,
          title: 'Review as you progress',
          text: 'Your experience and response to care help guide ongoing conversations and the next steps.',
          linkText: 'Discover more',
          href: '/my-approach/consultation-process',
        },
      ]}
      approach={{
        badge: 'Our approach',
        title: 'Care that is personal to you',
        image: {
          src: '/images/photos/family-child-consultation.jpg',
          alt: 'Dr. Mohini Mutha in a personalised consultation with a mother and child',
        },
        lead: 'No two people experience health in exactly the same way. Understanding your symptoms, health history, lifestyle and individual needs provides a broader context for your care.',
        points: [
          { title: 'Listen', text: 'Understand your concerns before discussing the way forward.' },
          { title: 'Consider', text: 'Look at your health, lifestyle and individual circumstances together.' },
          { title: 'Adapt', text: 'Keep your care responsive to your needs and experiences.' },
        ],
      }}
      quotes={[
        'I appreciated how carefully my individual concerns were understood during the consultation.',
        'The approach felt personal and focused on what I was actually experiencing.',
        'I felt listened to rather than being given a one-size-fits-all approach.',
      ]}
      cta={{
        title: 'Your care should feel personal',
        subtitle: 'Understanding your health is the first step. Explore your care options and choose the approach that feels right for your needs.',
        tiles: [
          { kind: 'explore', title: 'Explore your care options', text: 'Learn more about the consultation approach.', href: '/my-approach/consultation-process' },
          { kind: 'chat', title: 'Connect with Dr. Mohini', text: 'Discuss your needs.' },
          { kind: 'book', title: 'Book a consultation', text: 'Choose a convenient time to connect.' },
        ],
      }}
    />
  );
}
