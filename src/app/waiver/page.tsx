import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { RulesStrip } from "@/components/RulesStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facilityRules, siteConfig, waiverText } from "@/lib/site";

export const metadata: Metadata = {
  title: "Waiver & Rules",
  description:
    "Sign the Fun Factory waiver and review facility rules before your visit.",
};

export default function WaiverPage() {
  const isExternal = siteConfig.waiverUrl.startsWith("http");

  return (
    <>
      <section className="border-b border-peach/40 bg-gradient-to-br from-cream to-bubblegum/15">
        <div className="container-main py-14 sm:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            Waiver &amp; Rules
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {waiverText}
          </p>
          <div className="mt-8">
            <Button
              href={siteConfig.waiverUrl}
              external={isExternal}
              variant="primary"
              size="lg"
            >
              Sign Waiver
            </Button>
          </div>
        </div>
      </section>

      <RulesStrip />

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading title="Facility rules" accent="bubblegum" />
          <ol className="mx-auto mt-8 max-w-3xl space-y-3">
            {facilityRules.map((rule, i) => (
              <li
                key={rule}
                className="rounded-lg border border-border bg-white px-5 py-4 text-sm leading-relaxed text-muted"
              >
                <span className="mr-2 font-bold text-charcoal">{i + 1}.</span>
                {rule}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
