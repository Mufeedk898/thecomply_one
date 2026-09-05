"use client";

import React from "react";
import { FileText, ShieldAlert } from "lucide-react";

interface DocumentsSectionProps {
  documents: string[];
  disclaimer?: string;
  serviceTitle: string;
}

export function DocumentsSection({ documents, disclaimer, serviceTitle }: DocumentsSectionProps) {
  if (!documents || documents.length === 0) return null;

  return (
    <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-sm space-y-6 my-10">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
          Checklist
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
          <FileText className="w-6 h-6 text-blue-700" />
          Documents Required for {serviceTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
          Keep scanned PDF or JPEG copies of these documents ready for quick online verification.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
        {documents.map((doc, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 text-xs sm:text-sm text-slate-800 font-medium"
          >
            <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <span className="leading-snug">{doc}</span>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3 mt-4">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold">Please Note:</strong>{" "}
          {disclaimer || "Document requirements may vary depending on the service, municipal jurisdiction, and applicant profile."}
        </div>
      </div>
    </section>
  );
}
