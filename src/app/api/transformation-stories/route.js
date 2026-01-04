// API route for transformation stories data
import { NextResponse } from 'next/server';
import { 
  getAllTransformationStories,
  getShowcaseStories,
  getHighlightStories,
  getTransformationStoryBySlug
} from '@/lib/transformationStoriesSync';

// Cache duration in seconds (5 minutes)
const CACHE_DURATION = 300;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'all';
    const slug = searchParams.get('slug');

    let data;
    
    // Handle individual story fetch by slug
    if (slug) {
      data = await getTransformationStoryBySlug(slug);
      if (!data) {
        return NextResponse.json(
          {
            success: false,
            error: 'Story not found',
            message: `Story with slug "${slug}" not found`,
            timestamp: Date.now()
          },
          { status: 404 }
        );
      }
    } else {
      // Handle collection fetches
      switch (type) {
        case 'showcase':
          data = await getShowcaseStories();
          break;
        case 'highlights':
          data = await getHighlightStories();
          break;
        case 'all':
        default:
          data = await getAllTransformationStories();
          break;
      }
    }

    const response = NextResponse.json({
      success: true,
      data,
      timestamp: Date.now(),
      type
    });

    // Set cache headers for better performance
    response.headers.set(
      'Cache-Control',
      `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${CACHE_DURATION * 2}`
    );

    return response;

  } catch (error) {
    console.error('API Error fetching transformation stories:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch transformation stories',
        message: error.message,
        timestamp: Date.now()
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS if needed
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}