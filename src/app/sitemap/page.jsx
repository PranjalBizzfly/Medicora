import SitemapPage from "../../views/legal/SitemapPage";

export const metadata = {
  title: "Sitemap",
  description: "A simple guide to every page on Dr. Mohini Mutha's website.",
  alternates: { canonical: "/sitemap" },
};

export default function Page() {
  return <SitemapPage />;
}
