import React from "react";
import Link from "next/link";
import { Service } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  Building2,
  Receipt,
  ShieldCheck,
  Calculator,
  UserCheck,
  Users,
  FileCheck,
  Rocket,
  Award,
  CheckCircle2,
  Clock,
  ArrowRight,
  Star,
} from "lucide-react";

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  Building2,
  Receipt,
  ShieldCheck,
  Calculator,
  UserCheck,
  Users,
  FileCheck,
  Rocket,
  Award,
};

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const iconName = service.iconName || "Building2";
  const IconComponent = iconMap[iconName] || Building2;
  const displayName = service.name || service.title || "Business Service";
  const displayDesc = service.shortDescription || service.description || "";
  const deliverables = service.deliverables || service.documents || service.documentsRequired || [];

  return (
    <div className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between h-full">
      <div>
        {/* Top Meta Row */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <IconComponent className="w-6 h-6" />
          </div>
        </div>

        {/* Category Pill */}
        {service.categoryName && (
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
            {service.categoryName}
          </span>
        )}

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2.5 line-clamp-1">
          {displayName}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-2">
          {displayDesc}
        </p>

        {/* Turnaround & Rating */}
        {(service.turnaroundTime || service.rating) && (
          <div className="flex items-center justify-between text-xs text-slate-500 py-2.5 px-3 bg-slate-50 rounded-lg mb-5 border border-slate-100">
            {service.turnaroundTime ? (
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                {service.turnaroundTime}
              </span>
            ) : (
              <span className="text-[11px] text-slate-400">Standard Filing</span>
            )}
            {service.rating && (
              <span className="flex items-center gap-1 font-semibold text-slate-800">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                {service.rating} ({service.reviewCount || 100}+)
              </span>
            )}
          </div>
        )}

        {/* Key Deliverables Bullet Points */}
        {!compact && deliverables.length > 0 && (
          <div className="space-y-2 mb-6">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Includes:
            </span>
            {deliverables.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Action */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3 mt-auto">
        <Link href={`/services/${service.slug}`} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="sm"
            className="group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-colors font-semibold"
            rightIcon={<ArrowRight className="w-3.5 h-3.5 ml-0.5" />}
          >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}
