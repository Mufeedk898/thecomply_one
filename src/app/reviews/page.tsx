import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import { CustomerVideoReviews } from "@/components/reviews/CustomerVideoReviews";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Reviews & Experiences | The Comply One",
  description:
    "Read real customer reviews and experiences with The Comply One. Learn how founders, entrepreneurs and businesses stay compliant.",
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
              <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>Customer Reviews</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Customer Experiences
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Read real experiences from businesses and founders who trust The Comply One.
            </p>

            <div className="flex justify-center pt-2">
              <Link href="/consultation">
                <Button variant="primary" size="lg" className="font-bold shadow-lg shadow-blue-600/20">
                  Get Started →
                </Button>
              </Link>
            </div>
          </div>

          {/* Main Customer Reviews Section */}
          <CustomerVideoReviews
            title="Reviews from Business Founders"
            subtitle="Verified feedback from clients who simplified their incorporation, GST, ITR & MCA compliance."
          />

          {/* CTA Banner */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white text-center space-y-6 my-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Simplify Your Corporate Compliance?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-normal">
              Get senior CA & CS assistance for your business incorporation, GST return filings, and annual ROC compliance.
            </p>
            <div className="flex justify-center gap-3">
              <Link href="/signup">
                <Button variant="primary" size="lg" className="font-bold px-8 shadow-lg">
                  Get Started →
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
