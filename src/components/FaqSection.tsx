import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/lib/seo";

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
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
