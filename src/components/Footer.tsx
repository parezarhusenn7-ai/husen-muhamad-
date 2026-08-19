import { LAWYER_DATA } from '../data/lawyerData';
import { LegalIcon } from './LegalIcon';

interface FooterProps {
  onOpenQR: () => void;
}

export function Footer({ onOpenQR }: FooterProps) {
  return (
    <footer className="bg-[#050505] border-t border-white/5 text-neutral-400 py-10 pb-20 sm:pb-10 text-right relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-white/5">
          
          {/* Brand & Identity (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#161616] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                <LegalIcon name="Scale" className="w-4 h-4" />
              </div>
              <div>
                <div className="text-base font-bold text-white legal-serif">
                  {LAWYER_DATA.name}
                </div>
                <div className="text-[11px] text-[#c5a059] font-semibold">
                  {LAWYER_DATA.title}
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              پێشکەشکردنی ڕاوێژ و خزمەتگوزارییە یاساییەکان بە شێوەیەکی پیشەیی، ورد و متمانەپێکراو لە هەرێمی کوردستان.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={`https://wa.me/${LAWYER_DATA.whatsappRaw.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#111111] hover:bg-[#161616] border border-white/10 hover:border-emerald-500/50 flex items-center justify-center text-neutral-300 hover:text-emerald-400 transition-all"
                aria-label="WhatsApp"
              >
                <LegalIcon name="MessageCircle" className="w-3.5 h-3.5" />
              </a>

              <a
                href={LAWYER_DATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#111111] hover:bg-[#161616] border border-white/10 hover:border-blue-500/50 flex items-center justify-center text-neutral-300 hover:text-blue-400 transition-all"
                aria-label="Facebook"
              >
                <LegalIcon name="Share2" className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenQR}
                className="w-8 h-8 rounded-lg bg-[#111111] hover:bg-[#161616] border border-white/10 hover:border-[#c5a059]/50 flex items-center justify-center text-neutral-300 hover:text-[#c5a059] transition-all cursor-pointer"
                aria-label="QR Code"
              >
                <LegalIcon name="QrCode" className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              بەشە سەرەکییەکان
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-300">
              <li>
                <a href="#hero" className="hover:text-[#c5a059] transition-colors">
                  سەرەتا
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#c5a059] transition-colors">
                  دەربارەی پارێزەر
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c5a059] transition-colors">
                  خزمەتگوزارییەکان
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#c5a059] transition-colors">
                  بۆچی حوسێن محەمەد؟
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#c5a059] transition-colors">
                  پەیوەندی
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              زانیاری پەیوەندی
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <LegalIcon name="Phone" className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <a href={`tel:${LAWYER_DATA.phoneRaw}`} className="hover:text-[#c5a059] font-mono dir-ltr">
                  {LAWYER_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <LegalIcon name="MessageCircle" className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${LAWYER_DATA.whatsappRaw.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-mono dir-ltr"
                >
                  {LAWYER_DATA.whatsapp}
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400">
          <div>
            © ٢٠٢٦ هەموو مافەکان پارێزراون بۆ <span className="text-[#f5e2b3] font-semibold">{LAWYER_DATA.name}</span>.
          </div>
          <div className="text-[11px] text-neutral-400">
            کارتی دیجیتاڵی یاسایی • هەولێر – کوردستان
          </div>
        </div>

      </div>
    </footer>
  );
}
