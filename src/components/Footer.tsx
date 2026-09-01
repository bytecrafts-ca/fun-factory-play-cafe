import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { localGuides } from "@/data/local-guides";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-peach/40 bg-peach/15">
      <div className="palette-bar" aria-hidden />
      <div className="container-main py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-charcoal">Fun Factory Play Café</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {siteConfig.address.full}
            </p>
            <p className="mt-2 text-sm">
              <a href={siteConfig.phoneHref} className="font-semibold text-charcoal">
                {siteConfig.phone}
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a href={siteConfig.emailHref} className="text-charcoal transition hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <div className="mt-4">
              <SocialLinks showLabels />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/guides" className="text-sm text-muted transition hover:text-charcoal">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-muted transition hover:text-charcoal">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/review" className="text-sm text-muted transition hover:text-charcoal">
                  Leave a Review
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal">
              Local Guides
            </h4>
            <ul className="mt-4 space-y-2.5">
              {localGuides.map((guide) => (
                <li key={guide.href}>
                  <a
                    href={guide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition hover:text-charcoal"
                  >
                    {guide.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal">
              Service Areas
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <Link href="/pickering-indoor-playground" className="transition hover:text-charcoal">
                  Pickering indoor playground
                </Link>
              </li>
              <li>
                <Link href="/kids-birthday-parties-pickering" className="transition hover:text-charcoal">
                  Kids birthday parties Pickering
                </Link>
              </li>
              <li>
                <Link href="/durham-region-birthday-parties" className="transition hover:text-charcoal">
                  Durham Region parties
                </Link>
              </li>
              <li>
                <Link href="/ajax-indoor-play" className="transition hover:text-charcoal">
                  Indoor play near Ajax
                </Link>
              </li>
              <li>
                <Link href="/whitby-kids-parties" className="transition hover:text-charcoal">
                  Parties near Whitby
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-peach/30 pt-6 text-center text-xs text-muted">
          © {year} Fun Factory
          <span className="mx-2" aria-hidden>
            ·
          </span>
          <a
            href="https://sutrel.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-charcoal"
          >
            Website by Sutrel
          </a>
        </div>
      </div>
    </footer>
  );
}
