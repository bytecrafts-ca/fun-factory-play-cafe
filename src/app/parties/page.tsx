import type { Metadata } from "next";
import { PartyCards } from "@/components/PartyCards";
import { UltimatePartyCard } from "@/components/UltimatePartyCard";
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
      <section className="border-b border-peach/40 bg-gradient-to-br from-cream to-lavender/20">
        <div className="container-main py-14 sm:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            Party Packages
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {siteConfig.partyIncludeText}
          </p>
          <div className="mt-8">
            <Button
              href={siteConfig.ovatu.partiesUrl}
              external
              variant="lavender"
              size="lg"
            >
              Book Your Party
            </Button>
          </div>
        </div>
      </section>

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
