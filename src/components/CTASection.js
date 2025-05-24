// components/CTASection.js - Consistent with AltraByte Design System
"use client";

import React, { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = () => {
    if (email.trim()) {
      setIsSubmitted(true);
      // Reset after 3 seconds for demo purposes
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEmailSubmit();
    }
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Main CTA Card - Consistent with design system */}
        <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm">
          {/* Subtle background pattern - minimalist approach */}
          <div className="absolute inset-0">
            <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary-light opacity-30 blur-3xl"></div>
            <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-secondary-light opacity-30 blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-4xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Left Content - Following typography system */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-primary leading-tight">
                      Ready to unlock the value
                      <br />
                      <span className="text-secondary">
                        hidden in your data?
                      </span>
                    </h2>
                    <p className="text-lg text-secondary leading-relaxed">
                      Most enterprises are sitting on goldmines of untapped
                      data. We help you turn that data into competitive
                      advantages, cost savings, and growth opportunities.
                    </p>
                  </div>

                  {/* Trust indicators - consistent with other sections */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>SOC 2 Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Enterprise Ready</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>Results in 30 days</span>
                    </div>
                  </div>
                </div>

                {/* Right CTA Form - Consistent with design system */}
                <div className="space-y-6">
                  {!isSubmitted ? (
                    <>
                      {/* Email Capture - Following component patterns */}
                      <div className="space-y-4">
                        <div className="flex items-center rounded-2xl bg-gray-50 p-2 border border-gray-200 hover:border-gray-300 focus-within:border-primary transition-all duration-200">
                          <div className="flex items-center pl-4 pr-2">
                            <svg
                              className="h-5 w-5 text-muted"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                            </svg>
                          </div>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Enter your company email"
                            className="flex-1 bg-transparent py-3 pr-4 text-primary placeholder-muted outline-none"
                          />
                          <button
                            onClick={handleEmailSubmit}
                            className="btn-primary ml-2"
                            disabled={!email.trim()}
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Alternative CTA - Following button system */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="btn-secondary flex-1">
                          Book Discovery Call
                        </button>
                        <button className="btn-tertiary flex items-center justify-center space-x-1">
                          <span>View Case Studies</span>
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </>
                  ) : (
                    /* Success State - Consistent with design patterns */
                    <div className="text-center space-y-4 py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-light rounded-full mb-4">
                        <svg
                          className="w-8 h-8 text-secondary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        Perfect! Check your inbox
                      </h3>
                      <p className="text-secondary">
                        We'll send you our enterprise data strategy guide and
                        schedule a personalized consultation.
                      </p>
                    </div>
                  )}

                  {/* Social Proof - Consistent typography */}
                  <div className="text-center">
                    <p className="text-xs text-muted">
                      Join 50+ enterprises already transforming their data
                      strategy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators - Following existing patterns */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-secondary mb-6">
            Trusted by industry leaders
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {/* Placeholder logos - replace with actual client logos */}
            {[
              "Enterprise A",
              "Enterprise B",
              "Enterprise C",
              "Enterprise D",
            ].map((company, index) => (
              <div
                key={index}
                className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-xs font-medium text-muted">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
