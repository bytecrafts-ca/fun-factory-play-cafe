"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  getPartyBookingUrl,
  isPartyBookingPromoActive,
  partyBookingPromo,
} from "@/lib/site";

const DISMISS_KEY = "fun-factory-party-promo-dismissed";

const promoPaths = new Set(["/", "/birthday-parties"]);

export function PartyPromoPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!promoPaths.has(pathname)) return;
    if (!isPartyBookingPromoActive()) return;
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    setOpen(true);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      sessionStorage.setItem(DISMISS_KEY, "1");
      setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-charcoal/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="party-promo-title"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-sm overflow-hidden rounded-[20px] bg-white shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="h-1.5 bg-gradient-to-r from-peach via-lavender to-sky" aria-hidden />

        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-4 flex h-9 w-9 items-center justify-center rounded-full text-xl text-muted transition hover:bg-peach/30 hover:text-charcoal"
          aria-label="Close"
        >
          ×
        </button>

        <div className="px-6 pb-6 pt-7 text-center sm:px-8 sm:pb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-muted">
            Birthday parties
          </p>
          <h2 id="party-promo-title" className="mt-3 text-charcoal">
            <span className="block text-5xl font-extrabold leading-none sm:text-6xl">
              {partyBookingPromo.offer}
            </span>
            <span className="mt-3 block text-base font-semibold sm:text-lg">
              {partyBookingPromo.offerDetail}
            </span>
          </h2>
          <p className="mt-3 text-sm text-muted">{partyBookingPromo.deadline}</p>

          {partyBookingPromo.ovatuPromoCode ? (
            <div className="mt-5 rounded-xl border border-dashed border-lavender bg-lavender/10 px-4 py-3">
              <p className="text-xs text-muted">Use code at checkout</p>
              <p className="mt-1 font-mono text-xl font-extrabold tracking-wide text-charcoal">
                {partyBookingPromo.ovatuPromoCode}
              </p>
              <p className="mt-1 text-xs text-muted">Enter it in the Voucher/Gift Card field</p>
            </div>
          ) : partyBookingPromo.ovatuPromoUrl ? (
            <p className="mt-5 text-sm text-charcoal">
              No code needed. The discount is applied when you book.
            </p>
          ) : null}

          <div className="mt-6 flex flex-col gap-2">
            <Button href={getPartyBookingUrl()} external variant="primary" size="lg">
              Book Now
            </Button>
            <Link
              href="/birthday-parties"
              onClick={dismiss}
              className="py-2 text-sm font-semibold text-charcoal underline decoration-sky decoration-2 underline-offset-4 transition hover:decoration-bubblegum"
            >
              See party packages
            </Link>
          </div>

          <p className="mt-4 text-[11px] leading-relaxed text-muted">
            {partyBookingPromo.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
