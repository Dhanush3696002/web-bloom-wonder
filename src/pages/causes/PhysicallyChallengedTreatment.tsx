import CausePageLayout from "@/components/CausePageLayout";
import disabledStudentHero from "@/assets/generated/causes/disabled-student-hero.jpg";
import physiotherapy from "@/assets/generated/causes/physiotherapy.jpg";
import wheelchairStudentHero from "@/assets/generated/causes/wheelchair-student-hero.jpg";

const PhysicallyChallengedTreatment = () => {
  return (
    <CausePageLayout
      title="Treatment of a Physically Challenged Student"
      urgentMessage="Help Ravi get the medical treatment he needs to walk again"
      heroImage={disabledStudentHero}
      story="Ravi is a bright 14-year-old student from a small village who dreams of becoming a teacher. Two years ago, he was diagnosed with a treatable orthopedic condition that has progressively affected his ability to walk. Despite his physical challenges, Ravi has continued to excel in his studies, often crawling to school when no one is available to carry him. His determination and love for learning have inspired his entire community."
      need="Ravi requires a series of corrective surgeries and post-operative rehabilitation therapy that will enable him to walk independently. The treatment plan, developed by specialists at a reputed hospital, spans 6-8 months and includes surgery, physiotherapy, and custom orthotic devices. His family, who are daily wage laborers, cannot afford this treatment. With your support, Ravi can not only walk but continue his education and achieve his dream of becoming a teacher."
      fundUsage={[
        { item: "Surgery & Hospital Stay", percentage: 50 },
        { item: "Physiotherapy & Rehabilitation", percentage: 25 },
        { item: "Orthotic Devices & Aids", percentage: 15 },
        { item: "Follow-up Care & Medicine", percentage: 10 },
      ]}
      galleryImages={[
        disabledStudentHero,
        physiotherapy,
        wheelchairStudentHero,
      ]}
      relatedFocus="Social Welfare"
      relatedFocusLink="/focus/social-welfare"
    />
  );
};

export default PhysicallyChallengedTreatment;
