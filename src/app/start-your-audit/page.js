import StartYourAuditHero from "@/components/start-your-audit/StartYourAuditHero";
import StartYourAuditProcess from "@/components/start-your-audit/StartYourAuditProcess";
import StartYourAuditDeliverable from "@/components/start-your-audit/StartYourAuditDeliverable";
import StartYourAuditGuarantee from "@/components/start-your-audit/StartYourAuditGuarantee";
import StartYourAuditPrepare from "@/components/start-your-audit/StartYourAuditPrepare";
import StartYourAuditBooking from "@/components/start-your-audit/StartYourAuditBooking";
import StartYourAuditForm from "@/components/start-your-audit/StartYourAuditForm";
import StartYourAuditNextSteps from "@/components/start-your-audit/StartYourAuditNextSteps";
import StartYourAuditFAQ from "@/components/start-your-audit/StartYourAuditFAQ";
import StartYourAuditCTA from "@/components/start-your-audit/StartYourAuditCTA";

export const metadata = {
  title:
    "Start Your Audit - Discover What's Breaking Your Business | AltraByte",
  description:
    "Book your Foundation Audit and see exactly where you stand. In 90 minutes, we'll show you what you actually need to transform your business from manual chaos to intelligent automation.",
};

export default function StartYourAuditPage() {
  return (
    <div className="bg-white">
      <StartYourAuditHero />
      <StartYourAuditProcess />
      <StartYourAuditDeliverable />
      <StartYourAuditGuarantee />
      <StartYourAuditPrepare />
      <StartYourAuditBooking />
      <StartYourAuditForm />
      <StartYourAuditNextSteps />
      <StartYourAuditFAQ />
      <StartYourAuditCTA />
    </div>
  );
}
