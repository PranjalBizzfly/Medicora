import React from 'react';
import ExpertiseTemplate from '../../components/ExpertiseTemplate';

export default function ChildAdolescentPage() {
  return (
    <ExpertiseTemplate
      title="Child & Adolescent Wellness"
      tagline="Thoughtful care for growing minds and bodies"
      badge="Expertise · Pediatric & Adolescent Care"
      understandingText="Children and adolescents experience rapid physical growth and emotional transitions. From recurrent coughs, tonsillitis, and digestive upsets in younger years to exam stress, behavioral anxiety, and adolescent acne, young people need care that is gentle, effective, and non-traumatic. Homeopathic sweet-pill medicine is naturally well-liked by children and avoids harsh side effects. Dr. Mohini consults closely with parents to understand the child's developmental story, emotional temperament, and physical health."
      careAreas={[
        {
          title: "Childhood Wellbeing",
          text: "Personalised support for common health, immunity, seasonal colds, and recurring physical complaints during childhood."
        },
        {
          title: "Growing Years",
          text: "Care that considers changing nutritional needs, growth routines, school demands, and developmental comfort."
        },
        {
          title: "Adolescent Emotional Wellbeing",
          text: "Support for teenagers navigating academic pressure, emotional sensitivities, behavioral stress, and puberty-related changes."
        }
      ]}
      commonSymptoms={[
        "Recurrent tonsillitis, ear discomfort, or seasonal throat infections",
        "Childhood allergies, eczema, and respiratory wheezing triggered by dust or changes in weather",
        "Picky eating, sluggish digestion, colic, and recurrent tummy aches",
        "Sleep restlessness, bedwetting tendencies, or nighttime fears",
        "Adolescent exam anxiety, withdrawal, moodiness, and difficulty focusing"
      ]}
      everydayImpactText="Frequent sick days disrupt school routines, sports, and social development, creating stress for both child and parents. Repeated courses of strong antibiotics can also weaken developing gut health."
      whenToSeekHelp={[
        "Your child experiences frequent recurring respiratory or ear infections",
        "Your adolescent is struggling with intense stress, sleep issues, or emotional changes",
        "You seek a safe, gentle, non-sedating modality for your child's constitution",
        "Note: High spiking fever, severe dehydration, respiratory distress, or acute pediatric emergencies require immediate emergency hospital care."
      ]}
      testimonials={[
        {
          quote: "My daughter looked forward to taking her sweet homeopathic pills, and her recurring throat infections reduced steadily over the school term.",
          patient: "Parent Experience",
          location: ""
        },
        {
          quote: "Dr. Mohini took the time to speak gently with my teenage son about his exam stress. The combination of remedies and counselling really helped him feel calmer.",
          patient: "Parent Experience",
          location: ""
        }
      ]}
      faqs={[
        {
          q: "Are homeopathic medicines safe for babies and toddlers?",
          a: "Yes. Homeopathic medicines are prepared through micro-dilutions, making them exceptionally safe, non-toxic, and free from harmful side effects when prescribed by a qualified physician."
        },
        {
          q: "How are the medicines administered to children?",
          a: "They are given as small, sweet lactose globule pills that dissolve easily on the tongue, completely eliminating the struggle associated with bitter syrups or injections."
        },
        {
          q: "Can you help teenagers with anxiety and focus issues?",
          a: "Yes. Dr. Mohini's postgraduate training in psychological counselling allows her to engage teenagers in a comfortable, empathetic manner to help them navigate academic and emotional pressures."
        }
      ]}
      relatedResources={[
        { label: "General Health & Wellness", path: "/expertise/general-health-wellness" },
        { label: "Respiratory Health", path: "/expertise/respiratory-health" },
        { label: "Consultation Process", path: "/my-approach/consultation-process" },
        { label: "Book a Consultation", path: "/book-a-consultation" }
      ]}
    />
  );
}
