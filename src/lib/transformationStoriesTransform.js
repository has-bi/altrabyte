// Data transformation functions for converting Notion data to component format

/**
 * Transform Notion transformation story data to Showcase component format
 * @param {Array} notionStories - Raw stories from Notion
 * @returns {Array} Stories formatted for TransformationStoriesShowcase component
 */
export function transformToShowcaseFormat(notionStories) {
  return notionStories
    .filter(story => story.featured && story.status === 'Published')
    .map(story => ({
      id: story.storyId || story.id,
      notionId: story.id, // Preserve original Notion UUID for block fetching
      theme: extractHexColor(story.themeColor) || "#F6EEEC", // Extract hex or default
      title: story.title,
      description: story.description,
      sections: [
        {
          label: "The Challenge",
          value: story.challenge || "Challenge description not available",
        },
        {
          label: "The Journey",
          value: story.journey || "Journey description not available",
        },
        {
          label: "The Outcome",
          value: story.outcome || "Outcome description not available",
        },
      ],
      client: {
        name: story.clientName,
        description: story.clientDescription,
        logo: story.clientLogoUrl || generateClientLogoPath(story.clientName),
      },
      image: story.imageUrl,
    }))
    .filter(story => story.client.name && story.title); // Only include stories with required data
}

/**
 * Transform Notion transformation story data to Highlights component format
 * @param {Array} notionStories - Raw stories from Notion
 * @returns {Array} Stories formatted for TransformationStoriesHighlights component
 */
export function transformToHighlightsFormat(notionStories) {
  return notionStories
    .filter(story => !story.featured && story.status === 'Published')
    .map(story => ({
      id: story.storyId || story.id,
      logo: story.clientLogoUrl || generateClientLogoPath(story.clientName || story.title), // Fallback for highlights if client name missing
      title: story.title,
      description: story.description || "Description not available",
      cta: story.ctaText || "View Case Study",
      image: story.imageUrl,
      imageVariant: determineImageVariant(story.storyId), // Determine based on pattern or story ID
    }))
    .filter(story => story.logo && story.title); // Only include stories with required data
}

/**
 * Generate client logo path from client name
 * @param {string} clientName - Name of the client
 * @returns {string} Path to the logo image
 */
function generateClientLogoPath(clientName) {
  if (!clientName) return null;
  const slug = clientName.toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars (except spaces and dashes)
    .trim()
    .replace(/\s+/g, '-'); // Replace spaces with dashes
  return `/images/client/${slug}.png`;
}

/**
 * Extract hex color from various formats (e.g. "bg-[#123456]" or "#123456")
 */
function extractHexColor(input) {
  if (!input) return null;
  // Match hex code inside brackets or standalone
  const match = input.match(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/);
  return match ? `#${match[1]}` : null;
}

/**
 * Determine image variant based on story ID or other criteria
 * @param {string} storyId - The story identifier
 * @returns {string} Image variant type
 */
function determineImageVariant(storyId) {
  // You can customize this logic based on your needs
  // For now, alternating between "standard" and "overlay"
  const overlayIds = ['youvit', 'youvit-2'];
  return overlayIds.includes(storyId) ? 'overlay' : 'standard';
}

/**
 * Validate that a story has all required fields for showcase format
 * @param {Object} story - Notion story object
 * @returns {boolean} Whether story is valid for showcase
 */
export function validateShowcaseStory(story) {
  const required = [
    'title',
    'clientName',
    'clientDescription', 
    // 'clientLogoUrl', // Not required, auto-generated
    'challenge',
    'journey',
    'outcome',
    'imageUrl'
  ];
  
  return required.every(field => story[field] && story[field].trim().length > 0);
}

/**
 * Validate that a story has all required fields for highlights format
 * @param {Object} story - Notion story object
 * @returns {boolean} Whether story is valid for highlights
 */
export function validateHighlightStory(story) {
  const required = [
    'title',
    'description',
    // 'clientLogoUrl', // Not required, auto-generated
    'imageUrl'
  ];
  
  return required.every(field => story[field] && story[field].trim().length > 0);
}

/**
 * Get fallback data when Notion is unavailable
 * This ensures your site never breaks even if Notion is down
 */
export function getFallbackShowcaseData() {
  return [
    {
      id: "retail",
      theme: "bg-[#F6EEEC]",
      title: "From Spreadsheets to Systems",
      sections: [
        {
          label: "The Challenge",
          value: "All data trapped in Excel, zero infrastructure",
        },
        { label: "The Journey", value: "Foundation → Automation → Intelligence" },
        {
          label: "The Outcome",
          value: "Real-time visibility, eliminated manual reporting",
        },
      ],
      client: {
        name: "Rose All Day Cosmetics",
        description: "Startup Cosmetics Brand",
        logo: "/images/client/rose-all-day-cosmetics.png",
      },
      image: "/images/client/RADC-transformations.png",
    },
    {
      id: "fintech",
      theme: "bg-[#FCE9EE]",
      title: "From Chaos to Clarity",
      sections: [
        {
          label: "The Challenge",
          value: "Scattered data, no decision-making capability",
        },
        {
          label: "The Journey",
          value: "Data literacy → BI infrastructure → Intelligent insights",
        },
        {
          label: "The Outcome",
          value: "Data-driven decisions, scalable systems",
        },
      ],
      client: {
        name: "Amser",
        description: "Distribution Company",
        logo: "/images/client/Amser.png",
      },
      image: "/images/client/Amser-transformations.png",
    },
    {
      id: "marketplace",
      theme: "bg-[#E6F6F1]",
      title: "From Manual to Automated",
      sections: [
        { label: "The Challenge", value: "Multiple systems, everything manual" },
        {
          label: "The Journey",
          value: "Integration → RPA deployment → 24/7 automation",
        },
        {
          label: "The Outcome",
          value: "Eliminated weeks of manual work, continuous intelligence",
        },
      ],
      client: {
        name: "Paragon",
        description: "Major Beauty Retailer",
        logo: "/images/client/Paragon-Black.png",
      },
      image: "/images/client/paragon-transformations.png",
    },
  ];
}

export function getFallbackHighlightsData() {
  return [
    {
      id: "paragon",
      logo: "/images/client/Paragon-Black.png",
      title: "When Managing 10+ Brands Across 5 Platforms Became Impossible",
      description:
        "An eCommerce operations team at a top-3 Indonesian beauty brand was drowning in data chaos, manually compiling reports for 50+ brand-platform combinations. Our intelligence system turned their daily nightmare into streamlined operations.",
      cta: "View Case Study",
      image: "/images/client/paragon-transformationsStories.png",
      imageVariant: "standard",
    },
    {
      id: "youvit",
      logo: "/images/client/Youvit-Black.png",
      title: "Why This Health Brand's Founder Never Asks \"Can Someone Pull That Data?\" Anymore",
      description:
        "A founder was frustrated spending hours waiting for simple data answers. Now anyone in the company gets complex insights in minutes by just asking questions in plain English.",
      cta: "View Case Study",
      image: "/images/client/youit - transformationsStories.png",
      imageVariant: "overlay",
    },
    {
      id: "youvit-2",
      logo: "/images/client/Youvit-Black.png",
      title: "How a Health Supplement Brand Eliminated 88% of Document Processing Costs in 30 Days",
      description:
        "Transformed manual document processing into an intelligent system that automatically extracts data from seven different distributor formats. This cloud-based solution reduced processing costs by 88% and increased speed by 92%.",
      cta: "View Case Study",
      image: "/images/client/youvit2- transformationsStories.png",
      imageVariant: "standard",
    },
  ];
}

/**
 * Utility function to safely access nested properties
 * @param {Object} obj - Object to access
 * @param {string} path - Dot notation path
 * @param {any} defaultValue - Default value if path doesn't exist
 * @returns {any} Value at path or default
 */
export function safeGet(obj, path, defaultValue = '') {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : defaultValue;
  }, obj);
}