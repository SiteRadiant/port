import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUI } from '../context/UIContext';

const CTA = () => {
  const navigate = useNavigate();
  const { openContact } = useUI();
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-red-700/12 blur-[120px] pointer-events-none" />
      <div className="relative max-w-[860px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-[30px] sm:text-[46px] lg:text-[60px] font-extrabold leading-[1.08] sm:leading-[1.05] tracking-tight">
          Let's build something<br />
          <span className="gradient-text">people will love</span>
        </h2>
        <p className="mt-4 sm:mt-6 max-w-[520px] mx-auto text-zinc-400 text-[14px] sm:text-[16px] leading-relaxed">
          30-minute strategy session. We analyse your business, recommend the right tech, and hand you a clear quote.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center w-full max-w-xs sm:max-w-none mx-auto">
          <button onClick={() => openContact()} className="btn-primary w-full sm:w-auto justify-center min-h-[46px]">
            Book a Strategy Session <ArrowRight size={16} />
          </button>
          <button onClick={() => navigate('/services')} className="btn-ghost w-full sm:w-auto justify-center min-h-[46px]">
            View Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
