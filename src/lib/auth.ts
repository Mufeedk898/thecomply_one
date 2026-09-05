import { NextAuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import connectToDatabase from "@/lib/mongodb";
import User, { UserRole } from "@/models/User";

export interface CustomUser extends NextAuthUser {
  id: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  role: UserRole;
}

declare module "next-auth" {
  interface User {
    id: string;
    fullName: string;
    email: string;
    mobileNumber: string;
    role: UserRole;
  }

  interface Session {
    user: {
      id: string;
      fullName: string;
      email: string;
      mobileNumber: string;
      role: UserRole;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    fullName: string;
    email: string;
    mobileNumber: string;
    role: UserRole;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "the-comply-one-super-secret-key-32-chars-minimum",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<string, string> | undefined): Promise<CustomUser | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required.");
        }

        const normalizedEmail = credentials.email.trim().toLowerCase();
        await connectToDatabase();

        const user = await User.findOne({ email: normalizedEmail }).select("+passwordHash");

        if (!user) {
          throw new Error("Invalid email or password.");
        }

        const isValidPassword = await bcrypt.compare(credentials.password, user.passwordHash);

        if (!isValidPassword) {
          throw new Error("Invalid email or password.");
        }

        return {
          id: user._id.toString(),
          fullName: user.fullName,
          email: user.email,
          mobileNumber: user.mobileNumber,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.fullName = user.fullName;
        token.email = user.email;
        token.mobileNumber = user.mobileNumber;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.fullName = token.fullName;
        session.user.email = token.email;
        session.user.mobileNumber = token.mobileNumber;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
};

export interface SessionUser {
  id: string;
  name?: string;
  fullName?: string;
  email?: string;
  role?: string;
}

export function createSessionToken(user: { id: string; email: string; name?: string }): string {
  const payload = JSON.stringify({ ...user, exp: Date.now() + 7 * 24 * 60 * 60 * 1000 });
  const secret = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "the-comply-one-super-secret-key-32-chars-minimum";
  const signature = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return `${Buffer.from(payload).toString("base64url")}.${signature}`;
}
