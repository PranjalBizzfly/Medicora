import React from 'react';
import LegalDocument from './LegalDocument';

// Source: Website Content PDF, "Page 33 - Cookie Policy" (pp.166–168).
const sections = [
  {
    id: 'what-are-cookies',
    title: 'What are cookies?',
    content: [
      'Cookies are small text files stored on your device when you visit a website. They can help websites remember preferences, understand how visitors use the site and improve your browsing experience.',
    ],
  },
  {
    id: 'why-we-use-cookies',
    title: 'Why we use cookies',
    content: [
      'Depending on the features enabled on our website, cookies may be used to:',
      {
        list: [
          'Keep the website functioning properly',
          'Remember your preferences',
          'Understand how visitors use our website',
          'Improve website performance',
          'Measure website traffic',
          'Support website security',
          'Understand the effectiveness of our marketing',
        ],
      },
    ],
  },
  {
    id: 'types-of-cookies',
    title: 'Types of cookies',
    content: [
      { sub: 'Essential cookies' },
      'These cookies may be necessary for the website to function correctly. They can support features such as navigation, security and appointment or form functionality.',
      { sub: 'Analytics cookies' },
      'These cookies help us understand how visitors interact with our website, such as which pages are visited and how the website is performing.',
      { sub: 'Preference cookies' },
      'These cookies may remember choices you make while using the website to provide a more convenient experience.',
      { sub: 'Marketing cookies' },
      'Where used, these cookies may help measure advertising activity or provide more relevant marketing. Where required, we will request your consent before placing these cookies.',
    ],
  },
  {
    id: 'third-party-cookies',
    title: 'Third-party cookies',
    content: [
      'Some services used on our website may place their own cookies or similar technologies.',
      'These may include providers used for:',
      {
        list: [
          'Website analytics',
          'Appointment booking',
          'Payments',
          'Embedded content',
          'Advertising',
          'Website security',
        ],
      },
      'Third-party providers may have their own privacy and cookie policies.',
    ],
  },
  {
    id: 'managing-cookie-preferences',
    title: 'Managing your cookie preferences',
    content: [
      'Where required, we provide options to accept, reject or manage non-essential cookies.',
      'You can also control or delete cookies through your browser settings. Disabling certain cookies may affect how some parts of the website function.',
    ],
  },
  {
    id: 'cookies-health-information',
    title: 'Do cookies collect health information?',
    content: [
      'Cookies used for website functionality or analytics are not intended to collect your medical history or health information.',
      'Please avoid entering sensitive health information into non-secure website fields unless specifically requested through an appropriate consultation or communication channel.',
    ],
  },
  {
    id: 'your-privacy',
    title: 'Your privacy',
    content: [
      'Our use of cookies is connected to our broader approach to protecting personal information.',
      'For more information about how we collect and use personal information, please read our Privacy Policy.',
    ],
  },
  {
    id: 'changes-to-this-policy',
    title: 'Changes to this policy',
    content: [
      'We may update this Cookie Policy when our website, technology, services or applicable requirements change.',
      'The updated version will be published on this page with a revised date.',
    ],
  },
  {
    id: 'cookie-contact',
    title: 'Questions about cookies?',
    content: [
      { sub: "We're here to help" },
      'If you have questions about how cookies are used on the Trivana Wellness website, please contact us.',
      { contact: { name: 'Trivana Wellness', cta: 'Contact us' } },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalDocument
      hero={{
        badge: 'Cookie Policy',
        title: 'Understanding how cookies work',
        subtitle: 'This Cookie Policy explains how Dr. Mohini Mutha Website may use cookies and similar technologies when you visit our website.',
        crumb: 'Cookie Policy',
      }}
      tocLabel="Cookie Policy contents"
      tocCta="Questions about cookies?"
      sections={sections}
    />
  );
}
