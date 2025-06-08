// src/components/about/AboutCTA.js
"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 rounded-3xl shadow-2xl">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center py-16 px-8">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
                  Want to see if we know your business?
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/contact"
                    className="group inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 hover:text-indigo-700 transition-all duration-300 hover:-translate-y-1 transform shadow-xl"
                  >
                    <span>Book a 30-min clarity call</span>
                    <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <span className="text-indigo-200 font-medium">or</span>

                  <a
                    href="/solutions"
                    className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 transform"
                  >
                    <span>Explore our solutions</span>
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

export default AboutCTA;
