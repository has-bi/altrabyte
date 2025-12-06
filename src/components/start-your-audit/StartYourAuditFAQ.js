"use client";

import { useState, useRef, useEffect } from "react";

export default function StartYourAuditFAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default
  const [heights, setHeights] = useState({});
  const contentRefs = useRef({});

  const faqs = [
    {
      question: "Is the Foundation Audit really free?",
      answer:
        "Yes, completely free. We believe in proving value before asking for investment. The audit provides actionable insights regardless of your next steps.",
    },
    {
      question: "Will you try to sell me during the audit?",
      answer:
        "No. The 90 minutes is pure assessment and roadmap development. We'll answer questions about working together, but no sales pressure.",
    },
    {
      question: "What if my data situation is really messy?",
      answer:
        "Perfect. That's exactly what we specialize in. The messier your current state, the more value we can provide in the audit.",
    },
    {
      question: "Do I need to prepare anything technical?",
      answer:
        "No technical preparation needed. Just bring your current reality - Excel files, manual processes, business frustrations. We'll handle the technical assessment.",
    },
    {
      question: "What if I decide not to work with you after the audit?",
      answer:
        "No problem at all. You'll have a valuable roadmap and clear understanding of what needs to be done. Many companies use our audit to better evaluate other options.",
    },
  ];

  useEffect(() => {
    // Calculate heights for all answer containers
    const newHeights = {};
    Object.keys(contentRefs.current).forEach((key) => {
      if (contentRefs.current[key]) {
        newHeights[key] = contentRefs.current[key].scrollHeight;
      }
    });
    setHeights(newHeights);
  }, []);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="questions-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`question-container ${
                openIndex === index ? "is-open" : ""
              }`}
            >
              <div className="question-number">
                <span>{index + 1}</span>
              </div>

              <div className="question-content">
                <div
                  className="question-header"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="question-text">{faq.question}</h3>
                  <button
                    className={`toggle-button ${
                      openIndex === index ? "is-open" : ""
                    }`}
                    aria-label="Toggle answer"
                    aria-expanded={openIndex === index}
                  >
                    <svg
                      className="icon-minus"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 14H21"
                        stroke="#122232"
                        strokeWidth="2.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      className="icon-plus"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 7V21M7 14H21"
                        stroke="#122232"
                        strokeWidth="2.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className="answer-wrapper"
                  style={{
                    maxHeight: openIndex === index ? heights[index] || 200 : 0,
                  }}
                >
                  <div
                    className="answer-container"
                    ref={(el) => (contentRefs.current[index] = el)}
                  >
                    <p className="answer-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5rem 7.5rem;
          background: #ffffff;
        }

        .faq-container {
          max-width: 75rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .faq-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 2.5rem;
          line-height: 128%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .questions-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        .question-container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 2.5rem;
          width: 100%;
          border-bottom: 1px dashed #122232;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .question-container:first-child {
          padding: 0 1.75rem;
        }

        .question-container:not(:first-child) {
          padding: 1.75rem 1.75rem 0;
        }

        .question-container.is-open {
          background: linear-gradient(
            135deg,
            rgba(120, 99, 252, 0.02) 0%,
            rgba(120, 99, 252, 0.01) 100%
          );
        }

        .question-number {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 38px;
          height: 38px;
          min-width: 38px;
          background: #e7e9eb;
          border-radius: 50%;
          flex-shrink: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .question-container.is-open .question-number {
          background: linear-gradient(135deg, #7863fc 0%, #6b54e8 100%);
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(120, 99, 252, 0.3);
        }

        .question-number span {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 150%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #122232;
          transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .question-container.is-open .question-number span {
          color: #ffffff;
        }

        .question-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
          width: 100%;
          overflow: hidden;
        }

        .question-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 0 1.5rem;
          gap: 0.625rem;
          width: 100%;
          cursor: pointer;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .question-header:hover .question-text {
          color: #7863fc;
        }

        .question-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          flex: 1;
          transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .toggle-button {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .toggle-button:hover {
          transform: scale(1.15) rotate(90deg);
        }

        .toggle-button.is-open:hover {
          transform: scale(1.15) rotate(-90deg);
        }

        .toggle-button svg {
          position: absolute;
          top: 0;
          left: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .toggle-button .icon-minus {
          opacity: 0;
          transform: rotate(-90deg) scale(0.8);
        }

        .toggle-button.is-open .icon-minus {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }

        .toggle-button .icon-plus {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }

        .toggle-button.is-open .icon-plus {
          opacity: 0;
          transform: rotate(90deg) scale(0.8);
        }

        .toggle-button:hover svg path {
          stroke: #7863fc;
        }

        .answer-wrapper {
          width: 100%;
          overflow: hidden;
          transition: max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: max-height;
        }

        .answer-container {
          padding: 0 6.25rem 1.75rem 0;
          width: 100%;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .question-container.is-open .answer-container {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        .answer-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #414e5b;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .faq-section {
            padding: 4rem 3rem;
          }

          .faq-container {
            gap: 3rem;
          }

          .faq-title {
            font-size: 2rem;
          }

          .question-text {
            font-size: 1.25rem;
          }

          .answer-text {
            font-size: 1.125rem;
          }

          .answer-container {
            padding: 0 2rem 1.5rem 0;
          }
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 3rem 1.5rem;
          }

          .faq-container {
            gap: 2.5rem;
          }

          .faq-title {
            font-size: 1.75rem;
          }

          .question-container {
            gap: 1.5rem;
            padding: 1.5rem 1rem 0;
          }

          .question-container:first-child {
            padding: 0 1rem;
          }

          .question-number {
            width: 32px;
            height: 32px;
            min-width: 32px;
          }

          .question-number span {
            font-size: 1rem;
          }

          .question-text {
            font-size: 1.125rem;
          }

          .answer-text {
            font-size: 1rem;
          }

          .answer-container {
            padding: 0 1rem 1.25rem 0;
          }

          .toggle-button {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </section>
  );
}
