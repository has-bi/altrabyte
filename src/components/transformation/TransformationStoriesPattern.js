"use client";
import { ArrowRightLeft, BadgeCheck, LifeBuoy, Target } from "lucide-react";

const cards = [
  {
    title: "Delusion",
    description:
      "The stories read like case studies — surely the ops work is already done, we just need the final polish.",
    icon: ArrowRightLeft,
  },
  {
    title: "Reality",
    description:
      "Every win started with messy exports, no ownership, and leaders building slides off conflicting numbers.",
    icon: BadgeCheck,
  },
  {
    title: "Solution",
    description:
      "Get the truth on paper, align the operators, and rebuild workflows so value keeps compounding.",
    icon: LifeBuoy,
  },
  {
    title: "Result",
    description:
      "Teams ship on one source of truth, automation actually sticks, and there’s a playbook for the next market.",
    icon: Target,
  },
];

const TransformationStoriesPattern = () => {
  return (
    <section className="bg-primary-50 px-4 py-20">
      <div className="section-container">
        <header className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[36px] font-semibold leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[40px]">
            Every transformation follows the same beats
          </h2>
          <p className="text-[18px] leading-[1.5] text-neutral-400 md:text-[20px]">
            The delusion, the reality, the path forward — spelled out so you can see what really changed inside each
            story.
          </p>
        </header>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="relative flex h-full flex-col gap-5 rounded-[12px] bg-[#D5CFFE] p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white">
                  <Icon className="h-7 w-7 text-primary-500" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[22px] font-semibold leading-[1.4] text-neutral-500">
                    {card.title}
                  </h3>
                  <p className="text-[18px] leading-[1.5] text-neutral-500/90">{card.description}</p>
                </div>
                <span className="absolute right-3 top-3 h-3 w-3 rounded-full bg-primary-50 shadow-[inset_-2px_2px_2px_rgba(0,0,0,0.25)]" />
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-[12px] bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
            <div className="flex items-center gap-3 text-neutral-500">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                <BadgeCheck className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h4 className="text-[22px] font-semibold leading-[1.4]">Why this matters</h4>
            </div>
            <div className="hidden h-px flex-1 bg-dashed-line lg:block" />
          </div>
          <p className="mt-4 text-[18px] leading-[1.6] text-neutral-500">
            These stories are proof that transformation isn’t luck — it’s the discipline of facing reality, fixing the
            foundation, and giving operators a cadence they can run without us in the room.
          </p>
        </div>
      </div>
      <style jsx>{`
        .bg-dashed-line {
          background-image: repeating-linear-gradient(
            to right,
            rgba(18, 34, 50, 0.3) 0,
            rgba(18, 34, 50, 0.3) 8px,
            transparent 8px,
            transparent 16px
          );
          height: 1.5px;
        }
      `}</style>
    </section>
  );
};

export default TransformationStoriesPattern;
