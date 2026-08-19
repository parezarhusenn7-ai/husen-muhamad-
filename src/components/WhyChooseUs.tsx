import { WHY_CHOOSE_US, LAWYER_DATA } from '../data/lawyerData';
import { LegalIcon } from './LegalIcon';

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-12 sm:py-16 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#161616] border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059] mb-2.5">
            <LegalIcon name="Award" className="w-3.5 h-3.5" />
            <span>بەها و تایبەتمەندییەکان</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight legal-serif">
            بۆچی {LAWYER_DATA.name}؟
          </h2>
          <div className="w-12 h-[2px] bg-[#c5a059] mx-auto mt-3" />
          <p className="mt-4 text-sm sm:text-base text-neutral-300">
            پابەندبوونمان بە یاسا و مافی بریکار هۆکاری سەرەکی متمانەی بەردەواممانە
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="relative rounded-xl bg-[#111111] border border-white/10 hover:border-[#c5a059]/50 p-5 flex flex-col justify-between transition-all duration-200 shadow-sm group"
            >
              {/* Top Index & Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#161616] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] group-hover:scale-105 group-hover:border-[#c5a059] transition-all">
                    <LegalIcon name={item.iconName} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400 bg-[#0d0d0d] px-2 py-0.5 rounded border border-white/10">
                    ٠{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#f5e2b3] transition-colors legal-serif">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#c5a059]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                <span className="font-semibold text-[11px]">ئەرکی سەرەکیمان</span>
              </div>
            </div>
          ))}
        </div>

        {/* Law Quote Card */}
        <div className="mt-8 text-center max-w-2xl mx-auto p-4 sm:p-5 rounded-xl bg-[#111111] border border-white/10 shadow-inner">
          <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed italic">
            «دادپەروەری و سەروەری یاسا، پایەی سەرەکی پاراستنی مافی هەموو تاکێکە لە کۆمەڵگەدا.»
          </p>
        </div>

      </div>
    </section>
  );
}
