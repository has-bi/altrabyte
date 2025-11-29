"use client";
import Image from "next/image";

const stories = [
  {
    id: "retail",
    theme: "bg-[#F6EEEC]",
    title: "Distributor went from spreadsheet scrambles to trusted weekly truth",
    sections: [
      { label: "Starting point", value: "15 stores, 40 spreadsheets, zero shared IDs" },
      { label: "What changed", value: "Rebuilt the SKU + outlet master, automated replenishment logic" },
      { label: "Outcome", value: "Replaced six report packs with one source of truth + daily alerts" },
    ],
    client: {
      name: "Regional FMCG distributor",
      description: "Pre-platform, Indonesia",
      logo: "/images/clients/paragon.svg",
    },
    image: "/images/portfolio/distribution.jpg",
  },
  {
    id: "fintech",
    theme: "bg-[#FCE9EE]",
    title: "Fintech ops stopped firefighting by rebuilding the risk ledger",
    sections: [
      { label: "Starting point", value: "Disputes tracked in tickets, finance and ops never aligned" },
      { label: "What changed", value: "Modelled the risk ledger, automated data contracts, surfaced live exceptions" },
      { label: "Outcome", value: "90% drop in escalations, cash reconciliation in hours instead of days" },
    ],
    client: {
      name: "Series B fintech",
      description: "Digital lending, SEA",
      logo: "/images/clients/amser.svg",
    },
    image: "/images/portfolio/fintech-team.jpg",
  },
  {
    id: "marketplace",
    theme: "bg-[#E6F6F1]",
    title: "Marketplace scaled automation because the foundation stopped breaking",
    sections: [
      { label: "Starting point", value: "70+ integrations, leadership didn't trust the dashboards" },
      { label: "What changed", value: "Hard ownership for entities, observability, and release cadence" },
      { label: "Outcome", value: "GTM, ops, and finance share one playbook for AI + automation rollouts" },
    ],
    client: {
      name: "Enterprise marketplace",
      description: "APAC expansion",
      logo: "/images/clients/paragon.svg",
    },
    image: "/images/portfolio/warehouse-team.jpg",
  },
];

const TransformationStoriesShowcase = () => {
  return (
    <section className="px-4 py-20">
      <div className="section-container flex flex-col items-center gap-12">
        <header className="flex max-w-[760px] flex-col items-center gap-3 text-center">
          <h2 className="text-[36px] font-semibold leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[40px]">
            Four transformations, same foundation-first truth
          </h2>
          <p className="text-[18px] leading-[1.5] text-neutral-400 md:text-[20px]">
            Each story shows the real before state, the operators who owned it, and the cadence that keeps the wins
            compounding.
          </p>
        </header>

        <div className="flex w-full flex-col gap-6">
          {stories.map((story) => (
            <article
              key={story.id}
              className={`${story.theme} flex flex-col gap-6 rounded-[12px] border border-transparent shadow-[0_24px_60px_rgba(15,23,42,0.08)] lg:flex-row`}
            >
              <div className="flex flex-1 flex-col gap-7 border-b border-dashed border-black/30 px-8 py-10 lg:border-b-0 lg:border-r">
                <h3 className="text-[28px] font-semibold leading-[1.3] text-neutral-500 md:text-[32px]">
                  {story.title}
                </h3>
                <div className="flex flex-col gap-5">
                  {story.sections.map((section) => (
                    <div key={section.label} className="flex flex-col gap-2">
                      <span className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
                        {section.label}
                      </span>
                      <p className="text-[20px] font-medium leading-[1.4] text-neutral-600">
                        {section.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex w-full max-w-[280px] flex-col justify-between gap-8 border-b border-dashed border-black/30 px-8 py-10 lg:border-b-0 lg:border-r">
                <div className="flex flex-col gap-3">
                  <span className="flex items-center gap-3 text-primary-500">
                    <span className="h-px w-8 bg-primary-500" />
                    <span className="text-[16px] font-semibold uppercase tracking-[0.18em]">
                      Client
                    </span>
                  </span>
                  <div>
                    <p className="text-[20px] font-semibold text-neutral-600">{story.client.name}</p>
                    <p className="text-[16px] text-neutral-400">{story.client.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-start">
                  <div className="flex h-14 w-36 items-center justify-center rounded-xl bg-white/80 shadow-inner">
                    <Image
                      src={story.client.logo}
                      alt={`${story.client.name} logo`}
                      width={120}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center px-6 py-8">
                <div className="relative h-[320px] w-full max-w-[340px] overflow-hidden rounded-lg">
                  <Image
                    fill
                    sizes="(min-width: 1024px) 340px, 90vw"
                    src={story.image}
                    alt={story.title}
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationStoriesShowcase;
