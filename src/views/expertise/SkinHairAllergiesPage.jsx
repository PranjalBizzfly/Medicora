import React from 'react';
import ExpertiseTemplate from '../../components/ExpertiseTemplate';

export default function SkinHairAllergiesPage() {
  return (
    <ExpertiseTemplate
      title="Skin, Hair & Allergies"
      tagline="Personalised care for healthier skin and hair"
      badge="Expertise · Dermatology & Allergy Care"
      understandingText="Skin and hair health reflect the body's internal state. In classical homeopathy, recurrent skin eruptions—such as eczema, acne, dermatitis, and urticaria—are viewed not as isolated surface defects, but as systemic expressions of constitutional tendencies, immune overactivity, and metabolic or emotional stress. By understanding your specific presentation, temperature modalities, and triggers, treatment works internally toward long-term skin health."
      careAreas={[
        {
          title: "Skin Concerns",
          text: "Personalised support for common skin concerns affecting comfort, confidence and everyday wellbeing like acne and eczema."
        },
        {
          title: "Hair & Scalp Health",
          text: "Care for recurring hair fall, thinning, dandruff, and scalp sensitivities with attention to overall nutrition and vitality."
        },
        {
          title: "Allergic Concerns",
          text: "Support for recurring allergic sensitivities, hives, seasonal contact reactions, and hypersensitivity."
        }
      ]}
      commonSymptoms={[
        "Persistent or recurrent inflammatory facial and body acne",
        "Itching, dryness, redness, or lichenified patches associated with eczema",
        "Sudden allergic skin wheals, hives (urticaria), or itching triggered by heat or sweat",
        "Diffuse hair thinning, excessive daily hair fall, and dry, flaky scalp",
        "Skin flare-ups distinctly aggravated during stressful periods or hormonal shifts"
      ]}
      everydayImpactText="Skin and hair conditions can deeply affect self-image, social confidence, and emotional comfort. Chronic itching causes sleep disturbance and irritability, creating a cycle of stress that triggers further flare-ups."
      whenToSeekHelp={[
        "Skin or hair conditions recur repeatedly despite topical creams or washes",
        "Itching interferes with uninterrupted night sleep",
        "Flare-ups clearly coincide with stress, anxiety, or dietary changes",
        "Note: Acute severe swelling of lips, tongue, or difficulty breathing (anaphylaxis) requires immediate emergency hospital care."
      ]}
      testimonials={[
        {
          quote: "I appreciated how carefully my health history was discussed instead of just handing out another steroid cream. My skin comfort improved significantly.",
          patient: "Patient Experience",
          location: ""
        },
        {
          quote: "The consultation gave me space to explain how much my hair fall was distressing me. The approach felt genuine and supportive.",
          patient: "Patient Experience",
          location: ""
        }
      ]}
      faqs={[
        {
          q: "Why does homeopathy focus on internal remedies for external skin problems?",
          a: "The skin is an excretory organ and immune mirror. Suppressing skin symptoms with strong topical ointments often leads to recurrence once treatment stops. Homeopathic remedies work internally to reduce systemic hypersensitivity."
        },
        {
          q: "How long does it take to see changes in skin conditions?",
          a: "Skin cells renew over weeks. Depending on whether your condition is acute or long-standing, gradual improvements in itching, inflammation, and skin texture are monitored during monthly follow-ups."
        },
        {
          q: "Are the medicines safe for sensitive skin types?",
          a: "Yes. Homeopathic medicines are non-toxic, gentle, and do not cause dryness, thinning of the skin, or chemical sensitivities."
        }
      ]}
      relatedResources={[
        { label: "Women's Wellness", path: "/expertise/womens-wellness" },
        { label: "Why Homeopathy", path: "/my-approach/why-homeopathy" },
        { label: "Personalised Treatment", path: "/my-approach/personalised-treatment" },
        { label: "Book a Consultation", path: "/book-a-consultation" }
      ]}
    />
  );
}
