import React from 'react';
import { XCircle, CheckCircle2, HelpCircle, User, MessageSquareText } from 'lucide-react';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import ActionTilesCTA from './ActionTilesCTA';
import { defaultTiles } from './actionTiles';
import { mythsAndFactsList } from '../../data/websiteContent';
import '../../styles/resources.css';

// Source: Website Content PDF, Page 28 – Myths vs Facts (pp.155–156);
// fourth myth is the example from the Sitemap brief Section 05.
const betterInfo = [
  { Icon: HelpCircle, title: 'Question assumptions', text: 'Not everything we hear about health is supported by reliable information.' },
  { Icon: User, title: 'Look at the individual', text: 'The same health concern can affect different people differently.' },
  { Icon: MessageSquareText, title: 'Ask informed questions', text: 'Understanding your options helps you have more meaningful conversations about care.' },
];

export default function MythsVsFactsPage() {
  return (
    <div className="myths-facts-page">
      <Hero
        badge="Resources"
        title="Myths vs Facts"
        subtitle="Separating common beliefs from better understanding"
        breadcrumbs={[
          { label: 'Resources', path: '/resources/patient-stories' },
          { label: 'Myths vs Facts' },
        ]}
        primaryCtaText="Book a consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Blogs"
        secondaryCtaLink="/resources/blogs"
      />

      <section className="section bg-surface">
        <div className="container">
          <div className="rs-myth-list">
            {mythsAndFactsList.map((item) => (
              <article key={item.myth} className="card rs-myth-card">
                <div className="rs-myth">
                  <span className="rs-mf-label"><XCircle size={16} aria-hidden="true" /> Myth</span>
                  <h3>{item.title}</h3>
                  <p>{item.myth}</p>
                </div>
                <div className="rs-fact">
                  <span className="rs-mf-label"><CheckCircle2 size={16} aria-hidden="true" /> Fact</span>
                  <p>{item.fact}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/patient-conversation.jpg')" }}>
        <div className="container">
          <SectionHeader
            badge="Better information"
            title="Better information, better conversations"
            subtitle="Health information can be confusing. Understanding what is known, what is uncertain and what is individual can help you ask better questions."
            centered={true}
          />
          <div className="grid-3">
            {betterInfo.map(({ Icon, title, text }) => (
              <div key={title} className="card rs-card">
                <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ActionTilesCTA
        title="Have a question about homeopathy?"
        subtitle="If you've heard something you're unsure about, bring your questions to the conversation and explore them openly."
        tiles={defaultTiles({ message: "Share what you've heard." })}
      />
    </div>
  );
}
