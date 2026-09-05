"use client";

import React, { useState } from "react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Search, ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  // General
  {
    category: "General",
    question: "What is The Comply One?",
    answer: "The Comply One is a corporate tech platform facilitating business registration, tax return preparation, trademark protection, and secretarial compliance services across India through verified CAs and CSs.",
  },
  {
    category: "General",
    question: "Are your services available across all Indian states?",
    answer: "Yes, our digital portal and CA/CS network serve clients across all 28 Indian States and 8 Union Territories 100% online.",
  },

  // Business Registration
  {
    category: "Business Registration",
    question: "How long does Private Limited Company registration take?",
    answer: "With digital DSC, RUN name reservation, and SPICe+ (INC-32) filing, company incorporation typically takes 5 to 7 working days.",
  },
  {
    category: "Business Registration",
    question: "What is the minimum capital required to start a Private Limited Company?",
    answer: "There is no statutory minimum paid-up capital requirement under the Companies Act 2013. You can incorporate with as little as ₹1,000 capital.",
  },

  // GST
  {
    category: "GST",
    question: "Who is required to obtain GST registration?",
    answer: "Businesses with aggregate turnover exceeding ₹20 Lakhs for services (or ₹40 Lakhs for goods), e-commerce sellers, and interstate traders must register for GST.",
  },
  {
    category: "GST",
    question: "What is the difference between GSTR-1 and GSTR-3B?",
    answer: "GSTR-1 is a monthly/quarterly return reporting outward sales invoices, while GSTR-3B is a summary return calculating net tax payable after Input Tax Credit (ITC) deduction.",
  },

  // Income Tax
  {
    category: "Income Tax",
    question: "When is a Tax Audit under Section 44AB mandatory?",
    answer: "A tax audit is mandatory for businesses with turnover exceeding ₹1 Crore (or ₹10 Crores if cash transactions are less than 5%), and professionals with receipts exceeding ₹50-75 Lakhs.",
  },
  {
    category: "Income Tax",
    question: "Which ITR form should a company file?",
    answer: "All Private Limited companies, OPCs, and Public Limited entities incorporated in India must file Form ITR-6 annually.",
  },

  // MCA
  {
    category: "MCA",
    question: "What are Form AOC-4 and Form MGT-7?",
    answer: "Form AOC-4 is used to file audited financial statements (Balance Sheet & P&L) with the ROC. Form MGT-7/7A is the Annual Return containing shareholding and directorship details.",
  },
  {
    category: "MCA",
    question: "What is the penalty for missing DIR-3 KYC deadline?",
    answer: "If DIR-3 KYC is not filed on or before 30th September, the DIN status becomes deactivated and incurs a mandatory ₹5,000 government penalty to reactivate.",
  },

  // Trademark
  {
    category: "Trademark",
    question: "How long does trademark registration protection last?",
    answer: "A registered trademark is valid for 10 years from the filing date and can be renewed indefinitely every 10 years.",
  },
  {
    category: "Trademark",
    question: "Can I use the ® symbol immediately after applying?",
    answer: "No, you can use the ™ symbol immediately after receiving your TM Application Number. The ® symbol can only be used after official registration certificate issuance.",
  },

  // Compliance
  {
    category: "Compliance",
    question: "What is included in the Annual Compliance Retainer?",
    answer: "Our Annual Retainer covers AOC-4 & MGT-7 ROC filings, 12 months GSTR-1/3B filings, corporate ITR-6, 2 Director DIR-3 KYC verification, and statutory board minutes drafting.",
  },

  // Consultation
  {
    category: "Consultation",
    question: "How are 1-on-1 consultation sessions conducted?",
    answer: "Consultation calls take place online via 1-on-1 Google Meet or Zoom video sessions directly with senior Chartered Accountants and Secretarial advisors.",
  },
];

const CATEGORIES = [
  "All",
  "General",
  "Business Registration",
  "GST",
  "Income Tax",
  "MCA",
  "Trademark",
  "Compliance",
  "Consultation",
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Knowledge Base & Support</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
              Find instant answers to common questions about company incorporation, tax return filing, GST, MCA compliance, and legal advisory.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto pt-4">
              <Search className="absolute left-4 top-7 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions (e.g. Private Limited, GST, AOC-4, Trademark)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-2xl text-xs sm:text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordions List */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-3 mb-16">
            {filteredFAQs.length === 0 ? (
              <div className="py-12 text-center text-slate-500 space-y-2">
                <p className="text-sm font-semibold">No questions found matching your search.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-xs font-bold text-blue-700 hover:underline"
                >
                  Clear search filters
                </button>
              </div>
            ) : (
              filteredFAQs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                          {faq.category}
                        </span>
                        <span>{faq.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-blue-700" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Still Have Questions CTA */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-4">
            <h3 className="text-xl font-bold">Still have questions?</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Our team of Chartered Accountants and Secretarial advisors are ready to help clarify any business requirements.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                <span>Contact Advisory Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
