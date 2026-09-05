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
  title: "Income Tax Services India | ITR Filing, Tax Audit & TDS | The Comply One",
  description:
    "Professional Income Tax services in India. ITR filing for individuals & businesses, Section 44AB CA Tax Audits, quarterly TDS returns, Advance Tax & Notice replies.",
};

const INCOME_TAX_SERVICES = [
  { title: "Income Tax Return Filing", desc: "Complete ITR filing for individuals, freelancers, and businesses.", href: "/income-tax/return-filing" },
  { title: "ITR Filing for Individuals", desc: "ITR-1, ITR-2 for salaried employees, directors & HNIs.", href: "/income-tax/individual-return" },
  { title: "Business Tax Filing", desc: "ITR-3, ITR-4 (Presumptive Tax), and ITR-6 for corporate entities.", href: "/income-tax/business-return", badge: "Corporate" },
  { title: "Tax Audit (Sec 44AB)", desc: "Mandatory CA tax audit report filing for high-turnover entities.", href: "/income-tax/tax-audit", badge: "Form 3CD Audit" },
  { title: "TDS Return Filing", desc: "Quarterly 24Q, 26Q, 27Q filings & Form 16/16A generation.", href: "/income-tax/tds-return" },
  { title: "TDS Registration (TAN)", desc: "Obtain 10-digit Tax Deduction Account Number for employers.", href: "/income-tax/tds-registration" },
  { title: "Advance Tax Calculation", desc: "Quarterly advance tax computation & payment challan guidance.", href: "/income-tax/advance-tax" },
  { title: "Income Tax Notice Assistance", desc: "Expert CA response to Section 143(1), 142(1), and 148 notices.", href: "/income-tax/notice-assistance", badge: "CA Defense" },
  { title: "PAN Services", desc: "New Permanent Account Number application & correction.", href: "/income-tax/pan" },
  { title: "TAN Services", desc: "TAN allotment & correction services for deductors.", href: "/income-tax/tan" },
];

export default function IncomeTaxLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Direct Tax & Income Tax Optimization</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Income Tax Services for Individuals & Businesses
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Accurate tax planning, TDS return filing, Section 44AB audits, and ITR submissions with expert CA guidance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/income-tax/return-filing">
                <Button variant="primary" size="lg" className="font-bold shadow-lg shadow-blue-600/20">
                  File Income Tax Return →
                </Button>
              </Link>
              <Link href="/income-tax/tax-audit">
                <Button variant="outline" size="lg" className="font-bold">
                  Book Tax Audit
                </Button>
              </Link>
            </div>
          </div>

          {/* Income Tax Services Grid */}
          <div className="space-y-6 mb-16">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                All Income Tax & Direct Tax Services
              </h2>
              <span className="text-xs text-slate-500 font-semibold">CA Assisted & Optimized</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INCOME_TAX_SERVICES.map((serv, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      {serv.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200 rounded">
                          {serv.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
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
              Optimize Your Income Tax Return Today
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-normal">
              Compare Old vs New tax regimes and maximize your eligible tax deductions with senior CAs.
            </p>
            <div className="flex justify-center gap-3">
              <Link href="/income-tax/return-filing">
                <Button variant="primary" size="lg" className="font-bold px-8 shadow-lg">
                  File ITR Now →
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
