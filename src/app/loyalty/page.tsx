import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { LoyaltyEnrollForm } from "@/components/LoyaltyEnrollForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { loyaltyProgram, siteRoutes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Loyalty Program",
  description:
    "Earn 10 points per regular drop-in visit at Fun Factory. Tuesday & Thursday 50% off visits do not earn points. Reach 100 points for a free admission.",
};

export default function LoyaltyPage() {
  return (
    <>
      <PageHero
        title="Loyalty Program"
        subtitle={loyaltyProgram.summary}
        accent="lavender"
      >
        <Button href={siteRoutes.play} variant="primary" size="lg">
          View Drop-In Rates
        </Button>
      </PageHero>

      <section className="section-pad">
        <div className="container-main grid gap-8 lg:grid-cols-2">
          <div className="card border-lavender/40 bg-lavender/10 p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-charcoal/70">
              Earn & redeem
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-4xl font-extrabold text-charcoal">
                  {loyaltyProgram.pointsPerVisit}
                </p>
                <p className="mt-1 text-sm font-semibold text-charcoal">points per visit</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-charcoal">
                  {loyaltyProgram.freeVisitAt}
                </p>
                <p className="mt-1 text-sm font-semibold text-charcoal">
                  points = one free visit
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              That&apos;s {loyaltyProgram.freeVisitAt / loyaltyProgram.pointsPerVisit} drop-in
              visits to earn a free admission for one child.
            </p>
          </div>

          <div className="card p-6 sm:p-8">
            <SectionHeading title="Join Online" centered={false} accent="sky" />
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {loyaltyProgram.enrollNote}
            </p>
            <div className="mt-6">
              <LoyaltyEnrollForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main max-w-3xl">
          <SectionHeading title="Program Rules" accent="mint" />
          <ul className="mt-8 space-y-4">
            {loyaltyProgram.rules.map((rule) => (
              <li
                key={rule}
                className="flex gap-3 rounded-[var(--radius-card)] border border-border bg-cream px-5 py-4 text-sm leading-relaxed text-charcoal sm:text-base"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-mint" aria-hidden />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-sky/15">
        <div className="container-main flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-extrabold text-charcoal sm:text-2xl">
              Ready for your next visit?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
              Check drop-in rates and hours, then pay at the front desk when you arrive.
            </p>
          </div>
          <Button href={siteRoutes.play} variant="primary" size="lg">
            Drop-In Info & Rates
          </Button>
        </div>
      </section>
    </>
  );
}
