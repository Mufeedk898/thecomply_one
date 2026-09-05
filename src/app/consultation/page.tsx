import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import {
  UserCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Expert CA & CS Advisory & Consultation Services | The Comply One",
  description:
    "Book 1-on-1 consultation sessions with senior Chartered Accountants & Company Secretaries. Expert guidance on business registration, income tax, GST, legal & compliance.",
};

const CONSULTATION_SERVICES = [
  { title: "Business Consultation", desc: "Entity selection, business model structuring & corporate expansion strategy.", href: "/consultation/business", badge: "Strategy" },
  { title: "Tax Consultation", desc: "Direct tax planning, dual regime evaluation & maximum tax savings advice.", href: "/consultation/tax", badge: "CA Advisory" },
  { title: "GST Consultation", desc: "GST classification, ITC optimization & notice resolution.", href: "/consultation/gst" },
  { title: "Legal Consultation", desc: "Commercial contracts, co-founder agreements & IP protection.", href: "/consultation/legal", badge: "Legal Counsel" },
  { title: "Startup Consultation", desc: "DPIIT recognition, 80-IAC tax holiday & investor pitch review.", href: "/consultation/startup", badge: "Venture Ready" },
  { title: "Compliance Consultation", desc: "MCA ROC roadmap, secretarial audits & statutory health check.", href: "/consultation/compliance" },
];

export default function ConsultationLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
              <UserCheck className="w-4 h-4 text-blue-600" />
              <span>1-on-1 Professional Advisory Sessions</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Expert Guidance for Your Business
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Get professional guidance for business setup, taxation, GST, compliance and other business requirements directly from senior CAs & CSs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/consultation/business">
                <Button variant="primary" size="lg" className="font-bold shadow-lg shadow-blue-600/20">
                  Talk to an Expert →
                </Button>
              </Link>
              <Link href="#consultation-cards">
                <Button variant="outline" size="lg" className="font-bold">
                  Explore Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Consultation Services Grid */}
          <div id="consultation-cards" className="space-y-6 mb-16">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                All 1-on-1 Consultation Areas
              </h2>
              <span className="text-xs text-slate-500 font-semibold">Senior CA & CS Sessions</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONSULTATION_SERVICES.map((serv, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                        <UserCheck className="w-5 h-5" />
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
                      <span>Book Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-sm space-y-8 my-16">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Why Book a Consultation with The Comply One?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-3">01</div>
                <h4 className="text-base font-bold text-slate-900">Direct CA & CS Access</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">Speak directly with qualified Chartered Accountants and Company Secretaries, not sales reps.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-3">02</div>
                <h4 className="text-base font-bold text-slate-900">100% Actionable Advice</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">Receive clear, step-by-step guidance and follow-up checklists tailored to your entity profile.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-3">03</div>
                <h4 className="text-base font-bold text-slate-900">Confidential & Encrypted</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">Your business ideas, financial figures, and legal queries remain 100% confidential.</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Get Clarity Before Making Big Business Decisions
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-normal">
              Book a 30-minute advisory call with our senior CA/CS team and launch your venture with total confidence.
            </p>
            <div className="flex justify-center gap-3">
              <Link href="/consultation/business">
                <Button variant="primary" size="lg" className="font-bold px-8 shadow-lg">
                  Talk to an Expert →
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
