// components/solutions/SolutionsProof.js
"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const SolutionsProof = () => {
  const proofTiles = [
    {
      id: 1,
      title: "Youvit — AI-Powered PO Automation",
      result: "Automated 1000+ purchase orders per month",
      category: "AI Automation",
      link: "/portfolio/youvit-po-automation",
    },
    {
      id: 2,
      title: "Paragon Beauty — Executive Dashboards",
      result: "7 business dashboards delivered in 3.5 weeks",
      category: "Data Analytics",
      link: "/portfolio/paragon-dashboards",
    },
    {
      id: 3,
      title: "Retail Distributor — Seller Center Bot",
      result: "Reduced manual reporting by 40 hours/month",
      category: "Process Automation",
      link: "/portfolio/seller-center-bot",
    },
    {
      id: 4,
      title: "Confidential FMCG — Sales Route Optimizer",
      result: "Cut field travel time by 80% using predictive logic",
      category: "Data Analytics",
      link: "/portfolio/sales-route-optimizer",
    },
    {
      id: 5,
      title: "Education Client — GenAI Tool for Ops Team",
      result: "Reduced internal support load by 60%",
      category: "AI Automation",
      link: "/portfolio/education-genai-tool",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
            Real Outcomes. Real Business Impact.
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            These aren't hypothetical use cases. These are real results from
            real clients.
          </p>
        </div>

        {/* Proof Tiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {proofTiles.map((tile) => (
            <a key={tile.id} href={tile.link} className="group block">
              <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="space-y-4">
                  {/* Category Indicator */}
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-secondary rounded-full text-xs font-medium">
                    {tile.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-primary leading-tight group-hover:text-gray-900 transition-colors duration-200">
                    {tile.title}
                  </h3>

                  {/* Result */}
                  <p className="text-secondary font-medium leading-relaxed">
                    {tile.result}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="btn-tertiary text-sm group-hover:text-primary transition-colors duration-200">
                      See project
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a href="/portfolio" className="btn-secondary">
            View All Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsProof;
