"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const StartYourAuditHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute right-[-10%] top-12 h-80 w-80 rounded-full bg-primary-200/60 blur-[120px]" />
        <div className="absolute left-1/2 bottom-[-30%] h-96 w-96 -translate-x-1/2 rounded-full bg-[#DDEBFF]/50 blur-[140px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="mx-auto flex max-w-[940px] flex-col items-center gap-8 py-20 md:py-24 lg:py-[120px]">
          <div className="inline-flex items-center justify-center rounded-xl border border-[#E7E9EB] bg-white px-4 py-2 text-[16px] font-medium tracking-[-0.01em] text-[#9299A1] shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
            Start Your Audit
          </div>

          <h1 className="text-center text-[34px] leading-[1.28] font-semibold tracking-[-0.01em] text-[#122232] sm:text-[42px] md:text-[48px] lg:text-[56px]">
            <span className="text-transparent bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text">
              Ready to Discover
            </span>{" "}
            What's Really Breaking Your Business?
          </h1>

          <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#F2EFFF] via-white to-[#F2EFFF] px-6 py-4 md:px-10 md:py-5">
            {/* Left stroke - starts from center, slides left */}
            <span
              className="pointer-events-none absolute inset-y-0 w-[4px] bg-gradient-to-b from-[#AF8CFF] via-[#7B63FF] to-[#AF8CFF]"
              style={{
                left: isVisible ? "0" : "50%",
                transform: isVisible ? "translateX(0)" : "translateX(-50%)",
                transition: "all 1000ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            />
            {/* Right stroke - starts from center, slides right */}
            <span
              className="pointer-events-none absolute inset-y-0 w-[4px] bg-gradient-to-b from-[#AF8CFF] via-[#7B63FF] to-[#AF8CFF]"
              style={{
                right: isVisible ? "0" : "50%",
                transform: isVisible ? "translateX(0)" : "translateX(50%)",
                transition: "all 1000ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            />
            {/* Text fades in after strokes animate */}
            <p
              className="text-center text-[18px] leading-[1.6] font-regular tracking-[-0.01em] text-[#122232] whitespace-normal lg:whitespace-nowrap md:text-[20px] lg:text-[24px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.95)",
                transition:
                  "opacity 600ms ease-out 600ms, transform 600ms ease-out 600ms",
              }}
            >
              Book your Foundation Audit and see exactly where you stand
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <p className="max-w-[780px] text-[18px] leading-[1.6] font-medium italic tracking-[-0.01em] text-[#122232] md:text-[20px]">
              Most companies think they need advanced analytics. Most are wrong.
              In 90 minutes, we'll show you what you actually need to transform
              your business from manual chaos to intelligent automation.
            </p>
            <p className="max-w-[680px] text-[16px] leading-[1.5] tracking-[-0.01em] text-[#414E5B] md:text-[18px]">
              No sales pitch. No generic proposals. Just brutal honesty about
              your data reality.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-5 sm:flex-row md:w-auto">
            <Link
              href="/contact"
              className="group inline-flex min-w-[276px] items-center justify-center rounded-full bg-[#0D1B2A] px-8 py-3 text-[18px] font-semibold leading-[1.5] tracking-[-0.01em] text-white shadow-[0_4px_6px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out whitespace-nowrap hover:bg-[#132840] hover:shadow-[0_8px_24px_rgba(13,27,42,0.25)] hover:-translate-y-0.5"
            >
              Book Your Foundation Audit
            </Link>
            <Link
              href="/foundation-first"
              className="group inline-flex min-w-[276px] items-center justify-center rounded-full border-2 border-[#B6BABF] bg-white px-8 py-3 text-[18px] font-semibold leading-[1.5] tracking-[-0.01em] text-[#0D1B2A] shadow-[0_4px_6px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out whitespace-nowrap hover:border-primary-500 hover:text-primary-500 hover:shadow-[0_8px_24px_rgba(120,99,252,0.15)] hover:-translate-y-0.5"
            >
              Why Foundation First?
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StartYourAuditHero;
