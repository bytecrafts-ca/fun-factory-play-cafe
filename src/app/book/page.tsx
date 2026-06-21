import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Book Now",
  description: "Book a birthday party or visit at Fun Factory Play Café.",
  path: "/book",
  noIndex: true,
});

export default function BookPage() {
  const url = siteConfig.ovatu.bookUrl;
  if (url.startsWith("http")) {
    redirect(url);
  }
  redirect("/parties");
}
