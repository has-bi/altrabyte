"use client";
import { useState, useEffect, useRef } from "react";

const preparationItems = [
  {
    id: 1,
    title: "Current Data Sources",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.6667 5.33325H9.33333C6.388 5.33325 4 7.72125 4 10.6666V10.6666C4 13.6119 6.388 15.9999 9.33333 15.9999H22.6667C25.612 15.9999 28 13.6119 28 10.6666V10.6666C28 7.72125 25.612 5.33325 22.6667 5.33325Z"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6667 10.6667H22.6667"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.6667 16H9.33333C6.388 16 4 18.388 4 21.3333V21.3333C4 24.2787 6.388 26.6667 9.33333 26.6667H22.6667C25.612 26.6667 28 24.2787 28 21.3333V21.3333C28 18.388 25.612 16 22.6667 16Z"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.38046 10.6195C9.4065 10.6456 9.4065 10.6878 9.38046 10.7138C9.35443 10.7398 9.31222 10.7398 9.28618 10.7138C9.26015 10.6878 9.26015 10.6456 9.28618 10.6195C9.31222 10.5935 9.35443 10.5935 9.38046 10.6195"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6667 21.3334H22.6667"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.38046 21.2863C9.4065 21.3123 9.4065 21.3545 9.38046 21.3806C9.35443 21.4066 9.31222 21.4066 9.28618 21.3806C9.26015 21.3545 9.26015 21.3123 9.28618 21.2863C9.31222 21.2602 9.35443 21.2602 9.38046 21.2863"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    details: [
      "Where you store business information (yes, including Excel files)",
      "How you currently generate reports",
      "What systems you use daily vs. what you bought but don't use",
    ],
  },
  {
    id: 2,
    title: "Current Processes",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.33333 13L6.66667 15.6667L4 13"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.6666 4C26.508 4 28 5.492 28 7.33333C28 9.17467 26.508 10.6667 24.6666 10.6667C22.8253 10.6667 21.3333 9.17467 21.3333 7.33333C21.3333 5.492 22.8253 4 24.6666 4Z"
          stroke="#7863FC"
          strokeWidth="2"
        />
        <path
          d="M21.3334 7.33325H9.33335C7.86002 7.33325 6.66669 8.52659 6.66669 9.99992V15.6666"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.6667 18.9999L25.3334 16.3333L28 18.9999"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.33333 27.9999C5.492 27.9999 4 26.5079 4 24.6666C4 22.8253 5.492 21.3333 7.33333 21.3333C9.17467 21.3333 10.6667 22.8253 10.6667 24.6666C10.6667 26.5079 9.17467 27.9999 7.33333 27.9999Z"
          stroke="#7863FC"
          strokeWidth="2"
        />
        <path
          d="M10.6667 24.6666H22.6667C24.14 24.6666 25.3334 23.4733 25.3334 21.9999V16.3333"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    details: [
      "Your biggest manual bottlenecks",
      "Processes that take too long or require too many people",
      "Areas where you hire people to do what automation could handle",
    ],
  },
  {
    id: 3,
    title: "Current Thinking",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0026 8.59412C14.5378 8.59412 13.1059 9.02855 11.888 9.84249C10.6701 10.6564 9.72085 11.8133 9.1603 13.1668C8.59976 14.5204 8.4531 16.0097 8.73886 17.4466C9.02462 18.8835 9.72997 20.2034 10.7657 21.2393C11.8015 22.2753 13.1211 22.9808 14.5577 23.2666C15.9943 23.5524 17.4834 23.4057 18.8367 22.8451C20.19 22.2844 21.3466 21.335 22.1604 20.1168C22.9742 18.8987 23.4086 17.4666 23.4086 16.0015M17.4837 2.74988C14.7377 2.44175 11.9638 2.99474 9.54568 4.33236C7.1276 5.66998 5.18486 7.72611 3.98621 10.2163C2.78755 12.7066 2.39222 15.5078 2.8549 18.2326C3.31757 20.9574 4.61539 23.471 6.56883 25.4258C8.52226 27.3806 11.0348 28.6799 13.7588 29.144C16.4828 29.6082 19.2837 29.2142 21.7741 28.0166C24.2645 26.8189 26.3212 24.8769 27.6598 22.459C28.9984 20.0411 29.5526 17.267 29.2459 14.5202M20.4462 11.5571V7.11264L24.8898 2.66819V7.11264H29.3334L24.8898 11.5571H20.4462ZM20.4462 11.5571L16.0026 16.0015M14.5214 16.0015C14.5214 16.3944 14.6774 16.7712 14.9552 17.0491C15.233 17.3269 15.6097 17.483 16.0026 17.483C16.3954 17.483 16.7721 17.3269 17.0499 17.0491C17.3277 16.7712 17.4838 16.3944 17.4838 16.0015C17.4838 15.6086 17.3277 15.2318 17.0499 14.954C16.7721 14.6761 16.3954 14.52 16.0026 14.52C15.6097 14.52 15.233 14.6761 14.9552 14.954C14.6774 15.2318 14.5214 15.6086 14.5214 16.0015Z"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    details: [
      "What 'advanced analytics' you think you need",
      "Previous data projects and why they succeeded or failed",
      "Your timeline expectations and budget considerations",
    ],
  },
  {
    id: 4,
    title: "Business Goals",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.6667 5.33325H9.33333C6.388 5.33325 4 7.72125 4 10.6666V10.6666C4 13.6119 6.388 15.9999 9.33333 15.9999H22.6667C25.612 15.9999 28 13.6119 28 10.6666V10.6666C28 7.72125 25.612 5.33325 22.6667 5.33325Z"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6667 10.6667H22.6667"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.6667 16H9.33333C6.388 16 4 18.388 4 21.3333V21.3333C4 24.2787 6.388 26.6667 9.33333 26.6667H22.6667C25.612 26.6667 28 24.2787 28 21.3333V21.3333C28 18.388 25.612 16 22.6667 16Z"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.38046 10.6195C9.4065 10.6456 9.4065 10.6878 9.38046 10.7138C9.35443 10.7398 9.31222 10.7398 9.28618 10.7138C9.26015 10.6878 9.26015 10.6456 9.28618 10.6195C9.31222 10.5935 9.35443 10.5935 9.38046 10.6195"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6667 21.3334H22.6667"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.38046 21.2863C9.4065 21.3123 9.4065 21.3545 9.38046 21.3806C9.35443 21.4066 9.31222 21.4066 9.28618 21.3806C9.26015 21.3545 9.26015 21.3123 9.28618 21.2863C9.31222 21.2602 9.35443 21.2602 9.38046 21.2863"
          stroke="#7863FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    details: [
      "What decisions you struggle to make quickly",
      "Where lack of data slows down business growth",
      "Your biggest operational frustrations",
    ],
  },
];

const StartYourAuditPrepare = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-card-index"));
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section ref={sectionRef} className="prepare-section">
      <div className="prepare-container">
        {/* Header Container */}
        <div className="header-container">
          <h2 className="title">Prepare for Your Foundation Audit</h2>
          <p className="subtitle">
            To maximize your 90 minutes, have these ready.
          </p>
        </div>

        {/* Content Container - Grid Layout */}
        <div className="content-container">
          {preparationItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-card-index={index}
              className={`card-container ${
                visibleCards.includes(index) ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="icon-container">{item.icon}</div>
              <div className="text-container">
                <h3 className="card-title">{item.title}</h3>
                <div className="service-details-container">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="service-detail-container">
                      <div className="path-indicator">
                        <div className="service-detail-indicator" />
                      </div>
                      <p className="service-detail">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-decoration" />
            </div>
          ))}
        </div>
      </div>

      {/* Top Layer Decoration */}
      <div className="top-decoration">
        <img
          src="/images/Logogram - White.png"
          alt=""
          className="logogram-image"
        />
      </div>

      <style jsx>{`
        .prepare-section {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 5rem 7.5rem;
          gap: 4rem;
          isolation: isolate;
          background: #f2efff;
          position: relative;
          overflow: hidden;
        }

        .top-decoration {
          position: absolute;
          bottom: 5rem;
          left: -10.75rem;
          z-index: 10;
          pointer-events: none;
          opacity: 1;
          transition: opacity 800ms ease;
        }

        .logogram-image {
          width: auto;
          height: 25rem;
          display: block;
          filter: none;
          mix-blend-mode: normal;
        }

        .prepare-container {
          max-width: 90rem;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 4rem;
          margin: 0 auto;
        }

        .header-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          width: 20.1875rem;
          flex-shrink: 0;
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

        .content-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          flex: 1;
          width: 100%;
          align-items: start;
        }

        .card-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 1.75rem;
          gap: 1.25rem;
          background: #d5cffe;
          border-radius: 0.75rem;
          position: relative;
          isolation: isolate;
          opacity: 0;
          transform: translateY(20px);
          transition: all 600ms cubic-bezier(0.16, 1, 0.3, 1);
          min-height: 20.5rem;
          height: 20.5rem;
        }

        .card-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card-container:hover {
          transform: translateY(-4px);
          box-shadow: 0px 8px 24px rgba(120, 99, 252, 0.16);
        }

        .icon-container {
          width: 3.5rem;
          height: 3.5rem;
          background: #ffffff;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 500ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-container:hover .icon-container {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0px 4px 12px rgba(120, 99, 252, 0.2);
        }

        .text-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          width: 100%;
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
          transition: color 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-container:hover .card-title {
          color: #7863fc;
        }

        .service-details-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          width: 100%;
        }

        .service-detail-container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0.75rem;
          width: 100%;
          transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-detail-container:hover {
          transform: translateX(4px);
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
        }

        .service-detail-container:hover .service-detail-indicator {
          transform: scale(1.5);
          box-shadow: 0 0 0 4px rgba(120, 99, 252, 0.15);
        }

        .service-detail {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #122232;
          flex: 1;
          margin: 0;
          transition: color 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-detail-container:hover .service-detail {
          color: #7863fc;
        }

        .card-decoration {
          position: absolute;
          width: 0.75rem;
          height: 0.75rem;
          right: 0.75rem;
          top: 0.75rem;
          background: #f2efff;
          box-shadow: inset -2px 2px 2px rgba(0, 0, 0, 0.28);
          border-radius: 50%;
          z-index: 2;
        }

        @media (max-width: 1024px) {
          .prepare-section {
            padding: 4rem 2rem;
          }

          .prepare-container {
            flex-direction: column;
            gap: 3rem;
          }

          .header-container {
            width: 100%;
          }

          .content-container {
            grid-template-columns: 1fr;
          }

          .top-decoration {
            bottom: 2rem;
            left: -8rem;
            opacity: 0.12;
          }

          .logogram-image {
            height: 18rem;
          }
        }

        @media (max-width: 768px) {
          .prepare-section {
            padding: 3rem 1.5rem;
            gap: 3rem;
          }

          .title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.125rem;
          }

          .card-title {
            font-size: 1.25rem;
          }

          .service-detail {
            font-size: 1rem;
          }

          .card-container {
            padding: 1.5rem;
          }

          .top-decoration {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default StartYourAuditPrepare;
