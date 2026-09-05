import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  FileCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Annual Statutory Compliance Services India | The Comply One",
  description:
    "End-to-end annual statutory compliance services for Indian companies & LLPs. Complete ROC, GST, Income Tax, Payroll, TDS & Secretarial compliance retainers.",
};

const COMPLIANCE_SERVICES = [
  { title: "Annual Compliance Retainer", desc: "Complete full-year compliance retainer for companies & LLPs.", href: "/compliance/annual", badge: "360° Retainer" },
  { title: "GST Compliance", desc: "Monthly GSTR filings, ITC matching & GST audit readiness.", href: "/compliance/gst" },
  { title: "Income Tax Compliance", desc: "Quarterly advance tax, ITR filings & tax optimization.", href: "/compliance/income-tax" },
  { title: "Payroll & HR Compliance", desc: "PF/ESI returns, monthly payroll processing & Form 16.", href: "/compliance/payroll", badge: "Workforce" },
  { title: "TDS Compliance", desc: "Quarterly TDS filings, TCS returns & Form 16/16A generation.", href: "/compliance/tds" },
  { title: "ROC Compliance", desc: "AOC-4, MGT-7, DIR-3 KYC, and INC-20A corporate filings.", href: "/compliance/roc" },
  { title: "Secretarial Compliance", desc: "Maintaining MGT-1, MGT-2, MBP-1, and AGM board minutes.", href: "/compliance/secretarial", badge: "CS Managed" },
  { title: "Compliance Calendar", desc: "Interactive statutory due-date tracker & automated reminders.", href: "/compliance/calendar", badge: "Free Tool" },
];

export default function ComplianceLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
              <ShieldCheck className="w-4 h-4" />
              <span>Full-Spectrum Corporate & Statutory Compliance</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Stay Compliant. Stay Focused on Growth.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Comprehensive annual retainers, secretarial maintenance, payroll & statutory record management by senior CAs & CSs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/compliance/annual">
                <Button variant="primary" size="lg" className="font-bold shadow-lg shadow-blue-600/20">
                  Explore Annual Retainer →
                </Button>
              </Link>
              <Link href="/compliance/calendar">
                <Button variant="outline" size="lg" className="font-bold">
                  View Compliance Calendar
                </Button>
              </Link>
            </div>
          </div>

          {/* Compliance Services Grid */}
          <div className="space-y-6 mb-16">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                All Compliance Retainer Services
              </h2>
              <span className="text-xs text-slate-500 font-semibold">CA & CS Retainers</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMPLIANCE_SERVICES.map((serv, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      {serv.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-amber-50 text-amber-700 border border-amber-200 rounded">
                          {serv.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {serv.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                      {serv.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={serv.href}
                      className="text-xs font-bold text-blue-700 group-hover:underline flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Zero Penalties. 100% Peace of Mind.
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-normal">
              Outsource your complete annual corporate compliance to The Comply One&apos;s dedicated CA & CS teams.
            </p>
            <div className="flex justify-center gap-3">
              <Link href="/compliance/annual">
                <Button variant="primary" size="lg" className="font-bold px-8 shadow-lg">
                  Get Started →
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
