import { ConversionLink } from "@/components/ConversionLink";
import { IconEmail, IconInstagram } from "@/components/Icons";
import { siteConfig } from "@/lib/site";

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
      trackContact: true,
    },
    {
      key: "instagram",
      href: siteConfig.social.instagram.href,
      label: siteConfig.social.instagram.label,
      icon: IconInstagram,
      external: true,
      trackContact: false,
    },
    {
      key: "littles",
      href: siteConfig.social.littlesInstagram.href,
      label: siteConfig.social.littlesInstagram.label,
      icon: IconInstagram,
      external: true,
      trackContact: true,
    },
  ] as const;

  const linkClass =
    "inline-flex items-center gap-2 rounded-full border border-peach/60 bg-white px-3 py-2 text-sm font-medium text-charcoal transition hover:border-sky hover:bg-sky/10";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map((item) => {
        const content = (
          <>
            <item.icon className="h-5 w-5 shrink-0" />
            {showLabels && <span>{item.label}</span>}
          </>
        );

        if (item.trackContact) {
          return (
            <ConversionLink
              key={item.key}
              href={item.href}
              external={item.external}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={linkClass}
              title={item.label}
              aria-label={item.label}
            >
              {content}
            </ConversionLink>
          );
        }

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
            {content}
          </a>
        );
      })}
    </div>
  );
}
