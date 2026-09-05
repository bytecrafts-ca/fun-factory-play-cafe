export const siteConfig = {
  name: "Fun Factory Play Café",
  shortName: "Fun Factory",
  welcomeText:
    "A destination where children can play, climb, and explore in a safe indoor environment. Featuring a cozy café serving fresh coffee, drinks, and delicious snacks for the entire family.",
  partyIncludeText: [
    "All parties include 2.5 hours in a private room.",
    "Playtime, pizza, cake, juice, water, and coffee/tea for adults.",
    "E-vites, party host, and more!",
  ],
  partyPromoOffers: [
    "Book a birthday package Monday to Thursday and save $50!",
    "Book more birthdays and receive 10% off each additional birthday package.",
  ],
  partyPromoDisclaimer:
    "Offers cannot be combined; whichever discount is greater will apply.",
  littlesAndLattesText:
    "Littles & Lattés Café is NOW OPEN! Check out our café menu page to see our premium beverages!",
  url: "https://funfactoryplay.ca",
  phone: "(647) 824 - 8389",
  phoneHref: "tel:+16478248389",
  email: "info@funfactoryplay.ca",
  emailHref: "mailto:info@funfactoryplay.ca",
  address: {
    full: "1420 Bayly St., Unit 15, Pickering, ON L1W 3R4",
    street: "1420 Bayly St., Unit 15",
    locality: "Pickering",
    region: "ON",
    postalCode: "L1W 3R4",
    country: "CA",
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
  littlesGoogleReviews: {
    reviewsUrl:
      process.env.NEXT_PUBLIC_LITTLES_GOOGLE_REVIEWS_URL ??
      "https://www.google.com/maps/search/Littles+%26+Latt%C3%A9s+Caf%C3%A9+Pickering",
    writeReviewUrl:
      process.env.NEXT_PUBLIC_LITTLES_GOOGLE_WRITE_REVIEW_URL ??
      "https://www.google.com/maps/search/Littles+%26+Latt%C3%A9s+Caf%C3%A9+Pickering",
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
    bookUrl:
      process.env.NEXT_PUBLIC_OVATU_BOOK_URL ??
      "https://the-fun-factory.book.app/book-now",
    ticketsUrl:
      process.env.NEXT_PUBLIC_OVATU_TICKETS_URL ??
      "https://the-fun-factory.book.app/timetable",
    partiesUrl:
      process.env.NEXT_PUBLIC_OVATU_PARTIES_URL ??
      "https://the-fun-factory.book.app/book-now",
  },
  waiverUrl:
    process.env.NEXT_PUBLIC_WAIVER_URL ??
    "https://form.jotform.com/261257549756066",
  heroImage: {
    src: "/hero.webp",
    alt: "Children having fun with colorful balls in a bright indoor play space",
  },
};

export type DayHours = {
  day: string;
  hours: string;
  closed?: boolean;
  promo?: string;
};

export const hoursScheduleChangeDate = "2026-09-08";

const weeklyHoursBeforeSept8: DayHours[] = [
  { day: "Monday", hours: "Closed", closed: true },
  { day: "Tuesday", hours: "12:00 pm – 7:30 pm", promo: "50% off admissions 3:30–7:30 pm" },
  { day: "Wednesday", hours: "Closed", closed: true },
  { day: "Thursday", hours: "12:00 pm – 7:30 pm", promo: "50% off admissions 3:30–7:30 pm" },
  { day: "Friday", hours: "9:30 am – 8:30 pm" },
  { day: "Saturday", hours: "9:30 am – 8:30 pm" },
  { day: "Sunday", hours: "9:30 am – 8:30 pm" },
];

const weeklyHoursFromSept8: DayHours[] = [
  { day: "Monday", hours: "9:30 am – 2:00 pm" },
  { day: "Tuesday", hours: "12:00 pm – 7:30 pm", promo: "50% off admissions after 3:30 pm" },
  { day: "Wednesday", hours: "9:30 am – 2:00 pm" },
  { day: "Thursday", hours: "12:00 pm – 7:30 pm", promo: "50% off admissions after 3:30 pm" },
  { day: "Friday", hours: "9:30 am – 8:30 pm" },
  { day: "Saturday", hours: "9:30 am – 8:30 pm" },
  { day: "Sunday", hours: "9:30 am – 8:30 pm" },
];

/** @deprecated Use getWeeklyHours() — kept for imports that need the Sept 8+ schedule */
export const hours = weeklyHoursFromSept8;

export function getWeeklyHoursForDate(dateStr: string): DayHours[] {
  return dateStr >= hoursScheduleChangeDate ? weeklyHoursFromSept8 : weeklyHoursBeforeSept8;
}

export function getWeeklyHours(now = new Date()): DayHours[] {
  return getWeeklyHoursForDate(getTorontoCalendarDate(now));
}

export type SpecialHours = {
  /** YYYY-MM-DD in America/Toronto */
  date: string;
  hours: string;
  closed?: boolean;
  label?: string;
};

/** One-off date overrides — checked before the regular weekly schedule */
export const specialHours: SpecialHours[] = [
  { date: "2026-07-29", hours: "12:00 pm – 8:00 pm" },
  { date: "2026-08-03", hours: "9:30 am – 7:30 pm" },
  { date: "2026-08-15", hours: "9:30 am – 2:30 pm, 5:30 pm – 8:30 pm" },
  { date: "2026-08-23", hours: "9:30 am – 1:00 pm" },
  { date: "2026-08-24", hours: "12:00 pm – 8:00 pm" },
  { date: "2026-08-25", hours: "12:00 pm – 8:30 pm" },
  { date: "2026-08-31", hours: "12:00 pm – 7:30 pm" },
  { date: "2026-09-14", hours: "12:00 pm – 8:30 pm" },
  { date: "2026-09-07", hours: "Closed", closed: true, label: "Labour Day" },
  {
    date: "2026-09-30",
    hours: "Closed",
    closed: true,
    label: "National Day for Truth and Reconciliation",
  },
];

export const admissions = [
  { ageGroup: "Under 1 Year Old", price: "$5.00 (free with paying sibling)" },
  { ageGroup: "1 to 3 Year Old", price: "$10.00" },
  { ageGroup: "4 to 13 Year Old", price: "$14.00" },
  { ageGroup: "14 to 17 Year Old", price: "$10.00" },
] as const;

export const playRatesNote =
  "Enjoy unlimited play time — there is no time limit on your visit.";

export const partyBookingPromo = {
  startDate: "2026-06-15",
  endDate: "2026-08-31",
  headline: "Enjoy 15% OFF all NEW party bookings",
  period: "June 15 – August 31, 2026",
  disclaimer: "Party date must be between the promotional period.",
  /** Ovatu marketing link — discount auto-applies when customers use this URL */
  ovatuPromoUrl: process.env.NEXT_PUBLIC_OVATU_PARTY_PROMO_URL ?? "",
  /** Code customers enter in Ovatu’s Voucher/Gift Card field at checkout */
  ovatuPromoCode: process.env.NEXT_PUBLIC_OVATU_PARTY_PROMO_CODE ?? "",
} as const;

/** YYYY-MM-DD in America/Toronto */
export function getTorontoCalendarDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

/** Active from startDate through endDate inclusive, midnight Toronto (off at Sep 1 00:00 ET) */
export function isPartyBookingPromoActive(now = new Date()) {
  const today = getTorontoCalendarDate(now);
  return today >= partyBookingPromo.startDate && today <= partyBookingPromo.endDate;
}

/** Party booking URL — uses Ovatu promo link during the active promo window when configured */
export function getPartyBookingUrl(now = new Date()) {
  if (isPartyBookingPromoActive(now) && partyBookingPromo.ovatuPromoUrl) {
    return partyBookingPromo.ovatuPromoUrl;
  }
  return siteConfig.ovatu.partiesUrl;
}

export const accessTwoCardUrl =
  "https://access2card.ca/participating-venues/?province=4";

export const admissionNotes = [
  "Maximum two (2) adults per family included in the admission",
  "Socks available for purchase at reception — $3.00",
  "All prices are subject to HST",
  "We are a socks only facility",
  "A signed waiver is required before entry",
  "No outside drinks allowed",
  "Nut-free food is allowed",
  "All sales are final",
] as const;

export const partyPackages = [
  {
    name: "Fun Party",
    price: 399,
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
    price: 499,
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
    price: 599,
    children: 20,
    adults: 20,
    pizzas: "2 party-size pizzas (cheese/pepperoni/veggie — two toppings)",
    cake: "Birthday cake (can substitute for a large pizza)",
    drinks: 20,
    returnPasses: 3,
    color: "lavender" as const,
    featured: true,
  },
  {
    name: "Extreme Fun Party",
    price: 699,
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
  weekdayPrice: 999,
  weekendPrice: 1499,
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
  "Littles and Lattés drinks",
  "Popcorn machine",
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
  "We are a socks only facility",
  "Parents must supervise children",
  "Snacks and drinks available for purchase",
] as const;

export const socksReminder =
  "We are a socks only facility — socks are required for children and adults.";

export const promoText =
  "Tuesdays & Thursdays: open 12:00 to 7:30 pm — 50% off drop-in admissions from 3:30 to 7:30 pm";

export const galleryImages = [
  {
    src: "/gallery/play-structure-exterior.webp",
    alt: "Multi-level indoor play structure with slides and tunnels at Fun Factory Play Café Pickering",
  },
  {
    src: "/gallery/birthday-party-pink-table.webp",
    alt: "Pink themed birthday party table setup with balloons and decorations at Fun Factory",
  },
  {
    src: "/gallery/littles-and-lattes-drinks.webp",
    alt: "Iced drinks from Littles & Lattés Café inside Fun Factory Play Café",
  },
  {
    src: "/gallery/ball-pit-colorful.webp",
    alt: "Colorful ball pit at Fun Factory indoor playground in Pickering",
  },
  {
    src: "/gallery/birthday-party-winnie.webp",
    alt: "Winnie the Pooh themed birthday party room at Fun Factory Play Café",
  },
  {
    src: "/gallery/parent-seating-area.webp",
    alt: "Parent seating area with view of the play structure at Fun Factory",
  },
  {
    src: "/gallery/littles-and-lattes-latte.webp",
    alt: "Iced latte from Littles & Lattés Café at Fun Factory Pickering",
  },
  {
    src: "/gallery/birthday-dessert-table.webp",
    alt: "Birthday dessert table with balloon arch and cake at Fun Factory",
  },
  {
    src: "/gallery/padded-roller-bridge.webp",
    alt: "Ride-on cars and toddler play area at Fun Factory Play Café",
  },
  {
    src: "/gallery/play-structure-wide.webp",
    alt: "Wide view of the indoor play structure at Fun Factory Pickering",
  },
  {
    src: "/gallery/obstacle-course.webp",
    alt: "Candy-themed obstacle course inside the play structure at Fun Factory",
  },
  {
    src: "/gallery/candy-walkway.webp",
    alt: "Pink play corridor with stepping stones at Fun Factory",
  },
  {
    src: "/gallery/play-structure-overview.webp",
    alt: "Fun Factory Play Café front entrance in Pickering with Littles & Lattés signage",
  },
  {
    src: "/gallery/climbing-structure.webp",
    alt: "Pink and blue climbing structure with robot theme at Fun Factory",
  },
] as const;

export const googleReviewsSummary = {
  rating: 4.4,
  totalReviews: 680,
  placeId: process.env.GOOGLE_PLACE_ID ?? "ChIJW8V8K9bV1IkR8KqGxqJxJZQ",
} as const;

export const googleReviewsFallback = [
  {
    author: "G & N Johnson",
    rating: 5,
    relativeTime: "4 weeks ago",
    text: "We had an amazing experience at Fun Factory Pickering! The prices are fantastic, and one of the best things is that there's no time limit, so the kids can play and enjoy themselves without feeling rushed. The facility is very clean, family-friendly, and welcoming. I highly recommend Fun Factory Pickering to any family looking for a fun, affordable outing.",
  },
  {
    author: "Luksume Sarvananda",
    rating: 5,
    relativeTime: "7 months ago",
    text: "Took our toddler here and had an amazing time! The space is clean, safe, and full of fun activities that kept our little one entertained for hours. Really loved that I could keep an eye on my little the entire time they were playing. Highly recommend for a fun family outing!",
  },
  {
    author: "SONIC NICOP",
    rating: 5,
    relativeTime: "3 weeks ago",
    text: "Such an amazing and fun place for kids and toddlers. Also great for birthday parties and mums date.",
  },
] as const;

export const siteRoutes = {
  play: "/play",
  loyalty: "/loyalty",
} as const;

export const dropInVisitSteps = [
  {
    title: "Sign the waiver",
    description:
      "Every child needs a signed waiver before play. Complete it online before you arrive to save time when you check in.",
  },
  {
    title: "Check our hours",
    description:
      "See our current public play hours on this page before you visit.",
  },
  {
    title: "Pay at the front desk",
    description:
      "Drop-in admissions are paid when you arrive. Access 2 Card holders save $2 — show your card when you check-in.",
  },
  {
    title: "Wear socks",
    description:
      "We're a socks-only facility. Bring socks for kids and adults, or buy them when you check-in for $3.",
  },
] as const;

export const loyaltyProgram = {
  pointsPerVisit: 10,
  freeVisitAt: 100,
  summary:
    "Earn points on regular drop-in visits. After enough visits, your next admission is on us. Party packages include separate free return passes — that's not the same as loyalty points.",
  enrollNote:
    "Sign up below with your phone, email, and postal code — or ask staff to enroll you at the front desk on your first visit. Points are tracked through Square when you pay at regular drop-in rates.",
  rules: [
    "Earn 10 loyalty points with each regular drop-in visit paid at full admission price.",
    "Reach 100 points to redeem one free drop-in admission.",
    "Tuesday and Thursday 50% off drop-in visits do not earn loyalty points — those are discounted admissions only.",
    "Party packages include free return play passes when the package is paid in full (1–5 passes depending on package). Those passes are separate from loyalty points.",
    "Points are tracked through Square when you pay at the front desk.",
    "Use the same phone number online and at the desk so your points stay linked.",
    "Ask staff to look up or redeem your points any time you visit.",
  ],
} as const;

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
      image: "/cafe/latte.webp",
      hotPrice: 5,
      coldPrice: 6,
    },
    {
      name: "Vanilla Latte",
      description: "Smooth espresso with creamy milk and a touch of vanilla sweetness.",
      image: "/cafe/vanilla-latte.webp",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
    {
      name: "Caramel Macchiato",
      description: "Smooth milk and vanilla topped with espresso and a drizzle of rich caramel.",
      image: "/cafe/caramel-macchiato.webp",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
    {
      name: "Spanish Latte",
      description: "Bold espresso with sweetened condensed milk and a hint of cinnamon.",
      image: "/cafe/spanish-latte.webp",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
    {
      name: "Chai Latte",
      description: "Warm spices and black tea blended with milk for the perfect cozy sip.",
      image: "/cafe/chai-latte.webp",
      hotPrice: 5.5,
      coldPrice: 6,
    },
    {
      name: "Fun Factory Latte",
      description: "Our classic latte made with oat milk. Creamy, smooth, and made for you.",
      image: "/cafe/fun-factory-latte.webp",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
  ],
  matchaDrinks: [
    {
      name: "Matcha Latte",
      description: "Smooth and earthy matcha blended with milk. Simple. Pure. Refreshing.",
      image: "/cafe/matcha-latte.webp",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
    {
      name: "Strawberry Matcha Latte",
      description:
        "Sweet strawberry goodness paired with our signature strawberry cold foam matcha latte. Fruity, creamy, and oh-so-refreshing!",
      image: "/cafe/strawberry-matcha.webp",
      coldPrice: 6.5,
    },
    {
      name: "Mango Matcha Latte",
      description:
        "Tropical mango meets smooth matcha and milk for a vibrant, creamy blend that's as sunny as it is satisfying.",
      image: "/cafe/mango-matcha-latte.webp",
      coldPrice: 6.5,
    },
    {
      name: "Vanilla Matcha Latte",
      description:
        "Smooth matcha blended with creamy milk and a touch of vanilla. Light, sweet, and gently comforting.",
      image: "/cafe/vanilla-matcha-latte.webp",
      hotPrice: 5.5,
      coldPrice: 6.5,
    },
    {
      name: "Fun Factory Matcha Latte",
      description:
        "Our classic matcha latte, perfectly balanced and made with oat milk. Creamy, smooth, and made for you.",
      image: "/cafe/fun-factory-matcha-latte.webp",
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
    {
      src: "/cafe/full-menu.webp",
      alt: "Littles & Lattés full café menu with pricing",
      width: 1024,
      height: 576,
    },
    {
      src: "/cafe/specialty-lattes-menu.webp",
      alt: "Littles & Lattés specialty iced lattes menu",
      width: 1024,
      height: 768,
    },
    {
      src: "/cafe/matcha-menu.webp",
      alt: "Littles & Lattés matcha drinks menu",
      width: 1024,
      height: 819,
    },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/play", label: "Play" },
  { href: "/birthday-parties", label: "Parties" },
  { href: "/loyalty", label: "Loyalty" },
  { href: "/cafe", label: "Café" },
  { href: "/gallery", label: "Gallery" },
  { href: "/waiver", label: "Waiver" },
  { href: "/contact", label: "Contact" },
] as const;

const TORONTO_TZ = "America/Toronto";

const weekdayToIndex: Record<string, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export function getTorontoWeekday(): string {
  return new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    timeZone: TORONTO_TZ,
  }).format(new Date());
}

function getTorontoDayIndex(): number {
  return weekdayToIndex[getTorontoWeekday()] ?? new Date().getDay();
}

function getTorontoTimeMinutes(): number {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TORONTO_TZ,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());

  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  return hour * 60 + minute;
}

function addTorontoDays(dateStr: string, offset: number): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + offset, 12, 0, 0));
  return getTorontoCalendarDate(date);
}

function parseTimeToMinutes(time: string): number | null {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(am|pm)$/i);
  if (!match) return null;
  let hour = Number.parseInt(match[1], 10);
  const minute = Number.parseInt(match[2], 10);
  const period = match[3].toLowerCase();
  if (period === "pm" && hour !== 12) hour += 12;
  if (period === "am" && hour === 12) hour = 0;
  return hour * 60 + minute;
}

function parseHoursRanges(hoursStr: string): { open: number; close: number }[] | null {
  if (!hoursStr || hoursStr.toLowerCase() === "closed") return null;

  const ranges: { open: number; close: number }[] = [];
  for (const segment of hoursStr.split(",")) {
    const parts = segment.trim().split(/[–-]/);
    if (parts.length !== 2) continue;
    const open = parseTimeToMinutes(parts[0]);
    const close = parseTimeToMinutes(parts[1]);
    if (open === null || close === null) continue;
    ranges.push({ open, close });
  }

  return ranges.length ? ranges : null;
}

function minutesToTimeLabel(minutes: number): string {
  const hour24 = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const period = hour24 >= 12 ? "pm" : "am";
  const hour12 = hour24 % 12 || 12;
  return `${hour12}:${minute.toString().padStart(2, "0")} ${period}`;
}

export type EffectiveHours = {
  hours: string;
  closed: boolean;
  label?: string;
  isSpecial: boolean;
};

export function getHoursForDate(dateStr: string): EffectiveHours {
  const special = specialHours.find((entry) => entry.date === dateStr);
  if (special) {
    return {
      hours: special.hours,
      closed: !!special.closed,
      label: special.label,
      isSpecial: true,
    };
  }

  const weekday = new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    timeZone: TORONTO_TZ,
  }).format(new Date(`${dateStr}T12:00:00`));

  const regular = getWeeklyHoursForDate(dateStr).find((entry) => entry.day === weekday);
  if (!regular) {
    return { hours: "Closed", closed: true, isSpecial: false };
  }

  return {
    hours: regular.hours,
    closed: !!regular.closed,
    isSpecial: false,
  };
}

export function getTodayHours(): DayHours | null {
  const dayIndex = getTorontoDayIndex();
  const hoursIndex = [6, 0, 1, 2, 3, 4, 5];
  return getWeeklyHours()[hoursIndex[dayIndex]] ?? null;
}

export function getDropInHoursSummary(now = new Date()): string {
  const today = getTorontoCalendarDate(now);
  if (today >= hoursScheduleChangeDate) {
    return "We're open Mon & Wed 9:30 am–2:00 pm, Tue & Thu 12:00 pm–7:30 pm, and Fri–Sun 9:30 am–8:30 pm.";
  }
  return "We're open Fri–Sun 9:30 am–8:30 pm and Tue & Thu 12:00 pm–7:30 pm. Mon & Wed are closed. Starting Monday, September 8, Mon & Wed open 9:30 am–2:00 pm.";
}

export function formatSpecialHoursDate(dateStr: string, label?: string): string {
  const formatted = new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    month: "short",
    day: "numeric",
    timeZone: TORONTO_TZ,
  }).format(new Date(`${dateStr}T12:00:00`));

  return label ? `${formatted} (${label})` : formatted;
}

export function getUpcomingSpecialHours(now = new Date()): SpecialHours[] {
  const today = getTorontoCalendarDate(now);
  return specialHours
    .filter((entry) => entry.date >= today && (!entry.closed || entry.label))
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function isOpenNow(): boolean {
  const effective = getHoursForDate(getTorontoCalendarDate());
  if (effective.closed) return false;

  const ranges = parseHoursRanges(effective.hours);
  if (!ranges) return false;

  const current = getTorontoTimeMinutes();
  return ranges.some((range) => current >= range.open && current < range.close);
}

export function getOpenStatusMessage(): string {
  const todayDate = getTorontoCalendarDate();
  const effective = getHoursForDate(todayDate);
  const ranges = effective.closed ? null : parseHoursRanges(effective.hours);
  const current = getTorontoTimeMinutes();

  if (ranges) {
    if (ranges.some((range) => current >= range.open && current < range.close)) {
      return "Open now";
    }

    for (const range of ranges) {
      if (current < range.open) {
        return `Opens today at ${minutesToTimeLabel(range.open)}`;
      }
    }
  }

  for (let offset = 1; offset <= 30; offset++) {
    const nextDate = addTorontoDays(todayDate, offset);
    const next = getHoursForDate(nextDate);
    if (next.closed) continue;

    const nextRanges = parseHoursRanges(next.hours);
    if (!nextRanges) continue;

    const dayLabel =
      offset === 1 ? "tomorrow" : `on ${formatSpecialHoursDate(nextDate, next.label)}`;
    return `Opens ${dayLabel} at ${minutesToTimeLabel(nextRanges[0].open)}`;
  }

  return "Closed";
}

export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString("en-CA")}`;
}
