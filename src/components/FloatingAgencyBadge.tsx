"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

interface FloatingAgencyBadgeProps {
  onClick: () => void;
}

export const FloatingAgencyBadge: React.FC<FloatingAgencyBadgeProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button
        onClick={onClick}
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-charcoal text-oat border-2 border-charcoal neo-shadow-lg hover:bg-charcoal-50 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Open agency contact showcase"
      >
        {/* Pulsing indicator */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-matcha-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-matcha-500" />
        </span>

        {/* Badge Label */}
        <div className="flex items-center gap-2">
          <span className="font-jua text-sm text-butter flex items-center gap-1.5 whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-butter" />
            Concept Demo
          </span>
          <span className="hidden sm:inline font-mono text-xs text-oat/90 border-l border-oat/20 pl-2">
            Nhận làm Storefront tương tự
          </span>
          <ArrowRight className="w-4 h-4 text-butter group-hover:translate-x-1 transition-transform" />
        </div>
      </button>
    </div>
  );
};
