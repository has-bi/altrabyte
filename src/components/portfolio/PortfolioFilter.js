// components/portfolio/PortfolioFilter.js
"use client";
import React from "react";
import { Filter } from "lucide-react";

const PortfolioFilter = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: "all", label: "All" },
    { id: "data-analytics", label: "Data Analytics" },
    { id: "ai-automation", label: "AI & Automation" },
    { id: "rpa", label: "RPA" },
    { id: "retail", label: "Retail" },
    { id: "logistics", label: "Logistics" },
    { id: "fmcg", label: "FMCG" },
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2 text-sm text-secondary mr-4">
            <Filter className="w-4 h-4" />
            <span>Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterChange(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-gray-100 text-secondary hover:bg-gray-200 hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioFilter;
