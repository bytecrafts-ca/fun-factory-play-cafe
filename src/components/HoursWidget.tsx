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
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm"
            >
              <span className={item.closed ? "text-muted" : "text-charcoal"}>
                {item.day}
              </span>
              <span className="text-right">
                <span className={item.closed ? "text-muted" : "text-charcoal"}>
                  {item.hours}
                </span>
                {item.promo && (
                  <span className="ml-2 rounded bg-sunshine/70 px-1.5 py-0.5 text-xs font-bold text-charcoal">
                    50% OFF
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
