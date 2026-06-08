import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { HoursWidget } from "@/components/HoursWidget";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Fun Factory Play Café in Pickering — phone and contact form.",
};

export default function ContactPage() {
  return (
    <section className="section-pad bg-section-sky">
      <div className="container-main">
        <SectionHeading title="Contact us" accent="sky" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="card p-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">
                Address
              </h3>
              <p className="mt-2 text-sm text-muted">{siteConfig.address.full}</p>
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
            <HoursWidget compact />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
