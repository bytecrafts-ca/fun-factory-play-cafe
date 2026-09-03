"use client";

import Link from "next/link";
import { type MouseEvent, type ReactNode } from "react";
import { trackGoogleAdsContactConversion } from "@/lib/google-ads";

type ConversionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Use for tel:/mailto:/external URLs that should navigate after the conversion fires */
  external?: boolean;
  target?: string;
  rel?: string;
};

/**
 * Link that reports the Google Ads Contact conversion (Littles & Lattés) on click.
 * For tel:/mailto:/http(s) destinations, navigation waits for gtag's callback.
 * For internal paths, conversion fires and Next.js Link navigates normally.
 */
export function ConversionLink({
  href,
  children,
  className,
  external,
  target,
  rel,
}: ConversionLinkProps) {
  const isInternal = href.startsWith("/") && !href.startsWith("//");

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (isInternal && !external) {
      trackGoogleAdsContactConversion();
      return;
    }

    e.preventDefault();
    trackGoogleAdsContactConversion(href);
  }

  if (isInternal && !external) {
    return (
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
