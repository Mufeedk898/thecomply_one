import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import User from "@/models/User";
import VideoReview from "@/models/VideoReview";
import { requireAdmin } from "@/lib/authorization";

export async function GET() {
  try {
    const adminOrResponse = await requireAdmin();
    if (adminOrResponse instanceof NextResponse) {
      return adminOrResponse; // Returns 401 or 403
    }

    await connectToDatabase();

    // Perform efficient parallel counting with countDocuments
    const [
      totalEnquiries,
      newEnquiries,
      contactedEnquiries,
      inProgressEnquiries,
      convertedEnquiries,
      closedEnquiries,
      totalClients,
      totalVideoReviews,
      publishedVideoReviews,
      recentEnquiries,
    ] = await Promise.all([
      Enquiry.countDocuments(),
      Enquiry.countDocuments({ status: "NEW" }),
      Enquiry.countDocuments({ status: "CONTACTED" }),
      Enquiry.countDocuments({ status: "IN_PROGRESS" }),
      Enquiry.countDocuments({ status: "CONVERTED" }),
      Enquiry.countDocuments({ status: "CLOSED" }),
      User.countDocuments({ role: "CLIENT" }),
      VideoReview.countDocuments(),
      VideoReview.countDocuments({ isPublished: true }),
      Enquiry.find()
        .populate("assignedCAManager", "fullName email mobileNumber role")
        .sort({ createdAt: -1 })
        .limit(10)
        .lean(),
    ]);

    const formattedRecentEnquiries = recentEnquiries.map((enq) => ({
      id: enq._id.toString(),
      fullName: enq.fullName,
      mobileNumber: enq.mobileNumber,
      email: enq.email,
      service: enq.service,
      source: enq.source,
      status: enq.status,
      assignedCAManager: enq.assignedCAManager || null,
      createdAt: enq.createdAt,
    }));

    return NextResponse.json(
      {
        success: true,
        stats: {
          totalEnquiries,
          newEnquiries,
          contactedEnquiries,
          inProgressEnquiries,
          convertedEnquiries,
          closedEnquiries,
          totalClients,
          totalVideoReviews,
          publishedVideoReviews,
        },
        recentEnquiries: formattedRecentEnquiries,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[ADMIN GET /api/admin/dashboard ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred while retrieving dashboard statistics." },
      { status: 500 }
    );
  }
}
