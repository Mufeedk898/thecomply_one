import React from "react";
import { Building2, ShieldCheck, Users, Award, CheckCircle2, Lock } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Building2,
      value: "10,000+",
      label: "Businesses Incorporated",
      desc: "Private Ltd, LLPs & OPCs across 28 Indian States",
    },
    {
      icon: ShieldCheck,
      value: "99.4%",
      label: "On-Time Compliance SLA",
      desc: "Zero late-fee guarantee on GSTR & MCA filings",
    },
    {
      icon: Users,
      value: "150+",
      label: "Senior CA & CS Experts",
      desc: "Licensed professionals with 8+ years corporate experience",
    },
    {
      icon: Award,
      value: "4.9 / 5.0",
      label: "Client Satisfaction",
      desc: "Rated across 5,000+ verified Google & platform reviews",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Proven Impact & Scale
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Startups, SMEs & Enterprises Nationwide
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Empowering Indian entrepreneurs with institutional-grade corporate compliance, transparent pricing, and zero bureaucrat delay.
          </p>
        </div>

        {/* 4 Large Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800/90 hover:border-blue-500/50 transition-all duration-200 shadow-lg flex flex-col justify-between"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-200 mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Accreditation Bar */}
        <div className="pt-10 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Direct Ministry of Corporate Affairs (MCA V3) Portal Sync</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>GSTN Authorized ASP/GSP Technical Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-400 shrink-0" />
            <span>256-Bit Military Grade Data Vault</span>
          </div>
        </div>

      </div>
    </section>
  );
}
