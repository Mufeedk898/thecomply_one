import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { STARTUP_SERVICES_DATA } from "@/data/startupServices";
import { ServicePageLayout } from "@/components/service/ServicePageLayout";

const serviceData = STARTUP_SERVICES_DATA["producer-company"];

export const metadata: Metadata = {
  title: serviceData?.seoTitle || "Producer Company Registration | The Comply One",
  description:
    serviceData?.seoDescription ||
    "Register a Producer Company online in India for farmers and primary producers.",
};

export default function ProducerCompanyPage() {
  if (!serviceData) {
    notFound();
  }
  return <ServicePageLayout data={serviceData} />;
}
