"use client";
import React from "react";

const StartYourAuditQuestions = () => {
  return (
    <section className="questions-section">
      <div className="questions-wrapper">
        <div className="questions-container">
          {/* Questions Inner Container */}
          <div className="questions-inner-container">
            {/* Questions Title */}
            <div className="questions-title-wrapper">
              <h2 className="questions-title">
                The <span className="title-highlight">Two Questions</span>
                <br />
                That Reveal Everything:
              </h2>
            </div>

            {/* Questions Content Container */}
            <div className="questions-content-container">
              {/* Question 1 */}
              <div className="service-info-container">
                <div className="service-title-container">
                  <div className="service-icon-container">
                    <svg
                      className="question-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16V16.01"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8V12"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="service-title">"Show me your database"</h3>
                </div>
              </div>

              {/* Question 2 */}
              <div className="service-info-container">
                <div className="service-title-container">
                  <div className="service-icon-container">
                    <svg
                      className="question-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16V16.01"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8V12"
                        stroke="#7863FC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="service-title">"Show me your automation"</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Questions Note Container */}
          <div className="questions-note-container">
            <p className="questions-note">
              If you hesitate, point to Excel, or mention 'our admin handles
              it' - we know exactly what to fix.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .questions-section {
          position: relative;
          padding: 5rem 1.5rem;
          background: linear-gradient(
            180deg,
            #1a2c42 0%,
            #1e2538 40%,
            #2d2645 100%
          );
          overflow: hidden;
        }

        .questions-section::before {
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

        .questions-section::after {
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

        .questions-wrapper {
          position: relative;
          max-width: 75rem;
          margin: 0 auto;
          z-index: 2;
        }

        .questions-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 0;
          width: 100%;
          background: #ffffff;
          border: 12px solid rgba(255, 255, 255, 0.16);
          border-radius: 1.25rem;
          box-shadow: 0 28px 20px rgba(0, 0, 0, 0.12);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .questions-container:hover {
          transform: translateY(-4px);
          box-shadow: 0 32px 28px rgba(0, 0, 0, 0.16);
        }

        .questions-inner-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 2.5rem;
          gap: 2.5rem;
          width: 100%;
        }

        .questions-title-wrapper {
          flex: none;
        }

        .questions-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
        }

        .title-highlight {
          color: #7863fc;
        }

        .questions-content-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          gap: 1.25rem;
          flex: 1;
        }

        .service-info-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2rem;
          gap: 1rem;
          flex: 1;
          background: #f2efff;
          border-radius: 0.75rem;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .service-info-container:hover {
          background: #e9e4ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(120, 99, 252, 0.15);
        }

        .service-title-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          gap: 1rem;
          width: 100%;
        }

        .service-icon-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          width: 3rem;
          height: 3rem;
          background: #ffffff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
          border-radius: 0.75rem;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .service-info-container:hover .service-icon-container {
          box-shadow: 0px 4px 8px rgba(120, 99, 252, 0.2);
          transform: scale(1.05) rotate(5deg);
        }

        .question-icon {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .service-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          flex: 1;
        }

        .questions-note-container {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 2.5rem 1.25rem;
          gap: 0.625rem;
          width: 100%;
          border-top: 1px dashed #122232;
        }

        .questions-note {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .questions-inner-container {
            flex-direction: column;
            gap: 2rem;
            align-items: flex-start;
          }

          .questions-title-wrapper {
            width: 100%;
          }

          .questions-content-container {
            flex-direction: column;
            width: 100%;
            gap: 1rem;
          }

          .service-info-container {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .questions-section {
            padding: 4rem 1.25rem;
          }

          .questions-container {
            border: 8px solid rgba(255, 255, 255, 0.16);
          }

          .questions-inner-container {
            padding: 1.5rem;
            gap: 1.5rem;
          }

          .questions-title {
            font-size: 1.25rem;
          }

          .service-info-container {
            padding: 1.5rem;
          }

          .service-icon-container {
            width: 2.5rem;
            height: 2.5rem;
            padding: 0.625rem;
          }

          .service-title {
            font-size: 1.125rem;
          }

          .questions-note-container {
            padding: 1.5rem 1rem;
          }

          .questions-note {
            font-size: 1.125rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .questions-container,
          .service-info-container,
          .service-icon-container {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StartYourAuditQuestions;
