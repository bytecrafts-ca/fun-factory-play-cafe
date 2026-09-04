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
  title?: string;
  "aria-label"?: string;
};

/**
 * Link that reports the Google Ads Contact conversion on click
 * (same as Google's onclick="return gtag_report_conversion(url)").
 */
export function ConversionLink({
  href,
  children,
  className,
  external,
  target,
  rel,
  title,
  "aria-label": ariaLabel,
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
      <Link
        href={href}
        className={className}
        onClick={handleClick}
        title={title}
        aria-label={ariaLabel}
      >
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
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
