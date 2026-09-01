import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/site";

/** QR-friendly review redirect for GBP and in-store signage */
export default function ReviewPage() {
  redirect(siteConfig.googleReviews.writeReviewUrl);
}
