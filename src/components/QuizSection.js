"use client";
import React, { useState, useRef } from "react";

const quizQuestions = [
  {
    id: 1,
    question: 'When someone asks "show me your database," do you...',
    options: [
      { text: "Point to Excel files", path: 1 },
      { text: "Have data but struggle to get insights", path: 2 },
      { text: "Have systems but everything's manual", path: 3 },
    ],
  },
  {
    id: 2,
    question: "Your monthly reporting process takes...",
    options: [
      { text: "Weeks of copying and pasting", path: 1 },
      { text: "Days but insights are unclear", path: 2 },
      { text: "Too long because nothing's automated", path: 3 },
    ],
  },
  {
    id: 3,
    question: "Your biggest data frustration is...",
    options: [
      { text: '"Everything\'s in different Excel files"', path: 1 },
      { text: '"We have data but can\'t make decisions"', path: 2 },
      { text: '"We need automation but don\'t know where to start"', path: 3 },
    ],
  },
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [finalPath, setFinalPath] = useState(null);
  const sectionRef = useRef(null);

  const handleAnswerSelect = (answerIndex, path) => {
    setSelectedAnswer(answerIndex);

    // Wait a bit to show the selection, then move to next question
    setTimeout(() => {
      const newAnswers = [...answers, path];
      setAnswers(newAnswers);

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Calculate final path (most common answer)
        const pathCounts = newAnswers.reduce((acc, path) => {
          acc[path] = (acc[path] || 0) + 1;
          return acc;
        }, {});
        const mostCommonPath = Object.keys(pathCounts).reduce((a, b) =>
          pathCounts[a] > pathCounts[b] ? a : b
        );
        setFinalPath(parseInt(mostCommonPath));
        setIsCompleted(true);
      }
    }, 700);
  };

  const currentQ = quizQuestions[currentQuestion];

  return (
    <section
      ref={sectionRef}
      className="quiz-section"
      aria-labelledby="quiz-heading"
    >
      <div className="quiz-container">
        {!isCompleted ? (
          <>
            <header className="quiz-header">
              <h2 id="quiz-heading">Which Journey Are You?</h2>
              <p>Take Our 60-Second Data Reality Check</p>
            </header>

            <div className="quiz-question-card">
              <span className="question-label">Question {currentQuestion + 1}</span>
              <h3 className="question-text">{currentQ.question}</h3>

              <div className="options-list">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-button ${
                      selectedAnswer === index ? "selected" : ""
                    }`}
                    onClick={() => handleAnswerSelect(index, option.path)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="radio-icon">
                      {selectedAnswer === index && (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.3332 4L5.99984 11.3333L2.6665 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="option-text">{option.text}</span>
                    {selectedAnswer === index && (
                      <span className="path-badge">
                        You're Path {option.path}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6 12L10 8L6 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="quiz-result">
            <div className="result-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="#7863FC" opacity="0.1" />
                <path
                  d="M26 32L30 36L38 28"
                  stroke="#7863FC"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>You're on Path {finalPath}!</h3>
            <p>Check out your journey below to see how we can help you transform your data reality.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .quiz-section {
          position: relative;
          padding: 4rem 1.5rem;
          background: #ffffff;
          overflow: hidden;
        }

        .quiz-container {
          max-width: 56rem;
          margin: 0 auto;
        }

        .quiz-header {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeInUp 600ms ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .quiz-header h2 {
          font-size: 2rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }

        .quiz-header p {
          font-size: 1.0625rem;
          color: #64748b;
        }

        .quiz-question-card {
          background: #faf9f7;
          border-radius: 1.5rem;
          padding: 2.5rem;
          border: 1px solid #e8e7f0;
          animation: questionSlide 500ms ease-out;
        }

        @keyframes questionSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .question-label {
          display: inline-block;
          font-size: 0.8125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #7863FC;
          margin-bottom: 1rem;
        }

        .question-text {
          font-size: 1.5rem;
          font-weight: 600;
          color: #0f172a;
          line-height: 1.4;
          margin-bottom: 2rem;
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .option-button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          padding: 1.25rem 1.5rem;
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 1rem;
          font-size: 1rem;
          color: #1e293b;
          text-align: left;
          cursor: pointer;
          transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .option-button:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .option-button:not(:disabled):hover {
          border-color: #7863FC;
          background: #faf9ff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -6px rgba(120, 99, 252, 0.2);
        }

        .option-button.selected {
          border-color: #7863FC;
          background: #f5f3ff;
          box-shadow: 0 0 0 3px rgba(120, 99, 252, 0.1);
        }

        .radio-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border: 2px solid #cbd5e1;
          border-radius: 50%;
          transition: all 250ms ease;
          color: #ffffff;
        }

        .option-button:hover .radio-icon {
          border-color: #7863FC;
        }

        .option-button.selected .radio-icon {
          background: #7863FC;
          border-color: #7863FC;
        }

        .option-text {
          flex: 1;
          font-weight: 500;
        }

        .path-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #7863FC;
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 999px;
          animation: badgeSlide 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes badgeSlide {
          from {
            opacity: 0;
            transform: translateX(-20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .path-badge svg {
          width: 14px;
          height: 14px;
        }

        .quiz-result {
          text-align: center;
          padding: 4rem 2rem;
          animation: resultFade 600ms ease-out;
        }

        @keyframes resultFade {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .result-icon {
          margin-bottom: 2rem;
          display: inline-block;
          animation: iconPop 700ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes iconPop {
          from {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        .quiz-result h3 {
          font-size: 2.25rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .quiz-result p {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 36rem;
          margin: 0 auto;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .quiz-section {
            padding: 5rem 2rem;
          }

          .quiz-header h2 {
            font-size: 2.5rem;
          }

          .quiz-header p {
            font-size: 1.125rem;
          }

          .quiz-question-card {
            padding: 3.5rem;
          }

          .question-text {
            font-size: 1.875rem;
          }

          .option-button {
            padding: 1.5rem 2rem;
            font-size: 1.0625rem;
          }
        }

        @media (min-width: 1024px) {
          .quiz-section {
            padding: 6rem 2rem;
          }
        }

        @media (max-width: 640px) {
          .quiz-section {
            padding: 3rem 1rem;
          }

          .quiz-header h2 {
            font-size: 1.75rem;
          }

          .quiz-question-card {
            padding: 2rem 1.5rem;
          }

          .question-text {
            font-size: 1.25rem;
          }

          .option-button {
            padding: 1rem 1.25rem;
            font-size: 0.9375rem;
          }

          .path-badge {
            padding: 0.4rem 0.875rem;
            font-size: 0.8125rem;
          }

          .quiz-result h3 {
            font-size: 1.75rem;
          }

          .quiz-result p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default QuizSection;
