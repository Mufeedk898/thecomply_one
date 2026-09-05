import React from "react";
import { Metadata } from "next";
import { TrademarkComingSoon } from "@/components/service/TrademarkComingSoon";

export const metadata: Metadata = {
  title: "Trademark Assignment - Coming Soon | The Comply One",
  description: "Trademark assignment services coming soon at The Comply One.",
};

export default function TrademarkAssignmentPage() {
  return <TrademarkComingSoon />;
}
