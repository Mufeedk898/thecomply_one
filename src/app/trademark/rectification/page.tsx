import React from "react";
import { Metadata } from "next";
import { TrademarkComingSoon } from "@/components/service/TrademarkComingSoon";

export const metadata: Metadata = {
  title: "Trademark Rectification - Coming Soon | The Comply One",
  description: "Trademark rectification services coming soon at The Comply One.",
};

export default function TrademarkRectificationPage() {
  return <TrademarkComingSoon />;
}
