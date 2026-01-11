"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRightLeft, BadgeCheck, LifeBuoy, Target } from "lucide-react";

const cards = [
  {
    title: "The Delusion",
    description: "We need advanced analytics and AI",
    icon: ArrowRightLeft,
  },
  {
    title: "The Reality",
    description: "Foundation is broken, processes are manual",
    icon: BadgeCheck,
  },
  {
    title: "The Solution",
    description: "Fix foundation first, then automate what matters",
    icon: LifeBuoy,
  },
  {
    title: "The Result",
    description: "Intelligence that actually drives business growth",
    icon: Target,
  },
];

const TransformationStoriesPattern = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const cardRefs = useRef([]);
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
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-card-index"));
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => cardObserver.disconnect();
  }, [visibleCards]);

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
    <section className="bg-primary-50 px-4 py-12 md:py-20">
      <div className="section-container">
        <header
          ref={headerRef}
          className={`flex flex-col items-center gap-3 text-center transition-all duration-700 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-[36px] font-semibold leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[40px]">
            The Pattern We See Everywhere
          </h2>
          <p className="text-[18px] leading-[1.5] text-neutral-400 md:text-[20px]">
            Every transformation follows the same sequence — no matter the industry, size, or starting point.
          </p>
        </header>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                ref={(el) => (cardRefs.current[index] = el)}
                data-card-index={index}
                className={`relative flex h-full flex-col gap-5 rounded-[12px] bg-[#D5CFFE] p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-600 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white transition-transform duration-300 hover:scale-110">
                  <Icon className="h-7 w-7 text-primary-500" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[22px] font-semibold leading-[1.4] text-neutral-500">
                    {card.title}
                  </h3>
                  <p className="text-[18px] leading-[1.5] text-neutral-500/90">{card.description}</p>
                </div>
                <span className="absolute right-3 top-3 h-3 w-3 rounded-full bg-primary-50 shadow-[inset_-2px_2px_2px_rgba(0,0,0,0.25)]" />
              </article>
            );
          })}
        </div>

        <div
          ref={footerRef}
          className={`mt-12 rounded-[12px] bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-700 ${
            isFooterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
            <div className="flex items-center gap-3 text-neutral-500">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13.2389 0.0630665C11.2975 0.350176 9.53385 1.24796 8.14844 2.66528C7.29167 3.54028 6.67643 4.50187 6.2207 5.68676L6.07487 6.06958L5.69206 6.21541C3.8099 6.94002 2.2513 8.24796 1.23503 9.95239C0.38737 11.3743 0 12.8053 0 14.5097C0 16.5012 0.601563 18.2831 1.80469 19.8645C1.98698 20.1015 2.33789 20.498 2.58398 20.7441C3.9375 22.1021 5.57813 22.9316 7.49675 23.2415C8.46745 23.3964 9.85742 23.3463 10.8327 23.123C13.1387 22.5989 15.2624 21.0403 16.4701 18.9849C16.7435 18.5201 16.8939 18.2056 17.1126 17.636L17.2585 17.2532L17.6413 17.1073C19.5234 16.3827 21.082 15.0748 22.0983 13.3704C22.946 11.9485 23.3333 10.5175 23.3333 8.81306C23.3333 6.82153 22.7318 5.03963 21.5286 3.45825C21.3464 3.22127 20.9954 2.82479 20.7493 2.57869C19.3958 1.22062 17.7552 0.391191 15.8366 0.081295C15.1849 -0.0189648 13.8861 -0.02808 13.2389 0.0630665ZM15.1667 2.18676C16.2786 2.30525 17.2448 2.65161 18.1608 3.25317C20.6901 4.9257 21.7884 8.07478 20.8451 10.9322C20.6764 11.4472 20.2799 12.2265 19.9518 12.6868C19.4551 13.3886 18.6257 14.1633 17.9238 14.5735L17.6823 14.7102V14.2454C17.6823 12.5364 17.0078 10.6132 15.8913 9.13208C15.5358 8.66267 14.6654 7.79223 14.196 7.43676C13.2845 6.74861 12.2318 6.23364 11.1426 5.93741C10.5592 5.77791 9.625 5.64575 9.08268 5.64575H8.61784L8.75456 5.40421C9.1556 4.72517 9.9349 3.87752 10.6003 3.40356C11.9492 2.44197 13.5671 2.00903 15.1667 2.18676ZM5.75586 10.2714C5.9974 11.6978 6.57162 13.0331 7.44206 14.1907C7.79753 14.6601 8.66797 15.5305 9.13737 15.886C10.0488 16.5741 11.1016 17.0891 12.1908 17.3853C12.7741 17.5448 13.7083 17.677 14.2507 17.677H14.7155L14.5788 17.9185C14.3327 18.3378 13.9408 18.83 13.5124 19.2493C11.8854 20.8625 9.5612 21.5188 7.31901 20.9947C4.86719 20.425 2.90299 18.4609 2.33333 16.009C1.97786 14.4778 2.14648 12.9784 2.84375 11.5474C3.38607 10.44 4.30664 9.42374 5.3457 8.79484L5.62826 8.62166L5.6556 9.24145C5.67383 9.58325 5.7194 10.0435 5.75586 10.2714Z"
                    fill="#7863FC"
                  />
                </svg>
              </span>
              <h4 className="text-[22px] font-semibold leading-[1.4]">The difference?</h4>
            </div>
            <div className="hidden h-px flex-1 bg-dashed-line lg:block" />
          </div>
          <p className="mt-4 text-[18px] leading-[1.6] text-neutral-500">
            "We meet companies exactly where they are - whether that's Excel spreadsheets or scattered systems - and
            systematically build capability."
          </p>
        </div>
      </div>
      <style jsx>{`
        .bg-dashed-line {
          background-image: repeating-linear-gradient(
            to right,
            rgba(18, 34, 50, 0.3) 0,
            rgba(18, 34, 50, 0.3) 8px,
            transparent 8px,
            transparent 16px
          );
          height: 1.5px;
        }
      `}</style>
    </section>
  );
};

export default TransformationStoriesPattern;
