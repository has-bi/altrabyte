"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const FoundationFirstBlogSection = ({ post }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Default fallback data if no post is provided
  const defaultPost = {
    title: "The ROI of Data Analytics: What CFOs Need to Know",
    subtitle: "Breaking down the financial impact of data analytics investments",
    breadcrumb: ["Data Analytics", "Process Automation", "Foundation"],
    quote: "Data without a solid foundation is just expensive noise.",
    quoteAuthor: "— Sarah Chen, CFO Advisor",
    description:
      "Many organizations rush into expensive analytics platforms and AI implementations, only to realize their data foundation isn't ready. This article breaks down the true ROI calculation CFOs need to make—including the hidden costs of skipping foundation work and the measurable returns of getting it right.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    stats: [
      {
        title: "Average ROI Increase",
        value: "3x higher when foundation is prioritized first",
      },
      {
        title: "Implementation Time",
        value: "40% faster with proper data infrastructure",
      },
    ],
  };

  // Use provided post or fallback to default
  const featuredPost = post || defaultPost;

  // Ensure breadcrumb is an array
  const breadcrumb = Array.isArray(featuredPost.breadcrumb)
    ? featuredPost.breadcrumb
    : defaultPost.breadcrumb;

  // Ensure stats is an array
  const stats = Array.isArray(featuredPost.stats)
    ? featuredPost.stats
    : defaultPost.stats;

  return (
    <section
      ref={sectionRef}
      className={`border-y-[1.5px] border-dashed border-neutral-500 px-4 py-20 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="section-container">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-10">
          {/* Text Container */}
          <div
            className={`flex max-w-[600px] flex-1 flex-col gap-6 transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
            }`}
          >
            {/* Title Container */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[32px] font-medium leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[40px]">
                {featuredPost.title || defaultPost.title}
              </h2>
              <p className="text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-neutral-400 md:text-[20px]">
                {featuredPost.subtitle || defaultPost.subtitle}
              </p>
            </div>

            {/* Breadcrumb Container */}
            <div className="flex flex-row items-center justify-center gap-1 rounded-full bg-primary-50 px-7 py-3">
              {breadcrumb.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <span className="text-center text-[18px] font-medium leading-[1.5] tracking-[-0.01em] text-neutral-500">
                    {item}
                  </span>
                  {idx < breadcrumb.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-primary-500" strokeWidth={1.25} />
                  )}
                </div>
              ))}
            </div>

            {/* Paragraph Container */}
            <div className="flex flex-col gap-4">
              {/* Quote Container */}
              <div className="flex flex-col gap-1">
                <p className="text-[16px] font-normal leading-[1.5] tracking-[-0.01em] text-neutral-500 md:text-[18px]">
                  {featuredPost.quote || defaultPost.quote}
                </p>
                <p className="text-[16px] font-medium italic leading-[1.5] tracking-[-0.01em] text-neutral-500 md:text-[18px]">
                  {featuredPost.quoteAuthor || defaultPost.quoteAuthor}
                </p>
              </div>

              {/* Description */}
              <p className="text-[16px] font-normal leading-[1.5] tracking-[-0.01em] text-neutral-500 md:text-[18px]">
                {featuredPost.description || defaultPost.description}
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div
            className={`relative h-[400px] w-full max-w-[560px] overflow-hidden rounded-[12px] transition-all duration-700 delay-200 lg:h-[580px] ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
            }`}
          >
            <Image
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              src={featuredPost.image || defaultPost.image}
              alt={featuredPost.title || defaultPost.title}
              className="object-cover"
            />

            {/* Info Row Overlay */}
            <div
              className="absolute bottom-0 left-0 flex w-full items-end p-7"
              style={{
                height: "480px",
                background:
                  "linear-gradient(to top, #5546B3 0%, rgba(85, 70, 179, 0) 60%)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  maskImage: "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                  WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
              />
              {/* Info Container */}
              <div className="relative z-10 flex w-full flex-col gap-5 md:flex-row md:gap-5">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-1 flex-col gap-1">
                    <h3 className="text-[18px] font-medium leading-[1.5] tracking-[-0.01em] text-white md:text-[20px]">
                      {stat.title}
                    </h3>
                    <p className="text-[16px] font-normal leading-[1.5] tracking-[-0.01em] text-white/80 md:text-[18px]">
                      {stat.value}
                    </p>
                    {idx < stats.length - 1 && (
                      <div className="my-2 h-full w-px border-r-[1.5px] border-dashed border-white/30 md:my-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationFirstBlogSection;
