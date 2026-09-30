import React from 'react';
import LegalDocument from './LegalDocument';

// Source: Website Content PDF, "Page 32 - Disclaimer" (pp.164–166).
const sections = [
  {
    id: 'information-on-this-website',
    title: 'Information on this website',
    content: [
      'This website may include information about homeopathy, health, wellbeing, lifestyle, anxiety, emotional health and other areas of care.',
      'This information is intended to help you understand these topics and prepare for informed discussions with a healthcare professional. Individual health experiences vary, and information on this website should not be considered a diagnosis or a personalised treatment recommendation.',
    ],
  },
  {
    id: 'online-consultations',
    title: 'Online consultations',
    content: [
      'An online consultation allows you to discuss your health concerns with Dr. Mohini Mutha and understand the care options that may be appropriate for you.',
      'The suitability of an online consultation depends on your individual circumstances and the nature of your concern. An in-person medical evaluation or referral to another healthcare professional may be recommended when appropriate.',
    ],
  },
  {
    id: 'no-guaranteed-outcomes',
    title: 'No guaranteed outcomes',
    content: [
      'Individual responses to healthcare approaches can vary.',
      'Information on this website should not be interpreted as a guarantee of a particular result, improvement or outcome from homeopathy, counselling, lifestyle guidance, yoga, meditation or any other approach discussed by Dr. Mohini Mutha.',
    ],
  },
  {
    id: 'emergency-situations',
    title: 'Emergency situations',
    content: [
      'Dr. Mohini Mutha does not provide emergency medical services through this website.',
      'If you are experiencing a medical emergency, severe symptoms or a situation requiring immediate attention, contact your local emergency medical service or visit the nearest emergency department.',
      'For urgent mental health concerns or an immediate risk of harm, seek emergency or crisis support available in your location.',
    ],
  },
  {
    id: 'homeopathy-complementary-care',
    title: 'Homeopathy and complementary care',
    content: [
      'Homeopathy is a system of complementary medicine. Information presented on this website is not intended to suggest that homeopathy should replace medically necessary conventional care.',
      'Do not stop, change or delay prescribed medication or medical treatment based solely on information found on this website.',
      'Discuss significant changes to your healthcare with an appropriately qualified healthcare professional.',
    ],
  },
  {
    id: 'testimonials-patient-stories',
    title: 'Testimonials and patient stories',
    content: [
      'Patient testimonials and stories, where published, represent individual experiences.',
      'They should not be understood as typical results or as a promise that another person will experience the same outcome.',
    ],
  },
  {
    id: 'external-information',
    title: 'External information',
    content: [
      'This website may occasionally refer to or link to external websites, research, organisations or resources.',
      'Such references are provided for information and convenience. Dr. Mohini Mutha does not necessarily endorse or control the content, accuracy or privacy practices of external websites.',
    ],
  },
  {
    id: 'changes-to-this-disclaimer',
    title: 'Changes to this disclaimer',
    content: [
      'This Disclaimer may be updated when the website, services or applicable requirements change.',
      'The latest version will be published on this page.',
    ],
  },
  {
    id: 'disclaimer-contact',
    title: 'Questions?',
    content: [
      { sub: 'Need clarification?' },
      'If you have questions about the information on this website or about an online consultation, please contact Dr. Mohini Mutha before making a decision about your care.',
      { contact: { name: 'Dr. Mohini Mutha', cta: 'Contact Dr. Mohini Mutha' } },
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <LegalDocument
      hero={{
        badge: 'Disclaimer',
        title: 'Important information about this website',
        subtitle: 'The information provided on the Dr. Mohini Mutha website is intended for general educational and informational purposes. It is not intended to replace professional medical advice, diagnosis or emergency medical care.',
        crumb: 'Disclaimer',
      }}
      tocLabel="Disclaimer contents"
      tocCta="Need clarification?"
      sections={sections}
    />
  );
}
