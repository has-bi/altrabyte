"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const stories = [
  {
    id: "retail",
    theme: "bg-[#F6EEEC]",
    title: "From Spreadsheets to Systems",
    sections: [
      { label: "The Challenge", value: "All data trapped in Excel, zero infrastructure" },
      { label: "The Journey", value: "Foundation → Automation → Intelligence" },
      { label: "The Outcome", value: "Real-time visibility, eliminated manual reporting" },
    ],
    client: {
      name: "Rose All Day Cosmetics",
      description: "Startup Cosmetics Brand",
      logo: "/images/client/rose-all-day-cosmetics.png",
    },
    image: "/images/portfolio/distribution.jpg",
  },
  {
    id: "fintech",
    theme: "bg-[#FCE9EE]",
    title: "From Chaos to Clarity",
    sections: [
      { label: "The Challenge", value: "Scattered data, no decision-making capability" },
      { label: "The Journey", value: "Data literacy → BI infrastructure → Intelligent insights" },
      { label: "The Outcome", value: "Data-driven decisions, scalable systems" },
    ],
    client: {
      name: "Amser",
      description: "Distribution Company",
      logo: "/images/client/Amser.png",
    },
    image: "/images/portfolio/fintech-team.jpg",
  },
  {
    id: "marketplace",
    theme: "bg-[#E6F6F1]",
    title: "From Reactive to Proactive",
    sections: [
      { label: "The Challenge", value: "Manual processes, constant firefighting" },
      { label: "The Journey", value: "Process automation → Predictive models → Strategic planning" },
      { label: "The Outcome", value: "Automated workflows, proactive intelligence" },
    ],
    client: {
      name: "RevoU",
      description: "APAC expansion",
      logo: "/images/client/revoU.png",
    },
    image: "/images/portfolio/warehouse-team.jpg",
  },
];

const TransformationStoriesShowcase = () => {
  const [visibleStories, setVisibleStories] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
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
  }, [visibleStories]);

  return (
    <section className="px-4 py-12">
      <div className="section-container flex flex-col items-center gap-12">
        <header
          ref={headerRef}
          className={`flex max-w-[760px] flex-col items-center gap-3 text-center transition-all duration-700 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
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
            <article
              key={story.id}
              ref={(el) => (storyRefs.current[index] = el)}
              data-story-index={index}
              className={`${story.theme} flex flex-col gap-6 rounded-[12px] border border-transparent shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-all duration-700 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)] hover:scale-[1.01] lg:flex-row ${
                visibleStories.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-1 flex-col gap-7 border-b border-dashed border-black/30 px-8 py-10 lg:border-b-0 lg:border-r">
                <h3 className="text-[24px] font-semibold leading-[1.3] text-neutral-500 md:text-[28px]">
                  {story.title}
                </h3>
                <div className="flex flex-col gap-5">
                  {story.sections.map((section) => (
                    <div key={section.label} className="flex flex-col gap-2">
                      <span className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
                        {section.label}
                      </span>
                      <p className="text-[18px] font-medium leading-[1.4] text-neutral-600">
                        {section.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex w-full max-w-[280px] flex-col justify-between gap-8 border-b border-dashed border-black/30 px-8 py-10 lg:border-b-0 lg:border-r">
                <div className="flex flex-col gap-3">
                  <span className="flex items-center gap-3 text-primary-500">
                    <span className="h-px w-8 bg-primary-500" />
                    <span className="text-[14px] font-semibold uppercase tracking-[0.18em]">
                      Client
                    </span>
                  </span>
                  <div>
                    <p className="text-[18px] font-semibold text-neutral-600">{story.client.name}</p>
                    <p className="text-[14px] text-neutral-400">{story.client.description}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationStoriesShowcase;
