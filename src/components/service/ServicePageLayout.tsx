"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ServiceEnquiryForm } from "./ServiceEnquiryForm";
import { DocumentsSection } from "./DocumentsSection";
import { FAQAccordionSection } from "./FAQAccordionSection";
import { RequestSubmissionForm } from "@/components/common/RequestSubmissionForm";
import { StartupServiceData } from "@/data/startupServices";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Clock,
  Star,
  CheckCircle2,
  ChevronRight,
  UserCheck,
  Zap,
  TrendingUp,
  Crown,
  Building2,
  Rocket,
  Users,
  PieChart,
  FileText,
  Heart,
  Award,
  Wheat,
  Globe,
} from "lucide-react";

interface ServicePageLayoutProps {
  data: StartupServiceData;
}

const ICON_MAP: Record<string, React.ElementType> = {
  UserCheck,
  ShieldCheck,
  Zap,
  TrendingUp,
  Crown,
  Building2,
  Rocket,
  Users,
  PieChart,
  FileText,
  Heart,
  Award,
  Wheat,
  Globe,
};

export function ServicePageLayout({ data }: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/services?category=startup" className="hover:text-slate-900 transition-colors">
              Startup
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate">{data.title}</span>
          </nav>

          {/* Hero Section & Desktop Right Sidebar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Left Hero Content (8 cols on desktop) */}
            <div className="lg:col-span-7 space-y-6">
              {data.heroBadge && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200/80">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{data.heroBadge}</span>
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {data.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {data.subtitle}
              </p>

              {/* Metrics & Badges Strip */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-4 border-y border-slate-200/80 text-xs sm:text-sm text-slate-700 font-semibold">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Turnaround: {data.turnaroundTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>
                    {data.rating} / 5.0 ({data.reviewCount} verified reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Govt Verified MCA Process</span>
                </div>
              </div>

              {/* Overview Cards: What is & Who should choose */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    {data.overview.whatIsTitle}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {data.overview.whatIsContent}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    {data.overview.whoShouldChooseTitle}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {data.overview.whoShouldChooseContent}
                  </p>
                </div>
              </div>

              {/* Key Benefits Grid */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Key Advantages & Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.benefits.map((b, idx) => {
                    const IconComp = ICON_MAP[b.iconName] || ShieldCheck;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50/60 border border-slate-200/70 hover:bg-white hover:shadow-sm transition-all"
                      >
                        <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-2.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">{b.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {b.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Sticky Enquiry Form (5 cols on desktop, stacks below on mobile) */}
            <div id="enquiry-form" className="lg:col-span-5 lg:sticky lg:top-24">
              <ServiceEnquiryForm serviceTitle={data.title} />
            </div>
          </div>

          {/* Documents Section */}
          <DocumentsSection
            documents={data.documentsRequired}
            disclaimer={data.documentsDisclaimer}
            serviceTitle={data.title}
          />

          {/* Why Choose The Comply One Banner */}
          <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl my-12">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 inline-block">
                The Comply One Advantage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Why Businesses Choose The Comply One
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Over 10,000+ Indian startups trust our CA/CS expert network for 100% compliant business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Expert Assistance",
                  desc: "Dedicated Senior Chartered Accountants & Company Secretaries assigned to your filing.",
                },
                {
                  title: "Transparent Process",
                  desc: "Zero hidden charges. Complete breakdown of government fees and portal receipts provided.",
                },
                {
                  title: "Secure Digital Vault",
                  desc: "256-bit encrypted cloud storage for your company incorporation certificates & licenses.",
                },
                {
                  title: "100% Online Workflow",
                  desc: "No physical office visits required. Complete document submission via digital portal.",
                },
                {
                  title: "Dedicated CA Retainer",
                  desc: "Post-incorporation compliance calendar reminders so you never miss ROC/GST deadlines.",
                },
                {
                  title: "End-to-End Solutions",
                  desc: "From initial registration to GST, Trademark, Payroll, and Annual Filings under one platform.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <FAQAccordionSection faqs={data.faqs} serviceTitle={data.title} />

          {/* Final Call To Action */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-lg text-center space-y-6 my-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to Build and Grow Your Business?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
              Get expert assistance for registration, taxation, and annual compliance from India&apos;s trusted corporate services partner.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto font-bold px-8 shadow-lg shadow-blue-600/20"
                onClick={() => {
                  const formElement = document.getElementById("enquiry-form");
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Started Now →
              </Button>
              <Link href="/consultation" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto font-bold px-8">
                  Talk to an Expert
                </Button>
              </Link>
            </div>

            {/* Request Submission Form & Email */}
            <RequestSubmissionForm dark={false} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
