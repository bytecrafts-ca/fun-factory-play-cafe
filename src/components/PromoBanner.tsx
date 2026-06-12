import { Button } from "@/components/ui/Button";
import { promoText, siteRoutes } from "@/lib/site";

export function PromoBanner() {
  return (
    <section className="bg-sunshine">
      <div className="container-main flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <h2 className="text-xl font-extrabold text-charcoal sm:text-2xl">
          {promoText}
        </h2>
        <Button href={siteRoutes.play} variant="primary" size="lg">
          View Play Rates
        </Button>
      </div>
    </section>
  );
}
