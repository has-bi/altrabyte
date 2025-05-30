// components/CTASection.js - Updated with consistent backgrounds
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
    <section className="section section-light">
      <div className="container">
        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 border border-indigo-400 shadow-lg">
          {/* Background pattern */}
          <div className="absolute inset-0">
            <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              {/* Centered Content */}
              <div className="space-y-8">
                {/* Heading and Description */}
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
                    Ready to Act on Your Data?
                  </h2>
                  <p className="text-lg lg:text-xl text-indigo-50 leading-relaxed max-w-3xl mx-auto">
                    Reach out for a free discovery session and explore how our
                    solutions could work in your business context.
                  </p>
                </div>

                {/* CTA Form */}
                <div className="max-w-md mx-auto space-y-6">
                  {!isSubmitted ? (
                    <>
                      {/* Email Input */}
                      <div className="flex items-center rounded-2xl bg-white/90 backdrop-blur-sm p-2 border border-white/20 hover:border-white/40 focus-within:border-white transition-all duration-200">
                        <div className="flex items-center pl-4 pr-2">
                          <svg
                            className="h-5 w-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                          </svg>
                        </div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Enter your company email"
                          className="flex-1 bg-transparent py-3 pr-4 text-gray-900 placeholder-gray-500 outline-none"
                        />
                      </div>

                      {/* CTA Button */}
                      <button
                        className="w-full px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 hover:-translate-y-0.5 transform shadow-lg"
                        onClick={() => {
                          // Handle discovery call booking
                          console.log("Book Discovery Call clicked");
                        }}
                      >
                        Schedule My Consultation
                      </button>
                    </>
                  ) : (
                    /* Success State */
                    <div className="text-center space-y-4 py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                        <svg
                          className="w-8 h-8 text-white"
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
                      <h3 className="text-xl font-semibold text-white">
                        Perfect! Check your inbox
                      </h3>
                      <p className="text-indigo-100">
                        We'll send you our enterprise data strategy guide and
                        schedule a personalized consultation.
                      </p>
                    </div>
                  )}

                  {/* Social Proof */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
