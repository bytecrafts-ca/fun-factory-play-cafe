import { Button } from "@/components/ui/Button";
import { HoursWidget } from "@/components/HoursWidget";
import { PageHero } from "@/components/PageHero";
import { siteConfig, siteRoutes } from "@/lib/site";

export function Hero() {
  return (
    <PageHero
      title="Welcome to Fun Factory Play Café"
      subtitle={siteConfig.welcomeText}
      accent="peach"
      priority
      aside={<HoursWidget compact />}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={siteRoutes.play} variant="primary" size="lg">
          Drop-In Play
        </Button>
        <Button href={siteConfig.ovatu.partiesUrl} external variant="secondary" size="lg">
          Book a Party
        </Button>
      </div>
    </PageHero>
  );
}
