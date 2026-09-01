import type { FaqItem } from "@/lib/seo";
import type { PageSeoInput } from "@/lib/seo";

export type LandingPage = {
  slug: string;
  path: string;
  breadcrumbLabel: string;
  h1: string;
  heroSubtitle: string;
  accent: "sky" | "lavender" | "mint" | "peach" | "bubblegum";
  seo: PageSeoInput;
  ctas: {
    label: string;
    href: string;
    external?: boolean;
    variant?: "primary" | "secondary" | "lavender";
  }[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: FaqItem[];
};

const sharedFaqs = {
  location: {
    question: "Where is Fun Factory Play Café located?",
    segments: [
      {
        type: "text" as const,
        value:
          "1420 Bayly St., Unit 15, Pickering, ON L1W 3R4. Free parking in the plaza. Easy access from Highway 401 and Brock Road.",
      },
    ],
  },
  waiver: {
    question: "Do we need a waiver before playing?",
    segments: [
      {
        type: "text" as const,
        value:
          "Yes. Every child needs a signed waiver before entry. You can sign online before you arrive to speed up check-in.",
      },
    ],
  },
};

export const landingPages: LandingPage[] = [
  {
    slug: "pickering-indoor-playground",
    path: "/pickering-indoor-playground",
    breadcrumbLabel: "Pickering Indoor Playground",
    h1: "Indoor Playground in Pickering, Ontario",
    heroSubtitle:
      "Multi-level play structures, a toddler zone, and unlimited drop-in play for families on Bayly Street. Pay at the desk, sign your waiver online, and stay as long as you like.",
    accent: "sky",
    seo: {
      title: "Indoor Playground Pickering ON | Fun Factory Play Café",
      description:
        "Fun Factory is Pickering's indoor playground on Bayly St. Drop-in play for toddlers to teens, toddler zone, café for parents. Tue/Thu 50% off after 3:30 pm. (647) 824-8389.",
      path: "/pickering-indoor-playground",
      keywords: [
        "indoor playground Pickering",
        "indoor play centre Pickering",
        "toddler play Pickering",
        "rainy day activities kids Pickering",
      ],
    },
    ctas: [
      { label: "View Drop-In Rates", href: "/play" },
      { label: "Sign Waiver Online", href: "https://form.jotform.com/261257549756066", external: true, variant: "secondary" },
    ],
    sections: [
      {
        heading: "Why families choose Fun Factory for indoor play in Pickering",
        paragraphs: [
          "When the weather turns or you need a safe place for kids to climb, slide, and explore, Fun Factory Play Café on Bayly Street is one of Pickering's most popular indoor playgrounds. Unlike small storefront play areas, our space is a full indoor play centre with multi-level structures, dedicated toddler zones, and open layouts that let parents keep an eye on kids while they play.",
          "Drop-in visits are simple: check our hours, sign the waiver online, and pay per person at the front desk when you arrive. There is no time limit on your visit, which makes Fun Factory a strong choice for playdates, rainy afternoons, and school-break outings across Durham Region.",
          "Families from Liverpool, Amberlea, West Shore, and central Pickering reach us in minutes. We also see regular visitors from Ajax, Whitby, and Scarborough who want a larger indoor playground without driving into downtown Toronto.",
        ],
      },
      {
        heading: "What to expect on your first visit",
        paragraphs: [
          "Fun Factory is a socks-only facility. Bring socks for every child and adult, or purchase them at reception for $3. A signed waiver is required for each child before play. Nut-free outside food is welcome; outside drinks are not permitted.",
          "Admission is charged by age group. Under 1 year is $5 (free with a paying sibling). Ages 1–3 are $10, ages 4–13 are $14, and ages 14–17 are $10. Access 2 Card holders receive $2 off drop-in admission rates.",
          "Every Tuesday and Thursday, drop-in admissions are 50% off after 3:30 pm. We are open from 12:00 pm on those days. While kids play, parents can order from Littles & Lattés Café on site.",
        ],
      },
      {
        heading: "Toddler-friendly play and parent seating",
        paragraphs: [
          "Our toddler zone gives younger children a safer area to explore at their own pace, separate from the busier climbing structures. Parent seating throughout the facility keeps sight lines open so you can supervise comfortably.",
          "Littles & Lattés Café serves premium coffee, matcha, iced lattes, and snacks so your visit feels like a true play café experience, not just a quick stop. It is one reason Fun Factory stands out among indoor play options in Pickering and the east GTA.",
        ],
      },
    ],
    faqs: [
      sharedFaqs.location,
      {
        question: "How much does drop-in play cost?",
        segments: [
          {
            type: "text",
            value:
              "Under 1: $5 (free with paying sibling). Ages 1–3: $10. Ages 4–13: $14. Ages 14–17: $10. Pay at the front desk. Unlimited play time.",
          },
        ],
      },
      {
        question: "Is Fun Factory good for toddlers?",
        segments: [
          {
            type: "text",
            value:
              "Yes. We have a dedicated toddler play area designed for younger children, plus parent seating with clear sight lines to the play floor.",
          },
        ],
      },
      sharedFaqs.waiver,
    ],
  },
  {
    slug: "kids-birthday-parties-pickering",
    path: "/kids-birthday-parties-pickering",
    breadcrumbLabel: "Kids Birthday Parties Pickering",
    h1: "Kids Birthday Parties in Pickering",
    heroSubtitle:
      "Private party rooms, playtime, pizza, cake, juice, e-vites, and a party host. Packages from $399 for 10 kids. Book online in minutes.",
    accent: "lavender",
    seo: {
      title: "Kids Birthday Party Pickering ON | Fun Factory Play Café",
      description:
        "Book a kids birthday party in Pickering at Fun Factory. Private rooms, playtime, pizza, cake & host from $399. Ultimate packages up to 50 kids. Bayly St, Pickering.",
      path: "/kids-birthday-parties-pickering",
      keywords: [
        "kids birthday party Pickering",
        "birthday party venue Pickering",
        "party packages Pickering",
        "children's birthday party Durham",
      ],
    },
    ctas: [
      { label: "View Party Packages", href: "/birthday-parties" },
      { label: "Book Online", href: "https://the-fun-factory.book.app/book-now", external: true, variant: "lavender" },
    ],
    sections: [
      {
        heading: "Pickering birthday parties that are easy for parents",
        paragraphs: [
          "Planning a kids birthday party in Pickering should not mean juggling pizza delivery, cleanup, and entertaining twenty children in your living room. At Fun Factory Play Café, birthday packages include a private party room, playtime in our indoor playground, pizza, birthday cake, juice, e-vites, and a dedicated party host.",
          "Packages start at $399 for the Fun Party (10 kids, 10 adults) and scale up to Ultimate Fun Party options for larger groups, including weekday and weekend pricing for up to 50 children. Weekends typically book four to six weeks out, so early booking is recommended.",
          "Our party rooms are steps from the play floor, so guests move easily between structured celebration time and open play. That combination is why Fun Factory is one of the most searched birthday party venues in Pickering and Durham Region.",
        ],
      },
      {
        heading: "Party packages at a glance",
        paragraphs: [
          "Fun Party ($399): 10 kids and 10 adults, one party-size pizza, birthday cake, juice, e-vites, and one free return play pass.",
          "Active Fun Party ($499): 15 kids and 15 adults, two pizzas, popular choice for medium-sized groups.",
          "Supreme Fun Party ($599): 20 kids and 20 adults, two party-size pizzas.",
          "Extreme Fun Party ($699): 30 kids and 30 adults, three party-size pizzas.",
          "Ultimate Fun Party: from $999 Monday to Thursday or $1,499 Friday to Sunday for up to 50 kids with private use of the facility.",
          "Additional children are $14.99 each and additional adults are $4.99 each. All parties include 2.5 hours in a private room.",
        ],
      },
      {
        heading: "Serving Pickering, Ajax, Whitby, and Durham Region",
        paragraphs: [
          "We are located at 1420 Bayly St., Unit 15 in Pickering with free parking. Families host celebrations with us from across east Durham and the GTA because the venue, packages, and on-site café make the full event easy to manage in one place.",
          "Book online through our party booking system, or contact us if you have questions about room size, guest counts, or add-ons before you reserve your date.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far in advance should I book a birthday party?",
        segments: [
          {
            type: "text",
            value:
              "We recommend booking four to six weeks ahead for weekends. Weekday parties often have more availability. Book online to see open time slots.",
          },
        ],
      },
      {
        question: "Can we bring our own cake?",
        segments: [
          {
            type: "text",
            value:
              "Birthday cake is included in every package. Speak with our team if you have a substitution request.",
          },
        ],
      },
      {
        question: "What is included in every party package?",
        segments: [
          {
            type: "text",
            value:
              "All parties include 2.5 hours in a private room, playtime, pizza, cake, juice, water, coffee/tea for adults, e-vites, party host, setup, and cleanup.",
          },
        ],
      },
      sharedFaqs.location,
    ],
  },
  {
    slug: "durham-region-birthday-parties",
    path: "/durham-region-birthday-parties",
    breadcrumbLabel: "Durham Region Birthday Parties",
    h1: "Birthday Party Venue in Durham Region",
    heroSubtitle:
      "Fun Factory Play Café in Pickering hosts birthday parties for families across Durham Region. Indoor playground, private rooms, and full-service packages.",
    accent: "lavender",
    seo: {
      title: "Birthday Party Venue Durham Region | Fun Factory Pickering",
      description:
        "Durham Region birthday party venue at Fun Factory Pickering. Indoor playground, private rooms, pizza, cake & host. Packages from $399. Serving Ajax, Whitby, Oshawa.",
      path: "/durham-region-birthday-parties",
      keywords: [
        "birthday party venue Durham Region",
        "kids party Durham Region",
        "indoor party venue east GTA",
      ],
    },
    ctas: [
      { label: "Compare Party Packages", href: "/birthday-parties" },
      { label: "Book a Party", href: "https://the-fun-factory.book.app/book-now", external: true, variant: "lavender" },
    ],
    sections: [
      {
        heading: "A Durham Region party venue with room to play",
        paragraphs: [
          "Durham Region families often compare birthday venues on three things: space, simplicity, and value. Fun Factory Play Café in Pickering checks all three. Our indoor playground gives kids a full play experience, while private party rooms keep cake, presents, and food organized.",
          "Unlike restaurant parties where children sit still, or community halls that require you to bring everything, Fun Factory packages bundle playtime, food, hosting, and cleanup. That is why parents from Oshawa, Whitby, Ajax, and Clarington choose us even when Pickering is not their home city.",
        ],
      },
      {
        heading: "Packages for small groups and large celebrations",
        paragraphs: [
          "Choose from Fun, Active Fun, Supreme, and Extreme packages based on your guest count, or book the Ultimate Fun Party for larger celebrations with private facility use. Pricing is transparent on our birthday parties page, with weekday and weekend rates for the Ultimate tier.",
          "Party rooms are assigned by package size. Small room time slots suit Fun and Active Fun parties; large room slots suit Supreme and Extreme packages. Your party host handles PA announcements, setup, and cleanup so you can focus on the birthday child.",
        ],
      },
      {
        heading: "Easy drive from across east Durham",
        paragraphs: [
          "We are minutes from Highway 401 at Bayly Street in Pickering. Free parking makes drop-off straightforward for guests coming from Ajax, Whitby, Oshawa, and Scarborough.",
          "Combine your party with a visit to Littles & Lattés Café for parents and siblings who want coffee or snacks before or after the celebration.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you host parties for families outside Pickering?",
        segments: [
          {
            type: "text",
            value:
              "Yes. We regularly host families from Ajax, Whitby, Oshawa, Scarborough, and across Durham Region.",
          },
        ],
      },
      {
        question: "What age range are parties best for?",
        segments: [
          {
            type: "text",
            value:
              "Our indoor playground suits preschool through early teen birthdays. Most parties are for ages 3 to 12.",
          },
        ],
      },
      sharedFaqs.location,
    ],
  },
  {
    slug: "ajax-indoor-play",
    path: "/ajax-indoor-play",
    breadcrumbLabel: "Ajax Indoor Play",
    h1: "Indoor Play Near Ajax, Ontario",
    heroSubtitle:
      "Fun Factory Play Café in Pickering is a short drive from Ajax for drop-in indoor play, toddler zones, and Littles & Lattés Café.",
    accent: "mint",
    seo: {
      title: "Indoor Play Near Ajax ON | Fun Factory Pickering",
      description:
        "Looking for indoor play near Ajax? Fun Factory Pickering offers unlimited drop-in play, toddler zones & café. Minutes from Ajax via Bayly St. Tue/Thu 50% off after 3:30 pm.",
      path: "/ajax-indoor-play",
      keywords: ["indoor playground near Ajax", "indoor play Ajax Pickering", "kids activities Ajax"],
    },
    ctas: [
      { label: "Drop-In Rates", href: "/play" },
      { label: "Get Directions", href: "/contact", variant: "secondary" },
    ],
    sections: [
      {
        heading: "A larger indoor playground a short drive from Ajax",
        paragraphs: [
          "Ajax families looking for indoor play often want more space than a quick play zone can offer. Fun Factory Play Café in Pickering is located on Bayly Street, an easy drive west via Kingston Road or Highway 401, with free parking when you arrive.",
          "Our indoor play centre includes multi-level climbing structures, slides, ball pits, and a dedicated toddler area. Drop-in admissions are paid at the desk with unlimited play time, making it a practical option for rainy days, PA days, and winter weekends.",
        ],
      },
      {
        heading: "What Ajax parents like about Fun Factory",
        paragraphs: [
          "Unlimited play time means you are not watching the clock. Tuesday and Thursday afternoons offer 50% off drop-in admissions after 3:30 pm, which is popular with families coming from Ajax after school.",
          "Littles & Lattés Café on site means parents can grab coffee or matcha while supervising. The play café setup is especially helpful for playdates when adults want to stay comfortable for more than thirty minutes.",
          "If you are comparing indoor playground options near Ajax, also consider our birthday party packages for your next celebration. Many Ajax families book parties with us because of the combined play floor and private room setup.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is Fun Factory from Ajax?",
        segments: [
          {
            type: "text",
            value:
              "We are on Bayly Street in Pickering, typically a 10 to 15 minute drive from central Ajax depending on traffic.",
          },
        ],
      },
      sharedFaqs.location,
      sharedFaqs.waiver,
    ],
  },
  {
    slug: "whitby-kids-parties",
    path: "/whitby-kids-parties",
    breadcrumbLabel: "Whitby Kids Parties",
    h1: "Kids Birthday Parties Near Whitby, Ontario",
    heroSubtitle:
      "Host a stress-free birthday party at Fun Factory Play Café in Pickering. Private rooms, indoor play, pizza, cake, and a party host. Easy drive from Whitby.",
    accent: "peach",
    seo: {
      title: "Kids Birthday Parties Near Whitby ON | Fun Factory",
      description:
        "Birthday parties near Whitby at Fun Factory Pickering. Indoor playground, private rooms, packages from $399. Short drive from Whitby via Hwy 401. Book online.",
      path: "/whitby-kids-parties",
      keywords: ["kids birthday party Whitby", "party venue near Whitby", "indoor party Whitby"],
    },
    ctas: [
      { label: "Party Packages", href: "/birthday-parties" },
      { label: "Book Online", href: "https://the-fun-factory.book.app/book-now", external: true, variant: "lavender" },
    ],
    sections: [
      {
        heading: "Whitby families choose Fun Factory for birthday parties",
        paragraphs: [
          "Whitby parents searching for a kids birthday party venue often want two things: a place where children can actually play, and a package that handles food and hosting. Fun Factory Play Café in Pickering delivers both with private party rooms connected to a full indoor playground.",
          "Packages start at $399 and include playtime, pizza, birthday cake, juice, e-vites, and a party host. For larger groups, Ultimate Fun Party options offer private facility use with weekday and weekend pricing.",
        ],
      },
      {
        heading: "Why the drive from Whitby is worth it",
        paragraphs: [
          "Fun Factory is located at 1420 Bayly St. in Pickering, reachable from Whitby via Highway 401 and Brock Road in roughly 15 to 20 minutes. Free parking and a single-venue setup mean guests arrive, play, eat, and celebrate without coordinating multiple locations.",
          "Weekend dates fill four to six weeks ahead during busy seasons. Booking online is the fastest way to secure your preferred time slot.",
        ],
      },
      {
        heading: "Combine parties with drop-in play or café visits",
        paragraphs: [
          "Many Whitby families discover Fun Factory through a birthday party and return for drop-in play on Tuesdays or Thursdays when half-price admissions apply after 3:30 pm. Littles & Lattés Café makes repeat visits easy for parents who want quality coffee on site.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Fun Factory closer to Whitby or downtown Toronto?",
        segments: [
          {
            type: "text",
            value:
              "For most Whitby families, we are significantly closer than downtown Toronto venues and purpose-built for children's parties.",
          },
        ],
      },
      sharedFaqs.location,
    ],
  },
];

export const landingPagesBySlug = Object.fromEntries(
  landingPages.map((page) => [page.slug, page]),
) as Record<string, LandingPage>;

export function getAllLandingSlugs(): string[] {
  return landingPages.map((page) => page.slug);
}
