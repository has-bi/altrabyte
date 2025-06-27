"use client";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { renderNotionContent } from "@/lib/notion";

export default function ProjectDetail({ project, content }) {
  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        })
      : "";

  return (
    <div className="bg-white">
      {/* Minimal Navigation */}
      <nav className="py-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-primary hover:text-gray-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-3" />
            Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section - Apple Style */}
      <section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Subtle Metadata */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            {project.client && (
              <span className="text-secondary font-medium text-sm tracking-wide">
                {project.client}
              </span>
            )}
            {project.date && (
              <div className="flex items-center space-x-2 text-secondary">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-medium text-sm tracking-wide">
                  {formatDate(project.date)}
                </span>
              </div>
            )}
            {project.category && (
              <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium tracking-wide">
                {project.category}
              </span>
            )}
          </div>

          {/* Main Title - Apple Typography */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-[1.1] tracking-tight mb-8">
            {project.title}
          </h1>

          {/* Subtitle */}
          {project.description && (
            <p className="text-l sm:text-xl text-secondary leading-relaxed max-w-3xl mx-auto font-normal">
              {project.description}
            </p>
          )}

          {/* Technologies - Clean Pills */}
          {project.technologies?.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium tracking-wide hover:bg-gray-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Hero Image - Full Width */}
      {project.coverImage && (
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl overflow-hidden bg-gray-50 shadow-2xl shadow-black/10">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content Section - Apple Reading Experience */}
      {content && content.length > 0 && (
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-8">{renderNotionContent(content)}</div>
          </div>
        </section>
      )}

      {/* Call to Action - Minimal & Clean */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-primary mb-6 tracking-tight">
            Want to move this fast with your reporting?
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 transform shadow-lg"
            >
              Book a 30-min clarity call →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
