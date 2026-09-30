import BookConsultationPage from "../../views/BookConsultationPage";

export const metadata = {
  title: "Book a Consultation",
  description: "Book a consultation with Dr. Mohini Mutha. Start with a conversation about your wellbeing: a personalised online homeopathy consultation to understand your concerns and discuss the way forward.",
  alternates: { canonical: "/book-a-consultation" },
};

export default function Page() {
  return <BookConsultationPage />;
}
