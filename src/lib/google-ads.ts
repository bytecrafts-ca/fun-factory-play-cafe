export const googleAdsId =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18425793193";

/** Purchase conversion label — fire only on a confirmed booking/thank-you page */
export const googleAdsPurchaseConversion =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PURCHASE_CONVERSION ??
  "AW-18425793193/PAR9CJmT3uwcEKmVjdJE";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
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
