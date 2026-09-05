import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ServiceGrid } from "@/components/common/ServiceGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceEnquiryForm } from "@/components/service/ServiceEnquiryForm";
import { ALL_SERVICES, SERVICE_CATEGORIES } from "@/data/services";
import {
  CheckCircle2,
  Clock,
  Star,
  FileText,
  ShieldCheck,
  Building2,
  ChevronRight,
} from "lucide-react";

export async function generateStaticParams() {
  const serviceParams = ALL_SERVICES.map((service) => ({ slug: service.slug }));
  const categoryParams = SERVICE_CATEGORIES.map((category) => ({ slug: category.id }));
  return [...serviceParams, ...categoryParams];
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. Check if slug matches a Category ID
  const categoryInfo = SERVICE_CATEGORIES.find((c) => c.id === slug);
  if (categoryInfo) {
    const categoryServices = ALL_SERVICES.filter((s) => s.category === slug);
    return (
      <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
        <Header />
        <main className="flex-1 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href="/services" className="hover:text-slate-900">Services</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-slate-900 font-semibold">{categoryInfo.title}</span>
            </nav>
            <SectionHeading
              badge={categoryInfo.badge || "Verified Category"}
              title={categoryInfo.title}
              subtitle={categoryInfo.shortDesc}
              align="left"
            />
            <ServiceGrid
              services={categoryServices}
              columns={3}
              emptyMessage={`No active services currently listed under ${categoryInfo.title}.`}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // 2. Check if slug matches a Service
  const service = ALL_SERVICES.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  const displayName = service.name || service.title || "Business Service";
  const displayFullDesc = service.fullDescription || service.description || service.shortDescription || "";
  const deliverables = service.deliverables || [];
  const documentsRequired = service.documentsRequired || service.documents || [];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/services" className="hover:text-slate-900">Services</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate">{displayName}</span>
          </nav>

          {/* Service Header Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              
              {service.categoryName && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200/80">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{service.categoryName}</span>
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {displayName}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {displayFullDesc}
              </p>

              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-slate-200/80 text-xs text-slate-700">
                {service.turnaroundTime && (
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Turnaround: {service.turnaroundTime}</span>
                  </div>
                )}
                {service.rating && (
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>{service.rating} / 5.0 ({service.reviewCount || 100} reviews)</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Online Verification</span>
                </div>
              </div>

              {/* What You Get / Deliverables Checklist */}
              {deliverables.length > 0 && (
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-700" />
                    Official Deliverables & Documents Included
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Required Documents Checklist */}
              {documentsRequired.length > 0 && (
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-700" />
                    Documents Required from Client
                  </h3>
                  <ul className="space-y-2.5 pt-2">
                    {documentsRequired.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Right Booking Card Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28">
                <ServiceEnquiryForm serviceTitle={displayName} />
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
