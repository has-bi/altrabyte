// components/Header.js - Apple Minimalist Style
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const navItems = [
    { name: "Work", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const solutions = [
    {
      name: "Data & Analytics",
      href: "/solutions/data-analytics",
      description: "Transform data into insights",
    },
    {
      name: "AI Solutions",
      href: "/solutions/gen-ai",
      description: "Intelligent automation",
    },
    {
      name: "Process Automation",
      href: "/solutions/rpa-automation",
      description: "Streamline operations",
    },
  ];

  return (
    <header className="backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Clean and minimal */}
          <Link href={"/"}>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg">
                <Image
                  src="/images/Logogram - Purple.png"
                  alt="AltraByte Logo"
                  width={250}
                  height={250}
                  priority
                  className="w-full h-full object-contain align-middle justify-center mx-auto"
                />
              </div>
              <span className="text-lg font-semibold text-primary">
                AltraByte
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Solutions Dropdown - Now First */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className="text-primary text-sm hover:text-gray-800 transition-colors duration-200 flex items-center space-x-1 font-medium">
                <span>Solutions</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Minimal Dropdown */}
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-4">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="text-sm font-medium text-primary mb-1">
                        {solution.name}
                      </div>
                      <div className="text-xs text-muted">
                        {solution.description}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary text-sm hover:text-gray-800 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA - Subtle */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-flex btn-primary">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary hover:text-gray-800 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="space-y-1">
              {/* Solutions First in Mobile Too */}
              <div className="pb-3 mb-3 border-b border-gray-100">
                <div className="text-primary text-sm font-medium mb-3">
                  Solutions
                </div>
                {solutions.map((solution) => (
                  <a
                    key={solution.name}
                    href={solution.href}
                    className="block py-2 hover:bg-gray-50 transition-colors rounded-lg px-3 -mx-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="text-sm font-medium text-primary">
                      {solution.name}
                    </div>
                    <div className="text-xs text-muted">
                      {solution.description}
                    </div>
                  </a>
                ))}
              </div>

              {/* Other Nav Items */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-primary text-sm hover:text-gray-800 transition-colors py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-100">
                <button className="w-full btn-primary">Get Started</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
