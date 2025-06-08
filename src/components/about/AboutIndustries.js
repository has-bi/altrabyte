// src/components/about/AboutIndustries.js
"use client";
import React from "react";

const AboutIndustries = () => {
  const industries = [
    {
      name: "E-commerce",
      details: "Shopee, Tokopedia, Shopify, TikTok, Lazada, Blibli",
      focus: "Route optimization, SLA tracking, WMS",
      color: "emerald",
    },
    {
      name: "Logistics & Fulfillment",
      details: "Last-mile delivery, warehouse operations",
      focus: "Route optimization, SLA tracking, WMS",
      color: "blue",
    },
    {
      name: "Retail & FMCG",
      details: "Traditional and modern trade channels",
      focus: "Sell-in, Sell-out, Sell-through, promos, channel analytics",
      color: "purple",
    },
    {
      name: "Banking & Finance",
      details: "Digital banking, fintech platforms",
      focus: "Risk data, compliance logic, omnichannel sales",
      color: "orange",
    },
  ];

  const colorClasses = {
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
    },
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
              Industries We Know Deeply
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, index) => {
              const colors = colorClasses[industry.color];
              return (
                <div key={index} className="group">
                  <div
                    className={`bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colors.border}`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 ${colors.bg} rounded-full border-2 ${colors.border}`}
                        ></div>
                        <h3 className="text-xl font-semibold text-primary group-hover:text-gray-800 transition-colors duration-300">
                          {industry.name}
                        </h3>
                      </div>
                      <p className="text-sm text-secondary leading-relaxed">
                        {industry.details}
                      </p>
                      <div className={`${colors.bg} rounded-lg p-3`}>
                        <p
                          className={`text-sm font-medium ${colors.text} leading-relaxed`}
                        >
                          {industry.focus}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIndustries;
