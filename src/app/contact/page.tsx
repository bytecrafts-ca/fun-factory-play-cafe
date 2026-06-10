import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { GoogleMap } from "@/components/GoogleMap";
import { HoursWidget } from "@/components/HoursWidget";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Fun Factory Play Café in Pickering — phone, email, and contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Questions about play, parties, or the café? Reach out — we'd love to hear from you."
        accent="sky"
      />

      <section className="section-pad bg-section-sky">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="card p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">
                  Address
                </h3>
                <p className="mt-2 text-sm text-muted">{siteConfig.address.full}</p>
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-charcoal hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
              <div className="card p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">
                  Phone
                </h3>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-2 block text-sm font-semibold text-charcoal hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="card p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">
                  Email
                </h3>
                <a
                  href={siteConfig.emailHref}
                  className="mt-2 block text-sm font-semibold text-charcoal hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="card p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">
                  Connect
                </h3>
                <div className="mt-3">
                  <SocialLinks showLabels />
                </div>
              </div>
              <HoursWidget compact />
              <GoogleMap />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
