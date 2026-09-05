"use client";

import React, { useState } from "react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import { Gift, CheckCircle2 } from "lucide-react";

export default function ReferPage() {
  const [formData, setFormData] = useState({
    yourName: "",
    yourMobile: "",
    yourEmail: "",
    referralName: "",
    referralMobile: "",
    referralEmail: "",
    serviceRequired: "Company Registration",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.yourName || !formData.yourMobile || !formData.referralName || !formData.referralMobile) {
      setErrorMessage("Please fill in all required referrer and referral fields.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          yourName: formData.yourName,
          yourMobile: formData.yourMobile,
          yourEmail: formData.yourEmail,
          referralName: formData.referralName,
          referralMobile: formData.referralMobile,
          referralEmail: formData.referralEmail,
          serviceRequired: formData.serviceRequired,
          message: formData.message,
          source: "REFERRAL_FORM",
        }),
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit referral. Please try again.");
      }
    } catch (err) {
      console.error("Referral form error:", err);
      setIsSubmitting(false);
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
              <Gift className="w-4 h-4 text-amber-600" />
              <span>Partner Referral Program</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Refer a Business. Grow Together.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Know someone who needs help with registration, tax, trademark or compliance? Refer them to The Comply One.
            </p>

            <div className="flex justify-center pt-2">
              <a href="#referral-form">
                <Button variant="primary" size="lg" className="font-bold shadow-lg shadow-blue-600/20">
                  Make a Referral ↓
                </Button>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div id="referral-form" className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl mb-16">
            
            <div className="text-center space-y-2 mb-8 pb-6 border-b border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Submit Your Referral Details
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Our client onboarding team will reach out to your referral with professional guidance.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-emerald-800">
                  Thank you for your referral!
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our team will contact the referred person shortly.
                </p>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        yourName: "",
                        yourMobile: "",
                        yourEmail: "",
                        referralName: "",
                        referralMobile: "",
                        referralEmail: "",
                        serviceRequired: "Company Registration",
                        message: "",
                      });
                    }}
                  >
                    Submit Another Referral
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-3 text-xs bg-red-50 text-red-600 rounded-xl border border-red-200">
                    {errorMessage}
                  </div>
                )}
                
                {/* Your Details */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider">Your Details</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.yourName}
                        onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        pattern="[6-9][0-9]{9}"
                        placeholder="10-digit mobile number"
                        value={formData.yourMobile}
                        onChange={(e) => setFormData({ ...formData, yourMobile: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Email Address</label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={formData.yourEmail}
                      onChange={(e) => setFormData({ ...formData, yourEmail: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    />
                  </div>
                </div>

                {/* Referral Details */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider">Referred Person / Business Details</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Referral Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Patel"
                        value={formData.referralName}
                        onChange={(e) => setFormData({ ...formData, referralName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Referral Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        pattern="[6-9][0-9]{9}"
                        placeholder="10-digit mobile number"
                        value={formData.referralMobile}
                        onChange={(e) => setFormData({ ...formData, referralMobile: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Referral Email Address</label>
                    <input
                      type="email"
                      placeholder="vikram@example.com"
                      value={formData.referralEmail}
                      onChange={(e) => setFormData({ ...formData, referralEmail: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Service Required</label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    >
                      <option value="Company Registration">Company Registration (Pvt Ltd / LLP / OPC)</option>
                      <option value="GST Registration & Filing">GST Registration & Filing</option>
                      <option value="Trademark Registration">Trademark Registration</option>
                      <option value="Income Tax Return">Income Tax Return & Audit</option>
                      <option value="Annual Compliance">Annual Compliance Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Additional Notes / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Add any specific context regarding the referral..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="primary" size="lg" className="w-full font-bold shadow-lg" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting Referral..." : "Submit Referral →"}
                  </Button>
                </div>

                <p className="text-[11px] text-slate-400 text-center font-medium">
                  Referral benefits may be applicable as per the prevailing program terms.
                </p>

              </form>
            )}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
