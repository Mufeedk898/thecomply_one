import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { STARTUP_SERVICES_DATA } from "@/data/startupServices";
import { ServicePageLayout } from "@/components/service/ServicePageLayout";

const serviceData = STARTUP_SERVICES_DATA["indian-subsidiary"];

export const metadata: Metadata = {
  title: serviceData?.seoTitle || "Indian Subsidiary Registration | The Comply One",
  description:
    serviceData?.seoDescription ||
    "Incorporate an Indian Subsidiary with complete FDI and MCA compliance.",
};

export default function IndianSubsidiaryPage() {
  if (!serviceData) {
    notFound();
  }
  return <ServicePageLayout data={serviceData} />;
}
