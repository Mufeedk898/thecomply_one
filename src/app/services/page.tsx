"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ALL_SERVICES, SERVICE_CATEGORIES } from "@/data/services";
import { ServiceGrid } from "@/components/common/ServiceGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCategoryKey } from "@/types";
import { Search } from "lucide-react";

function ServicesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as ServiceCategoryKey | null;
  const initialSearch = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState<ServiceCategoryKey | "all">(
    initialCategory || "all"
  );
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((service) => {
      const matchesCategory =
        selectedCategory === "all" || service.category === selectedCategory;
      const titleName = service.name || service.title || "";
      const desc = service.shortDescription || service.description || "";
      const tags = service.tags || [];
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        titleName.toLowerCase().includes(query) ||
        desc.toLowerCase().includes(query) ||
        tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <SectionHeading
          badge="Full Service Catalog"
          title="Business Services & Statutory Compliance"
          subtitle="Browse transparently priced incorporation packages, license registrations, IP protection, and CA retainer services."
          align="center"
        />

        {/* Search & Filter Header */}
        <div className="bg-white rounded-2xl p-4 md:p-6 border border-slate-200/90 shadow-sm mb-10 flex flex-col md:flex-row items-center gap-4 justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search services (e.g. Pvt Ltd, GST, Trademark)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
                selectedCategory === "all"
                  ? "bg-blue-700 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Services ({ALL_SERVICES.length})
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-blue-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <ServiceGrid
          services={filteredServices}
          columns={3}
          emptyMessage="No matching services found. Try clearing your search query or selecting another category filter."
          className="mb-16"
        />
      </div>
    </main>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />
      <Suspense fallback={<div className="flex-1 py-20 text-center text-xs text-slate-500">Loading service catalogue...</div>}>
        <ServicesContent />
      </Suspense>
      <Footer />
    </div>
  );
}
