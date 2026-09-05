/**
 * SMS Provider Abstraction for The Comply One
 * Handles SMS OTP dispatches for Forgot Password flow.
 */

export async function sendSmsOtp(mobileNumber: string, otpCode: string): Promise<boolean> {
  const isMockMode = process.env.SMS_MOCK_MODE !== "false" || process.env.NODE_ENV !== "production";

  // Clean 10-digit mobile number format
  const sanitizedMobile = mobileNumber.replace(/\D/g, "").slice(-10);

  if (isMockMode) {
    // In local development/mock mode, print to server logs for developer testing
    if (process.env.NODE_ENV !== "production") {
      console.log(`[DEV SMS MOCK] SMS OTP sent to +91 ${sanitizedMobile}: [OTP: ${otpCode}] (Valid for 5 mins)`);
    }
    return true;
  }

  // Production SMS Gateway Integration (e.g. MSG91 / Fast2SMS / Twilio)
  try {
    const apiKey = process.env.SMS_PROVIDER_API_KEY;
    const senderId = process.env.SMS_PROVIDER_SENDER_ID || "COMPLY";

    if (!apiKey) {
      console.error(`[SMS ERROR] SMS_PROVIDER_API_KEY is not configured for senderId ${senderId}.`);
      return false;
    }

    // Example SMS Gateway API call placeholder:
    // await fetch("https://api.sms-provider.com/v1/send", { ... });

    return true;
  } catch (error) {
    console.error("[SMS ERROR] Failed to dispatch SMS OTP:", error);
    return false;
  }
}
