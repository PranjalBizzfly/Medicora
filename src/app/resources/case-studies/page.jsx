import CaseStudiesPage from "../../../views/resources/CaseStudiesPage";

export const metadata = {
  title: "Case Studies",
  description: "Understanding the person behind the concern. Case studies share selected patient journeys while respecting privacy and confidentiality.",
  alternates: { canonical: "/resources/case-studies" },
};

export default function Page() {
  return <CaseStudiesPage />;
}
