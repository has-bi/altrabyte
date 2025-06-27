// src/components/about/AboutProblems.js
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Clock, Target, BarChart3, Users } from "lucide-react";

const AboutProblems = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const problems = [
    {
      text: "Spend weeks learning your industry instead of solving problems",
      icon: Clock,
    },
    {
      text: "Build dashboards that look impressive but confuse your team",
      icon: BarChart3,
    },
    {
      text: "Need constant hand-holding and endless status meetings",
      icon: Users,
    },
    {
      text: "Miss the business context that makes data actually useful",
      icon: Target,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          problems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  return (
    <section ref={sectionRef} className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-6">
              What Slows Most Projects Down
            </h2>
            <p className="text-lg text-secondary">
              <span className="font-semibold text-primary">
                Most consultants:
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`
                  bg-white rounded-2xl p-6 border-2 transition-all duration-300 h-full
                  ${
                    hoveredCard === index
                      ? "border-red-300 shadow-lg transform -translate-y-1"
                      : "border-gray-100 shadow-sm hover:border-gray-200"
                  }
                `}
                >
                  <div className="flex items-start space-x-4 h-full">
                    {/* Icon with subtle warning color */}
                    <div
                      className={`
                      w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
                      ${hoveredCard === index ? "bg-red-100" : "bg-gray-50"}
                    `}
                    >
                      {React.createElement(problem.icon, {
                        className: `w-6 h-6 transition-colors duration-300 ${
                          hoveredCard === index
                            ? "text-red-600"
                            : "text-gray-400"
                        }`,
                        strokeWidth: 1.5,
                      })}
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-h-[3rem] flex items-center">
                      <p
                        className={`
                        text-lg leading-relaxed transition-colors duration-300
                        ${
                          hoveredCard === index
                            ? "text-red-800 font-medium"
                            : "text-secondary"
                        }
                      `}
                      >
                        {problem.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Result statement - more subtle */}
          <div className="text-center">
            <div className="inline-flex items-center px-8 py-4 bg-gray-50 rounded-2xl border border-gray-200 transition-all duration-300 hover:bg-gray-100">
              <p className="text-lg font-medium text-primary">
                <strong>The result:</strong> You waste time explaining your
                business instead of getting solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations for enhanced hover effects */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutProblems;
