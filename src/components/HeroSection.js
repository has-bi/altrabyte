"use client";

import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const industries = [
    { name: "E-commerce", metric: "40% efficiency gain" },
    { name: "FMCG", metric: "60% cost reduction" },
    { name: "Mining", metric: "35% process optimization" },
    { name: "EdTech", metric: "50% user engagement" },
    { name: "Healthcare", metric: "45% operational efficiency" },
    { name: "Manufacturing", metric: "55% waste reduction" },
    { name: "Finance", metric: "70% faster processing" },
  ];

  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndustry((prev) => (prev + 1) % industries.length);
        setIsAnimating(false);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Diagonal Lines */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-slate-600/30 to-transparent transform rotate-12 origin-top"></div>
        <div className="absolute top-0 right-32 w-px h-full bg-gradient-to-b from-transparent via-slate-500/20 to-transparent transform rotate-12 origin-top"></div>

        {/* Glow Effects */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="min-h-screen flex items-center">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl space-y-8">
            {/* Status Badge */}
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-300">
                Available for Enterprise Solutions
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight">
                Turning Data into
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Decisions
                </span>
                <br />
                <span className="text-slate-300">for enterprises!</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
              We're your partner in enterprise data transformation, AI
              automation, and RPA solutions for every stage of your digital
              journey.
            </p>

            {/* Industries Dynamic Section */}
            <div className="space-y-4 py-4">
              <p className="text-slate-500 font-medium">Proven Results in:</p>

              <div className="h-16 flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl font-semibold text-white mb-1">
                  <span
                    className={`inline-block transition-all duration-500 ease-out ${
                      isAnimating
                        ? "opacity-0 transform translate-y-4"
                        : "opacity-100 transform translate-y-0"
                    }`}
                  >
                    {industries[currentIndustry].name}
                  </span>
                </div>
                <div className="text-sm text-cyan-400 font-medium">
                  <span
                    className={`inline-block transition-all duration-500 ease-out ${
                      isAnimating
                        ? "opacity-0 transform translate-y-2"
                        : "opacity-100 transform translate-y-0"
                    }`}
                    style={{ transitionDelay: "100ms" }}
                  >
                    {industries[currentIndustry].metric}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:bg-slate-100 hover:shadow-lg hover:shadow-white/10 focus:outline-none focus:ring-4 focus:ring-white/20">
                Our Solutions
              </button>

              <button className="group px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-500/20">
                View Case Studies
              </button>
            </div>

            {/* Enterprise Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md">
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-1">$2.5M+</div>
                <div className="text-xs text-slate-500">Avg. Savings</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-1">50+</div>
                <div className="text-xs text-slate-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-1">98%</div>
                <div className="text-xs text-slate-500">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
              {/* Main 3D Floating Object */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  animation: "float-3d 8s ease-in-out infinite",
                }}
              >
                <div
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full relative transform transition-all duration-1000 hover:scale-105"
                  style={{
                    background: `
                      conic-gradient(
                        from 0deg,
                        #8b5cf6 0deg,
                        #a855f7 72deg,
                        #c084fc 144deg,
                        #e879f9 216deg,
                        #f0abfc 288deg,
                        #8b5cf6 360deg
                      )
                    `,
                    filter:
                      "drop-shadow(0 25px 50px rgba(139, 92, 246, 0.3)) drop-shadow(0 0 80px rgba(168, 85, 247, 0.2))",
                  }}
                >
                  {/* Glass Overlay Effect */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/20"></div>

                  {/* Inner Glow */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-400/30 to-blue-600/30 blur-xl"></div>

                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white/70">
                      <div className="text-lg font-light mb-1">
                        Data Analytics
                      </div>
                      <div className="text-xs opacity-60">3D Visualization</div>
                    </div>
                  </div>

                  {/* Rotating Ring */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                    style={{
                      animation: "rotate-ring 12s linear infinite",
                    }}
                  >
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
              <div
                className="absolute top-40 right-10 w-3 h-3 bg-cyan-300 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-20 left-16 w-1 h-1 bg-white rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-3d {
          0%,
          100% {
            transform: translateY(0px) rotateY(0deg);
          }
          25% {
            transform: translateY(-10px) rotateY(5deg);
          }
          50% {
            transform: translateY(-15px) rotateY(0deg);
          }
          75% {
            transform: translateY(-10px) rotateY(-5deg);
          }
        }

        @keyframes rotate-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
