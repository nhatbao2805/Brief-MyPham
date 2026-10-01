"use client";

import React, { useState } from "react";
import { Star, Plus, Check } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { triggerChorokConfetti } from "@/lib/confetti";
import { ProductIllustration } from "./ProductIllustration";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerChorokConfetti(e);
    addItem(product);

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  const formatPrice = (price: number) => {
    return "₩" + price.toLocaleString("ko-KR");
  };

  return (
    <div
      className={`group relative rounded-3xl neo-border neo-shadow flex flex-col justify-between overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-pop-lg ${
        featured ? "bg-white p-6 sm:p-8" : "bg-white p-5 sm:p-6"
      }`}
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Top badges & rating */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {product.badge && (
              <span className="font-jua text-xs px-3 py-1 rounded-full bg-matcha-500 text-white border-2 border-charcoal neo-shadow-sm">
                {product.badge}
              </span>
            )}
            <span className="font-gowun text-[11px] font-bold text-charcoal/70 bg-oat-200 px-2.5 py-1 rounded-full border border-charcoal/30">
              {product.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-butter px-2.5 py-1 rounded-full border-2 border-charcoal neo-shadow-sm">
            <Star className="w-3.5 h-3.5 fill-charcoal text-charcoal" />
            <span className="font-mono text-xs font-bold text-charcoal">{product.rating}</span>
            <span className="font-gowun text-[10px] text-charcoal/70">
              (리뷰 {product.reviewsCount.toLocaleString("ko-KR")}개)
            </span>
          </div>
        </div>

        {/* Visual Illustration Showcase Box */}
        <div
          className="w-full rounded-2xl border-2 border-charcoal p-4 flex items-center justify-center my-3 transition-colors duration-300 relative overflow-hidden"
          style={{ backgroundColor: product.cardBg }}
        >
          <ProductIllustration
            type={product.illustrationType}
            className={featured ? "h-52 sm:h-60" : "h-44 sm:h-48"}
          />
        </div>

        {/* Title & Tagline */}
        <div className="mt-4">
          <h3 className="font-jua text-xl sm:text-2xl text-charcoal tracking-tight leading-snug group-hover:text-matcha-800 transition-colors">
            {product.titleKo}
          </h3>
          <p className="font-gowun text-xs text-matcha-800 font-bold tracking-tight mt-1">
            {product.tagline}
          </p>

          <p className="font-gowun text-xs sm:text-sm text-charcoal/80 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {product.features.map((feature, idx) => (
            <span
              key={idx}
              className="font-gowun text-[11px] font-semibold bg-oat px-2 py-0.5 rounded-md border border-charcoal/30 text-charcoal/80"
            >
              ✓ {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom: Pricing & Add to Bag CTA Button */}
      <div className="mt-6 pt-4 border-t-2 border-charcoal/15 flex items-center justify-between gap-3">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-xl sm:text-2xl font-black text-charcoal">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="font-mono text-xs sm:text-sm line-through text-charcoal/40 font-semibold">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <span className="font-gowun text-[10px] text-matcha-700 font-bold">
            ₩30,000 이상 무료배송
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className={`px-4 sm:px-5 py-3 rounded-2xl font-jua text-sm sm:text-base border-2 border-charcoal neo-shadow flex items-center gap-2 transition-all active:scale-95 ${
            isAdded
              ? "bg-matcha-500 text-white"
              : "bg-butter hover:bg-butter-300 text-charcoal hover:-translate-y-0.5"
          }`}
          aria-label={`장바구니에 ${product.titleKo} 담기`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4 stroke-[3]" />
              <span>담김!</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>장바구니 담기</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
