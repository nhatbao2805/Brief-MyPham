import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "초록별 | 보성 말차 내추럴 비건 뷰티",
  description:
    "귀엽고 힙한 보성 말차 스킨케어 컬렉션. 초록 진정 스팟 패치, 말차 듀이 틴티드 립밤, 모공 딥 클렌징 바.",
  keywords: ["초록별", "K-뷰티", "비건스킨케어", "말차패치", "진정패치", "립밤", "약산성클렌저"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Jua&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-oat text-charcoal antialiased selection:bg-matcha-200 selection:text-matcha-900 font-gowun">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
