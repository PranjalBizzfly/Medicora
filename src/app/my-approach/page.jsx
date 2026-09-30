import MyApproachPage from "../../views/MyApproachPage";

export const metadata = {
  title: "My Approach",
  description: "Every patient is different. So should their care be. Dr. Mohini Mutha considers your physical, emotional and lifestyle concerns and combines homeopathy, counselling and mind-body practices suited to your needs.",
  alternates: { canonical: "/my-approach" },
};

export default function Page() {
  return <MyApproachPage />;
}
