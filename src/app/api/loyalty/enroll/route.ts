import { NextResponse } from "next/server";
import {
  enrollLoyaltyAccount,
  normalizeCanadianPostalCode,
  normalizePhoneToE164,
} from "@/lib/square";

function isValidEmail(raw: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.trim());
}

export async function POST(request: Request) {
  let body: {
    phone?: string;
    email?: string;
    postalCode?: string;
    givenName?: string;
    familyName?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const phone = body.phone?.trim();
  if (!phone) {
    return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
  }

  const email = body.email?.trim();
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  const postalCode = normalizeCanadianPostalCode(body.postalCode ?? "");
  if (!postalCode) {
    return NextResponse.json(
      { error: "Enter a valid Canadian postal code (e.g. L1W 3R4)." },
      { status: 400 },
    );
  }

  const phoneE164 = normalizePhoneToE164(phone);
  if (!phoneE164) {
    return NextResponse.json(
      { error: "Enter a valid 10-digit Canadian phone number." },
      { status: 400 },
    );
  }

  const result = await enrollLoyaltyAccount({
    phoneE164,
    email,
    postalCode,
    givenName: body.givenName?.trim() || undefined,
    familyName: body.familyName?.trim() || undefined,
  });

  if (result.status === "error") {
    return NextResponse.json({ error: result.message }, { status: 503 });
  }

  return NextResponse.json({
    status: result.status,
    balance: result.balance,
    message:
      result.status === "already_enrolled"
        ? "You're already enrolled! Show this phone number at the front desk to earn and redeem points."
        : "You're enrolled! Visit us and pay at the front desk on regular drop-in days — your points are added when you pay full admission (not on Tue/Thu 50% off visits).",
  });
}
