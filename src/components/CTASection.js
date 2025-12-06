"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SERVICE_LINKS = [
  {
    label: "Data Foundation & Intelligence",
    pill: "",
  },
  {
    label: "AI Automation",
    pill: "",
  },
  {
    label: "Robotic Process Automation (RPA)",
    pill: "",
  },
];

export default function FinalCTASection() {
  return (
    <section className="bg-[#F7F3FF] px-4 py-16 sm:px-10 md:px-16 lg:px-[40px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 rounded-[48px] bg-white/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur">
        <div className="relative flex w-full flex-col overflow-hidden rounded-[40px] bg-[#7863FC] text-white shadow-[0px_60px_80px_rgba(63,52,130,0.35)]">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -right-12 bottom-0 h-72 w-72 rounded-full bg-[#A398FF]/30 blur-3xl" />

          <div className="relative flex flex-col gap-12 px-6 py-12 sm:px-12 lg:px-20">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex max-w-2xl flex-col gap-5 text-left">
                <h2 className="text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-[48px] lg:text-[56px]">
                  Ready to Build Your Foundation?
                </h2>
                <p className="text-lg leading-[1.6] tracking-[-0.01em] text-white/85 sm:text-xl">
                  Book your Foundation Audit call. We'll tell you exactly where you are, what you actually need, and how long it really takes.
                </p>
              </div>

              <div className="relative mx-auto flex w-full max-w-[500px] flex-col items-center gap-6 rounded-[16px] border-4 border-white/80 bg-[#F2EFFF] px-8 py-10 text-center text-[#122232] shadow-[20px_40px_40px_rgba(0,0,0,0.12)]">
                <div className="text-[20px] font-semibold leading-[1.5] tracking-[-0.01em]">
                  No sales pitch. No generic proposals. Just the truth about your data reality.
                </div>
                <div className="h-px w-full border-t border-dashed border-[#122232]/40" />
                <Link
                  href="/start-your-audit"
                  className="group inline-flex w-full items-center justify-between rounded-full bg-[#122232] px-6 py-4 text-left text-white transition-all duration-300 hover:bg-[#1a2e42] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span className="text-[18px] font-semibold tracking-[-0.01em]">
                    Book Your Foundation Audit
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 border-t border-dashed border-white/40 pt-10 text-center">
              <p className="text-2xl font-medium leading-[1.3] tracking-[-0.01em] text-white">
                &ldquo;Most consultants tell you what you want to hear. We tell you what you need to know.&rdquo;
              </p>
            </div>
          </div>

          <div className="relative flex w-full flex-col gap-6 bg-[#9382FD] px-6 py-10 sm:px-10 lg:px-16">
            <div className="text-center text-xl font-semibold tracking-[-0.01em]">
              Our Core Services
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              {SERVICE_LINKS.map((service) => (
                <div
                  key={service.label}
                  className="flex flex-1 items-center justify-center rounded-full border border-white/70 bg-white/5 px-6 py-4 text-center"
                >
                  <span className="text-lg font-semibold tracking-[-0.01em]">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
