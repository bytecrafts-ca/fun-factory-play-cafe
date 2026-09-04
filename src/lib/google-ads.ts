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
