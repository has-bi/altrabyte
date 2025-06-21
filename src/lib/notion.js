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

// Enhanced rich text renderer with formatting support
export function renderRichText(richText) {
  if (!richText || !Array.isArray(richText)) return "";

  return richText.map((text, idx) => {
    let content = text.plain_text;

    // Apply formatting
    if (text.annotations?.bold) content = <strong key={idx}>{content}</strong>;
    if (text.annotations?.italic) content = <em key={idx}>{content}</em>;
    if (text.annotations?.strikethrough) content = <s key={idx}>{content}</s>;
    if (text.annotations?.underline) content = <u key={idx}>{content}</u>;
    if (text.annotations?.code)
      content = (
        <code
          key={idx}
          className="px-2 py-1 bg-gray-100 rounded text-sm font-mono"
        >
          {content}
        </code>
      );

    // Handle links
    if (text.href) {
      content = (
        <a
          key={idx}
          href={text.href}
          className="text-primary hover:text-primary-hover underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return content;
  });
}

// Comprehensive Notion block renderer
export function renderNotionBlock(block) {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p key={id} className="text-secondary leading-[1.8] mb-8 text-lg">
          {renderRichText(value.rich_text)}
        </p>
      );

    case "heading_1":
      return (
        <h2
          key={id}
          className="text-3xl font-medium text-primary mt-16 mb-8 tracking-tight"
        >
          {renderRichText(value.rich_text)}
        </h2>
      );

    case "heading_2":
      return (
        <h3
          key={id}
          className="text-2xl font-medium text-primary mt-12 mb-6 tracking-tight"
        >
          {renderRichText(value.rich_text)}
        </h3>
      );

    case "heading_3":
      return (
        <h4
          key={id}
          className="text-xl font-medium text-primary mt-8 mb-4 tracking-tight"
        >
          {renderRichText(value.rich_text)}
        </h4>
      );

    case "bulleted_list_item":
      return (
        <li
          key={id}
          className="text-secondary leading-[1.8] mb-3 text-lg list-none relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-400 before:font-bold"
        >
          {renderRichText(value.rich_text)}
        </li>
      );

    case "numbered_list_item":
      return (
        <li key={id} className="text-secondary leading-[1.8] mb-3 text-lg ml-6">
          {renderRichText(value.rich_text)}
        </li>
      );

    case "to_do":
      return (
        <div key={id} className="flex items-start space-x-3 mb-4">
          <input
            type="checkbox"
            checked={value.checked}
            readOnly
            className="mt-1.5 w-4 h-4 text-primary rounded focus:ring-primary border-gray-300"
          />
          <span
            className={`text-lg leading-[1.8] ${
              value.checked ? "line-through text-gray-400" : "text-secondary"
            }`}
          >
            {renderRichText(value.rich_text)}
          </span>
        </div>
      );

    case "toggle":
      return (
        <details key={id} className="mb-6 p-4 bg-gray-50 rounded-xl">
          <summary className="font-medium text-primary cursor-pointer hover:text-gray-600 transition-colors">
            {renderRichText(value.rich_text)}
          </summary>
          <div className="mt-4 pl-4 border-l-2 border-gray-200">
            {value.children?.map(renderNotionBlock)}
          </div>
        </details>
      );

    case "quote":
      return (
        <blockquote
          key={id}
          className="my-12 pl-8 border-l-4 border-primary/30 bg-gray-50/50 py-6 rounded-r-xl"
        >
          <div className="text-xl leading-relaxed text-secondary italic">
            {renderRichText(value.rich_text)}
          </div>
        </blockquote>
      );

    case "callout":
      const icon = value.icon?.emoji || "💡";
      return (
        <div
          key={id}
          className="my-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl"
        >
          <div className="flex items-start space-x-4">
            <span className="text-2xl">{icon}</span>
            <div className="flex-1 text-lg leading-[1.8] text-secondary">
              {renderRichText(value.rich_text)}
            </div>
          </div>
        </div>
      );

    case "code":
      return (
        <div key={id} className="my-8">
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
            <code className="font-mono text-sm leading-relaxed">
              {value.rich_text.map((text) => text.plain_text).join("")}
            </code>
          </pre>
          {value.caption && value.caption.length > 0 && (
            <p className="text-sm text-gray-500 mt-2 text-center">
              {renderRichText(value.caption)}
            </p>
          )}
        </div>
      );

    case "image":
      const imageSrc =
        value.type === "external" ? value.external.url : value.file.url;
      return (
        <div key={id} className="my-16">
          <div className="rounded-3xl overflow-hidden bg-gray-50 shadow-2xl shadow-black/10">
            <img
              src={imageSrc}
              alt={
                value.caption ? renderRichText(value.caption) : "Project image"
              }
              className="w-full h-auto"
            />
          </div>
          {value.caption && value.caption.length > 0 && (
            <p className="text-sm text-gray-500 mt-4 text-center leading-relaxed">
              {renderRichText(value.caption)}
            </p>
          )}
        </div>
      );

    case "video":
      const videoSrc =
        value.type === "external" ? value.external.url : value.file.url;

      // Check if it's a YouTube URL
      const youtubeMatch = videoSrc.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
      );
      if (youtubeMatch) {
        const videoId = youtubeMatch[1];
        return (
          <div key={id} className="my-16">
            <div className="rounded-3xl overflow-hidden bg-gray-50 shadow-2xl shadow-black/10">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  className="absolute inset-0 w-full h-full"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            {value.caption && value.caption.length > 0 && (
              <p className="text-sm text-gray-500 mt-4 text-center leading-relaxed">
                {renderRichText(value.caption)}
              </p>
            )}
          </div>
        );
      }

      // Check if it's a Vimeo URL
      const vimeoMatch = videoSrc.match(/vimeo\.com\/(\d+)/);
      if (vimeoMatch) {
        const videoId = vimeoMatch[1];
        return (
          <div key={id} className="my-16">
            <div className="rounded-3xl overflow-hidden bg-gray-50 shadow-2xl shadow-black/10">
              <div className="relative aspect-video">
                <iframe
                  src={`https://player.vimeo.com/video/${videoId}`}
                  className="absolute inset-0 w-full h-full"
                  title="Vimeo video"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            {value.caption && value.caption.length > 0 && (
              <p className="text-sm text-gray-500 mt-4 text-center leading-relaxed">
                {renderRichText(value.caption)}
              </p>
            )}
          </div>
        );
      }

      // Check if it's a Loom URL
      const loomMatch = videoSrc.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
      if (loomMatch) {
        const videoId = loomMatch[1];
        return (
          <div key={id} className="my-16">
            <div className="rounded-3xl overflow-hidden bg-gray-50 shadow-2xl shadow-black/10">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.loom.com/embed/${videoId}`}
                  className="absolute inset-0 w-full h-full"
                  title="Loom video"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            {value.caption && value.caption.length > 0 && (
              <p className="text-sm text-gray-500 mt-4 text-center leading-relaxed">
                {renderRichText(value.caption)}
              </p>
            )}
          </div>
        );
      }

      // For direct video files (mp4, webm, etc.)
      if (videoSrc.match(/\.(mp4|webm|ogg)$/i)) {
        return (
          <div key={id} className="my-16">
            <div className="rounded-3xl overflow-hidden bg-gray-50 shadow-2xl shadow-black/10">
              <video
                controls
                className="w-full h-auto"
                poster={value.thumbnail_url}
              >
                <source src={videoSrc} />
                Your browser does not support the video tag.
              </video>
            </div>
            {value.caption && value.caption.length > 0 && (
              <p className="text-sm text-gray-500 mt-4 text-center leading-relaxed">
                {renderRichText(value.caption)}
              </p>
            )}
          </div>
        );
      }

      // Fallback for other video URLs - show as link
      return (
        <div key={id} className="my-12">
          <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-3"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Video Content
                </h4>
                <p className="text-blue-700 text-sm mb-3">
                  {value.caption && value.caption.length > 0
                    ? renderRichText(value.caption)
                    : "Click to watch video"}
                </p>
                <a
                  href={videoSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
      );
      break;

    case "file":
      const fileSrc =
        value.type === "external" ? value.external.url : value.file.url;
      const fileName = value.name || "Download file";
      return (
        <div key={id} className="my-8">
          <a
            href={fileSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors text-secondary font-medium"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {fileName}
          </a>
          {value.caption && value.caption.length > 0 && (
            <p className="text-sm text-gray-500 mt-2">
              {renderRichText(value.caption)}
            </p>
          )}
        </div>
      );

    case "table":
      return (
        <div key={id} className="my-12 overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <tbody>
              {value.rows?.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={
                    rowIndex === 0 ? "bg-gray-50" : "hover:bg-gray-50/50"
                  }
                >
                  {row.cells?.map((cell, cellIndex) => {
                    const Tag = rowIndex === 0 ? "th" : "td";
                    return (
                      <Tag
                        key={cellIndex}
                        className={`px-6 py-4 text-left border-b border-gray-100 ${
                          rowIndex === 0
                            ? "font-semibold text-primary"
                            : "text-secondary"
                        }`}
                      >
                        {renderRichText(cell)}
                      </Tag>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "divider":
      return (
        <div key={id} className="my-16 flex justify-center">
          <div className="w-24 h-px bg-gray-200"></div>
        </div>
      );

    case "embed":
      return (
        <div key={id} className="my-12">
          <div className="rounded-2xl overflow-hidden bg-gray-50 shadow-lg">
            <iframe
              src={value.url}
              className="w-full h-96 border-0"
              title="Embedded content"
              allowFullScreen
            />
          </div>
          {value.caption && value.caption.length > 0 && (
            <p className="text-sm text-gray-500 mt-4 text-center">
              {renderRichText(value.caption)}
            </p>
          )}
        </div>
      );

    case "bookmark":
      return (
        <div key={id} className="my-8">
          <a
            href={value.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-md transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <h4 className="font-semibold text-primary mb-2">
                  {value.title || value.url}
                </h4>
                {value.description && (
                  <p className="text-secondary text-sm leading-relaxed mb-2">
                    {value.description}
                  </p>
                )}
                <p className="text-xs text-gray-400">{value.url}</p>
              </div>
              {value.favicon && (
                <img src={value.favicon} alt="" className="w-6 h-6 rounded" />
              )}
            </div>
          </a>
        </div>
      );

    default:
      // Fallback for unsupported blocks
      return (
        <div
          key={id}
          className="my-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl"
        >
          <p className="text-sm text-yellow-700">
            Unsupported block type: <code className="font-mono">{type}</code>
          </p>
        </div>
      );
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
