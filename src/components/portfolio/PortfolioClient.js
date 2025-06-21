// src/components/portfolio/PortfolioClient.js
"use client";
import { useState } from "react";
import { Filter, ArrowRight } from "lucide-react";

export default function PortfolioClient({ projects }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    ...new Set(projects.map((p) => p.category).filter(Boolean)),
  ];
  const filters = [
    { id: "all", label: "All" },
    ...categories.map((cat) => ({ id: cat.toLowerCase(), label: cat })),
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category?.toLowerCase() === activeFilter);

  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        })
      : "";

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-[#E1E1FC] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 blur-sm scale-105 object-cover"
          >
            <source src="/videos/hero-portfolio.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/15"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-semibold text-primary leading-tight">
              Real Results From Real Work
            </h1>
            <p className="text-xl lg:text-2xl text-primary leading-relaxed max-w-3xl mx-auto">
              Live portfolio from our Notion workspace — solutions delivering
              measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 text-sm text-secondary mr-4">
              <Filter className="w-4 h-4" />
              <span>Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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
                    <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                        <span className="px-2 py-0.5 bg-primary-light text-primary text-xs rounded-md">
                          Featured
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted">
                      {formatDate(project.date)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h2 className="text-lg font-semibold text-primary leading-tight group-hover:text-gray-900 transition-colors duration-200">
                      {project.title}
                    </h2>

                    {project.description && (
                      <p className="text-sm text-secondary leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    )}

                    {/* Technologies */}
                    {project.technologies?.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
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
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-medium text-primary group-hover:text-gray-900 transition-colors duration-200">
                      View Case
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 transition-all duration-200 group-hover:text-primary group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary">No projects found.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 rounded-3xl shadow-2xl">
              <div className="absolute inset-0">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10 text-center py-16 px-8">
                <div className="space-y-8">
                  <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
                    Want results like these?
                  </h2>
                  <a
                    href="/contact"
                    className="group inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 transform shadow-xl"
                  >
                    <span>Book clarity call</span>
                    <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
