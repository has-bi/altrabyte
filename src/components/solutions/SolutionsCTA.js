// components/solutions/SolutionsCTA.js
"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const SolutionsCTA = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Indigo CTA Card with Focus Effects */}
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-700 rounded-3xl shadow-2xl">
            {/* Subtle background pattern for focus */}
            <div className="absolute inset-0">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
            </div>

            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 ring-offset-0"></div>

            {/* Main Content */}
            <div className="relative z-10 text-center py-16 px-8 lg:py-20 lg:px-16">
              <div className="space-y-8">
                {/* Headlines - Apple minimal sizing */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-tight">
                    Not sure where to&nbsp;start?
                  </h2>
                  <p className="text-lg sm:text-xl lg:text-xl text-indigo-100 leading-relaxed max-w-4xl mx-auto font-normal">
                    We can walk through your data mess, automation wishlist, or
                    dashboard priorities in 30&nbsp;minutes.
                  </p>
                  <p className="text-base text-indigo-200 font-normal">
                    No slides. No&nbsp;fluff.
                  </p>
                </div>

                {/* CTA Button with Focus Effect */}
                <div className="pt-4">
                  <a
                    href="/contact"
                    className="group relative inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 hover:text-indigo-700 transition-all duration-300 hover:-translate-y-1 transform shadow-xl text-base hover:shadow-white/25 hover:shadow-2xl"
                  >
                    {/* Button glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                    <span className="relative z-10">
                      Book a 30-min clarity call
                    </span>
                    <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
