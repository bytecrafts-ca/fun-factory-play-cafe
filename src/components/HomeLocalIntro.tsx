import Link from "next/link";
import { ContactDetails } from "@/components/ContactDetails";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function HomeLocalIntro() {
  return (
    <section className="section-pad bg-white" aria-labelledby="local-intro-heading">
      <div className="container-main">
        <h2 id="local-intro-heading" className="text-2xl font-extrabold text-charcoal sm:text-3xl">
          Indoor Playground &amp; Birthday Parties in Pickering, Ontario
        </h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              Fun Factory Play Café is Pickering&apos;s destination for{" "}
              <strong className="font-semibold text-charcoal">indoor playground</strong> fun,
              {" "}<strong className="font-semibold text-charcoal">kids birthday parties</strong>,
              and parent-friendly café time at{" "}
              <strong className="font-semibold text-charcoal">{siteConfig.address.full}</strong>,
              {" "}L1W 3R4. Families from{" "}
              <Link href="/ajax-indoor-play" className="font-semibold text-charcoal hover:underline">
                Ajax
              </Link>
              ,{" "}
              <Link href="/whitby-kids-parties" className="font-semibold text-charcoal hover:underline">
                Whitby
              </Link>
              , Oshawa, Scarborough, and across{" "}
              <Link
                href="/durham-region-birthday-parties"
                className="font-semibold text-charcoal hover:underline"
              >
                Durham Region
              </Link>{" "}
              visit us for unlimited drop-in play, private party rooms, and{" "}
              <Link href="/cafe" className="font-semibold text-charcoal hover:underline">
                Littles &amp; Lattés Café
              </Link>
              .
            </p>
            <p>
              Our indoor play centre includes multi-level climbing structures, a dedicated toddler
              zone, and open sight lines so parents can relax with coffee while kids burn energy.
              Whether you need a rainy day activity, a playdate spot, or a full birthday party venue,
              Fun Factory is built for real family visits in east Durham.
            </p>
            <p>
              Drop-in admissions are paid at the front desk with unlimited play time. Birthday
              packages include a private room, playtime, pizza, cake, juice, e-vites, and a party
              host. Every Tuesday and Thursday, enjoy 50% off drop-in admissions after 3:30 pm.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/play" variant="primary" size="md">
                Drop-In Rates &amp; Hours
              </Button>
              <Button href="/birthday-parties" variant="lavender" size="md">
                Party Packages
              </Button>
              <Button href="/cafe" variant="secondary" size="md">
                Littles &amp; Lattés Menu
              </Button>
            </div>
          </div>
          <div className="card border-l-4 border-l-sky p-6">
            <h3 className="text-lg font-bold text-charcoal">Visit Us</h3>
            <div className="mt-4">
              <ContactDetails />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Free parking in the Bayly Street plaza. Call{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-charcoal hover:underline">
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <Link href="/contact" className="font-semibold text-charcoal hover:underline">
                contact us online
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
