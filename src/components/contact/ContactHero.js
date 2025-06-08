// components/contact/ContactHero.js
"use client";
import React from "react";

const ContactHero = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 mb-8">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span className="text-primary text-sm font-medium">
              Usually respond within 24 hours
            </span>
          </div>

          {/* Main Headlines */}
          <div className="space-y-6 mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
              Let's Talk Through Your Use&nbsp;Case
            </h1>

            <p className="text-xl sm:text-2xl text-secondary leading-relaxed max-w-3xl mx-auto">
              No hard pitch. No bloated scope.
            </p>

            <p className="text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
              Just a 30-minute call to explore whether we're the right&nbsp;fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
