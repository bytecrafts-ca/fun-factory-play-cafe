"use client";

import {
  formatSpecialHoursDate,
  getUpcomingSpecialHours,
  getWeeklyHours,
} from "@/lib/site";

export function HoursWidget({ compact = false }: { compact?: boolean }) {
  const weeklyHours = getWeeklyHours();
  const upcomingSpecialHours = getUpcomingSpecialHours();

  return (
    <div className={`card border-l-4 border-l-sky ${compact ? "p-5" : "p-6"}`}>
      <h3 className={`font-bold text-charcoal ${compact ? "text-base" : "text-lg"}`}>
        Public Play Hours
      </h3>
      <ul className={`space-y-1 ${compact ? "mt-3" : "mt-4"}`}>
        {weeklyHours.map((item) => {
          return (
            <li key={item.day} className="rounded-lg px-3 py-2 text-sm">
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

      {upcomingSpecialHours.length > 0 && (
        <div className={compact ? "mt-5" : "mt-6"}>
          <h4
            className={`font-bold text-charcoal ${compact ? "text-sm" : "text-base"}`}
          >
            Special Hours
          </h4>
          <ul className={`space-y-1 ${compact ? "mt-2" : "mt-3"}`}>
            {upcomingSpecialHours.map((item) => {
              const timeLines = item.closed
                ? ["Closed"]
                : item.hours.split(/,\s*/).map((part) => part.trim()).filter(Boolean);

              return (
                <li key={item.date} className="rounded-lg px-3 py-2 text-sm">
                  <div className="flex items-start justify-between gap-3">
                    <span className="shrink-0 text-charcoal">
                      {formatSpecialHoursDate(item.date, item.label)}
                    </span>
                    <span
                      className={`min-w-0 text-right ${item.closed ? "text-muted" : "text-charcoal"}`}
                    >
                      {timeLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
