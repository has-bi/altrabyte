"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioSection({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "analytics", label: "Analytics" },
    { id: "automation", label: "Automation" },
    { id: "ai", label: "AI Solutions" },
  ];

  const filteredItems = projects.slice(0, 6);

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
            Real Results From Real Work
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Live from our Notion workspace — real solutions for real clients.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-white text-primary shadow-sm"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((project) => (
            <article
              key={project.id}
              className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm"
            >
              <div className="space-y-4">
                {project.coverImage && (
                  <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-muted">
                  <span>{project.client}</span>
                  <span>{project.date}</span>
                </div>

                <h3 className="text-lg font-semibold text-primary leading-tight">
                  {project.title}
                </h3>

                {project.description && (
                  <p className="text-sm text-secondary leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                )}

                <div className="pt-2">
                  <span className="btn-tertiary text-xs">View case →</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/portfolio" className="btn-secondary">
            View All Projects ({projects.length})
          </Link>
        </div>
      </div>
    </section>
  );
}
