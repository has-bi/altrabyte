import { getProjects } from "@/lib/notion";
import HeroSection from "../components/HeroSection";
import TrustedBySection from "@/components/TrustedSection";
import TruthSection from "@/components/TruthSection";
import CoreServices from "@/components/CoreServices";
import PortfolioSection from "@/components/PortfolioSection";
import FinalCTASection from "@/components/CTASection";
import PainSection from "@/components/PainSection";
import QuizSection from "@/components/QuizSection";
import ProcessSection from "@/components/ProcessSection";
import ProblemSections from "@/components/AchieveSection";
import PartnershipModels from "@/components/PartnershipModels";

const SECTION_SPACING = {
  tight: "pt-12 sm:pt-16 lg:pt-20",
  standard: "py-16 sm:py-20 lg:py-24",
  relaxed: "py-20 sm:py-24 lg:py-28",
};

// Force dynamic rendering for live updates
export const dynamic = "force-dynamic";

export default async function HomePage() {
  // This fetches fresh data on every request
  const projects = await getProjects();

  return (
    <div className="min-h-screen">
      {/* Hero + Truth Stack */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-end z-30">
          <div className="h-[70%] md:h-[70%] w-auto aspect-[788/859] z-30 -translate-y-[25px] md:-translate-y-[40px]">
            <img
              src="/hero-object.svg"
              alt="Hero Object"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="space-y-2 relative z-10">
          <HeroSection />
          <TruthSection />
        </div>
      </section>

      {/* Trusted By Section - Tight coupling with hero */}
      <section className={`${SECTION_SPACING.tight} bg-white`}>
        <TrustedBySection />
      </section>

      {/* Pain Section - Major transition, needs breathing room */}
      <section className={SECTION_SPACING.standard}>
        <PainSection />
      </section>

      {/* Quiz Section - Interactive journey selector */}
      <QuizSection />

      {/* Process Section - Foundation-first methodology */}
      <ProcessSection />

      {/* Solutions Section - Related to pain, moderate spacing */}
      <section className={`${SECTION_SPACING.standard} bg-white`}>
        <CoreServices />
      </section>

      {/* Partnership Models */}
      <section className={`${SECTION_SPACING.standard} bg-white`}>
        <PartnershipModels />
      </section>

      {/* Problem Section - Highlights the stakes */}
      <section className={`${SECTION_SPACING.standard} bg-gray-50`}>
        <ProblemSections />
      </section>

      {/* Portfolio Section - Social proof, needs prominence */}
      {/* <section className={`${SECTION_SPACING.relaxed} bg-white`}>
        <PortfolioSection projects={projects} />
      </section> */}

      {/* Final CTA - Major conclusion, maximum spacing */}
      <section className={SECTION_SPACING.relaxed}>
        <FinalCTASection />
      </section>
    </div>
  );
}
