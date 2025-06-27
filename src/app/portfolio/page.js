import { getProjects } from "@/lib/notion";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioTrust from "@/components/portfolio/PortfolioTrust";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata = {
  title: "Portfolio - Real Results From Real Work",
  description:
    "See our data analytics, AI automation, and process optimization projects. Real case studies from e-commerce, retail, logistics, and FMCG clients across Southeast Asia.",
  openGraph: {
    title: "AltraByte Portfolio - Real Results From Real Work",
    url: "https://altrabyte.com/portfolio",
    images: [{ url: "/images/og-portfolio.png", width: 1200, height: 630 }],
  },
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
