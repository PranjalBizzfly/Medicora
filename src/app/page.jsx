import HomePage from "../views/HomePage";

export const metadata = {
  title: { absolute: "Dr. Mohini Mutha | Homeopathy, Counselling & Mind-Body Care" },
  description: "A thoughtful approach to your health and wellbeing. Dr. Mohini Mutha, MD (Homeopathy) & PGDPC, offers personalised online anxiety care combining homeopathy, counselling, and mind-body support, with in-person consultations in Navi Mumbai.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
