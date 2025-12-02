// src/components/foundation-first/FoundationFirstInsight.js
"use client";
import React from "react";

const insightCards = [
  {
    id: 1,
    title: "The Market Believes",
    description:
      "Advanced analytics and AI are the solution to business problems",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 16V12C40 8.68629 37.3137 6 34 6H10C6.68629 6 4 8.68629 4 12V30C4 33.3137 6.68629 36 10 36H24"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 20H17C17.5523 20 18 20.4477 18 21V28H12V21C12 20.4477 12.4477 20 13 20Z"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 12H23C23.5523 12 24 12.4477 24 13V28H18V13C18 12.4477 18.4477 12 19 12Z"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 20V17C30 16.4477 29.5523 16 29 16H25C24.4477 16 24 16.4477 24 17V28H26"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.5 40.9961V39.9961C44.5 37.787 42.7091 35.9961 40.5 35.9961H33.5C31.2909 35.9961 29.5 37.787 29.5 39.9961V40.9961C29.5 41.5484 29.9477 41.9961 30.5 41.9961H43.5C44.0523 41.9961 44.5 41.5484 44.5 40.9961Z"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="37"
          cy="27"
          r="4"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "The Reality We Uncovered",
    description: "Most companies aren't ready for what they think they want",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.0033 5.99219L15.9966 42.0072"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.6638 36.0046H14.9962C10.0242 36.0046 5.99249 31.9729 5.99249 27.0008V27.0008C5.99249 22.0287 10.0242 17.9971 14.9962 17.9971H26.6671"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.4458 13.9961H33.0037C37.9758 13.9961 42.0075 18.0278 42.0075 22.9998V22.9998C42.0075 27.9719 37.9758 32.0036 33.0037 32.0036H20.4425"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Our Contrarian Truth",
    description:
      "The companies that transform fastest are the ones that fix their foundation first",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.7321 10.99C21.7261 10.99 21.7221 10.994 21.7221 11C21.7221 11.006 21.7261 11.01 21.7321 11.01C21.7381 11.01 21.7421 11.006 21.7421 11C21.7421 10.994 21.7381 10.99 21.7321 10.99"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.6541 10.99C16.6481 10.99 16.6441 10.994 16.6441 11C16.6441 11.006 16.6481 11.01 16.6541 11.01C16.6601 11.01 16.6641 11.006 16.6641 11C16.6641 10.994 16.6601 10.99 16.6541 10.99"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.558 10.9802C11.552 10.9802 11.548 10.9842 11.548 10.9902C11.548 10.9962 11.552 11.0002 11.558 11.0002C11.564 11.0002 11.568 10.9962 11.568 10.9902C11.568 10.9842 11.564 10.9802 11.558 10.9802"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 16H42"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 20V10C42 7.79 40.21 6 38 6H10C7.79 6 6 7.79 6 10V36C6 38.21 7.79 40 10 40H18"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 42L38.04 38.04"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.668 40.668C26.698 40.668 22.668 36.638 22.668 31.668C22.668 26.698 26.698 22.668 31.668 22.668C36.64 22.668 40.668 26.698 40.668 31.668C40.668 36.638 36.64 40.668 31.668 40.668"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.168 30.168L31.668 28.666V34.668"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.174 34.6738H33.162"
          stroke="#122232"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "The Proof",
    description:
      "Every successful transformation in our portfolio started with infrastructure, not intelligence",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 33.5C23.2 33.5 22.4 33.44 21.64 33.3C17.4 32.68 13.54 30.24 11.1 26.62C9.4 24.06 8.5 21.08 8.5 18C8.5 9.46 15.46 2.5 24 2.5C32.54 2.5 39.5 9.46 39.5 18C39.5 21.08 38.6 24.06 36.9 26.62C34.44 30.26 30.58 32.68 26.3 33.32C25.6 33.44 24.8 33.5 24 33.5ZM24 5.5C17.1 5.5 11.5 11.1 11.5 18C11.5 20.5 12.22 22.9 13.58 24.94C15.56 27.86 18.66 29.82 22.1 30.32C23.38 30.54 24.64 30.54 25.82 30.32C29.32 29.82 32.42 27.84 34.4 24.92C35.76 22.88 36.48 20.48 36.48 17.98C36.5 11.1 30.9 5.5 24 5.5Z"
          fill="#122232"
        />
        <path
          d="M12.9396 45.1799C12.6596 45.1799 12.3996 45.14 12.1196 45.08C10.8196 44.78 9.81964 43.7799 9.51964 42.4799L8.81963 39.5399C8.77963 39.3599 8.63963 39.2199 8.43963 39.1599L5.13964 38.3799C3.89964 38.0799 2.91964 37.1599 2.57964 35.9399C2.23964 34.7199 2.57964 33.3999 3.47964 32.4999L11.2796 24.6999C11.5996 24.3799 12.0396 24.2199 12.4796 24.2599C12.9196 24.2999 13.3196 24.5399 13.5796 24.9199C15.5596 27.8399 18.6596 29.8199 22.1196 30.3199C23.3996 30.5399 24.6596 30.5399 25.8396 30.3199C29.3396 29.8199 32.4396 27.8399 34.4196 24.9199C34.6596 24.5399 35.0796 24.2999 35.5196 24.2599C35.9596 24.2199 36.3996 24.3799 36.7196 24.6999L44.5196 32.4999C45.4196 33.3999 45.7596 34.7199 45.4196 35.9399C45.0796 37.1599 44.0796 38.0999 42.8596 38.3799L39.5596 39.1599C39.3796 39.1999 39.2396 39.3399 39.1796 39.5399L38.4796 42.4799C38.1796 43.7799 37.1796 44.78 35.8796 45.08C34.5796 45.4 33.2396 44.9399 32.3996 43.9199L23.9996 34.2599L15.5996 43.9399C14.9196 44.7399 13.9596 45.1799 12.9396 45.1799ZM12.1796 28.0599L5.59964 34.64C5.41964 34.82 5.43964 35.02 5.47964 35.14C5.49964 35.24 5.59964 35.4399 5.83964 35.4799L9.13964 36.2599C10.4396 36.5599 11.4396 37.5599 11.7396 38.8599L12.4396 41.7999C12.4996 42.0599 12.6996 42.1399 12.8196 42.1799C12.9396 42.1999 13.1396 42.22 13.3196 42.02L20.9796 33.1999C17.5796 32.5399 14.4596 30.7199 12.1796 28.0599ZM27.0196 33.1799L34.6796 41.9799C34.8596 42.1999 35.0796 42.1999 35.1996 42.1599C35.3196 42.1399 35.4996 42.04 35.5796 41.78L36.2796 38.84C36.5796 37.54 37.5796 36.5399 38.8796 36.2399L42.1796 35.46C42.4196 35.4 42.5196 35.2199 42.5396 35.1199C42.5796 35.0199 42.5996 34.7999 42.4196 34.6199L35.8396 28.0399C33.5396 30.6999 30.4396 32.5199 27.0196 33.1799Z"
          fill="#122232"
        />
        <path
          d="M27.7803 25.7805C27.2603 25.7805 26.6403 25.6405 25.9003 25.2005L24.0003 24.0605L22.1003 25.1805C20.3603 26.2205 19.2203 25.6205 18.8003 25.3205C18.3803 25.0205 17.4803 24.1205 17.9403 22.1405L18.4203 20.0805L16.8203 18.6005C15.9403 17.7205 15.6203 16.6605 15.9203 15.7005C16.2203 14.7405 17.1003 14.0605 18.3403 13.8605L20.4803 13.5005L21.5003 11.2605C22.0803 10.1205 22.9803 9.48047 24.0003 9.48047C25.0203 9.48047 25.9403 10.1405 26.5003 11.2805L27.6803 13.6405L29.6603 13.8805C30.8803 14.0805 31.7603 14.7605 32.0803 15.7205C32.3803 16.6805 32.0603 17.7405 31.1803 18.6205L29.5203 20.2805L30.0403 22.1405C30.5003 24.1205 29.6003 25.0205 29.1803 25.3205C28.9603 25.5005 28.4803 25.7805 27.7803 25.7805ZM19.2203 16.7805L20.6003 18.1605C21.2403 18.8005 21.5603 19.8805 21.3603 20.7605L20.9803 22.3605L22.5803 21.4205C23.4403 20.9205 24.6003 20.9205 25.4403 21.4205L27.0403 22.3605L26.6803 20.7605C26.4803 19.8605 26.7803 18.8005 27.4203 18.1605L28.8003 16.7805L27.0603 16.4805C26.2203 16.3405 25.3803 15.7205 25.0003 14.9605L24.0003 13.0005L23.0003 15.0005C22.6403 15.7405 21.8003 16.3805 20.9603 16.5205L19.2203 16.7805Z"
          fill="#122232"
        />
      </svg>
    ),
  },
];

const FoundationFirstInsight = () => {
  return (
    <section className="insight-section">
      <div className="insight-container">
        {/* Header */}
        <div className="header-container">
          <h2 className="main-title">
            The Contrarian Insight That Changed Everything
          </h2>
          <p className="subtitle">What We Discovered Teaching the Industry</p>
        </div>

        {/* Content Container */}
        <div className="content-container">
          {insightCards.map((card, index) => (
            <React.Fragment key={card.id}>
              {/* Card */}
              <div className="card-container">
                {/* Icon Container */}
                <div className="icon-container">{card.icon}</div>

                {/* Text Container */}
                <div className="text-container">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>

              {/* Divider - except after last card */}
              {index < insightCards.length - 1 && (
                <div className="card-divider" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Main Container */
        .insight-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5rem 7.5rem;
          gap: 4rem;
          background: #ffffff;
        }

        .insight-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
          max-width: 90rem;
          width: 100%;
        }

        /* Header Container */
        .header-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0;
          gap: 0.75rem;
          max-width: 30.875rem;
        }

        /* Main Title */
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

        /* Subtitle */
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

        /* Content Container */
        .content-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          gap: 1.25rem;
          width: 100%;
          max-width: 75rem;
        }

        /* Card Container */
        .card-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 1.75rem;
          flex: 1;
        }

        /* Icon Container */
        .icon-container {
          box-sizing: border-box;
          width: 4.5rem;
          height: 4.5rem;
          background: #ffffff;
          border: 2px solid #e7e9eb;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Text Container */
        .text-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 0.5rem;
          align-self: stretch;
        }

        /* Card Title */
        .card-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          align-self: stretch;
        }

        /* Card Description */
        .card-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #414e5b;
          margin: 0;
          align-self: stretch;
        }

        /* Card Divider */
        .card-divider {
          width: 0;
          align-self: stretch;
          border: 1.5px dashed #b6babf;
          flex-shrink: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .insight-section {
            padding: 4rem 2.5rem;
          }

          .main-title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.125rem;
          }

          .content-container {
            flex-direction: column;
            gap: 2rem;
          }

          .card-divider {
            width: 100%;
            height: 0;
            align-self: stretch;
          }

          .card-container {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .insight-section {
            padding: 3rem 1.25rem;
            gap: 2.5rem;
          }

          .header-container {
            gap: 0.5rem;
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
            font-size: 1rem;
          }

          .icon-container {
            width: 4rem;
            height: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundationFirstInsight;
