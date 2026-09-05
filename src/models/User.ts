import mongoose, { Schema, Document, Model } from "mongoose";

export type UserRole = "CLIENT" | "CA_MANAGER" | "ADMIN";

export interface IUser extends Document {
  fullName: string;
  mobileNumber: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  profilePhoto?: string;
  passwordResetOtpHash?: string;
  passwordResetOtpExpiresAt?: Date;
  passwordResetOtpAttempts?: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      unique: true,
      trim: true,
      validate: {
        validator: function (v: string) {
          return /^[6-9]\d{9}$/.test(v);
        },
        message: "Please provide a valid 10-digit Indian mobile number.",
      },
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: [true, "Password hash is required"],
    },
    role: {
      type: String,
      enum: {
        values: ["CLIENT", "CA_MANAGER", "ADMIN"],
        message: "Role must be CLIENT, CA_MANAGER, or ADMIN",
      },
      default: "CLIENT",
      index: true,
    },
    profilePhoto: {
      type: String,
      default: undefined,
    },
    // Temporary fields for Forgot Password SMS OTP flow (3-collection constraint)
    passwordResetOtpHash: {
      type: String,
      select: false,
      default: undefined,
    },
    passwordResetOtpExpiresAt: {
      type: Date,
      select: false,
      default: undefined,
    },
    passwordResetOtpAttempts: {
      type: Number,
      default: 0,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent re-compilation during Next.js Hot Reloading
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
