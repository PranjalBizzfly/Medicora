import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '../components/StatsStrip';
import SectionHeader from '../components/SectionHeader';
import ExpertiseIcon from '../components/ExpertiseIcon';
import HeroSlider from '../components/HeroSlider';
import ParticleSphere from '../components/ParticleSphere';
import {
  Building2,
  Video,
  Clock,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Brain,
  Award,
  Stethoscope,
  HeartHandshake,
  Leaf,
  HelpCircle,
  Scale,
  Globe,
  Quote
} from 'lucide-react';
import '../styles/home.css';

// Source: Website Content PDF, "Page 1 – HOME", Section 1 (sliding banner, 2 slides)
const heroSlides = [
  {
    eyebrow: 'Homeopathy • Counselling • Mind-Body Care',
    title: 'A thoughtful approach to your health and wellbeing',
    secondary: { href: '/about-me', label: 'Meet Dr. Mohini' },
    image: '/images/photos/patient-consultation.webp',
    alt: 'A smiling doctor listening to a patient across her clinic desk',
    position: '65% center',
  },
  {
    title: 'Feel better. Understand your anxiety',
    subtitle: 'Personalised online anxiety care combining homeopathy, counselling, and mind-body support.',
    secondary: { href: '/expertise/mental-emotional-psychosomatic-wellness', label: 'Explore her expertise' },
    image: '/images/hero2.webp',
    alt: 'A counsellor holding a patient\'s hands in reassurance on a sofa',
    position: '65% center',
  },
  {
    eyebrow: 'Integrated Healing',
    title: 'Homeopathy, counselling, yoga and meditation in one care plan',
    secondary: { href: '/my-approach/integrated-healing', label: 'See how it works' },
    image: '/images/hero3.webp',
    alt: 'A woman meditating cross-legged on a terrace at sunset, overlooking the sea',
    position: '60% center',
  },
];

// Section 2 – small feature cards
const quickInfo = [
  {
    icon: Building2,
    title: 'In-Person Consultations',
    text: "Dr. Mohini practices at Dr. Mutha's Homeopathic Clinic in Kopar Khairne, Navi Mumbai.",
    link: 'Book a Consultation',
    href: '/book-a-consultation',
  },
  {
    icon: Video,
    title: 'Online Consultations',
    text: 'Connect with Dr. Mohini from the comfort of your home, wherever you are.',
    link: 'Book a Consultation',
    href: '/book-a-consultation',
  },
  {
    icon: Clock,
    title: 'Flexible Appointments',
    text: 'Choose a consultation format and appointment time that works for you.',
    link: 'Book a Consultation',
    href: '/book-a-consultation',
  },
];

// Verified profile facts (AGENT_BRIEF verified facts; sitemap brief "Introducing Dr. Mohini")
const credentials = [
  { icon: Award, title: 'MD in Homeopathy', text: 'Specialisation in Homeopathic Materia Medica' },
  { icon: Brain, title: 'PGDPC', text: 'Post Graduate Diploma in Psychological Counselling' },
  { icon: Stethoscope, title: 'Consultant Homoeopathic Physician with ONGC', text: 'Since 2018' },
  { icon: Building2, title: "Dr. Mutha's Homeopathic Clinic", text: 'Kopar Khairne, Navi Mumbai' },
  { icon: Sparkles, title: 'Founder, Trivana Wellness', text: 'Homeopathy, counselling, yoga and meditation in one care plan' },
];

// Section 4 – services (all six source cards)
const services = [
  {
    title: 'Online Anxiety Care',
    text: 'Doctor-led consultations for anxiety, stress and related concerns.',
    points: ['Symptoms assessment', 'Personalised consultation', 'Continuity of Care'],
    href: '/expertise/mental-emotional-psychosomatic-wellness',
  },
  {
    title: 'General Health & Wellness',
    text: 'Individualised homeopathic care based on your symptoms.',
    points: ['Detailed case-taking', 'Individual assessment', 'Personalised support'],
    href: '/expertise/general-health-wellness',
  },
  {
    title: 'Psychological Counselling',
    text: 'A structured space to understand thoughts, emotions and recurring patterns.',
    points: ['Emotional support', 'Stress management', 'Behavioural awareness'],
    href: '/my-approach/integrated-healing',
  },
  {
    title: 'Sleep & Wellbeing',
    text: 'Explore the connection between persistent anxiety and disrupted sleep.',
    points: ['Sleep concerns', 'Anxiety screening', 'Lifestyle guidance'],
    href: '/expertise/sleep-lifestyle-concerns',
  },
  {
    title: 'Mental, Emotional & Psychosomatic Wellness',
    text: 'Thoughtful care that considers the connection between emotional wellbeing and physical health.',
    points: ['Emotional wellbeing', 'Psychosomatic concerns', 'Mind-body connection'],
    href: '/expertise/mental-emotional-psychosomatic-wellness',
  },
  {
    title: 'Integrated Anxiety Care',
    text: 'Bring relevant aspects of your care together through one personalised approach.',
    points: ['Homeopathy', 'Counselling', 'Mind-body support'],
    href: '/my-approach/integrated-healing',
  },
];

// Areas of expertise grid (sitemap brief, Home section 3) – descriptions are the
// hero taglines from each expertise page in the Website Content PDF (pp. 122–135).
const expertiseAreas = [
  { title: 'General Health & Wellness', text: 'Everyday care for your overall wellbeing', href: '/expertise/general-health-wellness', icon: 'HeartPulse' },
  { title: 'Respiratory Health', text: 'Support for healthier breathing and wellbeing', href: '/expertise/respiratory-health', icon: 'Wind' },
  { title: 'Headache & Migraine Care', text: 'Understand your headaches and find better support', href: '/expertise/headache-migraine-care', icon: 'Brain' },
  { title: 'Digestive & Gut Health', text: 'Understand your digestion. Support your overall health.', href: '/expertise/digestive-gut-health', icon: 'Utensils' },
  { title: 'Skin, Hair & Allergies', text: 'Personalised care for healthier skin and hair', href: '/expertise/skin-hair-allergies', icon: 'Sparkles' },
  { title: "Women's Wellness", text: 'Personalised care for women at every stage', href: '/expertise/womens-wellness', icon: 'UserCheck' },
  { title: 'Child & Adolescent Wellness', text: 'Thoughtful care for growing minds and bodies', href: '/expertise/child-adolescent-wellness', icon: 'Smile' },
  { title: 'Joint, Muscle & Pain Management', text: 'Support for easier movement and everyday comfort', href: '/expertise/joint-muscle-pain-management', icon: 'Activity' },
  { title: 'Sleep & Lifestyle Concerns', text: 'Better sleep starts with understanding your routine', href: '/expertise/sleep-lifestyle-concerns', icon: 'Moon' },
  { title: 'Mental, Emotional & Psychosomatic Wellness', text: 'Support for emotional concerns that may affect how you feel and function.', href: '/expertise/mental-emotional-psychosomatic-wellness', icon: 'ShieldAlert' },
];

// Section 5 – Home's own four-step process
const homeSteps = [
  { title: 'Book', text: 'Choose a convenient time for your online consultation.' },
  { title: 'Consult', text: "Talk openly with Dr. Mohini about what you're experiencing." },
  { title: 'Understand', text: 'Explore your symptoms, patterns, lifestyle and overall health.' },
  { title: 'Personalise', text: 'Build a care approach aligned with your individual needs.' },
];

// Section 6 – differentiator (3 source cards only)
const differences = [
  {
    image: '/images/photos/child-consultation.webp',
    alt: 'A doctor in consultation with a young patient and her mother',
    icon: Stethoscope,
    title: '14+ Years of Clinical Experience',
    text: 'Dr. Mohini has been practising since 2012 across clinical and institutional healthcare settings.',
  },
  {
    image: '/images/photos/homeopathy-remedies-desk.webp',
    alt: 'A homeopathic remedy bottle, mortar and pestle and dried herbs on a study desk',
    icon: Brain,
    title: 'MD + Psychological Counselling',
    text: 'Her MD in Homeopathy is complemented by postgraduate training in psychological counselling.',
  },
  {
    image: '/images/photos/lifestyle-nutrition-guidance.webp',
    alt: 'A woman sharing a home-cooked thali with an elderly woman at the dining table',
    icon: Leaf,
    title: 'Integrated Mind-Body Care',
    text: 'Homeopathy, counselling and supportive mind-body practices may be considered together, based on individual needs.',
  },
];

const blogAlts = {
  Anxiety: 'A woman sitting calmly by a sunlit garden window with a cup of tea',
  Sleep: 'A softly lit bedroom with an open journal on the bedside table',
  Homeopathy: 'Amber dropper bottles, fresh herbs and white pillules on a stone tray',
};

const blogImages = {
  Anxiety: '/images/blog/anxiety-myths-and-facts.webp',
  Sleep: '/images/blog/can-anxiety-affect-your-sleep.webp',
  Homeopathy: '/images/blog/does-homeopathy-work-for-anxiety.webp',
};

// Resources – latest 3 titles from source "Page 25 – Blogs", Section 3
const latestBlogs = [
  { category: 'Anxiety', title: 'Anxiety myths and facts: what should you know?', text: 'Simple insights to help you understand common misconceptions about anxiety.' },
  { category: 'Sleep', title: 'Can anxiety affect your sleep?', text: 'Explore the connection between worry, stress and everyday sleep patterns.' },
  { category: 'Homeopathy', title: 'Does homeopathy work for anxiety?', text: 'Understand the approach, evidence and questions worth considering.' },
];

// The only genuine patient message (source "Page 24 – Case Studies", Testimonial 01)
const genuineQuote =
  "I honestly don't know how to put my gratitude into words. When I was going through those difficult moments of panic and anxiety, there were times when I felt helpless and frightened. Your medicines helped me, but more than that, your patience, understanding and reassuring words gave me the courage to face those moments...";

const heroHighlights = ['In-Person Consultations', 'Online Consultations', 'Flexible Appointments', '14+ years of clinical experience', '12,000+ patients consulted'];

export default function HomePage() {
  return (
    <div className="home-page">
      {/* 1. Hero – full-width photo slider (2 slides) */}
      <section className="home-hero">
        <HeroSlider slides={heroSlides} />
      </section>

      {/* Highlight strip */}
      <div className="home-highlights" aria-label="Highlights">
        <ul className="container">
          {heroHighlights.map((item) => (
            <li key={item}>
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Ways to consult */}
      <section className="home-quick-info" aria-label="Ways to consult">
        <div className="container">
          <div className="quick-info-strip">
            {quickInfo.map(({ icon: Icon, title, text, link, href }) => (
              <Link key={title} href={href} className="quick-info-col">
                <span className="quick-info-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="quick-info-body">
                  <span className="quick-info-title">{title}</span>
                  <span className="quick-info-desc">{text}</span>
                  <span className="quick-info-link">
                    {link}
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. A Word About Dr. Mutha */}
      <section className="section home-about-section">
        <div className="container home-about">
          <div className="home-about-media">
            <div className="home-about-photo">
              <Image
                src="/images/doctor/dr-mohini-standing.webp"
                alt="Dr. Mohini Mutha in her white coat, standing with her hands clasped"
                fill
                quality={85}
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center 6%' }}
              />
            </div>
            <div className="home-about-stat">
              <span className="home-about-stat-icon"><Award size={24} aria-hidden="true" /></span>
              <span>
                <strong>14+ Yrs</strong>
                <small>Clinical Experience</small>
              </span>
            </div>
            <ul className="home-about-list">
              {credentials.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <Icon size={18} aria-hidden="true" />
                  <span>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="home-about-copy">
            <span className="badge">A Word About Dr. Mutha</span>
            <h2>Experienced Care for Anxiety, Stress &amp; Emotional Wellbeing</h2>
            <p className="home-lead">
              Dr. Mohini Mutha, MD (Homeopathy) &amp; PGDPC, brings 14+ years of clinical experience to personalised patient care. Her work combines homeopathic practice with psychological counselling and mind-body approaches.
            </p>
            <p className="home-body">
              Her approach looks beyond individual symptoms to understand the person, the pattern and the factors influencing their wellbeing.
            </p>
            <p className="home-body">
              <strong>Areas of Interest:</strong> Anxiety, Stress-Related Concerns, Emotional Wellbeing and Psychosomatic Concerns.
            </p>
            <div className="hero-actions">
              <Link href="/about-me" className="btn btn-primary">
                <span>Meet Dr. Mohini</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/my-journey" className="btn btn-secondary">
                <span>My Journey</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats (source: About Me statistics) */}
      <StatsStrip />

      {/* 4. Services – What we do */}
      <section className="section home-services-section">
        <div className="container">
          <SectionHeader
            badge="What we do"
            title="Holistic care for Psychosomatic & Emotional wellbeing"
            subtitle="From online anxiety consultations to counselling and mind-body support, our approach is designed around the individual, not just the symptoms."
            centered={true}
          />

          <div className="home-service-grid">
            {services.map((item) => (
              <article key={item.title} className="home-service-card">
                <span className="home-service-line" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="home-service-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link href={item.href} className="home-soft-btn">
                  <span>Know more</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of expertise – photo background with glass cards */}
      <section className="section home-photo-section home-expertise-section">
        <Image src="/images/photos/hd/green-leaves.webp" alt="Close-up of lush green leaves, reflecting a natural and holistic approach to care" fill sizes="100vw" className="home-photo-bg" />
        <div className="home-photo-overlay" aria-hidden="true" />
        <div className="container home-photo-inner">
          <SectionHeader badge="Expertise" badgeType="dark" title="Areas of Expertise" centered={true} />

          <div className="home-expertise-grid">
            {expertiseAreas.map((item) => (
              <Link key={item.href + item.title} href={item.href} className="home-glass-card">
                <span className="home-glass-icon"><ExpertiseIcon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="home-glass-link">
                  Know more <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>

          <div className="home-center-action">
            <Link href="/book-a-consultation" className="btn btn-lg home-white-btn">
              <span>Book a Consultation</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Differentiator – checklist + photo cards */}
      <section className="section home-difference">
        <div className="container">
          <SectionHeader
            badge="Our difference"
            title="Experience, empathy, and Approach to anxiety care"
            centered={true}
          />

          <ul className="home-checklist">
            {credentials.map(({ title }) => (
              <li key={title}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>{title}</span>
              </li>
            ))}
          </ul>

          <div className="home-people-grid">
            {differences.map(({ image, alt, title, text }) => (
              <article key={title} className="home-people-card">
                <div className="home-people-media">
                  <Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className="home-people-body">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="home-difference-text">
            Her experience in homeopathy, psychological counselling and patient care supports an approach that looks beyond individual symptoms.
          </p>
          <div className="home-center-action">
            <Link href="/clinical-philosophy" className="btn btn-primary">
              <span>Clinical Philosophy</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Our approach – four steps on a photo background */}
      <section className="section home-photo-section home-steps-section">
        <Image src="/images/photos/hd/caring-hands.webp" alt="Two people holding hands in a gesture of comfort and support" fill sizes="100vw" className="home-photo-bg" />
        <div className="home-photo-overlay" aria-hidden="true" />
        <div className="container home-photo-inner">
          <SectionHeader
            badge="Our approach"
            badgeType="dark"
            title="Four steps towards better wellbeing"
            subtitle="A simple, considered process designed to understand your concerns and build care around you."
            centered={true}
          />

          <ol className="home-steps">
            {homeSteps.map((step, idx) => (
              <li key={step.title} className="home-step">
                <span className="home-step-num" aria-hidden="true">{String(idx + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="home-center-action">
            <Link href="/my-approach/consultation-process" className="btn home-outline-btn">
              <span>See the full consultation process</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Patient stories – genuine quote only */}
      <section className="section home-story-section">
        <div className="container">
          <SectionHeader badge="Patient Stories" title="Real experiences from people I have cared for" centered={true} />
          <figure className="home-quote">
            <Quote size={36} aria-hidden="true" className="home-quote-mark" />
            <blockquote>“{genuineQuote}”</blockquote>
            <figcaption>Patient experience</figcaption>
          </figure>
          <div className="home-center-action">
            <Link href="/resources/case-studies" className="home-soft-btn">
              <span>Read the full experience</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/resources/patient-stories" className="home-soft-btn">
              <span>Patient Stories</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section home-blog-section">
        <div className="container">
          <SectionHeader
            badge="Resources"
            title="Explore our latest health insights"
            subtitle="Thoughtful articles designed to help you understand your health and make more informed decisions."
            centered={true}
          />

          <div className="home-blog-grid">
            {latestBlogs.map((article) => (
              <Link key={article.title} href="/resources/blogs" className="home-blog-card">
                <div className="home-blog-card-media">
                  <Image src={blogImages[article.category]} alt={blogAlts[article.category]} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                  <span className="home-blog-tag">{article.category}</span>
                </div>
                <div className="home-blog-card-body">
                  <h3>{article.title}</h3>
                  <p>{article.text}</p>
                  <span className="home-blog-link">
                    Read article <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="home-center-action">
            <Link href="/resources/blogs" className="btn btn-primary">
              <BookOpen size={16} aria-hidden="true" />
              <span>Explore all blogs</span>
            </Link>
            <Link href="/resources/faqs" className="home-soft-btn">
              <HelpCircle size={16} aria-hidden="true" />
              <span>FAQs</span>
            </Link>
            <Link href="/resources/myths-vs-facts" className="home-soft-btn">
              <Scale size={16} aria-hidden="true" />
              <span>Myths vs Facts</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Contact – Get started (both source options) */}
      <section className="section home-contact-section">
        <div className="container">
          <SectionHeader badge="Get started" title="Begin with a conversation" centered={true} />

          <div className="home-contact-grid">
            <div className="home-contact-card">
              <span className="home-contact-icon"><Globe size={22} aria-hidden="true" /></span>
              <h3>Begin with a conversation</h3>
              <p>
                If anxiety, stress or poor sleep is affecting your everyday life, take the first step with a personalised online consultation.
              </p>
              <Link href="/book-a-consultation" className="btn btn-primary">
                <Calendar size={16} aria-hidden="true" />
                <span>Book a Consultation</span>
              </Link>
              <div className="home-contact-meta">
                <strong>Trivana Wellness</strong>
                <span>Online anxiety &amp; wellness care</span>
                <span>USA • UAE • Online</span>
              </div>
            </div>

            <div className="home-contact-card">
              <span className="home-contact-icon"><HeartHandshake size={22} aria-hidden="true" /></span>
              <h3>Begin with Dr. Mohini</h3>
              <p>
                Have a health or wellbeing concern you&apos;d like to discuss? Start a conversation with Dr. Mohini Mutha and explore personalised care based on your individual needs.
              </p>
              <Link href="/about-me" className="btn btn-secondary">
                <span>Meet Dr. Mohini</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <p className="home-contact-note">Learn more about her experience and approach to care.</p>
              <div className="home-contact-meta">
                <strong>Dr. Mohini Mutha</strong>
                <span>Homeopathic Physician • MD (Homeopathy) • PGDPC</span>
                <span>Online &amp; In-Person Consultations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="section home-final-section">
        <div className="container">
          <div className="home-final-cta">
            <ParticleSphere className="home-final-sphere" />
            <h2>Your health deserves a personal approach.</h2>
            <Link href="/book-a-consultation" className="btn btn-lg home-white-btn">
              <Calendar size={18} aria-hidden="true" />
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
