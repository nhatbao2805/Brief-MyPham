"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Trophy,
  Leaf,
  ShieldCheck,
  Heart,
  Instagram,
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCategory } from "@/types";
import { ProductCard } from "./ProductCard";
import { triggerChorokConfetti } from "@/lib/confetti";

export const BentoGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all");
  const [mascotMood, setMascotMood] = useState<"happy" | "sparkle" | "wink">("happy");

  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const heroPatch = PRODUCTS.find((p) => p.id === "matcha-soothing-patch")!;
  const heroLipBalm = PRODUCTS.find((p) => p.id === "matcha-dewy-lip-balm")!;

  const handleMascotPoke = (e: React.MouseEvent) => {
    triggerChorokConfetti(e);
    const moods: ("happy" | "sparkle" | "wink")[] = ["happy", "sparkle", "wink"];
    const nextMood = moods[(moods.indexOf(mascotMood) + 1) % moods.length];
    setMascotMood(nextMood);
  };

  return (
    <div className="w-full space-y-12">
      {/* Top Hero Banner Ticker */}
      <div className="rounded-2xl bg-matcha-900 text-matcha-100 border-[2.5px] border-charcoal overflow-hidden py-3 neo-shadow select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-gowun text-xs sm:text-sm font-bold tracking-wider">
          <span className="flex items-center gap-2">🌱 100% 보성 유기농 말차 추출물</span>
          <span>•</span>
          <span className="flex items-center gap-2">⭐ 전 상품 ₩30,000 이상 무료배송</span>
          <span>•</span>
          <span className="flex items-center gap-2">🏆 2026 올리브영 1위 뷰티 어워즈 수상</span>
          <span>•</span>
          <span className="flex items-center gap-2">🐰 동물실험 반대 100% 비건 포뮬러</span>
          <span>•</span>
          <span className="flex items-center gap-2">✨ 신규 회원가입 시 ₩3,000 할인쿠폰 즉시 지급</span>
          <span>•</span>
          <span className="flex items-center gap-2">🌱 100% 보성 유기농 말차 추출물</span>
          <span>•</span>
          <span className="flex items-center gap-2">⭐ 전 상품 ₩30,000 이상 무료배송</span>
          <span>•</span>
          <span className="flex items-center gap-2">🏆 2026 올리브영 1위 뷰티 어워즈 수상</span>
          <span>•</span>
          <span className="flex items-center gap-2">🐰 동물실험 반대 100% 비건 포뮬러</span>
        </div>
      </div>

      {/* Main Bento Grid Container */}
      <section id="products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: Interactive Category Navigation & Brand Intro (Spans 2 cols on tablet/desktop) */}
        <div className="md:col-span-2 lg:col-span-1 rounded-3xl bg-matcha-500 border-[3px] border-charcoal neo-shadow p-6 sm:p-8 flex flex-col justify-between text-charcoal relative overflow-hidden">
          {/* Decorative Background Blob */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-matcha-400 rounded-full blur-2xl opacity-60" />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-jua text-xs px-3 py-1 rounded-full bg-butter border-2 border-charcoal neo-shadow-sm">
                내추럴 비건 뷰티
              </span>
              <span className="font-gowun text-xs font-bold px-2 py-0.5 rounded-full bg-white/80 border border-charcoal/30">
                2026 시즌
              </span>
            </div>

            <h1 className="font-jua text-3xl sm:text-4xl text-charcoal leading-tight">
              피부에 초록별이 내리는 순간 🌱
            </h1>
            <p className="font-gowun text-sm text-charcoal/90 mt-3 leading-relaxed">
              지루한 스킨케어는 그만! 보성 말차의 강력한 수분 진정 에너지와 귀여운 패키지로 매일 아침 거울 앞을 기분 좋게 만듭니다.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-6">
              <span className="font-jua text-xs text-matcha-950 block mb-2.5 tracking-wide">
                카테고리 선택
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-3.5 py-1.5 rounded-xl font-jua text-xs sm:text-sm border-2 border-charcoal transition-all ${
                    selectedCategory === "all"
                      ? "bg-charcoal text-white neo-shadow-sm -translate-y-0.5"
                      : "bg-white hover:bg-matcha-100 text-charcoal"
                  }`}
                >
                  전체
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                    className={`px-3.5 py-1.5 rounded-xl font-jua text-xs sm:text-sm border-2 border-charcoal transition-all ${
                      selectedCategory === cat.id
                        ? "bg-charcoal text-white neo-shadow-sm -translate-y-0.5"
                        : "bg-white hover:bg-matcha-100 text-charcoal"
                    }`}
                  >
                    {cat.labelKo}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Routine feature badges */}
          <div className="mt-8 pt-5 border-t-2 border-charcoal/20 grid grid-cols-2 gap-2">
            <div className="bg-white/90 p-2.5 rounded-xl border-2 border-charcoal neo-shadow-sm flex items-center gap-2">
              <Leaf className="w-4 h-4 text-matcha-700" />
              <span className="font-gowun text-[11px] font-bold">100% 비건 포뮬러</span>
            </div>
            <div className="bg-white/90 p-2.5 rounded-xl border-2 border-charcoal neo-shadow-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-matcha-700" />
              <span className="font-gowun text-[11px] font-bold">피부 저자극 테스트 완료</span>
            </div>
          </div>
        </div>

        {/* Card 2: Hero Product 1 - Matcha Soothing Pimple Patch */}
        <div className="lg:col-span-1">
          <ProductCard product={heroPatch} featured />
        </div>

        {/* Card 3: Hero Product 2 - Matcha Dewy Lip Balm */}
        <div className="lg:col-span-1">
          <ProductCard product={heroLipBalm} featured />
        </div>

        {/* Card 4: Mascot Interactive Greeting Card */}
        <div className="rounded-3xl bg-butter border-[3px] border-charcoal neo-shadow p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="font-jua text-xs px-3 py-1 rounded-full bg-white border-2 border-charcoal neo-shadow-sm">
              초록별 마스코트
            </span>
            <span className="text-xs font-gowun font-bold bg-matcha-500 text-white px-2.5 py-1 rounded-full border border-charcoal">
              터치해 보세요!
            </span>
          </div>

          <div className="my-6 flex flex-col items-center text-center">
            {/* Mascot Cube with Moods */}
            <div
              onClick={handleMascotPoke}
              className="relative w-28 h-28 rounded-3xl bg-matcha-500 border-[3.5px] border-charcoal neo-shadow flex flex-col items-center justify-center cursor-pointer hover:rotate-6 hover:scale-110 active:scale-95 transition-all duration-200 group"
              title="클릭하여 인사하기!"
            >
              <div className="absolute -top-3 w-8 h-8 rounded-full bg-matcha-300 border-2 border-charcoal flex items-center justify-center text-sm">
                🌱
              </div>

              {mascotMood === "happy" && (
                <>
                  <div className="flex items-center gap-6 mt-3">
                    <div className="w-3.5 h-3.5 rounded-full bg-charcoal" />
                    <div className="w-3.5 h-3.5 rounded-full bg-charcoal" />
                  </div>
                  <div className="w-5 h-2.5 border-b-[3.5px] border-charcoal rounded-full mt-2" />
                </>
              )}

              {mascotMood === "sparkle" && (
                <>
                  <div className="flex items-center gap-5 mt-3 text-lg font-bold">
                    <span>✨</span>
                    <span>✨</span>
                  </div>
                  <div className="w-4 h-4 bg-charcoal rounded-full mt-1.5" />
                </>
              )}

              {mascotMood === "wink" && (
                <>
                  <div className="flex items-center gap-5 mt-3">
                    <span className="font-mono text-xl font-bold leading-none">^</span>
                    <div className="w-3.5 h-3.5 rounded-full bg-charcoal" />
                  </div>
                  <div className="w-4 h-2 border-b-[3.5px] border-charcoal rounded-full mt-2" />
                </>
              )}

              <span className="absolute -bottom-2.5 bg-white text-charcoal text-[11px] font-jua px-2.5 py-0.5 rounded-md border border-charcoal">
                터치!
              </span>
            </div>

            {/* Mascot Dialogue */}
            <div className="mt-5 bg-white border-2 border-charcoal rounded-2xl p-4 neo-shadow-sm max-w-xs text-left">
              <p className="font-jua text-base text-charcoal">
                &ldquo;안녕 반가워 :)&rdquo;
              </p>
              <p className="font-gowun text-xs text-charcoal/80 mt-1.5 leading-relaxed">
                나는 너의 피부를 위한 초록별 말차 큐브야! 매일 아침 거울 앞에서 기분 좋은 생기를 선물할게 🌱 오늘도 반짝이는 하루 보내!
              </p>
            </div>
          </div>

          <button
            onClick={handleMascotPoke}
            className="w-full py-2.5 rounded-xl bg-charcoal hover:bg-charcoal-50 text-white font-jua text-xs sm:text-sm border-2 border-charcoal neo-shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-butter" />
            <span>말차 큐브 쓰다듬기 ✨</span>
          </button>
        </div>

        {/* Card 5: K-Beauty Awards & Press */}
        <div id="awards" className="rounded-3xl bg-white border-[3px] border-charcoal neo-shadow p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-jua text-xs px-3 py-1 rounded-full bg-berry text-white border-2 border-charcoal neo-shadow-sm flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-butter" />
                올리브영 1위
              </span>
              <span className="font-gowun text-xs font-bold text-charcoal/60">2026 뷰티 어워드</span>
            </div>

            <h3 className="font-jua text-2xl text-charcoal">
              올리브영 1위 & 2026 뷰티 어워드
            </h3>
            <p className="font-gowun text-xs sm:text-sm text-charcoal/70 mt-1">
              런칭 3개월 만에 15만 개 완판! 에디터스 초이스 선정.
            </p>

            {/* Press Quotes */}
            <div className="mt-5 space-y-3">
              <div className="p-3 bg-matcha-50 rounded-2xl border-2 border-charcoal/30">
                <p className="font-gowun text-xs text-charcoal italic leading-relaxed">
                  &ldquo;붙이는 순간 피부 결점을 가려주고 밤사이 진정시키는 가장 힙한 Z세대 필수템.&rdquo;
                </p>
                <span className="font-gowun text-[11px] font-bold text-matcha-800 mt-1.5 block">
                  — 보그 코리아 2026 뷰티 어워드 1위 선정
                </span>
              </div>

              <div className="p-3 bg-butter-50 rounded-2xl border-2 border-charcoal/30">
                <p className="font-gowun text-xs text-charcoal italic leading-relaxed">
                  &ldquo;끈적임 없이 스며드는 맑은 말차 립밤의 유리알 광택은 독보적이다.&rdquo;
                </p>
                <span className="font-gowun text-[11px] font-bold text-charcoal mt-1.5 block">
                  — 얼루어 에디터스 픽 베스트 립케어
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-charcoal/15 flex items-center justify-between font-gowun">
            <span className="text-xs font-bold text-charcoal/60">누적 리뷰 12,000개+</span>
            <div className="flex items-center gap-1 text-matcha-700 text-xs font-bold">
              <span>평점 4.9 / 5.0</span>
              <Sparkles className="w-4 h-4 fill-matcha-600" />
            </div>
          </div>
        </div>

        {/* Card 6: UGC Lookbook Community Grid */}
        <div id="lookbook" className="rounded-3xl bg-berry-100 border-[3px] border-charcoal neo-shadow p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-jua text-xs px-3 py-1 rounded-full bg-charcoal text-white border-2 border-charcoal neo-shadow-sm flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-berry" />
                초록별 일상 리뷰
              </span>
              <span className="font-gowun text-xs font-bold text-berry-700">#초록별</span>
            </div>

            <h3 className="font-jua text-2xl text-charcoal leading-snug">
              피부에 착! 초록별과 함께하는 생기 넘치는 순간들
            </h3>
            <p className="font-gowun text-xs sm:text-sm text-charcoal/80 mt-1">
              트러블을 숨기지 말고 당당하고 귀엽게! 초록별과 함께하는 고객 일상 갤러리.
            </p>

            {/* Cute Lookbook Tile Grid */}
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <div className="h-28 rounded-2xl bg-white border-2 border-charcoal neo-shadow-sm p-3 flex flex-col justify-between group hover:rotate-2 transition-transform">
                <div className="flex items-center justify-between">
                  <span className="text-xl">⭐</span>
                  <span className="font-mono text-[10px] text-charcoal/60">@minji_ss</span>
                </div>
                <div className="font-jua text-xs text-charcoal">
                  &ldquo;패치 붙이고 셀카 찍기 💚&rdquo;
                </div>
              </div>

              <div className="h-28 rounded-2xl bg-matcha-200 border-2 border-charcoal neo-shadow-sm p-3 flex flex-col justify-between group hover:-rotate-2 transition-transform">
                <div className="flex items-center justify-between">
                  <span className="text-xl">💧</span>
                  <span className="font-mono text-[10px] text-charcoal/60">@hayeon.k</span>
                </div>
                <div className="font-jua text-xs text-charcoal">
                  &ldquo;립밤 광택 진짜 촉촉해요!&rdquo;
                </div>
              </div>

              <div className="h-28 rounded-2xl bg-butter-200 border-2 border-charcoal neo-shadow-sm p-3 flex flex-col justify-between group hover:-rotate-1 transition-transform">
                <div className="flex items-center justify-between">
                  <span className="text-xl">🧼</span>
                  <span className="font-mono text-[10px] text-charcoal/60">@sojin_glow</span>
                </div>
                <div className="font-jua text-xs text-charcoal">
                  &ldquo;클렌징바 거품 대박 쫀쫀&rdquo;
                </div>
              </div>

              <div className="h-28 rounded-2xl bg-white border-2 border-charcoal neo-shadow-sm p-3 flex flex-col justify-between group hover:rotate-1 transition-transform">
                <div className="flex items-center justify-between">
                  <span className="text-xl">🌱</span>
                  <span className="font-mono text-[10px] text-charcoal/60">@yuna_v</span>
                </div>
                <div className="font-jua text-xs text-charcoal">
                  &ldquo;초록별 세트 언박싱 완료!&rdquo;
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-charcoal/15 flex items-center justify-between font-gowun">
            <span className="text-xs font-bold text-charcoal/70">공식 SNS 리뷰 이벤트</span>
            <span className="font-jua text-xs text-matcha-900 bg-white px-2.5 py-1 rounded-full border border-charcoal">
              적립금 ₩5,000 증정 →
            </span>
          </div>
        </div>
      </section>

      {/* Secondary Products Showcase (Filtered products: Cleanser, Bundle, Mist, etc.) */}
      <section className="pt-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-jua text-2xl sm:text-3xl text-charcoal flex items-center gap-2">
              <span>스킨케어 컬렉션 전체보기</span>
              <span className="text-base font-gowun text-matcha-800 bg-matcha-100 px-3 py-0.5 rounded-full border border-charcoal/30 font-bold">
                {filteredProducts.length}개 상품
              </span>
            </h2>
            <p className="font-gowun text-xs sm:text-sm text-charcoal/70 mt-1">
              원하는 라인을 선택하고 바로 장바구니에 담아보세요.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Playful Neo-Pop Black Footer (100% Korean) */}
      <footer className="mt-20 rounded-3xl bg-charcoal text-oat border-[3px] border-charcoal neo-shadow-lg p-8 sm:p-12 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Brand & Hangul big typography */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-matcha-500 border-2 border-white flex items-center justify-center font-jua text-2xl text-white neo-shadow-sm">
                초
              </div>
              <div>
                <h3 className="font-jua text-3xl sm:text-4xl text-white tracking-wide">
                  초록별
                </h3>
                <span className="font-gowun text-xs text-butter tracking-wider font-bold">
                  보성 말차 내추럴 비건 뷰티
                </span>
              </div>
            </div>

            <p className="font-gowun text-sm text-oat/80 max-w-md leading-relaxed">
              초록별은 복잡하고 무거운 기존 스킨케어의 틀을 깨고, 가장 신선한 유기농 말차로 매일 기분 좋은 스킨케어 루틴을 제안합니다.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-gowun font-bold">
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20">
                🌱 100% 보성 유기농 말차
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20">
                🐰 동물실험 반대 비건
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20">
                ♻️ 친환경 안심 패키지
              </span>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-jua text-base text-butter mb-3">고객지원</h4>
              <ul className="space-y-2 font-gowun text-xs text-oat/80">
                <li><a href="#" className="hover:text-white transition-colors">브랜드 소개</a></li>
                <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-white transition-colors">배송 안내</a></li>
                <li><a href="#" className="hover:text-white transition-colors">고객센터</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-jua text-base text-butter mb-3">마이페이지</h4>
              <ul className="space-y-2 font-gowun text-xs text-oat/80">
                <li><a href="#" className="hover:text-white transition-colors">마이페이지</a></li>
                <li><a href="#" className="hover:text-white transition-colors">로그인</a></li>
                <li><a href="#" className="hover:text-white transition-colors">주문 조회</a></li>
                <li><a href="#" className="hover:text-white transition-colors">회원 혜택</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-4 bg-charcoal-50 p-6 rounded-2xl border-2 border-white/20 space-y-3">
            <h4 className="font-jua text-lg text-butter flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-butter" />
              뉴스레터 구독
            </h4>
            <p className="font-gowun text-xs text-oat/80 leading-relaxed">
              첫 구매 시 사용 가능한 10% 할인 쿠폰을 드립니다. 신제품 소식을 가장 먼저 받아보세요.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("🎉 구독이 완료되었습니다! 첫 구매 10% 할인 쿠폰이 발급되었습니다.");
              }}
              className="flex flex-col sm:flex-row gap-2 pt-1"
            >
              <input
                type="email"
                required
                placeholder="이메일 주소를 입력하세요 (example@email.com)"
                className="flex-1 px-4 py-3 rounded-xl bg-charcoal text-white border-2 border-white/30 text-xs font-gowun focus:outline-none focus:border-matcha-400"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-matcha-500 hover:bg-matcha-600 text-white font-jua text-sm border-2 border-white neo-shadow-sm transition-transform active:scale-95"
              >
                구독하기
              </button>
            </form>
          </div>
        </div>

        {/* Korean Copyright & Terms */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-gowun text-xs text-oat/60">
          <div>
            © 2026 주식회사 초록별. 모든 권리 보유.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-oat transition-colors">이용약관</a>
            <span>•</span>
            <a href="#" className="hover:text-oat transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
