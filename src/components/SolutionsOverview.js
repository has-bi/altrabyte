// components/SolutionsOverview.js - Mobile-First Layout
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
  ChevronDown,
} from "lucide-react";

const SolutionDifferentSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const solutions = [
    {
      title: "Domain expertise",
      description:
        "We've worked in E-commerce, Retail, Logistics, EdTech, FMCG, Renewable Energy, and Banking. No long onboarding. No blank stares.",
      icon: Users,
      color: "emerald",
      gradient: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
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
      borderColor: "border-blue-200",
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
      borderColor: "border-purple-200",
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
      borderColor: "border-orange-200",
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
      borderColor: "border-green-200",
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

  const toggleExpanded = (index) => {
    if (window.innerWidth < 768) {
      // Mobile only
      setExpandedCard(expandedCard === index ? null : index);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section bg-white relative overflow-hidden"
    >
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4 lg:mb-6 animate-slide-up">
            Built for Business. Delivered Fast.
          </h2>

          <p className="text-lg lg:text-xl text-secondary max-w-3xl mx-auto leading-relaxed animate-slide-up-delayed">
            We combine deep domain knowledge with sharp technical execution — so
            you don't have to choose between speed and substance.
          </p>
        </div>

        {/* Mobile-First Solutions Grid */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
          {/* Mobile: Stack Vertically */}
          <div className="block md:hidden space-y-4">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${solution.delay}ms` }}
              >
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    solution.borderColor
                  } ${
                    expandedCard === index
                      ? "shadow-lg border-opacity-100"
                      : "shadow-sm border-opacity-50"
                  }`}
                >
                  {/* Mobile Card Header - Always Visible */}
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() => toggleExpanded(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {/* Icon */}
                        <div
                          className={`w-12 h-12 ${solution.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          {React.createElement(solution.icon, {
                            className: `w-6 h-6 ${solution.textColor}`,
                            strokeWidth: 1.5,
                          })}
                        </div>

                        {/* Title & Metric */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-primary leading-tight">
                            {solution.title}
                          </h3>
                          <span
                            className={`inline-block mt-1 px-2 py-1 ${solution.bgColor} ${solution.textColor} rounded-md text-xs font-medium`}
                          >
                            {solution.metric}
                          </span>
                        </div>
                      </div>

                      {/* Expand Arrow */}
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          expandedCard === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Mobile Expandable Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      expandedCard === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-4 pb-4">
                      <p className="text-secondary leading-relaxed text-sm">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div
                    className={`h-1 bg-gradient-to-r ${
                      solution.gradient
                    } transition-all duration-300 ${
                      expandedCard === index ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal Layout (Preserved) */}
          <div className="hidden md:block space-y-6">
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
                  className={`relative bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden ${
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
                      className={`w-8 h-8 ${solution.bgColor} rounded-full flex items-center justify-center transition-all duration-300`}
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
          <button className="group inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-primary hover:bg-primary-hover text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 transform">
            <span className="relative z-10">Learn about our approach</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-sm text-muted mt-4">
            Ready to experience the difference? Let's discuss your project.
          </p>
        </div>
      </div>

      {/* Custom Animations - Enhanced */}
      <style jsx>{`
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

        .animate-icon-float {
          animation: icon-float 2s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-up-delayed {
          animation: slide-up 0.8s ease-out 0.2s both;
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
