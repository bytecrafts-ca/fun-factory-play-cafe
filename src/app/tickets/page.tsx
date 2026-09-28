import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Buy Drop-In Tickets",
  description: "Buy drop-in play tickets for Fun Factory Play Café online.",
  path: "/tickets",
  noIndex: true,
});

export default function TicketsPage() {
  redirect(siteConfig.square.dropInUrl);
}
