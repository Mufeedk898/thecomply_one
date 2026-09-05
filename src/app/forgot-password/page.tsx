"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import {
  KeyRound,
  Mail,
  Lock,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

export default function ForgotPasswordPage() {
  // Step state: 1 = Enter Email, 2 = Enter OTP & New Password, 3 = Reset Success
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form inputs
  const [email, setEmail] = useState("");
  const [otpDigits, setOtpDigits] = useState<string[]>(Array(6).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UI status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successNotice, setSuccessNotice] = useState("");

  // Resend OTP 60-second cooldown timer
  const [cooldown, setCooldown] = useState<number>(0);

  // OTP Input refs
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle 60s cooldown timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (cooldown > 0) {
      interval = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [cooldown]);

  // Handle 6-box OTP digit change
  const handleDigitChange = (index: number, value: string) => {
    const cleanVal = value.replace(/\D/g, "");

    // If pasting a 6-digit OTP string into any box
    if (cleanVal.length === 6) {
      const pastedDigits = cleanVal.split("");
      setOtpDigits(pastedDigits);
      inputRefs.current[5]?.focus();
      return;
    }

    const newDigits = [...otpDigits];
    newDigits[index] = cleanVal.slice(-1); // Take last digit if multiple typed
    setOtpDigits(newDigits);

    // Auto-focus next box if digit typed
    if (cleanVal && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle Backspace navigation in 6-box OTP input
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle Paste event on OTP input
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "");
    if (pastedData.length >= 6) {
      const pastedDigits = pastedData.slice(0, 6).split("");
      setOtpDigits(pastedDigits);
      inputRefs.current[5]?.focus();
    }
  };

  // Step 1: Request Password Reset OTP
  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessNotice("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid registered official email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (!res.ok) {
        setErrorMessage(data.error || "Could not request verification code.");
        return;
      }

      // Display success notice & advance to Step 2
      setSuccessNotice(
        data.message ||
          "A 6-digit verification code has been sent to your email."
      );
      setCooldown(60); // 60-second resend cooldown
      setStep(2);
    } catch (err: unknown) {
      console.error("[FORGOT PASSWORD CLIENT ERROR]", err);
      setErrorMessage("Network error. Could not request verification code.");
      setIsSubmitting(false);
    }
  };

  // Resend OTP handler
  const handleResendOtp = async () => {
    if (cooldown > 0 || isSubmitting) return;

    setErrorMessage("");
    setSuccessNotice("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (!res.ok) {
        setErrorMessage(data.error || "Too many resend attempts. Please wait.");
        return;
      }

      setSuccessNotice("A new 6-digit verification code has been dispatched to your email.");
      setCooldown(60);
    } catch (err: unknown) {
      console.error("[RESEND OTP CLIENT ERROR]", err);
      setErrorMessage("Network error. Could not resend verification code.");
      setIsSubmitting(false);
    }
  };

  // Step 2: Submit OTP & Set New Password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const fullOtp = otpDigits.join("");
    if (fullOtp.length !== 6) {
      setErrorMessage("Please enter the complete 6-digit verification code.");
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please re-enter.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          otp: fullOtp,
          password: newPassword,
          confirmPassword,
        }),
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || "Failed to reset password. Please try again.");
        return;
      }

      // Step 3: Success state
      setStep(3);
    } catch (err: unknown) {
      console.error("[RESET PASSWORD CLIENT ERROR]", err);
      setErrorMessage("Network error. Could not reset password.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 md:p-10 border border-slate-200/90 shadow-md transition-all">
          
          {/* Step 1: Request OTP */}
          {step === 1 && (
            <div className="space-y-6">
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-semibold cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Sign In
              </Link>

              <div className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-4 font-bold shadow-sm">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-bold text-slate-900">
                  Forgot Password?
                </h1>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Enter your registered official email address to receive a 6-digit verification code.
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 text-xs bg-red-50 text-red-600 rounded-xl border border-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleRequestOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Registered Official Email *
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

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Verification Code..." : "Send Verification Code →"}
                </Button>
              </form>
            </div>
          )}

          {/* Step 2: Enter 6-Digit OTP & Create New Password */}
          {step === 2 && (
            <div className="space-y-6">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-semibold cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Change Email Address
              </button>

              <div className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4 font-bold shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Verify Code & Reset
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  We sent a 6-digit code to <strong className="text-slate-800">{email}</strong>
                </p>
              </div>

              {successNotice && (
                <div className="p-3 text-xs bg-blue-50 text-blue-700 rounded-xl border border-blue-200 leading-relaxed">
                  {successNotice}
                </div>
              )}

              {errorMessage && (
                <div className="p-3 text-xs bg-red-50 text-red-600 rounded-xl border border-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleResetPassword} className="space-y-5">
                {/* 6-Box Mobile-Friendly OTP Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2 text-center">
                    6-Digit Verification Code *
                  </label>
                  <div className="flex items-center justify-center gap-2">
                    {otpDigits.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={(el) => {
                          inputRefs.current[idx] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleDigitChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                        onPaste={handlePaste}
                        className="w-11 h-12 text-center text-lg font-extrabold bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 transition-all outline-none"
                      />
                    ))}
                  </div>
                </div>

                {/* Resend Cooldown Button */}
                <div className="text-center">
                  {cooldown > 0 ? (
                    <p className="text-xs text-slate-500">
                      Resend code in <strong className="text-blue-700 font-bold">{cooldown}s</strong>
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 hover:underline cursor-pointer disabled:opacity-50"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Resend Verification Code</span>
                    </button>
                  )}
                </div>

                {/* New Password & Confirm Password */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      New Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="password"
                        required
                        placeholder="At least 6 characters"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Confirm New Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="password"
                        required
                        placeholder="Re-enter new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full font-semibold shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Resetting Password..." : "Verify OTP & Reset Password →"}
                </Button>
              </form>
            </div>
          )}

          {/* Step 3: Password Reset Success */}
          {step === 3 && (
            <div className="text-center space-y-6 py-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto font-bold shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Password Reset Successful! 🎉
                </h2>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed max-w-xs mx-auto">
                  Your account password has been updated. You can now sign in using your new credentials.
                </p>
              </div>

              <Link href="/login" className="block w-full">
                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  className="w-full font-semibold bg-emerald-600 hover:bg-emerald-500 shadow-md"
                >
                  Sign In to Dashboard →
                </Button>
              </Link>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
