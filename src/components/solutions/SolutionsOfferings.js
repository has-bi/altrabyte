// components/solutions/SolutionsOfferings.js
"use client";
import React, { useState, useEffect } from "react";
import { BarChart3, Bot, RotateCcw, ArrowRight } from "lucide-react";

const SolutionsOfferings = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null); // For programmatic expansion

  const solutions = [
    {
      id: "data-analytics",
      title: "Data Analytics & Business Intelligence",
      tagline: "Transform data into decisions",
      icon: BarChart3,
      image: "/images/analytics-dashboard.jpg", // Add your image path
      problems: [
        "You can't trust your dashboards",
        "Your team's still buried in Excel",
        'No one agrees on "the right number"',
      ],
      solutions: [
        "Rapid dashboard development with built-in business context",
        "Automated reporting with source control plus logic transparency",
        "Data consolidation across systems (ERP, POS, eCom, finance)",
      ],
      result:
        "Executives get clarity. Teams get consistency. Everyone moves faster.",
      ctaText: "See sample dashboards",
      ctaLink: "/portfolio?filter=data-analytics",
    },
    {
      id: "ai-automation",
      title: "Generative AI & Workflow Automation",
      tagline: "Automate with intelligence",
      icon: Bot,
      image: "/images/ai-automation.jpg", // Add your image path
      problems: [
        "You want to try AI but don't know where to start",
        "Your ops are loaded with repetitive tasks",
        "Document processing eats hours every week",
      ],
      solutions: [
        "Chatbots that actually understand your workflows",
        "AI tools that extract, validate, and route documents",
        "Internal tools powered by GenAI to reduce busywork",
      ],
      result: "Hours saved. Fewer errors. And AI that feels useful—not fluffy.",
      ctaText: "Explore AI use cases",
      ctaLink: "/portfolio?filter=ai-solutions",
    },
    {
      id: "process-optimization",
      title: "RPA & Process Optimization",
      tagline: "Scale your operations",
      icon: RotateCcw,
      image: "/images/process-automation.jpg", // Add your image path
      problems: [
        "Your team is stuck doing work that should be automated",
        "Systems don't talk to each other",
        "Manual errors cause rework and delays",
      ],
      solutions: [
        "Custom RPA bots for things like order validation, pricing, email triage",
        "Cross-platform integration (Seller Center, ERP, WhatsApp, etc.)",
        "Operational workflows rebuilt to scale",
      ],
      result:
        "30–50% faster processes. Happier teams. Ops leaders who sleep better.",
      ctaText: "See automation stories",
      ctaLink: "/portfolio?filter=automation",
    },
  ];

  // Listen for expand card events from hero navigation
  useEffect(() => {
    const handleExpandCard = (event) => {
      const { solutionId } = event.detail;
      const cardIndex = solutions.findIndex(
        (solution) => solution.id === solutionId
      );

      if (cardIndex !== -1) {
        setExpandedCard(cardIndex);
        setHoveredCard(cardIndex);

        // Auto-collapse after 5 seconds for better UX
        setTimeout(() => {
          setExpandedCard(null);
          setHoveredCard(null);
        }, 5000);
      }
    };

    window.addEventListener("expandSolutionCard", handleExpandCard);

    return () => {
      window.removeEventListener("expandSolutionCard", handleExpandCard);
    };
  }, []);

  // Determine if card should be shown as expanded
  const isCardExpanded = (index) => {
    return hoveredCard === index || expandedCard === index;
  };

  return (
    <section id="solutions-offerings" className="section bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Cards Container - 3 rows, stacked vertically */}
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`group cursor-pointer transition-all duration-700 ease-out ${
                  isCardExpanded(index)
                    ? "transform scale-102 z-10"
                    : hoveredCard !== null && hoveredCard !== index
                    ? "transform scale-98 opacity-80"
                    : ""
                }`}
                onMouseEnter={() => {
                  if (expandedCard === null) {
                    // Only allow hover if not programmatically expanded
                    setHoveredCard(index);
                  }
                }}
                onMouseLeave={() => {
                  if (expandedCard === null) {
                    // Only allow hover out if not programmatically expanded
                    setHoveredCard(null);
                  }
                }}
              >
                <div
                  className={`bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-700 ${
                    isCardExpanded(index)
                      ? "shadow-2xl border-gray-200"
                      : "shadow-lg hover:shadow-xl"
                  }`}
                >
                  {/* Card Content */}
                  <div
                    className={`transition-all duration-700 ${
                      isCardExpanded(index) ? "p-8 lg:p-12" : "p-6 lg:p-8"
                    }`}
                  >
                    {/* Always visible content */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Left: Icon and Text */}
                      <div className="flex items-start space-x-4 flex-1">
                        <div
                          className={`bg-gray-50 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            isCardExpanded(index) ? "w-16 h-16" : "w-12 h-12"
                          }`}
                        >
                          {React.createElement(solution.icon, {
                            className: `text-primary transition-all duration-500 ${
                              isCardExpanded(index) ? "w-8 h-8" : "w-6 h-6"
                            }`,
                            strokeWidth: 1.5,
                          })}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`font-bold text-primary leading-tight transition-all duration-500 ${
                              isCardExpanded(index)
                                ? "text-2xl lg:text-3xl mb-3"
                                : "text-xl lg:text-2xl mb-2"
                            }`}
                          >
                            {solution.title}
                          </h3>
                          <p
                            className={`text-secondary transition-all duration-500 ${
                              isCardExpanded(index)
                                ? "text-lg opacity-100"
                                : "text-base opacity-90"
                            }`}
                          >
                            {solution.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Right: Arrow indicator */}
                      <div
                        className={`transition-all duration-500 ${
                          isCardExpanded(index) ? "opacity-0" : "opacity-60"
                        }`}
                      >
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    {/* Expanded Content - Show when hovered OR programmatically expanded */}
                    <div
                      className={`transition-all duration-700 ${
                        isCardExpanded(index)
                          ? "opacity-100 max-h-[2000px]"
                          : "opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      {/* Image - Below title and subtitle */}
                      <div className="mb-8">
                        <div className="rounded-2xl overflow-hidden">
                          <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            {/* Replace this with actual image */}
                            <div className="text-center">
                              {React.createElement(solution.icon, {
                                className:
                                  "w-16 h-16 text-gray-400 mx-auto mb-3",
                                strokeWidth: 1,
                              })}
                              <p className="text-sm text-gray-500 font-medium">
                                {solution.tagline}
                              </p>
                            </div>
                            {/* 
                            Uncomment this when you have actual images:
                            <img 
                              src={solution.image} 
                              alt={solution.title}
                              className="w-full h-full object-cover"
                            />
                            */}
                          </div>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        {/* What We Solve */}
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-4">
                            What We Solve:
                          </h4>
                          <ul className="space-y-2">
                            {solution.problems.map((problem, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-secondary leading-relaxed">
                                  {problem}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What We Do */}
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-4">
                            What We Do:
                          </h4>
                          <ul className="space-y-2">
                            {solution.solutions.map((solutionItem, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-5 h-5 bg-gray-100 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                </div>
                                <span className="text-secondary leading-relaxed">
                                  {solutionItem}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Result & CTA */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-3">
                            Result:
                          </h4>
                          <p className="text-primary font-medium leading-relaxed mb-6">
                            {solution.result}
                          </p>
                        </div>

                        {/* CTA */}
                        <a
                          href={solution.ctaLink}
                          className="group w-full flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-xl transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          <span>{solution.ctaText}</span>
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOfferings;
