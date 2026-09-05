import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

// Read and parse .env.local file if present
function loadEnvFile(envPath: string) {
  if (fs.existsSync(envPath)) {
    const fileContent = fs.readFileSync(envPath, "utf-8");
    fileContent.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
        const [key, ...valParts] = trimmed.split("=");
        const value = valParts.join("=").trim();
        if (key && !process.env[key.trim()]) {
          process.env[key.trim()] = value;
        }
      }
    });
  }
}

loadEnvFile(path.join(process.cwd(), ".env.local"));
loadEnvFile(path.join(process.cwd(), ".env"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/the-comply-one";

const ADMIN_NAME = process.env.ADMIN_NAME || "Administrator";
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || "admin@example.local").toLowerCase().trim();
const ADMIN_MOBILE = process.env.ADMIN_MOBILE || "0000000000";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "ChangeMeInEnv!";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    mobileNumber: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["CLIENT", "CA_MANAGER", "ADMIN"], default: "CLIENT" },
    profilePhoto: { type: String, default: undefined },
  },
  { timestamps: true, collection: "users" }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function seedAdmin() {
  try {
    console.log("[SEED ADMIN] Connecting to MongoDB database...");
    await mongoose.connect(MONGODB_URI);

    // Check if an Admin account already exists (by email or ADMIN role)
    const existingAdmin = await User.findOne({
      $or: [{ email: ADMIN_EMAIL }, { role: "ADMIN" }],
    });

    if (existingAdmin) {
      console.log(`[SEED ADMIN] Admin account already exists (Email: ${existingAdmin.email}, Role: ${existingAdmin.role}).`);
      await mongoose.disconnect();
      process.exit(0);
    }

    // Hash password with bcryptjs (cost factor 10)
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);

    // Create Admin user
    const adminUser = await User.create({
      fullName: ADMIN_NAME,
      email: ADMIN_EMAIL,
      mobileNumber: ADMIN_MOBILE,
      passwordHash,
      role: "ADMIN",
    });

    console.log("--------------------------------------------------");
    console.log("✓ [SEED ADMIN SUCCESS] Secure Admin user created!");
    console.log(`- ID: ${adminUser._id.toString()}`);
    console.log(`- Name: ${adminUser.fullName}`);
    console.log(`- Email: ${adminUser.email}`);
    console.log(`- Role: ${adminUser.role}`);
    console.log("--------------------------------------------------");

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("[SEED ADMIN ERROR] Failed to seed Admin user:", error);
    await mongoose.disconnect();
    process.exit(1);
  }
}

seedAdmin();
