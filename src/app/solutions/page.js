// app/solutions/page.js
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsIntro from "@/components/solutions/SolutionsIntro";
import SolutionsOfferings from "@/components/solutions/SolutionsOfferings";
import SolutionsProof from "@/components/solutions/SolutionsProof";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export const metadata = {
  title: "Solutions - AltraByte",
  description:
    "Solving the Right Problems, Fast. Data Analytics, AI Automation, and Process Optimization.",
};

export default function SolutionsPage() {
  return (
    <div>
      {/* Hero Section */}
      <SolutionsHero />

      {/* Intro Section */}
      <div className="section-divider">
        <SolutionsIntro />
      </div>

      {/* Main Solutions */}
      <SolutionsOfferings />

      {/* Proof Section */}
      <div className="section-divider">
        <SolutionsProof />
      </div>

      {/* Final CTA */}
      <div className="section-divider">
        <SolutionsCTA />
      </div>
    </div>
  );
}
