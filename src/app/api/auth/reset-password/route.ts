import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import PasswordResetOtp from "@/models/PasswordResetOTP";
import { checkRateLimit, getClientIp, sanitizeString } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const body = await req.json().catch(() => ({}));

    const rawEmail = sanitizeString(body.email, 150);
    const rawOtp = sanitizeString(body.otp, 10);
    const password = String(body.password || "");
    const confirmPassword = String(body.confirmPassword || "");

    // 1. IP Rate Limit: Max 15 attempts per 15 minutes
    const ipLimit = checkRateLimit(`ip_reset_${ip}`, 15, 15 * 60 * 1000);
    if (!ipLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many password reset attempts. Please try again in ${ipLimit.retryAfterSec} seconds.`,
        },
        { status: 429 }
      );
    }

    // 2. Input Validations
    if (!rawEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid official email address.",
        },
        { status: 400 }
      );
    }

    const cleanOtp = rawOtp.replace(/\D/g, "");
    if (!cleanOtp || cleanOtp.length !== 6) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid 6-digit verification OTP code.",
        },
        { status: 400 }
      );
    }

    if (!password || password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          error: "Password must be at least 6 characters long.",
        },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          error: "Passwords do not match. Please verify.",
        },
        { status: 400 }
      );
    }

    const normalizedEmail = rawEmail.toLowerCase();
    await connectToDatabase();

    // 3. Atomically find and increment attempts on active, unexpired, unused OTP record
    const otpRecord = await PasswordResetOtp.findOneAndUpdate(
      {
        email: normalizedEmail,
        usedAt: null,
        expiresAt: { $gt: new Date() },
        attempts: { $lt: 5 },
      },
      { $inc: { attempts: 1 } },
      { new: true, sort: { createdAt: -1 } }
    );

    if (!otpRecord) {
      // Check if record was locked out due to max attempts
      const lockedRecord = await PasswordResetOtp.findOne({
        email: normalizedEmail,
        usedAt: null,
        attempts: { $gte: 5 },
      });

      if (lockedRecord) {
        await PasswordResetOtp.deleteMany({ email: normalizedEmail });
        return NextResponse.json(
          {
            success: false,
            error:
              "Maximum verification attempts exceeded. Please request a new verification code.",
          },
          { status: 400 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          error: "Invalid or expired verification code. Please request a new code.",
        },
        { status: 400 }
      );
    }

    // 4. Compare typed OTP against stored bcrypt hash
    const isValidOtp = await bcrypt.compare(cleanOtp, otpRecord.otpHash);
    if (!isValidOtp) {
      // If 5th attempt failed, immediately purge record to prevent re-tries
      if (otpRecord.attempts >= 5) {
        await PasswordResetOtp.deleteMany({ email: normalizedEmail });
        return NextResponse.json(
          {
            success: false,
            error:
              "Maximum verification attempts exceeded. Please request a new verification code.",
          },
          { status: 400 }
        );
      }

      const remaining = 5 - otpRecord.attempts;
      return NextResponse.json(
        {
          success: false,
          error: `Invalid verification code.${
            remaining > 0 ? ` ${remaining} attempt(s) remaining.` : ""
          }`,
        },
        { status: 400 }
      );
    }

    // 5. ATOMIC OTP CLAIMING: Claim record before updating password
    const claimedRecord = await PasswordResetOtp.findOneAndUpdate(
      {
        _id: otpRecord._id,
        usedAt: null,
      },
      {
        $set: { usedAt: new Date() },
      },
      { new: true }
    );

    if (!claimedRecord) {
      // Race condition safeguard: another request claimed this exact record
      return NextResponse.json(
        {
          success: false,
          error: "Verification code has already been used. Please request a new code.",
        },
        { status: 400 }
      );
    }

    // 6. Find User and update password hash
    const user = await User.findById(otpRecord.userId);
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "User account not found. Please register or contact support.",
        },
        { status: 400 }
      );
    }

    // Hash new password using bcryptjs (salt 10)
    const newPasswordHash = await bcrypt.hash(password, 10);
    user.passwordHash = newPasswordHash;
    await user.save();

    // Clean up remaining OTPs for this account
    await PasswordResetOtp.deleteMany({ email: normalizedEmail });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your password has been reset successfully. Please sign in with your new password.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[RESET PASSWORD API ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while resetting your password.",
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
