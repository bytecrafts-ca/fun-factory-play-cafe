import { Button } from "@/components/ui/Button";
import { HoursWidget } from "@/components/HoursWidget";
import { PageHero } from "@/components/PageHero";
import { getPartyBookingUrl, siteConfig, siteRoutes } from "@/lib/site";

export function Hero() {
  return (
    <PageHero
      title="Indoor Playground & Birthday Parties in Pickering"
      subtitle={siteConfig.welcomeText}
      accent="peach"
      priority
      aside={<HoursWidget compact />}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href={siteRoutes.play} variant="primary" size="lg">
          Drop-In Play
        </Button>
        <Button href="/birthday-parties" variant="lavender" size="lg">
          Party Packages
        </Button>
        <Button href="/cafe" variant="secondary" size="lg">
          Café Menu
        </Button>
        <Button href={getPartyBookingUrl()} external variant="secondary" size="lg">
          Book a Party
        </Button>
      </div>
    </PageHero>
  );
}
