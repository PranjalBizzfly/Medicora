import BookConsultationPage from "../../views/BookConsultationPage";

export const metadata = {
  title: "Book a Consultation",
  description: "Start with a conversation about your wellbeing. Book an online or in-person consultation with Dr. Mohini Mutha.",
  alternates: { canonical: "/book-a-consultation" },
};

export default function Page() {
  return <BookConsultationPage />;
}
