// app/portfolio/page.js
"use client";
import { useState } from "react";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioTrust from "@/components/portfolio/PortfolioTrust";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <div>
      {/* Hero Section */}
      <PortfolioHero />

      {/* Filter Section */}
      <PortfolioFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Case Studies Grid */}
      <PortfolioGrid activeFilter={activeFilter} />

      {/* Trust Section */}
      <div className="section-divider">
        <PortfolioTrust />
      </div>

      {/* Final CTA */}
      <PortfolioCTA />
    </div>
  );
}
