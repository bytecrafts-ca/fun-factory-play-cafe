type PartyDetailInput = {
  children: number;
  adults: number;
  pizzas: string;
  cake: string;
  drinks: number;
  returnPasses: number;
  highlight?: string;
};

export function getPartyPackageDetails(pkg: PartyDetailInput): string[] {
  const lines = [`${pkg.children} kids and ${pkg.adults} adults`];

  if (pkg.highlight) {
    lines.push(pkg.highlight);
  }

  lines.push(
    pkg.pizzas,
    pkg.cake,
    `${pkg.drinks} juices (juice boxes / water bottles)`,
    "Plates, napkins, cutlery",
    "Party host, PA announcement, setup & cleanup",
    "E-invites included",
    `${pkg.returnPasses} free return play pass${pkg.returnPasses > 1 ? "es" : ""}`,
    "Additional children $14.99 each",
    "Additional adults $4.99 each",
  );

  return lines;
}
