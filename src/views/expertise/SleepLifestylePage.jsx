import React from 'react';
import ExpertiseTemplate from '../../components/ExpertiseTemplate';

export default function SleepLifestylePage() {
  return (
    <ExpertiseTemplate
      title="Sleep & Lifestyle Concerns"
      tagline="Better sleep starts with understanding your routine"
      badge="Expertise · Rest & Lifestyle Care"
      understandingText="Sleep is the master regulator of physical restoration, emotional resilience, and cellular repair. Yet modern schedules, continuous screen exposure, demanding professional responsibilities, and nighttime anxiety have made sleep disturbances widespread. Rather than prescribing habit-forming sedatives, Dr. Mohini explores the root causes—such as racing thoughts at night, restless physical sensations, or irregular daily cycles—to help restore natural, restful sleep patterns."
      careAreas={[
        {
          title: "Sleep Difficulties",
          text: "Personalised support for difficulty falling asleep, frequent nocturnal awakenings, early waking, and unrefreshing rest."
        },
        {
          title: "Stress & Daily Life",
          text: "Understand how work-life pressures, chronic worry, evening blue light, and daily caffeine habits impair sleep architecture."
        },
        {
          title: "Healthy Routines",
          text: "Practical guidance around sleep hygiene, breath relaxation routines, and sustainable lifestyle practices that support lasting calm."
        }
      ]}
      commonSymptoms={[
        "Taking an hour or longer to fall asleep due to racing thoughts and mental hyperactivity",
        "Waking up repeatedly at 2:00 AM or 3:00 AM unable to fall back asleep",
        "Waking up feeling tired, sluggish, and unrefreshed despite hours in bed",
        "Restless legs, physical tossing and turning, or muscle tension at night",
        "Daytime brain fog, caffeine dependency, and late-afternoon energy crashes"
      ]}
      everydayImpactText="Chronic sleep deprivation impairs cognitive focus, emotional patience, immune function, and metabolic health. It amplifies anxiety and diminishes productivity, leaving you feeling running on empty."
      whenToSeekHelp={[
        "Sleep difficulties persist for more than 3 to 4 weeks and affect your daytime energy",
        "You rely on sleeping pills or alcohol to wind down at night",
        "Bedtime has become a source of anxiety and frustration rather than rest",
        "Note: Severe loud snoring with pauses in breathing (possible obstructive sleep apnea) warrants medical sleep study evaluation."
      ]}
      testimonials={[
        {
          quote: "The consultation helped me unpack how my evening work habits were keeping my mind overstimulated. The remedies and routine changes gave me back restful nights.",
          patient: "Patient Experience",
          location: "Online Consultation (USA)"
        },
        {
          quote: "I appreciated having a natural, non-sedating approach that didn't leave me feeling groggy the next morning.",
          patient: "Patient Experience",
          location: ""
        }
      ]}
      faqs={[
        {
          q: "Are homeopathic sleep remedies addictive?",
          a: "No. Unlike conventional sleeping pills or sedatives, homeopathic remedies are completely non-addictive and do not cause morning lethargy, physical dependence, or withdrawal symptoms."
        },
        {
          q: "How does counselling help with insomnia?",
          a: "Counselling addresses the bedtime rumination and stress cycle that keeps the sympathetic nervous system switched on. Learning relaxation strategies alongside constitutional remedies creates sustainable calm."
        },
        {
          q: "Can I take these remedies while working shifts?",
          a: "Yes. Homeopathy helps support the body's natural circadian adaptation and vitality without forcing unnatural sedation."
        }
      ]}
      relatedResources={[
        { label: "Mental, Emotional & Psychosomatic", path: "/expertise/mental-emotional-psychosomatic-wellness" },
        { label: "Clinical Philosophy", path: "/clinical-philosophy" },
        { label: "Integrated Healing", path: "/my-approach/integrated-healing" },
        { label: "Book a Consultation", path: "/book-a-consultation" }
      ]}
    />
  );
}
