import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGoogleReviews, getGoogleReviewsUrl } from "@/lib/google-reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < Math.round(rating) ? "text-sunshine" : "text-charcoal/20"}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

type GoogleReviewsProps = {
  title?: string;
  subtitle?: string;
  accent?: "lavender" | "peach" | "sky" | "mint" | "bubblegum";
};

export async function GoogleReviews({
  title = "Google Reviews",
  subtitle = "See what families are saying about Fun Factory.",
  accent = "lavender",
}: GoogleReviewsProps) {
  const data = await getGoogleReviews();

  return (
    <section className="section-pad bg-section-lavender">
      <div className="container-main">
        <SectionHeading title={title} subtitle={subtitle} accent={accent} />

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <div className="flex flex-col items-center gap-2">
            <Stars rating={data.rating} />
            <p className="text-lg font-extrabold text-charcoal">
              {data.rating.toFixed(1)} on Google
            </p>
            <p className="text-sm text-muted">
              Based on {data.totalReviews.toLocaleString("en-CA")}+ reviews
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.reviews.slice(0, 6).map((review) => (
            <article key={`${review.author}-${review.text.slice(0, 24)}`} className="card p-5">
              <Stars rating={review.rating} />
              <p className="mt-3 text-sm leading-relaxed text-charcoal">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-4 text-xs font-semibold text-muted">
                — {review.author}
                {review.relativeTime ? ` · ${review.relativeTime}` : ""}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          <a
            href={getGoogleReviewsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-charcoal underline decoration-sky decoration-2 underline-offset-4 transition hover:decoration-bubblegum"
          >
            Read more reviews on Google
          </a>
        </p>
      </div>
    </section>
  );
}
