import nodemailer from "nodemailer";
import {
  EmailTemplateData,
  getClientConfirmationTemplate,
  getAdminNotificationTemplate,
  getResetPasswordOtpTemplate,
} from "./templates";

export interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
  text: string;
}

// Singleton Nodemailer Transporter instance
let transporterInstance: nodemailer.Transporter | null = null;

function getSmtpTransporter(): nodemailer.Transporter | null {
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass || smtpUser.includes("your-email@gmail.com")) {
    return null;
  }

  if (!transporterInstance) {
    transporterInstance = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
  }

  return transporterInstance;
}

/**
 * Sends a transactional email using Nodemailer SMTP, Resend, or SendGrid REST API.
 * Never throws an error out to caller; returns boolean success indicator.
 */
export async function sendEmail({ to, subject, html, text }: SendMailOptions): Promise<boolean> {
  const defaultFrom = process.env.EMAIL_FROM || '"THE COMPLY ONE" <info@thecomplyone.com>';

  // 1. Try Nodemailer SMTP Transporter if configured
  const transporter = getSmtpTransporter();
  if (transporter) {
    try {
      await transporter.sendMail({
        from: defaultFrom,
        to,
        subject,
        html,
        text,
      });
      return true;
    } catch {
      console.error("[NODEMAILER SMTP ERROR] Redacted diagnostic failure sending email.");
    }
  }

  // 2. Try Resend API if RESEND_API_KEY is configured
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey && resendApiKey !== "your_resend_api_key_here") {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);
      const fromConfig = process.env.EMAIL_FROM || "The Comply One <noreply@thecomplyone.com>";
      const fromAddress = fromConfig.includes("<") && fromConfig.includes(">")
        ? fromConfig
        : `The Comply One <${fromConfig}>`;

      const { data, error } = await resend.emails.send({
        from: fromAddress,
        to: [to],
        subject: subject,
        html: html,
        text: text,
      });

      if (!error && data?.id) {
        console.log(`[RESEND EMAIL SUCCESS] Email delivered to ${to} with ID: ${data.id}`);
        return true;
      }
      console.error("[RESEND EMAIL ERROR]", error);
    } catch (err: unknown) {
      console.error("[RESEND EMAIL EXCEPTION]", err);
    }
  }

  // 3. Try SendGrid API if SENDGRID_API_KEY is configured
  const sendgridApiKey = process.env.SENDGRID_API_KEY;
  if (sendgridApiKey) {
    try {
      const fromEmail = process.env.EMAIL_FROM || "info@thecomplyone.com";
      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${sendgridApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: to }],
            },
          ],
          from: {
            email: fromEmail,
            name: "The Comply One Advisory",
          },
          subject: subject,
          content: [
            {
              type: "text/plain",
              value: text,
            },
            {
              type: "text/html",
              value: html,
            },
          ],
        }),
      });

      if (response.ok || response.status === 202) {
        return true;
      }

      console.error(`[SENDGRID EMAIL ERROR] HTTP ${response.status}`);
    } catch (error: unknown) {
      console.error("[SENDGRID EMAIL ERROR] Network error:", error);
    }
  }

  console.warn(`[EMAIL NOTICE] No email provider successfully sent message to ${to}. Subject: "${subject}"`);
  return false;
}

/**
 * Trigger Non-Blocking Enquiry Emails (Client Confirmation & Admin Notification)
 * Runs asynchronously after MongoDB document is created.
 */
export async function triggerEnquiryNotifications(data: EmailTemplateData): Promise<void> {
  try {
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "info@thecomplyone.com";

    // 1. Send Internal Admin Notification Email
    const adminTemplate = getAdminNotificationTemplate(data);
    await sendEmail({
      to: adminEmail,
      subject: adminTemplate.subject,
      html: adminTemplate.html,
      text: adminTemplate.text,
    });

    // 2. Send Client Confirmation Email (Only if valid client email supplied)
    if (data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      const clientTemplate = getClientConfirmationTemplate(data);
      await sendEmail({
        to: data.email,
        subject: clientTemplate.subject,
        html: clientTemplate.html,
        text: clientTemplate.text,
      });
    }
  } catch (error: unknown) {
    // Non-blocking catch safeguard: guarantee MongoDB enquiry response is NEVER interrupted
    console.error("[EMAIL NOTIFICATION ASYNC ERROR]", error);
  }
}

/**
 * Sends Password Reset OTP Email through available transactional provider (SMTP or Resend).
 */
export async function sendPasswordResetOtpEmail({
  to,
  otp,
}: {
  to: string;
  otp: string;
}): Promise<boolean> {
  try {
    const template = getResetPasswordOtpTemplate(otp);
    return await sendEmail({
      to,
      subject: template.subject,
      html: template.html,
      text: template.text,
    });
  } catch (error: unknown) {
    console.error("[PASSWORD RESET OTP EMAIL EXCEPTION]", error);
    return false;
  }
}

