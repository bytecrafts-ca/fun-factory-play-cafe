"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  getPartyBookingUrl,
  partyTimelineNotes,
  partyTimelines,
  type PartyRoomTimeline,
} from "@/lib/site";

/** Pastel brand colors matching Fun Factory logo palette */
const rowStyles = [
  {
    bg: "bg-bubblegum",
    border: "border-bubblegum/60",
    badgeBg: "bg-white/70 text-charcoal",
    cellBorder: "border-charcoal/10",
    muted: "text-charcoal/70",
    pill: "bg-white/50",
  },
  {
    bg: "bg-mint",
    border: "border-mint/60",
    badgeBg: "bg-white/70 text-charcoal",
    cellBorder: "border-charcoal/10",
    muted: "text-charcoal/70",
    pill: "bg-white/50",
  },
  {
    bg: "bg-peach",
    border: "border-peach/60",
    badgeBg: "bg-white/70 text-charcoal",
    cellBorder: "border-charcoal/10",
    muted: "text-charcoal/70",
    pill: "bg-white/50",
  },
  {
    bg: "bg-sky",
    border: "border-sky/60",
    badgeBg: "bg-white/70 text-charcoal",
    cellBorder: "border-charcoal/10",
    muted: "text-charcoal/70",
    pill: "bg-white/50",
  },
];

export function PartyTimelines() {
  const [selectedRoomId, setSelectedRoomId] = useState<"small" | "large">("small");

  const currentRoom: PartyRoomTimeline =
    partyTimelines.find((room) => room.id === selectedRoomId) ?? partyTimelines[0];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center">
        <span className="inline-block rounded-full bg-lavender/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-charcoal">
          Room Schedules
        </span>
        <h2 className="mt-3 text-2xl font-extrabold text-charcoal sm:text-3xl lg:text-4xl">
          Party Timelines
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Every party package includes 2.5 hours in a private party room. Here is the exact schedule
          for each slot so you know when food, cake, and playtime happen.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div
          role="tablist"
          aria-label="Party Rooms"
          className="inline-flex rounded-full border border-peach/70 bg-cream p-1.5"
        >
          {partyTimelines.map((room) => {
            const active = room.id === selectedRoomId;
            return (
              <button
                key={room.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedRoomId(room.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition sm:px-6 sm:text-sm ${
                  active
                    ? "bg-charcoal text-white"
                    : "text-charcoal/80 hover:bg-peach/30 hover:text-charcoal"
                }`}
              >
                {room.roomName}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-peach/50 bg-peach/15 px-5 py-4 text-center">
        <p className="text-sm font-semibold text-charcoal sm:text-base">
          <span className="font-extrabold">{currentRoom.roomName}:</span> {currentRoom.packageNames}
        </p>
        <p className="mt-1 text-xs text-muted sm:text-sm">
          {currentRoom.capacityText} · 2.5 hours in room · 4 available time slots daily
        </p>
      </div>

      {/* Desktop / Tablet Timeline Table */}
      <div className="mt-8 hidden md:block">
        <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm">
          <div className="border-b border-charcoal/10 bg-gradient-to-r from-lavender/30 via-cream to-peach/30 px-6 py-3.5 text-center">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-charcoal">
              {currentRoom.roomName.toUpperCase()} · 4 DAILY TIME SLOTS
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-charcoal">
              <thead>
                <tr className="border-b border-charcoal/10 bg-cream text-left text-xs font-bold uppercase tracking-wider text-charcoal">
                  <th scope="col" className="w-[26%] px-5 py-3">
                    Slot &amp; Duration
                  </th>
                  <th scope="col" className="w-[18.5%] px-4 py-3 text-center">
                    Party Begins
                  </th>
                  <th scope="col" className="w-[18.5%] px-4 py-3 text-center">
                    Pizza Time
                  </th>
                  <th scope="col" className="w-[18.5%] px-4 py-3 text-center">
                    Cake Time
                  </th>
                  <th scope="col" className="w-[18.5%] px-4 py-3 text-center">
                    Party Ends
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentRoom.slots.map((item, index) => {
                  const style = rowStyles[index % rowStyles.length];
                  return (
                    <tr
                      key={item.slot}
                      className={`${style.bg} border-b border-charcoal/5 last:border-b-0 transition hover:brightness-[0.98]`}
                    >
                      <td className={`border-r ${style.cellBorder} px-5 py-4.5`}>
                        <span
                          className={`inline-block rounded-md px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wider ${style.badgeBg}`}
                        >
                          {item.slot}
                        </span>
                        <p className="mt-1 text-sm font-bold tracking-tight text-charcoal">
                          {item.timeRange}
                        </p>
                        <p className={`text-[11px] ${style.muted}`}>2.5 hours total</p>
                      </td>

                      <td className={`border-r ${style.cellBorder} px-4 py-4.5 text-center`}>
                        <p className="text-base font-extrabold text-charcoal">{item.begins}</p>
                        <p className={`text-xs font-medium ${style.muted}`}>Party Begins</p>
                      </td>

                      <td className={`border-r ${style.cellBorder} px-4 py-4.5 text-center`}>
                        <p className="text-base font-extrabold text-charcoal">{item.pizza}</p>
                        <p className={`text-xs font-medium ${style.muted}`}>Pizza Time</p>
                      </td>

                      <td className={`border-r ${style.cellBorder} px-4 py-4.5 text-center`}>
                        <p className="text-base font-extrabold text-charcoal">{item.cake}</p>
                        <p className={`text-xs font-medium ${style.muted}`}>Cake Time</p>
                      </td>

                      <td className="px-4 py-4.5 text-center">
                        <p className="text-base font-extrabold text-charcoal">{item.ends}</p>
                        <p className={`text-xs font-medium ${style.muted}`}>Party Ends</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Card Timeline View */}
      <div className="mt-6 space-y-3.5 md:hidden">
        {currentRoom.slots.map((item, index) => {
          const style = rowStyles[index % rowStyles.length];
          return (
            <div
              key={item.slot}
              className={`rounded-2xl border ${style.border} p-4.5 text-charcoal shadow-sm ${style.bg}`}
            >
              <div className={`flex items-center justify-between border-b ${style.cellBorder} pb-3`}>
                <span
                  className={`rounded-md px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wider ${style.badgeBg}`}
                >
                  {item.slot}
                </span>
                <span className="text-sm font-bold text-charcoal">{item.timeRange}</span>
              </div>

              <div className="mt-3.5 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
                <div className={`rounded-xl ${style.pill} p-2.5`}>
                  <p className="text-sm font-extrabold text-charcoal">{item.begins}</p>
                  <p className={`text-[11px] font-medium ${style.muted}`}>Party Begins</p>
                </div>

                <div className={`rounded-xl ${style.pill} p-2.5`}>
                  <p className="text-sm font-extrabold text-charcoal">{item.pizza}</p>
                  <p className={`text-[11px] font-medium ${style.muted}`}>Pizza Time</p>
                </div>

                <div className={`rounded-xl ${style.pill} p-2.5`}>
                  <p className="text-sm font-extrabold text-charcoal">{item.cake}</p>
                  <p className={`text-[11px] font-medium ${style.muted}`}>Cake Time</p>
                </div>

                <div className={`rounded-xl ${style.pill} p-2.5`}>
                  <p className="text-sm font-extrabold text-charcoal">{item.ends}</p>
                  <p className={`text-[11px] font-medium ${style.muted}`}>Party Ends</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 space-y-3 rounded-2xl border border-charcoal/15 bg-white p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-peach text-xs font-bold text-charcoal">
            i
          </span>
          <p className="text-xs leading-relaxed text-charcoal sm:text-sm">
            <strong className="font-bold">Pizza &amp; Cake Timing:</strong>{" "}
            {partyTimelineNotes.pizzaRule}
          </p>
        </div>

        <div className="flex items-start gap-3 border-t border-border pt-3">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sunshine text-xs font-bold text-charcoal">
            !
          </span>
          <p className="text-xs font-bold leading-relaxed text-charcoal sm:text-sm">
            {partyTimelineNotes.vacateRoomRule}
          </p>
        </div>

        <div className="flex items-start gap-3 border-t border-border pt-3">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-charcoal">
            $
          </span>
          <p className="text-xs leading-relaxed text-muted sm:text-sm">
            {partyTimelineNotes.depositRule}
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button href={getPartyBookingUrl()} external variant="lavender" size="lg">
          Book Your Party Slot
        </Button>
      </div>
    </div>
  );
}
