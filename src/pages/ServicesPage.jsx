import React, { useEffect } from 'react';
import { ArrowRight, Briefcase, CheckCircle2, Globe, Star, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import LogoCarousel from '../components/LogoCarousel';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Industries from '../components/Industries';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { BRAND, fmt } from '../mock/mock';
import { useUI } from '../context/UIContext';

const heroPills = [
  { icon: CheckCircle2, color: 'text-emerald-400', label: 'Fast websites with SEO built in' },
  { icon: TrendingUp, color: 'text-red-400', label: 'Plans that scale from startup to enterprise' },
  { icon: Star, color: 'text-amber-400 fill-amber-400', label: 'Transparent pricing in INR' },
  { icon: Briefcase, color: 'text-sky-400', label: 'Strategy, build, and support in one place' },
];

export default function ServicesPage() {
  const { openPricing, openContact } = useUI();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden">
      <SEO
        title="Services — SiteRadiant"
        description="SiteRadiant builds SEO-ready websites, mobile apps, AI systems, and automation workflows for growing businesses."
        path="/services"
      />
      <Navbar />

      <header className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[900px] h-[900px] rounded-full bg-red-700/12 blur-[120px] pointer-events-none" />

        <div className="relative max-w-[1100px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[13px] text-zinc-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Services · Pricing · Strategy for {BRAND}
          </div>

          <h1 className="text-[44px] sm:text-[58px] lg:text-[76px] font-extrabold leading-[1.05] tracking-tight">
            Explore services that
            <br />
            <span className="gradient-text">move your business forward</span>
          </h1>

          <p className="mt-6 max-w-[680px] mx-auto text-[16px] sm:text-[17px] text-zinc-400 leading-relaxed">
            From mobile apps and websites to AI and automation, {BRAND} builds the systems, products, and launch plans that help growing businesses scale with clarity.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="price-card" onClick={() => openPricing('website')}>
              <div className="w-10 h-10 rounded-lg bg-red-500/15 border border-red-500/25 flex items-center justify-center">
                <Globe size={18} className="text-red-300" />
              </div>
              <div className="text-left">
                <div className="text-[11px] uppercase tracking-wider text-zinc-500">Website</div>
                <div className="text-[20px] font-bold text-white leading-tight">{fmt(24999)}</div>
                <div className="text-[11px] text-zinc-500">starting price</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {heroPills.map((pill, index) => {
              const Icon = pill.icon;
              return (
                <div key={index} className="pill">
                  <Icon size={14} className={pill.color} />
                  {pill.label}
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
            <button onClick={() => window.scrollTo({ top: 760, behavior: 'smooth' })} className="btn-ghost">
              Explore Services
            </button>
          </div>
        </div>
      </header>

      <LogoCarousel />
      <Services />
      <Stats />
      <Industries />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
