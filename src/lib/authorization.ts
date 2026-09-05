import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { UserRole } from "@/models/User";
import { NextResponse } from "next/server";

export interface AuthenticatedUser {
  id: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  role: UserRole;
}

/**
 * Retrieves the currently authenticated user from server session.
 * Returns null if unauthenticated.
 */
export async function getCurrentUser(): Promise<AuthenticatedUser | null> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return null;
  }
  return session.user as AuthenticatedUser;
}

/**
 * Requires an authenticated user session.
 * Throws a NextResponse 401 if unauthenticated.
 */
export async function requireAuth(): Promise<AuthenticatedUser | NextResponse> {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { success: false, error: "Authentication required. Please sign in." },
      { status: 401 }
    );
  }
  return user;
}

/**
 * Requires user to have one of the allowed roles.
 * Returns a 403 response if role requirement is not met.
 */
export async function requireRole(allowedRoles: UserRole[]): Promise<AuthenticatedUser | NextResponse> {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { success: false, error: "Authentication required. Please sign in." },
      { status: 401 }
    );
  }

  if (!allowedRoles.includes(user.role)) {
    return NextResponse.json(
      { success: false, error: "Access denied. Insufficient permissions." },
      { status: 403 }
    );
  }

  return user;
}

/**
 * Requires ADMIN role.
 */
export async function requireAdmin(): Promise<AuthenticatedUser | NextResponse> {
  return requireRole(["ADMIN"]);
}

/**
 * Requires ADMIN or CA_MANAGER role.
 */
export async function requireAdminOrCAManager(): Promise<AuthenticatedUser | NextResponse> {
  return requireRole(["ADMIN", "CA_MANAGER"]);
}
