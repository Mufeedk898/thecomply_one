"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Calendar, CheckCircle2 } from "lucide-react";
import { RequestSubmissionForm } from "@/components/common/RequestSubmissionForm";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function CTASection({
  title = "Ready to Make Your Business 100% Compliant?",
  subtitle = "Speak directly with a licensed Chartered Accountant or Company Secretary. Get upfront clarity on tax structures, incorporation, and legal filings.",
  primaryCtaText = "Book CA Consultation →",
  primaryCtaHref = "/consultation",
  secondaryCtaText = "Talk to an Expert",
  secondaryCtaHref = "/consultation",
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 rounded-3xl p-8 md:p-14 text-white relative overflow-hidden shadow-xl border border-slate-800">
          
          {/* Subtle Background Glow */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30 mb-6">
              <Calendar className="w-3.5 h-3.5" />
              <span>Direct Expert Consultation</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {title}
            </h2>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href={primaryCtaHref} className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 font-semibold px-8 shadow-md"
                >
                  {primaryCtaText}
                </Button>
              </Link>

              <Link href={secondaryCtaHref} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-white border-slate-700 hover:bg-slate-800/60 font-semibold px-8"
                >
                  {secondaryCtaText}
                </Button>
              </Link>
            </div>

            {/* Request Submission Form & Email */}
            <RequestSubmissionForm dark={true} />

            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-slate-800 text-xs text-slate-400 mt-8">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                30-Minute Private Call
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Confidential NDA Standard
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Sales Pressure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
