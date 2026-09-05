"use client";

import React from "react";
import { StartupServiceProcessStep } from "@/data/startupServices";
import { CheckCircle2 } from "lucide-react";

interface ProcessStepsSectionProps {
  steps: StartupServiceProcessStep[];
  serviceTitle: string;
}

export function ProcessStepsSection({ steps, serviceTitle }: ProcessStepsSectionProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-sm space-y-8 my-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
            Simple 5-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How Your {serviceTitle.replace(" Registration", "")} Gets Done
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/80 shrink-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>100% Paperless Digital Workflow</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-slate-50/60 rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-200 group"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center mb-3 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                {step.stepNumber}
              </div>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {step.description}
              </p>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                {/* Visual arrow connector */}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
