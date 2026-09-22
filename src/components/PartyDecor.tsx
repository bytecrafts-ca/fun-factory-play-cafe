import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partyDecorPackages, partyDecorPartner } from "@/lib/site";

export function PartyDecor() {
  return (
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        title="Party Decor"
        subtitle={partyDecorPartner.intro}
        accent="peach"
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {partyDecorPackages.map((pkg) => (
          <article
            key={pkg.name}
            className="card flex flex-col overflow-hidden border border-peach/50 bg-white"
          >
            <div className="relative aspect-[3/2] bg-peach/15">
              <Image
                src={pkg.image}
                alt={pkg.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-base font-extrabold text-charcoal">{pkg.name}</h3>
              <ul className="mt-3 flex-1 space-y-1.5 text-xs leading-relaxed text-muted">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-peach" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-peach/50 bg-peach/15 px-5 py-6 text-center sm:px-8">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {partyDecorPartner.note}
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Button href={partyDecorPartner.instagramHref} external variant="lavender" size="md">
            Instagram {partyDecorPartner.instagramLabel}
          </Button>
          <Button href={partyDecorPartner.phoneHref} variant="outline" size="md">
            Call {partyDecorPartner.phone}
          </Button>
        </div>
      </div>
    </div>
  );
}
