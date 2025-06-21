"use client";
import React, { useState } from "react";
import Image from "next/image";

const PortfolioTrust = () => {
  const [imageErrors, setImageErrors] = useState({});

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

  const handleImageError = (index) => {
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  // Generate initials from company name
  const generateInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 3); // Max 3 characters
  };

  return (
    <section className="py-16 lg:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 font-medium">
            Trusted by brands across eCommerce, beauty, logistics, and health
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative w-full h-16 flex items-center justify-center p-4 
                         bg-gray-50/50 rounded-2xl border border-gray-100/50
                         hover:bg-gray-50 hover:border-gray-200/50 
                         transition-all duration-300 ease-out
                         hover:shadow-sm hover:-translate-y-0.5"
            >
              {imageErrors[index] ? (
                // Elegant fallback with initials
                <div className="flex items-center justify-center w-full h-full">
                  <div
                    className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 
                                  rounded-xl flex items-center justify-center"
                  >
                    <span className="text-sm font-bold text-gray-600 select-none">
                      {generateInitials(client.name)}
                    </span>
                  </div>
                </div>
              ) : (
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={120}
                  height={40}
                  className="max-w-full max-h-full object-contain 
                             opacity-70 group-hover:opacity-100
                             transition-all duration-300 ease-out"
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  onError={() => handleImageError(index)}
                  unoptimized={true} // Bypass Next.js optimization for external images
                  priority={index < 3} // Prioritize first 3 images
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTrust;
