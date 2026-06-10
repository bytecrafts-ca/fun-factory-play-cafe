import Image from "next/image";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

type Accent = "bubblegum" | "sky" | "mint" | "lavender" | "peach" | "sunshine";

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
      <div className="container-main py-14 sm:py-20">
        <div className="max-w-2xl">
          {eyebrow && <div className="mb-5">{eyebrow}</div>}
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>

        {aside && <div className="mt-8 max-w-sm">{aside}</div>}

        <div className="relative mt-10 overflow-hidden rounded-[20px] shadow-[0_20px_50px_-12px_rgba(42,42,42,0.15)]">
          <div className="relative aspect-[21/9] min-h-[180px] sm:min-h-[220px] lg:min-h-[280px]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority={priority}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-cream/10"
              aria-hidden
            />
          </div>
        </div>
      </div>
      <div className="palette-bar" aria-hidden />
    </section>
  );
}
