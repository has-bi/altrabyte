"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const NewAboutCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="cta-section">
      <div className="cta-container">
        {/* Main CTA Container */}
        <div className={`main-container ${isVisible ? "is-visible" : ""}`}>
          {/* CTA Content */}
          <div className="cta-content">
            {/* Left Column */}
            <div className="cta-text-column">
              <h2 className="cta-title">
                Ready to Work With a Foundation-First Team?
              </h2>
              <p className="cta-description">
                Let's build something solid together
              </p>
            </div>

            {/* Right Column - CTA Card */}
            <div className="cta-card">
              <div className="cta-card-text">
                Start With a Free Foundation Audit
              </div>
              <div className="cta-divider" />
              <Link
                href="/start-your-audit"
                className="group inline-flex w-full items-center justify-between rounded-full bg-[#122232] px-6 py-4 text-left text-white transition-all duration-300 hover:bg-[#1a2e42] hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="text-[18px] font-semibold tracking-[-0.01em]">
                  Schedule My Foundation Audit
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
              <div className="card-decoration" />
            </div>
          </div>

          {/* Why Work With Us Section */}
          <div className="consequences-section">
            <div className="consequences-grid">
              <div className="consequence-item">
                <div className="consequence-number">
                  <span>1</span>
                </div>
                <p className="consequence-text">
                  No sales pitch. Just honest assessment.
                </p>
              </div>

              <div className="consequence-item">
                <div className="consequence-number">
                  <span>2</span>
                </div>
                <p className="consequence-text">
                  Foundation-first approach every time.
                </p>
              </div>

              <div className="consequence-item">
                <div className="consequence-number">
                  <span>3</span>
                </div>
                <p className="consequence-text">
                  Practical solutions over perfect theories.
                </p>
              </div>

              <div className="consequence-item">
                <div className="consequence-number">
                  <span>4</span>
                </div>
                <p className="consequence-text">
                  Your business outcomes, our expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="testimonial-section">
            <p className="testimonial-text">
              "Let's see if we're the right fit. Book your audit today."
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5rem 7.5rem;
          background: #fbf7f6;
        }

        .cta-container {
          max-width: 85rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .main-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 5rem;
          gap: 2.5rem;
          width: 100%;
          background: #7863fc;
          border-radius: 2.5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 800ms ease, transform 800ms ease;
        }

        .main-container.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* CTA Content */
        .cta-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0;
          gap: 7.6875rem;
          width: 100%;
        }

        .cta-text-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 1.25rem;
          width: 36.875rem;
        }

        .cta-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 3.5rem;
          line-height: 128%;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
        }

        .cta-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .cta-card {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 2.5rem;
          gap: 1.5rem;
          isolation: isolate;
          margin: 0 auto;
          width: 30.4375rem;
          background: #f2efff;
          border: 3px solid #ffffff;
          box-shadow: 20px 40px 40px rgba(0, 0, 0, 0.12);
          border-radius: 0.75rem;
          position: relative;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cta-card:hover {
          transform: translateY(-6px);
          box-shadow: 20px 50px 50px rgba(0, 0, 0, 0.16),
            0 8px 24px rgba(120, 99, 252, 0.12);
        }

        .cta-card:hover .card-decoration {
          opacity: 0.6;
          transform: scale(1.1);
        }

        .cta-card-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 160%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #122232;
          width: 100%;
        }

        .cta-divider {
          width: 100%;
          height: 0;
          border: 1px dashed #122232;
        }

        .cta-button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 0.5rem 2rem;
          gap: 0.5rem;
          width: 100%;
          max-width: 20.625rem;
          height: 3.5rem;
          background: #122232;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 10;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(18, 34, 50, 0.24);
          background: #1a2e42;
        }

        .button-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.125rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #ffffff;
        }

        .button-icon {
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #ffffff;
        }

        .card-decoration {
          position: absolute;
          width: 1rem;
          height: 1rem;
          right: 0.75rem;
          top: 0.75rem;
          background: #e7e9eb;
          box-shadow: inset -2px 2px 2px rgba(0, 0, 0, 0.28);
          border-radius: 50%;
          z-index: 1;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Why Work With Us Section */
        .consequences-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          width: 100%;
        }

        .consequences-grid {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          gap: 2.5rem;
          width: 100%;
        }

        .consequence-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 0.75rem;
          flex: 1;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .consequence-item:hover {
          transform: translateY(-4px);
        }

        .consequence-item:hover .consequence-number {
          transform: scale(1.1) rotate(5deg);
        }

        .consequence-number {
          width: 2rem;
          height: 2rem;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
          line-height: 1;
          color: #ffffff;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .consequence-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
        }

        /* Testimonial Section */
        .testimonial-section {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 2.5rem 0 0;
          gap: 0.625rem;
          width: 100%;
          border-top: 1.5px dashed rgba(255, 255, 255, 0.4);
        }

        .testimonial-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 2rem;
          line-height: 128%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .cta-section {
            padding: 3.75rem 2.5rem;
          }

          .main-container {
            padding: 3.75rem 2.5rem;
            gap: 2rem;
          }

          .cta-content {
            flex-direction: column;
            gap: 2.5rem;
          }

          .cta-text-column {
            width: 100%;
          }

          .cta-card {
            width: 100%;
            max-width: 30.4375rem;
          }

          .consequences-grid {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
          }

          .consequence-item {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 3rem 1.25rem;
          }

          .main-container {
            padding: 2.5rem 1.5rem;
            gap: 1.75rem;
            border-radius: 1.5rem;
          }

          .cta-title {
            font-size: 2.5rem;
          }

          .cta-description {
            font-size: 1.25rem;
          }

          .cta-card {
            padding: 2rem 1.5rem;
            gap: 1.25rem;
          }

          .cta-card-text {
            font-size: 1.25rem;
          }

          .button-text {
            font-size: 1rem;
          }

          .consequence-text {
            font-size: 1.125rem;
          }

          .testimonial-text {
            font-size: 1.5rem;
          }

          .cta-content {
            gap: 2rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .main-container,
          .cta-card,
          .cta-button,
          .consequence-item,
          .card-decoration {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default NewAboutCTA;
