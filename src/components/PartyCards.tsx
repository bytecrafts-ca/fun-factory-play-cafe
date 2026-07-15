import { Button } from "@/components/ui/Button";
import { getPartyPackageDetails } from "@/lib/party-details";
import { formatPrice, getPartyBookingUrl, partyPackages, ultimateParty } from "@/lib/site";

const accentMap = {
  bubblegum: { border: "border-t-bubblegum", bg: "bg-bubblegum/10" },
  sky: { border: "border-t-sky", bg: "bg-sky/10" },
  lavender: { border: "border-t-lavender", bg: "bg-lavender/10" },
  mint: { border: "border-t-mint", bg: "bg-mint/10" },
  sunshine: { border: "border-t-sunshine", bg: "bg-sunshine/15" },
};

export function PartyCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {partyPackages.map((pkg) => {
        const accent = accentMap[pkg.color];
        return (
          <article
            key={pkg.name}
            className={`card relative flex flex-col border-t-4 p-5 xl:p-4 2xl:p-5 ${accent.border} ${accent.bg} ${
              "featured" in pkg && pkg.featured ? "ring-2 ring-lavender/60" : ""
            }`}
          >
            {"featured" in pkg && pkg.featured && (
              <span className="absolute right-3 top-3 rounded-md bg-lavender/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-charcoal">
                Popular
              </span>
            )}
            <h3 className="pr-14 text-lg font-bold leading-tight text-charcoal xl:text-base 2xl:text-lg">
              {pkg.name}
            </h3>
            <p className="mt-1 text-xl font-extrabold text-charcoal xl:text-lg 2xl:text-xl">
              {formatPrice(pkg.price)}
            </p>
            <ul className="mt-4 flex-1 space-y-1.5 text-xs leading-relaxed text-muted xl:text-[11px] 2xl:text-xs">
              {getPartyPackageDetails(pkg).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-5">
              <Button
                href={getPartyBookingUrl()}
                external
                variant="lavender"
                size="md"
                className="w-full text-sm"
              >
                Book This Party
              </Button>
            </div>
          </article>
        );
      })}

      <article
        className={`card relative flex flex-col border-t-4 p-5 xl:p-4 2xl:p-5 ${accentMap.sunshine.border} ${accentMap.sunshine.bg}`}
      >
        <h3 className="text-lg font-bold leading-tight text-charcoal xl:text-base 2xl:text-lg">
          {ultimateParty.name}
        </h3>
        <div className="mt-1 space-y-0.5">
          <p className="text-base font-extrabold text-charcoal xl:text-sm 2xl:text-base">
            Mon–Thu: {formatPrice(ultimateParty.weekdayPrice)}
          </p>
          <p className="text-base font-extrabold text-charcoal xl:text-sm 2xl:text-base">
            Fri–Sun: {formatPrice(ultimateParty.weekendPrice)}
          </p>
          <p className="text-[10px] leading-tight text-muted">Excludes holidays</p>
        </div>
        <ul className="mt-4 flex-1 space-y-1.5 text-xs leading-relaxed text-muted xl:text-[11px] 2xl:text-xs">
          {getPartyPackageDetails(ultimateParty).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-5">
          <Button
            href={getPartyBookingUrl()}
            external
            variant="primary"
            size="md"
            className="w-full text-sm"
          >
            Book This Party
          </Button>
        </div>
      </article>
    </div>
  );
}
