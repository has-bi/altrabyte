const { Client } = require('@notionhq/client');

async function debugSchema() {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_TRANSFORMATION_STORIES_DATABASE_ID;

  if (!apiKey) {
    console.error('Error: NOTION_API_KEY is not defined in .env.local');
    return;
  }
  if (!databaseId) {
    console.error('Error: NOTION_TRANSFORMATION_STORIES_DATABASE_ID is not defined in .env.local');
    return;
  }

  const notion = new Client({ auth: apiKey });

  try {
    console.log(`Fetching database info for ID: ${databaseId}...`);
    const response = await notion.databases.retrieve({ database_id: databaseId });
    
    console.log('\n--- Database Properties ---');
    const properties = Object.keys(response.properties).sort();
    properties.forEach(prop => {
      const type = response.properties[prop].type;
      console.log(`- "${prop}" (${type})`);
    });
    console.log('---------------------------\n');

    console.log('--- Database Content ---');
    const contentResponse = await notion.databases.query({
      database_id: databaseId,
    });
    
    contentResponse.results.forEach(page => {
      const getRichText = (name) => page.properties[name]?.rich_text[0]?.plain_text || '';
      
      const title = page.properties.Title?.title[0]?.plain_text || 'Untitled';
      const featured = page.properties.Featured?.checkbox;
      const status = page.properties.Status?.select?.name;
      
      if (featured) {
        console.log(`\nFEATURED STORY: "${title}"`);
        console.log(`- Status: ${status}`);
        console.log(`- Client Name: "${getRichText('Client Name')}"`);
        console.log(`- Client Description: "${getRichText('Client Description')}"`);
        console.log(`- Challenge: "${getRichText('Challenge')}"`);
        console.log(`- Journey: "${getRichText('Journey')}"`);
        console.log(`- Outcome: "${getRichText('Outcome')}"`);
        console.log(`- Image URL: "${getRichText('Image URL')}"`);
        console.log(`- Theme Color: "${getRichText('Theme Color')}"`);
      }
    });
    console.log('---------------------------');
  } catch (error) {
    console.error('Error fetching database:', error.message);
    if (error.body) {
      console.error('Details:', error.body);
    }
  }
}

debugSchema();
