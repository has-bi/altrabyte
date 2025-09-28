// components/HeroSection.js - Clean Design
"use client";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[820px] bg-white overflow-hidden pt-[150px] pb-8 sm:pb-11 lg:pb-12">
      {/* Content - Pixel Perfect */}
      <div className="relative max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="flex flex-col max-w-[590px] gap-y-[28px]">
          {/* Main Headline - Exact Typography */}
          <h1 className="text-[56px] leading-[72px] font-normal text-neutral-500 tracking-[-0.02em]">
            <span className="text-primary-500">Stop</span> Building AI on
            <br />
            Excel Spreadsheets
          </h1>

          {/* Subheadline with Purple Border */}
          <div className="p-2 border-l-[4px] border-primary-500 pl-[18px] bg-gradient-to-r from-primary-50 to-transparent">
            <h2 className="text-[24px] leading-[38px] font-medium text-neutral-400 tracking-[-0.01em]">
              From Excel Chaos to{" "}
              <span className="text-primary-500">Automated Intelligence</span>
            </h2>
          </div>

          <div className="flex flex-col gap-y-[16px]">
            {/* Quote - Italic Typography */}
            <blockquote className="text-[20px] leading-160% text-neutral-400 italic font-medium">
              "Most companies think they're ready for advanced analytics. Most
              are wrong."
            </blockquote>

            {/* Description Paragraph */}
            <p className="text-[18px] leading-[28px] text-neutral-400 max-w-[528px]">
              We meet you exactly where you are - whether that's spreadsheets,
              scattered systems, or broken dashboards - and build the foundation
              that actually scales.
            </p>
          </div>

          {/* CTA Buttons - Exact Sizing */}
          <div className="flex flex-col sm:flex-row gap-[16px]">
            <Link
              href="/diagnose"
              className="inline-flex items-center justify-center w-[252px] h-[56px] bg-neutral-500 text-white text-[16px] font-semibold rounded-full hover:bg-neutral-600 transition-colors duration-200 leading-none"
            >
              Diagnose My Data Reality
            </Link>
            <Link
              href="/transformations"
              className="inline-flex items-center justify-center w-[228px] h-[56px] bg-transparent text-neutral-500 text-[16px] font-semibold rounded-full border-[2px] border-neutral-200 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 leading-none"
            >
              See Real Transformations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
