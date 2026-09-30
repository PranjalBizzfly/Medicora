import AboutMePage from "../../views/AboutMePage";

export const metadata = {
  title: "About Me",
  description: "With 14+ years of clinical experience and 12,000+ patients consulted, Dr. Mohini Mutha combines homeopathy, counselling and a personalised understanding of every patient.",
  alternates: { canonical: "/about-me" },
};

export default function Page() {
  return <AboutMePage />;
}
