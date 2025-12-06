// src/app/about/page.js
import NewAboutHero from "@/components/about/NewAboutHero";
import NewAboutMission from "@/components/about/NewAboutMission";
import NewAboutTeam from "@/components/about/NewAboutTeam";
import NewAboutCTA from "@/components/about/NewAboutCTA";

export const metadata = {
  title: "About Us - Meet the Altrabyte Team | Altrabyte",
  description:
    "Meet the team building Altrabyte. We're on a mission to help businesses transform their data infrastructure from manual chaos to intelligent automation.",
  openGraph: {
    title: "About Altrabyte - Building Intelligent Foundations",
    url: "https://altrabyte.com/about",
    images: [{ url: "/images/og-about.png", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <NewAboutHero />

      {/* Mission Section */}
      <NewAboutMission />

      {/* Team Section */}
      <NewAboutTeam />

      {/* CTA Section */}
      <NewAboutCTA />
    </div>
  );
}
