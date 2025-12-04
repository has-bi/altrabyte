"use client";
import { useState, useEffect, useRef } from "react";

const promises = [
  {
    title: "Brutal Honesty",
    description: "We'll tell you what you actually need, not what you want to hear"
  },
  {
    title: "Realistic Timelines",
    description: "Months, not weeks, for real transformation"
  },
  {
    title: "No Sales Pitch",
    description: "Pure assessment, recommendations only"
  },
  {
    title: "Actionable Roadmap",
    description: "Specific next steps, whether you work with us or not"
  }
];

const noPromises = [
  "Quick fixes for complex problems",
  "AI solutions for foundation issues",
  "Generic recommendations",
  "Unrealistic timelines"
];

const StartYourAuditGuarantee = () => {
  const [visibleItems, setVisibleItems] = useState([]);
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
    <section ref={sectionRef} className="guarantee-section">
      <div className="guarantee-container">
        {/* Header */}
        <div className="header-container">
          <h2 className="title">Foundation Audit Guarantee</h2>
          <p className="subtitle">Our Guarantee to You</p>
        </div>

        {/* Content Container */}
        <div className="content-container">
          {/* Promise Section */}
          <div className="promise-section">
            <h3 className="section-title">What We Promise</h3>
            <div className="promise-list">
              {promises.map((promise, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-item-index={index}
                  className={`promise-item ${visibleItems.includes(index) ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="promise-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4.16675 10.4167L7.50008 13.75L15.8334 5.41669"
                        stroke="#07A276"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="promise-text">
                    <h4 className="promise-title">{promise.title}</h4>
                    <p className="promise-description">{promise.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Don't Promise Section */}
          <div className="no-promise-section">
            <h3 className="section-title">What We Don't Promise</h3>
            <div className="no-promise-list">
              {noPromises.map((noPromise, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[promises.length + index] = el)}
                  data-item-index={promises.length + index}
                  className={`no-promise-item ${visibleItems.includes(promises.length + index) ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index + 2) * 80}ms` }}
                >
                  <div className="no-promise-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 5L15 15M15 5L5 15"
                        stroke="#E41E57"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="no-promise-text">{noPromise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .guarantee-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5rem 7.5rem;
          gap: 4rem;
          background: #fbf7f6;
        }

        .guarantee-container {
          max-width: 75rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
        }

        .header-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
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
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 2.5rem;
          line-height: 128%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          text-align: center;
        }

        .subtitle {
          font-family: 'Plus Jakarta Sans', sans-serif;
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
          width: 100%;
          border-radius: 1.25rem;
          animation: fadeIn 800ms ease 200ms forwards;
          opacity: 0;
        }

        .promise-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2.5rem;
          gap: 1.25rem;
          flex: 1;
          background: #ffffff;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
          border-radius: 1.25rem 0px 1.25rem 1.25rem;
          transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .promise-section:hover {
          box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
          transform: translateY(-2px);
        }

        .no-promise-section {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2.5rem;
          gap: 1.25rem;
          flex: 0.76;
          border: 1.5px dashed #606b76;
          border-width: 1.5px 1.5px 1.5px 0px;
          border-radius: 0px 1.25rem 1.25rem 0px;
          transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .no-promise-section:hover {
          border-color: #E41E57;
          background: rgba(252, 233, 238, 0.05);
        }

        .section-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          width: 100%;
        }

        .promise-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          width: 100%;
        }

        .promise-item {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0.75rem;
          width: 100%;
          opacity: 0;
          transform: translateX(-20px);
          transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0.5rem;
          margin: -0.5rem;
          border-radius: 0.5rem;
        }

        .promise-item.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .promise-item:hover {
          background: rgba(7, 162, 118, 0.03);
          transform: translateX(4px);
        }

        .promise-icon {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 1.875rem;
          height: 1.875rem;
          background: #e6f6f1;
          border-radius: 4rem;
          flex-shrink: 0;
          transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .promise-item:hover .promise-icon {
          background: #07A276;
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 4px 12px rgba(7, 162, 118, 0.2);
        }

        .promise-item:hover .promise-icon svg path {
          stroke: #ffffff;
        }

        .promise-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 0.25rem;
          flex: 1;
        }

        .promise-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          transition: color 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .promise-item:hover .promise-title {
          color: #07A276;
        }

        .promise-description {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #414e5b;
          margin: 0;
        }

        .no-promise-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          width: 100%;
        }

        .no-promise-item {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0.75rem;
          width: 100%;
          opacity: 0;
          transform: translateX(20px);
          transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0.5rem;
          margin: -0.5rem;
          border-radius: 0.5rem;
        }

        .no-promise-item.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .no-promise-item:hover {
          background: rgba(228, 30, 87, 0.03);
          transform: translateX(-4px);
        }

        .no-promise-icon {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 1.875rem;
          height: 1.875rem;
          background: #fce9ee;
          border-radius: 4rem;
          flex-shrink: 0;
          transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .no-promise-item:hover .no-promise-icon {
          background: #E41E57;
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 4px 12px rgba(228, 30, 87, 0.2);
        }

        .no-promise-item:hover .no-promise-icon svg path {
          stroke: #ffffff;
        }

        .no-promise-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          flex: 1;
          transition: color 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .no-promise-item:hover .no-promise-text {
          color: #E41E57;
        }

        @media (max-width: 1024px) {
          .guarantee-section {
            padding: 4rem 2rem;
          }

          .content-container {
            flex-direction: column;
            gap: 0;
          }

          .promise-section {
            border-radius: 1.25rem 1.25rem 0 0;
          }

          .no-promise-section {
            border-width: 0px 1.5px 1.5px 1.5px;
            border-radius: 0 0 1.25rem 1.25rem;
          }
        }

        @media (max-width: 768px) {
          .guarantee-section {
            padding: 3rem 1.5rem;
            gap: 3rem;
          }

          .title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.125rem;
          }

          .section-title {
            font-size: 1.25rem;
          }

          .promise-title,
          .no-promise-text {
            font-size: 1.125rem;
          }

          .promise-description {
            font-size: 1rem;
          }

          .promise-section,
          .no-promise-section {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default StartYourAuditGuarantee;
