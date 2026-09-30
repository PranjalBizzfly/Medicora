import PatientStoriesPage from "../../../views/resources/PatientStoriesPage";

export const metadata = {
  title: "Patient Stories",
  description: "Real experiences from people Dr. Mohini Mutha has cared for, shared with patients’ permission.",
  alternates: { canonical: "/resources/patient-stories" },
};

export default function Page() {
  return <PatientStoriesPage />;
}
