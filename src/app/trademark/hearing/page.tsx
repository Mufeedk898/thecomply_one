import React from "react";
import { Metadata } from "next";
import { TrademarkComingSoon } from "@/components/service/TrademarkComingSoon";

export const metadata: Metadata = {
  title: "Trademark Hearing - Coming Soon | The Comply One",
  description: "Trademark hearing services coming soon at The Comply One.",
};

export default function TrademarkHearingPage() {
  return <TrademarkComingSoon />;
}
