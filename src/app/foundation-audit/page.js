// app/foundation-audit/page.js
import FoundationAuditHero from "@/components/foundation/FoundationAuditHero";
import FoundationAuditSteps from "@/components/foundation/FoundationAuditSteps";
import FoundationAuditPaths from "@/components/foundation/FoundationAuditPaths";
import FoundationAuditCompare from "@/components/foundation/FoundationAuditCompare";

export const metadata = {
  title: "Foundation Audit - Validate Your Data & AI Readiness",
  description:
    "A 10-day audit that pressure-tests your data, workflows, and governance. Get a prioritized blueprint before you invest in automation or AI.",
  openGraph: {
    title: "Foundation Audit - Validate Your Data & AI Readiness",
    description:
      "A 10-day audit that pressure-tests your data, workflows, and governance. Get a prioritized blueprint before you invest in automation or AI.",
    url: "https://altrabyte.com/foundation-audit",
    images: [{ url: "/images/og-foundation-audit.png", width: 1200, height: 630 }],
  },
};

export default function FoundationAuditPage() {
  return (
    <div className="bg-white">
      <FoundationAuditHero />
      <FoundationAuditSteps />
      <FoundationAuditPaths />
      <FoundationAuditCompare />
    </div>
  );
}
