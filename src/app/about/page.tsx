import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Building2,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | The Comply One",
  description:
    "Learn about The Comply One — India's premier corporate services & compliance platform. Helping startups & enterprises start right, stay compliant, and grow faster.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>Corporate Compliance & Technology Platform</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Helping Businesses Start Right and Stay Compliant
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              The Comply One combines technology with a network of verified Chartered Accountants and Company Secretaries to simplify corporate governance for Indian enterprises.
            </p>

            <div className="flex justify-center gap-3 pt-2">
              <Link href="/consultation">
                <Button variant="primary" size="lg" className="font-bold shadow-lg shadow-blue-600/20">
                  Talk to Our Advisors →
                </Button>
              </Link>
            </div>
          </div>

          {/* About & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                To eliminate compliance complexity for entrepreneurs by offering transparent, technology-enabled business registration, tax return filing, trademark protection, and secretarial retainer services under one roof.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Approach</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We bridge the gap between complex government portals (MCA V3, GSTIN, TRACES, FoSCoS) and business owners. Our streamlined workflows ensure zero late fees, maximum tax savings, and complete statutory accuracy.
              </p>
            </div>
          </div>

          {/* What We Help With */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-sm space-y-8 mb-16">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                Full Spectrum Support
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What We Help Businesses Accomplish
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Business Incorporation", desc: "Private Limited, LLP, OPC, Section 8 NGO, Partnership & Proprietorship." },
                { title: "Statutory Registrations", desc: "MSME Udyam, FSSAI Food License, Import Export Code & Shop Act." },
                { title: "Intellectual Property", desc: "Trademark ™ filing in 24 hours, TM Search, Objection replies & Renewals." },
                { title: "GST & Indirect Taxes", desc: "GSTR-1 & 3B return filing, LUT export approvals, e-invoicing & GSTR-9." },
                { title: "Direct Tax & ITR", desc: "Corporate & individual income tax filing, Section 44AB audits & notice help." },
                { title: "MCA Secretarial Audit", desc: "Form AOC-4, MGT-7, DIR-3 KYC, director changes & company strike off." },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 space-y-8 mb-16">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <h4 className="text-base font-bold text-amber-400">1. Absolute Transparency</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  No hidden government fees or unexpected billing. Every pricing tier is stated clearly upfront.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <h4 className="text-base font-bold text-emerald-400">2. Professional Rigor</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Filings are prepared and reviewed by qualified Chartered Accountants and Secretarial practitioners.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                <h4 className="text-base font-bold text-blue-400">3. Timely Execution</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Statutory deadlines are tracked rigorously to ensure zero daily late fees or interest penalties.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-6 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ready to Start or Scale Your Enterprise?
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Join thousands of businesses who trust The Comply One for their legal and statutory needs.
            </p>
            <div className="flex justify-center gap-3">
              <Link href="/consultation">
                <Button variant="primary" size="lg" className="font-bold px-8 shadow-lg">
                  Book Advisory Session →
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
