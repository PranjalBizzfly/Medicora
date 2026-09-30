import MyJourneyPage from "../../views/MyJourneyPage";

export const metadata = {
  title: "My Journey",
  description: "From studying medicine to understanding the person behind it. Since 2012, Dr. Mohini Mutha's journey has been shaped by thousands of patient conversations, continuous learning and the connection between physical and emotional wellbeing.",
  alternates: { canonical: "/my-journey" },
};

export default function Page() {
  return <MyJourneyPage />;
}
