// src/components/foundation/FoundationAuditCompare.js
"use client";

const risks = [
  "Manual reconciliations hide errors until the end of the week.",
  "Different teams own their own numbers — no single version of truth.",
  "Quality issues surface late and stall automation pilots.",
  "Every new dashboard request restarts the data scramble.",
];

const outcomes = [
  "Shared entities and KPIs — one truth every team uses.",
  "Automated checks catch data breaks before they hit reports.",
  "Repeatable pipelines that make new dashboards trivial.",
  "A clear ownership model so changes don’t reintroduce chaos.",
];

const FoundationAuditCompare = () => {
  return (
    <section className="section relative overflow-hidden bg-secondary-100">
      <div className="section-container">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[34px] font-medium leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[38px] lg:text-[40px]">
            What happens before vs after the audit
          </h2>
          <p className="text-[18px] leading-[1.5] tracking-[-0.01em] text-neutral-400 md:text-[20px]">
            The same team, different foundation.
          </p>
        </div>

        <div className="mt-12 grid gap-0 overflow-hidden rounded-[20px] bg-white shadow-[0_10px_30px_rgba(18,34,50,0.08)] md:grid-cols-2">
          {/* Left - Before */}
          <div className="flex flex-col gap-7 border-b border-neutral-50 px-6 py-10 md:border-b-0 md:border-r md:px-10">
            <h3 className="text-center text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-neutral-500">
              Before the audit
            </h3>
            <div className="flex flex-col divide-y divide-[#F7B9CB] border border-[#F7B9CB] bg-[#FCE9EE] rounded-xl overflow-hidden">
              {risks.map((item, idx) => (
                <div
                  key={`risk-${idx}`}
                  className={`flex gap-3 px-5 py-6 text-left ${
                    idx === 0 ? "rounded-t-xl" : ""
                  } ${idx === risks.length - 1 ? "rounded-b-xl" : ""}`}
                >
                  <span className="mt-1 inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-[#ED688E] text-white text-sm font-semibold">
                    ×
                  </span>
                  <p className="text-[18px] leading-[1.5] text-neutral-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - After */}
          <div className="flex flex-col gap-7 px-6 py-10 md:px-10">
            <h3 className="text-center text-[24px] font-medium leading-[1.4] tracking-[-0.01em] text-neutral-500">
              After the audit
            </h3>
            <div className="flex flex-col divide-y divide-[#B2E2D5] border border-[#B2E2D5] bg-[#E6F6F1] rounded-xl overflow-hidden">
              {outcomes.map((item, idx) => (
                <div
                  key={`outcome-${idx}`}
                  className={`flex gap-3 px-5 py-6 text-left ${
                    idx === 0 ? "rounded-t-xl" : ""
                  } ${idx === outcomes.length - 1 ? "rounded-b-xl" : ""}`}
                >
                  <span className="mt-1 inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-[#59C1A3] text-white text-sm font-semibold">
                    ✓
                  </span>
                  <p className="text-[18px] leading-[1.5] text-neutral-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationAuditCompare;
