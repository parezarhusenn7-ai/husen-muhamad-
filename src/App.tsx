import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { QRCodeModal } from './components/QRCodeModal';

export default function App() {
  const [isQROpen, setIsQROpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-[#c5a059] selection:text-black font-sans antialiased overflow-x-hidden density-grid-bg">
      {/* Sticky Header Navigation */}
      <Navbar onOpenQR={() => setIsQROpen(true)} />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero onOpenQR={() => setIsQROpen(true)} />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenQR={() => setIsQROpen(true)} />

      {/* Mobile Sticky Floating CTA Bar */}
      <FloatingActions />

      {/* Digital Business Card QR Modal */}
      <QRCodeModal isOpen={isQROpen} onClose={() => setIsQROpen(false)} />
    </div>
  );
}
