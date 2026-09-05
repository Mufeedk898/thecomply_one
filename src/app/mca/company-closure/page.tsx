import React from "react";
import { Metadata } from "next";
import { PHASE4_SERVICES_DATA } from "@/data/phase4Services";
import { ServicePageLayout } from "@/components/service/ServicePageLayout";

const serviceData = PHASE4_SERVICES_DATA["mca-company-closure"];

export const metadata: Metadata = {
  title: serviceData.seoTitle,
  description: serviceData.seoDescription,
};

export default function MCACompanyClosurePage() {
  return <ServicePageLayout data={serviceData} />;
}
