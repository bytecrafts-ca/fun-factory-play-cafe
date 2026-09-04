import { ConversionLink } from "@/components/ConversionLink";
import { siteConfig } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden border-b border-peach/50 bg-peach/30 sm:block">
      <div className="container-main flex items-center justify-between py-2 text-sm text-charcoal/80">
        <ConversionLink href={siteConfig.phoneHref} className="transition hover:text-charcoal">
          {siteConfig.phone}
        </ConversionLink>
        <ConversionLink href={siteConfig.emailHref} className="transition hover:text-charcoal">
          {siteConfig.email}
        </ConversionLink>
      </div>
    </div>
  );
}
