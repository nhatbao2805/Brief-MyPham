"use client";

import React, { useState } from "react";
import { X, Send, Sparkles, Clock, CheckCircle, MessageSquare, Phone, Mail } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    note: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-oat rounded-3xl border-[3px] border-charcoal neo-shadow-lg p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white border-2 border-charcoal neo-shadow-sm flex items-center justify-center hover:bg-berry-100 transition-colors"
        >
          <X className="w-5 h-5 text-charcoal" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-butter text-charcoal border-2 border-charcoal neo-shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-matcha-700" />
            AGENCY SHOWCASE DEMO
          </span>
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-matcha-100 text-matcha-900 border border-charcoal/30 flex items-center gap-1">
            <Clock className="w-3 h-3" /> 3-5 Ngày
          </span>
        </div>

        <h2 className="font-jua text-2xl sm:text-3xl text-charcoal leading-tight">
          Sở hữu Storefront Neo-Pop Độc Bản Cho Thương Hiệu Của Bạn
        </h2>
        <p className="font-gowun text-sm text-charcoal/80 mt-2 leading-relaxed">
          Chúng tôi thiết kế và phát triển storefront cao cấp lấy cảm hứng từ các trào lưu K-Beauty & Neo-Pop (Starface, Glossier) với tỷ lệ chuyển đổi vượt trội.
        </p>

        {/* Highlight points */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="p-3 bg-white rounded-xl border-2 border-charcoal neo-shadow-sm flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-matcha-600 mt-0.5 flex-shrink-0" />
            <span className="font-mono text-xs text-charcoal">
              Next.js 14 App Router + Tailwind tối ưu tốc độ 100/100
            </span>
          </div>
          <div className="p-3 bg-white rounded-xl border-2 border-charcoal neo-shadow-sm flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-matcha-600 mt-0.5 flex-shrink-0" />
            <span className="font-mono text-xs text-charcoal">
              Micro-interactions, Confetti & Bento Grid giữ chân khách
            </span>
          </div>
          <div className="p-3 bg-white rounded-xl border-2 border-charcoal neo-shadow-sm flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-matcha-600 mt-0.5 flex-shrink-0" />
            <span className="font-mono text-xs text-charcoal">
              Tích hợp cổng thanh toán (VNPay / Momo / Stripe / Toss)
            </span>
          </div>
          <div className="p-3 bg-white rounded-xl border-2 border-charcoal neo-shadow-sm flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-matcha-600 mt-0.5 flex-shrink-0" />
            <span className="font-mono text-xs text-charcoal">
              Bàn giao mã nguồn sạch, deploy Vercel 1-click
            </span>
          </div>
        </div>

        {/* Direct Channels */}
        <div className="mt-6 pt-5 border-t-2 border-charcoal/15">
          <h3 className="font-mono text-xs font-bold text-charcoal/70 uppercase tracking-wider mb-3">
            Kênh Liên Hệ Nhanh (Phản hồi trong 15 phút):
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 border-2 border-charcoal neo-shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5 text-sky-600 mb-1" />
              <span className="font-jua text-xs text-charcoal">Telegram</span>
              <span className="font-mono text-[10px] text-charcoal/60">@agency_lead</span>
            </a>

            <a
              href="https://zalo.me/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 border-2 border-charcoal neo-shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-blue-600 mb-1" />
              <span className="font-jua text-xs text-charcoal">Zalo Official</span>
              <span className="font-mono text-[10px] text-charcoal/60">0988.xxx.xxx</span>
            </a>

            <a
              href="mailto:contact@chorokbyeol-agency.dev"
              className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border-2 border-charcoal neo-shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5 text-emerald-600 mb-1" />
              <span className="font-jua text-xs text-charcoal">Email</span>
              <span className="font-mono text-[10px] text-charcoal/60">Gửi Brief</span>
            </a>
          </div>
        </div>

        {/* Quick Consultation Form */}
        <form onSubmit={handleSubmit} className="mt-6 pt-5 border-t-2 border-charcoal/15 space-y-3">
          <h3 className="font-mono text-xs font-bold text-charcoal/70 uppercase tracking-wider">
            Hoặc để lại lời nhắn tư vấn:
          </h3>

          <div>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Tên thương hiệu / Họ tên của bạn"
              className="w-full px-4 py-3 rounded-xl bg-white border-2 border-charcoal text-sm font-mono focus:outline-none focus:ring-2 focus:ring-matcha-500"
            />
          </div>

          <div>
            <input
              type="text"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="Số điện thoại Zalo hoặc Telegram username"
              className="w-full px-4 py-3 rounded-xl bg-white border-2 border-charcoal text-sm font-mono focus:outline-none focus:ring-2 focus:ring-matcha-500"
            />
          </div>

          <div>
            <textarea
              rows={2}
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              placeholder="Ghi chú về dự án (sản phẩm, phong cách mong muốn...)"
              className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-charcoal text-sm font-mono focus:outline-none focus:ring-2 focus:ring-matcha-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitted}
            className={`w-full py-3.5 rounded-xl font-jua text-base border-2 border-charcoal neo-shadow flex items-center justify-center gap-2 transition-all ${
              isSubmitted
                ? "bg-matcha-500 text-white"
                : "bg-butter hover:bg-butter-300 text-charcoal active:scale-98"
            }`}
          >
            {isSubmitted ? (
              <>
                <CheckCircle className="w-5 h-5 text-white" />
                <span>Đã gửi thông tin! Chúng tôi sẽ phản hồi ngay!</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Gửi Yêu Cầu Tư Vấn Báo Giá</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
