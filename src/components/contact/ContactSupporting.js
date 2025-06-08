// components/contact/ContactSupporting.js
"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

const ContactSupporting = () => {
  const topics = [
    "Your goals and challenges",
    "What kind of solution might fit",
    "Whether we can deliver value fast",
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* What We'll Cover */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-primary">
                We'll cover:
              </h2>

              {/* Topics List */}
              <ul className="space-y-4">
                {topics.map((topic, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle2
                        className="w-4 h-4 text-primary"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-lg text-secondary leading-relaxed">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>

              {/* No Pressure Statement */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-base text-muted font-medium">
                  If we're not the right fit, we'll tell you — no&nbsp;pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupporting;
