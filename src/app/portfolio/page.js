// src/app/portfolio/page.js
import { getProjects } from "@/lib/notion";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioTrust from "@/components/portfolio/PortfolioTrust";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata = {
  title: "Portfolio - Real Results From Real Work",
  description:
    "See our data analytics, AI automation, and process optimization projects. Real case studies from e-commerce, retail, logistics, and FMCG clients across Southeast Asia.",
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: "AltraByte Portfolio - Real Results From Real Work",
    url: "https://altrabyte.com/portfolio",
    images: [{ url: "/images/og-portfolio.png", width: 1200, height: 630 }],
  },
};

// 🟢 Better: Use revalidation instead of force-dynamic
export const revalidate = 60; // Revalidate every 60 seconds

export default async function PortfolioPage() {
  // This will get fresh data every 60 seconds (or immediately on deployment)
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-white">
      <section className="relative">
        <PortfolioHero />
      </section>

      <section className="pt-4 md:pt-8 pb-8 md:pb-12">
        <PortfolioGrid projects={projects} />
      </section>

      <section className="border-t border-gray-100">
        <PortfolioTrust />
      </section>

      <section className="pt-8 md:pt-12">
        <PortfolioCTA />
      </section>
    </div>
  );
}
