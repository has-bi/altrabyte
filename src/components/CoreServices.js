"use client";

import { useState, useEffect } from "react";
import { Blocks, Bot, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "Data Foundation & Intelligence",
    description:
      "From Excel chaos to intelligent decision-making systems. We build the data backbone that keeps every decision grounded and repeatable.",
    icon: Blocks,
  },
  {
    title: "Artificial Intelligence Automation",
    description:
      "Smart automation that removes manual work. Document processing, customer service, marketing workflows—delivered with measurable ROI.",
    icon: BrainCircuit,
  },
  {
    title: "Robotic Process Automation (RPA)",
    description:
      "Automate the repetitive work that drains team productivity. Data scraping, consolidation, and reporting that keeps running 24/7.",
    icon: Bot,
  },
];

const CoreServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-white py-16 px-6 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mx-auto mb-12 max-w-3xl text-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-[32px] font-semibold leading-[1.28] tracking-[-0.01em] text-[#122232] md:text-[36px] lg:text-[40px]">
            Our Core Services
          </h2>
          <p className="mt-4 text-[18px] leading-[1.55] tracking-[-0.01em] text-[#657083] md:text-[20px]">
            Transform messy data and manual workflows into intelligent systems
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group relative flex flex-col gap-6 rounded-2xl border border-[#E6E8EC] bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary-100/70 hover:shadow-[0_12px_32px_rgba(120,99,252,0.15)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Number Badge */}
              <span className="absolute right-6 top-6 text-sm font-semibold text-[#9CA3AF]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-[#E6E8EC] bg-white transition-all duration-300 group-hover:border-primary-200 group-hover:bg-primary-50">
                <service.icon
                  className="h-8 w-8 text-primary-500"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-3 text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#122232]">
                  {service.title}
                </h3>
                <p className="text-[16px] leading-[1.6] tracking-[-0.01em] text-[#4D5A68]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CoreServices;
