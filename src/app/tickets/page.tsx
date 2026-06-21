import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tickets",
  description: "Drop-in play information at Fun Factory Play Café.",
  path: "/tickets",
  noIndex: true,
});

export default function TicketsPage() {
  redirect("/play");
}
