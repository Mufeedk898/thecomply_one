import React from "react";
import { Service } from "@/types";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SearchX } from "lucide-react";

interface ServiceGridProps {
  services: Service[];
  columns?: 2 | 3 | 4;
  compact?: boolean;
  emptyMessage?: string;
  className?: string;
}

export function ServiceGrid({
  services,
  columns = 3,
  compact = false,
  emptyMessage = "No business services found matching your criteria.",
  className = "",
}: ServiceGridProps) {
  if (!services || services.length === 0) {
    return (
      <div className="w-full py-16 px-4 bg-slate-50 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
          <SearchX className="w-6 h-6" />
        </div>
        <h4 className="text-base font-semibold text-slate-800 mb-1">No Services Found</h4>
        <p className="text-xs text-slate-500 max-w-md">{emptyMessage}</p>
      </div>
    );
  }

  const columnStyles = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${columnStyles[columns]} gap-6 ${className}`}>
      {services.map((service) => (
        <ServiceCard key={service.id || service.slug} service={service} compact={compact} />
      ))}
    </div>
  );
}
