"use client";

import { Users, Cog, Check } from "lucide-react";

function CodevIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.002 57.0079V56.1956C49.0085 53.8844 50.8805 52.0125 53.1917 52.0059H59.8185C62.1297 52.0125 64.0016 53.8844 64.0082 56.1956V57.0079C64.0082 57.5605 63.5603 58.0084 63.0078 58.0084H50.0024C49.4499 58.0084 49.002 57.5605 49.002 57.0079Z"
        stroke="#FF8B3D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.6535 44.0812C52.1684 42.343 52.9068 40.4952 54.4562 39.57C56.0055 38.6447 57.9825 38.871 59.2828 40.1224C60.583 41.3737 60.8848 43.3406 60.0196 44.9243C59.1544 46.5079 57.3362 47.3165 55.5807 46.8984C54.1654 46.5613 53.0445 45.4826 52.6535 44.0812Z"
        stroke="#FF8B3D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.9922 53.006V52.1937C23.9988 49.8825 25.8707 48.0105 28.1819 48.0039H34.8087C37.1199 48.0105 38.9918 49.8825 38.9984 52.1937V53.006C38.9984 53.5585 38.5505 54.0064 37.998 54.0064H24.9926C24.4401 54.0064 23.9922 53.5585 23.9922 53.006Z"
        stroke="#FF8B3D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.6437 40.0812C27.1587 38.343 27.897 36.4952 29.4464 35.57C30.9958 34.6447 32.9727 34.871 34.273 36.1224C35.5733 37.3737 35.8751 39.3406 35.0098 40.9243C34.1446 42.5079 32.3264 43.3165 30.5709 42.8984C29.1556 42.5613 28.0348 41.4826 27.6437 40.0812Z"
        stroke="#FF8B3D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="46.0014"
        cy="27.9955"
        r="8.00333"
        stroke="#FF8B3D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.6918 26.4102L45.3304 29.7696L43.3096 27.7547"
        stroke="#FF8B3D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CARDS = [
  {
    key: "codev",
    title: "Co-Development",
    tagline: "Build Together, Own Forever",
    taglineColor: "#FF8B3D",
    accentColor: "#FF8B3D",
    cardBackground:
      "radial-gradient(98.41% 84.99% at 50.13% 84.99%, rgba(255,139,61,0) 60.31%, rgba(255,139,61,0.15) 100%), #FFFFFF",
    patternImage: "/images/element/co-development%20pattern.png",
    patternWidth: 255,
    patternHeight: 223,
    patternGradient: null,
    bottomGradient: null,
    accentGlow:
      "radial-gradient(75.43% 73.33% at 82.88% 15.11%, #FF8B3D 0%, rgba(255,139,61,0) 100%)",
    icon: CodevIcon,
    points: [
      "One-time investment, permanent capability",
      "You get the code, the knowledge, the independence",
      "Build internal competency while solving immediate problems",
    ],
  },
  {
    key: "managed",
    title: "Managed Services",
    tagline: "We Run It, You Use It",
    taglineColor: "#07A276",
    accentColor: "#07A276",
    cardBackground:
      "radial-gradient(98.41% 84.99% at 50.13% 84.99%, rgba(7,162,118,0) 60.31%, rgba(7,162,118,0.12) 100%), #FFFFFF",
    patternImage:
      "/images/element/Managed%20Services%20Container-pattern.svg",
    patternWidth: 257,
    patternHeight: 218,
    patternGradient: null,
    bottomGradient: null,
    accentGlow:
      "radial-gradient(240px 220px at 83% 15%, #07A276 0%, rgba(7,162,118,0.35) 40%, rgba(7,162,118,0) 100%)",
    icon: Cog,
    points: [
      "Monthly partnership, continuous updates",
      "You focus on business growth, we handle the data infrastructure",
      "Ongoing optimization and enhancement",
    ],
  },
];

function Card({ config, index }) {
  const Icon = config.icon;
  const isCustomIcon = Icon === CodevIcon;
  const delay = index * 80;
  const hasPattern = Boolean(config.patternImage);

  return (
    <article
      tabIndex={0}
      aria-labelledby={`partnership-${config.key}`}
      className="relative isolate flex flex-col bg-white transition-transform duration-300 will-change-transform hover:-translate-y-2 focus-visible:-translate-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B7FFF]"
      style={{
        width: "100%",
        maxWidth: "383px",
        height: "487px",
        padding: "32px 28px 40px",
        borderRadius: "12px",
        boxShadow: "0px 28px 80px rgba(0, 0, 0, 0.08)",
        background: config.cardBackground || "#FFFFFF",
      }}
    >
      {config.bottomGradient ? (
        <div
          className="absolute inset-0 rounded-[12px]"
          style={{ background: config.bottomGradient, zIndex: 0 }}
        />
      ) : null}
      <div
        className="pointer-events-none absolute"
        style={
          hasPattern
            ? {
                top: "-2px",
                right: "-2px",
                width: `${config.patternWidth || 255}px`,
                height: `${config.patternHeight || 223}px`,
                backgroundImage: `${
                  config.patternGradient ? `${config.patternGradient}, ` : ""
                }url('${config.patternImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "top right",
                backgroundRepeat: "no-repeat",
                zIndex: 0,
                borderTopRightRadius: "12px",
              }
            : {
                inset: 0,
                opacity: 0.4,
                backgroundImage:
                  "radial-gradient(circle, #D9D9D9 2px, transparent 2px), radial-gradient(circle, #D9D9D9 2px, transparent 2px)",
                backgroundSize: "25px 25px, 25px 25px",
                backgroundPosition: "0 0, 12.5px 12.5px",
                backgroundRepeat: "repeat",
                zIndex: 0,
              }
        }
      />

      <div
        className="relative flex h-full flex-col gap-8 text-left"
        style={{
          zIndex: 1,
          animation: `cardFade 420ms cubic-bezier(.25,.1,.3,1) ${delay}ms both`,
        }}
      >
        <div
          className="flex items-center justify-center bg-white transition-shadow duration-300"
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "12px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
            flexShrink: 0,
            aspectRatio: "1 / 1",
          }}
        >
          <Icon
            className={isCustomIcon ? undefined : "h-10 w-10"}
            strokeWidth={isCustomIcon ? undefined : 1.7}
            style={isCustomIcon ? undefined : { color: config.accentColor }}
          />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h3
              id={`partnership-${config.key}`}
              className="font-medium tracking-[-0.01em]"
              style={{ fontSize: "28px", lineHeight: "140%", color: "#122232" }}
            >
              {config.title}
            </h3>
            <p
              className="tracking-[-0.01em]"
              style={{
                fontSize: "20px",
                lineHeight: "150%",
                color: config.taglineColor,
              }}
            >
              &ldquo;{config.tagline}&rdquo;
            </p>
          </div>

          <div className="h-px w-full bg-[#E7E9EB]" />

          <ul className="flex flex-col gap-3" role="list">
            {config.points.map((point) => (
              <li key={point} className="flex gap-3" role="listitem">
                <Check
                  className="mt-[2px] h-[18px] w-[18px] flex-none"
                  strokeWidth={2}
                  style={{ color: config.accentColor }}
                />
                <span
                  className="tracking-[-0.01em]"
                  style={{
                    fontSize: "18px",
                    lineHeight: "150%",
                    color: "#122232",
                  }}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1" />
      </div>
    </article>
  );
}

export default function PartnershipModels() {
  return (
    <section className="bg-white px-4 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-16 md:px-16 lg:px-[120px]">
      <div
        className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-16 rounded-[40px] px-6 py-14 shadow-[0_2px_16px_rgba(0,0,0,0.04)] sm:px-12 md:px-16 md:py-20 lg:px-[120px]"
        style={{
          background:
            "linear-gradient(180deg, #F2EFFF 0%, rgba(242, 239, 255, 0.1) 100%)",
        }}
      >
        <h2 className="text-balance text-center text-[32px] font-medium leading-[1.28] tracking-[-0.01em] text-[#122232] sm:text-[36px] md:text-[40px]">
          Choose Your
          <br />
          <span style={{ color: "#8B7FFF" }}>Partnership Model</span>
        </h2>

        <div className="flex w-full max-w-[794px] flex-col items-center gap-7 md:flex-row md:flex-wrap md:items-start md:justify-center md:gap-[28px]">
          {CARDS.map((card, idx) => (
            <div
              key={card.key}
              className="flex w-full justify-center md:flex-1"
            >
              <Card config={card} index={idx} />
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
