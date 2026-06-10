import type { Metadata } from "next";
import Image from "next/image";
import { AdmissionsTable } from "@/components/AdmissionsTable";
import { Button } from "@/components/ui/Button";
import { HoursWidget } from "@/components/HoursWidget";
import { PageHero } from "@/components/PageHero";
import { PromoBanner } from "@/components/PromoBanner";
import { RulesChips } from "@/components/RulesChips";
import { RulesStrip } from "@/components/RulesStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageHeroes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Play & Admissions",
  description:
    "Drop-in play rates at Fun Factory. Socks and waiver required. Tuesdays & Thursdays 50% off.",
};

export default function PlayPage() {
  return (
    <>
      <PageHero
        title="Play Rates"
        subtitle="Drop-in admission for ages 1–17. Socks and a signed waiver are required for every visit."
        image={pageHeroes.play.src}
        imageAlt={pageHeroes.play.alt}
        accent="sky"
      >
        <Button href={siteConfig.ovatu.ticketsUrl} external variant="primary" size="lg">
          Buy Tickets
        </Button>
      </PageHero>

      <RulesStrip />

      <section className="section-pad">
        <div className="container-main grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Admissions" centered={false} accent="sky" />
            <div className="mt-6">
              <AdmissionsTable />
            </div>
          </div>
          <div className="space-y-6">
            <HoursWidget />
            <div className="card overflow-hidden p-2">
              <Image
                src="/play-rates.jpg"
                alt="Fun Factory admissions pricing chart"
                width={869}
                height={491}
                className="h-auto w-full rounded-[12px]"
              />
            </div>
          </div>
        </div>
      </section>

      <PromoBanner />

      <section className="section-pad bg-white">
        <div className="container-main">
          <SectionHeading title="Before Your Visit!" accent="mint" />
          <div className="mt-10">
            <RulesChips />
          </div>
        </div>
      </section>
    </>
  );
}
