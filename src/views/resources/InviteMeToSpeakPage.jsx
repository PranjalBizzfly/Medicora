import React from 'react';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import SpeakingForm from '../../components/SpeakingForm';
import ActionTilesCTA from './ActionTilesCTA';
import { siteConfig } from '../../data/websiteContent';
import {
  Users,
  HeartHandshake,
  CheckCircle,
  Sparkles,
  Send,
  MessageCircle,
  Mail,
  Quote,
} from 'lucide-react';
import '../../styles/resources.css';

// Source: Website Content PDF, Page 26 – Invite Me To Speak (pp.152–153);
// audience list from Sitemap brief Section 05.
const topics = [
  { Icon: HeartHandshake, title: 'Health & wellbeing', text: 'I enjoy sharing practical perspectives on health, emotional wellbeing and everyday wellness.' },
  { Icon: Users, title: 'Mental & emotional health', text: 'I can speak about anxiety, stress, emotional wellbeing and the mind-body connection.' },
  { Icon: Sparkles, title: 'Homeopathy & awareness', text: 'Thoughtful discussions around homeopathy, patient care and understanding individual health needs.' },
];

const formats = [
  { title: 'Talks', text: 'Health and wellbeing topics for audiences seeking practical insights.' },
  { title: 'Workshops', text: 'Interactive sessions designed around awareness and meaningful discussion.' },
  { title: 'Conversations', text: 'Panels, interviews and discussions across relevant health topics.' },
];

const audiences = [
  'Corporate wellness programmes',
  'Health awareness sessions',
  "Women's wellness events",
  'Stress management sessions',
  'Mental/emotional wellness discussions',
  'Community health programmes',
  'Educational institutions',
];

const feedback = [
  'A thoughtful and engaging perspective that made the conversation easy to understand.',
  'The discussion created a comfortable space for questions and meaningful conversation.',
  'Clear, practical and genuinely informative.',
];

export default function InviteMeToSpeakPage() {
  return (
    <div className="invite-speaker-page">
      <Hero
        badge="Resources"
        title="Invite Me To Speak"
        subtitle="Conversations that create awareness and understanding"
        breadcrumbs={[
          { label: 'Resources' },
          { label: 'Invite Me To Speak' },
        ]}
        primaryCtaText="Invite Dr. Mohini to Speak"
        primaryCtaLink="#speaker-form"
        secondaryCtaText="Achievements"
        secondaryCtaLink="/credentials/achievements"
      />

      <section id="speaking-areas" className="section photo-band" style={{ '--band-img': "url('/images/photos/clinic-lounge.webp')" }}>
        <div className="container">
          <div className="grid-3">
            {topics.map(({ Icon, title, text }) => (
              <div key={title} className="card rs-card rs-topic">
                <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#speaking-experience" className="link-arrow">
                  <span>Explore topics</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="speaking-experience" className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="Speaking & event experience"
            title="Sharing knowledge, creating conversations"
            subtitle="With 14+ years of clinical experience, I bring a patient-centred perspective to health and wellbeing discussions."
            centered={true}
          />

          <div className="grid-3">
            {formats.map((f) => (
              <div key={f.title} className="card rs-card">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>

          <div className="split-section rs-section-gap">
            <div className="rs-split-intro">
              <h3>Speaking opportunities</h3>
              <div className="rs-audience-grid">
                {audiences.map((aud) => (
                  <div key={aud} className="rs-audience">
                    <CheckCircle size={16} aria-hidden="true" />
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rs-feedback">
              <div className="rs-feedback-list">
                {feedback.map((quote) => (
                  <figure key={quote} className="rs-feedback-item">
                    <Quote size={18} aria-hidden="true" />
                    <blockquote>&ldquo;{quote}&rdquo;</blockquote>
                    <figcaption>Event feedback</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="speaker-form" className="section bg-surface">
        <div className="container-narrow">
          <SectionHeader
            badge="Invite Dr. Mohini to Speak"
            title="Have an event in mind?"
            subtitle="I'd be happy to explore opportunities to speak, collaborate or contribute to a meaningful conversation."
            centered={true}
          />

          <SpeakingForm eventTypes={audiences} />
        </div>
      </section>

      <ActionTilesCTA
        title="Have an event in mind?"
        subtitle="I'd be happy to explore opportunities to speak, collaborate or contribute to a meaningful conversation."
        tiles={[
          { icon: Send, title: 'Send an invitation', text: 'Share your event details.', href: '/resources/invite-me-to-speak#speaker-form' },
          { icon: Mail, title: 'Discuss your topic', text: "Tell me what you'd like to explore.", href: `mailto:${siteConfig.email}` },
          { icon: MessageCircle, title: 'Get in touch', text: 'Start the conversation.', href: 'https://wa.me/919423972150' },
        ]}
      />
    </div>
  );
}
