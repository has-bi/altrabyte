"use client";
import React from "react";

const TrustedBySection = () => {
  // Mock client logos - replace with your actual clients
  const clients = [
    {
      name: "Microsoft",
      logo: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Microsoft",
    },
    {
      name: "Google",
      logo: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Google",
    },
    {
      name: "Amazon",
      logo: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Amazon",
    },
    {
      name: "IBM",
      logo: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=IBM",
    },
    {
      name: "Oracle",
      logo: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Oracle",
    },
    {
      name: "SAP",
      logo: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=SAP",
    },
    {
      name: "Salesforce",
      logo: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Salesforce",
    },
    {
      name: "Adobe",
      logo: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Adobe",
    },
  ];

  // Duplicate for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="sm:py-20 bg-gray-50 relative overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fortune 500 companies trust us to transform their data into
            competitive advantages
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          {/* Main Logo Strip */}
          <div className="flex space-x-12 sm:space-x-16 lg:space-x-20 items-center">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                style={{
                  animation: `scroll-logos 40s linear infinite`,
                  animationDelay: "0s",
                }}
              >
                <div className="w-32 h-16 sm:w-36 sm:h-18 lg:w-40 lg:h-20 flex items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 group-hover:scale-105">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.001s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustedBySection;
