"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  getPartyBookingUrl,
  partyTimelineNotes,
  partyTimelines,
  type PartyRoomTimeline,
} from "@/lib/site";

const rowStyles = [
  {
    bg: "bg-[#d81b60]",
    border: "border-[#c2185b]",
    badgeBg: "bg-white/25 text-white",
    cardBorder: "border-[#d81b60]/40",
    pillColor: "bg-[#d81b60]",
  },
  {
    bg: "bg-[#2e7d32]",
    border: "border-[#1b5e20]",
    badgeBg: "bg-white/25 text-white",
    cardBorder: "border-[#2e7d32]/40",
    pillColor: "bg-[#2e7d32]",
  },
  {
    bg: "bg-[#e65100]",
    border: "border-[#bf360c]",
    badgeBg: "bg-white/25 text-white",
    cardBorder: "border-[#e65100]/40",
    pillColor: "bg-[#e65100]",
  },
  {
    bg: "bg-[#283593]",
    border: "border-[#1a237e]",
    badgeBg: "bg-white/25 text-white",
    cardBorder: "border-[#283593]/40",
    pillColor: "bg-[#283593]",
  },
];

export function PartyTimelines() {
  const [selectedRoomId, setSelectedRoomId] = useState<"small" | "large">("small");

  const currentRoom: PartyRoomTimeline =
    partyTimelines.find((room) => room.id === selectedRoomId) ?? partyTimelines[0];

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
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

      {/* Room Toggle Tabs */}
      <div className="mt-8 flex justify-center">
        <div
          role="tablist"
          aria-label="Party Rooms"
          className="inline-flex rounded-full border border-peach/70 bg-cream p-1.5 shadow-xs"
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
                    ? "bg-charcoal text-white shadow-xs"
                    : "text-charcoal/80 hover:text-charcoal hover:bg-peach/30"
                }`}
              >
                {room.roomName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Room Summary */}
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
          {/* Table Top Banner */}
          <div className="border-b border-charcoal/10 bg-gradient-to-r from-lavender/30 via-cream to-peach/30 px-6 py-3.5 text-center">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-charcoal">
              {currentRoom.roomName.toUpperCase()} · 4 DAILY TIME SLOTS
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-white">
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
              <tbody className="space-y-1 p-2">
                {currentRoom.slots.map((item, index) => {
                  const style = rowStyles[index % rowStyles.length];
                  return (
                    <tr
                      key={item.slot}
                      className={`${style.bg} border-b border-white/10 last:border-b-0 transition hover:brightness-105`}
                    >
                      <td className="border-r border-white/20 px-5 py-4.5">
                        <span
                          className={`inline-block rounded-md px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wider ${style.badgeBg}`}
                        >
                          {item.slot}
                        </span>
                        <p className="mt-1 text-sm font-bold tracking-tight text-white">
                          {item.timeRange}
                        </p>
                        <p className="text-[11px] text-white/80">2.5 hours total</p>
                      </td>

                      <td className="border-r border-white/20 px-4 py-4.5 text-center">
                        <p className="text-base font-extrabold text-white">{item.begins}</p>
                        <p className="text-xs font-medium text-white/85">Party Begins</p>
                      </td>

                      <td className="border-r border-white/20 px-4 py-4.5 text-center">
                        <p className="text-base font-extrabold text-white">{item.pizza}</p>
                        <p className="text-xs font-medium text-white/85">Pizza Time</p>
                        {item.note && (
                          <p className="mt-0.5 text-[10px] text-white/85">Pizza Pizza opens 11 am</p>
                        )}
                      </td>

                      <td className="border-r border-white/20 px-4 py-4.5 text-center">
                        <p className="text-base font-extrabold text-white">{item.cake}</p>
                        <p className="text-xs font-medium text-white/85">Cake Time</p>
                      </td>

                      <td className="px-4 py-4.5 text-center">
                        <p className="text-base font-extrabold text-white">{item.ends}</p>
                        <p className="text-xs font-medium text-white/85">Party Ends</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Card Timeline View (< md) */}
      <div className="mt-6 space-y-3.5 md:hidden">
        {currentRoom.slots.map((item, index) => {
          const style = rowStyles[index % rowStyles.length];
          return (
            <div
              key={item.slot}
              className={`rounded-2xl p-4.5 text-white shadow-sm ${style.bg}`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <span
                  className={`rounded-md px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wider ${style.badgeBg}`}
                >
                  {item.slot}
                </span>
                <span className="text-sm font-bold text-white">{item.timeRange}</span>
              </div>

              {/* Milestones Grid */}
              <div className="mt-3.5 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
                <div className="rounded-xl bg-black/10 p-2.5">
                  <p className="text-sm font-extrabold text-white">{item.begins}</p>
                  <p className="text-[11px] font-medium text-white/85">Party Begins</p>
                </div>

                <div className="rounded-xl bg-black/10 p-2.5">
                  <p className="text-sm font-extrabold text-white">{item.pizza}</p>
                  <p className="text-[11px] font-medium text-white/85">Pizza Time</p>
                  {item.note && (
                    <p className="mt-0.5 text-[9px] text-white/80">Opens 11 am</p>
                  )}
                </div>

                <div className="rounded-xl bg-black/10 p-2.5">
                  <p className="text-sm font-extrabold text-white">{item.cake}</p>
                  <p className="text-[11px] font-medium text-white/85">Cake Time</p>
                </div>

                <div className="rounded-xl bg-black/10 p-2.5">
                  <p className="text-sm font-extrabold text-white">{item.ends}</p>
                  <p className="text-[11px] font-medium text-white/85">Party Ends</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Policy and Timing Notes Box (Requested by Zak) */}
      <div className="mt-8 space-y-3 rounded-2xl border border-charcoal/15 bg-white p-5 sm:p-6 shadow-xs">
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

      {/* Action Button */}
      <div className="mt-8 text-center">
        <Button
          href={getPartyBookingUrl()}
          external
          variant="lavender"
          size="lg"
        >
          Book Your Party Slot
        </Button>
      </div>
    </div>
  );
}
