import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewBanner } from "@/components/ReviewBanner";
import { Button } from "@/components/ui/Button";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import type { Guide } from "@/lib/guides";

type Props = {
  guide: Guide;
};

export function GuideArticle({ guide }: Props) {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: `/guides/${guide.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.excerpt,
            datePublished: guide.datePublished,
            dateModified: guide.dateModified,
            author: {
              "@type": "Organization",
              name: "Fun Factory Team",
            },
            publisher: {
              "@type": "Organization",
              name: "Fun Factory Play Café",
              url: "https://funfactoryplay.ca",
            },
            mainEntityOfPage: `https://funfactoryplay.ca/guides/${guide.slug}`,
          },
          ...(guide.faqs?.length ? [getFAQSchema(guide.faqs)] : []),
        ]}
      />
      <PageHero title={guide.title} subtitle={guide.excerpt} accent="sky" />
      <article className="section-pad">
        <div className="container-main mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
            Fun Factory Team · Updated {guide.dateModified}
          </p>
          {guide.sections.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]?.slice(0, 30)} className="mt-10">
              {section.heading && (
                <h2 className="text-xl font-extrabold text-charcoal sm:text-2xl">{section.heading}</h2>
              )}
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 50)} className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {p}
                </p>
              ))}
            </section>
          ))}
          {guide.faqs && guide.faqs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-extrabold text-charcoal">FAQ</h2>
              <div className="mt-4 divide-y divide-border">
                {guide.faqs.map((item) => (
                  <details key={item.question} className="group py-4">
                    <summary className="cursor-pointer font-bold text-charcoal">{item.question}</summary>
                    <p className="mt-2 text-sm text-muted">
                      {item.segments.map((s, i) => (s.type === "text" ? <span key={i}>{s.value}</span> : null))}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}
          <div className="mt-12 flex flex-wrap gap-3 border-t border-border pt-8">
            {guide.relatedLinks.map((link) => (
              <Button key={link.href} href={link.href} variant="secondary" size="md">
                {link.label}
              </Button>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            <Link href="/guides" className="font-semibold text-charcoal hover:underline">
              ← All guides
            </Link>
          </p>
        </div>
      </article>
      <ReviewBanner />
    </>
  );
}
