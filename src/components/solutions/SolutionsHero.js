// components/solutions/SolutionsHero.js
"use client";
import React from "react";

const SolutionsHero = () => {
  return (
    <section className="h-[50vh] min-h-[400px] flex items-center bg-[#E1E1FC] relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video - centered and responsive */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 blur-sm scale-105 object-cover"
        >
          <source src="/videos/hero-solutions.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/20"></div>
      </div>

      {/* Background Elements - responsive */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-10 lg:top-20 right-5 lg:right-10 w-32 h-32 lg:w-64 lg:h-64 bg-indigo-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 lg:bottom-20 left-5 lg:left-10 w-40 h-40 lg:w-80 lg:h-80 bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headlines - fully responsive */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight px-2 sm:px-0">
              Solving the Right Problems, Fast
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
              We help companies move from broken dashboards and manual work to
              scalable systems powered by data, automation, and AI.
            </p>
          </div>

          {/* Quick Navigation - responsive */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0">
            <a
              href="#data-analytics"
              className="text-xs sm:text-sm border border-white/30 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 hover:border-white/50 hover:bg-white transition-all duration-200 shadow-sm text-primary font-medium whitespace-nowrap"
            >
              Data Analytics
            </a>
            <a
              href="#ai-automation"
              className="text-xs sm:text-sm border border-white/30 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 hover:border-white/50 hover:bg-white transition-all duration-200 shadow-sm text-primary font-medium whitespace-nowrap"
            >
              AI Automation
            </a>
            <a
              href="#process-optimization"
              className="text-xs sm:text-sm border border-white/30 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 hover:border-white/50 hover:bg-white transition-all duration-200 shadow-sm text-primary font-medium whitespace-nowrap"
            >
              Process Optimization
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
