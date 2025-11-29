"use client";
import { Compass, Route, Layers } from "lucide-react";

const journeys = [
  {
    label: "Story Journey 1",
    title: "Spreadsheet Chaos",
    description: "Operators still rebuild the same truth every week",
    icon: Layers,
  },
  {
    label: "Story Journey 2",
    title: "Tool-First Fixes",
    description: "Platforms before ownership keeps breaking automation",
    icon: Route,
  },
  {
    label: "Story Journey 3",
    title: "Reality Ops",
    description: "Operators own the blueprint, cadence, and rollout",
    icon: Compass,
  },
];

const TransformationStoriesJourneys = () => {
  return (
    <section className="border-b border-dashed border-neutral-500/60 px-4 py-20">
      <div className="section-container flex flex-col items-center gap-12">
        <header className="flex max-w-[620px] flex-col items-center gap-3 text-center">
          <h2 className="text-[36px] font-semibold leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[40px]">
            Pick your transformation journey
          </h2>
          <p className="text-[18px] leading-[1.5] text-neutral-400 md:text-[20px]">
            Three ways to read the stories — all ending with operational ownership.
          </p>
        </header>

        <div className="w-full max-w-[1200px] rounded-[20px] border border-primary-100 bg-white p-8">
          <div className="overflow-hidden rounded-[12px] border border-primary-100">
            <div className="flex bg-primary-50">
              {journeys.map((journey, idx) => {
                const Icon = journey.icon;
                return (
                  <div
                    key={journey.label}
                    className={`flex flex-1 items-center gap-5 px-6 py-6 ${
                      idx < journeys.length - 1 ? "border-r border-dashed border-neutral-400/40" : ""
                    }`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-primary-500 text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-500">
                        {journey.label}
                      </p>
                      <h3 className="text-[22px] font-semibold text-neutral-600">{journey.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col divide-y divide-dashed divide-neutral-300 lg:flex-row lg:divide-y-0 lg:divide-x">
              {journeys.map((journey) => (
                <div key={journey.title} className="flex-1 px-6 py-5 text-[18px] leading-[1.6] text-neutral-500">
                  {journey.description}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center md:flex-row md:gap-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-500 text-primary-500">
            <Layers className="h-5 w-5" />
          </span>
          <p className="text-[18px] text-neutral-500">
            Next step: <span className="font-semibold text-neutral-600">Pick a journey, then follow the operators.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationStoriesJourneys;
