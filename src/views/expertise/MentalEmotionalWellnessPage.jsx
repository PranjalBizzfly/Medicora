import React from 'react';
import ExpertiseTemplate from '../../components/ExpertiseTemplate';

export default function MentalEmotionalWellnessPage() {
  return (
    <ExpertiseTemplate
      title="Mental, Emotional & Psychosomatic Wellness"
      tagline="Support for emotional concerns that may affect how you feel and function"
      badge="Key Clinical Differentiator"
      understandingText="Mental and emotional wellbeing are deeply interwoven with physical health. Chronic anxiety, persistent worry, emotional exhaustion, and burnout rarely exist solely 'in the mind'—they register directly in the body as digestive spasms, chest heaviness, heart palpitations, chronic muscle tension, and disrupted sleep. With her unique background combining an MD in Homeopathy and a Post Graduate Diploma in Psychological Counselling (PGDPC), Dr. Mohini bridges clinical medicine and psychological understanding, creating a safe, empathetic space to understand and address both sides of your experience."
      careAreas={[
        {
          title: "Emotional Wellbeing",
          text: "Personalised support when chronic worry, low mood, grief, emotional fatigue, or major life changes begin affecting your everyday life."
        },
        {
          title: "Stress & Anxiety Care",
          text: "Thoughtful care for persistent tension, nervous agitation, panic sensations, social hesitation, and feelings of emotional overwhelm."
        },
        {
          title: "Mind-Body & Psychosomatic Concerns",
          text: "Care that considers how emotional experiences and physical symptoms interact—such as stress-induced stomach cramps, headaches, or palpitations."
        }
      ]}
      commonSymptoms={[
        "Persistent feelings of nervousness, internal restlessness, or impending dread",
        "Physical panic sensations: sudden rapid heartbeat, shallow breathing, or trembling",
        "Psychosomatic symptoms: nervous diarrhea, stomach knots, tension headaches, or throat tightness",
        "Constant mental overactivity and worry that makes quiet relaxation impossible",
        "Emotional exhaustion, irritability, and feeling overwhelmed by routine daily expectations"
      ]}
      everydayImpactText="Anxiety and psychosomatic distress can be exhausting because so much energy is spent trying to hide symptoms and appear normal to family, colleagues, and friends. Over time, living in constant fight-or-flight depletes physical vitality, strains relationships, and impairs professional clarity."
      whenToSeekHelp={[
        "Feelings of anxiety, worry, or physical stress interfere with your work or personal relationships",
        "Physical symptoms (such as digestive upset, palpitations, or headaches) have been medically checked but remain unexplained",
        "You want an integrated, doctor-led approach combining counselling dialogue with individualised homeopathic care",
        "Critical Medical Disclaimer: This practice does not provide emergency psychiatric crisis care. If you are experiencing suicidal thoughts, self-harm impulses, severe psychotic symptoms, or an immediate mental health crisis, please contact your local emergency mental health helpline or hospital emergency room immediately."
      ]}
      testimonials={[
        {
          quote: "I honestly don't know how to put my gratitude into words. When I was going through those difficult moments of panic and anxiety, there were times when I felt helpless and frightened. Your medicines helped me, but more than that, your patience, understanding and reassuring words gave me the courage to face those moments.",
          patient: "Patient experience",
          location: ""
        },
        {
          quote: "I appreciated having space to discuss both my physical and emotional concerns.",
          patient: "Patient experience",
          location: ""
        }
      ]}
      faqs={[
        {
          q: "How does Dr. Mohini combine Homeopathy with Psychological Counselling?",
          a: "Dr. Mohini's dual qualifications allow her to conduct consultations that address both psychological patterns (through empathetic listening, cognitive restructuring, and stress identification) and physiological imbalances (through individualized classical homeopathic constitutional remedies and Bach flower remedies)."
        },
        {
          q: "Should I stop my current medication if I start homeopathic care?",
          a: "No. Please do not stop, change or delay any prescribed medication without speaking to the doctor who prescribed it. Homeopathy and counselling are offered as complementary care, and Dr. Mohini will discuss how they may fit alongside your existing treatment."
        },
        {
          q: "Can I consult for anxiety online from outside India?",
          a: "Yes. Many of Dr. Mohini's anxiety and psychosomatic consultations are conducted online for patients across India, the UAE, and the USA via secure video sessions."
        },
        {
          q: "What is the role of Bach Flower Remedies in emotional care?",
          a: "Bach flower remedies are gentle herbal essences specifically utilized to address acute emotional states—such as anticipatory fear, panic sensations, despondency, and persistent worry—working in synergy with constitutional homeopathy."
        }
      ]}
      relatedResources={[
        { label: "Integrated Healing", path: "/my-approach/integrated-healing" },
        { label: "Sleep & Lifestyle Concerns", path: "/expertise/sleep-lifestyle-concerns" },
        { label: "Consultation Process", path: "/my-approach/consultation-process" },
        { label: "Book an Anxiety Consultation", path: "/book-a-consultation" }
      ]}
    />
  );
}
