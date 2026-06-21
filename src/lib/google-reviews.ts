import {
  googleReviewsFallback,
  googleReviewsSummary,
  siteConfig,
} from "@/lib/site";

export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
};

export type GoogleReviewsData = {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
  source: "google" | "fallback";
};

type PlacesReview = {
  author_name?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
};

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID ?? googleReviewsSummary.placeId;

  if (!apiKey) {
    return {
      rating: googleReviewsSummary.rating,
      totalReviews: googleReviewsSummary.totalReviews,
      reviews: [...googleReviewsFallback],
      source: "fallback",
    };
  }

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set(
      "fields",
      "reviews,rating,user_ratings_total",
    );
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), { next: { revalidate: 86400 } });
    const data = (await response.json()) as {
      result?: {
        reviews?: PlacesReview[];
        rating?: number;
        user_ratings_total?: number;
      };
    };

    const reviews = data.result?.reviews?.map((review) => ({
      author: review.author_name ?? "Google reviewer",
      rating: review.rating ?? 5,
      text: review.text ?? "",
      relativeTime: review.relative_time_description,
    })).filter((review) => review.text.length > 0);

    if (!reviews?.length) {
      throw new Error("No reviews returned");
    }

    return {
      rating: data.result?.rating ?? googleReviewsSummary.rating,
      totalReviews: data.result?.user_ratings_total ?? googleReviewsSummary.totalReviews,
      reviews,
      source: "google",
    };
  } catch {
    return {
      rating: googleReviewsSummary.rating,
      totalReviews: googleReviewsSummary.totalReviews,
      reviews: [...googleReviewsFallback],
      source: "fallback",
    };
  }
}

export function getGoogleReviewsUrl(): string {
  return siteConfig.googleReviews.reviewsUrl;
}
