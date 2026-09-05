"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import {
  X,
  FileText,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Send,
  ShieldCheck,
  Building2,
  ChevronDown,
  Search,
  Check,
} from "lucide-react";

export const ALL_WEBSITE_SERVICES = [
  // Startup & Incorporation
  "Private Limited Company Registration",
  "Limited Liability Partnership (LLP)",
  "One Person Company (OPC) Registration",
  "Sole Proprietorship Registration",
  "Partnership Firm Registration",
  "Public Limited Company Registration",
  
  // Business Registrations & Licenses
  "GST Registration",
  "MSME / Udyam Registration",
  "FSSAI Food License Registration",
  "Digital Signature Certificate (DSC Class 3)",
  "Import Export Code (IEC) Registration",
  "Shop & Establishment License",
  "Professional Tax Registration",
  "Society Registration",
  "Startup India DPIIT Recognition",

  // Trademark & Intellectual Property
  "Trademark Registration (™)",
  "Trademark Search & Similarity Report",
  "Trademark Renewal",
  "Trademark Objection Reply",
  "Trademark Opposition Defense",
  "Trademark Assignment & License",
  "Trademark Hearing Representation",
  "Trademark Rectification",

  // GST Compliance
  "Monthly GST Return Filing (GSTR-1 & 3B)",
  "GST Letter of Undertaking (LUT) Filing",
  "GST Cancellation & Surrender",
  "GST Revocation of Cancelled License",
  "GST Registration Amendment",
  "Annual GST Return Filing (GSTR-9)",
  "E-Way Bill & E-Invoicing Setup",

  // MCA & ROC Compliance
  "Annual ROC Compliance (AOC-4 & MGT-7)",
  "Director KYC (DIR-3 KYC)",
  "LLP Annual Filing (Form 11 & Form 8)",
  "Director Addition / Resignation (DIR-12)",
  "Company Name Change (INC-24)",
  "Registered Office Address Change (INC-22)",
  "Company Closure & Strike Off (STK-2)",
  "DIN Allotment & Modification",

  // Income Tax & Audits
  "Business Income Tax Return (ITR-3 / 4 / 6)",
  "Individual Income Tax Return (ITR-1 / 2)",
  "Section 44AB CA Tax Audit (Form 3CD)",
  "Quarterly TDS Return Filing (Form 24Q / 26Q)",
  "Income Tax Notice Reply & Assessment",
  "Advance Tax Calculation & Challan",

  // Accounting, Legal & Retainers
  "CA Expert Advisory Consultation",
  "Monthly Accounting & Bookkeeping",
  "Founders Agreement & Legal Drafting",
  "Custom Corporate Retainer",
  "Multi-Service Compliance Package",
];

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function QuotationModal({ isOpen, onClose, defaultService }: QuotationModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedService, setSelectedService] = useState(defaultService || "Private Limited Company Registration");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Custom Dropdown Open State & Filter
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownSearch, setDropdownSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const filteredServices = ALL_WEBSITE_SERVICES.filter((serviceName) =>
    serviceName.toLowerCase().includes(dropdownSearch.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          mobileNumber,
          selectedService,
          message,
          source: "QUOTATION_FORM",
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
      console.error("Quotation submission error:", err);
      setIsSubmitting(false);
      setErrorMessage("Network error. Please try again.");
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName("");
    setEmail("");
    setMobileNumber("");
    setMessage("");
    setDropdownSearch("");
    setIsDropdownOpen(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                Request Received
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Quotation Request Submitted!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{fullName}</span>! Our Senior Chartered Accountants are preparing a customized price quotation for <span className="font-bold text-blue-700">{selectedService}</span>.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 text-xs text-slate-500 space-y-1.5 border border-slate-200/80 text-left max-w-md mx-auto">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Quotation will be sent to: {email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp / Phone updates to: +91 {mobileNumber}</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              className="w-full font-bold bg-slate-900 hover:bg-slate-800"
              onClick={handleResetAndClose}
            >
              Done & Close
            </Button>
          </div>
        ) : (
          /* Form Screen */
          <div>
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-400/40 flex items-center justify-center font-bold shrink-0">
                  <FileText className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                    Official Quotation Desk
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
                    Request For Quotation
                  </h3>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mt-2">
                Get a transparent, customized statutory filing quote tailored for your business needs from our CA/CS experts.
              </p>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
              {errorMessage && (
                <div className="p-3 text-xs bg-red-50 text-red-600 rounded-xl border border-red-200">
                  {errorMessage}
                </div>
              )}
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                      placeholder="10-digit mobile number"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    />
                  </div>
                </div>
              </div>

              {/* Select Service for Quotation with Custom Scrollable Slider Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Service for Quotation <span className="text-red-500">*</span>
                </label>
                
                {/* Select Box Button */}
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30 font-semibold flex items-center justify-between cursor-pointer hover:bg-slate-100/80 transition-colors relative"
                >
                  <Building2 className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                  <span className="truncate pr-2">{selectedService}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-blue-700" : ""}`} />
                </div>

                {/* Dropdown Menu Container with Custom Scrollbar Slider */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 shadow-2xl rounded-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    
                    {/* Search inside dropdown */}
                    <div className="relative p-1.5 border-b border-slate-100 mb-1">
                      <Search className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={dropdownSearch}
                        onChange={(e) => setDropdownSearch(e.target.value)}
                        placeholder="Search all 45+ corporate services..."
                        className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600/30"
                        autoFocus
                      />
                    </div>

                    {/* Scrollable Items List with visible right scroll slider */}
                    <div className="max-h-56 overflow-y-auto pr-1 space-y-0.5 custom-scrollbar">
                      {filteredServices.length === 0 ? (
                        <div className="p-3 text-xs text-slate-400 text-center">
                          No matching services found.
                        </div>
                      ) : (
                        filteredServices.map((serviceName, idx) => {
                          const isSelected = selectedService === serviceName;
                          return (
                            <div
                              key={idx}
                              onClick={() => {
                                setSelectedService(serviceName);
                                setIsDropdownOpen(false);
                                setDropdownSearch("");
                              }}
                              className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs cursor-pointer font-medium transition-colors ${
                                isSelected
                                  ? "bg-blue-50 text-blue-800 font-bold"
                                  : "text-slate-700 hover:bg-slate-100/80 hover:text-slate-900"
                              }`}
                            >
                              <span className="truncate pr-2">{serviceName}</span>
                              {isSelected && <Check className="w-4 h-4 text-blue-700 shrink-0" />}
                            </div>
                          );
                        })
                      )}
                    </div>

                    <div className="pt-2 mt-1 border-t border-slate-100 text-[10px] text-slate-400 text-center font-medium">
                      Showing {filteredServices.length} of {ALL_WEBSITE_SERVICES.length} total services
                    </div>
                  </div>
                )}
              </div>

              {/* Message / Details */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message / Requirement Details
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us a bit about your requirement or company state for custom quote..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30 font-normal"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full font-bold bg-blue-700 hover:bg-blue-800 shadow-md shadow-blue-600/20 gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting Request..." : "Submit Quotation Request →"}</span>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Confidential • CA Verified Response within 24 Hours</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
