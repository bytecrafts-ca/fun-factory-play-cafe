import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";
import { ContactForm } from "@/components/ContactForm";
import { HoursWidget } from "@/components/HoursWidget";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";

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
                  Contact
                </h3>
                <div className="mt-3">
                  <ContactDetails />
                </div>
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
        </div>
      </section>
    </>
  );
}
