import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Enquiry, { EnquiryStatus } from "@/models/Enquiry";
import User from "@/models/User";
import { getCurrentUser } from "@/lib/authorization";
import mongoose from "mongoose";

const ALLOWED_STATUSES: EnquiryStatus[] = ["NEW", "CONTACTED", "IN_PROGRESS", "CONVERTED", "CLOSED"];

// ----------------------------------------------------------------------
// 1. GET SINGLE ENQUIRY DETAILS (GET /api/enquiries/[id])
// ----------------------------------------------------------------------
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Authentication required. Please sign in." },
        { status: 401 }
      );
    }

    if (user.role !== "ADMIN" && user.role !== "CA_MANAGER") {
      return NextResponse.json(
        { success: false, error: "Access denied. Admin or CA Manager privileges required." },
        { status: 403 }
      );
    }

    const { id } = await params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid enquiry ID format." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const enq = await Enquiry.findById(id)
      .populate("assignedCAManager", "fullName email mobileNumber role")
      .lean();

    if (!enq) {
      return NextResponse.json(
        { success: false, error: "Enquiry not found." },
        { status: 404 }
      );
    }

    // Role-based authorization: CA Manager can only view assigned enquiries
    if (user.role === "CA_MANAGER") {
      const assignedId = enq.assignedCAManager
        ? typeof enq.assignedCAManager === "object" && "_id" in enq.assignedCAManager
          ? (enq.assignedCAManager as { _id: mongoose.Types.ObjectId })._id.toString()
          : (enq.assignedCAManager as mongoose.Types.ObjectId).toString()
        : null;

      if (assignedId !== user.id) {
        return NextResponse.json(
          { success: false, error: "Access denied. You can only access enquiries assigned to you." },
          { status: 403 }
        );
      }
    }

    const formattedEnquiry = {
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
    };

    return NextResponse.json(
      {
        success: true,
        enquiry: formattedEnquiry,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[GET /api/enquiries/[id] ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}

// ----------------------------------------------------------------------
// 2. UPDATE ENQUIRY STATUS / ASSIGNMENT (PATCH /api/enquiries/[id])
// ----------------------------------------------------------------------
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Authentication required. Please sign in." },
        { status: 401 }
      );
    }

    if (user.role !== "ADMIN" && user.role !== "CA_MANAGER") {
      return NextResponse.json(
        { success: false, error: "Access denied. Admin or CA Manager privileges required." },
        { status: 403 }
      );
    }

    const { id } = await params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid enquiry ID format." },
        { status: 400 }
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

    await connectToDatabase();
    const enq = await Enquiry.findById(id);

    if (!enq) {
      return NextResponse.json(
        { success: false, error: "Enquiry not found." },
        { status: 404 }
      );
    }

    // Role-based authorization for CA_MANAGER
    if (user.role === "CA_MANAGER") {
      // CA_MANAGER cannot alter assignment
      if ("assignedCAManager" in body) {
        return NextResponse.json(
          { success: false, error: "Forbidden. Only ADMIN can assign or reassign CA Managers." },
          { status: 403 }
        );
      }

      // CA_MANAGER can only update status of their assigned enquiries
      if (!enq.assignedCAManager || enq.assignedCAManager.toString() !== user.id) {
        return NextResponse.json(
          { success: false, error: "Forbidden. You can only update enquiries assigned to you." },
          { status: 403 }
        );
      }
    }

    const updatePayload: Record<string, unknown> = {};

    // 1. Status Update Validation
    if (body.status !== undefined) {
      if (!ALLOWED_STATUSES.includes(body.status as EnquiryStatus)) {
        return NextResponse.json(
          { success: false, error: `Invalid status value. Allowed: ${ALLOWED_STATUSES.join(", ")}` },
          { status: 400 }
        );
      }
      updatePayload.status = body.status;
    }

    // 2. CA Manager Assignment Validation (ADMIN Only)
    if (user.role === "ADMIN" && body.assignedCAManager !== undefined) {
      if (body.assignedCAManager === null || body.assignedCAManager === "") {
        updatePayload.assignedCAManager = null;
      } else {
        if (!mongoose.Types.ObjectId.isValid(body.assignedCAManager)) {
          return NextResponse.json(
            { success: false, error: "Invalid CA Manager user ID format." },
            { status: 400 }
          );
        }

        const caUser = await User.findById(body.assignedCAManager);
        if (!caUser) {
          return NextResponse.json(
            { success: false, error: "Target CA Manager user not found." },
            { status: 404 }
          );
        }

        if (caUser.role !== "CA_MANAGER" && caUser.role !== "ADMIN") {
          return NextResponse.json(
            { success: false, error: "Target user must have CA_MANAGER or ADMIN role." },
            { status: 400 }
          );
        }

        updatePayload.assignedCAManager = caUser._id;
      }
    }

    if (Object.keys(updatePayload).length === 0) {
      return NextResponse.json(
        { success: false, error: "No valid fields provided for update." },
        { status: 400 }
      );
    }

    const updatedEnquiry = await Enquiry.findByIdAndUpdate(
      id,
      { $set: updatePayload },
      { new: true, runValidators: true }
    ).populate("assignedCAManager", "fullName email mobileNumber role");

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry updated successfully.",
        enquiry: {
          id: updatedEnquiry!._id.toString(),
          fullName: updatedEnquiry!.fullName,
          mobileNumber: updatedEnquiry!.mobileNumber,
          email: updatedEnquiry!.email,
          service: updatedEnquiry!.service,
          message: updatedEnquiry!.message,
          subject: updatedEnquiry!.subject,
          source: updatedEnquiry!.source,
          status: updatedEnquiry!.status,
          assignedCAManager: updatedEnquiry!.assignedCAManager || null,
          referral: updatedEnquiry!.referral || null,
          createdAt: updatedEnquiry!.createdAt,
          updatedAt: updatedEnquiry!.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[PATCH /api/enquiries/[id] ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred while updating enquiry." },
      { status: 500 }
    );
  }
}
