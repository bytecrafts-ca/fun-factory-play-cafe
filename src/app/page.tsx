import { AdmissionsTable } from "@/components/AdmissionsTable";
import { ContactForm } from "@/components/ContactForm";
import { GalleryGrid, GalleryLink } from "@/components/GalleryGrid";
import { GoogleMap } from "@/components/GoogleMap";
import { Hero } from "@/components/Hero";
import { PartyCards } from "@/components/PartyCards";
import { PromoBanner } from "@/components/PromoBanner";
import { RulesChips } from "@/components/RulesChips";
import { RulesStrip } from "@/components/RulesStrip";
import { SocialLinks } from "@/components/SocialLinks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { UltimatePartyCard } from "@/components/UltimatePartyCard";
import { WaiverCTA } from "@/components/WaiverCTA";
import { importantInfo, siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RulesStrip />

      <section className="section-pad bg-section-sky">
        <div className="container-main">
          <SectionHeading title="Important info" accent="sky" />
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
        <div className="container-main grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeading title="Play rates" centered={false} accent="mint" />
          <AdmissionsTable showNotes={false} />
        </div>
      </section>

      <PromoBanner />

      <section className="section-pad bg-section-lavender">
        <div className="container-main">
          <SectionHeading title="Birthday Parties" accent="lavender" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted">
            {siteConfig.partyIncludeText}
          </p>
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
          <SectionHeading title="Littles & Lattés" accent="peach" />
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
            <GalleryGrid limit={3} />
            <GalleryLink />
          </div>
        </div>
      </section>

      <WaiverCTA />

      <section className="section-pad bg-section-sky">
        <div className="container-main">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading title="Contact us" centered={false} accent="sky" />
              <div className="mt-8 space-y-3 text-sm text-muted">
                <p>
                  <span className="font-semibold text-charcoal">Address:</span>{" "}
                  <a
                    href={siteConfig.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-charcoal hover:underline"
                  >
                    {siteConfig.address.full}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-charcoal">Phone:</span>{" "}
                  <a href={siteConfig.phoneHref} className="hover:text-charcoal">
                    {siteConfig.phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-charcoal">Email:</span>{" "}
                  <a href={siteConfig.emailHref} className="hover:text-charcoal">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
              <div className="mt-6">
                <SocialLinks showLabels />
              </div>
              <div className="mt-8">
                <GoogleMap />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
