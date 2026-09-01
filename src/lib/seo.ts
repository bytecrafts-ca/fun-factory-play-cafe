import type { Metadata } from "next";
import {
  accessTwoCardUrl,
  admissions,
  cafeMenu,
  getPartyBookingUrl,
  googleReviewsFallback,
  googleReviewsSummary,
  getWeeklyHours,
  partyPackages,
  siteConfig,
  ultimateParty,
} from "@/lib/site";
import { landingPages } from "@/lib/landing-pages";
import { guides } from "@/lib/guides";

export const seoConfig = {
  siteUrl: "https://funfactoryplay.ca",
  siteName: siteConfig.name,
  shortName: siteConfig.shortName,
  locale: "en_CA",
  defaultTitle: "Indoor Playground & Birthday Parties Pickering ON | Fun Factory Play Café",
  defaultDescription:
    "Fun Factory Play Café: Pickering's indoor playground & birthday party venue on Bayly St. Drop-in play, party packages from $399, Littles & Lattés café. (647) 824-8389.",
  defaultKeywords: [
    "Fun Factory Play Café",
    "indoor playground Pickering",
    "kids play place Pickering",
    "birthday party venue Pickering",
    "indoor play centre Durham Region",
    "toddler play area Pickering",
    "play café Pickering",
    "drop-in play Pickering",
    "children's party packages Ontario",
    "Littles and Lattés café",
    "socks only play facility",
    "1420 Bayly Street Pickering",
  ],
  geo: {
    latitude: 43.83115,
    longitude: -79.0812758,
  },
  googlePlaceId: "ChIJW8V8K9bV1IkR8KqGxqJxJZQ",
  priceRange: "$$",
  areaServed: ["Pickering", "Ajax", "Whitby", "Oshawa", "Scarborough", "Durham Region"],
} as const;

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${seoConfig.siteUrl}${normalized === "/" ? "" : normalized}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = siteConfig.heroImage.src,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);

  return {
    title,
    description,
    keywords: [...seoConfig.defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: seoConfig.locale,
      url,
      siteName: seoConfig.siteName,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          verification: {
            ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
              ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
              : {}),
            other: {
              "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
            },
          },
        }
      : {}),
  };
}

const dayMap: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

function to24Hour(time: string): string {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(am|pm)$/i);
  if (!match) return time;
  let hour = Number.parseInt(match[1], 10);
  const minutes = match[2];
  const period = match[3].toLowerCase();
  if (period === "pm" && hour !== 12) hour += 12;
  if (period === "am" && hour === 12) hour = 0;
  return `${hour.toString().padStart(2, "0")}:${minutes}`;
}

function parseHoursRange(range: string): { opens: string; closes: string } | null {
  const [open, close] = range.split("–").map((part) => part.trim());
  if (!open || !close) return null;
  return { opens: to24Hour(open), closes: to24Hour(close) };
}

export function getOpeningHoursSpecification() {
  return getWeeklyHours()
    .filter((entry) => !entry.closed)
    .map((entry) => {
      const parsed = parseHoursRange(entry.hours);
      if (!parsed) return null;
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[entry.day],
        opens: parsed.opens,
        closes: parsed.closes,
      };
    })
    .filter(Boolean);
}

export type FaqLinkSegment = {
  type: "link";
  href: string;
  label: string;
  external?: boolean;
};

export type FaqTextSegment = {
  type: "text";
  value: string;
};

export type FaqSegment = FaqTextSegment | FaqLinkSegment;

export type FaqItem = {
  question: string;
  segments: FaqSegment[];
};

export function faqSegmentsToText(segments: FaqSegment[]): string {
  return segments
    .map((segment) => (segment.type === "text" ? segment.value : segment.href))
    .join("");
}

export const faqItems: FaqItem[] = [
  {
    question: "Where is Fun Factory Play Café located?",
    segments: [
      {
        type: "text",
        value: `Fun Factory Play Café is at ${siteConfig.address.full}. We are an indoor playground and party centre in Pickering, Ontario, serving families across Durham Region and the east GTA.`,
      },
    ],
  },
  {
    question: "What are the drop-in play admission prices?",
    segments: [
      {
        type: "text",
        value: `Under 1 year old: ${admissions[0].price}. Ages 1–3: ${admissions[1].price}. Ages 4–13: ${admissions[2].price}. Ages 14–17: ${admissions[3].price}. Pay at the front desk when you arrive. Enjoy unlimited play time with no time limit.`,
      },
    ],
  },
  {
    question: "What are Fun Factory's hours?",
    segments: [
      {
        type: "text",
        value:
          "Open Monday and Wednesday 9:30 am–2:00 pm, Tuesday and Thursday 12:00 pm–7:30 pm, and Friday–Sunday 9:30 am–8:30 pm.",
      },
    ],
  },
  {
    question: "Is there a discount on Tuesdays and Thursdays?",
    segments: [
      {
        type: "text",
        value:
          "Yes. Visit every Tuesday and Thursday from 3:30 pm for 50% off all drop-in admissions. We're open from 12:00 pm on those days.",
      },
    ],
  },
  {
    question: "Do you accept Access 2 Card?",
    segments: [
      { type: "text", value: "Yes. " },
      {
        type: "link",
        href: accessTwoCardUrl,
        label: "Access 2 Card",
        external: true,
      },
      {
        type: "text",
        value:
          " holders get $2 off drop-in admission rates. Show your card at the front desk when you pay.",
      },
    ],
  },
  {
    question: "Do children and adults need to wear socks?",
    segments: [
      {
        type: "text",
        value:
          "Yes. Fun Factory is a socks-only facility. Socks are required for children and adults at all times. Socks are available for purchase at reception for $3.00.",
      },
    ],
  },
  {
    question: "How do I book a birthday party at Fun Factory?",
    segments: [
      { type: "text", value: "Book online at " },
      {
        type: "link",
        href: getPartyBookingUrl(),
        label: "our party booking page",
        external: true,
      },
      {
        type: "text",
        value: `. Party packages start at $${partyPackages[0].price} and include a private room, playtime, pizza, cake, juice, e-vites, and a party host. See all `,
      },
      { type: "link", href: "/birthday-parties", label: "birthday party packages" },
      { type: "text", value: " for details." },
    ],
  },
  {
    question: "Is there a café at Fun Factory?",
    segments: [
      {
        type: "text",
        value:
          "Yes. Littles & Lattés Café is on site, serving premium coffee, iced drinks, and snacks for parents and families. View the full menu on the ",
      },
      { type: "link", href: "/cafe", label: "café page" },
      { type: "text", value: "." },
    ],
  },
  {
    question: "Do I need to sign a waiver before playing?",
    segments: [
      {
        type: "text",
        value: "Yes. Every child needs a signed waiver before entry. ",
      },
      { type: "link", href: siteConfig.waiverUrl, label: "Sign the waiver online", external: true },
      { type: "text", value: " before you arrive to save time at the desk." },
    ],
  },
];

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seoConfig.siteUrl}/#organization`,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: absoluteUrl("/logo.webp"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [
      siteConfig.social.instagram.href,
      siteConfig.social.littlesInstagram.href,
      siteConfig.googleReviews.reviewsUrl,
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seoConfig.siteUrl}/#website`,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    inLanguage: "en-CA",
    publisher: { "@id": `${seoConfig.siteUrl}/#organization` },
    creator: {
      "@type": "Organization",
      name: "Sutrel",
      url: "https://sutrel.ca",
      email: "inquire@sutrel.ca",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AmusementCenter"],
    "@id": `${seoConfig.siteUrl}/#localbusiness`,
    name: seoConfig.siteName,
    alternateName: [
      "The Fun Factory",
      "Fun Factory Indoor Playground",
      "The Fun Factory Indoor Playground and Party Centre",
    ],
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    telephone: "+16478248389",
    email: siteConfig.email,
    image: [absoluteUrl(siteConfig.heroImage.src), absoluteUrl("/logo.webp")],
    logo: absoluteUrl("/logo.webp"),
    priceRange: seoConfig.priceRange,
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: seoConfig.geo.latitude,
      longitude: seoConfig.geo.longitude,
    },
    hasMap: siteConfig.address.mapsUrl,
    openingHoursSpecification: getOpeningHoursSpecification(),
    areaServed: seoConfig.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    department: {
      "@type": "CafeOrCoffeeShop",
      "@id": `${seoConfig.siteUrl}/#littles-lattes`,
      name: cafeMenu.brand,
      url: absoluteUrl("/cafe"),
      description:
        "On-site play café serving premium coffee, matcha, iced lattes, and snacks for parents while children play.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleReviewsSummary.rating,
      reviewCount: googleReviewsSummary.totalReviews,
      bestRating: 5,
      worstRating: 1,
    },
    review: googleReviewsFallback.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
    })),
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Indoor playground", value: true },
      { "@type": "LocationFeatureSpecification", name: "Toddler play area", value: true },
      { "@type": "LocationFeatureSpecification", name: "Birthday party rooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "On-site café", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Socks-only facility", value: true },
    ],
    knowsAbout: [
      "Indoor playground",
      "Children's birthday parties",
      "Drop-in play",
      "Toddler play areas",
      "Family café",
    ],
    parentOrganization: { "@id": `${seoConfig.siteUrl}/#organization` },
  };
}

export function getFAQSchema(items: FaqItem[] = faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqSegmentsToText(item.segments),
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getPartyOffersSchema() {
  const standardOffers = partyPackages.map((pkg, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    item: {
      "@type": "Offer" as const,
      name: pkg.name,
      price: pkg.price,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/birthday-parties"),
      seller: { "@id": `${seoConfig.siteUrl}/#localbusiness` },
      description: `${pkg.name} — ${pkg.children} kids and ${pkg.adults} adults, private party room, playtime, pizza, cake, juice, e-vites, and party host.`,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Birthday Party Packages at Fun Factory Play Café",
    itemListElement: [
      ...standardOffers,
      {
        "@type": "ListItem",
        position: standardOffers.length + 1,
        item: {
          "@type": "Offer",
          name: ultimateParty.name,
          price: ultimateParty.weekdayPrice,
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          url: absoluteUrl("/birthday-parties"),
          seller: { "@id": `${seoConfig.siteUrl}/#localbusiness` },
          description: `${ultimateParty.name} — up to ${ultimateParty.children} kids, private facility use, weekday and weekend pricing available.`,
        },
      },
    ],
  };
}

export function getDropInServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Drop-In Indoor Play",
    provider: { "@id": `${seoConfig.siteUrl}/#localbusiness` },
    areaServed: seoConfig.areaServed,
    url: absoluteUrl("/play"),
    offers: [
      { "@type": "Offer", name: "Under 1 Year Old", price: "5.00", priceCurrency: "CAD" },
      { "@type": "Offer", name: "Ages 1 to 3", price: "10.00", priceCurrency: "CAD" },
      { "@type": "Offer", name: "Ages 4 to 13", price: "14.00", priceCurrency: "CAD" },
      { "@type": "Offer", name: "Ages 14 to 17", price: "10.00", priceCurrency: "CAD" },
    ],
  };
}

export function getCafeMenuSchema() {
  type PricedItem = { name: string; hotPrice?: number; coldPrice?: number; price?: number };

  const toPrice = (item: PricedItem) => item.hotPrice ?? item.coldPrice ?? item.price ?? 0;

  const menuItems = [
    ...cafeMenu.espressoBar.map((item) => ({ name: item.name, price: toPrice(item) })),
    ...cafeMenu.matchaDrinks.map((item) => ({ name: item.name, price: toPrice(item) })),
    ...cafeMenu.teas,
    ...cafeMenu.hotChocolate,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${cafeMenu.brand} Menu`,
    url: absoluteUrl("/cafe"),
    hasMenuSection: {
      "@type": "MenuSection",
      name: "Drinks",
      hasMenuItem: menuItems.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        offers: {
          "@type": "Offer",
          price: item.price,
          priceCurrency: "CAD",
        },
      })),
    },
  };
}

export function getTueThuPromoEventSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "50% Off Drop-In Admissions",
    description:
      "Every Tuesday and Thursday, drop-in admissions are 50% off after 3:30 pm at Fun Factory Play Café in Pickering.",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: seoConfig.siteName,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
    },
    organizer: { "@id": `${seoConfig.siteUrl}/#localbusiness` },
  };
}

export const pageSeo = {
  home: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    path: "/",
    keywords: ["indoor playground near me", "kids activities Pickering"],
  },
  play: {
    title: "Indoor Playground Pickering | Drop-In Play & Admissions",
    description:
      "Drop-in indoor play at Fun Factory Pickering on Bayly St. Unlimited play, toddler zone, pay at desk. Tue & Thu 50% off after 3:30 pm. Sign waiver online.",
    path: "/play",
    keywords: ["indoor playground Pickering", "drop-in play rates", "toddler play Pickering"],
  },
  parties: {
    title: "Kids Birthday Party Pickering | Party Packages from $399",
    description:
      "Book a kids birthday party in Pickering at Fun Factory. Packages from $399 with private room, playtime, pizza, cake, juice, e-vites & host. Ultimate from $999.",
    path: "/birthday-parties",
    keywords: ["kids birthday party Pickering", "birthday party venue Durham Region", "party packages Pickering"],
  },
  cafe: {
    title: "Littles & Lattés Café Pickering | Coffee at Fun Factory",
    description:
      "Littles & Lattés Café in Pickering at Fun Factory Play Café. Premium coffee, matcha, iced lattes & snacks while kids play. View full menu & prices.",
    path: "/cafe",
    keywords: ["Littles and Lattes Pickering", "play café Pickering", "coffee indoor playground Pickering"],
    ogImage: "/cafe/matcha-menu.webp",
  },
  gallery: {
    title: "Photo Gallery | Fun Factory Indoor Playground Pickering",
    description:
      "See photos of Fun Factory Play Café — indoor play structures, toddler zones, birthday parties, and family fun in Pickering, Ontario.",
    path: "/gallery",
    keywords: ["indoor playground photos Pickering"],
  },
  contact: {
    title: "Contact Fun Factory Play Café | Pickering, ON",
    description:
      "Contact Fun Factory at (647) 824-8389 or info@funfactoryplay.ca. 1420 Bayly St., Unit 15, Pickering. Hours, directions, and inquiry form.",
    path: "/contact",
    keywords: ["Fun Factory phone number", "Fun Factory address Pickering"],
  },
  waiver: {
    title: "Sign Waiver & Facility Rules | Fun Factory Pickering",
    description:
      "Sign the Fun Factory waiver online before your visit. Review socks-only rules, supervision requirements, and important facility policies.",
    path: "/waiver",
    keywords: ["Fun Factory waiver", "playground rules Pickering"],
  },
  loyalty: {
    title: "Loyalty Program | Earn Free Visits | Fun Factory",
    description:
      "Join Fun Factory loyalty free — earn 10 points per regular drop-in visit, 100 points for a free admission. Enroll online with phone, email, and postal code.",
    path: "/loyalty",
    keywords: ["play centre loyalty program Pickering"],
  },
  guides: {
    title: "Parent Guides | Indoor Play & Parties in Pickering",
    description:
      "Planning guides for Fun Factory Play Café: birthday parties, drop-in play, toddler activities, and family outings in Pickering and Durham Region.",
    path: "/guides",
    keywords: ["indoor play guide Pickering", "birthday party planning Durham"],
  },
  resources: {
    title: "Resources for Parents | Fun Factory Pickering",
    description:
      "Helpful links for families visiting Fun Factory Play Café: play rates, party packages, Littles & Lattés menu, local guides, and Google reviews.",
    path: "/resources",
    keywords: ["Fun Factory resources", "Pickering family guides"],
  },
} as const satisfies Record<string, PageSeoInput>;

/** All indexable pages including landing pages and guides */
export function getAllSitemapEntries(): PageSeoInput[] {
  const landingSeo = landingPages.map((page) => page.seo);
  const guideSeo = guides.map((guide) => guide.seo);
  return [...Object.values(pageSeo), ...landingSeo, ...guideSeo];
}

export function getGlobalSchemas() {
  return [getOrganizationSchema(), getWebSiteSchema(), getLocalBusinessSchema()];
}
