import React, { useEffect } from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';
import { pricingData, fmt } from '../mock/mock';
import { useUI } from '../context/UIContext';

const PricingModal = ({ serviceId, onClose }) => {
  const data = pricingData[serviceId];
  const { openContact } = useUI();

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!data) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-8 overflow-y-auto" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-[#0e0e10] border border-white/10 rounded-2xl max-w-[1100px] w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-zinc-300 transition"
        >
          <X size={16} />
        </button>

        <div className="p-6 sm:p-10 border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-[12px] font-medium mb-4">
            <Sparkles size={12} /> {data.tagline}
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold tracking-tight text-white">
            {data.title} <span className="text-zinc-500">plans &amp; pricing</span>
          </h2>
          <p className="mt-3 text-zinc-400 max-w-[640px]">{data.subtitle}</p>
          <p className="mt-2 text-[13px] text-zinc-500">Transparent, project-based pricing. No hidden fees. All prices in INR.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-6 sm:p-10">
          {data.plans.map((plan) => (
            <div key={plan.name} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              <div className="flex items-center justify-between mb-3">
                {plan.badge && <span className="badge-soft">{plan.badge}</span>}
                {plan.popular && <span className="badge-soft">Most Popular</span>}
              </div>
              <h3 className="text-[22px] font-bold text-white">{plan.name}</h3>
              <p className="mt-1.5 text-[13px] text-zinc-400 min-h-[36px]">{plan.desc}</p>
              <div className="mt-5 flex items-baseline gap-2">
                {plan.original && (
                  <span className="text-zinc-600 line-through text-[16px]">{fmt(plan.original)}</span>
                )}
                <span className="text-[34px] font-extrabold text-white tracking-tight">{fmt(plan.price)}</span>
              </div>
              <span className="text-[12px] text-zinc-500">one-time · incl. GST</span>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-zinc-300">
                    <Check size={15} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openContact({ service: data.title, plan: plan.name, price: plan.price })}
                className={plan.popular ? 'btn-primary mt-7 justify-center' : 'btn-ghost mt-7 justify-center'}
              >
                Get Started <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>

        <div className="px-6 sm:px-10 pb-8 text-center">
          <p className="text-[13px] text-zinc-500">
            Final pricing is confirmed after a free 30-minute strategy session.{' '}
            <button onClick={() => openContact({ service: data.title })} className="text-red-300 hover:text-red-200 underline-offset-2 hover:underline">
              Book a session →
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
