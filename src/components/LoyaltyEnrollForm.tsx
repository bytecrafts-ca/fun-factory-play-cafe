"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type EnrollState =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string; balance: number }
  | { type: "error"; message: string };

export function LoyaltyEnrollForm() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [givenName, setGivenName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [state, setState] = useState<EnrollState>({ type: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ type: "loading" });

    try {
      const response = await fetch("/api/loyalty/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, email, postalCode, givenName, familyName }),
      });

      const data = (await response.json()) as {
        error?: string;
        message?: string;
        balance?: number;
      };

      if (!response.ok) {
        setState({
          type: "error",
          message: data.error ?? "Something went wrong. Please try again.",
        });
        return;
      }

      setState({
        type: "success",
        message: data.message ?? "You're enrolled!",
        balance: data.balance ?? 0,
      });
    } catch {
      setState({
        type: "error",
        message: "Could not connect. Check your connection and try again.",
      });
    }
  }

  if (state.type === "success") {
    return (
      <div
        className="rounded-[var(--radius-card)] border border-mint/60 bg-mint/20 px-5 py-6"
        role="status"
      >
        <p className="font-bold text-charcoal">{state.message}</p>
        <p className="mt-2 text-sm text-muted">
          Current balance: <span className="font-semibold text-charcoal">{state.balance} points</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="loyalty-phone" className="block text-sm font-semibold text-charcoal">
          Mobile phone <span className="text-bubblegum">*</span>
        </label>
        <p className="mt-1 text-xs text-muted">
          Use the same number you&apos;ll give staff when you pay at the front desk.
        </p>
        <input
          id="loyalty-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="(647) 555-1234"
          className="mt-2 w-full rounded-[var(--radius-btn)] border border-border bg-white px-4 py-3 text-charcoal placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50"
        />
      </div>

      <div>
        <label htmlFor="loyalty-email" className="block text-sm font-semibold text-charcoal">
          Email <span className="text-bubblegum">*</span>
        </label>
        <input
          id="loyalty-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-[var(--radius-btn)] border border-border bg-white px-4 py-3 text-charcoal placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50"
        />
      </div>

      <div>
        <label htmlFor="loyalty-postal-code" className="block text-sm font-semibold text-charcoal">
          Postal code <span className="text-bubblegum">*</span>
        </label>
        <input
          id="loyalty-postal-code"
          name="postalCode"
          type="text"
          autoComplete="postal-code"
          required
          value={postalCode}
          onChange={(event) => setPostalCode(event.target.value.toUpperCase())}
          placeholder="L1W 3R4"
          className="mt-2 w-full rounded-[var(--radius-btn)] border border-border bg-white px-4 py-3 text-charcoal placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="loyalty-given-name" className="block text-sm font-semibold text-charcoal">
            First name <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="loyalty-given-name"
            name="givenName"
            type="text"
            autoComplete="given-name"
            value={givenName}
            onChange={(event) => setGivenName(event.target.value)}
            className="mt-2 w-full rounded-[var(--radius-btn)] border border-border bg-white px-4 py-3 text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50"
          />
        </div>
        <div>
          <label htmlFor="loyalty-family-name" className="block text-sm font-semibold text-charcoal">
            Last name <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="loyalty-family-name"
            name="familyName"
            type="text"
            autoComplete="family-name"
            value={familyName}
            onChange={(event) => setFamilyName(event.target.value)}
            className="mt-2 w-full rounded-[var(--radius-btn)] border border-border bg-white px-4 py-3 text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50"
          />
        </div>
      </div>

      {state.type === "error" && (
        <p className="rounded-[var(--radius-btn)] border border-peach/60 bg-peach/20 px-4 py-3 text-sm text-charcoal" role="alert">
          {state.message}
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        {state.type === "loading" ? "Enrolling…" : "Join Loyalty Program"}
      </Button>
    </form>
  );
}
