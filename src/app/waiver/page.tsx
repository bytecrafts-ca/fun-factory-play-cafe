import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/PageHero";
import { RulesStrip } from "@/components/RulesStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facilityRules, pageHeroes, siteConfig, waiverText } from "@/lib/site";

export const metadata: Metadata = {
  title: "Waiver & Rules",
  description:
    "Sign the Fun Factory waiver and review facility rules before your visit.",
};

export default function WaiverPage() {
  const isExternal = siteConfig.waiverUrl.startsWith("http");

  return (
    <>
      <PageHero
        title="Waiver & Rules"
        subtitle={waiverText}
        image={pageHeroes.waiver.src}
        imageAlt={pageHeroes.waiver.alt}
        accent="bubblegum"
      >
        <Button
          href={siteConfig.waiverUrl}
          external={isExternal}
          variant="primary"
          size="lg"
        >
          Sign Waiver
        </Button>
      </PageHero>

      <RulesStrip />

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading title="Facility rules" accent="mint" />
          <ol className="mx-auto mt-10 max-w-3xl list-decimal space-y-4 pl-5 text-sm leading-relaxed text-muted">
            {facilityRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
