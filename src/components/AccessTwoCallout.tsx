import { accessTwoCardUrl } from "@/lib/site";

export function AccessTwoCallout() {
  return (
    <div className="rounded-xl border border-mint/50 bg-mint/15 px-4 py-3 sm:px-5 sm:py-4">
      <p className="text-xs font-bold uppercase tracking-wider text-charcoal/70">
        Partner discount
      </p>
      <p className="mt-1 text-sm leading-relaxed text-charcoal sm:text-base">
        <a
          href={accessTwoCardUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline decoration-mint/60 underline-offset-2 hover:decoration-charcoal"
        >
          Access 2 Card
        </a>
        {" holders get $2 off drop-in admission rates. Show your card when you check-in."}
      </p>
    </div>
  );
}
