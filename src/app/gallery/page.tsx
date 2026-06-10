import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageHeroes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery at Fun Factory Play Café.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A peek at the fun inside Fun Factory Play Café. More photos coming soon."
        image={pageHeroes.gallery.src}
        imageAlt={pageHeroes.gallery.alt}
        accent="bubblegum"
      />

      <section className="section-pad bg-section-peach">
        <div className="container-main">
          <SectionHeading title="Inside the fun" accent="peach" />
          <div className="mt-10">
            <GalleryGrid />
          </div>
        </div>
      </section>
    </>
  );
}
