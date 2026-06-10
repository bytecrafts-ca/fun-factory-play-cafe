export const siteConfig = {
  name: "Fun Factory Play Café",
  shortName: "Fun Factory",
  welcomeText:
    "We are a vibrant play cafe where creativity is brewed daily and every visit is a new adventure!",
  partyIncludeText:
    "All parties include 2.5 hours in a private room, playtime, pizza, cake, juice, water, coffee/tea for adults, e-vites, host, and more!",
  littlesAndLattesText:
    "Littles & Lattés is NOW OPEN! Check out our café menu page to see our premium beverages!",
  url: "https://www.funfactoryplay.ca",
  phone: "(647) 824 - 8389",
  phoneHref: "tel:+16478248389",
  email: "info@funfactoryplay.ca",
  emailHref: "mailto:info@funfactoryplay.ca",
  address: {
    full: "1420 Bayly St., Unit 15, Pickering, ON",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1420+Bayly+St+Unit+15+Pickering+ON",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=1420+Bayly+St,+Unit+15,+Pickering,+ON&hl=en&z=15&output=embed",
  },
  social: {
    instagram: {
      label: "@funfactoryplay",
      href: "https://www.instagram.com/funfactoryplay/",
    },
    littlesInstagram: {
      label: "@littlesandlattess",
      href: "https://www.instagram.com/littlesandlattess/",
    },
    tiktok: {
      label: "TikTok — coming soon",
      href: null,
    },
  },
  ovatu: {
    bookUrl: process.env.NEXT_PUBLIC_OVATU_BOOK_URL ?? "#book",
    ticketsUrl: process.env.NEXT_PUBLIC_OVATU_TICKETS_URL ?? "#book",
    partiesUrl: process.env.NEXT_PUBLIC_OVATU_PARTIES_URL ?? "#book",
  },
  waiverUrl: process.env.NEXT_PUBLIC_WAIVER_URL ?? "/waiver",
  cafePublic: process.env.CAFE_PAGE_PUBLIC === "true",
};

export type DayHours = {
  day: string;
  hours: string;
  closed?: boolean;
  promo?: string;
};

export const hours: DayHours[] = [
  { day: "Monday", hours: "Closed", closed: true },
  { day: "Tuesday", hours: "3:30 pm – 7:30 pm", promo: "50% off admissions!" },
  { day: "Wednesday", hours: "Closed", closed: true },
  { day: "Thursday", hours: "3:30 pm – 7:30 pm", promo: "50% off admissions!" },
  { day: "Friday", hours: "9:30 am – 8:30 pm" },
  { day: "Saturday", hours: "9:30 am – 8:30 pm" },
  { day: "Sunday", hours: "9:30 am – 8:30 pm" },
];

export const admissions = [
  { ageGroup: "Under 1", price: "Free with paying sibling" },
  { ageGroup: "Under 1", price: "$5.00 drop-in" },
  { ageGroup: "1 to 3 years", price: "$10.00" },
  { ageGroup: "4 to 13 years", price: "$14.00" },
  { ageGroup: "14 to 17 years", price: "$10.00" },
] as const;

export const admissionNotes = [
  "Maximum two (2) adults per family included in the admission",
  "Socks available for purchase at reception — $3.00",
  "All prices are subject to HST",
  "Socks are required for all of our guests",
  "A liability waiver must be completed",
  "No outside drinks allowed. Nut-free food is allowed",
  "All sales are final",
] as const;

export const partyPackages = [
  {
    name: "Fun Party",
    price: 369,
    children: 10,
    adults: 10,
    pizzas: "1 party-size pizza (cheese/pepperoni/veggie — two toppings)",
    cake: "Birthday cake (can substitute for a large pizza)",
    drinks: 10,
    returnPasses: 1,
    color: "bubblegum" as const,
  },
  {
    name: "Active Fun Party",
    price: 459,
    children: 15,
    adults: 15,
    pizzas: "1 party-size pizza & 1 large pizza (cheese/pepperoni/veggie — two toppings)",
    cake: "Birthday cake (can substitute for a large pizza)",
    drinks: 15,
    returnPasses: 2,
    color: "sky" as const,
    featured: true,
  },
  {
    name: "Supreme Fun Party",
    price: 579,
    children: 20,
    adults: 20,
    pizzas: "2 party-size pizzas (cheese/pepperoni/veggie — two toppings)",
    cake: "Birthday cake (can substitute for a large pizza)",
    drinks: 20,
    returnPasses: 3,
    color: "lavender" as const,
  },
  {
    name: "Extreme Fun Party",
    price: 719,
    children: 30,
    adults: 30,
    pizzas: "3 party-size pizzas (cheese/pepperoni/veggie — two toppings)",
    cake: "Birthday cake (can substitute for a large pizza)",
    drinks: 30,
    returnPasses: 4,
    color: "mint" as const,
  },
] as const;

export const ultimateParty = {
  name: "Ultimate Fun Party",
  weekdayPrice: 1399,
  weekendPrice: 1999,
  weekdayNote: "Monday–Thursday (except holidays)",
  weekendNote: "Friday–Sunday",
  children: 50,
  adults: 50,
  pizzas: "4 party-size pizzas & 1 large pizza (cheese/pepperoni/veggie — two toppings)",
  cake: "Birthday cake (can substitute for a large pizza)",
  drinks: 50,
  returnPasses: 5,
  highlight: "Private party with full private use of the facility",
} as const;

export const partyExtras = {
  additionalChild: "Additional children $14.99 each",
  additionalAdult: "Additional adult $4.99",
} as const;

export const partyTimeSlots = [
  "Morning",
  "Early afternoon",
  "Late afternoon",
  "Evening",
] as const;

export const partyAddOns = [
  "More Pizza",
  "Decorations",
  "Additional Time",
  "So much more!",
] as const;

export const partyCustomizeText =
  "We'll help you customize your event just how you like it — Contact us to start planning your perfect party today!";

export const waiverText =
  "The Fun Factory is an unsupervised play area. Parents/guardians must supervise their children at all times and are fully responsible for their child's safety and supervision. The Fun Factory will not be held responsible for accidents that occur as a result of playing.";

export const facilityRules = [
  "For your safety, security cameras are installed around the facility.",
  "No shoes, slippers, or bare feet please. SOCKS are mandatory for both parents and children at all times in the facility. Socks are available for purchase at reception.",
  "STROLLERS are not permitted between September to April.",
  "No toys are allowed on the climbing structure.",
  "No climbing is allowed on the outside of the structure.",
  "Weight limit 250 lbs on play structure.",
  "The Fun Factory is a peanut/nut AWARE facility. Food containing nuts or nut by-products are not permitted. Although The Fun Factory is a peanut/nut AWARE facility, it is NOT guaranteed to be a peanut/nut free environment.",
  "No sharp objects are allowed in the facility. Plastic utensils are permitted.",
  "We are not responsible for any damages, injuries, or loss/theft of personal property during your stay.",
  "Ensure that you and your child are free of illness before entering the facility.",
  "Use hand sanitizer before entering the play area. Hand sanitizer can be found at the front entry, in the café, and in the washrooms.",
  "No delivery food to the front desk.",
  "No groups, small or large, are permitted to have a party or other event at the facility without making a reservation.",
  "Outside drinks are NOT permitted. Please view café menu for drink selection. All food must be consumed in designated eating areas.",
  "Outside food is permitted during drop-in play and for private parties. Food must NOT contain any nuts.",
  "The Fun Factory reserves the right to refuse admittance or ask you and your child to leave if equipment is being used improperly or your play is unsafe or disrespectful to others.",
] as const;

export const importantInfo = [
  "Waiver must be signed before entry",
  "Socks Required",
  "Parents must supervise children",
  "Snacks and drinks available for purchase",
  "Free parking available",
] as const;

export const socksReminder =
  "Remember your socks! Fun Factory is a SOCKS-ONLY facility. Socks are required for children AND adults.";

export const promoText =
  "Tuesdays & Thursdays 3:30 pm - Close — 50% OFF Admissions!";

export const cafeMenu = {
  brand: "Littles & Lattés",
  drinks: [
    { name: "Fun Factory Latte", description: "Smooth espresso balanced with oat milk." },
    { name: "Latte", description: "Smooth espresso balanced with milk." },
    { name: "Vanilla Latte", description: "Smooth espresso with creamy milk and a touch of vanilla." },
    { name: "Spanish Latte", description: "Bold espresso with sweetened condensed milk and a hint of cinnamon." },
    { name: "Chai Latte", description: "Warm spices and black tea blended with milk." },
    { name: "Caramel Macchiato", description: "Smooth milk and vanilla topped with espresso and a drizzle of rich caramel." },
    { name: "Littles & Lattés Matcha Latte", description: "Our classic matcha latte, perfectly balanced and made with oat milk." },
    { name: "Matcha Latte", description: "Smooth and earthy matcha blended with milk." },
    { name: "Vanilla Matcha Latte", description: "Sweet strawberry goodness paired with our signature matcha latte." },
    { name: "Strawberry Matcha", description: "Sweet strawberry paired with signature matcha latte." },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/play", label: "Play" },
  { href: "/parties", label: "Parties" },
  { href: "/gallery", label: "Gallery" },
  { href: "/waiver", label: "Waiver" },
  { href: "/contact", label: "Contact" },
] as const;

export function getTodayHours(): DayHours | null {
  const dayIndex = new Date().getDay();
  const hoursIndex = [6, 0, 1, 2, 3, 4, 5];
  return hours[hoursIndex[dayIndex]] ?? null;
}

export function isOpenNow(): boolean {
  const today = getTodayHours();
  if (!today || today.closed) return false;

  const now = new Date();
  const day = now.getDay();

  if (day === 2 || day === 4) {
    const open = 15 * 60 + 30;
    const close = 19 * 60 + 30;
    const current = now.getHours() * 60 + now.getMinutes();
    return current >= open && current < close;
  }

  if (day >= 5 || day === 0) {
    const open = 9 * 60 + 30;
    const close = 20 * 60 + 30;
    const current = now.getHours() * 60 + now.getMinutes();
    return current >= open && current < close;
  }

  return false;
}

export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString("en-CA")}`;
}
