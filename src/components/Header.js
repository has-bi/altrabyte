// components/Header.js - Mobile-First Redesign
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

  const navItems = [
    { name: "Solutions", href: "/solutions", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const solutions = [
    {
      name: "Data Analytics",
      href: "/solutions#data-analytics",
      description: "Transform data into insights",
    },
    {
      name: "AI Automation",
      href: "/solutions#ai-automation",
      description: "Intelligent workflows",
    },
    {
      name: "Process Optimization",
      href: "/solutions#process-optimization",
      description: "Streamline operations",
    },
  ];

  const handleSolutionClick = (href) => {
    setIsMenuOpen(false);
    router.push(href);
  };

  const handleCTAClick = () => {
    setIsMenuOpen(false);
    router.push("/contact");
  };

  return (
    <>
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo - Mobile Optimized */}
            <Link
              href="/"
              className="flex items-center space-x-2 flex-shrink-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-8 h-8 rounded-lg">
                <Image
                  src="/images/Logogram - Purple.png"
                  alt="AltraByte"
                  width={32}
                  height={32}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-semibold text-primary">
                AltraByte
              </span>
            </Link>

            {/* Desktop Navigation - Hidden on Mobile */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>

                  {/* Desktop Solutions Dropdown */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                      {solutions.map((solution) => (
                        <button
                          key={solution.name}
                          onClick={() => handleSolutionClick(solution.href)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="font-medium text-gray-900 text-sm">
                            {solution.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {solution.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Menu Toggle */}
            <div className="flex items-center space-x-3">
              {/* Desktop CTA */}
              <button
                onClick={handleCTAClick}
                className="hidden sm:inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5"
              >
                Get Started
              </button>

              {/* Mobile Menu Button - Larger Touch Target */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 -mr-1 text-gray-600 hover:text-primary transition-colors duration-200 hover:bg-gray-50 rounded-lg"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slide Down */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 shadow-lg">
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              {/* Solutions Section - Expanded by Default in Mobile */}
              <div className="space-y-2">
                <div className="px-3 py-2">
                  <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Solutions
                  </span>
                </div>
                {solutions.map((solution) => (
                  <button
                    key={solution.name}
                    onClick={() => handleSolutionClick(solution.href)}
                    className="w-full text-left px-6 py-3 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 rounded-lg"
                  >
                    <div className="font-medium">{solution.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {solution.description}
                    </div>
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="my-4 h-px bg-gray-100"></div>

              {/* Other Navigation Items */}
              {navItems
                .filter((item) => !item.hasDropdown)
                .map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <button
                  onClick={handleCTAClick}
                  className="w-full px-4 py-3 bg-primary text-white font-medium text-center rounded-lg hover:bg-primary-hover transition-all duration-200"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
