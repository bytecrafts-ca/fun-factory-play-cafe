import { siteConfig } from "@/lib/site";

const linkClass = "text-sm font-normal text-muted transition hover:text-charcoal hover:underline";
const labelClass = "text-sm font-bold text-charcoal";

export function ContactDetails() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted">
        <span className={labelClass}>Address:</span>{" "}
        <a
          href={siteConfig.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {siteConfig.address.full}, L1W 3R4
        </a>
      </p>
      <p className="text-sm text-muted">
        <span className={labelClass}>Phone:</span>{" "}
        <a href={siteConfig.phoneHref} className={linkClass}>
          {siteConfig.phone}
        </a>
      </p>
      <p className="text-sm text-muted">
        <span className={labelClass}>Email:</span>{" "}
        <a href={siteConfig.emailHref} className={linkClass}>
          {siteConfig.email}
        </a>
      </p>
    </div>
  );
}
