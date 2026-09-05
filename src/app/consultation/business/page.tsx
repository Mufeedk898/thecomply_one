import React from "react";
import { Metadata } from "next";
import { PHASE5_CONSULTATION_DATA } from "@/data/phase5Services";
import { ServicePageLayout } from "@/components/service/ServicePageLayout";

const serviceData = PHASE5_CONSULTATION_DATA["business-consultation"];

export const metadata: Metadata = {
  title: serviceData.seoTitle,
  description: serviceData.seoDescription,
};

export default function BusinessConsultationPage() {
  return <ServicePageLayout data={serviceData} />;
}
