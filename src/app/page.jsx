import HomePage from "../views/HomePage";

export const metadata = {
  title: { absolute: "Dr. Mohini Mutha | Homeopathy, Counselling & Mind-Body Care" },
  description: "Personalised care from Dr. Mohini Mutha, MD (Homeopathy) & PGDPC, combining homeopathy, psychological counselling and mind-body support. Online and in-person consultations.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
