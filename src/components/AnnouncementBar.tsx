import Link from "next/link";
import { promoText, siteConfig } from "@/lib/site";

export function AnnouncementBar() {
  const isExternal = siteConfig.waiverUrl.startsWith("http");

  return (
    <div className="bg-lavender">
      <div className="container-main flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-charcoal sm:text-sm">
        <Link
          href={isExternal ? siteConfig.waiverUrl : "/waiver"}
          className="transition hover:text-charcoal/70"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          Sign the waiver before entry
        </Link>
        <span className="hidden text-charcoal/25 sm:inline" aria-hidden>
          |
        </span>
        <span>We are a socks only facility</span>
      </div>
      <div className="container-main border-t border-charcoal/5 pb-2.5 pt-2 text-center">
        <span className="inline-block rounded-md bg-sunshine/80 px-2 py-0.5 text-xs font-bold normal-case tracking-normal text-charcoal sm:text-sm">
          {promoText}
        </span>
      </div>
    </div>
  );
}
