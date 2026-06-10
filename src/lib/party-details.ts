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
  const lines: string[] = [];

  if (pkg.highlight) {
    lines.push(pkg.highlight);
  }

  lines.push(
    `${pkg.children} kids`,
    `${pkg.adults} adults`,
    pkg.pizzas,
    pkg.cake,
    `${pkg.drinks} drinks (juice boxes / water bottles)`,
    "Plates, napkins, cutlery",
    "e-invitations",
    `${pkg.returnPasses} free return play pass${pkg.returnPasses > 1 ? "es" : ""}`,
    "PA announcement, party host, setup & cleanup",
    "Additional children $14.99 each",
    "Additional adult $4.99",
  );

  return lines;
}
