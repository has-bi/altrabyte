import FoundationFirstHero from "@/components/foundation-first/FoundationFirstHero";

export const metadata = {
  title: "Why Foundation First - Build AI on truth, not theater",
  description:
    "See why every successful AI or automation program starts with a foundation audit, operator ownership, and a 90-day cadence.",
};

export default function FoundationFirstPage() {
  return (
    <div className="bg-white">
      <FoundationFirstHero />
    </div>
  );
}
