import HeroSection from "../components/HeroSection";
import TrustedBySection from "@/components/TrustedSection";
import TruthSection from "@/components/TruthSection";
import CoreServices from "@/components/CoreServices";
import FinalCTASection from "@/components/CTASection";
import PainSection from "@/components/PainSection";
import QuizSection from "@/components/QuizSection";
import ProcessSection from "@/components/ProcessSection";
import ProblemSections from "@/components/AchieveSection";
import PartnershipModels from "@/components/PartnershipModels";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero + Truth Stack */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden justify-end z-30 hidden md:flex">
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

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Pain Section */}
      <PainSection />

      {/* Quiz Section */}
      <QuizSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Solutions Section */}
      <CoreServices />

      {/* Partnership Models */}
      <PartnershipModels />

      {/* Problem Section */}
      <ProblemSections />

      {/* Final CTA */}
      <FinalCTASection />
    </div>
  );
}
