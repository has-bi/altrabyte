// components/HeroSection.js - Minimalist Redesign
"use client";

import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const companies = [
    "E-commerce Teams",
    "Manufacturing Leaders",
    "Healthcare Systems",
    "Mining Operations",
    "Technology Companies",
  ];

  const [currentCompany, setCurrentCompany] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompany((prev) => (prev + 1) % companies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-start bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Status */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600 font-medium">
                Available for new projects
              </span>
            </div>

            {/* Main Headline - Clean Typography */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                Data-driven
                <br />
                decisions for{" "}
                <span className="text-gray-400 transition-colors duration-500">
                  <br />
                  {companies[currentCompany]}
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We transform enterprise data into strategic advantages through
                analytics, AI, and intelligent automation.
              </p>
            </div>

            {/* CTA - Minimal */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-white font-medium rounded-2xl hover:bg-indigo-400 transition-colors duration-200 hover:-translate-y-0.5 transform">
                Our Solutions
              </button>
              <button className="px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
                Case Studies
              </button>
            </div>
          </div>

          {/* Right Visual - Minimal & Clean */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Simple Geometric Shape */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                style={{
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <div className="w-48 h-48 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-gray-900 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white"
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
                className="absolute top-8 right-8 w-3 h-3 bg-gray-300 rounded-full"
                style={{ animation: "float 4s ease-in-out infinite 1s" }}
              ></div>
              <div
                className="absolute bottom-12 left-12 w-2 h-2 bg-gray-400 rounded-full"
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
