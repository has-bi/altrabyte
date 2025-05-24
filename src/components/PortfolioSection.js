// components/PortfolioSection.js - Minimalist Redesign
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
      description: "Real-time sales analytics and inventory optimization",
      results: "40% efficiency increase",
      year: "2024",
    },
    {
      id: 2,
      title: "Manufacturing Automation",
      client: "FMCG Manufacturing",
      category: "automation",
      description: "Quality control and production workflow automation",
      results: "60% manual task reduction",
      year: "2024",
    },
    {
      id: 3,
      title: "AI Customer Support",
      client: "EdTech Platform",
      category: "ai-solutions",
      description:
        "Intelligent chatbot for student queries and course recommendations",
      results: "75% faster response times",
      year: "2023",
    },
    {
      id: 4,
      title: "Supply Chain Intelligence",
      client: "Mining Corporation",
      category: "data-analytics",
      description: "Predictive analytics for supply chain optimization",
      results: "30% logistics cost reduction",
      year: "2023",
    },
    {
      id: 5,
      title: "Document Processing System",
      client: "Healthcare Network",
      category: "automation",
      description:
        "Automated patient record processing and compliance reporting",
      results: "85% faster processing",
      year: "2024",
    },
    {
      id: 6,
      title: "Content Generation AI",
      client: "Marketing Agency",
      category: "ai-solutions",
      description: "AI-powered content creation and campaign optimization",
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
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real solutions delivering measurable results for enterprise clients.
          </p>
        </div>

        {/* Filter Tabs - Minimal */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white rounded-2xl p-1 border border-gray-100">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - Clean Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-sm text-gray-500 font-medium">
                  {item.client}
                </div>
                <div className="text-sm text-gray-400">{item.year}</div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Results */}
                <div className="inline-flex items-center px-3 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-lg">
                  {item.results}
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="text-gray-900 font-medium hover:underline underline-offset-4 transition-all duration-200">
                  View Case Study
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA - Minimal */}
        <div className="text-center mt-20">
          <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-2xl hover:bg-gray-800 transition-colors duration-200 hover:-translate-y-0.5 transform">
            View All Projects
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <p className="text-gray-500 mt-4">
            50+ successful projects across 15+ industries
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
