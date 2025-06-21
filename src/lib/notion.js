// src/lib/notion.js
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const database = process.env.NOTION_DATABASE_ID;

function getPlainText(richText) {
  return richText?.map((text) => text.plain_text).join("") || "";
}

function getPropertyValue(page, propertyName) {
  const property = page.properties[propertyName];
  if (!property) return null;

  switch (property.type) {
    case "title":
      return getPlainText(property.title);
    case "rich_text":
      return getPlainText(property.rich_text);
    case "select":
      return property.select?.name || null;
    case "multi_select":
      return property.multi_select?.map((item) => item.name) || [];
    case "checkbox":
      return property.checkbox;
    case "url":
      return property.url;
    case "date":
      return property.date?.start || null;
    default:
      return null;
  }
}

export async function getProjects() {
  try {
    const response = await notion.databases.query({
      database_id: database,
      filter: { property: "Published", checkbox: { equals: true } },
      sorts: [{ property: "Date", direction: "descending" }],
    });

    return response.results.map((page) => ({
      id: page.id,
      title: getPropertyValue(page, "Content Tittle"),
      category: getPropertyValue(page, "Category"),
      client: getPropertyValue(page, "Client"),
      coverImage: getPropertyValue(page, "Cover Image"),
      date: getPropertyValue(page, "Date"),
      description: getPropertyValue(page, "Description"),
      featured: getPropertyValue(page, "Featured"),
      slug: getPropertyValue(page, "Slug"),
      technologies: getPropertyValue(page, "Technologies"),
      created: page.created_time,
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getProject(slug) {
  try {
    const response = await notion.databases.query({
      database_id: database,
      filter: {
        and: [
          { property: "Published", checkbox: { equals: true } },
          { property: "Slug", rich_text: { equals: slug } },
        ],
      },
    });

    if (!response.results.length) return null;

    const page = response.results[0];
    return {
      id: page.id,
      title: getPropertyValue(page, "Content Tittle"),
      category: getPropertyValue(page, "Category"),
      client: getPropertyValue(page, "Client"),
      coverImage: getPropertyValue(page, "Cover Image"),
      date: getPropertyValue(page, "Date"),
      description: getPropertyValue(page, "Description"),
      featured: getPropertyValue(page, "Featured"),
      slug: getPropertyValue(page, "Slug"),
      technologies: getPropertyValue(page, "Technologies"),
      created: page.created_time,
    };
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

export async function getProjectContent(id) {
  try {
    const blocks = await notion.blocks.children.list({ block_id: id });
    return blocks.results;
  } catch (error) {
    console.error("Error fetching content:", error);
    return [];
  }
}
