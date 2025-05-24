// app/page.js
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TrustedBySection from "@/components/TrustedSection";
import SolutionsOverview from "@/components/SolutionsOverview";
import WhyAltraByteSection from "@/components/WhySection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import FinalCTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrustedBySection />
      <SolutionsOverview />
      <WhyAltraByteSection />
      <PortfolioSection />
      <BlogSection />
      <FinalCTASection />
    </div>
  );
}
