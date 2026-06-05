"use client";

import { useIsMobile } from "@/lib/useIsMobile";
import DesktopSite from "@/components/DesktopSite";
import MobileSite from "@/components/mobile/MobileSite";

export default function Home() {
  const isMobile = useIsMobile();
  if (isMobile === null) return null;
  return isMobile ? <MobileSite /> : <DesktopSite />;
}
