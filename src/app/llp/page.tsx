import React from "react";
import { Metadata } from "next";
import { STARTUP_SERVICES_DATA } from "@/data/startupServices";
import { ServicePageLayout } from "@/components/service/ServicePageLayout";

const serviceData = STARTUP_SERVICES_DATA["llp"];

export const metadata: Metadata = {
  title: serviceData.seoTitle,
  description: serviceData.seoDescription,
};

export default function LLPRegistrationPage() {
  return <ServicePageLayout data={serviceData} />;
}
