"use client";

import React, { useState } from "react";
import { Mail, Phone, User, Send, CheckCircle2 } from "lucide-react";

interface RequestSubmissionFormProps {
  dark?: boolean;
}

export function RequestSubmissionForm({ dark = false }: RequestSubmissionFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirements: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          requirements: formData.requirements,
          source: "CALLBACK_REQUEST",
        }),
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit request.");
      }
    } catch (err) {
      console.error("Callback submission error:", err);
      setIsSubmitting(false);
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className={`w-full max-w-xl mx-auto mt-8 p-6 sm:p-8 rounded-3xl border transition-all ${
      dark
        ? "bg-slate-900/90 border-slate-800 text-white shadow-2xl"
        : "bg-slate-50 border-slate-200/90 text-slate-900 shadow-md"
    }`}>
      
      {/* Email Display */}
      <div className="flex items-center justify-center gap-2 mb-6 text-xs sm:text-sm font-semibold">
        <Mail className="w-4 h-4 text-blue-500" />
        <span className={dark ? "text-slate-400" : "text-slate-500"}>Email Us Directly:</span>
        <a
          href="mailto:info@thecomplyone.com"
          className="text-blue-600 hover:text-blue-500 underline font-bold"
        >
          info@thecomplyone.com
        </a>
      </div>

      {isSubmitted ? (
        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 animate-in zoom-in-95">
          <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
          <h4 className="text-base font-bold text-emerald-500">Request Submitted Successfully!</h4>
          <p className="text-xs text-slate-300">
            Thank you, <span className="font-bold text-white">{formData.name}</span>. Our senior CA/CS expert will contact you shortly at <span className="font-bold text-white">{formData.phone}</span>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {errorMessage && (
            <div className="p-3 text-xs bg-red-500/10 text-red-400 rounded-xl border border-red-500/20">
              {errorMessage}
            </div>
          )}
          <div className="text-center mb-4">
            <h4 className={`text-base font-bold ${dark ? "text-white" : "text-slate-900"}`}>
              Submit Request for Expert Callback
            </h4>
            <p className={`text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>
              Fill in your details below to get instant consultation from our team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Full Name */}
            <div>
              <label className={`block text-[11px] font-semibold mb-1 ${dark ? "text-slate-300" : "text-slate-700"}`}>
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    dark
                      ? "bg-slate-950 border-slate-800 text-white placeholder-slate-600"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                  }`}
                />
              </div>
            </div>

            {/* Mobile Phone Number */}
            <div>
              <label className={`block text-[11px] font-semibold mb-1 ${dark ? "text-slate-300" : "text-slate-700"}`}>
                Mobile Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    dark
                      ? "bg-slate-950 border-slate-800 text-white placeholder-slate-600"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className={`block text-[11px] font-semibold mb-1 ${dark ? "text-slate-300" : "text-slate-700"}`}>
              Official Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="email"
                placeholder="rahul@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  dark
                    ? "bg-slate-950 border-slate-800 text-white placeholder-slate-600"
                    : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                }`}
              />
            </div>
          </div>

          {/* Requirements / Details */}
          <div>
            <label className={`block text-[11px] font-semibold mb-1 ${dark ? "text-slate-300" : "text-slate-700"}`}>
              Service Requirements & Details
            </label>
            <textarea
              rows={2}
              placeholder="Describe your requirement (e.g. Pvt Ltd Registration, GST Filing, Trademark...)"
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              className={`w-full p-3 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                dark
                  ? "bg-slate-950 border-slate-800 text-white placeholder-slate-600"
                  : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
              }`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isSubmitting ? "Submitting Request..." : "Submit Request for Callback"}</span>
          </button>
        </form>
      )}
    </div>
  );
}
