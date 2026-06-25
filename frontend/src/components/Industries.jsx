import React from 'react';
import { useNavigate } from 'react-router-dom';
import { industries } from '../mock/mock';
import { ShoppingCart, Users, Heart, Gamepad2, Sparkles, ArrowRight } from 'lucide-react';
import { useUI } from '../context/UIContext';

const iconMap = { 'shopping-cart': ShoppingCart, 'users': Users, 'heart': Heart, 'gamepad-2': Gamepad2, 'sparkles': Sparkles };
const colorMap = {
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/25', text: 'text-orange-400' },
  red: { bg: 'bg-red-500/10', border: 'border-red-500/25', text: 'text-red-400' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/25', text: 'text-pink-400' },
  green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', text: 'text-emerald-400' },
  blue: { bg: 'bg-sky-500/10', border: 'border-sky-500/25', text: 'text-sky-400' },
};

const slugMap = { 'E-Commerce': 'ecommerce', 'Social Media': 'social', 'Gaming': 'gaming', 'Other': null };

const Industries = () => {
  const navigate = useNavigate();
  const { openPricing, openContact } = useUI();

  const handle = (title) => {
    const slug = slugMap[title];
    if (slug) openPricing(slug); else openContact();
  };

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-14">
          <p className="eyebrow mb-4">Industries</p>
          <h2 className="text-[40px] sm:text-[52px] font-extrabold leading-[1.08] tracking-tight">
            We know your market
          </h2>
          <p className="mt-5 text-zinc-400 text-[16px]">
            Pre-built patterns for the most competitive digital segments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon];
            const c = colorMap[ind.color];
            return (
              <div key={ind.title} onClick={() => handle(ind.title)} className="industry-card cursor-pointer group">
                <div className={`w-10 h-10 rounded-lg ${c.bg} ${c.border} border flex items-center justify-center mb-6`}>
                  <Icon size={18} className={c.text} />
                </div>
                <h3 className="text-[16px] font-semibold text-white mb-2">{ind.title}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">{ind.desc}</p>
                <ArrowRight size={14} className="text-zinc-600 mt-4 group-hover:text-red-300 group-hover:translate-x-1 transition-all" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
