"use client";

import React, { useState } from "react";
import { Menu, X, ShoppingBag, Leaf, Sparkles, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const Header: React.FC = () => {
  const { itemsCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="lg:hidden sticky top-0 z-40 bg-matcha-500 border-b-[2.5px] border-charcoal px-4 py-3 select-none shadow-md">
      <div className="flex items-center justify-between">
        {/* Left: Hamburger menu */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          aria-label="메뉴 열기"
          className="w-11 h-11 rounded-xl bg-oat border-2 border-charcoal neo-shadow-sm flex items-center justify-center active:scale-95 transition-transform"
        >
          <Menu className="w-6 h-6 text-charcoal" />
        </button>

        {/* Center: Brand identity (Pure Korean "초록별") */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-butter border-2 border-charcoal flex flex-col items-center justify-center neo-shadow-sm">
            <span className="text-[10px] leading-none">🌱</span>
            <span className="text-[8px] font-mono font-bold leading-none mt-0.5">‿</span>
          </div>
          <span className="font-jua text-2xl text-charcoal leading-none tracking-normal">
            초록별
          </span>
        </div>

        {/* Right: Quick Cart Trigger */}
        <button
          onClick={openCart}
          aria-label="장바구니 열기"
          className="relative w-11 h-11 rounded-xl bg-matcha-900 text-oat border-2 border-charcoal flex items-center justify-center active:scale-95 transition-transform neo-shadow-sm"
        >
          <ShoppingBag className="w-5 h-5" />
          {itemsCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-berry text-white text-[10px] font-mono font-bold w-5 h-5 rounded-full border border-charcoal flex items-center justify-center animate-bounce">
              {itemsCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-oat">
          {/* Header in menu */}
          <div className="p-4 bg-matcha-500 border-b-[2.5px] border-charcoal flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-jua text-2xl text-charcoal">초록별</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="메뉴 닫기"
              className="w-10 h-10 rounded-xl bg-oat border-2 border-charcoal flex items-center justify-center"
            >
              <X className="w-6 h-6 text-charcoal" />
            </button>
          </div>

          {/* Links */}
          <div className="p-6 flex-1 flex flex-col justify-between overflow-y-auto">
            <nav className="flex flex-col gap-3 font-jua text-lg">
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="p-4 rounded-2xl bg-matcha-100 border-2 border-charcoal neo-shadow-sm flex items-center justify-between"
              >
                <span className="flex items-center gap-3">
                  <Leaf className="w-5 h-5 text-matcha-700" /> 스킨케어 컬렉션
                </span>
                <span className="font-gowun text-xs font-bold text-matcha-800">쇼핑하기</span>
              </a>

              <a
                href="#awards"
                onClick={() => setMobileMenuOpen(false)}
                className="p-4 rounded-2xl bg-butter-100 border-2 border-charcoal neo-shadow-sm flex items-center justify-between"
              >
                <span className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-matcha-700" /> 올리브영 1위 & 어워즈
                </span>
                <span className="font-gowun text-xs font-bold text-charcoal/70">어워즈 수상</span>
              </a>

              <a
                href="#lookbook"
                onClick={() => setMobileMenuOpen(false)}
                className="p-4 rounded-2xl bg-berry-100 border-2 border-charcoal neo-shadow-sm flex items-center justify-between"
              >
                <span className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-berry" /> 커뮤니티 룩북
                </span>
                <span className="font-gowun text-xs font-bold text-berry">리뷰 갤러리</span>
              </a>
            </nav>

            <div className="pt-6 border-t-2 border-charcoal/15">
              <div className="p-4 rounded-2xl bg-butter border-2 border-charcoal neo-shadow-sm text-center">
                <p className="font-jua text-base text-charcoal">
                  🌱 100% 보성 유기농 말차 뷰티
                </p>
                <p className="font-gowun text-xs text-charcoal/80 mt-1">
                  전 상품 ₩30,000 이상 구매 시 무료배송
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
