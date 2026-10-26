import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Buy Admissions",
  description: "Buy drop-in play admissions for Fun Factory Play Café online.",
  path: "/tickets",
  noIndex: true,
});

export default function TicketsPage() {
  redirect(siteConfig.square.dropInUrl);
}
