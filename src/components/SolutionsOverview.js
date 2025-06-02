// components/SolutionDifferentSection.js - How We're Different
"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  Users,
  Zap,
  Brain,
  Cog,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const SolutionDifferentSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const solutions = [
    {
      title: "Domain expertise",
      description:
        "We've worked in e-commerce, retail, logistics, and banking. No long onboarding. No blank stares.",
      icon: Users,
      color: "emerald",
      gradient: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      metric: "5+ Industries",
      delay: 0,
    },
    {
      title: "3-week delivery",
      description:
        "Rapid delivery cycles. You get insights while others are still scheduling kickoffs.",
      icon: Zap,
      color: "blue",
      gradient: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      metric: "21 Days Max",
      delay: 200,
    },
    {
      title: "Business-first thinking",
      description:
        "We understand your data sources, your goals, and your internal politics.",
      icon: Brain,
      color: "purple",
      gradient: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      metric: "Strategic Focus",
      delay: 400,
    },
    {
      title: "Automation that works",
      description:
        "AI and RPA tools that actually run in production — not in slide decks.",
      icon: Cog,
      color: "orange",
      gradient: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      metric: "Production Ready",
      delay: 600,
    },
    {
      title: "Knowledge transfer",
      description:
        "We build. Your team learns. No black boxes. No vendor lock-in.",
      icon: GraduationCap,
      color: "green",
      gradient: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      metric: "Full Transparency",
      delay: 800,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          // Stagger the animation of each solution
          solutions.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="section bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 animate-slide-up">
            Built for Business. Delivered Fast.
          </h2>

          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed animate-slide-up-delayed">
            We combine deep domain knowledge with sharp technical execution — so
            you don't have to choose between speed and substance.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${solution.delay}ms` }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className={`relative bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden ${
                    hoveredItem === index
                      ? "shadow-xl scale-[1.02]"
                      : "shadow-sm"
                  }`}
                >
                  {/* Animated Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Check Icon */}
                  <div className="absolute top-6 left-6">
                    <div
                      className={`w-8 h-8 ${
                        solution.bgColor
                      } rounded-full flex items-center justify-center transition-all duration-300 ${
                        visibleItems.includes(index)
                          ? "animate-check-bounce"
                          : ""
                      }`}
                    >
                      <CheckCircle2
                        className={`w-5 h-5 ${solution.textColor} transition-all duration-300`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-start space-x-6 pl-14">
                    {/* Main Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-semibold text-primary group-hover:text-gray-900 transition-colors duration-300">
                          {solution.title}
                        </h3>
                        <span
                          className={`px-3 py-1 ${solution.bgColor} ${
                            solution.textColor
                          } rounded-full text-xs font-medium transition-all duration-300 ${
                            hoveredItem === index ? "animate-pulse" : ""
                          }`}
                        >
                          {solution.metric}
                        </span>
                      </div>

                      <p className="text-secondary leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {solution.description}
                      </p>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 ${
                        solution.bgColor
                      } rounded-xl flex items-center justify-center transition-all duration-500 ${
                        hoveredItem === index
                          ? "animate-icon-float scale-110"
                          : ""
                      }`}
                    >
                      {React.createElement(solution.icon, {
                        className: `w-8 h-8 ${solution.textColor} transition-all duration-300`,
                        strokeWidth: 1.5,
                      })}
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                      solution.gradient
                    } transition-all duration-300 ${
                      hoveredItem === index ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="group inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 transform">
            <span className="relative z-10">Learn about our approach</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-sm text-muted mt-4">
            Ready to experience the difference? Let's discuss your project.
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes check-bounce {
          0% {
            transform: scale(0) rotate(-45deg);
          }
          60% {
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes icon-float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-4px) rotate(2deg);
          }
          75% {
            transform: translateY(2px) rotate(-1deg);
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

        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-check-bounce {
          animation: check-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-icon-float {
          animation: icon-float 2s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-up-delayed {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
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

export default SolutionDifferentSection;
