import React from "react";
import { Metadata } from "next";
import { TrademarkComingSoon } from "@/components/service/TrademarkComingSoon";

export const metadata: Metadata = {
  title: "Trademark Opposition - Coming Soon | The Comply One",
  description: "Trademark opposition services coming soon at The Comply One.",
};

export default function TrademarkOppositionPage() {
  return <TrademarkComingSoon />;
}
