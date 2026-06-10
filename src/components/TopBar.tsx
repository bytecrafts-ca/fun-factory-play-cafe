import { siteConfig } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden border-b border-peach/50 bg-peach/30 sm:block">
      <div className="container-main flex items-center justify-between py-2 text-sm text-charcoal/80">
        <a href={siteConfig.phoneHref} className="transition hover:text-charcoal">
          {siteConfig.phone}
        </a>
        <a href={siteConfig.emailHref} className="transition hover:text-charcoal">
          {siteConfig.email}
        </a>
      </div>
    </div>
  );
}
