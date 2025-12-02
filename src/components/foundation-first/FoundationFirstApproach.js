// src/components/foundation-first/FoundationFirstApproach.js
"use client";
import React, { useEffect, useRef, useState } from "react";

const phases = [
  {
    id: 1,
    label: "1",
    content:
      "Companies want advanced analytics (machine learning, AI, predictive models)",
  },
  {
    id: 2,
    label: "2",
    content:
      "Their foundation is broken (Excel databases, manual processes, scattered data)",
  },
  {
    id: 3,
    label: "3",
    content: "Projects fail or underdeliver because they're built on quicksand",
  },
  {
    id: 4,
    label: "4",
    content:
      "We fix foundation first and suddenly everything else becomes possible",
  },
];

const FoundationFirstApproach = () => {
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
          <h2>The Foundation First Methodology</h2>
          <p>Born from 10 Years of Pattern Recognition</p>
        </header>

        <div className="journey-subtitle">
          Across 6 organizations and 5 industries, we saw the same pattern
        </div>

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
              } is-expanded`}
            >
              <div className="phase-content-text">{phase.content}</div>

              {/* Vertical separator - except after last item */}
              {index < phases.length - 1 && (
                <div className="vertical-separator" />
              )}
            </div>
          ))}
        </div>

        {/* Why This Approach Works Container */}
        <div className="audit-container">
          <h3 className="audit-title">Why This Approach Works</h3>

          <div className="approach-details-container">
            {/* Industry Experience Container */}
            <div className="industry-experience-container">
              <h3 className="industry-experience-title">
                Industry Experience That Matters
              </h3>

              <div className="industry-experience-details-container">
                {/* Row 1 - 3 cards */}
                <div className="education-training-row">
                  {/* Education & Training */}
                  <div className="industry-card">
                    <div className="industry-card-icon-container">
                      <div className="industry-card-icon-background">
                        <svg
                          className="industry-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M2.66699 10.6667L16.0003 4L29.3337 10.6667L16.0003 17.3333L2.66699 10.6667Z"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M29.333 13.3333V10.6667"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration"></div>
                    </div>
                    <div className="industry-card-text-container">
                      <h4 className="industry-card-title">
                        Education & Training
                      </h4>
                      <p className="industry-card-description">
                        Universities to professional development
                      </p>
                    </div>
                  </div>

                  {/* Energy & Finance */}
                  <div className="industry-card">
                    <div className="industry-card-icon-container">
                      <div className="industry-card-icon-background">
                        <svg
                          className="industry-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M4 4H6.66667C8.5 4 10 5.5 10 7.33333V10H2.66667V7.33333C2.66667 5.5 4.16667 4 6 4H4Z"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.66699 6.66602V4.66602"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.66699 20V22.666"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="6.66699"
                            cy="13.333"
                            r="2.66667"
                            stroke="#7863FC"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration"></div>
                    </div>
                    <div className="industry-card-text-container">
                      <h4 className="industry-card-title">Energy & Finance</h4>
                      <p className="industry-card-description">
                        Cross-industry portfolio experience
                      </p>
                    </div>
                  </div>

                  {/* Beauty & Cosmetics */}
                  <div className="industry-card">
                    <div className="industry-card-icon-container">
                      <div className="industry-card-icon-background">
                        <svg
                          className="industry-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M6.66699 16C6.66699 16 8.00033 13.3333 12.0003 13.3333"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="8"
                            cy="8"
                            r="4"
                            stroke="#7863FC"
                            strokeWidth="2"
                          />
                          <circle
                            cx="24"
                            cy="8"
                            r="3"
                            stroke="#7863FC"
                            strokeWidth="2"
                          />
                          <path
                            d="M6.66699 13.333C6.66699 13.333 8.00033 16 12.0003 16"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration"></div>
                    </div>
                    <div className="industry-card-text-container">
                      <h4 className="industry-card-title">
                        Beauty & Cosmetics
                      </h4>
                      <p className="industry-card-description">
                        Global enterprise to startup brands
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 2 - 2 wider cards */}
                <div className="ecommerce-technology-row">
                  {/* E-commerce & Technology */}
                  <div className="industry-card-wide">
                    <div className="industry-card-icon-container">
                      <div className="industry-card-icon-background">
                        <svg
                          className="industry-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M4 8H10.6667L13.3333 24H26.6667"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.666 2.66602L12.666 8.66602"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.666 16H26.666L28 10H11.333"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="17.333"
                            cy="20"
                            r="1.33333"
                            stroke="#7863FC"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration"></div>
                    </div>
                    <div className="industry-card-text-container">
                      <h4 className="industry-card-title">
                        E-commerce & Technology
                      </h4>
                      <p className="industry-card-description">
                        Platforms, marketplaces, health tech
                      </p>
                    </div>
                  </div>

                  {/* Distribution & Logistics */}
                  <div className="industry-card-wide">
                    <div className="industry-card-icon-container">
                      <div className="industry-card-icon-background">
                        <svg
                          className="industry-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M21.333 24C21.333 24 22.666 24 22.666 22.666C22.666 21.333 21.333 17.333 16 17.333C10.666 17.333 9.33301 21.333 9.33301 22.666C9.33301 24 10.666 24 10.666 24"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="16"
                            cy="13.333"
                            r="2.66667"
                            stroke="#7863FC"
                            strokeWidth="2"
                          />
                          <path
                            d="M2.66699 5.33398H29.3337V20.0007H2.66699V5.33398Z"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 25.333H24"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration"></div>
                    </div>
                    <div className="industry-card-text-container">
                      <h4 className="industry-card-title">
                        Distribution & Logistics
                      </h4>
                      <p className="industry-card-description">
                        Multi-national operations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vector Divider */}
            <div className="vector-divider"></div>

            {/* Leadership Experience Container */}
            <div className="leadership-experience-container">
              <h3 className="leadership-experience-title">
                Leadership Experience
              </h3>

              <div className="leadership-experience-details-container">
                {/* Row 1 */}
                <div className="leadership-row">
                  {/* Multi-country Team */}
                  <div className="leadership-card">
                    <div className="leadership-card-icon-container">
                      <div className="leadership-card-icon-background">
                        <svg
                          className="leadership-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M13.333 17.333C13.333 17.333 16 14.666 16 10.666"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="16"
                            cy="16"
                            r="12"
                            stroke="#07A276"
                            strokeWidth="2"
                          />
                          <path
                            d="M5.33301 4.33398L13.6663 4.33398"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration-green"></div>
                    </div>
                    <p className="leadership-card-text">
                      <strong>Multi-country team management</strong> across
                      Asia Pacific
                    </p>
                  </div>

                  {/* Remote Team */}
                  <div className="leadership-card">
                    <div className="leadership-card-icon-container">
                      <div className="leadership-card-icon-background">
                        <svg
                          className="leadership-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M23.333 12C23.333 12 24.666 10.666 26.666 12"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="8"
                            r="3.33333"
                            stroke="#07A276"
                            strokeWidth="2"
                          />
                          <path
                            d="M5.33301 12C5.33301 12 4.00033 10.666 2.00033 12"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M26.333 20.666C26.333 20.666 28 18.666 30 18.666"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="18.666"
                            r="2.66667"
                            stroke="#07A276"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration-green"></div>
                    </div>
                    <p className="leadership-card-text">
                      <strong>Remote team performance</strong> and
                      accountability systems
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="leadership-row">
                  {/* Strategic Pushback */}
                  <div className="leadership-card">
                    <div className="leadership-card-icon-container">
                      <div className="leadership-card-icon-background">
                        <svg
                          className="leadership-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M5.33398 5.33398H26.6673C27.5878 5.33398 28.334 6.08018 28.334 7.00065V25.334"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration-green"></div>
                    </div>
                    <p className="leadership-card-text">
                      <strong>Strategic pushback</strong> to C-level management
                    </p>
                  </div>

                  {/* Cultural Adaptation */}
                  <div className="leadership-card">
                    <div className="leadership-card-icon-container">
                      <div className="leadership-card-icon-background">
                        <svg
                          className="leadership-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <circle
                            cx="16"
                            cy="16"
                            r="12"
                            stroke="#07A276"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration-green"></div>
                    </div>
                    <p className="leadership-card-text">
                      <strong>Cultural adaptation</strong> across different
                      business environments
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
          background-image: url("/images/element/Perspective%20Grid.png");
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
          margin-bottom: 2rem;
          animation: fadeIn 800ms ease-out;
        }

        .journey-subtitle {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 3.5rem;
          line-height: 1.6;
          animation: fadeIn 800ms ease-out 200ms backwards;
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
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
          white-space: nowrap;
        }

        .timeline-label:hover {
          background: rgba(120, 99, 252, 0.5);
          border-color: rgba(120, 99, 252, 0.4);
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(120, 99, 252, 0.3);
        }

        .phases-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3.5rem;
          margin-bottom: 4rem;
          position: relative;
        }

        .phase-content {
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          transition: all 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 0.5rem;
          border-radius: 1rem;
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

        .phase-content:nth-child(4).is-visible {
          transition-delay: 450ms;
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

        .phase-content-text {
          font-size: 1rem;
          font-weight: 400;
          color: #ffffff;
          line-height: 1.6;
          text-align: left;
        }

        /* Approach Container */
        .audit-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 4rem 3.5rem;
          gap: 3rem;
          background: #ffffff;
          border: 1px solid rgba(18, 34, 50, 0.08);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04),
            0 8px 24px rgba(18, 34, 50, 0.08),
            0 32px 80px rgba(18, 34, 50, 0.06);
          border-radius: 1.5rem;
          animation: fadeIn 900ms ease-out 500ms backwards;
          max-width: 75rem;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .audit-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(120, 99, 252, 0.3) 50%,
            transparent 100%
          );
        }

        /* Approach Title */
        .audit-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 2.5rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #122232;
          margin: 0;
          align-self: stretch;
        }

        /* Approach Details Container */
        .approach-details-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2.5rem;
          align-self: stretch;
        }

        /* Industry Experience Container */
        .industry-experience-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 2rem;
          align-self: stretch;
        }

        /* Industry Experience Title */
        .industry-experience-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          line-height: 1.3;
          letter-spacing: -0.015em;
          color: #122232;
          margin: 0;
          align-self: stretch;
        }

        /* Industry Experience Details Container */
        .industry-experience-details-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-self: stretch;
        }

        /* Education Training Row */
        .education-training-row {
          display: flex;
          flex-direction: row;
          gap: 1.25rem;
          align-self: stretch;
        }

        /* Industry Card */
        .industry-card {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 2rem;
          gap: 1.5rem;
          flex: 1;
          background: linear-gradient(135deg, #f8f6ff 0%, #f2efff 100%);
          border: 1px solid rgba(120, 99, 252, 0.12);
          border-radius: 1rem;
          position: relative;
          isolation: isolate;
          transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          overflow: hidden;
        }

        .industry-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(120, 99, 252, 0) 0%, rgba(120, 99, 252, 0.03) 100%);
          opacity: 0;
          transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .industry-card:hover::before {
          opacity: 1;
        }

        .industry-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(120, 99, 252, 0.16),
            0 2px 8px rgba(120, 99, 252, 0.08);
          border-color: rgba(120, 99, 252, 0.24);
        }

        /* Industry Card Icon Container */
        .industry-card-icon-container {
          position: relative;
          width: 3.5rem;
          height: 3.5rem;
        }

        /* Industry Card Icon Background */
        .industry-card-icon-background {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          background: #ffffff;
          border-radius: 0.75rem;
          box-shadow: 0 2px 8px rgba(120, 99, 252, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .industry-card:hover .industry-card-icon-background {
          box-shadow: 0 8px 24px rgba(120, 99, 252, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 1);
          transform: scale(1.08) rotate(5deg);
        }

        /* Industry Card Icon */
        .industry-card-icon {
          width: 2rem;
          height: 2rem;
          transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .industry-card:hover .industry-card-icon {
          transform: scale(1.1);
        }

        /* Ellipse Decoration */
        .ellipse-decoration {
          display: none;
        }

        /* Industry Card Text Container */
        .industry-card-text-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-self: stretch;
        }

        /* Industry Card Title */
        .industry-card-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 1.125rem;
          line-height: 1.4;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
        }

        /* Industry Card Description */
        .industry-card-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 400;
          font-size: 0.9375rem;
          line-height: 1.6;
          letter-spacing: -0.005em;
          color: rgba(18, 34, 50, 0.72);
          margin: 0;
        }

        /* Ecommerce Technology Row */
        .ecommerce-technology-row {
          display: flex;
          flex-direction: row;
          gap: 1.25rem;
          align-self: stretch;
        }

        /* Industry Card Wide */
        .industry-card-wide {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 2rem;
          gap: 1.5rem;
          flex: 1;
          background: linear-gradient(135deg, #f8f6ff 0%, #f2efff 100%);
          border: 1px solid rgba(120, 99, 252, 0.12);
          border-radius: 1rem;
          position: relative;
          isolation: isolate;
          transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          overflow: hidden;
        }

        .industry-card-wide::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(120, 99, 252, 0) 0%, rgba(120, 99, 252, 0.03) 100%);
          opacity: 0;
          transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .industry-card-wide:hover::before {
          opacity: 1;
        }

        .industry-card-wide:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(120, 99, 252, 0.16),
            0 2px 8px rgba(120, 99, 252, 0.08);
          border-color: rgba(120, 99, 252, 0.24);
        }

        /* Vector Divider */
        .vector-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(18, 34, 50, 0.12) 50%,
            transparent 100%
          );
          align-self: stretch;
          margin: 1rem 0;
        }

        /* Leadership Experience Container */
        .leadership-experience-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 2rem;
          align-self: stretch;
        }

        /* Leadership Experience Title */
        .leadership-experience-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          line-height: 1.3;
          letter-spacing: -0.015em;
          color: #122232;
          margin: 0;
          align-self: stretch;
        }

        /* Leadership Experience Details Container */
        .leadership-experience-details-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-self: stretch;
        }

        /* Leadership Row */
        .leadership-row {
          display: flex;
          flex-direction: row;
          gap: 1.25rem;
          align-self: stretch;
        }

        /* Leadership Card */
        .leadership-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 2rem;
          gap: 1.5rem;
          flex: 1;
          background: linear-gradient(135deg, #f0faf7 0%, #e6f6f1 100%);
          border: 1px solid rgba(7, 162, 118, 0.12);
          border-radius: 1rem;
          position: relative;
          isolation: isolate;
          transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          overflow: hidden;
        }

        .leadership-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(7, 162, 118, 0) 0%, rgba(7, 162, 118, 0.03) 100%);
          opacity: 0;
          transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .leadership-card:hover::before {
          opacity: 1;
        }

        .leadership-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(7, 162, 118, 0.16),
            0 2px 8px rgba(7, 162, 118, 0.08);
          border-color: rgba(7, 162, 118, 0.24);
        }

        /* Leadership Card Icon Container */
        .leadership-card-icon-container {
          position: relative;
          width: 3.5rem;
          height: 3.5rem;
          flex-shrink: 0;
        }

        /* Leadership Card Icon Background */
        .leadership-card-icon-background {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          background: #ffffff;
          border-radius: 0.75rem;
          box-shadow: 0 2px 8px rgba(7, 162, 118, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .leadership-card:hover .leadership-card-icon-background {
          box-shadow: 0 8px 24px rgba(7, 162, 118, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 1);
          transform: scale(1.08) rotate(-5deg);
        }

        /* Leadership Card Icon */
        .leadership-card-icon {
          width: 2rem;
          height: 2rem;
          transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .leadership-card:hover .leadership-card-icon {
          transform: scale(1.1);
        }

        /* Ellipse Decoration Green */
        .ellipse-decoration-green {
          display: none;
        }

        /* Leadership Card Text */
        .leadership-card-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 500;
          font-size: 0.9375rem;
          line-height: 1.6;
          letter-spacing: -0.005em;
          color: #122232;
          margin: 0;
          flex: 1;
        }

        .leadership-card-text strong {
          font-weight: 600;
          color: #122232;
        }

        @media (min-width: 768px) {
          .process-section {
            padding: 6rem 2rem 7rem;
          }

          .process-header {
            margin-bottom: 2.5rem;
          }

          .process-header h2 {
            font-size: 2.75rem;
          }

          .process-header p {
            font-size: 1.125rem;
          }

          .journey-subtitle {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }

          .timeline-wrapper {
            margin-bottom: 1rem;
          }

          .phases-grid {
            gap: 4rem;
            margin-bottom: 4.5rem;
          }

          .vertical-separator {
            right: -2rem;
          }

          .phase-content-text {
            font-size: 1.0625rem;
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

          .journey-subtitle {
            font-size: 1rem;
            margin-bottom: 2.5rem;
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

          .audit-container {
            padding: 2rem 1.5rem;
            gap: 2rem;
          }

          .audit-title {
            font-size: 1.75rem;
          }

          .industry-experience-title,
          .leadership-experience-title {
            font-size: 1.125rem;
          }

          .education-training-row,
          .ecommerce-technology-row,
          .leadership-row {
            flex-direction: column;
          }

          .industry-card,
          .industry-card-wide,
          .leadership-card {
            padding: 1.5rem;
          }

          .industry-card-title {
            font-size: 1rem;
          }

          .industry-card-description {
            font-size: 0.875rem;
          }

          .leadership-card-text {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundationFirstApproach;
