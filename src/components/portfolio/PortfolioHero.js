// components/portfolio/PortfolioHero.js
"use client";
import React from "react";

const PortfolioHero = () => {
  return (
    <section className="min-h-[60vh] flex items-center bg-[#E1E1FC] relative overflow-hidden">
      {/* Background Video - following same pattern as AboutHero */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 blur-sm scale-105 object-cover"
        >
          <source src="/videos/hero-portfolio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/15"></div>
      </div>

      {/* Background Elements - consistent with other heroes */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-semibold text-primary leading-tight">
              Real Results From Real Work
            </h1>
            <p className="text-xl lg:text-2xl text-primary leading-relaxed max-w-3xl mx-auto">
              From AI automation to executive dashboards,
              <br />
              here's how we've helped businesses move faster, work smarter, and
              scale cleanly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
