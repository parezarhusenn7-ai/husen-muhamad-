import { useState } from 'react';
import { LAWYER_DATA } from '../data/lawyerData';
import { LegalIcon } from './LegalIcon';
import { downloadVCard } from '../utils/vcard';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      id="qr-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="qr-modal-content"
        className="relative w-full max-w-sm rounded-2xl bg-[#111111] border border-[#c5a059]/40 p-5 sm:p-6 shadow-2xl shadow-black text-center text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="qr-modal-close-btn"
          className="absolute top-3.5 left-3.5 p-1.5 rounded-lg bg-[#1a1a1a] text-neutral-400 hover:text-white hover:bg-[#252525] transition-colors cursor-pointer"
          aria-label="داخستن"
        >
          <LegalIcon name="X" className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#161616] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] mb-2.5">
            <LegalIcon name="Scale" className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white legal-serif">
            {LAWYER_DATA.name}
          </h3>
          <p className="text-xs text-[#c5a059] font-semibold mt-0.5">
            {LAWYER_DATA.title} • کارتی دیجیتاڵی یاسایی
          </p>
        </div>

        {/* QR Code Graphic Box */}
        <div className="bg-white p-3.5 rounded-xl border-2 border-[#c5a059]/40 shadow-inner max-w-[200px] mx-auto mb-4">
          <div className="relative aspect-square flex items-center justify-center bg-white">
            {/* SVG Representation of QR Code Matrix */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-black">
              {/* Corner 1 (Top-Left) */}
              <rect x="5" y="5" width="26" height="26" fill="black" />
              <rect x="9" y="9" width="18" height="18" fill="white" />
              <rect x="13" y="13" width="10" height="10" fill="black" />

              {/* Corner 2 (Top-Right) */}
              <rect x="69" y="5" width="26" height="26" fill="black" />
              <rect x="73" y="9" width="18" height="18" fill="white" />
              <rect x="77" y="13" width="10" height="10" fill="black" />

              {/* Corner 3 (Bottom-Left) */}
              <rect x="5" y="69" width="26" height="26" fill="black" />
              <rect x="9" y="73" width="18" height="18" fill="white" />
              <rect x="13" y="77" width="10" height="10" fill="black" />

              {/* Pattern Blocks */}
              <rect x="36" y="8" width="5" height="5" fill="black" />
              <rect x="45" y="8" width="8" height="5" fill="black" />
              <rect x="57" y="8" width="5" height="5" fill="black" />

              <rect x="36" y="18" width="8" height="5" fill="black" />
              <rect x="48" y="18" width="5" height="5" fill="black" />
              <rect x="57" y="18" width="6" height="5" fill="black" />

              <rect x="8" y="36" width="5" height="6" fill="black" />
              <rect x="18" y="36" width="5" height="8" fill="black" />
              <rect x="8" y="48" width="5" height="5" fill="black" />
              <rect x="18" y="48" width="8" height="5" fill="black" />

              <rect x="36" y="36" width="8" height="8" fill="black" />
              <rect x="48" y="36" width="6" height="6" fill="black" />
              <rect x="58" y="36" width="8" height="8" fill="black" />
              <rect x="72" y="36" width="8" height="5" fill="black" />
              <rect x="84" y="36" width="6" height="6" fill="black" />

              <rect x="36" y="48" width="6" height="6" fill="black" />
              <rect x="46" y="46" width="8" height="8" fill="#AA820A" />
              <rect x="58" y="48" width="6" height="6" fill="black" />
              <rect x="70" y="48" width="8" height="8" fill="black" />
              <rect x="82" y="48" width="8" height="5" fill="black" />

              <rect x="36" y="60" width="8" height="6" fill="black" />
              <rect x="48" y="60" width="6" height="8" fill="black" />
              <rect x="58" y="60" width="8" height="6" fill="black" />
              <rect x="70" y="60" width="6" height="6" fill="black" />
              <rect x="82" y="60" width="8" height="6" fill="black" />

              <rect x="36" y="72" width="6" height="8" fill="black" />
              <rect x="46" y="72" width="8" height="6" fill="black" />
              <rect x="58" y="72" width="6" height="8" fill="black" />
              <rect x="70" y="72" width="8" height="6" fill="black" />
              <rect x="82" y="72" width="6" height="8" fill="black" />

              <rect x="36" y="84" width="8" height="6" fill="black" />
              <rect x="48" y="84" width="6" height="6" fill="black" />
              <rect x="58" y="84" width="8" height="6" fill="black" />
              <rect x="72" y="84" width="6" height="6" fill="black" />
              <rect x="82" y="84" width="8" height="6" fill="black" />
            </svg>
          </div>
        </div>

        <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
          کامێرای مۆبایلەکەت بکەرەوە و ئەم کۆدە سکان بکە بۆ کردنەوەی خێرای کارتی دیجیتاڵی.
        </p>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={downloadVCard}
            className="w-full py-2.5 px-3.5 rounded-lg bg-[#c5a059] hover:bg-[#e0bc75] text-black font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <LegalIcon name="Download" className="w-3.5 h-3.5" />
            <span>تۆمارکردنی ناو و ژمارە لە مۆبایل (vCard)</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full py-2 px-3.5 rounded-lg bg-[#181818] hover:bg-[#222222] border border-white/10 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <LegalIcon name="CheckCircle2" className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">لینکی کارتەکە کۆپی کرا!</span>
              </>
            ) : (
              <>
                <LegalIcon name="Copy" className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>کۆپیکردنی لینکی کارتەکە</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
