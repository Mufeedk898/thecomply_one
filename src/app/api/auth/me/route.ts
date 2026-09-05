import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/authorization";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json(
      { success: false, error: "Authentication required. Please sign in." },
      { status: 401 }
    );
  }

  await connectToDatabase();
  const dbUser = await User.findById(user.id).select("fullName email mobileNumber role profilePhoto");

  return NextResponse.json(
    {
      success: true,
      user: {
        id: user.id,
        fullName: dbUser?.fullName || user.fullName,
        email: dbUser?.email || user.email,
        mobileNumber: dbUser?.mobileNumber || user.mobileNumber,
        role: dbUser?.role || user.role,
        profilePhoto: dbUser?.profilePhoto || null,
      },
    },
    { status: 200 }
  );
}
