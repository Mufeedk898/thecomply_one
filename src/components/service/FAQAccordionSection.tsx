"use client";

import React, { useState } from "react";
import { StartupServiceFAQ } from "@/data/startupServices";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQAccordionSectionProps {
  faqs: StartupServiceFAQ[];
  serviceTitle: string;
}

export function FAQAccordionSection({ faqs, serviceTitle }: FAQAccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-sm space-y-6 my-10">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
          Got Questions?
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-blue-700" />
          Frequently Asked Questions on {serviceTitle}
        </h2>
      </div>

      <div className="space-y-3 pt-2">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isOpen ? "border-blue-200 bg-blue-50/20 shadow-sm" : "border-slate-200/80 bg-white hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left font-bold text-slate-900 text-sm md:text-base gap-3 focus:outline-none"
              >
                <span>{faq.question}</span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-blue-100 text-blue-700 rotate-180" : "bg-slate-100 text-slate-500"}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 md:px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-blue-100/50 mt-1">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
