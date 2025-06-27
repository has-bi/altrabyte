// app/solutions/page.js
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsIntro from "@/components/solutions/SolutionsIntro";
import SolutionsOfferings from "@/components/solutions/SolutionsOfferings";
import SolutionsProof from "@/components/solutions/SolutionsProof";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export const metadata = {
  title: "Solutions - Data Analytics, AI Automation & Process Optimization",
  description:
    "Discover our data analytics, AI automation, and process optimization solutions. We help e-commerce, retail, logistics, and FMCG companies move faster with better data insights.",
  openGraph: {
    title:
      "AltraByte Solutions - Data Analytics, AI Automation & Process Optimization",
    url: "https://altrabyte.com/solutions",
    images: [{ url: "/images/og-solutions.png", width: 1200, height: 630 }],
  },
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
