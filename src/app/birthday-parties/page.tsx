import { JsonLd } from "@/components/JsonLd";
import { PartyCards } from "@/components/PartyCards";
import { UltimatePartyCard } from "@/components/UltimatePartyCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  createPageMetadata,
  getBreadcrumbSchema,
  getPartyOffersSchema,
  pageSeo,
} from "@/lib/seo";
import { partyAddOns, partyCustomizeText, partyExtras, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(pageSeo.parties);

export default function BirthdayPartiesPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Birthday Parties", path: "/birthday-parties" },
          ]),
          getPartyOffersSchema(),
        ]}
      />
      <PageHero
        title="Birthday Party Packages"
        subtitle={
          <div className="space-y-2">
            {siteConfig.partyIncludeText.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        }
        accent="lavender"
      >
        <Button href={siteConfig.ovatu.partiesUrl} external variant="lavender" size="lg">
          Book Your Party
        </Button>
      </PageHero>

      <section className="section-pad bg-section-lavender">
        <div className="container-main">
          <SectionHeading title="Birthday Party Packages" accent="lavender" />
          <div className="mt-10">
            <PartyCards />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading title="Ultimate Fun Party" accent="sunshine" />
          <div className="mt-8">
            <UltimatePartyCard />
          </div>
        </div>
      </section>

      <section className="section-pad bg-section-peach">
        <div className="container-main max-w-2xl">
          <SectionHeading title="Additional Party Options" accent="peach" />
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {partyAddOns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">{partyCustomizeText}</p>
          <ul className="mt-4 space-y-1 text-sm text-muted">
            <li>{partyExtras.additionalChild}</li>
            <li>{partyExtras.additionalAdult}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
