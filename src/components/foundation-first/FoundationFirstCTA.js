"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const expectations = [
  {
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path
          d="M5.85055 25.2528C8.11513 25.2528 10.0173 23.7009 10.5514 21.6026C10.7167 20.9536 11.244 20.4022 11.9137 20.4022H20.4022M5.85055 25.2528C3.17167 25.2528 1 23.0811 1 20.4022V4.63792C1 2.62875 2.62875 1 4.63792 1H16.7643C18.7735 1 20.4022 2.62875 20.4022 4.63792V20.4022M5.85055 25.2528H20.4022C22.6668 25.2528 24.5689 23.7009 25.1031 21.6026C25.2683 20.9536 24.7099 20.4022 24.0401 20.4022H20.4022M7.06319 10.7011L9.18873 12.4015C9.69547 12.8069 10.4315 12.7415 10.8589 12.2532L14.339 8.27583"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    text: "Detailed assessment deliverable within 48 hours",
  },
  {
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
        <circle cx="13.5" cy="13.5" r="12.5" stroke="white" strokeWidth="2" />
        <path
          d="M13.5 6.5V13.5L18.5 16.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "90-minute deep dive session",
  },
  {
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path
          d="M9 17L13 13M15.6667 10.3333L17 9M9.19718 9.19336C9.10207 9.28585 9.03685 9.4047 9.00992 9.53461C8.98299 9.66451 8.99559 9.7995 9.04609 9.92217C9.0966 10.0448 9.18269 10.1496 9.29327 10.2229C9.40385 10.2962 9.53386 10.3346 9.66651 10.3334C9.84084 10.3337 10.0084 10.2657 10.1332 10.144M15.8638 15.86C15.7687 15.9525 15.7035 16.0714 15.6766 16.2013C15.6497 16.3312 15.6623 16.4662 15.7128 16.5888C15.7633 16.7115 15.8494 16.8162 15.9599 16.8895C16.0705 16.9628 16.2005 17.0013 16.3332 17C16.5075 17.0004 16.675 16.9324 16.7998 16.8107M8.8493 3.51996C9.28259 3.3771 9.67658 3.13513 9.99996 2.8133L10.9333 1.87996C11.2059 1.60583 11.53 1.38829 11.887 1.23984C12.2439 1.09139 12.6267 1.01497 13.0133 1.01497C13.3999 1.01497 13.7827 1.09139 14.1396 1.23984C14.4966 1.38829 14.8207 1.60583 15.0933 1.87996L16.0266 2.8133C16.576 3.35996 17.32 3.66663 18.0933 3.66663H19.4266C20.2046 3.66663 20.9507 3.97568 21.5008 4.52578C22.0509 5.07589 22.36 5.822 22.36 6.59996V7.9333C22.36 8.70663 22.6666 9.45063 23.2133 9.99996L24.1466 10.9333C24.4208 11.2059 24.6383 11.53 24.7868 11.887C24.9352 12.2439 25.0116 12.6267 25.0116 13.0133C25.0116 13.3999 24.9352 13.7827 24.7868 14.1396C24.6383 14.4966 24.4208 14.8207 24.1466 15.0933L23.2133 16.0266C22.8933 16.3484 22.6523 16.74 22.5093 17.1706M21.5 21.5013C21.2279 21.7739 20.9048 21.9901 20.549 22.1375C20.1931 22.2848 19.8117 22.3604 19.4266 22.36H18.0933C17.3188 22.3604 16.5758 22.6672 16.0266 23.2133L15.0933 24.1466C14.8207 24.4208 14.4966 24.6383 14.1396 24.7868C13.7827 24.9352 13.3999 25.0116 13.0133 25.0116C12.6267 25.0116 12.2439 24.9352 11.887 24.7868C11.53 24.6383 11.2059 24.4208 10.9333 24.1466L9.99996 23.2133C9.45075 22.6672 8.70783 22.3604 7.9333 22.36H6.59996C5.822 22.36 5.07589 22.0509 4.52578 21.5008C3.97568 20.9507 3.66663 20.2046 3.66663 19.4266V18.0933C3.66619 17.3188 3.35943 16.5758 2.8133 16.0266L1.87996 15.0933C1.60583 14.8207 1.38829 14.4966 1.23984 14.1396C1.09139 13.7827 1.01497 13.3999 1.01497 13.0133C1.01497 12.6267 1.09139 12.2439 1.23984 11.887C1.38829 11.53 1.60583 11.2059 1.87996 10.9333L2.8133 9.99996C3.35943 9.45075 3.66619 8.70783 3.66663 7.9333V6.59996C3.66663 5.79463 3.99196 5.06396 4.5173 4.5333M1 1L25 25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "No obligation, no sales pressure",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M10.9999 7.99976L20.0093 7.98243C22.2266 7.97843 24.0253 9.77976 24.0159 11.9971V12.0158C24.0066 14.2184 22.2186 15.9998 20.0173 15.9998H13.3319C11.1239 15.9998 9.33325 17.7904 9.33325 19.9984V19.9984C9.33325 22.2078 11.1253 23.9984 13.3346 23.9971L26.6666 23.9931"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.6666 23.9932L24.0039 26.6558"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.0039 21.3291L26.6666 23.9931"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.1213 5.87868C11.2929 7.05025 11.2929 8.94975 10.1213 10.1213C8.94975 11.2929 7.05025 11.2929 5.87868 10.1213C4.70711 8.94975 4.70711 7.05025 5.87868 5.87868C7.05025 4.70711 8.94975 4.70711 10.1213 5.87868"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Clear roadmap regardless of next steps",
  },
];

const FoundationFirstCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => sectionObserver.disconnect();
  }, []);

  useEffect(() => {
    const itemObserver = new IntersectionObserver(
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
      if (ref) itemObserver.observe(ref);
    });

    return () => itemObserver.disconnect();
  }, [visibleItems]);

  return (
    <section ref={sectionRef} className="cta-section">
      <div className="cta-container">
        {/* Main CTA Container */}
        <div className={`main-container ${isVisible ? "is-visible" : ""}`}>
          {/* CTA Content */}
          <div className="cta-content">
            {/* Left Column */}
            <div className="cta-text-column">
              <h2 className="cta-title">
                Start Your Foundation Transformation
              </h2>
              <p className="cta-description">
                After 10 years of pattern recognition across 6 organizations and
                5 industries, we know exactly what works.
              </p>
            </div>

            {/* Right Column - CTA Card */}
            <div className="cta-card">
              <div className="cta-card-text">
                Experience the Foundation First Difference
              </div>
              <div className="cta-divider" />
              <button className="cta-button">
                <span className="button-text">Book Your Foundation Audit</span>
                <span className="button-icon">
                  <ArrowUpRight className="icon" />
                </span>
              </button>
              <div className="card-decoration" />
            </div>
          </div>

          {/* Your Foundation Audit Will Reveal Section */}
          <div className="audit-section">
            <div className="audit-header">
              <h3 className="audit-header-text">
                Your foundation audit will reveal:
              </h3>
              <div className="audit-divider" />
            </div>

            <div className="audit-details">
              <div className="audit-detail-item">
                <div className="audit-detail-icon">
                  <div className="number-icon">1</div>
                </div>
                <p className="audit-detail-text">
                  Whether your infrastructure can support your ambitions
                </p>
              </div>

              <div className="audit-detail-item">
                <div className="audit-detail-icon">
                  <div className="number-icon">2</div>
                </div>
                <p className="audit-detail-text">
                  Which "advanced" solutions you're actually ready for
                </p>
              </div>

              <div className="audit-detail-item">
                <div className="audit-detail-icon">
                  <div className="number-icon">3</div>
                </div>
                <p className="audit-detail-text">
                  How to build capability that scales with your business
                </p>
              </div>

              <div className="audit-detail-item">
                <div className="audit-detail-icon">
                  <div className="number-icon">4</div>
                </div>
                <p className="audit-detail-text">
                  Why your previous data projects haven't delivered expected
                  results
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="testimonial-section">
            <p className="testimonial-text">
              "Because the best time to fix your foundation was yesterday. The
              second best time is now."
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5rem 7.5rem;
          background: #fbf7f6;
        }

        .cta-container {
          max-width: 85rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .main-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 5rem;
          gap: 2.5rem;
          width: 100%;
          background: #7863fc;
          border-radius: 2.5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 800ms ease, transform 800ms ease;
        }

        .main-container.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* CTA Content */
        .cta-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0;
          gap: 7.6875rem;
          width: 100%;
        }

        .cta-text-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 1.25rem;
          width: 36.875rem;
        }

        .cta-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 3.5rem;
          line-height: 128%;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
        }

        .cta-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .cta-card {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 2.5rem;
          gap: 1.5rem;
          isolation: isolate;
          margin: 0 auto;
          width: 30.4375rem;
          background: #f2efff;
          border: 3px solid #ffffff;
          box-shadow: 20px 40px 40px rgba(0, 0, 0, 0.12);
          border-radius: 0.75rem;
          position: relative;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cta-card:hover {
          transform: translateY(-6px);
          box-shadow: 20px 50px 50px rgba(0, 0, 0, 0.16),
            0 8px 24px rgba(120, 99, 252, 0.12);
        }

        .cta-card:hover .card-decoration {
          opacity: 0.6;
          transform: scale(1.1);
        }

        .cta-card-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 160%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #122232;
          width: 100%;
        }

        .cta-divider {
          width: 100%;
          height: 0;
          border: 1px dashed #122232;
        }

        .cta-button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 0.5rem 2rem;
          gap: 0.5rem;
          width: 100%;
          max-width: 20.625rem;
          height: 3.5rem;
          background: #122232;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(18, 34, 50, 0.24);
          background: #1a2e42;
        }

        .button-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.125rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #ffffff;
        }

        .button-icon {
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #ffffff;
        }

        .card-decoration {
          position: absolute;
          width: 1rem;
          height: 1rem;
          right: 0.75rem;
          top: 0.75rem;
          background: #e7e9eb;
          box-shadow: inset -2px 2px 2px rgba(0, 0, 0, 0.28);
          border-radius: 50%;
          z-index: 3;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Audit Section */
        .audit-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 1.25rem;
          width: 100%;
        }

        .audit-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          gap: 2.5rem;
          width: 100%;
        }

        .audit-header-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
          flex: none;
        }

        .audit-divider {
          width: 100%;
          height: 0;
          border: 1.5px dashed rgba(255, 255, 255, 0.4);
          flex: 1;
        }

        .audit-details {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          gap: 2.5rem;
          width: 100%;
        }

        .audit-detail-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 0.75rem;
          flex: 1;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .audit-detail-item:hover {
          transform: translateY(-4px);
        }

        .audit-detail-item:hover .audit-detail-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .audit-detail-icon {
          width: 2rem;
          height: 2rem;
          flex: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .number-icon {
          width: 2rem;
          height: 2rem;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
          line-height: 1;
          color: #ffffff;
        }

        .audit-detail-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
        }

        /* Testimonial Section */
        .testimonial-section {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 2.5rem 0 0;
          gap: 0.625rem;
          width: 100%;
          border-top: 1.5px dashed rgba(255, 255, 255, 0.4);
        }

        .testimonial-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 2rem;
          line-height: 128%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .cta-section {
            padding: 3.75rem 2.5rem;
          }

          .main-container {
            padding: 3.75rem 2.5rem;
            gap: 2rem;
          }

          .cta-content {
            flex-direction: column;
            gap: 2.5rem;
          }

          .cta-text-column {
            width: 100%;
          }

          .cta-card {
            width: 100%;
            max-width: 30.4375rem;
          }

          .audit-details {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
          }

          .audit-detail-item {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 3.125rem 1.25rem;
          }

          .main-container {
            padding: 2.5rem 1.5rem;
            gap: 1.75rem;
            border-radius: 1.5rem;
          }

          .cta-title {
            font-size: 2.5rem;
          }

          .cta-description {
            font-size: 1.25rem;
          }

          .cta-card {
            padding: 2rem 1.5rem;
            gap: 1.25rem;
          }

          .cta-card-text {
            font-size: 1.25rem;
          }

          .button-text {
            font-size: 1rem;
          }

          .audit-header-text {
            font-size: 1.25rem;
          }

          .audit-detail-text {
            font-size: 1.125rem;
          }

          .testimonial-text {
            font-size: 1.5rem;
          }

          .cta-content {
            gap: 2rem;
          }

          .audit-header {
            gap: 1.25rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .main-container,
          .cta-card,
          .cta-button,
          .audit-detail-item,
          .card-decoration {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundationFirstCTA;
