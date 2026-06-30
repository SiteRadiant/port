import React from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../mock/mock';
import { Smartphone, Globe, TrendingUp, BarChart3, Sparkles, Cloud, ArrowUpRight, LayoutTemplate } from 'lucide-react';
import { useUI } from '../context/UIContext';

const iconMap = {
  'smartphone': Smartphone, 'globe': Globe, 'trending-up': TrendingUp,
  'bar-chart-3': BarChart3, 'sparkles': Sparkles, 'cloud': Cloud, 'layout-template': LayoutTemplate,
};

// map home service ids -> pricing modal keys
const pricingMap = {
  'website': 'website', 'ai': 'ai', 'landing_page': 'landing_page',
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
    <section className="relative py-24 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-14">
          <p className="eyebrow mb-4">What We Deliver</p>
          <h2 className="text-[40px] sm:text-[52px] font-extrabold leading-[1.08] tracking-tight">
            Everything you need,<br />
            <span className="text-zinc-500">nothing you don't</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-[16px] max-w-[480px]">
            Full-stack IT services — website, automation, and AI — under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Sparkles;
            return (
              <div key={s.id} onClick={() => handleClick(s.id)} className="svc-card rounded-2xl p-6 group cursor-pointer">
                <div className="flex items-start justify-between mb-10">
                  <div className="icon-tile group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-colors">
                    <Icon size={18} className="text-zinc-300 group-hover:text-red-300 transition-colors" />
                  </div>
                  <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-red-300 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <h3 className="text-[17px] font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed">{s.desc}</p>
                <div className="mt-6 text-[13px] text-red-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  View pricing →
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => navigate('/services')} className="btn-ghost">
            View all services & pricing <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
