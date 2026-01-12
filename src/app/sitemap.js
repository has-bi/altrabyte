import { getAllStorysSlugs } from '@/lib/transformationStoriesSync';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://altrabyte.com';

  // 1. Static Routes
  const routes = [
    '',
    '/about',
    '/foundation-audit',
    '/transformation-stories',
    '/start-your-audit',
    '/foundation-first',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Transformation Stories
  const storySlugs = await getAllStorysSlugs();
  const storyUrls = storySlugs.map((slug) => ({
    url: `${baseUrl}/transformation-stories/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...routes, ...storyUrls];
}

