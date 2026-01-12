// src/app/about/page.js
import NewAboutHero from "@/components/about/NewAboutHero";
import NewAboutPrinciple from "@/components/about/NewAboutPrinciple";
import NewAboutTeam from "@/components/about/NewAboutTeam";
import NewAboutCTA from "@/components/about/NewAboutCTA";
import NewAboutMission from "@/components/about/NewAboutMission";
import NewAboutHistory from "@/components/about/NewAboutHistory";

export const metadata = {
  title: "About Us - Meet the AltraByte Team | AltraByte",
  description:
    "Meet the team building AltraByte. We're on a mission to help businesses transform their data infrastructure from manual chaos to intelligent automation.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About AltraByte - Building Intelligent Foundations",
    url: "https://altrabyte.com/about",
    images: [{ url: "/images/og-about.png", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <NewAboutHero />

      {/* Principle Section */}
      <NewAboutPrinciple />

      {/* Mission Section */}
      <NewAboutMission />

      {/* Team Section */}
      <NewAboutTeam />

      {/* History Section */}
      <NewAboutHistory />

      {/* CTA Section */}
      <NewAboutCTA />
    </div>
  );
}
