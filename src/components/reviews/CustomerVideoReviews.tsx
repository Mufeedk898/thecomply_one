"use client";

import React from "react";
import { CUSTOMER_REVIEWS } from "@/data/customerReviews";
import { Star, UserCheck } from "lucide-react";

interface CustomerVideoReviewsProps {
  title?: string;
  subtitle?: string;
  limit?: number;
}

export function CustomerVideoReviews({
  title = "What Our Customers Say",
  subtitle = "Real experiences from businesses and customers we've helped.",
  limit,
}: CustomerVideoReviewsProps) {
  const reviewsToDisplay = limit ? CUSTOMER_REVIEWS.slice(0, limit) : CUSTOMER_REVIEWS;

  return (
    <section className="py-12 sm:py-16 bg-slate-900 text-white rounded-3xl my-12 border border-slate-800 shadow-2xl relative overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-400/20">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Verified Customer Reviews</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            {title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsToDisplay.map((review) => (
            <div
              key={review.id}
              className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                {/* Top Badge & Rating */}
                <div className="flex items-center justify-between">
                  <span className="inline-block text-[10px] font-bold uppercase bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full border border-blue-400/30">
                    {review.service}
                  </span>

                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-300 ml-1">5.0</span>
                  </div>
                </div>

                {/* Customer Review Quote */}
                <p className="text-xs text-slate-200 leading-relaxed font-normal pt-1 italic">
                  &quot;{review.description}&quot;
                </p>
              </div>

              {/* Customer Info Footer */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {review.name}
                  </h3>
                  {review.company && (
                    <p className="text-[11px] text-slate-400 font-medium">
                      {review.company}
                    </p>
                  )}
                </div>

                <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 border border-blue-400/30 flex items-center justify-center font-bold text-xs">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
