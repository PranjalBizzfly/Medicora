import React from 'react';
import ExpertiseTemplate from '../../components/ExpertiseTemplate';

export default function DigestiveGutHealthPage() {
  return (
    <ExpertiseTemplate
      title="Digestive & Gut Health"
      tagline="Understand your digestion. Support your overall health."
      badge="Expertise · Digestive & Gut Health"
      understandingText="The digestive system is closely tied to overall vitality and emotional balance. Chronic acidity, bloating, sluggish bowel motility, heartburn, and irritable bowel tendencies often persist because treatment only masks stomach acid without addressing digestive rhythm, food tolerance, and emotional stress. Through comprehensive case taking, Dr. Mohini evaluates your gastrointestinal symptoms within the context of your lifestyle, diet, and stress patterns."
      careAreas={[
        {
          title: "Digestive Concerns",
          text: "Personalised support for common digestive concerns affecting comfort, nutrient assimilation, and daily wellbeing."
        },
        {
          title: "Gut Health Patterns",
          text: "Understand digestive rhythms, dietary sensitivities, and lifestyle factors that influence your microbiome and gut motility."
        },
        {
          title: "Recurring Discomfort",
          text: "Thoughtful constitutional care for recurring bloating, acidity, indigestion, constipation, and IBS-related discomfort."
        }
      ]}
      commonSymptoms={[
        "Persistent post-meal bloating, abdominal tightness, and flatulence",
        "Burning retrosternal acidity, sour regurgitation, and frequent heartburn",
        "Irregular bowel habits, including sluggish constipation or alternating loose stools",
        "Abdominal cramping or urgency triggered by stressful work deadlines (IBS patterns)",
        "Food intolerances, heaviness after eating, and loss of normal appetite"
      ]}
      everydayImpactText="Digestive discomfort affects every hour of the day. It dictates what you can eat, causes self-consciousness in social settings, disrupts restorative sleep, and drains daytime productivity."
      whenToSeekHelp={[
        "Digestive discomfort occurs on a daily or weekly basis despite over-the-counter antacids",
        "Stress or anxiety consistently causes stomach cramping or bowel urgency",
        "You feel chronic bloating that impairs your routine and clothing comfort",
        "Important: If you experience unexplained rapid weight loss, persistent vomiting, black stools, or severe acute abdominal pain, seek immediate emergency medical evaluation."
      ]}
      testimonials={[
        {
          quote: "The consultation gave me time to explain my concerns and helped me understand my digestive symptoms better.",
          patient: "Patient Experience",
          location: ""
        },
        {
          quote: "I appreciated the thoughtful questions and personalized approach throughout my consultation.",
          patient: "Patient Experience",
          location: ""
        },
        {
          quote: "The consultation felt comfortable and focused on understanding my concerns.",
          patient: "Patient Experience",
          location: ""
        }
      ]}
      faqs={[
        {
          q: "How does psychological counselling help with digestive issues?",
          a: "The gut and brain are in constant two-way biochemical communication via the vagus nerve. When stress is elevated, gut motility and gastric secretions become erratic. Combining counselling with homeopathic remedies helps address both emotional triggers and digestive physiology."
        },
        {
          q: "Are homeopathic remedies safe for chronic acidity?",
          a: "Yes. Homeopathic remedies do not suppress normal digestive acid production; instead, they help regulate mucosal sensitivity and digestive tone naturally."
        },
        {
          q: "Do I need to carry previous endoscopy or blood reports?",
          a: "Yes. Bringing previous diagnostic reports helps Dr. Mohini understand your complete clinical background."
        }
      ]}
      relatedResources={[
        { label: "Mental, Emotional & Psychosomatic", path: "/expertise/mental-emotional-psychosomatic-wellness" },
        { label: "Integrated Healing", path: "/my-approach/integrated-healing" },
        { label: "General Health & Wellness", path: "/expertise/general-health-wellness" },
        { label: "Book a Consultation", path: "/book-a-consultation" }
      ]}
    />
  );
}
