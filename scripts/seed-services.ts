import mongoose from "mongoose";
import { ALL_SERVICES } from "../src/data/services";

// Define inline Mongoose Service Schema for standalone script execution
const ServiceSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true, index: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    popular: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    documentsRequired: [{ type: String }],
    processSteps: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    faqs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Service = mongoose.models.Service || mongoose.model("Service", ServiceSchema);

async function seedServices() {
  const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/the-comply-one";

  console.log(`Connecting to MongoDB at: ${mongoUri}...`);
  await mongoose.connect(mongoUri);

  console.log(`Found ${ALL_SERVICES.length} services defined in frontend data.`);

  const bulkOps = ALL_SERVICES.map((item) => {
    // Strip out any price/payment/package fields completely
    const cleanService = {
      slug: item.slug.trim().toLowerCase(),
      name: (item.name || item.title || "").trim(),
      category: (item.category || "registrations").trim().toLowerCase(),
      shortDescription: item.shortDescription || "",
      description: item.description || item.fullDescription || item.shortDescription || "",
      popular: Boolean(item.popular),
      featured: Boolean(item.featured),
      documentsRequired: item.documentsRequired || item.documents || [],
      processSteps: (item.processSteps || item.process || []).map((step) => ({
        title: step.title,
        description: step.description,
      })),
      faqs: (item.faqs || []).map((faq) => ({
        question: faq.question,
        answer: faq.answer,
      })),
    };

    return {
      updateOne: {
        filter: { slug: cleanService.slug },
        update: { $set: cleanService },
        upsert: true,
      },
    };
  });

  const result = await Service.bulkWrite(bulkOps);
  console.log(`Seed completed successfully! Upserted: ${result.upsertedCount}, Modified: ${result.modifiedCount}, Matched: ${result.matchedCount}.`);

  await mongoose.disconnect();
  console.log("Database connection closed.");
}

seedServices().catch((err) => {
  console.error("Seed script failed:", err);
  process.exit(1);
});
