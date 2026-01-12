import TransformationStoriesHero from "@/components/transformation/TransformationStoriesHero";
import TransformationStoriesPattern from "@/components/transformation/TransformationStoriesPattern";
import TransformationStoriesShowcase from "@/components/transformation/TransformationStoriesShowcase";
import TransformationStoriesCompare from "@/components/transformation/TransformationStoriesCompare";
import TransformationStoriesHighlights from "@/components/transformation/TransformationStoriesHighlights";
import TransformationStoriesJourneys from "@/components/transformation/TransformationStoriesJourneys";
import TransformationStoriesCTA from "@/components/transformation/TransformationStoriesCTA";

export const metadata = {
  title: "Transformation Stories - Proof from operators who fixed the foundations",
  description:
    "See how operators in retail, fintech, and marketplaces rebuilt their data foundations and automation loops in under 90 days.",
  alternates: {
    canonical: '/transformation-stories',
  },
};

export default function TransformationStoriesPage() {
  return (
    <div className="bg-white">
      <TransformationStoriesHero />
      <TransformationStoriesPattern />
      <TransformationStoriesShowcase />
      <TransformationStoriesCompare />
      <TransformationStoriesHighlights />
      <TransformationStoriesJourneys />
      <TransformationStoriesCTA />
    </div>
  );
}
