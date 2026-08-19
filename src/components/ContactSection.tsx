import { LAWYER_DATA } from '../data/lawyerData';
import { LegalIcon } from './LegalIcon';

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#080808] relative overflow-hidden border-t border-white/5">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#c5a059]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#161616] border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] mb-2.5">
            <LegalIcon name="Phone" className="w-3.5 h-3.5" />
            <span>پەیوەندی و ناونیشان</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight legal-serif">
            پەیوەندیم پێوە بکە
          </h2>
          <div className="w-12 h-[2px] bg-[#c5a059] mx-auto mt-3" />
          <p className="mt-4 text-sm sm:text-base text-neutral-300">
            بۆ هەر پرس، ڕاوێژ و دۆسیەیەکی یاسایی، دەتوانیت لە ڕێگەی ئەم هۆکارانەوە ڕاستەوخۆ پەیوەندیم پێوە بکەیت
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Phone Card */}
          <a
            href={`tel:${LAWYER_DATA.phoneRaw}`}
            id="contact-call-card"
            className="flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#111111] hover:bg-[#161616] border border-[#c5a059]/30 hover:border-[#c5a059] transition-all shadow-sm group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] group-hover:scale-105 transition-transform">
                <LegalIcon name="Phone" className="w-5 h-5" />
              </div>
              <div className="text-right">
                <div className="text-[10px] text-neutral-400">ژمارەی مۆبایل</div>
                <div className="text-base font-bold text-white font-mono dir-ltr">
                  {LAWYER_DATA.phone}
                </div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded bg-[#c5a059] text-black text-xs font-bold">
              تەلەفۆن
            </span>
          </a>

          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${LAWYER_DATA.whatsappRaw.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp-card"
            className="flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#0c1f16] hover:bg-[#112a1e] border border-emerald-500/35 hover:border-emerald-400 transition-all shadow-sm group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <LegalIcon name="MessageCircle" className="w-5 h-5" />
              </div>
              <div className="text-right">
                <div className="text-[10px] text-emerald-300">پەیوەندی لە WhatsApp</div>
                <div className="text-base font-bold text-white font-mono dir-ltr">
                  {LAWYER_DATA.whatsapp}
                </div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-500 text-black text-xs font-bold">
              WhatsApp
            </span>
          </a>

          {/* Facebook Card */}
          <a
            href={LAWYER_DATA.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-facebook-card"
            className="flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#0e1828] hover:bg-[#14233a] border border-blue-600/30 hover:border-blue-400 transition-all shadow-sm group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <LegalIcon name="Share2" className="w-5 h-5" />
              </div>
              <div className="text-right">
                <div className="text-[10px] text-blue-300">پەڕەی فەرمی لە تۆڕی کۆمەڵایەتی</div>
                <div className="text-base font-bold text-white">Facebook</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded bg-blue-600 text-white text-xs font-bold">
              سەردان
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}
