"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import { EnquiryManager } from "@/components/admin/EnquiryManager";
import { ClientManager } from "@/components/admin/ClientManager";
import { VideoReviewManager } from "@/components/admin/VideoReviewManager";
import {
  LayoutDashboard,
  FileText,
  Users,
  Video,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

export interface DashboardStats {
  totalEnquiries: number;
  newEnquiries: number;
  contactedEnquiries: number;
  inProgressEnquiries: number;
  convertedEnquiries: number;
  closedEnquiries: number;
  totalClients: number;
  totalVideoReviews: number;
  publishedVideoReviews: number;
}

export interface RecentEnquiryItem {
  id: string;
  fullName: string;
  mobileNumber: string;
  email?: string;
  service?: string;
  source: string;
  status: string;
  assignedCAManager?: {
    fullName: string;
  } | null;
  createdAt: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "enquiries" | "clients" | "video-reviews">("overview");
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentEnquiries, setRecentEnquiries] = useState<RecentEnquiryItem[]>([]);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadStats() {
      try {
        const res = await fetch("/api/admin/dashboard", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.success) {
            setStats(data.stats);
            setRecentEnquiries(data.recentEnquiries || []);
          }
        } else if (isMounted && (res.status === 403 || res.status === 401)) {
          setErrorMessage("Access denied. Admin privileges required to view operations dashboard.");
        }
      } catch (err) {
        console.error("Failed to load dashboard statistics:", err);
        if (isMounted) {
          setErrorMessage("Network error loading dashboard stats.");
        }
      } finally {
        if (isMounted) {
          setIsLoadingStats(false);
        }
      }
    }

    loadStats();
    return () => {
      isMounted = false;
    };
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const res = await fetch("/api/admin/dashboard", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setStats(data.stats);
          setRecentEnquiries(data.recentEnquiries || []);
        }
      }
    } catch (err) {
      console.error("Failed to refresh stats:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Title Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                Admin Operations Portal
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Operations & Lead Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={fetchDashboardStats}
                className="gap-1.5 text-xs font-semibold"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Refresh Data
              </Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-200">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-colors whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab("enquiries")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-colors whitespace-nowrap ${
                activeTab === "enquiries"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Client Enquiries</span>
            </button>

            <button
              onClick={() => setActiveTab("clients")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-colors whitespace-nowrap ${
                activeTab === "clients"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Client Accounts</span>
            </button>

            <button
              onClick={() => setActiveTab("video-reviews")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-colors whitespace-nowrap ${
                activeTab === "video-reviews"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Video Reviews</span>
            </button>
          </div>

          {/* Error Message Alert */}
          {errorMessage && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-in fade-in duration-150">
              {/* 9 Live Overview Statistics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {/* 1. Total Enquiries */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-slate-900">
                      {isLoadingStats ? "..." : stats?.totalEnquiries || 0}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">Total Client Enquiries</div>
                  </div>
                </div>

                {/* 2. New Enquiries */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-sky-700">
                      {isLoadingStats ? "..." : stats?.newEnquiries || 0}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">New Unprocessed Leads</div>
                  </div>
                </div>

                {/* 3. Contacted */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-amber-700">
                      {isLoadingStats ? "..." : stats?.contactedEnquiries || 0}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">Contacted Leads</div>
                  </div>
                </div>

                {/* 4. In Progress */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-indigo-700">
                      {isLoadingStats ? "..." : stats?.inProgressEnquiries || 0}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">In Progress Advisory</div>
                  </div>
                </div>

                {/* 5. Converted */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-emerald-700">
                      {isLoadingStats ? "..." : stats?.convertedEnquiries || 0}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">Converted Clients</div>
                  </div>
                </div>

                {/* 6. Closed */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-slate-700">
                      {isLoadingStats ? "..." : stats?.closedEnquiries || 0}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">Closed Operations</div>
                  </div>
                </div>

                {/* 7. Total Clients */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-purple-700">
                      {isLoadingStats ? "..." : stats?.totalClients || 0}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">Registered User Accounts</div>
                  </div>
                </div>

                {/* 8. Total Video Reviews */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
                    <Video className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-slate-900">
                      {isLoadingStats ? "..." : stats?.totalVideoReviews || 0}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">Total Video Reviews</div>
                  </div>
                </div>

                {/* 9. Published Video Reviews */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-emerald-700">
                      {isLoadingStats ? "..." : stats?.publishedVideoReviews || 0}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">Published Video Reviews</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Bar */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4">
                  Quick Operations Actions
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button onClick={() => setActiveTab("enquiries")} variant="primary" size="sm" className="gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Manage Enquiries</span>
                  </Button>

                  <Button onClick={() => setActiveTab("clients")} variant="outline" size="sm" className="gap-2">
                    <Users className="w-4 h-4" />
                    <span>Manage Clients</span>
                  </Button>

                  <Button onClick={() => setActiveTab("video-reviews")} variant="outline" size="sm" className="gap-2">
                    <Video className="w-4 h-4" />
                    <span>Manage Video Reviews</span>
                  </Button>
                </div>
              </div>

              {/* Recent Enquiries Preview Section */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">Recent Client Enquiries</h3>
                    <p className="text-xs text-slate-500">Latest submissions requiring advisory review</p>
                  </div>
                  <Button
                    onClick={() => setActiveTab("enquiries")}
                    variant="ghost"
                    size="sm"
                    className="text-xs font-bold text-blue-700 gap-1"
                  >
                    <span>View All Enquiries</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>

                {isLoadingStats ? (
                  <div className="space-y-3 py-4">
                    <div className="h-10 bg-slate-100 rounded-xl animate-pulse" />
                    <div className="h-10 bg-slate-100 rounded-xl animate-pulse" />
                  </div>
                ) : recentEnquiries.length === 0 ? (
                  <div className="text-center py-8 text-xs text-slate-500 italic">No recent enquiries found.</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-700">
                      <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="py-2.5 px-3">Client</th>
                          <th className="py-2.5 px-3">Phone</th>
                          <th className="py-2.5 px-3">Service</th>
                          <th className="py-2.5 px-3">Source</th>
                          <th className="py-2.5 px-3 text-center">Status</th>
                          <th className="py-2.5 px-3 text-right">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {recentEnquiries.map((enq) => (
                          <tr key={enq.id} className="hover:bg-slate-50/60 transition-colors">
                            <td className="py-3 px-3 font-bold text-slate-900">{enq.fullName}</td>
                            <td className="py-3 px-3">
                              <a href={`tel:${enq.mobileNumber}`} className="font-semibold text-blue-700 hover:underline">
                                {enq.mobileNumber}
                              </a>
                            </td>
                            <td className="py-3 px-3 font-medium text-slate-800">{enq.service || "General Advisory"}</td>
                            <td className="py-3 px-3 font-mono text-[10px] text-slate-500">{enq.source}</td>
                            <td className="py-3 px-3 text-center">
                              <span className="inline-block px-2 py-0.5 rounded-full font-bold text-[10px] bg-blue-100 text-blue-800">
                                {enq.status}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-right text-slate-400 font-medium">
                              {new Date(enq.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: ENQUIRIES */}
          {activeTab === "enquiries" && (
            <div className="animate-in fade-in duration-150">
              <EnquiryManager />
            </div>
          )}

          {/* TAB 3: CLIENTS */}
          {activeTab === "clients" && (
            <div className="animate-in fade-in duration-150">
              <ClientManager />
            </div>
          )}

          {/* TAB 4: VIDEO REVIEWS */}
          {activeTab === "video-reviews" && (
            <div className="animate-in fade-in duration-150">
              <VideoReviewManager />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
