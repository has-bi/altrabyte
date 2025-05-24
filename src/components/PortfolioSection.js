"use client";

import React, { useState } from "react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Analytics Dashboard",
      client: "Regional Retail Chain",
      category: "data-analytics",
      image:
        "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Analytics+Dashboard",
      description:
        "Real-time sales analytics and inventory optimization system",
      results: "40% increase in sales efficiency",
      tags: ["Analytics", "E-commerce", "Real-time"],
    },
    {
      id: 2,
      title: "Manufacturing Process Automation",
      client: "FMCG Manufacturing",
      category: "rpa-automation",
      image:
        "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=RPA+Automation",
      description:
        "Automated quality control and production reporting workflows",
      results: "60% reduction in manual tasks",
      tags: ["RPA", "Manufacturing", "Quality Control"],
    },
    {
      id: 3,
      title: "AI-Powered Customer Support",
      client: "EdTech Platform",
      category: "gen-ai",
      image:
        "https://via.placeholder.com/600x400/10B981/FFFFFF?text=AI+Assistant",
      description:
        "Custom chatbot for student queries and course recommendations",
      results: "75% faster response times",
      tags: ["AI", "Customer Support", "Education"],
    },
    {
      id: 4,
      title: "Supply Chain Intelligence",
      client: "Mining Corporation",
      category: "data-analytics",
      image:
        "https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Supply+Chain+BI",
      description: "Predictive analytics for supply chain optimization",
      results: "30% cost reduction in logistics",
      tags: ["Supply Chain", "Predictive Analytics", "Mining"],
    },
    {
      id: 5,
      title: "Document Processing System",
      client: "Healthcare Network",
      category: "rpa-automation",
      image:
        "https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Document+RPA",
      description:
        "Automated patient record processing and compliance reporting",
      results: "85% faster document processing",
      tags: ["Healthcare", "Document Processing", "Compliance"],
    },
    {
      id: 6,
      title: "Intelligent Content Generator",
      client: "Marketing Agency",
      category: "gen-ai",
      image:
        "https://via.placeholder.com/600x400/6366F1/FFFFFF?text=Content+AI",
      description: "AI-powered content creation and campaign optimization",
      results: "50% increase in content output",
      tags: ["Content AI", "Marketing", "Automation"],
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "data-analytics", label: "Data & Analytics" },
    { id: "rpa-automation", label: "RPA Automation" },
    { id: "gen-ai", label: "Gen AI" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Real solutions delivering measurable results for enterprise clients
            across industries
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-sm border border-gray-200">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                {/* View Project Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-blue-600 font-medium">
                    {item.client}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Results */}
                <div className="pt-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-lg">
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    {item.results}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl">
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
          <p className="text-sm text-gray-500 mt-4">
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
