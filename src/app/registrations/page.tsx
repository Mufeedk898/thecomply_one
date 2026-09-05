import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Building2,
  Users,
  UserCheck,
  Rocket,
  Award,
  FileCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Registration Services in India | The Comply One",
  description:
    "Complete business, license and government registrations in India. Pvt Ltd, LLP, OPC, MSME, FSSAI, IEC, GST, DSC & Shop Act licenses with CA/CS assistance.",
};

const REGISTRATION_CATEGORIES = [
  {
    title: "Company Registration",
    desc: "Incorporate Private Limited, OPC, Section 8, or Public Limited companies with full MCA V3 compliance.",
    href: "/private-limited-company",
    icon: Building2,
  },
  {
    title: "LLP Registration",
    desc: "Limited Liability Partnership setup combining partnership freedom with corporate protection.",
    href: "/llp",
    icon: Users,
    badge: "Flexible",
  },
  {
    title: "Partnership Registration",
    desc: "Formal partnership deed drafting and Registrar of Firms (ROF) state registration.",
    href: "/partnership/registration",
    icon: Users,
  },
  {
    title: "Proprietorship",
    desc: "Fastest 3-5 day micro-business setup with Udyam MSME and GST registration.",
    href: "/proprietorship/registration",
    icon: UserCheck,
    badge: "Fastest",
  },
  {
    title: "Startup India Registration",
    desc: "Official DPIIT recognition for 3-year 80-IAC tax exemption & angel tax relief.",
    href: "/startup-registration",
    icon: Rocket,
    badge: "Tax Exempt",
  },
  {
    title: "MSME / Udyam Certificate",
    desc: "Government Udyam registration to claim collateral-free loans & priority subsidies.",
    href: "/msme-registration",
    icon: Award,
  },
  {
    title: "FSSAI Food License",
    desc: "14-digit FoSCoS registration for cloud kitchens, restaurants & food trading.",
    href: "/fssai-registration",
    icon: FileCheck,
  },
  {
    title: "Digital Signature (DSC)",
    desc: "Class 3 e-Token issuance for MCA V3, Income Tax, GST & e-tendering portals.",
    href: "/digital-signature",
    icon: ShieldCheck,
  },
  {
    title: "Import Export Code (IEC)",
    desc: "10-digit lifetime DGFT registration for cross-border international trade.",
    href: "/import-export-code",
    icon: Rocket,
  },
];

export default function RegistrationsLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200/80">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Government & Statutory Registrations</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Business Registration Made Simple
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Choose the right business structure and get professional assistance from The Comply One&apos;s expert CA/CS network.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/private-limited-company">
                <Button variant="primary" size="lg" className="font-bold shadow-lg shadow-blue-600/20">
                  Get Started →
                </Button>
              </Link>
              <a href="tel:18002667591">
                <Button variant="outline" size="lg" className="font-bold">
                  Talk to CA (1800-COMPLY-1)
                </Button>
              </a>
            </div>
          </div>

          {/* Registration Services Grid */}
          <div className="space-y-6 mb-16">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                All Business & License Registration Services
              </h2>
              <span className="text-xs text-slate-500 font-semibold">100% Online Processing</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REGISTRATION_CATEGORIES.map((cat, idx) => {
                const IconComp = cat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                          <IconComp className="w-5 h-5" />
                        </div>
                        {cat.badge && (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-amber-50 text-amber-700 border border-amber-200 rounded">
                            {cat.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={cat.href}
                        className="text-xs font-bold text-blue-700 group-hover:underline flex items-center gap-1"
                      >
                        <span>Explore Registration</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Workflow & Why Us Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-sm space-y-8 my-16">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                How It Works
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4 Steps to Launch Your Business
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Select Service", desc: "Choose your entity structure or license requirement." },
                { step: "02", title: "Upload Proofs", desc: "Scan and upload PAN, Aadhaar & business address proofs." },
                { step: "03", title: "Expert Processing", desc: "Our CAs file your application with government portals." },
                { step: "04", title: "Get Certificates", desc: "Receive official registration certificate & bank setup." },
              ].map((s, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center">
                    {s.step}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{s.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Register Your Business Right?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-normal">
              Talk to our senior Chartered Accountants and get transparent guidance on entity selection.
            </p>
            <div className="flex justify-center gap-3">
              <Link href="/signup">
                <Button variant="primary" size="lg" className="font-bold px-8 shadow-lg">
                  Start Registration →
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
