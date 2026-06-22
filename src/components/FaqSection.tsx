import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems, type FaqSegment } from "@/lib/seo";

const linkClassName =
  "font-semibold text-charcoal underline decoration-sky decoration-2 underline-offset-4 transition hover:decoration-bubblegum";

function FaqAnswer({ segments }: { segments: FaqSegment[] }) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-muted">
      {segments.map((segment, index) => {
        if (segment.type === "text") {
          return <span key={index}>{segment.value}</span>;
        }

        if (segment.external || segment.href.startsWith("http")) {
          return (
            <a
              key={index}
              href={segment.href}
              className={linkClassName}
              target="_blank"
              rel="noopener noreferrer"
            >
              {segment.label}
            </a>
          );
        }

        return (
          <Link key={index} href={segment.href} className={linkClassName}>
            {segment.label}
          </Link>
        );
      })}
    </p>
  );
}

export function FaqSection() {
  return (
    <section className="section-pad bg-white" aria-label="Frequently asked questions">
      <div className="container-main">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything families ask before visiting Fun Factory in Pickering."
          accent="sky"
        />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border">
          {faqItems.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none text-base font-bold text-charcoal marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    className="mt-1 shrink-0 text-muted transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <FaqAnswer segments={item.segments} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
