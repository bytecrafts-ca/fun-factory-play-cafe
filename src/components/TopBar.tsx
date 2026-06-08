import { siteConfig } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden border-b border-peach/50 bg-peach/30 sm:block">
      <div className="container-main flex items-center justify-end py-2 text-sm">
        <a
          href={siteConfig.phoneHref}
          className="font-semibold text-charcoal/80 transition hover:text-charcoal"
        >
          {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
