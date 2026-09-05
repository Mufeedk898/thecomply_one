"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ALL_SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuotationModal } from "@/components/common/QuotationModal";
import { ArrowRight, FileText } from "lucide-react";

export function PopularServices() {
  const [isQuotationOpen, setIsQuotationOpen] = useState(false);
  const popularServices = ALL_SERVICES.filter((service) => service.popular).slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="High Demand Solutions"
          title="Core Statutory Services for Indian Startups"
          subtitle="Top corporate registrations and monthly tax filings chosen by over 10,000+ business owners."
        />

        {/* 6 Popular Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {popularServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Action Link & Request for Quotation Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 hover:underline py-2.5 px-4 rounded-xl hover:bg-blue-50/60 transition-colors"
          >
            <span>View All 30+ Corporate Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => setIsQuotationOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 py-2.5 px-5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Request for Quotation</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Quotation Modal */}
        <QuotationModal
          isOpen={isQuotationOpen}
          onClose={() => setIsQuotationOpen(false)}
        />

      </div>
    </section>
  );
}
