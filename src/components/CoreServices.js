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

const splitTitle = (title) => {
  const parts = title.split(" ");
  const midpoint = Math.ceil(parts.length / 2);
  return [parts.slice(0, midpoint).join(" "), parts.slice(midpoint).join(" ")];
};

const CoreServices = () => {
  return (
    <section className="section relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F9FAFB] to-white">
      <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-64 w-[90%] max-w-6xl rounded-full bg-gradient-to-r from-[#E3E1FF] via-[#F4E8FF] to-[#E0F5FF] opacity-60 blur-3xl" />
      <div className="section-container relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
            Capabilities
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-primary-500 via-[#7F56D9] to-[#8E72FF] text-transparent bg-clip-text">
              Core
            </span>{" "}
            Services
          </h2>
          <p className="mt-5 text-base text-neutral-500 md:text-lg">
            Focused programs that transform messy data, brittle workflows, and
            manual decision-making into intelligent, automated systems you can
            trust at scale.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[32px] border border-neutral-200/70 bg-gradient-to-b from-white via-white/90 to-white/95 p-[1px] shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:border-transparent focus-within:-translate-y-2"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-primary-500/25 via-[#7F56D9]/20 to-[#8E72FF]/25 blur-3xl" />
              </div>

              <div className="relative flex h-full flex-col gap-7 rounded-[30px] bg-white/95 p-8 transition duration-500 group-hover:bg-white focus-within:bg-white">
                <span className="absolute right-8 top-8 text-xs font-semibold uppercase tracking-[0.4em] text-neutral-300 transition-colors duration-500 group-hover:text-primary-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center justify-start">
                  <div className="inline-flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-neutral-200 bg-white text-primary shadow-[0_15px_35px_rgba(15,23,42,0.12)] transition-all duration-500 group-hover:scale-105 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-primary-50 group-hover:via-[#F3EDFE] group-hover:to-[#E4F4FF]">
                    <service.icon
                      className="h-11 w-11 text-primary-500 transition-all duration-500 group-hover:scale-110 group-hover:text-primary-600"
                      strokeWidth={1.4}
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="relative pl-6">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full bg-gradient-to-b from-primary-500 via-primary-400 to-transparent opacity-80 transition-all duration-500 group-hover:from-primary-600 group-hover:via-primary-500"
                    />
                    <h3 className="text-[1.35rem] font-medium leading-tight text-neutral-900 transition-colors duration-500 group-hover:text-neutral-950">
                      {splitTitle(service.title).map((line, lineIndex) => (
                        <span
                          key={`${service.title}-${lineIndex}`}
                          className="block"
                        >
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-neutral-500 transition-colors duration-500 group-hover:text-neutral-600">
                    {service.description}
                  </p>
                </div>

                <div className="h-px w-full origin-left scale-x-0 bg-gradient-to-r from-primary-500 via-primary-400 to-transparent opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
