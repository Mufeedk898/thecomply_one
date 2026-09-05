import React from "react";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/Button";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans text-slate-900">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto border border-blue-200">
            <FileQuestion className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Error 404
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-xs text-slate-600 leading-relaxed">
              We couldn&apos;t find the page you were looking for. It may have been moved, renamed, or no longer exists.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/">
              <Button variant="primary" size="md" className="w-full sm:w-auto font-bold shadow-md">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="md" className="w-full sm:w-auto font-bold">
                Browse Services
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
