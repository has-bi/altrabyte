"use client";

import Image from "next/image";
import { Fragment } from "react";

const historyCards = [
  {
    id: "phase-1",
    title: "From Technical Executor to Strategic Leader",
    subtitle: "The Early Years: Chasing Technical Perfection (2016–2019)",
    journey: ["Educational Institution", "E-commerce Platform", "Tech Startup"],
    story: [
      {
        type: "paragraph",
        text: "In the beginning, we thought like most data professionals:",
      },
      {
        type: "quote",
        text: "“Just do what's assigned, no further questions.”",
      },
      {
        type: "paragraph",
        text: "Our focus was purely technical – ETL processes, data warehouses, visualization dashboards. We believed that mastering the technical skills was enough. Build the dashboard, deliver the report, move to the next task.",
      },
    ],
    insights: [
      {
        title: "What we didn't understand",
        text: "Technical skills alone don't drive business transformation.",
      },
      {
        title: "The problem",
        text: "We were solving technical problems, not business problems.",
      },
    ],
    image: "/images/history/history-1.png",
  },
  {
    id: "phase-2",
    title: "The Awekening: When Strategy Meets Data (2019–2023)",
    subtitle: "Multi-National Corporation: The Methodology Is Born",
    journey: ["Senior Data Analyst", "Senior Manager", "Regional BI Manager"],
    story: [
      {
        type: "paragraph",
        text: "Everything changed when we started working directly with management for the first time. Leading multi-country teams across Asia, managing remote, multicultural data professionals, we realized something crucial:",
      },
      {
        type: "quote",
        text: "“Data teams should drive impact, not just BAU and creating dashboard after dashboard.”",
      },
      {
        type: "heading",
        text: "The Framework Development",
      },
      {
        type: "paragraph",
        text: 'Instead of asking "What dashboard do you want?" we started asking:',
      },
      {
        type: "list",
        items: [
          "What decisions are you trying to make?",
          "Where are your operational bottlenecks?",
          "How do you currently get the information you need?",
        ],
      },
    ],
    insights: [
      {
        title: "The pattern emerged",
        text: "Every company had the same foundation problems, regardless of industry or geography.",
      },
      {
        title: "Our approach evolved",
        text: "Strategy tailored to business goals, not technical possibilities.",
      },
    ],
    image: "/images/history/history-2.png",
  },
  {
    id: "phase-3",
    title: "Validation Across Industries (2023–2024)",
    subtitle: "Health Tech Company: Testing the Framework",
    journey: ["Head of Data and Business Intelligence"],
    story: [
      {
        type: "paragraph",
        text: "We applied the same methodology at a health tech company – a completely different industry with different challenges.",
      },
      {
        type: "heading",
        text: "The result: It worked",
      },
      {
        type: "list",
        items: [
          "Same foundation assessment approach",
          "Same strategic thinking methodology",
          "Same focus on business impact over technical complexity",
        ],
      },
    ],
    insights: [
      {
        title: "The AI integration test",
        text: "When ChatGPT 3.5 launched, we focused on real business impact—built on a solid foundation, not hype.",
      },
      {
        title: "Key insight",
        text: "The methodology wasn't company-specific. It was universal.",
      },
    ],
    image: "/images/history/history-3.png",
  },
  {
    id: "phase-4",
    title: "Enterprise Validation: Global Beauty Industry",
    subtitle: "The ultimate test",
    journey: ["Senior Analytics Product Owner Manager"],
    story: [
      {
        type: "heading",
        text: "The ultimate test",
      },
      {
        type: "paragraph",
        text: "Would our framework work at one of the world's largest beauty companies?",
      },
      {
        type: "paragraph",
        text: "We applied the exact same approach:",
      },
      {
        type: "list",
        items: [
          "Foundation assessment first",
          "Strategic pushback to management when needed",
          "Business impact over technical showcase",
        ],
      },
    ],
    insights: [
      {
        title: "The result",
        text: "We stood out among the enterprise's analytics professionals using the same methodology that worked everywhere else.",
      },
      {
        title: "The confirmation",
        text: "Foundation-first thinking works at any scale, any industry, any complexity level.",
      },
    ],
    image: "/images/history/history-4.png",
  },
  {
    id: "phase-5",
    title: "Enterprise Adoption: Technology & Governance",
    subtitle: "Would the methodology survive in fast-paced product organizations?",
    journey: ["Head of Data Engineering"],
    story: [
      {
        type: "paragraph",
        text: "The framework gained buy-in across product, engineering, and compliance. Foundation-first thinking held up even under start-up speed.",
      },
      {
        type: "list",
        items: [
          "Data governance built in from day one",
          "Automation roadmap justified by ROI, not hype",
          "Leadership alignment on business outcomes",
        ],
      },
    ],
    insights: [
      {
        title: "Why it matters",
        text: "Transformation success relied on the same fundamentals: reality-first assessments, practical automation, clear business ownership.",
      },
      {
        title: "What’s next",
        text: "We keep the methodology evolving with every new engagement—always grounded in reality.",
      },
    ],
    image: "/images/history/history-5.png",
  },
];

function JourneyPill({ items }) {
  return (
    <div className="inline-flex flex-wrap items-center gap-2 self-start rounded-full bg-[#E9E2FF] px-4 py-2 text-xs font-medium text-[#4E2BD8] sm:text-sm">
      {items.map((item, idx) => (
        <div key={item} className="flex items-center gap-2">
          <span className="whitespace-nowrap">{item}</span>
          {idx < items.length - 1 && (
            <span aria-hidden="true" className="text-[#4E2BD8]">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function StoryBlock({ story }) {
  return (
    <div className="space-y-4 text-[15px] leading-relaxed text-[#122232] sm:text-[16px]">
      {story.map((block, idx) => {
        if (block.type === "quote") {
          return (
            <p key={idx} className="italic text-[#6D6F7C]">
              {block.text}
            </p>
          );
        }

        if (block.type === "heading") {
          return (
            <p key={idx} className="text-base font-semibold text-[#2F3140]">
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={idx} className="space-y-2 text-[#43475A]">
              {block.items.map((item, listIdx) => (
                <li
                  key={listIdx}
                  className="flex items-start gap-2 text-[15px] sm:text-[16px]"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#4E2BD8]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={idx} className="text-[#122232]">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

function InsightPanel({ insights }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-center px-5 pb-6 pt-12 text-white sm:px-7">
      <div className="flex w-full max-w-[520px] flex-col gap-4 text-left">
        {insights.map((item, idx) => (
          <Fragment key={item.title}>
            <div className="flex items-start gap-4">
              <p className="w-1/3 min-w-[140px] text-[18px] font-semibold leading-snug text-white sm:text-[20px]">
                {item.title}
              </p>
              <p className="flex-1 text-sm leading-relaxed text-white/80 sm:text-[16px]">
                {item.text}
              </p>
            </div>
            {idx < insights.length - 1 && (
              <div className="h-[1px] w-full border-t border-dashed border-white/40" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function HistoryCard({ card }) {
  return (
    <article className="group rounded-[32px] border border-[#E7E2F8] bg-white/90 px-6 py-10 shadow-[0_30px_90px_rgba(16,26,46,0.08)] backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_35px_120px_rgba(16,26,46,0.12)] sm:px-10 lg:py-14">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-6 text-[#122232]">
          <div className="space-y-3">
            <h2 className="text-[25px] font-semibold leading-tight tracking-[-0.01em] sm:text-[32px]">
              {card.title}
            </h2>
            {card.subtitle && (
              <p className="text-base text-[#6D6F7C] sm:text-lg">
                {card.subtitle}
              </p>
            )}
          </div>

          <JourneyPill items={card.journey} />
          <StoryBlock story={card.story} />
        </div>

        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-[24px] border border-white/40 bg-[#F4F0FF] shadow-[0_25px_60px_rgba(35,32,70,0.18)] transition-all duration-500 group-hover:-translate-y-1">
            <div className="relative aspect-[28/29]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#5135d8] via-[#5135d8]/40 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <InsightPanel insights={card.insights} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function NewAboutHistory() {
  return (
    <section className="bg-[#F9F6FF] px-4 py-12 sm:px-10 lg:px-[120px]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        {historyCards.map((card) => (
          <HistoryCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
