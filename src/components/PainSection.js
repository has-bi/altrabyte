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
      { label: "Starting Point", value: "All business data trapped in Excel files" },
      {
        label: "The Challenge",
        value: "Zero data infrastructure, every report manual and delayed",
      },
      {
        label: "Our Solution",
        value: "Spreadsheets → Cloud data warehouse → Automated dashboards",
      },
      {
        label: "The Outcome",
        value: "Real-time visibility, manual reporting eliminated in 60 days",
      },
      { label: "Timeline", value: "2–3 months from chaos to clarity" },
    ],
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&w=1200&q=80",
    quote:
      "Literally went from Excel hell to automated intelligence. Now I see the business in real-time instead of waiting weeks for reports.",
    quoteBy: "COO, Startup Cosmetics Brand",
    theme: {
      accent: "#6A4BFF",
      accentSoft: "rgba(106, 75, 255, 0.12)",
      surface: "linear-gradient(180deg, #FBF8FF 0%, #F4ECFF 100%)",
      border: "rgba(106, 75, 255, 0.18)",
      gradient: "radial-gradient(120% 120% at 0% 0%, rgba(106,75,255,0.15) 0%, rgba(255,255,255,0) 55%)",
    },
  },
  {
    id: "path-2",
    pathLabel: "Path 2",
    navLabel: "The Dashboard Plateau",
    headline: "The Dashboard Plateau",
    client: "Regional Retail Franchise",
    details: [
      { label: "Starting Point", value: "Fragmented BI tools, dozens of dashboards, no adoption" },
      {
        label: "The Challenge",
        value: "Leadership drowning in metrics without context or decisions",
      },
      {
        label: "Our Solution",
        value: "Unified semantic layer, KPI stories, decision-ready scorecards",
      },
      {
        label: "The Outcome",
        value: "Weekly exec meetings run on one source of truth, action items owned",
      },
      { label: "Timeline", value: "10 weeks to transform reporting into decisions" },
    ],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    quote:
      "Our dashboards finally tell the story. The team knows what matters each week and why.",
    quoteBy: "VP Operations, Retail Franchise",
    theme: {
      accent: "#21A6FF",
      accentSoft: "rgba(33, 166, 255, 0.14)",
      surface: "linear-gradient(180deg, #F2FBFF 0%, #EBF4FF 100%)",
      border: "rgba(33, 166, 255, 0.2)",
      gradient: "radial-gradient(120% 120% at 0% 0%, rgba(33,166,255,0.14) 0%, rgba(255,255,255,0) 60%)",
    },
  },
  {
    id: "path-3",
    pathLabel: "Path 3",
    navLabel: "The Intelligent Engine",
    headline: "The Intelligent Engine",
    client: "Scale-Up Logistics Platform",
    details: [
      { label: "Starting Point", value: "Reliable dashboards but forecasting stuck in spreadsheets" },
      {
        label: "The Challenge",
        value: "Operations team guessing capacity every week, constant fire-fighting",
      },
      {
        label: "Our Solution",
        value: "Predictive demand models + alerting + embedded playbooks",
      },
      {
        label: "The Outcome",
        value: "Forecast accuracy up 26%, proactive adjustments with hours-notice",
      },
      { label: "Timeline", value: "16 weeks to autonomous analytics" },
    ],
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    quote:
      "We finally run the business ahead of the curve. The system flags issues before customers feel them.",
    quoteBy: "Head of Ops, Logistics Platform",
    theme: {
      accent: "#16C99C",
      accentSoft: "rgba(22, 201, 156, 0.14)",
      surface: "linear-gradient(180deg, #EDFFF9 0%, #F3FFFB 100%)",
      border: "rgba(22, 201, 156, 0.2)",
      gradient: "radial-gradient(120% 120% at 0% 0%, rgba(22,201,156,0.16) 0%, rgba(255,255,255,0) 55%)",
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

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      setRevealed(journeys.map(() => true));
      setActiveIndex(0);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-journey-index"));
          if (Number.isNaN(index)) return;

          if (entry.intersectionRatio > 0.35) {
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
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-10% 0px -10%",
      }
    );

    journeyRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
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
      className="relative overflow-hidden bg-[#F4F0FF]"
      aria-labelledby="pain-section-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{ background: journeys[activeIndex].theme.gradient }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <header className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Three Paths • Real Transformations
          </span>
          <h2
            id="pain-section-heading"
            className="mt-6 text-3xl font-semibold text-slate-900 md:text-4xl lg:text-[2.8rem]"
          >
            Three Paths, One Destination
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            We don’t guess where you are. We’ve walked each of these journeys with real clients and guide you step-by-step to durable impact.
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
                  <span className={`timeline-line top ${index === 0 ? "is-hidden" : ""}`} />
                  <span className="timeline-bullet" />
                  <span
                    className={`timeline-line bottom ${
                      index === journeys.length - 1 ? "is-hidden" : ""
                    }`}
                  />

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
                  <div
                    className="absolute inset-x-0 top-0 h-32 opacity-60"
                    style={{ background: journey.theme.gradient }}
                    aria-hidden="true"
                  />

                  <div className="relative z-[1] px-8 pb-10 pt-9 md:px-12 md:pt-12 md:pb-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="journey-tag"
                        style={{
                          backgroundColor: journey.theme.accentSoft,
                          color: journey.theme.accent,
                        }}
                      >
                        {journey.pathLabel.toUpperCase()}
                      </span>
                      <span className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
                        {journey.client}
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-semibold text-slate-900 md:text-[2.15rem]">
                      {journey.headline}
                    </h3>

                    <ul className="mt-8 divide-y divide-slate-200/80 border-y border-slate-200/80">
                      {journey.details.map((detail) => (
                        <li
                          key={`${journey.id}-${detail.label}`}
                          className="flex flex-col gap-1 py-4 md:flex-row md:items-start md:justify-between"
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:w-48">
                            {detail.label}
                          </span>
                          <span className="text-sm text-slate-700 md:flex-1 md:text-base">
                            {detail.value}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 overflow-hidden rounded-2xl border border-white/60 shadow-inner">
                      <img
                        src={journey.image}
                        alt="Project highlight"
                        className="h-56 w-full object-cover md:h-64"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>

                    <figure className="mt-8 rounded-2xl bg-white/75 p-6 text-slate-700 shadow-sm">
                      <blockquote className="text-base italic md:text-lg">
                        “{journey.quote}”
                      </blockquote>
                      <figcaption className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                        {journey.quoteBy}
                      </figcaption>
                    </figure>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .journey-flow {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        .journey-row {
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr);
          gap: 2.5rem;
          align-items: start;
        }

        .timeline-node {
          position: relative;
          padding-left: 2.4rem;
          padding-right: 1.25rem;
          padding-top: 0.85rem;
          padding-bottom: 0.85rem;
          cursor: pointer;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 420ms ease, transform 420ms ease;
        }

        .timeline-node.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-node:focus-visible {
          outline: 2px solid rgba(99, 102, 241, 0.6);
          outline-offset: 6px;
        }

        .timeline-line {
          position: absolute;
          left: 0.9rem;
          width: 2px;
          background: rgba(148, 163, 184, 0.25);
          transition: background 260ms ease;
        }

        .timeline-line.top {
          top: 0;
          bottom: calc(50% + 12px);
        }

        .timeline-line.bottom {
          top: calc(50% + 12px);
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
          top: 50%;
          height: 14px;
          width: 14px;
          transform: translateY(-50%);
          border-radius: 9999px;
          background: rgba(148, 163, 184, 0.45);
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.85);
          transition: transform 220ms ease, background 220ms ease, box-shadow 220ms ease;
        }

        .timeline-node.is-completed .timeline-bullet {
          background: rgba(99, 102, 241, 0.6);
        }

        .timeline-node.is-active .timeline-bullet {
          transform: translateY(-50%) scale(1.25);
          background: #0f172a;
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.95);
        }

        .timeline-meta {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .timeline-path {
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(148, 163, 184, 0.8);
        }

        .timeline-node.is-active .timeline-path {
          color: rgba(15, 23, 42, 0.78);
        }

        .timeline-title {
          font-size: 1.05rem;
          font-weight: 600;
          line-height: 1.3;
          color: #0f172a;
        }

        .timeline-client {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: rgba(100, 116, 139, 0.75);
        }

        .journey-card {
          position: relative;
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 1.75rem;
          overflow: hidden;
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 420ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 480ms ease;
        }

        .journey-card.is-visible {
          opacity: 1;
          transform: translateY(0);
          box-shadow: 0 32px 90px -45px rgba(30, 41, 59, 0.35);
        }

        .journey-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0.35rem 0.9rem;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        @media (max-width: 1024px) {
          .journey-row {
            grid-template-columns: minmax(0, 1fr);
            gap: 2rem;
          }

          .timeline-line {
            left: 0.55rem;
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

          .timeline-client {
            font-size: 0.7rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .timeline-node,
          .journey-card {
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
