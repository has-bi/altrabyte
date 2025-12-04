"use client";
import React, { useState } from "react";

const deliverables = [
  {
    id: 1,
    title: "Reality Mapping",
    description: "Where you actually are today",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 27V18M18 18V9M18 18H27M18 18H9" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9H13.5V13.5" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    details: [
      "Current data infrastructure state",
      "Hidden process inefficiencies",
      "Technology gaps vs. business needs",
      "Critical bottlenecks slowing growth"
    ]
  },
  {
    id: 2,
    title: "Transformation Path",
    description: "What to build, what to skip",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 18L22.5 22.5M22.5 22.5L27 27M22.5 22.5H18M18 22.5H13.5M18 22.5V18M18 18V13.5" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 11.25L10.5 9M10.5 9L10.5 6.75M10.5 9L13.5 9M25.5 24.75L25.5 27M25.5 27L25.5 29.25M25.5 27L22.5 27" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.5 24L24 24L24 22.5" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="18" y="18" width="13.5" height="13.5" stroke="#122232" strokeWidth="2.25" rx="3.75"/>
        <path d="M10.5 11.25L13.5 11.25" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 17.25L7.5 17.25" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 23.25L6 23.25" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    details: [
      "Sequenced priorities (quick wins first)",
      "Foundation requirements mapped",
      "Integration strategy defined",
      "Resource allocation clarity"
    ]
  },
  {
    id: 3,
    title: "Investment Reality",
    description: "What it actually costs",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6H30V30H6V6Z" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="10.5" y="18" width="6" height="1.5" fill="#122232" rx="1.5"/>
      </svg>
    ),
    details: [
      "Phase-by-phase cost breakdown",
      "Expected ROI per investment",
      "Timeline vs. budget trade-offs",
      "Alternative approaches compared"
    ]
  },
  {
    id: 4,
    title: "First 30 Days",
    description: "Start before you're 'ready'",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6H30V30H6V6Z" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="10.5" y="18" width="6" height="1.5" fill="#122232" rx="1.5"/>
      </svg>
    ),
    details: [
      "No-code wins you can implement today",
      "Process improvements requiring zero budget",
      "Quick automation opportunities",
      "Team capability building start"
    ]
  }
];

const StartYourAuditDeliverable = () => {
  const [expandedCard, setExpandedCard] = useState(0);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="deliverable-section">
      <div className="deliverable-container">
        {/* Header */}
        <div className="header-container">
          <h2 className="main-title">What You'll Receive Within 48 Hours</h2>
          <p className="subtitle">Your Complete Foundation Assessment Package</p>
        </div>

        {/* Content Container */}
        <div className="content-container">
          {deliverables.map((item, index) => (
            <div
              key={item.id}
              className={`card-container ${expandedCard === index ? 'expanded' : ''}`}
              onClick={() => toggleCard(index)}
            >
              {/* Card Header */}
              <div className="card-header">
                <div className="icon-container">
                  {item.icon}
                </div>
                <h3 className="card-title">{item.title}</h3>
              </div>

              {/* Card Description */}
              <div className="card-description-container">
                <p className="card-description">{item.description}</p>
                <div className="expand-button">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`chevron-icon ${expandedCard === index ? 'rotated' : ''}`}
                  >
                    <path
                      d="M6.5 10.5L13 17L19.5 10.5"
                      stroke="#7863FC"
                      strokeWidth="2.16667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Expandable Content */}
              <div className={`expandable-content ${expandedCard === index ? 'expanded' : ''}`}>
                <div className="divider" />
                <div className="service-details-container">
                  {item.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="service-detail-container"
                      style={{
                        transitionDelay: expandedCard === index ? `${idx * 50}ms` : '0ms'
                      }}
                    >
                      <div className="path-indicator">
                        <div className="service-detail-indicator" />
                      </div>
                      <p className="service-detail">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .deliverable-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5rem 7.5rem;
          background: #ffffff;
        }

        .deliverable-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
          width: 100%;
          max-width: 90rem;
        }

        .header-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .main-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 2.5rem;
          line-height: 128%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
        }

        .subtitle {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 150%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #414e5b;
          margin: 0;
        }

        .content-container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 1.25rem;
          width: 100%;
          max-width: 75rem;
        }

        .card-container {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1.25rem;
          gap: 0.75rem;
          flex: 1;
          background: #ffffff;
          border: 1.5px solid #e7e9eb;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
          border-radius: 0.75rem;
          transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .card-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(120, 99, 252, 0.03),
            transparent
          );
          transition: left 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-container:hover::before {
          left: 100%;
        }

        .card-container:hover {
          border-color: rgba(120, 99, 252, 0.4);
          box-shadow: 0px 8px 24px rgba(120, 99, 252, 0.12),
                      0px 2px 8px rgba(120, 99, 252, 0.08);
          transform: translateY(-4px) scale(1.01);
        }

        .card-container.expanded {
          border-color: #7863fc;
          box-shadow: 0px 12px 32px rgba(120, 99, 252, 0.18),
                      0px 4px 12px rgba(120, 99, 252, 0.12);
        }

        .card-container.expanded:hover {
          transform: translateY(-2px) scale(1.005);
        }

        .card-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          width: 100%;
        }

        .icon-container {
          box-sizing: border-box;
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
          border: 1.55556px solid #e7e9eb;
          box-shadow: 0px 1.55556px 3.11111px rgba(0, 0, 0, 0.12);
          border-radius: 0.583rem;
          flex-shrink: 0;
          transition: all 500ms cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .icon-container svg {
          transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-container:hover .icon-container {
          transform: scale(1.08) rotate(2deg);
          border-color: rgba(120, 99, 252, 0.4);
          box-shadow: 0px 4px 12px rgba(120, 99, 252, 0.16);
          background: linear-gradient(135deg, #faf9ff 0%, #f5f3ff 100%);
        }

        .card-container:hover .icon-container svg {
          transform: scale(1.1);
        }

        .card-container.expanded .icon-container {
          border-color: rgba(120, 99, 252, 0.5);
        }

        .card-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #122232;
          flex: 1;
          margin: 0;
        }

        .card-description-container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 1rem;
          width: 100%;
        }

        .card-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
          line-height: 140%;
          letter-spacing: -0.01em;
          color: #122232;
          flex: 1;
          margin: 0;
        }

        .expand-button {
          width: 1.625rem;
          height: 1.625rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .chevron-icon {
          transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .chevron-icon.rotated {
          transform: rotate(180deg);
        }

        .card-container:hover .chevron-icon {
          transform: scale(1.1);
        }

        .card-container:hover .chevron-icon.rotated {
          transform: rotate(180deg) scale(1.1);
        }

        .expandable-content {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transform: translateY(-10px);
          transition: max-height 600ms cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 500ms cubic-bezier(0.16, 1, 0.3, 1),
                      transform 600ms cubic-bezier(0.16, 1, 0.3, 1),
                      margin-top 500ms cubic-bezier(0.16, 1, 0.3, 1);
          margin-top: 0;
        }

        .expandable-content.expanded {
          max-height: 500px;
          opacity: 1;
          transform: translateY(0);
          margin-top: 0.75rem;
        }

        .divider {
          width: 100%;
          height: 0px;
          border: 1px dashed #b6babf;
          margin-bottom: 0.75rem;
        }

        .service-details-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
          width: 100%;
        }

        .service-detail-container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0.75rem;
          width: 100%;
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 500ms cubic-bezier(0.16, 1, 0.3, 1),
                      transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .expandable-content.expanded .service-detail-container {
          opacity: 1;
          transform: translateX(0);
        }

        .service-detail-container:hover {
          transform: translateX(4px);
        }

        .expandable-content.expanded .service-detail-container:hover {
          opacity: 1;
        }

        .path-indicator {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 0.5rem;
          padding-top: 0.5rem;
        }

        .service-detail-indicator {
          width: 0.5rem;
          height: 0.5rem;
          background: #7863fc;
          border-radius: 0.125rem;
          flex-shrink: 0;
          transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 0 0 rgba(120, 99, 252, 0.4);
        }

        .service-detail-container:hover .service-detail-indicator {
          transform: scale(1.3);
          box-shadow: 0 0 0 4px rgba(120, 99, 252, 0.1);
        }

        .service-detail {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          line-height: 140%;
          letter-spacing: -0.01em;
          color: #122232;
          flex: 1;
          margin: 0;
          transition: color 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-detail-container:hover .service-detail {
          color: #7863fc;
        }

        @media (max-width: 1024px) {
          .deliverable-section {
            padding: 4rem 2rem;
          }

          .content-container {
            flex-direction: column;
          }

          .main-title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.125rem;
          }
        }

        @media (max-width: 768px) {
          .deliverable-section {
            padding: 3rem 1.5rem;
          }

          .deliverable-container {
            gap: 3rem;
          }

          .main-title {
            font-size: 1.75rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .card-title {
            font-size: 1.125rem;
          }

          .card-description {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </section>
  );
};

export default StartYourAuditDeliverable;
