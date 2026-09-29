import React from 'react';
import ExpertiseTemplate from '../../components/ExpertiseTemplate';

export default function RespiratoryHealthPage() {
  return (
    <ExpertiseTemplate
      title="Respiratory Health"
      tagline="Support for healthier breathing and wellbeing"
      badge="Expertise · Respiratory Care"
      understandingText="Respiratory comfort is fundamental to quality of life. Recurrent sinus congestion, chronic bronchial sensitivity, seasonal allergic rhinitis, and persistent post-nasal drip can drain energy and disrupt sleep. Homeopathic care approaches respiratory health by understanding your environmental triggers, thermal sensitivities, seasonal patterns, and individual mucosal reactivity."
      careAreas={[
        {
          title: "Breathing Concerns",
          text: "Personalised care for common respiratory concerns that may affect your comfort, breathing ease, and daily life."
        },
        {
          title: "Recurrent Symptoms",
          text: "Support for recurring cough, chronic congestion, sinus pressure, and other breathing-related discomfort."
        },
        {
          title: "Long-term Wellbeing",
          text: "Thoughtful constitutional care that considers respiratory health, air quality, lifestyle, and your overall immune wellbeing."
        }
      ]}
      commonSymptoms={[
        "Recurrent seasonal sneezing, nasal blockage, and watery eyes",
        "Sinus heaviness, frontal head pressure, and post-nasal drip",
        "Dry or productive lingering cough following weather transitions",
        "Chest tightness associated with dust, cold air, or emotional tension",
        "Breathing discomfort aggravated in early mornings or night"
      ]}
      everydayImpactText="Persistent breathing difficulties and clogged sinuses directly impair sleep quality, causing brain fog, morning fatigue, and irritability during work. For many, constant reliance on temporary decongestants leads to frustration."
      whenToSeekHelp={[
        "Your respiratory symptoms recur every season or persist for months",
        "Sinus congestion interferes with restful sleep and daytime concentration",
        "You notice breathing discomfort linked to stress or environmental shifts",
        "Note: In cases of severe shortness of breath, acute asthma attacks, or cyanosis, seek immediate emergency medical care"
      ]}
      testimonials={[
        {
          quote: "The consultation felt personal and gave me space to explain what I was experiencing with my recurring sinus issues.",
          patient: "Patient Experience",
          location: ""
        },
        {
          quote: "I appreciated how carefully my health history and seasonal triggers were discussed instead of just giving a quick nasal spray.",
          patient: "Patient Experience",
          location: ""
        }
      ]}
      faqs={[
        {
          q: "How does homeopathy address recurring sinus issues?",
          a: "Homeopathy looks at the character of the discharge, thermal modalities, aggravating factors (like cold draft or humidity), and overall constitutional vitality to help reduce recurring inflammation."
        },
        {
          q: "Can children take homeopathic respiratory remedies?",
          a: "Yes. Homeopathic remedies are gentle, pleasant to take, and safe for children and adolescents dealing with seasonal allergies and recurrent colds."
        },
        {
          q: "Can I use inhalers alongside homeopathic treatment?",
          a: "Yes. Homeopathy works safely as complementary care. Always continue prescribed inhalers or essential asthma medications as directed by your pulmonologist."
        }
      ]}
      relatedResources={[
        { label: "Skin, Hair & Allergies", path: "/expertise/skin-hair-allergies" },
        { label: "Child & Adolescent Wellness", path: "/expertise/child-adolescent-wellness" },
        { label: "Why Homeopathy", path: "/my-approach/why-homeopathy" },
        { label: "Book a Consultation", path: "/book-a-consultation" }
      ]}
    />
  );
}
