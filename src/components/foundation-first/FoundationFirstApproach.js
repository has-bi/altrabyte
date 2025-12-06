// src/components/foundation-first/FoundationFirstApproach.js
"use client";
import React, { useEffect, useRef, useState } from "react";

const phases = [
  {
    id: 1,
    label: "1",
    content:
      "Companies want advanced analytics (machine learning, AI, predictive models)",
  },
  {
    id: 2,
    label: "2",
    content:
      "Their foundation is broken (Excel databases, manual processes, scattered data)",
  },
  {
    id: 3,
    label: "3",
    content: "Projects fail or underdeliver because they're built on quicksand",
  },
  {
    id: 4,
    label: "4",
    content:
      "We fix foundation first and suddenly everything else becomes possible",
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
              <div className="phase-content-text">{phase.content}</div>

              {/* Vertical separator - except after last item */}
              {index < phases.length - 1 && (
                <div className="vertical-separator" />
              )}
            </div>
          ))}
        </div>

        {/* Why This Approach Works Container */}
        <div className="audit-container">
          <h3 className="audit-title">Why This Approach Works</h3>

          <div className="approach-details-container">
            {/* Industry Experience Container */}
            <div className="industry-experience-container">
              <h3 className="industry-experience-title">
                Industry Experience That Matters
              </h3>

              <div className="industry-experience-details-container">
                {/* Row 1 - 3 cards */}
                <div className="education-training-row">
                  {/* Education & Training */}
                  <div className="industry-card">
                    <div className="industry-card-icon-container">
                      <div className="industry-card-icon-background">
                        <svg
                          className="industry-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M24 15.9995V21.3329C24 23.542 22.2091 25.3329 20 25.3329H12C9.79087 25.3329 8.00001 23.542 8.00001 21.3329V15.9995M14.8074 7.26248L2.66667 13.3329L14.8074 19.4032C15.5582 19.7786 16.4418 19.7786 17.1926 19.4032L29.3333 13.3329L17.1926 7.26248C16.4418 6.88711 15.5582 6.88711 14.8074 7.26248Z"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M29.3333 13.3335V21.3335"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration"></div>
                    </div>
                    <div className="industry-card-text-container">
                      <h4 className="industry-card-title">
                        Education & Training
                      </h4>
                      <p className="industry-card-description">
                        Universities to professional development
                      </p>
                    </div>
                  </div>

                  {/* Energy & Finance */}
                  <div className="industry-card">
                    <div className="industry-card-icon-container">
                      <div className="industry-card-icon-background">
                        <svg
                          className="industry-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M4 4.66667H28"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.66669 4.6665V25.5185C6.66669 26.5212 7.47869 27.3332 8.48135 27.3332H23.52C24.5214 27.3332 25.3347 26.5212 25.3347 25.5185V4.6665"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 9.3335V11.0002"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 22.6667V21"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.316 13.3333C19.2294 12.032 18.156 11 16.8334 11H15.0067C13.7134 11 12.6667 12.048 12.6667 13.34C12.6667 14.4133 13.3974 15.3493 14.4374 15.6107L17.5614 16.3947C18.6027 16.656 19.332 17.592 19.332 18.6653C19.332 19.9587 18.284 21.0053 16.992 21.0053H15.1654C13.84 21.0053 12.7667 19.9707 12.6814 18.6667"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration"></div>
                    </div>
                    <div className="industry-card-text-container">
                      <h4 className="industry-card-title">Energy & Finance</h4>
                      <p className="industry-card-description">
                        Cross-industry portfolio experience
                      </p>
                    </div>
                  </div>

                  {/* Beauty & Cosmetics */}
                  <div className="industry-card">
                    <div className="industry-card-icon-container">
                      <div className="industry-card-icon-background">
                        <svg
                          className="industry-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M24.0044 17.0439C18.234 17.8039 12.4415 17.8039 6.67108 17.0439"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M28.0047 16.6623C28.0047 23.6579 22.3337 29.3289 15.3381 29.3289C8.34245 29.3289 2.67139 23.6579 2.67139 16.6623C2.67139 9.66666 8.34245 3.99561 15.3381 3.99561"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M26.2149 3.18151L26.9486 4.52249C27.071 4.74599 27.2548 4.92976 27.4783 5.05204L28.8191 5.7856C29.1396 5.96101 29.339 6.29733 29.339 6.66276C29.339 7.0282 29.1396 7.36452 28.8191 7.53993L27.4798 8.27275C27.2564 8.39497 27.0727 8.57859 26.9504 8.8019L26.2147 10.1452C26.0392 10.4657 25.7029 10.6648 25.3375 10.6648C24.9722 10.6648 24.636 10.4654 24.4606 10.1449L23.7272 8.80451C23.605 8.58114 23.4214 8.39745 23.1981 8.27514L21.8553 7.53974C21.5349 7.36424 21.3358 7.02795 21.3358 6.66261C21.3358 6.29728 21.5351 5.96106 21.8556 5.78568L23.1977 5.05136C23.4212 4.92907 23.6049 4.7453 23.7272 4.52181L24.4606 3.18155C24.636 2.86098 24.9723 2.66162 25.3377 2.66162C25.7031 2.66162 26.0394 2.86095 26.2149 3.18151Z"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4895 13.3286C16.5987 13.3286 16.5987 14.0939 15.3377 14.0939C14.0767 14.0939 14.0767 13.3286 12.186 13.3286C9.03419 13.3286 9.15264 16.7566 6.67108 17.1553C9.14686 17.9006 9.14686 21.3286 15.3377 21.3286C21.5286 21.3286 21.5286 17.9006 24.0044 17.1553C21.5286 16.7566 21.6413 13.3286 18.4895 13.3286Z"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration"></div>
                    </div>
                    <div className="industry-card-text-container">
                      <h4 className="industry-card-title">
                        Beauty & Cosmetics
                      </h4>
                      <p className="industry-card-description">
                        Global enterprise to startup brands
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 2 - 2 wider cards */}
                <div className="ecommerce-technology-row">
                  {/* E-commerce & Technology */}
                  <div className="industry-card-wide">
                    <div className="industry-card-icon-container">
                      <div className="industry-card-icon-background">
                        <svg
                          className="industry-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M24.0827 12L23.9813 10.4893C23.888 9.088 22.7253 8 21.3213 8H7.644C6.24 8 5.07733 9.088 4.984 10.4893L4.00666 25.1573C3.904 26.696 5.124 28 6.66666 28H8"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.4827 7.99984V6.6665C10.4827 4.45717 12.2733 2.6665 14.4827 2.6665V2.6665C16.692 2.6665 18.4827 4.45717 18.4827 6.6665V7.99984"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.2853 16H26.2853C27.2333 16 28 16.7667 28 17.7147V26.2867C28 27.2333 27.2333 28 26.2853 28H14.2853C13.3387 28 12.5707 27.2333 12.5707 26.2853V17.7133C12.572 16.7667 13.3387 16 14.2853 16V16Z"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.2853 20C17.2853 21.6573 18.628 23 20.2853 23C21.9427 23 23.2853 21.6573 23.2853 20"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration"></div>
                    </div>
                    <div className="industry-card-text-container">
                      <h4 className="industry-card-title">
                        E-commerce & Technology
                      </h4>
                      <p className="industry-card-description">
                        Platforms, marketplaces, health tech
                      </p>
                    </div>
                  </div>

                  {/* Distribution & Logistics */}
                  <div className="industry-card-wide">
                    <div className="industry-card-icon-container">
                      <div className="industry-card-icon-background">
                        <svg
                          className="industry-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M24.9387 24.3944C25.764 25.2197 25.764 26.5571 24.9387 27.3811C24.1133 28.2064 22.776 28.2064 21.952 27.3811C21.1267 26.5557 21.1267 25.2184 21.952 24.3944C22.7773 23.5691 24.1147 23.5691 24.9387 24.3944"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.272 24.3944C11.0974 25.2197 11.0974 26.557 10.272 27.381C9.4467 28.2064 8.10937 28.2064 7.28537 27.381C6.46137 26.5557 6.46004 25.2184 7.28537 24.3944C8.1107 23.5704 9.4467 23.569 10.272 24.3944"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.3334 5.33301H18.6667C19.4027 5.33301 20 5.93034 20 6.66634V19.9997H2.66669"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.66669 25.8877H4.00002C3.26402 25.8877 2.66669 25.2903 2.66669 24.5543V17.333"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20 9.33301H25.764C26.3093 9.33301 26.8 9.66501 27.0013 10.1717L29.1427 15.5237C29.268 15.8383 29.3333 16.1743 29.3333 16.513V24.4437C29.3333 25.1797 28.736 25.777 28 25.777H25.5587"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.3334 25.8932H10.8934"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M29.3333 18.6663H24V13.333H28.2667"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.66669 5.33317H9.33335"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.66669 9.33317H6.66669"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.00002 13.3332H2.66669"
                            stroke="#7863FC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration"></div>
                    </div>
                    <div className="industry-card-text-container">
                      <h4 className="industry-card-title">
                        Distribution & Logistics
                      </h4>
                      <p className="industry-card-description">
                        Multi-national operations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vector Divider */}
            <div className="vector-divider"></div>

            {/* Leadership Experience Container */}
            <div className="leadership-experience-container">
              <h3 className="leadership-experience-title">
                Leadership Experience
              </h3>

              <div className="leadership-experience-details-container">
                {/* Row 1 */}
                <div className="leadership-row">
                  {/* Multi-country Team */}
                  <div className="leadership-card">
                    <div className="leadership-card-icon-container">
                      <div className="leadership-card-icon-background">
                        <svg
                          className="leadership-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 22.6667L21.3333 20L17.4027 17.3587L14.812 17.1934L13.3333 18.6667L16 22.6667H20Z"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.084 4.04672C9.58533 3.39472 3.39466 9.58539 4.04666 17.0841C4.54266 22.7894 9.20933 27.4561 14.9147 27.9521C22.4133 28.6041 28.604 22.4147 27.952 14.9147C27.456 9.21072 22.7893 4.54406 17.084 4.04672Z"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.26801 10.6144L10.6667 14.6664L12.0067 12.0064L17.3333 10.6664L18.9093 4.36377"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration-green"></div>
                    </div>
                    <p className="leadership-card-text">
                      <strong>Multi-country team management</strong> across
                      Asia Pacific
                    </p>
                  </div>

                  {/* Remote Team */}
                  <div className="leadership-card">
                    <div className="leadership-card-icon-container">
                      <div className="leadership-card-icon-background">
                        <svg
                          className="leadership-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M27.7232 12.6987C28.7766 13.7521 28.7766 15.4599 27.7232 16.5133C26.6698 17.5667 24.962 17.5667 23.9086 16.5133C22.8552 15.4599 22.8552 13.7521 23.9086 12.6987C24.962 11.6453 26.6698 11.6453 27.7232 12.6987"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.9368 7.88347C20.5588 9.50545 20.5588 12.1352 18.9368 13.7572C17.3148 15.3792 14.6851 15.3792 13.0631 13.7572C11.4411 12.1352 11.4411 9.50546 13.0631 7.88347C14.6851 6.2615 17.3148 6.2615 18.9368 7.88347"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.09114 12.6987C9.14452 13.7521 9.14452 15.4599 8.09114 16.5133C7.03777 17.5667 5.32992 17.5667 4.27654 16.5133C3.22317 15.4599 3.22317 13.7521 4.27654 12.6987C5.32992 11.6453 7.03777 11.6453 8.09114 12.6987"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M30.6664 25.3337V23.8724C30.6664 22.0311 29.1744 20.5391 27.3331 20.5391H26.2651"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.33319 25.3337V23.8724C1.33319 22.0311 2.82519 20.5391 4.66652 20.5391H5.73452"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M23.1185 25.3336V23.1989C23.1185 20.6216 21.0292 18.5322 18.4518 18.5322H13.5465C10.9692 18.5322 8.87982 20.6216 8.87982 23.1989V25.3336"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration-green"></div>
                    </div>
                    <p className="leadership-card-text">
                      <strong>Remote team performance</strong> and
                      accountability systems
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="leadership-row">
                  {/* Strategic Pushback */}
                  <div className="leadership-card">
                    <div className="leadership-card-icon-container">
                      <div className="leadership-card-icon-background">
                        <svg
                          className="leadership-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M22.0952 22.0391L25.1429 5.6469L19.0476 11.6077L16 4.1567L12.9524 11.6077L6.85714 5.6469L9.90476 22.0391M22.0952 22.0391L24.3002 23.118C24.5533 23.2416 24.7661 23.4318 24.915 23.6671C25.0638 23.9023 25.1427 24.1735 25.1429 24.4502V27.9998H6.85714V24.4502C6.85729 24.1735 6.9362 23.9023 7.08503 23.6671C7.23386 23.4318 7.44673 23.2416 7.6998 23.118L9.90476 22.0391M22.0952 22.0391H9.90476M14.4762 4.1567C14.4762 4.55192 14.6367 4.93096 14.9225 5.21043C15.2083 5.48989 15.5959 5.6469 16 5.6469C16.4041 5.6469 16.7917 5.48989 17.0775 5.21043C17.3633 4.93096 17.5238 4.55192 17.5238 4.1567C17.5238 3.76148 17.3633 3.38244 17.0775 3.10297C16.7917 2.82351 16.4041 2.6665 16 2.6665C15.5959 2.6665 15.2083 2.82351 14.9225 3.10297C14.6367 3.38244 14.4762 3.76148 14.4762 4.1567ZM5.33333 5.6469C5.33333 6.04212 5.49387 6.42116 5.77964 6.70062C6.06541 6.98009 6.453 7.13709 6.85714 7.13709C7.26128 7.13709 7.64886 6.98009 7.93463 6.70062C8.2204 6.42116 8.38095 6.04212 8.38095 5.6469C8.38095 5.25167 8.2204 4.87263 7.93463 4.59317C7.64886 4.3137 7.26128 4.1567 6.85714 4.1567C6.453 4.1567 6.06541 4.3137 5.77964 4.59317C5.49387 4.87263 5.33333 5.25167 5.33333 5.6469ZM23.619 5.6469C23.619 6.04212 23.7796 6.42116 24.0654 6.70062C24.3511 6.98009 24.7387 7.13709 25.1429 7.13709C25.547 7.13709 25.9346 6.98009 26.2203 6.70062C26.5061 6.42116 26.6667 6.04212 26.6667 5.6469C26.6667 5.25167 26.5061 4.87263 26.2203 4.59317C25.9346 4.3137 25.547 4.1567 25.1429 4.1567C24.7387 4.1567 24.3511 4.3137 24.0654 4.59317C23.7796 4.87263 23.619 5.25167 23.619 5.6469Z"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration-green"></div>
                    </div>
                    <p className="leadership-card-text">
                      <strong>Strategic pushback</strong> to C-level management
                    </p>
                  </div>

                  {/* Cultural Adaptation */}
                  <div className="leadership-card">
                    <div className="leadership-card-icon-container">
                      <div className="leadership-card-icon-background">
                        <svg
                          className="leadership-card-icon"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M16 4V7.75C16 7.94891 15.921 8.13968 15.7803 8.28033C15.6397 8.42098 15.4489 8.5 15.25 8.5C14.6533 8.5 14.081 8.73705 13.659 9.15901C13.2371 9.58097 13 10.1533 13 10.75C13 11.3467 13.2371 11.919 13.659 12.341C14.081 12.7629 14.6533 13 15.25 13C15.4489 13 15.6397 13.079 15.7803 13.2197C15.921 13.3603 16 13.5511 16 13.75V16M16 16V18.25C16 18.4489 16.079 18.6397 16.2197 18.7803C16.3603 18.921 16.5511 19 16.75 19C17.3467 19 17.919 19.2371 18.341 19.659C18.7629 20.081 19 20.6533 19 21.25C19 21.8467 18.7629 22.419 18.341 22.841C17.919 23.2629 17.3467 23.5 16.75 23.5C16.5511 23.5 16.3603 23.579 16.2197 23.7197C16.079 23.8603 16 24.0511 16 24.25V28M16 16H18.25C18.4489 16 18.6397 15.921 18.7803 15.7803C18.921 15.6397 19 15.4489 19 15.25C19 14.6533 19.2371 14.081 19.659 13.659C20.081 13.2371 20.6533 13 21.25 13C21.8467 13 22.419 13.2371 22.841 13.659C23.2629 14.081 23.5 14.6533 23.5 15.25C23.5 15.4489 23.579 15.6397 23.7197 15.7803C23.8603 15.921 24.0511 16 24.25 16H28M16 16H13.75C13.5511 16 13.3603 16.079 13.2197 16.2197C13.079 16.3603 13 16.5511 13 16.75C13 17.3467 12.7629 17.919 12.341 18.341C11.919 18.7629 11.3467 19 10.75 19C10.1533 19 9.58097 18.7629 9.15901 18.341C8.73705 17.919 8.5 17.3467 8.5 16.75C8.5 16.5511 8.42098 16.3603 8.28033 16.2197C8.13968 16.079 7.94891 16 7.75 16H4M4 7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4H25C25.7956 4 26.5587 4.31607 27.1213 4.87868C27.6839 5.44129 28 6.20435 28 7V25C28 25.7956 27.6839 26.5587 27.1213 27.1213C26.5587 27.6839 25.7956 28 25 28H7C6.20435 28 5.44129 27.6839 4.87868 27.1213C4.31607 26.5587 4 25.7956 4 25V7Z"
                            stroke="#07A276"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ellipse-decoration-green"></div>
                    </div>
                    <p className="leadership-card-text">
                      <strong>Cultural adaptation</strong> across different
                      business environments
                    </p>
                  </div>
                </div>
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
          padding: 0.5rem;
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

        .phase-content-text {
          font-size: 1rem;
          font-weight: 400;
          color: #ffffff;
          line-height: 1.6;
          text-align: left;
        }

        /* Approach Container */
        .audit-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 4rem 3.5rem;
          gap: 3rem;
          background: #ffffff;
          border: 1px solid rgba(18, 34, 50, 0.08);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04),
            0 8px 24px rgba(18, 34, 50, 0.08),
            0 32px 80px rgba(18, 34, 50, 0.06);
          border-radius: 1.5rem;
          animation: fadeIn 900ms ease-out 500ms backwards;
          max-width: 75rem;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .audit-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(120, 99, 252, 0.3) 50%,
            transparent 100%
          );
        }

        /* Approach Title */
        .audit-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 2.5rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #122232;
          margin: 0;
          align-self: stretch;
        }

        /* Approach Details Container */
        .approach-details-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2.5rem;
          align-self: stretch;
        }

        /* Industry Experience Container */
        .industry-experience-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 2rem;
          align-self: stretch;
        }

        /* Industry Experience Title */
        .industry-experience-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          line-height: 1.3;
          letter-spacing: -0.015em;
          color: #122232;
          margin: 0;
          align-self: stretch;
        }

        /* Industry Experience Details Container */
        .industry-experience-details-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-self: stretch;
        }

        /* Education Training Row */
        .education-training-row {
          display: flex;
          flex-direction: row;
          gap: 1.25rem;
          align-self: stretch;
        }

        /* Industry Card */
        .industry-card {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 2rem;
          gap: 1.5rem;
          flex: 1;
          background: linear-gradient(135deg, #f8f6ff 0%, #f2efff 100%);
          border: 1px solid rgba(120, 99, 252, 0.12);
          border-radius: 1rem;
          position: relative;
          isolation: isolate;
          transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          overflow: hidden;
        }

        .industry-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(120, 99, 252, 0) 0%, rgba(120, 99, 252, 0.03) 100%);
          opacity: 0;
          transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .industry-card:hover::before {
          opacity: 1;
        }

        .industry-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(120, 99, 252, 0.16),
            0 2px 8px rgba(120, 99, 252, 0.08);
          border-color: rgba(120, 99, 252, 0.24);
        }

        /* Industry Card Icon Container */
        .industry-card-icon-container {
          position: relative;
          width: 3.5rem;
          height: 3.5rem;
        }

        /* Industry Card Icon Background */
        .industry-card-icon-background {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          background: #ffffff;
          border-radius: 0.75rem;
          box-shadow: 0 2px 8px rgba(120, 99, 252, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .industry-card:hover .industry-card-icon-background {
          box-shadow: 0 6px 18px rgba(120, 99, 252, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 1);
          transform: scale(1.03);
        }

        /* Industry Card Icon */
        .industry-card-icon {
          width: 2rem;
          height: 2rem;
          transition: transform 300ms ease;
        }

        .industry-card:hover .industry-card-icon {
          transform: scale(1.05);
        }

        /* Ellipse Decoration */
        .ellipse-decoration {
          display: none;
        }

        /* Industry Card Text Container */
        .industry-card-text-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-self: stretch;
        }

        /* Industry Card Title */
        .industry-card-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 1.125rem;
          line-height: 1.4;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
        }

        /* Industry Card Description */
        .industry-card-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 400;
          font-size: 0.9375rem;
          line-height: 1.6;
          letter-spacing: -0.005em;
          color: rgba(18, 34, 50, 0.72);
          margin: 0;
        }

        /* Ecommerce Technology Row */
        .ecommerce-technology-row {
          display: flex;
          flex-direction: row;
          gap: 1.25rem;
          align-self: stretch;
        }

        /* Industry Card Wide */
        .industry-card-wide {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 2rem;
          gap: 1.5rem;
          flex: 1;
          background: linear-gradient(135deg, #f8f6ff 0%, #f2efff 100%);
          border: 1px solid rgba(120, 99, 252, 0.12);
          border-radius: 1rem;
          position: relative;
          isolation: isolate;
          transition: all 340ms ease;
          cursor: default;
          overflow: hidden;
        }

        .industry-card-wide::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(120, 99, 252, 0) 0%, rgba(120, 99, 252, 0.03) 100%);
          opacity: 0;
          transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .industry-card-wide:hover::before {
          opacity: 1;
        }

        .industry-card-wide:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 26px rgba(120, 99, 252, 0.12),
            0 2px 6px rgba(120, 99, 252, 0.06);
          border-color: rgba(120, 99, 252, 0.18);
        }

        .industry-card-wide:hover .industry-card-icon-background {
          box-shadow: 0 6px 18px rgba(120, 99, 252, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 1);
          transform: scale(1.04);
        }

        .industry-card-wide:hover .industry-card-icon {
          transform: scale(1.05);
        }

        /* Vector Divider */
        .vector-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(18, 34, 50, 0.12) 50%,
            transparent 100%
          );
          align-self: stretch;
          margin: 1rem 0;
        }

        /* Leadership Experience Container */
        .leadership-experience-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 2rem;
          align-self: stretch;
        }

        /* Leadership Experience Title */
        .leadership-experience-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          line-height: 1.3;
          letter-spacing: -0.015em;
          color: #122232;
          margin: 0;
          align-self: stretch;
        }

        /* Leadership Experience Details Container */
        .leadership-experience-details-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-self: stretch;
        }

        /* Leadership Row */
        .leadership-row {
          display: flex;
          flex-direction: row;
          gap: 1.25rem;
          align-self: stretch;
        }

        /* Leadership Card */
        .leadership-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 2rem;
          gap: 1.5rem;
          flex: 1;
          background: linear-gradient(135deg, #f0faf7 0%, #e6f6f1 100%);
          border: 1px solid rgba(7, 162, 118, 0.12);
          border-radius: 1rem;
          position: relative;
          isolation: isolate;
          transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          overflow: hidden;
        }

        .leadership-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(7, 162, 118, 0) 0%, rgba(7, 162, 118, 0.03) 100%);
          opacity: 0;
          transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .leadership-card:hover::before {
          opacity: 1;
        }

        .leadership-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 26px rgba(7, 162, 118, 0.12),
            0 2px 6px rgba(7, 162, 118, 0.06);
          border-color: rgba(7, 162, 118, 0.18);
        }

        /* Leadership Card Icon Container */
        .leadership-card-icon-container {
          position: relative;
          width: 3.5rem;
          height: 3.5rem;
          flex-shrink: 0;
        }

        /* Leadership Card Icon Background */
        .leadership-card-icon-background {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          background: #ffffff;
          border-radius: 0.75rem;
          box-shadow: 0 2px 8px rgba(7, 162, 118, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          transition: all 320ms ease;
        }

        .leadership-card:hover .leadership-card-icon-background {
          box-shadow: 0 6px 18px rgba(7, 162, 118, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 1);
          transform: scale(1.04);
        }

        /* Leadership Card Icon */
        .leadership-card-icon {
          width: 2rem;
          height: 2rem;
          transition: transform 280ms ease;
        }

        .leadership-card:hover .leadership-card-icon {
          transform: scale(1.05);
        }

        /* Ellipse Decoration Green */
        .ellipse-decoration-green {
          display: none;
        }

        /* Leadership Card Text */
        .leadership-card-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 500;
          font-size: 0.9375rem;
          line-height: 1.6;
          letter-spacing: -0.005em;
          color: #122232;
          margin: 0;
          flex: 1;
        }

        .leadership-card-text strong {
          font-weight: 600;
          color: #122232;
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
            margin-bottom: 1rem;
          }

          .timeline-wrapper {
            margin-bottom: 1rem;
          }

          .phases-grid {
            gap: 4rem;
            margin-bottom: 4.5rem;
          }

          .vertical-separator {
            right: -2rem;
          }

          .phase-content-text {
            font-size: 1.0625rem;
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
            padding: 2rem 1.5rem;
            gap: 2rem;
          }

          .audit-title {
            font-size: 1.75rem;
          }

          .industry-experience-title,
          .leadership-experience-title {
            font-size: 1.125rem;
          }

          .education-training-row,
          .ecommerce-technology-row,
          .leadership-row {
            flex-direction: column;
          }

          .industry-card,
          .industry-card-wide,
          .leadership-card {
            padding: 1.5rem;
          }

          .industry-card-title {
            font-size: 1rem;
          }

          .industry-card-description {
            font-size: 0.875rem;
          }

          .leadership-card-text {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundationFirstApproach;
