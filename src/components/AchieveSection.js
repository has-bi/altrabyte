// components/AchieveSection.js - What We Help You Achieve
"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Brain,
  Bot,
  TrendingUp,
  ArrowRight,
  Clock,
  BarChart3,
  Zap,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const AchieveSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const achievements = [
    {
      id: "decisions",
      title: "Faster Decisions",
      icon: Brain,
      color: "blue",
      gradient: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      benefits: [
        {
          text: "Real-time dashboards with business logic, not vanity metrics",
          icon: BarChart3,
        },
        {
          text: "Executive-ready in weeks, not quarters",
          icon: Clock,
        },
      ],
    },
    {
      id: "automation",
      title: "Less Manual Work",
      icon: Bot,
      color: "indigo",
      gradient: "from-indigo-400 to-pink-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      benefits: [
        {
          text: "Automate your reports, validations, reconciliations",
          icon: Zap,
        },
        {
          text: "Seamless RPA + Gen AI workflows integrated with your tools",
          icon: Bot,
        },
      ],
    },
    {
      id: "teams",
      title: "Smarter Teams",
      icon: TrendingUp,
      color: "emerald",
      gradient: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      benefits: [
        {
          text: "Your team levels up while we build",
          icon: Users,
        },
        {
          text: "Transparent, maintainable solutions — no magic, no mystery",
          icon: CheckCircle2,
        },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          // Stagger the animation of each card
          achievements.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 300);
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
      className="section bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
            What We Help You Achieve
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Real outcomes that transform how your business operates and grows.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`group relative transition-all duration-700 ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative bg-white rounded-3xl p-8 border-2 ${
                    achievement.borderColor
                  } transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden ${
                    hoveredCard === index
                      ? "shadow-2xl scale-[1.02]"
                      : "shadow-lg"
                  }`}
                >
                  {/* Animated Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Header */}
                  <div className="mb-8">
                    <div
                      className={`w-16 h-16 ${
                        achievement.bgColor
                      } rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                        visibleCards.includes(index)
                          ? "animate-icon-bounce"
                          : ""
                      } ${hoveredCard === index ? "animate-pulse-soft" : ""}`}
                    >
                      {React.createElement(achievement.icon, {
                        className: `w-8 h-8 ${achievement.textColor} transition-all duration-300`,
                        strokeWidth: 1.5,
                      })}
                    </div>

                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-gray-900 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-4">
                    {achievement.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className={`flex items-start space-x-4 transition-all duration-500 ${
                          visibleCards.includes(index)
                            ? "animate-benefit-slide"
                            : ""
                        }`}
                        style={{
                          animationDelay: `${
                            index * 300 + benefitIndex * 150
                          }ms`,
                        }}
                      >
                        <div
                          className={`flex-shrink-0 w-8 h-8 ${
                            achievement.bgColor
                          } rounded-lg flex items-center justify-center mt-1 transition-all duration-300 ${
                            hoveredCard === index ? "animate-icon-wiggle" : ""
                          }`}
                        >
                          {React.createElement(benefit.icon, {
                            className: `w-4 h-4 ${achievement.textColor}`,
                            strokeWidth: 1.5,
                          })}
                        </div>
                        <p className="text-secondary leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {benefit.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                      achievement.gradient
                    } transition-all duration-500 ${
                      hoveredCard === index ? "w-full" : "w-0"
                    }`}
                  ></div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                      hoveredCard === index
                        ? `shadow-lg shadow-${achievement.color}-500/20`
                        : ""
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
            <span className="relative z-10">Explore our solutions</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-sm text-muted mt-4">
            Ready to transform your business? Let's start with a conversation.
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes icon-bounce {
          0% {
            transform: scale(0) rotate(-180deg);
          }
          60% {
            transform: scale(1.1) rotate(10deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes benefit-slide {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(2deg);
          }
          75% {
            transform: translateY(4px) rotate(-1deg);
          }
        }

        @keyframes icon-wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(3deg);
          }
          75% {
            transform: rotate(-3deg);
          }
        }

        @keyframes pulse-soft {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes stat-reveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
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
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-icon-bounce {
          animation: icon-bounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-benefit-slide {
          animation: benefit-slide 0.6s ease-out both;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .animate-icon-wiggle {
          animation: icon-wiggle 0.6s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        .animate-stat-reveal {
          animation: stat-reveal 0.6s ease-out both;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
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

export default AchieveSection;
