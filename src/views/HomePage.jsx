import React from 'react';
import Link from 'next/link';
import {
  expertiseSpecialties,
  patientTestimonials,
  blogArticles
} from '../data/websiteContent';
import ConsultationProcess from '../components/ConsultationProcess';
import StatsStrip from '../components/StatsStrip';
import SectionHeader from '../components/SectionHeader';
import TestimonialCard from '../components/TestimonialCard';
import CTABanner from '../components/CTABanner';
import BrandMark from '../components/BrandMark';
import ExpertiseIcon from '../components/ExpertiseIcon';
import {
  Building2,
  Video,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Brain,
  Award,
  Stethoscope,
  HeartHandshake,
  Leaf,
  Ear,
  Landmark,
  Users
} from 'lucide-react';
import '../styles/home.css';

const quickInfo = [
  {
    icon: Building2,
    title: 'In-Person Consultations',
    text: "Dr. Mohini practices at Dr. Mutha's Homeopathic Clinic located in Kopar Khairne, Navi Mumbai.",
    link: 'View clinic details',
  },
  {
    icon: Video,
    title: 'Online Consultations',
    text: 'Connect with Dr. Mohini from the comfort of your home, wherever you are in India, the UAE, or the USA.',
    link: 'Book online consultation',
  },
  {
    icon: Clock,
    title: 'Flexible Appointments',
    text: 'Choose a consultation format and appointment window that works comfortably with your schedule.',
    link: 'Schedule a consultation',
  },
];

const credentials = [
  { icon: Award, title: 'MD in Homeopathy', text: 'Specialisation in Homeopathic Materia Medica (Completed 2016)' },
  { icon: Brain, title: 'PGDPC in Psychological Counselling', text: 'Formal postgraduate qualification in psychological counselling' },
  { icon: Building2, title: 'Consultant with ONGC', text: 'Serving as Consultant Homoeopathic Physician since 2018 (~8 years)' },
  { icon: Sparkles, title: 'Founder, Trivana Wellness', text: 'Digital care practice bringing homeopathy, counselling & meditation' },
];

const differences = [
  {
    icon: Stethoscope,
    title: '14+ Years Clinical Experience',
    text: 'Dr. Mohini has been practising since 2012 across diverse clinical and institutional healthcare settings, working with a wide range of acute and chronic concerns.',
  },
  {
    icon: Brain,
    title: 'MD + Psychological Counselling',
    text: 'Her MD in Homeopathy is complemented by postgraduate training in psychological counselling, adding an understanding of the emotional side of health.',
  },
  {
    icon: Leaf,
    title: 'Integrated Mind-Body Care',
    text: 'Homeopathy, counselling, Bach flower remedies and supportive lifestyle practices may be considered together, based on individual needs.',
  },
  {
    icon: Ear,
    title: 'Patient-First Listening',
    text: 'Consultations are not rushed. Dr. Mohini takes the time to listen to your story, patterns and everyday circumstances.',
  },
  {
    icon: Landmark,
    title: 'Institutional Experience',
    text: 'Serving as a Consultant Homoeopathic Physician with ONGC since 2018 has added experience within a structured healthcare environment.',
  },
  {
    icon: Users,
    title: 'Community Outreach & Camps',
    text: 'Dr. Mohini has conducted and participated in free homeopathic medical camps in Navi Mumbai, with a focus on health and emotional-wellbeing awareness.',
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      {/* 1. Hero */}
      <section className="home-hero">
        <div className="home-hero-decor" aria-hidden="true" />
        <div className="container home-hero-grid">
          <div className="home-hero-content">
            <div className="hero-badge-row">
              <span className="badge">Homeopathy · Counselling · Mind-Body Care</span>
            </div>

            <h1 className="home-hero-title">
              Personalised Care for Better <span>Mind & Body</span> Wellness
            </h1>

            <p className="home-hero-subtitle">
              Dr. Mohini Mutha brings 14+ years of clinical experience in homeopathy and psychological counselling to provide thoughtful, individualised care for you and your family.
            </p>

            <div className="home-hero-note">
              <strong>Feel better. Understand your anxiety.</strong>
              <p>
                Personalised online anxiety and psychosomatic care combining clinical homeopathy, psychological counselling, and mind-body support.
              </p>
            </div>

            <div className="hero-actions">
              <Link href="/book-a-consultation" className="btn btn-primary btn-lg">
                <Calendar size={18} />
                <span>Book a Consultation</span>
              </Link>
              <Link href="/my-approach" className="btn btn-secondary btn-lg">
                <span>Explore Her Approach</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Visual composition: brand panel + floating profile and stat cards */}
          <div className="home-hero-visual">
            <div className="home-hero-panel">
              <div className="home-hero-panel-ring" aria-hidden="true" />
              <BrandMark className="home-hero-panel-mark" />
            </div>

            <div className="home-hero-profile">
              <div className="home-hero-profile-head">
                <span className="home-hero-avatar" aria-hidden="true">
                  <BrandMark className="home-hero-avatar-mark" />
                </span>
                <div>
                  <h3>Dr. Mohini Mutha</h3>
                  <span>MD (Homeopathy) · PGDPC</span>
                </div>
              </div>
              <ul className="home-hero-profile-list">
                <li><CheckCircle2 size={16} /> 14+ years of clinical practice since 2012</li>
                <li><CheckCircle2 size={16} /> 12,000+ patient consultations across India, UAE & USA</li>
                <li><CheckCircle2 size={16} /> Consultant Homoeopathic Physician with ONGC (2018–Present)</li>
                <li><CheckCircle2 size={16} /> Founder of Trivana Wellness digital practice</li>
              </ul>
              <Link href="/about-me" className="link-arrow">
                <span>Read Full Profile</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="home-hero-chip home-hero-chip-top">
              <span className="home-hero-chip-number">12,000+</span>
              <span className="home-hero-chip-label">Patients consulted</span>
            </div>

            <div className="home-hero-chip home-hero-chip-bottom">
              <HeartHandshake size={20} />
              <span className="home-hero-chip-label">Online & in-person care</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature cards under the hero */}
      <section className="home-quick-info">
        <div className="container">
          <div className="quick-info-strip">
            {quickInfo.map(({ icon: Icon, title, text, link }, idx) => (
              <div key={title} className="quick-info-col">
                <div className="quick-info-icon">
                  <Icon size={24} />
                </div>
                <div>
                  <span className="quick-info-index">0{idx + 1}</span>
                  <h3 className="quick-info-title">{title}</h3>
                  <p className="quick-info-desc">{text}</p>
                  <Link href="/book-a-consultation" className="quick-info-link">
                    <span>{link}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About / introducing Dr. Mohini */}
      <section className="section bg-surface">
        <div className="container">
          <div className="split-section home-about">
            <div className="home-about-card">
              <BrandMark className="home-about-card-mark" />
              <h3>Core Credentials & Clinical Scope</h3>
              <ul className="home-about-list">
                {credentials.map(({ icon: Icon, title, text }) => (
                  <li key={title}>
                    <span className="icon-tile">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeader
                badge="Introducing Dr. Mohini"
                title="Experienced Care for Anxiety, Stress & Emotional Well-being"
              />
              <p className="home-lead">
                Dr. Mohini Mutha, MD (Homeopathy) & PGDPC, brings 14+ years of clinical experience to personalised patient care. Her work combines homeopathic practice with psychological counselling and mind-body approaches.
              </p>
              <p className="home-body">
                Her approach looks beyond individual symptoms to understand the person, the pattern, and the lifestyle factors influencing their well-being. Alongside classical homeopathy, she may draw on Bach flower remedies and counselling, depending on each patient's needs.
              </p>

              <div className="hero-actions">
                <Link href="/about-me" className="btn btn-primary">
                  <span>Meet Dr. Mohini</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/my-journey" className="btn btn-secondary">
                  <span>View Her Journey</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* 4. Areas of expertise */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Areas of Care"
            title="Holistic Care for Mind & Body Well-being"
            subtitle="From anxiety and stress support to chronic digestive, respiratory, skin and women's health concerns, care is designed around the individual."
            centered={true}
          />

          <div className="grid-3 home-expertise-grid">
            {expertiseSpecialties.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={`card card-link home-expertise-card ${item.isKeyDifferentiator ? 'is-featured' : ''}`}
              >
                <div className="home-expertise-card-top">
                  <span className="icon-tile">
                    <ExpertiseIcon name={item.icon} />
                  </span>
                  {item.isKeyDifferentiator && <span className="badge badge-mint">Key Focus</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.shortDesc}</p>
                <span className="link-arrow">
                  <span>Explore care</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Consultation process */}
      <ConsultationProcess />

      {/* 6. Why patients choose Dr. Mohini */}
      <section className="section bg-dark home-difference">
        <div className="container">
          <div className="home-difference-grid">
            <div className="home-difference-intro">
              <SectionHeader
                badge="Our Difference"
                badgeType="dark"
                title="Experience, Empathy, and Approach to Patient Care"
                subtitle="With 14+ years of clinical experience, Dr. Mohini Mutha believes in bringing personalised care to every consultation."
              />
              <Link href="/clinical-philosophy" className="btn btn-white">
                <span>Read Her Clinical Philosophy</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="home-difference-cards">
              {differences.map(({ icon: Icon, title, text }) => (
                <div key={title} className="home-difference-card">
                  <span className="home-difference-icon">
                    <Icon size={22} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Patient stories preview */}
      <section className="section bg-sand">
        <div className="container">
          <div className="section-head-row">
            <SectionHeader badge="Patient Stories" title="Real Experiences from People We Have Cared For" />
            <Link href="/resources/patient-stories" className="btn btn-secondary btn-sm">
              <span>View All Stories</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-3">
            {patientTestimonials.slice(0, 3).map((item) => (
              <TestimonialCard
                key={item.id}
                quote={item.quote}
                author={item.author}
                location={item.location}
                category={item.category}
                condition={item.condition}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Educational resources */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-head-row">
            <SectionHeader
              badge="Health Education"
              title="Simple Insights for Better Everyday Wellbeing"
              subtitle="Thoughtful articles and clear explanations to help you understand your health."
            />
            <Link href="/resources/blogs" className="btn btn-secondary btn-sm">
              <span>All Articles</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-3 home-blog-grid">
            {blogArticles.slice(0, 3).map((article) => (
              <Link key={article.id} href="/resources/blogs" className="card card-link home-blog-card">
                <div className="home-blog-card-media" aria-hidden="true">
                  <BrandMark className="home-blog-card-mark" />
                  <span className="badge">{article.category}</span>
                </div>
                <div className="home-blog-card-body">
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <span className="link-arrow">
                    <span>Read article</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="home-myths-link">
            <Link href="/resources/myths-vs-facts" className="btn btn-subtle">
              <BookOpen size={16} />
              <span>Explore Myths vs Facts About Homeopathy & Anxiety</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <CTABanner
        badge="Ready to Take the Next Step?"
        title="Your Health Deserves a Personal Approach"
        subtitle="Whether you're looking for support with anxiety, emotional well-being, sleep or another health concern, the first step can simply be a conversation."
      />
    </div>
  );
}
