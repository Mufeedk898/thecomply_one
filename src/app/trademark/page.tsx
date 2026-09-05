import React from "react";
import { Metadata } from "next";
import { TrademarkComingSoon } from "@/components/service/TrademarkComingSoon";

export const metadata: Metadata = {
  title: "Trademark Services - Coming Soon | The Comply One",
  description:
    "Trademark and Intellectual Property protection services coming soon at The Comply One.",
};

export default function TrademarkLandingPage() {
  return <TrademarkComingSoon />;
}
