// src/components/foundation/FoundationAuditPaths.js
"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

const pathOneProcess = [
  {
    title: "Data Infrastructure Assessment",
    accent: true,
    bullets: [
      "Where is your data actually stored? (Spoiler: Usually Excel)",
      "How do you currently generate reports? (Spoiler: Usually manual)",
      'What does "automation" mean to you? (Spoiler: Usually people working faster)',
    ],
  },
  {
    title: "Business Process Mapping",
    accent: false,
    bullets: [
      "Which manual processes are killing productivity?",
      "Where are the bottlenecks that scale horribly?",
      "What decisions are delayed waiting for data?",
    ],
  },
  {
    title: "Technology Stack Evaluation",
    accent: true,
    bullets: [
      "What tools do you actually use daily? (Not what you bought but don't use)",
      "Where are the integration gaps?",
      "What's your current cloud maturity?",
    ],
  },
];

const pathOneDeliverables = [
  {
    title: "Current State Reality",
    description: "(what's actually happening)",
  },
  {
    title: "Timeline & Investment",
    description: "(realistic expectations)",
  },
  {
    title: "Foundation Gaps",
    description: "(what needs to be built)",
  },
  {
    title: "Priority Roadmap",
    description: "(what to fix first, second, third)",
  },
];

const pathOneDeliverableBlock = {
  type: "deliverables",
  title: "The Foundation Audit Deliverable",
  subtitle: "A brutally honest assessment document",
  items: pathOneDeliverables,
  background: "#F2EFFF",
};

const pathTwoProcess = [
  {
    title: "Data\nConsolidation",
    accent: true,
    bullets: [
      "Excel Liberation: Move scattered spreadsheets to proper data storage",
      "Source Integration: Connect your actual systems (ERP, POS, e-commerce, finance)",
      "Data Validation: Ensure accuracy before building anything on top",
    ],
  },
  {
    title: "Business Process\nRedesign",
    accent: false,
    bullets: [
      "Workflow Mapping: Document how work actually flows (vs. how you think it flows)",
      "Bottleneck Elimination: Remove manual handoffs that slow everything down",
      "Standard Operating Procedures: Create repeatable processes that scale",
    ],
  },
  {
    title: "Cloud Infrastructure",
    accent: true,
    bullets: [
      "Scalable Architecture: Build systems that grow with your business",
      "Security & Compliance: Enterprise-grade security from day one",
      "Disaster Recovery: Because your business can't afford downtime",
    ],
  },
];

const pathTwoExample = [
  {
    label: "Before",
    text: "Monthly reports took 3 weeks, 5 people, frequent errors",
  },
  {
    label: "After",
    text: "Real-time inventory dashboard, automated alerts, zero manual input",
  },
  {
    label: "Impact",
    text: "3 weeks → Real-time, 5 people → 0 people, errors → eliminated",
  },
];

const pathTwoCaseStudyBlock = {
  type: "case-study",
  title: "Real Example: Small Distribution Company",
  rows: pathTwoExample,
  background: "#EAE4FF",
};

const pathThreeProcess = [
  {
    title: "Intelligent Automation",
    accent: true,
    bullets: [
      "RPA Implementation: Robots handle repetitive tasks 24/7",
      "Document Processing: AI extracts data from invoices, contracts, forms",
      "Workflow Automation: Intelligent routing based on business rules",
    ],
  },
  {
    title: "Advanced Analytics",
    accent: false,
    bullets: [
      "Predictive Insights: Forecast trends before they happen",
      "Automated Reporting: Updates happen continuously, not monthly",
      "Decision Support: AI recommends actions based on data patterns",
    ],
  },
  {
    title: "Business Intelligence",
    accent: true,
    bullets: [
      "Real-time Dashboards: See your business as it happens",
      "Mobile Access: Critical insights available anywhere",
      "Drill-down Capability: From high-level trends to detailed transactions",
    ],
  },
];

const pathThreeExample = [
  {
    label: "Before",
    text: "Social media data collection took 2 full-time employees, updated weekly",
  },
  {
    label: "After",
    text: "Automated scraping across platforms, real-time competitor intelligence",
  },
  {
    label: "Impact",
    text: "2 FTEs → 0 FTEs, Weekly → Real-time, Manual → Intelligent",
  },
];

const pathThreeCaseStudyBlock = {
  type: "case-study",
  title: "Real Example: Major Beauty Retailer",
  rows: pathThreeExample,
  background: "#E5E6FF",
};

const auditJourneys = [
  {
    id: "audit-path-1",
    pathLabel: "Path 1",
    navLabel: "Foundation Audit",
    duration: "Week 1-2",
    headline: "The Reality Check Process",
    client: "Regional distributor (pre-platform)",
    processSections: pathOneProcess,
    footnote: pathOneDeliverableBlock,
    details: [
      {
        label: "Starting Point",
        value:
          "Data scattered across Excel/Sheets with ad-hoc macros and exports",
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
      {
        label: "Timeline",
        value: "10-day audit, 30–45 days to stabilize",
      },
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
    navLabel: "Infrastructure Build",
    duration: "Month 1-3",
    headline: "From Chaos to Clarity",
    client: "Small distribution company",
    processSections: pathTwoProcess,
    footnote: pathTwoCaseStudyBlock,
    details: [
      {
        label: "Starting Point",
        value:
          "Mix of SaaS tools, no shared IDs, teams rebuilding the same numbers",
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
      {
        label: "Timeline",
        value: "10-day audit, 45–60 days to operationalize",
      },
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
    navLabel: "Automation & Intelligence",
    duration: "Month 2-6",
    headline: "Now AI Actually Works",
    client: "Major beauty retailer",
    processSections: pathThreeProcess,
    footnote: pathThreeCaseStudyBlock,
    details: [
      {
        label: "Starting Point",
        value:
          "Pipelines exist, but quality, lineage, and controls are inconsistent",
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
      {
        label: "Timeline",
        value: "10-day audit, 60–90 days to harden",
      },
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

  const renderProcessColumns = (sections) => (
    <div className="grid gap-12 md:grid-cols-3 md:gap-16">
      {sections.map((section, idx) => (
        <div
          key={section.title}
          className="group flex flex-col gap-6 animation-fade-up"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <h4 className="text-[20px] font-semibold text-[#0F172A] leading-[1.3] tracking-[-0.02em] whitespace-pre-line">
            {section.title}
          </h4>
          <ul className="space-y-4 text-[#475569]">
            {section.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-[15px] leading-[1.6] tracking-[-0.01em] transition-all duration-300 hover:translate-x-1"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7863FC] opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125" />
                <span className="transition-colors duration-300 hover:text-[#0F172A]">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderFootnote = (footnote) => {
    if (!footnote) return null;

    if (footnote.type === "deliverables") {
      return (
        <div
          className="rounded-2xl p-8 md:p-10 animation-fade-up mt-12"
          style={{ backgroundColor: footnote.background ?? "#F2EFFF" }}
        >
          <div className="mb-8">
            <h5 className="text-[22px] font-semibold text-[#0F172A] leading-[1.3] tracking-[-0.02em]">
              {footnote.title}
            </h5>
            <p className="text-[16px] text-[#64748B] mt-2 leading-[1.6]">
              {footnote.subtitle}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {footnote.items.map((item, idx) => (
              <div
                key={item.title}
                className="group relative flex flex-col gap-2 rounded-xl border border-[#E2E8F0] bg-white px-6 py-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7863FC]/10 hover:border-[#7863FC]/20 cursor-default"
              >
                <span className="absolute right-5 top-5 text-xs font-medium text-[#CBD5E1] transition-all duration-300 group-hover:text-[#7863FC] group-hover:scale-110">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] font-semibold text-[#0F172A] pr-8 leading-[1.4] transition-colors duration-300 group-hover:text-[#7863FC]">
                  {item.title}
                </p>
                <p className="text-[14px] text-[#64748B] leading-[1.6] transition-colors duration-300 group-hover:text-[#475569]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (footnote.type === "case-study") {
      const titleParts = footnote.title.split(": ");
      return (
        <div
          className="rounded-[12px] p-5 animation-fade-up mt-12"
          style={{ backgroundColor: footnote.background ?? "#F2EFFF" }}
        >
          <h5 className="text-[16px] font-medium mb-5 leading-[1.5] tracking-[-0.01em]">
            <span className="text-[#7863FC]">{titleParts[0]}:</span>{" "}
            <span className="text-[#122232]">{titleParts[1]}</span>
          </h5>
          <div className="flex flex-col gap-4">
            {footnote.rows.map((row, idx) => (
              <React.Fragment key={row.label}>
                <div className="group flex items-start gap-1 transition-all duration-300 hover:translate-x-1">
                  <p className="text-[14px] font-normal text-[#606B76] leading-[1.4] tracking-[-0.01em] w-[120px] flex-shrink-0 transition-colors duration-300 group-hover:text-[#7863FC]">
                    {row.label}
                  </p>
                  <p className="text-[15px] font-medium text-[#122232] leading-[1.5] tracking-[-0.01em] flex-1 transition-colors duration-300 group-hover:text-[#0F172A]">
                    {row.text}
                  </p>
                </div>
                {idx < footnote.rows.length - 1 && (
                  <div className="w-full h-0 border-t-[1.5px] border-dashed border-[#B6BABF] transition-colors duration-300 hover:border-[#7863FC]/30" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

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
        <header className="mb-20 text-center md:mb-24">
          <h2
            id="audit-paths-heading"
            className="mx-auto max-w-4xl text-[36px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#0F172A] md:text-[42px] lg:text-[48px]"
          >
            Our Three-Phase Methodology
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-[17px] leading-[1.7] tracking-[-0.01em] text-[#64748B] md:text-[18px]">
            Unlike other consultants who assume readiness, we systematically
            build capability.
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
                    {journey.duration && (
                      <div className="audit-duration">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="5" width="16" height="16" rx="2" stroke="#122232" strokeWidth="1.5"/>
                          <rect x="7" y="11" width="4" height="4" rx="1" fill="#122232"/>
                          <line x1="8" y1="2" x2="8" y2="6" stroke="#122232" strokeWidth="1.5" strokeLinecap="round"/>
                          <line x1="16" y1="2" x2="16" y2="6" stroke="#122232" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <span>{journey.duration}</span>
                      </div>
                    )}
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
                  <div className="relative z-[1] px-10 pb-12 pt-10 md:px-14 md:pt-14 md:pb-14">
                    {journey.processSections ? (
                      <div className="flex flex-col gap-10 text-left animation-fade-up">
                        <div className="flex flex-col gap-4">
                          <span className="inline-flex h-[32px] w-[90px] items-center justify-center rounded-full bg-[#7863FC] text-[13px] font-semibold tracking-[0.05em] text-white">
                            {journey.pathLabel.toUpperCase()}
                          </span>
                          <h3 className="text-[28px] md:text-[34px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#0F172A]">
                            {journey.headline}
                          </h3>
                        </div>
                        {renderProcessColumns(journey.processSections)}
                        {renderFootnote(journey.footnote)}
                      </div>
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .animation-fade-up {
          animation: fadeUp 600ms ease forwards;
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .shadow-hover-card {
          transition: transform 350ms ease, box-shadow 350ms ease;
        }

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
          grid-template-columns: 200px minmax(0, 1fr);
          gap: 4rem;
          align-items: start;
          margin-bottom: 4rem;
        }

        .audit-row:last-child {
          margin-bottom: 0;
        }

        .audit-timeline-node {
          position: relative;
          padding-left: 2.5rem;
          padding-right: 0.5rem;
          padding-bottom: 1rem;
          cursor: pointer;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            background 300ms cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          border-radius: 12px;
          margin-left: -0.5rem;
          padding-left: 3rem;
        }

        .audit-timeline-node:hover {
          background: rgba(120, 99, 252, 0.04);
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

        .audit-timeline-node:hover .audit-bullet {
          transform: scale(1.15);
          background: rgba(120, 99, 252, 0.45);
        }

        .audit-timeline-node.is-completed .audit-bullet {
          background: rgba(120, 99, 252, 0.65);
        }

        .audit-timeline-node.is-active .audit-bullet {
          transform: scale(1.35);
          background: #7863fc;
          box-shadow: 0 0 0 6px rgba(242, 239, 255, 1),
            0 0 0 1px rgba(120, 99, 252, 0.3);
        }

        .audit-timeline-node.is-active:hover .audit-bullet {
          transform: scale(1.4);
        }

        .audit-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .audit-path {
          font-size: 1.125rem;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: -0.01em;
          color: #7863fc;
        }

        .audit-timeline-node.is-active .audit-path {
          color: #6952e8;
        }

        .audit-title {
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 1.5;
          color: #122232;
          letter-spacing: -0.01em;
        }

        .audit-duration {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .audit-duration svg {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .audit-duration span {
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 1.5;
          color: #122232;
          letter-spacing: -0.01em;
        }

        .audit-client {
          display: none;
        }

        .audit-card {
          position: relative;
          border: 1px solid #e2e8f0;
          border-radius: 1.5rem;
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          background: #ffffff;
          transition: opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            box-shadow 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            border-color 400ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .audit-card:hover {
          border-color: rgba(120, 99, 252, 0.2);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04),
            0 20px 50px -15px rgba(120, 99, 252, 0.15);
        }

        .audit-card.is-visible {
          opacity: 1;
          transform: translateY(0);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03),
            0 10px 40px -10px rgba(0, 0, 0, 0.08);
          transition-delay: 100ms;
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
          grid-template-columns: 140px 1fr;
          gap: 3rem;
          padding: 1.25rem 0;
          opacity: 0;
          transform: translateX(-5px);
          transition: opacity 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-bottom: 1px solid #f1f5f9;
        }

        .audit-detail-item:last-child {
          border-bottom: none;
        }

        .audit-card-details.is-visible .audit-detail-item {
          opacity: 1;
          transform: translateX(0);
        }

        .audit-detail-label {
          font-size: 0.9375rem;
          font-weight: 400;
          color: #94a3b8;
          line-height: 1.6;
          text-transform: none;
          letter-spacing: normal;
        }

        .audit-detail-value {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #0f172a;
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
          border-radius: 1.25rem;
          height: 320px;
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
          padding: 2rem 2.5rem;
          z-index: 1;
        }

        .audit-quote-overlay blockquote {
          font-size: 1.0625rem;
          line-height: 1.65;
          color: #ffffff;
          font-weight: 400;
          margin: 0;
          letter-spacing: -0.01em;
        }

        @media (min-width: 768px) {
          .audit-card-title {
            font-size: 1.875rem;
          }

          .audit-detail-item {
            grid-template-columns: 160px 1fr;
            gap: 3.5rem;
          }

          .audit-image-wrapper {
            height: 360px;
          }

          .audit-quote-overlay {
            padding: 2.5rem 3rem;
          }

          .audit-quote-overlay blockquote {
            font-size: 1.125rem;
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
            font-size: 0.9rem;
          }

          .audit-detail-item {
            grid-template-columns: 1fr;
            gap: 0.625rem;
            padding: 1rem 0;
          }

          .audit-image-wrapper {
            height: 300px;
          }

          .audit-quote-overlay {
            padding: 1.75rem 2rem;
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
