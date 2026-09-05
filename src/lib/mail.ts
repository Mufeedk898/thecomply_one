import { Resend } from "resend";

export interface SendOtpResult {
  success: boolean;
  messageId?: string;
  isDevLogged?: boolean;
  error?: string;
}

/**
 * Sends a 6-digit OTP email using Resend
 */
export async function sendOtpEmail(toEmail: string, otp: string): Promise<SendOtpResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey.trim() === "" || apiKey.includes("your_api_key")) {
    return {
      success: false,
      error: "RESEND_API_KEY is not configured in .env.local",
    };
  }

  const fromAddress =
    process.env.EMAIL_FROM || "The Comply One <noreply@thecomplyone.com>";

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset OTP</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f8fafc;
      color: #0f172a;
      margin: 0;
      padding: 24px;
    }
    .email-container {
      max-width: 520px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 16px;
      padding: 36px 32px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
    }
    .brand {
      text-align: center;
      margin-bottom: 24px;
    }
    .brand h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 800;
      color: #1d4ed8;
      letter-spacing: 0.5px;
    }
    .brand p {
      margin: 4px 0 0;
      font-size: 11px;
      color: #64748b;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .content-box {
      text-align: center;
      padding: 12px 0 24px;
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 8px;
    }
    .description {
      font-size: 14px;
      color: #475569;
      line-height: 1.5;
      margin: 0 0 24px;
    }
    .otp-card {
      background: #eff6ff;
      border: 2px dashed #93c5fd;
      border-radius: 12px;
      padding: 20px;
      margin: 20px 0;
      display: inline-block;
      width: 80%;
    }
    .otp-code {
      font-size: 36px;
      font-weight: 800;
      letter-spacing: 8px;
      color: #1d4ed8;
      font-family: 'Courier New', Courier, monospace;
      margin: 0;
    }
    .badge {
      display: inline-block;
      margin-top: 8px;
      font-size: 12px;
      color: #1e40af;
      font-weight: 600;
    }
    .warning-box {
      background: #f1f5f9;
      border-radius: 8px;
      padding: 12px 16px;
      font-size: 12px;
      color: #64748b;
      margin: 24px 0 12px;
      line-height: 1.5;
      text-align: left;
    }
    .footer {
      border-top: 1px solid #f1f5f9;
      padding-top: 20px;
      text-align: center;
      font-size: 11px;
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="brand">
      <h1>THE COMPLY ONE</h1>
      <p>Corporate Compliance & Legal Services</p>
    </div>

    <div class="content-box">
      <h2 class="title">Password Reset Verification Code</h2>
      <p class="description">
        We received a request to reset the password for your Comply One account (<strong>${toEmail}</strong>). Use the verification code below to proceed:
      </p>

      <div class="otp-card">
        <div class="otp-code">${otp}</div>
        <div class="badge">⏱️ Valid for 10 minutes only</div>
      </div>

      <div class="warning-box">
        <strong>Security Notice:</strong> Never share this OTP with anyone. The Comply One team will never ask for your verification code. If you did not initiate this request, you can safely disregard this email.
      </div>
    </div>

    <div class="footer">
      &copy; ${new Date().getFullYear()} The Comply One. All rights reserved.<br>
      Automated system message. Please do not reply directly to this email.
    </div>
  </div>
</body>
</html>
  `;

  const textContent = `
The Comply One - Password Reset

Your 6-digit password reset code is: ${otp}

This code is valid for 10 minutes only.

If you did not request this password reset, please ignore this email.
  `.trim();

  try {
    const resend = new Resend(apiKey.trim());
    const response = await resend.emails.send({
      from: fromAddress,
      to: [toEmail],
      subject: `[${otp}] Your Comply One Password Reset Code`,
      text: textContent,
      html: htmlContent,
    });

    if (response.error) {
      console.error("Resend API error:", response.error.message);
      return {
        success: false,
        error: response.error.message,
      };
    }

    return {
      success: true,
      messageId: response.data?.id,
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email via Resend";
    console.error("Resend delivery error:", errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}
