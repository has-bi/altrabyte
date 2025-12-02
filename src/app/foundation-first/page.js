import FoundationFirstHero from "@/components/foundation-first/FoundationFirstHero";
import FoundationFirstBlogSection from "@/components/foundation-first/FoundationFirstBlogSection";
import FoundationFirstCompare from "@/components/foundation-first/FoundationFirstCompare";
import FoundationFirstInsight from "@/components/foundation-first/FoundationFirstInsight";
import FoundationFirstApproach from "@/components/foundation-first/FoundationFirstApproach";
import { getFeaturedBlogPost } from "@/lib/notion";

export const metadata = {
  title: "Why Foundation First - Build AI on truth, not theater",
  description:
    "See why every successful AI or automation program starts with a foundation audit, operator ownership, and a 90-day cadence.",
};

export default async function FoundationFirstPage() {
  // Fetch featured blog post from Notion (will use fallback if not configured)
  const featuredPost = await getFeaturedBlogPost();

  return (
    <div className="bg-white">
      <FoundationFirstHero />
      <FoundationFirstBlogSection post={featuredPost} />
      <FoundationFirstCompare />
      <FoundationFirstInsight />
      <FoundationFirstApproach />
    </div>
  );
}
