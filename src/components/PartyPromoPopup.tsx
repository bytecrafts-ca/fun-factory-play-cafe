"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { isPartyBookingPromoActive, partyBookingPromo, siteConfig } from "@/lib/site";

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

  if (!open) return null;

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-charcoal/50 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="party-promo-title"
    >
      <div className="relative w-full max-w-md overflow-visible rounded-[20px] border border-peach/60 bg-gradient-to-br from-peach/30 via-white to-lavender/25 p-6 pb-24 shadow-xl sm:p-8 sm:pb-28">
        <button
          type="button"
          onClick={dismiss}
          className="absolute left-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-charcoal shadow-sm transition hover:bg-white"
          aria-label="Close promotion"
        >
          ×
        </button>

        <div className="pointer-events-none absolute bottom-3 right-3 animate-float sm:bottom-4 sm:right-4">
          <Image
            src="/logo.png"
            alt=""
            width={80}
            height={80}
            className="drop-shadow-md"
            aria-hidden
          />
        </div>

        <p className="text-center text-2xl" aria-hidden>
          ✨
        </p>
        <h2 id="party-promo-title" className="mt-2 text-center text-xl font-extrabold leading-snug text-charcoal sm:text-2xl">
          {partyBookingPromo.headline}
        </h2>
        <p className="mt-2 text-center text-sm font-semibold text-charcoal/80">
          from {partyBookingPromo.period}
        </p>
        <p className="mt-4 text-center text-sm leading-relaxed text-muted">
          {partyBookingPromo.disclaimer} 🎉
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href={siteConfig.ovatu.partiesUrl} external variant="lavender" size="md">
            Book a Party
          </Button>
          <Link
            href="/birthday-parties"
            onClick={dismiss}
            className="inline-flex items-center justify-center rounded-[10px] px-6 py-3 text-sm font-semibold text-charcoal underline decoration-sky decoration-2 underline-offset-4 transition hover:decoration-bubblegum"
          >
            View Packages
          </Link>
        </div>
      </div>
    </div>
  );
}
