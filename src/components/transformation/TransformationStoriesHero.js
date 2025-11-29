"use client";
import Link from "next/link";

const TransformationStoriesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-6 h-72 w-72 rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute right-[-5%] top-10 h-80 w-80 rounded-full bg-primary-200/50 blur-[110px]" />
        <div className="absolute left-1/2 bottom-[-20%] h-96 w-96 -translate-x-1/2 rounded-full bg-[#DDEBFF]/50 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="mx-auto flex max-w-[820px] flex-col items-center gap-7 py-20 md:py-24 lg:py-[120px]">
          <div className="inline-flex items-center justify-center rounded-xl border border-[#E7E9EB] bg-white px-4 py-2 text-[16px] font-medium tracking-[-0.01em] text-[#9299A1] shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
            Transformation Stories
          </div>

          <h1 className="text-center text-[34px] leading-[1.28] font-semibold tracking-[-0.01em] text-[#122232] sm:text-[42px] md:text-[48px] lg:text-[56px]">
            See{" "}
            <span className="text-transparent bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text">
              What Happens
            </span>{" "}
            When Foundation Comes First
          </h1>

          <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#F2EFFF] via-white to-[#F2EFFF] px-6 py-4 md:px-10 md:py-5">
            <span className="pointer-events-none absolute inset-y-0 left-0 w-[4px] bg-gradient-to-b from-[#AF8CFF] via-[#7B63FF] to-[#AF8CFF]" />
            <span className="pointer-events-none absolute inset-y-0 right-0 w-[4px] bg-gradient-to-b from-[#AF8CFF] via-[#7B63FF] to-[#AF8CFF]" />
            <p className="text-center text-[18px] leading-[1.6] font-reguler tracking-[-0.01em] text-[#122232] md:text-[20px] lg:text-[24px]">
              Real transformations across industries and company sizes
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[18px] leading-[1.6] font-medium italic tracking-[-0.01em] text-[#122232] md:text-[20px]">
              These aren't theoretical case studies. These are real businesses
              that went from manual chaos to intelligent automation using our
              foundation-first methodology.
            </p>
            <p className="text-[16px] leading-[1.5] tracking-[-0.01em] text-[#414E5B] md:text-[18px]">
              See yourself in their journey.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-w-[276px] items-center justify-center rounded-full bg-[#0D1B2A] px-8 py-3 text-[18px] font-semibold leading-[1.5] tracking-[-0.01em] text-white shadow-[0_4px_6px_rgba(0,0,0,0.15)] transition-colors duration-200 whitespace-nowrap hover:bg-[#132840]"
            >
              Book Your Foundation Audit
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex min-w-[276px] items-center justify-center gap-2 rounded-full border border-[#B6BABF] bg-white px-8 py-3 text-[18px] font-semibold leading-[1.5] tracking-[-0.01em] text-[#0D1B2A] shadow-[0_4px_6px_rgba(0,0,0,0.08)] transition-all duration-200 whitespace-nowrap hover:border-[#8e96a0] hover:text-[#142c44]"
            >
              <span>Download Transformation Guide</span>
              <svg
                className="h-4 w-4 text-current"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10 3.5v9m0 0 3.5-3.5M10 12.5 6.5 9M4 15.5h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationStoriesHero;
