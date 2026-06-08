import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-peach/40 bg-peach/15">
      <div className="palette-bar" aria-hidden />
      <div className="container-main py-12">
        <div className="grid gap-10 md:grid-cols-3">
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
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal">
              Visit Us
            </h4>
            <address className="mt-4 space-y-2 not-italic text-sm text-muted">
              <p>{siteConfig.address.full}</p>
              <p>
                <a href={siteConfig.phoneHref} className="transition hover:text-charcoal">
                  {siteConfig.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-peach/30 pt-6 text-center text-xs text-muted">
          © {year} Fun Factory
        </div>
      </div>
    </footer>
  );
}
