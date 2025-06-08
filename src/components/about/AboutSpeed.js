// src/components/about/AboutSpeed.js
"use client";
import React, { useState } from "react";
import { BarChart3, Zap, TrendingUp, CheckCircle2 } from "lucide-react";

const AboutSpeed = () => {
  const [hoveredDeliverable, setHoveredDeliverable] = useState(null);

  const deliverables = [
    {
      title: "Dashboards",
      timeframe: "3–4 weeks",
      icon: BarChart3,
      color: "emerald",
    },
    {
      title: "AI & automation",
      timeframe: "5–7 weeks",
      icon: Zap,
      color: "blue",
    },
    {
      title: "Complex RPA/integration",
      timeframe: "Scoped to fit business reality",
      icon: TrendingUp,
      color: "purple",
    },
  ];

  const sprintFeatures = [
    "You'll see **working output within days**",
    "We don't waste time on bloated documentation",
    "We focus on **useful delivery, not slide decks**",
  ];

  const colorClasses = {
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
    },
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-6">
              We Move Fast, Because We Don't Start From Zero
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
              We're fast — not because we skip steps, but because we already
              know your data and industry context.
            </p>
          </div>

          {/* Delivery Timeline */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-primary mb-8 text-center">
              Here's how delivery typically looks:
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {deliverables.map((deliverable, index) => {
                const colors = colorClasses[deliverable.color];
                return (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredDeliverable(index)}
                    onMouseLeave={() => setHoveredDeliverable(null)}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colors.border}`}
                    >
                      <div className="text-center space-y-4">
                        <div
                          className={`w-16 h-16 ${
                            colors.bg
                          } rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 ${
                            hoveredDeliverable === index ? "scale-110" : ""
                          }`}
                        >
                          {React.createElement(deliverable.icon, {
                            className: `w-8 h-8 ${colors.text}`,
                            strokeWidth: 1.5,
                          })}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-primary group-hover:text-gray-800 transition-colors duration-300">
                            {deliverable.title}
                          </h4>
                          <p
                            className={`text-sm font-medium ${colors.text} mt-2`}
                          >
                            {deliverable.timeframe}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sprint Methodology - New Layout */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-primary mb-2">
                We work in focused, feedback-driven sprints:
              </h3>
            </div>

            {/* Horizontal Feature Cards */}
            <div className="space-y-4 mb-8">
              {sprintFeatures.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <CheckCircle2 className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg text-secondary leading-relaxed group-hover:text-primary transition-colors duration-300">
                          {feature.replace(/\*\*/g, "")}{" "}
                          {/* Remove markdown formatting */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Statement */}
            <div className="text-center">
              <div className="inline-flex items-center px-8 py-4 bg-primary-light rounded-2xl border border-primary/20">
                <Zap className="w-6 h-6 text-primary mr-3" />
                <p className="text-primary font-semibold text-lg">
                  Less time explaining. More time building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSpeed;
