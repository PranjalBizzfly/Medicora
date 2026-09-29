import TermsConditionsPage from "../../views/legal/TermsConditionsPage";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms for using the website, online consultations and related services.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function Page() {
  return <TermsConditionsPage />;
}
