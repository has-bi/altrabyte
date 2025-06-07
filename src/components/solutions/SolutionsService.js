// src/components/solutions/SolutionService.js
import React from "react";
import Link from "next/link";

export default function SolutionService({ service }) {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Column - Icon & Title */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">{service.icon}</div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl lg:text-4xl font-light mb-12 leading-tight text-gray-900">
              {service.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
              {/* What We Solve */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-6">
                  What We Solve:
                </h3>
                <ul className="space-y-4">
                  {service.problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">
                        {problem}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Do */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-6">
                  What We Do:
                </h3>
                <ul className="space-y-4">
                  {service.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-6">
                  Result:
                </h3>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <p className="text-green-800 leading-relaxed font-medium">
                    {service.result}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-start">
              <Link
                href={service.ctaLink}
                className="inline-flex items-center gap-3 bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-xl font-medium transition-colors group"
              >
                <span>{service.ctaText}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="relative mt-24">
        <div className="w-full h-px bg-gray-200"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
