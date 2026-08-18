import type { Metadata } from "next";
import { TalentCategoryPage } from "@/components/talent-category-page";

export const metadata: Metadata = {
  title: "Child Talent Boy | Mystic PR",
  description:
    "Browse child talent boys represented by Mystic PR for brand campaigns, shoots, and productions across the UAE.",
  alternates: { canonical: "https://mysticpr.com/child-talent-boy" }
};

export default function ChildTalentBoyPage() {
  return (
    <TalentCategoryPage
      title="Child Talent Boy"
      description="Young male talent for family, lifestyle, and brand campaigns — matched with extra consent and guardianship protocols."
    />
  );
}
