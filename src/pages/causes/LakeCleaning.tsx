import CausePageLayout from "@/components/CausePageLayout";
import lakeCleaningHero from "@/assets/generated/causes/lake-cleaning-hero.jpg";
import lakeCleaning2 from "@/assets/generated/causes/lake-cleaning-2.jpg";
import lakeCleaning3 from "@/assets/generated/causes/lake-cleaning-3.jpg";

const LakeCleaning = () => {
  return (
    <CausePageLayout
      title="Cleaning the Lake at Temple"
      urgentMessage="Help us restore this sacred water body for the community"
      heroImage={lakeCleaningHero}
      story="The ancient temple lake in our village has been a sacred site for generations, serving as a place for religious ceremonies, community gatherings, and providing water for the surrounding areas. However, years of neglect and pollution have degraded this precious water body. Accumulated waste, silt, and invasive plants have severely impacted the lake's ecosystem and its ability to serve the community."
      need="We need to undertake a comprehensive restoration project that includes removing accumulated waste and debris, desilting the lake bed, installing proper drainage systems, and planting native aquatic plants to restore the ecosystem. The project will also include building proper pathways and installing waste bins to prevent future pollution. This restoration will benefit over 2,000 families who depend on this water body for various purposes."
      fundUsage={[
        { item: "Waste Removal & Cleaning", percentage: 40 },
        { item: "Desilting & Restoration", percentage: 30 },
        { item: "Infrastructure (Pathways, Bins)", percentage: 20 },
        { item: "Maintenance & Supervision", percentage: 10 },
      ]}
      galleryImages={[
        lakeCleaningHero,
        lakeCleaning2,
        lakeCleaning3,
      ]}
      relatedFocus="Environmental Safety"
      relatedFocusLink="/focus/environmental-safety"
    />
  );
};

export default LakeCleaning;
