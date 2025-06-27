import { getProjects } from "@/lib/notion";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
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
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative">
        <PortfolioHero />
      </section>

      {/* Portfolio Grid with Server-side data - Better Mobile Spacing */}
      <section className="pt-4 md:pt-8 pb-8 md:pb-12">
        <PortfolioGrid projects={projects} />
      </section>

      {/* Trust Section - Improved Mobile Layout */}
      <section className="border-t border-gray-100">
        <PortfolioTrust />
      </section>

      {/* Final CTA - Mobile-First Design */}
      <section className="pt-8 md:pt-12">
        <PortfolioCTA />
      </section>
    </div>
  );
}
