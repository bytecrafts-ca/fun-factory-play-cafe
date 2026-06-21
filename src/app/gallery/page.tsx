import { GalleryGrid } from "@/components/GalleryGrid";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { absoluteUrl, createPageMetadata, getBreadcrumbSchema, pageSeo } from "@/lib/seo";
import { galleryImages } from "@/lib/site";

export const metadata = createPageMetadata(pageSeo.gallery);

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Fun Factory Play Café Photo Gallery",
            description: pageSeo.gallery.description,
            url: absoluteUrl("/gallery"),
            image: galleryImages.map((image) => ({
              "@type": "ImageObject",
              contentUrl: absoluteUrl(image.src),
              description: image.alt,
            })),
          },
        ]}
      />
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
