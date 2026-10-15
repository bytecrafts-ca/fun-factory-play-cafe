"use client";

import { usePathname } from "next/navigation";
import { ConversionLink } from "@/components/ConversionLink";
import { Button } from "@/components/ui/Button";
import { getPartyBookingUrl, siteConfig } from "@/lib/site";

const hiddenPaths = new Set(["/thank-you"]);

export function MobileBookingBar() {
  const pathname = usePathname();
  if (hiddenPaths.has(pathname)) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-border bg-white/95 px-3 pt-2.5 backdrop-blur md:hidden"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-2">
        <Button
          href={siteConfig.square.dropInUrl}
          external
          variant="secondary"
          size="md"
          className="flex-1 px-3"
        >
          Buy Tickets
        </Button>
        <Button href={getPartyBookingUrl()} external variant="primary" size="md" className="flex-1 px-3">
          Book a Party
        </Button>
        <ConversionLink
          href={siteConfig.phoneHref}
          aria-label={`Call ${siteConfig.phone}`}
          className="flex h-10 w-11 shrink-0 items-center justify-center rounded-[var(--radius-btn)] border-2 border-peach bg-white text-charcoal transition hover:bg-peach/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bubblegum/50"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.5 4.49a1 1 0 0 1-.5 1.21l-2.26 1.13a11.04 11.04 0 0 0 5.52 5.52l1.13-2.26a1 1 0 0 1 1.21-.5l4.49 1.5a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6V5z"
            />
          </svg>
        </ConversionLink>
      </div>
    </div>
  );
}
