import React from "react";
import { Metadata } from "next";
import { TrademarkComingSoon } from "@/components/service/TrademarkComingSoon";

export const metadata: Metadata = {
  title: "Trademark Registration - Coming Soon | The Comply One",
  description: "Trademark registration services coming soon at The Comply One.",
};

export default function TrademarkRegistrationPage() {
  return <TrademarkComingSoon />;
}
