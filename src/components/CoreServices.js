import { Blocks, Bot, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "Data Foundation & Intelligence",
    description:
      "From Excel chaos to intelligent decision-making systems. We build the data backbone that keeps every decision grounded and repeatable.",
    icon: Blocks,
  },
  {
    title: "AI Automation",
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
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-500 mt-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary-500 via-[#7F56D9] to-[#8E72FF] text-transparent bg-clip-text">
              Core
            </span>{" "}
            Services
          </h2>
        </div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative h-full rounded-xl border-2 border-[#E7E9EB] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="flex h-full flex-col gap-7">
                <div className="inline-flex h-[72px] w-[72px] items-center justify-center rounded-xl border-2 border-[#E7E9EB] bg-white text-primary shadow-[0_2px_4px_rgba(0,0,0,0.12)]">
                  <service.icon className="h-12 w-12" strokeWidth={1.4} />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center border-l-2 border-primary-500 pl-5 min-h-[68px]">
                    <h3 className="text-xl font-medium text-neutral-500 md:text-2xl leading-[1.6] tracking-[-0.01em]">
                      {service.title}
                    </h3>
                  </div>
                  <div className="pl-0">
                    <p className="text-base font-medium text-neutral-400 leading-[1.4]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
