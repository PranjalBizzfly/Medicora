import CaseStudiesPage from "../../../views/resources/CaseStudiesPage";

export const metadata = {
  title: "Case Studies",
  description: "Understanding the person behind the concern, through selected patient journeys presented with privacy and care.",
  alternates: { canonical: "/resources/case-studies" },
};

export default function Page() {
  return <CaseStudiesPage />;
}
