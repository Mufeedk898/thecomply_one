"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { PRICING_PLANS } from "@/data/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check, X, Sparkles, ShieldCheck } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <SectionHeading
            badge="Tailored Compliance Retainers"
            title="Choose the Right Plan for Your Business Growth"
            subtitle="Complete visibility into professional CA/CS retainer features and statutory filing support."
          />

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PRICING_PLANS.map((plan) => {
              return (
                <div
                  key={plan.id}
                  className={`bg-white rounded-3xl p-8 border transition-all duration-200 flex flex-col justify-between relative ${
                    plan.popular
                      ? "border-blue-600 shadow-xl ring-2 ring-blue-600/20 scale-[1.02]"
                      : "border-slate-200/90 shadow-sm hover:shadow-md"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Most Popular Plan
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      {plan.tagline}
                    </p>

                    <div className="pb-6 mb-8 border-b border-slate-100 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                      <span className="text-sm font-bold text-slate-800">
                        CA & CS Managed Package
                      </span>
                    </div>

                    <div className="space-y-3 mb-8">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Included Features:
                      </span>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          {feat.included ? (
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                          )}
                          <span className={feat.included ? "font-medium" : "text-slate-400 line-through"}>
                            {feat.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/consultation">
                    <Button
                      variant={plan.popular ? "primary" : "outline"}
                      size="lg"
                      className="w-full font-semibold"
                    >
                      Request Plan Guidance →
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
