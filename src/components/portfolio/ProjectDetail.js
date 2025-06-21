// src/components/portfolio/ProjectDetail.js
"use client";
import { ArrowLeft, ExternalLink, Calendar, Tag, Building } from "lucide-react";
import Link from "next/link";

export default function ProjectDetail({ project, content }) {
  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

  const renderBlock = (block) => {
    const { type, id } = block;
    const value = block[type];

    switch (type) {
      case "paragraph":
        return (
          <p key={id} className="text-secondary leading-relaxed mb-4">
            {value.rich_text.map((text) => text.plain_text).join("")}
          </p>
        );
      case "heading_1":
        return (
          <h2
            key={id}
            className="text-2xl font-semibold text-primary mt-8 mb-4"
          >
            {value.rich_text.map((text) => text.plain_text).join("")}
          </h2>
        );
      case "heading_2":
        return (
          <h3 key={id} className="text-xl font-semibold text-primary mt-6 mb-3">
            {value.rich_text.map((text) => text.plain_text).join("")}
          </h3>
        );
      case "heading_3":
        return (
          <h4 key={id} className="text-lg font-semibold text-primary mt-4 mb-2">
            {value.rich_text.map((text) => text.plain_text).join("")}
          </h4>
        );
      case "bulleted_list_item":
        return (
          <li key={id} className="text-secondary leading-relaxed mb-2 ml-4">
            {value.rich_text.map((text) => text.plain_text).join("")}
          </li>
        );
      case "numbered_list_item":
        return (
          <li key={id} className="text-secondary leading-relaxed mb-2 ml-4">
            {value.rich_text.map((text) => text.plain_text).join("")}
          </li>
        );
      case "image":
        const src =
          value.type === "external" ? value.external.url : value.file.url;
        return (
          <div key={id} className="my-8">
            <img
              src={src}
              alt="Project image"
              className="w-full rounded-xl shadow-sm"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-[#E1E1FC] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/portfolio"
                className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </div>

            {/* Hero Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                {project.client && (
                  <div className="flex items-center space-x-2 text-secondary">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">{project.client}</span>
                  </div>
                )}
                {project.category && (
                  <span className="px-3 py-1 bg-white/80 text-primary rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                )}
                {project.featured && (
                  <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-4xl lg:text-5xl font-semibold text-primary leading-tight">
                {project.title}
              </h1>

              {project.description && (
                <p className="text-xl text-secondary leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              )}

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {project.date && (
                  <div className="flex items-center space-x-2 text-secondary">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(project.date)}</span>
                  </div>
                )}
                {project.technologies?.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-secondary" />
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/80 text-secondary rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {project.coverImage && (
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {content.map(renderBlock)}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                Interested in similar results?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portfolio" className="btn-secondary">
                  View More Projects
                </Link>
                <Link href="/contact" className="btn-primary">
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
