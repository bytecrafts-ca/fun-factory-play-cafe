"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-peach/40 bg-cream/95 backdrop-blur-sm">
      <div className="container-main flex items-center justify-between gap-6 py-3">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Fun Factory Play Café"
            width={180}
            height={72}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3.5 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-sky/50 text-charcoal"
                    : "text-muted hover:bg-peach/40 hover:text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href={siteConfig.waiverUrl} external variant="outline" size="sm">
            Waiver
          </Button>
          <Button
            href={siteConfig.ovatu.bookUrl}
            external
            variant="primary"
            size="sm"
          >
            Book Now
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-peach/60 bg-peach/20 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-peach/40 bg-cream px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 font-semibold text-charcoal hover:bg-peach/30"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-peach/40 pt-3">
              <Button href={siteConfig.waiverUrl} external variant="outline" size="md">
                Sign Waiver
              </Button>
              <Button
                href={siteConfig.ovatu.bookUrl}
                external
                variant="primary"
                size="md"
              >
                Book Now
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
