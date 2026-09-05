import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { STARTUP_SERVICES_DATA } from "@/data/startupServices";
import { ServicePageLayout } from "@/components/service/ServicePageLayout";

const serviceData = STARTUP_SERVICES_DATA["section-8-company"];

export const metadata: Metadata = {
  title: serviceData?.seoTitle || "Section 8 Company Registration | The Comply One",
  description:
    serviceData?.seoDescription ||
    "Incorporate a Section 8 Non-Profit Company online in India.",
};

export default function Section8CompanyPage() {
  if (!serviceData) {
    notFound();
  }
  return <ServicePageLayout data={serviceData} />;
}
