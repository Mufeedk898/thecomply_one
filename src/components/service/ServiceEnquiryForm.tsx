"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, User, Mail, Phone, MessageSquare } from "lucide-react";

interface ServiceEnquiryFormProps {
  serviceTitle: string;
  className?: string;
}

export function ServiceEnquiryForm({ serviceTitle, className = "" }: ServiceEnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Enter a valid 10-digit phone number.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          message: formData.message,
          serviceTitle,
          source: "SERVICE_PAGE_FORM",
        }),
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrors({ submit: data.error || "Failed to submit request. Please try again." });
      }
    } catch (err) {
      console.error("Enquiry submission error:", err);
      setIsSubmitting(false);
      setErrors({ submit: "Network error. Please try again." });
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-2xl p-6 md:p-8 border border-emerald-200 shadow-xl space-y-4 text-center ${className}`}>
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          Request Received!
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed font-medium">
          Thank you! Your details for <strong className="text-slate-900">{serviceTitle}</strong> have been submitted. We will reach out within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ fullName: "", email: "", mobileNumber: "", message: "" });
          }}
          className="text-xs font-semibold text-blue-700 hover:underline pt-2 inline-block"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl p-6 border border-slate-200/90 shadow-lg space-y-4 ${className}`}>
      {/* Header Banner */}
      <div className="pb-3 border-b border-slate-100">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
          Fill Your Details
        </h3>
        <p className="text-xs text-blue-700 font-semibold mt-0.5">
          We will reach out within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm bg-slate-50/60 border rounded-xl font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.fullName
                  ? "border-red-400 focus:ring-red-200 bg-red-50/20"
                  : "border-slate-300/80 focus:border-blue-600 focus:ring-blue-600/20"
              }`}
            />
          </div>
          {errors.fullName && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm bg-slate-50/60 border rounded-xl font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? "border-red-400 focus:ring-red-200 bg-red-50/20"
                  : "border-slate-300/80 focus:border-blue-600 focus:ring-blue-600/20"
              }`}
            />
          </div>
          {errors.email && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="tel"
              name="mobileNumber"
              placeholder="10-digit phone number"
              value={formData.mobileNumber}
              onChange={handleChange}
              maxLength={10}
              className={`w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm bg-slate-50/60 border rounded-xl font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.mobileNumber
                  ? "border-red-400 focus:ring-red-200 bg-red-50/20"
                  : "border-slate-300/80 focus:border-blue-600 focus:ring-blue-600/20"
              }`}
            />
          </div>
          {errors.mobileNumber && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.mobileNumber}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Message
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us a bit about your requirement"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm bg-slate-50/60 border border-slate-300/80 rounded-xl font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full font-bold shadow-md shadow-blue-600/20 mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Request →"}
        </Button>
      </form>
    </div>
  );
}
