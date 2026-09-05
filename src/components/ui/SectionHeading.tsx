import React from "react";
import { cn } from "@/components/ui/Button";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 md:mb-16", alignStyles[align], className)}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/60 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
