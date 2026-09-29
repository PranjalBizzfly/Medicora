import React from 'react';
import { CalendarDays, Mail, Phone, Cookie } from 'lucide-react';
import Hero from '../../components/Hero';
import { siteConfig } from '../../data/websiteContent';
import '../../styles/legal.css';

const sections = [
  {
    id: 'how-cookies-work',
    title: 'Understanding How Cookies Work',
    body: (
      <p>
        This Cookie Policy explains how Dr. Mohini Mutha's website may use cookies and similar technologies when you visit our website.
      </p>
    )
  },
  {
    id: 'what-are-cookies',
    title: 'What Are Cookies?',
    body: (
      <p>
        Cookies are small text files stored on your computer, tablet, or smartphone when you visit a website. They help websites remember preferences, understand how visitors interact with the site, and ensure smooth and secure navigation.
      </p>
    )
  },
  {
    id: 'why-we-use-cookies',
    title: 'Why We Use Cookies',
    body: (
      <>
        <p>Depending on the features enabled on our website, cookies may be used to:</p>
        <ul className="lg-list">
          <li>Keep the website functioning properly and securely</li>
          <li>Remember your site preferences and display settings</li>
          <li>Understand how visitors navigate between health pages</li>
          <li>Improve page loading performance and interface stability</li>
          <li>Measure website traffic anonymously without identifying you individually</li>
        </ul>
      </>
    )
  },
  {
    id: 'types-of-cookies',
    title: 'Types of Cookies We Use',
    body: (
      <>
        <p>
          <strong>Essential Cookies:</strong> These cookies are necessary for the website to function correctly. They support core features such as navigation, form submissions, and appointment scheduling.
        </p>
        <p>
          <strong>Analytics Cookies:</strong> These help us understand visitor counts and popular health topics, allowing us to improve content readability.
        </p>
        <p>
          <strong>Preference Cookies:</strong> These remember choices you make while browsing to provide a more convenient experience upon return.
        </p>
      </>
    )
  },
  {
    id: 'sensitive-health-information',
    title: 'Do Cookies Collect Sensitive Health Information?',
    body: (
      <p>
        <strong>No.</strong> Cookies used for website functionality and analytics are strictly technical and are not designed or used to collect your confidential medical history or sensitive health symptoms.
      </p>
    )
  },
  {
    id: 'managing-cookie-preferences',
    title: 'Managing Your Cookie Preferences',
    body: (
      <p>
        You can control or delete cookies through your web browser settings at any time. Disabling certain essential cookies may affect how some interactive parts of the website (such as scheduling forms) function.
      </p>
    )
  },
  {
    id: 'cookie-contact',
    title: 'Contact Us',
    body: (
      <>
        <p>
          If you have questions about how cookies are used on this website, please contact:
        </p>
        <div className="lg-contact">
          <span className="lg-contact-icon"><Cookie size={22} /></span>
          <div className="lg-contact-body">
            <p className="lg-contact-name">Dr. Mohini Mutha · Trivana Wellness</p>
            <ul className="lg-contact-list">
              <li><Mail size={15} /><span>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></span></li>
              <li><Phone size={15} /><span>Phone: <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a></span></li>
            </ul>
          </div>
        </div>
      </>
    )
  }
];

export default function CookiePolicyPage() {
  return (
    <div className="cookie-policy-page">
      <Hero
        badge="Legal & Privacy"
        title="Cookie Policy"
        subtitle="Understanding how cookies and similar web technologies are used on Dr. Mohini Mutha's website to enhance your browsing experience."
        breadcrumbs={[
          { label: "Legal", path: "/cookie-policy" },
          { label: "Cookie Policy" }
        ]}
        primaryCtaText={null}
        secondaryCtaText="Privacy Policy"
        secondaryCtaLink="/privacy-policy"
      />

      <section className="section lg-section">
        <div className="container">
          <div className="lg-layout">
            <aside className="lg-toc" aria-label="Cookie Policy contents">
              <p className="lg-toc-title">On this page</p>
              <ol className="lg-toc-list">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a className="lg-toc-link" href={`#${s.id}`}>
                      <span className="lg-toc-num">{i + 1}.</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="lg-toc-cta">
                Questions about cookies?
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </aside>

            <article className="lg-doc">
              <div className="lg-doc-meta">
                <CalendarDays size={16} />
                <span>Last updated: September 2026</span>
              </div>
              <div className="lg-prose">
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} className="lg-doc-section">
                    <h2 className="lg-doc-heading">
                      <span className="lg-doc-num">{i + 1}</span>
                      <span>{s.title}</span>
                    </h2>
                    {s.body}
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
