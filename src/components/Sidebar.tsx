"use client";

import React, { useState } from "react";
import { Menu, X, ShoppingBag, Sparkles, Heart, Leaf } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const Sidebar: React.FC = () => {
  const { itemsCount, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sticky Left Bar (>= 990px) */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[110px] bg-matcha-500 border-r-[2.5px] border-charcoal flex-col justify-between items-center py-6 z-40 select-none shadow-[2px_0_0_0_rgba(18,18,18,0.1)]"
        aria-label="데스크톱 네비게이션"
      >
        {/* Top: Hamburger Menu Button & Bag Quick Icon */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="메뉴 열기"
            className="w-14 h-14 rounded-2xl bg-oat border-2 border-charcoal neo-shadow-sm flex items-center justify-center hover:bg-butter transition-transform active:scale-95 group"
          >
            <Menu className="w-7 h-7 text-charcoal group-hover:rotate-6 transition-transform" />
          </button>

          {/* Quick Cart Pill */}
          <button
            onClick={openCart}
            aria-label="장바구니 보기"
            className="relative w-12 h-12 rounded-xl bg-matcha-900 text-oat border-2 border-charcoal flex items-center justify-center hover:bg-matcha-800 transition-transform active:scale-95"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-berry text-white text-[11px] font-mono font-bold w-6 h-6 rounded-full border-2 border-charcoal flex items-center justify-center animate-bounce">
                {itemsCount}
              </span>
            )}
          </button>
        </div>

        {/* Center: Vertical Brand Logo "초록별" & Sub-wordmark */}
        <div className="flex flex-col items-center justify-center my-auto py-4">
          <div className="bg-oat border-2 border-charcoal px-3 py-6 rounded-3xl neo-shadow flex flex-col items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-matcha-700 uppercase -rotate-90 origin-center whitespace-nowrap mb-4">
              비건 뷰티
            </span>

            {/* Hangul Vertical Typography */}
            <div className="flex flex-col items-center gap-1 font-jua text-3xl font-extrabold text-charcoal leading-none tracking-normal py-2">
              <span className="hover:scale-110 transition-transform cursor-default">초</span>
              <span className="hover:scale-110 transition-transform cursor-default">록</span>
              <span className="hover:scale-110 transition-transform cursor-default">별</span>
            </div>

            <div className="w-4 h-1 bg-matcha-500 rounded-full my-1" />

            <span className="font-gowun text-[11px] font-bold tracking-tight text-charcoal/80 [writing-mode:vertical-rl] rotate-180">
              자연주의
            </span>
          </div>
        </div>

        {/* Bottom: Smiling Mascot 🌱‿🌱 */}
        <div className="flex flex-col items-center gap-2">
          <div
            title="안녕! 말차 큐브야"
            className="w-14 h-14 rounded-2xl bg-butter border-2 border-charcoal neo-shadow-sm flex flex-col items-center justify-center cursor-pointer hover:rotate-12 transition-transform animate-gentle-bounce group"
          >
            <span className="text-xs leading-none">🌱</span>
            <span className="text-xs font-mono font-bold leading-none mt-0.5 group-hover:scale-125 transition-transform">
              ‿
            </span>
          </div>
          <span className="font-gowun text-[11px] font-bold text-matcha-950 tracking-tighter">
            말차 큐브
          </span>
        </div>
      </aside>

      {/* Flyout Slide Navigation Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Drawer */}
          <div className="relative ml-0 lg:ml-[110px] w-full max-w-md bg-oat border-r-[2.5px] border-charcoal h-full p-8 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b-2 border-charcoal/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-matcha-500 border-2 border-charcoal flex items-center justify-center font-jua text-lg text-white neo-shadow-sm">
                    초
                  </div>
                  <div>
                    <h2 className="font-jua text-2xl text-charcoal leading-tight">초록별 탐색하기</h2>
                    <p className="font-gowun text-xs text-charcoal/60 font-semibold">공식 온라인 스토어</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="메뉴 닫기"
                  className="w-10 h-10 rounded-xl bg-white border-2 border-charcoal flex items-center justify-center hover:bg-berry-100 transition-colors"
                >
                  <X className="w-5 h-5 text-charcoal" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col gap-4 font-jua text-xl">
                <a
                  href="#products"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-4 rounded-2xl bg-matcha-100 border-2 border-charcoal neo-shadow-sm flex items-center justify-between hover:bg-matcha-200 transition-transform active:translate-x-1"
                >
                  <span className="flex items-center gap-3 text-matcha-900">
                    <Leaf className="w-5 h-5" /> 베스트 스킨케어 컬렉션
                  </span>
                  <span className="font-gowun text-xs font-bold bg-white px-2.5 py-1 rounded-full border border-charcoal">
                    5개 제품
                  </span>
                </a>

                <a
                  href="#awards"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-4 rounded-2xl bg-butter-100 border-2 border-charcoal neo-shadow-sm flex items-center justify-between hover:bg-butter-200 transition-transform active:translate-x-1"
                >
                  <span className="flex items-center gap-3 text-charcoal">
                    <Sparkles className="w-5 h-5 text-matcha-700" /> 올리브영 1위 & 어워즈
                  </span>
                  <span className="font-gowun text-xs font-bold bg-white px-2.5 py-1 rounded-full border border-charcoal">
                    2026 어워드
                  </span>
                </a>

                <a
                  href="#lookbook"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-4 rounded-2xl bg-berry-100 border-2 border-charcoal neo-shadow-sm flex items-center justify-between hover:bg-berry-200 transition-transform active:translate-x-1"
                >
                  <span className="flex items-center gap-3 text-charcoal">
                    <Heart className="w-5 h-5 text-berry" /> 커뮤니티 룩북 & 리뷰
                  </span>
                  <span className="font-gowun text-xs font-bold bg-white px-2.5 py-1 rounded-full border border-charcoal text-berry">
                    #초록별
                  </span>
                </a>
              </nav>

              {/* Brand Philosophy Box */}
              <div className="mt-8 p-5 rounded-2xl bg-white border-2 border-charcoal neo-shadow-sm">
                <h3 className="font-jua text-lg text-matcha-900 flex items-center gap-2">
                  🌱 100% 보성 유기농 말차
                </h3>
                <p className="mt-2 font-gowun text-xs text-charcoal/80 leading-relaxed">
                  초록별은 복잡하고 지루한 스킨케어 대신, 보는 순간 기분 좋아지고 붙이는 순간 피부가 숨쉬는 내추럴 비건 뷰티를 만듭니다.
                </p>
              </div>
            </div>

            {/* Bottom Member Benefits Box */}
            <div className="pt-6 border-t-2 border-charcoal/20">
              <div className="p-4 rounded-2xl bg-butter border-2 border-charcoal neo-shadow text-center">
                <div className="font-jua text-base text-charcoal flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-matcha-700" />
                  <span>초록별 공식 회원 혜택</span>
                </div>
                <p className="font-gowun text-xs text-charcoal/80 mt-1">
                  신규 회원가입 시 ₩3,000 할인 쿠폰 즉시 지급
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
