import PrivacyPolicyPage from "../../views/legal/PrivacyPolicyPage";

export const metadata = {
  title: "Privacy Policy",
  description: "How personal information is collected, used and protected on the Dr. Mohini Mutha website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
