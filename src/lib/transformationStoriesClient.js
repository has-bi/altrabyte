// Client-side utilities for fetching transformation stories data
"use client";

/**
 * Client-side data fetching with API route fallback
 */
export async function fetchTransformationStories(type = 'all') {
  try {
    // Try API route first for better caching and performance
    const response = await fetch(`/api/transformation-stories?type=${type}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API response not OK: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.message || 'API returned error');
    }

  } catch (error) {
    console.error('Error fetching transformation stories via API:', error);
    
    // Fallback to direct sync functions (client-side)
    try {
      const { 
        getAllTransformationStories,
        getShowcaseStories,
        getHighlightStories
      } = await import('./transformationStoriesSync');

      switch (type) {
        case 'showcase':
          return await getShowcaseStories();
        case 'highlights':
          return await getHighlightStories();
        case 'all':
        default:
          return await getAllTransformationStories();
      }
    } catch (fallbackError) {
      console.error('Error with fallback data fetch:', fallbackError);
      
      // Final fallback to hardcoded data
      const { getFallbackShowcaseData, getFallbackHighlightsData } = await import('./transformationStoriesTransform');
      
      switch (type) {
        case 'showcase':
          return getFallbackShowcaseData();
        case 'highlights':
          return getFallbackHighlightsData();
        case 'all':
        default:
          return {
            showcase: getFallbackShowcaseData(),
            highlights: getFallbackHighlightsData()
          };
      }
    }
  }
}

/**
 * React hook for transformation stories data with loading state
 */
import { useState, useEffect } from 'react';

export function useTransformationStories(type = 'all') {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchTransformationStories(type);
        setData(result);
      } catch (err) {
        console.error('Error in useTransformationStories:', err);
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [type]);

  return { data, loading, error, refetch: () => fetchData() };
}

/**
 * Prefetch transformation stories for better perceived performance
 */
export async function prefetchTransformationStories() {
  try {
    // Prefetch both types in parallel
    await Promise.all([
      fetchTransformationStories('showcase'),
      fetchTransformationStories('highlights')
    ]);
    console.log('✓ Transformation stories prefetched successfully');
  } catch (error) {
    console.error('Error prefetching transformation stories:', error);
  }
}