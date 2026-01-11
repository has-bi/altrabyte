"use client";

const principles = [
  {
    number: "1",
    title: "Foundation First",
    description:
      "Solid foundations. No shortcuts. Right infrastructure built right.",
  },
  {
    number: "2",
    title: "Business-First Thinking",
    description:
      "Technology serves business goals. Start with outcomes, work backward.",
  },
  {
    number: "3",
    title: "Practical Over Perfect",
    description:
      "Working solutions beat perfect theories. Progress over paralysis.",
    isSpecial: true,
  },
];

const NewAboutMission = () => {
  return (
    <section className="relative border-t border-dashed border-neutral-500/80 bg-white py-12 md:py-24">
      <div className="section-container">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[32px] font-semibold leading-[1.28] tracking-[-0.01em] text-[#122232] md:text-[36px] lg:text-[40px]">
            Our Principles
          </h2>
          <p className="max-w-2xl text-[18px] leading-[1.55] tracking-[-0.01em] text-[#657083] md:text-[20px]">
            The core beliefs that guide every project we take on
          </p>
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl border border-[#E6E8EC] bg-white p-6 md:grid-cols-3 md:p-8">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-[18px] border border-[#E6E8EC] bg-white px-6 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-primary-100/70 hover:bg-gradient-to-b hover:from-[#F7F4FF] hover:to-[#F0EBFF] hover:shadow-[0px_20px_40px_rgba(120,99,252,0.22)]"
            >
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-50/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-10 top-2 h-[2px] -translate-y-2 rounded-full bg-gradient-to-r from-primary-400/60 to-primary-200/60 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col gap-3">
                <span className="text-[30px] font-semibold text-[#122232] transition-colors duration-300">
                  {principle.number}
                </span>
                <p className="text-[20px] font-medium leading-[1.4] text-[#122232] transition-colors duration-300">
                  {principle.title}
                </p>
                <p className="text-[16px] leading-[1.5] text-[#4D5A68] transition-colors duration-300">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default NewAboutMission;
