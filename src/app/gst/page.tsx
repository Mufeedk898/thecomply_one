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
  title: "GST Services Online India | Registration, Returns & Compliance | The Comply One",
  description:
    "End-to-end GST services in India. GST registration, GSTR-1 & 3B return filing, LUT application, GSTR-9 annual return, e-invoicing & e-way bill with expert CA support.",
};

const GST_SERVICES = [
  { title: "GST Registration", desc: "15-digit GSTIN allocation within 3 to 5 working days.", href: "/gst/registration", badge: "Fast 3-5 Days" },
  { title: "GST Return Filing", desc: "Monthly GSTR-1 & GSTR-3B filings with 100% ITC reconciliation.", href: "/gst/return-filing", badge: "Monthly Retainer" },
  { title: "GST LUT Filing", desc: "Export goods & services without paying IGST upfront.", href: "/gst/lut-filing", badge: "Zero-Rated" },
  { title: "GST Cancellation", desc: "Legally surrender unneeded or dormant GSTIN registrations.", href: "/gst/cancellation" },
  { title: "GST Revocation", desc: "Revoke cancelled GSTIN registrations & clear pending returns.", href: "/gst/revocation" },
  { title: "GST Amendment", desc: "Update core & non-core GST details (address, bank, partners).", href: "/gst/amendment" },
  { title: "GST Annual Return", desc: "Year-end annual return filing & GSTR-9C reconciliation.", href: "/gst/annual-return" },
  { title: "GST Compliance Retainer", desc: "Full-year GST compliance, notice management & ITC protection.", href: "/gst/compliance", badge: "Annual Retainer" },
  { title: "GST E-Invoicing", desc: "B2B electronic invoice generation & IRN portal integration.", href: "/gst/e-invoicing" },
  { title: "GST E-Way Bill", desc: "E-way bill generation for commercial goods movement.", href: "/gst/e-way-bill" },
];

export default function GSTLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
              <ShieldCheck className="w-4 h-4" />
              <span>Complete Indirect Tax & GST Services</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              GST Services Made Simple
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Get professional assistance for GST registration, monthly return filings, LUT exports, and ongoing compliance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/gst/registration">
                <Button variant="primary" size="lg" className="font-bold shadow-lg shadow-blue-600/20">
                  Get Started →
                </Button>
              </Link>
              <Link href="/gst/return-filing">
                <Button variant="outline" size="lg" className="font-bold">
                  File Monthly Returns
                </Button>
              </Link>
            </div>
          </div>

          {/* GST Services Grid */}
          <div className="space-y-6 mb-16">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                All GST Registration & Compliance Services
              </h2>
              <span className="text-xs text-slate-500 font-semibold">CA Managed & Verified</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GST_SERVICES.map((serv, idx) => (
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
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
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
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why GST Compliance Matters */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-sm space-y-8 my-16">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                Why Compliance Matters
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Protect Your Input Tax Credit (ITC)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-3">01</div>
                <h4 className="text-base font-bold text-slate-900">Zero Late Fees</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">Timely filing prevents daily late fee penalties of ₹20-₹50 per day accruing on your portal.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-3">02</div>
                <h4 className="text-base font-bold text-slate-900">100% GSTR-2B Matching</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">Reconcile purchase invoices against GSTR-2B so you claim every single rupee of eligible input credit.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-3">03</div>
                <h4 className="text-base font-bold text-slate-900">Notice Defense</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">Expert legal response to show-cause notices from tax authorities regarding ITC mismatches.</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Outsource Your GST Compliance?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-normal">
              Talk to our senior GST Chartered Accountants and start seamless return filings today.
            </p>
            <div className="flex justify-center gap-3">
              <Link href="/gst/registration">
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
