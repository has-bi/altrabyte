"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

const journeys = [
  {
    id: "path-1",
    pathLabel: "Path 1",
    navLabel: "The Spreadsheet Reality",
    headline: "The Spreadsheet Reality",
    client: "Startup Cosmetics Brand",
    details: [
      {
        label: "Starting Point",
        value: "All business data trapped in Excel files",
      },
      {
        label: "The Challenge",
        value: "Zero data infrastructure, everything manual, no visibility",
      },
      {
        label: "Our Solution",
        value: "Spreadsheet → Cloud Infrastructure → Automated Dashboards",
      },
      {
        label: "The Outcome",
        value:
          "Real-time business visibility, eliminated weekly manual reporting",
      },
      { label: "Timeline", value: "2–3 months from chaos to clarity" },
    ],
    image:
      "https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&w=1200&q=80",
    quote:
      "Literally went from Excel hell to automated intelligence. Now I see my business in real-time instead of waiting weeks for reports.",
    quoteBy: "COO, Startup Cosmetics Brand",
    theme: {
      accent: "#7863FC",
      accentSoft: "#7863FC",
      surface: "white",
      border: "rgba(120, 99, 252, 0.18)",
      gradient:
        "radial-gradient(120% 120% at 0% 0%, rgba(120,99,252,0.12) 0%, rgba(255,255,255,0) 55%)",
    },
  },
  {
    id: "path-2",
    pathLabel: "Path 2",
    navLabel: "The Growing Ambition",
    headline: "The Growing Ambition",
    client: "Small Distribution Company",
    details: [
      {
        label: "Starting Point",
        value: "Scattered data, zero data literacy, big dreams",
      },
      {
        label: "The Challenge",
        value: "Want insights but don't know what questions to ask",
      },
      {
        label: "Our Solution",
        value:
          "Data literacy training → BI infrastructure → Intelligent reporting",
      },
      {
        label: "The Outcome",
        value: "Data-driven decisions, scalable systems, empowered team",
      },
      {
        label: "Timeline",
        value: "3–4 months from confusion to competence",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    quote:
      "They didn't just build our dashboards. They taught us how to think with data. Complete game changer.",
    quoteBy: "CEO, Small Distribution Company",
    theme: {
      accent: "#7863FC",
      accentSoft: "#7863FC",
      surface: "white",
      border: "rgba(139, 126, 246, 0.18)",
      gradient:
        "radial-gradient(120% 120% at 0% 0%, rgba(139,126,246,0.12) 0%, rgba(255,255,255,0) 55%)",
    },
  },
  {
    id: "path-3",
    pathLabel: "Path 3",
    navLabel: "The Scale-Ready Business",
    headline: "The Scale-Ready Business",
    client: "Major Beauty Retailer",
    details: [
      {
        label: "Starting Point",
        value: "Multiple systems, manual processes, automation dreams",
      },
      {
        label: "The Challenge",
        value: "Data integration across e-commerce platforms and social media",
      },
      {
        label: "Our Solution",
        value: "RPA deployment → Automated data ingestion → 24/7 reporting",
      },
      {
        label: "The Outcome",
        value: "Eliminated weeks of manual work, continuous intelligence",
      },
      {
        label: "Timeline",
        value: "6–12 months for complete automation transformation",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    quote:
      "What used to take our team weeks now happens automatically. We focus on growth, not data gathering.",
    quoteBy: "COO, Major Beauty Retailer",
    theme: {
      accent: "#7863FC",
      accentSoft: "#7863FC",
      surface: "white",
      border: "rgba(120, 99, 252, 0.18)",
      gradient:
        "radial-gradient(120% 120% at 0% 0%, rgba(120,99,252,0.12) 0%, rgba(255,255,255,0) 55%)",
    },
  },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const PainSection = () => {
  const sectionRef = useRef(null);
  const journeyRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(() =>
    journeys.map((_, idx) => idx === 0)
  );
  const [lineProgress, setLineProgress] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      setRevealed(journeys.map(() => true));
      setActiveIndex(0);
      setLineProgress(100);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-journey-index"));
          if (Number.isNaN(index)) return;

          if (entry.intersectionRatio > 0.3) {
            setActiveIndex((prev) => (prev === index ? prev : index));
            setRevealed((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });
      },
      {
        root: null,
        threshold: [0.2, 0.3, 0.4, 0.5, 0.6],
        rootMargin: "-15% 0px -15%",
      }
    );

    journeyRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateLineProgress = () => {
      if (!sectionRef.current) return;

      const firstCard = journeyRefs.current[0];
      const lastCard = journeyRefs.current[journeyRefs.current.length - 1];

      if (!firstCard || !lastCard) return;

      const firstCardRect = firstCard.getBoundingClientRect();
      const lastCardRect = lastCard.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate exact distance from bullet 1 to bullet 3
      const bullet1Y = firstCardRect.top;
      const bullet3Y = lastCardRect.top;

      // Calculate the actual distance between the two bullets
      const totalDistance = bullet3Y - bullet1Y;

      // Set the line height based on current positions
      if (totalDistance > 0) {
        setLineHeight(totalDistance);
      }

      // Trigger line growth when first card enters viewport
      const triggerPoint = windowHeight * 0.75;

      if (bullet1Y > triggerPoint) {
        setLineProgress(0);
        return;
      }

      if (bullet3Y < 0) {
        setLineProgress(100);
        return;
      }

      // Calculate progress based on scroll position with smoother interpolation
      const scrolled = triggerPoint - bullet1Y;
      const rawProgress = (scrolled / totalDistance) * 100;
      const progress = clamp(rawProgress, 0, 100);

      setLineProgress(progress);
    };

    const handleScroll = () => {
      lastScrollY.current = window.scrollY;

      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          updateLineProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateLineProgress(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const scrollToStage = useCallback((index) => {
    const node = journeyRefs.current[index];
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offset = 120;
    window.scrollTo({ top: rect.top + scrollTop - offset, behavior: "smooth" });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section relative overflow-hidden bg-[#F8F7FC]"
      aria-labelledby="pain-section-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-90 transition-all duration-700 ease-out"
        style={{ background: journeys[activeIndex].theme.gradient }}
      />

      <div className="section-container relative">
        <header className="text-center mb-16 lg:mb-20">
          <h2
            id="pain-section-heading"
            className="text-3xl font-semibold text-slate-900 md:text-4xl lg:text-[2.6rem]"
          >
            Three Paths, One Destination
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base text-slate-600 md:text-lg leading-relaxed">
            We don't guess where you are. We've walked these exact journeys with
            real clients.
          </p>
        </header>

        <div className="journey-flow">
          {journeys.map((journey, index) => {
            const isActive = index === activeIndex;
            const isCompleted = index < activeIndex;
            const isVisible = revealed[index];
            return (
              <div key={journey.id} className="journey-row">
                <aside
                  className={`timeline-node ${
                    isActive ? "is-active" : isCompleted ? "is-completed" : ""
                  } ${isVisible ? "is-visible" : ""}`}
                  onClick={() => scrollToStage(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      scrollToStage(index);
                    }
                  }}
                >
                  {index === 0 && (
                    <div
                      className="timeline-progress-line"
                      style={{
                        height: `${lineHeight}px`,
                        transform: `scaleY(${lineProgress / 100})`,
                        transformOrigin: "top",
                      }}
                    />
                  )}
                  <span className="timeline-bullet" />

                  <div className="timeline-meta">
                    <span className="timeline-path">{journey.pathLabel}</span>
                    <span className="timeline-title">{journey.navLabel}</span>
                    <span className="timeline-client">{journey.client}</span>
                  </div>
                </aside>

                <article
                  ref={(node) => {
                    journeyRefs.current[index] = node;
                  }}
                  data-journey-index={index}
                  style={{
                    background: journey.theme.surface,
                    borderColor: journey.theme.border,
                  }}
                  className={`journey-card ${isVisible ? "is-visible" : ""} ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  <div className="relative z-[1] px-8 pb-8 pt-8 md:px-10 md:pt-10 md:pb-10">
                    <div
                      className={`card-header ${isVisible ? "is-visible" : ""}`}
                    >
                      <span
                        className="journey-tag"
                        style={{
                          backgroundColor: journey.theme.accentSoft,
                          color: "#ffffff",
                        }}
                      >
                        {journey.pathLabel.toUpperCase()}
                      </span>
                    </div>

                    <h3
                      className={`card-title ${isVisible ? "is-visible" : ""}`}
                    >
                      {journey.headline}
                    </h3>

                    <p
                      className={`card-client ${isVisible ? "is-visible" : ""}`}
                    >
                      Client
                    </p>
                    <p
                      className={`card-client-name ${
                        isVisible ? "is-visible" : ""
                      }`}
                    >
                      {journey.client}
                    </p>

                    <ul
                      className={`card-details ${
                        isVisible ? "is-visible" : ""
                      }`}
                    >
                      {journey.details.map((detail, idx) => (
                        <li
                          key={`${journey.id}-${detail.label}`}
                          className="detail-item"
                          style={{ transitionDelay: `${idx * 80}ms` }}
                        >
                          <span className="detail-label">{detail.label}</span>
                          <span className="detail-value">{detail.value}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`card-image-quote ${
                        isVisible ? "is-visible" : ""
                      }`}
                    >
                      <div className="image-wrapper">
                        <img
                          src={journey.image}
                          alt="Project highlight"
                          className="image-bg"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="image-overlay" />
                        <figure className="quote-overlay">
                          <blockquote>"{journey.quote}"</blockquote>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .timeline-progress-line {
          position: absolute;
          left: calc(0.6rem + 5px);
          top: 7px;
          width: 2.5px;
          background: linear-gradient(
            180deg,
            rgba(120, 99, 252, 0.8) 0%,
            rgba(120, 99, 252, 0.6) 100%
          );
          transition: transform 150ms cubic-bezier(0.33, 1, 0.68, 1);
          will-change: transform;
          pointer-events: none;
          z-index: 0;
        }

        .journey-flow {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }

        .journey-row {
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr);
          gap: 2.5rem;
          align-items: start;
          margin-bottom: 3rem;
        }

        .journey-row:last-child {
          margin-bottom: 0;
        }

        .timeline-node {
          position: relative;
          padding-left: 2rem;
          padding-right: 0.5rem;
          padding-top: 0;
          padding-bottom: 0.85rem;
          cursor: pointer;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          height: 100%;
        }

        .timeline-node.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0ms;
        }

        .timeline-node:focus-visible {
          outline: 2px solid rgba(99, 102, 241, 0.6);
          outline-offset: 6px;
        }

        .timeline-line {
          position: absolute;
          left: 0.9rem;
          width: 2px;
          background: rgba(148, 163, 184, 0);
          transition: background 260ms ease;
        }

        .timeline-line.top {
          top: 0;
          bottom: calc(100% - 7px);
        }

        .timeline-line.bottom {
          top: 7px;
          bottom: calc(-5rem);
        }

        .journey-row:last-child .timeline-line.bottom {
          bottom: 0;
        }

        .timeline-line.is-hidden {
          background: transparent;
        }

        .timeline-node.is-completed .timeline-line,
        .timeline-node.is-active .timeline-line.top {
          background: rgba(99, 102, 241, 0.6);
        }

        .timeline-bullet {
          position: absolute;
          left: 0.6rem;
          top: 0;
          height: 12px;
          width: 12px;
          border-radius: 9999px;
          background: rgba(203, 213, 225, 0.6);
          box-shadow: 0 0 0 5px rgba(248, 247, 252, 1);
          transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1),
            background 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            box-shadow 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 2;
        }

        .timeline-node.is-completed .timeline-bullet {
          background: rgba(120, 99, 252, 0.7);
        }

        .timeline-node.is-active .timeline-bullet {
          transform: scale(1.35);
          background: #7863fc;
          box-shadow: 0 0 0 6px rgba(248, 247, 252, 1),
            0 0 0 1px rgba(120, 99, 252, 0.3);
        }

        .timeline-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .timeline-path {
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #7863fc;
        }

        .timeline-node.is-active .timeline-path {
          color: #6952e8;
        }

        .timeline-title {
          font-size: 0.9375rem;
          font-weight: 600;
          line-height: 1.45;
          color: #0f172a;
        }

        .timeline-client {
          display: none;
        }

        .journey-card {
          position: relative;
          border: 1px solid #e8e7f0;
          border-radius: 1.25rem;
          overflow: hidden;
          opacity: 0;
          transform: translateY(50px);
          background: #ffffff;
          transition: opacity 750ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 750ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            box-shadow 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .journey-card.is-visible {
          opacity: 1;
          transform: translateY(0);
          box-shadow: 0 8px 30px -8px rgba(0, 0, 0, 0.06),
            0 0 1px rgba(0, 0, 0, 0.05);
          transition-delay: 120ms;
        }

        .journey-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0.4rem 1rem;
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* Card content animations */
        .card-header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          margin-bottom: 1.25rem;
        }

        .card-header.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 250ms;
        }

        .card-title {
          font-size: 1.625rem;
          font-weight: 600;
          color: #0f172a;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          margin-bottom: 1.5rem;
          line-height: 1.35;
        }

        .card-title.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 350ms;
        }

        .card-client {
          font-size: 0.6875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
          margin-bottom: 0.375rem;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .card-client.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 400ms;
        }

        .card-client-name {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #1e293b;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .card-client-name.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 420ms;
        }

        .card-details {
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          margin-bottom: 2rem;
        }

        .card-details.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 450ms;
        }

        .detail-item {
          display: grid;
          grid-template-columns: 130px 1fr;
          gap: 2.5rem;
          padding: 1.125rem 0;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-bottom: 1px dotted #e2e8f0;
        }

        .detail-item:last-child {
          border-bottom: none;
        }

        .card-details.is-visible .detail-item {
          opacity: 1;
          transform: translateX(0);
        }

        .detail-label {
          font-size: 0.8125rem;
          font-weight: 500;
          color: #94a3b8;
          line-height: 1.6;
        }

        .detail-value {
          font-size: 0.9375rem;
          font-weight: 400;
          color: #1e293b;
          line-height: 1.65;
        }

        .card-image-quote {
          opacity: 0;
          transform: translateY(25px) scale(0.96);
          transition: opacity 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .card-image-quote.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition-delay: 650ms;
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          height: 300px;
        }

        .image-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(15, 23, 42, 0) 0%,
            rgba(15, 23, 42, 0.4) 45%,
            rgba(15, 23, 42, 0.88) 100%
          );
        }

        .quote-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.75rem 2rem;
          z-index: 1;
        }

        .quote-overlay blockquote {
          font-size: 1rem;
          line-height: 1.7;
          color: #ffffff;
          font-weight: 400;
          margin: 0;
        }

        @media (min-width: 768px) {
          .card-title {
            font-size: 1.875rem;
          }

          .detail-item {
            grid-template-columns: 150px 1fr;
            gap: 3rem;
          }

          .image-wrapper {
            height: 340px;
          }

          .quote-overlay {
            padding: 2rem 2.5rem;
          }

          .quote-overlay blockquote {
            font-size: 1.0625rem;
          }
        }

        @media (max-width: 1024px) {
          .journey-row {
            grid-template-columns: minmax(0, 1fr);
            gap: 2rem;
            margin-bottom: 3rem;
          }

          .timeline-line {
            left: 0.55rem;
          }

          .timeline-line.bottom {
            bottom: calc(-3rem);
          }

          .journey-row:last-child .timeline-line.bottom {
            bottom: 0;
          }

          .timeline-bullet {
            left: 0.26rem;
          }
        }

        @media (max-width: 768px) {
          .journey-flow {
            gap: 3rem;
          }

          .timeline-title {
            font-size: 0.95rem;
          }

          .detail-item {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .image-wrapper {
            height: 280px;
          }

          .quote-overlay {
            padding: 1.5rem;
          }

          .quote-overlay blockquote {
            font-size: 0.9375rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .timeline-node,
          .journey-card,
          .card-header,
          .card-title,
          .card-details,
          .detail-item,
          .card-image,
          .card-quote {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PainSection;
