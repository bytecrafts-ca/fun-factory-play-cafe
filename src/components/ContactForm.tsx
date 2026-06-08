"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <form onSubmit={handleSubmit} className="card border-l-4 border-l-sky space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-charcoal">
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-charcoal">
          Subject
        </label>
        <select id="subject" name="subject" className={inputClass}>
          <option>General Inquiry</option>
          <option>Party Booking Question</option>
          <option>Drop-In Play</option>
          <option>Café Menu</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal">
          Message
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
