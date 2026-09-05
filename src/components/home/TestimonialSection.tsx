import React from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, CheckCircle2 } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Client Success Stories"
          title="Trusted by Founders, CFOs & Business Leaders"
          subtitle="See what Indian entrepreneurs have to say about our CA-assisted incorporation and year-round compliance services."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Client
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.role}, <span className="text-slate-700">{item.companyName}</span>
                  </p>
                </div>
                <span className="text-[11px] font-medium text-slate-400">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
