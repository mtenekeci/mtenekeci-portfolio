import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
  }

  if (!process.env.CONTACT_TO_EMAIL) {
    console.error("[contact] CONTACT_TO_EMAIL is not set");
    return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <portfolio@tenekeci.ch>",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    console.log("[contact] Email sent:", data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
