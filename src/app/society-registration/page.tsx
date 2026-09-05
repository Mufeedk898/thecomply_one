import React from "react";
import { Metadata } from "next";
import { PHASE3_SERVICES_DATA } from "@/data/phase3Services";
import { ServicePageLayout } from "@/components/service/ServicePageLayout";

const serviceData = PHASE3_SERVICES_DATA["society-registration"];

export const metadata: Metadata = {
  title: serviceData.seoTitle,
  description: serviceData.seoDescription,
};

export default function SocietyRegistrationPage() {
  return <ServicePageLayout data={serviceData} />;
}
