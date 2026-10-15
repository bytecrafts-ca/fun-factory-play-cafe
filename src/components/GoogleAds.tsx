import Script from "next/script";
import {
  clarityId,
  ga4Id,
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
          ${ga4Id ? `gtag('config', '${ga4Id}');` : ""}
        `}
      </Script>
      {clarityId && (
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}
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
