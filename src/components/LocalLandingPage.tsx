import Link from "next/link";
import { GoogleMap } from "@/components/GoogleMap";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewBanner } from "@/components/ReviewBanner";
import { Button } from "@/components/ui/Button";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import type { LandingPage } from "@/lib/landing-pages";
import { siteConfig } from "@/lib/site";

type Props = {
  page: LandingPage;
};

export function LocalLandingPage({ page }: Props) {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.breadcrumbLabel, path: page.path },
          ]),
          getFAQSchema(page.faqs),
        ]}
      />
      <PageHero title={page.h1} subtitle={page.heroSubtitle} accent={page.accent}>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {page.ctas.map((cta) => (
            <Button
              key={cta.label}
              href={cta.href}
              external={cta.external}
              variant={cta.variant ?? "primary"}
              size="lg"
            >
              {cta.label}
            </Button>
          ))}
        </div>
      </PageHero>

      <article className="section-pad">
        <div className="container-main prose-local mx-auto max-w-3xl">
          {page.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-xl font-extrabold text-charcoal sm:text-2xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <section className="section-pad bg-section-sky">
        <div className="container-main max-w-3xl">
          <h2 className="text-xl font-extrabold text-charcoal">Frequently Asked Questions</h2>
          <div className="mt-6 divide-y divide-border">
            {page.faqs.map((item) => (
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
                  {item.segments.map((s, i) =>
                    s.type === "text" ? <span key={i}>{s.value}</span> : null,
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <GoogleMap />
          <p className="mt-4 text-center text-sm text-muted">
            {siteConfig.address.full}, Pickering, ON L1W 3R4 ·{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-charcoal hover:underline">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-6 text-center text-sm text-muted">
            <Link href="/resources" className="font-semibold text-charcoal hover:underline">
              More local guides for parents
            </Link>
          </p>
        </div>
      </section>

      <ReviewBanner />
    </>
  );
}
