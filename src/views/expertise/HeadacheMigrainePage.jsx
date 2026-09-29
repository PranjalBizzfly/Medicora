import React from 'react';
import ExpertiseTemplate from '../../components/ExpertiseTemplate';

export default function HeadacheMigrainePage() {
  return (
    <ExpertiseTemplate
      title="Headache & Migraine Care"
      tagline="Understand your headaches and find better support"
      badge="Expertise · Neurological & Tension Care"
      understandingText="Headaches and migraines are among the most debilitating recurrent conditions, yet they are frequently managed solely with temporary painkillers. In Dr. Mohini's practice, headache care focuses on uncovering specific patterns: whether pain is triggered by stress, hormonal shifts, light sensitivity, postural tension, screen fatigue, or missed meals. By mapping these modalities, homeopathic treatment aims to reduce frequency, intensity, and susceptibility."
      careAreas={[
        {
          title: "Headache Concerns",
          text: "Personalised support for tension headaches and routine discomfort that affect your daily productivity and comfort."
        },
        {
          title: "Migraine Support",
          text: "Care focused on understanding migraine patterns, sensory triggers, visual auras, and associated nausea."
        },
        {
          title: "Lifestyle Factors",
          text: "Explore how sleep irregularity, stress accumulation, hydration, and screen habits influence your head comfort."
        }
      ]}
      commonSymptoms={[
        "Throbbing, one-sided temple or forehead pain characteristic of migraines",
        "Dull, band-like tension headaches across the forehead or back of the neck",
        "Pain exacerbated by bright sunlight, loud noises, or strong scents",
        "Headaches triggered by emotional worry, work deadlines, or skipping meals",
        "Nausea, digestive queasiness, or visual fatigue accompanying headache episodes"
      ]}
      everydayImpactText="Living under the constant threat of a migraine forces people to cancel commitments, miss critical workdays, and retreat into dark rooms. Over time, recurring episodes cause anticipatory anxiety and constant worry about when the next headache will strike."
      whenToSeekHelp={[
        "Your headaches occur regularly or require frequent doses of over-the-counter painkillers",
        "Headache episodes severely impair your work, family life, and sleep",
        "You notice a recurring link between emotional stress and head pain",
        "Emergency warning: If you experience a sudden, explosive 'thunderclap' headache, fever with stiff neck, confusion, or weakness, seek immediate emergency hospital care."
      ]}
      testimonials={[
        {
          quote: "I felt heard and understood throughout my consultation, and my concerns were discussed with genuine care.",
          patient: "Patient Experience",
          location: ""
        },
        {
          quote: "The consultation gave me a clearer understanding of my recurring headaches and what I could work on.",
          patient: "Patient Experience",
          location: ""
        },
        {
          quote: "I appreciated the time taken to understand my symptoms instead of rushing through the consultation.",
          patient: "Patient Experience",
          location: ""
        }
      ]}
      faqs={[
        {
          q: "Why do you ask about stress and food habits during a headache consultation?",
          a: "Headache patterns are strongly linked to nervous system regulation, digestive rhythms, and stress hormones. Identifying these triggers is critical for choosing the right constitutional remedy."
        },
        {
          q: "How does homeopathic migraine care differ from conventional painkillers?",
          a: "Painkillers offer temporary symptom relief by blocking pain signals. Homeopathic care focuses on reducing the frequency and sensitivity to triggers over time."
        },
        {
          q: "Can I consult for chronic migraines online?",
          a: "Yes. In-depth case taking for headache patterns can be conducted thoroughly via online video consultation, allowing review of medical history and previous investigations."
        }
      ]}
      relatedResources={[
        { label: "Sleep & Lifestyle Concerns", path: "/expertise/sleep-lifestyle-concerns" },
        { label: "Mental & Emotional Wellness", path: "/expertise/mental-emotional-psychosomatic-wellness" },
        { label: "Consultation Process", path: "/my-approach/consultation-process" },
        { label: "Book a Consultation", path: "/book-a-consultation" }
      ]}
    />
  );
}
