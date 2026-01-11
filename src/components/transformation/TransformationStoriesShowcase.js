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
  // Skeleton Component
  const ShowcaseSkeleton = () => (
    <div className="flex flex-col gap-6 rounded-[12px] border border-transparent shadow-[0_24px_60px_rgba(15,23,42,0.08)] lg:flex-row bg-white overflow-hidden">
      {/* Left Column Skeleton */}
      <div className="flex flex-1 flex-col gap-7 border-b border-dashed border-neutral-200 px-8 py-10 lg:border-b-0 lg:border-r">
        <div className="h-8 w-3/4 bg-neutral-100 rounded animate-pulse" />
        <div className="flex flex-col gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="h-3 w-20 bg-neutral-100 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-5 w-full bg-neutral-100 rounded animate-pulse" />
                <div className="h-5 w-5/6 bg-neutral-100 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Column Skeleton */}
      <div className="flex w-full max-w-[280px] flex-col gap-8 border-b border-dashed border-neutral-200 px-8 py-10 lg:border-b-0">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-6 bg-neutral-200" />
            <div className="h-3 w-12 bg-neutral-100 rounded animate-pulse" />
          </div>
          <div className="space-y-2 mt-1">
            <div className="h-6 w-32 bg-neutral-100 rounded animate-pulse" />
            <div className="h-4 w-40 bg-neutral-100 rounded animate-pulse" />
          </div>
        </div>
      </div>

      {/* Right Column Skeleton */}
      <div className="hidden lg:flex flex-1 p-2">
        <div className="w-full h-full min-h-[320px] bg-neutral-100 rounded-[12px] animate-pulse" />
      </div>
    </div>
  );

  // Individual Story Card Component with Image Loading State
  const StoryCard = ({ story, index, isVisible, setRef }) => {
    const [imageLoading, setImageLoading] = useState(true);

    return (
      <Link 
        href={`/transformation-stories/${story.id}`}
        className="block"
      >
        <article
          ref={setRef}
          data-story-index={index}
          className={`flex flex-col gap-6 rounded-[12px] border border-transparent shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-all duration-700 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)] hover:scale-[1.01] lg:flex-row ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ 
            transitionDelay: `${index * 150}ms`,
            backgroundColor: story.theme && story.theme.startsWith('#') ? story.theme : undefined,
          }}
        >
          <div className="flex flex-1 flex-col gap-7 p-6 lg:border-r lg:border-dashed lg:border-black/30 lg:px-8 lg:py-10">
            <h3 className="text-[24px] font-semibold leading-[1.3] text-neutral-500 md:text-[28px]">
              {story.title}
            </h3>

            {/* Mobile Client Info */}
            <div className="flex flex-col gap-2 lg:hidden">
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

          {/* Desktop Client Info */}
          <div className="hidden lg:flex w-full max-w-[280px] flex-col justify-between gap-8 border-dashed border-black/30 px-8 py-10 lg:border-b-0">
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

          <div className="hidden lg:flex flex-1 p-2">
            <div className="relative w-full h-full min-h-[320px] overflow-hidden rounded-[12px] bg-neutral-100">
              {/* Image Loading Skeleton Overlay */}
              {imageLoading && (
                <div className="absolute inset-0 z-10 bg-neutral-200 animate-pulse" />
              )}
              <Image
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={story.image}
                alt={story.title}
                className={`object-cover transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </div>
        </article>
      </Link>
    );
  };

  // Show loading state
  if (loading) {
    return (
      <section className="px-4 py-12">
        <div className="section-container flex flex-col items-center gap-12">
          {/* Header Skeleton */}
          <div className="flex flex-col items-center gap-3 text-center w-full max-w-[760px]">
            <div className="h-10 w-3/4 md:w-1/2 bg-neutral-100 rounded animate-pulse" />
            <div className="h-6 w-1/2 md:w-1/3 bg-neutral-100 rounded animate-pulse" />
          </div>

          {/* Cards Skeletons */}
          <div className="flex w-full flex-col gap-6">
            {[1, 2, 3].map((i) => (
              <ShowcaseSkeleton key={i} />
            ))}
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
            <StoryCard 
              key={story.id} 
              story={story} 
              index={index}
              isVisible={visibleStories.includes(index)}
              setRef={(el) => (storyRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationStoriesShowcase;
