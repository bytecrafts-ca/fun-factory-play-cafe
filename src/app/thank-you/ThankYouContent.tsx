"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

function cleanName(value: string | null) {
  if (!value) return "";
  const name = value.replace(/[^\p{L}\p{M}' -]/gu, "").trim().slice(0, 30);
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : "";
}

function cleanCode(value: string | null) {
  if (!value) return "";
  return value.replace(/[^a-z0-9_-]/gi, "").toUpperCase().slice(0, 24);
}

function getVoucherUrl(code: string) {
  const url = new URL(siteConfig.ovatu.partiesUrl);
  if (code) url.searchParams.set("voucher", code);
  return url.toString();
}

function possessive(name: string) {
  return /s$/i.test(name) ? `${name}'` : `${name}'s`;
}

export function ThankYouContent() {
  const params = useSearchParams();
  const name = cleanName(params.get("name"));
  const code = cleanCode(params.get("code"));
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="section-pad bg-section-lavender">
      <div className="container-main mx-auto max-w-xl">
        <div className="card overflow-hidden bg-white text-center">
          <div className="h-1.5 bg-gradient-to-r from-peach via-lavender to-sky" aria-hidden />
          <div className="px-6 py-10 sm:px-10">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">Fun Factory Play Café</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
              {name ? `Thanks for celebrating ${possessive(name)} birthday with us!` : "Thanks for celebrating with us!"}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We hope everyone had a blast. Lock in next year now and save.
            </p>

            {code ? (
              <div className="mt-8 rounded-2xl border border-dashed border-lavender bg-lavender/10 px-5 py-5">
                <p className="text-sm font-semibold text-charcoal">
                  10% off {name ? `${possessive(name)} next party` : "your next party"}
                </p>
                <p className="mt-2 font-mono text-3xl font-extrabold tracking-wide text-charcoal">{code}</p>
                <button
                  type="button"
                  onClick={copyCode}
                  className="mt-3 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold text-charcoal transition hover:border-charcoal/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender"
                >
                  {copied ? "Copied" : "Copy code"}
                </button>
                <p className="mt-3 text-xs text-muted">
                  Valid for 7 days. Party packages only. Applied automatically when you book below.
                </p>
              </div>
            ) : null}

            <div className="mt-8 flex flex-col gap-3">
              <Button href={getVoucherUrl(code)} external variant="primary" size="lg">
                Book Next Year&apos;s Party
              </Button>
              <Button href={siteConfig.googleReviews.writeReviewUrl} external variant="outline" size="lg">
                Leave us a Google review
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted">Pick your date and time online. Takes about 2 minutes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
