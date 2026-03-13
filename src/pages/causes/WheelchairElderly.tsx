import CausePageLayout from "@/components/CausePageLayout";
import wheelchairElderlyHero from "@/assets/generated/causes/wheelchair-elderly-hero.jpg";
import elderlyCare from "@/assets/generated/healthcare/elderly-care.jpg";

const WheelchairElderly = () => {
  return (
    <CausePageLayout
      title="Wheelchair for an Elderly Person"
      urgentMessage="Restore mobility and dignity to Thatha's life"
      heroImage={wheelchairElderlyHero}
      story="Rajamma Thatha, 78, spent his entire life as a farmer, working hard to provide for his family. After a stroke two years ago, he lost the use of his legs and has been confined to his bed. His son, a daily wage laborer, cannot afford a wheelchair, and Thatha now depends entirely on family members for even basic movements like going outside for fresh air or visiting the temple he devotedly visited every day for 50 years."
      need="A wheelchair will transform Thatha's life, giving him back his independence and dignity. He will be able to move around his home, sit outside, and even visit the nearby temple with assistance. We aim to provide a sturdy, comfortable wheelchair suitable for an elderly person, along with accessories like a cushion for prolonged sitting and a blanket holder for the cooler months."
      fundUsage={[
        { item: "Wheelchair Purchase", percentage: 75 },
        { item: "Comfort Accessories", percentage: 15 },
        { item: "Delivery & Setup", percentage: 10 },
      ]}
      galleryImages={[
        wheelchairElderlyHero,
        elderlyCare,
      ]}
      relatedFocus="Social Welfare"
      relatedFocusLink="/focus/social-welfare"
    />
  );
};

export default WheelchairElderly;
