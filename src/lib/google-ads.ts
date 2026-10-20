export const googleAdsId =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18425793193";

/** Purchase conversion label — fire only on a confirmed booking/thank-you page */
export const googleAdsPurchaseConversion =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PURCHASE_CONVERSION ??
  "AW-18425793193/PAR9CJmT3uwcEKmVjdJE";

/** Contact conversion — phone / email / café inquiry clicks */
export const googleAdsContactConversion =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION ??
  "AW-18425793193/u82bCN3-zu0cEKmVjdJE";

/** Optional click conversions for outbound booking links. Unset = GA4 event only. */
export const googleAdsPartyClickConversion =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PARTY_CLICK_CONVERSION ?? "";
export const googleAdsTicketClickConversion =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_TICKET_CLICK_CONVERSION ?? "";

export const ga4Id = process.env.NEXT_PUBLIC_GA4_ID ?? "";
export const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID ?? "";

export type BookingClickType = "party" | "tickets" | "membership";

const bookingClickEvents: Record<BookingClickType, string> = {
  party: "party_booking_click",
  tickets: "ticket_purchase_click",
  membership: "membership_click",
};

export function getBookingClickType(href: string): BookingClickType | null {
  if (/\.book\.app\/pass\b/i.test(href)) return "membership";
  if (/\.book\.app\b|ovatu\.com/i.test(href)) return "party";
  if (/squareup\.com\/appointments|square\.site/i.test(href)) return "tickets";
  return null;
}

/** Fire-and-forget. Never blocks navigation. */
export function trackBookingClick(type: BookingClickType, href: string, location: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", bookingClickEvents[type], {
    link_url: href,
    page_path: location,
  });

  const sendTo =
    type === "party"
      ? googleAdsPartyClickConversion
      : type === "tickets"
        ? googleAdsTicketClickConversion
        : "";
  if (sendTo) {
    window.gtag("event", "conversion", { send_to: sendTo });
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

/** Call only after a confirmed purchase/booking (e.g. Ovatu thank-you page). */
export function trackGoogleAdsPurchaseConversion(options?: {
  value?: number;
  currency?: string;
  transactionId?: string;
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: googleAdsPurchaseConversion,
    value: options?.value ?? 1.0,
    currency: options?.currency ?? "CAD",
    transaction_id: options?.transactionId ?? "",
  });
}

/**
 * Google Ads Contact conversion (fire-and-forget).
 * Does not navigate — let the browser handle tel:/mailto:/target=_blank.
 */
export function trackGoogleAdsContactConversion(): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: googleAdsContactConversion,
    });
  }
}
