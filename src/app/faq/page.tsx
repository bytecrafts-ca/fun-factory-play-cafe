import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { partyFaqs } from "@/data/faqs";
import { landingPages } from "@/lib/landing-pages";
import {
  createPageMetadata,
  faqItems,
  getBreadcrumbSchema,
  getFAQSchema,
  membershipFaqs,
  pageSeo,
  type FaqItem,
} from "@/lib/seo";
import {
  getPartyBookingUrl,
  isPartyBookingPromoActive,
  partyBookingPromo,
  siteConfig,
} from "@/lib/site";

export const revalidate = 3600;

export const metadata = createPageMetadata(pageSeo.faq);

const visitFaqs: FaqItem[] = [
  ...faqItems,
  {
    question: "Can I buy drop-in admissions online?",
    segments: [
      { type: "text", value: "Yes. You can " },
      { type: "link", href: siteConfig.square.dropInUrl, label: "buy drop-in admissions online", external: true },
      { type: "text", value: " before you arrive, or pay at the front desk when you get here." },
    ],
  },
  {
    question: "Is there a time limit on drop-in play?",
    segments: [{ type: "text", value: "No. Drop-in visits include unlimited play time." }],
  },
  ...membershipFaqs,
  {
    question: "Can I bring outside food?",
    segments: [
      {
        type: "text",
        value:
          "Nut-free outside food is allowed. Outside drinks are not. Littles & Lattés Café on site has coffee, matcha, drinks, and snacks.",
      },
    ],
  },
  {
    question: "Is there parking?",
    segments: [
      {
        type: "text",
        value: "Yes. Free parking is available in the Bayly Street plaza, a few minutes from Highway 401.",
      },
    ],
  },
];

function getPartyPageFaqs(partyBookingUrl: string): FaqItem[] {
  return [
    ...partyFaqs,
    {
      question: "How long is a birthday party?",
      segments: [
        {
          type: "text",
          value:
            "Every party package is 2.5 hours and includes a private party room, playtime, food, and a party host.",
        },
      ],
    },
    ...(isPartyBookingPromoActive()
      ? [
          {
            question: "Is there a discount for booking a party online?",
            segments: [
              {
                type: "text" as const,
                value: `Yes. ${partyBookingPromo.offer} ${partyBookingPromo.offerDetail} with code ${partyBookingPromo.ovatuPromoCode}. ${partyBookingPromo.disclaimer}`,
              },
            ],
          },
        ]
      : []),
    {
      question: "Where do I book a party?",
      segments: [
        { type: "text", value: "Compare packages on the " },
        { type: "link", href: "/birthday-parties", label: "birthday parties page" },
        { type: "text", value: ", then " },
        { type: "link", href: partyBookingUrl, label: "pick your date and time online", external: true },
        { type: "text", value: ". It takes about 2 minutes." },
      ],
    },
  ];
}

function getAreaFaqs(exclude: FaqItem[]): FaqItem[] {
  const seen = new Set(exclude.map((item) => item.question.toLowerCase()));
  return landingPages
    .flatMap((page) => page.faqs)
    .filter((item) => {
      const key = item.question.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

export default function FaqPage() {
  const partyBookingUrl = getPartyBookingUrl();
  const partyPageFaqs = getPartyPageFaqs(partyBookingUrl);
  const areaFaqs = getAreaFaqs([...visitFaqs, ...partyPageFaqs]);
  const sections = [
    { id: "visiting", title: "Visiting & Drop-In Play", items: visitFaqs, accent: "sky" as const },
    { id: "parties", title: "Birthday Parties", items: partyPageFaqs, accent: "bubblegum" as const },
    { id: "areas", title: "Nearby Areas & School Breaks", items: areaFaqs, accent: "mint" as const },
  ];

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          getFAQSchema([...visitFaqs, ...partyPageFaqs, ...areaFaqs]),
        ]}
      />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Prices, hours, socks, waivers, tickets, and birthday parties. Everything families ask before visiting."
        accent="sky"
      >
        <nav aria-label="FAQ sections" className="flex flex-wrap gap-2">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-charcoal transition hover:border-charcoal/30"
            >
              {section.title}
            </Link>
          ))}
        </nav>
      </PageHero>

      {sections.map((section, index) => (
        <FaqSection
          key={section.id}
          id={section.id}
          title={section.title}
          subtitle=""
          items={section.items}
          accent={section.accent}
          className={index % 2 === 0 ? "bg-white" : "bg-section-sky"}
        />
      ))}

      <section className="section-pad">
        <div className="container-main mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-charcoal">Still have a question?</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Call us at {siteConfig.phone} or send a message and we will get back to you.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button href={partyBookingUrl} external variant="outline" size="lg">
              Book a Party
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
