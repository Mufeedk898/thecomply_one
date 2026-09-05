"use client";

import React from "react";
import { StartupServiceTier } from "@/data/startupServices";
import { Button } from "@/components/ui/Button";
import { Check, Star } from "lucide-react";

interface PricingSectionProps {
  tiers: StartupServiceTier[];
  serviceTitle: string;
}

export function PricingSection({ tiers, serviceTitle }: PricingSectionProps) {
  return null;

  return (
    <section className="py-12 bg-slate-50/70 rounded-3xl border border-slate-200/80 p-6 md:p-10 my-12">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200/80 inline-block mb-3">
          Transparent Pricing Packages
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Select Your {serviceTitle.replace(" Registration", "")} Package
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
          Clear, upfront service plans with zero hidden charges. All government fee breakdowns communicated prior to filing.
        </p>
      </div>

      <div className={`grid grid-cols-1 ${tiers.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"} gap-6 max-w-6xl mx-auto`}>
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl p-6 md:p-7 border flex flex-col justify-between transition-all duration-200 relative ${
              tier.recommended
                ? "border-amber-400 shadow-xl ring-2 ring-amber-400/20 scale-[1.02] z-10"
                : "border-slate-200 shadow-sm hover:shadow-md"
            }`}
          >
            {tier.recommended && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Star className="w-3 h-3 fill-white" />
                Recommended Choice
              </div>
            )}

            <div>
              <div className="border-b border-slate-100 pb-5">
                <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {tier.description}
                </p>
                <div className="mt-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {tier.priceTag}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    + Government Stamp Duty / MCA Fees (At Actuals)
                  </span>
                </div>
              </div>

              <div className="py-5 space-y-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Included Services:
                </span>
                <ul className="space-y-2.5">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Button
                variant={tier.recommended ? "primary" : "outline"}
                size="md"
                className="w-full font-bold"
                onClick={() => {
                  const formElement = document.getElementById("enquiry-form");
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Select Package →
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-xs text-slate-500">
        <p>* Prices indicated above represent starting professional fee estimates. Actual state stamp duties and government filing fees are charged at transparent government portal rates.</p>
      </div>
    </section>
  );
}
