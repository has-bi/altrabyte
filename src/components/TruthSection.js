"use client";
import React from "react";

const truthItems = [
  'Your "database" is actually Excel files shared via email',
  'Your "automation" is someone doing copy-paste',
  "Monthly reports take weeks and require an army of admins",
  "You want AI insights but can't automate basic processes",
  "You keep hiring more people to fix what automation should handle",
];

const truthLayout = [
  {
    offset: -36,
    rotation: -1.6,
    z: 5,
    circleScale: 1.04,
    shadowStrength: 0.24,
    marginTop: "18px",
    marginBottom: "12px",
    gradient: ["hsl(257 100% 96%)", "hsl(254 100% 99%)"],
  },
  {
    offset: 28,
    rotation: 1.3,
    z: 4,
    circleScale: 0.97,
    shadowStrength: 0.2,
    marginTop: "0px",
    marginBottom: "2px",
    gradient: ["hsl(249 100% 95%)", "hsl(255 88% 98%)"],
  },
  {
    offset: -15,
    rotation: -1.1,
    z: 6,
    circleScale: 1.02,
    shadowStrength: 0.28,
    marginTop: "0px",
    marginBottom: "4px",
    gradient: ["hsl(263 95% 94%)", "hsl(268 100% 98%)"],
  },
  {
    offset: 15,
    rotation: 1.5,
    z: 3,
    circleScale: 0.95,
    shadowStrength: 0.18,
    marginTop: "4px",
    marginBottom: "8px",
    gradient: ["hsl(248 92% 95%)", "hsl(255 100% 99%)"],
  },
  {
    offset: -17,
    rotation: -1.8,
    z: 7,
    circleScale: 1.05,
    shadowStrength: 0.3,
    marginTop: "3px",
    marginBottom: "4px",
    gradient: ["hsl(260 100% 94%)", "hsl(266 100% 98%)"],
  },
];

const TruthSection = () => {
  return (
    <section className="truth-section bg-white">
      <div className="truth-container">
        <div className="truth-grid">
          <div className="truth-left">
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-500 tracking-tight">
              Does This Sound Familiar?
            </h2>

            <div className="truth-stack mt-8 sm:mt-6">
              {truthItems.map((item, index) => {
                const preset =
                  truthLayout[index] || truthLayout[truthLayout.length - 1];

                return (
                  <div
                    key={item}
                    className="truth-item"
                    style={{
                      "--item-offset": `${preset.offset}px`,
                      "--item-rotation": `${preset.rotation}deg`,
                      "--item-z": preset.z,
                      "--circle-scale": preset.circleScale,
                      "--shadow-strength": preset.shadowStrength,
                      "--item-margin-top": preset.marginTop,
                      "--item-margin-bottom": preset.marginBottom,
                      "--bubble-bg": preset.gradient[0],
                      "--bubble-bg-alt": preset.gradient[1],
                    }}
                  >
                    <span className="truth-badge">{index + 1}</span>
                    <p className="truth-copy">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="truth-right">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-neutral-500">
                Here's the truth:
              </h3>
              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                In 10 years across retail, banking, e-commerce, and energy,
                we've seen the same delusion everywhere. Companies wanting
                machine learning when they can't even manage monthly reporting.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-neutral-500">
                The real cost?
              </h3>
              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                Endless hiring to patch problems that technology should solve.
                Your team drowning in manual work instead of driving growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .truth-section {
          --truth-max-rotation: 2deg;
          --truth-max-offset: 40px;
          --truth-circle-scale-min: 0.95;
          --truth-circle-scale-max: 1.05;
          --truth-transition: 420ms cubic-bezier(0.25, 0.8, 0.3, 1);
          background-color: #ffffff;
        }

        .truth-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 32px 1.5rem 56px;
        }

        @media (min-width: 640px) {
          .truth-container {
            padding-top: 40px;
            padding-bottom: 72px;
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .truth-container {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }

        .truth-grid {
          display: grid;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .truth-grid {
            grid-template-columns: 56% 44%;
            gap: 3.5rem;
          }
        }

        .truth-left {
          display: flex;
          flex-direction: column;
        }

        .truth-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
          padding-left: 2.5rem;
        }

        @media (min-width: 1024px) {
          .truth-right {
            min-height: 100%;
            padding-left: 2.5rem;
            border-left: 1px solid rgba(99, 102, 241, 0.12);
          }
        }

        .truth-stack {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .truth-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          width: min(100%, 640px);
          padding: 1rem 1.75rem;
          border-radius: 9999px;
          margin-top: var(--item-margin-top, 0.75rem);
          margin-bottom: var(--item-margin-bottom, 0);
          background: linear-gradient(
            135deg,
            var(--bubble-bg),
            var(--bubble-bg-alt)
          );
          border: 1px solid rgba(124, 58, 237, 0.16);
          transform: translateX(var(--item-offset, 0))
            rotate(var(--item-rotation, 0));
          z-index: var(--item-z, 1);
          box-shadow: 0 30px 45px
              rgba(15, 23, 42, calc(var(--shadow-strength, 0.2) * 0.45)),
            0 18px 28px
              rgba(99, 102, 241, calc(var(--shadow-strength, 0.2) * 0.35)),
            0 6px 12px
              rgba(99, 102, 241, calc(var(--shadow-strength, 0.2) * 0.4)),
            inset 0 1px 0 rgba(255, 255, 255, 0.65);
          transition: transform var(--truth-transition),
            box-shadow var(--truth-transition), z-index 180ms ease;
        }

        .truth-item::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0)
          );
          pointer-events: none;
        }

        .truth-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 1rem;
          color: #fff;
          background: linear-gradient(145deg, #7c3aed, #8b5cf6);
          box-shadow: 0 8px 18px rgba(124, 58, 237, 0.35),
            0 2px 4px rgba(67, 56, 202, 0.25);
          transform: scale(var(--circle-scale, 1));
          transition: transform var(--truth-transition);
        }

        .truth-copy {
          flex: 1;
          font-size: 1rem;
          line-height: 1.55;
          color: #4338ca;
          font-weight: 500;
        }

        .truth-item:hover {
          transform: translateX(0) rotate(0deg) scale(1.02);
          z-index: calc(var(--item-z, 1) + 10);
          box-shadow: 0 36px 55px rgba(79, 70, 229, 0.28),
            0 18px 32px rgba(59, 130, 246, 0.22),
            0 10px 20px rgba(15, 23, 42, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
        }

        .truth-item:hover .truth-badge {
          transform: scale(calc(var(--circle-scale, 1) + 0.06));
        }

        .truth-item:nth-child(even) .truth-copy {
          color: #312e81;
        }

        .truth-item:nth-child(odd) .truth-copy {
          color: #3730a3;
        }

        @media (max-width: 1024px) {
          .truth-item {
            transform: translateX(calc(var(--item-offset, 0) * 0.6))
              rotate(calc(var(--item-rotation, 0) * 0.7));
          }
        }

        @media (max-width: 768px) {
          .truth-item {
            width: 100%;
            transform: translateX(calc(var(--item-offset, 0) * 0.4))
              rotate(calc(var(--item-rotation, 0) * 0.4));
          }
        }

        @media (max-width: 640px) {
          .truth-item {
            margin-left: 0;
            margin-right: 0;
            transform: translateX(calc(var(--item-offset, 0) * 0.2))
              rotate(calc(var(--item-rotation, 0) * 0.25));
          }
        }

        @media (max-width: 480px) {
          .truth-item {
            transform: translateX(0) rotate(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TruthSection;
