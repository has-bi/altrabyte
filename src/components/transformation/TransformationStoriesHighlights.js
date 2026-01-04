"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTransformationStories } from "@/lib/transformationStoriesClient";

const TransformationStoriesHighlights = () => {
  const { data: highlights, loading } = useTransformationStories('highlights');

  // Show loading state
  if (loading) {
    return (
      <section className="px-4 py-20">
        <div className="section-container flex flex-col items-center gap-16">
          <header className="flex max-w-[527px] flex-col items-center gap-3 text-center">
            <h2 className="text-[32px] font-medium leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[36px]">
              More Transformation Stories
            </h2>
            <p className="text-[16px] font-normal leading-[1.5] tracking-[-0.01em] text-neutral-400 md:text-[18px]">
              Loading additional success stories...
            </p>
          </header>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-500"></div>
          </div>
        </div>
      </section>
    );
  }

  // Show message if no highlights
  if (!highlights || highlights.length === 0) {
    return (
      <section className="px-4 py-20">
        <div className="section-container flex flex-col items-center gap-16">
          <header className="flex max-w-[527px] flex-col items-center gap-3 text-center">
            <h2 className="text-[32px] font-medium leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[36px]">
              More Transformation Stories
            </h2>
            <p className="text-[16px] font-normal leading-[1.5] tracking-[-0.01em] text-neutral-400 md:text-[18px]">
              No additional stories available at the moment.
            </p>
          </header>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-20">
      <div className="section-container flex flex-col items-center gap-16">
        <header className="flex max-w-[527px] flex-col items-center gap-3 text-center">
          <h2 className="text-[32px] font-medium leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[36px]">
            More Transformation Stories
          </h2>
          <p className="text-[16px] font-normal leading-[1.5] tracking-[-0.01em] text-neutral-400 md:text-[18px]">
            Discover additional success stories across industries
          </p>
        </header>

        <div className="flex w-full max-w-[1252px] flex-col gap-16">
          {highlights.map((highlight, index) => (
            <div key={highlight.id} className="flex flex-col gap-16">
              <article
                className={`group flex flex-col items-center gap-16 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex w-full max-w-[594px] flex-col gap-8">
                  <div className="flex flex-col items-start gap-4">
                    <div className="h-7 w-auto">
                      <Image
                        src={highlight.logo}
                        alt={`${highlight.id} logo`}
                        width={207}
                        height={28}
                        className="h-full w-auto object-contain object-left"
                      />
                    </div>
                    <h3 className="text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-neutral-700">
                      {highlight.title}
                    </h3>
                    <p className="text-[16px] font-normal leading-[1.5] tracking-[-0.01em] text-neutral-500">
                      {highlight.description}
                    </p>
                  </div>
                  <Link 
                    href={`/transformation-stories/${highlight.id}`}
                    className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#0D1B2A] px-6 py-2.5 text-[16px] font-semibold tracking-[-0.01em] text-white shadow-[0_8px_20px_rgba(13,27,42,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#132840] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A6CFF]"
                  >
                    {highlight.cta}
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[2px]"
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>

                <Link 
                  href={`/transformation-stories/${highlight.id}`}
                  className="relative h-[400px] w-full max-w-[594px] overflow-hidden rounded-[12px] block"
                >
                  <Image
                    fill
                    sizes="(min-width: 1024px) 594px, 90vw"
                    src={highlight.image}
                    alt={highlight.title}
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:delay-300"
                  />

                  {/* Hover overlay with blur and gradient */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100">
                    {/* Backdrop blur overlay */}
                    <div className="absolute inset-0 bg-neutral-500/30 backdrop-blur-[4px]" />

                    {/* Radial gradient with transparent center - ring effect */}
                    <div
                      className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40px]"
                      style={{
                        background:
                          "radial-gradient(circle, transparent 0%, transparent 25%, rgba(120, 99, 252, 0.55) 45%, rgba(120, 99, 252, 0.8) 70%, rgba(85, 70, 179, 0.7) 100%)",
                      }}
                    />

                    {/* Logo on hover */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative h-12 w-48">
                        <Image
                          src={highlight.logo}
                          alt={`${highlight.id} logo`}
                          fill
                          className="object-contain filter brightness-0 invert drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>

              {index < highlights.length - 1 && (
                <div className="h-px w-full border-t-[1.5px] border-dashed border-neutral-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationStoriesHighlights;
