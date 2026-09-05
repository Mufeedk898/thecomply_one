import mongoose, { Schema, Document, Model } from "mongoose";

export interface IServiceProcessStep {
  title: string;
  description: string;
}

export interface IServiceFAQ {
  question: string;
  answer: string;
}

export interface IService extends Document {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  popular: boolean;
  featured: boolean;
  documentsRequired?: string[];
  processSteps?: IServiceProcessStep[];
  faqs?: IServiceFAQ[];
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    slug: {
      type: String,
      required: [true, "Service slug is required"],
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Service name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Service category is required"],
      trim: true,
      index: true,
    },
    shortDescription: {
      type: String,
      required: [true, "Short description is required"],
    },
    description: {
      type: String,
      required: [true, "Full description is required"],
    },
    popular: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    documentsRequired: {
      type: [String],
      default: undefined,
    },
    processSteps: {
      type: [
        {
          title: { type: String, required: true },
          description: { type: String, required: true },
        },
      ],
      default: undefined,
    },
    faqs: {
      type: [
        {
          question: { type: String, required: true },
          answer: { type: String, required: true },
        },
      ],
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent re-compilation during Next.js Hot Reloading
const Service: Model<IService> = mongoose.models.Service || mongoose.model<IService>("Service", ServiceSchema);

export default Service;
