import { Button } from "@/components/ui/Button";
import { siteConfig, socksReminder } from "@/lib/site";

export function WaiverCTA() {
  const isExternal = siteConfig.waiverUrl.startsWith("http");

  return (
    <section className="border-y border-peach/40 bg-bubblegum/20">
      <div className="container-main flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold text-charcoal sm:text-3xl">
            {socksReminder}
          </h2>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button
            href={siteConfig.waiverUrl}
            external={isExternal}
            variant="primary"
            size="lg"
          >
            Sign Waiver
          </Button>
          <Button href="/waiver" variant="outline" size="lg">
            View Rules
          </Button>
        </div>
      </div>
    </section>
  );
}
