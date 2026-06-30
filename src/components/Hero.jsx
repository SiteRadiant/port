import React from 'react';
import { ArrowRight, CheckCircle2, Globe, LayoutTemplate, Headphones, Store, AppWindow} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUI } from '../context/UIContext';
import { BRAND, fmt, getStartingPrice } from '../mock/mock';

const heroPills = [
  { icon: CheckCircle2, color: 'text-emerald-400', label: 'Website launched in 2 weeks' },
  { icon: LayoutTemplate, color: 'text-orange-400', label: 'Landing page built in 1 week' },
  { icon: Globe, color: 'text-sky-400', label: 'Global reach with SEO-ready sites' },
  { icon: AppWindow, color: 'text-emerald-400', label: 'Custom web apps in 3 weeks' },
  { icon: Store, color: 'text-green-400', label: 'E-commerce stores with multi-currency support' },
  { icon: Headphones, color: 'text-purple-400', label: 'Customer support' }
];

const Hero = () => {
  const navigate = useNavigate();
  const { openPricing, openContact } = useUI();

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[900px] h-[900px] rounded-full bg-red-700/12 blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[13px] text-zinc-300 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          Website Designing & Development Services for Businesses of All Sizes
        </div>

        <h1 className="text-[44px] sm:text-[58px] lg:text-[76px] font-extrabold leading-[1.05] tracking-tight">
          Build software that
          <br />
          <span className="gradient-text">grows your business</span>
        </h1>

        <p className="mt-6 max-w-[640px] mx-auto text-[16px] sm:text-[17px] text-zinc-400 leading-relaxed">
          From Websites to AI-powered automation — {BRAND} partners with businesses to build, launch, and scale software that delivers real results.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="price-card" onClick={() => openPricing('website')}>
            <div className="w-10 h-10 rounded-lg bg-red-500/15 border border-red-500/25 flex items-center justify-center">
              <Globe size={18} className="text-red-300" />
            </div>
            <div className="text-left">
              <div className="text-[11px] uppercase tracking-wider text-zinc-500">Website</div>
              <div className="text-[20px] font-bold text-white leading-tight">{fmt(getStartingPrice('website'))}</div>
              <div className="text-[11px] text-zinc-500">starting price</div>
            </div>
          </div>
          
          <div className="price-card" onClick={() => openPricing('landing_page')}>
            <div className="w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/25 flex items-center justify-center">
              <LayoutTemplate size={18} className="text-orange-300" />
            </div>
            <div className="text-left">
              <div className="text-[11px] uppercase tracking-wider text-zinc-500">Landing Page</div>
              <div className="text-[20px] font-bold text-white leading-tight">{fmt(getStartingPrice('landing_page'))}</div>
              <div className="text-[11px] text-zinc-500">starting price</div>
            </div>
          </div>  
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {heroPills.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="pill">
                <Icon size={14} className={p.color} />
                {p.label}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button onClick={() => openContact()} className="btn-primary hero-cta-btn">
            <span>Book a Consultation</span>
            <span className="hero-cta-arrow">
              <ArrowRight size={15} />
            </span>
          </button>
          <button onClick={() => navigate('/services')} className="btn-ghost">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


