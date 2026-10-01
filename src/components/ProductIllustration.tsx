"use client";

import React from "react";

interface ProductIllustrationProps {
  type: 'matcha-patch' | 'lip-balm' | 'cleansing-bar' | 'super-bundle' | 'tea-mist';
  className?: string;
}

export const ProductIllustration: React.FC<ProductIllustrationProps> = ({
  type,
  className = "w-full h-48",
}) => {
  switch (type) {
    case "matcha-patch":
      // Starface-inspired cute Matcha Green Pod & Star Patches
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Main Round Compact Pod */}
          <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-matcha-600 via-matcha-400 to-matcha-300 border-[3px] border-charcoal neo-shadow flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            {/* Gloss Highlight */}
            <div className="absolute top-3 left-6 w-12 h-6 bg-white/40 rounded-full blur-[1px] rotate-[-25deg]" />
            
            {/* Face on the Pod */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-5">
                <div className="w-3 h-3 rounded-full bg-charcoal" />
                <div className="w-3 h-3 rounded-full bg-charcoal" />
              </div>
              <div className="w-4 h-2 border-b-[3px] border-charcoal rounded-full mt-1.5" />
            </div>

            {/* Floating Star Patches */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-butter border-2 border-charcoal rounded-2xl neo-shadow-sm flex items-center justify-center animate-gentle-bounce">
              <span className="text-xl">⭐</span>
            </div>

            <div className="absolute -bottom-2 -left-2 w-11 h-11 bg-matcha-100 border-2 border-charcoal rounded-xl neo-shadow-sm flex items-center justify-center rotate-12">
              <span className="text-sm font-jua text-matcha-900">32매</span>
            </div>
          </div>
        </div>
      );

    case "lip-balm":
      // Chunky Matcha Dewy Tinted Lip Balm Tube
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <div className="relative flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
            {/* Balm Melting Tip */}
            <div className="w-14 h-12 rounded-t-2xl bg-gradient-to-t from-matcha-500 to-matcha-300 border-x-[3px] border-t-[3px] border-charcoal shadow-inner relative overflow-hidden">
              <div className="absolute top-1 right-2 w-3 h-8 bg-white/50 rounded-full blur-[1px] -rotate-12" />
              <div className="absolute bottom-0 inset-x-0 h-2 bg-matcha-600/30" />
            </div>

            {/* Inner Metallic Twist Collar */}
            <div className="w-16 h-4 bg-butter border-[3px] border-charcoal" />

            {/* Chunky Main Body */}
            <div className="w-20 h-28 rounded-b-3xl bg-matcha-600 border-[3px] border-charcoal neo-shadow relative flex flex-col items-center justify-center overflow-hidden">
              {/* Vertical Hangul on tube */}
              <span className="font-jua text-white text-base tracking-wider leading-none">
                말차
              </span>
              <span className="font-gowun text-[10px] font-bold text-butter tracking-wider mt-1">
                촉촉
              </span>

              {/* Gloss line */}
              <div className="absolute left-2 inset-y-2 w-1.5 bg-white/30 rounded-full" />
            </div>

            {/* Dewy droplet badge */}
            <div className="absolute -top-2 -right-4 w-9 h-9 rounded-full bg-white border-2 border-charcoal neo-shadow-sm flex items-center justify-center">
              <span className="text-xs">💧</span>
            </div>
          </div>
        </div>
      );

    case "cleansing-bar":
      // Matcha Deep Cleansing Cube Bar
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <div className="relative w-36 h-36 rounded-3xl bg-matcha-700 border-[3px] border-charcoal neo-shadow flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
            {/* Top bevel highlight */}
            <div className="absolute inset-2 rounded-2xl border-2 border-matcha-400/40 bg-matcha-600/50 flex flex-col items-center justify-center">
              <span className="font-jua text-white text-2xl drop-shadow-sm">초록</span>
              <span className="font-gowun text-[10px] font-bold text-matcha-200 tracking-wider mt-0.5">
                모공 케어
              </span>
              <div className="mt-2 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-butter" />
                <span className="w-1.5 h-1.5 rounded-full bg-butter" />
                <span className="w-1.5 h-1.5 rounded-full bg-butter" />
              </div>
            </div>

            {/* Cute Soap Bubbles */}
            <div className="absolute -top-3 -left-2 w-8 h-8 rounded-full bg-white/90 border-2 border-charcoal neo-shadow-sm flex items-center justify-center text-[10px]">
              🫧
            </div>
            <div className="absolute -bottom-1 -right-2 w-7 h-7 rounded-full bg-matcha-100 border-2 border-charcoal neo-shadow-sm flex items-center justify-center text-[8px]">
              🫧
            </div>
          </div>
        </div>
      );

    case "super-bundle":
      // All-in-one Super Star Bundle Box
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <div className="relative w-44 h-36 rounded-3xl bg-berry-300 border-[3px] border-charcoal neo-shadow flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            {/* Inner box layout */}
            <div className="absolute inset-2 rounded-2xl bg-berry-200/90 border-2 border-charcoal/20 flex flex-col items-center justify-center p-2">
              <span className="font-jua text-charcoal text-lg">스타터 세트</span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-sm bg-matcha-500 rounded-lg p-1 border border-charcoal text-white">
                  ⭐
                </span>
                <span className="text-sm bg-butter rounded-lg p-1 border border-charcoal text-charcoal">
                  💄
                </span>
                <span className="text-sm bg-matcha-700 rounded-lg p-1 border border-charcoal text-white">
                  🧼
                </span>
              </div>
              <span className="font-gowun text-[11px] font-bold text-berry-900 mt-2 bg-white px-2 py-0.5 rounded-md border border-charcoal">
                올인원
              </span>
            </div>

            {/* Holographic sticker icon */}
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-butter border-2 border-charcoal neo-shadow-sm flex items-center justify-center text-sm font-bold rotate-12">
              ✨
            </div>
          </div>
        </div>
      );

    case "tea-mist":
      // Fine Mist Spray Bottle
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <div className="relative flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
            {/* Spray Nozzle */}
            <div className="w-8 h-6 bg-charcoal rounded-t-lg relative flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-butter rounded-full absolute -right-0.5" />
            </div>
            <div className="w-10 h-3 bg-matcha-300 border-x-2 border-b-2 border-charcoal" />

            {/* Bottle Cylinder */}
            <div className="w-16 h-28 rounded-b-2xl bg-gradient-to-b from-matcha-400 to-matcha-600 border-[3px] border-charcoal neo-shadow relative flex flex-col items-center justify-center">
              <span className="font-jua text-white text-xs">미스트</span>
              <span className="font-mono text-[8px] text-matcha-100 font-bold">100ml</span>
              <div className="absolute left-1.5 inset-y-2 w-1 bg-white/40 rounded-full" />
            </div>

            {/* Floating Mist Particles */}
            <div className="absolute -top-3 -left-4 text-xs animate-bounce">
              💨
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
