// components/PainSection.js - Scroll-Triggered Pain Section
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Clock, Target, BarChart3, Zap, Users } from "lucide-react";

const PainSection = () => {
  const [currentCard, setCurrentCard] = useState(-1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const painPoints = [
    {
      text: "You spend more time educating consultants than solving problems.",
      icon: Users,
      subtitle: "Knowledge Transfer Overload",
    },
    {
      text: "Six-month projects deliver dashboards no one uses.",
      icon: Clock,
      subtitle: "Time & Resource Waste",
    },
    {
      text: "You get numbers without context.",
      icon: BarChart3,
      subtitle: "Data Without Insight",
    },
    {
      text: "The tech is complex. The results? Underwhelming.",
      icon: Zap,
      subtitle: "Complex Solutions, Simple Problems",
    },
    {
      text: "Your team keeps explaining the business — again and again.",
      icon: Target,
      subtitle: "Endless Repetition Cycle",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRect.height;
      const viewportHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      // Section is in view when it's between these bounds
      if (sectionTop < viewportHeight && sectionBottom > 0) {
        // Calculate scroll progress through the section
        const scrollableHeight = sectionHeight - viewportHeight;
        const scrolled = Math.max(0, -sectionTop);
        const progress = Math.min(1, scrolled / scrollableHeight);

        setScrollProgress(progress);

        // Determine which card should be active based on progress
        const cardIndex = Math.floor(progress * painPoints.length);
        const clampedIndex = Math.max(
          -1,
          Math.min(painPoints.length - 1, cardIndex)
        );

        setCurrentCard(clampedIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [painPoints.length]);

  return (
    <section ref={sectionRef} className="min-h-[200vh] bg-gray-50 relative">
      {/* Sticky Content Container */}
      <div className="sticky top-0 min-h-screen flex items-center py-20">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-6 max-w-4xl mx-auto leading-tight">
              Most Data Projects Take Forever and Miss the Point
            </h2>

            {/* Progress Indicator */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center justify-between text-sm text-muted mb-2">
                <span>Problems Identified</span>
                <span>
                  {currentCard >= 0 ? currentCard + 1 : 0}/{painPoints.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full transition-all duration-500 ease-out relative"
                  style={{
                    width: `${((currentCard + 1) / painPoints.length) * 100}%`,
                  }}
                >
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Display Area */}
          <div className="max-w-2xl mx-auto min-h-[300px] flex items-center justify-center">
            {currentCard >= 0 ? (
              <div
                key={currentCard}
                className="w-full transform transition-all duration-700 ease-out animate-card-enter"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center animate-icon-bounce">
                        {React.createElement(painPoints[currentCard].icon, {
                          className: "w-8 h-8 text-red-600",
                          strokeWidth: 1.5,
                        })}
                      </div>
                    </div>

                    {/* Subtitle */}
                    <h3 className="text-lg font-semibold text-red-600 animate-text-fade">
                      {painPoints[currentCard].subtitle}
                    </h3>

                    {/* Main Text */}
                    <p className="text-xl text-secondary leading-relaxed animate-text-slide">
                      {painPoints[currentCard].text}
                    </p>

                    {/* Card Number */}
                    <div className="flex justify-center pt-4">
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                        {currentCard + 1} of {painPoints.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted">
                <p className="text-lg">Scroll down to reveal the problems...</p>
                <div className="mt-4 animate-bounce">
                  <svg
                    className="w-6 h-6 mx-auto text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Closing Statement */}
          {currentCard >= painPoints.length - 1 && (
            <div className="text-center mt-16 animate-closing-fade">
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-red-50 rounded-2xl border border-red-100 animate-pulse-gentle">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <p className="text-lg font-medium text-primary">
                  You're not just losing time. You're losing momentum.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes card-enter {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes icon-bounce {
          0% {
            transform: scale(0);
            rotate: -180deg;
          }
          70% {
            transform: scale(1.1);
            rotate: 10deg;
          }
          100% {
            transform: scale(1);
            rotate: 0deg;
          }
        }

        @keyframes text-fade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-slide {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes closing-fade {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.1);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
          }
        }

        .animate-card-enter {
          animation: card-enter 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-icon-bounce {
          animation: icon-bounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-text-fade {
          animation: text-fade 0.6s ease-out 0.2s both;
        }

        .animate-text-slide {
          animation: text-slide 0.6s ease-out 0.4s both;
        }

        .animate-closing-fade {
          animation: closing-fade 0.8s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PainSection;
