type Accent = "bubblegum" | "sky" | "mint" | "lavender" | "peach" | "sunshine";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  accent?: Accent;
};

const accentBar: Record<Accent, string> = {
  bubblegum: "bg-bubblegum",
  sky: "bg-sky",
  mint: "bg-mint",
  lavender: "bg-lavender",
  peach: "bg-peach",
  sunshine: "bg-sunshine",
};

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  accent = "bubblegum",
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <div
        className={`mb-4 h-1 w-12 rounded-full ${accentBar[accent]} ${
          centered ? "mx-auto" : ""
        }`}
        aria-hidden
      />
      <h2
        className={`text-2xl font-extrabold sm:text-3xl lg:text-4xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-3 max-w-xl text-base leading-relaxed sm:text-lg ${
            centered ? "" : "mx-0"
          } ${light ? "text-white/80" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
