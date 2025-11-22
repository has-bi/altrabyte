"use client";

import { Check, X } from "lucide-react";
import { useState } from "react";

const PROBLEMS = [
  {
    text: "Hiring more people to do what automation should handle",
    layout: { offset: -32, rotation: -1.8, z: 5, shadow: 0.35 },
  },
  {
    text: "Manual work that scales horribly while competitors move faster",
    layout: { offset: 26, rotation: 2.2, z: 4, shadow: 0.3 },
  },
  {
    text: "Delayed decisions based on outdated, manual reports",
    layout: { offset: -18, rotation: -1.5, z: 6, shadow: 0.38 },
  },
];

export default function ProblemSections() {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <section className="problem-section relative isolate overflow-hidden px-4 py-20 sm:px-10 md:px-16 lg:px-[120px]">
      <div className="section-glow section-glow-left" aria-hidden="true" />
      <div className="section-glow section-glow-right" aria-hidden="true" />
      <div className="section-supergraphic" aria-hidden="true" />
      <div className="section-grain" aria-hidden="true" />

      <div className="section-heading relative mx-auto flex w-full max-w-[700px] flex-col items-center gap-4 text-center">
        <h2 className="text-[34px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#122232] sm:text-[40px]">
          The Stakes
        </h2>
        <p className="text-lg leading-[1.6] tracking-[-0.01em] text-[#606B76] sm:text-xl">
          Every month you delay fixing the foundation is another month of
          manual fixes, extra hires, and data you can&apos;t trust.
        </p>
      </div>

      <div className="problem-stack">
        {PROBLEMS.map((problem, index) => (
          <div
            key={problem.text}
            className="problem-chip"
            style={{
              "--chip-offset": `${problem.layout.offset}px`,
              "--chip-rotation": `${problem.layout.rotation}deg`,
              "--chip-shadow": problem.layout.shadow,
              "--chip-index": PROBLEMS.length - index,
              "--chip-delay": `${index * 90}ms`,
            }}
            tabIndex={0}
          >
            <span className="problem-index">{index + 1}</span>
            <p className="problem-text">{problem.text}</p>
          </div>
        ))}
      </div>

      <div className="relative mx-auto mt-14 flex w-full max-w-[640px] justify-center">
        <button
          type="button"
          className="stakes-card focus-visible:outline-none"
          onClick={() => setShowSolution((prev) => !prev)}
          aria-pressed={showSolution}
          data-state={showSolution ? "solution" : "question"}
        >
          <div className="stakes-pane stakes-pane-question">
            <p>
              The question isn&apos;t whether you{" "}
              <span className="font-semibold text-[#E41E57]">
                need better data systems.
              </span>
            </p>
          </div>
          <div className="stakes-divider">
            <span className="stakes-icon stakes-icon-question">
              <X className="h-4 w-4 text-[#E41E57]" strokeWidth={2} />
            </span>
            <span className="stakes-icon stakes-icon-answer">
              <Check className="h-4 w-4 text-[#07A276]" strokeWidth={2} />
            </span>
          </div>
          <div className="stakes-pane stakes-pane-answer">
            <p>
              It&apos;s whether you&apos;ll{" "}
              <span className="font-semibold text-[#07A276]">
                fix them before or after your team burns out from manual work
                that machines should be doing.
              </span>
            </p>
          </div>
          <span className="stakes-hint">
            {showSolution ? "Tap to see the first reality again" : "Tap to reveal the real question"}
          </span>
        </button>
      </div>
      <style jsx>{`
        .problem-section {
          position: relative;
          background: radial-gradient(circle at 15% 20%, rgba(255, 201, 215, 0.28), transparent 45%),
            radial-gradient(circle at 70% 15%, rgba(255, 213, 220, 0.22), transparent 40%),
            radial-gradient(circle at 80% 65%, rgba(244, 216, 203, 0.25), transparent 42%),
            linear-gradient(180deg, #fff7f0 0%, #fef5f3 55%, #fdf3f1 100%);
        }

        .section-glow {
          position: absolute;
          width: min(420px, 45vw);
          height: min(420px, 45vw);
          border-radius: 9999px;
          filter: blur(90px);
          opacity: 0.5;
        }

        .section-glow-left {
          top: 40px;
          left: clamp(-140px, -8vw, -90px);
          background: linear-gradient(130deg, rgba(255, 191, 203, 0.65), rgba(255, 232, 217, 0.38));
        }

        .section-glow-right {
          bottom: -60px;
          right: clamp(-120px, -5vw, -40px);
          background: linear-gradient(130deg, rgba(255, 230, 211, 0.5), rgba(255, 255, 255, 0.3));
        }

        .section-supergraphic {
          position: absolute;
          inset: 0;
          background-image: url("/images/element/Background.svg");
          background-size: cover;
          background-position: center;
          opacity: 0.24;
          pointer-events: none;
        }

        .section-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Crect width='1' height='1' fill='%23eadfd9'/%3E%3C/svg%3E");
          opacity: 0.2;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        .section-heading {
          gap: 1rem;
        }

        .problem-stack {
          position: relative;
          margin: 48px auto 0;
          max-width: 640px;
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 16px 0 32px;
        }

        .problem-stack::before {
          content: "";
          position: absolute;
          inset: 10px 24px;
          border-radius: 32px;
          border: 1px solid rgba(249, 217, 229, 0.7);
          background: rgba(255, 255, 255, 0.55);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 30px 60px rgba(18, 34, 50, 0.08);
          z-index: 0;
        }

        .problem-stack > * {
          position: relative;
          z-index: 1;
        }

        .problem-chip {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 28px;
          border-radius: 9999px;
          margin-top: 18px;
          margin-bottom: 8px;
          background: linear-gradient(120deg, #f39dc2, #f7b9cb);
          border: 1px solid rgba(228, 110, 159, 0.25);
          transform: translateX(var(--chip-offset, 0))
            rotate(var(--chip-rotation, 0));
          z-index: var(--chip-index, 1);
          box-shadow: 0 28px 40px rgba(18, 34, 50, 0.08),
            0 14px 24px rgba(241, 126, 171, calc(var(--chip-shadow, 0.3) * 0.75)),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          transition: transform 380ms cubic-bezier(0.25, 0.8, 0.3, 1),
            box-shadow 380ms ease, z-index 120ms ease;
          animation: chipFloat 5.2s ease-in-out infinite;
          animation-delay: var(--chip-delay, 0ms);
        }

        .problem-chip::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0)
          );
          pointer-events: none;
        }

        .problem-index {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(130deg, #f075a4, #f28bb4);
          box-shadow: 0 10px 18px rgba(240, 117, 164, 0.35);
          transition: transform 380ms cubic-bezier(0.25, 0.8, 0.3, 1);
          transform: scale(calc(0.98 + var(--chip-shadow, 0.25) * 0.2));
        }

        .problem-text {
          flex: 1;
          font-size: 1.125rem;
          line-height: 1.4;
          font-weight: 600;
          color: #122232;
          letter-spacing: -0.01em;
        }

        .problem-chip:hover,
        .problem-chip:focus-visible {
          animation-play-state: paused;
          transform: translateX(0) rotate(0deg) scale(1.02);
          z-index: 20;
          box-shadow: 0 34px 60px rgba(18, 34, 50, 0.12),
            0 20px 32px rgba(240, 117, 164, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.85);
        }

        .problem-chip:hover .problem-index,
        .problem-chip:focus-visible .problem-index {
          transform: scale(1.08);
        }

        @keyframes chipFloat {
          0%,
          100% {
            transform: translateX(var(--chip-offset, 0))
              rotate(var(--chip-rotation, 0));
          }
          50% {
            transform: translateX(calc(var(--chip-offset, 0) * 0.65))
              rotate(calc(var(--chip-rotation, 0) * 0.6));
          }
        }

        @media (max-width: 900px) {
          .problem-chip {
            transform: translateX(calc(var(--chip-offset, 0) * 0.6))
              rotate(calc(var(--chip-rotation, 0) * 0.7));
          }
        }

        @media (max-width: 640px) {
          .problem-chip {
            padding: 16px 20px;
            transform: translateX(calc(var(--chip-offset, 0) * 0.3))
              rotate(calc(var(--chip-rotation, 0) * 0.4));
          }

          .problem-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .problem-chip {
            margin-top: 14px;
            margin-bottom: 6px;
            transform: translateX(0) rotate(0);
          }

          .problem-index {
            width: 40px;
            height: 40px;
          }
        }

        .stakes-card {
          position: relative;
          width: 100%;
          max-width: 600px;
          border-radius: 18px;
          padding: 36px 32px;
          background: rgba(255, 255, 255, 0.92);
          border: 1.5px dashed rgba(172, 163, 160, 0.9);
          box-shadow: 0 30px 60px rgba(18, 34, 50, 0.12);
          display: flex;
          flex-direction: column;
          gap: 28px;
          cursor: pointer;
          transition: transform 360ms ease, box-shadow 360ms ease;
        }

        .stakes-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 36px 70px rgba(18, 34, 50, 0.16);
        }

        .stakes-pane {
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 1.125rem;
          line-height: 1.5;
          letter-spacing: -0.01em;
          color: #122232;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 320ms ease, transform 320ms ease;
        }

        .stakes-divider {
          position: relative;
          height: 1px;
          border-top: 1.5px dashed rgba(200, 188, 182, 0.9);
        }

        .stakes-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          border: 2px solid;
          background: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 260ms ease, transform 260ms ease;
          box-shadow: 0 10px 24px rgba(18, 34, 50, 0.12);
        }

        .stakes-icon-question {
          border-color: #fce9ee;
        }

        .stakes-icon-answer {
          border-color: #e6f6f1;
        }

        .stakes-hint {
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b9b1ae;
          text-align: center;
          margin-top: -8px;
        }

        .stakes-card[data-state="question"] .stakes-pane-question,
        .stakes-card[data-state="question"] .stakes-icon-question {
          opacity: 1;
          transform: translate(-50%, -50%);
        }

        .stakes-card[data-state="question"] .stakes-pane-question {
          transform: translateY(0);
        }

        .stakes-card[data-state="solution"] .stakes-pane-answer,
        .stakes-card[data-state="solution"] .stakes-icon-answer {
          opacity: 1;
        }

        .stakes-card[data-state="solution"] .stakes-pane-answer {
          transform: translateY(0);
        }

        .stakes-card[data-state="solution"] .stakes-icon-answer {
          transform: translate(-50%, -50%);
        }
      `}</style>
    </section>
  );
}
