import SitemapPage from "../../views/legal/SitemapPage";

export const metadata = {
  title: "Site Map",
  description: "A simple guide to our website, consultations, health resources and information about Dr. Mohini Mutha.",
  alternates: { canonical: "/sitemap" },
};

export default function Page() {
  return <SitemapPage />;
}
