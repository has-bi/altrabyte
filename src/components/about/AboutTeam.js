"use client";

import { useState, useEffect, useRef } from "react";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Hasbi Assidiqi",
    role: "Founder & CEO",
    description:
      "Building intelligent automation solutions to help businesses transform their data infrastructure and unlock their full potential.",
    linkedin: "https://www.linkedin.com/in/hasbiassidiqi/",
    image: "/images/team/hasbi.jpg", // You'll need to add actual images
  },
  {
    name: "[Co-Founder Name]",
    role: "Co-Founder & CTO",
    description:
      "Passionate about leveraging technology to solve complex business challenges and drive innovation in data analytics.",
    linkedin: "https://www.linkedin.com/", // Add actual LinkedIn URL
    image: "/images/team/cofounder.jpg", // You'll need to add actual images
  },
];

export default function AboutTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

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

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-card-index"));
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => cardObserver.disconnect();
  }, [visibleCards]);

  return (
    <section ref={sectionRef} className="team-section">
      <div className="team-container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? "is-visible" : ""}`}>
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-description">
            Founded by experienced professionals committed to transforming how
            businesses leverage data and automation
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-card-index={index}
              className={`team-card ${
                visibleCards.includes(index) ? "is-visible" : ""
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Profile Image */}
              <div className="profile-image-container">
                <div className="profile-image">
                  <div className="image-placeholder">
                    <span className="initials">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                <div className="profile-decoration" />
              </div>

              {/* Profile Content */}
              <div className="profile-content">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>

                {/* LinkedIn Link */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <span className="linkedin-icon">
                    <Linkedin size={20} />
                  </span>
                  <span className="linkedin-text">Connect on LinkedIn</span>
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5rem 7.5rem;
          background: linear-gradient(
            180deg,
            #ffffff 0%,
            #fbf7f6 50%,
            #ffffff 100%
          );
        }

        .team-container {
          max-width: 75rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .section-header.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 3.5rem;
          line-height: 128%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
        }

        .section-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.5rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #414e5b;
          margin: 0;
          max-width: 48rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          width: 100%;
        }

        .team-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 2.5rem;
          gap: 2rem;
          background: #ffffff;
          border: 2px solid #e7e9eb;
          border-radius: 1.5rem;
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .team-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .team-card:hover {
          transform: translateY(-8px);
          border-color: #7863fc;
          box-shadow: 0 12px 40px rgba(120, 99, 252, 0.15);
        }

        .team-card:hover .profile-decoration {
          opacity: 1;
          transform: scale(1.05);
        }

        .team-card:hover .profile-image {
          transform: scale(1.05);
        }

        .profile-image-container {
          position: relative;
          width: 12rem;
          height: 12rem;
        }

        .profile-image {
          width: 12rem;
          height: 12rem;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(135deg, #7863fc 0%, #6b54e8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #7863fc 0%, #6b54e8 100%);
        }

        .initials {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 3rem;
          line-height: 1;
          color: #ffffff;
          text-transform: uppercase;
        }

        .profile-decoration {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 12rem;
          height: 12rem;
          border-radius: 50%;
          border: 2px dashed rgba(120, 99, 252, 0.3);
          z-index: 1;
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .profile-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          width: 100%;
          text-align: center;
        }

        .member-name {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 2rem;
          line-height: 128%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
        }

        .member-role {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #7863fc;
          margin: 0;
        }

        .member-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 160%;
          letter-spacing: -0.01em;
          color: #414e5b;
          margin: 0;
        }

        .linkedin-link {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: #122232;
          border-radius: 100px;
          text-decoration: none;
          margin-top: 0.5rem;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .linkedin-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(18, 34, 50, 0.24);
          background: #1a2e42;
        }

        .linkedin-link:hover .link-arrow {
          transform: translateX(4px);
        }

        .linkedin-icon {
          width: 1.25rem;
          height: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .linkedin-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
          line-height: 150%;
          letter-spacing: -0.01em;
          color: #ffffff;
        }

        .link-arrow {
          font-size: 1.25rem;
          color: #ffffff;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @media (max-width: 1024px) {
          .team-section {
            padding: 4rem 3rem;
          }

          .team-container {
            gap: 3rem;
          }

          .section-title {
            font-size: 3rem;
          }

          .section-description {
            font-size: 1.25rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .team-section {
            padding: 3rem 1.5rem;
          }

          .team-container {
            gap: 2.5rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .section-description {
            font-size: 1.125rem;
          }

          .team-card {
            padding: 2.5rem 2rem;
            gap: 1.5rem;
          }

          .profile-image-container {
            width: 10rem;
            height: 10rem;
          }

          .profile-image {
            width: 10rem;
            height: 10rem;
          }

          .profile-decoration {
            width: 10rem;
            height: 10rem;
          }

          .initials {
            font-size: 2.5rem;
          }

          .member-name {
            font-size: 1.75rem;
          }

          .member-role {
            font-size: 1.125rem;
          }

          .member-description {
            font-size: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .section-header,
          .team-card,
          .profile-image,
          .profile-decoration,
          .linkedin-link {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
