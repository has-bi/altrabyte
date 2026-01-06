
const { getTransformationStoryBySlug, clearTransformationStoriesCache } = require('../lib/transformationStoriesSync');
// require('dotenv').config({ path: '.env.local' });

async function run() {
  console.log('--- Debugging Sync Logic ---');
  
  // Clear cache first to force fetch
  // Note: clearTransformationStoriesCache might not work if cache is in-memory of server process
  // But here we are in a new process, so cache starts empty.
  
  try {
    const slug = 'retail';
    console.log(`Calling getTransformationStoryBySlug('${slug}')...`);
    
    const story = await getTransformationStoryBySlug(slug);
    
    if (story) {
      console.log('✅ Story FOUND!');
      console.log('Title:', story.title);
      console.log('ID:', story.id);
      console.log('Slug:', story.slug);
      console.log('Sections:', story.sections?.length);
    } else {
      console.log('❌ Story NOT FOUND.');
    }
  } catch (error) {
    console.error('CRITICAL ERROR:', error);
  }
}

run();
