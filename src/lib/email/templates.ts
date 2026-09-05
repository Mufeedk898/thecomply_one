export interface EmailTemplateData {
  fullName: string;
  mobileNumber: string;
  email?: string;
  service?: string;
  message?: string;
  subject?: string;
  source: string;
  referral?: {
    referrerName?: string;
    referrerMobile?: string;
    referrerEmail?: string;
    referredName?: string;
    referredMobile?: string;
    referredEmail?: string;
    serviceRequired?: string;
  };
  createdAt?: Date | string;
}

/**
 * Escapes user-provided strings to prevent HTML injection in emails
 */
function escapeHtml(str: string | undefined | null): string {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * 1. Client Confirmation Email Template (HTML & Text)
 */
export function getClientConfirmationTemplate(data: EmailTemplateData) {
  const safeName = escapeHtml(data.fullName);
  const safeService = escapeHtml(data.service || "Business Advisory & Statutory Services");
  const safeMessage = escapeHtml(data.message);
  const safeMobile = escapeHtml(data.mobileNumber);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 0; }
          .container { max-width: 580px; margin: 20px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background-color: #1e3a8a; padding: 24px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
          .content { padding: 32px 24px; font-size: 14px; line-height: 1.6; }
          .badge { display: inline-block; padding: 4px 12px; background-color: #eff6ff; color: #1d4ed8; font-weight: 700; border-radius: 9999px; font-size: 11px; text-transform: uppercase; margin-bottom: 16px; }
          .details-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin: 20px 0; }
          .details-box p { margin: 6px 0; font-size: 13px; }
          .footer { background-color: #f1f5f9; padding: 20px 24px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
          .contact-link { color: #2563eb; text-decoration: none; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>THE COMPLY ONE</h1>
          </div>
          <div class="content">
            <span class="badge">Enquiry Received</span>
            <h2>Thank you, ${safeName}!</h2>
            <p>We have received your enquiry for <strong>${safeService}</strong>. Our senior Chartered Accountants and compliance advisors are reviewing your details and will call you back shortly.</p>
            
            <div class="details-box">
              <p><strong>Service Requested:</strong> ${safeService}</p>
              ${safeMessage ? `<p><strong>Your Message/Details:</strong> "${safeMessage}"</p>` : ""}
              <p><strong>Mobile Number:</strong> ${safeMobile}</p>
            </div>

            <p>If you have urgent questions, feel free to email us directly at <a href="mailto:info@thecomplyone.com" class="contact-link">info@thecomplyone.com</a> or call <strong>+91 8369500194</strong>.</p>
            
            <p style="margin-top: 24px; color: #475569;">Warm regards,<br /><strong>Team The Comply One</strong><br />India's Trusted Statutory Compliance Advisory</p>
          </div>
          <div class="footer">
            <p>Office no 4 DPK COMPOUND BH LUCKY HOTEL, KHAIRANI ROAD SAKINAKA ANDHERI EAST-400072</p>
            <p>© ${new Date().getFullYear()} The Comply One. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
Thank you, ${data.fullName}!

We have received your enquiry for ${data.service || "Business Advisory & Statutory Services"} at The Comply One.
Our senior Chartered Accountants and compliance advisors will contact you shortly at ${data.mobileNumber}.

Details Submitted:
- Service: ${data.service || "Business Advisory & Statutory Services"}
${data.message ? `- Message: ${data.message}` : ""}
- Mobile: ${data.mobileNumber}

Direct Contact: info@thecomplyone.com | +91 8369500194
Office Address: Office no 4 DPK COMPOUND BH LUCKY HOTEL, KHAIRANI ROAD SAKINAKA ANDHERI EAST-400072

Regards,
Team The Comply One
  `.trim();

  return {
    subject: `We received your enquiry — The Comply One`,
    html,
    text,
  };
}

/**
 * 2. Internal Admin Notification Email Template (HTML & Text)
 */
export function getAdminNotificationTemplate(data: EmailTemplateData) {
  const safeName = escapeHtml(data.fullName);
  const safeMobile = escapeHtml(data.mobileNumber);
  const safeEmail = escapeHtml(data.email);
  const safeService = escapeHtml(data.service || data.subject || "General Business Enquiry");
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message);
  const safeSource = escapeHtml(data.source);
  const dateStr = data.createdAt ? new Date(data.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) : new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const isReferral = data.source === "REFERRAL_FORM" && data.referral;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background-color: #0f172a; padding: 20px 24px; color: #ffffff; display: flex; align-items: center; justify-content: space-between; }
          .header h2 { margin: 0; font-size: 18px; font-weight: 800; }
          .content { padding: 28px 24px; font-size: 14px; line-height: 1.6; }
          .source-tag { display: inline-block; padding: 4px 10px; background-color: #dbeafe; color: #1e40af; font-weight: 700; border-radius: 6px; font-size: 11px; text-transform: uppercase; margin-bottom: 16px; }
          .field-group { margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; }
          .field-label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; letter-spacing: 0.5px; }
          .field-value { font-size: 14px; color: #0f172a; font-weight: 600; margin-top: 2px; }
          .referral-box { background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: 12px; padding: 16px; margin: 16px 0; }
          .referral-box h4 { margin: 0 0 10px 0; color: #92400e; font-size: 13px; text-transform: uppercase; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>NEW WEBSITE LEAD</h2>
          </div>
          <div class="content">
            <span class="source-tag">Source: ${safeSource}</span>

            <div class="field-group">
              <div class="field-label">Full Name</div>
              <div class="field-value">${safeName}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Mobile Number</div>
              <div class="field-value"><a href="tel:+91${safeMobile}" style="color: #2563eb;">+91 ${safeMobile}</a></div>
            </div>

            <div class="field-group">
              <div class="field-label">Email Address</div>
              <div class="field-value">${safeEmail || "Not Provided"}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Service Required</div>
              <div class="field-value">${safeService}</div>
            </div>

            ${safeSubject ? `
            <div class="field-group">
              <div class="field-label">Subject</div>
              <div class="field-value">${safeSubject}</div>
            </div>` : ""}

            ${safeMessage ? `
            <div class="field-group">
              <div class="field-label">Message / Requirement Details</div>
              <div class="field-value" style="font-weight: 400; color: #334155;">"${safeMessage}"</div>
            </div>` : ""}

            ${isReferral ? `
            <div class="referral-box">
              <h4>Partner Referral Information</h4>
              <p style="margin: 4px 0;"><strong>Referrer Name:</strong> ${escapeHtml(data.referral?.referrerName) || "N/A"}</p>
              <p style="margin: 4px 0;"><strong>Referrer Mobile:</strong> +91 ${escapeHtml(data.referral?.referrerMobile) || "N/A"}</p>
              <p style="margin: 4px 0;"><strong>Referrer Email:</strong> ${escapeHtml(data.referral?.referrerEmail) || "N/A"}</p>
              <hr style="border: 0; border-top: 1px dashed #fcd34d; margin: 10px 0;" />
              <p style="margin: 4px 0;"><strong>Referred Lead Name:</strong> ${escapeHtml(data.referral?.referredName) || "N/A"}</p>
              <p style="margin: 4px 0;"><strong>Referred Lead Mobile:</strong> +91 ${escapeHtml(data.referral?.referredMobile) || "N/A"}</p>
              <p style="margin: 4px 0;"><strong>Referred Lead Email:</strong> ${escapeHtml(data.referral?.referredEmail) || "N/A"}</p>
            </div>` : ""}

            <div class="field-group" style="border: 0;">
              <div class="field-label">Timestamp (IST)</div>
              <div class="field-value" style="font-size: 12px; color: #64748b;">${dateStr}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
NEW WEBSITE LEAD RECEIVED
Source: ${data.source}
Time: ${dateStr}

Lead Details:
- Name: ${data.fullName}
- Mobile: +91 ${data.mobileNumber}
- Email: ${data.email || "N/A"}
- Service: ${data.service || data.subject || "General Business Enquiry"}
${data.subject ? `- Subject: ${data.subject}` : ""}
${data.message ? `- Message: ${data.message}` : ""}

${isReferral ? `
Partner Referral Details:
- Referrer: ${data.referral?.referrerName} (+91 ${data.referral?.referrerMobile}, ${data.referral?.referrerEmail || "N/A"})
- Referred Person: ${data.referral?.referredName} (+91 ${data.referral?.referredMobile}, ${data.referral?.referredEmail || "N/A"})
` : ""}
  `.trim();

  return {
    subject: `New Lead: ${data.fullName} — ${data.service || data.subject || "General Enquiry"} (${data.source})`,
    html,
    text,
  };
}

/**
 * 3. Password Reset Email OTP Template (HTML & Text)
 */
export function getResetPasswordOtpTemplate(otp: string) {
  const safeOtp = escapeHtml(otp);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 0; }
          .container { max-width: 540px; margin: 24px auto; background-color: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
          .header { background-color: #1e3a8a; padding: 28px 24px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
          .header p { margin: 4px 0 0 0; font-size: 12px; color: #93c5fd; font-weight: 500; }
          .content { padding: 32px 28px; font-size: 14px; line-height: 1.6; text-align: center; }
          .badge { display: inline-block; padding: 5px 14px; background-color: #eff6ff; color: #1d4ed8; font-weight: 700; border-radius: 9999px; font-size: 11px; text-transform: uppercase; margin-bottom: 16px; border: 1px solid #bfdbfe; }
          .otp-box { background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 2px dashed #3b82f6; border-radius: 16px; padding: 20px; margin: 24px 0; text-align: center; }
          .otp-code { font-family: 'Courier New', Courier, monospace; font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #1e3a8a; margin: 0; }
          .notice-box { background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: 12px; padding: 14px; margin-top: 24px; font-size: 12px; color: #92400e; text-align: left; }
          .footer { background-color: #f8fafc; padding: 20px 24px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>THE COMPLY ONE</h1>
            <p>India's Premium Statutory Compliance Platform</p>
          </div>
          <div class="content">
            <span class="badge">Password Reset Code</span>
            <h2 style="margin: 0 0 8px 0; font-size: 20px; color: #0f172a;">Verification Code Requested</h2>
            <p style="margin: 0; color: #475569; font-size: 13px;">Use the 6-digit verification code below to set a new password for your account.</p>
            
            <div class="otp-box">
              <p class="otp-code">${safeOtp}</p>
            </div>

            <p style="font-size: 12px; color: #64748b; margin: 0;">⏱️ This verification code is valid for <strong>10 minutes</strong> only.</p>

            <div class="notice-box">
              <strong>🔒 Security Notice:</strong> If you did not request a password reset for your THE COMPLY ONE account, you can safely ignore this email. Your password will remain unchanged.
            </div>
          </div>
          <div class="footer">
            <p>Office no 4 DPK COMPOUND BH LUCKY HOTEL, KHAIRANI ROAD SAKINAKA ANDHERI EAST-400072</p>
            <p>© ${new Date().getFullYear()} THE COMPLY ONE. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
Your THE COMPLY ONE password reset OTP: ${otp}

Use the 6-digit code above to complete your password reset request.
This code is valid for 10 minutes.

If you did not request this password reset, please ignore this email. Your account remains secure.

Regards,
Team THE COMPLY ONE
info@thecomplyone.com | +91 8369500194
  `.trim();

  return {
    subject: "Your THE COMPLY ONE password reset OTP",
    html,
    text,
  };
}

