// components/SolutionsOverview.js - Updated with consistent backgrounds
"use client";
import React, { useState } from "react";

const SolutionsOverview = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: "data-analytics",
      title: "Data & Analytics",
      description:
        "Transform scattered data into unified insights with real-time dashboards and automated reporting.",
      features: [
        "Custom dashboard development",
        "Automated data pipelines",
        "Real-time monitoring",
        "Predictive analytics",
      ],
      metric: "3x faster insights",
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      description:
        "Deploy intelligent automation and custom AI assistants trained on your business data.",
      features: [
        "Custom AI assistants",
        "Document automation",
        "Intelligent workflows",
        "Natural language queries",
      ],
      metric: "50% efficiency gain",
    },
    {
      id: "process-automation",
      title: "Process Automation",
      description:
        "Eliminate repetitive tasks with intelligent RPA solutions that integrate with existing systems.",
      features: [
        "End-to-end automation",
        "System integration",
        "Quality assurance",
        "Performance monitoring",
      ],
      metric: "60% cost reduction",
    },
  ];

  return (
    <section className="section section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
            Our Solutions
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Enterprise-grade solutions designed to accelerate your digital
            transformation.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Navigation */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-2">
              {solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                    activeTab === index
                      ? "bg-gray-50 shadow-sm border border-gray-200"
                      : "hover:bg-gray-50/50"
                  }`}
                >
                  <div className="font-medium text-primary mb-1">
                    {solution.title}
                  </div>
                  <div className="text-xs text-muted">{solution.metric}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary">
                    {solutions[activeTab].title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {solutions[activeTab].description}
                  </p>
                </div>

                <div className="space-y-3">
                  {solutions[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span className="text-sm text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button className="btn-tertiary">Learn more →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
