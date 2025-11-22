"use client";
import React from "react";

const clients = [
  {
    name: "Paragon Corp",
    logo: "https://www.paragon-innovation.com/static/media/paragon-corp.98d5977b.png",
    baseScale: 1,
  },
  {
    name: "Amser PTE LTD",
    logo: "https://amser.com/wp-content/uploads/2019/08/cropped-logo.png",
    baseScale: 0.88,
  },
  {
    name: "Bitlabs",
    logo: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1335/original/Bitlabs_Logo_-_Secondary_Full_Color.png",
    baseScale: 0.94,
  },
  {
    name: "RevoU",
    logo: "https://storage.googleapis.com/danacita-website-v3-prd/website_v3/images/Logo-RevoU-5_1.original.png",
    baseScale: 0.92,
  },
  {
    name: "Rosé All Day Cosmetics",
    logo: "https://cdn.prod.website-files.com/6502a82cff431778b5d82829/65602fa2037d1d996bf6531f_black_logo.png",
    baseScale: 0.82,
  },
];

const TrustedBySection = () => {
  const totalColumns = 5;
  const topRow = Array(totalColumns).fill(null);
  const middleRow = clients;
  const bottomRow = Array(totalColumns).fill(null);
  const gridLayout = [...topRow, ...middleRow, ...bottomRow];

  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <header className="trusted-header">
          <span>Proof before promises</span>
          <h2>Trusted by teams who needed more than dashboards</h2>
          <p>Foundation-first engagements across retail, finance, SaaS, and energy.</p>
        </header>

        <div className="trusted-grid">
          {gridLayout.map((item, index) => {
            const row = Math.floor(index / totalColumns) + 1;
            const column = (index % totalColumns) + 1;
            const baseClass = [
              "grid-cell",
              item ? "trusted-card" : "grid-spacer",
              `row-${row}`,
              `col-${column}`,
            ]
              .filter(Boolean)
              .join(" ");

            if (!item) {
              return (
                <div
                  key={`spacer-${row}-${column}`}
                  className={baseClass}
                  aria-hidden="true"
                />
              );
            }

            return (
              <div key={`${item.name}-${row}-${column}`} className={baseClass}>
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  loading="lazy"
                  decoding="async"
                  style={{ transform: `scale(${item.baseScale ?? 1})` }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .trusted-section {
          background: linear-gradient(180deg, #fffdfb 0%, #fef7f7 60%, #fff 100%);
          position: relative;
        }

        .trusted-section::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
              circle at top right,
              rgba(244, 223, 237, 0.4),
              transparent 40%
            ),
            radial-gradient(circle at bottom left, rgba(209, 231, 255, 0.35), transparent 45%);
          pointer-events: none;
        }

        .trusted-container {
          position: relative;
          max-width: 1120px;
          margin: 0 auto;
          padding: 4.5rem 1.5rem;
        }

        .trusted-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3rem;
        }

        .trusted-header span {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: #b0a9ff;
        }

        .trusted-header h2 {
          margin-top: 0.75rem;
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: 600;
          color: #0f172a;
        }

        .trusted-header p {
          margin-top: 0.5rem;
          font-size: 1.0625rem;
          color: rgba(15, 23, 42, 0.65);
        }

        .trusted-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(${totalColumns}, minmax(0, 1fr));
          grid-template-rows: 80px 140px 80px;
          padding: 2.5rem 0;
          gap: 0;
          border: 1px dashed rgba(15, 23, 42, 0.15);
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.66);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
            0 20px 45px rgba(15, 23, 42, 0.08);
        }

        .grid-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1.5rem;
          border-style: dashed;
          border-color: rgba(15, 23, 42, 0.15);
          border-width: 0;
        }

        .grid-spacer {
          pointer-events: none;
        }

        .row-1 {
          grid-row: 1;
          border-bottom-width: 1px;
        }

        .row-2 {
          grid-row: 2;
          border-top-width: 1px;
          border-bottom-width: 1px;
        }

        .row-3 {
          grid-row: 3;
          border-bottom-width: 0;
        }

        .col-2,
        .col-3,
        .col-4 {
          border-left-width: 1px;
          border-right-width: 1px;
        }

        .col-2.grid-spacer,
        .col-3.grid-spacer,
        .col-4.grid-spacer {
          border-left-width: 1px;
          border-right-width: 1px;
        }

        .row-2.trusted-card {
          border-left-width: 1px;
          border-right-width: 1px;
        }

        .row-2.trusted-card.col-1 {
          border-left-width: 0;
        }

        .row-2.trusted-card.col-5 {
          border-right-width: 0;
        }

        .trusted-card img {
          max-width: 100%;
          max-height: 70px;
          width: auto;
          filter: grayscale(100%);
          opacity: 0.65;
          transition: opacity 280ms ease, filter 280ms ease, transform 280ms ease;
        }

        .trusted-card:hover img {
          filter: grayscale(0%);
          opacity: 1;
          transform: translateY(-4px) scale(1.03);
        }

        @media (max-width: 1024px) {
          .trusted-container {
            padding: 3.5rem 1.25rem;
          }

          .trusted-grid {
            grid-template-rows: 70px 120px 70px;
          }
*** End Patch
            font-size: 2.1rem;
          }

          .trusted-grid {
            grid-template-rows: 70px 115px 70px;
            padding: 2.25rem 0;
          }

          .grid-cell {
            padding: 0 1.2rem;
          }
        }

        @media (max-width: 768px) {
          .trusted-container {
            padding: 3.75rem 1.25rem;
          }

          .trusted-header h2 {
            font-size: 1.9rem;
          }

          .trusted-header p {
            font-size: 1rem;
          }

          .trusted-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-template-rows: auto;
            row-gap: 1.75rem;
            padding: 2rem 0;
          }

          .grid-cell {
            grid-column: auto;
            grid-row: auto;
            border-width: 1px;
            padding: 1.35rem;
            min-height: 105px;
          }

          .grid-spacer {
            display: none;
          }

          .trusted-card img {
            max-height: 60px;
          }
        }

        @media (max-width: 640px) {
          .trusted-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            row-gap: 1.5rem;
          }

          .trusted-grid::before,
          .trusted-grid::after {
            left: 6%;
            right: 6%;
          }

          .grid-cell {
            min-height: 92px;
            padding: 1.2rem;
          }

          .trusted-card img {
            max-height: 54px;
          }
        }

        @media (max-width: 480px) {
          .trusted-container {
            padding: 2.25rem 1rem;
          }

          .trusted-header h2 {
            font-size: 1.65rem;
          }

          .trusted-grid {
            grid-template-columns: 1fr;
            padding: 1.5rem 0;
            row-gap: 1.35rem;
          }

          .trusted-grid::before,
          .trusted-grid::after {
            left: 15%;
            right: 15%;
          }

          .grid-cell {
            min-height: 84px;
            padding: 1rem;
          }

          .trusted-card img {
            max-height: 48px;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedBySection;
