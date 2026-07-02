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
          className="fixed inset-0 z-[100] flex flex-col bg-charcoal/90"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <div className="flex shrink-0 justify-end px-3 pb-2 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-4">
            <button
              type="button"
              onClick={close}
              className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/20"
              aria-label="Close full screen photo"
            >
              Close
            </button>
          </div>

          <button
            type="button"
            className="flex min-h-0 flex-1 items-center justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6"
            onClick={close}
            aria-label="Close full screen photo"
          >
            <div
              className="relative flex max-h-full max-w-full items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={1600}
                height={1200}
                sizes="100vw"
                className="mx-auto block h-auto max-h-[calc(100dvh-5rem)] w-auto max-w-[calc(100vw-1.5rem)] object-contain sm:max-h-[calc(100dvh-6rem)] sm:max-w-[min(95vw,1200px)]"
                priority
              />
            </div>
          </button>
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
