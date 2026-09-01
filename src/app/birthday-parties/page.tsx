import { JsonLd } from "@/components/JsonLd";
import { PartyCards } from "@/components/PartyCards";
import { PageHero } from "@/components/PageHero";
import { ReviewBanner } from "@/components/ReviewBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  createPageMetadata,
  getBreadcrumbSchema,
  getFAQSchema,
  getPartyOffersSchema,
  pageSeo,
  type FaqItem,
} from "@/lib/seo";
import { partyAddOns, partyCustomizeText, partyExtras, getPartyBookingUrl, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(pageSeo.parties);

const partyFaqs: FaqItem[] = [
  {
    question: "How far in advance should I book a birthday party?",
    segments: [
      {
        type: "text",
        value:
          "We recommend booking four to six weeks ahead for weekend dates. Weekday parties often have more availability. Book online to see open time slots.",
      },
    ],
  },
  {
    question: "Can I add extra children or adults to my party?",
    segments: [
      {
        type: "text",
        value:
          "Yes. Additional children are $14.99 each and additional adults are $4.99 each beyond your package count.",
      },
    ],
  },
  {
    question: "Is cake included in the party package?",
    segments: [
      {
        type: "text",
        value:
          "Yes. Every package includes a birthday cake. You can substitute the cake for a large pizza if you prefer.",
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
];

export default function BirthdayPartiesPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Birthday Parties", path: "/birthday-parties" },
          ]),
          getPartyOffersSchema(),
          getFAQSchema(partyFaqs),
        ]}
      />
      <PageHero
        title="Kids Birthday Party Packages in Pickering"
        subtitle={
          <div className="space-y-2">
            {siteConfig.partyIncludeText.map((line) => (
              <p key={line}>{line}</p>
            ))}
            {siteConfig.partyPromoOffers.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="text-sm italic text-muted">{siteConfig.partyPromoDisclaimer}</p>
          </div>
        }
        accent="lavender"
      >
        <Button href={getPartyBookingUrl()} external variant="lavender" size="lg">
          Book Your Party
        </Button>
      </PageHero>

      <section className="section-pad bg-section-lavender">
        <div className="container-main">
          <SectionHeading title="Birthday Party Packages" accent="lavender" />
          <p className="mx-auto mt-2 max-w-2xl text-center text-xs text-muted">
            Pricing updated September 2026 · Weekends often book 4–6 weeks out
          </p>
          <div className="mt-10">
            <PartyCards />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main mx-auto max-w-3xl">
          <SectionHeading title="Party Booking FAQ" centered accent="lavender" />
          <div className="mt-8 divide-y divide-border">
            {partyFaqs.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="cursor-pointer list-none text-base font-bold text-charcoal marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span className="mt-1 shrink-0 text-muted transition group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.segments.map((segment, index) =>
                    segment.type === "text" ? <span key={index}>{segment.value}</span> : null,
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-section-peach">
        <div className="container-main mx-auto max-w-2xl text-center">
          <SectionHeading title="Additional Party Options" accent="peach" />
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {partyAddOns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">{partyCustomizeText}</p>
          <ul className="mt-4 space-y-1 text-sm text-muted">
            <li>{partyExtras.additionalChild}</li>
            <li>{partyExtras.additionalAdult}</li>
          </ul>
        </div>
      </section>

      <ReviewBanner />
    </>
  );
}
