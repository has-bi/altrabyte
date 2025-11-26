// src/components/foundation/FoundationAuditPaths.js
"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

const auditJourneys = [
  {
    id: "audit-path-1",
    pathLabel: "Path 1",
    navLabel: "Spreadsheet Reality",
    headline: "If the business still runs on spreadsheets",
    client: "Regional distributor (pre-platform)",
    details: [
      {
        label: "Starting Point",
        value: "Data scattered across Excel/Sheets with ad-hoc macros and exports",
      },
      {
        label: "What we audit",
        value:
          "File sprawl, manual joins, governance gaps, and fragile dependencies in day-to-day ops",
      },
      {
        label: "What you get",
        value:
          "Foundation map, first automated ingestion, and a clean reporting pack to replace the weekly scramble",
      },
      { label: "Timeline", value: "10-day audit, 30–45 days to stabilize" },
    ],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    quote:
      "We thought we needed AI. Turns out we needed to stop copy-pasting CSVs and build a single source of truth first.",
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
    id: "audit-path-2",
    pathLabel: "Path 2",
    navLabel: "Disconnected Systems",
    headline: "If you have tools, but nothing talks to each other",
    client: "Omnichannel retailer (mid-growth)",
    details: [
      {
        label: "Starting Point",
        value: "Mix of SaaS tools, no shared IDs, teams rebuilding the same numbers",
      },
      {
        label: "What we audit",
        value:
          "Data contracts, integrations, lineage, and how governance breaks between marketing, sales, and ops",
      },
      {
        label: "What you get",
        value:
          "Unified entities, reconciled KPIs, and an execution plan for the first automation loops",
      },
      { label: "Timeline", value: "10-day audit, 45–60 days to operationalize" },
    ],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    quote:
      "Seeing the lineage exposed every gap. The audit showed exactly where to fix data contracts before automating anything.",
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
    id: "audit-path-3",
    pathLabel: "Path 3",
    navLabel: "AI-Ready, But Blocked",
    headline: "If you’re ready for AI but trust in the data is low",
    client: "Enterprise marketplace (scale)",
    details: [
      {
        label: "Starting Point",
        value: "Pipelines exist, but quality, lineage, and controls are inconsistent",
      },
      {
        label: "What we audit",
        value:
          "Data quality SLAs, observability, RBAC, PII handling, and how models consume upstream data",
      },
      {
        label: "What you get",
        value:
          "Risk register, control plan, and a prioritized roadmap to productionize AI safely",
      },
      { label: "Timeline", value: "10-day audit, 60–90 days to harden" },
    ],
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    quote:
      "We paused a seven-figure AI project because we couldn't trust the inputs. The audit gave us the confidence — and controls — to ship.",
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

const FoundationAuditPaths = () => {
  const sectionRef = useRef(null);
  const journeyRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(() =>
    auditJourneys.map((_, idx) => idx === 0)
  );
  const [lineProgress, setLineProgress] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      setRevealed(auditJourneys.map(() => true));
      setActiveIndex(0);
      setLineProgress(100);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-journey-index"));
          if (Number.isNaN(index)) return;

          if (entry.intersectionRatio > 0.25) {
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
        threshold: [0.2, 0.25, 0.35, 0.45, 0.6],
        rootMargin: "-15% 0px -15%",
      }
    );

    journeyRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateLineProgress = () => {
      if (!sectionRef.current) return;
      const firstCard = journeyRefs.current[0];
      const lastCard = journeyRefs.current[journeyRefs.current.length - 1];
      if (!firstCard || !lastCard) return;

      const firstRect = firstCard.getBoundingClientRect();
      const lastRect = lastCard.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const bullet1Y = firstRect.top;
      const bullet3Y = lastRect.top;
      const totalDistance = bullet3Y - bullet1Y;
      if (totalDistance > 0) setLineHeight(totalDistance);

      const triggerPoint = windowHeight * 0.75;
      if (bullet1Y > triggerPoint) {
        setLineProgress(0);
        return;
      }
      if (bullet3Y < 0) {
        setLineProgress(100);
        return;
      }

      const scrolled = triggerPoint - bullet1Y;
      const rawProgress = (scrolled / totalDistance) * 100;
      setLineProgress(clamp(rawProgress, 0, 100));
    };

    const handleScroll = () => {
      rafRef.current = requestAnimationFrame(updateLineProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateLineProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
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
      className="section relative overflow-hidden bg-[#F2EFFF]"
      aria-labelledby="audit-paths-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-90 transition-all duration-700 ease-out"
        style={{ background: auditJourneys[activeIndex].theme.gradient }}
      />

      <div className="section-container relative">
        <header className="mb-14 text-center md:mb-16">
          <h2
            id="audit-paths-heading"
            className="mx-auto max-w-3xl text-[34px] font-medium leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[38px] lg:text-[40px]"
          >
            Three ways we meet you in the audit — and what happens next
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[18px] leading-[1.5] tracking-[-0.01em] text-neutral-400 md:text-[20px]">
            Pick the reality that feels closest. We map the truth, de-risk it,
            and give you a blueprint that fits your starting point.
          </p>
        </header>

        <div className="audit-flow">
          {auditJourneys.map((journey, index) => {
            const isActive = index === activeIndex;
            const isCompleted = index < activeIndex;
            const isVisible = revealed[index];

            return (
              <div key={journey.id} className="audit-row">
                <aside
                  className={`audit-timeline-node ${
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
                      className="audit-progress-line"
                      style={{
                        height: `${lineHeight}px`,
                        transform: `scaleY(${lineProgress / 100})`,
                        transformOrigin: "top",
                      }}
                    />
                  )}
                  <span className="audit-bullet" />

                  <div className="audit-meta">
                    <span className="audit-path">{journey.pathLabel}</span>
                    <span className="audit-title">{journey.navLabel}</span>
                    <span className="audit-client">{journey.client}</span>
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
                  className={`audit-card ${isVisible ? "is-visible" : ""} ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  <div className="relative z-[1] px-8 pb-8 pt-8 md:px-10 md:pt-10 md:pb-10">
                    <div
                      className={`audit-card-header ${
                        isVisible ? "is-visible" : ""
                      }`}
                    >
                      <span
                        className="audit-tag"
                        style={{
                          backgroundColor: journey.theme.accentSoft,
                          color: "#ffffff",
                        }}
                      >
                        {journey.pathLabel.toUpperCase()}
                      </span>
                    </div>

                    <h3
                      className={`audit-card-title ${
                        isVisible ? "is-visible" : ""
                      }`}
                    >
                      {journey.headline}
                    </h3>

                    <p
                      className={`audit-card-client ${
                        isVisible ? "is-visible" : ""
                      }`}
                    >
                      Client
                    </p>
                    <p
                      className={`audit-card-client-name ${
                        isVisible ? "is-visible" : ""
                      }`}
                    >
                      {journey.client}
                    </p>

                    <ul
                      className={`audit-card-details ${
                        isVisible ? "is-visible" : ""
                      }`}
                    >
                      {journey.details.map((detail, idx) => (
                        <li
                          key={`${journey.id}-${detail.label}`}
                          className="audit-detail-item"
                          style={{ transitionDelay: `${idx * 80}ms` }}
                        >
                          <span className="audit-detail-label">
                            {detail.label}
                          </span>
                          <span className="audit-detail-value">
                            {detail.value}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`audit-card-image-quote ${
                        isVisible ? "is-visible" : ""
                      }`}
                    >
                      <div className="audit-image-wrapper">
                        <img
                          src={journey.image}
                          alt="Audit highlight"
                          className="audit-image-bg"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="audit-image-overlay" />
                        <figure className="audit-quote-overlay">
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
        .audit-progress-line {
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

        .audit-flow {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }

        .audit-row {
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr);
          gap: 2.5rem;
          align-items: start;
          margin-bottom: 3rem;
        }

        .audit-row:last-child {
          margin-bottom: 0;
        }

        .audit-timeline-node {
          position: relative;
          padding-left: 2rem;
          padding-right: 0.5rem;
          padding-bottom: 0.85rem;
          cursor: pointer;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          height: 100%;
        }

        .audit-timeline-node.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .audit-timeline-node:focus-visible {
          outline: 2px solid rgba(120, 99, 252, 0.35);
          outline-offset: 6px;
        }

        .audit-bullet {
          position: absolute;
          left: 0.6rem;
          top: 0;
          height: 12px;
          width: 12px;
          border-radius: 9999px;
          background: rgba(120, 99, 252, 0.25);
          box-shadow: 0 0 0 5px rgba(242, 239, 255, 1);
          transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1),
            background 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            box-shadow 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 2;
        }

        .audit-timeline-node.is-completed .audit-bullet {
          background: rgba(120, 99, 252, 0.65);
        }

        .audit-timeline-node.is-active .audit-bullet {
          transform: scale(1.35);
          background: #7863FC;
          box-shadow: 0 0 0 6px rgba(242, 239, 255, 1),
            0 0 0 1px rgba(120, 99, 252, 0.3);
        }

        .audit-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .audit-path {
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #7863FC;
        }

        .audit-timeline-node.is-active .audit-path {
          color: #6952e8;
        }

        .audit-title {
          font-size: 0.9375rem;
          font-weight: 600;
          line-height: 1.45;
          color: #0f172a;
        }

        .audit-client {
          display: none;
        }

        .audit-card {
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

        .audit-card.is-visible {
          opacity: 1;
          transform: translateY(0);
          box-shadow: 0 8px 30px -8px rgba(0, 0, 0, 0.06),
            0 0 1px rgba(0, 0, 0, 0.05);
          transition-delay: 120ms;
        }

        .audit-tag {
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

        .audit-card-header {
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

        .audit-card-header.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 250ms;
        }

        .audit-card-title {
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

        .audit-card-title.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 350ms;
        }

        .audit-card-client {
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

        .audit-card-client.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 400ms;
        }

        .audit-card-client-name {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #1e293b;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .audit-card-client-name.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 420ms;
        }

        .audit-card-details {
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          margin-bottom: 2rem;
        }

        .audit-card-details.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 450ms;
        }

        .audit-detail-item {
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

        .audit-detail-item:last-child {
          border-bottom: none;
        }

        .audit-card-details.is-visible .audit-detail-item {
          opacity: 1;
          transform: translateX(0);
        }

        .audit-detail-label {
          font-size: 0.8125rem;
          font-weight: 500;
          color: #94a3b8;
          line-height: 1.6;
        }

        .audit-detail-value {
          font-size: 0.9375rem;
          font-weight: 400;
          color: #1e293b;
          line-height: 1.65;
        }

        .audit-card-image-quote {
          opacity: 0;
          transform: translateY(25px) scale(0.96);
          transition: opacity 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .audit-card-image-quote.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition-delay: 650ms;
        }

        .audit-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          height: 300px;
        }

        .audit-image-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .audit-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(15, 23, 42, 0) 0%,
            rgba(15, 23, 42, 0.4) 45%,
            rgba(15, 23, 42, 0.88) 100%
          );
        }

        .audit-quote-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.75rem 2rem;
          z-index: 1;
        }

        .audit-quote-overlay blockquote {
          font-size: 1rem;
          line-height: 1.7;
          color: #ffffff;
          font-weight: 400;
          margin: 0;
        }

        @media (min-width: 768px) {
          .audit-card-title {
            font-size: 1.875rem;
          }

          .audit-detail-item {
            grid-template-columns: 150px 1fr;
            gap: 3rem;
          }

          .audit-image-wrapper {
            height: 340px;
          }

          .audit-quote-overlay {
            padding: 2rem 2.5rem;
          }

          .audit-quote-overlay blockquote {
            font-size: 1.0625rem;
          }
        }

        @media (max-width: 1024px) {
          .audit-row {
            grid-template-columns: minmax(0, 1fr);
            gap: 2rem;
            margin-bottom: 3rem;
          }

          .audit-bullet {
            left: 0.26rem;
          }
        }

        @media (max-width: 768px) {
          .audit-flow {
            gap: 3rem;
          }

          .audit-title {
            font-size: 0.95rem;
          }

          .audit-detail-item {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .audit-image-wrapper {
            height: 280px;
          }

          .audit-quote-overlay {
            padding: 1.5rem;
          }

          .audit-quote-overlay blockquote {
            font-size: 0.9375rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .audit-timeline-node,
          .audit-card,
          .audit-card-header,
          .audit-card-title,
          .audit-card-details,
          .audit-detail-item,
          .audit-card-image-quote {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundationAuditPaths;
