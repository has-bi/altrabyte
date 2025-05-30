// components/HeroSection.js - Fixed layout
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
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Status */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600 font-medium">
                Available for new projects
              </span>
            </div>

            {/* Main Headline - Fixed Layout */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                Turning Data into Decisions That
                <br />
                Drive Growth in
                <br />
                <span className="text-gray-400 transition-colors duration-500">
                  {industries[currentIndustry]}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                Empower faster decision-making, automate what slows you down,
                and reduce operational waste.
              </p>
            </div>

            {/* CTA - Improved Responsive */}
            <div className="pt-4">
              <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all duration-200 hover:-translate-y-0.5 transform text-sm sm:text-base">
                Get a Free Data Strategy Session
              </button>
            </div>
          </div>

          {/* Right Visual - Better Positioning */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Simple Geometric Shape */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                style={{
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gray-900 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subtle Floating Elements */}
              <div
                className="absolute top-6 right-6 sm:top-8 sm:right-8 w-3 h-3 bg-gray-300 rounded-full"
                style={{ animation: "float 4s ease-in-out infinite 1s" }}
              ></div>
              <div
                className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 w-2 h-2 bg-gray-400 rounded-full"
                style={{ animation: "float 5s ease-in-out infinite 2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
