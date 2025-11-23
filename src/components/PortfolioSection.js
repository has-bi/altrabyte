"use client";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";

export default function PortfolioSection({ projects = [] }) {
  // Show top 4 projects
  const displayProjects = projects.slice(0, 4);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <section className="section bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
            Real Results From Real Work
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            {projects.length > 0
              ? "Latest projects from our Notion workspace — real solutions for real clients."
              : "Our portfolio of data analytics, AI automation, and process optimization projects."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displayProjects.map((project) => (
            <article
              key={project.id}
              className="h-auto min-h-[420px] lg:h-[420px] flex flex-col"
            >
              {project.slug ? (
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full flex flex-col overflow-hidden"
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
                      <h3 className="text-lg font-semibold text-primary leading-tight line-clamp-2 group-hover:text-gray-900 transition-colors duration-200">
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

                      {/* Technologies - Always show on mobile, more compact */}
                      {project.technologies &&
                        project.technologies.length > 0 && (
                          <div className="space-y-1.5">
                            <div className="flex items-center space-x-1">
                              <Tag className="w-3 h-3 text-muted" />
                              <span className="text-xs text-muted">Tech:</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {/* Show more tech items on mobile */}
                              {project.technologies
                                .slice(0, 4)
                                .map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 bg-white text-xs text-muted rounded-md border border-gray-100 text-center"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              {project.technologies.length > 4 && (
                                <span className="px-2 py-1 bg-white text-xs text-muted rounded-md border border-gray-100">
                                  +{project.technologies.length - 4}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                    </div>

                    {/* CTA - Always at Bottom */}
                    <div className="pt-4 border-t border-gray-50 mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary group-hover:text-gray-900 transition-colors duration-200">
                          View Case Study
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 transition-all duration-200 group-hover:text-primary group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                // Non-clickable card for projects without slug
                <div className="group bg-gray-50 rounded-2xl border border-gray-100 h-full flex flex-col overflow-hidden opacity-75">
                  {/* Cover Image */}
                  <div className="relative">
                    {project.coverImage ? (
                      <div className="h-40 bg-gray-100 overflow-hidden">
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover"
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
                      {project.technologies &&
                        project.technologies.length > 0 && (
                          <div className="space-y-1.5">
                            <div className="flex items-center space-x-1">
                              <Tag className="w-3 h-3 text-muted" />
                              <span className="text-xs text-muted">Tech:</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies
                                .slice(0, 4)
                                .map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 bg-white text-xs text-muted rounded-md border border-gray-100"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              {project.technologies.length > 4 && (
                                <span className="px-2 py-1 bg-white text-xs text-muted rounded-md border border-gray-100">
                                  +{project.technologies.length - 4}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                    </div>

                    {/* CTA - Non-clickable state */}
                    <div className="pt-4 border-t border-gray-50 mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-400">
                          Coming Soon
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

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
