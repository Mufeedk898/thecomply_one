import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | The Comply One",
  description:
    "Privacy Policy for The Comply One platform. Information regarding how we collect, store, protect, and process client data and statutory information.",
};

// TODO: Have final legal policy reviewed before production launch.

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-sm space-y-8">
            
            <div className="border-b border-slate-200 pb-6 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Legal & Data Protection</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Last updated: January 2026 | Website Template Notice Included
              </p>
            </div>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
              
              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">1. Introduction</h2>
                <p>
                  Welcome to The Comply One (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting the personal data and statutory documents you share with us while accessing our web portal and corporate services.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">2. Information We Collect</h2>
                <p>
                  We collect information necessary to facilitate company incorporation, tax return filings, trademark applications, and secretarial documentation on official government portals (MCA, GSTIN, TRACES, IP India). This includes:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Personal Identifiers:</strong> Name, email address, mobile number, postal address.</li>
                  <li><strong>Identity Documents:</strong> PAN Card, Aadhaar Card, Passport details, Director Identification Numbers (DIN).</li>
                  <li><strong>Business & Financial Data:</strong> Bank account details, cancelled cheques, balance sheets, P&L statements, GSTIN records.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">3. How Information Is Used</h2>
                <p>
                  Information collected is strictly used to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Prepare and file statutory forms on official government portals (SPICe+, Form AOC-4, MGT-7, GSTR-1, ITR-6).</li>
                  <li>Verify applicant identity and communicate order status.</li>
                  <li>Generate official invoices, payment receipts, and compliance certificates.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">4. Cookies and Tracking Technologies</h2>
                <p>
                  We use essential cookies and web analytics to enhance user session navigation, remember user preferences, and secure client dashboard logins. You may disable non-essential cookies via your browser settings.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">5. Data Security</h2>
                <p>
                  We implement industry-standard 256-bit SSL encryption for data transmission and restricted access controls for storage. Access to personal financial documents is restricted solely to assigned Chartered Accountants, Company Secretaries, and authorized filing personnel.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">6. Third-Party Services</h2>
                <p>
                  We do not sell, rent, or trade client data to third-party marketers. Data is disclosed only to official government statutory portals (Ministry of Corporate Affairs, Income Tax Department, CBIC GST Portal) as required for filing execution.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">7. Data Retention & User Rights</h2>
                <p>
                  We retain statutory records for the duration required by applicable Indian corporate and tax laws. Clients may request data updates or account deletion by contacting our support team.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">8. Contact Us</h2>
                <p>
                  For privacy queries or data requests, please contact:<br />
                  <strong>Data Privacy Officer</strong><br />
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
