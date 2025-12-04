"use client";
import React, { useEffect, useRef, useState } from "react";

const phases = [
  {
    id: 1,
    label: "First 30 Minutes",
    title: "Problem Discovery",
    subtitle: "Understanding what's broken",
    points: [
      "Current state documentation",
      "Pain point identification",
      "Bottleneck analysis",
    ],
  },
  {
    id: 2,
    label: "Next 30 Minutes",
    title: "Solution Design",
    subtitle: "What you actually need to fix it",
    points: [
      "Foundation requirements",
      "Technology recommendations",
      "Integration approach",
    ],
  },
  {
    id: 3,
    label: "Final 30 Minutes",
    title: "Roadmap",
    subtitle: "Timeline, investment, and expectations",
    points: [
      "Realistic timelines",
      "Investment requirements",
      "Expected outcomes",
    ],
  },
];

const StartYourAuditProcess = () => {
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
          <h2>What You Get in Your Foundation Audit</h2>
          <p>Your 90-Minute Deep Dive</p>
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
                    <li key={idx} className="point-item" style={{ transitionDelay: `${idx * 80}ms` }}>
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

        {/* Audit Services Container */}
        <div className="audit-container">
          <h3 className="audit-title">
            The Audit
            <br />
            Deliverable
            <br />
            Package
          </h3>

          <div className="services-container">
            {/* Row 1 */}
            <div className="service-row">
              {/* Service 1 - Current State Assessment */}
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
                        d="M6.53855 21.0949C8.23699 21.0949 9.66357 19.9309 10.0642 18.3572C10.1881 17.8704 10.5837 17.4569 11.0859 17.4569H17.4523M6.53855 21.0949C4.52939 21.0949 2.90063 19.4661 2.90063 17.4569V5.63371C2.90063 4.12684 4.1222 2.90527 5.62907 2.90527H14.7239C16.2307 2.90527 17.4523 4.12684 17.4523 5.63371V17.4569M6.53855 21.0949H17.4523C19.1507 21.0949 20.5773 19.9309 20.978 18.3572C21.1019 17.8704 20.683 17.4569 20.1807 17.4569H17.4523M7.44803 10.1811L9.04218 11.4564C9.42223 11.7605 9.97429 11.7114 10.2948 11.3451L12.9049 8.36215"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h4 className="service-title">Current State Assessment</h4>
                </div>
                <ul className="service-details">
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Detailed documentation of existing systems</span>
                  </li>
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Gap analysis and risk assessment</span>
                  </li>
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Process efficiency evaluation</span>
                  </li>
                </ul>
              </div>

              {/* Service 2 - Foundation Roadmap */}
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
                        d="M8.25 5.99982L15.007 5.98682C16.67 5.98382 18.019 7.33482 18.012 8.99782V9.01182C18.005 10.6638 16.664 11.9998 15.013 11.9998H9.999C8.343 11.9998 7 13.3428 7 14.9988V14.9988C7 16.6558 8.344 17.9988 10.001 17.9978L20 17.9948"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.9999 17.9951L18.0029 19.9921"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.0029 15.9971L19.9999 17.9951"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.59099 4.40901C8.46967 5.28769 8.46967 6.71231 7.59099 7.59099C6.71231 8.46967 5.28769 8.46967 4.40901 7.59099C3.53033 6.71231 3.53033 5.28769 4.40901 4.40901C5.28769 3.53033 6.71231 3.53033 7.59099 4.40901"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="service-title">Foundation Roadmap</h4>
                </div>
                <ul className="service-details">
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Prioritized improvement plan</span>
                  </li>
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Technology stack recommendations</span>
                  </li>
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Implementation timeline</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 2 */}
            <div className="service-row">
              {/* Service 3 - Investment Framework */}
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
                        d="M20 8V5C20 3.89543 19.1046 3 18 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H8"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.5 15.75L17 17.25"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 17.25L15.75 16"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.75 16L14.5 17.25"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="12"
                        y="12"
                        width="9"
                        height="9"
                        rx="2.5"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 8H16"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 12H9"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 16H8"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="service-title">Investment Framework</h4>
                </div>
                <ul className="service-details">
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Realistic cost expectations</span>
                  </li>
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>ROI projections</span>
                  </li>
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Resource requirements</span>
                  </li>
                </ul>
              </div>

              {/* Service 4 - Quick Wins Identification */}
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
                        d="M6.998 21.0041H5.99759C4.34004 21.0041 2.99634 19.6604 2.99634 18.0029V17.0024"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.0022 2.99658H18.0026C19.6602 2.99658 21.0039 4.34029 21.0039 5.99783V6.99825"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.99634 6.99825V5.99783C2.99634 4.34029 4.34004 2.99658 5.99759 2.99658H6.998"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.0039 17.0024V18.0029C21.0039 19.6604 19.6602 21.0041 18.0026 21.0041H17.0022"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.99881 5.99756H15.0013C16.6589 5.99756 18.0026 7.34126 18.0026 8.99881V10.9996H5.99756V8.99881C5.99756 7.34126 7.34126 5.99756 8.99881 5.99756Z"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.0026 14.001V15.0014C18.0026 16.6589 16.6589 18.0026 15.0013 18.0026H8.99881C7.34126 18.0026 5.99756 16.6589 5.99756 15.0014V14.001"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.99683 10.9997H20.0035"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="service-title">Quick Wins Identification</h4>
                </div>
                <ul className="service-details">
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Immediate improvements possible</span>
                  </li>
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>30-day impact opportunities</span>
                  </li>
                  <li className="service-detail">
                    <span className="detail-indicator" />
                    <span>Low-hanging fruit automation</span>
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
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
        }

        .timeline-label:hover {
          background: rgba(120, 99, 252, 0.5);
          border-color: rgba(120, 99, 252, 0.4);
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(120, 99, 252, 0.3);
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
          padding: 0.5rem;
          margin: -0.5rem;
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
          background: #f2efff;
          border-radius: 0.75rem;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
        }

        .service-card:hover {
          background: #e9e4ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(120, 99, 252, 0.15);
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

        .service-detail:hover .detail-indicator {
          background: #5a3fd9;
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

export default StartYourAuditProcess;
