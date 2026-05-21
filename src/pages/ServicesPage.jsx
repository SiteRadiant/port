import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { serviceCategories } from '../mock/mock';
import { ShoppingCart, Users, Heart, Gamepad2, Rocket, Building, Globe, Smartphone, Sparkles, Zap } from 'lucide-react';
import { useUI } from '../context/UIContext';

const iconMap = {
  'shopping-cart': ShoppingCart,
  'users': Users,
  'heart': Heart,
  'gamepad-2': Gamepad2,
  'rocket': Rocket,
  'building-2': Building,
  'globe': Globe,
  'smartphone': Smartphone,
  'sparkles': Sparkles,
  'zap': Zap,
};

export default function ServicesPage() {
  const { openPricing, openContact } = useUI();

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-[900px] mb-12">
          <p className="eyebrow mb-4">12 SERVICES · 3 CATEGORIES</p>
          <h1 className="text-[72px] leading-tight font-extrabold tracking-tight">Everything <span className="gradient-text">we build</span></h1>
          <p className="mt-6 text-zinc-400 text-[17px] max-w-[760px]">From mobile apps to AI-powered platforms — explore our full capabilities and click any service to see plans and pricing in INR.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="pill">Mobile</span>
            <span className="pill">Web</span>
            <span className="pill">AI</span>
            <span className="pill">Automation</span>
            <span className="pill">E-commerce</span>
            <span className="pill">Gaming</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((cat, idx) => (
            <section key={cat.title} className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="text-zinc-700 font-extrabold text-[48px]">{cat.num || String(idx+1).padStart(2,'0')}</div>
                  <div>
                    <div className="text-zinc-400 text-sm tracking-widest uppercase">{cat.title}</div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">{cat.sub}</h2>
                  </div>
                </div>
                <div className="text-zinc-500 text-sm">{cat.count}</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.items.map((it) => {
                  const iconSrc = `/icons/${it.icon}.svg`;
                  return (
                    <article key={it.id} onClick={() => openPricing(it.id)} className="svc-card group rounded-2xl p-10 cursor-pointer hover:shadow-lg transition">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-6">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0f0f10] to-[#070707] border border-white/6 flex items-center justify-center">
                            <img src={iconSrc} alt={it.title} className="w-7 h-7" />
                          </div>
                          <div>
                            <h3 className="text-xl font-extrabold mt-0">{it.title}</h3>
                            <div className="text-zinc-500 text-xs mt-1 max-w-[320px]">{it.desc.split('.').slice(0,1).join('.')}</div>
                          </div>
                        </div>
                        <div className="text-zinc-500 text-xs uppercase tracking-widest">{it.tagline}</div>
                      </div>

                      <p className="mt-6 text-zinc-400">{it.desc}</p>

                      <div className="mt-6 flex items-center gap-4 text-sm">
                        <button onClick={(e) => { e.stopPropagation(); openPricing(it.id); }} className="text-red-300 hover:underline flex items-center gap-2">View pricing <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block"><path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
                        <span className="text-zinc-600">•</span>
                        <button onClick={(e) => { e.stopPropagation(); openContact(); }} className="text-zinc-400 hover:underline">Enquire</button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
