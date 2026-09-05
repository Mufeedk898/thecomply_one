"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/site";
import { MessageSquare } from "lucide-react";

interface WhatsAppCTAProps {
  label?: string;
  className?: string;
}

export function WhatsAppCTA({ label = "Chat on WhatsApp", className = "" }: WhatsAppCTAProps) {
  const isConfigured = SITE_CONFIG.whatsappNumber && SITE_CONFIG.whatsappNumber !== "REPLACE_WITH_REAL_NUMBER";

  if (!isConfigured) {
    return (
      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-400 text-xs font-semibold border border-slate-200 cursor-not-allowed ${className}`}>
        <MessageSquare className="w-4 h-4 text-slate-400" />
        <span>WhatsApp (Add Number in site.ts)</span>
      </span>
    );
  }

  return (
    <a
      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-colors ${className}`}
    >
      <MessageSquare className="w-4 h-4 text-white" />
      <span>{label}</span>
    </a>
  );
}
