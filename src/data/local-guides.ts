export type LocalGuide = {
  title: string;
  description: string;
  href: string;
  topics: string[];
};

/** Owned external guide sites — linked from footer and /resources */
export const localGuides: LocalGuide[] = [
  {
    title: "Pickering Kids Birthday Party Guide",
    description:
      "Compare birthday party venues, packages, and planning tips for families in Pickering and east Durham.",
    href: "https://bytecrafts-ca.github.io/pickering-kids-birthday-guide/",
    topics: ["birthday parties", "Pickering", "party planning"],
  },
  {
    title: "Pickering Indoor Play Guide",
    description:
      "Rainy day activities, toddler-friendly play spots, and what to know before your first indoor play visit.",
    href: "https://bytecrafts-ca.github.io/pickering-indoor-play-guide/",
    topics: ["indoor playground", "drop-in play", "toddlers"],
  },
  {
    title: "Durham Region Family Activities",
    description:
      "Weekend ideas for families in Durham Region, from indoor play to seasonal activities across the east GTA.",
    href: "https://bytecrafts-ca.github.io/durham-family-activities-guide/",
    topics: ["Durham Region", "family activities", "weekends"],
  },
  {
    title: "Fun Factory Party Planning Guide",
    description:
      "Step-by-step guide to booking a birthday party at Fun Factory, including packages, timing, and what to bring.",
    href: "https://bytecrafts-ca.github.io/fun-factory-party-planning/",
    topics: ["party packages", "booking", "Fun Factory"],
  },
  {
    title: "Littles & Lattés Pickering Café Guide",
    description:
      "Coffee, matcha, and snacks for parents while kids play at Fun Factory on Bayly Street in Pickering.",
    href: "https://bytecrafts-ca.github.io/littles-lattes-pickering-cafe/",
    topics: ["Littles & Lattés", "play café", "Pickering"],
  },
];
