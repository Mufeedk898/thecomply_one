import mongoose, { Schema, Document, Model } from "mongoose";

export interface IVideoReview extends Document {
  customerName: string;
  companyName: string;
  designation?: string;
  videoUrl: string;
  thumbnailUrl?: string;
  videoPublicId?: string;
  thumbnailPublicId?: string;
  reviewText?: string;
  displayOrder: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const VideoReviewSchema = new Schema<IVideoReview>(
  {
    customerName: {
      type: String,
      required: [true, "Customer name is required"],
      trim: true,
      maxlength: [100, "Customer name cannot exceed 100 characters"],
    },
    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      maxlength: [150, "Company name cannot exceed 150 characters"],
    },
    designation: {
      type: String,
      trim: true,
      maxlength: [100, "Designation cannot exceed 100 characters"],
      default: undefined,
    },
    videoUrl: {
      type: String,
      required: [true, "Video URL is required"],
      trim: true,
    },
    thumbnailUrl: {
      type: String,
      trim: true,
      default: undefined,
    },
    videoPublicId: {
      type: String,
      trim: true,
      default: undefined,
    },
    thumbnailPublicId: {
      type: String,
      trim: true,
      default: undefined,
    },
    reviewText: {
      type: String,
      trim: true,
      maxlength: [2000, "Review text cannot exceed 2000 characters"],
      default: undefined,
    },
    displayOrder: {
      type: Number,
      default: 0,
      index: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
    collection: "videoReviews",
  }
);

// Prevent re-compilation during Next.js Hot Reloading
const VideoReview: Model<IVideoReview> =
  mongoose.models.VideoReview || mongoose.model<IVideoReview>("VideoReview", VideoReviewSchema);

export default VideoReview;
