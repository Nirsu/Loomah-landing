import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      lang?: string;
      company?: string;
    };

    if (body.company) {
      return NextResponse.json({ ok: true });
    }

    const email = body.email?.trim().toLowerCase();
    if (!email || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const segmentId = process.env.RESEND_WAITLIST_SEGMENT_ID;

    if (!apiKey) {
      console.error("Waitlist contact service is not configured.");
      return NextResponse.json(
        { error: "Waitlist unavailable" },
        { status: 503 },
      );
    }

    const response = await fetch("https://api.resend.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
        ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
      }),
    });

    if (response.status === 409) {
      return NextResponse.json({ ok: true });
    }

    if (!response.ok) {
      console.error("Resend rejected waitlist contact.", await response.text());
      return NextResponse.json(
        { error: "Contact creation failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
