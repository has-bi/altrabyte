// components/HeroSection.js - Hero with Video Background
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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Using a placeholder video URL - replace with your actual video */}
          <source
            src="https://cdn.pixabay.com/video/2021/09/11/88034-605093184_large.mp4"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">
                Available for new projects
              </span>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Turning Data Into Decisions
              </h1>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white/90">
                That Drive Growth in{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-md"></span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 font-semibold">
                    {industries[currentIndustry]}
                  </span>
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-lg pt-2">
                Empower faster decision-making, automate what slows you down,
                and reduce operational waste.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-xl border border-white/20 transition-all duration-200 hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:-translate-y-0.5 transform">
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

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-white/60"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-white/80">50+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-white/60"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                <span className="text-sm text-white/80">
                  200+ Projects Delivered
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Optional floating element over video */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating glass card with stats */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl animate-float">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">
                      95%
                    </div>
                    <div className="text-white/70">Client Satisfaction</div>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">3x</div>
                    <div className="text-white/70">ROI Improvement</div>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">
                      50%
                    </div>
                    <div className="text-white/70">Time Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          75% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
