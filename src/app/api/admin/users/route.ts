import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User, { UserRole } from "@/models/User";
import { requireAdmin } from "@/lib/authorization";
import { sanitizeString } from "@/lib/rateLimit";

export async function GET(req: NextRequest) {
  try {
    const adminOrResponse = await requireAdmin();
    if (adminOrResponse instanceof NextResponse) {
      return adminOrResponse; // Returns 401 or 403
    }

    const { searchParams } = new URL(req.url);
    const roleParam = searchParams.get("role");
    const searchParam = searchParams.get("search");
    const pageParam = parseInt(searchParams.get("page") || "1", 10);
    const limitParam = parseInt(searchParams.get("limit") || "20", 10);

    const page = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
    const limit = isNaN(limitParam) || limitParam < 1 ? 20 : Math.min(limitParam, 100);
    const skip = (page - 1) * limit;

    const filterQuery: Record<string, unknown> = {};

    if (roleParam) {
      const allowedRoles: UserRole[] = ["CLIENT", "CA_MANAGER", "ADMIN"];
      if (allowedRoles.includes(roleParam as UserRole)) {
        filterQuery.role = roleParam;
      }
    }

    if (searchParam) {
      const sanitizedSearch = sanitizeString(searchParam, 100);
      const searchRegex = new RegExp(sanitizedSearch, "i");
      filterQuery.$or = [
        { fullName: searchRegex },
        { email: searchRegex },
        { mobileNumber: searchRegex },
      ];
    }

    await connectToDatabase();

    const [users, total] = await Promise.all([
      User.find(filterQuery)
        .select("_id fullName email mobileNumber role createdAt") // Select safe fields ONLY
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      User.countDocuments(filterQuery),
    ]);

    const totalPages = Math.ceil(total / limit) || 1;

    const safeUsers = users.map((u) => ({
      id: u._id.toString(),
      fullName: u.fullName,
      email: u.email,
      mobileNumber: u.mobileNumber,
      role: u.role,
      createdAt: u.createdAt,
    }));

    return NextResponse.json(
      {
        success: true,
        users: safeUsers,
        pagination: {
          page,
          limit,
          total,
          totalPages,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[ADMIN GET /api/admin/users ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred while fetching users." },
      { status: 500 }
    );
  }
}
