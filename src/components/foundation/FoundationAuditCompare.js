// src/components/foundation/FoundationAuditCompare.js
"use client";
import { useEffect, useRef, useState } from "react";

const comparisonPairs = [
  {
    title: "Build on truth, not theater",
    risk: "Building analytics on broken foundations",
    fix: "We rebuild the spine first — mapping sources, contracts, lineage, and controls before any dashboard ships.",
    proof: "First 10 days: reconciled source of truth, risk register, and a stop-reporting list that saves hours weekly.",
  },
  {
    title: "Infrastructure over assumptions",
    risk: "Assuming infrastructure exists when it doesn't",
    fix: "We inventory every system, design the missing backbone, and deliver the first governed ingestion with clear ownership.",
    proof: "No ghost pipelines — you see a working path from source to warehouse with alerts when it drifts.",
  },
  {
    title: "Decisions over dashboards",
    risk: "Prioritizing dashboards over useful insights",
    fix: "We tie every metric to a decision, prune vanity reporting, and add triggers that tell operators what to do next.",
    proof: "Dashboards become decision surfaces, not slideware; teams act on signals instead of watching charts refresh.",
  },
  {
    title: "Understand before automating",
    risk: "Implementing solutions before understanding",
    fix: "We co-design the process with the people doing the work, then automate with runbooks, controls, and a handover plan.",
    proof: "Automation sticks because owners can run and adapt it without calling us back in.",
  },
];

const highlightGoals = [
  {
    label: "Section goal",
    text: "Show the gap between wishful dashboards/AI and what survives contact with reality.",
  },
  {
    label: "Audit objective",
    text: "Pressure-test data, workflows, and governance before you invest another dollar in automation or AI.",
  },
  {
    label: "What you leave with",
    text: "A prioritized foundation map, first ingestion shipped, and a decision-ready brief your execs can approve.",
  },
];

const FoundationAuditCompare = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const node = sectionRef.current;
    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const progressWidth = ((activeIndex + 1) / comparisonPairs.length) * 100;

  return (
    <section ref={sectionRef} className={`audit-compare ${isVisible ? "is-visible" : ""}`}>
      <div className="halo halo-primary" aria-hidden />
      <div className="halo halo-secondary" aria-hidden />

      <div className="compare-shell">
        <div className="intro-card">
          <p className="eyebrow">The truth about failed data projects</p>
          <h2 className="intro-title">Foundation-first beats dashboard theater</h2>
          <p className="intro-lede">
            This section exists to make the decision obvious: if you skip the foundation, you ship risks; if you let us audit first, you ship certainty.
          </p>

          <div className="chip-grid">
            {highlightGoals.map((item) => (
              <div key={item.label} className="chip">
                <span className="chip-label">{item.label}</span>
                <p className="chip-text">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="legend">
            <div className="legend-item">
              <span className="legend-dot legend-risk" />
              <div>
                <p className="legend-label">If you skip foundations</p>
                <p className="legend-text">Everything below is what silently fails when you build on assumptions.</p>
              </div>
            </div>
            <div className="legend-item">
              <span className="legend-dot legend-fix" />
              <div>
                <p className="legend-label">Our counter-move</p>
                <p className="legend-text">The audit produces the scaffolding, controls, and proof you need to move forward.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="board">
          <div className="board-top">
            <div>
              <p className="board-kicker">Risk contrast, decision clarity</p>
              <h3 className="board-title">What goes wrong vs. what we deliver instead</h3>
              <p className="board-subtitle">
                Each line is a before/after move. Hover or tap to feel the handoff from chaos to controlled execution.
              </p>
            </div>
            <div className="progress">
              <div className="progress-rail">
                <span className="progress-fill" style={{ width: `${progressWidth}%` }} />
              </div>
              <div className="progress-dots">
                {comparisonPairs.map((pair, idx) => (
                  <button
                    key={pair.title}
                    type="button"
                    className={`progress-dot ${activeIndex === idx ? "is-active" : ""}`}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onFocus={() => setActiveIndex(idx)}
                    aria-label={`Focus comparison ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pair-list">
            {comparisonPairs.map((pair, idx) => (
              <button
                key={pair.title}
                type="button"
                className={`pair ${activeIndex === idx ? "is-active" : ""} ${isVisible ? "is-ready" : ""}`}
                onMouseEnter={() => setActiveIndex(idx)}
                onFocus={() => setActiveIndex(idx)}
                style={{ transitionDelay: isVisible ? `${idx * 90}ms` : "0ms" }}
              >
                <div className="pair-header">
                  <span className="pair-index">0{idx + 1}</span>
                  <span className="pair-name">{pair.title}</span>
                  <span className="pair-tag">Foundation-first track</span>
                </div>

                <div className="pair-body">
                  <div className="pair-side risk">
                    <span className="side-label">Hidden risk</span>
                    <p>{pair.risk}</p>
                  </div>

                  <div className="pair-connector" aria-hidden>
                    <span className="connector-line" />
                    <span className="connector-dot" />
                  </div>

                  <div className="pair-side fix">
                    <span className="side-label">Our counter-move</span>
                    <p>{pair.fix}</p>
                  </div>
                </div>

                <div className="pair-proof">
                  <div className="proof-pill">
                    <span className="pill-dot" />
                    <span>Proof</span>
                  </div>
                  <p>{pair.proof}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .audit-compare {
          position: relative;
          overflow: hidden;
          padding: 6.5rem 1.5rem 7.5rem;
          background: radial-gradient(circle at 18% 20%, rgba(120, 99, 252, 0.06), transparent 34%),
            radial-gradient(circle at 82% 10%, rgba(14, 207, 143, 0.08), transparent 30%),
            linear-gradient(180deg, #f7f7ff 0%, #f4f7fb 100%);
        }

        .compare-shell {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 1024px) {
          .compare-shell {
            grid-template-columns: 1.05fr 1.2fr;
            gap: 2rem;
          }
        }

        .halo {
          position: absolute;
          inset: 0;
          filter: blur(60px);
          opacity: 0.55;
          transform: scale(1.05);
          z-index: 1;
          pointer-events: none;
        }

        .halo-primary {
          background: radial-gradient(55% 55% at 20% 10%, rgba(120, 99, 252, 0.12), transparent 60%);
        }

        .halo-secondary {
          background: radial-gradient(45% 45% at 85% 5%, rgba(14, 207, 143, 0.14), transparent 55%);
        }

        .intro-card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(120, 99, 252, 0.12);
          border-radius: 22px;
          padding: 2.5rem;
          box-shadow: 0 25px 80px rgba(16, 24, 40, 0.12);
          backdrop-filter: blur(10px);
          position: relative;
        }

        .intro-card::after {
          content: "";
          position: absolute;
          inset: 0.6rem;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(120, 99, 252, 0.06), rgba(14, 207, 143, 0.04));
          z-index: -1;
          filter: blur(12px);
          opacity: 0.85;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.75rem;
          color: #6b7280;
          margin-bottom: 0.75rem;
          font-weight: 700;
        }

        .intro-title {
          font-size: 2.5rem;
          line-height: 1.2;
          letter-spacing: -0.03em;
          color: #0f172a;
          margin: 0 0 1rem;
        }

        .intro-lede {
          color: #4b5563;
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 46ch;
          margin-bottom: 1.75rem;
        }

        .chip-grid {
          display: grid;
          gap: 0.85rem;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          margin-bottom: 1.5rem;
        }

        .chip {
          background: linear-gradient(135deg, rgba(120, 99, 252, 0.07), rgba(14, 207, 143, 0.05));
          border: 1px solid rgba(120, 99, 252, 0.15);
          border-radius: 14px;
          padding: 0.9rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .chip-label {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #7863fc;
        }

        .chip-text {
          font-size: 0.96rem;
          color: #0f172a;
          line-height: 1.55;
        }

        .legend {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          margin-top: 0.5rem;
        }

        @media (min-width: 640px) {
          .legend {
            flex-direction: row;
          }
        }

        .legend-item {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.75rem;
          align-items: start;
          padding: 0.95rem 1.1rem;
          border-radius: 12px;
          border: 1px dashed rgba(120, 99, 252, 0.18);
          background: rgba(255, 255, 255, 0.7);
        }

        .legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-top: 0.15rem;
          box-shadow: 0 0 0 8px rgba(120, 99, 252, 0.08);
        }

        .legend-risk {
          background: #ef4444;
        }

        .legend-fix {
          background: #0ecf8f;
        }

        .legend-label {
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 0.3rem;
        }

        .legend-text {
          margin: 0;
          color: #475569;
          line-height: 1.55;
        }

        .board {
          position: relative;
          background: rgba(10, 14, 27, 0.92);
          color: #e2e8f0;
          border-radius: 22px;
          padding: 2.75rem 2.5rem;
          overflow: hidden;
          border: 1px solid rgba(120, 99, 252, 0.22);
          box-shadow: 0 35px 90px rgba(15, 23, 42, 0.28);
        }

        .board::before {
          content: "";
          position: absolute;
          inset: -1px;
          background: radial-gradient(circle at 30% 20%, rgba(120, 99, 252, 0.18), transparent 40%),
            radial-gradient(circle at 80% 10%, rgba(14, 207, 143, 0.18), transparent 35%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01));
          z-index: 0;
          pointer-events: none;
        }

        .board-top {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 800px) {
          .board-top {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .board-kicker {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.78rem;
          color: #a5b4fc;
          margin: 0 0 0.35rem;
          font-weight: 700;
        }

        .board-title {
          margin: 0;
          font-size: 2rem;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: #f8fafc;
        }

        .board-subtitle {
          margin: 0.45rem 0 0;
          color: #cbd5e1;
          line-height: 1.6;
          max-width: 36ch;
        }

        .progress {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 210px;
        }

        .progress-rail {
          position: relative;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          overflow: hidden;
        }

        .progress-fill {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #7863fc 0%, #0ecf8f 100%);
          transition: width 420ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .progress-dots {
          display: flex;
          gap: 0.45rem;
        }

        .progress-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.08);
          cursor: pointer;
          transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
        }

        .progress-dot:hover,
        .progress-dot:focus-visible {
          transform: translateY(-1px) scale(1.05);
          border-color: #ffffff;
        }

        .progress-dot.is-active {
          background: linear-gradient(135deg, #7863fc, #0ecf8f);
          border-color: transparent;
          box-shadow: 0 0 0 6px rgba(120, 99, 252, 0.18);
        }

        .pair-list {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .pair {
          text-align: left;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(14, 21, 38, 0.85);
          border-radius: 18px;
          padding: 1.4rem 1.4rem 1.25rem;
          position: relative;
          overflow: hidden;
          color: #e2e8f0;
          transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1),
            border-color 320ms ease,
            box-shadow 320ms ease,
            background 320ms ease,
            opacity 600ms ease,
            translate 400ms ease;
          opacity: 0;
          transform: translateY(12px);
        }

        .pair::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(120, 99, 252, 0.35), rgba(14, 207, 143, 0.35));
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 350ms ease;
        }

        .pair.is-ready {
          opacity: 1;
          transform: translateY(0);
        }

        .pair.is-active {
          background: rgba(17, 26, 47, 0.92);
          border-color: rgba(120, 99, 252, 0.4);
          box-shadow: 0 15px 40px rgba(14, 207, 143, 0.12), 0 12px 28px rgba(120, 99, 252, 0.2);
          transform: translateY(-2px);
        }

        .pair.is-active::before {
          opacity: 1;
        }

        .pair:focus-visible {
          outline: 2px solid rgba(120, 99, 252, 0.5);
          outline-offset: 3px;
        }

        .pair-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.05rem;
          letter-spacing: -0.01em;
        }

        .pair-index {
          font-size: 0.9rem;
          color: #cbd5e1;
          font-weight: 700;
          opacity: 0.8;
        }

        .pair-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #f8fafc;
          flex: 1;
        }

        .pair-tag {
          font-size: 0.75rem;
          padding: 0.35rem 0.65rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #e0f2fe;
          background: rgba(120, 99, 252, 0.18);
        }

        .pair-body {
          display: grid;
          gap: 1rem;
          align-items: start;
        }

        @media (min-width: 820px) {
          .pair-body {
            grid-template-columns: 1fr 110px 1fr;
          }
        }

        .pair-side {
          padding: 1rem;
          border-radius: 14px;
          min-height: 110px;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          position: relative;
        }

        .pair-side p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.6;
        }

        .pair-side.risk {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.14), rgba(239, 68, 68, 0.08));
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #fecdd3;
        }

        .pair-side.fix {
          background: linear-gradient(135deg, rgba(14, 207, 143, 0.16), rgba(14, 207, 143, 0.08));
          border: 1px solid rgba(14, 207, 143, 0.2);
          color: #e9fbf5;
        }

        .side-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.8);
        }

        .pair-connector {
          position: relative;
          height: 100%;
          min-height: 94px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .connector-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 90%;
          background: linear-gradient(180deg, rgba(120, 99, 252, 0.1), rgba(120, 99, 252, 0.5));
          border-radius: 999px;
          opacity: 0.7;
        }

        .connector-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7863fc, #0ecf8f);
          box-shadow: 0 0 0 10px rgba(120, 99, 252, 0.18), 0 0 0 18px rgba(14, 207, 143, 0.12);
        }

        .pair-proof {
          display: flex;
          gap: 0.65rem;
          align-items: center;
          margin-top: 1rem;
          padding-top: 0.95rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          line-height: 1.5;
        }

        .proof-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.55rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.06);
          font-size: 0.78rem;
          color: #e2e8f0;
          flex-shrink: 0;
        }

        .pill-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #0ecf8f;
          box-shadow: 0 0 0 6px rgba(14, 207, 143, 0.15);
        }

        .pair-proof p {
          margin: 0;
          font-size: 0.98rem;
          color: #e2e8f0;
        }

        .audit-compare.is-visible .pair {
          animation: floatUp 700ms ease forwards;
        }

        @keyframes floatUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .audit-compare {
            padding: 5.5rem 1.25rem 6.5rem;
          }

          .intro-card,
          .board {
            padding: 2rem 1.75rem;
          }

          .intro-title {
            font-size: 2.1rem;
          }

          .board-title {
            font-size: 1.6rem;
          }

          .pair-body {
            grid-template-columns: 1fr;
          }

          .pair-side {
            min-height: unset;
          }

          .pair-connector {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pair,
          .progress-fill,
          .progress-dot,
          .audit-compare {
            transition: none !important;
            animation: none !important;
          }

          .pair {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundationAuditCompare;
