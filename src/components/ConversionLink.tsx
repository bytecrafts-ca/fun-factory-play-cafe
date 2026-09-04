"use client";

import Link from "next/link";
import { type MouseEvent, type ReactNode } from "react";
import { trackGoogleAdsContactConversion } from "@/lib/google-ads";

type ConversionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Use for Instagram / other http(s) links that open in a new tab */
  external?: boolean;
  target?: string;
  rel?: string;
  title?: string;
  "aria-label"?: string;
};

/**
 * Link that reports the Google Ads Contact conversion on click.
 * Does NOT hijack navigation — tel:/mailto:/Instagram must work normally.
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

  function handleClick(_e: MouseEvent<HTMLAnchorElement>) {
    // Fire-and-forget. Never preventDefault — that breaks phone, email, and IG.
    trackGoogleAdsContactConversion();
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
