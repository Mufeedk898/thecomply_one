"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  Search,
  Filter,
  Phone,
  Mail,
  UserCheck,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  AlertCircle,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface EnquiryItem {
  id: string;
  fullName: string;
  mobileNumber: string;
  email?: string;
  service?: string;
  message?: string;
  subject?: string;
  source: string;
  status: "NEW" | "CONTACTED" | "IN_PROGRESS" | "CONVERTED" | "CLOSED";
  assignedCAManager?: {
    id: string;
    fullName: string;
    email: string;
    mobileNumber: string;
  } | null;
  referral?: {
    referrerName?: string;
    referrerMobile?: string;
    referrerEmail?: string;
    referredName?: string;
    referredMobile?: string;
    referredEmail?: string;
    serviceRequired?: string;
  } | null;
  createdAt: string;
  updatedAt: string;
}

export interface CAManagerUser {
  id: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  role: string;
}

export function EnquiryManager() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [caManagers, setCaManagers] = useState<CAManagerUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");
  const [caFilter, setCaFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // Modal State
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryItem | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Modal Form Inputs
  const [updateStatus, setUpdateStatus] = useState<string>("");
  const [updateCaManager, setUpdateCaManager] = useState<string>("");

  // Fetch CA Managers for Assignment Dropdown
  useEffect(() => {
    async function loadCAManagers() {
      try {
        const res = await fetch("/api/admin/users?role=CA_MANAGER", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            setCaManagers(data.users || []);
          }
        }
      } catch (err) {
        console.error("Failed to load CA Managers:", err);
      }
    }
    loadCAManagers();
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadEnquiries() {
      try {
        const params = new URLSearchParams();
        params.set("page", page.toString());
        params.set("limit", "15");

        if (searchQuery) params.set("search", searchQuery);
        if (statusFilter) params.set("status", statusFilter);
        if (sourceFilter) params.set("source", sourceFilter);
        if (caFilter) params.set("assignedTo", caFilter);

        const res = await fetch(`/api/enquiries?${params.toString()}`, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.success) {
            setEnquiries(data.enquiries || []);
            if (data.pagination) {
              setTotalPages(data.pagination.totalPages || 1);
              setTotalCount(data.pagination.total || 0);
            }
          }
        } else if (isMounted) {
          setErrorMessage("Failed to load enquiries.");
        }
      } catch (err) {
        console.error("Failed to fetch enquiries:", err);
        if (isMounted) {
          setErrorMessage("Network error loading enquiries.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadEnquiries();

    return () => {
      isMounted = false;
    };
  }, [page, searchQuery, statusFilter, sourceFilter, caFilter]);

  const fetchEnquiries = async () => {
    try {
      const params = new URLSearchParams();
      params.set("page", page.toString());
      params.set("limit", "15");

      if (searchQuery) params.set("search", searchQuery);
      if (statusFilter) params.set("status", statusFilter);
      if (sourceFilter) params.set("source", sourceFilter);
      if (caFilter) params.set("assignedTo", caFilter);

      const res = await fetch(`/api/enquiries?${params.toString()}`, { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setEnquiries(data.enquiries || []);
          if (data.pagination) {
            setTotalPages(data.pagination.totalPages || 1);
            setTotalCount(data.pagination.total || 0);
          }
        }
      }
    } catch (err) {
      console.error("Failed to fetch enquiries:", err);
    }
  };

  // Open Detail Modal
  const handleOpenDetailModal = (enquiry: EnquiryItem) => {
    setSelectedEnquiry(enquiry);
    setUpdateStatus(enquiry.status);
    setUpdateCaManager(enquiry.assignedCAManager?.id || "");
    setErrorMessage(null);
    setIsDetailModalOpen(true);
  };

  // Submit Status / CA Manager Assignment Update
  const handleSaveEnquiryChanges = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEnquiry) return;

    setIsUpdating(true);
    setErrorMessage(null);

    try {
      const res = await fetch(`/api/enquiries/${selectedEnquiry.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: updateStatus,
          assignedCAManager: updateCaManager || null,
        }),
      });

      const data = await res.json();
      setIsUpdating(false);

      if (res.ok && data.success) {
        setSuccessMessage("Enquiry updated successfully.");
        setIsDetailModalOpen(false);
        fetchEnquiries();
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        setErrorMessage(data.error || "Failed to update enquiry.");
      }
    } catch (err) {
      console.error("Update enquiry error:", err);
      setIsUpdating(false);
      setErrorMessage("Network error updating enquiry.");
    }
  };

  // Format Status Badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "NEW":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "CONTACTED":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "IN_PROGRESS":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "CONVERTED":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "CLOSED":
        return "bg-slate-100 text-slate-700 border-slate-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            Lead Operations
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Client Enquiries & Requests ({totalCount})
          </h2>
        </div>
      </div>

      {/* Messages */}
      {successMessage && (
        <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Search & Filters Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        {/* Search Bar */}
        <div className="relative md:col-span-1">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search name, phone, email..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
          />
        </div>

        {/* Status Filter */}
        <div>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none"
          >
            <option value="">All Statuses</option>
            <option value="NEW">NEW</option>
            <option value="CONTACTED">CONTACTED</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="CONVERTED">CONVERTED</option>
            <option value="CLOSED">CLOSED</option>
          </select>
        </div>

        {/* Source Filter */}
        <div>
          <select
            value={sourceFilter}
            onChange={(e) => {
              setSourceFilter(e.target.value);
              setPage(1);
            }}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none"
          >
            <option value="">All Lead Sources</option>
            <option value="SERVICE_PAGE_FORM">SERVICE_PAGE_FORM</option>
            <option value="CALLBACK_REQUEST">CALLBACK_REQUEST</option>
            <option value="QUOTATION_FORM">QUOTATION_FORM</option>
            <option value="CONTACT_PAGE">CONTACT_PAGE</option>
            <option value="REFERRAL_FORM">REFERRAL_FORM</option>
          </select>
        </div>

        {/* CA Manager Filter */}
        <div>
          <select
            value={caFilter}
            onChange={(e) => {
              setCaFilter(e.target.value);
              setPage(1);
            }}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 focus:outline-none"
          >
            <option value="">All CA Assignments</option>
            {caManagers.map((ca) => (
              <option key={ca.id} value={ca.id}>
                {ca.fullName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table / Loading */}
      {isLoading ? (
        <div className="space-y-3 py-8">
          <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
          <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
          <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
        </div>
      ) : enquiries.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900 mb-1">No Enquiries Found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search criteria or status filters.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Client Info</th>
                <th className="py-3 px-4">Contact Actions</th>
                <th className="py-3 px-4">Requirement / Service</th>
                <th className="py-3 px-4">Source</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4">Assigned CA</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {enquiries.map((enq) => (
                <tr key={enq.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-900">
                    <div>{enq.fullName}</div>
                    <div className="text-[10px] text-slate-400 font-normal">
                      {new Date(enq.createdAt).toLocaleDateString()}
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {/* Call Action */}
                      <a
                        href={`tel:${enq.mobileNumber}`}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 hover:underline"
                        title="Click to Call"
                      >
                        <Phone className="w-3 h-3" />
                        {enq.mobileNumber}
                      </a>

                      {/* WhatsApp Link Action */}
                      <a
                        href={`https://wa.me/91${enq.mobileNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md text-emerald-600 hover:bg-emerald-50 transition-colors"
                        title="Open WhatsApp Chat"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    {enq.email && (
                      <div>
                        <a
                          href={`mailto:${enq.email}`}
                          className="inline-flex items-center gap-1 text-[10px] text-slate-500 hover:underline truncate max-w-[150px]"
                        >
                          <Mail className="w-2.5 h-2.5" />
                          {enq.email}
                        </a>
                      </div>
                    )}
                  </td>

                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-800">{enq.service || "General Advisory"}</div>
                    {enq.message && (
                      <div className="text-[10px] text-slate-500 truncate max-w-[180px]">
                        {enq.message}
                      </div>
                    )}
                  </td>

                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono text-[10px]">
                      {enq.source}
                    </span>
                  </td>

                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full font-bold text-[10px] uppercase border ${getStatusBadge(
                        enq.status
                      )}`}
                    >
                      {enq.status}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    {enq.assignedCAManager ? (
                      <div className="flex items-center gap-1 text-slate-800 font-semibold text-[11px]">
                        <UserCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{enq.assignedCAManager.fullName}</span>
                      </div>
                    ) : (
                      <span className="text-slate-400 text-[11px] italic">Unassigned</span>
                    )}
                  </td>

                  <td className="py-3 px-4 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenDetailModal(enq)}
                      className="text-xs"
                    >
                      Manage
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-4">
          <div className="text-xs text-slate-500">
            Page <span className="font-bold text-slate-800">{page}</span> of{" "}
            <span className="font-bold text-slate-800">{totalPages}</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Detail & Assignment Modal */}
      {isDetailModalOpen && selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-2xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                  Lead Reference ID: {selectedEnquiry.id}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">Enquiry & Assignment Details</h3>
              </div>
              <button
                onClick={() => setIsDetailModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-xs text-slate-700">
              {/* Section 1: Client Information */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
                  Client Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Full Name</span>
                    <strong className="text-slate-900 text-sm">{selectedEnquiry.fullName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Mobile Number</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a href={`tel:${selectedEnquiry.mobileNumber}`} className="font-bold text-blue-700 hover:underline">
                        {selectedEnquiry.mobileNumber}
                      </a>
                      <a
                        href={`https://wa.me/91${selectedEnquiry.mobileNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 font-bold hover:underline flex items-center gap-0.5"
                      >
                        <Share2 className="w-3 h-3" /> WhatsApp
                      </a>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Email Address</span>
                    {selectedEnquiry.email ? (
                      <a href={`mailto:${selectedEnquiry.email}`} className="font-bold text-blue-700 hover:underline">
                        {selectedEnquiry.email}
                      </a>
                    ) : (
                      <span className="text-slate-400 italic">Not Provided</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 2: Requirement / Advisory Service */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
                  Advisory Service & Requirements
                </h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Requested Service</span>
                    <strong className="text-slate-900 font-bold">{selectedEnquiry.service || "General Advisory"}</strong>
                  </div>
                  {selectedEnquiry.subject && (
                    <div>
                      <span className="text-slate-400 block text-[10px]">Subject</span>
                      <p className="text-slate-800 font-semibold">{selectedEnquiry.subject}</p>
                    </div>
                  )}
                  {selectedEnquiry.message && (
                    <div>
                      <span className="text-slate-400 block text-[10px]">Requirements Message</span>
                      <p className="text-slate-700 bg-white p-3 rounded-xl border border-slate-200 leading-relaxed">
                        {selectedEnquiry.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Section 3: Referral Details (if available) */}
              {selectedEnquiry.referral && (
                <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 space-y-3">
                  <h4 className="text-xs font-extrabold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Share2 className="w-4 h-4 text-amber-600" /> Referral Information
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-amber-900 block text-[11px]">Referrer (User)</strong>
                      <div>{selectedEnquiry.referral.referrerName}</div>
                      <div>Phone: {selectedEnquiry.referral.referrerMobile}</div>
                      {selectedEnquiry.referral.referrerEmail && <div>Email: {selectedEnquiry.referral.referrerEmail}</div>}
                    </div>
                    <div>
                      <strong className="text-amber-900 block text-[11px]">Referred Customer</strong>
                      <div>{selectedEnquiry.referral.referredName}</div>
                      <div>Phone: {selectedEnquiry.referral.referredMobile}</div>
                      {selectedEnquiry.referral.serviceRequired && (
                        <div className="font-semibold text-amber-800 mt-1">
                          Service: {selectedEnquiry.referral.serviceRequired}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Section 4: Operational Update Form */}
              <form onSubmit={handleSaveEnquiryChanges} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                      Lead Status *
                    </label>
                    <select
                      value={updateStatus}
                      onChange={(e) => setUpdateStatus(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="IN_PROGRESS">IN_PROGRESS</option>
                      <option value="CONVERTED">CONVERTED</option>
                      <option value="CLOSED">CLOSED</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                      Assign CA Manager
                    </label>
                    <select
                      value={updateCaManager}
                      onChange={(e) => setUpdateCaManager(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    >
                      <option value="">-- Unassigned --</option>
                      {caManagers.map((ca) => (
                        <option key={ca.id} value={ca.id}>
                          {ca.fullName} ({ca.email})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
                  <Button type="button" variant="outline" size="sm" onClick={() => setIsDetailModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" size="sm" disabled={isUpdating}>
                    {isUpdating ? "Updating..." : "Save Operations Changes"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
