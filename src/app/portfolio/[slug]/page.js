// src/app/portfolio/[slug]/page.js
import { getProject, getProjectContent, getProjects } from "@/lib/notion";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/portfolio/ProjectDetail";

// 🟢 Use revalidation instead of force-dynamic for better performance
export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug })).filter(Boolean);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - AltraByte Portfolio`,
    description: project.description || `Case study: ${project.title}`,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  const content = await getProjectContent(project.id);
  return <ProjectDetail project={project} content={content} />;
}
