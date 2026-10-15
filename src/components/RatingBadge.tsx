import { googleReviewsSummary, siteConfig } from "@/lib/site";

export function RatingBadge({ className = "" }: { className?: string }) {
  const { rating, totalReviews } = googleReviewsSummary;
  const roundedCount = Math.floor(totalReviews / 50) * 50;

  return (
    <a
      href={siteConfig.googleReviews.reviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-white/90 px-3 py-1.5 text-sm text-charcoal transition hover:border-charcoal/30 ${className}`}
      aria-label={`Rated ${rating} out of 5 from ${roundedCount}+ Google reviews`}
    >
      <span className="tracking-tight text-[#e5a400]" aria-hidden>
        ★★★★★
      </span>
      <span className="font-bold">{rating.toFixed(1)}</span>
      <span className="text-muted">from {roundedCount}+ Google reviews</span>
    </a>
  );
}
