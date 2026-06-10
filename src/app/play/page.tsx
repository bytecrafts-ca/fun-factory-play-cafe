import type { Metadata } from "next";
import Image from "next/image";
import { AdmissionsTable } from "@/components/AdmissionsTable";
import { Button } from "@/components/ui/Button";
import { HoursWidget } from "@/components/HoursWidget";
import { PromoBanner } from "@/components/PromoBanner";
import { RulesChips } from "@/components/RulesChips";
import { RulesStrip } from "@/components/RulesStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Play & Admissions",
  description:
    "Drop-in play rates at Fun Factory. Socks and waiver required. Tuesdays & Thursdays 50% off.",
};

export default function PlayPage() {
  return (
    <>
      <section className="border-b border-peach/40 bg-gradient-to-br from-cream to-sky/15">
        <div className="container-main py-14 sm:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            Play Rates
          </h1>
          <div className="mt-8">
            <Button
              href={siteConfig.ovatu.ticketsUrl}
              external
              variant="primary"
              size="lg"
            >
              Buy Tickets
            </Button>
          </div>
        </div>
      </section>

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
