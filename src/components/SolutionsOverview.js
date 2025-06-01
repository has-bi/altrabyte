// components/SolutionsOverview.js - Enhanced with bullet icons
"use client";
import React, { useState } from "react";
import {
  Activity,
  Database,
  Target,
  TestTube,
  Users,
  MessageSquare,
  FileText,
  Search,
  Mail,
  HelpCircle,
  ShoppingCart,
  FileBarChart,
  Headphones,
  Receipt,
  Share2,
} from "lucide-react";

const SolutionsOverview = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: "data-analytics",
      title: "Data & Analytics",
      description:
        "From unified dashboards to automated data pipelines, turn raw information into decisions.",
      features: [
        {
          text: "Real-time reporting & dashboards",
          icon: Activity,
        },
        {
          text: "Automated data collection & transformation",
          icon: Database,
        },
        {
          text: "Attribution modeling for better ROI tracking",
          icon: Target,
        },
        {
          text: "A/B testing and performance insights",
          icon: TestTube,
        },
        {
          text: "Customer journey mapping & segmentation",
          icon: Users,
        },
      ],
      metric:
        "From unified dashboards to automated data pipelines, turn raw information into decisions.",
    },
    {
      id: "gen-ai",
      title: "Gen AI",
      description:
        "Smart assistants and document automation tools trained on your workflows and vocabulary.",
      features: [
        {
          text: "Custom AI assistants for internal or client use",
          icon: MessageSquare,
        },
        {
          text: "Automated document generation & summarization",
          icon: FileText,
        },
        {
          text: "Natural language query tools for your data",
          icon: Search,
        },
        {
          text: "Email and message drafting with brand voice tuning",
          icon: Mail,
        },
        {
          text: "Knowledge base search with context-aware answers",
          icon: HelpCircle,
        },
      ],
      metric:
        "Smart assistants and document automation tools trained on your workflows and vocabulary.",
    },
    {
      id: "rpa-automation",
      title: "RPA Automation",
      description:
        "Custom bots that eliminate repetitive tasks across eCommerce, operations, and social platforms.",
      features: [
        {
          text: "Order processing and inventory syncing",
          icon: ShoppingCart,
        },
        {
          text: "Automated report generation",
          icon: FileBarChart,
        },
        {
          text: "Customer support ticket routing",
          icon: Headphones,
        },
        {
          text: "Invoice creation and reconciliation",
          icon: Receipt,
        },
        {
          text: "Social media posting & comment moderation",
          icon: Share2,
        },
      ],
      metric:
        "Custom bots that eliminate repetitive tasks across eCommerce, operations, and social platforms.",
    },
  ];

  return (
    <section className="section section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
            Solutions Overview
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Explore our enterprise-grade solutions across Data & Analytics, Gen
            AI, and RPA — all designed to reduce inefficiency, boost decision
            speed, and scale with your business.
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
                {/* Title */}
                <h3 className="text-xl font-semibold text-primary">
                  {solutions[activeTab].title}
                </h3>

                {/* Description */}
                <p className="text-secondary leading-relaxed">
                  {solutions[activeTab].description}
                </p>

                {/* Features */}
                <div className="space-y-4">
                  {solutions[activeTab].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mt-0.5">
                        {React.createElement(feature.icon, {
                          className: "w-4 h-4 text-gray-600",
                          strokeWidth: 1.5,
                        })}
                      </div>
                      <span className="text-sm text-secondary leading-relaxed">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
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
