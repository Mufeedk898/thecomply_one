import mongoose, { Schema, Document, Model, Types } from "mongoose";

export type EnquiryStatus = "NEW" | "CONTACTED" | "IN_PROGRESS" | "CONVERTED" | "CLOSED";

export interface IReferralInfo {
  referrerName?: string;
  referrerMobile?: string;
  referrerEmail?: string;
  referredName?: string;
  referredMobile?: string;
  referredEmail?: string;
  serviceRequired?: string;
}

export interface IEnquiry extends Document {
  fullName: string;
  mobileNumber: string;
  email?: string;
  service?: string;
  message?: string;
  subject?: string;
  source: string;
  status: EnquiryStatus;
  assignedCAManager?: Types.ObjectId | null;
  referral?: IReferralInfo;
  createdAt: Date;
  updatedAt: Date;
}

const ReferralSchema = new Schema<IReferralInfo>(
  {
    referrerName: { type: String, trim: true },
    referrerMobile: { type: String, trim: true },
    referrerEmail: { type: String, lowercase: true, trim: true },
    referredName: { type: String, trim: true },
    referredMobile: { type: String, trim: true },
    referredEmail: { type: String, lowercase: true, trim: true },
    serviceRequired: { type: String, trim: true },
  },
  { _id: false }
);

const EnquirySchema = new Schema<IEnquiry>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      trim: true,
      index: true,
      validate: {
        validator: function (v: string) {
          return /^[6-9]\d{9}$/.test(v);
        },
        message: "Please provide a valid 10-digit Indian mobile number.",
      },
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
      default: undefined,
    },
    service: {
      type: String,
      trim: true,
      default: undefined,
    },
    message: {
      type: String,
      trim: true,
      default: undefined,
    },
    subject: {
      type: String,
      trim: true,
      default: undefined,
    },
    source: {
      type: String,
      required: true,
      default: "WEBSITE_FORM",
    },
    status: {
      type: String,
      enum: {
        values: ["NEW", "CONTACTED", "IN_PROGRESS", "CONVERTED", "CLOSED"],
        message: "Status must be NEW, CONTACTED, IN_PROGRESS, CONVERTED, or CLOSED",
      },
      default: "NEW",
      index: true,
    },
    assignedCAManager: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true,
    },
    referral: {
      type: ReferralSchema,
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

// Compound / specific indexes
EnquirySchema.index({ createdAt: -1 });

// Prevent re-compilation during Next.js Hot Reloading
const Enquiry: Model<IEnquiry> = mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", EnquirySchema);

export default Enquiry;
