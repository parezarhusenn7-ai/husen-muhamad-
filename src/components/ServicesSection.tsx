import { useState } from 'react';
import { LEGAL_SERVICES, LAWYER_DATA } from '../data/lawyerData';
import { LegalService } from '../types';
import { LegalIcon } from './LegalIcon';

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<LegalService | null>(null);

  // Group services
  const specializedServices = LEGAL_SERVICES.filter((s) => s.category === 'specialized');
  const standardServices = LEGAL_SERVICES.filter((s) => s.category !== 'specialized');

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#080808] relative border-t border-white/5">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-radial from-[#151515]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#161616] border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] mb-2.5">
            <LegalIcon name="ScrollText" className="w-3.5 h-3.5" />
            <span>تایبەتمەندی و بوارەکان</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight legal-serif">
            خزمەتگوزارییە یاساییەکان
          </h2>
          <div className="w-12 h-[2px] bg-[#c5a059] mx-auto mt-3" />
          <p className="mt-4 text-sm sm:text-base text-neutral-300">
            پێشکەشکردنی چارەسەری یاسایی هەمەلایەنە بۆ هەموو دۆسیە، داواکاری و مامەڵە فەرمییەکان
          </p>
        </div>

        {/* Highlighted / Special Services: تاپو، کارەبا، ڕەگەزنامە */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
            <h3 className="text-base sm:text-lg font-bold text-[#f5e2b3] legal-serif">
              خزمەتگوزارییە دیار و تایبەتەکان
            </h3>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#c5a059]/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {specializedServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="card-featured-gold rounded-xl p-5 relative flex flex-col justify-between cursor-pointer group"
              >
                {/* Gold Highlight Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#1a160d] border border-[#c5a059] flex items-center justify-center text-[#f5e2b3] group-hover:scale-105 transition-transform">
                    <LegalIcon name={service.iconName} className="w-5 h-5 text-[#c5a059]" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#c5a059]/15 border border-[#c5a059]/50 text-[10px] font-bold text-[#f5e2b3]">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-[#f5e2b3] transition-colors legal-serif">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#c5a059]/20 flex items-center justify-between text-xs text-[#c5a059] font-semibold">
                  <span>بینینی زانیاری زیاتر</span>
                  <div className="w-5 h-5 rounded-full bg-[#c5a059]/10 flex items-center justify-center group-hover:bg-[#c5a059] group-hover:text-black transition-colors">
                    <LegalIcon name="ChevronLeft" className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8 Core Legal Services */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-neutral-500" />
            <h3 className="text-base sm:text-lg font-bold text-white legal-serif">
              گشت بوار و خزمەتگوزارییەکان
            </h3>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {standardServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="card-luxury rounded-xl p-4 sm:p-5 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#161616] border border-white/10 flex items-center justify-center text-[#c5a059] mb-3 group-hover:border-[#c5a059]/50 transition-all">
                    <LegalIcon name={service.iconName} className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-[#f5e2b3] transition-colors legal-serif">
                    {service.title}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 group-hover:text-[#c5a059] transition-colors">
                  <span>ڕاوێژ و جێبەجێکردن</span>
                  <LegalIcon name="ChevronLeft" className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-xl bg-[#111111] border border-[#c5a059]/40 p-5 sm:p-6 shadow-2xl shadow-black text-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3.5 left-3.5 p-1.5 rounded-lg bg-[#1a1a1a] text-neutral-300 hover:text-white hover:bg-[#252525] transition-colors cursor-pointer"
              aria-label="داخستن"
            >
              <LegalIcon name="X" className="w-4 h-4" />
            </button>

            {/* Modal Icon & Title */}
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#c5a059]/15 border border-[#c5a059] flex items-center justify-center text-[#c5a059]">
                <LegalIcon name={selectedService.iconName} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white legal-serif">
                  {selectedService.title}
                </h3>
                {selectedService.badge && (
                  <span className="text-[11px] font-semibold text-[#c5a059]">
                    {selectedService.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Full description */}
            <div className="my-4 p-3.5 rounded-lg bg-[#0a0a0a] border border-white/10 text-xs sm:text-sm text-neutral-200 leading-relaxed">
              {selectedService.fullDesc || selectedService.shortDesc}
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <a
                href={`https://wa.me/${LAWYER_DATA.whatsappRaw.replace('+', '')}?text=${encodeURIComponent(`سڵاو پارێزەر حوسێن محەمەد، پرسیارم هەیە دەربارەی خزمەتگوزاری (${selectedService.title})`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-sm transition-all"
              >
                <LegalIcon name="MessageCircle" className="w-4 h-4" />
                <span>ڕاوێژ لە WhatsApp</span>
              </a>

              <a
                href={`tel:${LAWYER_DATA.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] border border-[#c5a059]/40 text-[#f5e2b3] font-bold text-xs transition-all"
              >
                <LegalIcon name="Phone" className="w-4 h-4 text-[#c5a059]" />
                <span>پەیوەندی بە تەلەفۆن</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
