import { hours } from "@/lib/site";

export function HoursWidget({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`card border-l-4 border-l-sky ${compact ? "p-5" : "p-6"}`}>
      <h3 className={`font-bold text-charcoal ${compact ? "text-base" : "text-lg"}`}>
        Public Play Hours
      </h3>
      <ul className={`space-y-1 ${compact ? "mt-3" : "mt-4"}`}>
        {hours.map((item) => {
          return (
            <li
              key={item.day}
              className="rounded-lg px-3 py-2 text-sm"
            >
              <div className="flex items-center justify-between">
                <span className={item.closed ? "text-muted" : "text-charcoal"}>
                  {item.day}
                </span>
                <span className={item.closed ? "text-muted" : "text-charcoal"}>
                  {item.hours}
                </span>
              </div>
              {item.promo && (
                <p className="mt-0.5 text-right text-xs text-muted">{item.promo}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
