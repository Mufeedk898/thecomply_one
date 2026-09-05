import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import { checkRateLimit, getClientIp, sanitizeString } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  try {
    // Rate Limiting: max 5 signup attempts per 15 mins per IP
    const clientIp = getClientIp(req);
    const rateCheck = checkRateLimit(`signup_${clientIp}`, 5, 15 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { success: false, error: `Too many signup attempts. Please try again in ${rateCheck.retryAfterSec} seconds.` },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ success: false, error: "Invalid or malformed JSON payload." }, { status: 400 });
    }

    // Input Sanitization & Max Length Constraints
    const fullName = sanitizeString(body.fullName, 100);
    const email = sanitizeString(body.email, 120).toLowerCase();
    const rawMobile = sanitizeString(body.mobileNumber || body.phone, 20).replace(/\D/g, "");
    const password = sanitizeString(body.password, 100);

    // Validation
    if (!fullName) {
      return NextResponse.json({ success: false, error: "Full legal name is required." }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid work email address." }, { status: 400 });
    }

    const mobileNumber = rawMobile.slice(-10);
    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    if (!password || password.length < 6) {
      return NextResponse.json({ success: false, error: "Password must be at least 6 characters long." }, { status: 400 });
    }

    await connectToDatabase();

    // Check duplicate email
    const existingEmailUser = await User.findOne({ email });
    if (existingEmailUser) {
      return NextResponse.json(
        { success: false, error: "An account with this email address already exists. Please sign in." },
        { status: 400 }
      );
    }

    // Check duplicate mobile
    const existingMobileUser = await User.findOne({ mobileNumber });
    if (existingMobileUser) {
      return NextResponse.json(
        { success: false, error: "An account with this mobile number already exists." },
        { status: 400 }
      );
    }

    // Hash password with bcryptjs (cost factor 10)
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      passwordHash,
      role: "CLIENT",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully.",
        user: {
          id: newUser._id.toString(),
          fullName: newUser.fullName,
          email: newUser.email,
          mobileNumber: newUser.mobileNumber,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[SIGNUP API ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred during account creation." },
      { status: 500 }
    );
  }
}

// Method Enforcement
export async function GET() {
  return NextResponse.json({ success: false, error: "Method Not Allowed. Use POST." }, { status: 405 });
}
