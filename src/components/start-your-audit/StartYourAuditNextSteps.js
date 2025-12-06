"use client";
import React, { useEffect, useRef, useState } from "react";

const phases = [
  {
    id: 1,
    label: "1",
    title: "Within 24 Hours",
    points: [
      "We'll review your submission and contact you directly",
      "Schedule your 90-minute Foundation Audit at a convenient time",
      "Send preparation guidelines to maximize your session value",
    ],
  },
  {
    id: 2,
    label: "2",
    title: "During Audit",
    points: [
      "Honest assessment of your current state",
      "Clear identification of what needs to be built",
      "Realistic roadmap for transformation",
      "No sales pressure, pure evaluation",
    ],
  },
  {
    id: 3,
    label: "3",
    title: "Within 48 Hours After",
    points: [
      "Complete Foundation Assessment package delivered",
      "Detailed roadmap with priorities and timelines",
      "Clear next steps, whether you work with us or not",
      "Open invitation for follow-up questions",
    ],
  },
  {
    id: 4,
    label: "4",
    title: "Your Decision",
    points: [
      "Use our roadmap with your internal team",
      "Hire other consultants with clear direction",
      "Partner with us for foundation-first transformation",
      "Take time to evaluate all options",
    ],
  },
];

const NextStepsSection = () => {
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
    <section ref={sectionRef} className="next-steps-section">
      <div className="next-steps-container">
        <header className="next-steps-header">
          <h2>What Happens Next</h2>
          <p>Your Foundation Transformation Journey Starts Here</p>
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
        .next-steps-section {
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

        .next-steps-section::before {
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

        .next-steps-section::after {
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

        .next-steps-container {
          position: relative;
          max-width: 80rem;
          margin: 0 auto;
          z-index: 2;
        }

        .next-steps-header {
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

        .next-steps-header h2 {
          font-size: 2.25rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.875rem;
          line-height: 1.2;
        }

        .next-steps-header p {
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
          width: 48px;
          height: 48px;
          background: rgba(71, 85, 105, 0.7);
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.25rem;
          font-weight: 600;
          border-radius: 50%;
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
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
          align-items: start;
        }

        .phase-content {
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          transition: all 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 1.5rem;
          border-radius: 1rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
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
          right: -1rem;
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
          width: 100%;
          min-height: 80px;
          display: flex;
          align-items: flex-start;
        }

        .phase-header-content {
          width: 100%;
        }

        .phase-points-wrapper {
          opacity: 1;
          width: 100%;
          flex: 1;
        }

        .phase-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
          line-height: 1.3;
          min-height: 60px;
          display: flex;
          align-items: flex-start;
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

        @media (min-width: 768px) {
          .next-steps-section {
            padding: 6rem 2rem 7rem;
          }

          .next-steps-header {
            margin-bottom: 5rem;
          }

          .next-steps-header h2 {
            font-size: 2.75rem;
          }

          .next-steps-header p {
            font-size: 1.125rem;
          }

          .timeline-wrapper {
            margin-bottom: 4rem;
          }

          .phases-grid {
            gap: 2.5rem;
          }

          .vertical-separator {
            right: -1.25rem;
          }

          .phase-title {
            font-size: 1.625rem;
          }

          .point-item {
            font-size: 1rem;
          }
        }

        @media (min-width: 1024px) {
          .next-steps-section {
            padding: 7rem 2rem 8rem;
          }
        }

        @media (max-width: 1024px) {
          .phases-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }

          .phase-content:nth-child(2) .vertical-separator {
            display: none;
          }

          .phase-content:nth-child(3) .vertical-separator {
            right: -1.5rem;
          }
        }

        @media (max-width: 768px) {
          .next-steps-section {
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

          .phase-title {
            font-size: 1.375rem;
          }

          .point-item {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </section>
  );
};

export default NextStepsSection;
