import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ShieldCheck,
  Zap,
  Lock,
  UserCheck,
  CheckCircle2,
  FileCheck2,
  Building2,
  Award,
} from "lucide-react";

export function TrustSection() {
  const trustPoints = [
    {
      icon: UserCheck,
      title: "Licensed CA & CS Professionals",
      description: "Directly handled by practicing Chartered Accountants and Company Secretaries registered with ICAI and ICSI.",
    },
    {
      icon: ShieldCheck,
      title: "100% Transparent Pricing",
      description: "Zero hidden charges. Complete breakdown of professional service fees and exact government stamp duties upfront.",
    },
    {
      icon: Zap,
      title: "Express SLA Guarantees",
      description: "Fastest turnaround times in India with automated tracking on MCA V3 and GST portals.",
    },
    {
      icon: Lock,
      title: "Enterprise Document Vault",
      description: "256-bit SSL encrypted vault storing your PAN, Aadhaar, Board Resolutions, and Certificate copies securely.",
    },
    {
      icon: FileCheck2,
      title: "Error-Free Statutory Filings",
      description: "Rigorous 3-tier CA audit before submitting any form to prevent MCA rejections or show-cause notices.",
    },
    {
      icon: Building2,
      title: "All-in-One Dashboard",
      description: "Manage multiple entities, GST filing schedules, and director KYCs from a single intuitive corporate dashboard.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Why Choose Us"
          title="Built for Corporate Peace of Mind"
          subtitle="We eliminate the complexity of Indian business compliance so founders can focus purely on business growth."
        />

        {/* 6 Trust Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verification Strip */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold">
                Officially Verified Corporate Advisory Platform
              </h4>
              <p className="text-xs text-blue-200 mt-0.5">
                Compliant with Companies Act 2013, GST Council Regulations & Trademarks Act 1999.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-blue-200 shrink-0">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ICAI / ICSI Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ISO 27001 Data Security</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
