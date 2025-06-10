// components/portfolio/PortfolioGrid.js
"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const PortfolioGrid = ({ activeFilter }) => {
  const caseStudies = [
    {
      id: 1,
      title: "7 Business Dashboards in 3.5 Weeks",
      client: "Paragon Beauty",
      clientLogo: "PB", // Placeholder - replace with actual logo
      summary:
        "Delivered executive and trade dashboards that replaced fragmented Excel reporting across divisions.",
      category: ["data-analytics", "retail"],
      link: "/portfolio/paragon-beauty",
      isPublic: true,
    },
    {
      id: 2,
      title: "AI-Powered PO Automation System",
      client: "Youvit",
      clientLogo: "YV",
      summary:
        "Automated 1000+ purchase orders per month with intelligent document processing and approval workflows.",
      category: ["ai-automation", "logistics"],
      link: "/portfolio/youvit-automation",
      isPublic: true,
    },
    {
      id: 3,
      title: "Sales Route Optimization Engine",
      client: "Confidential FMCG",
      clientLogo: "CF",
      summary:
        "Cut field travel time by 80% using predictive logic and real-time route optimization.",
      category: ["data-analytics", "fmcg"],
      link: "/portfolio/sales-route-optimizer",
      isPublic: false,
    },
    {
      id: 4,
      title: "Seller Center Integration Bot",
      client: "Regional Distributor",
      clientLogo: "RD",
      summary:
        "Reduced manual reporting by 40 hours/month with automated marketplace data synchronization.",
      category: ["rpa", "retail"],
      link: "/portfolio/seller-center-bot",
      isPublic: false,
    },
    {
      id: 5,
      title: "Customer Support AI Assistant",
      client: "EdTech Platform",
      clientLogo: "EP",
      summary:
        "Reduced internal support load by 60% with intelligent query routing and automated responses.",
      category: ["ai-automation"],
      link: "/portfolio/edtech-ai-assistant",
      isPublic: false,
    },
    {
      id: 6,
      title: "Real-time Inventory Analytics",
      client: "E-commerce Leader",
      clientLogo: "EL",
      summary:
        "Delivered real-time inventory insights across 15 warehouses with automated reorder recommendations.",
      category: ["data-analytics", "logistics"],
      link: "/portfolio/inventory-analytics",
      isPublic: false,
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "data-analytics", label: "Data Analytics" },
    { id: "ai-automation", label: "AI & Automation" },
    { id: "rpa", label: "RPA" },
    { id: "retail", label: "Retail" },
    { id: "logistics", label: "Logistics" },
    { id: "fmcg", label: "FMCG" },
  ];

  const filteredCaseStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.category.includes(activeFilter));

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredCaseStudies.map((study) => (
            <article
              key={study.id}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <div className="space-y-4">
                {/* Client Header */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                    <span className="text-xs font-semibold text-secondary">
                      {study.clientLogo}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-secondary text-sm">
                        {study.client}
                      </h3>
                      {!study.isPublic && (
                        <span className="px-2 py-0.5 bg-gray-100 text-xs text-muted rounded-md">
                          Confidential
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-primary leading-tight group-hover:text-gray-900 transition-colors duration-200">
                  {study.title}
                </h2>

                {/* Summary */}
                <p className="text-sm text-secondary leading-relaxed">
                  {study.summary}
                </p>

                {/* Categories */}
                <div className="flex flex-wrap gap-1">
                  {study.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-1 bg-gray-50 text-xs text-muted rounded-md"
                    >
                      {filters.find((f) => f.id === cat)?.label || cat}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary group-hover:text-gray-900 transition-colors duration-200">
                      View Case
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 transition-all duration-200 group-hover:text-primary group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Show message when no results */}
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-secondary">
              No case studies found for this filter.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-primary hover:text-primary-hover font-medium"
            >
              View all cases →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
