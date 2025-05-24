// components/CTASection.js - Minimalist Redesign
"use client";

import React from "react";

const FinalCTASection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Main CTA Content */}
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-semibold text-primary leading-tight">
              Ready to transform
              <br />
              your data strategy?
            </h2>

            <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
              Schedule a free discovery session and explore how our enterprise
              solutions can accelerate your digital transformation.
            </p>
          </div>

          {/* Value Points - Clean List */}
          <div className="space-y-4 max-w-lg mx-auto">
            {[
              "30-minute strategy consultation",
              "Custom ROI analysis for your industry",
              "No commitment, just strategic insights",
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-secondary"
              >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="inline-flex items-center px-12 py-4 bg-primary text-white font-medium text-lg rounded-2xl hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 transform shadow-sm hover:shadow-md">
              Schedule Consultation
              <svg
                className="ml-3 w-5 h-5"
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

          {/* Trust Signal */}
          <div className="pt-8">
            <p className="text-muted">
              Join 500+ enterprises that chose AltraByte for their data
              transformation
            </p>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="flex justify-center items-center space-x-8 mt-16 pt-12 border-t border-gray-100 text-sm text-muted">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Typically respond within 4 hours</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-200"></div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span>Free consultation, no commitment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
