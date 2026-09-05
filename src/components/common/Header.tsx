"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { UserProfileMenu } from "./UserProfileMenu";
import { NAVIGATION_CATEGORIES } from "@/data/navigation";
import { ServiceCategoryKey } from "@/types";
import { MegaMenu } from "./MegaMenu";
import { Button } from "@/components/ui/Button";
import {
  ChevronDown,
  ChevronRight,
  Search,
  Menu,
  X,
  ShieldCheck,
  Building2,
  Rocket,
  FileCheck,
  Award,
  Receipt,
  Calculator,
  CheckCircle2,
  UserCheck,
  Users,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  startup: Rocket,
  registrations: FileCheck,
  licences: Award,
  trademark: ShieldCheck,
  gst: Receipt,
  "income-tax": Calculator,
  mca: Building2,
  compliance: CheckCircle2,
  consultation: UserCheck,
  "hr-payroll": Users,
};

export function Header() {
  const { data: session, status } = useSession();
  const [activeMegaCategory, setActiveMegaCategory] = useState<ServiceCategoryKey | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<ServiceCategoryKey | null>("startup");
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLDivElement>(null);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Click Outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMegaCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Escape Key to close dropdown & search
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMegaCategory(null);
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavHover = (key: ServiceCategoryKey) => {
    setActiveMegaCategory(key);
  };

  const closeMegaMenu = () => {
    setActiveMegaCategory(null);
  };

  const toggleMobileCategory = (key: ServiceCategoryKey) => {
    setExpandedMobileCategory((prev) => (prev === key ? null : key));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-shadow" ref={navRef}>
      {/* Main Navbar */}
      <div
        className={`w-full border-b transition-colors duration-200 ${
          isScrolled ? "border-slate-200/90 shadow-sm bg-white/95 backdrop-blur-md" : "border-slate-200/60 bg-white"
        }`}
      >
        <div className="w-full px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            
            {/* LEFT: Official Brand Logo & Nav Group */}
            <div className="flex items-center gap-3 md:gap-5 flex-1 min-w-0">
              <Link href="/" className="flex items-center shrink-0 py-1 hover:opacity-95 transition-all">
                <Image
                  src="/logo.png"
                  alt="The Comply One"
                  width={210}
                  height={60}
                  className="h-11 sm:h-12 md:h-13 w-auto object-contain drop-shadow-[0_2px_10px_rgba(201,154,46,0.22)] hover:drop-shadow-[0_4px_16px_rgba(201,154,46,0.35)] transition-all duration-200"
                  priority
                />
              </Link>

              {/* Navigation Links starting immediately next to logo */}
              <nav className="hidden xl:flex items-center gap-0.5 relative">
                {NAVIGATION_CATEGORIES.map((cat) => {
                  const isOpen = activeMegaCategory === cat.key;
                  return (
                    <div
                      key={cat.key}
                      className="relative"
                      onMouseEnter={() => handleNavHover(cat.key)}
                    >
                      <button
                        onClick={() =>
                          setActiveMegaCategory((prev) => (prev === cat.key ? null : cat.key))
                        }
                        className={`flex items-center gap-1 px-2 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                          isOpen || pathname.includes(cat.key)
                            ? "text-blue-700 bg-blue-50/70"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/60"
                        }`}
                      >
                        <span>{cat.title}</span>
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-blue-700" : "text-slate-400"
                          }`}
                        />
                      </button>

                      {/* Floating Dropdown directly under specific active item */}
                      {isOpen && (
                        <MegaMenu
                          activeCategoryKey={activeMegaCategory}
                          onClose={closeMegaMenu}
                        />
                      )}
                    </div>
                  );
                })}

                <Link
                  href="/refer"
                  className={`px-2 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    pathname === "/refer"
                      ? "text-amber-700 bg-amber-50 font-bold border border-amber-200"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/60"
                  }`}
                >
                  Refer
                </Link>
              </nav>
            </div>

            {/* RIGHT: Search, Sign In / User Profile, Get Started */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="Search services"
              >
                <Search className="w-4 h-4" />
              </button>

              {status === "loading" ? (
                <div className="w-24 h-9 bg-slate-100/80 rounded-xl animate-pulse" />
              ) : session ? (
                <UserProfileMenu />
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" size="sm" className="font-semibold text-slate-700">
                      Sign In
                    </Button>
                  </Link>

                  <Link href="/signup">
                    <Button variant="primary" size="sm" className="font-semibold">
                      Get Started →
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Controls (Logo Left, Controls Right) */}
            <div className="flex xl:hidden items-center gap-2 shrink-0">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-slate-600 hover:text-slate-900"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Global Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="bg-slate-50 border-t border-b border-slate-200 p-4 animate-in slide-in-from-top-2 duration-150">
            <div className="max-w-3xl mx-auto flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services (e.g. Private Limited, GST, Trademark, Director KYC)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  autoFocus
                />
              </div>
              <Link
                href={`/services${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ""}`}
                onClick={() => setIsSearchOpen(false)}
              >
                <Button variant="primary" size="md">
                  Search
                </Button>
              </Link>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Drawer with Accordion Categories */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          
          {/* Action CTAs / Logged In Profile */}
          <div className="pb-4 border-b border-slate-100">
            {status === "loading" ? (
              <div className="w-full h-10 bg-slate-100 rounded-xl animate-pulse" />
            ) : session ? (
              <div className="flex items-center justify-between p-2 bg-slate-50 rounded-xl border border-slate-200/80">
                <UserProfileMenu />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Accordion Categories */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1 mb-1">
              Service Categories
            </div>

            {NAVIGATION_CATEGORIES.map((cat) => {
              const isExpanded = expandedMobileCategory === cat.key;
              const IconComp = CATEGORY_ICONS[cat.key] || Rocket;

              return (
                <div key={cat.key} className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/40">
                  <button
                    onClick={() => toggleMobileCategory(cat.key)}
                    className="w-full flex items-center justify-between p-3 text-left font-bold text-slate-900 text-sm hover:bg-slate-100/70 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span>{cat.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-blue-700" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Body */}
                  {isExpanded && (
                    <div className="p-2 pt-0 bg-white border-t border-slate-200/60 space-y-1">
                      {cat.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50/60 transition-colors"
                        >
                          <span>{item.title}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>
                      ))}
                      
                      <div className="pt-2 border-t border-slate-100 text-center">
                        <Link
                          href={cat.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-[11px] font-bold text-blue-700 hover:underline inline-block py-1"
                        >
                          View All {cat.title} Services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Secondary Links */}
          <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-700">
            <Link
              href="/refer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block p-2 text-amber-700 bg-amber-50 rounded-lg font-bold"
            >
              Refer a Business →
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block p-2 hover:bg-slate-50 rounded-lg"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block p-2 hover:bg-slate-50 rounded-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
