import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { useUI } from '../context/UIContext';

const FAB = () => {
  const { openContact } = useUI();

  return (
    <>
      {/* Tablet & Desktop: Floating Action Button */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-[90]">
        <div className="relative group">
          <div className="absolute -inset-2 bg-red-500 rounded-full blur-md opacity-20 group-hover:opacity-60 transition duration-500 animate-pulse" />
          <button
            onClick={() => openContact()}
            className="relative flex items-center justify-center w-14 h-14 bg-red-500 hover:bg-red-400 text-white rounded-full shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Contact Us"
          >
            <MessageCircle size={24} />
          </button>
        </div>
      </div>

      {/* Mobile (<640px): Sticky Bottom Conversion Dock */}
      <div className="block sm:hidden fixed bottom-0 left-0 right-0 z-[90] p-3 bg-[#0a0a0b]/90 backdrop-blur-lg border-t border-white/10 shadow-[0_-8px_24px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <a
            href="https://wa.me/917208999095?text=Hi%20SiteRadiant%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-h-[46px] px-3 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-semibold text-[13px] flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <MessageCircle size={16} className="text-emerald-400 shrink-0" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => openContact()}
            className="flex-[1.4] min-h-[46px] px-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold text-[13px] flex items-center justify-center gap-1.5 shadow-md shadow-red-500/25 active:scale-95 transition-transform"
          >
            <Sparkles size={15} className="shrink-0" />
            <span>Get Free Quote</span>
          </button>

          <a
            href="tel:+917208999095"
            aria-label="Call SiteRadiant"
            className="w-[46px] h-[46px] rounded-full bg-white/5 border border-white/10 text-zinc-300 flex items-center justify-center active:scale-95 transition-transform shrink-0"
          >
            <Phone size={16} />
          </a>
        </div>
      </div>
    </>
  );
};

export default FAB;

