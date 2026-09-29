import React from 'react';
import ExpertiseTemplate from '../../components/ExpertiseTemplate';

export default function JointMusclePainPage() {
  return (
    <ExpertiseTemplate
      title="Joint, Muscle & Pain Management"
      tagline="Support for easier movement and everyday comfort"
      badge="Expertise · Musculoskeletal & Pain Care"
      understandingText="Joint stiffness, recurring lower back aches, shoulder tension, and muscular fatigue can restrict your physical independence and drain vitality. While conventional pain management often relies on NSAIDs that can irritate the stomach with prolonged use, homeopathy offers a complementary approach tailored to how pain responds to motion, rest, weather changes, and emotional stress. Dr. Mohini helps patients regain easier movement and comfort."
      careAreas={[
        {
          title: "Joint Concerns",
          text: "Personalised support for joint stiffness, knee discomfort, and arthritis-related soreness that limit mobility."
        },
        {
          title: "Muscle Discomfort",
          text: "Thoughtful care for recurring muscle aches, stiff neck, back pain, fibromyalgia-like tenderness, and postural strain."
        },
        {
          title: "Ongoing Pain Management",
          text: "Support for persistent pain with attention to your physical triggers, ergonomic routine, sleep, and overall vitality."
        }
      ]}
      commonSymptoms={[
        "Morning joint stiffness that takes thirty minutes or more to loosen up",
        "Persistent lower back pain exacerbated by prolonged desk sitting or standing",
        "Neck and upper back muscle knots associated with computer work and stress",
        "Joint pain aggravated by damp weather, rain, or sudden cold air exposure",
        "Generalized body aches and feeling stiff after minimal physical exertion"
      ]}
      everydayImpactText="Chronic joint and muscle discomfort makes climbing stairs, walking, bending, or playing with children exhausting. Over time, living with constant pain leads to irritability, sedentary habits, and sleep disruption."
      whenToSeekHelp={[
        "Pain and stiffness occur frequently enough to alter your daily physical routine",
        "Over-the-counter pain medications cause stomach irritation or diminishing relief",
        "You want a safe, long-term complementary approach alongside physiotherapy",
        "Emergency warning: If joint pain is accompanied by high fever, hot redness, sudden inability to bear weight, or trauma/fracture, seek urgent emergency hospital care."
      ]}
      testimonials={[
        {
          quote: "I appreciated how carefully my joint stiffness and damp weather sensitivity were evaluated. Walking has become much more comfortable.",
          patient: "Patient Experience",
          location: "Pune Clinic"
        },
        {
          quote: "The consultation gave me practical advice on posture along with remedies that gently eased my morning back stiffness.",
          patient: "Patient Experience",
          location: ""
        }
      ]}
      faqs={[
        {
          q: "How does homeopathy help with arthritis and joint pain?",
          a: "Homeopathy uses individualized remedies chosen according to modalities—such as whether the pain is worse in cold weather, improved by slow movement, or relieved by warmth. This helps reduce chronic inflammation and joint sensitivity."
        },
        {
          q: "Can I continue physiotherapy while taking homeopathic remedies?",
          a: "Absolutely. Homeopathic care works in harmony with physical therapy, gentle yoga, and ergonomic adjustments."
        },
        {
          q: "Do homeopathic pain remedies damage the stomach or kidneys?",
          a: "No. Unlike conventional NSAIDs, homeopathic remedies are non-steroidal, non-ulcerogenic, and gentle on the gastrointestinal tract and kidneys."
        }
      ]}
      relatedResources={[
        { label: "Sleep & Lifestyle Concerns", path: "/expertise/sleep-lifestyle-concerns" },
        { label: "Integrated Healing", path: "/my-approach/integrated-healing" },
        { label: "Personalised Treatment", path: "/my-approach/personalised-treatment" },
        { label: "Book a Consultation", path: "/book-a-consultation" }
      ]}
    />
  );
}
