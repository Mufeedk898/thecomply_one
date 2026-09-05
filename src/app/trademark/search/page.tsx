import React from "react";
import { Metadata } from "next";
import { TrademarkComingSoon } from "@/components/service/TrademarkComingSoon";

export const metadata: Metadata = {
  title: "Trademark Search - Coming Soon | The Comply One",
  description: "Trademark search services coming soon at The Comply One.",
};

export default function TrademarkSearchPage() {
  return <TrademarkComingSoon />;
}
