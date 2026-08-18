import type { Metadata } from "next";
import { TalentCategoryPage } from "@/components/talent-category-page";

export const metadata: Metadata = {
  title: "Female Talent | Mystic PR",
  description:
    "Browse female talent represented by Mystic PR for brand campaigns, shoots, and productions across the UAE.",
  alternates: { canonical: "https://mysticpr.com/female-talent" }
};

export default function FemaleTalentPage() {
  return (
    <TalentCategoryPage
      title="Female Talent"
      description="Female professionals and creators matched to your campaign brief, brand tone, and audience."
    />
  );
}
