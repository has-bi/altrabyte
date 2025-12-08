// components/Header.js - Simple Clean Design
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Foundation Audit", href: "/foundation-audit" },
    { name: "Transformation Stories", href: "/transformation-stories" },
    // { name: "Why Foundation First", href: "/foundation-first" },
    { name: "About", href: "/about" },
    { name: "Start Your Audit", href: "/start-your-audit" },
  ];

  return (
    <>
      {/* Simple Clean Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white h-[72px] border-b-2 border-neutral-50 ">
        <div className="max-w-[1440px] mx-auto px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8">
                <Image
                  src="/images/Logogram - Purple.png"
                  alt="AltraByte Logo"
                  width={32}
                  height={32}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-neutral-800 tracking-tight">
                AltraByte
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1 text-[15px] font-medium text-neutral-800 transition-colors border-b-2 ${
                    pathname === item.href
                      ? "font-semibold border-[#7863fc]"
                      : "border-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <Link
                href="/start-your-audit"
                className="hidden lg:inline-flex items-center px-6 py-2.5 bg-neutral-500 text-white text-[15px] font-medium rounded-full hover:bg-neutral-700 transition-colors min-w-[160px] justify-center"
              >
                Diagnose My Data
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-neutral-600"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Simple Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-50">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-2 py-2 text-base font-medium ${
                    pathname === item.href
                      ? "text-primary-500"
                      : "text-neutral-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/start-your-audit"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4 px-4 py-3 bg-neutral-500 text-white text-center rounded-lg"
              >
                Diagnose My Data
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
