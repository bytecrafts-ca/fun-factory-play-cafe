import { Button } from "@/components/ui/Button";
import {
  formatPrice,
  partyExtras,
  siteConfig,
  ultimateParty,
} from "@/lib/site";

export function UltimatePartyCard() {
  const details = [
    ultimateParty.highlight,
    `${ultimateParty.children} children · ${ultimateParty.adults} adults included`,
    ultimateParty.pizzas,
    ultimateParty.cake,
    `${ultimateParty.drinks} drinks (juice boxes / water bottles)`,
    "Plates, napkins, cutlery & e-invitations",
    `${ultimateParty.returnPasses} free return play passes`,
    "PA announcement, party host, setup & cleanup",
    `Additional children ${partyExtras.additionalChild} · adults ${partyExtras.additionalAdult}`,
  ];

  return (
    <article className="card border-t-4 border-t-sunshine bg-sunshine/15 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-charcoal">{ultimateParty.name}</h3>
      <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:gap-6">
        <p className="text-lg font-bold text-charcoal">
          {ultimateParty.weekdayNote}: {formatPrice(ultimateParty.weekdayPrice)}
        </p>
        <p className="text-lg font-bold text-charcoal">
          {ultimateParty.weekendNote}: {formatPrice(ultimateParty.weekendPrice)}
        </p>
      </div>
      <ul className="mt-6 grid gap-2 text-sm leading-relaxed text-muted sm:grid-cols-2">
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
