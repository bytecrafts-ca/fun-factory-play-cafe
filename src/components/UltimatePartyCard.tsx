import { Button } from "@/components/ui/Button";
import { getPartyPackageDetails } from "@/lib/party-details";
import { formatPrice, siteConfig, ultimateParty } from "@/lib/site";

export function UltimatePartyCard() {
  const details = getPartyPackageDetails(ultimateParty);

  return (
    <article className="card border-t-4 border-t-sunshine bg-sunshine/15 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-charcoal">{ultimateParty.name}</h3>
      <div className="mt-3 space-y-1">
        <p className="text-lg font-bold text-charcoal">
          {ultimateParty.weekdayNote}: {formatPrice(ultimateParty.weekdayPrice)}
        </p>
        <p className="text-lg font-bold text-charcoal">
          {ultimateParty.weekendNote}: {formatPrice(ultimateParty.weekendPrice)}
        </p>
      </div>
      <ul className="mt-6 space-y-2 text-sm leading-relaxed text-muted">
        {details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-8">
        <Button
          href={siteConfig.ovatu.partiesUrl}
          external
          variant="primary"
          size="lg"
        >
          Book Ultimate Party
        </Button>
      </div>
    </article>
  );
}
