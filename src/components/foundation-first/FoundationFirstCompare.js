// src/components/foundation-first/FoundationFirstCompare.js
"use client";
import { useState, useEffect, useRef } from "react";

const wrongApproaches = [
  "Assume foundation exists when it usually doesn't",
  "Sell advanced solutions on broken foundations",
  "Focus on technical capabilities over business outcomes",
  "Build on broken foundations and wonder why projects fail",
];

const rightApproaches = [
  "Assume foundation needs work and prove it through assessment",
  "Sell boring infrastructure that actually transforms businesses",
  "Focus on business impact using appropriate technology",
  "Fix foundation first so advanced solutions actually work",
];

const FoundationFirstCompare = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredSide, setHoveredSide] = useState(null);
  const itemRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-item-index"));
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section ref={sectionRef} className="compare-section">
      <div className="compare-container">
        {/* Header */}
        <div className="header-container">
          <h2 className="title">Why Most Data Consultants Get it Wrong</h2>
          <p className="subtitle">The Industry's Fundamental Mistake</p>
        </div>

        {/* Content Container */}
        <div className="content-container">
          {/* Left Column */}
          <div className="left-column">
            <h3 className="column-title">What other consultants do</h3>
            <div className="column-content">
              {wrongApproaches.map((approach, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-item-index={index}
                  className={`left-row ${index === 0 ? 'first' : ''} ${
                    index === wrongApproaches.length - 1 ? 'last' : ''
                  } ${visibleItems.includes(index) ? 'visible' : ''} ${
                    hoveredIndex === index && hoveredSide === 'left' ? 'hovered' : ''
                  }`}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setHoveredSide('left');
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setHoveredSide(null);
                  }}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="icon-container">
                    <svg
                      className="icon-square-close"
                      width="24"
                      height="24"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <rect
                        x="2.33"
                        y="2.33"
                        width="23.33"
                        height="23.33"
                        rx="5.67"
                        stroke="#ED688E"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M10.5 10.5L17.5 17.5M17.5 10.5L10.5 17.5"
                        stroke="#ED688E"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="row-text">{approach}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="divider" />

          {/* Right Column */}
          <div className="right-column">
            <h3 className="column-title">What we learned to do</h3>
            <div className="column-content">
              {rightApproaches.map((approach, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[wrongApproaches.length + index] = el)}
                  data-item-index={wrongApproaches.length + index}
                  className={`right-row ${index === 0 ? 'first' : ''} ${
                    index === rightApproaches.length - 1 ? 'last' : ''
                  } ${visibleItems.includes(wrongApproaches.length + index) ? 'visible' : ''} ${
                    hoveredIndex === index && hoveredSide === 'right' ? 'hovered' : ''
                  }`}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setHoveredSide('right');
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setHoveredSide(null);
                  }}
                  style={{ transitionDelay: `${index * 100 + 50}ms` }}
                >
                  <div className="icon-container">
                    <svg
                      className="icon-square-check"
                      width="24"
                      height="24"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <rect
                        x="2.33"
                        y="2.33"
                        width="23.33"
                        height="23.33"
                        rx="5.67"
                        stroke="#59C1A3"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8.75 14L12.25 17.5L19.25 10.5"
                        stroke="#59C1A3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="row-text">{approach}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main Container */
        .compare-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 120px;
          gap: 64px;
          background: #fbf7f6;
        }

        .compare-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 64px;
        }

        /* Header Container */
        .header-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 12px;
          animation: fadeIn 800ms ease forwards;
        }

        /* Title */
        .title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          line-height: 128%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          text-align: center;
        }

        /* Subtitle */
        .subtitle {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #414e5b;
          margin: 0;
        }

        /* Content Container */
        .content-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 40px;
          isolation: isolate;
          width: 100%;
          background: #ffffff;
          border-radius: 20px;
          position: relative;
          animation: fadeIn 800ms ease 200ms forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Left Column */
        .left-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 28px;
          flex: 1;
          z-index: 0;
        }

        /* Right Column */
        .right-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          gap: 28px;
          flex: 1;
          z-index: 1;
        }

        /* Column Title */
        .column-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 140%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          width: 100%;
        }

        /* Column Content */
        .column-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          width: 100%;
        }

        /* Left Row */
        .left-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 16px;
          gap: 12px;
          width: 100%;
          min-height: 60px;
          background: #fce9ee;
          border-width: 1.5px 0px 1.5px 1.5px;
          border-style: solid;
          border-color: #f7b9cb;
          opacity: 0;
          transform: translateY(20px);
          transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .left-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .left-row.hovered {
          background: #fbd5e0;
          border-color: #ed688e;
        }

        .left-row.first {
          border-radius: 12px 0px 0px 0px;
        }

        .left-row.last {
          border-radius: 0px 0px 0px 12px;
        }

        /* Right Row */
        .right-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 16px;
          gap: 12px;
          width: 100%;
          min-height: 60px;
          background: #e6f6f1;
          border-width: 1.5px 1.5px 1.5px 0px;
          border-style: solid;
          border-color: #b2e2d5;
          opacity: 0;
          transform: translateY(20px);
          transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .right-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .right-row.hovered {
          background: #d1f0e8;
          border-color: #59c1a3;
        }

        .right-row.first {
          border-radius: 0px 12px 0px 0px;
        }

        .right-row.last {
          border-radius: 0px 0px 12px 0px;
        }

        /* Icon Container */
        .icon-container {
          flex: none;
          width: 24px;
          height: 24px;
        }

        /* Row Text */
        .row-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          flex: 1;
        }

        /* Divider */
        .divider {
          position: absolute;
          width: 0px;
          height: 100%;
          left: 50%;
          top: 0;
          border: 1.5px dashed #122232;
          z-index: 2;
          opacity: 0.3;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .compare-section {
            padding: 60px 40px;
          }

          .content-container {
            flex-direction: column;
            gap: 40px;
            padding: 30px;
          }

          .divider {
            width: 100%;
            height: 0px;
            left: 0;
            top: 50%;
            border: 1.5px dashed #122232;
          }

          .left-row {
            border-width: 1.5px;
            border-radius: 12px !important;
          }

          .right-row {
            border-width: 1.5px;
            border-radius: 12px !important;
          }

          .column-content {
            gap: 12px;
          }
        }

        @media (max-width: 768px) {
          .compare-section {
            padding: 50px 20px;
            gap: 40px;
          }

          .title {
            font-size: 32px;
          }

          .subtitle {
            font-size: 18px;
          }

          .column-title {
            font-size: 24px;
          }

          .row-text {
            font-size: 18px;
          }

          .content-container {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundationFirstCompare;
