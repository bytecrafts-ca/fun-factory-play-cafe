import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cafeMenu, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Littles & Lattés",
  description: siteConfig.littlesAndLattesText,
  robots: { index: false, follow: false },
};

export default function CafePage() {
  if (!siteConfig.cafePublic) {
    notFound();
  }

  return (
    <>
      <section className="border-b border-peach/40 bg-gradient-to-br from-cream to-peach/20">
        <div className="container-main py-14 sm:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            {cafeMenu.brand}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {siteConfig.littlesAndLattesText}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main grid gap-4 sm:grid-cols-2">
          {cafeMenu.drinks.map((drink) => (
            <div key={drink.name} className="card p-5">
              <h2 className="font-bold text-charcoal">{drink.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {drink.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-section-peach">
        <div className="container-main">
          <div className="card overflow-hidden p-3">
            <Image
              src="/cafe-menu-1.jpg"
              alt="Littles and Lattés specialty drinks menu"
              width={508}
              height={508}
              className="mx-auto h-auto max-w-lg w-full rounded-[12px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
