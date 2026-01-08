// Sync service for transformation stories with caching and error handling

import { 
  getFeaturedTransformationStories, 
  getHighlightTransformationStories 
} from './notion.js';
import { 
  transformToShowcaseFormat, 
  transformToHighlightsFormat,
  getFallbackShowcaseData,
  getFallbackHighlightsData,
  validateShowcaseStory,
  validateHighlightStory 
} from './transformationStoriesTransform.js';
import { getProjectContent } from './notion.js';

// In-memory cache
const cache = new Map();
const CACHE_DURATION = 60 * 1000; // 1 minute in milliseconds

/**
 * Cache utilities
 */
function getCacheKey(type) {
  return `transformation-stories-${type}`;
}

function isCacheValid(timestamp) {
  return Date.now() - timestamp < CACHE_DURATION;
}

function getFromCache(key) {
  const cached = cache.get(key);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }
  return null;
}

function setCache(key, data) {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
}

/**
 * Fetch showcase stories with caching and fallback
 */
export async function getShowcaseStories() {
  const cacheKey = getCacheKey('showcase');
  
  try {
    // Try cache first
    const cachedData = getFromCache(cacheKey);
    if (cachedData) {
      return cachedData;
    }


    
    // Fetch from Notion
    const notionStories = await getFeaturedTransformationStories();
    
    if (!notionStories || notionStories.length === 0) {
      console.warn('⚠ No featured stories found in Notion, using fallback data');
      const fallbackData = getFallbackShowcaseData();
      setCache(cacheKey, fallbackData);
      return fallbackData;
    }

    // Transform data
    const transformedStories = transformToShowcaseFormat(notionStories);
    
    if (transformedStories.length === 0) {
      console.warn('⚠ No valid showcase stories after transformation, using fallback data');
      const fallbackData = getFallbackShowcaseData();
      setCache(cacheKey, fallbackData);
      return fallbackData;
    }

    // Validate stories
    const validStories = transformedStories.filter(story => {
      const isValid = validateShowcaseStory({
        title: story.title,
        clientName: story.client.name,
        clientDescription: story.client.description,
        clientLogoUrl: story.client.logo,
        challenge: story.sections[0]?.value,
        journey: story.sections[1]?.value,
        outcome: story.sections[2]?.value,
        imageUrl: story.image
      });
      
      if (!isValid) {
        console.warn(`⚠ Invalid showcase story: ${story.title || 'Unknown'}`);
      }
      return isValid;
    });

    // We now fetch the cover image directly from the Notion property "cover" in getTransformationStories
    // So we don't need to fetch page content here anymore.
    
    const finalData = validStories.length > 0 ? validStories : getFallbackShowcaseData();
    setCache(cacheKey, finalData);
    
    return finalData;

  } catch (error) {
    console.error('✗ Error fetching showcase stories:', error);
    
    // Try to return cached data even if expired
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      console.log('⟳ Using expired cache data due to error');
      return cachedData.data;
    }

    // Final fallback

    return getFallbackShowcaseData();
  }
}

/**
 * Fetch highlight stories with caching and fallback
 */
export async function getHighlightStories() {
  const cacheKey = getCacheKey('highlights');
  
  try {
    // Try cache first
    const cachedData = getFromCache(cacheKey);
    if (cachedData) {
      return cachedData;
    }


    const notionStories = await getHighlightTransformationStories();
    
    if (!notionStories || notionStories.length === 0) {
      console.warn('⚠ No highlight stories found in Notion, using fallback data');
      const fallbackData = getFallbackHighlightsData();
      setCache(cacheKey, fallbackData);
      return fallbackData;
    }

    // Transform data
    const transformedStories = transformToHighlightsFormat(notionStories);
    
    if (transformedStories.length === 0) {
      console.warn('⚠ No valid highlight stories after transformation, using fallback data');
      const fallbackData = getFallbackHighlightsData();
      setCache(cacheKey, fallbackData);
      return fallbackData;
    }

    // Validate stories
    const validStories = transformedStories.filter(story => {
      const isValid = validateHighlightStory({
        title: story.title,
        description: story.description,
        clientLogoUrl: story.logo,
        imageUrl: story.image
      });
      
      if (!isValid) {
        console.warn(`⚠ Invalid highlight story: ${story.title || 'Unknown'}`);
      }
      return isValid;
    });

    const finalData = validStories.length > 0 ? validStories : getFallbackHighlightsData();
    setCache(cacheKey, finalData);
    
    return finalData;

  } catch (error) {
    console.error('✗ Error fetching highlight stories:', error);
    
    // Try to return cached data even if expired
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      console.log('⟳ Using expired cache data due to error');
      return cachedData.data;
    }

    // Final fallback
    return getFallbackHighlightsData();
  }
}

/**
 * Fetch all transformation stories data at once
 */
export async function getAllTransformationStories() {
  try {
    const [showcaseStories, highlightStories] = await Promise.all([
      getShowcaseStories(),
      getHighlightStories()
    ]);

    return {
      showcase: showcaseStories,
      highlights: highlightStories
    };
  } catch (error) {
    console.error('✗ Error fetching all transformation stories:', error);
    return {
      showcase: getFallbackShowcaseData(),
      highlights: getFallbackHighlightsData()
    };
  }
}

/**
 * Preload transformation stories data for better performance
 * Call this during application initialization
 */
export async function preloadTransformationStories() {
  try {
    await getAllTransformationStories();
  } catch (error) {
    console.error('✗ Error preloading transformation stories:', error);
  }
}

/**
 * Clear transformation stories cache
 * Useful for development or when you want to force refresh
 */
export function clearTransformationStoriesCache() {
  const showcaseKey = getCacheKey('showcase');
  const highlightsKey = getCacheKey('highlights');
  
  cache.delete(showcaseKey);
  cache.delete(highlightsKey);
}

/**
 * Get cache status for debugging
 */
export function getCacheStatus() {
  const showcaseKey = getCacheKey('showcase');
  const highlightsKey = getCacheKey('highlights');
  
  const showcaseCache = cache.get(showcaseKey);
  const highlightsCache = cache.get(highlightsKey);
  
  return {
    showcase: {
      exists: !!showcaseCache,
      valid: showcaseCache ? isCacheValid(showcaseCache.timestamp) : false,
      age: showcaseCache ? Date.now() - showcaseCache.timestamp : null,
      count: showcaseCache?.data?.length || 0
    },
    highlights: {
      exists: !!highlightsCache,
      valid: highlightsCache ? isCacheValid(highlightsCache.timestamp) : false,
      age: highlightsCache ? Date.now() - highlightsCache.timestamp : null,
      count: highlightsCache?.data?.length || 0
    }
  };
}

/**
 * Fetch individual transformation story by slug
 */
export async function getTransformationStoryBySlug(slug) {
  const cacheKey = getCacheKey(`story-${slug}`);
  
  try {
    // Try cache first
    const cachedData = getFromCache(cacheKey);
    if (cachedData) {
      return cachedData;
    }


    
    // Get all stories and find the one with matching slug/id
    const allStories = await getAllTransformationStories();
    const showcaseStories = allStories.showcase || [];
    const highlightStories = allStories.highlights || [];
    
    // Look for the story in both showcase and highlights
    let story = showcaseStories.find(s => s.id === slug);
    let storyType = 'showcase';
    
    if (!story) {
      story = highlightStories.find(s => s.id === slug);
      storyType = 'highlight';
    }
    
    if (!story) {
      console.warn(`⚠ Story not found: ${slug}`);
      return null;
    }

    // Enhance the story with additional data structure for article page
    const enhancedStory = {
      ...story,
      type: storyType,
      slug: slug,
      // Add detailed sections if not already present
      sections: story.sections || [
        { label: "The Challenge", value: story.challenge || story.description },
        { label: "The Journey", value: story.journey || "Journey details not available" },
        { label: "The Outcome", value: story.outcome || "Outcome details not available" }
      ]
    };

    // Fetch full page content (blocks)
    const content = await getProjectContent(story.notionId);
    enhancedStory.content = content;

    setCache(cacheKey, enhancedStory);
    return enhancedStory;

  } catch (error) {
    console.error(`✗ Error fetching story ${slug}:`, error);
    
    // Try to return cached data even if expired
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      console.log('⟳ Using expired cache data due to error');
      return cachedData.data;
    }

    return null;
  }
}

/**
 * Get related stories for a given story
 * @param {string} currentSlug - The slug of the current story to exclude
 * @param {number} limit - Number of related stories to return
 */
export async function getRelatedStories(currentSlug, limit = 2) {
  try {
    const allStories = await getAllTransformationStories();
    const showcaseStories = allStories.showcase || [];
    const highlightStories = allStories.highlights || [];
    
    // Combine all stories
    const all = [...showcaseStories, ...highlightStories];
    
    // Filter out current story
    const filtered = all.filter(story => story.id !== currentSlug);
    
    // Check if we have enough stories
    if (filtered.length === 0) return [];
    
    // Basic randomization (shuffle) to keep it fresh
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    
    // Return top N
    return shuffled.slice(0, limit).map(story => ({
      ...story,
      // Ensure these properties exist for the card
      link: `/transformation-stories/${story.id}`,
      client: story.client?.name || story.title, // Fallback
      logo: story.logo || story.client?.logo, // Ensure logo is available at root for both Showcase and Highlight types
      theme: story.theme || "#F9F3F2" // Fallback theme
    }));
    
  } catch (error) {
    console.error('✗ Error fetching related stories:', error);
    return [];
  }
}

/**
 * Get all available story slugs for generating static paths
 */
export async function getAllStorysSlugs() {
  try {
    const allStories = await getAllTransformationStories();
    const showcaseStories = allStories.showcase || [];
    const highlightStories = allStories.highlights || [];
    
    const slugs = [
      ...showcaseStories.map(story => story.id),
      ...highlightStories.map(story => story.id)
    ];
    
    return [...new Set(slugs)]; // Remove duplicates
  } catch (error) {
    console.error('✗ Error fetching story slugs:', error);
    // Return fallback slugs
    return ['retail', 'fintech', 'marketplace', 'paragon', 'youvit', 'youvit-2'];
  }
}

/**
 * Health check for Notion connection
 */
export async function checkNotionConnection() {
  try {
    // Try to fetch a small amount of data to test connection
    await getFeaturedTransformationStories();
    return { status: 'connected', error: null };
  } catch (error) {
    return { 
      status: 'error', 
      error: error.message,
      fallback: 'Will use cached or fallback data'
    };
  }
}