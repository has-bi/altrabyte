// src/components/foundation/FoundationAuditHero.js
"use client";
import Link from "next/link";

const FoundationAuditHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F7F9FB] to-white">
      {/* Soft gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-6 h-64 w-64 rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute right-[-10%] top-10 h-72 w-72 rounded-full bg-primary-50/60 blur-3xl" />
        <div className="absolute left-1/2 bottom-[-15%] h-80 w-80 -translate-x-1/2 rounded-full bg-[#E0F5FF]/40 blur-[90px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-7 py-16 md:py-20 lg:py-24">
          {/* Label */}
          <div className="inline-flex items-center justify-center rounded-xl border border-neutral-50 bg-white/90 px-4 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm">
            <span className="text-[16px] leading-[22px] font-medium tracking-[-0.01em] text-neutral-200">
              Foundation Audit
            </span>
          </div>

          {/* Title */}
          <h1 className="text-center text-[40px] leading-[1.28] font-medium text-neutral-500 md:text-[48px] lg:text-[56px]">
            Audit your data foundation{" "}
            <span className="text-primary-500">before</span> you bet big on AI
          </h1>

          {/* Subtitle */}
          <div className="w-full rounded-2xl border-x-4 border-primary-500 bg-gradient-to-r from-primary-50 via-transparent to-primary-50 px-6 py-3 md:px-8 md:py-4">
            <p className="text-center text-[18px] leading-[1.6] font-medium tracking-[-0.01em] text-neutral-500 md:text-[20px] lg:text-[24px]">
              In 10 days, we map your data, workflows, and risks—delivering a
              prioritized blueprint you can execute with confidence.
            </p>
          </div>

          {/* Quote + Description */}
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[18px] leading-[1.6] font-medium italic text-neutral-500 md:text-[20px]">
              “Most AI programs fail because the foundation was never audited.”
            </p>
            <p className="max-w-[760px] text-[16px] leading-[1.55] text-neutral-400 md:text-[18px]">
              We pressure-test your data, governance, and automation readiness,
              then surface the fastest wins, hidden risks, and investments that
              compound.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 md:w-[620px]">
            <Link
              href="/start-your-audit"
              className="inline-flex h-[56px] w-full items-center justify-center rounded-full bg-neutral-500 px-8 text-[18px] font-semibold leading-none text-white transition-colors duration-200 hover:bg-neutral-600 sm:w-[276px]"
            >
              Book Your Audit Call
            </Link>
            <Link
              href="/why-foundation-first"
              className="inline-flex h-[56px] w-full items-center justify-center rounded-full border border-neutral-100 bg-white px-8 text-[18px] font-semibold leading-none text-neutral-500 shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition-all duration-200 hover:border-primary-300 hover:text-primary-500 sm:w-[276px]"
            >
              View Audit Checklist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationAuditHero;
