"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Search,
  Mail,
  Phone,
  Share2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface ClientUserItem {
  id: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  role: string;
  createdAt: string;
}

export function ClientManager() {
  const [clients, setClients] = useState<ClientUserItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Search & Pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    async function loadClients() {
      try {
        const params = new URLSearchParams();
        params.set("role", "CLIENT");
        params.set("page", page.toString());
        params.set("limit", "15");
        if (searchQuery) params.set("search", searchQuery);

        const res = await fetch(`/api/admin/users?${params.toString()}`, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.success) {
            setClients(data.users || []);
            if (data.pagination) {
              setTotalPages(data.pagination.totalPages || 1);
              setTotalCount(data.pagination.total || 0);
            }
          }
        } else if (isMounted) {
          setErrorMessage("Access denied or failed to load client records.");
        }
      } catch (err) {
        console.error("Failed to fetch clients:", err);
        if (isMounted) {
          setErrorMessage("Network error loading client records.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadClients();
    return () => {
      isMounted = false;
    };
  }, [page, searchQuery]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" />
            Registered Accounts
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Client User Management ({totalCount})
          </h2>
        </div>
      </div>

      {/* Messages */}
      {errorMessage && (
        <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Search Bar */}
      <div className="max-w-md mb-6 relative">
        <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search by client name, email, or mobile number..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(1);
          }}
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
        />
      </div>

      {/* Table / Loading */}
      {isLoading ? (
        <div className="space-y-3 py-8">
          <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
          <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
          <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
        </div>
      ) : clients.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <Users className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900 mb-1">No Registered Clients Found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Client user records created via website signup will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Full Legal Name</th>
                <th className="py-3 px-4">Email Address</th>
                <th className="py-3 px-4">Mobile Number</th>
                <th className="py-3 px-4 text-center">Account Role</th>
                <th className="py-3 px-4 text-right">Registration Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 text-sm">
                    {client.fullName}
                  </td>

                  <td className="py-3.5 px-4">
                    <a
                      href={`mailto:${client.email}`}
                      className="inline-flex items-center gap-1 text-slate-700 font-semibold hover:text-blue-700 hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {client.email}
                    </a>
                  </td>

                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${client.mobileNumber}`}
                        className="inline-flex items-center gap-1 font-bold text-blue-700 hover:underline"
                      >
                        <Phone className="w-3.5 h-3.5 text-blue-600" />
                        {client.mobileNumber}
                      </a>
                      <a
                        href={`https://wa.me/91${client.mobileNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded text-emerald-600 hover:bg-emerald-50 transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 text-center">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 font-bold text-[10px] uppercase">
                      <ShieldCheck className="w-3 h-3 text-blue-600" />
                      CLIENT
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right text-slate-500 font-medium">
                    {new Date(client.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
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
    </div>
  );
}
