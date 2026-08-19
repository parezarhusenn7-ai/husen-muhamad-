import { LAWYER_DATA } from '../data/lawyerData';
import { LegalIcon } from './LegalIcon';

export function FloatingActions() {
  return (
    <div
      id="floating-mobile-actions"
      className="fixed bottom-3 left-3 right-3 z-40 sm:hidden flex items-center justify-between gap-2 p-1.5 rounded-xl bg-[#0a0a0a]/95 backdrop-blur-md border border-[#c5a059]/40 shadow-xl shadow-black/90"
    >
      {/* Direct Phone Call Button */}
      <a
        href={`tel:${LAWYER_DATA.phoneRaw}`}
        id="floating-phone-btn"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#141414] border border-[#c5a059]/50 text-white font-bold text-xs shadow-sm active:scale-95 transition-all"
      >
        <div className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#c5a059]">
          <LegalIcon name="Phone" className="w-3 h-3" />
        </div>
        <span>پەیوەندی تەلەفۆن</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${LAWYER_DATA.whatsappRaw.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 border border-emerald-500/60 text-white font-bold text-xs shadow-sm active:scale-95 transition-all"
      >
        <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center text-emerald-100">
          <LegalIcon name="MessageCircle" className="w-3 h-3" />
        </div>
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
