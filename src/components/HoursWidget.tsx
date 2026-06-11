import { getOpenStatusMessage, hours, isOpenNow } from "@/lib/site";

export function HoursWidget({ compact = false }: { compact?: boolean }) {
  const today = new Date().toLocaleDateString("en-CA", { weekday: "long" });

  if (compact) {
    const todayHours = hours.find((h) => h.day === today);
    const open = isOpenNow();
    const statusMessage = getOpenStatusMessage();

    return (
      <div className="card border-l-4 border-l-sky p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">
          Today — {today}
        </p>
        <p className="mt-2 text-2xl font-extrabold text-charcoal">
          {open ? "Open now" : (todayHours?.hours ?? "Closed")}
        </p>
        {!open && (
          <p className="mt-1 text-sm font-semibold text-charcoal">{statusMessage}</p>
        )}
        {todayHours?.promo && (
          <p className="mt-2 inline-block rounded-md bg-sunshine px-2.5 py-1 text-xs font-bold text-charcoal">
            {todayHours.promo}
          </p>
        )}
        <details className="mt-4 group">
          <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wider text-muted hover:text-charcoal">
            Full schedule
          </summary>
          <ul className="mt-2 space-y-1.5">
            {hours.map((item) => (
              <li
                key={item.day}
                className="flex justify-between text-sm text-muted"
              >
                <span className={item.closed ? "opacity-50" : ""}>{item.day}</span>
                <span className={`font-medium ${item.closed ? "opacity-50" : "text-charcoal"}`}>
                  {item.hours}
                </span>
              </li>
            ))}
          </ul>
        </details>
      </div>
    );
  }

  return (
    <div className="card border-l-4 border-l-sky p-6">
      <h3 className="text-lg font-bold text-charcoal">Public Play Hours</h3>
      <ul className="mt-4 space-y-1">
        {hours.map((item) => {
          const isToday = item.day === today;
          return (
            <li
              key={item.day}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm ${
                isToday ? "bg-mint/35 font-semibold" : ""
              }`}
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
