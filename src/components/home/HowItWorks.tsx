import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MousePointerClick, FileUp, UserCheck, ShieldCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MousePointerClick,
      title: "Select Service & Plan",
      description: "Choose your desired service (Private Ltd, GST, Trademark, etc.) and select standard or fast-track packages.",
    },
    {
      number: "02",
      icon: FileUp,
      title: "Upload Documents Online",
      description: "Submit digital copies of PAN, Aadhaar, address proofs, and director photos on our secure portal.",
    },
    {
      number: "03",
      icon: UserCheck,
      title: "Assigned CA & CS Review",
      description: "Your assigned Chartered Accountant verifies documents, drafts MoA/AoA, and prepares statutory forms.",
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Government Delivery & Filing",
      description: "We submit to MCA / GST / Trademark Registry and deliver your official registration certificates.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Simple 4-Step Process"
          title="How The Comply One Works"
          subtitle="A completely digital, transparent workflow designed for maximum speed and zero friction."
        />

        {/* Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-200">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs border border-slate-200">
                      →
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
