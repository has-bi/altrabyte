// components/Footer.js - Minimalist Apple Style
"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  const footerLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/altrabyte/",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
            {/* Logo & Description */}
            <div className="space-y-4 max-w-sm">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg">
                  <Image
                    src="/images/Logogram - Purple.png"
                    alt="AltraByte Logo"
                    width={250}
                    height={250}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg font-semibold text-primary">
                  AltraByte
                </span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">
                Transforming enterprise data into competitive advantages through
                advanced analytics and intelligent automation.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted hover:text-primary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium text-secondary hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} AltraByte. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
