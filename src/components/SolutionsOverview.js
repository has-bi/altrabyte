"use client";
import React, { useState } from "react";

const SolutionsOverview = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: "data-analytics",
      title: "Data & Analytics",
      description:
        "Transform raw data into strategic business intelligence with automated pipelines and real-time insights.",
      features: [
        "Real-time dashboards & reporting",
        "Automated data transformation",
        "Performance analytics & ROI tracking",
        "Customer journey mapping",
      ],
      metric: "3x faster decisions",
    },
    {
      id: "rpa-automation",
      title: "RPA Automation",
      description:
        "Eliminate repetitive tasks with intelligent automation across your business processes.",
      features: [
        "Process automation & optimization",
        "Document processing workflows",
        "System integration & synchronization",
        "Automated reporting & alerts",
      ],
      metric: "60% cost reduction",
    },
    {
      id: "gen-ai",
      title: "Gen AI Solutions",
      description:
        "Deploy custom AI assistants and intelligent document automation trained on your data.",
      features: [
        "Custom AI assistants",
        "Document automation & generation",
        "Natural language data queries",
        "Intelligent knowledge management",
      ],
      metric: "50% efficiency gain",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade solutions designed to accelerate your digital
            transformation
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Navigation */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 sticky top-8">
              {solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeTab === index
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <div className="font-semibold text-lg mb-1">
                    {solution.title}
                  </div>
                  <div
                    className={`text-sm ${
                      activeTab === index ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {solution.metric}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 min-h-[400px]">
              <div className="space-y-8">
                {/* Title & Description */}
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                    {solutions[activeTab].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {solutions[activeTab].description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {solutions[activeTab].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 opacity-0 animate-fade-in"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors duration-200">
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

        {/* Bottom Stats */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center space-x-8 lg:space-x-12 text-sm text-gray-500">
            <div>
              <span className="font-semibold text-gray-900">500+</span> Projects
              Delivered
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div>
              <span className="font-semibold text-gray-900">50+</span>{" "}
              Enterprise Clients
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div>
              <span className="font-semibold text-gray-900">99.9%</span> Uptime
              SLA
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default SolutionsOverview;
