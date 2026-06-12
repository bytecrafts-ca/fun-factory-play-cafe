const SQUARE_VERSION = "2024-10-17";

type SquareEnvironment = "sandbox" | "production";

function getSquareBaseUrl(environment: SquareEnvironment): string {
  return environment === "sandbox"
    ? "https://connect.squareupsandbox.com"
    : "https://connect.squareup.com";
}

function getSquareConfig() {
  const accessToken = process.env.SQUARE_ACCESS_TOKEN;
  const environment = (process.env.SQUARE_ENVIRONMENT ?? "production") as SquareEnvironment;
  const programId = process.env.SQUARE_LOYALTY_PROGRAM_ID;

  if (!accessToken) {
    return null;
  }

  return {
    accessToken,
    environment,
    programId,
    baseUrl: getSquareBaseUrl(environment),
  };
}

async function squareFetch<T>(
  path: string,
  options: { method?: string; body?: unknown } = {},
): Promise<{ ok: boolean; status: number; data: T | null; error?: string }> {
  const config = getSquareConfig();
  if (!config) {
    return { ok: false, status: 500, data: null, error: "Square is not configured" };
  }

  const response = await fetch(`${config.baseUrl}${path}`, {
    method: options.method ?? "GET",
    headers: {
      Authorization: `Bearer ${config.accessToken}`,
      "Square-Version": SQUARE_VERSION,
      "Content-Type": "application/json",
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = (await response.json()) as T & {
    errors?: Array<{ code?: string; detail?: string; category?: string }>;
  };

  if (!response.ok) {
    const detail = data.errors?.[0]?.detail ?? data.errors?.[0]?.code ?? "Square request failed";
    return { ok: false, status: response.status, data: null, error: detail };
  }

  return { ok: true, status: response.status, data: data as T, error: undefined };
}

export function normalizePhoneToE164(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");

  if (digits.length === 10) {
    return `+1${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  return null;
}

export function isSquareConfigured(): boolean {
  return Boolean(process.env.SQUARE_ACCESS_TOKEN);
}

export async function getLoyaltyProgramId(): Promise<string | null> {
  const config = getSquareConfig();
  if (!config) return null;

  if (config.programId) {
    return config.programId;
  }

  const result = await squareFetch<{ program?: { id?: string } }>("/v2/loyalty/programs/main");
  return result.data?.program?.id ?? null;
}

type LoyaltyAccount = {
  id?: string;
  balance?: number;
  lifetime_points?: number;
};

export async function findLoyaltyAccountByPhone(
  phoneE164: string,
): Promise<LoyaltyAccount | null> {
  const result = await squareFetch<{ loyalty_accounts?: LoyaltyAccount[] }>(
    "/v2/loyalty/accounts/search",
    {
      method: "POST",
      body: {
        query: {
          mappings: [{ phone_number: phoneE164 }],
        },
      },
    },
  );

  return result.data?.loyalty_accounts?.[0] ?? null;
}

export function normalizeCanadianPostalCode(raw: string): string | null {
  const compact = raw.trim().toUpperCase().replace(/\s+/g, "");
  if (!/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(compact)) {
    return null;
  }

  return `${compact.slice(0, 3)} ${compact.slice(3)}`;
}

type SquareCustomer = {
  id?: string;
};

async function findCustomerByPhone(phoneE164: string): Promise<SquareCustomer | null> {
  const result = await squareFetch<{ customers?: SquareCustomer[] }>("/v2/customers/search", {
    method: "POST",
    body: {
      query: {
        filter: {
          phone_number: {
            exact: phoneE164,
          },
        },
      },
    },
  });

  return result.data?.customers?.[0] ?? null;
}

async function upsertSquareCustomer(input: {
  phoneE164: string;
  email: string;
  postalCode: string;
  givenName?: string;
  familyName?: string;
}): Promise<void> {
  const existing = await findCustomerByPhone(input.phoneE164);

  if (existing?.id) {
    await squareFetch(`/v2/customers/${existing.id}`, {
      method: "PUT",
      body: {
        given_name: input.givenName || undefined,
        family_name: input.familyName || undefined,
        phone_number: input.phoneE164,
        email_address: input.email,
        address: {
          postal_code: input.postalCode,
          country: "CA",
        },
      },
    });
    return;
  }

  await squareFetch("/v2/customers", {
    method: "POST",
    body: {
      idempotency_key: crypto.randomUUID(),
      given_name: input.givenName || undefined,
      family_name: input.familyName || undefined,
      phone_number: input.phoneE164,
      email_address: input.email,
      address: {
        postal_code: input.postalCode,
        country: "CA",
      },
    },
  });
}

export async function enrollLoyaltyAccount(input: {
  phoneE164: string;
  email: string;
  postalCode: string;
  givenName?: string;
  familyName?: string;
}): Promise<
  | { status: "enrolled"; balance: number }
  | { status: "already_enrolled"; balance: number }
  | { status: "error"; message: string }
> {
  if (!isSquareConfigured()) {
    return {
      status: "error",
      message:
        "Online enrollment is not set up yet. Ask staff to enroll you at the front desk on your next visit.",
    };
  }

  const existing = await findLoyaltyAccountByPhone(input.phoneE164);
  if (existing) {
    await upsertSquareCustomer(input);
    return {
      status: "already_enrolled",
      balance: existing.balance ?? 0,
    };
  }

  const programId = await getLoyaltyProgramId();
  if (!programId) {
    return {
      status: "error",
      message: "Could not find your Square loyalty program. Please enroll at the front desk.",
    };
  }

  await upsertSquareCustomer(input);

  const idempotencyKey = crypto.randomUUID();
  const result = await squareFetch<{ loyalty_account?: LoyaltyAccount }>(
    "/v2/loyalty/accounts",
    {
      method: "POST",
      body: {
        idempotency_key: idempotencyKey,
        loyalty_account: {
          program_id: programId,
          mapping: {
            phone_number: input.phoneE164,
          },
        },
      },
    },
  );

  if (!result.ok) {
    if (result.error?.toLowerCase().includes("already")) {
      const account = await findLoyaltyAccountByPhone(input.phoneE164);
      if (account) {
        return { status: "already_enrolled", balance: account.balance ?? 0 };
      }
    }

    return {
      status: "error",
      message: result.error ?? "Enrollment failed. Please try again or ask staff at the front desk.",
    };
  }

  return {
    status: "enrolled",
    balance: result.data?.loyalty_account?.balance ?? 0,
  };
}
