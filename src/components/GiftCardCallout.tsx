import { IconGift } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function GiftCardCallout({ compact = false }: { compact?: boolean }) {
  return (
    <div
      id="gift-cards"
      className={`scroll-mt-28 rounded-[var(--radius-card)] border border-sunshine bg-[#fff8e1] ${
        compact
          ? "p-5"
          : "flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sunshine text-charcoal">
          <IconGift className="h-6 w-6" />
        </span>
        <div>
          <h3
            className={
              compact
                ? "text-sm font-bold uppercase tracking-wider text-charcoal"
                : "text-xl font-extrabold text-charcoal sm:text-2xl"
            }
          >
            Gift Cards
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">
            Buy a Fun Factory gift card for yourself or send one as a gift. Great for birthdays,
            holidays, and thank yous.
          </p>
        </div>
      </div>
      <div className={compact ? "mt-4 pl-16" : "shrink-0 pl-16 sm:pl-0"}>
        <Button href={siteConfig.square.giftCardUrl} external variant="sunshine" size="md">
          Buy a Gift Card
        </Button>
      </div>
    </div>
  );
}
