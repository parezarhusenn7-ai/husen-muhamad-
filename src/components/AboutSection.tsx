import { ABOUT_PILLARS, LAWYER_DATA } from '../data/lawyerData';
import { LegalIcon } from './LegalIcon';

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#161616] border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] mb-2.5">
            <LegalIcon name="ShieldCheck" className="w-3.5 h-3.5" />
            <span>ناساندن و کارامەیی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight legal-serif">
            دەربارەی پارێزەر
          </h2>
          <div className="w-12 h-[2px] bg-[#c5a059] mx-auto mt-3" />
          <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
            <span className="font-bold text-[#f5e2b3]">{LAWYER_DATA.name}</span>، پارێزەر لە هەرێمی کوردستان، کاردەکات بۆ داکۆکیکردن لە مافە یاساییەکان و ڕێنماییکردنی هاوڵاتییان و خاوەنکاران بە پێی یاسا بەرکارەکان. ئامانجمان پێشکەشکردنی خزمەتگوزارییەکی یاسایی ڕاستگۆیانە، خێرا و وردە کە پارێزگاری لە تەواوی بەرژەوەندییە یاساییەکانت بکات.
          </p>
        </div>

        {/* 4 Pillars Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {ABOUT_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="card-luxury rounded-xl p-5 relative flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] mb-4 group-hover:border-[#c5a059] transition-all">
                  <LegalIcon name={pillar.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#f5e2b3] transition-colors legal-serif">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#c5a059] font-semibold">
                <span>بەدواداچوونی ورد</span>
                <LegalIcon name="CheckCircle2" className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Statement Card */}
        <div className="mt-8 rounded-xl bg-[#121212] border border-[#c5a059]/25 p-5 sm:p-6 text-center sm:text-right flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#f5e2b3]">
              <LegalIcon name="Scale" className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>متمانە و پابەندبوونی پیشەیی</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              هەموو پرس و دۆسیەیەکی یاسایی بەوپەڕی گرنگیپێدان، وردبینی و ڕێزگرتن لە نهێنی بریکار ڕایی دەکرێت.
            </p>
          </div>

          <a
            href={`https://wa.me/${LAWYER_DATA.whatsappRaw.replace('+', '')}?text=${encodeURIComponent('سڵاو، داوای ڕاوێژی یاساییم هەیە')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#e0bc75] text-black font-bold text-xs shadow-sm transition-all whitespace-nowrap"
          >
            <LegalIcon name="MessageCircle" className="w-3.5 h-3.5" />
            <span>داوای ڕاوێژ بکە</span>
          </a>
        </div>

      </div>
    </section>
  );
}
