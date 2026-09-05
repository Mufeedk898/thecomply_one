import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/authorization";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

const ALLOWED_VIDEO_MIME_TYPES = [
  "video/mp4",
  "video/webm",
  "video/quicktime", // mov
  "video/x-msvideo", // avi
  "video/x-matroska", // mkv
];

const ALLOWED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const MAX_VIDEO_SIZE_BYTES = 100 * 1024 * 1024; // 100 MB
const MAX_IMAGE_SIZE_BYTES = 10 * 1024 * 1024;  // 10 MB

export async function POST(req: NextRequest) {
  try {
    const adminOrResponse = await requireAdmin();
    if (adminOrResponse instanceof NextResponse) {
      return adminOrResponse; // Returns 401 or 403
    }

    const clientIp = getClientIp(req);
    const rateCheck = checkRateLimit(`video_upload_${clientIp}`, 15, 15 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { success: false, error: `Too many upload requests. Please try again in ${rateCheck.retryAfterSec} seconds.` },
        { status: 429 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const uploadType = (formData.get("uploadType") as string) || "video";

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No media file provided for upload." },
        { status: 400 }
      );
    }

    const mimeType = file.type.toLowerCase();
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    if (uploadType === "video") {
      if (!ALLOWED_VIDEO_MIME_TYPES.includes(mimeType) && !mimeType.startsWith("video/")) {
        return NextResponse.json(
          { success: false, error: "Invalid video format. Supported formats: MP4, WebM, MOV, AVI, MKV." },
          { status: 400 }
        );
      }

      if (file.size > MAX_VIDEO_SIZE_BYTES) {
        return NextResponse.json(
          { success: false, error: "Video file size exceeds the maximum 100 MB limit." },
          { status: 400 }
        );
      }

      const result = await uploadToCloudinary(buffer, {
        folder: "the-comply-one/video-reviews",
        resource_type: "video",
      });

      return NextResponse.json(
        {
          success: true,
          videoUrl: result.secure_url,
          publicId: result.public_id,
          resourceType: "video",
        },
        { status: 200 }
      );
    } else {
      // Thumbnail image upload
      if (!ALLOWED_IMAGE_MIME_TYPES.includes(mimeType) && !mimeType.startsWith("image/")) {
        return NextResponse.json(
          { success: false, error: "Invalid image format. Supported formats: JPG, PNG, WEBP." },
          { status: 400 }
        );
      }

      if (file.size > MAX_IMAGE_SIZE_BYTES) {
        return NextResponse.json(
          { success: false, error: "Thumbnail image size exceeds the maximum 10 MB limit." },
          { status: 400 }
        );
      }

      const result = await uploadToCloudinary(buffer, {
        folder: "the-comply-one/video-review-thumbnails",
        resource_type: "image",
      });

      return NextResponse.json(
        {
          success: true,
          thumbnailUrl: result.secure_url,
          publicId: result.public_id,
          resourceType: "image",
        },
        { status: 200 }
      );
    }
  } catch (error: unknown) {
    console.error("[ADMIN VIDEO UPLOAD API ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred during asset upload." },
      { status: 500 }
    );
  }
}
