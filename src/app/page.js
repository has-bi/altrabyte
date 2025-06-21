// src/app/page.js
import { getProjects } from "@/lib/notion";
import HeroSection from "../components/HeroSection";
import TrustedBySection from "@/components/TrustedSection";
import SolutionDifferentSection from "@/components/SolutionsOverview";
import PortfolioSectionNotion from "@/components/PortfolioSectionNotion";
import FinalCTASection from "@/components/CTASection";
import PainSection from "@/components/PainSection";
import AchieveSection from "@/components/AchieveSection";

// Force dynamic rendering for live updates
export const dynamic = "force-dynamic";

export default async function HomePage() {
  // This fetches fresh data on every request
  const projects = await getProjects();

  return (
    <div>
      <HeroSection />
      <div className="section-divider">
        <TrustedBySection />
      </div>
      <PainSection />
      <div className="section-divider">
        <SolutionDifferentSection />
      </div>
      <AchieveSection />
      <PortfolioSectionNotion projects={projects} />
      <div className="section-divider">
        <FinalCTASection />
      </div>
    </div>
  );
}
