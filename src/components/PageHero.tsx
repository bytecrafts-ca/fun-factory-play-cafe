import Image from "next/image";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

type Accent = "bubblegum" | "sky" | "mint" | "lavender" | "peach" | "sunshine";

const accentOverlay: Record<Accent, string> = {
  bubblegum: "from-cream/95 via-cream/80 to-cream/50",
  sky: "from-cream/95 via-cream/80 to-cream/45",
  mint: "from-cream/95 via-cream/80 to-cream/50",
  lavender: "from-cream/95 via-cream/80 to-cream/45",
  peach: "from-cream/95 via-cream/80 to-cream/45",
  sunshine: "from-cream/95 via-cream/80 to-cream/50",
};

type PageHeroProps = {
  title: string;
  subtitle?: ReactNode;
  eyebrow?: ReactNode;
  accent?: Accent;
  children?: ReactNode;
  aside?: ReactNode;
  priority?: boolean;
};

export function PageHero({
  title,
  subtitle,
  eyebrow,
  accent = "peach",
  children,
  aside,
  priority = false,
}: PageHeroProps) {
  const { heroImage } = siteConfig;

  return (
    <section className="relative isolate overflow-hidden border-b border-peach/40">
      <Image
        src={heroImage.src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="-z-20 object-cover object-center"
        aria-hidden
      />
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-r ${accentOverlay[accent]}`}
        aria-hidden
      />

      <div className="container-main relative z-10 py-16 sm:py-24">
        <div className="max-w-2xl">
          {eyebrow && <div className="mb-5">{eyebrow}</div>}
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-charcoal/80 sm:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>

        {aside && <div className="relative z-10 mt-8 max-w-sm">{aside}</div>}
      </div>

      <div className="palette-bar relative z-10" aria-hidden />
    </section>
  );
}
