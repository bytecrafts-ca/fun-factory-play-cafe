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
    "inline-flex items-center gap-2 rounded-full border border-peach/60 bg-white px-3 py-2 text-sm font-medium text-charcoal transition hover:border-sky hover:bg-sky/10";

  function renderLink(
    href: string,
    label: string,
    Icon: typeof IconEmail,
    external: boolean,
    key: string,
  ) {
    return (
      <a
        key={key}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        title={label}
        className={linkClass}
        aria-label={label}
      >
        <Icon className="h-5 w-5 shrink-0" />
        {showLabels && <span>{label}</span>}
      </a>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex flex-wrap items-center gap-3">
        {mainItems.map((item) => renderLink(item.href, item.label, item.icon, item.external, item.key))}
      </div>
      <div>
        {tiktok.href ? (
          renderLink(tiktok.href, tiktok.label, IconTikTok, true, "tiktok")
        ) : (
          <span title={tiktok.label} className={linkClass} aria-label={tiktok.label}>
            <IconTikTok className="h-5 w-5 shrink-0" />
            {showLabels && <span>{tiktok.label}</span>}
          </span>
        )}
      </div>
      <div>
        {renderLink(
          siteConfig.address.mapsUrl,
          "Google Maps",
          IconGoogleMaps,
          true,
          "maps",
        )}
      </div>
    </div>
  );
}
