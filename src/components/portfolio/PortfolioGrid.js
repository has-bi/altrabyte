// src/components/portfolio/PortfolioGrid.js
"use client";
import { useState } from "react";
import { Filter, ArrowRight, Calendar, Tag } from "lucide-react";

export default function PortfolioGrid({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  // Generate dynamic filters from live Notion data
  const generateFilters = () => {
    if (!projects.length) return [{ id: "all", label: "All" }];

    const allCategories = [
      ...new Set(projects.map((p) => p.category).filter(Boolean)),
    ];
    const allTechnologies = [
      ...new Set(projects.flatMap((p) => p.technologies || [])),
    ];

    const filters = [{ id: "all", label: "All" }];

    // Add category filters
    allCategories.forEach((cat) => {
      filters.push({
        id: cat.toLowerCase().replace(/\s+/g, "-"),
        label: cat,
        type: "category",
      });
    });

    // Add popular technology filters
    const popularTech = [
      "React",
      "Next.js",
      "Python",
      "AI",
      "Analytics",
      "Automation",
    ];
    popularTech.forEach((tech) => {
      if (
        allTechnologies.some((t) =>
          t.toLowerCase().includes(tech.toLowerCase())
        )
      ) {
        filters.push({
          id: tech.toLowerCase().replace(/\s+/g, "-"),
          label: tech,
          type: "technology",
        });
      }
    });

    return filters;
  };

  const filters = generateFilters();

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => {
          const filter = filters.find((f) => f.id === activeFilter);
          if (!filter) return false;

          if (filter.type === "category") {
            return (
              project.category?.toLowerCase().replace(/\s+/g, "-") ===
              activeFilter
            );
          } else if (filter.type === "technology") {
            return project.technologies?.some((tech) =>
              tech.toLowerCase().includes(filter.label.toLowerCase())
            );
          }
          return false;
        });

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <>
      {/* Live Data Indicator */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 text-sm font-medium">
                  Live from Notion
                </span>
              </div>
              <span className="text-xs text-muted">
                Last updated: {new Date().toLocaleTimeString()}
              </span>
            </div>
            <span className="text-sm text-secondary">
              {projects.length} projects
            </span>
          </div>
        </div>
      </section>

      {/* Filter */}
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
                  onClick={() => setActiveFilter(filter.id)}
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

      {/* Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Cover Image */}
                  {project.coverImage && (
                    <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden -mx-6 -mt-6 mb-6">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.parentElement.style.display = "none";
                        }}
                      />
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {project.client && (
                        <span className="font-semibold text-secondary text-sm">
                          {project.client}
                        </span>
                      )}
                      {project.featured && (
                        <span className="px-2 py-0.5 bg-primary-light text-primary text-xs rounded-md font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    {project.date && (
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-muted" />
                        <span className="text-xs text-muted">
                          {formatDate(project.date)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-primary leading-tight group-hover:text-gray-900 transition-colors duration-200">
                    {project.title}
                  </h2>

                  {/* Description */}
                  {project.description && (
                    <p className="text-sm text-secondary leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  )}

                  {/* Category */}
                  {project.category && (
                    <div className="inline-flex items-center px-3 py-1 bg-gray-50 rounded-full">
                      <span className="text-xs font-medium text-secondary">
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-1">
                        <Tag className="w-3 h-3 text-muted" />
                        <span className="text-xs text-muted">Tech Stack:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-50 text-xs text-muted rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-50 text-xs text-muted rounded-md">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-2">
                    {project.slug ? (
                      <a
                        href={`/portfolio/${project.slug}`}
                        className="flex items-center justify-between group/link"
                      >
                        <span className="text-sm font-medium text-primary group-hover:text-gray-900 transition-colors duration-200">
                          View Case Study
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 transition-all duration-200 group-hover/link:text-primary group-hover/link:translate-x-1" />
                      </a>
                    ) : (
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary group-hover:text-gray-900 transition-colors duration-200">
                          Coming Soon
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary text-lg mb-4">
                No projects found for "
                {filters.find((f) => f.id === activeFilter)?.label}".
              </p>
              <button
                onClick={() => setActiveFilter("all")}
                className="text-primary hover:text-primary-hover font-medium"
              >
                Show all projects →
              </button>
            </div>
          )}

          {/* Stats */}
          {projects.length > 0 && (
            <div className="text-center mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm text-muted">
                Showing {filteredProjects.length} of {projects.length} projects
                {activeFilter !== "all" &&
                  ` in "${filters.find((f) => f.id === activeFilter)?.label}"`}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
