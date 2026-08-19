import { LAWYER_DATA } from '../data/lawyerData';
import { LegalIcon } from './LegalIcon';
import { downloadVCard } from '../utils/vcard';

interface HeroProps {
  onOpenQR: () => void;
}

export function Hero({ onOpenQR }: HeroProps) {
  const handleSaveContact = () => {
    downloadVCard();
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] pt-24 sm:pt-32 pb-12 sm:pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Lighting & Grid Accent */}
      <div className="absolute inset-0 bg-radial from-[#181818]/60 via-[#0a0a0a]/95 to-[#0a0a0a] -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[300px] sm:h-[400px] bg-[#c5a059]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Digital Card Wrapper */}
        <div className="relative rounded-2xl bg-[#0d0d0d]/95 border border-[#c5a059]/30 shadow-2xl shadow-black p-5 sm:p-8 lg:p-10 backdrop-blur-md overflow-hidden">
          
          {/* Subtle Golden Corner Ornaments */}
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#c5a059] pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#c5a059] pointer-events-none" />
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#c5a059]/40 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#c5a059]/40 pointer-events-none" />

          {/* Top Quick Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5 sm:mb-6 border-b border-white/10 pb-3.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#161616] border border-[#c5a059]/30 text-xs font-semibold text-[#f5e2b3]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              <span>کارتی فەرمی پارێزەر</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSaveContact}
                id="hero-save-vcard-btn"
                title="تۆمارکردنی ژمارە لە مۆبایل"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161616] hover:bg-[#222222] border border-white/10 hover:border-[#c5a059]/50 text-xs font-medium text-neutral-200 transition-all cursor-pointer"
              >
                <LegalIcon name="Download" className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>تۆمارکردن لە مۆبایل (vCard)</span>
              </button>

              <button
                onClick={onOpenQR}
                id="hero-qr-modal-btn"
                title="کۆدی QR"
                className="p-1.5 rounded-md bg-[#161616] hover:bg-[#222222] border border-white/10 hover:border-[#c5a059]/50 text-neutral-300 hover:text-[#c5a059] transition-all cursor-pointer"
                aria-label="QR Code"
              >
                <LegalIcon name="QrCode" className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left/Main Column: Identity & Contact CTAs */}
            <div className="lg:col-span-8 text-right space-y-4 sm:space-y-5">
              
              {/* Name & Title */}
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#c5a059] font-bold mb-1.5 tracking-wider uppercase">
                  <LegalIcon name="Scale" className="w-3.5 h-3.5" />
                  <span>پارێزەری ڕاوێژکار</span>
                </div>
                <h1
                  id="lawyer-hero-name"
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight legal-serif"
                >
                  {LAWYER_DATA.name}
                </h1>
                <div className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
                  {LAWYER_DATA.nameEn} • {LAWYER_DATA.title}
                </div>
              </div>

              {/* Headline */}
              <div className="p-4 rounded-xl bg-[#121212] border-r-2 border-r-[#c5a059] border-y border-l border-white/5 shadow-inner">
                <p className="text-base sm:text-xl font-bold text-[#f5e2b3] leading-relaxed legal-serif">
                  "{LAWYER_DATA.headline}"
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1.5 font-normal leading-relaxed">
                  {LAWYER_DATA.supportingText}
                </p>
              </div>

              {/* Primary Contact Action Grid */}
              <div className="pt-1">
                <div className="text-[11px] font-semibold text-neutral-400 mb-2.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ڕێگاکانی پەیوەندیکردنی ڕاستەوخۆ:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {/* Phone Call */}
                  <a
                    href={`tel:${LAWYER_DATA.phoneRaw}`}
                    id="hero-phone-btn"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#141414] hover:bg-[#1a1a1a] border border-[#c5a059]/30 hover:border-[#c5a059] shadow-sm text-white font-bold transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] group-hover:scale-105 transition-transform">
                        <LegalIcon name="Phone" className="w-4 h-4" />
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-neutral-400 font-normal">پەیوەندی بە تەلەفۆن</div>
                        <div className="text-xs sm:text-sm text-[#f5e2b3] font-bold dir-ltr font-mono">
                          {LAWYER_DATA.phone}
                        </div>
                      </div>
                    </div>
                    <LegalIcon name="ChevronLeft" className="w-3.5 h-3.5 text-[#c5a059] group-hover:-translate-x-0.5 transition-transform" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${LAWYER_DATA.whatsappRaw.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="hero-whatsapp-btn"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0c1f16] hover:bg-[#112a1e] border border-emerald-500/35 hover:border-emerald-400 shadow-sm text-white font-bold transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                        <LegalIcon name="MessageCircle" className="w-4 h-4" />
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-emerald-300 font-normal">پەیوەندی لە WhatsApp</div>
                        <div className="text-xs sm:text-sm text-white font-bold dir-ltr font-mono">
                          {LAWYER_DATA.whatsapp}
                        </div>
                      </div>
                    </div>
                    <LegalIcon name="ArrowUpRight" className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Facebook */}
                  <a
                    href={LAWYER_DATA.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="hero-facebook-btn"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0e1828] hover:bg-[#14233a] border border-blue-600/30 hover:border-blue-500 shadow-sm text-white font-medium transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                        <LegalIcon name="Share2" className="w-4 h-4" />
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-blue-300">پەڕەی فەرمی لە</div>
                        <div className="text-xs sm:text-sm text-white font-bold">Facebook</div>
                      </div>
                    </div>
                    <LegalIcon name="ExternalLink" className="w-3.5 h-3.5 text-blue-400" />
                  </a>

                  {/* View Services Button */}
                  <a
                    href="#services"
                    id="hero-services-btn"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#c5a059] hover:bg-[#e0bc75] text-black font-bold shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center text-black">
                        <LegalIcon name="ScrollText" className="w-4 h-4" />
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-neutral-900 font-medium">سەرجەم بەشەکان</div>
                        <div className="text-xs sm:text-sm font-black">خزمەتگوزارییەکان ببینە</div>
                      </div>
                    </div>
                    <LegalIcon name="ChevronLeft" className="w-4 h-4 text-black group-hover:-translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: High Density Emblem & Badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-xs rounded-xl bg-[#111111] border border-[#c5a059]/30 p-5 text-center shadow-lg">
                
                {/* Scale of Justice Graphic Emblem */}
                <div className="relative mx-auto w-24 h-24 mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#c5a059]/10 animate-pulse" />
                  <div className="w-20 h-20 rounded-full bg-[#0d0d0d] border border-[#c5a059] flex items-center justify-center shadow-inner">
                    <LegalIcon name="Scale" className="w-10 h-10 text-[#c5a059]" />
                  </div>
                  <div className="absolute -bottom-1 bg-[#c5a059] text-black text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                    یاسا و داد
                  </div>
                </div>

                <h2 className="text-lg font-bold text-white legal-serif">
                  حوسێن محەمەد
                </h2>
                <p className="text-[11px] text-[#c5a059] mt-0.5 font-semibold">
                  پارێزەری بریکار و ڕاوێژکاری یاسایی
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 text-right text-xs text-neutral-300">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 text-[11px]">پەیوەندی خێرا:</span>
                    <span className="font-mono text-[#f5e2b3] font-bold text-[11px]">07508188696</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 text-[11px]">حاڵەت:</span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      ئامادەی خزمەت
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    onClick={onOpenQR}
                    className="w-full py-2 px-3 rounded-lg bg-[#161616] hover:bg-[#202020] border border-white/10 text-xs font-semibold text-[#f5e2b3] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <LegalIcon name="QrCode" className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>پیشاندانی کۆدی QR ی کارتەکە</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
