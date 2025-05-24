// components/CTASection.js - Compelling & Minimal with Highlighted Background
"use client";

import React from "react";

const FinalCTASection = () => {
  return (
    <section className="section-end bg-gradient-to-br from-indigo-500 via-indigo-200 to-indigo-300 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative">
        {/* Main CTA Content */}
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary leading-tight">
              Ready to unlock the value
              <br />
              hidden in your data?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Most enterprises are sitting on goldmines of untapped data. We
              help you turn that data into competitive advantages, cost savings,
              and growth opportunities.
            </p>
          </div>

          {/* Value Proposition Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-sm">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-primary">
                What you get in our free consultation:
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-medium text-primary">
                        Data Opportunity Assessment
                      </div>
                      <div className="text-xs text-muted">
                        We'll identify your biggest data opportunities
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-medium text-primary">
                        ROI Estimation
                      </div>
                      <div className="text-xs text-muted">
                        Ballpark savings and efficiency gains
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-medium text-primary">
                        Strategic Roadmap
                      </div>
                      <div className="text-xs text-muted">
                        Step-by-step transformation plan
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-medium text-primary">
                        Industry Benchmarks
                      </div>
                      <div className="text-xs text-muted">
                        How you compare to industry leaders
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button className="btn-primary shadow-lg hover:shadow-xl">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
