import { getProjects } from '@/lib/notion';
import { getAllStorysSlugs } from '@/lib/transformationStoriesSync';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://altrabyte.com';

  // 1. Static Routes
  const routes = [
    '',
    '/about',
    '/foundation-audit',
    '/portfolio',
    '/transformation-stories',
    '/contact',
    // Add other static top-level routes here
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Portfolio Projects
  const projects = await getProjects();
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project.date || new Date()),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 3. Dynamic Transformation Stories
  const storySlugs = await getAllStorysSlugs();
  const storyUrls = storySlugs.map((slug) => ({
    url: `${baseUrl}/transformation-stories/${slug}`,
    lastModified: new Date(), // Notion API might not easily give us last edited time for all stories efficiently, defaulting to now
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...routes, ...projectUrls, ...storyUrls];
}
