import { siteConfig } from "@/lib/site";
import {
  IconEmail,
  IconGoogleMaps,
  IconGoogleReviews,
  IconInstagram,
  IconTikTok,
} from "@/components/Icons";

type SocialLinksProps = {
  showLabels?: boolean;
  className?: string;
};

export function SocialLinks({ showLabels = false, className = "" }: SocialLinksProps) {
  const mainItems = [
    {
      key: "email",
      href: siteConfig.emailHref,
      label: siteConfig.email,
      icon: IconEmail,
      external: false,
    },
    {
      key: "instagram",
      href: siteConfig.social.instagram.href,
      label: siteConfig.social.instagram.label,
      icon: IconInstagram,
      external: true,
    },
    {
      key: "littles",
      href: siteConfig.social.littlesInstagram.href,
      label: siteConfig.social.littlesInstagram.label,
      icon: IconInstagram,
      external: true,
    },
    {
      key: "reviews",
      href: siteConfig.googleReviews.reviewsUrl,
      label: "Google Reviews",
      icon: IconGoogleReviews,
      external: true,
    },
  ] as const;

  const tiktok = siteConfig.social.tiktok;

  const linkClass =
    "inline-flex items-center gap-2 rounded-full border border-peach/60 bg-white px-3 py-2 text-charcoal transition hover:border-sky hover:bg-sky/10";

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex flex-wrap items-center gap-3">
        {mainItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.key}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              title={item.label}
              className={linkClass}
              aria-label={item.label}
            >
              <Icon className="h-5 w-5" />
              {showLabels && <span className="text-sm font-medium">{item.label}</span>}
            </a>
          );
        })}
        {tiktok.href ? (
          <a
            href={tiktok.href}
            target="_blank"
            rel="noopener noreferrer"
            title={tiktok.label}
            className={linkClass}
            aria-label={tiktok.label}
          >
            <IconTikTok className="h-5 w-5" />
            {showLabels && <span className="text-sm font-medium">{tiktok.label}</span>}
          </a>
        ) : (
          <span title={tiktok.label} className={linkClass} aria-label={tiktok.label}>
            <IconTikTok className="h-5 w-5" />
            {showLabels && <span className="text-sm font-medium">{tiktok.label}</span>}
          </span>
        )}
      </div>
      <div>
        <a
          href={siteConfig.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Google Maps"
          className={linkClass}
          aria-label="Google Maps"
        >
          <IconGoogleMaps className="h-5 w-5" />
          {showLabels && <span className="text-sm font-medium">Google Maps</span>}
        </a>
      </div>
    </div>
  );
}
