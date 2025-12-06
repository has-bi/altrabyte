import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  MAIL_FROM = "no-reply@altrabyte.com",
  MAIL_TO = "hassadiqin.31@gmail.com",
} = process.env;

const transporter =
  SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      })
    : null;

export async function POST(request) {
  if (!transporter) {
    return new Response(
      JSON.stringify({ error: "Email transport not configured" }),
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    // Basic honeypot / timing guard
    if (body.honeypot && body.honeypot.trim() !== "") {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const {
      companyName,
      industry,
      companySize,
      yourRole,
      fullName,
      emailAddress,
      countryCode,
      phoneNumber,
      preferredContactMethod,
      dataStorage,
      reportingTime,
      dataFrustration,
      advancedAnalytics,
      drivingProject,
      expectedTimeline,
      auditTiming,
    } = body;

    if (!fullName || !emailAddress) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }

    const mailText = `
New Foundation Audit Request

Contact
- Name: ${fullName || "-"}
- Email: ${emailAddress || "-"}
- Phone: ${countryCode || ""} ${phoneNumber || "-"}
- Preferred contact: ${preferredContactMethod || "-"}

Company
- Name: ${companyName || "-"}
- Industry: ${industry || "-"}
- Size: ${companySize || "-"}
- Role: ${yourRole || "-"}

Current State
- Data storage: ${Array.isArray(dataStorage) ? dataStorage.join(", ") : dataStorage || "-"}
- Reporting time: ${reportingTime || "-"}
- Data frustration: ${dataFrustration || "-"}

What They're Looking For
- Advanced analytics: ${advancedAnalytics || "-"}
- Driving project: ${drivingProject || "-"}
- Expected timeline: ${expectedTimeline || "-"}
- Preferred audit timing: ${auditTiming || "-"}
`;

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: emailAddress || MAIL_FROM,
      subject: "New Foundation Audit Request",
      text: mailText,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(JSON.stringify({ error: "Failed to send" }), {
      status: 500,
    });
  }
}
