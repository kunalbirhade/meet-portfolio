import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();
    if (!email || !message)
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    if (!gmailUser || !gmailPass) {
      console.error("Missing GMAIL_USER or GMAIL_PASS in environment");
      return NextResponse.json(
        { error: "Email not configured" },
        { status: 503 },
      );
    }

    // GMAIL_PASS must be a Gmail App Password (16 chars), not your normal password or OAuth client secret
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    const htmlText = `
      <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      font-family: Arial, Helvetica, sans-serif;
    "
  >
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="background-color: #f4f4f4; padding: 20px 0"
    >
      <tr>
        <td align="center">
          <table
            width="700"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="background: #ffffff; border-radius: 6px; overflow: hidden"
          >
            <!-- Header Images -->
            <tr>
              <td>
                <img
                  src="https://www.meet-works.com/email_header.png"
                  width="100%"
                  style="display: block"
                  alt="Header Image"
                />
              </td>
            </tr>

            <!-- Body Content -->
            <tr>
              <td
                style="
                  padding: 30px;
                  color: #333333;
                  font-size: 15px;
                  line-height: 1.6;
                "
              >
                <p>Dear ${email},</p>
                <p>
                  Thank you for reaching me out. I truly appreciate you taking
                  the time to connect. Whether you're exploring options,
                  gathering information, or ready to begin a project, I’m glad
                  you got in touch.
                </p>
                <p>
                  I’ve received your message and will personally review it to
                  understand the context and what you're looking to explore. My
                  work typically centres around understanding how teams operate,
                  how users behave, and what organisations need to function
                  effectively, so the solutions we discuss are grounded in
                  reality rather than theory.
                </p>
                <p>
                  <strong
                    >Core competencies & domain experience include:</strong
                  >
                </p>
                <ul style="padding-left: 20px; margin-top: 10px">
                  <li>Fintech product research</li>
                  <li>Management consultancy</li>
                  <li>Logistics platforms</li>
                  <li>Product exploration</li>
                  <li>Branding strategy</li>
                  <li>Construction management solutions</li>
                  <li>Real estate project oversight</li>
                  <li>Architecture Design / 3D Environments</li>
                </ul>
                <p>
                  I’m less focused on fitting work into strict labels and more
                  interested in outcomes, improving processes, aligning teams,
                  and building solutions that hold up in real-world conditions.
                </p>
                <p>
                  If your request is time sensitive or you'd prefer to speak
                  directly, please don’t hesitate to contact me.
                </p>
                <p style="font-size:15px;line-height:1.6;padding:0 32px;">
                  📍 <a href="https://maps.app.goo.gl/VjD7y8TJTBMkSRK26" target="_blank" style="color:#2f4f4f;text-decoration:none;">Berlin, Germany</a><br/>
                  📞 <a href="tel:+4915252861912" style="color:#2f4f4f;text-decoration:none;">+49 1525 2861912</a><br/>
                  💬 <a href="https://wa.me/4915252861912" target="_blank" style="color:#2f4f4f;text-decoration:none;">WhatsApp available</a>
                </p>
                <p>
                  Thank you once again for your interest and trust. I look
                  forward to the opportunity to connect and assist with your
                  project.
                </p>

                <p style="margin-top: 25px">
                  Warm regards,<br />
                  <strong>Meet Panchal</strong>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                align="center"
                style="
                  padding: 20px;
                  font-size: 12px;
                  color: #888888;
                  background: #fafafa;
                "
              >
                © ${new Date().getFullYear()} meetpanchal. All rights reserved.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
    `;

    // send email to admin
    await transporter.sendMail({
      from: `"Meet Panchal" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Enquiry from ${email}`,
      html: `
      <h3>We have received new enquiry via website</h3>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `,
    });

    // confirmation to user
    await transporter.sendMail({
      from: `"Meet Panchal" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out to Meet Panchal`,
      html: htmlText,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error(err);
    const message =
      err &&
      typeof err === "object" &&
      "code" in err &&
      (err as { code?: string }).code === "EAUTH"
        ? "Invalid Gmail credentials. Use a Gmail App Password (see .env.local)."
        : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
