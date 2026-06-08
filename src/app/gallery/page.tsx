import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery at Fun Factory Play Café.",
};

export default function GalleryPage() {
  return (
    <section className="section-pad bg-section-peach">
      <div className="container-main">
        <SectionHeading title="Gallery" accent="peach" />
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}
