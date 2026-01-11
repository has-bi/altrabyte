"use client";
import React, { useEffect, useRef, useState } from "react";

const promises = [
  {
    title: "Brutal Honesty",
    description: "We tell you what you actually need, not what you want to hear",
  },
  {
    title: "Realistic Timelines",
    description: "Real transformation takes months, not weeks—we'll show you why",
  },
  {
    title: "No Sales Pitch",
    description: "Pure assessment with recommendations you can use anywhere",
  },
  {
    title: "Actionable Roadmap",
    description: "Clear next steps, whether you work with us or not",
  },
];

const dontPromises = [
  {
    title: "Quick Fixes",
    description: "We won't promise overnight solutions to complex problems",
  },
  {
    title: "AI Band-Aids",
    description: "We won't slap AI on broken foundations and call it innovation",
  },
  {
    title: "Template Recommendations",
    description: "We won't give you generic advice that fits everyone and no one",
  },
  {
    title: "Fantasy Timelines",
    description: "We won't promise unrealistic deadlines just to close the deal",
  },
];

const pairedRows = promises.map((promise, idx) => ({
  promise,
  dont: dontPromises[idx],
}));

const FoundationAuditPromises = () => {
  const [visibleRows, setVisibleRows] = useState([]);
  const rowRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-row-index"));
          if (entry.isIntersecting && !visibleRows.includes(index)) {
            setVisibleRows((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-10% 0px",
      }
    );

    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleRows]);

  return (
    <section className="audit-promises">
      <div className="audit-promises__container">
        <header className="audit-promises__header">
          <h2>What we promise inside every audit</h2>
          <p>No fluff, no templates — only useful direction.</p>
        </header>

        <div className="promise-grid" role="list">
          <div className="grid-headings">
            <h3>What we bring to the table</h3>
            <h3 className="heading-right">What we won&apos;t do</h3>
          </div>

          {pairedRows.map((row, idx) => (
            <div
              key={row.promise.title}
              ref={(el) => (rowRefs.current[idx] = el)}
              data-row-index={idx}
              className={`promise-row ${visibleRows.includes(idx) ? "is-visible" : ""}`}
              role="listitem"
            >
              <div className="promise-card">
                <span className="promise-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#E6F6F1" />
                    <path
                      d="M7.5 12.25L10.5 15.25L16.5 9.25"
                      stroke="#07A276"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="promise-content">
                  <h4>{row.promise.title}</h4>
                  <p>{row.promise.description}</p>
                </div>
              </div>

              <div className="dont-card">
                <span className="dont-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#FCE9EE" />
                    <path d="M8 8L16 16" stroke="#E41E57" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 8L8 16" stroke="#E41E57" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="dont-content">
                  <h4>{row.dont.title}</h4>
                  <p>{row.dont.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .audit-promises {
          background: #fbf7f6;
          padding: 6rem 1.5rem 7rem;
        }

        .audit-promises__container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4.5rem;
        }

        .audit-promises__header {
          text-align: center;
          max-width: 780px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          animation: fadeIn 800ms ease-out;
        }

        @media (min-width: 1200px) {
          .audit-promises__header {
            max-width: 900px;
          }
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

        .audit-promises__header h2 {
          font-size: 2.75rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #122232;
          line-height: 1.2;
        }

        .audit-promises__header p {
          font-size: 1.125rem;
          color: #606b76;
          line-height: 1.6;
        }

        .promise-grid {
          position: relative;
          width: 100%;
          background: #ffffff;
          border-radius: 1.25rem;
          padding: 2.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04), 0 20px 40px rgba(0, 0, 0, 0.06);
        }

        .grid-headings {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .grid-headings h3 {
          font-size: 1.625rem;
          font-weight: 600;
          color: #122232;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .heading-right {
          color: #122232;
        }

        @media (min-width: 900px) {
          .grid-headings {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 2rem;
            align-items: end;
          }

          .heading-right {
            text-align: right;
          }
        }

        .promise-row {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          align-items: stretch;
          padding: 1.1rem 0;
          border-top: 1px solid #eef1f4;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 450ms cubic-bezier(0.34, 1.56, 0.64, 1),
            transform 450ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .promise-row:first-of-type {
          border-top: none;
          padding-top: 0;
        }

        .promise-row:last-of-type {
          padding-bottom: 0;
        }

        .promise-row.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 900px) {
          .promise-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 2rem;
          }

          .promise-row::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 1px;
            background: linear-gradient(
              180deg,
              rgba(228, 30, 87, 0) 0%,
              rgba(228, 30, 87, 0.16) 50%,
              rgba(228, 30, 87, 0) 100%
            );
            transform: translateX(-0.5px);
            pointer-events: none;
          }
        }

        .promise-card,
        .dont-card {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.9rem;
          align-items: center;
          padding: 1.1rem 1.25rem;
          border-radius: 1rem;
          border: 1px solid transparent;
          background: linear-gradient(135deg, rgba(7, 162, 118, 0.08), rgba(7, 162, 118, 0.02));
          transition: transform 280ms ease, box-shadow 280ms ease, border-color 280ms ease;
          height: 100%;
        }

        .promise-card:hover,
        .dont-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
        }

        .promise-card {
          border-color: rgba(7, 162, 118, 0.12);
        }

        .dont-card {
          background: linear-gradient(135deg, rgba(228, 30, 87, 0.05), rgba(228, 30, 87, 0.02));
          border-color: rgba(228, 30, 87, 0.12);
        }

        .promise-content h4,
        .dont-content h4 {
          margin: 0 0 0.35rem;
          font-size: 1.2rem;
          font-weight: 600;
          color: #122232;
        }

        .promise-content p,
        .dont-content p {
          margin: 0;
          color: #475569;
          line-height: 1.6;
        }

        .promise-icon,
        .dont-icon {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .promise-icon {
          background: #e6f6f1;
          color: #07a276;
        }

        .dont-icon {
          background: #fce9ee;
          color: #e41e57;
        }

        @media (max-width: 768px) {
          .audit-promises {
            padding: 3rem 1.25rem 4rem;
          }

          .audit-promises__header h2 {
            font-size: 2.25rem;
          }

          .audit-promises__header p {
            font-size: 1.0625rem;
          }

          .promise-grid {
            padding: 2rem 1.75rem;
          }

          .grid-headings {
            display: none;
          }

          .promise-card,
          .dont-card {
            padding: 1.25rem;
          }

          .promise-content h4,
          .dont-content h4 {
            font-size: 1.15rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .promise-row {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .promise-card,
          .dont-card {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundationAuditPromises;
