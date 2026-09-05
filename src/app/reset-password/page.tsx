"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  KeyRound,
  ArrowLeft,
  Check,
} from "lucide-react";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email") || "";

  const [email, setEmail] = useState(emailParam);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const hasMinLength = newPassword.length >= 6;
  const passwordsMatch = newPassword.length > 0 && newPassword === confirmPassword;

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (newPassword.length < 6) {
      setErrorMessage("New password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please re-enter.");
      return;
    }

    if (otp.trim().length !== 6) {
      setErrorMessage("Please enter the complete 6-digit verification OTP.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          otp: otp.trim(),
          newPassword,
          confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.message || "Failed to reset password. Please check your OTP.");
      } else {
        setSuccessMessage(
          "Your password has been successfully updated! Redirecting to Sign In..."
        );
        setTimeout(() => {
          router.push("/login?resetSuccess=true");
        }, 2200);
      }
    } catch {
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-8 md:p-10 border border-slate-200/90 shadow-md">
      {/* Header Icon & Title */}
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center mx-auto mb-4 font-bold shadow-sm">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">
          Reset Your Password
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Enter the 6-digit verification code sent to your email and create a new secure password.
        </p>
      </div>

      {/* Success Notification */}
      {successMessage && (
        <div className="mb-5 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 space-y-2">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="font-semibold">{successMessage}</span>
          </div>
          <div className="pt-2">
            <Link
              href="/login?resetSuccess=true"
              className="inline-block w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-center rounded-lg transition-colors"
            >
              Go to Sign In Now →
            </Link>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {errorMessage && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-red-800">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span>{errorMessage}</span>
            {errorMessage.toLowerCase().includes("expired") && (
              <div className="mt-1.5">
                <Link
                  href="/forgot-password"
                  className="font-semibold text-red-900 underline hover:text-red-950"
                >
                  Request a new verification OTP →
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {!successMessage && (
        <form onSubmit={handleResetPassword} className="space-y-4">
          {/* Registered Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Registered Email Address *
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

          {/* 6-Digit OTP */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700">
                6-Digit Verification Code (OTP) *
              </label>
              <Link
                href="/forgot-password"
                className="text-[11px] font-medium text-blue-700 hover:underline"
              >
                Didn&apos;t receive code?
              </Link>
            </div>
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                required
                maxLength={6}
                placeholder="123456"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-base tracking-widest font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Code is valid for 10 minutes from request time.
            </p>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              New Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type={showNewPassword ? "text" : "password"}
                required
                placeholder="Minimum 6 characters"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Confirm New Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                placeholder="Re-enter your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Requirements Checklist */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5 text-[11px]">
            <div
              className={`flex items-center gap-1.5 ${
                hasMinLength ? "text-emerald-700 font-medium" : "text-slate-500"
              }`}
            >
              <Check className={`w-3.5 h-3.5 ${hasMinLength ? "text-emerald-600" : "text-slate-400"}`} />
              <span>At least 6 characters</span>
            </div>
            <div
              className={`flex items-center gap-1.5 ${
                passwordsMatch ? "text-emerald-700 font-medium" : "text-slate-500"
              }`}
            >
              <Check className={`w-3.5 h-3.5 ${passwordsMatch ? "text-emerald-600" : "text-slate-400"}`} />
              <span>Passwords match</span>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full font-semibold mt-2"
            isLoading={isLoading}
            disabled={isLoading || !hasMinLength || !passwordsMatch || otp.length !== 6}
          >
            Update Password & Sign In →
          </Button>
        </form>
      )}

      {/* Back to Login */}
      <div className="mt-6 text-center text-xs">
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 font-semibold text-slate-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <Suspense fallback={<div className="text-slate-500 text-sm">Loading...</div>}>
          <ResetPasswordForm />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
