import type { Metadata } from "next";
import { TalentCategoryPage } from "@/components/talent-category-page";

export const metadata: Metadata = {
  title: "Child Talent Girl | Mystic PR",
  description:
    "Browse child talent girls represented by Mystic PR for brand campaigns, shoots, and productions across the UAE.",
  alternates: { canonical: "https://mysticpr.com/child-talent-girl" }
};

export default function ChildTalentGirlPage() {
  return (
    <TalentCategoryPage
      title="Child Talent Girl"
      description="Young female talent for family, lifestyle, and brand campaigns — matched with extra consent and guardianship protocols."
    />
  );
}
