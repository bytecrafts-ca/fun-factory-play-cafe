import Image from "next/image";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

type Accent = "bubblegum" | "sky" | "mint" | "lavender" | "peach" | "sunshine";

const accentRing: Record<Accent, string> = {
  bubblegum: "ring-bubblegum/40",
  sky: "ring-sky/50",
  mint: "ring-mint/50",
  lavender: "ring-lavender/50",
  peach: "ring-peach/50",
  sunshine: "ring-sunshine/50",
};

const accentGradient: Record<Accent, string> = {
  bubblegum: "from-cream via-white to-bubblegum/20",
  sky: "from-cream via-white to-sky/25",
  mint: "from-cream via-white to-mint/20",
  lavender: "from-cream via-white to-lavender/25",
  peach: "from-cream via-white to-peach/25",
  sunshine: "from-cream via-white to-sunshine/20",
};

type PageHeroProps = {
  title: string;
  subtitle?: string;
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
    <section
      className={`relative border-b border-peach/40 bg-gradient-to-br ${accentGradient[accent]}`}
    >
      <div className="container-main grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-14">
        <div>
          {eyebrow && <div className="mb-5">{eyebrow}</div>}
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>

        <div className="space-y-5">
          <div
            className={`relative overflow-hidden rounded-[20px] shadow-[0_20px_50px_-12px_rgba(42,42,42,0.18)] ring-4 ${accentRing[accent]}`}
          >
            <div className="relative aspect-[5/4] sm:aspect-[4/3]">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority={priority}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </div>
          {aside}
        </div>
      </div>
      <div className="palette-bar" aria-hidden />
    </section>
  );
}
