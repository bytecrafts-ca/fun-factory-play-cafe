import type { FaqItem } from "@/lib/seo";
import type { PageSeoInput } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

/** LocalLandingPage swaps this for the SAVE10 promo URL while the promo is active */
const partyBookingUrl = siteConfig.ovatu.partiesUrl;
const ticketsCta = {
  label: "Buy Admissions",
  href: siteConfig.square.dropInUrl,
  external: true,
};

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
    variant?: "primary" | "secondary" | "lavender" | "peach";
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
        "indoor playground near me",
        "kids indoor playground near me",
        "indoor play place Pickering",
        "kids playground Pickering",
      ],
    },
    ctas: [
      { label: "View Drop-In Rates", href: "/play" },
      { label: "Sign Waiver Online", href: "https://form.jotform.com/261257549756066", external: true, variant: "peach" },
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
          "Admission is charged by age group. Under 1 year is $5 (free with a paying sibling). Ages 1 to 3 are $10, ages 4 to 13 are $14, and ages 14 to 17 are $10. Access 2 Card holders receive $2 off drop-in admission rates.",
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
              "Under 1: $5 (free with paying sibling). Ages 1 to 3: $10. Ages 4 to 13: $14. Ages 14 to 17: $10. Pay at the front desk. Unlimited play time.",
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
        "birthday party places near me",
        "kids birthday venue near me",
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
      { label: "Book Online", href: "https://the-fun-factory.book.app/book-now", external: true, variant: "lavender" },
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
  {
    slug: "scarborough-indoor-playground",
    path: "/scarborough-indoor-playground",
    breadcrumbLabel: "Indoor Playground Near Scarborough",
    h1: "Indoor Playground Near Scarborough",
    heroSubtitle:
      "Fun Factory Play Café is a short drive east of Scarborough on Bayly Street in Pickering. Unlimited drop-in play, a toddler zone, birthday party rooms, and coffee for parents.",
    accent: "sky",
    seo: {
      title: "Indoor Playground Near Scarborough | Fun Factory Pickering",
      description:
        "Indoor playground near Scarborough at Fun Factory Pickering. Unlimited drop-in play, toddler zone, party packages from $399, and a café for parents. Free parking off Hwy 401.",
      path: "/scarborough-indoor-playground",
      keywords: [
        "indoor playground Scarborough",
        "indoor play area Scarborough",
        "kids birthday party Scarborough",
        "play cafe Scarborough",
        "things to do with kids Scarborough",
      ],
    },
    ctas: [
      ticketsCta,
      { label: "Party Packages", href: "/birthday-parties", variant: "lavender" },
    ],
    sections: [
      {
        heading: "A bigger indoor playground, minutes from Scarborough",
        paragraphs: [
          "Families in east Scarborough, Malvern, Rouge, and West Hill can reach Fun Factory Play Café in about 15 to 20 minutes via Highway 401 or Kingston Road. We are at 1420 Bayly St., Unit 15 in Pickering, with free parking in the plaza.",
          "Inside you will find multi-level climbing structures, slides, a ball pit, and a separate toddler zone. Drop-in visits have no time limit, so kids can play as long as they like while parents relax at Littles & Lattés Café.",
        ],
      },
      {
        heading: "Drop-in rates and weekday deals",
        paragraphs: [
          "Admission is charged per child by age: under 1 is $5 (free with a paying sibling), ages 1 to 3 are $10, ages 4 to 13 are $14, and ages 14 to 17 are $10. Two adults per family are included.",
          "Every Tuesday and Thursday, drop-in admission is 50% off after 3:30 pm. You can buy tickets online ahead of time or pay at the front desk.",
        ],
      },
      {
        heading: "Birthday parties for Scarborough families",
        paragraphs: [
          "Party packages start at $399 for 10 kids and include 2.5 hours in a private room, playtime, pizza, cake, juice, e-vites, and a party host who handles setup and cleanup. Larger packages fit up to 50 kids.",
          "Many Scarborough families choose us because guests get a full indoor playground plus a private room, all in one place with easy parking.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is Fun Factory from Scarborough?",
        segments: [
          {
            type: "text",
            value:
              "Most of east Scarborough is a 15 to 20 minute drive via Highway 401 or Kingston Road. We are on Bayly Street in Pickering with free parking.",
          },
        ],
      },
      {
        question: "Do you host birthday parties for families from Scarborough?",
        segments: [
          {
            type: "text",
            value:
              "Yes. Packages start at $399 and include a private room, playtime, pizza, cake, juice, e-vites, and a party host. Book online to see open dates.",
          },
        ],
      },
      sharedFaqs.location,
      sharedFaqs.waiver,
    ],
  },
  {
    slug: "oshawa-kids-birthday-parties",
    path: "/oshawa-kids-birthday-parties",
    breadcrumbLabel: "Kids Parties Near Oshawa",
    h1: "Kids Birthday Parties & Indoor Play Near Oshawa",
    heroSubtitle:
      "Private party rooms, a full indoor playground, pizza, cake, and a party host. Fun Factory in Pickering is an easy drive from Oshawa along Highway 401.",
    accent: "peach",
    seo: {
      title: "Kids Birthday Parties Near Oshawa | Fun Factory Pickering",
      description:
        "Kids birthday parties near Oshawa at Fun Factory Pickering. Private rooms, indoor playground, pizza, cake and party host from $399. Drop-in play with no time limit.",
      path: "/oshawa-kids-birthday-parties",
      keywords: [
        "kids birthday party Oshawa",
        "birthday party venue Oshawa",
        "indoor playground Oshawa",
        "kids party places Oshawa",
        "indoor play Oshawa",
      ],
    },
    ctas: [
      { label: "Book a Party", href: partyBookingUrl, external: true, variant: "lavender" },
      { label: "Party Packages", href: "/birthday-parties" },
    ],
    sections: [
      {
        heading: "A party venue Oshawa families drive to",
        paragraphs: [
          "Oshawa parents often want a party where kids can actually run, climb, and play, not sit at a table for two hours. Fun Factory Play Café in Pickering gives you a private party room connected to a full indoor playground.",
          "We are at 1420 Bayly St. in Pickering, about 20 to 25 minutes from Oshawa via Highway 401, with free parking for all your guests.",
        ],
      },
      {
        heading: "What every party includes",
        paragraphs: [
          "All packages include 2.5 hours in a private room, playtime, pizza, birthday cake, juice and water, coffee or tea for adults, e-vites, and a party host who handles setup, announcements, and cleanup.",
          "Fun Party is $399 for 10 kids, Active Fun Party is $499 for 15 kids, Supreme Fun Party is $599 for 20 kids, and Extreme Fun Party is $699 for 30 kids. Ultimate Fun Party gives you private use of the facility for up to 50 kids.",
        ],
      },
      {
        heading: "Drop-in play between parties",
        paragraphs: [
          "Outside of parties, families visit for drop-in play with no time limit. Tuesday and Thursday admissions are 50% off after 3:30 pm, and you can buy tickets online before you leave home.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long is the drive from Oshawa?",
        segments: [
          {
            type: "text",
            value:
              "Most Oshawa families reach us in about 20 to 25 minutes via Highway 401. Free parking is available in the plaza.",
          },
        ],
      },
      {
        question: "How far ahead should we book a party?",
        segments: [
          {
            type: "text",
            value:
              "Weekends usually book four to six weeks ahead. Weekdays have more availability. You can see open time slots when you book online.",
          },
        ],
      },
      sharedFaqs.location,
    ],
  },
  {
    slug: "pa-day-activities-durham",
    path: "/pa-day-activities-durham",
    breadcrumbLabel: "PA Day Activities",
    h1: "PA Day Activities in Pickering & Durham Region",
    heroSubtitle:
      "No school today? Bring the kids for unlimited indoor play at Fun Factory in Pickering. Climbing, slides, a toddler zone, and coffee for parents.",
    accent: "mint",
    seo: {
      title: "PA Day Activities Durham & Pickering | Fun Factory Indoor Play",
      description:
        "Looking for PA day activities in Durham Region? Fun Factory Pickering has unlimited indoor play, a toddler zone, and a café for parents. Buy tickets online.",
      path: "/pa-day-activities-durham",
      keywords: [
        "PA day activities Durham",
        "PA day activities Pickering",
        "PA day ideas kids Durham Region",
        "things to do on PA day",
        "PA day indoor activities",
      ],
    },
    ctas: [
      ticketsCta,
      { label: "Check Hours", href: "/play", variant: "secondary" },
    ],
    sections: [
      {
        heading: "An easy PA day plan for Durham families",
        paragraphs: [
          "PA days come up several times a year for Durham District School Board and Durham Catholic families. When school is out and the weather is unpredictable, Fun Factory Play Café gives kids a full indoor playground with no time limit.",
          "Kids can climb, slide, and burn off energy while parents grab a coffee at Littles & Lattés Café. It works for siblings of different ages too, with a separate toddler zone for little ones.",
        ],
      },
      {
        heading: "Before you come",
        paragraphs: [
          "Check our hours on the play page, since PA days can be busy. Buy drop-in tickets online ahead of time to skip the line at the desk, and sign the waiver online for each child.",
          "Fun Factory is a socks-only facility, so bring socks for kids and adults or buy them at reception for $3. Nut-free outside food is welcome.",
        ],
      },
      {
        heading: "Admission",
        paragraphs: [
          "Under 1 is $5 (free with a paying sibling), ages 1 to 3 are $10, ages 4 to 13 are $14, and ages 14 to 17 are $10. Two adults per family are included with admission.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are you open on PA days?",
        segments: [
          {
            type: "text",
            value:
              "We follow our regular weekly hours unless a special hours notice is posted. Check the play page for today's hours before you visit.",
          },
        ],
      },
      {
        question: "Is there a time limit on PA days?",
        segments: [
          { type: "text", value: "No. Drop-in play has no time limit, including on PA days." },
        ],
      },
      sharedFaqs.waiver,
      sharedFaqs.location,
    ],
  },
  {
    slug: "march-break-activities-pickering",
    path: "/march-break-activities-pickering",
    breadcrumbLabel: "March Break Activities",
    h1: "March Break Activities in Pickering",
    heroSubtitle:
      "Keep the kids busy over March Break with unlimited indoor play at Fun Factory. Climbing, slides, a toddler zone, and a café for parents.",
    accent: "lavender",
    seo: {
      title: "March Break Activities Pickering | Fun Factory Indoor Play",
      description:
        "March Break activities in Pickering and Durham Region. Unlimited indoor play at Fun Factory, toddler zone, café for parents. Buy drop-in tickets online.",
      path: "/march-break-activities-pickering",
      keywords: [
        "March Break activities Pickering",
        "March Break activities Durham Region",
        "March Break ideas kids Ontario",
        "indoor activities March Break",
      ],
    },
    ctas: [
      ticketsCta,
      { label: "Check Hours", href: "/play", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Indoor fun for the whole March Break week",
        paragraphs: [
          "March weather in Durham Region can swing from snow to rain in a single day. Fun Factory Play Café gives kids a full indoor playground in Pickering, so your plans do not depend on the forecast.",
          "Drop-in play has no time limit. Kids climb, slide, and play while parents relax at Littles & Lattés Café with a clear view of the play floor.",
        ],
      },
      {
        heading: "Tips for a smooth March Break visit",
        paragraphs: [
          "March Break is one of our busiest weeks. Buy tickets online ahead of time, sign waivers before you arrive, and check our hours on the play page in case of special hours.",
          "Bring socks for everyone, or buy them at reception for $3. Nut-free outside food is welcome, and the café has coffee, drinks, and snacks.",
        ],
      },
      {
        heading: "Celebrating a birthday over the break?",
        paragraphs: [
          "Party packages start at $399 and include a private room, playtime, pizza, cake, juice, e-vites, and a party host. Book early, since break weeks fill up fast.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to book drop-in play for March Break?",
        segments: [
          {
            type: "text",
            value:
              "You can pay at the front desk, but buying tickets online ahead of time is the easiest way to plan a busy break day.",
          },
        ],
      },
      sharedFaqs.waiver,
      sharedFaqs.location,
    ],
  },
  {
    slug: "winter-break-activities-pickering",
    path: "/winter-break-activities-pickering",
    breadcrumbLabel: "Winter Break Activities",
    h1: "Winter & Holiday Break Activities in Pickering",
    heroSubtitle:
      "Too cold to play outside? Fun Factory has unlimited indoor play, a toddler zone, and hot drinks for parents all winter long.",
    accent: "sky",
    seo: {
      title: "Winter Break Activities Pickering | Indoor Play at Fun Factory",
      description:
        "Winter and holiday break activities in Pickering. Unlimited indoor play at Fun Factory, toddler zone, café for parents. Check holiday hours and buy tickets online.",
      path: "/winter-break-activities-pickering",
      keywords: [
        "winter break activities Pickering",
        "Christmas break activities kids Durham",
        "indoor activities winter Pickering",
        "holiday activities for kids Pickering",
        "things to do with kids in winter Durham",
      ],
    },
    ctas: [
      ticketsCta,
      { label: "Check Holiday Hours", href: "/play", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Warm, indoor play when it is freezing outside",
        paragraphs: [
          "Durham winters are long. Fun Factory Play Café gives kids a full indoor playground in Pickering with climbing structures, slides, and a toddler zone, so they can burn off energy even on the coldest days.",
          "Parents can warm up at Littles & Lattés Café with coffee, matcha, or hot drinks while keeping an eye on the play floor.",
        ],
      },
      {
        heading: "Holiday hours",
        paragraphs: [
          "Our hours can change around holidays. We post any special hours on the play page, so check before you head over.",
          "Buy drop-in tickets online ahead of time to save time at the desk on busy holiday afternoons.",
        ],
      },
      {
        heading: "Holiday birthday parties",
        paragraphs: [
          "Birthdays in December and January can be tricky to plan at home. Our packages include a private room, playtime, pizza, cake, juice, e-vites, and a party host, starting at $399.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are you open over the holidays?",
        segments: [
          {
            type: "text",
            value:
              "Holiday hours can differ from our regular schedule. Any special hours are posted on the play page.",
          },
        ],
      },
      sharedFaqs.waiver,
      sharedFaqs.location,
    ],
  },
  {
    slug: "first-birthday-party-pickering",
    path: "/first-birthday-party-pickering",
    breadcrumbLabel: "First Birthday Parties",
    h1: "First Birthday Party Venue in Pickering",
    heroSubtitle:
      "Celebrate baby's first birthday with a private room, a toddler-friendly play area, food for guests, and a party host who handles setup and cleanup.",
    accent: "bubblegum",
    seo: {
      title: "First Birthday Party Venue Pickering | Fun Factory",
      description:
        "Plan a first birthday party in Pickering at Fun Factory. Private room, toddler zone, pizza, cake, coffee for adults and a party host. Packages from $399.",
      path: "/first-birthday-party-pickering",
      keywords: [
        "first birthday party venue Pickering",
        "1st birthday party ideas Durham",
        "toddler birthday party Pickering",
        "baby first birthday venue near me",
      ],
    },
    ctas: [
      { label: "Book a Party", href: partyBookingUrl, external: true, variant: "lavender" },
      { label: "Party Packages", href: "/birthday-parties" },
    ],
    sections: [
      {
        heading: "Why first birthdays work well at Fun Factory",
        paragraphs: [
          "First birthdays are usually more about the adults than the baby. Our packages include 2.5 hours in a private room, coffee or tea for adults, pizza, cake, and juice, so grandparents, aunts, uncles, and friends are looked after.",
          "Little guests get a separate toddler zone designed for younger children, away from the bigger climbing structures. Older cousins and siblings can enjoy the full playground.",
        ],
      },
      {
        heading: "No setup, no cleanup",
        paragraphs: [
          "Your party host handles setup, announcements, and cleanup. You get to enjoy the day and take photos instead of washing dishes.",
          "Want a styled backdrop? Our decor partner Pop & Petal Parties offers preferred pricing and free delivery for parties booked at Fun Factory.",
        ],
      },
      {
        heading: "Choosing a package",
        paragraphs: [
          "Packages are based on the number of kids. Fun Party ($399) covers 10 kids and 10 adults. Active Fun Party ($499) covers 15 of each, and Supreme Fun Party ($599) covers 20 of each.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Fun Factory suitable for babies and toddlers?",
        segments: [
          {
            type: "text",
            value:
              "Yes. We have a dedicated toddler zone for younger children, and parents supervise their own kids at all times.",
          },
        ],
      },
      {
        question: "Do adults count toward the package?",
        segments: [
          {
            type: "text",
            value:
              "Each package includes a set number of kids and adults. Extra kids are $14.99 each and extra adults are $4.99 each.",
          },
        ],
      },
      sharedFaqs.location,
    ],
  },
  {
    slug: "toddler-play-pickering",
    path: "/toddler-play-pickering",
    breadcrumbLabel: "Toddler Play Pickering",
    h1: "Toddler Play Area in Pickering",
    heroSubtitle:
      "A dedicated toddler zone, open sight lines from parent seating, and coffee on site. Drop in any time we are open, with no time limit.",
    accent: "mint",
    seo: {
      title: "Toddler Play Area Pickering | Fun Factory Play Café",
      description:
        "Toddler play in Pickering at Fun Factory. Dedicated toddler zone, parent seating with clear sight lines, café on site. Ages 1 to 3 just $10. No time limit.",
      path: "/toddler-play-pickering",
      keywords: [
        "toddler play area Pickering",
        "toddler activities Pickering",
        "toddler playground near me",
        "indoor play for toddlers Durham",
        "baby play area Pickering",
      ],
    },
    ctas: [
      ticketsCta,
      { label: "Hours & Rates", href: "/play", variant: "secondary" },
    ],
    sections: [
      {
        heading: "A play space made for little ones",
        paragraphs: [
          "Our toddler zone gives younger children a softer, calmer area to explore at their own pace, separate from the busier climbing structures where older kids play.",
          "Parent seating is set up with open sight lines, so you can sit with a coffee from Littles & Lattés Café and still keep your toddler in view.",
        ],
      },
      {
        heading: "Toddler rates",
        paragraphs: [
          "Ages 1 to 3 are $10. Under 1 is $5, or free with a paying sibling. Two adults per family are included, and there is no time limit on your visit.",
          "Weekday mornings on Monday and Wednesday (9:30 am to 2:00 pm) are a favourite with toddler parents.",
        ],
      },
    ],
    faqs: [
      {
        question: "What age is the toddler zone for?",
        segments: [
          {
            type: "text",
            value:
              "The toddler zone is designed for younger children who are not ready for the larger climbing structures. Parents supervise their own children at all times.",
          },
        ],
      },
      {
        question: "Can I bring snacks for my toddler?",
        segments: [
          {
            type: "text",
            value: "Yes. Nut-free outside food is allowed. Outside drinks are not permitted.",
          },
        ],
      },
      sharedFaqs.waiver,
      sharedFaqs.location,
    ],
  },
  {
    slug: "things-to-do-with-kids-pickering",
    path: "/things-to-do-with-kids-pickering",
    breadcrumbLabel: "Things to Do With Kids",
    h1: "Things to Do With Kids in Pickering",
    heroSubtitle:
      "Rainy day, snow day, or just a long afternoon? Fun Factory has unlimited indoor play, a toddler zone, birthday parties, and a café for parents.",
    accent: "peach",
    seo: {
      title: "Things to Do With Kids in Pickering | Fun Factory Indoor Play",
      description:
        "Looking for things to do with kids in Pickering? Unlimited indoor play at Fun Factory, toddler zone, café for parents, 50% off Tue & Thu after 3:30 pm.",
      path: "/things-to-do-with-kids-pickering",
      keywords: [
        "things to do with kids Pickering",
        "rainy day activities Pickering",
        "kids activities Pickering",
        "family activities Pickering",
        "indoor activities for kids Durham",
      ],
    },
    ctas: [
      ticketsCta,
      { label: "Party Packages", href: "/birthday-parties", variant: "lavender" },
    ],
    sections: [
      {
        heading: "Indoor play, any weather",
        paragraphs: [
          "Fun Factory Play Café on Bayly Street is a full indoor playground with multi-level climbing structures, slides, a ball pit, and a separate toddler zone. Drop-in visits have no time limit.",
          "It is a go-to for rainy days, snow days, PA days, and school breaks, and it works for siblings of different ages in one trip.",
        ],
      },
      {
        heading: "Save on weekday afternoons",
        paragraphs: [
          "Every Tuesday and Thursday, drop-in admission is 50% off after 3:30 pm. It is a popular after-school plan for Pickering, Ajax, and Whitby families.",
        ],
      },
      {
        heading: "Coffee and treats for parents",
        paragraphs: [
          "Littles & Lattés Café is right inside, serving coffee, matcha, iced lattes, and snacks, so parents can sit back while the kids play.",
        ],
      },
      {
        heading: "More ideas from us",
        paragraphs: [
          "Planning a birthday? Party packages start at $399 with a private room, food, and a party host. Members of our free loyalty program also earn points toward free visits.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are your hours?",
        segments: [
          {
            type: "text",
            value:
              "Monday and Wednesday 9:30 am to 2:00 pm, Tuesday and Thursday 12:00 pm to 7:30 pm, and Friday to Sunday 9:30 am to 8:30 pm. Special hours are posted on the play page.",
          },
        ],
      },
      sharedFaqs.location,
      sharedFaqs.waiver,
    ],
  },
  {
    slug: "rainy-day-activities-durham",
    path: "/rainy-day-activities-durham",
    breadcrumbLabel: "Rainy Day Activities",
    h1: "Rainy Day Activities for Kids in Durham Region",
    heroSubtitle:
      "When it is pouring outside, bring the kids to Fun Factory in Pickering for unlimited indoor play, a toddler zone, and coffee for parents.",
    accent: "sky",
    seo: {
      title: "Rainy Day Activities for Kids Durham | Fun Factory Pickering",
      description:
        "Rainy day activities for kids in Durham Region. Unlimited indoor play at Fun Factory Pickering, toddler zone, café for parents. Free parking, buy tickets online.",
      path: "/rainy-day-activities-durham",
      keywords: [
        "rainy day activities Durham Region",
        "rainy day activities kids Pickering",
        "indoor activities rainy day Ajax",
        "what to do with kids when it rains",
      ],
    },
    ctas: [
      ticketsCta,
      { label: "Check Hours", href: "/play", variant: "secondary" },
    ],
    sections: [
      {
        heading: "A rainy day plan that actually tires them out",
        paragraphs: [
          "Screen time only goes so far. Fun Factory Play Café gives kids a full indoor playground in Pickering with climbing, slides, and a ball pit, plus a separate toddler zone for little ones.",
          "Drop-in play has no time limit, and free parking in the plaza means a short dash from the car.",
        ],
      },
      {
        heading: "Coming from Ajax, Whitby, or Oshawa",
        paragraphs: [
          "We are just off Highway 401 at Bayly Street. Most Ajax families arrive in 10 to 15 minutes, Whitby in 15 to 20, and Oshawa in 20 to 25.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much is drop-in play?",
        segments: [
          {
            type: "text",
            value:
              "Under 1 is $5 (free with a paying sibling), ages 1 to 3 are $10, ages 4 to 13 are $14, and ages 14 to 17 are $10. Two adults per family are included.",
          },
        ],
      },
      sharedFaqs.waiver,
      sharedFaqs.location,
    ],
  },
  {
    slug: "school-daycare-group-trips-pickering",
    path: "/school-daycare-group-trips-pickering",
    breadcrumbLabel: "School & Daycare Groups",
    h1: "School, Daycare & Camp Group Trips in Pickering",
    heroSubtitle:
      "Bring your class, daycare, or camp group for indoor play at Fun Factory. Contact us to arrange a weekday visit and ask about group rates.",
    accent: "lavender",
    seo: {
      title: "School & Daycare Group Trips Pickering | Fun Factory",
      description:
        "Plan a school, daycare, or camp group trip to Fun Factory indoor playground in Pickering. Weekday visits, toddler zone, free parking. Contact us about group rates.",
      path: "/school-daycare-group-trips-pickering",
      keywords: [
        "daycare field trip Pickering",
        "school field trip indoor playground Durham",
        "camp group trip Pickering",
        "group visits indoor playground",
      ],
    },
    ctas: [
      { label: "Contact Us About Groups", href: "/contact" },
      { label: "Hours & Rates", href: "/play", variant: "secondary" },
    ],
    sections: [
      {
        heading: "An easy field trip for young groups",
        paragraphs: [
          "Fun Factory Play Café is a full indoor playground on Bayly Street in Pickering. Multi-level climbing structures and a separate toddler zone mean preschool and school-age groups can both play safely.",
          "Free parking in the plaza makes bus and car drop-off simple, and we are just off Highway 401.",
        ],
      },
      {
        heading: "How to plan a group visit",
        paragraphs: [
          "Contact us with your group size, ages, and preferred date. Weekday mornings are usually the quietest time for groups. We will confirm availability and group pricing.",
          "Every child needs a signed waiver before play, and Fun Factory is a socks-only facility. Supervisors stay with their group at all times.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer group rates?",
        segments: [
          {
            type: "text",
            value:
              "Contact us by phone or email with your group size and date and we will share group pricing and availability.",
          },
        ],
      },
      {
        question: "Do all children need a waiver?",
        segments: [
          {
            type: "text",
            value:
              "Yes. Every child needs a signed waiver from a parent or guardian before play.",
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
