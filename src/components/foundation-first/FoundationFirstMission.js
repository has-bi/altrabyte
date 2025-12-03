// src/components/foundation-first/FoundationFirstMission.js
"use client";
import React from "react";

const reasons = [
  "The market desperately needs foundation-first thinking",
  "Companies waste hundreds of thousands on solutions built on broken infrastructure",
  "Most consultants won't do the \"boring\" foundation work that actually transforms businesses",
  "We've proven this methodology works across industries, company sizes, and complexity levels",
];

const FoundationFirstMission = () => {
  return (
    <section className="mission-section">
      <div className="mission-wrapper">
        <div className="mission-container">
          {/* Left Content */}
          <div className="content-left">
            {/* Header */}
            <div className="header-container">
              <h2 className="main-title">Why Altrabyte Exists?</h2>
              <p className="subtitle">Filling the Gap Others Ignore</p>
            </div>

            {/* Reasons */}
            <div className="reasons-container">
              <h3 className="section-title">We founded Altrabyte because</h3>

              <div className="reasons-list">
                {reasons.map((reason, index) => (
                  <div key={index} className="reason-item">
                    {/* Check Icon */}
                    <div className="icon-container">
                      <div className="icon-background">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16667 10L8.33333 14.1667L16.6667 5.83333"
                            stroke="#122232"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Text */}
                    <p className="reason-text">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="cards-container">
            {/* Mission Card */}
            <div className="card mission-card">
              <div className="card-content">
                <div className="card-header">
                  <div className="card-icon-container">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0019 6.44553C10.9033 6.44553 9.82942 6.77135 8.91599 7.3818C8.00255 7.99226 7.29062 8.85991 6.87021 9.87506C6.4498 10.8902 6.33981 12.0072 6.55413 13.0849C6.76845 14.1626 7.29747 15.1525 8.07428 15.9294C8.85109 16.7064 9.8408 17.2355 10.9183 17.4499C11.9957 17.6642 13.1126 17.5542 14.1275 17.1337C15.1425 16.7132 16.01 16.0012 16.6203 15.0876C17.2306 14.174 17.5564 13.0999 17.5564 12.0011M13.1128 2.06235C11.0532 1.83125 8.97281 2.246 7.15925 3.24921C5.34568 4.25242 3.88863 5.79452 2.98964 7.66219C2.09065 9.52986 1.79415 11.6308 2.14116 13.6744C2.48816 15.718 3.46153 17.6032 4.92661 19.0693C6.39168 20.5354 8.27606 21.5099 10.3191 21.858C12.3621 22.2061 14.4628 21.9106 16.3306 21.0124C18.1983 20.1141 19.7409 18.6576 20.7448 16.8442C21.7487 15.0308 22.1645 12.9502 21.9344 10.8901M15.3346 8.66775V5.33442L18.6673 2.00109V5.33442H22L18.6673 8.66775H15.3346ZM15.3346 8.66775L12.0019 12.0011M10.891 12.0011C10.891 12.2958 11.008 12.5784 11.2164 12.7867C11.4247 12.9951 11.7073 13.1122 12.0019 13.1122C12.2965 13.1122 12.5791 12.9951 12.7874 12.7867C12.9958 12.5784 13.1128 12.2958 13.1128 12.0011C13.1128 11.7064 12.9958 11.4238 12.7874 11.2154C12.5791 11.007 12.2965 10.89 12.0019 10.89C11.7073 10.89 11.4247 11.007 11.2164 11.2154C11.008 11.4238 10.891 11.7064 10.891 12.0011Z"
                        stroke="#857E7C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="card-title">Our mission</h3>
                </div>
                <p className="card-description">
                  Save companies from expensive mistakes by building foundations
                  that actually support transformation.
                </p>
              </div>
              <div className="card-decoration" />
            </div>

            {/* Promise Card */}
            <div className="card promise-card">
              <div className="card-content">
                <div className="card-header">
                  <div className="card-icon-container">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.3383 12.6495L12.0093 21L3.68024 12.6495C3.13086 12.1083 2.69813 11.4578 2.40928 10.739C2.12044 10.0202 1.98174 9.2487 2.00193 8.47298C2.02211 7.69726 2.20074 6.93418 2.52656 6.23178C2.85239 5.52938 3.31835 4.90289 3.89511 4.39174C4.47187 3.8806 5.14693 3.49588 5.87778 3.26181C6.60863 3.02775 7.37944 2.9494 8.14167 3.03171C8.9039 3.11402 9.64104 3.35521 10.3067 3.74008C10.9723 4.12494 11.552 4.64516 12.0093 5.26797C12.4685 4.64968 13.0489 4.13401 13.714 3.75323C14.3792 3.37244 15.1149 3.13474 15.875 3.055C16.635 2.97527 17.4032 3.0552 18.1314 3.28982C18.8596 3.52443 19.5321 3.90867 20.1068 4.41848C20.6815 4.92829 21.1461 5.55271 21.4715 6.25264C21.7969 6.95258 21.976 7.71297 21.9978 8.48622C22.0195 9.25947 21.8833 10.0289 21.5978 10.7465C21.3122 11.464 20.8834 12.1141 20.3383 12.6562M12.0092 5.26157L8.35216 8.96356C8.14397 9.17438 8.02701 9.46027 8.02701 9.75837C8.02701 10.0565 8.14397 10.3424 8.35216 10.5532L8.95519 11.1636C9.72146 11.9393 10.9653 11.9393 11.7315 11.1636L12.8421 10.0394C13.5048 9.36857 14.4036 8.99169 15.3408 8.99169C16.278 8.99169 17.1768 9.36857 17.8395 10.0394L20.3382 12.5689M12.5645 15.9415L14.7855 18.1899M15.3408 13.131L17.5619 15.3794"
                        stroke="#857E7C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="card-title">Our promise</h3>
                </div>
                <p className="card-description">
                  We'll tell you what you actually need, not what you want to
                  hear.
                </p>
              </div>
              <div className="card-decoration" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Mission Section */
        .mission-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 5rem 7.5rem;
          gap: 0.625rem;
          background: #f2efff;
        }

        .mission-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .mission-container {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          padding: 5rem;
          gap: 5rem;
          width: 100%;
          max-width: 75rem;
          background: #ffffff;
          border-radius: 1.25rem;
        }

        /* Left Content */
        .content-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 2.5rem;
          flex: 1;
        }

        /* Header */
        .header-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 0.75rem;
        }

        .main-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 2.5rem;
          line-height: 128%;
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
          letter-spacing: -0.01em;
          color: #414e5b;
          margin: 0;
        }

        /* Reasons Container */
        .reasons-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 1.25rem;
          align-self: stretch;
        }

        .section-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          align-self: stretch;
        }

        /* Reasons List */
        .reasons-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 0.75rem;
          align-self: stretch;
        }

        /* Reason Item */
        .reason-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          gap: 0.75rem;
          border-radius: 100px;
          align-self: stretch;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .reason-item:hover {
          transform: translateX(4px);
        }

        .reason-item:hover .icon-background {
          background: #7863fc;
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 4px 12px rgba(120, 99, 252, 0.24);
        }

        .reason-item:hover .icon-background svg path {
          stroke: #ffffff;
        }

        /* Icon Container */
        .icon-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0.15625rem;
          gap: 0.78125rem;
          width: 1.875rem;
          height: 1.875rem;
          flex-shrink: 0;
        }

        .icon-background {
          width: 1.5625rem;
          height: 1.5625rem;
          background: #d5cffe;
          border-radius: 115.385px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .icon-background svg path {
          transition: stroke 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Reason Text */
        .reason-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          flex: 1;
        }

        /* Right Cards Container */
        .cards-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          padding: 0;
          gap: 1.5rem;
          width: 20rem;
          align-self: stretch;
        }

        /* Card Base */
        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 1.75rem;
          gap: 1.25rem;
          isolation: isolate;
          width: 100%;
          background: #f6eeec;
          border-radius: 0.75rem;
          position: relative;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(133, 126, 124, 0.16),
            0 4px 12px rgba(133, 126, 124, 0.08);
        }

        .card:hover .card-icon-container {
          background: #857e7c;
          transform: scale(1.05) rotate(5deg);
        }

        .card:hover .card-icon-container svg path {
          stroke: #ffffff;
        }

        .card:hover .card-decoration {
          opacity: 0.8;
          transform: scale(1.1);
        }

        .card-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 0.75rem;
          align-self: stretch;
          z-index: 0;
        }

        .card-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          gap: 1rem;
          align-self: stretch;
        }

        .card-icon-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0.75rem;
          gap: 0.625rem;
          width: 3rem;
          height: 3rem;
          background: #ffffff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
          border-radius: 0.5rem;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card-icon-container svg path {
          transition: stroke 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
        }

        .card-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          align-self: stretch;
        }

        /* Card Decoration Ellipse */
        .card-decoration {
          position: absolute;
          width: 0.75rem;
          height: 0.75rem;
          right: 0.90625rem;
          top: 0.75rem;
          background: #fefcfc;
          box-shadow: inset -2px 2px 2px rgba(0, 0, 0, 0.28);
          border-radius: 50%;
          z-index: 1;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .mission-section {
            padding: 4rem 2.5rem;
          }

          .mission-container {
            flex-direction: column;
            align-items: stretch;
            padding: 3rem;
            gap: 3rem;
          }

          .cards-container {
            width: 100%;
          }

          .main-title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.125rem;
          }

          .section-title {
            font-size: 1.25rem;
          }

          .reason-text {
            font-size: 1.125rem;
          }
        }

        @media (max-width: 768px) {
          .mission-section {
            padding: 3rem 1.25rem;
          }

          .mission-container {
            padding: 2rem;
            gap: 2rem;
          }

          .content-left {
            gap: 2rem;
          }

          .main-title {
            font-size: 1.75rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.125rem;
          }

          .reason-text {
            font-size: 1rem;
          }

          .card-title {
            font-size: 1.25rem;
          }

          .card-description {
            font-size: 1rem;
          }

          .cards-container {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundationFirstMission;
