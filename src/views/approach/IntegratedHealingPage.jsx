import React from 'react';
import Link from 'next/link';
import { Brain, Flower2, Sparkles } from 'lucide-react';
import ApproachTemplate from './ApproachTemplate';
import SectionHeader from '../../components/SectionHeader';

// Source: Website Content PDF, Page 17 - Integrated Healing (pp.138-140); Sitemap brief p.22.
const equation = [
  'Homeopathy',
  'Psychological counselling perspective',
  'Lifestyle awareness',
  'Patient communication',
];

export default function IntegratedHealingPage() {
  return (
    <ApproachTemplate
      className="integrated-healing-page"
      hero={{
        badge: 'My Approach',
        title: 'Integrated Healing',
        subtitle: 'Bringing homeopathy, counselling and mind-body practices into one thoughtful approach.',
        breadcrumbs: [
          { label: 'My Approach', path: '/my-approach' },
          { label: 'Integrated Healing' },
        ],
      }}
      cards={[
        {
          icon: Sparkles,
          title: 'Homeopathic care',
          text: 'Personalised homeopathic care based on your individual concerns, symptoms and health history.',
          linkText: 'Discover more',
          href: '/my-approach/why-homeopathy',
        },
        {
          icon: Brain,
          title: 'Psychological counselling',
          text: 'A supportive space to explore emotions, stress and experiences that may affect your wellbeing.',
          linkText: 'Discover more',
          href: '/expertise/mental-emotional-psychosomatic-wellness',
        },
        {
          icon: Flower2,
          title: 'Mind-body practices',
          text: 'Yoga and meditation can complement your care by supporting relaxation and everyday balance.',
          linkText: 'Discover more',
          href: '/expertise/sleep-lifestyle-concerns',
        },
      ]}
      afterCards={(
        <section className="section-sm bg-mint">
          <div className="container">
            <SectionHeader badge="Integrated care" title="Looking at the person, not just the symptom" centered={true} />
            <ul className="ap-equation" aria-label="Elements of integrated care">
              {equation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="ap-related">
              See also: <Link href="/clinical-philosophy">Clinical Philosophy</Link>
              {' · '}
              <Link href="/">Integrated Anxiety Care</Link>
            </p>
          </div>
        </section>
      )}
      approach={{
        badge: 'Our approach',
        title: 'A more connected approach to wellbeing',
        lead: 'Different aspects of wellbeing can influence one another. Integrated care brings them together around your individual needs.',
        points: [
          { title: 'Understand', text: 'Look at your concerns in the context of your health, experiences and everyday life.' },
          { title: 'Connect', text: 'Consider the relationship between physical, emotional and lifestyle factors.' },
          { title: 'Personalise', text: 'Bring appropriate approaches together around your individual needs.' },
        ],
      }}
      quotes={[
        'I appreciated having space to discuss both my physical and emotional concerns.',
        'The approach felt personal and considered the different aspects of my wellbeing.',
        'I valued the combination of thoughtful consultation and practical guidance.',
      ]}
      cta={{
        title: 'Care that brings everything together',
        subtitle: 'Consider an approach that brings together relevant aspects of your health, based on your individual needs.',
        tiles: [
          { kind: 'explore', title: 'Explore your care options', text: 'Understand the different approaches available to you.', href: '/my-approach' },
          { kind: 'chat', title: 'Chat with me', text: 'Discuss your needs and questions.' },
          { kind: 'book', title: 'Book a consultation', text: 'Choose a convenient time to connect.' },
        ],
      }}
      image={{
        src: '/images/photos/meditation-practice.jpg',
        alt: 'Guided meditation as part of integrated mind-body care',
      }}
    />
  );
}
