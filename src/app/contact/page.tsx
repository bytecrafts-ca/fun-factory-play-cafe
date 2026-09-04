import { ContactDetails } from "@/components/ContactDetails";
import { ContactForm } from "@/components/ContactForm";
import { ConversionLink } from "@/components/ConversionLink";
import { GoogleMap } from "@/components/GoogleMap";
import { HoursWidget } from "@/components/HoursWidget";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { createPageMetadata, getBreadcrumbSchema, pageSeo } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(pageSeo.contact);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Contact Fun Factory Play Café"
        subtitle="1420 Bayly St. Unit 15. Pickering, ON. L1W 3R4. Find us in the back of the plaza with free parking available!"
        accent="sky"
      />

      <section className="section-pad bg-section-sky">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="card p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">
                  Contact
                </h3>
                <div className="mt-3">
                  <ContactDetails />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Fun Factory Play Café and Littles &amp; Lattés Café share this Pickering location.
                  Call{" "}
                  <ConversionLink
                    href={siteConfig.phoneHref}
                    className="text-muted hover:text-charcoal hover:underline"
                  >
                    {siteConfig.phone}
                  </ConversionLink>{" "}
                  for play, party, or café questions.
                </p>
              </div>
              <div className="card p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">
                  Connect
                </h3>
                <div className="mt-3">
                  <SocialLinks showLabels />
                </div>
              </div>
              <HoursWidget />
            </div>
            <ContactForm />
          </div>
          <div className="mt-10">
            <GoogleMap />
          </div>
        </div>
      </section>
    </>
  );
}
