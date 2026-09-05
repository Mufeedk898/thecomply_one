import React from "react";
import { Metadata } from "next";
import { PHASE3_SERVICES_DATA } from "@/data/phase3Services";
import { ServicePageLayout } from "@/components/service/ServicePageLayout";

const serviceData = PHASE3_SERVICES_DATA["professional-tax-registration"];

export const metadata: Metadata = {
  title: serviceData.seoTitle,
  description: serviceData.seoDescription,
};

export default function ProfessionalTaxRegistrationPage() {
  return <ServicePageLayout data={serviceData} />;
}
