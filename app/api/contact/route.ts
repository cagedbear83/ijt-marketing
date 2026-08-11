// app/api/contact/route.ts
// Next.js server-side proxy — the browser posts here (same origin, no CORS),
// and this route forwards to the FastAPI backend server-to-server.

import { NextRequest, NextResponse } from "next/server";

const BACKEND = "https://illinois-ui-tracker-8wiwq.ondigitalocean.app/api/contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const backendRes = await fetch(BACKEND, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await backendRes.json().catch(() => ({}));

    if (!backendRes.ok) {
      return NextResponse.json(
        { detail: data?.detail || "Something went wrong." },
        { status: backendRes.status }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { detail: "Failed to reach the server. Please try again." },
      { status: 500 }
    );
  }
}