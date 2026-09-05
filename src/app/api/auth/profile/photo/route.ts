import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/authorization";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

const ALLOWED_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const MAX_FILE_SIZE_BYTES = 1 * 1024 * 1024; // 1 MB limit

// ----------------------------------------------------------------------
// 1. GET PROFILE PHOTO (GET /api/auth/profile/photo)
// ----------------------------------------------------------------------
export async function GET() {
  try {
    const sessionUser = await getCurrentUser();
    if (!sessionUser) {
      return NextResponse.json(
        { success: false, error: "Authentication required. Please sign in." },
        { status: 401 }
      );
    }

    await connectToDatabase();
    const user = await User.findById(sessionUser.id).select("profilePhoto");

    return NextResponse.json(
      {
        success: true,
        profilePhoto: user?.profilePhoto || null,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[GET PROFILE PHOTO ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve profile photo." },
      { status: 500 }
    );
  }
}

// ----------------------------------------------------------------------
// 2. UPLOAD / UPDATE PROFILE PHOTO (POST /api/auth/profile/photo)
// ----------------------------------------------------------------------
export async function POST(req: NextRequest) {
  try {
    const clientIp = getClientIp(req);
    const rateCheck = checkRateLimit(`photo_upload_${clientIp}`, 10, 15 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { success: false, error: `Too many upload attempts. Please try again in ${rateCheck.retryAfterSec} seconds.` },
        { status: 429 }
      );
    }

    const sessionUser = await getCurrentUser();
    if (!sessionUser) {
      return NextResponse.json(
        { success: false, error: "Authentication required. Please sign in." },
        { status: 401 }
      );
    }

    let mimeType = "";
    let base64Data = "";
    let fileSize = 0;

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const file = formData.get("file") as File | null;

      if (!file) {
        return NextResponse.json(
          { success: false, error: "No image file provided in upload request." },
          { status: 400 }
        );
      }

      mimeType = file.type;
      fileSize = file.size;

      if (fileSize > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { success: false, error: "Image file size exceeds the 1 MB limit." },
          { status: 400 }
        );
      }

      if (!ALLOWED_MIME_TYPES.includes(mimeType.toLowerCase())) {
        return NextResponse.json(
          { success: false, error: "Invalid image format. Only JPG, JPEG, PNG, and WEBP files are allowed." },
          { status: 400 }
        );
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      base64Data = `data:${mimeType};base64,${buffer.toString("base64")}`;
    } else {
      // JSON Base64 Payload
      let body;
      try {
        body = await req.json();
      } catch {
        return NextResponse.json(
          { success: false, error: "Invalid or malformed JSON payload." },
          { status: 400 }
        );
      }

      const photoString = body.photo || body.base64 || body.image;
      if (!photoString || typeof photoString !== "string") {
        return NextResponse.json(
          { success: false, error: "No valid image data provided." },
          { status: 400 }
        );
      }

      // Check header format: data:image/png;base64,...
      const match = photoString.match(/^data:(image\/(?:jpeg|jpg|png|webp));base64,(.+)$/i);
      if (!match) {
        return NextResponse.json(
          { success: false, error: "Invalid image format. Only JPG, JPEG, PNG, and WEBP images are supported." },
          { status: 400 }
        );
      }

      mimeType = match[1].toLowerCase();
      const rawBase64 = match[2];
      fileSize = Math.ceil((rawBase64.length * 3) / 4);

      if (fileSize > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { success: false, error: "Image file size exceeds the 1 MB limit." },
          { status: 400 }
        );
      }

      base64Data = photoString;
    }

    await connectToDatabase();
    const user = await User.findById(sessionUser.id);
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User account not found." },
        { status: 404 }
      );
    }

    user.profilePhoto = base64Data;
    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Profile photo updated successfully.",
        profilePhoto: user.profilePhoto,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[POST PROFILE PHOTO ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred while uploading profile photo." },
      { status: 500 }
    );
  }
}

// ----------------------------------------------------------------------
// 3. DELETE / REMOVE PROFILE PHOTO (DELETE /api/auth/profile/photo)
// ----------------------------------------------------------------------
export async function DELETE() {
  try {
    const sessionUser = await getCurrentUser();
    if (!sessionUser) {
      return NextResponse.json(
        { success: false, error: "Authentication required. Please sign in." },
        { status: 401 }
      );
    }

    await connectToDatabase();
    const user = await User.findById(sessionUser.id);
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User account not found." },
        { status: 404 }
      );
    }

    user.profilePhoto = undefined;
    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Profile photo removed successfully.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[DELETE PROFILE PHOTO ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to remove profile photo." },
      { status: 500 }
    );
  }
}
