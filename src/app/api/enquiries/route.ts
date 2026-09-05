import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Enquiry, { EnquiryStatus } from "@/models/Enquiry";
import { getCurrentUser } from "@/lib/authorization";
import { triggerEnquiryNotifications } from "@/lib/email";
import { forwardToFormspree } from "@/lib/formspree";
import { checkRateLimit, getClientIp, sanitizeString } from "@/lib/rateLimit";
import mongoose from "mongoose";

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

// ----------------------------------------------------------------------
// 1. PUBLIC LEAD INGESTION (POST /api/enquiries)
// ----------------------------------------------------------------------
export async function POST(req: NextRequest) {
  try {
    // Rate Limiting: max 10 lead submissions per 15 minutes per IP
    const clientIp = getClientIp(req);
    const rateCheck = checkRateLimit(`enquiry_${clientIp}`, 10, 15 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { success: false, error: `Too many submission requests. Please try again in ${rateCheck.retryAfterSec} seconds.` },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid or malformed JSON payload." },
        { status: 400 }
      );
    }

    const source = sanitizeString(body.source || "WEBSITE_FORM", 50);

    // Field alias normalization & strict length limits
    const fullName = sanitizeString(body.fullName || body.name || body.yourName, 100);
    const rawMobile = sanitizeString(body.mobileNumber || body.phone || body.mobile || body.yourMobile, 30).replace(/\D/g, "");
    const mobileNumber = rawMobile.slice(-10);

    const emailInput = body.email || body.yourEmail;
    const email = emailInput ? sanitizeString(emailInput, 120).toLowerCase() : undefined;

    const serviceInput = body.service || body.serviceTitle || body.selectedService || body.serviceRequired;
    const service = serviceInput ? sanitizeString(serviceInput, 150) : undefined;

    const messageInput = body.message || body.requirements;
    const message = messageInput ? sanitizeString(messageInput, 2000) : undefined;

    const subject = body.subject ? sanitizeString(body.subject, 150) : undefined;

    // Email format validation if supplied
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    let referralData = undefined;

    // Handle Referral Form specific normalization
    if (source === "REFERRAL_FORM" || body.referralName || body.referralMobile) {
      const referrerName = sanitizeString(body.yourName || body.fullName, 100);
      const rawReferrerMobile = sanitizeString(body.yourMobile || body.mobileNumber, 30).replace(/\D/g, "");
      const referrerMobile = rawReferrerMobile.slice(-10);
      const referrerEmailInput = body.yourEmail || body.email;
      const referrerEmail = referrerEmailInput ? sanitizeString(referrerEmailInput, 120).toLowerCase() : undefined;

      const referredName = sanitizeString(body.referralName || fullName, 100);
      const rawReferredMobile = sanitizeString(body.referralMobile, 30).replace(/\D/g, "");
      const referredMobile = rawReferredMobile.slice(-10);
      const referredEmail = body.referralEmail ? sanitizeString(body.referralEmail, 120).toLowerCase() : undefined;
      const serviceRequired = sanitizeString(body.serviceRequired || service, 150);

      // Referral validation
      if (!referrerName || !INDIAN_MOBILE_REGEX.test(referrerMobile)) {
        return NextResponse.json(
          { success: false, error: "Please enter your valid name and 10-digit mobile number as referrer." },
          { status: 400 }
        );
      }

      if (!referredName || !INDIAN_MOBILE_REGEX.test(referredMobile)) {
        return NextResponse.json(
          { success: false, error: "Please enter the referred person's valid name and 10-digit mobile number." },
          { status: 400 }
        );
      }

      referralData = {
        referrerName,
        referrerMobile,
        referrerEmail,
        referredName,
        referredMobile,
        referredEmail,
        serviceRequired,
      };

      await connectToDatabase();
      const currentUser = await getCurrentUser();

      const enquiry = await Enquiry.create({
        fullName: referredName,
        mobileNumber: referredMobile,
        email: referredEmail || email,
        service: serviceRequired || service,
        message,
        subject,
        source: "REFERRAL_FORM",
        status: "NEW", // ALWAYS force status to NEW on public creation
        assignedCAManager: null,
        referral: referralData,
        ...(currentUser ? { user: currentUser.id } : {}),
      });

      // Trigger email notifications non-blockingly (never interrupts response or DB record)
      triggerEnquiryNotifications({
        fullName: enquiry.fullName,
        mobileNumber: enquiry.mobileNumber,
        email: enquiry.email,
        service: enquiry.service,
        message: enquiry.message,
        subject: enquiry.subject,
        source: enquiry.source,
        referral: enquiry.referral,
        createdAt: enquiry.createdAt,
      });

      // Forward to Formspree non-blockingly
      forwardToFormspree({
        formType: "Referral Form",
        referrerName: referralData.referrerName,
        referrerMobile: referralData.referrerMobile,
        referrerEmail: referralData.referrerEmail || "N/A",
        referredName: referralData.referredName,
        referredMobile: referralData.referredMobile,
        referredEmail: referralData.referredEmail || "N/A",
        serviceRequired: referralData.serviceRequired,
        message: enquiry.message || "",
        source: enquiry.source,
        submittedAt: enquiry.createdAt ? new Date(enquiry.createdAt).toISOString() : new Date().toISOString(),
      }).catch((err) => console.error("[FORMSPREE FORWARD ERROR]", err));

      return NextResponse.json(
        {
          success: true,
          message: "Thank you for your referral! Our client onboarding team will reach out to them shortly.",
          enquiry: {
            id: enquiry._id.toString(),
            fullName: enquiry.fullName,
            mobileNumber: enquiry.mobileNumber,
            email: enquiry.email,
            service: enquiry.service,
            message: enquiry.message,
            subject: enquiry.subject,
            status: enquiry.status,
            source: enquiry.source,
            referral: enquiry.referral,
            createdAt: enquiry.createdAt,
          },
        },
        { status: 201 }
      );
    }

    // Standard Enquiry Validation
    if (!fullName) {
      return NextResponse.json(
        { success: false, error: "Full legal name is required." },
        { status: 400 }
      );
    }

    if (!INDIAN_MOBILE_REGEX.test(mobileNumber)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Create normalized enquiry document
    const enquiry = await Enquiry.create({
      fullName,
      mobileNumber,
      email,
      service,
      message,
      subject,
      source,
      status: "NEW", // ALWAYS force status to NEW on public creation
      assignedCAManager: null,
    });

    // Trigger email notifications non-blockingly (never interrupts response or DB record)
    triggerEnquiryNotifications({
      fullName: enquiry.fullName,
      mobileNumber: enquiry.mobileNumber,
      email: enquiry.email,
      service: enquiry.service,
      message: enquiry.message,
      subject: enquiry.subject,
      source: enquiry.source,
      createdAt: enquiry.createdAt,
    });

    // Forward to Formspree non-blockingly
    forwardToFormspree({
      formType: enquiry.source || "Website Enquiry",
      fullName: enquiry.fullName,
      mobileNumber: enquiry.mobileNumber,
      email: enquiry.email || "Not Provided",
      service: enquiry.service || "General Inquiry",
      subject: enquiry.subject || "Enquiry",
      message: enquiry.message || "No message provided",
      source: enquiry.source,
      submittedAt: enquiry.createdAt ? new Date(enquiry.createdAt).toISOString() : new Date().toISOString(),
    }).catch((err) => console.error("[FORMSPREE FORWARD ERROR]", err));

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your enquiry has been received. Our team will contact you shortly.",
        enquiry: {
          id: enquiry._id.toString(),
          fullName: enquiry.fullName,
          mobileNumber: enquiry.mobileNumber,
          email: enquiry.email,
          service: enquiry.service,
          message: enquiry.message,
          subject: enquiry.subject,
          status: enquiry.status,
          source: enquiry.source,
          createdAt: enquiry.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[POST /api/enquiries ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred while submitting your request." },
      { status: 500 }
    );
  }
}

// ----------------------------------------------------------------------
// 2. PROTECTED ADMIN / CA LIST API (GET /api/enquiries)
// ----------------------------------------------------------------------
export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUser();

    // Auth verification: Unauthenticated -> 401
    if (!user) {
      return NextResponse.json(
        { success: false, error: "Authentication required. Please sign in." },
        { status: 401 }
      );
    }

    // Role verification: CLIENT -> 403
    if (user.role !== "ADMIN" && user.role !== "CA_MANAGER") {
      return NextResponse.json(
        { success: false, error: "Access denied. Admin or CA Manager privileges required." },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const statusParam = searchParams.get("status");
    const sourceParam = searchParams.get("source");
    const searchParam = searchParams.get("search");
    const assignedToParam = searchParams.get("assignedTo");
    const pageParam = parseInt(searchParams.get("page") || "1", 10);
    const limitParam = parseInt(searchParams.get("limit") || "20", 10);

    const page = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
    const limit = isNaN(limitParam) || limitParam < 1 ? 20 : Math.min(limitParam, 100);
    const skip = (page - 1) * limit;

    const filterQuery: Record<string, unknown> = {};

    // Validate status filter if provided
    if (statusParam) {
      const allowedStatuses: EnquiryStatus[] = ["NEW", "CONTACTED", "IN_PROGRESS", "CONVERTED", "CLOSED"];
      if (!allowedStatuses.includes(statusParam as EnquiryStatus)) {
        return NextResponse.json(
          { success: false, error: "Invalid status filter value." },
          { status: 400 }
        );
      }
      filterQuery.status = statusParam;
    }

    if (sourceParam) {
      filterQuery.source = sanitizeString(sourceParam, 50);
    }

    if (assignedToParam && mongoose.Types.ObjectId.isValid(assignedToParam)) {
      filterQuery.assignedCAManager = new mongoose.Types.ObjectId(assignedToParam);
    }

    if (searchParam) {
      const sanitizedSearch = sanitizeString(searchParam, 100);
      const searchRegex = new RegExp(sanitizedSearch, "i");
      filterQuery.$or = [
        { fullName: searchRegex },
        { mobileNumber: searchRegex },
        { email: searchRegex },
        { service: searchRegex },
      ];
    }

    // Role-based visibility scoping: CA_MANAGER sees assigned enquiries
    if (user.role === "CA_MANAGER") {
      filterQuery.assignedCAManager = new mongoose.Types.ObjectId(user.id);
    }

    await connectToDatabase();

    const [enquiries, total] = await Promise.all([
      Enquiry.find(filterQuery)
        .populate("assignedCAManager", "fullName email mobileNumber role")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Enquiry.countDocuments(filterQuery),
    ]);

    const totalPages = Math.ceil(total / limit) || 1;

    const formattedEnquiries = enquiries.map((enq) => ({
      id: enq._id.toString(),
      fullName: enq.fullName,
      mobileNumber: enq.mobileNumber,
      email: enq.email,
      service: enq.service,
      message: enq.message,
      subject: enq.subject,
      source: enq.source,
      status: enq.status,
      assignedCAManager: enq.assignedCAManager || null,
      referral: enq.referral || null,
      createdAt: enq.createdAt,
      updatedAt: enq.updatedAt,
    }));

    return NextResponse.json(
      {
        success: true,
        enquiries: formattedEnquiries,
        pagination: {
          page,
          limit,
          total,
          totalPages,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[GET /api/enquiries ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred while retrieving enquiries." },
      { status: 500 }
    );
  }
}
