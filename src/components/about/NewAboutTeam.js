"use client";

const team = [
  {
    key: "brandy",
    name: "Brandy",
    role: "Founder",
    description:
      "Strategic data analytics and BI expert. Leading business intelligence and AI transformation.",
    accentColor: "#7863FC",
    profileImage: "/images/teams/brandy.png",
    linkedin: "https://www.linkedin.com/in/brandyskom/",
  },
  // {
  //   key: "sean",
  //   name: "Sean Lawlor",
  //   role: "Enterprise Partner",
  //   description:
  //     "Former CEO of Intrepid Group. Leadership across e-commerce and logistics.",
  //   accentColor: "#7863FC",
  //   profileImage: "/images/teams/sean.png",
  //   linkedin: "https://www.linkedin.com/in/sean-lawlor-52a981114/",
  // },
  {
    key: "hasbi",
    name: "Hasbi Hassadiqin",
    role: "Co-Founder",
    description:
      "Product Engineer specializing in FMCG automation and supply chain optimization.",
    accentColor: "#7863FC",
    profileImage: "/images/teams/hasbi.png",
    linkedin: "https://www.linkedin.com/in/hasbi-hassadiqin/",
  },
  // {
  //   key: "tri",
  //   name: "Tri Cao",
  //   role: "Technology Solutions Partner",
  //   description:
  //     "Data extraction engineer. Web scraping and system architecture specialist.",
  //   accentColor: "#7863FC",
  //   profileImage: "/images/teams/tri-cao.png",
  //   linkedin: "https://www.linkedin.com/in/tri-cao/",
  // },
];

function TeamCard({ config, index }) {
  const delay = index * 100;

  return (
    <article
      className="group relative flex flex-col items-center text-center transition-all duration-300"
      style={{
        animation: `fadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
      }}
    >
      {/* Profile Image */}
      <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200">
        <div
          className="relative overflow-hidden transition-transform duration-500 group-hover:scale-105"
          style={{
            width: "180px",
            height: "180px",
          }}
        >
          <img
            src={config.profileImage}
            alt={config.name}
            className="h-full w-full object-cover object-top"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center text-5xl font-semibold text-white"
            style={{
              display: "none",
              background: `linear-gradient(135deg, ${config.accentColor}, ${config.accentColor}CC)`,
            }}
          >
            {config.name.charAt(0)}
          </div>
        </div>
      </div>

      {/* Name */}
      <h3 className="mb-2 text-xl font-semibold tracking-tight text-[#122232]">
        {config.name}
      </h3>

      {/* Role */}
      <p
        className="mb-4 text-sm font-medium tracking-tight"
        style={{ color: config.accentColor }}
      >
        {config.role}
      </p>

      {/* Description */}
      <p className="mb-6 flex h-20 w-full max-w-[280px] items-start text-sm leading-relaxed text-[#657083]">
        {config.description}
      </p>

      {/* LinkedIn Button */}
      {config.linkedin && (
        <a
          href={config.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200"
          style={{
            borderColor: config.accentColor + "40",
            color: config.accentColor,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = config.accentColor;
            e.currentTarget.style.color = "#FFFFFF";
            e.currentTarget.style.borderColor = config.accentColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = config.accentColor;
            e.currentTarget.style.borderColor = config.accentColor + "40";
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      )}
    </article>
  );
}

export default function NewAboutTeam() {
  return (
    <section className="border-t border-neutral-200 bg-white px-4 py-12 sm:px-10 md:px-16 lg:px-[120px] lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#122232] md:text-4xl">
            Meet the Team
          </h2>
          <p className="max-w-xl text-base text-[#657083] md:text-lg">
            Building AltraByte's foundation-first approach
          </p>
        </div>

        {/* Team Grid */}
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 justify-items-center gap-x-16 gap-y-12 sm:grid-cols-2">
          {team.map((member, idx) => (
            <TeamCard key={member.key} config={member} index={idx} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          article {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
