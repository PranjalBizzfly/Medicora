import PatientStoriesPage from "../../../views/resources/PatientStoriesPage";

export const metadata = {
  title: "Patient Stories",
  description: "Experiences shared by patients about their consultations and care with Dr. Mohini Mutha.",
  alternates: { canonical: "/resources/patient-stories" },
};

export default function Page() {
  return <PatientStoriesPage />;
}
