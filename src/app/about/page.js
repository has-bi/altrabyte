// src/app/about/page.js
import AboutHero from "@/components/about/AboutHero";
import AboutProblems from "@/components/about/AboutProblems";
import AboutDifferences from "@/components/about/AboutDifferences";
import AboutIndustries from "@/components/about/AboutIndustries";
import AboutSpeed from "@/components/about/AboutSpeed";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About - Why We Deliver Faster Than Other Data Consultants",
  description:
    "Learn why AltraByte delivers data analytics and AI automation solutions faster than traditional consultants. We bring business-first thinking to data and automation.",
  openGraph: {
    title: "About AltraByte - Why We Deliver Faster",
    url: "https://altrabyte.com/about",
    images: [{ url: "/images/og-about.png", width: 1200, height: 630 }],
  },
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
