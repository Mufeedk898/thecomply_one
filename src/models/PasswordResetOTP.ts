import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPasswordResetOtp extends Document {
  userId: mongoose.Types.ObjectId;
  email: string;
  otpHash: string;
  expiresAt: Date;
  attempts: number;
  usedAt: Date | null;
  used?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PasswordResetOtpSchema = new Schema<IPasswordResetOtp>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    otpHash: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    attempts: {
      type: Number,
      default: 0,
      min: 0,
    },
    usedAt: {
      type: Date,
      default: null,
    },
    used: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// TTL Index on expiresAt so Mongo automatically purges expired OTP documents
PasswordResetOtpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const PasswordResetOTPModel: Model<IPasswordResetOtp> =
  mongoose.models.PasswordResetOtp ||
  mongoose.model<IPasswordResetOtp>("PasswordResetOtp", PasswordResetOtpSchema);

const PasswordResetOtp = PasswordResetOTPModel;

export default PasswordResetOtp;

