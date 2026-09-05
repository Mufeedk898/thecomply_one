import React from "react";
import { Metadata } from "next";
import { PHASE4_SERVICES_DATA } from "@/data/phase4Services";
import { ServicePageLayout } from "@/components/service/ServicePageLayout";

const serviceData = PHASE4_SERVICES_DATA["gst-annual-return"];

export const metadata: Metadata = {
  title: serviceData.seoTitle,
  description: serviceData.seoDescription,
};

export default function GSTAnnualReturnPage() {
  return <ServicePageLayout data={serviceData} />;
}
