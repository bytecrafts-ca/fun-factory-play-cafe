"use client";

import { Fragment } from "react";
import {
  formatSpecialHoursDate,
  getUpcomingSpecialHours,
  getWeeklyHours,
  hoursDisclaimer,
} from "@/lib/site";

function TimeCells({ hours, muted = false }: { hours: string; muted?: boolean }) {
  const tone = muted ? "text-muted" : "text-charcoal";
  const parts = hours.split(/\s*[–-]\s*/).map((part) => part.trim()).filter(Boolean);

  if (parts.length !== 2) {
    return <span className={`col-span-3 whitespace-nowrap text-right ${tone}`}>{hours}</span>;
  }

  return (
    <>
      <span className={`whitespace-nowrap text-right ${tone}`}>{parts[0]}</span>
      <span className={tone} aria-hidden>
        –
      </span>
      <span className={`whitespace-nowrap ${tone}`}>{parts[1]}</span>
    </>
  );
}

export function HoursWidget({ compact = false }: { compact?: boolean }) {
  const weeklyHours = getWeeklyHours();
  const upcomingSpecialHours = getUpcomingSpecialHours();

  return (
    <div className={`card border-l-4 border-l-sky ${compact ? "p-5" : "p-6"}`}>
      <h3 className={`font-bold text-charcoal ${compact ? "text-base" : "text-lg"}`}>
        Public Play Hours
      </h3>

      <div
        className={`grid grid-cols-[minmax(0,1fr)_auto_auto_auto] items-baseline gap-x-1.5 gap-y-3 text-sm tabular-nums sm:px-3 ${
          compact ? "mt-3" : "mt-4"
        }`}
      >
        {weeklyHours.map((item) => (
          <Fragment key={item.day}>
            <span className={`pr-2 ${item.closed ? "text-muted" : "text-charcoal"}`}>
              {item.day}
            </span>
            <TimeCells hours={item.hours} muted={item.closed} />
            {item.promo && (
              <span className="col-span-full -mt-2.5 text-right text-xs text-muted">
                {item.promo}
              </span>
            )}
          </Fragment>
        ))}

        {upcomingSpecialHours.length > 0 && (
          <>
            <h4
              className={`col-span-full font-bold text-charcoal sm:-mx-3 ${
                compact ? "mt-2 text-sm" : "mt-3 text-base"
              }`}
            >
              Special Hours
            </h4>
            {upcomingSpecialHours.map((item) => {
              const ranges = item.closed
                ? ["Closed"]
                : item.hours.split(/,\s*/).map((part) => part.trim()).filter(Boolean);

              return ranges.map((range, index) => (
                <Fragment key={`${item.date}-${range}`}>
                  <span className="pr-2 text-charcoal">
                    {index === 0 ? formatSpecialHoursDate(item.date, item.label) : ""}
                  </span>
                  {item.closed ? (
                    <span className="col-span-3 text-right text-muted">Closed</span>
                  ) : (
                    <TimeCells hours={range} />
                  )}
                </Fragment>
              ));
            })}
          </>
        )}
      </div>

      <p className={`text-xs leading-relaxed text-muted ${compact ? "mt-4" : "mt-5"}`}>
        {hoursDisclaimer}
      </p>
    </div>
  );
}
