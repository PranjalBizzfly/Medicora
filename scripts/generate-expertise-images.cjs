/**
 * generate-expertise-images.cjs
 * Automated pipeline for generating & optimizing the 8 remaining Expertise condition hero images.
 * Designed to be executed once the gemini-3.1-flash-image quota resets (~17:40 local time).
 */

const _fs = require('fs');
const _path = require('path');
const _sharp = require('sharp');

const EXPERTISE_TASKS = [
  {
    id: 'digestive-gut-health',
    fileName: 'digestive-gut-health.webp',
    prompt: 'Clean modern kitchen counter with ceramic cup of warm herbal digestive infusion, sliced fresh ginger root, whole chamomile botanicals on light travertine stone, soft morning sunlight, warm, wholesome, clinical medical photography, Trivana Wellness aesthetic.',
    alt: 'Balanced digestive wellbeing, gut health and wholesome nutrition',
    aspectRatio: '4:3',
    width: 900,
    height: 600,
  },
  {
    id: 'respiratory-health',
    fileName: 'respiratory-health.webp',
    prompt: 'Airy minimalist bright room with young South Asian person sitting by an open window taking a deep calm breath of fresh morning air, lush indoor plants, soft natural daylight, calm pulmonary wellness photography.',
    alt: 'Clear respiratory function, easy breathing and allergy defense',
    aspectRatio: '4:3',
    width: 900,
    height: 600,
  },
  {
    id: 'skin-hair-allergies',
    fileName: 'skin-hair-allergies.webp',
    prompt: 'Minimalist clinical still-life: amber dropper bottle with soothing calendula botanical oil, fresh cut aloe vera leaf, delicate chamomile flowers on clean travertine stone surface, bright soft studio light, dermatological wellness aesthetic.',
    alt: 'Natural skin vitality, hair health and allergy soothing',
    aspectRatio: '4:3',
    width: 900,
    height: 600,
  },
  {
    id: 'womens-wellness',
    fileName: 'womens-wellness.webp',
    prompt: 'Compassionate holistic healthcare atmosphere: warm ceramic mug, gentle pink botanicals, wellness planner journal on natural linen cloth with warm golden window light, calm endocrine and maternal wellness aesthetic.',
    alt: 'Comprehensive hormonal balance and women’s holistic health',
    aspectRatio: '4:3',
    width: 900,
    height: 600,
  },
  {
    id: 'child-adolescent-wellness',
    fileName: 'child-adolescent-wellness.webp',
    prompt: 'Warm, reassuring pediatric homeopathic consultation corner: clean wooden developmental toys, colorful soft cushions, sunlit welcoming clinic room, gentle child-friendly healthcare environment.',
    alt: 'Gentle, attentive pediatric wellness and developmental support',
    aspectRatio: '4:3',
    width: 900,
    height: 600,
  },
  {
    id: 'joint-muscle-pain-management',
    fileName: 'joint-muscle-pain-management.webp',
    prompt: 'Active joint recovery and mobility: natural cork yoga mat rolled on light oak floor, bamboo mobility block, herbal arnica compress cloth in sunlit physical therapy clinic studio.',
    alt: 'Joint mobility, muscular comfort and physical vitality',
    aspectRatio: '4:3',
    width: 900,
    height: 600,
  },
  {
    id: 'headache-migraine-care',
    fileName: 'headache-migraine-care.webp',
    prompt: 'Peaceful low-lit tranquil room for migraine relief: silk cooling eye compress, lavender sprigs, glass carafe of pure water with mint on a dark walnut nightstand, serene calming atmosphere.',
    alt: 'Calm migraine relief and holistic tension management',
    aspectRatio: '4:3',
    width: 900,
    height: 600,
  },
  {
    id: 'general-health-wellness',
    fileName: 'general-health-wellness.webp',
    prompt: 'Modern clinical preventive medicine: stainless steel stethoscope neatly arranged next to a glass of fresh citrus water and daily health journal on a warm sunlit consultation desk, Trivana aesthetic.',
    alt: 'Preventive healthcare, vitality and whole-person wellness',
    aspectRatio: '4:3',
    width: 900,
    height: 600,
  },
];

console.log('Registered', EXPERTISE_TASKS.length, 'expertise image specifications.');

module.exports = { EXPERTISE_TASKS };
