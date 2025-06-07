// components/solutions/SolutionsCTA.js
"use client";
import React from "react";
import { Clock, MessageCircle, ArrowRight } from "lucide-react";

const SolutionsCTA = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 border border-indigo-400 shadow-lg">
            {/* Background pattern */}
            <div className="absolute inset-0">
              <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative px-8 py-16 lg:px-16 lg:py-20">
              <div className="text-center space-y-8">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <MessageCircle
                      className="w-8 h-8 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Headlines */}
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
                    Not sure where to&nbsp;start?
                  </h2>
                  <p className="text-lg lg:text-xl text-indigo-50 leading-relaxed max-w-3xl mx-auto">
                    We can walk through your data mess, automation wishlist, or
                    dashboard priorities in 30&nbsp;minutes.
                  </p>
                  <p className="text-base text-indigo-100 font-medium">
                    No slides. No&nbsp;fluff.
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-6 text-indigo-100">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">30-minute session</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">Direct consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm">Free assessment</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="/contact"
                    className="group inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 hover:-translate-y-0.5 transform shadow-lg"
                  >
                    <span className="relative z-10">
                      Book a 30-min clarity call
                    </span>
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Trust Signal */}
                <p className="text-sm text-indigo-200 max-w-md mx-auto">
                  Join 50+ companies that chose clarity over confusion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
