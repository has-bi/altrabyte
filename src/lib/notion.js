// src/lib/notion.js - Fixed Version
import React from "react";
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

// Enhanced rich text renderer with formatting support
export function renderRichText(richText) {
  if (!richText || !Array.isArray(richText)) return "";

  return richText.map((text, idx) => {
    let content = text.plain_text;

    // Apply formatting with unique keys
    if (text.annotations?.bold) {
      content = React.createElement("strong", { key: `bold-${idx}` }, content);
    }
    if (text.annotations?.italic) {
      content = React.createElement("em", { key: `italic-${idx}` }, content);
    }
    if (text.annotations?.strikethrough) {
      content = React.createElement("s", { key: `strike-${idx}` }, content);
    }
    if (text.annotations?.underline) {
      content = React.createElement("u", { key: `underline-${idx}` }, content);
    }
    if (text.annotations?.code) {
      content = React.createElement(
        "code",
        {
          key: `code-${idx}`,
          className: "px-2 py-1 bg-gray-100 rounded text-sm font-mono",
        },
        content
      );
    }

    // Handle links
    if (text.href) {
      content = React.createElement(
        "a",
        {
          key: `link-${idx}`,
          href: text.href,
          className: "text-primary hover:text-primary-hover underline",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        content
      );
    }

    return content;
  });
}

// Group consecutive list items for proper rendering
function groupBlocks(blocks) {
  const grouped = [];
  let currentList = null;
  let currentListType = null;

  blocks.forEach((block) => {
    const blockType = block.type;

    if (
      blockType === "bulleted_list_item" ||
      blockType === "numbered_list_item"
    ) {
      const listType = blockType === "bulleted_list_item" ? "ul" : "ol";

      if (currentListType !== listType) {
        // Start new list
        if (currentList) {
          grouped.push(currentList);
        }
        currentList = {
          type: listType,
          items: [block],
          id: `list-${grouped.length}`,
        };
        currentListType = listType;
      } else {
        // Add to current list
        currentList.items.push(block);
      }
    } else {
      // End current list and add regular block
      if (currentList) {
        grouped.push(currentList);
        currentList = null;
        currentListType = null;
      }
      grouped.push(block);
    }
  });

  // Don't forget the last list
  if (currentList) {
    grouped.push(currentList);
  }

  return grouped;
}

// Comprehensive Notion block renderer
export function renderNotionBlock(block, index = 0) {
  // Handle grouped lists
  if (block.type === "ul" || block.type === "ol") {
    const ListTag = block.type;
    return React.createElement(
      ListTag,
      {
        key: block.id,
        className: "my-6 space-y-2",
      },
      block.items.map((item, idx) => renderNotionBlock(item, idx))
    );
  }

  const { type, id } = block;
  const value = block[type];

  if (!value) {
    console.warn(`No value found for block type: ${type}`);
    return null;
  }

  switch (type) {
    case "paragraph":
      if (!value.rich_text || value.rich_text.length === 0) {
        return React.createElement("div", { key: id, className: "h-6" }); // Empty line
      }
      return React.createElement(
        "p",
        {
          key: id,
          className: "text-secondary leading-[1.8] mb-8 text-lg",
        },
        renderRichText(value.rich_text)
      );

    case "heading_1":
      return React.createElement(
        "h2",
        {
          key: id,
          className:
            "text-3xl font-medium text-primary mt-16 mb-8 tracking-tight",
        },
        renderRichText(value.rich_text)
      );

    case "heading_2":
      return React.createElement(
        "h3",
        {
          key: id,
          className:
            "text-2xl font-medium text-primary mt-12 mb-6 tracking-tight",
        },
        renderRichText(value.rich_text)
      );

    case "heading_3":
      return React.createElement(
        "h4",
        {
          key: id,
          className:
            "text-xl font-medium text-primary mt-8 mb-4 tracking-tight",
        },
        renderRichText(value.rich_text)
      );

    case "bulleted_list_item":
      return React.createElement(
        "li",
        {
          key: id,
          className:
            "text-secondary leading-[1.8] mb-3 text-lg list-none relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-400 before:font-bold",
        },
        renderRichText(value.rich_text)
      );

    case "numbered_list_item":
      return React.createElement(
        "li",
        {
          key: id,
          className: "text-secondary leading-[1.8] mb-3 text-lg",
        },
        renderRichText(value.rich_text)
      );

    case "to_do":
      return React.createElement(
        "div",
        {
          key: id,
          className: "flex items-start space-x-3 mb-4",
        },
        [
          React.createElement("input", {
            key: `checkbox-${id}`,
            type: "checkbox",
            checked: value.checked,
            readOnly: true,
            className:
              "mt-1.5 w-4 h-4 text-primary rounded focus:ring-primary border-gray-300",
          }),
          React.createElement(
            "span",
            {
              key: `text-${id}`,
              className: `text-lg leading-[1.8] ${
                value.checked ? "line-through text-gray-400" : "text-secondary"
              }`,
            },
            renderRichText(value.rich_text)
          ),
        ]
      );

    case "quote":
      return React.createElement(
        "blockquote",
        {
          key: id,
          className:
            "my-12 pl-8 border-l-4 border-primary/30 bg-gray-50/50 py-6 rounded-r-xl",
        },
        React.createElement(
          "div",
          {
            className: "text-xl leading-relaxed text-secondary italic",
          },
          renderRichText(value.rich_text)
        )
      );

    case "callout":
      const icon = value.icon?.emoji || "💡";
      return React.createElement(
        "div",
        {
          key: id,
          className: "my-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl",
        },
        React.createElement(
          "div",
          {
            className: "flex items-start space-x-4",
          },
          [
            React.createElement(
              "span",
              {
                key: `icon-${id}`,
                className: "text-2xl",
              },
              icon
            ),
            React.createElement(
              "div",
              {
                key: `content-${id}`,
                className: "flex-1 text-lg leading-[1.8] text-secondary",
              },
              renderRichText(value.rich_text)
            ),
          ]
        )
      );

    case "code":
      const codeText = value.rich_text.map((text) => text.plain_text).join("");
      return React.createElement(
        "div",
        {
          key: id,
          className: "my-8",
        },
        [
          React.createElement(
            "pre",
            {
              key: `pre-${id}`,
              className:
                "bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto",
            },
            React.createElement(
              "code",
              {
                className: "font-mono text-sm leading-relaxed",
              },
              codeText
            )
          ),
          value.caption && value.caption.length > 0
            ? React.createElement(
                "p",
                {
                  key: `caption-${id}`,
                  className: "text-sm text-gray-500 mt-2 text-center",
                },
                renderRichText(value.caption)
              )
            : null,
        ].filter(Boolean)
      );

    case "image":
      const imageSrc =
        value.type === "external" ? value.external.url : value.file.url;
      return React.createElement(
        "div",
        {
          key: id,
          className: "my-16",
        },
        [
          React.createElement(
            "div",
            {
              key: `img-container-${id}`,
              className:
                "rounded-3xl overflow-hidden bg-gray-50 shadow-2xl shadow-black/10",
            },
            React.createElement("img", {
              src: imageSrc,
              alt: value.caption
                ? renderRichText(value.caption)
                : "Project image",
              className: "w-full h-auto",
            })
          ),
          value.caption && value.caption.length > 0
            ? React.createElement(
                "p",
                {
                  key: `img-caption-${id}`,
                  className:
                    "text-sm text-gray-500 mt-4 text-center leading-relaxed",
                },
                renderRichText(value.caption)
              )
            : null,
        ].filter(Boolean)
      );

    case "divider":
      return React.createElement(
        "div",
        {
          key: id,
          className: "my-16 flex justify-center",
        },
        React.createElement("div", {
          className: "w-24 h-px bg-gray-200",
        })
      );

    // Handle video, file, embed, bookmark, etc. with similar React.createElement approach
    case "video":
      const videoSrc =
        value.type === "external" ? value.external.url : value.file.url;

      // YouTube handling
      const youtubeMatch = videoSrc.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
      );
      if (youtubeMatch) {
        const videoId = youtubeMatch[1];
        return React.createElement(
          "div",
          {
            key: id,
            className: "my-16",
          },
          [
            React.createElement(
              "div",
              {
                key: `video-container-${id}`,
                className:
                  "rounded-3xl overflow-hidden bg-gray-50 shadow-2xl shadow-black/10",
              },
              React.createElement(
                "div",
                {
                  className: "relative aspect-video",
                },
                React.createElement("iframe", {
                  src: `https://www.youtube.com/embed/${videoId}`,
                  className: "absolute inset-0 w-full h-full",
                  title: "YouTube video",
                  frameBorder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowFullScreen: true,
                })
              )
            ),
            value.caption && value.caption.length > 0
              ? React.createElement(
                  "p",
                  {
                    key: `video-caption-${id}`,
                    className:
                      "text-sm text-gray-500 mt-4 text-center leading-relaxed",
                  },
                  renderRichText(value.caption)
                )
              : null,
          ].filter(Boolean)
        );
      }

      // Fallback for other video types
      return React.createElement(
        "div",
        {
          key: id,
          className: "my-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl",
        },
        React.createElement(
          "p",
          {
            className: "text-blue-700",
          },
          [
            "Video content: ",
            React.createElement(
              "a",
              {
                key: `video-link-${id}`,
                href: videoSrc,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "underline",
              },
              "View Video"
            ),
          ]
        )
      );

    default:
      console.warn(`Unsupported block type: ${type}`);
      return React.createElement(
        "div",
        {
          key: id,
          className:
            "my-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl",
        },
        React.createElement(
          "p",
          {
            className: "text-sm text-yellow-700",
          },
          `Unsupported block type: ${type}`
        )
      );
  }
}

// Enhanced content renderer that groups blocks properly
export function renderNotionContent(blocks) {
  if (!blocks || !Array.isArray(blocks)) return [];

  const groupedBlocks = groupBlocks(blocks);
  return groupedBlocks.map((block, index) => renderNotionBlock(block, index));
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
    const blocks = await notion.blocks.children.list({
      block_id: id,
      page_size: 100, // Ensure we get all blocks
    });
    return blocks.results;
  } catch (error) {
    console.error("Error fetching content:", error);
    return [];
  }
}
