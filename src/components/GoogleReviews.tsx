import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <svg
            key={i}
            className={`h-5 w-5 ${filled || partial ? "text-sunshine" : "text-peach/50"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.196-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.263 9.394c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        );
      })}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export function GoogleReviews() {
  const { googleReviews } = siteConfig;

  return (
    <section className="section-pad bg-section-lavender">
      <div className="container-main">
        <SectionHeading title="Google Reviews" accent="lavender" />

        <div className="mx-auto mt-8 flex max-w-xl flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <GoogleLogo />
            <span className="text-sm font-semibold text-charcoal">Google</span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-4xl font-extrabold text-charcoal">
              {googleReviews.rating}
            </span>
            <div className="text-left">
              <StarRating rating={googleReviews.rating} />
              <p className="mt-1 text-sm text-muted">
                {googleReviews.count.toLocaleString("en-CA")} reviews
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={googleReviews.reviewsUrl} external variant="lavender" size="md">
              Read All Reviews
            </Button>
            <Button href={googleReviews.writeReviewUrl} external variant="outline" size="md">
              Leave a Review
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {googleReviews.featured.map((review) => (
            <article key={review.author} className="card p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-charcoal">{review.author}</p>
                  <p className="text-xs text-muted">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
