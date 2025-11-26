// src/components/foundation/FoundationAuditSteps.js
"use client";
import { Lightbulb } from "lucide-react";

const auditSteps = [
  {
    number: "01",
    title: "See your real data posture",
    description:
      "We map every system, spreadsheet, and shadow workflow to show how data really moves today — not how it’s documented.",
  },
  {
    number: "02",
    title: "Expose the hidden risks early",
    description:
      "We stress-test governance, quality, and process handoffs to surface the blind spots that derail automation and AI projects.",
  },
  {
    number: "03",
    title: "Prioritize the blueprint to ship",
    description:
      "You leave with a sequenced plan — quick wins, foundational fixes, and the compounding bets that make AI actually stick.",
    highlight: true,
  },
];

const FoundationAuditSteps = () => {
  return (
    <section className="relative border-t border-dashed border-neutral-500/80 bg-white py-16 md:py-20">
      <div className="section-container">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-3xl text-[32px] font-medium leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[36px] lg:text-[40px]">
            How the Foundation Audit gets you truth in 10 days
          </h2>
          <p className="max-w-4xl text-[18px] leading-[1.5] tracking-[-0.01em] text-neutral-400 md:text-[20px]">
            Three moves, one blueprint: clarity on your stack, a view of hidden
            risks, and a prioritized path to build with confidence.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6 rounded-xl border border-neutral-50 bg-white px-4 py-8 shadow-[0px_2px_8px_rgba(0,0,0,0.08)] md:flex-row md:items-center md:gap-8 md:px-10">
          {auditSteps.map((step, idx) => (
            <div
              key={step.number}
              className={`relative flex flex-1 flex-col items-center gap-3 text-center ${
                step.highlight
                  ? "rounded-lg bg-primary-50 px-5 py-6 md:py-8"
                  : "px-2 py-4"
              }`}
            >
              {step.highlight && (
                <div className="absolute left-1/2 top-6 flex -translate-x-1/2 justify-center">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0px_2px_6px_rgba(0,0,0,0.12)]">
                    <Lightbulb className="h-6 w-6 text-primary-500" strokeWidth={2} />
                  </div>
                </div>
              )}

              <div
                className={`text-[40px] font-medium leading-[1.28] tracking-[-0.01em] text-neutral-500 ${
                  step.highlight ? "mt-10" : ""
                }`}
              >
                {step.number}
              </div>

              <div className="flex flex-col items-center gap-2">
                <h3 className="text-[22px] font-medium leading-[1.4] tracking-[-0.01em] text-neutral-500 md:text-[24px]">
                  {step.title}
                </h3>
                <p
                  className={`text-[16px] leading-[1.5] tracking-[-0.01em] md:text-[18px] ${
                    step.highlight ? "text-neutral-500" : "text-neutral-400"
                  }`}
                >
                  {step.description}
                </p>
              </div>

              {idx < auditSteps.length - 1 && (
                <div className="absolute right-[-16px] top-4 bottom-4 hidden border-l border-dashed border-neutral-100 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundationAuditSteps;
