import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import VideoReview from "@/models/VideoReview";

// ----------------------------------------------------------------------
// PUBLIC LIST VIDEO REVIEWS API (GET /api/video-reviews)
// ----------------------------------------------------------------------
export async function GET() {
  try {
    await connectToDatabase();

    // Fetch published reviews only, sorted by displayOrder ascending, then createdAt descending
    const reviews = await VideoReview.find({ isPublished: true })
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
    console.error("[GET /api/video-reviews ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred while retrieving video reviews." },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json({ success: false, error: "Method Not Allowed. Use Admin API for creation." }, { status: 405 });
}
