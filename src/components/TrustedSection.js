"use client";
import React from "react";

const TrustedBySection = () => {
  // Mock client logos - replace with your actual clients
  const clients = [
    {
      name: "Paragon Corp",
      logo: "https://www.paragon-innovation.com/static/media/paragon-corp.98d5977b.png",
    },
    {
      name: "Rose All Day Cosmetics",
      logo: "https://cdn.prod.website-files.com/6502a82cff431778b5d82829/65602fa2037d1d996bf6531f_black_logo.png",
    },
    {
      name: "Amser PTE LTD",
      logo: "https://amser.com/wp-content/uploads/2019/08/cropped-logo.png",
    },
    {
      name: "RevoU",
      logo: "https://storage.googleapis.com/danacita-website-v3-prd/website_v3/images/Logo-RevoU-5_1.original.png",
    },
    {
      name: "Bitlabs",
      logo: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1335/original/Bitlabs_Logo_-_Secondary_Full_Color.png",
    },
  ];

  // Duplicate for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="sm:py-20 bg-gray-50 relative overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have delivered measurable impact for data-driven teams across the
            region.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          {/* Main Logo Strip */}
          <div className="flex items-center">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                style={{
                  animation: `scroll-logos 40s linear infinite`,
                  animationDelay: "0s",
                }}
              >
                {/* Fixed width container for uniform spacing */}
                <div className="w-40 sm:w-44 lg:w-48 h-16 sm:h-18 lg:h-20 flex items-center justify-center mx-6 sm:mx-8 lg:mx-10 p-4 rounded-lg transition-all duration-300 hover:bg-white/50 group-hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-300"
                      style={{
                        // Ensure minimum size for very small logos
                        minWidth: "80px",
                        minHeight: "32px",
                      }}
                    />
                  </div>
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
            transform: translateX(-50%);
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
