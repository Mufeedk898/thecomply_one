import React from "react";
import { Metadata } from "next";
import { PHASE4_SERVICES_DATA } from "@/data/phase4Services";
import { ServicePageLayout } from "@/components/service/ServicePageLayout";

const serviceData = PHASE4_SERVICES_DATA["income-tax-individual-return"];

export const metadata: Metadata = {
  title: serviceData.seoTitle,
  description: serviceData.seoDescription,
};

export default function IncomeTaxIndividualReturnPage() {
  return <ServicePageLayout data={serviceData} />;
}
