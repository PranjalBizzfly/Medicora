import React from 'react';
import { HeartHandshake, MessageCircle, Sparkles } from 'lucide-react';
import ApproachTemplate from './ApproachTemplate';

// Source: Website Content PDF, Page 16 - Why Homeopathy (pp.137-138); Sitemap brief p.22.
export default function WhyHomeopathyPage() {
  return (
    <ApproachTemplate
      className="why-homeopathy-page"
      hero={{
        badge: 'My Approach',
        title: 'Why Homeopathy?',
        subtitle: 'Looking at the individual, not just the condition',
        breadcrumbs: [
          { label: 'My Approach', path: '/my-approach' },
          { label: 'Why Homeopathy' },
        ],
      }}
      cardsHeader={{
        badge: 'Why Homeopathy',
        title: 'Understanding the role of homeopathy in personalised care',
      }}
      cards={[
        {
          icon: Sparkles,
          title: 'Individualised care',
          text: 'Homeopathy considers your symptoms alongside your individual health history, experiences and overall wellbeing.',
          linkText: 'Learn more',
          href: '/my-approach/personalised-treatment',
        },
        {
          icon: MessageCircle,
          title: 'A deeper conversation',
          text: 'Understanding your concerns, patterns and overall wellbeing is an important part of the consultation.',
          linkText: 'Discover more',
          href: '/my-approach/consultation-process',
        },
        {
          icon: HeartHandshake,
          title: 'Personalised support',
          text: 'Your care is shaped around your individual concerns rather than applying the same approach to everyone.',
          linkText: 'Discover more',
          href: '/my-approach/integrated-healing',
        },
      ]}
      approach={{
        badge: 'The homeopathic approach',
        title: 'Understanding the homeopathic approach',
        lead: 'Homeopathy is a system of complementary medicine that takes an individualised approach to health and symptoms.',
        points: [
          { title: 'Individuality matters', text: 'Different people can experience similar health concerns in very different ways.' },
          { title: 'Your story matters', text: 'Your experiences, symptoms and health history provide important context for understanding your concerns.' },
          { title: 'Conversations matter', text: 'Good care begins with taking the time to understand what you are going through.' },
        ],
      }}
      quotes={[
        'I appreciated how much time was taken to understand my concerns before discussing my care.',
        'The consultation felt personal and gave me space to explain what I was experiencing.',
        'I valued the thoughtful questions and the attention given to my individual concerns.',
      ]}
      cta={{
        title: 'Explore whether homeopathy is right for you',
        subtitle: 'Have questions about homeopathy or your health concerns? Explore your options and understand whether this approach may be suitable for you.',
        tiles: [
          { kind: 'explore', title: 'Explore your options', text: 'Learn more about the approach and what to expect.', href: '/my-approach/consultation-process' },
          { kind: 'chat', title: 'Chat with me', text: 'Discuss your concerns openly.' },
          { kind: 'book', title: 'Book a consultation', text: 'Choose a convenient time to connect.' },
        ],
      }}
      image={{
        src: '/images/approach/why-homeopathy-remedies.webp',
        alt: 'Classical homeopathic remedies, amber dropper bottles and white pillules',
      }}
    />
  );
}
