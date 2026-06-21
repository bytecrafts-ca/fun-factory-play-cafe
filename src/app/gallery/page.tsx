import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery at Fun Factory Play Café.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Photos from inside Fun Factory Play Café in Pickering."
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
