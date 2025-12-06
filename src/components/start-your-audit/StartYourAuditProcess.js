"use client";
import React, { useEffect, useRef, useState } from "react";

const phases = [
  {
    id: 1,
    label: "First 30 Minutes",
    title: "Reality Discovery",
    subtitle: "Current State Documentation",
    points: [
      "Where is your data actually stored?",
      "How do you currently generate reports?",
      "What does 'automation' mean in your organization?",
      "Which manual processes consume the most time?",
    ],
  },
  {
    id: 2,
    label: "Next 30 Minutes",
    title: "Solution Design",
    subtitle: "Foundation Requirements",
    points: [
      "What infrastructure needs to be built?",
      "Which systems need integration?",
      "Where are the biggest automation opportunities?",
      "What technology stack makes sense for your reality?",
    ],
  },
  {
    id: 3,
    label: "Final 30 Minutes",
    title: "Reality Check",
    subtitle: "Honest Assessment",
    points: [
      "Realistic timelines (months, not weeks)",
      "Investment requirements and ROI projections",
      "Priority order for improvements",
      "Expected outcomes you can actually achieve",
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

        {/* Two Questions Container - MOVED TO TOP */}
        <div className="audit-container">
          {/* Questions Inner Container */}
          <div className="questions-inner-container">
            {/* Questions Title */}
            <div className="questions-title-wrapper">
              <h2 className="questions-title">
                The <span className="title-highlight">Two Questions</span>
                <br />
                That Reveal Everything:
              </h2>
            </div>

            {/* Questions Content Container */}
            <div className="questions-content-container">
              {/* Question 1 */}
              <div className="service-card">
                <div className="service-title-container">
                  <div className="service-icon-container">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99988 10L11.9999 8V16M2.99988 12C2.99988 13.1819 3.23267 14.3522 3.68496 15.4441C4.13725 16.5361 4.80019 17.5282 5.63592 18.364C6.47164 19.1997 7.4638 19.8626 8.55573 20.3149C9.64766 20.7672 10.818 21 11.9999 21C13.1818 21 14.3521 20.7672 15.444 20.3149C16.536 19.8626 17.5281 19.1997 18.3638 18.364C19.1996 17.5282 19.8625 16.5361 20.3148 15.4441C20.7671 14.3522 20.9999 13.1819 20.9999 12C20.9999 10.8181 20.7671 9.64778 20.3148 8.55585C19.8625 7.46392 19.1996 6.47177 18.3638 5.63604C17.5281 4.80031 16.536 4.13738 15.444 3.68508C14.3521 3.23279 13.1818 3 11.9999 3C10.818 3 9.64766 3.23279 8.55573 3.68508C7.4638 4.13738 6.47164 4.80031 5.63592 5.63604C4.80019 6.47177 4.13725 7.46392 3.68496 8.55585C3.23267 9.64778 2.99988 10.8181 2.99988 12Z"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="service-title">"Show me your database"</h4>
                </div>
              </div>

              {/* Question 2 */}
              <div className="service-card">
                <div className="service-title-container">
                  <div className="service-icon-container">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0001 8H13.0001C13.2653 8 13.5197 8.10536 13.7072 8.29289C13.8948 8.48043 14.0001 8.73478 14.0001 9V11C14.0001 11.2652 13.8948 11.5196 13.7072 11.7071C13.5197 11.8946 13.2653 12 13.0001 12H11.0001C10.7349 12 10.4806 12.1054 10.293 12.2929C10.1055 12.4804 10.0001 12.7348 10.0001 13V15C10.0001 15.2652 10.1055 15.5196 10.293 15.7071C10.4806 15.8946 10.7349 16 11.0001 16H14.0001M3.00012 12C3.00012 13.1819 3.23291 14.3522 3.68521 15.4441C4.1375 16.5361 4.80043 17.5282 5.63616 18.364C6.47189 19.1997 7.46404 19.8626 8.55597 20.3149C9.6479 20.7672 10.8182 21 12.0001 21C13.182 21 14.3523 20.7672 15.4443 20.3149C16.5362 19.8626 17.5284 19.1997 18.3641 18.364C19.1998 17.5282 19.8627 16.5361 20.315 15.4441C20.7673 14.3522 21.0001 13.1819 21.0001 12C21.0001 10.8181 20.7673 9.64778 20.315 8.55585C19.8627 7.46392 19.1998 6.47177 18.3641 5.63604C17.5284 4.80031 16.5362 4.13738 15.4443 3.68508C14.3523 3.23279 13.182 3 12.0001 3C10.8182 3 9.6479 3.23279 8.55597 3.68508C7.46404 4.13738 6.47189 4.80031 5.63616 5.63604C4.80043 6.47177 4.1375 7.46392 3.68521 8.55585C3.23291 9.64778 3.00012 10.8181 3.00012 12Z"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="service-title">"Show me your automation"</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Questions Note Container */}
          <div className="questions-note-container">
            <p className="questions-note">
              If you hesitate, point to Excel, or mention 'our admin handles it'
              - we know exactly what to fix.
            </p>
          </div>
        </div>

        {/* Breakdown Section Title */}
        <div className="breakdown-title-container">
          <h3 className="breakdown-title">Your Foundation Audit Breakdown</h3>
        </div>

        {/* Timeline with phase labels - MOVED TO BOTTOM */}
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

        {/* Phase content grid - MOVED TO BOTTOM */}
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

        .breakdown-title-container {
          width: 100%;
          text-align: left;
          margin-bottom: 3rem;
        }

        .breakdown-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 2rem;
          line-height: 128%;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
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
          margin-bottom: 0;
          position: relative;
        }

        .phase-content {
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          transition: all 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 1.75rem;
          border-radius: 1rem;
          min-height: 18rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-sizing: border-box;
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
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.6);
          box-shadow: 0 0 0 12px rgba(255, 255, 255, 0.16),
            0px 28px 20px rgba(0, 0, 0, 0.12);
          border-radius: 1.25rem;
          animation: fadeIn 900ms ease-out 500ms backwards;
          max-width: 75rem;
          margin: 0 auto 4rem;
        }

        .questions-inner-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 2.5rem;
          gap: 2.5rem;
          width: 100%;
        }

        .questions-title-wrapper {
          flex: none;
        }

        .questions-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
        }

        .title-highlight {
          color: #7863fc;
        }

        .questions-content-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          gap: 1.25rem;
          flex: 1;
        }

        .questions-note-container {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 2.5rem 1.25rem;
          gap: 0.625rem;
          width: 100%;
          border-top: 1px dashed #122232;
        }

        .questions-note {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          text-align: center;
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

        .service-icon-container svg {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
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

          .breakdown-title {
            font-size: 1.5rem;
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

          .questions-inner-container {
            flex-direction: column;
            gap: 2rem;
            align-items: flex-start;
            padding: 1.5rem;
          }

          .questions-title-wrapper {
            width: 100%;
          }

          .questions-title {
            font-size: 1.25rem;
          }

          .questions-content-container {
            flex-direction: column;
            width: 100%;
            gap: 1rem;
          }

          .questions-note-container {
            padding: 1.5rem 1rem;
          }

          .questions-note {
            font-size: 1.125rem;
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
