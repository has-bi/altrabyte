"use client";

import React from "react";

const FinalCTASection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl lg:rounded-[3rem] overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />

            {/* Floating orbs */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 sm:p-12 lg:p-16">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  Ready to Transform Your{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                    Data Strategy?
                  </span>
                </h2>

                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  Schedule a free discovery session and explore how our
                  enterprise solutions can accelerate your digital
                  transformation journey.
                </p>
              </div>

              {/* Value Props */}
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-100">
                    30-minute strategy consultation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-100">
                    Custom ROI analysis for your industry
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-100">
                    No commitment, just strategic insights
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                  Schedule My Consultation
                  <svg
                    className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
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

              {/* Trust Signal */}
              <div className="pt-4">
                <p className="text-sm text-blue-200">
                  Join 500+ enterprises that chose AltraByte for their data
                  transformation
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Main 3D Object */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ animation: "float-cta 8s ease-in-out infinite" }}
                >
                  <div
                    className="w-72 h-72 lg:w-80 lg:h-80 rounded-full relative"
                    style={{
                      background: `
                        conic-gradient(
                          from 0deg,
                          #00D4FF 0deg,
                          #5B73FF 72deg,
                          #8B5CF6 144deg,
                          #A855F7 216deg,
                          #00D4FF 288deg,
                          #5B73FF 360deg
                        )
                      `,
                      filter: "drop-shadow(0 25px 50px rgba(0, 212, 255, 0.3))",
                    }}
                  >
                    {/* Glass overlay */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm border border-white/30"></div>

                    {/* Inner elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Orbiting elements */}
                    <div
                      className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full"
                      style={{ animation: "orbit-1 12s linear infinite" }}
                    ></div>
                    <div
                      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"
                      style={{ animation: "orbit-2 15s linear infinite" }}
                    ></div>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute top-16 left-8 w-2 h-2 bg-cyan-300 rounded-full animate-ping"></div>
                <div
                  className="absolute bottom-20 right-12 w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-32 right-8 w-3 h-3 bg-purple-300 rounded-full animate-bounce"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Typically respond within 4 hours</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Free consultation, no strings attached</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-cta {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        @keyframes orbit-1 {
          0% {
            transform: translate(-50%, 0) rotate(0deg) translateX(140px)
              rotate(0deg);
          }
          100% {
            transform: translate(-50%, 0) rotate(360deg) translateX(140px)
              rotate(-360deg);
          }
        }

        @keyframes orbit-2 {
          0% {
            transform: translate(-50%, 0) rotate(0deg) translateX(120px)
              rotate(0deg);
          }
          100% {
            transform: translate(-50%, 0) rotate(-360deg) translateX(120px)
              rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTASection;
