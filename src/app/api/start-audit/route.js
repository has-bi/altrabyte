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

const SIGNATURE_TEXT = `Best Regards,
Brandy | Founder & CEO
ALTRABYTE DATA SOLUTIONS
w: www.altrabyte.com
p: +6281111862011`;

const SIGNATURE_HTML = `
<table cellpadding="0" cellspacing="0" style="border-spacing:0px;border-collapse:collapse;color:#444;width:525px;font-size:11pt;font-family:Verdana,sans-serif;background:transparent!important">
  <tbody>
    <tr>
      <td width="125" valign="top" rowspan="6" style="padding:0 10px 0 0;font-size:10pt;border-right:1px solid rgb(120,99,252);width:125px;vertical-align:top">
        <a href="https://www.altrabyte.com/" style="color:inherit;text-decoration:none" target="_blank" rel="noreferrer">
          <img
            src="https://www.altrabyte.com/images/Logogram%20-%20Purple.png"
            alt="AltraByte Logo"
            width="105"
            style="border:0;width:105px;height:auto;display:block"
          />
        </a>
      </td>
      <td style="padding:0">
        <table cellpadding="0" cellspacing="0" style="border-spacing:0px;border-collapse:collapse;background:transparent!important;width:100%">
          <tbody>
            <tr>
              <td style="padding:0 0 5px 10px;font-size:10pt;color:rgb(0,121,172);vertical-align:top">
                <span style="font-size:11pt;color:rgb(120,99,252);font-weight:700">Brandy</span>
                <span style="font-size:11pt;color:#122232"><b> | </b><i>Founder &amp; CEO</i></span>
              </td>
            </tr>
            <tr>
              <td style="padding:5px 0 5px 10px;font-size:10pt;line-height:17px">
                <span style="font-size:10pt;color:#122232;font-weight:700">ALTRABYTE DATA SOLUTIONS</span><br/>
                <span style="color:rgb(120,99,252);font-weight:700">w:</span>
                <a href="https://www.altrabyte.com/" style="color:#122232;text-decoration:none" target="_blank" rel="noreferrer">www.altrabyte.com</a><br/>
                <span style="color:rgb(120,99,252);font-weight:700">p:</span>
                <a href="https://wa.me/628781006688?text=Hi%20AltraByte%2C%20I%20have%20an%20interesting%20challenge%20I%27d%20love%20your%20help%20with" target="_blank" rel="noreferrer" style="color:#122232;text-decoration:none">+6281111862011</a>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
`;

const buildThankYouHtml = (greeting) => `
<!DOCTYPE html>
<html lang="en">
  <body style="font-family:'Plus Jakarta Sans', Arial, sans-serif; color:#0F172A; line-height:1.6; font-size:15px; margin:0; padding:0; background:#F8F8FC;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 0;">
      <tr>
        <td align="center">
          <table width="520" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;padding:32px;border:1px solid #EEE;">
            <tr>
              <td>
                <p style="margin:0 0 16px 0;">${greeting}</p>
                <p style="margin:0 0 16px 0;">
                  Thanks for requesting the Foundation Audit. We’ll reach out within 24 hours to lock in the 90-minute session.
                </p>
                <p style="margin:0 0 12px 0; font-weight:600;">Ahead of the call, you can reply with:</p>
                <ul style="padding-left:18px; margin:0 0 16px 0; color:#0F172A;">
                  <li>Any dashboards/KPI packs we should review</li>
                  <li>Your current stack or architecture diagram</li>
                  <li>The outcomes you need to prove to leadership</li>
                </ul>
                <p style="margin:0 0 24px 0;">Talk soon,<br/>Team AltraByte</p>
                ${SIGNATURE_HTML}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

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

    if (emailAddress) {
      const greeting = fullName ? `Hi ${fullName.split(" ")[0]},` : "Hi there,";
      const thankYouText = `
${greeting}

Thanks for requesting the Foundation Audit. We’ll reach out within 24 hours to lock in the 90-minute session.

Ahead of the call, feel free to reply with:
- Any key dashboards or KPI packs we should review
- Your current stack/architecture diagram (if available)
- The outcomes you need to prove to leadership

Talk soon,
Team AltraByte

${SIGNATURE_TEXT}
`;
      const thankYouHtml = buildThankYouHtml(greeting);

      await transporter.sendMail({
        from: MAIL_FROM,
        to: emailAddress,
        subject: "Thanks for booking your Foundation Audit",
        text: thankYouText,
        html: thankYouHtml,
      });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(JSON.stringify({ error: "Failed to send" }), {
      status: 500,
    });
  }
}
