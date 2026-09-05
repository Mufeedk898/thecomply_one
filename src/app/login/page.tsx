"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import { Building2, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setLoginError(res.error || "Invalid email or password.");
        setLoginLoading(false);
        return;
      }

      // Fetch authenticated user role to redirect appropriately
      try {
        const meRes = await fetch("/api/auth/me", { cache: "no-store" });
        if (meRes.ok) {
          const meData = await meRes.json();
          if (meData.user?.role === "ADMIN") {
            setLoginLoading(false);
            router.push("/admin");
            return;
          }
        }
      } catch (meErr) {
        console.error("Role check error after login:", meErr);
      }

      setLoginLoading(false);
      router.push("/dashboard");
    } catch (err: unknown) {
      console.error("Login error:", err);
      setLoginError("An unexpected error occurred during login.");
      setLoginLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 md:p-10 border border-slate-200/90 shadow-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center mx-auto mb-4 font-bold">
              <Building2 className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              Welcome Back
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Sign in to manage your company GST filings, director KYCs, and document vault.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 text-xs bg-red-50 text-red-600 rounded-xl border border-red-200">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Official Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-slate-700">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[11px] font-semibold text-blue-700 hover:underline cursor-pointer"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full font-semibold"
              disabled={loginLoading}
            >
              {loginLoading ? "Signing In..." : "Sign In to Dashboard →"}
            </Button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-bold text-blue-700 hover:underline">
              Create an Account
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
