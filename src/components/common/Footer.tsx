"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Structured Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          
          {/* Column 1: Brand & Office Info */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-xl shadow-sm">
              <Image
                src="/logo.png"
                alt="The Comply One"
                width={150}
                height={45}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              The Comply One is India&apos;s premier digital business incorporation, tax filing, MCA secretarial, and intellectual property compliance platform. Start Right. Stay Compliant. Grow Faster.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                <a href="tel:8369500194" className="hover:text-white transition-colors">+91 8369500194</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href="mailto:info@thecomplyone.com" className="hover:text-white transition-colors">info@thecomplyone.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Office no 4 DPK COMPOUND BH LUCKY HOTEL KHAIRANI ROAD SAKINAKA ANDHERI EAST-400072</span>
              </div>
            </div>
          </div>

          {/* Column 2: COMPANY */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-slate-400 hover:text-white transition-colors">
                  Customer Video Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/XqrbfaAu4vQ9jtwk6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Google Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: SERVICES */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/private-limited-company" className="text-slate-400 hover:text-white transition-colors">
                  Startup
                </Link>
              </li>
              <li>
                <Link href="/registrations" className="text-slate-400 hover:text-white transition-colors">
                  Registrations
                </Link>
              </li>
              <li>
                <Link href="/trademark" className="text-slate-400 hover:text-white transition-colors">
                  Trademark
                </Link>
              </li>
              <li>
                <Link href="/gst" className="text-slate-400 hover:text-white transition-colors">
                  GST
                </Link>
              </li>
              <li>
                <Link href="/income-tax" className="text-slate-400 hover:text-white transition-colors">
                  Income Tax
                </Link>
              </li>
              <li>
                <Link href="/mca" className="text-slate-400 hover:text-white transition-colors">
                  MCA
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-slate-400 hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-slate-400 hover:text-white transition-colors">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: REFERRAL & LEGAL */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Referral
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/refer" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                    Refer a Business →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-slate-400 hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-500 leading-relaxed mb-8">
          <p className="mb-1">
            <strong className="text-slate-400">Legal Disclaimer:</strong> &quot;The Comply One&quot; is a corporate technology platform providing administrative and advisory assistance for business registration, tax return preparation, trademark filings, and secretarial documentation. We facilitate statutory filings with government portals including the Ministry of Corporate Affairs (MCA), Goods & Services Tax (GST) Portal, Income Tax Department, and Intellectual Property India.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © The Comply One. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
