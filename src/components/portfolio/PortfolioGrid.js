"use client";
import { useState } from "react";
import { Filter, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioGrid({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  // Simplified filter generation - max 5 filters for mobile
  const generateFilters = () => {
    if (!projects.length) return [{ id: "all", label: "All" }];

    const allCategories = [
      ...new Set(projects.map((p) => p.category).filter(Boolean)),
    ];

    // Mobile-first: limit to most important filters
    const filters = [{ id: "all", label: "All" }];

    // Add top 4 categories only
    allCategories.slice(0, 4).forEach((cat) => {
      filters.push({
        id: cat.toLowerCase().replace(/\s+/g, "-"),
        label: cat,
        type: "category",
      });
    });

    return filters;
  };

  const filters = generateFilters();

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => {
          const filter = filters.find((f) => f.id === activeFilter);
          if (!filter || filter.type !== "category") return false;
          return (
            project.category?.toLowerCase().replace(/\s+/g, "-") ===
            activeFilter
          );
        });

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Simplified Mobile-First Filter */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container">
          <div className="overflow-x-auto">
            <div className="flex items-center space-x-3 min-w-max px-1">
              <div className="flex items-center space-x-2 text-sm text-muted flex-shrink-0">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filter:</span>
              </div>
              <div className="flex space-x-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap touch-target ${
                      activeFilter === filter.id
                        ? "bg-primary text-white shadow-sm"
                        : "bg-gray-100 text-secondary hover:bg-gray-200"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Mobile-First Grid */}
      <section className="section bg-white">
        <div className="container">
          {/* Mobile: Single column, Tablet: 2 cols, Desktop: 3 cols */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Clean No Results State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">
                No projects found
              </h3>
              <p className="text-secondary mb-6">
                Try adjusting your filter or{" "}
                <button
                  onClick={() => setActiveFilter("all")}
                  className="text-primary hover:text-primary-hover font-medium"
                >
                  view all projects
                </button>
              </p>
            </div>
          )}

          {/* Clean Stats */}
          {projects.length > 0 && (
            <div className="text-center mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm text-muted">
                {filteredProjects.length} of {projects.length} projects
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

// Separate component for cleaner code organization
function ProjectCard({ project }) {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  // Mobile-first: Only show essential info
  const shouldShowTech =
    project.technologies && project.technologies.length > 0;
  const shouldShowDate = project.date;

  if (!project.slug) {
    return <ComingSoonCard project={project} />;
  }

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
    >
      {/* Hero Image - Consistent Height */}
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.parentElement.innerHTML =
                '<div class="w-full h-full bg-gray-100 flex items-center justify-center"><span class="text-gray-400 text-sm">No image</span></div>';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No image</span>
          </div>
        )}
      </div>

      {/* Content - Mobile Optimized */}
      <div className="p-6">
        <div className="space-y-4">
          {/* Header - Only Essential Info */}
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              {project.client && (
                <p className="text-sm font-medium text-secondary mb-1 truncate">
                  {project.client}
                </p>
              )}
            </div>
            {shouldShowDate && (
              <span className="text-xs text-muted ml-2 flex-shrink-0">
                {formatDate(project.date)}
              </span>
            )}
          </div>

          {/* Title - Primary Focus */}
          <h2 className="text-lg font-semibold text-primary leading-tight group-hover:text-gray-900 transition-colors duration-200 line-clamp-2">
            {project.title}
          </h2>

          {/* Description - Secondary Info */}
          {project.description && (
            <p className="text-sm text-secondary leading-relaxed line-clamp-2">
              {project.description}
            </p>
          )}

          {/* Category Badge - Visual Hierarchy */}
          {project.category && (
            <div className="inline-flex items-center px-3 py-1 bg-gray-50 rounded-full">
              <span className="text-xs font-medium text-secondary">
                {project.category}
              </span>
            </div>
          )}

          {/* Tech Stack - Progressive Disclosure (Mobile: Hidden, Tablet+: Visible) */}
          {shouldShowTech && (
            <div className="hidden sm:block space-y-2">
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

          {/* CTA - Clear Action */}
          <div className="pt-4 border-t border-gray-50">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-primary group-hover:text-gray-900 transition-colors duration-200">
                View Case Study
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 transition-all duration-200 group-hover:text-primary group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Coming Soon Card Component
function ComingSoonCard({ project }) {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden opacity-75">
      {/* Hero Image */}
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              {project.client && (
                <p className="text-sm font-medium text-secondary mb-1 truncate">
                  {project.client}
                </p>
              )}
            </div>
            {project.date && (
              <span className="text-xs text-muted ml-2 flex-shrink-0">
                {formatDate(project.date)}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-primary leading-tight line-clamp-2">
            {project.title}
          </h2>

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

          {/* CTA - Disabled State */}
          <div className="pt-4 border-t border-gray-50">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-400">
                Coming Soon
              </span>
              <ArrowRight className="w-4 h-4 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
