import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function Hero() {

  const popularTags = [
    { label: "Private Limited", href: "/services/private-limited-company-registration" },
    { label: "GST Registration", href: "/services/gst-registration" },
    { label: "Trademark ™", href: "/services/trademark-registration" },
    { label: "Annual ROC Filing", href: "/services/annual-roc-filing" },
    { label: "Director KYC", href: "/services/director-kyc" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-white pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden border-b border-slate-100">
      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Category Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>India&apos;s Premium Compliance Platform</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Your Business. Compliant. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900">
              Confident. Ready to Grow.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mb-10">
            The Comply One is your one-stop Chartered Accountancy practice for company registration, GST, income tax and MCA compliance — handled by experts, start to finish.
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
            <Link href="/signup" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto font-semibold px-8 shadow-md"
                rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Get Started →
              </Button>
            </Link>
            <Link href="/consultation" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto font-semibold px-8 border-slate-300"
              >
                Talk to an Expert
              </Button>
            </Link>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
            <span className="font-medium text-slate-400">Quick Links:</span>
            {popularTags.map((tag, idx) => (
              <Link
                key={idx}
                href={tag.href}
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 transition-colors border border-slate-200/60"
              >
                {tag.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
