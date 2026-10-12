import React from 'react';
import { ArrowRight, CheckCircle2, Globe, LayoutTemplate, Headphones, Store, AppWindow, GraduationCap} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUI } from '../context/UIContext';
import { getStartingPrice } from '../mock/mock';
import { useCurrency } from '../hooks/useCurrency';

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
  const { formatPrice } = useCurrency();

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[900px] h-[900px] rounded-full bg-red-700/12 blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-[1100px] mx-auto px-6 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[13px] text-zinc-300 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          Website Designing & Development Services for Businesses of All Sizes
        </div>

        <h1 className="text-[34px] sm:text-[54px] lg:text-[76px] font-extrabold leading-[1.08] sm:leading-[1.05] tracking-tight">
          Custom Websites Built to Turn
          <br />
          <span className="gradient-text">Visitors Into Customers</span>
        </h1>

        <p className="mt-4 sm:mt-6 max-w-[680px] mx-auto text-[15px] sm:text-[17px] text-zinc-400 leading-relaxed px-2">
          We build high-performance, conversion-focused websites and robust e-commerce platforms for startups, brands, and scaling businesses seeking measurable growth.
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:flex lg:flex-wrap gap-2.5 sm:gap-4 justify-center items-stretch max-w-2xl mx-auto">
          <div className="price-card" onClick={() => openPricing('website')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-500/15 border border-red-500/25 flex items-center justify-center shrink-0">
              <Globe size={16} className="text-red-300 sm:w-[18px] sm:h-[18px]" />
            </div>
            <div className="text-left min-w-0">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-500 truncate">Website</div>
              <div className="text-[16px] sm:text-[20px] font-bold text-white leading-tight">{formatPrice(getStartingPrice('website'))}</div>
              <div className="text-[10px] sm:text-[11px] text-zinc-500 truncate">starting price</div>
            </div>
          </div>
          
          <div className="price-card" onClick={() => openPricing('landing_page')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-500/15 border border-orange-500/25 flex items-center justify-center shrink-0">
              <LayoutTemplate size={16} className="text-orange-300 sm:w-[18px] sm:h-[18px]" />
            </div>
            <div className="text-left min-w-0">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-500 truncate">Landing Page</div>
              <div className="text-[16px] sm:text-[20px] font-bold text-white leading-tight">{formatPrice(getStartingPrice('landing_page'))}</div>
              <div className="text-[10px] sm:text-[11px] text-zinc-500 truncate">starting price</div>
            </div>
          </div>  
          
          <div className="price-card flex" onClick={() => openPricing('ecommerce')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-500/15 border border-green-500/25 flex items-center justify-center shrink-0">
              <Store size={16} className="text-green-300 sm:w-[18px] sm:h-[18px]" />
            </div>
            <div className="text-left min-w-0">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-500 truncate">E-Commerce</div>
              <div className="text-[16px] sm:text-[20px] font-bold text-white leading-tight">{formatPrice(getStartingPrice('ecommerce'))}</div>
              <div className="text-[10px] sm:text-[11px] text-zinc-500 truncate">starting price</div>
            </div>
          </div>

          <div className="price-card flex" onClick={() => openPricing('lms')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0">
              <GraduationCap size={16} className="text-indigo-300 sm:w-[18px] sm:h-[18px]" />
            </div>
            <div className="text-left min-w-0">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-500 truncate">LMS System</div>
              <div className="text-[16px] sm:text-[20px] font-bold text-white leading-tight">{formatPrice(getStartingPrice('lms'))}</div>
              <div className="text-[10px] sm:text-[11px] text-zinc-500 truncate">starting price</div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3 justify-center px-1">
          {heroPills.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="pill hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5 cursor-default">
                <Icon size={13} className={p.color} />
                <span className="truncate">{p.label}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center w-full max-w-xs sm:max-w-none mx-auto">
          <button onClick={() => openContact()} className="btn-primary hero-cta-btn justify-center w-full sm:w-auto">
            <span>Get a Project Quote</span>
            <span className="hero-cta-arrow">
              <ArrowRight size={15} />
            </span>
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('featured-work');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else navigate('/portfolio');
            }} 
            className="btn-ghost justify-center w-full sm:w-auto"
          >
            See Our Work
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


