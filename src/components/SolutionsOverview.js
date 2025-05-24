// components/SolutionsOverview.js - Minimalist Redesign
"use client";
import React, { useState } from "react";

const SolutionsOverview = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: "data-analytics",
      title: "Data & Analytics",
      description:
        "Transform raw data into strategic business intelligence with real-time insights and automated reporting.",
      features: [
        "Real-time dashboards",
        "Automated data pipelines",
        "Performance analytics",
        "Custom reporting",
      ],
      metric: "3x faster insights",
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      description:
        "Deploy intelligent automation and custom AI assistants trained specifically on your business data.",
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
        "Eliminate repetitive tasks and streamline operations with intelligent process automation.",
      features: [
        "Workflow automation",
        "System integration",
        "Process optimization",
        "Quality assurance",
      ],
      metric: "60% cost reduction",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade solutions designed to accelerate your digital
            transformation.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Navigation - Clean Tabs */}
          <div className="lg:col-span-2">
            <div className="space-y-2">
              {solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    activeTab === index
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <div className="font-semibold text-lg mb-2">
                    {solution.title}
                  </div>
                  <div
                    className={`text-sm ${
                      activeTab === index ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {solution.metric}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Panel - Minimal */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-3xl p-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {solutions[activeTab].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {solutions[activeTab].description}
                  </p>
                </div>

                <div className="space-y-3">
                  {solutions[activeTab].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3"
                      style={{
                        animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-2xl hover:bg-gray-800 transition-colors duration-200">
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4"
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
              </div>
            </div>
          </div>
        </div>

        {/* Stats - Simplified */}
        <div className="text-center mt-20 pt-12 border-t border-gray-100">
          <div className="flex justify-center items-center space-x-16 text-gray-500">
            <div>
              <span className="font-semibold text-gray-900 text-lg">500+</span>
              <span className="ml-2">Projects</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900 text-lg">50+</span>
              <span className="ml-2">Enterprise Clients</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900 text-lg">99.9%</span>
              <span className="ml-2">Uptime</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionsOverview;
