import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Quick Process Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e1c1b; color: white; padding: 24px 28px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700;">New Contact Form Submission</h1>
            <p style="margin: 6px 0 0; color: #00a99d; font-size: 14px;">Quick Process Website</p>
          </div>
          <div style="background: #f9f9f9; padding: 28px; border-radius: 0 0 12px 12px; border: 1px solid #e0e0e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-weight: 700; color: #1e1c1b; width: 28%; font-size: 14px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #333; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-weight: 700; color: #1e1c1b; font-size: 14px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 14px;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-weight: 700; color: #1e1c1b; font-size: 14px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #333; font-size: 14px;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 16px 0 0; font-weight: 700; color: #1e1c1b; vertical-align: top; font-size: 14px;">Message</td>
                <td style="padding: 16px 0 0; color: #333; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${message}</td>
              </tr>
            </table>
          </div>
          <p style="text-align: center; color: #aaa; font-size: 12px; margin-top: 16px;">This email was sent from the Quick Process contact form.</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
