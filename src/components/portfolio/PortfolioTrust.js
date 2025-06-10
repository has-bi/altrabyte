// components/portfolio/PortfolioTrust.js
"use client";
import React from "react";

const PortfolioTrust = () => {
  const trustedClients = [
    { name: "Paragon Beauty", logo: "PB" },
    { name: "Youvit", logo: "YV" },
    { name: "Distributor X", logo: "DX" },
    { name: "Startup Y", logo: "SY" },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-8">
            Trusted by brands across eCommerce, beauty, logistics, and health.
          </h2>

          {/* Client Logos - following TrustedSection.js pattern */}
          <div className="flex items-center justify-center space-x-8 lg:space-x-12">
            {trustedClients.map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-xl border border-gray-100 flex items-center justify-center transition-all duration-300 hover:shadow-sm hover:border-gray-200">
                  <span className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                    {client.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTrust;
