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
  const items = [
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
      key: "maps",
      href: siteConfig.address.mapsUrl,
      label: "Google Maps",
      icon: IconGoogleMaps,
      external: true,
    },
    {
      key: "reviews",
      href: siteConfig.googleReviews.reviewsUrl,
      label: "Google Reviews",
      icon: IconGoogleReviews,
      external: true,
    },
    {
      key: "tiktok",
      href: siteConfig.social.tiktok.href,
      label: siteConfig.social.tiktok.label,
      icon: IconTikTok,
      external: false,
      disabled: true,
    },
  ] as const;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map((item) => {
        const Icon = item.icon;
        const content = (
          <>
            <Icon className="h-5 w-5" />
            {showLabels && <span className="text-sm font-medium">{item.label}</span>}
          </>
        );

        if ("disabled" in item && item.disabled) {
          return (
            <span
              key={item.key}
              title={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-peach/60 bg-white/80 px-3 py-2 text-muted"
              aria-label={item.label}
            >
              {content}
            </span>
          );
        }

        return (
          <a
            key={item.key}
            href={item.href!}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            title={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-peach/60 bg-white px-3 py-2 text-charcoal transition hover:border-sky hover:bg-sky/10"
            aria-label={item.label}
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}
