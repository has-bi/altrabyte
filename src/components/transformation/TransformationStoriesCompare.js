"use client";

import { useState, useEffect, useRef } from "react";
import { CircleX, CheckCircle2 } from "lucide-react";

const delusionPoints = [
  "Promise quick AI solutions",
  "Build analytics on broken foundations",
  "Ignore existing business processes",
  "Create vendor dependency",
];

const realityPoints = [
  "Fixed the foundation first (boring but essential)",
  "Built for their actual reality (not their aspirations)",
  "Transferred knowledge (no black boxes)",
  "Delivered systematic capability (not just reports)",
];

const TransformationStoriesCompare = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const itemRefs = useRef([]);
  const headerRef = useRef(null);
  const footerRef = useRef(null);

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
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-item-index"));
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => itemObserver.disconnect();
  }, [visibleItems]);

  useEffect(() => {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFooterVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
    }

    return () => footerObserver.disconnect();
  }, []);

  return (
    <section className="bg-[#FBF7F6] px-4 py-20">
      <div className="section-container flex flex-col items-center gap-12">
        <header
          ref={headerRef}
          className={`flex max-w-[700px] flex-col items-center gap-3 text-center transition-all duration-700 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-[32px] font-semibold leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[36px]">
            Why These Transformations Worked
          </h2>
          <p className="text-[16px] leading-[1.5] text-neutral-400 md:text-[18px]">
            The Foundation-First Difference
          </p>
        </header>

        <div className="w-full max-w-[1200px] rounded-[20px] bg-white p-10 shadow-[0_32px_60px_rgba(15,23,42,0.08)]">
          <div className="relative flex flex-col gap-10 lg:flex-row">
            <div className="flex w-full flex-col items-center gap-7 lg:w-1/2">
              <h3 className="text-center text-[22px] font-semibold text-neutral-500 md:text-[24px]">
                What We Didn't Do
              </h3>
              <div className="flex w-full flex-col overflow-hidden rounded-[12px]">
                {delusionPoints.map((point, index) => (
                  <div
                    key={point}
                    ref={(el) => (itemRefs.current[index] = el)}
                    data-item-index={index}
                    className={`flex items-start gap-3 border border-[#F7B9CB] bg-[#FCE9EE] px-5 py-4 text-left transition-all duration-600 ${
                      index === 0 ? "rounded-t-[12px]" : ""
                    } ${index === delusionPoints.length - 1 ? "rounded-b-[12px]" : "border-t-0"} ${
                      visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="text-[#ED688E]">
                      <CircleX className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <p className="text-[15px] leading-[1.5] text-neutral-600 md:text-[16px]">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block lg:w-px lg:bg-dashed-divider" />

            <div className="flex w-full flex-col items-center gap-7 lg:w-1/2">
              <h3 className="text-center text-[22px] font-semibold text-neutral-500 md:text-[24px]">
                What we did:
              </h3>
              <div className="flex w-full flex-col overflow-hidden rounded-[12px]">
                {realityPoints.map((point, index) => (
                  <div
                    key={point}
                    ref={(el) => (itemRefs.current[delusionPoints.length + index] = el)}
                    data-item-index={delusionPoints.length + index}
                    className={`flex items-start gap-3 border border-[#B2E2D5] bg-[#E6F6F1] px-5 py-4 text-left transition-all duration-600 ${
                      index === 0 ? "rounded-t-[12px]" : ""
                    } ${index === realityPoints.length - 1 ? "rounded-b-[12px]" : "border-t-0"} ${
                      visibleItems.includes(delusionPoints.length + index)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 50}ms` }}
                  >
                    <span className="text-[#59C1A3]">
                      <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <p className="text-[15px] leading-[1.5] text-neutral-600 md:text-[16px]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={footerRef}
            className={`mt-10 flex flex-col items-center justify-center gap-5 rounded-[12px] border-[1.5px] border-primary-100 bg-primary-50 px-7 py-5 transition-all duration-700 lg:flex-row lg:gap-5 ${
              isFooterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M5 20H35M20 35V5M12.5 12.5L27.5 27.5M12.5 27.5L27.5 12.5"
                  stroke="#7863FC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-primary-500">The Result:</p>
            <p className="text-[20px] font-medium leading-[1.5] tracking-[-0.01em] text-neutral-500">
              Sustainable transformation that scales with business growth.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lg\\:bg-dashed-divider {
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(18, 34, 50, 0.35) 0px,
            rgba(18, 34, 50, 0.35) 12px,
            transparent 12px,
            transparent 24px
          );
        }
      `}</style>
    </section>
  );
};

export default TransformationStoriesCompare;
