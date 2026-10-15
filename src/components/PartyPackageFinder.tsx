"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { formatPrice, partyPackages, ultimateParty } from "@/lib/site";

const options = [
  { label: "Up to 10", max: 10 },
  { label: "11 to 15", max: 15 },
  { label: "16 to 20", max: 20 },
  { label: "21 to 30", max: 30 },
  { label: "31 to 50", max: 50 },
] as const;

function getRecommendation(max: number) {
  const pkg = partyPackages.find((item) => item.children >= max);
  if (pkg) {
    return { name: pkg.name, price: formatPrice(pkg.price), children: pkg.children, adults: pkg.adults };
  }
  return {
    name: ultimateParty.name,
    price: `${formatPrice(ultimateParty.weekdayPrice)} Mon to Thu, ${formatPrice(ultimateParty.weekendPrice)} Fri to Sun`,
    children: ultimateParty.children,
    adults: ultimateParty.adults,
  };
}

export function PartyPackageFinder({ bookingUrl }: { bookingUrl: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  const recommendation = selected ? getRecommendation(selected) : null;

  return (
    <div className="card mx-auto max-w-2xl bg-white p-6 text-center sm:p-8">
      <h3 id="package-finder-label" className="text-lg font-extrabold text-charcoal sm:text-xl">
        How many kids are coming?
      </h3>
      <div
        role="radiogroup"
        aria-labelledby="package-finder-label"
        className="mt-4 flex flex-wrap justify-center gap-2"
      >
        {options.map((option) => {
          const active = selected === option.max;
          return (
            <button
              key={option.max}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setSelected(option.max)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender ${
                active
                  ? "border-lavender bg-lavender/40 text-charcoal"
                  : "border-border bg-white text-charcoal hover:border-charcoal/30"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="min-h-0">
        {recommendation && (
          <div className="mt-6 rounded-2xl bg-lavender/15 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">Best fit</p>
            <p className="mt-1 text-xl font-extrabold text-charcoal">{recommendation.name}</p>
            <p className="mt-1 text-sm font-semibold text-charcoal">{recommendation.price}</p>
            <p className="mt-2 text-sm text-muted">
              Up to {recommendation.children} kids and {recommendation.adults} adults. Extra kids are $14.99 each.
            </p>
            <div className="mt-4 flex justify-center">
              <Button href={bookingUrl} external variant="lavender" size="md">
                Book the {recommendation.name}
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted">Pick your date and time online. Takes about 2 minutes.</p>
          </div>
        )}
      </div>
    </div>
  );
}
