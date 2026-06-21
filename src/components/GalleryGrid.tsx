import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/site";

export function GalleryGrid({ limit }: { limit?: number }) {
  const images = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <div key={image.src} className="card overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function GalleryLink() {
  return (
    <div className="mt-8 text-center">
      <Link
        href="/gallery"
        className="text-sm font-semibold text-charcoal underline decoration-sky decoration-2 underline-offset-4 transition hover:decoration-bubblegum"
      >
        View full gallery
      </Link>
    </div>
  );
}
