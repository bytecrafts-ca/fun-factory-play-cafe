import { AdmissionsTable } from "@/components/AdmissionsTable";
import { GalleryGrid, GalleryLink } from "@/components/GalleryGrid";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Hero } from "@/components/Hero";
import { PartyCards } from "@/components/PartyCards";
import { PromoBanner } from "@/components/PromoBanner";
import { RulesChips } from "@/components/RulesChips";
import { RulesStrip } from "@/components/RulesStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { UltimatePartyCard } from "@/components/UltimatePartyCard";
import { importantInfo, siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RulesStrip />

      <section className="section-pad bg-section-sky">
        <div className="container-main">
          <SectionHeading title="Important Info" accent="sky" />
          <ul className="mx-auto mt-8 grid max-w-2xl gap-2">
            {importantInfo.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-white px-4 py-3 text-sm text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading title="Play Rates" centered={false} accent="mint" />
          <div className="mt-6 max-w-xl">
            <AdmissionsTable showNotes={false} />
          </div>
        </div>
      </section>

      <PromoBanner />

      <section className="section-pad bg-section-lavender">
        <div className="container-main">
          <SectionHeading title="Birthday Parties" accent="lavender" />
          <div className="mx-auto mt-4 max-w-2xl space-y-2 text-center text-sm leading-relaxed text-muted">
            {siteConfig.partyIncludeText.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-10">
            <PartyCards />
          </div>
          <div className="mt-8">
            <UltimatePartyCard />
          </div>
        </div>
      </section>

      <section className="section-pad bg-section-mint">
        <div className="container-main">
          <SectionHeading title="Before Your Visit!" accent="mint" />
          <div className="mt-10">
            <RulesChips />
          </div>
        </div>
      </section>

      <section className="section-pad bg-section-peach">
        <div className="container-main text-center">
          <SectionHeading title="Littles & Lattés Café" accent="peach" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            {siteConfig.littlesAndLattesText}
          </p>
          <div className="mt-6">
            <Button href="/cafe" variant="secondary" size="lg">
              View Café Menu
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading title="Gallery" accent="bubblegum" />
          <div className="mt-10">
            <GalleryGrid limit={6} />
            <GalleryLink />
          </div>
        </div>
      </section>

      <GoogleReviews />
    </>
  );
}
