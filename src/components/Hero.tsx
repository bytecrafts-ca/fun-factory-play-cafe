import { Button } from "@/components/ui/Button";
import { HoursWidget } from "@/components/HoursWidget";
import { PageHero } from "@/components/PageHero";
import { isOpenNow, siteConfig } from "@/lib/site";

export function Hero() {
  const open = isOpenNow();

  return (
    <PageHero
      title="Welcome to Fun Factory!"
      subtitle={siteConfig.welcomeText}
      eyebrow={
        <div className="inline-flex items-center gap-2 rounded-full border border-mint/60 bg-mint/30 px-3 py-1.5 text-xs font-semibold text-charcoal">
          <span
            className={`h-2 w-2 rounded-full ${open ? "bg-mint" : "bg-peach"}`}
            aria-hidden
          />
          {open ? "Open now" : "See hours for today"}
        </div>
      }
      accent="peach"
      priority
      aside={<HoursWidget compact />}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={siteConfig.ovatu.ticketsUrl} external variant="primary" size="lg">
          Buy Tickets
        </Button>
        <Button href={siteConfig.ovatu.partiesUrl} external variant="secondary" size="lg">
          Book a Party
        </Button>
      </div>
    </PageHero>
  );
}
