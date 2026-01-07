// src/components/foundation/FoundationAuditSteps.js
"use client";
import { Sparkles } from "lucide-react";

const diagnosticPrompts = [
  {
    number: "01.",
    question: "“Show me your database.”",
    detail:
      "90% hesitate, then point to Excel files or “our system” (which is usually Excel with extra steps)",
  },
  {
    number: "02.",
    question: "“Show me your automation.”",
    detail:
      "They point to people. “Sarah handles that” or “We have an admin who processes everything”",
  },
];

const FoundationAuditSteps = () => {
  return (
    <section className="relative border-t border-dashed border-neutral-500/80 bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[32px] font-semibold leading-[1.28] tracking-[-0.01em] text-[#122232] md:text-[36px] lg:text-[40px]">
            The Diagnostic That Changed Everything
          </h2>
          <p className="max-w-2xl text-[18px] leading-[1.55] tracking-[-0.01em] text-[#657083] md:text-[20px]">
            In 10 years, we've learned that two simple questions reveal more
            than any technical assessment
          </p>
        </div>

        <div className="mt-12 grid gap-4 rounded-2xl border border-[#E6E8EC] bg-white p-4 md:grid-cols-3 md:p-6">
          {diagnosticPrompts.map((prompt) => (
            <div
              key={prompt.number}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-[18px] border border-transparent bg-white px-6 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-primary-100/70 hover:shadow-[0px_16px_36px_rgba(18,34,50,0.08)]"
            >
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-50/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-10 top-2 h-[2px] -translate-y-2 rounded-full bg-gradient-to-r from-primary-400/60 to-primary-200/60 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col gap-3">
                <span className="text-[30px] font-semibold text-[#122232]">
                  {prompt.number}
                </span>
                <p className="text-[20px] font-medium leading-[1.4] text-[#122232]">
                  {prompt.question}
                </p>
                <p className="text-[16px] leading-[1.5] text-[#4D5A68]">
                  {prompt.detail}
                </p>
              </div>
            </div>
          ))}

          <div className="group relative flex flex-col items-center gap-4 rounded-[18px] border border-primary-100/70 bg-gradient-to-b from-[#F7F4FF] to-[#F0EBFF] px-6 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_20px_40px_rgba(120,99,252,0.22)]">
            <span className="pointer-events-none absolute inset-x-10 top-3 h-[2px] -translate-y-2 rounded-full bg-gradient-to-r opacity-40 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0px_4px_12px_rgba(120,99,252,0.25)] transition-transform duration-500 group-hover:scale-[1.04]">
              <span className="pointer-events-none absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-primary-200/10 to-transparent" />
              <Sparkles
                className="relative h-5 w-5 text-primary-500"
                strokeWidth={2}
              />
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <p className="text-[18px] font-semibold text-[#122232]">
                What this tells us
              </p>
              <p className="text-[16px] leading-[1.5] text-[#4D5A68]">
                You're not ready for machine learning. You're ready for basic
                infrastructure that actually works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationAuditSteps;
