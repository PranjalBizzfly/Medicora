import MyJourneyPage from "../../views/MyJourneyPage";

export const metadata = {
  title: "My Journey",
  description: "From studying medicine to understanding the person behind it: Dr. Mohini Mutha's professional journey since 2012.",
  alternates: { canonical: "/my-journey" },
};

export default function Page() {
  return <MyJourneyPage />;
}
