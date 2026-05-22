import React from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../mock/mock';
import { Smartphone, Globe, TrendingUp, BarChart3, Sparkles, Cloud, ArrowUpRight } from 'lucide-react';
import { useUI } from '../context/UIContext';

const iconMap = {
  'smartphone': Smartphone, 'globe': Globe, 'trending-up': TrendingUp,
  'bar-chart-3': BarChart3, 'sparkles': Sparkles, 'cloud': Cloud,
};

// map home service ids -> pricing modal keys
const pricingMap = {
  'mobile-app': 'mobile-app', 'website': 'website', 'ai': 'ai',
  'marketing': 'automation', 'sales': 'automation', 'cloud': null,
};

const Services = () => {
  const navigate = useNavigate();
  const { openPricing, openContact } = useUI();

  const handleClick = (id) => {
    const key = pricingMap[id];
    if (key) openPricing(key); else openContact();
  };

  return (
    <section className="relative py-20 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-[720px] mb-10">
          <p className="eyebrow mb-4">What We Deliver</p>
          <h2 className="text-[34px] sm:text-[44px] font-extrabold leading-[1.06] tracking-tight">
            Everything you need,
            <br />
            <span className="text-zinc-500">nothing you don't</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-[16px] max-w-[560px]">
            Full-stack software services — mobile, web, automation, and AI — under one roof. Click a card to view example plans or start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Sparkles;
            return (
              <div key={s.id} onClick={() => handleClick(s.id)} className="svc-card rounded-2xl p-6 lg:p-8 group cursor-pointer hover:shadow-lg transition-transform transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="icon-tile group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-colors">
                    <Icon size={18} className="text-zinc-300 group-hover:text-red-300 transition-colors" />
                  </div>
                  <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-red-300 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <h3 className="text-[18px] sm:text-[19px] font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-[15px] text-zinc-400 leading-relaxed">{s.desc}</p>
                <div className="mt-6">
                  <button className="text-sm inline-flex items-center gap-2 text-red-300 hover:text-red-400">View pricing <ArrowUpRight size={14} /></button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Book a Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
