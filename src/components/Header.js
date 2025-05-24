// components/Header.js
"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ];

  const solutions = [
    {
      name: "Data & Analytics",
      href: "/solutions/data-analytics",
      description: "Transform data into actionable insights",
      icon: "📊",
    },
    {
      name: "Gen AI",
      href: "/solutions/gen-ai",
      description: "AI-powered automation and intelligence",
      icon: "🤖",
    },
    {
      name: "RPA Automation",
      href: "/solutions/rpa-automation",
      description: "Streamline processes with smart automation",
      icon: "⚡",
    },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="grid grid-cols-3 gap-1 w-8 h-8">
              <div className="bg-blue-500 rounded-sm"></div>
              <div className="bg-blue-400 rounded-sm"></div>
              <div className="bg-blue-600 rounded-sm"></div>
              <div className="bg-blue-400 rounded-sm"></div>
              <div className="bg-blue-500 rounded-sm"></div>
              <div className="bg-blue-300 rounded-sm"></div>
              <div className="bg-blue-600 rounded-sm"></div>
              <div className="bg-blue-400 rounded-sm"></div>
              <div className="bg-blue-500 rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              AltraByte
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group flex items-center">
                SOLUTIONS
                <svg
                  className="ml-1 w-4 h-4 transition-transform duration-200"
                  style={{
                    transform: isSolutionsOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>

              {/* Dropdown Menu */}
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                  <div className="px-2">
                    {solutions.map((solution) => (
                      <a
                        key={solution.name}
                        href={solution.href}
                        className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <div className="text-2xl mr-3 mt-1">
                          {solution.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {solution.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* View All Solutions */}
                  <div className="border-t border-gray-100 mt-2 pt-2 px-2">
                    <a
                      href="/solutions"
                      className="flex items-center justify-center p-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                      View All Solutions
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <button className="hidden sm:inline-flex items-center px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
              LET'S TALK
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Solutions */}
              <div className="py-2">
                <div className="text-sm font-medium text-gray-900 px-2 py-2 border-b border-gray-100 mb-2">
                  SOLUTIONS
                </div>
                {solutions.map((solution) => (
                  <a
                    key={solution.name}
                    href={solution.href}
                    className="flex items-center py-3 px-4 hover:bg-gray-50 transition-colors rounded-md mx-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg mr-3">{solution.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {solution.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {solution.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <button className="mt-4 mx-2 w-auto flex items-center justify-center px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all">
                LET'S TALK
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
