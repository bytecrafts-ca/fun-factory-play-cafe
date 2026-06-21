import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RulesStrip } from "@/components/RulesStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata, getBreadcrumbSchema, pageSeo } from "@/lib/seo";
import { facilityRules, siteConfig, waiverText } from "@/lib/site";

export const metadata = createPageMetadata(pageSeo.waiver);

export default function WaiverPage() {
  const isExternal = siteConfig.waiverUrl.startsWith("http");

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Waiver & Rules", path: "/waiver" },
        ])}
      />
      <PageHero
        title="Waiver & Rules"
        subtitle={waiverText}
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
