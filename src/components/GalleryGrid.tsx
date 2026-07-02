"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { galleryImages } from "@/lib/site";

type GalleryImage = (typeof galleryImages)[number];

export function GalleryGrid({ limit }: { limit?: number }) {
  const images = limit ? galleryImages.slice(0, limit) : galleryImages;
  const [active, setActive] = useState<GalleryImage | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(image)}
            className="card group cursor-zoom-in overflow-hidden text-left transition hover:ring-2 hover:ring-sky/50"
            aria-label={`View full size: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="aspect-[4/3] h-full w-full object-cover transition duration-300 group-hover:opacity-95"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/20"
            aria-label="Close full screen photo"
          >
            Close
          </button>
          <div
            className="relative max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={1600}
              height={1200}
              className="max-h-[90vh] w-auto max-w-[min(95vw,1200px)] object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
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
