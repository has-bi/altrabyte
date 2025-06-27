import { getProjects } from "@/lib/notion";
import HeroSection from "../components/HeroSection";
import TrustedBySection from "@/components/TrustedSection";
import SolutionDifferentSection from "@/components/SolutionsOverview";
import PortfolioSection from "@/components/PortfolioSection";
import FinalCTASection from "@/components/CTASection";
import PainSection from "@/components/PainSection";
import AchieveSection from "@/components/AchieveSection";

// Force dynamic rendering for live updates
export const dynamic = "force-dynamic";

export default async function HomePage() {
  // This fetches fresh data on every request
  const projects = await getProjects();

  return (
    <div className="min-h-screen">
      {/* Hero Section - No top padding (handled by header) */}
      <section className="relative">
        <HeroSection />
      </section>

      {/* Trusted By Section - Tight coupling with hero */}
      <section className="pt-12 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16 bg-gray-50">
        <TrustedBySection />
      </section>

      {/* Pain Section - Major transition, needs breathing room */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16">
        <PainSection />
      </section>

      {/* Solutions Section - Related to pain, moderate spacing */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 bg-white">
        <SolutionDifferentSection />
      </section>

      {/* Achieve Section - Building on solutions */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 bg-gray-50">
        <AchieveSection />
      </section>

      {/* Portfolio Section - Social proof, needs prominence */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 bg-white">
        <PortfolioSection projects={projects} />
      </section>

      {/* Final CTA - Major conclusion, maximum spacing */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16">
        <FinalCTASection />
      </section>
    </div>
  );
}
