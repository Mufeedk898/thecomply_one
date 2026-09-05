"use client";

import React, { useState } from "react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import { PhoneCall, Mail, MapPin, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    subject: "General Business Enquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile || !formData.message) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          mobile: formData.mobile,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          source: "CONTACT_FORM",
        }),
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Contact form error:", err);
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
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span>Get in Touch with Our Advisory Team</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Let&apos;s Talk About Your Business
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Have a question regarding company incorporation, tax return filing, GST, or MCA compliance? We are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Left Column: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Direct Communication Channels
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <PhoneCall className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Phone Support</div>
                      <div className="text-slate-600 mt-0.5">+91 8369500194</div>
                      <div className="text-[10px] text-slate-400 mt-1">Mon - Sat: 9:30 AM - 7:00 PM IST</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Email Support</div>
                      <div className="text-slate-600 mt-0.5">info@thecomplyone.com</div>
                      {/* TODO: Replace with actual official support email */}
                      <div className="text-[10px] text-slate-400 mt-1">Typical response within 2 business hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Registered Corporate Office</div>
                      <div className="text-slate-600 mt-0.5 leading-relaxed">
                        Office no 4 DPK COMPOUND BH LUCKY HOTEL,<br />
                        KHAIRANI ROAD SAKINAKA ANDHERI EAST-400072
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
              
              <div className="pb-6 mb-6 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900">Send Us a Direct Message</h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Fill in your query details below and a qualified CA or CS will call you back.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-800">
                    Thank you. We have received your message.
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our technical and advisory team will review your query and get back to you shortly.
                  </p>
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          mobile: "",
                          email: "",
                          subject: "General Business Enquiry",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 text-xs bg-red-50 text-red-600 rounded-xl border border-red-200">
                      {errorMessage}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anish Patel"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        pattern="[6-9][0-9]{9}"
                        placeholder="10-digit mobile number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="anish@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      >
                        <option value="General Business Enquiry">General Business Enquiry</option>
                        <option value="Company Incorporation">Company Incorporation</option>
                        <option value="GST & Tax Assistance">GST & Tax Assistance</option>
                        <option value="Trademark & IP Protection">Trademark & IP Protection</option>
                        <option value="Annual MCA Compliance">Annual MCA Compliance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Type your message or specific business requirement here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    />
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" size="lg" className="w-full font-bold shadow-lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending Message..." : "Send Message →"}
                    </Button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
