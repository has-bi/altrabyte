"use client";

import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Say hello" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E7E9EB] bg-white px-6 py-10 sm:px-12 lg:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 text-[#122232] sm:flex-row sm:justify-between">
        <div className="flex items-center gap-5 text-sm">
          <Image
            src="/images/Logo.png"
            alt="AltraByte"
            width={180}
            height={40}
            priority
            className="h-10 w-auto"
          />
          <div className="h-[20px] w-px bg-[#E7E9EB]" />
          <span className="text-[15px] leading-[1.4] tracking-[-0.01em] text-[#414E5B]">
            data-first delivery partner
          </span>
        </div>

        <nav className="flex items-center gap-8 text-sm">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] leading-[1.4] tracking-[-0.01em] text-[#122232] transition-colors hover:text-[#7863FC]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
