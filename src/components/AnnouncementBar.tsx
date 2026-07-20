"use client";

import Link from "next/link";
import { getPartyBookingUrl, isPartyBookingPromoActive, partyBookingPromo } from "@/lib/site";

export function AnnouncementBar() {
  if (!isPartyBookingPromoActive()) return null;

  const bookingUrl = getPartyBookingUrl();
  const isExternal = bookingUrl.startsWith("http");

  return (
    <div className="bg-gradient-to-r from-peach/80 via-lavender/70 to-bubblegum/60">
      <div className="container-main py-2.5 text-center text-sm font-semibold text-charcoal sm:text-base">
        <span>{partyBookingPromo.headline}</span>
        <span className="mx-2 hidden text-charcoal/40 sm:inline" aria-hidden>
          ·
        </span>
        <span className="mt-0.5 block text-xs font-medium text-charcoal/80 sm:mt-0 sm:inline sm:text-sm">
          {partyBookingPromo.period}
        </span>
        <Link
          href={bookingUrl}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="ml-0 mt-1 inline-block rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-charcoal shadow-sm transition hover:bg-white sm:ml-3 sm:mt-0 sm:text-sm"
        >
          Book a Party →
        </Link>
      </div>
    </div>
  );
}
