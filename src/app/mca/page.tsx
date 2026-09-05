import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import {
  Building2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MCA / ROC Compliance Services India | AOC-4, MGT-7, DIR-3 KYC | The Comply One",
  description:
    "Ministry of Corporate Affairs (MCA) statutory filings for Private Limited companies & LLPs. AOC-4, MGT-7, DIR-3 KYC, Director changes, INC-22 office changes & STK-2 strike off.",
};

const MCA_SERVICES = [
  { title: "MCA Compliance Retainer", desc: "Full-year secretarial compliance & ROC filing retainer.", href: "/mca/compliance", badge: "Annual Retainer" },
  { title: "Company Annual Filing (AOC-4 & MGT-7)", desc: "Mandatory annual financial statement & annual return submission.", href: "/mca/company-annual-filing" },
  { title: "LLP Annual Filing (Form 11 & Form 8)", desc: "Annual statement of accounts & return filing for LLPs.", href: "/mca/llp-annual-filing" },
  { title: "Director KYC (DIR-3 KYC)", desc: "Annual mandatory verification for all DIN holders in India.", href: "/mca/director-kyc", badge: "Avoid ₹5k Fine" },
  { title: "DIN Services", desc: "Director Identification Number allocation & DIR-6 updates.", href: "/mca/din" },
  { title: "DSC Services", desc: "Class 3 e-Token Digital Signature Certificate for directors.", href: "/mca/dsc" },
  { title: "Company Name Change", desc: "RUN name approval & INC-24 corporate name alteration.", href: "/mca/company-name-change" },
  { title: "Registered Office Change", desc: "INC-22 filing for address changes within state or across ROCs.", href: "/mca/registered-office-change" },
  { title: "Director Change (Add / Remove)", desc: "DIR-12 filing for appointment or resignation of board members.", href: "/mca/director-change" },
  { title: "Company Closure (Strike Off)", desc: "STK-2 application for legally closing dormant companies.", href: "/mca/company-closure", badge: "Fast-Track STK-2" },
];

export default function MCALandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-200">
              <Building2 className="w-4 h-4 text-purple-600" />
              <span>Ministry of Corporate Affairs & ROC Filings</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              MCA Compliance Without the Complexity
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Manage essential company and LLP compliance with structured professional support from CS & CA experts.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/mca/company-annual-filing">
                <Button variant="primary" size="lg" className="font-bold shadow-lg shadow-blue-600/20">
                  File AOC-4 & MGT-7 →
                </Button>
              </Link>
              <Link href="/mca/director-kyc">
                <Button variant="outline" size="lg" className="font-bold">
                  File DIR-3 KYC
                </Button>
              </Link>
            </div>
          </div>

          {/* MCA Services Grid */}
          <div className="space-y-6 mb-16">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                All MCA V3 & ROC Statutory Services
              </h2>
              <span className="text-xs text-slate-500 font-semibold">100% MCA V3 Compliant</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MCA_SERVICES.map((serv, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                        <Building2 className="w-5 h-5" />
                      </div>
                      {serv.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-amber-50 text-amber-700 border border-amber-200 rounded">
                          {serv.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
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
              Keep Your Company 100% Compliant
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-normal">
              Avoid daily late fees of ₹100 per day and director disqualification with expert Company Secretary assistance.
            </p>
            <div className="flex justify-center gap-3">
              <Link href="/mca/compliance">
                <Button variant="primary" size="lg" className="font-bold px-8 shadow-lg">
                  Explore MCA Retainer →
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
