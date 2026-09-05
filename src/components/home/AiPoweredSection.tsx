"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Receipt,
  FileText,
  Landmark,
  ShieldCheck,
  Scale,
  Users,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export function AiPoweredSection() {
  const leftPills = [
    {
      id: "biz-reg",
      title: "Business Registration",
      href: "/services?category=startup",
      icon: Building2,
      pathD: "M 185 38 C 225 38, 245 80, 270 108",
      dur: "3.2s",
      begin: "0s",
      colorGrad: "url(#ai-blue-cyan-purple)",
    },
    {
      id: "gst-comp",
      title: "GST Compliance",
      href: "/gst",
      icon: Receipt,
      pathD: "M 185 110 C 220 110, 240 115, 270 115",
      dur: "3.8s",
      begin: "0.4s",
      colorGrad: "url(#ai-cyan-purple-blue)",
    },
    {
      id: "inc-tax",
      title: "Income Tax Filing",
      href: "/income-tax",
      icon: FileText,
      pathD: "M 185 182 C 225 182, 245 140, 270 122",
      dur: "4.2s",
      begin: "0.8s",
      colorGrad: "url(#ai-purple-blue-cyan)",
    },
  ];

  const rightPills = [
    {
      id: "mca-roc",
      title: "MCA & ROC Compliance",
      href: "/mca",
      icon: Landmark,
      pathD: "M 535 28 C 495 28, 475 75, 450 105",
      dur: "3.5s",
      begin: "0.2s",
      colorGrad: "url(#ai-cyan-purple-blue)",
    },
    {
      id: "tm-prot",
      title: "Trademark Protection",
      href: "/trademark",
      icon: ShieldCheck,
      pathD: "M 535 82 C 495 82, 475 98, 450 112",
      dur: "4.0s",
      begin: "0.6s",
      colorGrad: "url(#ai-blue-cyan-purple)",
    },
    {
      id: "leg-comp",
      title: "Legal & Compliance",
      href: "/compliance/secretarial",
      icon: Scale,
      pathD: "M 535 138 C 495 138, 475 128, 450 118",
      dur: "4.5s",
      begin: "1.0s",
      colorGrad: "url(#ai-purple-blue-cyan)",
    },
    {
      id: "hr-pay",
      title: "HR & Payroll",
      href: "/compliance/payroll",
      icon: Users,
      pathD: "M 535 192 C 495 192, 475 145, 450 125",
      dur: "3.9s",
      begin: "0.5s",
      colorGrad: "url(#ai-blue-cyan-purple)",
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-r from-[#021554] via-[#04288b] to-[#02134c] text-white rounded-3xl md:rounded-[32px] my-8 shadow-2xl relative overflow-hidden border border-blue-500/20">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-blue-500/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Embedded CSS for Continuous Color Cycling Gradient & Dash Flow */}
      <style jsx>{`
        @keyframes dashFlow {
          from {
            stroke-dashoffset: 40;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes gradShift1 {
          0%, 100% { stop-color: #3b82f6; }
          33% { stop-color: #06b6d4; }
          66% { stop-color: #a855f7; }
        }

        @keyframes gradShift2 {
          0%, 100% { stop-color: #06b6d4; }
          33% { stop-color: #a855f7; }
          66% { stop-color: #3b82f6; }
        }

        @keyframes gradShift3 {
          0%, 100% { stop-color: #a855f7; }
          33% { stop-color: #3b82f6; }
          66% { stop-color: #06b6d4; }
        }

        .animate-dash-flow {
          animation: dashFlow 2.2s linear infinite;
        }

        .grad-stop-1 { animation: gradShift1 9s ease-in-out infinite; }
        .grad-stop-2 { animation: gradShift2 9s ease-in-out infinite; }
        .grad-stop-3 { animation: gradShift3 9s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Compact Content Block (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Label with Line Accent */}
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">
              AI-POWERED
            </span>
            <span className="h-[1.5px] w-10 bg-gradient-to-r from-cyan-400 to-transparent"></span>
          </div>

          {/* Compact Headline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-[1.18]">
            India compliance, simplified with intelligence.
          </h2>

          {/* Compact Supporting Text */}
          <p className="text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed max-w-sm">
            Stay compliant in India with automated help for GST filing, income tax returns, ROC compliance, and annual filings – with smart reminders and audit trails.
          </p>

          {/* White Pill Button */}
          <div className="pt-2">
            <Link href="/services">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-white text-[#04237d] font-bold text-xs sm:text-sm px-5.5 py-2.5 rounded-full hover:bg-blue-50 transition-all duration-200 shadow-lg shadow-black/20 hover:scale-105"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4 text-[#04237d]" />
              </button>
            </Link>
          </div>

        </div>

        {/* RIGHT COLUMN: Spacious Visual Panel with Precise Layered Connectors (8 Cols) */}
        <div className="lg:col-span-8 relative min-h-[260px] flex items-center justify-center">
          
          {/* SVG Canvas Layer (z-10) — Renders strictly BELOW service pills (z-20) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-10"
            viewBox="0 0 720 230"
            fill="none"
          >
            <defs>
              {/* Blue -> Cyan -> Purple Gradient */}
              <linearGradient id="ai-blue-cyan-purple" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="grad-stop-1" />
                <stop offset="100%" className="grad-stop-2" />
              </linearGradient>

              {/* Cyan -> Purple -> Blue Gradient */}
              <linearGradient id="ai-cyan-purple-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="grad-stop-2" />
                <stop offset="100%" className="grad-stop-3" />
              </linearGradient>

              {/* Purple -> Blue -> Cyan Gradient */}
              <linearGradient id="ai-purple-blue-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="grad-stop-3" />
                <stop offset="100%" className="grad-stop-1" />
              </linearGradient>

              {/* Soft Cyan Glow Filter */}
              <filter id="neon-line-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left Connector Paths & Traveling Data Particles */}
            {leftPills.map((pill) => (
              <g key={`left-path-${pill.id}`}>
                <path
                  d={pill.pathD}
                  stroke={pill.colorGrad}
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  fill="none"
                  filter="url(#neon-line-glow)"
                  className="animate-dash-flow"
                />
                <circle r="3" fill="#00ffff" filter="url(#neon-line-glow)">
                  <animateMotion
                    path={pill.pathD}
                    dur={pill.dur}
                    begin={pill.begin}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            ))}

            {/* Right Connector Paths & Traveling Data Particles */}
            {rightPills.map((pill) => (
              <g key={`right-path-${pill.id}`}>
                <path
                  d={pill.pathD}
                  stroke={pill.colorGrad}
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  fill="none"
                  filter="url(#neon-line-glow)"
                  className="animate-dash-flow"
                />
                <circle r="3" fill="#e040fb" filter="url(#neon-line-glow)">
                  <animateMotion
                    path={pill.pathD}
                    dur={pill.dur}
                    begin={pill.begin}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            ))}
          </svg>

          {/* Interactive Content Container Layer (z-20) — Elevated above SVG connector lines */}
          <div className="hidden lg:grid grid-cols-12 gap-4 items-center w-full relative z-20 py-2">
            
            {/* 3 Left Pills Column */}
            <div className="col-span-4 space-y-3.5">
              {leftPills.map((pill) => {
                const IconComp = pill.icon;
                return (
                  <Link
                    key={pill.id}
                    href={pill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#082e96]/90 hover:bg-[#0b3bbd] border border-blue-400/40 hover:border-cyan-300 rounded-full px-4 py-2.5 flex items-center justify-between text-white transition-all duration-200 shadow-md group hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center shrink-0">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold truncate group-hover:text-cyan-300 transition-colors">
                        {pill.title}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-1 transition-transform shrink-0 ml-1" />
                  </Link>
                );
              })}
            </div>

            {/* Central AI Compliance Hub Box */}
            <div className="col-span-4 flex items-center justify-center">
              <div className="relative group">
                {/* Glowing Neon Background Ring */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-md opacity-85 group-hover:opacity-100 transition duration-300 animate-pulse"></div>

                <div className="relative bg-[#041a63] border-2 border-cyan-300 rounded-3xl p-5 text-center shadow-[0_0_40px_rgba(0,210,255,0.6)] w-48 h-44 flex flex-col items-center justify-center space-y-2 z-20">
                  {/* Shield Check Icon */}
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white flex items-center justify-center shadow-lg shadow-cyan-400/30 border border-cyan-200/40">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  
                  <div>
                    <div className="text-xs font-black tracking-wider text-white uppercase">
                      THE COMPLY ONE
                    </div>
                    <div className="text-[9px] font-extrabold text-cyan-300 uppercase tracking-widest mt-0.5">
                      AI COMPLIANCE HUB
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Right Pills Column */}
            <div className="col-span-4 space-y-2.5">
              {rightPills.map((pill) => {
                const IconComp = pill.icon;
                return (
                  <Link
                    key={pill.id}
                    href={pill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#082e96]/90 hover:bg-[#0b3bbd] border border-blue-400/40 hover:border-cyan-300 rounded-full px-4 py-2.5 flex items-center justify-between text-white transition-all duration-200 shadow-md group hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center shrink-0">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold truncate group-hover:text-cyan-300 transition-colors">
                        {pill.title}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-1 transition-transform shrink-0 ml-1" />
                  </Link>
                );
              })}
            </div>

          </div>

          {/* Mobile / Tablet Responsive Stack Layout */}
          <div className="lg:hidden w-full space-y-6 text-center py-4 relative z-20">
            
            {/* Center Hub */}
            <div className="inline-block relative">
              <div className="absolute -inset-2 rounded-2xl bg-cyan-400 blur-md opacity-70"></div>
              <div className="relative bg-[#041a63] border-2 border-cyan-300 rounded-2xl px-6 py-4 text-center shadow-xl space-y-1">
                <ShieldCheck className="w-7 h-7 text-cyan-300 mx-auto" />
                <div className="text-xs font-black text-white uppercase">THE COMPLY ONE</div>
                <div className="text-[10px] font-extrabold text-cyan-300 uppercase tracking-widest">
                  AI COMPLIANCE HUB
                </div>
              </div>
            </div>

            {/* Mobile Grid Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[...leftPills, ...rightPills].map((pill) => {
                const IconComp = pill.icon;
                return (
                  <Link
                    key={`mob-${pill.id}`}
                    href={pill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#082e96]/90 border border-blue-400/30 rounded-full px-4 py-2.5 flex items-center justify-between text-white text-xs font-bold"
                  >
                    <div className="flex items-center gap-2">
                      <IconComp className="w-4 h-4 text-cyan-300" />
                      <span>{pill.title}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                  </Link>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
