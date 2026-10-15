import type { Metadata } from "next";
import { Suspense } from "react";
import { ThankYouContent } from "@/app/thank-you/ThankYouContent";

export const metadata: Metadata = {
  title: "Thanks for Celebrating With Us",
  description: "Thank you for celebrating at Fun Factory Play Café in Pickering.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={<section className="section-pad min-h-[60vh]" aria-busy="true" />}>
      <ThankYouContent />
    </Suspense>
  );
}
