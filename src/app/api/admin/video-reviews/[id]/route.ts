import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import connectToDatabase from "@/lib/mongodb";
import VideoReview from "@/models/VideoReview";
import { requireAdmin } from "@/lib/authorization";
import { deleteCloudinaryAsset } from "@/lib/cloudinary";
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
// 1. GET SINGLE VIDEO REVIEW (GET /api/admin/video-reviews/[id])
// ----------------------------------------------------------------------
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const adminOrResponse = await requireAdmin();
    if (adminOrResponse instanceof NextResponse) {
      return adminOrResponse;
    }

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: "Invalid review ID format." }, { status: 400 });
    }

    await connectToDatabase();
    const review = await VideoReview.findById(id).lean();

    if (!review) {
      return NextResponse.json({ success: false, error: "Video review not found." }, { status: 404 });
    }

    return NextResponse.json(
      {
        success: true,
        review: {
          id: review._id.toString(),
          customerName: review.customerName,
          companyName: review.companyName,
          designation: review.designation || "",
          videoUrl: review.videoUrl,
          thumbnailUrl: review.thumbnailUrl || "",
          videoPublicId: review.videoPublicId || "",
          thumbnailPublicId: review.thumbnailPublicId || "",
          reviewText: review.reviewText || "",
          displayOrder: review.displayOrder,
          isPublished: review.isPublished,
          createdAt: review.createdAt,
          updatedAt: review.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[GET /api/admin/video-reviews/[id] ERROR]", error);
    return NextResponse.json({ success: false, error: "An unexpected server error occurred." }, { status: 500 });
  }
}

// ----------------------------------------------------------------------
// 2. UPDATE VIDEO REVIEW (PATCH /api/admin/video-reviews/[id])
// ----------------------------------------------------------------------
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const adminOrResponse = await requireAdmin();
    if (adminOrResponse instanceof NextResponse) {
      return adminOrResponse;
    }

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: "Invalid review ID format." }, { status: 400 });
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ success: false, error: "Invalid or malformed JSON payload." }, { status: 400 });
    }

    await connectToDatabase();
    const review = await VideoReview.findById(id);

    if (!review) {
      return NextResponse.json({ success: false, error: "Video review not found." }, { status: 404 });
    }

    // Handle Cloudinary replacement cleanup if videoPublicId changed
    if (body.videoPublicId && body.videoPublicId !== review.videoPublicId) {
      if (review.videoPublicId) {
        await deleteCloudinaryAsset(review.videoPublicId, "video");
      }
      review.videoPublicId = sanitizeString(body.videoPublicId, 250);
    }

    if (body.thumbnailPublicId && body.thumbnailPublicId !== review.thumbnailPublicId) {
      if (review.thumbnailPublicId) {
        await deleteCloudinaryAsset(review.thumbnailPublicId, "image");
      }
      review.thumbnailPublicId = sanitizeString(body.thumbnailPublicId, 250);
    }

    if (body.customerName !== undefined) {
      const name = sanitizeString(body.customerName, 100);
      if (!name) {
        return NextResponse.json({ success: false, error: "Customer name cannot be empty." }, { status: 400 });
      }
      review.customerName = name;
    }

    if (body.companyName !== undefined) {
      const company = sanitizeString(body.companyName, 150);
      if (!company) {
        return NextResponse.json({ success: false, error: "Company name cannot be empty." }, { status: 400 });
      }
      review.companyName = company;
    }

    if (body.designation !== undefined) {
      review.designation = body.designation ? sanitizeString(body.designation, 100) : undefined;
    }

    if (body.videoUrl !== undefined) {
      const url = sanitizeString(body.videoUrl, 1000);
      if (!isValidUrl(url)) {
        return NextResponse.json({ success: false, error: "Valid video URL is required." }, { status: 400 });
      }
      review.videoUrl = url;
    }

    if (body.thumbnailUrl !== undefined) {
      const thumb = body.thumbnailUrl ? sanitizeString(body.thumbnailUrl, 1000) : undefined;
      if (thumb && !isValidUrl(thumb)) {
        return NextResponse.json({ success: false, error: "Thumbnail URL must be a valid URL string." }, { status: 400 });
      }
      review.thumbnailUrl = thumb;
    }

    if (body.reviewText !== undefined) {
      review.reviewText = body.reviewText ? sanitizeString(body.reviewText, 2000) : undefined;
    }

    if (typeof body.displayOrder === "number") {
      review.displayOrder = body.displayOrder;
    }

    if (typeof body.isPublished === "boolean") {
      review.isPublished = body.isPublished;
    }

    await review.save();

    return NextResponse.json(
      {
        success: true,
        message: "Video review updated successfully.",
        review: {
          id: review._id.toString(),
          customerName: review.customerName,
          companyName: review.companyName,
          designation: review.designation || "",
          videoUrl: review.videoUrl,
          thumbnailUrl: review.thumbnailUrl || "",
          videoPublicId: review.videoPublicId || "",
          thumbnailPublicId: review.thumbnailPublicId || "",
          reviewText: review.reviewText || "",
          displayOrder: review.displayOrder,
          isPublished: review.isPublished,
          createdAt: review.createdAt,
          updatedAt: review.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[PATCH /api/admin/video-reviews/[id] ERROR]", error);
    return NextResponse.json({ success: false, error: "An unexpected server error occurred." }, { status: 500 });
  }
}

// ----------------------------------------------------------------------
// 3. DELETE VIDEO REVIEW (DELETE /api/admin/video-reviews/[id])
// ----------------------------------------------------------------------
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const adminOrResponse = await requireAdmin();
    if (adminOrResponse instanceof NextResponse) {
      return adminOrResponse;
    }

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: "Invalid review ID format." }, { status: 400 });
    }

    await connectToDatabase();
    const review = await VideoReview.findById(id);

    if (!review) {
      return NextResponse.json({ success: false, error: "Video review not found." }, { status: 404 });
    }

    // Delete Cloudinary assets safely
    if (review.videoPublicId) {
      await deleteCloudinaryAsset(review.videoPublicId, "video");
    }
    if (review.thumbnailPublicId) {
      await deleteCloudinaryAsset(review.thumbnailPublicId, "image");
    }

    // Delete document from MongoDB
    await VideoReview.findByIdAndDelete(id);

    return NextResponse.json(
      {
        success: true,
        message: "Video review and associated Cloudinary assets deleted successfully.",
        id,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[DELETE /api/admin/video-reviews/[id] ERROR]", error);
    return NextResponse.json({ success: false, error: "An unexpected server error occurred." }, { status: 500 });
  }
}
