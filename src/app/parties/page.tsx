import type { Metadata } from "next";
import { PartyCards } from "@/components/PartyCards";
import { UltimatePartyCard } from "@/components/UltimatePartyCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  partyAddOns,
  partyCustomizeText,
  partyExtras,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Party Packages",
  description:
    "Birthday party packages at Fun Factory — from $369. Private room, playtime, pizza, cake, juice, host, and more.",
};

export default function PartiesPage() {
  return (
    <>
      <PageHero
        title="Party Packages"
        subtitle={siteConfig.partyIncludeText}
        accent="lavender"
      >
        <Button href={siteConfig.ovatu.partiesUrl} external variant="lavender" size="lg">
          Book Your Party
        </Button>
      </PageHero>

      <section className="section-pad bg-section-lavender">
        <div className="container-main">
          <SectionHeading title="Choose your package" accent="lavender" />
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
          <SectionHeading title="Party add-ons" accent="peach" />
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {partyAddOns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            {partyCustomizeText}
          </p>
          <ul className="mt-4 space-y-1 text-sm text-muted">
            <li>{partyExtras.additionalChild}</li>
            <li>{partyExtras.additionalAdult}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
