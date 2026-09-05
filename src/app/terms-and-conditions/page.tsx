import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | The Comply One",
  description:
    "Terms and Conditions governing the use of The Comply One website, corporate services, advisory consultations, and filing platform.",
};

// TODO: Have final Terms & Conditions reviewed before production launch.

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-sm space-y-8">
            
            <div className="border-b border-slate-200 pb-6 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
                <FileCheck className="w-4 h-4 text-blue-600" />
                <span>Service Agreement</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Terms & Conditions
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Last updated: January 2026 | Website Template Notice Included
              </p>
            </div>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
              
              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">1. Introduction</h2>
                <p>
                  These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of The Comply One website and software services. By accessing or using our platform, you agree to be legally bound by these Terms.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">2. Use of Website & Platform</h2>
                <p>
                  You agree to use the website only for lawful business purposes and in accordance with these Terms. You must not attempt to compromise website security, submit fraudulent identity documents, or transmit unauthorized code.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">3. Nature of Services</h2>
                <p>
                  The Comply One provides technology-enabled administrative assistance and secretarial consultation for statutory filings (MCA, GST, Income Tax, Trademarks). We are an independent corporate technology company and are not a government agency.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">4. User Responsibilities</h2>
                <p>
                  Users are solely responsible for providing accurate, authentic, and complete information, documents, and disclosures required for statutory filings. Filings made based on false information supplied by the user are the sole responsibility of the user.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">5. Payments & Government Fees</h2>
                <p>
                  All service fees and estimated government fees must be paid prior to form submission. Government fees are subject to official revision by respective departments (MCA, GST Portal, Income Tax Department, IP India).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">6. Service Limitations & Disclaimers</h2>
                <p>
                  While we strive for 100% timely filing execution, approval of corporate names, trademarks, or tax refunds rests exclusively with respective government authorities (ROC officers, Trademark Examiners, Assessing Officers).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">7. Intellectual Property Rights</h2>
                <p>
                  All website content, brand logos, UI layouts, software code, and educational materials are protected under intellectual property laws and belong to The Comply One.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">8. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, The Comply One shall not be liable for indirect, incidental, or consequential damages resulting from portal downtime or delayed government processing.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">9. Contact Information</h2>
                <p>
                  If you have questions regarding these Terms, please contact us at:<br />
                  Email: info@thecomplyone.com
                </p>
              </section>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
