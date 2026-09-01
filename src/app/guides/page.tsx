import Link from "next/link";
import { localGuides } from "@/data/local-guides";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata, getBreadcrumbSchema, pageSeo } from "@/lib/seo";
import { getAllGuideSlugs, guidesBySlug } from "@/lib/guides";

export const metadata = createPageMetadata(pageSeo.guides);

export default function GuidesIndexPage() {
  const guides = getAllGuideSlugs().map((slug) => guidesBySlug[slug]);

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <PageHero
        title="Parent Guides"
        subtitle="Planning tips for indoor play, birthday parties, and family outings in Pickering and Durham Region."
        accent="sky"
      />
      <section className="section-pad">
        <div className="container-main mx-auto max-w-3xl">
          <ul className="divide-y divide-border">
            {guides.map((guide) => (
              <li key={guide.slug} className="py-6">
                <Link href={`/guides/${guide.slug}`} className="group block">
                  <p className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
                    {guide.datePublished}
                  </p>
                  <h2 className="mt-1 text-lg font-extrabold text-charcoal group-hover:underline sm:text-xl">
                    {guide.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{guide.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-pad bg-section-peach">
        <div className="container-main mx-auto max-w-3xl">
          <h2 className="text-xl font-extrabold text-charcoal">External local guides</h2>
          <ul className="mt-6 space-y-4">
            {localGuides.map((guide) => (
              <li key={guide.href}>
                <a
                  href={guide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-charcoal hover:underline"
                >
                  {guide.title}
                </a>
                <p className="mt-1 text-sm text-muted">{guide.description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            <Link href="/resources" className="font-semibold text-charcoal hover:underline">
              View all resources
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
