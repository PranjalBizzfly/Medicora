import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../components/CTABanner';
import BrandMark from '../components/BrandMark';
import { ArrowRight } from 'lucide-react';
import '../styles/about.css';

// Source: Website Content PDF, "Page 3 – My Journey", Sections 2–6
const chapters = [
  {
    id: 'beginning',
    eyebrow: 'The beginning',
    year: '2012',
    title: 'My clinical journey started',
    paragraphs: [
      'I began practising homeopathy in 2012 with a simple belief: good care starts with understanding the person.',
      'Over the years, treating different patients and health concerns taught me symptoms can have a very different story behind it.',
      'That lesson continues to shape my practice today.'
    ]
  },
  {
    id: 'education',
    eyebrow: 'Education',
    title: 'Every qualification added another perspective.',
    paragraphs: [
      'After completing my BHMS, I pursued an MD in Homeopathy with specialisation in Homeopathic Materia Medica.',
      'As my clinical experience grew, I became interested in the emotional side of health: anxiety, stress, sleep and concerns that people often find difficult to discuss.',
      'That led me to complete a Post Graduate Diploma in Psychological Counselling (PGDPC).',
      'It gave me another way to understand what patients were experiencing beyond their physical symptoms.'
    ],
    link: { href: '/credentials/education-qualifications', label: 'Education & Qualifications' }
  },
  {
    id: 'experience',
    eyebrow: 'Years of experience',
    title: 'Every patient has taught me something.',
    paragraphs: [
      "Over 14+ years, I have consulted more than 12,000 patients across a broad range of health concerns from respiratory and digestive health to headaches, allergies, women's wellness, sleep and emotional wellbeing.",
      'These experiences reinforced one thing:'
    ],
    emphasis: 'Healthcare should never be one-size-fits-all.'
  },
  {
    id: 'turning-point',
    eyebrow: 'What changed my perspective',
    title: 'Some health concerns are easier to hide than others.',
    paragraphs: [
      'One of the challenges I noticed throughout my practice was how often anxiety and emotional concerns remained unspoken.',
      'People may seek help for physical symptoms while quietly dealing with constant worry, poor sleep, emotional exhaustion or stress.',
      'I wanted to understand these concerns better and create more awareness around emotional health.',
      'That became an important direction in my professional journey.'
    ]
  },
  {
    id: 'ongc',
    eyebrow: 'Another chapter',
    year: '2018',
    title: 'Expanding my professional experience',
    paragraphs: [
      'In 2018, I joined ONGC as a Consultant Homoeopathic Physician.',
      'Over approximately eight years, this experience has strengthened my understanding of structured healthcare, professional responsibility and consistent patient care, while I continued my clinical practice.'
    ],
    link: { href: '/credentials/professional-experience', label: 'Professional Experience' }
  }
];

// Section 9 – What I have learned
const learnings = [
  { title: 'Listen first.', desc: "Because the most important part of a consultation isn't always what is said first." },
  { title: 'Keep learning.', desc: 'Every patient and every experience adds another perspective.' },
  { title: 'Look at the whole picture.', desc: 'Health is influenced by more than a single symptom.' },
  { title: 'Keep care personal.', desc: "Because every person's story is different." }
];

export default function MyJourneyPage() {
  return (
    <div className="my-journey-page">
      {/* Section 1 – Hero */}
      <Hero
        badge="My Journey"
        title="From studying medicine to understanding the person behind it."
        subtitle="Since 2012, my journey has been shaped by thousands of patient conversations, continuous learning and a growing understanding of the connection between physical and emotional wellbeing."
        breadcrumbs={[
          { label: "About" },
          { label: "My Journey" }
        ]}
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/book-a-consultation"
        sideCard={
          <div>
            <ul className="ab-milestones">
              <li><strong>14+</strong><span>years</span></li>
              <li><strong>12,000+</strong><span>patients</span></li>
              <li><strong>3</strong><span>countries</span></li>
            </ul>
          </div>
        }
      />

      {/* Sections 2–6 – chapters */}
      <section className="section bg-surface">
        <div className="container">
          <ol className="ab-timeline ab-chapters">
            {chapters.map((ch, idx) => (
              <li key={ch.id} className="ab-timeline-item" id={ch.id}>
                <span className="ab-timeline-dot" aria-hidden="true">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="card ab-timeline-card">
                  <div>
                    <span className="badge badge-mint">{ch.eyebrow}</span>
                    {ch.year && <span className="ab-timeline-year">{ch.year}</span>}
                  </div>
                  <div>
                    <h2 className="ab-chapter-title">{ch.title}</h2>
                    {ch.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {ch.id === 'beginning' && (
                      <figure className="ab-photo" style={{ margin: '1.25rem 0' }}>
                        <Image
                          src="/images/about/dr-mohini-portrait.webp"
                          alt="A smiling doctor in a white coat standing in a clinic"
                          width={800}
                          height={1067}
                          sizes="(max-width: 900px) 100vw, 400px"
                          style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', objectPosition: 'top', borderRadius: 'var(--radius-md)' }}
                        />
                        <figcaption>Dr. Mohini Mutha · Homeopathic Physician &amp; Consultant</figcaption>
                      </figure>
                    )}
                    {ch.id === 'education' && (
                      <figure className="ab-photo" style={{ margin: '1.25rem 0' }}>
                        <Image
                          src="/images/journey/clinical-study-materia-medica.webp"
                          alt="Leather-bound medical books beside an open study journal and a brass desk lamp"
                          width={1200}
                          height={800}
                          sizes="(max-width: 900px) 100vw, 600px"
                          style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)' }}
                        />
                        <figcaption>Dedicated study in Homeopathic Materia Medica and clinical practice</figcaption>
                      </figure>
                    )}
                    {ch.emphasis && <p className="ab-emphasis">{ch.emphasis}</p>}
                    {ch.link && (
                      <Link href={ch.link.href} className="link-arrow">
                        <span>{ch.link.label}</span>
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 7 – Beyond the clinic */}
      <section className="section photo-band" style={{ '--band-img': "url('/images/photos/dr-mohini-garden-portrait.webp')" }}>
        <div className="container">
          <div className="split-section ab-split">
            <div>
              <span className="badge ab-eyebrow">Community work</span>
              <h2 className="ab-title">Care should reach beyond the consultation room.</h2>
              <p className="ab-body">
                I have conducted and participated in free homeopathic medical camps in Navi Mumbai, with a focus on health awareness and encouraging people to recognise the importance of emotional wellbeing.
              </p>
              <p className="ab-body">
                These experiences reminded me that sometimes awareness is the first step towards seeking care.
              </p>
              <Link href="/credentials/achievements" className="link-arrow">
                <span>Achievements</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="ab-photo-grid">
              <figure className="ab-photo ab-photo-portrait">
                <Image
                  src="/images/camp/medical-camp-2.webp"
                  alt="Dr. Mohini Mutha examining a woman at the Navratri health camp"
                  width={640}
                  height={1280}
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              </figure>
              <figure className="ab-photo">
                <Image
                  src="/images/camp/medical-camp-3.webp"
                  alt="A crowd of patients waiting their turn at a community health camp"
                  width={1280}
                  height={640}
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              </figure>
              <figure className="ab-photo">
                <Image
                  src="/images/camp/medical-camp-1.webp"
                  alt="A camp worker noting patient details at a registration table"
                  width={1280}
                  height={640}
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 – Today */}
      <section className="section bg-surface">
        <div className="container-narrow ab-note">
          <div>
            <span className="badge ab-eyebrow">Where I am now</span>
          </div>
          <h2 className="ab-title">The journey continues.</h2>
          <p className="ab-body">
            Today, I bring together my experience in homeopathy, psychological counselling and patient care through Trivana Wellness.
          </p>
          <p className="ab-body">
            I have had the opportunity to consult patients from India, the UAE and the USA, making online care an important part of how I connect with people.
          </p>
          <p className="ab-body">
            My focus continues to be personalised care for anxiety, emotional wellbeing, sleep, lifestyle and a broad range of health concerns.
          </p>
        </div>
      </section>

      {/* Section 9 – What I have learned */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHeader badge="Along the way" title="What I have learned" centered={true} />

          <div className="grid-4">
            {learnings.map((item, idx) => (
              <div key={item.title} className="card ab-card">
                <span className="ab-num">0{idx + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 – A note from me */}
      <section className="section bg-surface">
        <div className="container-narrow ab-note">
          <BrandMark className="ab-note-mark" />
          <div>
            <span className="badge ab-eyebrow">A note from me</span>
          </div>
          <h2 className="ab-title">My practice continues to evolve through learning and experience.</h2>
          <p className="ab-note-lead">
            More than a decade into my practice, I don&apos;t see my journey as something that has reached an endpoint.
          </p>
          <p className="ab-note-lead">
            There is always another person to understand, another question to explore and another opportunity to become a better doctor.
          </p>
          <p className="ab-note-lead">For me, that&apos;s what makes this journey meaningful.</p>
          <p className="ab-note-sign">Dr. Mohini Mutha</p>
        </div>
      </section>

      {/* Section 11 – Final CTA */}
      <CTABanner
        badge="Trivana Wellness · Doctor-led · Personalised · Online"
        title="Your journey matters too. Start with a conversation."
        subtitle="Whether you're looking for support with anxiety, emotional wellbeing, sleep or another health concern, you can begin with a personalised online consultation."
      />
    </div>
  );
}
