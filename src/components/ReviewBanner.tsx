import { siteConfig } from "@/lib/site";

export function ReviewBanner() {
  return (
    <section className="border-y border-mint/40 bg-mint/15 py-8" aria-label="Leave a Google review">
      <div className="container-main flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-charcoal/70">
            Loved your visit?
          </p>
          <p className="mt-1 text-lg font-extrabold text-charcoal">
            Leave us a Google review
          </p>
          <p className="mt-1 max-w-xl text-sm text-muted">
            Your feedback helps other Pickering and Durham Region families find us.
          </p>
        </div>
        <a
          href={siteConfig.googleReviews.writeReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-bold text-white transition hover:bg-charcoal/90"
        >
          Write a Review
        </a>
      </div>
    </section>
  );
}
