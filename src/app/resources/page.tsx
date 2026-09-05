import Link from "next/link";
import { localGuides } from "@/data/local-guides";
import { ConversionLink } from "@/components/ConversionLink";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata, getBreadcrumbSchema, pageSeo } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(pageSeo.resources);

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />
      <PageHero
        title="Resources for Parents"
        subtitle="Helpful links for planning visits, parties, and family outings in Pickering and Durham Region."
        accent="lavender"
      />
      <section className="section-pad">
        <div className="container-main mx-auto max-w-3xl">
          <h2 className="text-xl font-extrabold text-charcoal">On this website</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/play" className="font-semibold text-charcoal hover:underline">
                Drop-in play rates and hours
              </Link>
            </li>
            <li>
              <Link href="/birthday-parties" className="font-semibold text-charcoal hover:underline">
                Birthday party packages
              </Link>
            </li>
            <li>
              <Link href="/cafe" className="font-semibold text-charcoal hover:underline">
                Littles &amp; Lattés Café menu
              </Link>
            </li>
            <li>
              <Link href="/guides" className="font-semibold text-charcoal hover:underline">
                Parent guides and planning articles
              </Link>
            </li>
            <li>
              <Link href="/pickering-indoor-playground" className="font-semibold text-charcoal hover:underline">
                Indoor playground Pickering
              </Link>
            </li>
            <li>
              <Link href="/kids-birthday-parties-pickering" className="font-semibold text-charcoal hover:underline">
                Kids birthday parties Pickering
              </Link>
            </li>
            <li>
              <Link href="/review" className="font-semibold text-charcoal hover:underline">
                Leave a Google review
              </Link>
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-extrabold text-charcoal">Local guides</h2>
          <ul className="mt-4 space-y-5">
            {localGuides.map((guide) => (
              <li key={guide.href} className="card p-5">
                <a
                  href={guide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-charcoal hover:underline"
                >
                  {guide.title}
                </a>
                <p className="mt-2 text-sm leading-relaxed text-muted">{guide.description}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-extrabold text-charcoal">Contact</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {siteConfig.address.full}
            <br />
            <ConversionLink
              href={siteConfig.phoneHref}
              className="font-semibold text-charcoal hover:underline"
            >
              {siteConfig.phone}
            </ConversionLink>
            {" · "}
            <ConversionLink
              href={siteConfig.emailHref}
              className="font-semibold text-charcoal hover:underline"
            >
              {siteConfig.email}
            </ConversionLink>
          </p>
        </div>
      </section>
    </>
  );
}
