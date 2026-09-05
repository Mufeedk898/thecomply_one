import React from "react";
import { Metadata } from "next";
import { TrademarkComingSoon } from "@/components/service/TrademarkComingSoon";

export const metadata: Metadata = {
  title: "Trademark Renewal - Coming Soon | The Comply One",
  description: "Trademark renewal services coming soon at The Comply One.",
};

export default function TrademarkRenewalPage() {
  return <TrademarkComingSoon />;
}
