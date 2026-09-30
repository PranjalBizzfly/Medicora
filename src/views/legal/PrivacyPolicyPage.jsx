import React from 'react';
import LegalDocument from './LegalDocument';

// Source: Website Content PDF, "Page 30 - Privacy Policy" (pp.159–162).
const sections = [
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    content: [
      'Depending on how you interact with our website, we may collect information such as:',
      {
        list: [
          'Name and contact details',
          'Email address and phone number',
          'Consultation or appointment details',
          'Information you choose to share when contacting us',
          'Website usage and technical information',
          'Information submitted through forms, booking systems or other website features',
        ],
      },
      { note: 'Please note: Avoid sharing sensitive health information through general website forms unless specifically requested through a secure consultation or communication channel.' },
    ],
  },
  {
    id: 'how-we-use-your-information',
    title: 'How we use your information',
    content: [
      'We may use information you provide to:',
      {
        list: [
          'Respond to your enquiries',
          'Arrange and manage consultations',
          'Communicate about appointments',
          'Provide requested services',
          'Improve our website and user experience',
          'Maintain website security',
          'Meet applicable legal or regulatory requirements',
        ],
      },
      'We do not use your personal information for purposes unrelated to your interaction with Trivana Wellness without an appropriate basis or permission where required.',
    ],
  },
  {
    id: 'health-information',
    title: 'Health information',
    content: [
      'Information relating to your health may be sensitive personal information.',
      'If you choose to share health or wellbeing information with us, we use it only for appropriate purposes connected with your consultation, care, communication or other service you have requested, subject to applicable laws.',
      'We encourage you to use secure channels when sharing sensitive information.',
    ],
  },
  {
    id: 'cookies-and-analytics',
    title: 'Cookies and analytics',
    content: [
      'Our website may use cookies and similar technologies to:',
      {
        list: [
          'Keep the website functioning properly',
          'Understand website usage',
          'Improve website performance',
          'Remember certain preferences',
          'Measure the effectiveness of our website',
        ],
      },
      'Where required, we will request appropriate consent before using non-essential cookies or tracking technologies.',
    ],
  },
  {
    id: 'third-party-services',
    title: 'Third-party services',
    content: [
      'We may use trusted third-party providers for services such as:',
      {
        list: [
          'Online appointment booking',
          'Website hosting',
          'Payment processing',
          'Email or communication',
          'Analytics',
          'Website security',
        ],
      },
      'These providers may process information on our behalf and are expected to handle information according to applicable privacy and security requirements.',
      'Their own privacy policies may also apply to information they process.',
    ],
  },
  {
    id: 'data-security-retention',
    title: 'How we protect your information',
    content: [
      'We take reasonable technical and organisational measures to protect personal information against unauthorised access, misuse, loss or disclosure.',
      'However, no website or online communication system can be guaranteed to be completely secure.',
      { sub: 'How long we keep information' },
      'We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to provide services, maintain appropriate records or meet legal and regulatory obligations.',
      'Retention periods may vary depending on the type and nature of the information.',
    ],
  },
  {
    id: 'your-privacy-choices',
    title: 'Your privacy choices',
    content: [
      'Depending on where you live and applicable law, you may have rights relating to your personal information, which may include requesting access, correction, deletion or information about how your data is used.',
      'You may also have the right to withdraw consent where processing is based on consent.',
      'To make a privacy-related request, please contact us using the details below.',
    ],
  },
  {
    id: 'international-visitors',
    title: 'International visitors',
    content: [
      'Trivana Wellness may receive enquiries and provide online services to people located in different countries.',
      'If you access our website or use our services from outside India, your information may be processed or stored in locations where we or our service providers operate, subject to applicable privacy requirements.',
    ],
  },
  {
    id: 'childrens-privacy',
    title: "Children's privacy",
    content: [
      'Our website is not intended for children to independently submit personal information without appropriate involvement of a parent, guardian or other authorised adult.',
      'Where consultations involve children or adolescents, information should be provided by an appropriate parent or guardian where required.',
    ],
  },
  {
    id: 'links-to-other-websites',
    title: 'Links to other websites',
    content: [
      'Our website may contain links to third-party websites or services.',
      'We are not responsible for the privacy practices, content or security of external websites. We encourage you to review their privacy policies before providing personal information.',
    ],
  },
  {
    id: 'changes-to-this-policy',
    title: 'Changes to this policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our services, website, technology or legal requirements.',
      'Any updated version will be published on this page with a revised "Last updated" date.',
    ],
  },
  {
    id: 'privacy-contact',
    title: 'Questions about your privacy?',
    content: [
      'If you have questions about this Privacy Policy or how your information is handled, please contact Trivana Wellness.',
      { contact: { name: 'Trivana Wellness', website: true, cta: 'Privacy enquiries' } },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      hero={{
        badge: 'Legal & Privacy',
        title: 'Privacy Policy',
        subtitle: 'Your privacy matters to us',
        crumb: 'Privacy Policy',
      }}
      tocLabel="Privacy Policy contents"
      tocCta="Privacy enquiries"
      intro="Dr. Mohini Mutha is committed to respecting your privacy and protecting the personal information you provide. This Privacy Policy explains what information may be collected through this website, how it may be used, and the measures taken to handle it responsibly."
      sections={sections}
    />
  );
}
