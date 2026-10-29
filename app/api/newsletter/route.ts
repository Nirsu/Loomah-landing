// Keep browser requests on the landing origin, including local previews.
export async function POST(request: Request): Promise<Response> {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Valid email is required" }, { status: 400 });
  }

  const apiUrl = (
    process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || ""
  ).replace(/\/$/, "");
  if (!apiUrl) {
    return Response.json({ error: "Newsletter is unavailable" }, { status: 503 });
  }

  try {
    const response = await fetch(`${apiUrl}/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, locale: body.locale === "fr" ? "fr" : "en" }),
      signal: AbortSignal.timeout(12000),
      cache: "no-store",
    });
    const result = await response.json();
    // Never acknowledge a subscription unless the backend confirms persistence.
    if (response.ok && ["Subscribed", "Already subscribed"].includes(result?.message)) {
      return Response.json({ message: result.message }, { status: response.status });
    }
    return Response.json(
      { error: "Newsletter subscription failed" },
      { status: response.status === 400 ? 400 : 502 },
    );
  } catch {
    return Response.json({ error: "Newsletter is unavailable" }, { status: 503 });
  }
}
