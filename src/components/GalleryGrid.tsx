import Link from "next/link";

const placeholderCount = 6;

export function GalleryGrid({ limit }: { limit?: number }) {
  const count = limit ?? placeholderCount;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="card flex aspect-[4/3] items-center justify-center bg-peach/20"
          aria-hidden
        />
      ))}
      <p className="col-span-full text-center text-sm text-muted">
        Photos coming soon.
      </p>
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
