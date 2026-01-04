// Validation script for transformation stories setup
// Run with: node src/scripts/validateTransformationStories.js

import { config } from 'dotenv';
import { Client } from '@notionhq/client';

// Load environment variables
config({ path: '.env.local' });

const requiredEnvVars = [
  'NOTION_API_KEY',
  'NOTION_TRANSFORMATION_STORIES_DATABASE_ID'
];

const requiredProperties = [
  'Title',
  'Featured',
  'Client Name',
  'Client Description',
  'Client Logo URL',
  'Story ID',
  'Theme Color',
  'Challenge',
  'Journey',
  'Outcome',
  'Description',
  'CTA Text',
  'Image URL',
  'Status'
];

async function validateSetup() {
  console.log('🔍 Validating Transformation Stories Setup...\n');

  // Check environment variables
  console.log('1. Checking environment variables...');
  const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
  
  if (missingEnvVars.length > 0) {
    console.error(`❌ Missing environment variables: ${missingEnvVars.join(', ')}`);
    return false;
  }
  console.log('✅ All required environment variables found');

  // Check Notion connection
  console.log('\n2. Testing Notion API connection...');
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    
    // Test database access
    const database = await notion.databases.retrieve({
      database_id: process.env.NOTION_TRANSFORMATION_STORIES_DATABASE_ID
    });
    
    console.log(`✅ Connected to database: ${database.title[0]?.plain_text || 'Unnamed Database'}`);
  } catch (error) {
    console.error('❌ Failed to connect to Notion:', error.message);
    return false;
  }

  // Check database schema
  console.log('\n3. Validating database schema...');
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const database = await notion.databases.retrieve({
      database_id: process.env.NOTION_TRANSFORMATION_STORIES_DATABASE_ID
    });

    const actualProperties = Object.keys(database.properties);
    const missingProperties = requiredProperties.filter(
      prop => !actualProperties.includes(prop)
    );

    if (missingProperties.length > 0) {
      console.error(`❌ Missing database properties: ${missingProperties.join(', ')}`);
      console.log(`\nActual properties found: ${actualProperties.join(', ')}`);
      return false;
    }
    console.log('✅ All required database properties found');
  } catch (error) {
    console.error('❌ Failed to validate database schema:', error.message);
    return false;
  }

  // Check for data
  console.log('\n4. Checking for transformation stories data...');
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
      database_id: process.env.NOTION_TRANSFORMATION_STORIES_DATABASE_ID,
      filter: { property: "Status", select: { equals: "Published" } }
    });

    const stories = response.results;
    const featuredStories = stories.filter(story => 
      story.properties.Featured?.checkbox === true
    );
    const highlightStories = stories.filter(story => 
      story.properties.Featured?.checkbox !== true
    );

    console.log(`✅ Found ${stories.length} published stories total`);
    console.log(`   📋 ${featuredStories.length} featured stories (for showcase)`);
    console.log(`   📰 ${highlightStories.length} highlight stories`);

    if (stories.length === 0) {
      console.warn('⚠️  No published stories found. Add some stories to your database.');
    }

    // Validate story data quality
    let validationErrors = 0;
    stories.forEach((story, index) => {
      const title = story.properties.Title?.title[0]?.plain_text || 'Untitled';
      const isFeatured = story.properties.Featured?.checkbox;
      
      // Check required fields based on story type
      if (isFeatured) {
        const requiredForShowcase = ['Title', 'Client Name', 'Client Description', 'Client Logo URL', 'Challenge', 'Journey', 'Outcome', 'Image URL'];
        const missingFields = requiredForShowcase.filter(field => {
          const value = getPropertyValue(story.properties[field]);
          return !value || value.trim() === '';
        });
        
        if (missingFields.length > 0) {
          console.error(`❌ Featured story "${title}" missing: ${missingFields.join(', ')}`);
          validationErrors++;
        }
      } else {
        const requiredForHighlights = ['Title', 'Description', 'Client Logo URL', 'Image URL'];
        const missingFields = requiredForHighlights.filter(field => {
          const value = getPropertyValue(story.properties[field]);
          return !value || value.trim() === '';
        });
        
        if (missingFields.length > 0) {
          console.error(`❌ Highlight story "${title}" missing: ${missingFields.join(', ')}`);
          validationErrors++;
        }
      }
    });

    if (validationErrors === 0 && stories.length > 0) {
      console.log('✅ All story data is valid');
    }

  } catch (error) {
    console.error('❌ Failed to check story data:', error.message);
    return false;
  }

  console.log('\n🎉 Validation complete! Your transformation stories setup is ready to use.');
  return true;
}

function getPropertyValue(property) {
  if (!property) return null;

  switch (property.type) {
    case 'title':
      return property.title[0]?.plain_text || '';
    case 'rich_text':
      return property.rich_text[0]?.plain_text || '';
    case 'select':
      return property.select?.name || '';
    case 'checkbox':
      return property.checkbox;
    case 'url':
      return property.url || '';
    default:
      return '';
  }
}

// Run validation
validateSetup()
  .then((success) => {
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    console.error('Validation failed:', error);
    process.exit(1);
  });