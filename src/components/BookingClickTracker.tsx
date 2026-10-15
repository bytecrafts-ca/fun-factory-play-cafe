"use client";

import { useEffect } from "react";
import { getBookingClickType, trackBookingClick } from "@/lib/google-ads";

/** One delegated listener so every Ovatu / Square link on the site is tracked. */
export function BookingClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const type = getBookingClickType(anchor.href);
      if (!type) return;
      trackBookingClick(type, anchor.href, window.location.pathname);
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
