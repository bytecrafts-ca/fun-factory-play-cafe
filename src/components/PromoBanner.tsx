import { Button } from "@/components/ui/Button";
import { promoText, siteConfig } from "@/lib/site";

export function PromoBanner() {
  return (
    <section className="bg-sunshine">
      <div className="container-main flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <h2 className="text-xl font-extrabold text-charcoal sm:text-2xl">
          {promoText}
        </h2>
        <Button
          href={siteConfig.ovatu.ticketsUrl}
          external
          variant="primary"
          size="lg"
        >
          Get Tickets
        </Button>
      </div>
    </section>
  );
}
