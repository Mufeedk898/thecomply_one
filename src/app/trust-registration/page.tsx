import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { STARTUP_SERVICES_DATA } from "@/data/startupServices";
import { ServicePageLayout } from "@/components/service/ServicePageLayout";

const serviceData = STARTUP_SERVICES_DATA["trust-registration"];

export const metadata: Metadata = {
  title: serviceData?.seoTitle || "Trust Registration Online | The Comply One",
  description:
    serviceData?.seoDescription ||
    "Register a Public Charitable or Religious Trust online in India.",
};

export default function TrustRegistrationPage() {
  if (!serviceData) {
    notFound();
  }
  return <ServicePageLayout data={serviceData} />;
}
