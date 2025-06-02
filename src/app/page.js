// app/page.js - Updated with Section Separation
import HeroSection from "../components/HeroSection";
import TrustedBySection from "@/components/TrustedSection";
import SolutionsOverview from "@/components/SolutionsOverview";
import WhyAltraByteSection from "@/components/WhySection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import FinalCTASection from "@/components/CTASection";
import PainSection from "@/components/PainSection";

export default function HomePage() {
  return (
    <div>
      {/* Hero - White background */}
      <HeroSection />

      {/* Trusted By - Gray background with top divider */}
      <div className="section-divider">
        <TrustedBySection />
      </div>

      {/* Pain Secttion  */}
      <div className="section-divider">
        <PainSection />
      </div>

      {/* Solutions - White background */}
      <SolutionsOverview />

      {/* Why AltraByte - Gray background with subtle divider */}
      <div className="section-divider">
        <WhyAltraByteSection />
      </div>

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
