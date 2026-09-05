"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import { LayoutDashboard, FileText, PhoneCall, ShieldCheck, UserCheck } from "lucide-react";

export default function DashboardPage() {
  const { data: session } = useSession();
  const userName = session?.user?.fullName || "Client";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
                <LayoutDashboard className="w-4 h-4" />
                Client Workspace
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Welcome, {userName}
              </h1>
            </div>

            <Link href="/services">
              <Button variant="primary" size="sm">
                + Request Advisory Service
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">0</div>
                <div className="text-xs text-slate-500 font-medium">Submitted Enquiries</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">0</div>
                <div className="text-xs text-slate-500 font-medium">Pending Callbacks & Followups</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">0</div>
                <div className="text-xs text-slate-500 font-medium">Assigned CA Advisory</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center py-16">
            <UserCheck className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">No Active Advisory Requests Yet</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
              Welcome to The Comply One client portal. Request an incorporation, GST, or MCA advisory consultation to connect with our senior CAs here.
            </p>
            <Link href="/services">
              <Button variant="outline" size="md">
                Browse Service Catalogue
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
