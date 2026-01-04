// src/lib/notion.js - Fixed Version with Server-Side Column Support
import React from "react";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const database = process.env.NOTION_TRANSFORMATION_STORIES_DATABASE_ID;

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
    case "status":
      return property.status?.name || null;
    default:
      return null;
  }
}

// Enhanced rich text renderer with formatting support
export function renderRichText(richText) {
  if (!richText || !Array.isArray(richText)) {
    console.log("renderRichText received:", richText);
    return "";
  }

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
          className:
            "px-2 py-1 bg-gray-100 rounded text-sm font-mono text-gray-800",
        },
        content
      );
    }

    // Handle color annotations
    if (text.annotations?.color && text.annotations.color !== "default") {
      const colorClass = getColorClass(text.annotations.color);
      content = React.createElement(
        "span",
        {
          key: `color-${idx}`,
          className: colorClass,
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

// Helper function to get color classes
function getColorClass(color) {
  const colorMap = {
    gray: "text-gray-600",
    brown: "text-amber-700",
    orange: "text-orange-600",
    yellow: "text-yellow-600",
    green: "text-green-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
    pink: "text-pink-600",
    red: "text-red-600",
    gray_background: "bg-gray-100 text-gray-800 px-2 py-1 rounded",
    brown_background: "bg-amber-100 text-amber-800 px-2 py-1 rounded",
    orange_background: "bg-orange-100 text-orange-800 px-2 py-1 rounded",
    yellow_background: "bg-yellow-100 text-yellow-800 px-2 py-1 rounded",
    green_background: "bg-green-100 text-green-800 px-2 py-1 rounded",
    blue_background: "bg-blue-100 text-blue-800 px-2 py-1 rounded",
    purple_background: "bg-purple-100 text-purple-800 px-2 py-1 rounded",
    pink_background: "bg-pink-100 text-pink-800 px-2 py-1 rounded",
    red_background: "bg-red-100 text-red-800 px-2 py-1 rounded",
  };
  return colorMap[color] || "text-gray-600";
}

// Basic syntax highlighting function
function syntaxHighlight(code, language) {
  // Server-safe HTML escaping
  const escapeHtml = (text) => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  let highlightedCode = escapeHtml(code);

  // Apply syntax highlighting based on language
  switch (language?.toLowerCase()) {
    case "javascript":
    case "js":
      // Keywords
      highlightedCode = highlightedCode.replace(
        /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|try|catch|throw|new|this|super|extends|static|typeof|instanceof)\b/g,
        '<span style="color: #c792ea;">$1</span>'
      );
      // Strings
      highlightedCode = highlightedCode.replace(
        /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g,
        '<span style="color: #c3e88d;">$1$2$1</span>'
      );
      // Comments
      highlightedCode = highlightedCode.replace(
        /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
        '<span style="color: #546e7a; font-style: italic;">$1</span>'
      );
      // Numbers
      highlightedCode = highlightedCode.replace(
        /\b(\d+(?:\.\d+)?)\b/g,
        '<span style="color: #f78c6c;">$1</span>'
      );
      break;

    case "python":
    case "py":
      // Keywords
      highlightedCode = highlightedCode.replace(
        /\b(def|class|if|elif|else|for|while|try|except|finally|import|from|as|return|yield|lambda|with|global|nonlocal|assert|break|continue|pass|raise|async|await)\b/g,
        '<span style="color: #c792ea;">$1</span>'
      );
      // Strings
      highlightedCode = highlightedCode.replace(
        /(["'])((?:\\.|(?!\1)[^\\])*?)\1/g,
        '<span style="color: #c3e88d;">$1$2$1</span>'
      );
      // Comments
      highlightedCode = highlightedCode.replace(
        /#.*$/gm,
        '<span style="color: #546e7a; font-style: italic;">$&</span>'
      );
      // Numbers
      highlightedCode = highlightedCode.replace(
        /\b(\d+(?:\.\d+)?)\b/g,
        '<span style="color: #f78c6c;">$1</span>'
      );
      break;

    case "css":
      // Properties
      highlightedCode = highlightedCode.replace(
        /([a-zA-Z-]+)(\s*:)/g,
        '<span style="color: #82aaff;">$1</span>$2'
      );
      // Values
      highlightedCode = highlightedCode.replace(
        /:\s*([^;{}]+)(;|$)/g,
        ': <span style="color: #c3e88d;">$1</span>$2'
      );
      // Selectors
      highlightedCode = highlightedCode.replace(
        /^([.#]?[a-zA-Z0-9_-]+)(\s*{)/gm,
        '<span style="color: #ffcb6b;">$1</span>$2'
      );
      break;

    case "html":
    case "xml":
      // Tags
      highlightedCode = highlightedCode.replace(
        /(&lt;\/?)([a-zA-Z0-9-]+)(.*?)(&gt;)/g,
        '$1<span style="color: #f07178;">$2</span><span style="color: #c792ea;">$3</span>$4'
      );
      // Attributes
      highlightedCode = highlightedCode.replace(
        /([a-zA-Z-]+)(=)(["'])(.*?)\3/g,
        '<span style="color: #c792ea;">$1</span>$2<span style="color: #c3e88d;">$3$4$3</span>'
      );
      break;

    case "json":
      // Keys
      highlightedCode = highlightedCode.replace(
        /"([^"]+)"(\s*:)/g,
        '<span style="color: #82aaff;">"$1"</span>$2'
      );
      // String values
      highlightedCode = highlightedCode.replace(
        /:\s*"([^"]*)"/g,
        ': <span style="color: #c3e88d;">"$1"</span>'
      );
      // Numbers, booleans, null
      highlightedCode = highlightedCode.replace(
        /:\s*(true|false|null|\d+(?:\.\d+)?)/g,
        ': <span style="color: #f78c6c;">$1</span>'
      );
      break;

    case "sql":
      // Keywords
      highlightedCode = highlightedCode.replace(
        /\b(SELECT|FROM|WHERE|JOIN|INNER|LEFT|RIGHT|OUTER|ON|GROUP|BY|ORDER|HAVING|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|TABLE|DATABASE|INDEX|PRIMARY|KEY|FOREIGN|REFERENCES|NOT|NULL|DEFAULT|AUTO_INCREMENT|UNIQUE|CONSTRAINT)\b/gi,
        '<span style="color: #c792ea;">$1</span>'
      );
      // Strings
      highlightedCode = highlightedCode.replace(
        /(["'])((?:\\.|(?!\1)[^\\])*?)\1/g,
        '<span style="color: #c3e88d;">$1$2$1</span>'
      );
      // Comments
      highlightedCode = highlightedCode.replace(
        /(--.*$|\/\*[\s\S]*?\*\/)/gm,
        '<span style="color: #546e7a; font-style: italic;">$1</span>'
      );
      break;

    case "bash":
    case "shell":
    case "sh":
      // Commands
      highlightedCode = highlightedCode.replace(
        /\b(cd|ls|mkdir|rm|cp|mv|chmod|chown|grep|find|sort|uniq|head|tail|cat|less|more|echo|printf|export|alias|history|ps|top|kill|jobs|bg|fg|nohup|crontab|sudo|su|ssh|scp|rsync|curl|wget|git|npm|pip|docker|kubectl)\b/g,
        '<span style="color: #c792ea;">$1</span>'
      );
      // Strings
      highlightedCode = highlightedCode.replace(
        /(["'])((?:\\.|(?!\1)[^\\])*?)\1/g,
        '<span style="color: #c3e88d;">$1$2$1</span>'
      );
      // Comments
      highlightedCode = highlightedCode.replace(
        /#.*$/gm,
        '<span style="color: #546e7a; font-style: italic;">$&</span>'
      );
      // Variables
      highlightedCode = highlightedCode.replace(
        /\$[a-zA-Z_][a-zA-Z0-9_]*/g,
        '<span style="color: #ffcb6b;">$&</span>'
      );
      break;

    default:
      // For unknown languages, apply basic highlighting
      // Strings
      highlightedCode = highlightedCode.replace(
        /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g,
        '<span style="color: #c3e88d;">$1$2$1</span>'
      );
      // Numbers
      highlightedCode = highlightedCode.replace(
        /\b(\d+(?:\.\d+)?)\b/g,
        '<span style="color: #f78c6c;">$1</span>'
      );
      break;
  }

  return highlightedCode;
}

// Recursively fetch all child blocks server-side
async function getAllChildBlocks(blockId) {
  try {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
    });

    const blocks = [];

    for (const block of response.results) {
      // Add the block itself
      blocks.push(block);

      // If it has children, fetch them recursively
      if (block.has_children) {
        const children = await getAllChildBlocks(block.id);
        // Add children as a property
        block.children = children;
      }
    }

    return blocks;
  } catch (error) {
    console.error("Error fetching child blocks:", error);
    return [];
  }
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

// Enhanced Notion block renderer with proper bullet points and Notion-style callouts
export function renderNotionBlock(block, index = 0) {
  // Handle grouped lists - this is the key fix for bullet points
  if (block.type === "ul" || block.type === "ol") {
    const ListTag = block.type;
    return React.createElement(
      ListTag,
      {
        key: block.id,
        className: `my-6 space-y-2 ${
          ListTag === "ul"
            ? "list-disc list-inside ml-6"
            : "list-decimal list-inside ml-6"
        }`,
        style:
          ListTag === "ul"
            ? { listStyleType: "disc" }
            : { listStyleType: "decimal" },
      },
      block.items.map((item, idx) => renderNotionBlock(item, idx))
    );
  }

  const { type, id } = block;
  const value = block[type];

  if (!value && type !== "column_list" && type !== "column") {
    console.warn(`No value found for block type: ${type}`, block);
    return null;
  }

  switch (type) {
    case "paragraph":
      if (!value.rich_text || value.rich_text.length === 0) {
        return React.createElement("div", { key: id, className: "h-6" });
      }
      return React.createElement(
        "p",
        {
          key: id,
          className: "text-gray-900 leading-[1.8] mb-8 text-lg max-w-none",
        },
        renderRichText(value.rich_text)
      );

    case "heading_1":
      return React.createElement(
        "h2",
        {
          key: id,
          className:
            "text-3xl font-medium text-gray-900 mt-16 mb-8 tracking-tight",
        },
        renderRichText(value.rich_text)
      );

    case "heading_2":
      return React.createElement(
        "h3",
        {
          key: id,
          className:
            "text-2xl font-medium text-gray-900 mt-12 mb-6 tracking-tight",
        },
        renderRichText(value.rich_text)
      );

    case "heading_3":
      return React.createElement(
        "h4",
        {
          key: id,
          className:
            "text-xl font-medium text-gray-900 mt-8 mb-4 tracking-tight",
        },
        renderRichText(value.rich_text)
      );

    case "bulleted_list_item":
      const bulletText = value.rich_text || value.text || [];
      if (bulletText.length === 0) {
        return React.createElement("li", {
          key: id,
          className: "h-4",
          style: { listStyleType: "disc", display: "list-item" },
        });
      }

      return React.createElement(
        "li",
        {
          key: id,
          className: "text-gray-900 leading-[1.8] mb-3 text-lg",
          style: {
            listStyleType: "disc",
            display: "list-item",
            marginLeft: "1.5rem",
          },
        },
        [
          renderRichText(bulletText),
          // Render nested children if they exist
          value.children && value.children.length > 0
            ? React.createElement(
                "ul",
                {
                  key: `nested-${id}`,
                  className: "mt-2 ml-4 space-y-1",
                  style: { listStyleType: "disc" },
                },
                value.children.map((child, idx) =>
                  renderNotionBlock(child, idx)
                )
              )
            : null,
        ].filter(Boolean)
      );

    case "numbered_list_item":
      const numberedText = value.rich_text || value.text || [];
      if (numberedText.length === 0) {
        return React.createElement("li", {
          key: id,
          className: "h-4",
          style: { listStyleType: "decimal", display: "list-item" },
        });
      }

      return React.createElement(
        "li",
        {
          key: id,
          className: "text-gray-900 leading-[1.8] mb-3 text-lg",
          style: {
            listStyleType: "decimal",
            display: "list-item",
            marginLeft: "1.5rem",
          },
        },
        [
          renderRichText(numberedText),
          // Render nested children if they exist
          value.children && value.children.length > 0
            ? React.createElement(
                "ol",
                {
                  key: `nested-${id}`,
                  className: "mt-2 ml-4 space-y-1",
                  style: { listStyleType: "decimal" },
                },
                value.children.map((child, idx) =>
                  renderNotionBlock(child, idx)
                )
              )
            : null,
        ].filter(Boolean)
      );

    case "to_do":
      return React.createElement(
        "div",
        {
          key: id,
          className:
            "flex items-start space-x-4 mb-6 p-4 rounded-lg hover:bg-gray-50/50 transition-colors",
        },
        [
          React.createElement("input", {
            key: `checkbox-${id}`,
            type: "checkbox",
            checked: value.checked,
            readOnly: true,
            className:
              "mt-1.5 w-5 h-5 text-primary rounded focus:ring-primary border-gray-300 cursor-default",
          }),
          React.createElement(
            "span",
            {
              key: `text-${id}`,
              className: `text-lg leading-[1.8] max-w-none ${
                value.checked ? "line-through text-gray-400" : "text-gray-900"
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
            "my-6 pl-6 py-2 border-l-[6px] border-gray-400 bg-gray-50 rounded-r-lg",
          style: {
            borderLeftWidth: "4px",
            borderLeftColor: "#9ca3af", // gray-400
            borderLeftStyle: "solid",
          },
        },
        React.createElement(
          "div",
          {
            className:
              "ml-3 text-xl leading-relaxed font-normal italic text-gray-900 max-w-none",
          },
          renderRichText(value.rich_text)
        )
      );

    case "callout":
      const icon = value.icon?.emoji || value.icon?.external?.url || "💡";

      return React.createElement(
        "div",
        {
          key: id,
          className:
            "my-8 flex items-start space-x-4 p-4 bg-gray-100 rounded-lg border-l-4 border-gray-300",
        },
        [
          // Icon section
          React.createElement(
            "div",
            {
              key: `icon-${id}`,
              className: "flex-shrink-0 text-xl leading-none mt-0.5",
            },
            typeof icon === "string" ? icon : "💡"
          ),
          // Vertical bar separator (like Notion)
          React.createElement("div", {
            key: `separator-${id}`,
            className: "w-px bg-gray-300 h-6 flex-shrink-0 mt-1",
          }),
          // Content section
          React.createElement(
            "div",
            {
              key: `content-${id}`,
              className:
                "flex-1 text-lg leading-[1.7] text-gray-900 max-w-none",
            },
            renderRichText(value.rich_text)
          ),
        ]
      );

    case "code":
      const codeText = value.rich_text.map((text) => text.plain_text).join("");
      const language = value.language || "text";

      return React.createElement(
        "div",
        {
          key: id,
          className:
            "my-12 rounded-2xl overflow-hidden shadow-2xl bg-slate-900",
        },
        [
          // Header with language badge
          React.createElement(
            "div",
            {
              key: `header-${id}`,
              className:
                "bg-slate-800 px-6 py-4 border-b border-slate-700 flex items-center justify-between",
            },
            [
              React.createElement(
                "span",
                {
                  key: `lang-${id}`,
                  className:
                    "text-slate-300 text-sm font-mono font-medium uppercase",
                },
                language !== "text" ? language : "CODE"
              ),
              React.createElement(
                "div",
                {
                  key: `dots-${id}`,
                  className: "flex space-x-2",
                },
                [
                  React.createElement("div", {
                    key: "dot1",
                    className: "w-3 h-3 rounded-full bg-red-500",
                  }),
                  React.createElement("div", {
                    key: "dot2",
                    className: "w-3 h-3 rounded-full bg-yellow-500",
                  }),
                  React.createElement("div", {
                    key: "dot3",
                    className: "w-3 h-3 rounded-full bg-green-500",
                  }),
                ]
              ),
            ]
          ),
          // Code content
          React.createElement(
            "pre",
            {
              key: `pre-${id}`,
              className:
                "bg-slate-900 text-slate-100 p-6 overflow-x-auto m-0 font-mono text-sm leading-relaxed",
              style: {
                fontFamily:
                  "'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
                backgroundColor: "#0f172a",
                color: "#f1f5f9",
                fontSize: "14px",
                lineHeight: "1.7",
                tabSize: "2",
              },
            },
            React.createElement("code", {
              className: "text-slate-100",
              dangerouslySetInnerHTML: {
                __html: syntaxHighlight(codeText, language),
              },
            })
          ),
          value.caption && value.caption.length > 0
            ? React.createElement(
                "p",
                {
                  key: `caption-${id}`,
                  className:
                    "text-sm text-slate-400 mt-4 mb-2 text-center italic px-6 pb-4",
                },
                renderRichText(value.caption)
              )
            : null,
        ].filter(Boolean)
      );

    case "column_list":
      const columns = block.children || [];
      const columnCount = columns.length;

      return React.createElement(
        "div",
        {
          key: id,
          className: "my-12 grid gap-6 md:gap-8",
          style: {
            gridTemplateColumns:
              columnCount > 0
                ? `repeat(${Math.min(columnCount, 3)}, 1fr)`
                : "repeat(auto-fit, minmax(250px, 1fr))",
          },
        },
        columns.map((column, index) => renderNotionBlock(column, index))
      );

    case "column":
      const columnContent = block.children || [];

      return React.createElement(
        "div",
        {
          key: id,
          className:
            "space-y-6 p-6 bg-gray-50/40 rounded-2xl border border-gray-100/60",
        },
        columnContent.map((contentBlock, index) =>
          renderNotionBlock(contentBlock, index)
        )
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
                ? getPlainText(value.caption)
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
                    "text-sm text-gray-500 mt-4 text-center leading-relaxed italic",
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
                      "text-sm text-gray-500 mt-4 text-center leading-relaxed italic",
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
                className: "underline font-medium",
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

// Enhanced getProjectContent that fetches all nested content server-side
export async function getProjectContent(id) {
  try {
    const blocks = await getAllChildBlocks(id);
    return blocks;
  } catch (error) {
    console.error("Error fetching content:", error);
    return [];
  }
}

// Transformation Stories database
const transformationStoriesDatabase = process.env.NOTION_TRANSFORMATION_STORIES_DATABASE_ID;

// Blog-related functions
const blogDatabase = process.env.NOTION_BLOG_DATABASE_ID;

export async function getBlogPosts() {
  try {
    if (!blogDatabase) {
      console.warn("No blog database configured");
      return [];
    }

    const response = await notion.databases.query({
      database_id: blogDatabase,
      filter: { property: "Published", checkbox: { equals: true } },
      sorts: [{ property: "Date", direction: "descending" }],
    });

    return response.results.map((page) => ({
      id: page.id,
      title: getPropertyValue(page, "Title"),
      excerpt: getPropertyValue(page, "Excerpt"),
      category: getPropertyValue(page, "Category"),
      readTime: getPropertyValue(page, "Read Time"),
      date: getPropertyValue(page, "Date"),
      author: getPropertyValue(page, "Author"),
      featured: getPropertyValue(page, "Featured"),
      slug: getPropertyValue(page, "Slug"),
      image: getPropertyValue(page, "Cover Image"),
      breadcrumb: getPropertyValue(page, "Breadcrumb"),
      quote: getPropertyValue(page, "Quote"),
      quoteAuthor: getPropertyValue(page, "Quote Author"),
      stats: getPropertyValue(page, "Stats"),
      created: page.created_time,
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getFeaturedBlogPost() {
  try {
    const posts = await getBlogPosts();
    return posts.find((post) => post.featured) || posts[0] || null;
  } catch (error) {
    console.error("Error fetching featured blog post:", error);
    return null;
  }
}

// Transformation Stories functions
export async function getTransformationStories() {
  try {
    if (!transformationStoriesDatabase) {
      console.warn("No transformation stories database configured");
      return [];
    }

    const response = await notion.databases.query({
      database_id: transformationStoriesDatabase,
      filter: { property: "Status", select: { equals: "Published" } },
      sorts: [{ property: "Featured", direction: "descending" }],
    });

    return response.results.map((page) => ({
      id: page.id,
      title: getPropertyValue(page, "Title"),
      featured: getPropertyValue(page, "Featured"),
      clientName: getPropertyValue(page, "Client Name"),
      clientDescription: getPropertyValue(page, "Client Description"),
      clientLogoUrl: getPropertyValue(page, "Client Logo URL"),
      storyId: getPropertyValue(page, "Story ID"),
      themeColor: getPropertyValue(page, "Theme Color"),
      challenge: getPropertyValue(page, "Challenge"),
      journey: getPropertyValue(page, "Journey"),
      outcome: getPropertyValue(page, "Outcome"),
      description: getPropertyValue(page, "Description"),
      ctaText: getPropertyValue(page, "CTA Text"),
      imageUrl: getPropertyValue(page, "Image URL"),
      status: getPropertyValue(page, "Status"),
      created: page.created_time,
    }));
  } catch (error) {
    console.error("Error fetching transformation stories:", error);
    return [];
  }
}

export async function getFeaturedTransformationStories() {
  try {
    const stories = await getTransformationStories();
    return stories.filter((story) => story.featured);
  } catch (error) {
    console.error("Error fetching featured transformation stories:", error);
    return [];
  }
}

export async function getHighlightTransformationStories() {
  try {
    const stories = await getTransformationStories();
    return stories.filter((story) => !story.featured);
  } catch (error) {
    console.error("Error fetching highlight transformation stories:", error);
    return [];
  }
}
