import React from 'react';
import {
  HeartPulse,
  Wind,
  Brain,
  Utensils,
  Sparkles,
  UserCheck,
  Smile,
  Activity,
  Moon,
  HeartHandshake,
  Stethoscope,
} from 'lucide-react';

// Maps icon names stored in websiteContent.js to lucide components.
const icons = {
  HeartPulse,
  Wind,
  Brain,
  Utensils,
  Sparkles,
  UserCheck,
  Smile,
  Activity,
  Moon,
  // Mental & emotional wellness reads better as care than as a warning sign.
  ShieldAlert: HeartHandshake,
};

export default function ExpertiseIcon({ name, size = 24 }) {
  const Icon = icons[name] || Stethoscope;
  return <Icon size={size} />;
}
