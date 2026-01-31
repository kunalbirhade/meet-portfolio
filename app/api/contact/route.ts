import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message)
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Contact form: ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    // confirmation to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Thanks for contacting BIMACME`,
      text: `Hi ${name},\n\nThanks for reaching out to BIMACME. We will contact you within 2 business days.`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
