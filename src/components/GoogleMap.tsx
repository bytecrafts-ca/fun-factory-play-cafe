import { siteConfig } from "@/lib/site";

export function GoogleMap() {
  return (
    <div className="card overflow-hidden">
      <iframe
        title="Fun Factory location on Google Maps"
        src={siteConfig.address.mapsEmbedUrl}
        className="h-64 w-full border-0 sm:h-72"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="border-t border-peach/40 bg-white px-4 py-3 text-center">
        <a
          href={siteConfig.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-charcoal underline decoration-sky decoration-2 underline-offset-4 transition hover:decoration-bubblegum"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
