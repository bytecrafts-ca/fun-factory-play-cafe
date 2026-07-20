import { AdmissionsTable } from "@/components/AdmissionsTable";
import { Button } from "@/components/ui/Button";
import { HoursWidget } from "@/components/HoursWidget";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  createPageMetadata,
  getBreadcrumbSchema,
  getFAQSchema,
  pageSeo,
  type FaqItem,
} from "@/lib/seo";
import {
  dropInVisitSteps,
  getOpenStatusMessage,
  isOpenNow,
  siteConfig,
  siteRoutes,
} from "@/lib/site";

export const metadata = createPageMetadata(pageSeo.play);

const playFaqs: FaqItem[] = [
  {
    question: "How much does drop-in play cost at Fun Factory?",
    segments: [
      {
        type: "text",
        value:
          "Under 1: $5.00 (free with paying sibling). Ages 1–3: $10. Ages 4–13: $14. Ages 14–17: $10. Pay at the front desk when you arrive.",
      },
    ],
  },
  {
    question: "Is there a time limit on drop-in play?",
    segments: [{ type: "text", value: "No. Fun Factory offers unlimited play time on drop-in visits." }],
  },
  {
    question: "When is the 50% off drop-in discount?",
    segments: [
      { type: "text", value: "Every Tuesday and Thursday from 3:30 to 7:30 pm (we're open from 12:00 pm)." },
    ],
  },
];

export default function PlayPage() {
  const open = isOpenNow();
  const statusMessage = getOpenStatusMessage();

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Drop-In Play", path: "/play" },
          ]),
          getFAQSchema(playFaqs),
        ]}
      />
      <PageHero
        title="Drop-In Play"
        subtitle="See our rates below and pay when you arrive. No online ticket purchase — just sign your waiver, check our hours, and come play."
        accent="sky"
        eyebrow={
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold text-charcoal ${
              open ? "border-mint/60 bg-mint/30" : "border-peach/60 bg-peach/30"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${open ? "bg-mint" : "bg-peach"}`}
              aria-hidden
            />
            {statusMessage}
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={siteConfig.waiverUrl} external variant="primary" size="lg">
            Sign Waiver
          </Button>
          <Button href={siteRoutes.loyalty} variant="secondary" size="lg">
            Join Loyalty
          </Button>
        </div>
      </PageHero>

      <section className="section-pad bg-sky/15">
        <div className="container-main">
          <div className="card border-sky/40 bg-white p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-charcoal/70">
              How drop-in works
            </p>
            <p className="mt-2 text-lg font-extrabold text-charcoal sm:text-xl">
              Pay per person at the front desk when you enter
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Admission is charged by age group at reception. Unlimited play time — there is
              no time limit on your visit. Maximum two adults per family are included with
              admission.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading title="Per-Person Rates" centered={false} accent="sky" />
            <div className="mt-6">
              <AdmissionsTable />
            </div>
          </div>
          <div>
            <SectionHeading title="Hours" centered={false} accent="mint" />
            <div className="mt-6">
              <HoursWidget />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main">
          <SectionHeading
            title="Before You Arrive"
            subtitle="Four quick steps for a smooth check-in"
            accent="lavender"
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dropInVisitSteps.map((step, index) => (
              <li key={step.title} className="card flex flex-col p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lavender/40 text-sm font-extrabold text-charcoal">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-bold text-charcoal">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
