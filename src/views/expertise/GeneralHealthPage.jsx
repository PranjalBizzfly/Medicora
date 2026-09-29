import React from 'react';
import ExpertiseTemplate from '../../components/ExpertiseTemplate';

export default function GeneralHealthPage() {
  return (
    <ExpertiseTemplate
      title="General Health & Wellness"
      tagline="Everyday care for your overall wellbeing"
      badge="Expertise · General Care"
      understandingText="General health is about more than the absence of diagnosed illness. It reflects your everyday vitality, immune resilience, energy balance, and how effectively your body adapts to work, seasonal changes, and life demands. In homeopathic practice, general wellness consultations evaluate your baseline constitution to identify early imbalances before they develop into chronic concerns."
      careAreas={[
        {
          title: "General Wellness",
          text: "Support for maintaining your energy, balance, and general wellbeing through personalised homeopathic care."
        },
        {
          title: "Lifestyle Concerns",
          text: "Guidance for sleep, stress, nutrition, and daily habits that may influence your overall wellbeing and recovery."
        },
        {
          title: "Common Health Concerns",
          text: "Personalised support for everyday concerns affecting your comfort, routine, and quality of life."
        }
      ]}
      commonSymptoms={[
        "Persistent fatigue and low daytime energy",
        "Recurring seasonal colds and slow post-viral recovery",
        "Mild sleep disturbances and feeling unrefreshed in the morning",
        "Everyday stress and difficulty unwinding after work",
        "Subtle digestive irregularity and metabolic sluggishness"
      ]}
      everydayImpactText="When general wellness drops, small daily tasks feel noticeably heavier. Ongoing fatigue, recurring low-grade symptoms, or sluggish routines can gradually affect focus at work, motivation for exercise, and overall enjoyment of family life."
      whenToSeekHelp={[
        "You experience unexplained persistent fatigue lasting several weeks",
        "You catch recurrent seasonal infections more frequently than usual",
        "Your sleep or digestion no longer feels restorative",
        "You want a doctor-led, holistic review of your constitution and lifestyle habits"
      ]}
      testimonials={[
        {
          quote: "I appreciated how much time was taken to understand my concerns before discussing my care. The consultation felt personal and gave me space to explain what I was experiencing.",
          patient: "Patient Experience",
          location: ""
        },
        {
          quote: "The consultation gave me a clearer understanding of my routine, energy dips, and what small adjustments could help.",
          patient: "Patient Experience",
          location: ""
        }
      ]}
      faqs={[
        {
          q: "What happens during a General Health & Wellness consultation?",
          a: "Dr. Mohini conducts a comprehensive case-taking session reviewing your medical history, current energy levels, dietary patterns, sleep quality, and environmental stressors to formulate an individualised care plan."
        },
        {
          q: "Can homeopathy be taken for preventive health?",
          a: "Yes. Homeopathy focuses on strengthening constitutional vitality and supporting the body's self-regulatory mechanisms, making it an excellent complementary modality for preventive wellness."
        },
        {
          q: "How long is a consultation?",
          a: "First consultations are typically in-depth (45 to 60 minutes) to ensure sufficient time to listen and evaluate all aspects of your health."
        },
        {
          q: "Do I need to stop my regular medications?",
          a: "No. Homeopathic remedies can safely be taken alongside conventional treatments. You should never stop or alter prescribed medications without consulting your primary medical doctor."
        }
      ]}
      relatedResources={[
        { label: "Lifestyle & Sleep Concerns", path: "/expertise/sleep-lifestyle-concerns" },
        { label: "Personalised Treatment", path: "/my-approach/personalised-treatment" },
        { label: "Frequently Asked Questions", path: "/resources/faqs" },
        { label: "Consultation Process", path: "/my-approach/consultation-process" }
      ]}
    />
  );
}
