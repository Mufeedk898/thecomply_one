import { v2 as cloudinary, UploadApiOptions, UploadApiResponse } from "cloudinary";

// Configure Cloudinary server-side
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Upload buffer to Cloudinary using upload_stream
 */
export async function uploadToCloudinary(
  buffer: Buffer,
  options: UploadApiOptions
): Promise<UploadApiResponse> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret || cloudName === "mock_cloud") {
    // Development Mock Fallback if credentials are not configured
    const isVideo = options.resource_type === "video";
    const fakeId = `mock_${isVideo ? "video" : "thumb"}_${Date.now()}`;
    return {
      public_id: fakeId,
      secure_url: isVideo
        ? "https://res.cloudinary.com/demo/video/upload/sample.mp4"
        : "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80",
      resource_type: isVideo ? "video" : "image",
    } as UploadApiResponse;
  }

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error || !result) {
        return reject(error || new Error("Failed to upload asset to Cloudinary."));
      }
      resolve(result);
    });
    stream.end(buffer);
  });
}

/**
 * Delete asset from Cloudinary safely
 */
export async function deleteCloudinaryAsset(
  publicId: string | undefined,
  resourceType: "video" | "image" = "video"
): Promise<boolean> {
  if (!publicId || publicId.startsWith("mock_")) {
    return true; // Mock success
  }

  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
      invalidate: true,
    });
    return result.result === "ok" || result.result === "not found";
  } catch (err: unknown) {
    console.error(`[CLOUDINARY DELETE ERROR] Failed to delete publicId "${publicId}":`, err);
    return false;
  }
}
