import React from 'react';
import ExpertiseTemplate from '../../components/ExpertiseTemplate';

export default function WomensWellnessPage() {
  return (
    <ExpertiseTemplate
      title="Women's Wellness"
      tagline="Personalised care for women at every stage"
      badge="Expertise · Women's Health & Hormones"
      understandingText="Every woman's health journey is unique and constantly evolving through different phases of life—from adolescence, reproductive years, pregnancy transitions, to perimenopause. Hormonal imbalances like PCOS, irregular or painful periods, premenstrual mood sensitivity, and fatigue are best supported when the patient is treated with patience, empathy, and holistic understanding. Dr. Mohini provides a confidential, supportive consultation environment tailored to women's physical and emotional needs."
      careAreas={[
        {
          title: "Women's Health",
          text: "Thoughtful support for common concerns affecting women's health, menstrual comfort, pelvic wellbeing, and everyday vitality."
        },
        {
          title: "Hormonal Wellbeing",
          text: "Care that considers hormonal fluctuations, PCOS/PCOD, cycle irregularity, and metabolic factors influencing wellbeing."
        },
        {
          title: "Emotional Wellbeing",
          text: "Personalised support when stress, mood shifts, post-partum adjustments, or perimenopausal changes begin affecting your quality of life."
        }
      ]}
      commonSymptoms={[
        "Irregular, delayed, or excessively painful menstrual cycles",
        "PCOS/PCOD symptoms including stubborn weight changes, cystic acne, and facial hair",
        "Severe premenstrual syndrome (PMS) involving mood swings, irritability, and water retention",
        "Perimenopausal hot flushes, sleep disruption, and emotional vulnerability",
        "Chronic pelvic discomfort, fatigue, and low daytime stamina"
      ]}
      everydayImpactText="Hormonal shifts often affect much more than the calendar cycle—they influence emotional equilibrium, sleep quality, skin clarity, and relationship harmony. Many women carry these burdens quietly while juggling high-stress careers and family responsibilities."
      whenToSeekHelp={[
        "Your menstrual cycles are persistently irregular, absent, or debilitatingly painful",
        "You have been diagnosed with PCOS/PCOD and want holistic constitutional support",
        "Premenstrual emotional shifts disrupt your relationships or work routines",
        "Note: Sudden severe pelvic pain, abnormal heavy bleeding, or suspicion of ectopic pregnancy requires urgent conventional gynecological care."
      ]}
      testimonials={[
        {
          quote: "I appreciated having a doctor who genuinely listened to what I was going through. The consultation gave me time to explain my hormonal and emotional concerns together.",
          patient: "Patient Experience",
          location: ""
        },
        {
          quote: "The combination of homeopathic remedies and empathetic counselling made a noticeable difference in my cycle comfort and stress levels.",
          patient: "Patient Experience",
          location: "Online Consultation (UAE)"
        }
      ]}
      faqs={[
        {
          q: "How does homeopathy support PCOS/PCOD?",
          a: "In homeopathy, PCOS is viewed as a systemic hormonal and metabolic pattern. Treatment is aimed at restoring natural ovarian function, regularising cycles, and balancing metabolic vitality based on your specific constitutional traits."
        },
        {
          q: "Can I take homeopathic medicines while planning a pregnancy?",
          a: "Yes. Homeopathic remedies are non-hormonal, non-toxic, and gentle. Many women use homeopathy to support cycle regularity and preconception health."
        },
        {
          q: "Is psychological counselling helpful for hormonal mood changes?",
          a: "Yes. Hormonal shifts are intimately tied to neurochemistry. Having professional counselling guidance alongside constitutional remedies provides emotional grounding."
        }
      ]}
      relatedResources={[
        { label: "Mental, Emotional & Psychosomatic", path: "/expertise/mental-emotional-psychosomatic-wellness" },
        { label: "Personalised Treatment", path: "/my-approach/personalised-treatment" },
        { label: "Health Insights & Blogs", path: "/resources/blogs" },
        { label: "Book a Consultation", path: "/book-a-consultation" }
      ]}
    />
  );
}
