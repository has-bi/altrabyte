// src/app/about/page.js
import AboutHero from "@/components/about/AboutHero";
import AboutProblems from "@/components/about/AboutProblems";
import AboutDifferences from "@/components/about/AboutDifferences";
import AboutIndustries from "@/components/about/AboutIndustries";
import AboutSpeed from "@/components/about/AboutSpeed";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About - AltraByte",
  description:
    "Why we deliver faster than other data consultants. We bring business-first thinking to data and automation.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <AboutHero />

      {/* Problems Section */}
      <AboutProblems />

      {/* Differences Section */}
      <AboutDifferences />

      {/* Industries Section */}
      <AboutIndustries />

      {/* Speed Section */}
      <AboutSpeed />

      {/* CTA Section */}
      <AboutCTA />
    </div>
  );
}
