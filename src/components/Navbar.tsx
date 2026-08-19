import { useState, useEffect } from 'react';
import { LAWYER_DATA } from '../data/lawyerData';
import { LegalIcon } from './LegalIcon';

interface NavbarProps {
  onOpenQR: () => void;
}

export function Navbar({ onOpenQR }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'سەرەتا', href: '#hero' },
    { label: 'دەربارەی پارێزەر', href: '#about' },
    { label: 'خزمەتگوزارییەکان', href: '#services' },
    { label: 'بۆچی ئێمە؟', href: '#why-us' },
    { label: 'پەیوەندی', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c5a059]/25 shadow-xl shadow-black/80 py-2.5'
          : 'bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent py-3 sm:py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Lawyer Title */}
          <a
            href="#hero"
            id="nav-logo"
            className="flex items-center gap-3 group text-right focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#141414] border border-[#c5a059]/40 group-hover:border-[#c5a059] transition-all">
              <LegalIcon name="Scale" className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a059] group-hover:scale-105 transition-transform" />
              <div className="absolute -inset-0.5 rounded-lg bg-[#c5a059]/10 blur-sm -z-10 group-hover:bg-[#c5a059]/25 transition-all" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-[#e0bc75] transition-colors legal-serif">
                {LAWYER_DATA.name}
              </div>
              <div className="text-[11px] text-[#c5a059] flex items-center gap-1.5 font-medium">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
                {LAWYER_DATA.title}
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-neutral-300 hover:text-[#c5a059] hover:bg-[#161616] rounded-md transition-all border border-transparent hover:border-[#c5a059]/20"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="#contact"
              id="nav-cta-btn"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-black bg-[#c5a059] hover:bg-[#e0bc75] rounded-lg shadow-sm transition-all"
            >
              <LegalIcon name="Phone" className="w-3.5 h-3.5" />
              <span>پەیوەندیم پێوە بکە</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenQR}
              id="mobile-qr-btn"
              className="p-2 text-neutral-300 hover:text-[#c5a059] bg-[#141414] border border-white/10 rounded-lg"
              aria-label="QR Code"
            >
              <LegalIcon name="QrCode" className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 text-neutral-200 hover:text-[#c5a059] bg-[#141414] border border-[#c5a059]/30 rounded-lg focus:outline-none transition-colors"
              aria-label="کردنەوەی مێنۆ"
            >
              {isMobileMenuOpen ? (
                <LegalIcon name="X" className="w-5 h-5" />
              ) : (
                <LegalIcon name="Menu" className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#0d0d0d] border-b border-[#c5a059]/25 px-4 pt-3 pb-5 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-1 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 text-xs font-semibold text-neutral-200 hover:text-[#c5a059] hover:bg-[#161616] rounded-lg flex items-center justify-between transition-colors border border-transparent hover:border-[#c5a059]/20"
              >
                <span>{link.label}</span>
                <LegalIcon name="ChevronLeft" className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            ))}
          </div>

          <div className="pt-2.5 border-t border-white/10 grid grid-cols-2 gap-2">
            <a
              href={`tel:${LAWYER_DATA.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#161616] border border-[#c5a059]/30 text-white font-medium text-xs hover:bg-[#202020] transition-all"
            >
              <LegalIcon name="Phone" className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>تەلەفۆن</span>
            </a>
            <a
              href={`https://wa.me/${LAWYER_DATA.whatsappRaw.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#0e2219] border border-emerald-500/40 text-emerald-300 font-medium text-xs hover:bg-[#122e22] transition-all"
            >
              <LegalIcon name="MessageCircle" className="w-3.5 h-3.5 text-emerald-400" />
              <span>واتسئەپ</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
