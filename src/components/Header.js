// components/Header.js - Enhanced with Fixed Position & Glassmorphism
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect for enhanced styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    // { name: "Insights", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const solutions = [
    {
      name: "Data & Analytics",
      href: "/solutions/data-analytics",
      description: "Transform data into insights",
      solutionId: "data-analytics",
    },
    {
      name: "AI Solutions",
      href: "/solutions/gen-ai",
      description: "Intelligent automation",
      solutionId: "ai-automation",
    },
    {
      name: "Process Automation",
      href: "/solutions/rpa-automation",
      description: "Streamline operations",
      solutionId: "process-optimization",
    },
  ];

  const handleSolutionClick = (solutionId) => {
    // Navigate to solutions page
    router.push("/solutions");

    // Close dropdown
    setIsSolutionsOpen(false);
    setIsMenuOpen(false);

    // Wait for navigation, then trigger card expansion
    setTimeout(() => {
      // Scroll to solutions offerings section
      const solutionsSection = document.getElementById("solutions-offerings");
      if (solutionsSection) {
        solutionsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Trigger card expansion
        setTimeout(() => {
          const event = new CustomEvent("expandSolutionCard", {
            detail: { solutionId },
          });
          window.dispatchEvent(event);
        }, 800);
      }
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/50 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white/50 backdrop-blur-sm border-b border-white/20"
      }`}
    >
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
            {/* Solutions Dropdown - Enhanced with better z-index */}
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

              {/* Enhanced Dropdown with better backdrop */}
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 py-4 z-50">
                  {solutions.map((solution) => (
                    <button
                      key={solution.solutionId}
                      onClick={() => handleSolutionClick(solution.solutionId)}
                      className="w-full text-left block px-4 py-3 hover:bg-gray-50/80 transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="text-sm font-medium text-primary mb-1">
                        {solution.name}
                      </div>
                      <div className="text-xs text-muted">
                        {solution.description}
                      </div>
                    </button>
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

          {/* CTA - Enhanced with better styling */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-flex btn-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary hover:text-gray-800 transition-colors hover:bg-gray-100/50 rounded-lg"
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

        {/* Enhanced Mobile Navigation with better backdrop */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 py-4 bg-white/95 backdrop-blur-md">
            <nav className="space-y-1">
              {/* Solutions First in Mobile Too */}
              <div className="pb-3 mb-3 border-b border-gray-100">
                <div className="text-primary text-sm font-medium mb-3">
                  Solutions
                </div>
                {solutions.map((solution) => (
                  <button
                    key={solution.solutionId}
                    onClick={() => handleSolutionClick(solution.solutionId)}
                    className="w-full text-left block py-2 hover:bg-gray-50/80 transition-all duration-200 rounded-lg px-3 -mx-3 hover:translate-x-1"
                  >
                    <div className="text-sm font-medium text-primary">
                      {solution.name}
                    </div>
                    <div className="text-xs text-muted">
                      {solution.description}
                    </div>
                  </button>
                ))}
              </div>

              {/* Other Nav Items */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-primary text-sm hover:text-gray-800 transition-colors py-2 font-medium hover:translate-x-1 transition-transform duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-100">
                <button className="w-full btn-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
