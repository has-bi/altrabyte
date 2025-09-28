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
          <h2>Trusted By Growing Businesses Across Industries</h2>
          <p>Companies that chose foundation-first transformation</p>
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
          background: #ffffff;
        }

        .trusted-container {
          max-width: 1040px;
          margin: 0 auto;
          padding: 3.25rem 1.5rem;
        }

        .trusted-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 2.75rem;
        }

        .trusted-header h2 {
          font-size: 2.4rem;
          line-height: 1.25;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }

        .trusted-header p {
          font-size: 1.0625rem;
          color: rgba(15, 23, 42, 0.6);
        }

        .trusted-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(${totalColumns}, minmax(0, 1fr));
          grid-template-rows: 80px 130px 80px;
          padding: 2.5rem 0;
          gap: 0;
        }

        .grid-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1.5rem;
          border-style: dashed;
          border-color: rgba(15, 23, 42, 0.2);
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
          opacity: 0.7;
          transition: opacity 200ms ease, filter 200ms ease;
        }

        .trusted-card:hover img {
          filter: grayscale(0%);
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .trusted-container {
            padding: 4.5rem 1.5rem;
          }

          .trusted-header h2 {
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
