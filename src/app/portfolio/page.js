// src/app/portfolio/page.js
import { getProjects } from "@/lib/notion";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioTrust from "@/components/portfolio/PortfolioTrust";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata = {
  title: "Portfolio - AltraByte",
  description: "Real Results From Real Work",
};

// Force dynamic rendering - no static generation
export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
  // This runs on every request - live data from Notion
  const projects = await getProjects();

  return (
    <div>
      {/* Hero Section */}
      <PortfolioHero />

      {/* Portfolio Grid with Server-side data */}
      <PortfolioGrid projects={projects} />

      {/* Trust Section */}
      <div className="section-divider">
        <PortfolioTrust />
      </div>

      {/* Final CTA */}
      <PortfolioCTA />
    </div>
  );
}
