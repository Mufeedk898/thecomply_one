"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Clock,
  Search,
  Award,
  FileText,
  PhoneCall,
  ChevronRight,
} from "lucide-react";

export function TrademarkComingSoon() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-12 md:py-20 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Trademark Services</span>
          </div>

          {/* Hero Coming Soon Container */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 md:p-16 shadow-xl shadow-slate-200/40 space-y-8 relative overflow-hidden">
            
            {/* Background Glow Effect */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-blue-400/10 via-amber-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gradient-to-tr from-cyan-400/10 via-blue-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-extrabold uppercase tracking-wider border border-amber-200 shadow-xs">
              <Clock className="w-4 h-4 text-amber-600 animate-pulse" />
              <span>Coming Soon • Intellectual Property Desk</span>
            </div>

            {/* Icon */}
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-lg shadow-blue-600/30">
              <ShieldCheck className="w-10 h-10" />
            </div>

            {/* Title & Subtitle */}
            <div className="max-w-2xl mx-auto space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Trademark Services <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
                  Launching Shortly
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                We are currently building our specialized Intellectual Property & Brand Safeguard portal. Full online trademark filing, 45-class similarity search, and legal representation will be available soon.
              </p>
            </div>

            {/* Preview Services Grid */}
            <div className="pt-4 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
                Upcoming Services Suite
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">TM Registration</h4>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded">Soon</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    Brand name & logo filing with TM-A receipt issuance.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100/80 text-indigo-700 flex items-center justify-center font-bold">
                    <Search className="w-4 h-4" />
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">TM Search</h4>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded">Soon</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    Phonetic & exact similarity check across all 45 classes.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-100/80 text-purple-700 flex items-center justify-center font-bold">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">Objection Reply</h4>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded">Soon</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    Legal responses to TM Registry examination reports.
                  </p>
                </div>
              </div>
            </div>

            {/* Immediate Assistance Banner & CTA Buttons */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 text-white p-6 rounded-2xl text-left">
              <div className="space-y-1">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Need Urgent Trademark Legal Guidance?
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  Talk directly with our senior CA & Corporate Legal Team today.
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link href="/consultation">
                  <Button variant="primary" size="md" className="gap-2 bg-blue-600 hover:bg-blue-500">
                    <PhoneCall className="w-4 h-4" />
                    <span>Talk to CA Expert</span>
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="md" className="border-slate-700 text-slate-200 hover:bg-slate-800">
                    <span>Back to Home</span>
                  </Button>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
