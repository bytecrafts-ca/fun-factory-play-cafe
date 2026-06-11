"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { partyRoomInfo, partyTimeSlots } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState("General Inquiry");

  const isPartyInquiry = subject === "Party Booking Question";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card border-l-4 border-l-mint bg-mint/15 p-8 text-center">
        <h3 className="text-xl font-bold text-charcoal">Message sent</h3>
        <p className="mt-2 text-muted">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 w-full rounded-[var(--radius-btn)] border border-peach/60 bg-white px-4 py-3 text-charcoal transition focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30";

  const labelClass = "block text-sm font-semibold text-charcoal";

  return (
    <form onSubmit={handleSubmit} className="card border-l-4 border-l-sky space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-muted">*</span>
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-muted">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone <span className="text-muted">*</span>
        </label>
        <input id="phone" name="phone" type="tel" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject <span className="text-muted">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          className={inputClass}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option>General Inquiry</option>
          <option>Party Booking Question</option>
          <option>Drop-In Play</option>
          <option>Café Menu</option>
          <option>Other</option>
        </select>
      </div>
      {isPartyInquiry && (
        <div className="space-y-4 rounded-lg border border-lavender/40 bg-lavender/10 p-4 text-sm text-muted">
          <p>{partyRoomInfo.smallRoom}</p>
          <p>{partyRoomInfo.largeRoom}</p>
        </div>
      )}
      {isPartyInquiry && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="party-date" className={labelClass}>
              Preferred date <span className="text-muted">*</span>
            </label>
            <input
              id="party-date"
              name="party-date"
              type="date"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="time-slot" className={labelClass}>
              Preferred time slot <span className="text-muted">*</span>
            </label>
            <select id="time-slot" name="time-slot" required className={inputClass}>
              <option value="">Select a time slot</option>
              <optgroup label="Small room">
                {partyTimeSlots.smallRoom.map((slot) => (
                  <option key={slot} value={`Small room — ${slot}`}>
                    {slot}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Large room">
                {partyTimeSlots.largeRoom.map((slot) => (
                  <option key={slot} value={`Large room — ${slot}`}>
                    {slot}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>
      )}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-muted">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`${inputClass} resize-none`}
        />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
