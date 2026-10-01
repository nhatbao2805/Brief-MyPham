"use client";

import React, { useEffect } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ProductIllustration } from "./ProductIllustration";

export const CartDrawer: React.FC = () => {
  const {
    items,
    itemsCount,
    subtotal,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
  } = useCart();

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 30000;
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const formatPrice = (amount: number) => {
    return "₩" + amount.toLocaleString("ko-KR");
  };

  const handleCheckout = () => {
    const totalAmount = subtotal + (remainingForFreeShipping === 0 ? 0 : 3000);
    alert(`주문 결제 페이지로 이동합니다.\n\n총 결제금액: ${formatPrice(totalAmount)}\n안전한 토스페이먼츠 / 카카오페이 결제가 지원됩니다.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={closeCart}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-oat border-l-[3px] border-charcoal h-full flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-250">
        {/* Top Header */}
        <div className="p-5 bg-matcha-500 border-b-[2.5px] border-charcoal flex items-center justify-between text-charcoal">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white border-2 border-charcoal neo-shadow-sm flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-charcoal" />
            </div>
            <div>
              <h2 className="font-jua text-xl leading-none">장바구니</h2>
              <span className="font-gowun text-xs text-charcoal/80 font-bold">
                총 {itemsCount}개 상품
              </span>
            </div>
          </div>

          <button
            onClick={closeCart}
            aria-label="장바구니 닫기"
            className="w-9 h-9 rounded-xl bg-white border-2 border-charcoal neo-shadow-sm flex items-center justify-center hover:bg-berry-100 transition-colors"
          >
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="p-4 bg-matcha-100 border-b-2 border-charcoal/15">
          <div className="flex items-center justify-between font-gowun text-xs font-bold text-matcha-900 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-matcha-700" />
              {remainingForFreeShipping === 0
                ? "🎉 무료배송 혜택 적용 완료!"
                : `₩${remainingForFreeShipping.toLocaleString("ko-KR")} 더 담으면 무료배송!`}
            </span>
            <span className="font-mono">{progressPercent}%</span>
          </div>
          <div className="w-full h-3 bg-white rounded-full border-2 border-charcoal overflow-hidden">
            <div
              className="h-full bg-matcha-500 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-matcha-100 border-2 border-charcoal neo-shadow flex flex-col items-center justify-center animate-gentle-bounce">
                <span className="text-2xl">🌱</span>
                <span className="text-xs font-mono font-bold mt-1">‿</span>
              </div>
              <div>
                <h3 className="font-jua text-xl text-charcoal">장바구니가 비어있어요</h3>
                <p className="font-gowun text-xs text-charcoal/60 mt-1 max-w-xs">
                  귀여운 초록별 진정 패치와 듀이 립밤을 담아보세요!
                </p>
              </div>
              <button
                onClick={closeCart}
                className="px-6 py-2.5 rounded-xl bg-butter border-2 border-charcoal neo-shadow font-jua text-sm hover:bg-butter-300 transition-transform active:scale-95"
              >
                쇼핑 계속하기
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="p-3.5 rounded-2xl bg-white border-2 border-charcoal neo-shadow-sm flex gap-3 items-center"
              >
                {/* Product thumbnail */}
                <div
                  className="w-16 h-16 rounded-xl border-2 border-charcoal flex-shrink-0 flex items-center justify-center overflow-hidden p-1"
                  style={{ backgroundColor: item.product.cardBg }}
                >
                  <ProductIllustration
                    type={item.product.illustrationType}
                    className="w-full h-full scale-75"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h4 className="font-jua text-sm text-charcoal truncate">
                      {item.product.titleKo}
                    </h4>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      aria-label="상품 삭제"
                      className="text-charcoal/40 hover:text-red-600 transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="font-gowun text-xs text-matcha-800 font-semibold truncate mt-0.5">
                    {item.product.tagline}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-mono text-sm font-bold text-charcoal">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1.5 bg-oat border-2 border-charcoal rounded-lg p-0.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        aria-label="수량 감소"
                        className="w-6 h-6 rounded flex items-center justify-center hover:bg-matcha-200 transition-colors"
                      >
                        <Minus className="w-3 h-3 text-charcoal" />
                      </button>
                      <span className="w-6 text-center font-mono text-xs font-bold text-charcoal">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        aria-label="수량 증가"
                        className="w-6 h-6 rounded flex items-center justify-center hover:bg-matcha-200 transition-colors"
                      >
                        <Plus className="w-3 h-3 text-charcoal" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Section */}
        {items.length > 0 && (
          <div className="p-5 bg-white border-t-[2.5px] border-charcoal space-y-4">
            <div className="space-y-1.5 font-gowun text-xs">
              <div className="flex justify-between text-charcoal/80 font-bold">
                <span>주문 금액</span>
                <span className="font-mono text-sm">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-charcoal/80 font-bold">
                <span>배송비</span>
                <span className="font-mono text-sm">
                  {remainingForFreeShipping === 0 ? "무료배송" : "₩3,000"}
                </span>
              </div>
              <div className="pt-2 border-t border-charcoal/15 flex justify-between font-jua text-lg text-charcoal">
                <span>총 결제금액</span>
                <span className="font-mono font-black text-xl text-matcha-900">
                  {formatPrice(subtotal + (remainingForFreeShipping === 0 ? 0 : 3000))}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-4 rounded-2xl bg-matcha-500 hover:bg-matcha-600 text-white font-jua text-lg border-2 border-charcoal neo-shadow flex items-center justify-center gap-2 transition-transform active:scale-98"
            >
              <span>주문 결제하기</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <div className="flex items-center justify-center gap-2 text-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-matcha-600" />
              <span className="font-gowun text-[11px] text-charcoal/70 font-semibold">
                안전한 결제 시스템 • 30일 무료 교환 및 반품 보장
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
