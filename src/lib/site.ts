export const siteConfig = {
  name: "Fun Factory Play Café",
  shortName: "Fun Factory",
  welcomeText:
    "We are a vibrant play cafe where creativity is brewed daily and every visit is a new adventure!",
  partyIncludeText: [
    "All parties include 2.5 hours in a private room.",
    "Playtime, pizza, cake, juice, water, and coffee/tea for adults.",
    "E-vites, party host, and more!",
  ],
  littlesAndLattesText:
    "Littles & Lattés Café is NOW OPEN! Check out our café menu page to see our premium beverages!",
  url: "https://www.funfactoryplay.ca",
  phone: "(647) 824 - 8389",
  phoneHref: "tel:+16478248389",
  email: "info@funfactoryplay.ca",
  emailHref: "mailto:info@funfactoryplay.ca",
  address: {
    full: "1420 Bayly St., Unit 15, Pickering, ON",
    mapsUrl:
      "https://www.google.com/maps/place/Fun+Factory+Play+Cafe+-+Pickering/@43.83115,-79.0812758,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4dee5c535f85d:0x47037b445f1e60ff!8m2!3d43.83115!4d-79.0812758!16s%2Fg%2F11bztvy394",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=1420+Bayly+St,+Unit+15,+Pickering,+ON&hl=en&z=15&output=embed",
  },
  googleReviews: {
    reviewsUrl:
      "https://www.google.com/maps/place/Fun+Factory+Play+Cafe+-+Pickering/@43.83115,-79.0812758,17z/data=!4m8!3m7!1s0x89d4dee5c535f85d:0x47037b445f1e60ff!8m2!3d43.83115!4d-79.0812758!9m1!1b1!16s%2Fg%2F11bztvy394",
    writeReviewUrl:
      "https://www.google.com/maps/place/Fun+Factory+Play+Cafe+-+Pickering/@43.83115,-79.0812758,17z/data=!4m8!3m7!1s0x89d4dee5c535f85d:0x47037b445f1e60ff!8m2!3d43.83115!4d-79.0812758!9m1!1b1!16s%2Fg%2F11bztvy394",
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
      label: "TikTok",
      href: null,
    },
  },
  ovatu: {
    bookUrl: process.env.NEXT_PUBLIC_OVATU_BOOK_URL ?? "#book",
    ticketsUrl: process.env.NEXT_PUBLIC_OVATU_TICKETS_URL ?? "#book",
    partiesUrl: process.env.NEXT_PUBLIC_OVATU_PARTIES_URL ?? "#book",
  },
  waiverUrl:
    process.env.NEXT_PUBLIC_WAIVER_URL ??
    "https://form.jotform.com/261257549756066",
  heroImage: {
    src: "/hero.jpg",
    alt: "Children having fun with colorful balls in a bright indoor play space",
  },
};

export type DayHours = {
  day: string;
  hours: string;
  closed?: boolean;
  promo?: string;
};

export const hours: DayHours[] = [
  { day: "Monday", hours: "Closed", closed: true },
  { day: "Tuesday", hours: "3:30 pm – 7:30 pm", promo: "50% off drop-in admissions" },
  { day: "Wednesday", hours: "Closed", closed: true },
  { day: "Thursday", hours: "3:30 pm – 7:30 pm", promo: "50% off drop-in admissions" },
  { day: "Friday", hours: "9:30 am – 8:30 pm" },
  { day: "Saturday", hours: "9:30 am – 8:30 pm" },
  { day: "Sunday", hours: "9:30 am – 8:30 pm" },
];

export const admissions = [
  { ageGroup: "Under 1 Year Old", price: "Free With a Paying Sibling" },
  { ageGroup: "1 to 3 Year Old", price: "$10.00" },
  { ageGroup: "4 to 13 Year Old", price: "$14.00" },
  { ageGroup: "14 to 17 Year Old", price: "$10.00" },
] as const;

export const playRatesNote =
  "Enjoy unlimited play time — there is no time limit on your visit.";

export const admissionNotes = [
  "Maximum two (2) adults per family included in the admission",
  "Socks available for purchase at reception — $3.00",
  "All prices are subject to HST",
  "We are a sock only facility",
  "A signed waiver is required before entry",
  "No outside drinks allowed",
  "Nut-free food is allowed",
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
  weekdayNote: "Monday to Thursday (Excluding Holidays)",
  weekendNote: "Friday to Sunday",
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
  additionalAdult: "Additional adults $4.99 each",
} as const;

export const partyRoomInfo = {
  smallRoom: "Small room — Fun Party and Active Fun Party time slots",
  largeRoom: "Large room — Supreme Fun Party and Extreme Fun Party time slots",
} as const;

export const partyTimeSlots = {
  smallRoom: [
    "9:30 AM – 12:00 PM",
    "12:15 PM – 2:45 PM",
    "3:00 PM – 5:30 PM",
    "5:45 PM – 8:15 PM",
  ],
  largeRoom: [
    "10:00 AM – 12:30 PM",
    "12:45 PM – 3:15 PM",
    "3:30 PM – 6:00 PM",
    "6:15 PM – 8:45 PM",
  ],
} as const;

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
  "We are a sock only facility",
  "Parents must supervise children",
  "Snacks and drinks available for purchase",
  "Free parking available",
] as const;

export const socksReminder =
  "We are a sock only facility — socks are required for children and adults.";

export const promoText =
  "Visit us every Tuesday and Thursday to enjoy 50% off all drop-in admissions";

export const cafeMenu = {
  brand: "Littles & Lattés Café",
  tagline: "Coffee. Little moments.",
  info: [
    "Littles & Lattés Café is NOW OPEN!",
    "Located inside Fun Factory Play Café in Pickering.",
    "Snacks and drinks available for purchase during play hours.",
    "Outside drinks are not permitted.",
    "Please view our café menu for drink selection.",
    "All food must be consumed in designated eating areas.",
  ],
  specialtyLattes: [
    {
      name: "Latte",
      description: "Smooth espresso balanced with milk for a classic, everyday favorite.",
      image: "/cafe/latte.png",
      hotPrice: 5,
      coldPrice: 6,
    },
    {
      name: "Vanilla Latte",
      description: "Smooth espresso with creamy milk and a touch of vanilla sweetness.",
      image: "/cafe/vanilla-latte.png",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
    {
      name: "Caramel Macchiato",
      description: "Smooth milk and vanilla topped with espresso and a drizzle of rich caramel.",
      image: "/cafe/caramel-macchiato.png",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
    {
      name: "Spanish Latte",
      description: "Bold espresso with sweetened condensed milk and a hint of cinnamon.",
      image: "/cafe/spanish-latte.png",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
    {
      name: "Chai Latte",
      description: "Warm spices and black tea blended with milk for the perfect cozy sip.",
      image: "/cafe/chai-latte.png",
      hotPrice: 5.5,
      coldPrice: 6,
    },
    {
      name: "Fun Factory Latte",
      description: "Our classic latte made with oat milk. Creamy, smooth, and made for you.",
      image: "/cafe/fun-factory-latte.png",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
  ],
  matchaDrinks: [
    {
      name: "Matcha Latte",
      description: "Smooth and earthy matcha blended with milk. Simple. Pure. Refreshing.",
      image: "/cafe/matcha-latte.png",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
    {
      name: "Strawberry Matcha Latte",
      description:
        "Sweet strawberry goodness paired with our signature strawberry cold foam matcha latte. Fruity, creamy, and oh-so-refreshing!",
      image: "/cafe/strawberry-matcha.png",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
    {
      name: "Vanilla Matcha Latte",
      description:
        "Smooth matcha blended with creamy milk and a touch of vanilla. Light, sweet, and gently comforting.",
      image: "/cafe/vanilla-matcha-latte.png",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
    {
      name: "Fun Factory Matcha Latte",
      description:
        "Our classic matcha latte, perfectly balanced and made with oat milk. Creamy, smooth, and made for you.",
      image: "/cafe/fun-factory-matcha-latte.png",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
  ],
  espressoBar: [
    { name: "Espresso", hotPrice: 3.5 },
    { name: "Cappuccino", hotPrice: 5 },
    { name: "Cortado", hotPrice: 5 },
    { name: "Flat White", hotPrice: 5 },
    { name: "Americano", hotPrice: 4, coldPrice: 4.5 },
    { name: "Shaken Espresso", coldPrice: 5.5 },
    { name: "Brown Sugar Shaken Espresso", coldPrice: 6 },
  ],
  teas: [
    { name: "Green Tea", price: 3 },
    { name: "Black Tea", price: 3 },
    { name: "Earl Grey", price: 3 },
    { name: "Peppermint Tea", price: 3 },
  ],
  hotChocolate: [{ name: "Hot Chocolate", price: 4 }],
  addOns: [
    {
      name: "Syrups",
      description: "Vanilla, Caramel, Strawberry",
      price: 0.5,
    },
    {
      name: "Cold Foam",
      description: "Vanilla, Caramel, Strawberry, Chocolate",
      price: 1,
    },
    {
      name: "Oat Milk",
      price: 0.5,
    },
  ],
  menuBoards: [
    { src: "/cafe/full-menu.png", alt: "Littles & Lattés full café menu with pricing" },
    { src: "/cafe/specialty-lattes-menu.png", alt: "Littles & Lattés specialty iced lattes menu" },
    { src: "/cafe/matcha-menu.png", alt: "Littles & Lattés matcha drinks menu" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/play", label: "Play" },
  { href: "/parties", label: "Parties" },
  { href: "/cafe", label: "Café" },
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
