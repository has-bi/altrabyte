"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const highlights = [
  {
    id: "retail",
    logo: "/images/clients/paragon.svg",
    title: "How a national retailer compressed the insight loop to 48 hours",
    description:
      "Moved from weekly fire drills and contradictory spreadsheets to a single operating dashboard that drives replenishment, merch, and finance decisions.",
    cta: "See the retail play",
    image: "/images/portfolio/retail-team.jpg",
    imageVariant: "standard",
  },
  {
    id: "fintech",
    logo: "/images/clients/amser.svg",
    title: "Fintech ops rebuilt their compliance backbone before scaling AI",
    description:
      "We rebuilt the risk ledger, automated lineage, and gave leadership real-time visibility — no more AI theater, just measurable control.",
    cta: "Explore the fintech cadence",
    image: "/images/portfolio/fintech-team.jpg",
    imageVariant: "overlay",
  },
  {
    id: "logistics",
    logo: "/images/clients/paragon.svg",
    title: "Logistics marketplace sequenced automation across regions",
    description:
      "Once the data foundation was honest, ops leaders owned every recommendation and scaled to two new markets without breaking reporting.",
    cta: "Read the rollout notes",
    image: "/images/portfolio/warehouse-team.jpg",
    imageVariant: "standard",
  },
];

const TransformationStoriesHighlights = () => {
  return (
    <section className="px-4 py-20">
      <div className="section-container flex flex-col items-center gap-12">
        <header className="flex max-w-[540px] flex-col items-center gap-3 text-center">
          <h2 className="text-[36px] font-semibold leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[40px]">
            Behind each story
          </h2>
          <p className="text-[18px] leading-[1.5] text-neutral-400 md:text-[20px]">
            Zoom into the operators, artifacts, and the cadence that made the change stick.
          </p>
        </header>

        <div className="flex w-full max-w-[1250px] flex-col gap-14">
          {highlights.map((highlight, index) => (
            <div key={highlight.id} className="flex flex-col gap-10">
              <article
                className={`flex flex-col items-center gap-12 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex max-w-[600px] flex-col gap-6">
                  <Image
                    src={highlight.logo}
                    alt={`${highlight.id} logo`}
                    width={160}
                    height={40}
                    className="h-7 w-auto object-contain"
                  />
                  <h3 className="text-[28px] font-semibold leading-[1.35] text-neutral-600 md:text-[32px]">
                    {highlight.title}
                  </h3>
                  <p className="text-[18px] leading-[1.6] text-neutral-500">{highlight.description}</p>
                  <button className="inline-flex items-center gap-3 rounded-full bg-neutral-100 px-6 py-3 text-[18px] font-semibold text-neutral-600 transition-colors hover:bg-neutral-200">
                    {highlight.cta}
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </button>
                </div>

                <div className="relative h-[360px] w-full max-w-[600px] overflow-hidden rounded-[12px] shadow-[0_28px_60px_rgba(15,23,42,0.12)]">
                  <Image
                    fill
                    sizes="(min-width: 1024px) 600px, 90vw"
                    src={highlight.image}
                    alt={highlight.title}
                    className={`object-cover ${highlight.imageVariant === "overlay" ? "opacity-90" : ""}`}
                  />
                  {highlight.imageVariant === "overlay" && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-primary-700/40 to-primary-500/40"></div>
                  )}
                </div>
              </article>

              {index < highlights.length - 1 && (
                <div className="h-px w-full border-t border-dashed border-neutral-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationStoriesHighlights;
