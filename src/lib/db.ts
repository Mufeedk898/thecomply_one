import { connectToDatabase } from "./mongodb";
import UserModel from "@/models/User";
import { PasswordResetOTPModel } from "@/models/PasswordResetOTP";

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name?: string;
  phone?: string;
  entityType?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PasswordResetOTP {
  id: string;
  email: string;
  otpHash: string; // Bcrypt hashed OTP - plain text is never stored
  expiresAt: string; // ISO string (10 minutes validity)
  used: boolean;
  createdAt: string;
}

/**
 * Finds a registered user by email address from MongoDB
 * Seamlessly supports both fullName/name and mobileNumber/phone
 */
export async function findUserByEmail(email: string): Promise<User | null> {
  await connectToDatabase();
  const normalizedEmail = email.trim().toLowerCase();
  const userDoc = await UserModel.findOne({ email: normalizedEmail }).exec();

  if (!userDoc) {
    return null;
  }

  return {
    id: userDoc._id.toString(),
    email: userDoc.email,
    passwordHash: userDoc.passwordHash,
    name: userDoc.fullName || "User",
    phone: userDoc.mobileNumber || undefined,
    entityType: undefined,
    createdAt: userDoc.createdAt ? userDoc.createdAt.toISOString() : new Date().toISOString(),
    updatedAt: userDoc.updatedAt ? userDoc.updatedAt.toISOString() : new Date().toISOString(),
  };
}

/**
 * Creates a new user in MongoDB
 */
export async function createUser(data: {
  email: string;
  passwordHash: string;
  name?: string;
  phone?: string;
  entityType?: string;
}): Promise<User> {
  await connectToDatabase();
  const normalizedEmail = data.email.trim().toLowerCase();

  const existing = await UserModel.findOne({ email: normalizedEmail }).exec();
  if (existing) {
    throw new Error("User already exists with this email address");
  }

  const cleanName = data.name?.trim() || "User";
  const cleanPhone = data.phone?.trim();

  const newUserDoc = await UserModel.create({
    email: normalizedEmail,
    fullName: cleanName,
    passwordHash: data.passwordHash,
    mobileNumber: cleanPhone || "9999999999",
  });

  return {
    id: newUserDoc._id.toString(),
    email: newUserDoc.email,
    passwordHash: newUserDoc.passwordHash,
    name: newUserDoc.fullName || cleanName,
    phone: newUserDoc.mobileNumber || cleanPhone,
    entityType: undefined,
    createdAt: newUserDoc.createdAt.toISOString(),
    updatedAt: newUserDoc.updatedAt.toISOString(),
  };
}

/**
 * Updates a user's password hash in MongoDB
 */
export async function updateUserPassword(
  email: string,
  newPasswordHash: string
): Promise<boolean> {
  await connectToDatabase();
  const normalizedEmail = email.trim().toLowerCase();

  const result = await UserModel.updateOne(
    { email: normalizedEmail },
    {
      $set: { passwordHash: newPasswordHash },
      $unset: {
        passwordResetOtpHash: "",
        passwordResetOtpExpiresAt: "",
      },
    }
  ).exec();

  return result.matchedCount > 0;
}

/**
 * Invalidate all active OTPs for the given email to prevent reuse
 */
export async function invalidatePreviousOTPs(email: string): Promise<void> {
  await connectToDatabase();
  const normalizedEmail = email.trim().toLowerCase();

  await Promise.all([
    PasswordResetOTPModel.updateMany(
      { email: normalizedEmail, used: false },
      { $set: { used: true } }
    ).exec(),
    UserModel.updateOne(
      { email: normalizedEmail },
      {
        $unset: {
          passwordResetOtpHash: "",
          passwordResetOtpExpiresAt: "",
        },
      }
    ).exec(),
  ]);
}

/**
 * Save newly hashed OTP with 10 minutes expiry to MongoDB
 */
export async function saveOTP(
  email: string,
  otpHash: string,
  expiresAt: Date
): Promise<PasswordResetOTP> {
  await connectToDatabase();
  const normalizedEmail = email.trim().toLowerCase();

  const [otpDoc] = await Promise.all([
    PasswordResetOTPModel.create({
      email: normalizedEmail,
      otpHash,
      expiresAt,
      used: false,
    }),
    UserModel.updateOne(
      { email: normalizedEmail },
      {
        $set: {
          passwordResetOtpHash: otpHash,
          passwordResetOtpExpiresAt: expiresAt,
          passwordResetOtpAttempts: 0,
        },
      }
    ).exec(),
  ]);

  return {
    id: otpDoc._id.toString(),
    email: otpDoc.email,
    otpHash: otpDoc.otpHash,
    expiresAt: otpDoc.expiresAt.toISOString(),
    used: Boolean(otpDoc.used),
    createdAt: otpDoc.createdAt.toISOString(),
  };
}

/**
 * Find the latest active, unused, non-expired OTP record for an email
 */
export async function findActiveOTP(email: string): Promise<PasswordResetOTP | null> {
  await connectToDatabase();
  const normalizedEmail = email.trim().toLowerCase();
  const now = new Date();

  // 1. Check PasswordResetOTPModel collection
  const otpDoc = await PasswordResetOTPModel.findOne({
    email: normalizedEmail,
    used: false,
    expiresAt: { $gt: now },
  })
    .sort({ createdAt: -1 })
    .exec();

  if (otpDoc) {
    return {
      id: otpDoc._id.toString(),
      email: otpDoc.email,
      otpHash: otpDoc.otpHash,
      expiresAt: otpDoc.expiresAt.toISOString(),
      used: Boolean(otpDoc.used),
      createdAt: otpDoc.createdAt.toISOString(),
    };
  }

  // 2. Check user document for existing direct OTP schema
  const userDoc = await UserModel.findOne({
    email: normalizedEmail,
    passwordResetOtpHash: { $exists: true, $ne: "" },
    passwordResetOtpExpiresAt: { $gt: now },
  }).exec();

  if (userDoc && userDoc.passwordResetOtpHash && userDoc.passwordResetOtpExpiresAt) {
    return {
      id: userDoc._id.toString(),
      email: userDoc.email,
      otpHash: userDoc.passwordResetOtpHash,
      expiresAt: userDoc.passwordResetOtpExpiresAt.toISOString(),
      used: false,
      createdAt: userDoc.updatedAt ? userDoc.updatedAt.toISOString() : now.toISOString(),
    };
  }

  return null;
}

/**
 * Mark OTP as used in MongoDB
 */
export async function markOTPAsUsed(id: string): Promise<void> {
  await connectToDatabase();

  await Promise.all([
    PasswordResetOTPModel.findByIdAndUpdate(id, {
      $set: { used: true },
    }).exec(),
    UserModel.findByIdAndUpdate(id, {
      $unset: {
        passwordResetOtpHash: "",
        passwordResetOtpExpiresAt: "",
      },
    }).exec(),
  ]);
}
