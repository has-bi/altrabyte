"use client";
import React, { useState } from "react";

const deliverables = [
  {
    id: 1,
    title: "Reality Mapping",
    description: "Where you actually are today",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M18 16.5V6.0111C18 5.5802 18.1841 5.16984 18.506 4.88334C18.8278 4.59683 19.2568 4.46149 19.6848 4.51139C25.8556 5.28391 30.716 10.1443 31.4885 16.3152C31.5384 16.7432 31.4031 17.1721 31.1166 17.4939C30.8301 17.8158 30.4197 17.9999 29.9888 17.9999H19.5C18.6716 17.9999 18 17.3284 18 16.5Z" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7.14014C6.83308 9.47303 3.82835 14.9385 4.62713 20.5511C5.4259 26.1637 9.83611 30.5739 15.4487 31.3727C21.0613 32.1715 26.5268 29.1668 28.8597 23.9999" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
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
        <path d="M12.375 8.99998L22.5105 8.98048C25.005 8.97598 27.0285 11.0025 27.018 13.497V13.518C27.0075 15.996 24.996 18 22.5195 18H14.9985C12.5145 18 10.5 20.0145 10.5 22.4985V22.4985C10.5 24.984 12.516 26.9985 15.0015 26.997L30 26.9925" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 26.9924L27.0045 29.9879" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27.0045 23.9954L30 26.9924" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.3865 6.61351C12.7045 7.93153 12.7045 10.0685 11.3865 11.3865C10.0685 12.7045 7.93153 12.7045 6.61351 11.3865C5.2955 10.0685 5.2955 7.93153 6.61351 6.61351C7.93153 5.2955 10.0685 5.2955 11.3865 6.61351" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
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
        <path d="M30 12V7.5C30 5.84315 28.6569 4.5 27 4.5H7.5C5.84315 4.5 4.5 5.84315 4.5 7.5V28.5C4.5 30.1569 5.84315 31.5 7.5 31.5H12" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27.75 23.625L25.5 25.875" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.5 25.875L23.625 24" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23.625 24L21.75 25.875" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="18" y="18" width="13.5" height="13.5" rx="3.75" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 12H24" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 18H13.5" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 24H12" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
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
        <path d="M23.9998 4.5V10.5M11.9998 4.5V10.5M5.99982 16.5H29.9998M5.99982 10.5C5.99982 9.70435 6.31589 8.94129 6.8785 8.37868C7.44111 7.81607 8.20417 7.5 8.99982 7.5H26.9998C27.7955 7.5 28.5585 7.81607 29.1211 8.37868C29.6837 8.94129 29.9998 9.70435 29.9998 10.5V28.5C29.9998 29.2956 29.6837 30.0587 29.1211 30.6213C28.5585 31.1839 27.7955 31.5 26.9998 31.5H8.99982C8.20417 31.5 7.44111 31.1839 6.8785 30.6213C6.31589 30.0587 5.99982 29.2956 5.99982 28.5V10.5Z" stroke="#122232" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 22.5C10.5 21.6716 11.1716 21 12 21H15C15.8284 21 16.5 21.6716 16.5 22.5V25.5C16.5 26.3284 15.8284 27 15 27H12C11.1716 27 10.5 26.3284 10.5 25.5V22.5Z" fill="#122232"/>
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
