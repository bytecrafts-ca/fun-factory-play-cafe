import { Button } from "@/components/ui/Button";
import { HoursWidget } from "@/components/HoursWidget";
import { isOpenNow, siteConfig } from "@/lib/site";

export function Hero() {
  const open = isOpenNow();

  return (
    <section className="relative border-b border-peach/40 bg-gradient-to-br from-cream via-white to-peach/20">
      <div className="container-main grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/60 bg-mint/30 px-3 py-1.5 text-xs font-semibold text-charcoal">
            <span
              className={`h-2 w-2 rounded-full ${open ? "bg-mint" : "bg-peach"}`}
              aria-hidden
            />
            {open ? "Open now" : "See hours for today"}
          </div>

          <h1 className="text-[2.75rem] font-extrabold leading-[0.95] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Welcome to Fun Factory!
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            {siteConfig.welcomeText}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={siteConfig.ovatu.ticketsUrl}
              external
              variant="primary"
              size="lg"
            >
              Buy Tickets
            </Button>
            <Button
              href={siteConfig.ovatu.partiesUrl}
              external
              variant="secondary"
              size="lg"
            >
              Book a Party
            </Button>
          </div>
        </div>

        <HoursWidget compact />
      </div>
      <div className="palette-bar" aria-hidden />
    </section>
  );
}
