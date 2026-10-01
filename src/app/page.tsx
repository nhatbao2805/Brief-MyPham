"use client";

import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { BentoGrid } from "@/components/BentoGrid";
import { CartDrawer } from "@/components/CartDrawer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-oat flex flex-col relative text-charcoal">
      {/* Desktop Sticky Left Sidebar (>= 990px) */}
      <Sidebar />

      {/* Mobile Sticky Header (< 990px) */}
      <Header />

      {/* Main Showcase Body with left padding on desktop */}
      <main className="flex-1 w-full lg:pl-[110px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
          <BentoGrid />
        </div>
      </main>

      {/* Interactive Cart Slide-over Drawer */}
      <CartDrawer />
    </div>
  );
}
