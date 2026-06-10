import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HoursWidget } from "@/components/HoursWidget";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cafeMenu, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Café Menu",
  description: `${cafeMenu.brand} at Fun Factory Play Café — ${cafeMenu.tagline}`,
};

export default function CafePage() {
  return (
    <>
      <PageHero
        title={cafeMenu.brand}
        subtitle={`${siteConfig.littlesAndLattesText} ${cafeMenu.tagline}`}
        accent="peach"
      />

      <section className="section-pad bg-section-peach">
        <div className="container-main grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              title="Café Info"
              subtitle="Everything you need to know about Littles & Lattés."
              centered={false}
              accent="peach"
            />
            <ul className="mt-8 space-y-3">
              {cafeMenu.info.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-white px-4 py-3 text-sm leading-relaxed text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Follow us on Instagram{" "}
              <a
                href={siteConfig.social.littlesInstagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-charcoal hover:underline"
              >
                {siteConfig.social.littlesInstagram.label}
              </a>
            </p>
          </div>
          <HoursWidget />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading
            title="Specialty Drinks"
            subtitle="Premium iced beverages from our menu."
            accent="lavender"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cafeMenu.drinks.map((drink) => (
              <article key={drink.name} className="card border-t-4 border-t-lavender/60 p-5">
                <h2 className="font-bold text-charcoal">{drink.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {drink.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-section-sky">
        <div className="container-main">
          <SectionHeading
            title="Full Menu"
            subtitle="Browse our café menu boards."
            accent="sky"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cafeMenu.menuImages.map((image) => (
              <div key={image.src} className="card overflow-hidden p-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={508}
                  height={508}
                  className="h-auto w-full rounded-[12px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-peach/40 bg-cream">
        <div className="container-main text-center">
          <p className="text-sm text-muted">
            Planning a visit?{" "}
            <Link href="/play" className="font-semibold text-charcoal hover:underline">
              View play rates
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-charcoal hover:underline">
              contact us
            </Link>{" "}
            with any questions.
          </p>
        </div>
      </section>
    </>
  );
}
