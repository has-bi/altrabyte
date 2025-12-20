// components/HeroSection.js - Clean Design with Subtle Animations
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-[120px] pb-10 sm:pt-[140px] sm:pb-12 lg:pt-[150px] lg:pb-14 min-h-[600px] sm:min-h-[700px] lg:min-h-[820px]">
      {/* Content - Pixel Perfect */}
      <div className="relative max-w-[1120px] mx-auto px-5 sm:px-6 md:px-8">
        <div className="flex flex-col max-w-[590px] gap-y-7 sm:gap-y-[28px]">
          {/* Main Headline - Exact Typography with Fade In */}
          <h1
            className={`text-[36px] leading-[44px] sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[72px] font-normal text-neutral-500 tracking-[-0.02em] transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <span className="text-primary-500">Stop</span> Building AI on
            <br />
            Excel Spreadsheets
          </h1>

          {/* Subheadline with Purple Border - Staggered Animation */}
          <div
            className={`p-2 border-l-[4px] border-primary-500 pl-[18px] bg-gradient-to-r from-primary-50 to-transparent transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <h2 className="text-[20px] leading-[30px] sm:text-[24px] sm:leading-[38px] font-medium text-neutral-400 tracking-[-0.01em]">
              From Excel Chaos to{" "}
              <span className="text-primary-500">Automated Intelligence</span>
            </h2>
          </div>

          <div className="flex flex-col gap-y-[16px]">
            {/* Quote - Italic Typography with Staggered Animation */}
            <blockquote
              className={`text-[18px] leading-[160%] sm:text-[20px] text-neutral-400 italic font-medium transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              "Most companies think they're ready for advanced analytics. Most
              are wrong."
            </blockquote>

            {/* Description Paragraph with Staggered Animation */}
            <p
              className={`text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] text-neutral-400 max-w-[528px] transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              We meet you exactly where you are - whether that's spreadsheets,
              scattered systems, or broken dashboards - and build the foundation
              that actually scales.
            </p>
          </div>

          {/* CTA Buttons - Exact Sizing with Enhanced Hover */}
          <div
            className={`flex flex-col sm:flex-row gap-[16px] transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <Link
              href="/foundation-audit"
              className="group inline-flex items-center justify-center w-full sm:w-[252px] h-[56px] bg-neutral-500 text-white text-[16px] font-semibold rounded-full transition-all duration-300 ease-out leading-none hover:bg-neutral-600 hover:shadow-[0_8px_24px_rgba(18,34,50,0.15)] hover:-translate-y-0.5"
            >
              Diagnose My Data Reality
            </Link>
            <Link
              href="/transformation-stories"
              className="group inline-flex items-center justify-center w-full sm:w-[228px] h-[56px] bg-transparent text-neutral-500 text-[16px] font-semibold rounded-full border-[2px] border-neutral-200 transition-all duration-300 ease-out leading-none hover:border-primary-500 hover:text-primary-500 hover:shadow-[0_8px_24px_rgba(120,99,252,0.12)] hover:-translate-y-0.5"
            >
              See Real Transformations
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

export default HeroSection;
