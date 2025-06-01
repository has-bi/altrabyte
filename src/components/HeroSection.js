// components/HeroSection.js - Hero with Video in Stats Container
"use client";

import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const industries = [
    "FMCG",
    "eCommerce",
    "EdTech",
    "Renewable Energy",
    "Banking",
  ];

  const [currentIndustry, setCurrentIndustry] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length);
    }, 2500); // Slightly faster transition

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-[#E1E1FC]">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-primary text-sm font-medium">
                Available for new projects
              </span>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Turning Data
                <br />
                Into Decisions
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-primary">
                That Drive Growth in{" "}
                <span className="relative inline-block min-w-[200px]">
                  <span
                    key={currentIndustry}
                    className="text-primary font-semibold transition-all duration-700 ease-in-out animate-fade-in"
                  >
                    {industries[currentIndustry]}
                  </span>
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-primary leading-relaxed max-w-lg pt-2">
                Empower faster decision-making, automate what slows you down,
                and reduce operational waste.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="btn-primary group relative inline-flex items-center">
                <span className="relative z-10">
                  Get a Free Data Strategy Session
                </span>
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Video Container */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Simple Video Container */}
              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[35rem] object-cover"
                >
                  <source src="/videos/hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
