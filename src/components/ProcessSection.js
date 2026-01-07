"use client";
import React, { useEffect, useRef, useState } from "react";

const phases = [
  {
    id: 1,
    label: "Phase 1",
    title: "Foundation Audit",
    subtitle: '"Show me your database" and "Show me your automation"',
    points: [
      "If they hesitate or point to Excel, we know exactly what to fix",
      "90% of companies aren't ready for what they think they want",
    ],
  },
  {
    id: 2,
    label: "Phase 2",
    title: "Infrastructure Build",
    subtitle: "Your methodology, your timeline, your foundation",
    points: [
      "Data consolidation from chaos to clarity",
      "Business process mapping and optimization",
      "Cloud infrastructure that actually scales",
    ],
  },
  {
    id: 3,
    label: "Phase 3",
    title: "Automation & Intelligence",
    subtitle: "Now AI and automation actually work",
    points: [
      "Intelligent automation for repetitive processes",
      "Smart dashboards with business logic",
      "24/7 automated insights that drive decisions",
    ],
  },
];

const ProcessSection = () => {
  const [visiblePhases, setVisiblePhases] = useState([]);
  const phaseRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-phase-index"));
          if (entry.isIntersecting && !visiblePhases.includes(index)) {
            setVisiblePhases((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-10% 0px",
      }
    );

    phaseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visiblePhases]);

  return (
    <section ref={sectionRef} className="process-section">
      <div className="process-container">
        <header className="process-header">
          <h2>Our Foundation-First Method</h2>
          <p>
            Unlike other consultants who assume you're ready for AI, we assume
            you need foundation work.
          </p>
        </header>

        {/* Timeline with phase labels */}
        <div className="timeline-wrapper">
          <div className="timeline-line" />
          <div className="timeline-labels">
            {phases.map((phase) => (
              <div key={phase.id} className="timeline-label">
                {phase.label}
              </div>
            ))}
          </div>
        </div>

        {/* Phase content grid */}
        <div className="phases-grid">
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              ref={(el) => (phaseRefs.current[index] = el)}
              data-phase-index={index}
              className={`phase-content ${
                visiblePhases.includes(index) ? "is-visible" : ""
              }`}
            >
              <h3 className="phase-title">{phase.title}</h3>
              <p className="phase-subtitle">{phase.subtitle}</p>

              <ul className="phase-points">
                {phase.points.map((point, idx) => (
                  <li key={idx} className="point-item">
                    <svg
                      className="check-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="10"
                        fill="currentColor"
                        opacity="0.2"
                      />
                      <path
                        d="M6 10L8.5 12.5L14 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Vertical separator - except after last item */}
              {index < phases.length - 1 && (
                <div className="vertical-separator" />
              )}
            </div>
          ))}
        </div>

        {/* Result callout */}
        <div className="result-callout">
          <div className="result-icon">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66675 16.667H31.6667M16.6667 31.667V1.66699M9.16675 9.16699L24.1667 24.167M9.16675 24.167L24.1667 9.16699"
                stroke="#7863FC"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="result-content">
            <span className="result-label">The Result:</span>
            <span className="result-text">
              You don't just get analytics. You get a business that runs on
              intelligence instead of guesswork.
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .process-section {
          position: relative;
          padding: 5rem 1.5rem 6rem;
          background: linear-gradient(
            180deg,
            #1a2c42 0%,
            #1e2538 40%,
            #2d2645 100%
          );
          overflow: hidden;
        }

        .process-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/images/element/perspective-grid.png");
          background-size: 140% 140%;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.65;
          pointer-events: none;
          transform: scaleX(1.02);
          z-index: 0;
        }

        .process-section::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
              168.7% 100% at 50% 0%,
              #122232 73%,
              rgba(18, 34, 50, 0.740489) 85%,
              rgba(18, 34, 50, 0) 100%
            ),
            linear-gradient(
              180deg,
              rgba(18, 34, 50, 0.95) 0%,
              rgba(18, 34, 50, 0.75) 45%,
              rgba(18, 34, 50, 0) 100%
            );
          background-size: 100% 100%, 100% 55%;
          background-position: center top, top;
          background-repeat: no-repeat;
          pointer-events: none;
          z-index: 1;
        }

        .process-container {
          position: relative;
          max-width: 72rem;
          margin: 0 auto;
          z-index: 2;
        }

        .process-header {
          margin-bottom: 4.5rem;
          animation: fadeIn 800ms ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .process-header h2 {
          font-size: 2.25rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.875rem;
          line-height: 1.2;
        }

        .process-header p {
          font-size: 1.0625rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .timeline-wrapper {
          position: relative;
          margin-bottom: 3.5rem;
        }

        .timeline-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2.5px;
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-50%);
          overflow: hidden;
        }

        .timeline-line::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 35%,
            rgba(120, 99, 252, 0.5) 45%,
            rgba(7, 162, 118, 0.85) 50%,
            rgba(120, 99, 252, 0.5) 55%,
            transparent 65%,
            transparent 100%
          );
          animation: flowLight 3s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes flowLight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        .timeline-labels {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 2;
        }

        .timeline-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1.5rem;
          background: rgba(71, 85, 105, 0.7);
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.8125rem;
          font-weight: 600;
          border-radius: 999px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .phases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.5rem;
          margin-bottom: 4rem;
          position: relative;
        }

        .phase-content {
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          transition: all 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .phase-content.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .phase-content:nth-child(1).is-visible {
          transition-delay: 0ms;
        }

        .phase-content:nth-child(2).is-visible {
          transition-delay: 150ms;
        }

        .phase-content:nth-child(3).is-visible {
          transition-delay: 300ms;
        }

        .vertical-separator {
          position: absolute;
          top: 0;
          right: -1.75rem;
          bottom: 0;
          width: 1px;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.12) 0px,
            rgba(255, 255, 255, 0.12) 5px,
            transparent 5px,
            transparent 10px
          );
        }

        .phase-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .phase-subtitle {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 1.75rem;
          line-height: 1.6;
        }

        .phase-points {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
        }

        .check-icon {
          flex-shrink: 0;
          color: #7863fc;
          margin-top: 0.125rem;
        }

        .result-callout {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(255, 255, 255, 0.98);
          border: 12px solid rgba(255, 255, 255, 0.16);
          border-radius: 1.5rem;
          padding: 2rem 2.5rem;
          background-clip: padding-box;
          backdrop-filter: blur(10px);
          animation: fadeIn 900ms ease-out 500ms backwards;
        }

        .result-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          background: rgba(120, 99, 252, 0.12);
          color: #7c3aed;
          border-radius: 0.75rem;
        }

        .result-content {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 0.5rem;
        }

        .result-label {
          font-size: 1.0625rem;
          font-weight: 700;
          color: #7c3aed;
        }

        .result-text {
          font-size: 1.0625rem;
          color: #1f2937;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .process-section {
            padding: 6rem 2rem 7rem;
          }

          .process-header {
            margin-bottom: 5rem;
          }

          .process-header h2 {
            font-size: 2.75rem;
          }

          .process-header p {
            font-size: 1.125rem;
          }

          .timeline-wrapper {
            margin-bottom: 4rem;
          }

          .phases-grid {
            gap: 4rem;
            margin-bottom: 4.5rem;
          }

          .vertical-separator {
            right: -2rem;
          }

          .phase-title {
            font-size: 1.625rem;
          }

          .phase-subtitle {
            font-size: 1rem;
          }

          .point-item {
            font-size: 1rem;
          }
        }

        @media (min-width: 1024px) {
          .process-section {
            padding: 7rem 2rem 8rem;
          }
        }

        @media (max-width: 768px) {
          .process-section {
            padding: 4rem 1.25rem 5rem;
          }

          .timeline-wrapper {
            display: none;
          }

          .phases-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .vertical-separator {
            display: none;
          }

          .result-callout {
            flex-direction: column;
            padding: 1.75rem 1.5rem;
            text-align: center;
            gap: 1rem;
          }

          .result-content {
            flex-direction: column;
            gap: 0.375rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
