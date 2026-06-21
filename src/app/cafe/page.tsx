import type { Metadata } from "next";
import Link from "next/link";
import { CafeDrinkCard } from "@/components/CafeDrinkCard";
import { CafeMenuBoards } from "@/components/CafeMenuBoards";
import { CafeMenuList } from "@/components/CafeMenuList";
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
        <div className="container-main mx-auto max-w-2xl text-center">
          <SectionHeading
            title="Café Info"
            subtitle="Everything you need to know about Littles & Lattés Café."
            accent="peach"
          />
          <ul className="mt-8 space-y-3 text-left">
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
      </section>

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading
            title="Specialty Lattes"
            subtitle="Our signature iced lattes — hot and iced available."
            accent="lavender"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cafeMenu.specialtyLattes.map((drink) => (
              <CafeDrinkCard key={drink.name} {...drink} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-section-mint">
        <div className="container-main">
          <SectionHeading
            title="Matcha"
            subtitle="Made with real matcha — hot and iced available."
            accent="mint"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cafeMenu.matchaDrinks.map((drink) => (
              <CafeDrinkCard key={drink.name} {...drink} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main grid gap-8 lg:grid-cols-3">
          <div className="card border-t-4 border-t-peach/60 p-6">
            <h2 className="text-lg font-bold text-charcoal">Espresso Bar</h2>
            <div className="mt-4">
              <CafeMenuList items={cafeMenu.espressoBar} />
            </div>
          </div>
          <div className="card border-t-4 border-t-sky/60 p-6">
            <h2 className="text-lg font-bold text-charcoal">Teas</h2>
            <div className="mt-4">
              <CafeMenuList items={cafeMenu.teas} />
            </div>
            <h2 className="mt-8 text-lg font-bold text-charcoal">Hot Chocolate</h2>
            <div className="mt-4">
              <CafeMenuList items={cafeMenu.hotChocolate} />
            </div>
          </div>
          <div className="card border-t-4 border-t-lavender/60 p-6">
            <h2 className="text-lg font-bold text-charcoal">Add-Ons</h2>
            <ul className="mt-4 divide-y divide-border">
              {cafeMenu.addOns.map((addon) => (
                <li
                  key={addon.name}
                  className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="font-semibold text-charcoal">{addon.name}</p>
                    {"description" in addon && addon.description && (
                      <p className="mt-0.5 text-xs text-muted">{addon.description}</p>
                    )}
                  </div>
                  <span className="shrink-0 font-bold text-charcoal">
                    ${addon.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
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
          <CafeMenuBoards boards={cafeMenu.menuBoards} />
        </div>
      </section>


      <section className="section-pad border-t border-peach/40 bg-cream">
        <div className="container-main text-center">
          <p className="text-sm text-muted">
            Planning a visit?{" "}
            <Link href="/play" className="font-semibold text-charcoal hover:underline">
              View Play Rates
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
