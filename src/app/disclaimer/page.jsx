import DisclaimerPage from "../../views/legal/DisclaimerPage";

export const metadata = {
  title: "Disclaimer",
  description: "Important information about the educational content, consultations and services provided through this website.",
  alternates: { canonical: "/disclaimer" },
};

export default function Page() {
  return <DisclaimerPage />;
}
