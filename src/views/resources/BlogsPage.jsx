'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Brain, Moon, Leaf, BookOpen, Mail, Calendar, CheckCircle } from 'lucide-react';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import BrandMark from '../../components/BrandMark';
import ActionTilesCTA from './ActionTilesCTA';
import { blogArticles, blogCategories, siteConfig } from '../../data/websiteContent';
import '../../styles/resources.css';

const blogAlts = {
  'anxiety-myths-and-facts': 'A thoughtful woman on a sofa gazing out of a garden window',
  'can-anxiety-affect-your-sleep': 'An unmade bed beside a glowing lamp as evening falls',
  'does-homeopathy-work-for-anxiety': 'Homeopathic dropper bottles with lavender, rosemary and chamomile',
};

const blogImages = {
  'anxiety-myths-and-facts': '/images/blog/anxiety-myths-and-facts.webp',
  'can-anxiety-affect-your-sleep': '/images/blog/can-anxiety-affect-your-sleep.webp',
  'does-homeopathy-work-for-anxiety': '/images/blog/does-homeopathy-work-for-anxiety.webp',
};

// Source: Website Content PDF, Page 25 – Blogs (pp.150–151); content pillars
// from Sitemap brief Section 05. Article bodies have not been supplied, so
// cards open a "Full article coming soon" state (no invented text or dates).
const categoryIcons = { anxiety: Brain, sleep: Moon, homeopathy: Leaf };

const contentPillars = [
  'Health Education',
  "Women's Wellness",
  'Child & Adolescent Health',
  'Mental & Emotional Wellness',
  'Lifestyle & Sleep',
  'Digestive Health',
  'Respiratory Health',
  'Skin & Allergies',
  'Homeopathy Education',
  'Myths vs Facts',
];

export default function BlogsPage() {
  const [category, setCategory] = useState('all');
  const [openArticle, setOpenArticle] = useState(null);

  const visible = category === 'all' ? blogArticles : blogArticles.filter((a) => a.categoryId === category);

  const selectCategory = (id) => {
    setCategory(id);
    setOpenArticle(null);
    const el = typeof document !== 'undefined' && document.getElementById('latest-insights');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="blogs-page">
      <Hero
        badge="Health & Wellness"
        title="Blogs"
        subtitle="Simple insights for better everyday wellbeing. Explore practical, easy-to-understand insights on anxiety, sleep, lifestyle and everyday health."
        breadcrumbs={[
          { label: 'Resources' },
          { label: 'Blogs' },
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Myths vs Facts"
        secondaryCtaLink="/resources/myths-vs-facts"
      />

      <section className="section bg-surface">
        <div className="container">
          <div className="grid-3">
            {blogCategories.map((c) => {
              const Icon = categoryIcons[c.id] || BookOpen;
              return (
                <div key={c.id} className="card rs-card">
                  <span className="icon-tile"><Icon size={22} aria-hidden="true" /></span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <button type="button" className="link-arrow rs-link-button" onClick={() => selectCategory(c.id)}>
                    <span>Explore articles</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="latest-insights" className="section bg-sand">
        <div className="container">
          <SectionHeader
            badge="Latest health insights"
            title="Explore our latest health insights"
            subtitle="Thoughtful articles designed to help you understand your health and make more informed decisions."
            centered={true}
          />

          <div className="rs-pills" role="group" aria-label="Filter articles by category">
            <button
              type="button"
              className={`btn btn-sm rs-pill ${category === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              aria-pressed={category === 'all'}
              onClick={() => { setCategory('all'); setOpenArticle(null); }}
            >
              All
            </button>
            {blogCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`btn btn-sm rs-pill ${category === c.id ? 'btn-primary' : 'btn-secondary'}`}
                aria-pressed={category === c.id}
                onClick={() => { setCategory(c.id); setOpenArticle(null); }}
              >
                {c.title}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {visible.map((a) => (
              <article key={a.id} className="card rs-blog-card">
                <div className="rs-blog-media">
                  {blogImages[a.id] ? (
                    <Image
                      src={blogImages[a.id]}
                      alt={blogAlts[a.id]}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <BrandMark className="rs-blog-mark" />
                  )}
                  <span className="badge">{a.category}</span>
                </div>
                <div className="rs-blog-body">
                  <h3>{a.title}</h3>
                  <p>{a.summary}</p>
                  {openArticle === a.id ? (
                    <div className="rs-pending" role="status">
                      <span className="rs-pending-tag">Full article coming soon</span>
                      <p>This article is being prepared and will be published here.</p>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="link-arrow rs-link-button"
                      onClick={() => setOpenArticle(a.id)}
                    >
                      <span>Read article</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="rs-pillars">
            <h3>Content pillars</h3>
            <div className="rs-pillar-grid">
              {contentPillars.map((p) => (
                <div key={p} className="rs-pillar">
                  <CheckCircle size={16} aria-hidden="true" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ActionTilesCTA
        title="Keep learning, keep understanding"
        subtitle="Good health starts with asking questions. Explore our latest articles or begin a conversation about your concerns."
        tiles={[
          { icon: BookOpen, title: 'Explore all blogs', text: 'Browse our latest health insights.', href: '/resources/blogs#latest-insights' },
          { icon: Mail, title: 'Ask a question', text: "Share something you'd like to understand.", href: `mailto:${siteConfig.email}` },
          { icon: Calendar, title: 'Book a Consultation', text: 'Choose a convenient time to connect.', href: '/book-a-consultation' },
        ]}
      />
    </div>
  );
}
