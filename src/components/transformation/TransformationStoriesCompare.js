"use client";

import { CircleX, CheckCircle2 } from "lucide-react";

const delusionPoints = [
  '“Ritual” analytics decks explain away every miss',
  "Everyone swears the data issue is a tooling problem",
  "Leadership chases AI headlines before fixing ownership",
  "No one owns the actual business logic — just the presentations",
];

const realityPoints = [
  "Operators write from a single source of truth and show real deltas",
  "Data contracts, lineage, and QA exist before automation gets sold",
  "Leaders run an audit before budgeting for new platforms",
  "Every recommendation is owned, measured, and iterated by ops",
];

const TransformationStoriesCompare = () => {
  return (
    <section className="bg-[#FBF7F6] px-4 py-20">
      <div className="section-container flex flex-col items-center gap-12">
        <header className="flex max-w-[700px] flex-col items-center gap-3 text-center">
          <h2 className="text-[36px] font-semibold leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[40px]">
            The delusion vs. the operators who fixed reality
          </h2>
          <p className="text-[18px] leading-[1.5] text-neutral-400 md:text-[20px]">
            Read each story with this lens and you’ll see why these outcomes stuck.
          </p>
        </header>

        <div className="w-full max-w-[1200px] rounded-[20px] bg-white p-10 shadow-[0_32px_60px_rgba(15,23,42,0.08)]">
          <div className="relative flex flex-col gap-10 lg:flex-row">
            <div className="flex w-full flex-col items-center gap-7 lg:w-1/2">
              <h3 className="text-center text-[26px] font-semibold text-neutral-500">
                Transformation Delusion
              </h3>
              <div className="flex w-full flex-col overflow-hidden rounded-[12px]">
                {delusionPoints.map((point, index) => (
                  <div
                    key={point}
                    className={`flex items-start gap-3 border border-[#F7B9CB] bg-[#FCE9EE] px-5 py-4 text-left ${
                      index === 0 ? "rounded-t-[12px]" : ""
                    } ${index === delusionPoints.length - 1 ? "rounded-b-[12px]" : "border-t-0"}`}
                  >
                    <span className="text-[#ED688E]">
                      <CircleX className="h-6 w-6" />
                    </span>
                    <p className="text-[18px] leading-[1.5] text-neutral-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block lg:w-px lg:bg-dashed-divider" />

            <div className="flex w-full flex-col items-center gap-7 lg:w-1/2">
              <h3 className="text-center text-[26px] font-semibold text-neutral-500">
                Transformation Reality
              </h3>
              <div className="flex w-full flex-col overflow-hidden rounded-[12px]">
                {realityPoints.map((point, index) => (
                  <div
                    key={point}
                    className={`flex items-start gap-3 border border-[#B2E2D5] bg-[#E6F6F1] px-5 py-4 text-left ${
                      index === 0 ? "rounded-t-[12px]" : ""
                    } ${index === realityPoints.length - 1 ? "rounded-b-[12px]" : "border-t-0"}`}
                  >
                    <span className="text-[#59C1A3]">
                      <CheckCircle2 className="h-6 w-6" />
                    </span>
                    <p className="text-[18px] leading-[1.5] text-neutral-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-[12px] border border-primary-100 bg-primary-50 px-6 py-4 text-center lg:flex-row lg:items-center lg:gap-6 lg:text-left">
            <div className="flex items-center justify-center rounded-full bg-white/80 p-3 text-primary-500">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <div>
              <p className="text-[20px] font-semibold text-primary-500">Result</p>
              <p className="text-[18px] leading-[1.5] text-neutral-600">
                When teams choose reality over rhetoric, they ship compounding change — each story is the proof.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lg\\:bg-dashed-divider {
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(18, 34, 50, 0.35) 0px,
            rgba(18, 34, 50, 0.35) 12px,
            transparent 12px,
            transparent 24px
          );
        }
      `}</style>
    </section>
  );
};

export default TransformationStoriesCompare;
