import BlogsPage from "../../../views/resources/BlogsPage";

export const metadata = {
  title: "Blogs",
  description: "Simple insights for better everyday wellbeing on anxiety, sleep, lifestyle and homeopathy.",
  alternates: { canonical: "/resources/blogs" },
};

export default function Page() {
  return <BlogsPage />;
}
