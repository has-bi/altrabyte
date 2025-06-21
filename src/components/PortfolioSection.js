"use client";
import { useState } from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";

export default function PortfolioSection({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  // Generate dynamic filters from actual project data
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
  const filteredItems =
    activeFilter === "all"
      ? projects.slice(0, 6)
      : projects
          .filter((project) => {
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
          })
          .slice(0, 6);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Notion Data Indicator */}
        {projects.length > 0 && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 text-sm font-medium">
                Live from Notion
              </span>
            </div>
          </div>
        )}

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
            Real Results From Real Work
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            {projects.length > 0
              ? "Live from our Notion workspace — real solutions for real clients."
              : "Our portfolio of data analytics, AI automation, and process optimization projects."}
          </p>
        </div>

        {/* Dynamic Filters */}
        {filters.length > 1 && (
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
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((project) => (
            <article
              key={project.id}
              className="group bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-[420px] flex flex-col overflow-hidden"
            >
              {/* Cover Image */}
              <div className="relative">
                {project.coverImage ? (
                  <div className="h-40 bg-gray-100 overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.parentElement.innerHTML =
                          '<div class="h-full bg-gray-100 flex items-center justify-center"><span class="text-gray-400 text-sm">No image</span></div>';
                      }}
                    />
                  </div>
                ) : (
                  <div className="h-40 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">No image</span>
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-6">
                {/* Dynamic Content Area */}
                <div className="flex-1 space-y-3">
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
                  <h3 className="text-lg font-semibold text-primary leading-tight line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  {project.description && (
                    <p className="text-sm text-secondary leading-relaxed line-clamp-2">
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
                        <span className="text-xs text-muted">Tech:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-50 text-xs text-muted rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-50 text-xs text-muted rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA - Always at Bottom */}
                <div className="pt-4 border-t border-gray-50 mt-4">
                  {project.slug ? (
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="flex items-center justify-between group/link"
                    >
                      <span className="text-sm font-medium text-primary group-hover:text-gray-900 transition-colors duration-200">
                        View Case Study
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 transition-all duration-200 group-hover/link:text-primary group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary group-hover:text-gray-900 transition-colors duration-200">
                        View Case Study
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
        {filteredItems.length === 0 && projects.length > 0 && (
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

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Portfolio Loading
            </h3>
            <p className="text-gray-600">
              Our latest projects are being loaded from Notion.
            </p>
          </div>
        )}

        <div className="text-center mt-16">
          <Link href="/portfolio" className="btn-secondary">
            View All Projects {projects.length > 0 && `(${projects.length})`}
          </Link>
        </div>
      </div>
    </section>
  );
}
