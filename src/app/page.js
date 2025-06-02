// app/page.js - Updated with Section Separation
import HeroSection from "../components/HeroSection";
import TrustedBySection from "@/components/TrustedSection";
import SolutionDifferentSection from "@/components/SolutionsOverview";
import WhyAltraByteSection from "@/components/WhySection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import FinalCTASection from "@/components/CTASection";
import PainSection from "@/components/PainSection";
import AchieveSection from "@/components/AchieveSection";

export default function HomePage() {
  return (
    <div>
      {/* Hero - White background */}
      <HeroSection />

      <div className="section-divider">
        <TrustedBySection />
      </div>

      <PainSection />

      <div className="section-divider">
        <SolutionDifferentSection />
      </div>

      <AchieveSection />

      {/* Why AltraByte - Gray background with subtle divider */}
      {/* <div className="section-divider">
        <WhyAltraByteSection />
      </div> */}

      {/* Portfolio - White background */}
      <PortfolioSection />

      {/* Blog - Gray background with divider */}
      <div className="section-divider">
        <BlogSection />
      </div>

      {/* Final CTA - White background with top divider */}
      <div className="section-divider">
        <FinalCTASection />
      </div>
    </div>
  );
}
