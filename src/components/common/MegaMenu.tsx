"use client";

import React from "react";
import Link from "next/link";
import { NAVIGATION_CATEGORIES } from "@/data/navigation";
import { SERVICE_CATEGORIES } from "@/data/services";
import { ServiceCategoryKey } from "@/types";
import {
  ArrowRight,
  Rocket,
  FileCheck,
  Award,
  ShieldCheck,
  Receipt,
  Calculator,
  Building2,
  CheckCircle2,
  UserCheck,
  Users,
  ChevronRight,
  Clock,
  Sparkles,
} from "lucide-react";

interface MegaMenuProps {
  activeCategoryKey: ServiceCategoryKey | null;
  onClose: () => void;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  startup: Rocket,
  registrations: FileCheck,
  licences: Award,
  trademark: ShieldCheck,
  gst: Receipt,
  "income-tax": Calculator,
  mca: Building2,
  compliance: CheckCircle2,
  consultation: UserCheck,
  "hr-payroll": Users,
};

export function MegaMenu({ activeCategoryKey, onClose }: MegaMenuProps) {
  if (!activeCategoryKey) return null;

  // 1. Find matching navigation category
  const navCategory = NAVIGATION_CATEGORIES.find((cat) => cat.key === activeCategoryKey);
  const serviceCategoryInfo = SERVICE_CATEGORIES.find((cat) => cat.id === activeCategoryKey);

  if (!navCategory) return null;

  const IconComponent = CATEGORY_ICONS[activeCategoryKey] || Rocket;
  const itemsToShow = navCategory.items || [];
  const subtitleText =
    serviceCategoryInfo?.shortDesc ||
    navCategory.featuredDesc ||
    `Verified Indian statutory ${navCategory.title} filings and services.`;

  const isMultiColumn = itemsToShow.length > 6 || activeCategoryKey === "startup";
  const containerWidth = activeCategoryKey === "trademark" ? "w-[420px]" : isMultiColumn ? "w-[680px]" : "w-[420px]";

  return (
    <div
      className={`absolute top-full left-0 mt-1 ${containerWidth} bg-white border border-slate-200/90 shadow-2xl rounded-2xl p-5 z-50 animate-in fade-in zoom-in-95 duration-150`}
      onMouseLeave={onClose}
    >
      {/* Dropdown Header */}
      <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold shrink-0 border border-blue-200/60">
          <IconComponent className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
            <span>{navCategory.title} Services</span>
            {activeCategoryKey === "trademark" && (
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-amber-100 text-amber-800 rounded-full border border-amber-300">
                Coming Soon
              </span>
            )}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1 leading-normal font-normal">
            {subtitleText}
          </p>
        </div>
      </div>

      {/* If Trademark, render Coming Soon Card */}
      {activeCategoryKey === "trademark" ? (
        <div className="py-6 px-3 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mx-auto border border-amber-200 shadow-sm">
            <Clock className="w-6 h-6 animate-pulse text-amber-600" />
          </div>
          <div className="space-y-1.5 max-w-xs mx-auto">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3 h-3" />
              Coming Soon
            </span>
            <h4 className="text-base font-bold text-slate-900">Trademark Suite Launching Soon</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Our end-to-end Intellectual Property, Trademark Filing & Legal Defense portal is under active development.
            </p>
          </div>
          <Link
            href="/trademark"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
          >
            <span>Learn More & Early Access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : (
        /* Standard Services List */
        <div className={`py-2 max-h-[380px] overflow-y-auto custom-scrollbar ${isMultiColumn ? "grid grid-cols-2 gap-x-3 gap-y-1" : "space-y-1"}`}>
          {itemsToShow.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-100/80 transition-all duration-150"
            >
              <div className="flex flex-col pr-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </span>
                </div>
                {item.description && (
                  <span className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 leading-normal font-normal">
                    {item.description}
                  </span>
                )}
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          ))}
        </div>
      )}

      {/* Dropdown Footer CTA */}
      <div className="pt-3 border-t border-slate-100 text-center">
        <Link
          href={navCategory.href}
          onClick={onClose}
          className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 hover:underline py-1"
        >
          <span>View {navCategory.title} Services</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
