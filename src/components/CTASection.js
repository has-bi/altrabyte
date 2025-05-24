import React from "react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Main card container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900 via-orange-800 to-orange-600">
          {/* Abstract flowing background overlay */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute -left-20 -top-20 h-96 w-96 rotate-45 transform rounded-full bg-gradient-to-br from-purple-800 to-transparent blur-3xl"></div>
            <div className="absolute -right-20 top-0 h-80 w-80 rotate-12 transform rounded-full bg-gradient-to-br from-orange-500 to-transparent blur-2xl"></div>
            <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 transform rounded-full bg-gradient-to-t from-orange-700 to-transparent blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-4xl">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                {/* Left content */}
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-semibold text-primary leading-tight">
                    Ready to unlock the value
                    <br />
                    hidden in your data?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Most enterprises are sitting on goldmines of untapped data.
                    We help you turn that data into competitive advantages, cost
                    savings, and growth opportunities.
                  </p>
                </div>

                {/* Right search/CTA section */}
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                  {/* Input field */}
                  <div className="relative flex-1">
                    <div className="flex items-center rounded-2xl bg-white/95 p-4 backdrop-blur-sm">
                      <div className="mr-3">
                        <svg
                          className="h-5 w-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your company email"
                        className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 outline-none"
                      />
                      <button className="ml-2 rounded-lg bg-gray-900 p-2 text-white hover:bg-gray-800">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="rounded-2xl bg-gray-900 px-6 py-4 font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg">
                    Book Discovery Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
