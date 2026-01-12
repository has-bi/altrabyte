import { notFound } from 'next/navigation';
import { getTransformationStoryBySlug, getAllStorysSlugs, getRelatedStories } from '@/lib/transformationStoriesSync';
import TransformationArticle from '@/components/transformation/TransformationArticle';

// TypeScript interfaces (these would normally be in a separate types file)
/**
 * @typedef {Object} TransformationStorySection
 * @property {string} label - Section label like "The Challenge"
 * @property {string} value - Section content
 */

/**
 * @typedef {Object} TransformationStoryClient
 * @property {string} name - Client company name
 * @property {string} description - Client company description
 * @property {string} logo - URL to client logo
 */

/**
 * @typedef {Object} TransformationStory
 * @property {string} id - Unique story identifier/slug
 * @property {string} title - Story title
 * @property {string} description - Story description
 * @property {TransformationStorySection[]} sections - Story sections (challenge, journey, outcome)
 * @property {TransformationStoryClient} client - Client information
 * @property {string} image - URL to hero image
 * @property {string} theme - Background theme color
 * @property {string} type - Story type ('showcase' or 'highlight')
 * @property {string} slug - URL slug
 */

// Generate static params for all stories (for static generation)
export async function generateStaticParams() {
  try {
    const slugs = await getAllStorysSlugs();
    return slugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return fallback slugs if Notion is unavailable during build
    return [
      { slug: 'retail' },
      { slug: 'fintech' },
      { slug: 'marketplace' },
      { slug: 'paragon' },
      { slug: 'youvit' },
      { slug: 'youvit-2' },
    ];
  }
}

// Generate metadata for each story page
export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  
  try {
    const story = await getTransformationStoryBySlug(slug);
    
    if (!story) {
      return {
        title: 'Transformation Story Not Found',
        description: 'The requested transformation story could not be found.',
      };
    }

    const title = `${story.title} - ${story.client.name} Transformation Story`;
    const description = story.description || story.sections?.[0]?.value || 
      `Learn how ${story.client.name} transformed their business with AltraByte's data analytics and AI automation solutions.`;

    return {
      title,
      description,
      alternates: {
        canonical: `/transformation-stories/${slug}`,
      },
      keywords: [
        'transformation story',
        'case study',
        story.client.name,
        'data analytics',
        'AI automation',
        'digital transformation',
        'business intelligence',
        'process optimization',
      ],
      openGraph: {
        title,
        description,
        type: 'article',
        url: `https://altrabyte.com/transformation-stories/${slug}`,
        images: story.image ? [{
          url: story.image,
          width: 1200,
          height: 630,
          alt: `${story.client.name} transformation story`,
        }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: story.image ? [story.image] : [],
      },
      // Structured data for article
      other: {
        'article:author': 'AltraByte',
        'article:section': 'Transformation Stories',
        'article:tag': 'transformation,case-study,data-analytics',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Transformation Story',
      description: 'AltraByte transformation story and case study.',
    };
  }
}

// Main page component
export default async function TransformationStoryPage(props) {
  const params = await props.params;
  const { slug } = params;
  
  try {
    const story = await getTransformationStoryBySlug(slug);
    
    const relatedStories = await getRelatedStories(slug, 2);
    
    if (!story) {
      notFound();
    }

    // Add structured data for the article
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": story.title,
      "description": story.description || story.sections?.[0]?.value,
      "image": story.image,
      "author": {
        "@type": "Organization",
        "name": "AltraByte",
        "url": "https://altrabyte.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AltraByte",
        "logo": {
          "@type": "ImageObject",
          "url": "https://altrabyte.com/images/logo-dark.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://altrabyte.com/transformation-stories/${slug}`
      },
      "about": {
        "@type": "Organization",
        "name": story.client.name,
        "description": story.client.description
      },
      "keywords": `transformation story, case study, ${story.client.name}, data analytics, AI automation`
    };

    return (
      <>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Main Article Component */}
        <TransformationArticle story={story} relatedStories={relatedStories} />
      </>
    );
  } catch (error) {
    console.error('Error loading transformation story:', error);
    notFound();
  }
}

// Revalidate every hour
export const revalidate = 3600;