"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICE_CATEGORIES, ALL_SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCategoryKey } from "@/types";
import { ArrowRight } from "lucide-react";

export function ServiceCategorySection() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<ServiceCategoryKey>("startup");

  const filteredServices = ALL_SERVICES.filter(
    (service) => service.category === selectedCategoryId
  );

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Explore All Services"
          title="Nine Core Compliance Verticals for Indian Business"
          subtitle="From incorporation and government licensing to intellectual property and monthly CA compliance."
        />

        {/* Category Pills Nav */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar scroll-smooth">
          {SERVICE_CATEGORIES.map((cat) => {
            const isSelected = cat.id === selectedCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all duration-200 border ${
                  isSelected
                    ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

          {/* Fillers if category has few items in dataset */}
          {filteredServices.length === 0 && (
            <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm">
                Custom advisory available for this category. Contact our CAs directly.
              </p>
              <Link href="/consultation" className="inline-block mt-4 text-blue-700 font-semibold text-xs hover:underline">
                Book Consultation Call →
              </Link>
            </div>
          )}
        </div>

        {/* View All Services Footer */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-blue-700 font-semibold text-sm shadow-sm transition-all"
          >
            <span>View Full Service Catalog (30+ Services)</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>
        </div>

      </div>
    </section>
  );
}
