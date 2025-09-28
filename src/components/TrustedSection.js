"use client";
import React from "react";

const clients = [
  {
    name: "Paragon Corp",
    logo:
      "https://www.paragon-innovation.com/static/media/paragon-corp.98d5977b.png",
    baseScale: 1,
  },
  {
    name: "Amser PTE LTD",
    logo: "https://amser.com/wp-content/uploads/2019/08/cropped-logo.png",
    baseScale: 0.88,
  },
  {
    name: "Bitlabs",
    logo:
      "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1335/original/Bitlabs_Logo_-_Secondary_Full_Color.png",
    baseScale: 0.94,
  },
  {
    name: "RevoU",
    logo:
      "https://storage.googleapis.com/danacita-website-v3-prd/website_v3/images/Logo-RevoU-5_1.original.png",
    baseScale: 0.92,
  },
  {
    name: "Rosé All Day Cosmetics",
    logo:
      "https://cdn.prod.website-files.com/6502a82cff431778b5d82829/65602fa2037d1d996bf6531f_black_logo.png",
    baseScale: 0.82,
  },
];

const TrustedBySection = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <div className="trusted-header">
          <h2>Trusted by Growing Businesses Across Industries</h2>
          <p>Companies that chose foundation-first transformation.</p>
        </div>

        <div className="trusted-grid">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="trusted-card"
              style={{ "--card-index": index }}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                loading="lazy"
                decoding="async"
                style={{
                  "--logo-base-scale": client.baseScale ?? 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .trusted-section {
          background: rgba(15, 23, 42, 0.03);
        }

        .trusted-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 2rem;
        }

        .trusted-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 3rem;
        }

        .trusted-header h2 {
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: 600;
          color: #111827;
          margin-bottom: 1rem;
        }

        .trusted-header p {
          font-size: 1.125rem;
          color: rgba(55, 65, 81, 0.7);
        }

        .trusted-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          column-gap: 32px;
          row-gap: 24px;
          justify-content: center;
        }

        .trusted-card {
          width: 240px;
          height: 140px;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fafafa;
          border: 2px dashed #e5e5e5;
          border-radius: 12px;
          transition: transform 200ms ease, box-shadow 200ms ease,
            border-color 200ms ease;
          animation: border-draw 700ms ease forwards;
          animation-delay: calc(var(--card-index) * 80ms);
          opacity: 0;
        }

        .trusted-card img {
          max-height: 60%;
          max-width: 60%;
          width: auto;
          opacity: 0.75;
          transition: opacity 200ms ease, transform 200ms ease, filter 200ms ease;
          filter: grayscale(100%);
          transform: scale(var(--logo-base-scale, 1));
        }

        .trusted-card:hover {
          transform: translateY(-4px);
          border-color: #d1d5db;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
        }

        .trusted-card:hover img {
          opacity: 1;
          transform: scale(calc(var(--logo-base-scale, 1) * 1.05));
          filter: grayscale(0%);
        }

        @keyframes border-draw {
          0% {
            opacity: 0;
            border-color: transparent;
          }
          40% {
            opacity: 1;
            border-color: transparent;
          }
          100% {
            opacity: 1;
            border-color: #e5e5e5;
          }
        }

        @media (max-width: 1024px) {
          .trusted-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            column-gap: 24px;
            row-gap: 20px;
          }

          .trusted-card {
            width: 200px;
            height: 120px;
            padding: 20px;
            border-width: 1.5px;
          }
        }

        @media (max-width: 768px) {
          .trusted-container {
            padding: 4rem 1.5rem;
          }

          .trusted-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 24px;
            row-gap: 20px;
          }

          .trusted-card img {
            max-height: 50px;
          }
        }

        @media (max-width: 480px) {
          .trusted-container {
            padding: 3rem 1.25rem;
          }

          .trusted-grid {
            grid-template-columns: 1fr;
            row-gap: 1.5rem;
          }

          .trusted-card {
            width: 100%;
            max-width: 360px;
            margin: 0 auto;
            height: 120px;
            padding: 20px;
            border-width: 1px;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedBySection;
