// components/solutions/SolutionsIntro.js
"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

const SolutionsIntro = () => {
  const industries = [
    "E-commerce",
    "Retail",
    "Logistics",
    "EdTech",
    "FMCG",
    "Renewable Energy",
    "Banking",
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Mini Headline */}
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
              We don't just offer services. We solve business tension.
            </h2>

            <div className="space-y-6 text-lg text-secondary max-w-3xl mx-auto">
              <p className="font-medium text-primary">
                You don't need more tools.
              </p>
              <p>
                You need someone who actually understands your operations—and
                delivers results fast.
              </p>
              <p>
                We bring sharp technical execution plus real domain fluency in:
              </p>
            </div>
          </div>

          {/* Industries Grid */}
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl py-2 px-4 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300 whitespace-nowrap">
                  <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors duration-300">
                    {industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsIntro;
