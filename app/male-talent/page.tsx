import type { Metadata } from "next";
import { TalentCategoryPage } from "@/components/talent-category-page";

export const metadata: Metadata = {
  title: "Male Talent | Mystic PR",
  description:
    "Browse male talent represented by Mystic PR for brand campaigns, shoots, and productions across the UAE.",
  alternates: { canonical: "https://mysticpr.com/male-talent" }
};

export default function MaleTalentPage() {
  return (
    <TalentCategoryPage
      title="Male Talent"
      description="Male professionals and creators matched to your campaign brief, brand tone, and audience."
    />
  );
}
