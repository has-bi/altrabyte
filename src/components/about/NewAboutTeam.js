"use client";

const team = [
  {
    key: "hasbi",
    name: "Hasbi Hassadiqin",
    role: "Co-Founder",
    description: "10+ years in data infrastructure. E-commerce, fintech, SaaS. Foundations over features.",
    accentColor: "#7863FC",
    cardBackground:
      "radial-gradient(98.41% 84.99% at 50.13% 84.99%, rgba(120,99,252,0) 60.31%, rgba(120,99,252,0.15) 100%), #FFFFFF",
    profileImage: "/images/team/hasbi-profile.jpg",
  },
  {
    key: "brandy",
    name: "Brandy",
    role: "Co-Founder",
    description: "Scalable systems expert. Complex challenges into practical solutions.",
    accentColor: "#07A276",
    cardBackground:
      "radial-gradient(98.41% 84.99% at 50.13% 84.99%, rgba(7,162,118,0) 60.31%, rgba(7,162,118,0.12) 100%), #FFFFFF",
    profileImage: "/images/team/brandy-profile.jpg",
  },
];

function TeamCard({ config, index }) {
  const delay = index * 80;

  return (
    <article
      tabIndex={0}
      aria-labelledby={`team-${config.key}`}
      className="relative isolate flex flex-col bg-white transition-transform duration-300 will-change-transform hover:-translate-y-2 focus-visible:-translate-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7863FC]"
      style={{
        width: "100%",
        maxWidth: "480px",
        height: "480px",
        padding: "40px 36px 48px",
        borderRadius: "16px",
        boxShadow: "0px 28px 80px rgba(0, 0, 0, 0.08)",
        background: config.cardBackground || "#FFFFFF",
      }}
    >
      <div
        className="pointer-events-none absolute"
        style={{
          inset: 0,
          opacity: 0.4,
          backgroundImage:
            "radial-gradient(circle, #D9D9D9 2px, transparent 2px), radial-gradient(circle, #D9D9D9 2px, transparent 2px)",
          backgroundSize: "25px 25px, 25px 25px",
          backgroundPosition: "0 0, 12.5px 12.5px",
          backgroundRepeat: "repeat",
          zIndex: 0,
        }}
      />

      <div
        className="relative flex h-full flex-col gap-8 text-left"
        style={{
          zIndex: 1,
          animation: `cardFade 420ms cubic-bezier(.25,.1,.3,1) ${delay}ms both`,
        }}
      >
        <div
          className="relative bg-gradient-to-br from-neutral-200 to-neutral-300 transition-shadow duration-300"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "16px",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            flexShrink: 0,
            aspectRatio: "1 / 1",
          }}
        >
          <img
            src={config.profileImage}
            alt={`${config.name} profile`}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center text-white"
            style={{
              display: "none",
              fontSize: "48px",
              fontWeight: "600",
              background: `linear-gradient(135deg, ${config.accentColor}DD, ${config.accentColor}AA)`,
            }}
          >
            {config.name.charAt(0)}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3
              id={`team-${config.key}`}
              className="font-semibold tracking-[-0.01em]"
              style={{ fontSize: "28px", lineHeight: "140%", color: "#122232" }}
            >
              {config.name}
            </h3>
            <p
              className="tracking-[-0.01em]"
              style={{
                fontSize: "20px",
                lineHeight: "150%",
                color: config.accentColor,
              }}
            >
              {config.role}
            </p>
          </div>

          <div className="h-px w-full bg-[#E7E9EB]" />

          <p
            className="tracking-[-0.01em]"
            style={{
              fontSize: "18px",
              lineHeight: "150%",
              color: "#4D5A68",
            }}
          >
            {config.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function NewAboutTeam() {
  return (
    <section className="relative border-t border-dashed border-neutral-500/80 bg-white px-4 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-16 md:px-16 lg:px-[120px]">
      <div className="section-container">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[32px] font-semibold leading-[1.28] tracking-[-0.01em] text-[#122232] md:text-[36px] lg:text-[40px]">
            Meet the Team
          </h2>
          <p className="max-w-2xl text-[18px] leading-[1.55] tracking-[-0.01em] text-[#657083] md:text-[20px]">
            The people building Altrabyte's foundation-first approach
          </p>
        </div>

        <div className="mt-12 flex w-full max-w-[794px] mx-auto flex-col items-center gap-7 md:flex-row md:flex-wrap md:items-start md:justify-center md:gap-[28px]">
          {team.map((member, idx) => (
            <div
              key={member.key}
              className="flex w-full justify-center md:flex-1"
            >
              <TeamCard config={member} index={idx} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes cardFade {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          article,
          article * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
