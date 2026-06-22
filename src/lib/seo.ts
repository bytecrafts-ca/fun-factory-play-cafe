import type { Metadata } from "next";
import {
  admissions,
  googleReviewsFallback,
  googleReviewsSummary,
  hours,
  partyPackages,
  siteConfig,
} from "@/lib/site";

export const seoConfig = {
  siteUrl: "https://funfactoryplay.ca",
  siteName: siteConfig.name,
  shortName: siteConfig.shortName,
  locale: "en_CA",
  defaultTitle: `${siteConfig.name} | Indoor Playground & Birthday Parties in Pickering, ON`,
  defaultDescription:
    "Fun Factory Play Café in Pickering, Ontario — indoor playground, unlimited drop-in play, birthday party packages, and Littles & Lattés café. Socks-only facility. Tue & Thu 50% off admissions 3:30–7:30 pm.",
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
  return hours
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
          "Open Friday–Sunday 9:30 am–8:30 pm and Tuesday & Thursday 3:30 pm–7:30 pm. Closed Monday and Wednesday.",
      },
    ],
  },
  {
    question: "Is there a discount on Tuesdays and Thursdays?",
    segments: [
      {
        type: "text",
        value:
          "Yes. Visit every Tuesday and Thursday from 3:30 to 7:30 pm for 50% off all drop-in admissions.",
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
        href: siteConfig.ovatu.partiesUrl,
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
    logo: absoluteUrl("/logo.png"),
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
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AmusementCenter", "CafeOrCoffeeShop"],
    "@id": `${seoConfig.siteUrl}/#localbusiness`,
    name: seoConfig.siteName,
    alternateName: "The Fun Factory Indoor Playground and Party Centre",
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: [absoluteUrl(siteConfig.heroImage.src), absoluteUrl("/logo.png")],
    logo: absoluteUrl("/logo.png"),
    priceRange: seoConfig.priceRange,
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1420 Bayly St., Unit 15",
      addressLocality: "Pickering",
      addressRegion: "ON",
      postalCode: "L1W 3R4",
      addressCountry: "CA",
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
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Birthday Party Packages at Fun Factory Play Café",
    itemListElement: partyPackages.map((pkg, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Offer",
        name: pkg.name,
        price: pkg.price,
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        url: absoluteUrl("/birthday-parties"),
        seller: { "@id": `${seoConfig.siteUrl}/#localbusiness` },
        description: `${pkg.name} — ${pkg.children} kids and ${pkg.adults} adults, private party room, playtime, pizza, cake, juice, e-vites, and party host.`,
      },
    })),
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
    title: "Drop-In Play & Admissions | Fun Factory Pickering",
    description:
      "Drop-in indoor play at Fun Factory Pickering. Unlimited play time, pay at the desk. Rates for toddlers to teens. Tue & Thu 50% off 3:30–7:30 pm. Sign waiver online before you arrive.",
    path: "/play",
    keywords: ["drop-in play rates", "indoor play admission Pickering", "pay at desk"],
  },
  parties: {
    title: "Birthday Party Packages Pickering | Fun Factory Play Café",
    description:
      "Book a kids birthday party at Fun Factory Pickering. Packages from $369 with private room, playtime, pizza, cake, juice, e-vites & host. Fun, Active Fun, Supreme & Extreme packages available.",
    path: "/birthday-parties",
    keywords: ["birthday party packages Pickering", "kids party venue Durham"],
  },
  cafe: {
    title: "Littles & Lattés Café Menu | Fun Factory Pickering",
    description:
      "Littles & Lattés Café at Fun Factory — premium coffee, iced drinks, smoothies, and snacks for parents while kids play. View the full menu and pricing.",
    path: "/cafe",
    keywords: ["play café menu", "coffee shop indoor playground Pickering"],
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
} as const satisfies Record<string, PageSeoInput>;

export function getGlobalSchemas() {
  return [getOrganizationSchema(), getWebSiteSchema(), getLocalBusinessSchema()];
}
