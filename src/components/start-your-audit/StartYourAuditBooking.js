"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const bookingSteps = [
  {
    id: 1,
    phase: "Step 1",
    title: "Fill Out the Form Below",
    description: "Basic information to understand your situation",
    imagePath: "/images/booking_step/Step 1.png",
  },
  {
    id: 2,
    phase: "Step 2",
    title: "We'll Contact You Within 24 Hours",
    description: "Schedule your 90-minute Foundation Audit call",
    imagePath: "/images/booking_step/Step 2.png",
  },
  {
    id: 3,
    phase: "Step 3",
    title: "Complete Your Assessment",
    description: "Honest evaluation of your current state and needs",
    imagePath: "/images/booking_step/Step 3.png",
  },
  {
    id: 4,
    phase: "Step 4",
    title: "Receive Your\nRoadmap",
    description: "Detailed action plan delivered within 48 hours",
    imagePath: "/images/booking_step/Step 4.png",
  },
];

const StartYourAuditBooking = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-step-index"));
          if (entry.isIntersecting && !visibleSteps.includes(index)) {
            setVisibleSteps((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSteps]);

  return (
    <section ref={sectionRef} className="booking-section">
      {/* Background Decoration */}
      <div className="background-decoration">
        <img
          src="/images/Logogram - White.png"
          alt=""
          className="logogram-image"
        />
      </div>

      <div className="booking-container">
        {/* Header Container */}
        <div className="header-container">
          <h2 className="title">Book Your Foundation Audit</h2>
          <p className="subtitle">Simple Process, Powerful Results</p>
        </div>

        {/* Content Container */}
        <div className="content-container">
          {/* Phases Timeline */}
          <div className="phases-timeline">
            <div className="timeline-line-wrapper">
              <div className="timeline-line-background" />
              <div className="timeline-line-glow" />
            </div>
            <div className="timeline-labels-wrapper">
              {bookingSteps.map((step) => (
                <div key={step.id} className="phase-label-container">
                  <span className="phase-label">{step.phase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps Container */}
          <div className="steps-container">
            {bookingSteps.map((step, index) => (
              <div key={step.id} className="step-wrapper">
                <div
                  ref={(el) => (stepRefs.current[index] = el)}
                  data-step-index={index}
                  className={`step-container ${
                    visibleSteps.includes(index) ? "visible" : ""
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Visual Container */}
                  <div className="visual-container">
                    <Image
                      src={step.imagePath}
                      alt={step.title}
                      width={258}
                      height={160}
                      className="step-image"
                    />
                  </div>

                  {/* Text Container */}
                  <div className="text-container">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>

                {/* Divider */}
                {index < bookingSteps.length - 1 && (
                  <div className="step-divider" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .booking-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 7.5rem;
          gap: 4rem;
          isolation: isolate;
          background: #7863fc;
          position: relative;
          overflow: hidden;
        }

        .background-decoration {
          position: absolute;
          top: -14rem;
          right: 4rem;
          z-index: 2;
          pointer-events: none;
          opacity: 0.3;
          transition: opacity 800ms ease;
        }

        .logogram-image {
          width: auto;
          height: 28rem;
          display: block;
          filter: none;
          mix-blend-mode: normal;
        }

        .booking-container {
          max-width: 75rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4rem;
          z-index: 3;
        }

        .header-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          width: 49.5625rem;
          animation: fadeIn 800ms ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 2.5rem;
          line-height: 128%;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
        }

        .subtitle {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .content-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          width: 100%;
        }

        .phases-timeline {
          position: relative;
          width: 100%;
          margin-bottom: 0;
        }

        .timeline-line-wrapper {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          transform: translateY(-50%);
          overflow: hidden;
        }

        .timeline-line-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
        }

        .timeline-line-glow {
          position: absolute;
          top: 50%;
          left: 0;
          width: 7rem;
          height: 0.5rem;
          transform: translateY(-50%);
          background: #ffffff;
          clip-path: polygon(0 50%, 100% 0, 100% 100%);
          filter: blur(1px);
          animation: flowLight 3s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes flowLight {
          0% {
            left: -7rem;
            transform: translateY(-50%);
          }
          100% {
            left: calc(100% + 7rem);
            transform: translateY(-50%);
          }
        }

        .timeline-labels-wrapper {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
          align-items: center;
          z-index: 2;
        }

        .phase-label-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0.25rem 1.25rem;
          gap: 0.5rem;
          background: rgba(147, 130, 253, 1);
          border-radius: 5rem;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
          flex: none;
        }

        .phase-label-container:nth-child(1) {
          justify-self: start;
        }

        .phase-label-container:nth-child(2),
        .phase-label-container:nth-child(3) {
          justify-self: center;
        }

        .phase-label-container:nth-child(4) {
          justify-self: end;
        }

        .phase-label-container:hover {
          background: rgba(167, 150, 253, 1);
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
        }

        .phase-label {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 150%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #ffffff;
          flex: none;
        }

        .steps-container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 1.5rem;
          width: 100%;
        }

        .step-wrapper {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          flex: 1;
        }

        .step-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          flex: 1;
          max-width: 16.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .step-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .visual-container {
          width: 100%;
          max-width: 16.125rem;
          height: 10rem;
          background: #f2e5e2;
          border-radius: 0.75rem;
          overflow: hidden;
          position: relative;
          transition: all 500ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .step-container:hover .visual-container {
          transform: translateY(-4px);
          box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.16);
        }

        .step-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .text-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
        }

        .step-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
          transition: color 300ms cubic-bezier(0.16, 1, 0.3, 1);
          white-space: pre-line;
        }

        .step-container:hover .step-title {
          color: rgba(255, 255, 255, 0.9);
        }

        .step-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .step-divider {
          width: 0px;
          align-self: stretch;
          border: 1.5px dashed rgba(255, 255, 255, 0.3);
          margin: 0 0.875rem;
        }

        @media (max-width: 1024px) {
          .booking-section {
            padding: 4rem 2rem;
          }

          .header-container {
            width: 100%;
          }

          .steps-container {
            flex-direction: column;
            gap: 2rem;
          }

          .step-wrapper {
            width: 100%;
          }

          .step-divider {
            display: none;
          }

          .phases-timeline {
            margin-bottom: 2rem;
          }

          .timeline-line-wrapper {
            display: none;
          }

          .timeline-labels-wrapper {
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .phase-label-container {
            flex: 0 0 calc(50% - 0.25rem);
          }

          .background-decoration {
            top: 2rem;
            right: -8rem;
            opacity: 0.12;
          }

          .logogram-image {
            height: 18rem;
          }
        }

        @media (max-width: 768px) {
          .booking-section {
            padding: 3rem 1.5rem;
            gap: 3rem;
          }

          .title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.125rem;
          }

          .step-title {
            font-size: 1.25rem;
          }

          .step-description {
            font-size: 1.125rem;
          }

          .phase-label-container {
            flex: 0 0 100%;
          }

          .visual-container {
            height: 8rem;
          }

          .background-decoration {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default StartYourAuditBooking;
