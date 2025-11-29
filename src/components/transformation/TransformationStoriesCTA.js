"use client";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Bot, Clock3, BarChart3 } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    text: "Growth teams finally operate from one truth",
  },
  {
    icon: Bot,
    text: "Automation backlog sequenced with real ownership",
  },
  {
    icon: Clock3,
    text: "Cadence that keeps shipping in 90-day cycles",
  },
  {
    icon: BarChart3,
    text: "Execs get a weekly pulse instead of slide theater",
  },
];

const TransformationStoriesCTA = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col">
        <div className="px-4 py-20 sm:px-10">
          <div className="rounded-[40px] bg-[#7863FC] px-6 py-12 text-white shadow-[0_50px_100px_rgba(70,45,165,0.4)] md:px-12 lg:px-16">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-5">
                <h2 className="text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] md:text-[56px]">
                  Ready for the real story?
                </h2>
                <p className="text-[20px] leading-[1.5] text-white/85 md:text-[24px]">
                  Stop collecting decks. Start building the operating rhythm that keeps transformations alive after
                  the consultants leave.
                </p>
              </div>

              <div className="relative flex w-full max-w-[480px] flex-col items-center gap-5 rounded-[16px] border-4 border-white/70 bg-[#F2EFFF] px-8 py-10 text-center text-neutral-600 shadow-[20px_40px_40px_rgba(0,0,0,0.12)]">
                <span className="text-[22px] font-semibold leading-[1.4] text-neutral-700">
                  Book a Transformation Readout
                </span>
                <div className="h-px w-full border-t border-dashed border-neutral-400/60" />
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-between rounded-full bg-neutral-900 px-6 py-4 text-[18px] font-semibold text-white"
                >
                  <span>Schedule the session</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
                <span className="text-sm uppercase tracking-[0.25em] text-neutral-400">
                  10 slots each month
                </span>
                <span className="absolute right-4 top-4 h-4 w-4 rounded-full bg-[#E7E9EB] shadow-inner" />
              </div>
            </div>

            <div className="mt-14 space-y-6">
              <div className="flex items-center gap-6">
                <h4 className="text-[22px] font-semibold">What we deliver in the session</h4>
                <div className="hidden flex-1 border-t border-dashed border-white/50 md:block" />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div key={metric.text} className="space-y-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="text-[18px] leading-[1.5] text-white/85">{metric.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-6 border-t border-neutral-100 px-6 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between md:px-16">
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold text-neutral-700">AltraByte</span>
            <span className="hidden h-4 border-l border-neutral-200 sm:block" />
            <span>Transformation Stories Edition</span>
          </div>
          <div className="flex items-center gap-6 text-neutral-600">
            <Link href="/contact" className="border-b border-transparent transition-colors hover:border-neutral-600">
              Start your audit
            </Link>
            <Link href="/portfolio" className="border-b border-transparent transition-colors hover:border-neutral-600">
              See more proof
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default TransformationStoriesCTA;
