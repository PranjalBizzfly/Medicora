import CookiePolicyPage from "../../views/legal/CookiePolicyPage";

export const metadata = {
  title: "Cookie Policy",
  description: "Understand how cookies and similar technologies may be used on this website.",
  alternates: { canonical: "/cookie-policy" },
};

export default function Page() {
  return <CookiePolicyPage />;
}
