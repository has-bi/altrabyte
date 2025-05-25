// components/PortfolioSection.js - Apple Minimalist Style
"use client";

import React, { useState } from "react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Analytics Platform",
      client: "Regional Retail Chain",
      category: "data-analytics",
      description:
        "Real-time sales analytics and inventory optimization system for improved decision making.",
      results: "40% efficiency increase",
      year: "2024",
    },
    {
      id: 2,
      title: "Manufacturing Process Automation",
      client: "FMCG Manufacturing",
      category: "automation",
      description:
        "Automated quality control workflows and production reporting systems.",
      results: "60% manual task reduction",
      year: "2024",
    },
    {
      id: 3,
      title: "AI Customer Support Assistant",
      client: "EdTech Platform",
      category: "ai-solutions",
      description:
        "Intelligent chatbot for student queries and personalized course recommendations.",
      results: "75% faster response times",
      year: "2023",
    },
    {
      id: 4,
      title: "Supply Chain Intelligence",
      client: "Mining Corporation",
      category: "data-analytics",
      description:
        "Predictive analytics platform for optimizing supply chain operations.",
      results: "30% logistics cost reduction",
      year: "2023",
    },
    {
      id: 5,
      title: "Document Processing System",
      client: "Healthcare Network",
      category: "automation",
      description:
        "Automated patient record processing with compliance reporting capabilities.",
      results: "85% faster processing",
      year: "2024",
    },
    {
      id: 6,
      title: "Content Generation Platform",
      client: "Marketing Agency",
      category: "ai-solutions",
      description:
        "AI-powered content creation and campaign optimization tools.",
      results: "50% content output increase",
      year: "2023",
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "data-analytics", label: "Analytics" },
    { id: "automation", label: "Automation" },
    { id: "ai-solutions", label: "AI Solutions" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
            Selected Work
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Real solutions delivering measurable results for enterprise clients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-white text-primary shadow-sm "
                    : "text-secondary hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="text-xs text-muted font-medium">
                    {item.client}
                  </div>
                  <div className="text-xs text-muted">{item.year}</div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary leading-tight group-hover:text-primary/80 transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-sm text-secondary leading-relaxed">
                    {item.description}
                  </p>

                  {/* Results */}
                  <div className="inline-flex items-center px-2 py-1 bg-secondary-light text-secondary text-xs font-medium rounded-md">
                    {item.results}
                  </div>
                </div>

                {/* Action */}
                <div className="pt-2">
                  <button className="btn-tertiary text-xs">
                    View case study →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="btn-secondary">View All Projects</button>
          <p className="text-xs text-muted mt-3">
            50+ successful projects across 15+ industries
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
