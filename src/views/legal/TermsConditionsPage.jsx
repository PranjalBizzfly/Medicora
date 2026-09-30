import React from 'react';
import LegalDocument from './LegalDocument';

// Source: Website Content PDF, "Page 31 - Terms and Conditions" (pp.162–164).
const sections = [
  {
    id: 'our-services',
    title: 'Our services',
    content: [
      { term: 'Website use', text: 'Trivana Wellness provides information about Dr. Mohini Mutha, online consultations, homeopathy and related wellness services.' },
      { term: 'Consultations', text: 'Online consultations are provided based on the information shared by you during your appointment. A consultation does not guarantee a particular health outcome.' },
      { term: 'Information', text: 'Website content is provided for general educational purposes and should not be treated as a substitute for emergency medical care or an in-person medical assessment where required.' },
    ],
  },
  {
    id: 'patient-responsibilities',
    title: 'Patient responsibilities',
    content: [
      { term: 'Accurate information', text: 'You are responsible for providing complete and accurate information about your health, symptoms, medications and relevant medical history.' },
      { term: 'Appointments', text: 'Please attend your scheduled consultation at the agreed time and ensure you have a suitable private environment for the session.' },
      { term: 'Medical emergencies', text: 'Trivana Wellness is not an emergency medical service. If you experience a medical emergency or severe symptoms, seek immediate local emergency or medical assistance.' },
    ],
  },
  {
    id: 'prohibited-activities',
    title: 'Prohibited activities',
    content: [
      { term: 'Misuse', text: 'You may not use this website to submit false information, impersonate another person or interfere with the website or its services.' },
      { term: 'Unauthorised use', text: 'You may not copy, reproduce, modify or commercially use website content, images, text or other materials without appropriate permission.' },
    ],
  },
  {
    id: 'services-management',
    title: 'Services management',
    content: [
      { term: 'Appointments and payments', text: 'Consultation availability, fees, payment arrangements and appointment policies may be updated from time to time.' },
      { term: 'Cancellation or rescheduling', text: 'If you need to change your appointment, please contact Trivana Wellness as early as possible. Any applicable cancellation or refund terms will depend on the booking arrangement.' },
      { term: 'Changes to these terms', text: 'Trivana Wellness may update these Terms and Conditions when necessary. The latest version published on this website will apply to continued use of the website and services.' },
    ],
  },
  {
    id: 'contact-information',
    title: 'Contact information',
    content: [
      'If you have questions about these Terms and Conditions, please contact Trivana Wellness before using our services.',
      { contact: { name: 'Trivana Wellness' } },
      'By using this website or booking a consultation, you acknowledge that you have read and understood these Terms and Conditions.',
    ],
  },
];

const footnotes = [
  { note: 'Important: These Terms and Conditions should be read together with the Trivana Wellness Privacy Policy and any applicable consultation, payment or cancellation policy.' },
];

export default function TermsConditionsPage() {
  return (
    <LegalDocument
      hero={{
        badge: 'Terms & Conditions',
        title: 'Our terms and conditions',
        subtitle: 'These terms explain the use of the Trivana Wellness website, online consultations and related services.',
        crumb: 'Terms & Conditions',
      }}
      tocLabel="Terms & Conditions contents"
      tocCta="Questions about these terms?"
      sections={sections}
      footnotes={footnotes}
    />
  );
}
