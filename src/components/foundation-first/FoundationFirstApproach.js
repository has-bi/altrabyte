// src/components/foundation-first/FoundationFirstApproach.js
"use client";
import React, { useEffect, useRef, useState } from "react";

const phases = [
  {
    id: 1,
    label: "Pattern Discovery",
    title: "Companies want advanced analytics",
    subtitle: "The typical starting point",
    points: [
      "Machine learning requests",
      "AI implementation desires",
      "Predictive model expectations",
    ],
  },
  {
    id: 2,
    label: "Reality Check",
    title: "Foundation is broken",
    subtitle: "What we always find",
    points: [
      "Excel as databases",
      "Manual processes everywhere",
      "Scattered, inconsistent data",
    ],
  },
  {
    id: 3,
    label: "Inevitable Result",
    title: "Projects fail or underdeliver",
    subtitle: "Building on quicksand",
    points: [
      "Delayed implementations",
      "Budget overruns",
      "Underwhelming results",
    ],
  },
  {
    id: 4,
    label: "Foundation First",
    title: "Fix foundation, enable everything",
    subtitle: "The breakthrough moment",
    points: [
      "Solid infrastructure",
      "Clean, reliable data",
      "Sustainable solutions",
    ],
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
              <div className="phase-header-section">
                <div className="phase-header-content">
                  <h3 className="phase-title">{phase.title}</h3>
                  <p className="phase-subtitle">{phase.subtitle}</p>
                </div>
              </div>

              <div className="phase-points-wrapper">
                <ul className="phase-points">
                  {phase.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="point-item"
                      style={{ transitionDelay: `${idx * 80}ms` }}
                    >
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
              </div>

              {/* Vertical separator - except after last item */}
              {index < phases.length - 1 && (
                <div className="vertical-separator" />
              )}
            </div>
          ))}
        </div>

        {/* Why This Approach Works Container */}
        <div className="audit-container">
          <h3 className="audit-title">
            Why This
            <br />
            Approach
            <br />
            Works
          </h3>

          <div className="services-container">
            {/* Row 1 - Industry Experience */}
            <div className="service-row">
              {/* Industry Experience */}
              <div className="service-card service-card-wide">
                <div className="service-title-container">
                  <div className="service-icon-container">
                    <svg
                      className="service-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="service-title">Industry Experience That Matters</h4>
                </div>
                <ul className="service-details">
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Education & Training • Energy & Finance • Beauty & Cosmetics</span>
                  </li>
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>E-commerce & Technology • Distribution & Logistics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 2 - Leadership Experience */}
            <div className="service-row">
              {/* Multi-country & Remote */}
              <div className="service-card">
                <div className="service-title-container">
                  <div className="service-icon-container">
                    <svg
                      className="service-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#07A276"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M2 12H22"
                        stroke="#07A276"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 2C14.5 5 15.5 8.5 15.5 12C15.5 15.5 14.5 19 12 22C9.5 19 8.5 15.5 8.5 12C8.5 8.5 9.5 5 12 2Z"
                        stroke="#07A276"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="service-title">Global Leadership</h4>
                </div>
                <ul className="service-details">
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Multi-country team management across Asia Pacific</span>
                  </li>
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Remote team performance systems</span>
                  </li>
                </ul>
              </div>

              {/* Strategic & Cultural */}
              <div className="service-card">
                <div className="service-title-container">
                  <div className="service-icon-container">
                    <svg
                      className="service-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        stroke="#07A276"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="service-title">Strategic Excellence</h4>
                </div>
                <ul className="service-details">
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Strategic pushback to C-level management</span>
                  </li>
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Cultural adaptation across business environments</span>
                  </li>
                </ul>
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
          padding: 1.5rem;
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

        .phase-header-section {
          margin-bottom: 1.75rem;
        }

        .phase-header-content {
          flex: 1;
        }

        .phase-points-wrapper {
          opacity: 1;
        }

        .phase-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .phase-subtitle {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }

        .phase-points {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.625rem;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          padding: 0.375rem;
          margin: -0.375rem;
          border-radius: 0.5rem;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .phase-content.is-expanded .point-item {
          opacity: 1;
          transform: translateX(0);
        }

        .point-item:hover {
          background: rgba(120, 99, 252, 0.08);
          color: rgba(255, 255, 255, 0.95);
          transform: translateX(5px);
        }

        .check-icon {
          flex-shrink: 0;
          color: #7863fc;
          margin-top: 0.125rem;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          width: 16px;
          height: 16px;
        }

        .point-item:hover .check-icon {
          transform: scale(1.15);
          color: #9b83ff;
        }

        .audit-container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 2rem 2rem 2rem 2.5rem;
          gap: 5rem;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.6);
          box-shadow: 0 0 0 12px rgba(255, 255, 255, 0.16),
            0px 28px 20px rgba(0, 0, 0, 0.12);
          border-radius: 1.25rem;
          animation: fadeIn 900ms ease-out 500ms backwards;
          max-width: 75rem;
          margin: 0 auto;
        }

        .audit-title {
          flex: none;
          font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 2rem;
          line-height: 128%;
          letter-spacing: -0.01em;
          color: #122232;
          white-space: nowrap;
        }

        .services-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
          flex: 1;
        }

        .service-row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 1.25rem;
          width: 100%;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2rem;
          gap: 1rem;
          flex: 1;
          background: #e6f6f1;
          border-radius: 0.75rem;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
        }

        .service-card-wide {
          background: #f2efff;
        }

        .service-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(120, 99, 252, 0.15);
        }

        .service-card-wide:hover {
          background: #e9e4ff;
        }

        .service-card:not(.service-card-wide):hover {
          background: #d1f0e8;
          box-shadow: 0 4px 12px rgba(7, 162, 118, 0.15);
        }

        .service-title-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          width: 100%;
        }

        .service-icon-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          width: 3rem;
          height: 3rem;
          background: #ffffff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
          border-radius: 0.75rem;
          flex-shrink: 0;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover .service-icon-container {
          box-shadow: 0px 4px 8px rgba(120, 99, 252, 0.2);
          transform: scale(1.05);
        }

        .service-icon {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .service-title {
          font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #122232;
          flex: 1;
        }

        .service-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          width: 100%;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-detail {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0.75rem;
          width: 100%;
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0.25rem 0;
        }

        .service-detail:hover {
          transform: translateX(4px);
        }

        .detail-indicator {
          width: 0.5rem;
          height: 0.5rem;
          background: #7863fc;
          border-radius: 0.125rem;
          flex-shrink: 0;
          margin-top: 0.5rem;
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:not(.service-card-wide) .detail-indicator {
          background: #07a276;
        }

        .service-detail:hover .detail-indicator {
          transform: scale(1.2);
        }

        .service-detail span:last-child {
          font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          line-height: 140%;
          letter-spacing: -0.01em;
          color: #122232;
          flex: 1;
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
            margin-bottom: 4rem;
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
            font-size: 1.5rem;
          }

          .phase-subtitle {
            font-size: 0.9375rem;
          }

          .point-item {
            font-size: 0.9375rem;
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
            flex-direction: column;
            padding: 1.75rem 1.5rem;
            gap: 2rem;
          }

          .audit-title {
            font-size: 1.75rem;
            text-align: center;
          }

          .service-row {
            flex-direction: column;
          }

          .service-card {
            padding: 1.5rem;
          }

          .service-title {
            font-size: 1.125rem;
          }

          .service-detail span:last-child {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundationFirstApproach;
