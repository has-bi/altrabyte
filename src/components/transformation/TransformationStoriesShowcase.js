"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTransformationStories } from "@/lib/transformationStoriesClient";

const TransformationStoriesShowcase = () => {
  const { data: stories, loading } = useTransformationStories('showcase');
  const [visibleStories, setVisibleStories] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // Default to true to prevent disappearing title
  const storyRefs = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    return () => headerObserver.disconnect();
  }, []);

  useEffect(() => {
    const storyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-story-index"));
          if (entry.isIntersecting && !visibleStories.includes(index)) {
            setVisibleStories((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    storyRefs.current.forEach((ref) => {
      if (ref) storyObserver.observe(ref);
    });

    return () => storyObserver.disconnect();
  }, [visibleStories, stories]);

  // Show loading state
  if (loading) {
    return (
      <section className="px-4 py-12">
        <div className="section-container flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-[32px] font-semibold leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[36px]">
              Featured Transformations
            </h2>
            <p className="text-[16px] leading-[1.5] text-neutral-400 md:text-[18px]">
              Loading transformation stories...
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-500"></div>
          </div>
        </div>
      </section>
    );
  }

  // Show message if no stories
  if (!stories || stories.length === 0) {
    return (
      <section className="px-4 py-12">
        <div className="section-container flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-[32px] font-semibold leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[36px]">
              Featured Transformations
            </h2>
            <p className="text-[16px] leading-[1.5] text-neutral-400 md:text-[18px]">
              No transformation stories available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-12">
      <div className="section-container flex flex-col items-center gap-12">
        <header
          ref={headerRef}
          className={`flex max-w-[760px] flex-col items-center gap-3 text-center transition-all duration-700 ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-[32px] font-semibold leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[36px]">
            Featured Transformations
          </h2>
          <p className="text-[16px] leading-[1.5] text-neutral-400 md:text-[18px]">
            Real companies. Real problems. Real results.
          </p>
        </header>

        <div className="flex w-full flex-col gap-6">
          {stories.map((story, index) => (
            <Link 
              key={story.id} 
              href={`/transformation-stories/${story.id}`}
              className="block"
            >
              <article
                ref={(el) => (storyRefs.current[index] = el)}
                data-story-index={index}
                className={`flex flex-col gap-6 rounded-[12px] border border-transparent shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-all duration-700 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)] hover:scale-[1.01] lg:flex-row ${
                  visibleStories.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  backgroundColor: story.theme && story.theme.startsWith('#') ? story.theme : undefined, // Inline hex color
                }}
              >
                <div className="flex flex-1 flex-col gap-7 border-b border-dashed border-black/30 px-8 py-10 lg:border-b-0 lg:border-r">
                  <h3 className="text-[24px] font-semibold leading-[1.3] text-neutral-500 md:text-[28px]">
                    {story.title}
                  </h3>
                  <div className="flex flex-col gap-5">
                    {story.sections.map((section) => (
                      <div key={section.label} className="flex flex-col gap-1.5">
                        <span className="text-[13px] font-semibold tracking-[-0.01em] text-[#6B7280]">
                          {section.label}
                        </span>
                        <p className="text-[18px] font-medium leading-[1.4] text-neutral-600 line-clamp-3">
                          {section.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex w-full max-w-[280px] flex-col justify-between gap-8 border-b border-dashed border-black/30 px-8 py-10 lg:border-b-0 lg:border-r">
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2 text-[#6B7280]">
                      <span className="h-[1px] w-6 bg-[#6B7280]" />
                      <span className="text-[13px] font-semibold tracking-[0.1em]">
                        Client
                      </span>
                    </span>
                    <div>
                      <p className="text-[18px] font-semibold text-neutral-600">
                        {story.client.name}
                      </p>
                      <p className="text-[14px] text-neutral-400">
                        {story.client.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center px-6 py-8">
                  <div className="relative h-[320px] w-full max-w-[340px] overflow-hidden rounded-lg">
                    <Image
                      fill
                      sizes="(min-width: 1024px) 340px, 90vw"
                      src={story.image}
                      alt={story.title}
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationStoriesShowcase;
