'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Hero from '../../components/Hero';
import SectionHeader from '../../components/SectionHeader';
import CTABanner from '../../components/CTABanner';
import BrandMark from '../../components/BrandMark';
import { blogArticles } from '../../data/websiteContent';
import {
  Clock,
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react';
import '../../styles/resources.css';

const categories = [
  "All Articles",
  "Mental & Emotional Wellness",
  "Lifestyle & Sleep",
  "Homeopathy Education",
  "Health Education"
];

const pillars = [
  "Health Education",
  "Women's Wellness",
  "Child & Adolescent Health",
  "Mental & Emotional Wellness",
  "Lifestyle & Sleep",
  "Digestive Health",
  "Respiratory Health",
  "Skin & Allergies",
  "Homeopathy Education",
  "Myths vs Facts"
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredArticles = selectedCategory === "All Articles"
    ? blogArticles
    : blogArticles.filter((art) => art.category === selectedCategory);

  return (
    <div className="blogs-page">
      <Hero
        badge="Resources · Health Insights"
        title="Health & Wellness Blogs"
        subtitle="Simple, practical insights for better everyday wellbeing. Thoughtful articles on anxiety, sleep, lifestyle, and homeopathic care."
        breadcrumbs={[
          { label: "Resources", path: "/resources/patient-stories" },
          { label: "Blogs" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        secondaryCtaText="Explore Myths vs Facts"
        secondaryCtaLink="/resources/myths-vs-facts"
      />

      {/* Content Pillars & Filters */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeader
            badge="Content Categories"
            title="Explore Insights by Health Category"
            subtitle="Understand common health concerns and the connection between mind and body."
            centered={true}
          />

          {/* Category Filter Pills */}
          <div className="rs-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => { setSelectedCategory(cat); setActiveArticle(null); }}
                className={`btn btn-sm rs-pill ${selectedCategory === cat ? 'btn-primary' : 'btn-subtle'}`}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Modal / Expanded View if an article is clicked */}
          {activeArticle && (
            <article className="rs-reader">
              <div className="rs-reader-top">
                <span className="badge badge-mint">{activeArticle.category}</span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="btn btn-secondary btn-sm"
                >
                  <span>Close Reader</span>
                  <X size={14} aria-hidden="true" />
                </button>
              </div>

              <h2>{activeArticle.title}</h2>
              <div className="rs-meta">
                <span><Clock size={13} aria-hidden="true" /> {activeArticle.readTime}</span>
              </div>

              <p className="rs-reader-summary">
                {activeArticle.summary}
              </p>

              <div className="rs-reader-content">
                <p>{activeArticle.content}</p>
                <p>
                  Health concerns require looking at the person behind the symptoms. Rather than rushing to label or suppress discomfort, understanding the emotional triggers, daily lifestyle routines, and constitutional traits offers a more considered path forward.
                </p>
              </div>

              <div className="rs-reader-actions">
                <Link href="/book-a-consultation" className="btn btn-primary btn-sm">
                  <span>Discuss This Concern with Dr. Mohini</span>
                  <ArrowRight size={14} />
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="btn btn-secondary btn-sm"
                >
                  Back to List
                </button>
              </div>
            </article>
          )}

          {/* Articles Listing */}
          <div className="grid-2">
            {filteredArticles.map((article) => (
              <article key={article.id} className="card rs-blog-card">
                <div className="rs-blog-media">
                  <span className="badge badge-mint">{article.category}</span>
                  <BrandMark className="rs-blog-mark" />
                </div>

                <div className="rs-blog-body">
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>

                  <div className="rs-blog-foot">
                    <div className="rs-meta">
                      <span><Clock size={13} aria-hidden="true" /> {article.readTime}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => { setActiveArticle(article); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                      className="btn btn-subtle btn-sm"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 10 Content Pillars Reference */}
          <div className="rs-pillars">
            <h3>Our 10 Educational Content Pillars</h3>
            <p>
              Articles in our health library are systematically built around the following pillars:
            </p>

            <div className="rs-pillar-grid">
              {pillars.map((pillar) => (
                <div key={pillar} className="rs-pillar">
                  <CheckCircle size={15} aria-hidden="true" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        badge="Keep Learning"
        title="Keep Learning, Keep Understanding"
        subtitle="Good health starts with asking questions. Explore our latest articles or begin a conversation about your concerns."
      />
    </div>
  );
}
