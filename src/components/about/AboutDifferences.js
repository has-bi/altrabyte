// src/components/about/AboutDifferences.js
"use client";
import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, Sparkles, Brain, Users, Shield } from "lucide-react";

const AboutDifferences = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const differences = [
    {
      title: "10+ years of real-world experience across industries",
      icon: Sparkles,
      color: "emerald",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
    },
    {
      title: "Pre-built understanding of your data sources and systems",
      icon: Brain,
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      title: "Solutions designed with your internal users in mind",
      icon: Users,
      color: "purple",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      title: "No 'black box' deliverables — you'll understand what we build",
      icon: Shield,
      color: "orange",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
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

        // Determine how many cards should be visible based on progress
        const totalCards = differences.length;
        const cardsToShow = Math.floor(progress * (totalCards + 1)); // +1 so we get 0,1,2,3,4

        // Update visible cards array
        const newVisibleCards = [];
        for (let i = 0; i < Math.min(cardsToShow, totalCards); i++) {
          newVisibleCards.push(i);
        }
        setVisibleCards(newVisibleCards);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [differences.length]);

  return (
    <section ref={sectionRef} className="min-h-[250vh] bg-gray-50 relative">
      {/* Sticky Content Container */}
      <div className="sticky top-0 min-h-screen flex items-center py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header - Always Visible */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-6">
                Why We're Different
              </h2>
              <p className="text-lg text-secondary">
                <span className="font-semibold text-primary">
                  We bring business-first thinking to data and automation.
                </span>
                <br />
                That means:
              </p>
            </div>

            {/* Cards Container */}
            <div className="space-y-6">
              {differences.map((difference, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: visibleCards.includes(index)
                      ? `${index * 200}ms`
                      : "0ms",
                  }}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${difference.borderColor}`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Icon - Left Side */}
                      <div
                        className={`w-12 h-12 ${difference.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300`}
                      >
                        {React.createElement(difference.icon, {
                          className: `w-6 h-6 ${difference.textColor}`,
                          strokeWidth: 1.5,
                        })}
                      </div>

                      {/* Text Content - Vertically Centered */}
                      <div className="flex-1 flex items-center">
                        <p className="text-lg text-primary leading-relaxed">
                          {difference.title}
                        </p>
                      </div>

                      {/* Check Icon - Right Side */}
                      <CheckCircle2
                        className={`w-6 h-6 ${difference.textColor} transition-all duration-300`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Completion Message */}
            {visibleCards.length >= differences.length && (
              <div className="text-center mt-12 animate-fade-in">
                <div className="inline-flex items-center space-x-3 px-8 py-4 bg-indigo-50 rounded-2xl border border-indigo-200">
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                  <p className="text-lg font-medium text-indigo-800">
                    That's how we deliver faster, smarter solutions.
                  </p>
                </div>
              </div>
            )}

            {/* Scroll Hint */}
            {visibleCards.length === 0 && (
              <div className="text-center text-muted animate-pulse">
                <p className="text-lg">
                  Scroll down to discover our differences...
                </p>
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
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
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

export default AboutDifferences;
