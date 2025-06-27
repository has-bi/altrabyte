// components/portfolio/PortfolioCTA.js - Mobile-First Enhanced
"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const PortfolioCTA = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto px-4">
          {/* Mobile-Optimized CTA Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl">
            {/* Mobile-Friendly Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-40 h-40 md:w-80 md:h-80 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-48 h-48 md:w-96 md:h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
            </div>

            {/* Mobile-First Content */}
            <div className="relative z-10 text-center py-12 md:py-16 px-6 md:px-8">
              <div className="space-y-6 md:space-y-8">
                {/* Mobile-Optimized Headlines */}
                <div className="space-y-3 md:space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                    Want to build results like these?
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-indigo-100 leading-relaxed max-w-2xl mx-auto">
                    Let's talk through your use case — we'll tell you if we can
                    help in 30 minutes.
                  </p>
                </div>

                {/* Mobile-Friendly CTA Button */}
                <div className="pt-2 md:pt-4">
                  <a
                    href="/contact"
                    className="group inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 hover:text-indigo-700 transition-all duration-300 hover:-translate-y-1 transform shadow-xl text-sm md:text-base min-h-[44px] md:min-h-[48px]"
                  >
                    <span>Book a 30-min clarity call</span>
                    <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Mobile-Optimized Secondary Info */}
                <div className="pt-2 md:pt-4">
                  <p className="text-xs md:text-sm text-indigo-200 opacity-90">
                    No sales pitch • Free consultation • 30 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;
