// components/BlogSection.js - Apple Minimalist Style
"use client";

import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The ROI of Data Analytics: What CFOs Need to Know",
      excerpt:
        "Breaking down the financial impact of data analytics investments and how to measure success in enterprise environments.",
      category: "Data Analytics",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "Sarah Chen",
      featured: true,
    },
    {
      id: 2,
      title: "RPA Implementation: 5 Common Pitfalls to Avoid",
      excerpt:
        "Learn from real enterprise deployments what works, what doesn't, and how to set your automation projects up for success.",
      category: "Process Automation",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      author: "Marcus Wong",
      featured: false,
    },
    {
      id: 3,
      title: "AI in Enterprise: Beyond the Hype to Real Value",
      excerpt:
        "A practical guide to implementing AI solutions that deliver measurable outcomes, not just impressive demos.",
      category: "Artificial Intelligence",
      readTime: "10 min read",
      date: "Dec 8, 2024",
      author: "Dr. Raj Patel",
      featured: false,
    },
    {
      id: 4,
      title: "Southeast Asia Digital Transformation Trends",
      excerpt:
        "Market insights, regulatory considerations, and strategic opportunities for enterprises in the ASEAN region.",
      category: "Industry Insights",
      readTime: "7 min read",
      date: "Dec 5, 2024",
      author: "Linda Tan",
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
            Insights Preview
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Strategic perspectives on data, automation, and comprehensive
            digital transformation from our expert team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Featured Post */}
          {featuredPost && (
            <div className="lg:col-span-1">
              <article className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span className="px-2 py-1 bg-primary-light text-primary rounded-md font-medium">
                        Featured
                      </span>
                      <div className="flex items-center space-x-2">
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-primary leading-tight group-hover:text-primary/80 transition-colors duration-200">
                        {featuredPost.title}
                      </h3>

                      <p className="text-sm text-secondary leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-secondary">
                            {featuredPost.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <span className="text-xs text-secondary">
                          {featuredPost.author}
                        </span>
                      </div>
                      <button className="btn-tertiary text-xs">
                        Read more →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Regular Posts */}
          <div className="lg:col-span-1 space-y-6">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group cursor-pointer bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="px-2 py-1 bg-gray-100 text-secondary rounded-md font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-primary leading-tight group-hover:text-primary/80 transition-colors duration-200">
                    {post.title}
                  </h4>

                  <p className="text-sm text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-secondary">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <span className="text-xs text-secondary">
                        {post.author}
                      </span>
                    </div>
                    <button className="btn-tertiary text-xs">
                      Read more →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary">View All Articles</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
