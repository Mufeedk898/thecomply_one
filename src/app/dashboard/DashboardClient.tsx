"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import {
  FileText,
  Clock,
  ShieldCheck,
  LogOut,
  User,
  Building2,
  Calendar,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { SessionUser } from "@/lib/auth";

interface DashboardClientProps {
  user: SessionUser;
}

export function DashboardClient({ user }: DashboardClientProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
      router.push("/login");
      router.refresh();
    } catch {
      router.push("/login");
    } finally {
      setIsLoggingOut(false);
    }
  };

  const userInitials = (user.name || "U")
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top User Profile & Welcome Banner */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
                  {userInitials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {user.name}
                    </h1>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle className="w-3 h-3" />
                      Active Session
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                    <span>{user.email}</span>
                    <span>•</span>
                    <span className="text-slate-400">ID: {user.id}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons: Logout & New Registration */}
              <div className="flex items-center gap-3 self-start sm:self-auto">
                <Link href="/services">
                  <Button variant="primary" size="sm" className="font-semibold">
                    + Start New Filing
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  isLoading={isLoggingOut}
                  className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 font-semibold"
                  leftIcon={<LogOut className="w-4 h-4" />}
                >
                  Log Out
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Status Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">0</div>
                <div className="text-xs text-slate-500 font-medium">Active Applications</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">0</div>
                <div className="text-xs text-slate-500 font-medium">Pending Uploads</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">0</div>
                <div className="text-xs text-slate-500 font-medium">Completed Filings</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-xs text-slate-500 font-medium">Compliance Score</div>
              </div>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Client Services & Status */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center py-14">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Ready to Incorporate or File?
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
                  You are securely signed in as <strong className="text-slate-700">{user.email}</strong>. Track your company incorporation, trademark registration, or GST filings here in real time.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link href="/services/private-limited-company-registration">
                    <Button variant="primary" size="md">
                      Register Pvt Ltd Company
                    </Button>
                  </Link>
                  <Link href="/consultation">
                    <Button variant="outline" size="md">
                      Book CA Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Account & Security Overview */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-700" />
                  Account Security & Session
                </h4>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-400">Email:</span>
                    <span className="font-semibold text-slate-800">{user.email}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-400">Session Status:</span>
                    <span className="text-emerald-700 font-semibold">Verified Cookie</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-400">Session Validity:</span>
                    <span className="font-semibold text-slate-800">7 Days</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <Link
                    href="/forgot-password"
                    className="text-xs text-blue-700 hover:text-blue-800 font-semibold flex items-center gap-1"
                  >
                    <span>Change password via Email OTP</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
