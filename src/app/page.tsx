import React from "react";
import { Header } from "@/components/common/Header";
import { Hero } from "@/components/home/Hero";
import { AiPoweredSection } from "@/components/home/AiPoweredSection";
import { PopularServices } from "@/components/home/PopularServices";
import { TrustSection } from "@/components/home/TrustSection";
import { ClientVideoReviewsFormat } from "@/components/home/ClientVideoReviewsFormat";
import { CTASection } from "@/components/home/CTASection";
import { StatsSection } from "@/components/home/StatsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { Footer } from "@/components/common/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. AI-Powered Compliance Hub Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AiPoweredSection />
        </div>

        {/* 4. Popular Services */}
        <PopularServices />

        {/* 5. Why The Comply One */}
        <TrustSection />

        {/* 6. Client Video Reviews */}
        <ClientVideoReviewsFormat />

        {/* 9. Trust & Stats Section */}
        <StatsSection />

        {/* 11. FAQs */}
        <FAQSection />

        {/* 12. Final CTA */}
        <CTASection
          title="Get Your Business Registered & Compliant Today"
          subtitle="Join 10,000+ Indian entrepreneurs who rely on The Comply One for stress-free incorporations, GST filings, and MCA compliance."
          primaryCtaText="Get Started Now →"
          primaryCtaHref="/signup"
          secondaryCtaText="Explore All Services"
          secondaryCtaHref="/services"
        />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
