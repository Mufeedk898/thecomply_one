import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import VideoReview from "@/models/VideoReview";
import { requireAdmin } from "@/lib/authorization";
import { sanitizeString } from "@/lib/rateLimit";

function isValidUrl(urlStr: string): boolean {
  if (!urlStr) return false;
  if (urlStr.startsWith("/") || urlStr.startsWith("data:")) return true;
  try {
    const parsed = new URL(urlStr);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

// ----------------------------------------------------------------------
// 1. ADMIN LIST VIDEO REVIEWS (GET /api/admin/video-reviews)
// ----------------------------------------------------------------------
export async function GET(req: NextRequest) {
  try {
    const adminOrResponse = await requireAdmin();
    if (adminOrResponse instanceof NextResponse) {
      return adminOrResponse; // Returns 401 or 403
    }

    const { searchParams } = new URL(req.url);
    const isPublishedParam = searchParams.get("isPublished");

    const filter: Record<string, unknown> = {};
    if (isPublishedParam !== null && isPublishedParam !== undefined) {
      filter.isPublished = isPublishedParam === "true";
    }

    await connectToDatabase();
    const reviews = await VideoReview.find(filter)
      .sort({ displayOrder: 1, createdAt: -1 })
      .lean();

    const formattedReviews = reviews.map((rev) => ({
      id: rev._id.toString(),
      customerName: rev.customerName,
      companyName: rev.companyName,
      designation: rev.designation || "",
      videoUrl: rev.videoUrl,
      thumbnailUrl: rev.thumbnailUrl || "",
      reviewText: rev.reviewText || "",
      displayOrder: rev.displayOrder,
      isPublished: rev.isPublished,
      createdAt: rev.createdAt,
      updatedAt: rev.updatedAt,
    }));

    return NextResponse.json(
      {
        success: true,
        count: formattedReviews.length,
        reviews: formattedReviews,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[ADMIN GET /api/admin/video-reviews ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}

// ----------------------------------------------------------------------
// 2. ADMIN CREATE VIDEO REVIEW (POST /api/admin/video-reviews)
// ----------------------------------------------------------------------
export async function POST(req: NextRequest) {
  try {
    const adminOrResponse = await requireAdmin();
    if (adminOrResponse instanceof NextResponse) {
      return adminOrResponse; // Returns 401 or 403
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ success: false, error: "Invalid or malformed JSON payload." }, { status: 400 });
    }

    // Input sanitization & validation
    const customerName = sanitizeString(body.customerName, 100);
    const companyName = sanitizeString(body.companyName, 150);
    const designation = body.designation ? sanitizeString(body.designation, 100) : undefined;
    const videoUrl = sanitizeString(body.videoUrl, 1000);
    const thumbnailUrl = body.thumbnailUrl ? sanitizeString(body.thumbnailUrl, 1000) : undefined;
    const reviewText = body.reviewText ? sanitizeString(body.reviewText, 2000) : undefined;
    
    const displayOrder = typeof body.displayOrder === "number" ? body.displayOrder : 0;
    const isPublished = typeof body.isPublished === "boolean" ? body.isPublished : true;

    if (!customerName) {
      return NextResponse.json({ success: false, error: "Customer name is required (max 100 characters)." }, { status: 400 });
    }

    if (!companyName) {
      return NextResponse.json({ success: false, error: "Company name is required (max 150 characters)." }, { status: 400 });
    }

    if (!videoUrl || !isValidUrl(videoUrl)) {
      return NextResponse.json({ success: false, error: "A valid video URL is required." }, { status: 400 });
    }

    if (thumbnailUrl && !isValidUrl(thumbnailUrl)) {
      return NextResponse.json({ success: false, error: "Thumbnail URL must be a valid URL string." }, { status: 400 });
    }

    await connectToDatabase();

    const review = await VideoReview.create({
      customerName,
      companyName,
      designation,
      videoUrl,
      thumbnailUrl,
      reviewText,
      displayOrder,
      isPublished,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Video review created successfully.",
        review: {
          id: review._id.toString(),
          customerName: review.customerName,
          companyName: review.companyName,
          designation: review.designation || "",
          videoUrl: review.videoUrl,
          thumbnailUrl: review.thumbnailUrl || "",
          reviewText: review.reviewText || "",
          displayOrder: review.displayOrder,
          isPublished: review.isPublished,
          createdAt: review.createdAt,
          updatedAt: review.updatedAt,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[ADMIN POST /api/admin/video-reviews ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred while creating video review." },
      { status: 500 }
    );
  }
}
