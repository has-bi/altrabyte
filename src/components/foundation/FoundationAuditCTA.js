"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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

const FoundationAuditCTA = () => {
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
              <h2 className="cta-title">Ready for Reality?</h2>
              <p className="cta-description">
                Most consultants tell you what you want to hear. We tell you
                what you need to know. The audit is free. The insights are
                priceless.
              </p>
            </div>

            {/* Right Column - CTA Card */}
            <div className="cta-card">
              <div className="cta-card-text">Book Your Foundation Audit</div>
              <div className="cta-divider" />
              <Link
                href="/start-your-audit"
                className="group inline-flex w-full items-center justify-between rounded-full bg-[#122232] px-6 py-4 text-left text-white transition-all duration-300 hover:bg-[#1a2e42] hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="text-[18px] font-semibold tracking-[-0.01em]">
                  Schedule My Foundation Audit
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>

          {/* What to Expect Section */}
          <div className="expectations-section">
            <div className="expectations-header">
              <h3 className="expectations-title">What to expect</h3>
              <div className="expectations-divider" />
            </div>

            <div className="expectations-grid">
              {expectations.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-item-index={index}
                  className={`expectation-item ${
                    visibleItems.includes(index) ? "is-visible" : ""
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="expectation-icon">{item.icon}</div>
                  <p className="expectation-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 120px;
          background: #fbf7f6;
        }

        .cta-container {
          max-width: 1360px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .main-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 80px;
          gap: 40px;
          width: 100%;
          background: #7863fc;
          border-radius: 40px;
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
          padding: 0px;
          gap: 123px;
          width: 100%;
        }

        .cta-text-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 16px;
          width: 590px;
        }

        .cta-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 56px;
          line-height: 128%;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
        }

        .cta-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
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
          padding: 48px 40px;
          gap: 24px;
          isolation: isolate;
          margin: 0 auto;
          width: 487px;
          background: #f2efff;
          border: 3px solid #ffffff;
          box-shadow: 20px 40px 40px rgba(0, 0, 0, 0.12);
          border-radius: 12px;
        }

        .cta-card-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 160%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #122232;
          width: 100%;
        }

        .cta-divider {
          width: 100%;
          height: 0px;
          border: 1px dashed #122232;
        }

        .cta-button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 8px 32px;
          gap: 8px;
          width: 100%;
          max-width: 353px;
          height: 56px;
          background: #122232;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          color: #ffffff;
          text-decoration: none;
          transition: transform 200ms ease, box-shadow 200ms ease;
        }

        .cta-button:visited {
          color: #ffffff;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(18, 34, 50, 0.2);
        }

        .button-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #ffffff;
        }

        .button-icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon {
          width: 24px;
          height: 24px;
          color: #ffffff;
        }

        /* Expectations Section */
        .expectations-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 20px;
          width: 100%;
        }

        .expectations-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 40px;
          width: 100%;
        }

        .expectations-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
          flex: none;
        }

        .expectations-divider {
          width: 100%;
          height: 0px;
          border: 1.5px dashed rgba(255, 255, 255, 0.4);
          flex: 1;
        }

        .expectations-grid {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          gap: 40px;
          width: 100%;
        }

        .expectation-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 12px;
          flex: 1;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 600ms cubic-bezier(0.4, 0, 0.2, 1),
            transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expectation-item.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .expectation-icon {
          width: 32px;
          height: 32px;
          flex: none;
        }

        .expectation-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .cta-section {
            padding: 60px 40px;
          }

          .main-container {
            padding: 60px 40px;
            gap: 32px;
          }

          .cta-content {
            flex-direction: column;
            gap: 40px;
          }

          .cta-text-column {
            width: 100%;
          }

          .cta-card {
            width: 100%;
            max-width: 487px;
          }

          .expectations-grid {
            flex-direction: column;
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 50px 20px;
          }

          .main-container {
            padding: 40px 24px;
            gap: 28px;
            border-radius: 24px;
          }

          .cta-title {
            font-size: 40px;
          }

          .cta-description {
            font-size: 20px;
          }

          .cta-card {
            padding: 32px 24px;
            gap: 20px;
          }

          .cta-card-text {
            font-size: 20px;
          }

          .button-text {
            font-size: 16px;
          }

          .expectations-title {
            font-size: 20px;
          }

          .expectation-text {
            font-size: 18px;
          }

          .cta-content {
            gap: 32px;
          }

          .expectations-header {
            gap: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .main-container,
          .expectation-item,
          .cta-button {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundationAuditCTA;
