import { Button } from "@/components/ui/Button";
import {
  formatPrice,
  partyExtras,
  partyPackages,
  siteConfig,
} from "@/lib/site";

const accentMap = {
  bubblegum: { border: "border-t-bubblegum", bg: "bg-bubblegum/10" },
  sky: { border: "border-t-sky", bg: "bg-sky/10" },
  lavender: { border: "border-t-lavender", bg: "bg-lavender/10" },
  mint: { border: "border-t-mint", bg: "bg-mint/10" },
};

function packageDetails(pkg: (typeof partyPackages)[number]) {
  return [
    `${pkg.children} children · ${pkg.adults} adults included`,
    pkg.pizzas,
    pkg.cake,
    `${pkg.drinks} drinks (juice boxes / water bottles)`,
    "Plates, napkins, cutlery & e-invitations",
    `${pkg.returnPasses} free return play pass${pkg.returnPasses > 1 ? "es" : ""}`,
    "PA announcement, party host, setup & cleanup",
    `Additional children ${partyExtras.additionalChild} · adults ${partyExtras.additionalAdult}`,
  ];
}

export function PartyCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {partyPackages.map((pkg) => {
        const accent = accentMap[pkg.color];
        return (
          <article
            key={pkg.name}
            className={`card relative flex flex-col border-t-4 p-6 ${accent.border} ${accent.bg} ${
              "featured" in pkg && pkg.featured ? "ring-2 ring-lavender/60" : ""
            }`}
          >
            {"featured" in pkg && pkg.featured && (
              <span className="absolute right-4 top-4 rounded-md bg-lavender/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-charcoal">
                Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-charcoal">{pkg.name}</h3>
            <p className="mt-1 text-2xl font-extrabold text-charcoal">
              {formatPrice(pkg.price)}
            </p>
            <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed text-muted">
              {packageDetails(pkg).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                href={siteConfig.ovatu.partiesUrl}
                external
                variant="lavender"
                size="md"
                className="w-full"
              >
                Book This Party
              </Button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
