import { Button } from "@/components/ui/Button";
import { HoursWidget } from "@/components/HoursWidget";
import { PageHero } from "@/components/PageHero";
import { getOpenStatusMessage, isOpenNow, siteConfig } from "@/lib/site";

export function Hero() {
  const open = isOpenNow();
  const statusMessage = getOpenStatusMessage();

  return (
    <PageHero
      title="Welcome to Fun Factory Play Café"
      subtitle={siteConfig.welcomeText}
      eyebrow={
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold text-charcoal ${
            open ? "border-mint/60 bg-mint/30" : "border-peach/60 bg-peach/30"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${open ? "bg-mint" : "bg-peach"}`}
            aria-hidden
          />
          {statusMessage}
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
