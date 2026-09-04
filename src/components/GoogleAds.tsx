import Script from "next/script";
import {
  googleAdsContactConversion,
  googleAdsId,
} from "@/lib/google-ads";

/**
 * Sitewide Google Ads tag + Contact conversion helper.
 * gtag_report_conversion stays available for Google Tag Assistant verification.
 * Site links fire conversion without hijacking tel:/mailto:/Instagram navigation.
 */
export function GoogleAds() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${googleAdsId}');
        `}
      </Script>
      <Script id="google-ads-contact-conversion" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined' && url) {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': '${googleAdsContactConversion}',
              'event_callback': callback,
              'event_timeout': 2000
            });
            return false;
          }
          window.gtag_report_conversion = gtag_report_conversion;
        `}
      </Script>
    </>
  );
}
