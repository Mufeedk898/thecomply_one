import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import PasswordResetOtp from "@/models/PasswordResetOTP";
import { sendPasswordResetOtpEmail } from "@/lib/email";
import { checkRateLimit, getClientIp, sanitizeString } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const body = await req.json().catch(() => ({}));
    const rawEmail = sanitizeString(body.email, 150);

    if (!rawEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid registered official email address.",
        },
        { status: 400 }
      );
    }

    const normalizedEmail = rawEmail.toLowerCase();

    // 1. IP-based Rate Limiting: Max 10 requests per 15 minutes
    const ipLimit = checkRateLimit(`ip_forgot_${ip}`, 10, 15 * 60 * 1000);
    if (!ipLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many password reset requests from this IP. Please try again in ${ipLimit.retryAfterSec} seconds.`,
        },
        { status: 429 }
      );
    }

    // 2. Email-based Rate Limiting: Max 3 requests per email per 15 minutes
    const emailLimit = checkRateLimit(
      `email_forgot_${normalizedEmail}`,
      3,
      15 * 60 * 1000
    );
    if (!emailLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many password reset attempts for this email. Please wait ${emailLimit.retryAfterSec} seconds before requesting a new code.`,
        },
        { status: 429 }
      );
    }

    await connectToDatabase();

    // 3. Find User
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "No account found with this email address. Please check the spelling or sign up.",
        },
        { status: 404 }
      );
    }

    // Invalidate existing OTP records for this email/user
    await PasswordResetOtp.deleteMany({ email: normalizedEmail });

    // Generate cryptographically secure 6-digit OTP
    const rawOtp = crypto.randomInt(100000, 999999).toString();
    const otpHash = await bcrypt.hash(rawOtp, 10);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

    // Save OTP record to dedicated Mongoose collection
    await PasswordResetOtp.create({
      userId: user._id,
      email: normalizedEmail,
      otpHash,
      expiresAt,
      attempts: 0,
      usedAt: null,
    });

    // Send OTP via Resend / SMTP email service
    const isSent = await sendPasswordResetOtpEmail({
      to: normalizedEmail,
      otp: rawOtp,
    });

    if (!isSent) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to deliver OTP to your email inbox. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "A 6-digit verification code has been sent to your email.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[FORGOT PASSWORD API ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method Not Allowed" },
    { status: 405 }
  );
}
