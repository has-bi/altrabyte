"use client";

import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The ROI of Data Analytics: What CFOs Need to Know in 2024",
      excerpt:
        "Breaking down the financial impact of data analytics investments and how to measure success in enterprise environments.",
      category: "Data Analytics",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "Sarah Chen",
      authorRole: "Head of Analytics",
      image: "https://via.placeholder.com/400x240/3B82F6/FFFFFF?text=Data+ROI",
      featured: true,
    },
    {
      id: 2,
      title: "RPA Implementation: 5 Common Pitfalls and How to Avoid Them",
      excerpt:
        "Learn from real enterprise deployments what works, what doesn't, and how to set your automation projects up for success.",
      category: "RPA Automation",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      author: "Marcus Wong",
      authorRole: "RPA Specialist",
      image: "https://via.placeholder.com/400x240/8B5CF6/FFFFFF?text=RPA+Guide",
      featured: false,
    },
    {
      id: 3,
      title: "Gen AI in Enterprise: Beyond the Hype to Real Business Value",
      excerpt:
        "A practical guide to implementing AI solutions that deliver measurable outcomes, not just impressive demos.",
      category: "Artificial Intelligence",
      readTime: "10 min read",
      date: "Dec 8, 2024",
      author: "Dr. Raj Patel",
      authorRole: "AI Strategy Lead",
      image:
        "https://via.placeholder.com/400x240/10B981/FFFFFF?text=Enterprise+AI",
      featured: false,
    },
    {
      id: 4,
      title:
        "Southeast Asia Digital Transformation: Regional Insights for 2025",
      excerpt:
        "Market trends, regulatory considerations, and strategic opportunities for enterprises in the ASEAN region.",
      category: "Industry Insights",
      readTime: "7 min read",
      date: "Dec 5, 2024",
      author: "Linda Tan",
      authorRole: "Regional Director",
      image:
        "https://via.placeholder.com/400x240/F59E0B/FFFFFF?text=SEA+Trends",
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic perspectives on data, automation, and digital
            transformation from our expert team
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Featured Post */}
          {featuredPost && (
            <div className="lg:col-span-1">
              <article className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-lg">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <span>{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center space-x-3 pt-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        {featuredPost.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {featuredPost.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {featuredPost.authorRole}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Regular Posts */}
          <div className="lg:col-span-1 space-y-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="group cursor-pointer flex space-x-6 hover:bg-gray-50 p-4 -m-4 rounded-xl transition-colors duration-200"
              >
                <div className="flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-32 h-24 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span className="px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium text-xs">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 text-gray-700 font-semibold rounded-xl border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
            View All Articles
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;
